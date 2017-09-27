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

    displayEvents: DayEvent[] = [];

    day: number;
    isToday = false;

    private events: DayEvent[] = [];
    private filteredType: number;

    constructor(@Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
        @Inject(CalendarStore) private calendarStore: CalendarStore,
        @Inject(NavController) private navController: NavController) {
    }

    ngOnInit() {
        this.day = this.date.date();
        this.filteredType = this.currentCalendarView.filterEventId;
        this.updateEvents();
        this.setToday();
        this.currentCalendarView.filterEventStream.subscribe((newType: number) => {
            this.filteredType = newType;
            this.filterEvents();
        });
    }

    openDetails() {
        if (!this.yearView) {
            this.currentCalendarView.currentDate.date(this.day).month(this.date.month());
            this.navController.push(DayViewPage);
        }
    }

    updateEvents() {
        if (!this.yearView && !this.notThisMonth) {
            const dayId = this.calendarStore.getDateId(this.date);
            this.getEvents(dayId);

            this.calendarStore.eventStream.filter((timestamp) => timestamp === dayId).subscribe(() => {
                this.getEvents(dayId);
            });
        }

    }

    private getEvents(dayId) {
        this.calendarStore.getEventsById(dayId).then((data) => {
            this.events = data;
            this.filterEvents();
        });
    }

    private filterEvents() {
        this.displayEvents =
            this.events.filter((event: DayEvent) => !this.filteredType || event.isOfTypeId(this.filteredType));

    }

    private setToday() {
        if (!this.yearView) {
            const diff = moment().diff(this.date, 'hours');
            this.isToday = diff < 24 && diff >= 0;
        }

    }
}
