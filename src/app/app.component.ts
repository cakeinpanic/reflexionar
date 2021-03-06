import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoadingController} from 'ionic-angular';

import {YearViewPage} from '../pages/yearViewPage/yearViewPage';
import {CalendarStore} from './components/models/calendar.store';
import {EventTypeStore} from './components/models/eventType.store';
import {MonthViewPage} from '../pages/monthViewPage/monthViewPage';
import {CurrentCalendarViewService} from './components/models/currentClendarView.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = YearViewPage;
    @ViewChild(Nav) nav: NavController;
    dataLoaded = false;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                public loading: LoadingController,
                public calendarStore: CalendarStore,
                public currentViewService: CurrentCalendarViewService,
                public eventTypeStore: EventTypeStore) {
        platform.ready()
            .then(() => this.updateData())
            .then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
                this.nav.push(YearViewPage, {}, {animate: false, duration: 0});
                this.nav.push(MonthViewPage, {}, {animate: false, duration: 0});
            });
    }

    updateData() {
        let loading = this.loading.create({
            content: 'Updating data...'
        });

        loading.present();

        // order is IMPORTANT, TYPES FIRST
        return this.eventTypeStore.init()
            .then(() => this.calendarStore.init())
            .then(() => {
                        this.currentViewService.setAllEventsFiltered();
                loading.dismiss();

                return this.dataLoaded = true;
            });

    }

}

