import {Component, Inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {EventTypeStore, EventType, INPUTS, EventInput, INPUT_TYPES} from '../models/eventType.store';
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
    
    constructor(@Inject(EventTypeStore) private eventTypeStore: EventTypeStore) {
    }
    
    get availableInputs(): any[] {
        return _.difference(INPUT_TYPES, this.inputs.map((inputType) => inputType.inputKind));
    }
    
    get formValid(): boolean {
        return !!this.type.title && this.inputs.every((input) => !!input.title);
    }
    
    changeColor(newColor: string) {
        this.type.color = newColor;
    }
    
    ngOnChanges() {
        this.creatingNew = !this.type.title;
        this.inputs = _.clone(this.type.inputs);
    }
    
    close() {
        this.onClose.emit();
    }
    
    saveType() {
        this.type.inputs = this.inputs;
        this.eventTypeStore.saveType(this.type);
        this.close();
    }
    
    removeInput(input) {
        _.remove(this.inputs, input);
    }
    
    addInput(inputType: INPUTS) {
        this.inputs.push(new EventInput({
            inputKind: inputType,
            title: ''
        }));
    }
    
    getInputIcon(input: EventInput) {
        return this.inputTypeDetails[input.inputKind].icon;
    }
    
    getInputPlaceholder(input: EventInput) {
        return this.inputTypeDetails[input.inputKind].placeholder;
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
