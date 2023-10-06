import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

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

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Holding>(this.holdings);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
