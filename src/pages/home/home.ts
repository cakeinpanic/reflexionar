import {AfterViewChecked, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Content, ScrollEvent} from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, AfterViewChecked {
  months: moment.Moment[] = [];
  @ViewChild(Content) content: Content;
  @ViewChild('container') container: ElementRef;

  private once = false;

  constructor(public zone: NgZone) {

  }

  ngOnInit() {
    this.months.push(moment());
    this.addPrev();
    this.addNext();
  }

  ngAfterViewChecked() {
    if (!this.once && this.content.contentHeight > 0) {
      this.once = true;
    }
  }

  scrollHandler(event: ScrollEvent) {
    console.log(`ScrollEvent: ${event.scrollTop}, ${event.scrollHeight}, ${event.contentHeight}, ${event.contentTop}`);

    this.zone.run(() => {
      if (event.directionY === 'up' && event.scrollTop < 50) {
        this.addPrev();
        this.removeNext();
      }
      if (event.directionY === 'down' && event.scrollTop > 350) {
        this.addNext();
        this.removePrev();
      }
    })
  }


  private addNext() {
    this.months.push(moment(_.last(this.months)).add(1, 'month'));
  }

  private addPrev() {
    this.months.unshift(moment(this.months[0]).subtract(1, 'month'));
  }

  private removePrev() {
    this.months.shift();
  }

  private removeNext() {
    this.months.pop();
  }
}

