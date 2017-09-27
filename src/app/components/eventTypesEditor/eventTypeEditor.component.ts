import {Component, Inject, Input, OnInit} from '@angular/core';
import {EventTypeStore, EventType, INPUTS, EventInput, INPUT_TYPES} from '../models/eventType.store';
import * as _ from 'lodash';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
    selector: 'event-type-editor',
    templateUrl: './eventTypeEditor.template.html'
})
export class EventTypeEditor implements OnInit {
    @Input() type: EventType;

    inputs: EventInput[];
    inputTypeDetails = INPUT_TYPES.map((inputType) => this.getTypeDetails(inputType));

    title: string;

    constructor(@Inject(EventTypeStore) private eventTypeStore: EventTypeStore,
                private viewCtrl: ViewController,
                private params: NavParams) {
    }

    get availableInputs(): any[] {
        return INPUT_TYPES;
        //_.difference(INPUT_TYPES, this.inputs.map((inputType) => inputType.inputKind));
    }

    get formValid(): boolean {
        return !!this.title && this.inputs.every((input) => !!input.title);
    }

    changeColor(newColor: string) {
        this.type.color = newColor;
    }

    ngOnInit() {
        this.type = this.params.get('type');
        this.title = this.type.title;
        this.inputs = _.cloneDeep(this.type.inputs);
    }

    close() {
        this.viewCtrl.dismiss().catch(() => {});
    }

    saveType() {
        this.type.inputs = _.cloneDeep(this.inputs);
        this.type.title = this.title;
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
                return {icon: 'clock-outline', addTitle: 'Add time input', placeholder: 'New time input'};
            case INPUTS.Story:
                return {icon: 'clipboard-outline', addTitle: 'Add text input', placeholder: 'New text input'};
        }
    }

}
