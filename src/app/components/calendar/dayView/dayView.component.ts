import {Component, OnInit, Input, Inject, ElementRef} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../../models/calendar.store';
import {DayEvent} from '../../models/dayEvent.model';
import {NavController} from 'ionic-angular';
import {DayViewPage} from '../../../../pages/dayViewPage/dayViewPage';

@Component({
  selector: 'day-view',
  templateUrl: './dayView.template.html'
})
export class DayView implements OnInit {
  @Input() date: moment.Moment;
  @Input() className: string;
  @Input() yearView: boolean = false;
  @Input() notThisMonth: boolean = false;

  isToday = false;
  events: DayEvent[] = [];
  day: number;
  elementSize: string;

  constructor(@Inject(ElementRef) private el: ElementRef,
              @Inject(CalendarStore) private calendarStore: CalendarStore,
              @Inject(NavController) private navController: NavController) {

    this.calendarStore.eventStream
      .subscribe((timestamp: number) => {
        if (+this.date.utc() === timestamp) {
          this.updateEvents();
        }
      })
  }

  ngOnInit() {
    this.day = this.date.date();

    this.updateEvents();

    const diff = moment().diff(this.date, 'hours');
    this.isToday = diff < 24 && diff >= 0;

    this.elementSize = this.el.nativeElement.offsetWidth + 'px';
  }

  updateEvents() {
    this.events = this.calendarStore.getEvents(this.date);
  }

  openDetails() {
    if (!this.yearView) {
      this.navController.push(DayViewPage, {date: this.date});
    }
  }

}
