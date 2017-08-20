import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, NavParams, ScrollEvent} from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';

@Component({
  selector: 'month-view-page',
  templateUrl: 'monthViewPage.html'
})
export class MonthViewPage implements OnInit {
  months: moment.Moment[] = [];

  @ViewChild(Content) content: Content;


  constructor(public navController: NavController,
              @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(NavParams) private navParams: NavParams) {
  }

  ngOnInit() {
    this.setMonths();

    this.navController.viewWillEnter.subscribe(() => {
      this.setMonths();
    });
  }

  showNext() {
    this.currentCalendarView.currentDate.add(1, 'year');
    this.setMonths()
  }

  showPrev() {
    this.currentCalendarView.currentDate.subtract(1, 'year');
    this.setMonths();
  }

  private setMonths() {
    const year = this.currentCalendarView.currentDate.year();
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

