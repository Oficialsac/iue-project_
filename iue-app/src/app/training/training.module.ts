import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule,
    FormsModule
  ]
})


export class TrainingModule { }
