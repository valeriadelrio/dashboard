import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  // styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nombre') label = 'Leyenda';
  @Input() percent = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeValue(number: number) {
    if (this.percent >= 100 && number > 0) {
      this.percent = 100;
      return;
    }
    if (this.percent <= 0 && number < 0) {
      this.percent = 0;
      return;
    }
    this.percent = this.percent + number;
    this.cambioValor.emit(this.percent);


  }

}
