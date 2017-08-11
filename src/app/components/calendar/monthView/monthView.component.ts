import {Component, OnInit, ElementRef, Input} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

const DAYS_IN_WEEK = 7;

@Component({
  selector: 'month-view',
  templateUrl: './monthView.template.html'
})
export class MonthView implements OnInit {
  @Input('month') currentDate: moment.Moment;
  days: any[];
  weeks: any[];

  WEEKS_NUM = 5;

  currentMonthName: string;

  daySize: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.fillWeeks();
    this.daySize = this.el.nativeElement.offsetWidth / 7 || 40;
  }

  showNext() {
    this.currentDate.add(1, 'month');
    this.fillWeeks();
  }

  showPrev() {
    this.currentDate.subtract(1, 'month');
    this.fillWeeks();
  }

  private fillWeeks(date: moment.Moment = this.currentDate) {
    const datesCapacity = this.WEEKS_NUM * DAYS_IN_WEEK;
    this.currentMonthName = date.format('MMMM YYYY');

    this.weeks = _.times(this.WEEKS_NUM, () => ({days: []}));

    const thisMonth = moment(date);
    const prevMonth = moment(thisMonth).subtract(1, 'month');
    const nextMonth = moment(thisMonth).add(1, 'month');

    const prevDays = this.getDaysOfMonth(prevMonth, {className: 'prev'});
    const thisDays = this.getDaysOfMonth(thisMonth, {className: 'current'});
    const nextDays = this.getDaysOfMonth(nextMonth, {className: 'next'});

    const startsWith = moment(thisMonth).date(1).day();
    const endsWith = this.WEEKS_NUM * DAYS_IN_WEEK - thisDays.length - startsWith + 1;

    let days = _.take(
      _.takeRight(prevDays, startsWith - 1).concat(thisDays).concat(_.take(nextDays, endsWith)),
      datesCapacity);


    for (let i = 0; i < datesCapacity; i++) {
      this.weeks[Math.floor(i / DAYS_IN_WEEK)].days.push(days[i]);
    }
  }

  private getDaysOfMonth(date: moment.Moment, additionalData: any) {
    const daysInMonth = date.daysInMonth();

    return _.times(daysInMonth, i => {
      return _.assign({
        date: moment(date).date(i + 1)
      }, additionalData);
    });
  }
}
