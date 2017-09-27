import {Component, OnInit, Inject, Input} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../models/calendar.store';
import {EventType, EventInput} from '../models/eventType.store';
import {DayEvent} from '../models/dayEvent.model';

interface IEventInputAndValue extends EventInput {
    value: string;
}

@Component({
    selector: 'day-details-list',
    templateUrl: './dayDetails.template.html'
})
export class DayDetails implements OnInit {

    @Input() date: moment.Moment;

    events: DayEvent[];
    types: EventType[];

    eventInputs: IEventInputAndValue[];

    eventTypeTitle: string;

    constructor(@Inject(CalendarStore) private calendarStore: CalendarStore) {
    }

    ngOnInit() {
        const dayId = this.calendarStore.getDateId(this.date);

        this.getEvents(dayId);

        this.calendarStore.eventStream
            .filter((timestamp) => timestamp === dayId)
            .subscribe(() => {
                this.getEvents(dayId);
            });
    }

    private getEvents(dayId) {
        this.calendarStore.getEventsById(dayId).then((data) => {
            this.events = data;
        });
    }

    removeEvent(event: DayEvent) {
        this.calendarStore.removeEvent(this.date, event);
    }

    getInputsList(dayEvent: DayEvent) {
        return dayEvent.getInputs();
    }

}
