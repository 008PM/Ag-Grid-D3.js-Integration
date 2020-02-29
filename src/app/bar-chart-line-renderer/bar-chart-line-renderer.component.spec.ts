import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartLineRendererComponent } from './bar-chart-line-renderer.component';

fdescribe('BarChartLineRendererComponent', () => {
  let component: BarChartLineRendererComponent;
  let fixture: ComponentFixture<BarChartLineRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartLineRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartLineRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
