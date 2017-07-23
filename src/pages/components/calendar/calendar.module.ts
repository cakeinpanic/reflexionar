
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [CommonModule,IonicModule],
  exports: [
    Calendar
  ],
  declarations: [
    Calendar
  ]
})
export class CalendarModule {}
