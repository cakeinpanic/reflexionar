import {Component, OnInit, Inject} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarStore} from '../models/calendar.store';
import {NavParams, NavController} from 'ionic-angular';
import {EventTypeService, EventType, EventInput} from '../models/eventType.service';
import {DayEvent} from '../models/dayEvent.model';
import {EventEditorPage} from '../../../pages/eventEditorPage/eventEditorPage';

interface IEventInputAndValue extends EventInput {
  value: string;
}

@Component({
  selector: 'create-event-form',
  templateUrl: './createEventForm.template.html'
})
export class CreateEventFormComponent implements OnInit {
  types: EventType[];
  date: moment.Moment;

  eventInputs: IEventInputAndValue[];

  eventTypeTitle: string;
  eventTypesPage: any;

  constructor(@Inject(NavParams) private navParams: NavParams,
    @Inject(NavController) private navController: NavController,
    @Inject(EventTypeService) private typeService: EventTypeService,
    @Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventEditorPage;
  }

  ngOnInit() {
    this.date = this.navParams.get('date');
    this.updateEvents();
    this.navController.viewWillEnter.subscribe(() => {
      this.updateEvents();
    });
  }

  private updateEvents() {
    this.types = this.typeService.getAllTypes();
    this.eventTypeTitle = _.get(this.types[0], 'title');
    this.makeInputs();
  }

  addEvent() {
    const event = new DayEvent(this.typeService.getType(this.eventTypeTitle));
    this.eventInputs.forEach((eventInput: IEventInputAndValue) => {
      event.data[eventInput.inputKind] = eventInput.value;
    });

    this.calendarStore.addEvent(this.date, event);
  }

  makeInputs() {
    const type = this.typeService.getType(this.eventTypeTitle);
    this.eventInputs = type.inputs.map((input: EventInput) => _.assign({}, input, {value: ''}));
  }

}
