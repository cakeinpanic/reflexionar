import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {EventTypeStore, EventType} from '../models/eventType.store';

@Component({
    selector: 'event-type-list',
    templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {
    
    @Output() onTypeSelect = new EventEmitter<EventType>();
    @Output() onAddNewClick = new EventEmitter<EventType>();
    types: EventType[];
    
    constructor(@Inject(EventTypeStore) private eventTypeStore: EventTypeStore) {
    
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
        this.eventTypeStore.removeType(type.id);
    }
    
    addNewEventType() {
        this.onAddNewClick.emit();
    }
}
