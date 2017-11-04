import {Component, OnInit, } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarStore} from '../models/calendar.store';
import {NavController} from 'ionic-angular';
import {EventTypeStore, EventType, EventInput, INPUTS} from '../models/eventType.store';
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
    types: EventType[] = [];
    date: moment.Moment;

    eventInputs: IEventInputAndValue[];

    selectedType: EventType;
    eventTypesPage: any;

    constructor( private navController: NavController,
                 private currentCalendarView: CurrentCalendarViewService,
                 private eventTypeStore: EventTypeStore,
                 private calendarStore: CalendarStore) {
        this.eventTypesPage = EventEditorPage;
        this.navController.viewWillEnter
            .filter(({component}) => component === DayViewPage)
            .subscribe(() => {
                this.updateEvents();
            });
    }

    ngOnInit() {
        this.date = this.currentCalendarView.currentDate;

    }

    private updateEvents() {
        this.eventTypeStore.getAllTypes().then((types) => {
            this.types = types;
            if (types.length > 0) {
                this.selectedType = this.types[0];
                this.makeInputs();
            }
        });

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

    isTimeInput(input: EventInput) {
        return input.inputKind === INPUTS.Time;
    }

    isStoryInput(input: EventInput) {
        return input.inputKind === INPUTS.Story;
    }
}
