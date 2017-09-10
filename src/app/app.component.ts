import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoadingController} from 'ionic-angular';

import {YearViewPage} from '../pages/yearViewPage/yearViewPage';
import {CalendarStore} from './components/models/calendar.store';
import {EventTypeService} from './components/models/eventType.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = YearViewPage;
    @ViewChild(Nav) nav;
    dataLoaded = false;
    
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                public loading: LoadingController,
                public calendarStore: CalendarStore,
                public eventTypeService: EventTypeService) {
        platform.ready()
            .then(() => this.updateData())
            .then(() => {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
            });
    }
    
    updateData() {
        let loading = this.loading.create({
            content: 'Updating data...'
        });
        
        loading.present();
        
        // order is IMPORTANT, TYPES FIRST
        this.eventTypeService.init()
            .then(() => this.calendarStore.init())
            .then(() => {
                this.dataLoaded = true;
                loading.dismiss();
            });
        
    }
    
}

