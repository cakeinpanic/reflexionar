import {Injectable} from '@angular/core';
import * as _ from 'lodash';

export enum INPUTS { Time, Story };

export const INPUT_TYPES = [INPUTS.Time, INPUTS.Story];

export class EventInput {
  inputKind: INPUTS;
  title: string;

  constructor({inputKind, title}: EventInput) {
    this.inputKind = inputKind;
    this.title = title;
  }
}

export class EventType {
  title: string = '';
  color: string = '#000000';
  inputs: EventInput[] = [];

  constructor(params = {}) {
    _.merge(this, params);
  }
}

@Injectable()
export class EventTypeService {
  private types: EventType[] = [];

  constructor() {
    this.saveType(new EventType({title: 'Running', color: '#991824'}))
      .inputs.push(
      new EventInput({inputKind: INPUTS.Time, title: 'Time'}),
      new EventInput({inputKind: INPUTS.Story, title: 'Distance'})
    );

    this.saveType(new EventType({title: 'Saw airplane', color: '#0caa37'}))
      .inputs.push(new EventInput({inputKind: INPUTS.Time, title: 'When'}));

  }

  saveType(type: EventType) {
    let existingType = _.find(this.types, {title: type.title});
    if (!existingType) {
      this.types.push(type);
      return type;
    }
    _.merge(existingType, type);

    return existingType;
  }

  getAllTypes(): EventType[] {
    return this.types;
  }

  removeType(typeToRemove: EventType) {
    _.remove(this.types, (type) => type.title === typeToRemove.title);
  }

  getType(title: string): EventType {
    return _.find(this.types, (type) => type.title === title);
  }

}
