
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
import { IonicModule } from 'ionic-angular';
import {DayView} from "../dayView/dayView.component";
import {CalendarStore} from "../models/calendar.store";
import {DayInfo} from "../dayInfo/dayInfo.component";
import {TypeService} from "../models/type.service";

@NgModule({
  imports: [CommonModule,IonicModule],
  exports: [
    Calendar,
    DayInfo
  ],
  declarations: [
    Calendar,
    DayView,
    DayInfo
  ],
  providers: [CalendarStore, TypeService]
})
export class CalendarModule {}
