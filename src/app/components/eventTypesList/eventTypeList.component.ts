import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {EventTypeStore, EventType} from '../models/eventType.store';
import {AlertController} from 'ionic-angular';
import {CalendarStore} from '../models/calendar.store';

import * as _ from 'lodash';
import * as moment from 'moment';
import {CurrentCalendarViewService} from '../models/currentClendarView.service';

@Component({
    selector: 'event-type-list',
    templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {
    @Input() filterMenuMode = false;
    @Output() onTypeSelect = new EventEmitter<EventType>();
    types: EventType[];

    constructor(private eventTypeStore: EventTypeStore,
                private currentViewService: CurrentCalendarViewService,
                private alertCtrl: AlertController,
                private calendarStore: CalendarStore) {

    }

    ngOnInit() {
        this.updateTypes();
        this.eventTypeStore.updateStream.subscribe(() => {
            this.updateTypes();
        });
    }

    isTypeFiltered(type: EventType) {
        return _.includes(this.currentViewService.filterEventId, type.id);
    }

    edit(type: EventType) {
        this.onTypeSelect.emit(type);
    }

    updateTypes() {
        this.eventTypeStore.getAllTypes()
            .then(types => {
                this.types = types;
            });

    }

    removeType(event: MouseEvent, type: EventType) {
        event.stopPropagation();
        this.calendarStore.getEventsOfType(type.id)
            .then((events: moment.Moment[]) => {
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
