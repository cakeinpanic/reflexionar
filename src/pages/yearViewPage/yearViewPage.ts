import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'year-view-page',
  templateUrl: 'yearViewPage.html'
})
export class YearViewPage implements OnInit {
  years: moment.Moment[] = [];
  current: moment.Moment;

  @ViewChild(Content) content: Content;

  constructor(public navController: NavController,
              @Inject(NavParams) private navParams: NavParams) {

  }

  ngOnInit() {
    this.current = moment();
    this.setYear(this.navParams['year']);
    this.navController.viewWillEnter.subscribe(() => {
      this.setYear(this.navParams['year']);
    });
  }

  private setYear(year: number = moment().year()) {
    this.years = [moment().year(year)];

  }
}

