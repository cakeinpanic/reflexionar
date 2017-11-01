import {Component, OnInit, ViewChild} from '@angular/core';
import {Content, MenuController, NavController} from 'ionic-angular';
import * as moment from 'moment';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';

@Component({
    selector: 'year-view-page',
    templateUrl: 'yearViewPage.html'
})
export class YearViewPage implements OnInit {
    years: moment.Moment[] = [];
    currentYearName: string;

    private currentYear: number;
    @ViewChild(Content) content: Content;

    constructor( public navController: NavController,
                 public menuCtrl: MenuController,
                 private currentCalendarView: CurrentCalendarViewService) {

    }

    ngOnInit() {
        this.setYear();
        this.navController.viewWillEnter
            .filter(({component}) => component === YearViewPage)
            .subscribe(() => {
                this.setYear();
            });
    }

    toggleMenu(){
        this.menuCtrl.toggle();
    }

    showNext() {
        this.currentCalendarView.currentDate.add(1, 'year');
        this.setYear();
    }

    showPrev() {
        this.currentCalendarView.currentDate.subtract(1, 'year');
        this.setYear();
    }

    private setYear() {
        const year = this.currentCalendarView.currentDate.year();
        if (this.currentYear !== year) {
            this.currentYear = year;
            this.currentYearName = this.currentCalendarView.currentDate.format('YYYY');
            this.years = [moment().year(year)];
        }
    }

}

