import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appGenChart]'
})
export class GenChartDirective {

  @Input() isLast: boolean;

  @Output('appGenChart') initEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (this.isLast) {
      setTimeout(() => this.initEvent.emit(), 10);
    }
  }
}
