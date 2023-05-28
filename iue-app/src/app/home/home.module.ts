import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TrainingComponent } from '../training/training.component';
import { PredictionsComponent } from '../predictions/predictions/predictions.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
