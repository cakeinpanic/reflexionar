import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, NavParams, ScrollEvent} from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'month-view-page',
  templateUrl: 'monthViewPage.html'
})
export class MonthViewPage implements OnInit {
  months: moment.Moment[] = [];


  private current: moment.Moment;
  @ViewChild(Content) content: Content;


  constructor(public navController: NavController,
              @Inject(NavParams) private navParams: NavParams) {

  }

  ngOnInit() {
    this.current = moment();
    this.setMonths(this.navParams['year']);

    this.navController.viewWillEnter.subscribe(() => {
      this.setMonths(this.navParams['year']);

    });
  }

  showNext() {
    this.current.add(1, 'year');
    this.setMonths(this.current.year())
  }

  showPrev() {
    this.current.subtract(1, 'year');
    this.setMonths(this.current.year());
  }

  private setMonths(year: number = this.current.year()) {
    this.months = _.times(12, (i) => {
      return moment().year(year).month(i);
    });
    this.setBackButton();
  }

  private addNext() {
    this.months.push(moment(_.last(this.months)).add(1, 'month'));
  }

  private addPrev() {
    this.months.unshift(moment(this.months[0]).subtract(1, 'month'));
  }

  private setBackButton() {
    this.navController.getActive().getNavbar().setBackButtonText(this.months[0].format('YYYY'));
  }

  // private removePrev() {
  //   this.months.shift();
  // }
  //
  // private removeNext() {
  //   this.months.pop();
  // }
}

