import {Component, OnInit, Inject} from '@angular/core';
import {EventTypeService, IEventType} from '../models/eventType.service';

@Component({
  selector: 'event-type-editor',
  templateUrl: './eventTypeEditor.template.html'
})
export class EventTypeEditor implements OnInit {

  types: IEventType[];
  typeName: string = '';
  constructor(@Inject(EventTypeService) private typeService: EventTypeService) {

  }

  ngOnInit() {
    this.updateTypes();
  }

  updateTypes() {
    this.types = this.typeService.getTypes();
  }

  addType() {
    this.typeService.addType(this.typeName);
    this.updateTypes();
  }
}
