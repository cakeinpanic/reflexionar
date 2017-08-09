import {EventType} from './eventType.service';
export class DayEvent {
  id: number;
  comment: string;
  type: EventType;

  constructor(type: EventType, text: string) {
    this.id = Date.now();
    this.comment = text;
    this.type = type;
  }

}
