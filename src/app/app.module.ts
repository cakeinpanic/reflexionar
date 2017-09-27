import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {MonthViewPage} from '../pages/monthViewPage/monthViewPage';
import {YearViewPage} from '../pages/yearViewPage/yearViewPage';
import {DayViewPage} from '../pages/dayViewPage/dayViewPage';
import {EventEditorPage} from '../pages/eventEditorPage/eventEditorPage';

import {CalendarModule} from './components/calendar/calendar.module';
import {EventTypeEditor} from './components/eventTypesEditor/eventTypeEditor.component';
import {EventTypeList} from './components/eventTypesList/eventTypeList.component';
import {CurrentCalendarViewService} from './components/models/currentClendarView.service';
import {IonicStorageModule} from '@ionic/Storage';
import {ColorpickerPopoverComponent} from './components/colorSample/colorpickerPopover.component';
import {ColorSampleModule} from './components/colorSample/colorSample.module';
import {FilterMenuComponent} from './components/filterMenu/filterMenu.component';

@NgModule({
    declarations: [
        MyApp,
        MonthViewPage,
        YearViewPage,
        DayViewPage,
        EventEditorPage,
        EventTypeEditor,
        EventTypeList,
        FilterMenuComponent
    ],
    imports: [
        BrowserModule,
        CalendarModule,
        ColorSampleModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MonthViewPage,
        YearViewPage,
        DayViewPage,
        EventEditorPage,
        EventTypeEditor,
        EventTypeList,
        FilterMenuComponent,
        ColorpickerPopoverComponent
    ],
    providers: [
        CurrentCalendarViewService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
