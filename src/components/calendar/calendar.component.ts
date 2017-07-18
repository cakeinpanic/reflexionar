import {Component, OnInit} from "@angular/core";
import * as moment from 'moment';
import * as _ from 'lodash';
@Component({
  selector: 'calendar',
  templateUrl: './calendar.template.html'
})
export class Calendar implements OnInit {
  days: any[];
  weeks: any[];

  currentMonth: any;
  daysInMonth: any;
  ngOnInit() {
    this.currentMonth = moment().month();
    console.log(this.currentMonth);
    this.daysInMonth = moment().daysInMonth();

    this.days = this.getDaysOfMonth(2017, this.currentMonth);

    this.fillWeeks();
  }

  getDaysOfMonth(year, month) {
    const daysInMonth = moment().year(year).month(month).daysInMonth();
    return _.times(daysInMonth, i => moment().year(year).month(month).date(i + 1));
  }

  fillWeeks() {
    const startsWith = moment().date(1).day();
    this.weeks = _.times(6, ()=>({days:[]}));
    console.log(this.weeks);
    let counter = 0;

    for (let i = startsWith - 1; i < 7; i++) {
      this.weeks[0].days.push(this.days[counter++]);
    }
    while(counter<this.daysInMonth) {
      const ind = Math.floor((counter - (8-startsWith))/7)+1;
      this.weeks[ind].days.push(this.days[counter++]);
    }
  }
}
