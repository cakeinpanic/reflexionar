import {Component, OnInit, Input, Inject, ElementRef} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {NavController} from 'ionic-angular';
import {MonthViewPage} from '../../../../pages/monthViewPage/monthViewPage';
import {CurrentCalendarViewService} from '../../models/currentClendarView.service';

const DAYS_IN_WEEK = 7;
const DEFAULT_WEKS_NUM = 5;

interface IDayViewInfo {
    date: moment.Moment;
    notDayOfCurrentMonth?: boolean;
}

@Component({
    selector: 'month-view',
    templateUrl: './monthView.template.html'
})
export class MonthView implements OnInit {
    @Input('month') currentDate: moment.Moment;
    @Input() yearView = false;
    
    size: string;
    days: any[];
    weeks: any[];
    
    currentMonthName: string;
    
    constructor(@Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
                @Inject(ElementRef) private el: ElementRef,
                @Inject(NavController) private navController: NavController) {
        
    }
    
    ngOnInit() {
        this.fillWeeks();
        this.size = Math.floor(this.el.nativeElement.offsetWidth / 7) + 'px';
    }
    
    goToMonth() {
        if (this.yearView) {
            // TODO move to some navservice
            this.currentCalendarView.currentDate.month(this.currentDate.month());
            this.navController.push(MonthViewPage);
        }
    }
    
    private fillWeeks(date: moment.Moment = this.currentDate) {
        this.setMonthName(date);
        
        this.weeks = [];
        
        this.getDaysToDisplay(date)
            .forEach((day, i) => {
                const weekNum = Math.floor(i / DAYS_IN_WEEK);
                if (!this.weeks[weekNum]) {
                    this.weeks[weekNum] = [];
                }
                this.weeks[weekNum].push(day);
            });
    }
    
    private setMonthName(date: moment.Moment) {
        this.currentMonthName = this.yearView
            ? date.format('MMMM')
            : date.format('MMMM YYYY');
    }
    
    private calculateWeeksNum(thisMonth: moment.Moment): number {
        const startsWith = moment(thisMonth).date(1).isoWeekday() - 1;
        
        return startsWith + thisMonth.daysInMonth() > DEFAULT_WEKS_NUM * DAYS_IN_WEEK
            ? DEFAULT_WEKS_NUM + 1
            : DEFAULT_WEKS_NUM;
    }
    
    private getDaysToDisplay(date: moment.Moment): moment.Moment[] {
        const weeksNum = this.calculateWeeksNum(date);
        
        const thisMonth = moment(date);
        const prevMonth = moment(thisMonth).subtract(1, 'month');
        const nextMonth = moment(thisMonth).add(1, 'month');
        
        const prevDays = this.getDaysOfMonth(prevMonth);
        const thisDays = this.getDaysOfMonth(thisMonth);
        const nextDays = this.getDaysOfMonth(nextMonth);
        
        const startsWith = moment(thisMonth).date(1).isoWeekday();
        
        const endsWith = weeksNum * DAYS_IN_WEEK - thisDays.length - startsWith + 1;
        const datesCapacity = weeksNum * DAYS_IN_WEEK;
        
        const concatThreeMonths = _.takeRight(prevDays, startsWith - 1)
            .concat(thisDays)
            .concat(_.take(nextDays, endsWith));
        
        return _.take(
            concatThreeMonths,
            datesCapacity
        );
        
    }
    
    private getDaysOfMonth(date: moment.Moment): IDayViewInfo[] {
        const daysInMonth = date.daysInMonth();
        
        return _.times(daysInMonth, i => {
            const momentDate = moment(date).date(i + 1);
            return {
                date: momentDate,
                notDayOfCurrentMonth: this.currentDate.month() !== momentDate.month()
            };
        });
    }
}
