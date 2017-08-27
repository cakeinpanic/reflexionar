import {Component, OnInit, Inject, Input} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../models/calendar.store';
import {EventType, EventInput} from '../models/eventType.service';
import {DayEvent} from '../models/dayEvent.model';
import {EventEditorPage} from '../../../pages/eventEditorPage/eventEditorPage';

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
  eventTypesPage: any;

  constructor(@Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventEditorPage;
  }

  ngOnInit() {
    const dayId = this.calendarStore.getDateId(this.date);

    this.events = this.calendarStore.getEventsById(dayId);

    this.calendarStore.eventStream
      .filter((timestamp) => timestamp === dayId)
      .subscribe(() => {
        this.events = this.calendarStore.getEventsById(dayId);
      });
  }

  removeEvent(event: DayEvent) {
    this.calendarStore.removeEvent(this.date, event);
  }

  getInputsList(dayEvent: DayEvent) {
    return dayEvent.getInputs();
  }

}
