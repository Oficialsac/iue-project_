import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {

  constructor(private location: Location) {

  }

  back(): void {
    this.location.back();
  }
}
