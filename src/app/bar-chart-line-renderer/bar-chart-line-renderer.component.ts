import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-bar-chart-line-renderer',
  templateUrl: './bar-chart-line-renderer.component.html',
  styleUrls: ['./bar-chart-line-renderer.component.scss']
})
export class BarChartLineRendererComponent implements OnInit, ICellRendererAngularComp {
  constructor() { }
public params: any = this.createChart();

agInit(params: any): void {
  this.params = params;
  console.log('params');
  console.log(params);
}
refresh(): boolean {
  return false;
}
// -------------------Above
  ngOnInit() {
    this.createChart();
  }
  createChart() {
    const w = 100;
    const h = 20;
    const padding = 1;
    var dataset = [60];
    const svg = d3.select('svg').attr('width', w).attr('height', h);
    const nodes = svg.selectAll('.rect').data(dataset)
   .enter()
   .append('g')
   .classed('rect', true);
    nodes.append('rect')
   .attr('x', () => 0)
   .attr('y', (d, i) => i * (h / dataset.length))
   .attr('height', () => 20)
   .attr('width', (d) => d + '%')
   .attr('fill', () => '#169bd5');
    nodes.append('rect')
   .attr('x', (d) => d + '%')
   .attr('y', (d, i) => i * (h / dataset.length))
   .attr('height', () => 20)
   .attr('width', (d) => (100 - d) + '%')
   .attr('fill', () => '#FFFFFF');
  }
}
