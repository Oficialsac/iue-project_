import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { PredictionsService } from '../predictions.services';
import { Values } from '../Values';
import { Input } from '@angular/core';
@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  providers: [PredictionsService],
  styleUrls: ['./predictions.component.css']
})


export class PredictionsComponent {

  wheelbase: number = 0;
  carlength: number = 0;
  carwidth: number = 0;
  curbweight: number = 0;
  enginesize: number = 0;
  boreratio: number = 0;
  horsepower: number = 0;
  citympg: number = 0;
  highwaympg: number = 0;    
  valuesToPredict: any = {};

  constructor(private predictionsService: PredictionsService) {

  }

  predictValue(values: any): void {
    
    this.valuesToPredict = {
      wheelbase: this.wheelbase,
      carlength: this.carlength,
      carwidth: this.carwidth,
      curbweight: this.curbweight,
      enginesize: this.enginesize,
      boreratio: this.boreratio,
      horsepower: this.horsepower,
      citympg: this.citympg,
      highwaympg: this.highwaympg
    }

    

    this.predictionsService
    .predictValue(this.valuesToPredict)
    .subscribe(data => console.log(data))
  }

}
