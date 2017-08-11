import {Component, OnInit, Inject, Input} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarStore, IDateInfo} from '../models/calendar.store';
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

  info: IDateInfo;
  types: EventType[];

  eventInputs: IEventInputAndValue[];

  eventTypeTitle: string;
  eventTypesPage: any;

  constructor(@Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventEditorPage;
  }

  ngOnInit() {

    this.info = this.calendarStore.getInfo(this.date);

    this.calendarStore.eventStream
      .filter((date) => date === this.date.valueOf())
      .subscribe(() => {
        this.info = this.calendarStore.getInfo(this.date);
      });
  }


  removeEvent(event: DayEvent) {
    this.calendarStore.removeEvent(this.date, event);
  }

  getInputsList(dayEvent: DayEvent) {
    console.log(dayEvent.getInputs())
    return dayEvent.getInputs();
  }

}
