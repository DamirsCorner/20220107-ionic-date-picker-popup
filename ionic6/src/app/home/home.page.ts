import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private dateValue: any;

  constructor() {}

  get date(): any {
    return this.dateValue;
  }
  set date(value: any) {
    console.log({ value });
    this.dateValue = value;
  }
}
