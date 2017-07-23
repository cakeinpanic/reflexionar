import {IEventType} from "./type.service";
export class Event {
  id: number;
  comment: string;
  type: IEventType;

  constructor(type: IEventType, text: string) {
    this.id = Date.now();
    this.comment = text;
    this.type = type;
  }

}
