import {Injectable} from '@angular/core';
import * as _ from 'lodash';

export interface IEventType {
  title: string
  color: string
}
@Injectable()
export class EventTypeService {
  private types: IEventType[] = [];

  constructor() {
    this.addType('defaultType');
    this.addType('defaultType2');
  }

  addType(title: string) {
    if (title && !this.getEventByTitle(title)) {
      this.types.push({title: title, color: this.getColor()});
    }
  }

  getTypes(): IEventType[] {
    return this.types;
  }

  removeType(typeToRemove: IEventType) {
    _.remove(this.types, (type) => type.title === typeToRemove.title);
  }

  getEventByTitle(title: string): IEventType {
    return _.find(this.types, (type)=>type.title === title);
  }

  private getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }
}
