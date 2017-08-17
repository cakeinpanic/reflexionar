import {Component, OnInit, ElementRef, Input} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';


@Component({
  selector: 'year-view',
  templateUrl: './yearView.template.html'
})
export class YearViewComponent implements OnInit {
  @Input('year') currentDate: moment.Moment;
  months: any[];
  monthRows: any[];
  currentYearName: string;
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.currentYearName = this.currentDate.format('YYYY');
    let counter = 0;
    this.monthRows = _.times(4, (i)=> {
      return _.times(3, (j)=> {
        return moment(this.currentDate).month(counter++);
      });
    });
  }


}
