import {Component} from '@angular/core';
import {EventType} from '../../app/components/models/eventType.service';

@Component({
  selector: 'page-edit-event-types',
  templateUrl: './eventEditorPage.html'
})
export class EventEditorPage {
  editingType: EventType;

  addNew() {
    this.editingType = new EventType();
  }

  onClose() {
    this.editingType = null;
  }

  startEdit(type: EventType) {
    this.editingType = type;
  }
}
