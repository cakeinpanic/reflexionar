export class Event {
  id: number;
  comment: string;


  constructor(text: string) {
    this.id = Date.now();
    this.comment = text;
  }

}
