import {EventType, EventInput, INPUTS} from './eventType.service';
import * as _ from 'lodash';

export class DayEvent {
    id: number;
    private type: EventType;
    
    private data: { [key: string]: string } = {};
    
    constructor(type: EventType) {
        this.id = Date.now();
        this.type = type;
        this.makeDataFields();
    }
    
    changeInputData(inputKind: INPUTS, value: string) {
        if (this.hasThisInput(inputKind)) {
            this.data[inputKind] = value;
        }
    }
    
    getInputs(): EventInput[] {
        return this.type.inputs;
    }
    
    getInputData(inputKind: INPUTS) {
        if (this.hasThisInput(inputKind)) {
            return this.data[inputKind];
        }
    }
    
    private hasThisInput(inputKind: INPUTS): boolean {
        if (_.isNil(this.data[inputKind])) {
            throw new Error(`no field ${inputKind} in event ${this.type}`);
        }
        return true;
    }
    
    private makeDataFields() {
        this.type.inputs.forEach((input: EventInput) => {
            this.data[input.inputKind] = '';
        });
    }
    
}
