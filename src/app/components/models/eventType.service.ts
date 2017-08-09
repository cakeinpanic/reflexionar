import {Injectable} from '@angular/core';
import * as _ from 'lodash';

export class EventType {
  title: string = '';
  color: string = '#000000';
  inputs: any[];

  constructor(params = {}) {
    _.merge(this, params);
  }
}
@Injectable()
export class EventTypeService {
  private types: EventType[] = [];

  constructor() {
    this.saveType(new EventType({title: 'defaultType', color: '#000099'}));
    this.saveType(new EventType({title: 'secondType', color: '#AAA332'}));
  }

  saveType(type: EventType) {
    let existingType = _.find(this.types, {title: type.title});
    if (!existingType) {
      this.types.push(type);
      return;
    }
    _.merge(existingType, type);
  }

  getTypes(): EventType[] {
    return this.types;
  }

  removeType(typeToRemove: EventType) {
    _.remove(this.types, (type) => type.title === typeToRemove.title);
  }

  getEventByTitle(title: string): EventType {
    return _.find(this.types, (type)=>type.title === title);
  }

}
