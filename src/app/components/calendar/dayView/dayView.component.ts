import {Component, OnInit, Input, Inject} from '@angular/core';
import * as moment from 'moment';
import {CalendarStore} from '../../models/calendar.store';
import {DayEvent} from '../../models/dayEvent.model';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../../../../pages/details/details';

@Component({
  selector: 'day-view',
  templateUrl: './dayView.template.html'
})
export class DayView implements OnInit {
  @Input() date: moment.Moment;
  @Input() className: string;
  @Input() size: number;

  isToday = false;
  events: DayEvent[] = [];
  day: number;
  elementSize: string;

  constructor(@Inject(CalendarStore) private calendarStore: CalendarStore,
              @Inject(NavController) private navController: NavController) {

    this.calendarStore.eventStream
      .subscribe((timestamp: number)=> {
        if (+this.date.utc() === timestamp) {
          this.updateEvents();
        }
      })
  }

  ngOnInit() {
    this.day = this.date.date();
    this.elementSize = this.size + 'px';
    this.updateEvents();

    const diff = moment().diff(this.date, 'hours');
    this.isToday = diff < 24 && diff >= 0;
  }


  showEvents(): boolean {
    return this.events.length > 0
  }

  updateEvents() {
    this.events = this.calendarStore.getEvents(this.date);
  }

  openDetails() {
    this.navController.push(DetailsPage, {date: this.date});
  }

}
