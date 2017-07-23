import {Component, OnInit, Input} from "@angular/core";
import * as moment from 'moment';

@Component({
  selector: 'day-view',
  templateUrl: './dayView.template.html'
})
export class DayView implements OnInit {
 @Input() date :moment.Moment;
 @Input() className: string;

  day: number;


  ngOnInit() {
    this.day = this.date.date();
  }

}
