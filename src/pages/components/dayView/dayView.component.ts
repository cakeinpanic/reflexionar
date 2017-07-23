import {Component, OnInit, Input, Inject} from "@angular/core";
import * as moment from 'moment';
import {CalendarStore} from "../models/calendar.store";
import {Event} from "../models/event.model";

@Component({
  selector: 'day-view',
  templateUrl: './dayView.template.html'
})
export class DayView implements OnInit {
  @Input() date: moment.Moment;
  @Input() className: string;

  events: Event[];
  day: number;

  constructor(@Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.calendarStore.eventStream()
      .subscribe((timestamp: number)=>{
      if (+this.date.utc() === timestamp) {
        this.updateEvents();
      }
    })
  }

  ngOnInit() {
    this.day = this.date.date();
    this.updateEvents();
  }

  showEvents():boolean {
    return this.events.length>0
  }
  updateEvents() {
    this.events = this.calendarStore.getEvents(this.date);

  }

  addEvent() {
    this.calendarStore.addEvent(this.date, new Event('ololo'));
  }

}
