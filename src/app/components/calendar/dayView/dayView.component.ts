import {Component, OnInit, Input, Inject} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../../models/calendar.store';
import {DayEvent} from '../../models/dayEvent.model';
import {NavController} from 'ionic-angular';
import {DayViewPage} from '../../../../pages/dayViewPage/dayViewPage';
import {CurrentCalendarViewService} from '../../models/currentClendarView.service';

@Component({
    selector: 'day-view',
    templateUrl: './dayView.template.html'
})
export class DayView implements OnInit {
    @Input() date: moment.Moment;
    @Input() className: string;
    @Input() yearView: boolean = false;
    @Input() notThisMonth: boolean = false;
    
    @Input() elementSize: string;
    isToday = false;
    events: DayEvent[] = [];
    day: number;
    
    constructor(@Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
                @Inject(CalendarStore) private calendarStore: CalendarStore,
                @Inject(NavController) private navController: NavController) {
    }
    
    ngOnInit() {
        this.day = this.date.date();
        this.updateEvents();
        this.setToday();
    }
    
    openDetails() {
        if (!this.yearView) {
            this.currentCalendarView.currentDate.date(this.day).month(this.date.month());
            this.navController.push(DayViewPage);
        }
    }
    
    updateEvents() {
        if (!this.yearView) {
            const dayId = this.calendarStore.getDateId(this.date);
            
            this.events = this.calendarStore.getEventsById(dayId);
            
            this.calendarStore.eventStream
                .filter((timestamp) => timestamp === dayId)
                .subscribe(() => {
                    this.events = this.calendarStore.getEventsById(dayId);
                });
        }
        
    }
    
    private setToday() {
        if (!this.yearView) {
            const diff = moment().diff(this.date, 'hours');
            this.isToday = diff < 24 && diff >= 0;
        }
        
    }
}
