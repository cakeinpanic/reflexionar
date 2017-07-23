import {Component, OnInit, Inject} from "@angular/core";
import * as moment from 'moment';
import {CalendarStore, IDateInfo} from "../models/calendar.store";
import {NavParams} from "ionic-angular";
import {TypeService, IEventType} from "../models/type.service";
import {Event} from "../models/event.model";
import {EventTypesPage} from "../../eventTypes/eventTypes";

@Component({
  selector: 'day-info',
  templateUrl: './dayInfo.template.html'
})
export class DayInfo implements OnInit {

  info: IDateInfo;
  types: IEventType[];
  date: moment.Moment;

  eventType: IEventType;
  eventTitle: string;
  eventTypesPage: any;

  constructor(@Inject(NavParams) private navParams: NavParams,
              @Inject(TypeService) private typeService: TypeService,
              @Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventTypesPage;
  }

  ngOnInit() {
    this.date = this.navParams.get('date');
    this.info = this.calendarStore.getInfo(this.date);
    this.types = this.typeService.getTypes();
    this.eventType = this.types[0];
  }

  addEvent() {
    this.calendarStore.addEvent(this.date, new Event(this.eventType, this.eventTitle));
    this.info = this.calendarStore.getInfo(this.date);
  }

}
