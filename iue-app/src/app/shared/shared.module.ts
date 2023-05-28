import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';


@NgModule({
  declarations: [ BackComponent ],
  imports: [
    CommonModule
  ],
  exports: [ BackComponent ]
})
export class SharedModule { }
