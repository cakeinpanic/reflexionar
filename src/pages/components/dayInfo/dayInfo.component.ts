import {Component, OnInit, Inject} from "@angular/core";
// import * as moment from 'moment';
import {CalendarStore, IDateInfo} from "../models/calendar.store";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'day-info',
  templateUrl: './dayInfo.template.html'
})
export class DayInfo implements OnInit {

  info: IDateInfo;

  constructor(@Inject(NavParams) private navParams: NavParams,
              @Inject(CalendarStore) private calendarStore: CalendarStore) {

  }

  ngOnInit() {
    this.info = this.calendarStore.getInfo(this.navParams.get('date'));
  }
}
