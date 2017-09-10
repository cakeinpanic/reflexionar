import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import * as moment from 'moment';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';

@Component({
    selector: 'year-view-page',
    templateUrl: 'yearViewPage.html'
})
export class YearViewPage implements OnInit {
    years: moment.Moment[] = [];
    currentYearName: string;
    @ViewChild(Content) content: Content;
    
    constructor(@Inject(NavController) public navController: NavController,
                @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService) {
        
    }
    
    ngOnInit() {
        this.setYear();
        this.navController.viewWillEnter
            .filter(({component}) => component === YearViewPage)
            .subscribe(() => {
                this.setYear();
            });
    }
    
    private setYear() {
        const year = this.currentCalendarView.currentDate.year();
        this.currentYearName = this.currentCalendarView.currentDate.format('YYYY');
        this.years = [moment().year(year)];
    }
}

