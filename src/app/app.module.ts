import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import { HorizontalBarChartAdvancedComponent } from './horizontal-bar-chart-advanced/horizontal-bar-chart-advanced.component';
import { BarChartLineRendererComponent } from './bar-chart-line-renderer/bar-chart-line-renderer.component';
// tslint:disable-next-line: max-line-length

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HorizontalBarChartAdvancedComponent,
    BarChartLineRendererComponent,
  ],
  entryComponents: [BarChartLineRendererComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
