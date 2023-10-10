import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule]
    });
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data in the table', () => {
    component.dataSource = [
      {
        AccountName: "TESTV102",
        SecurityNam: "Baker and Sons",
        SecurityCUSIP: "427A312F0",
        Quantity: "4000",
        FaceValue: "8642003.15",
        MarketValue: "551548.59",
        UnrealizedGainLoss: "-9441.19",
        EffectiveDate: "2023-10-01"
      },
      {
        AccountName: "TESTV102",
        SecurityName: "Juarez, Parker and Brooks",
        SecurityCUSIP: "0ED5A0265",
        Quantity: "613000",
        FaceValue: "4572896.70",
        MarketValue: "3245309.74",
        UnrealizedGainLoss: "-4729.78",
        EffectiveDate: "2023-10-01"
      }
    ];

    fixture.detectChanges(); 

    const tableElem = fixture.nativeElement.querySelectorAll('.mat-mdc-table');
    expect(tableElem.length).toBe(1); 

    setTimeout(
      () => {
        const tableRows = fixture.nativeElement.querySelectorAll('.mdat-mdc-row');
        expect(tableRows.length).toBe(component.dataSource.length); 
      }, 3000
    );
  });
});
