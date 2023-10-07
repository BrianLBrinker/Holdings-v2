import { Component, OnInit } from '@angular/core';
import { delay, Observable, Observer, of, switchMap } from 'rxjs';

import { Holding, RawHolding } from '../Holding';

interface Tab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-holdings-list',
  templateUrl: './holdings-list.component.html',
  styleUrls: ['./holdings-list.component.less']
})
export class HoldingsListComponent implements OnInit {
  asyncTabs: Observable<Tab[]>;
  recentHoldings: Holding[] = [];
  archivedHoldings: Holding[] = [];
  dataUrl = '../assets/holdings.json';

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Most recent', content: 'Most recent holdings'},
          {label: 'Archived', content: 'Archived holdings'}
        ]);
      }, 1500 + 1000 * Math.random()); // Simulate async loading of tab info
    });
  }

  ngOnInit(): void {
    this.getHoldings(this.dataUrl);
  }

  getHoldings(dataUrl: string): void {
    /*
    ** GET the raw holdings data and convert some fields to numeric types so that the numbers will sort properly:
    */
    const rawHoldings: Observable<RawHolding[] | unknown> = new Observable(observer => {  
      fetch(dataUrl)
        .then(response => response.json())  
        .then(rawHoldings => {  
          observer.next(rawHoldings);  
          observer.complete();  
        })
        .catch(err => observer.error(err))  
    })
    .pipe(delay(2000 * Math.random()));
    const holdings: Observable<Holding[]> = rawHoldings.pipe(
      switchMap((rawHoldingArray: any) => {
        const holdings: Holding[] = rawHoldingArray.map(
          (rawHolding: RawHolding) => {
            return {
              AccountName: rawHolding.AccountName,
              SecurityName: rawHolding.SecurityName,
              SecurityCUSIP: rawHolding.SecurityCUSIP,
              Quantity: parseFloat(rawHolding.Quantity),
              FaceValue: parseFloat(rawHolding.FaceValue),
              MarketValue: parseFloat(rawHolding.MarketValue),
              UnrealizedGainLoss: parseFloat(rawHolding.UnrealizedGainLoss),
              EffectiveDate: rawHolding.EffectiveDate
            }
          }
        );
        return of(holdings);
      })
    );

    /*
    ** Get most recent date and build most-recent and archive lists:
    */
    holdings.subscribe(holdingsArray => {
      const mostRecentDate = holdingsArray
        .map(holding => new Date(holding.EffectiveDate))
        .reduce((mostRecentDate, currentDate) => currentDate > mostRecentDate ? currentDate : mostRecentDate);

      this.recentHoldings = holdingsArray.filter(holding => new Date(holding.EffectiveDate) >= mostRecentDate);
      this.archivedHoldings = holdingsArray.filter(holding => new Date(holding.EffectiveDate) < mostRecentDate);
    });
  }
}
