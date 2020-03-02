import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HorizontalBarChartAdvancedComponent } from '../horizontal-bar-chart-advanced/horizontal-bar-chart-advanced.component';
import { BarChartLineRendererComponent } from '../bar-chart-line-renderer/bar-chart-line-renderer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
        HorizontalBarChartAdvancedComponent,
        BarChartLineRendererComponent],
        imports: [BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          AgGridModule.withComponents([])
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain ag-grid', () => {
    fixture.detectChanges();
    const gridElement = fixture.nativeElement.querySelectorAll('ag-grid-angular');
    expect(gridElement.length).toBe(1);
  });
  it('the cells should have 5 titles on default case', () => {
  const gridElement = fixture.nativeElement;
  const columnElements = gridElement.querySelectorAll('.ag-header-cell-label'); // selecting the bottom most element in the particular div------>bottom div
  expect(columnElements.length).toBe(5); // go to deepest div until no further child divs are possible
  // And only 5 elements loadas in default we have selected attributes by category
});
  fit('should have chart elements', () => {
  debugger;
  fixture.detectChanges();
  const gridElement = fixture.nativeElement.querySelector('ag-grid-angular');
  const graphelement = gridElement.querySelectorAll('div.ag-row.ag-row-no-focus');
  expect(graphelement).toBeTruthy();

});
});
