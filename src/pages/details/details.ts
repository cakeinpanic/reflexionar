import {Component, OnInit, Inject} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{
  date: string;

  constructor(@Inject(NavParams) private navParams: NavParams) {

  }

  ngOnInit() {
    this.date = this.navParams.get('date').format('DD MMMM');
  }
}
