import {Component, OnInit, Inject} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarStore, IDateInfo} from '../models/calendar.store';
import {NavParams} from 'ionic-angular';
import {EventType, EventInput} from '../models/eventType.service';
import {DayEvent} from '../models/dayEvent.model';
import {EventTypesPage} from '../../../pages/editEventTypes/editEventTypes';

interface IEventInputAndValue extends EventInput{
  value: string;
}
@Component({
  selector: 'day-details',
  templateUrl: './dayDetails.template.html'
})
export class DayDetails implements OnInit {

  info: IDateInfo;
  types: EventType[];
  date: moment.Moment;

  eventInputs: IEventInputAndValue[];

  eventTypeTitle: string;
  eventTypesPage: any;

  constructor(@Inject(NavParams) private navParams: NavParams,
    @Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventTypesPage;
  }

  ngOnInit() {
    this.date = this.navParams.get('date');
    this.info = this.calendarStore.getInfo(this.date);

    // todo filter by date
    this.calendarStore.eventStream.subscribe(()=>{
      this.info = this.calendarStore.getInfo(this.date);
    });
  }


  removeEvent(event: DayEvent) {
    this.calendarStore.removeEvent(this.date, event);
  }

  getEventDataInfo(event: DayEvent) {
    return _.keys(event.data)
  }

}
