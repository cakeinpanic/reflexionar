import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {EventTypeStore, EventType} from '../models/eventType.store';
import {AlertController} from 'ionic-angular';
import {CalendarStore} from '../models/calendar.store';
import {DayEvent} from '../models/dayEvent.model';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
    selector: 'event-type-list',
    templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {

    @Output() onTypeSelect = new EventEmitter<EventType>();
    types: EventType[];

    constructor(@Inject(EventTypeStore) private eventTypeStore: EventTypeStore,
        @Inject(AlertController) private alertCtrl: AlertController,
        @Inject(CalendarStore) private calendarStore: CalendarStore) {

    }

    ngOnInit() {
        this.updateTypes();
        this.eventTypeStore.updateStream.subscribe(() => {
            this.updateTypes();
        });
    }

    edit(type: EventType) {
        this.onTypeSelect.emit(type);
    }

    updateTypes() {
        this.eventTypeStore.getAllTypes().then(types => {
            this.types = types;
        });

    }

    removeType(event: MouseEvent, type: EventType) {
        event.stopPropagation();
        this.calendarStore.getEventsOfType(type.id).then((events: moment.Moment[]) => {
            if (events.length) {
                console.log(events);
                let daysList = _.take(events, 2).map(event => event.format('DD/MM/YY')).join(',');
                if (daysList.length > 2) {
                    daysList += '...';
                }
                let alert = this.alertCtrl.create({
                    title: 'Can\'t remove type',
                    subTitle: `There are event(s) of this type on days:${daysList}`,
                    buttons: ['Ok']
                });

                alert.present();
                return;
            }
            this.eventTypeStore.removeType(type.id);
        });

    }

    addNewEventType() {
        this.onTypeSelect.emit(new EventType());
    }
}
