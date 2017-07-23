
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
import { IonicModule } from 'ionic-angular';
import {DayView} from "../dayView/dayView.component";

@NgModule({
  imports: [CommonModule,IonicModule],
  exports: [
    Calendar
  ],
  declarations: [
    Calendar,
    DayView
  ]
})
export class CalendarModule {}
