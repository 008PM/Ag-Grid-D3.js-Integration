import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-bar-chart-line-renderer',
  templateUrl: './bar-chart-line-renderer.component.html',
  styleUrls: ['./bar-chart-line-renderer.component.scss']
})
export class BarChartLineRendererComponent implements OnInit, ICellRendererAngularComp {
  constructor() { }
public params:any =this.createChart();

agInit(params: any): void {
  this.params = params;
  console.log("params");
  console.log(params);
}
refresh(): boolean {
  return false;
}
//-------------------Above 
  ngOnInit() {
    this.createChart();
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  createChart() {
    var random = this.randomIntFromInterval(10,100);
    const w = 100;
    const h = 30;
    let padding = 1;
     var dataset = [random];
    let svg = d3.selectAll('#mychart').attr('width', w).attr('height', h);
    const nodes = svg.selectAll('.rect').data(dataset)
   .enter()
   .append('g')
   .classed('rect', true);
    nodes.append('rect')
   .attr('x', () =>0)
   .attr('y', (d, i) =>i*(h/dataset.length))
   .attr('height', () =>20)
   .attr('width', (d) =>d+'%')
   .attr('fill', () =>'#169bd5');
    nodes.append('rect')
   .attr('x', (d) =>d+'%')
   .attr('y', (d, i) =>i*(h/dataset.length))
   .attr('height', () =>20)
   .attr('width', (d) =>(100-d)+'%')
   .attr('fill', () =>'#FFFFFF');


//    var container = document.createElement("div");
// var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

// var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// circle.setAttribute("cx", "20");
// circle.setAttribute("cy", "20");
// circle.setAttribute("r", "15");

// svg.appendChild(circle);
// container.appendChild(svg);
// document.body.appendChild(container);
  }
}
