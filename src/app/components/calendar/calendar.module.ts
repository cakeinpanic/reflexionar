import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthView} from './monthView/monthView.component';
import {IonicModule} from 'ionic-angular';
import {DayView} from './dayView/dayView.component';
import {CalendarStore} from '../models/calendar.store';
import {DayDetails} from '../dayDetails/dayDetails.component';
import {EventTypeService} from '../models/eventType.service';
import {ColorSample} from '../colorSample/colorSample.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [
    MonthView,
    DayDetails,
    ColorSample
  ],
  declarations: [
    MonthView,
    DayView,
    DayDetails,
    ColorSample
  ],
  providers: [CalendarStore, EventTypeService]
})
export class MonthViewModule {
}
