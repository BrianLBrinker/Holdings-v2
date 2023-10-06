import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, switchMap } from 'rxjs';

import { HoldingsService } from '../holdings.service';
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
  rencentHoldings: Holding[] = [];
  archivedHoldings: Holding[] = [];

  constructor(
    private holdingsService: HoldingsService
  ) {
    this.asyncTabs = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Most recent', content: 'Most recent holdings'},
          {label: 'Archived', content: 'Archived holdings'}
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.getHoldings();
  }

  getHoldings(): void {
    const rawHoldings: Observable<RawHolding[]> = this.holdingsService.getRawHoldings();
    const holdings: Observable<Holding[]> = rawHoldings.pipe(
      switchMap(rawHoldingArray => {
          const holdings = rawHoldingArray.map(
            rawHolding => {
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

    holdings.subscribe(holdings => {
      const mostRecentDate = holdings
        .map(holding => new Date(holding.EffectiveDate))
        .reduce((mostRecentDate, currentDate) => currentDate > mostRecentDate ? currentDate : mostRecentDate);
      this.rencentHoldings = holdings.filter(holding => new Date(holding.EffectiveDate) >= mostRecentDate);
      this.archivedHoldings = holdings.filter(holding => new Date(holding.EffectiveDate) < mostRecentDate);
    });
  }
}
