import * as moment from 'moment';
import * as _ from 'lodash';
import {DayEvent} from './dayEvent.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';


export interface IDateInfo {
  date: moment.Moment;
  events: DayEvent[]
}

@Injectable()
export class CalendarStore {
  types: string[];
  private store: { [key: string]: IDateInfo } = {};


  private stream = new Subject<number>();

  constructor() {

  }

  get eventStream(): Observable<number> {
    return this.stream.asObservable();
  }

  getInfo(date: any) {
    const dateAsUTC = moment(date).valueOf();
    return this.store[dateAsUTC] || null;
  }

  getEvents(date: any): DayEvent[] {
    return this.getInfo(date) ? this.getInfo(date).events : [];
  }

  removeEvent(date: moment.Moment, eventToDelete: DayEvent) {
    const dateAsUTC = date.valueOf();
    _.remove(this.store[dateAsUTC].events, {id: eventToDelete.id});
    this.stream.next(dateAsUTC);
  }

  addEvent(date: any, event: DayEvent) {

    const dateAsUTC = moment(date).valueOf();

    if (this.store[dateAsUTC]) {
      this.store[dateAsUTC].events.push(event);
    } else {
      this.store[dateAsUTC] = {date: moment(date), events: [event]};
    }
    this.stream.next(dateAsUTC);
  }

  clearInfo(date: any) {
    const dateAsUTC = moment(date).valueOf();
    this.store[dateAsUTC] = null;
    this.stream.next(dateAsUTC);
  }

  addType(name: string) {
    this.types.push(name);
  }

  getTypes(): string[] {
    return this.types;
  }
}
