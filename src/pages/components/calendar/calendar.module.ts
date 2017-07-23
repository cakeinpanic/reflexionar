
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
import { IonicModule } from 'ionic-angular';
import {DayView} from "../dayView/dayView.component";
import {CalendarStore} from "../models/calendar.store";
import {DetailsPage} from "../../details/details";
import {DayInfo} from "../dayInfo/dayInfo.component";

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
  providers: [CalendarStore]
})
export class CalendarModule {}
