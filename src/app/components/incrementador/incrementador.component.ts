import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  // styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
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

    this.txtProgress.nativeElement.focus();


  }

  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('percent')[0];
    console.log(newValue);
    console.log(this.txtProgress);

    if ( newValue >= 100 ) {
      this.percent = 100;
    } else if (newValue <= 0 ) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }
    this.txtProgress.nativeElement.value = this.percent;
    // elemHTML.value =  this.percent;
    this.cambioValor.emit(this.percent);
  }

}
