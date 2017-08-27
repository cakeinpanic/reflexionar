import {Component, Inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {EventTypeService, EventType, INPUTS, EventInput, INPUT_TYPES} from '../models/eventType.service';
import * as _ from 'lodash';

@Component({
  selector: 'event-type-editor',
  templateUrl: './eventTypeEditor.template.html'
})
export class EventTypeEditor implements OnChanges {
  @Input() type: EventType;
  @Output() onClose = new EventEmitter<void>();

  creatingNew = false;
  inputs: EventInput[];
  inputTypeDetails = INPUT_TYPES.map((inputType) => this.getTypeDetails(inputType));

  constructor(@Inject(EventTypeService) private typeService: EventTypeService) {
  }

  get availableInputs(): any[] {
    return _.difference(INPUT_TYPES, this.inputs.map((inputType) => inputType.inputKind));
  }

  ngOnChanges() {
    this.creatingNew = !this.type.title;
    this.inputs = _.clone(this.type.inputs);
  }

  close() {
    this.onClose.emit();
  }

  saveType() {
    this.type.color = this.type.color || this.getColor();
    this.type.inputs = this.inputs;
    this.typeService.saveType(this.type);
    this.close();
  }

  removeInput(input) {
    _.remove(this.inputs, input);
  }

  addInput(inputType: INPUTS) {
    this.inputs.push(new EventInput({
      inputKind: inputType,
      title: this.inputTypeDetails[inputType].placeholder
    }));
  }

  getInputIcon(input: EventInput) {
    return this.inputTypeDetails[input.inputKind].icon;
  }

  private getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  private getTypeDetails(inputType: INPUTS) {
    switch (inputType) {
      case INPUTS.Time:
        return {icon: 'clock', addTitle: 'Add time input', placeholder: 'New time input'};
      case INPUTS.Story:
        return {icon: 'clipboard', addTitle: 'Add story input', placeholder: 'New story input'};
    }
  }

}
