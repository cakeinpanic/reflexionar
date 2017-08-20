import {Component, OnInit, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'year-view-page',
  templateUrl: 'yearViewPage.html'
})
export class YearViewPage implements OnInit {
  years: moment.Moment[] = [];

  @ViewChild(Content) content: Content;


  constructor() {

  }

  ngOnInit() {
    this.years.push(moment());
  }
}

