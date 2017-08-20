import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'month-view-page',
  templateUrl: 'monthViewPage.html'
})
export class MonthViewPage implements OnInit, OnDestroy {
  months: moment.Moment[] = [];
  onDestroy = new Subject();

  @ViewChild(Content) content: Content;


  constructor(@Inject(NavController) private navController: NavController,
              @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(NavParams) private navParams: NavParams) {
  }

  ngOnInit() {
    this.setMonths();

    this.navController.viewWillEnter
      .takeUntil(this.onDestroy)
      .filter(({component}) => component === MonthViewPage)
      .subscribe(() => {
        this.setMonths();
      });

    this.navController.viewWillEnter
      .takeUntil(this.onDestroy)
      .filter(({component}) => component === MonthViewPage)
      .subscribe(() => {
        this.scrollTo();
      });
  }

  ngOnDestroy(){
    this.onDestroy.next();
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

  // private addNext() {
  //   this.months.push(moment(_.last(this.months)).add(1, 'month'));
  // }
  //
  // private addPrev() {
  //   this.months.unshift(moment(this.months[0]).subtract(1, 'month'));
  // }

  private setBackButton() {
    this.navController.getActive().getNavbar().setBackButtonText(this.months[0].format('YYYY'));
  }

  private scrollTo() {
    const monthToScroll = this.currentCalendarView.currentDate.month();
    const element = this.getMonthView(monthToScroll);
    if (element && this.content) {
      const monthPosition = element.getBoundingClientRect();
      const containerPosition = this.content.getElementRef().nativeElement.getBoundingClientRect();
      // todo get number offset from layout
      this.content.scrollTo(0, monthPosition.top - containerPosition.top - 10);
    }
  }

  private getMonthView(monthNumber: number){
    return this.content.getScrollElement().querySelector(`[month-number="${monthNumber}"]`);
  }
}

