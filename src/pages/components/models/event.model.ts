export class Event {
  id: number;
  comment: string;
  type: string;

  constructor(type: string, text: string) {
    this.id = Date.now();
    this.comment = text;
    this.type = type;
  }

}
