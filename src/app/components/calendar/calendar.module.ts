import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonthView} from './monthView/monthView.component';
import {IonicModule} from 'ionic-angular';
import {DayView} from './dayView/dayView.component';
import {CalendarStore} from '../models/calendar.store';
import {DayDetails} from '../dayDetailsList/dayDetails.component';
import {EventTypeStore} from '../models/eventType.store';
import {ColorSample} from '../colorSample/colorSample.component';
import {CreateEventFormComponent} from '../createEventForm/createEventForm.component';
import {YearViewComponent} from './yearView/yearView.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        MonthView,
        DayDetails,
        ColorSample,
        YearViewComponent,
        CreateEventFormComponent
    ],
    declarations: [
        MonthView,
        DayView,
        DayDetails,
        ColorSample,
        YearViewComponent,
        CreateEventFormComponent
    ],
    providers: [
        CalendarStore,
        EventTypeStore
    ]
})
export class MonthViewModule {
}
