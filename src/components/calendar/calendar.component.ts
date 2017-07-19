import {Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import * as _ from 'lodash';
const DAYS_IN_WEEK = 7;
@Component({
  selector: 'calendar',
  templateUrl: './calendar.template.html'
})
export class Calendar implements OnInit {
  days: any[];
  weeks: any[];

  WEEKS_NUM = 6;
  currentDate: moment.Moment;

  ngOnInit() {
    this.currentDate = moment();
    this.fillWeeks(this.currentDate);
  }

  showNext() {
    this.currentDate.add(1, 'month');
    this.fillWeeks(this.currentDate);
  }

  showPrev() {
    this.currentDate.subtract(1, 'month');
    this.fillWeeks(this.currentDate);
  }

  private fillWeeks(date: moment.Moment) {

    this.weeks = _.times(this.WEEKS_NUM, ()=>({days: []}));

    const thisMonth = moment(date);
    const prevMonth = moment(thisMonth).subtract(1, 'month');
    const nextMonth = moment(thisMonth).add(1, 'month');


    const thisDays = this.getDaysOfMonth(thisMonth);
    const prevDays = this.getDaysOfMonth(prevMonth);
    const nextDays = this.getDaysOfMonth(nextMonth);

    const startsWith = moment(thisMonth).date(1).day();
    const endsWith = this.WEEKS_NUM * DAYS_IN_WEEK - thisDays.length - startsWith;

    const days = _.takeRight(prevDays, startsWith - 1)
      .concat(thisDays)
      .concat(_.take(nextDays, endsWith));


    for (let i = 0; i < (this.WEEKS_NUM - 1) * 7; i++) {
      const ind = Math.floor(i / DAYS_IN_WEEK) + 1;
      this.weeks[ind].days.push(days[i]);
    }
  }

  private getDaysOfMonth(date: moment.Moment) {
    const year = date.year();
    const month = date.month();
    const daysInMonth = moment().year(year).month(month).daysInMonth();
    return _.times(daysInMonth, i => moment().year(year).month(month).date(i + 1));
  }
}
