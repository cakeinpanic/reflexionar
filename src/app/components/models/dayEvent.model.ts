import {EventType, IEventInput} from './eventType.service';

export class DayEvent {
  id: number;
  type: EventType;

  data = {};

  constructor(type: EventType) {
    this.id = Date.now();
    this.type = type;
    this.makeDataFields();
  }

  private makeDataFields() {
    this.type.inputs.forEach((input: IEventInput) => {
      this.data[input.input] = '';
    });
  }

}
