import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';

@Component({
  selector: 'year-view-page',
  templateUrl: 'yearViewPage.html'
})
export class YearViewPage implements OnInit {
  years: moment.Moment[] = [];

  @ViewChild(Content) content: Content;

  constructor(@Inject(NavController) public navController: NavController,
              @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(NavParams) private navParams: NavParams) {

  }

  ngOnInit() {
    this.setYear();
    this.navController.viewWillEnter.subscribe(() => {
      this.setYear();
    });
  }

  private setYear() {
    const year = this.currentCalendarView.currentDate.year();
    this.years = [moment().year(year)];
  }
}

