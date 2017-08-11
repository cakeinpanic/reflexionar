import {Component, OnInit, Inject} from '@angular/core';
import {NavParams} from "ionic-angular";
import * as moment from 'moment';

@Component({
  selector: 'day-view-page',
  templateUrl: 'dayViewPage.html'
})
export class DayViewPage implements OnInit {
  date: moment.Moment;
  displayDate: string;

  constructor(@Inject(NavParams) private navParams: NavParams) {

  }

  ngOnInit() {
    this.date = this.navParams.get('date');
    this.displayDate = this.date.format('DD MMMM');

  }
}
