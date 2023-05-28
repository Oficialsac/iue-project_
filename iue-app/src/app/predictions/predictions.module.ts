import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PredictionsComponent } from './predictions/predictions.component';
import { FormsModule } from '@angular/forms';
import { share } from 'rxjs';

@NgModule({
  declarations: [ 
    PredictionsComponent
  ],
  imports: [
    CommonModule,
    PredictionsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PredictionsModule { }
