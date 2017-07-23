import {Injectable} from "@angular/core";
import * as _ from 'lodash';

export interface IEventType {
  title: string
  color: string
}
@Injectable()
export class TypeService {
  private types: IEventType[] = [];

  constructor() {
    this.addType('defaultType');
    this.addType('defaultType2');
  }

  addType(name: string) {
    if (name && !_.find(this.types, (type)=>type.title === name)) {
      this.types.push({title: name, color: this.getColor()});
    }
  }

  getTypes(): IEventType[] {
    return this.types;
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
