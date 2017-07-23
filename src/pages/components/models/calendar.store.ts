import * as moment from 'moment';

import {Event} from "./event.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";


interface IDateInfo {
  date: moment.Moment;
  events: Event[]
}
@Injectable()
export class CalendarStore {
  private store: {[key: string]: IDateInfo} = {};

  private stream = new Subject<number>();

  constructor() {

  }

  eventStream() {
    return this.stream.asObservable();
  }

  getInfo(date: any) {
    const dateAsUTC = moment(date).valueOf();
    return this.store[dateAsUTC] || null;
  }

  getEvents(date: any): Event[] {
    return this.getInfo(date) ? this.getInfo(date).events : [];
  }

  addEvent(date: any, event: Event) {
    const dateAsUTC = moment(date).valueOf();
    this.store[dateAsUTC] = {date: moment(date), events: [event]};
    this.stream.next(dateAsUTC);
  }

  clearInfo(date: any, event: Event) {
    const dateAsUTC = moment(date).valueOf();
    this.store[dateAsUTC] = null;
    this.stream.next(dateAsUTC);
  }
}
