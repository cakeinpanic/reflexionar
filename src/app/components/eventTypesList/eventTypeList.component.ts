import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {EventTypeStore, EventType} from '../models/eventType.store';
import {AlertController} from 'ionic-angular';
import {CalendarStore} from '../models/calendar.store';

@Component({
    selector: 'event-type-list',
    templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {
    
    @Output() onTypeSelect = new EventEmitter<EventType>();
    @Output() onAddNewClick = new EventEmitter<EventType>();
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
        this.calendarStore.hasEventsOfType(type.id)
            .then((hasEvents: boolean) => {
                if (hasEvents) {
                    let alert = this.alertCtrl.create({
                        title: 'Can\'t remove type',
                        subTitle: 'There are event of this type',
                        buttons: ['Ok']
                    });
                    
                    alert.present();
                    return;
                }
                this.eventTypeStore.removeType(type.id);
            });
        
    }
    
    addNewEventType() {
        this.onAddNewClick.emit();
    }
}
