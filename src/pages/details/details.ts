import { Component } from '@angular/core';
import {TypeService} from "../components/models/type.service";
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
