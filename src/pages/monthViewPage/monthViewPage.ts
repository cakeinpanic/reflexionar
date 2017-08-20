import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, ScrollEvent} from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'month-view-page',
  templateUrl: 'monthViewPage.html'
})
export class MonthViewPage implements OnInit {
  months: moment.Moment[] = [];

  @ViewChild(Content) content: Content;


  constructor(public zone: NgZone, public navController: NavController) {

  }

  ngOnInit() {
    this.months.push(moment());
    this.addPrev();
    this.addNext();
    this.navController.viewWillEnter.subscribe(() => {
      this.setBackButton();
    });
  }

  scrollHandler(event: ScrollEvent) {
    // console.log(`ScrollEvent: ${event.scrollTop}, ${event.scrollHeight}, ${event.contentHeight}, ${event.contentTop}`);

    // this.zone.run(() => {
    //   if (event.directionY === 'up' && event.scrollTop < 50) {
    //     this.addPrev();
    //     this.removeNext();
    //   }
    //   if (event.directionY === 'down' && event.scrollTop > 350) {
    //     this.addNext();
    //     this.removePrev();
    //   }
    // })
  }

  doInfinite(infiniteScroll) {

    this.zone.run(() => {

      this.addNext();
      infiniteScroll.complete();
    });
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

