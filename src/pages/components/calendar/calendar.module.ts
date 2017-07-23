
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
import { IonicModule } from 'ionic-angular';
import {DayView} from "../dayView/dayView.component";
import {CalendarStore} from "../models/calendar.store";

@NgModule({
  imports: [CommonModule,IonicModule],
  exports: [
    Calendar
  ],
  declarations: [
    Calendar,
    DayView
  ],
  providers: [CalendarStore]
})
export class CalendarModule {}
