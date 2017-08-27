import {Component, OnInit, Inject} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarStore} from '../models/calendar.store';
import {NavController} from 'ionic-angular';
import {EventTypeService, EventType, EventInput} from '../models/eventType.service';
import {DayEvent} from '../models/dayEvent.model';
import {EventEditorPage} from '../../../pages/eventEditorPage/eventEditorPage';
import {CurrentCalendarViewService} from '../models/currentClendarView.service';
import {DayViewPage} from '../../../pages/dayViewPage/dayViewPage';

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

  selectedType: EventType;
  eventTypesPage: any;

  constructor(@Inject(NavController) private navController: NavController,
              @Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
              @Inject(EventTypeService) private typeService: EventTypeService,
              @Inject(CalendarStore) private calendarStore: CalendarStore) {
    this.eventTypesPage = EventEditorPage;
  }

  ngOnInit() {
    this.date = this.currentCalendarView.currentDate;
    this.updateEvents();
    this.navController.viewWillEnter
      .filter(({component}) => component === DayViewPage)
      .subscribe(() => {
      this.updateEvents();
    });
  }

  private updateEvents() {
    this.types = this.typeService.getAllTypes();
    this.selectedType = this.types[0];
    this.makeInputs();
  }

  addEvent() {
    const event = new DayEvent(this.selectedType);
    this.eventInputs.forEach((eventInput: IEventInputAndValue) => {
      event.changeInputData(eventInput.inputKind, eventInput.value);
    });

    this.calendarStore.addEvent(this.date, event);
  }

  makeInputs() {
    const type = this.selectedType;
    this.eventInputs = type.inputs.map((input: EventInput) => _.assign({}, input, {value: ''}));
  }

}
