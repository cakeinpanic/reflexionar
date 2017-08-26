import {Component, OnInit, Input, Inject, ElementRef} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../../models/calendar.store';
import {DayEvent} from '../../models/dayEvent.model';
import {NavController} from 'ionic-angular';
import {DayViewPage} from '../../../../pages/dayViewPage/dayViewPage';
import {CurrentCalendarViewService} from '../../models/currentClendarView.service';

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
              @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(CalendarStore) private calendarStore: CalendarStore,
              @Inject(NavController) private navController: NavController) {
  }

  ngOnInit() {
    this.day = this.date.date();
    this.updateEvents();
    this.setToday();

    this.elementSize = this.el.nativeElement.offsetWidth + 'px';
  }

  openDetails() {
    if (!this.yearView) {
      this.currentCalendarView.currentDate.date(this.day).month(this.date.month());
      this.navController.push(DayViewPage);
    }
  }

  updateEvents() {

    const dayId = this.calendarStore.getDateId(this.date);

    this.events = this.calendarStore.getEventsById(dayId);

    if (!this.yearView) {
      this.calendarStore.eventStream
        .filter((timestamp) => timestamp === dayId)
        .subscribe(() => {
          this.events = this.calendarStore.getEventsById(dayId);
        });
    }

  }
  private setToday() {
    if (!this.yearView) {
      const diff = moment().diff(this.date, 'hours');
      this.isToday = diff < 24 && diff >= 0;
    }

  }
}
