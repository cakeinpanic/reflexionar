import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {EventTypeService, EventType} from '../models/eventType.service';

@Component({
    selector: 'event-type-list',
    templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {
    
    @Output() onTypeSelect = new EventEmitter<EventType>();
    @Output() onAddNewClick = new EventEmitter<EventType>();
    types: EventType[];
    
    constructor(@Inject(EventTypeService) private typeService: EventTypeService) {
    
    }
    
    ngOnInit() {
        this.updateTypes();
        this.typeService.updateStream.subscribe(() => {
            this.updateTypes();
        });
    }
    
    edit(type: EventType) {
        this.onTypeSelect.emit(type);
    }
    
    updateTypes() {
        this.types = this.typeService.getAllTypes();
    }
    
    removeType(type: EventType) {
        this.typeService.removeType(type.id);
    }
    
    addNewEventType() {
        this.onAddNewClick.emit();
    }
}
