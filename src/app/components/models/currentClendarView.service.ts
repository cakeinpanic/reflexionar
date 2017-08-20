import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CurrentCalendarViewService {
  currentDate: moment.Moment;

  constructor() {
    this.currentDate = moment();
  }
  //
  // get currentYear() {
  //   return this.currentDate.year();
  // }
  //
  // get currentMonth() {
  //   return this.currentDate.month();
  // }
  //
  // set currentYear(year: number) {
  //   this.currentDate.year(year);
  // }
  //
  // set currentMonth(month: number) {
  //   this.currentDate.month(month);
  // }
  //
  // set currentMonth(month: number) {
  //   this.currentDate.month(month);
  // }

}
