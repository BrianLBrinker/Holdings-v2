import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from '@angular/material/tabs';

import { HoldingsListComponent } from './holdings-list.component';

describe('HoldingsListComponent', () => {
  let component: HoldingsListComponent;
  let fixture: ComponentFixture<HoldingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoldingsListComponent],
      imports: [BrowserModule, MatProgressSpinnerModule, MatTabsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(HoldingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tabs', () => {
    setTimeout(
      () => {
        const tabs = fixture.nativeElement.querySelectorAll('.mdc-tab');
        expect(tabs.length).toBe(2); 
      }, 3000
    );
  });
});
