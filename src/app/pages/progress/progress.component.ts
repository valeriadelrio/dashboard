import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent = 50;

  constructor() { }

  ngOnInit() {
  }

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


  }

}
