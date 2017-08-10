import {Component, OnInit, Inject} from '@angular/core';
import {EventTypeService, EventType} from '../models/eventType.service';

@Component({
  selector: 'event-type-list',
  templateUrl: './eventTypeList.template.html'
})
export class EventTypeList implements OnInit {

  types: EventType[];
  isEditing = false;
  editingType: EventType;
  creatingNew = false;

  constructor(@Inject(EventTypeService) private typeService: EventTypeService) {

  }

  ngOnInit() {
    this.updateTypes();
  }

  addNew() {
    this.isEditing = true;
    this.creatingNew = true;
    this.editingType = new EventType();
  }

  edit(type: EventType) {
    this.isEditing = true;
    this.creatingNew = false;
    this.editingType = type;
  }

  updateTypes() {
    this.types = this.typeService.getAllTypes();
  }
}
