import {Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
import {EventTypeService, EventType} from '../models/eventType.service';

@Component({
  selector: 'event-type-editor',
  templateUrl: './eventTypeEditor.template.html'
})
export class EventTypeEditor implements OnInit {
  @Input() type: EventType;
  @Input() creatingNew = false;

  @Output() onClose = new EventEmitter<void>();

  constructor(@Inject(EventTypeService) private typeService: EventTypeService) {
  }

  ngOnInit() {

  }

  close() {
    this.onClose.emit();
  }

  saveType() {
    this.type.color = this.type.color || this.getColor();
    this.typeService.saveType(this.type);
  }

  private getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
