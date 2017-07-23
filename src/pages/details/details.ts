import { Component } from '@angular/core';
import {EventTypesPage} from "../eventTypes/eventTypes";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  eventTypesPage: any;
  constructor() {
    this.eventTypesPage = EventTypesPage;
  }
}
