import {Component, OnInit, Inject} from "@angular/core";
import * as moment from 'moment';
import {CalendarStore, IDateInfo} from "../models/calendar.store";
import {NavParams} from "ionic-angular";
import {TypeService} from "../models/type.service";
import {Event} from "../models/event.model";
@Component({
  selector: 'day-info',
  templateUrl: './dayInfo.template.html'
})
export class DayInfo implements OnInit {

  info: IDateInfo;
  types: string[];
  date: moment.Moment;

  eventType: string;
  eventTitle: string;
  constructor(@Inject(NavParams) private navParams: NavParams,
              @Inject(TypeService) private typeService: TypeService,
              @Inject(CalendarStore) private calendarStore: CalendarStore) {

  }

  ngOnInit() {
    this.date = this.navParams.get('date');
    this.info = this.calendarStore.getInfo(this.date);
    this.types = this.typeService.getTypes();
  }

  addEvent() {
    this.calendarStore.addEvent(this.date, new Event(this.eventType, this.eventTitle));
    this.info = this.calendarStore.getInfo(this.date);
  }
}
