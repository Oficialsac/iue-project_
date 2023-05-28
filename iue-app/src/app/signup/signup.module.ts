import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
