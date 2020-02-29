import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarChartAdvancedComponent } from './horizontal-bar-chart-advanced.component';

describe('HorizontalBarChartAdvancedComponent', () => {
  let component: HorizontalBarChartAdvancedComponent;
  let fixture: ComponentFixture<HorizontalBarChartAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalBarChartAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBarChartAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
