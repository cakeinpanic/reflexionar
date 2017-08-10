import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {DetailsPage} from '../pages/details/details';
import {EventTypesPage} from '../pages/editEventTypes/editEventTypes';

import {MonthViewModule} from './components/calendar/calendar.module';
import {EventTypeEditor} from './components/eventTypesEditor/eventTypeEditor.component';
import {EventTypeList} from './components/eventTypesList/eventTypeList.component';
import {CreateEventFormComponent} from './components/eventSelector/createEventForm.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    EventTypesPage,
    EventTypeEditor,
    EventTypeList
  ],
  imports: [
    BrowserModule,
    MonthViewModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    EventTypesPage,
    EventTypeEditor,
    EventTypeList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
