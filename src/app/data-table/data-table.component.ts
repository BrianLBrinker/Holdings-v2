import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Holding } from '../Holding';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less']
})
export class DataTableComponent implements AfterViewInit {
  @Input() holdings?: Holding[];

  displayedColumns: string[] = [
    'AccountName',
    'SecurityName',
    'SecurityCUSIP',
    'Quantity',
    'FaceValue',
    'MarketValue',
    'UnrealizedGainLoss',
    'EffectiveDate'
  ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<Holding>(this.holdings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
