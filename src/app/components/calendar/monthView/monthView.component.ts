import {Component, OnInit, Input, Inject} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {NavController} from 'ionic-angular';
import {MonthViewPage} from '../../../../pages/monthViewPage/monthViewPage';
import {CurrentCalendarViewService} from '../../models/currentClendarView.service';

const DAYS_IN_WEEK = 7;

interface IDayViewInfo {
  date: moment.Moment;
  notCurrentMonth?: boolean;
}

@Component({
  selector: 'month-view',
  templateUrl: './monthView.template.html'
})
export class MonthView implements OnInit {
  @Input('month') currentDate: moment.Moment;
  @Input() yearView = false;

  days: any[];
  weeks: any[];

  WEEKS_NUM = 5;

  currentMonthName: string;


  constructor(@Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(NavController) private navController: NavController) {

  }

  ngOnInit() {
    this.fillWeeks();
  }

  goToMonth() {
    if (this.yearView) {
      // TODO move to some navservice
      this.currentCalendarView.currentDate.month(this.currentDate.month());
      this.navController.push(MonthViewPage);
    }
  }

  private fillWeeks(date: moment.Moment = this.currentDate) {
    const datesCapacity = this.WEEKS_NUM * DAYS_IN_WEEK;
    this.currentMonthName = this.yearView
      ? date.format('MMMM')
      : date.format('MMMM YYYY');

    this.weeks = _.times(this.WEEKS_NUM, () => ({days: []}));

    const thisMonth = moment(date);
    const prevMonth = moment(thisMonth).subtract(1, 'month');
    const nextMonth = moment(thisMonth).add(1, 'month');

    const prevDays = this.getDaysOfMonth(prevMonth);
    const thisDays = this.getDaysOfMonth(thisMonth);
    const nextDays = this.getDaysOfMonth(nextMonth);

    const startsWith = moment(thisMonth).date(1).day();
    const endsWith = this.WEEKS_NUM * DAYS_IN_WEEK - thisDays.length - startsWith + 1;

    let days = _.take(
      _.takeRight(prevDays, startsWith - 1).concat(thisDays).concat(_.take(nextDays, endsWith)),
      datesCapacity);


    for (let i = 0; i < datesCapacity; i++) {
      this.weeks[Math.floor(i / DAYS_IN_WEEK)].days.push(days[i]);
    }
  }

  private getDaysOfMonth(date: moment.Moment): IDayViewInfo[] {
    const daysInMonth = date.daysInMonth();

    return _.times(daysInMonth, i => {
      const momentDate = moment(date).date(i + 1);
      return {
        date: momentDate,
        notCurrentMonth: this.currentDate.month() !== momentDate.month()
      };
    });
  }
}
