import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthView} from './monthView/monthView.component';
import {IonicModule} from 'ionic-angular';
import {DayView} from './dayView/dayView.component';
import {CalendarStore} from '../models/calendar.store';
import {DayDetails} from '../dayDetailsList/dayDetails.component';
import {EventTypeService} from '../models/eventType.service';
import {ColorSample} from '../colorSample/colorSample.component';
import {CreateEventFormComponent} from '../createEventForm/createEventForm.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [
    MonthView,
    DayDetails,
    ColorSample,
    CreateEventFormComponent
  ],
  declarations: [
    MonthView,
    DayView,
    DayDetails,
    ColorSample,
    CreateEventFormComponent
  ],
  providers: [CalendarStore, EventTypeService]
})
export class MonthViewModule {
}
