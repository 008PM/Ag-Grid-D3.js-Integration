import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { GridOptions, IDatasource, IGetRowsParams, ColDef } from '../../../node_modules/ag-grid-community';
import { Observable } from 'rxjs';
import {MarketData} from './marketdata';
import { Module } from '@ag-grid-community/all-modules';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { BarChartLineRendererComponent } from '../bar-chart-line-renderer/bar-chart-line-renderer.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
 // @ViewChild('agGrid', {static: true}) agGrid: AgGridAngular;
 @ViewChild('FirstButton', {static: true}) FirstButton: ElementRef<HTMLElement>;
  title = 'Ag-grid-basics';
  public gridOptions: GridOptions;
  startDate: number;
  endDate: number;
  public modules: Module[] = AllModules;
  private excelStyles;
  private gridApi;
  private gridColumnApi;
  yeardata: [1996,	2007,	1986,	1998,	1998,
    1993,	1989,	1987,	2012,	1987,
    2004,	1997,	2004,	1990,	2006,
    2009,	2011,	1999,	2014,	2003,
    2014,	1998,	2009,	2015,	2002,
    2002,	1996,	2010,	1996,	1990,
    2006,	1991,	2004,	1990,	1991,
    2010,	1995,	2010,	2002,	2001,
    1988,	2000,	1992,	2014,	1992,
    2006,	2011,	1988,	2011,	1986];
   columnDefs = [
    {headerName: 'Geography', field: 'geography' , sortable: true , filter: true},
    {headerName: 'Category', field: 'category' , sortable: true, filter: true},
    {headerName: 'Brand-name', field: 'brand_name' , sortable: true, filter: true},
    {headerName: 'Company-name', field: 'company_name' , sortable: true, filter: true },
    {headerName: 'Attributes', field: 'attributes' , sortable: true, filter: true },
    {headerName: 'Years', field: 'years' , sortable: true, filter: true },
    {
      headerName: 'Attribute Chart',
      field: 'attribute_chart',
      sortable: true,
      resizable: true,
      suppressSizeToFit: true,
      cellRendererFramework: BarChartLineRendererComponent,
      width: 500
    },
];
  rowData: Array<MarketData>;
  newRowdata: Array<MarketData> = [];
  switchToNewRowData = false;
  constructor(private http: HttpClient) {
    this.excelStyles = [
      {
        id: 'indent-1',
        alignment: { indent: 1 },
        dataType: 'string'
      },
      {
        id: 'indent-2',
        alignment: { indent: 2 },
        dataType: 'string'
      },
      {
        id: 'indent-3',
        alignment: { indent: 3 },
        dataType: 'string'
      }
    ];
  }
  ngOnInit() {
    this.gridApi = 
   this.GetJSON().subscribe(data => {
      console.log(data);
      this.rowData = data;
    });
    console.log('---------------------columnDefs------------------');
    console.log(this.columnDefs);
    console.log('---------------------gridOptions------------------');
    console.log(this.gridOptions)
  }
  ngAfterViewInit() {
    const firstButton: HTMLElement = this.FirstButton.nativeElement as HTMLElement;
    firstButton.click();
    // This won't work in oninit as no data ia there to manipulate henece we use after view init.
  }
  Toggleattribute(toggle: string) {
   if (toggle === 'category') {
   }
  }
  GetJSON(): Observable <any> {
    return this.http.get('../../assets/MOCK_DATA.json');
  }
  setStartDate(event: any) {
    this.startDate = parseInt(event);
  }
  setEndDate(event: any) {
    this.endDate = parseInt(event);

    this.sortDates(this.startDate, this.endDate);
  }

  sortDates(startDate: number, endDate: number) {
    for (const marketdata of this.rowData) {
    if (marketdata.years >= startDate && marketdata.years <= endDate) {
        this.newRowdata.push(marketdata);
    }
     }
    this.rowData = this.newRowdata;
  }
  //=====================================================Area for the Excel export===================================================>>Refereance:https://www.ag-grid.com/ag-grid-angular-systemjs/?framework=all#gsc.tab=0
  onBtnExportDataAsExcel() {
    this.gridApi.exportDataAsExcel({processRowGroupCallback: this.rowGroupCallback});
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  rowGroupCallback(params) {//Gets called after the exportDataAsexcel is done,its a callback function.
    return params.node.key;
  }
}
