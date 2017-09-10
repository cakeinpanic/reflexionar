import {EventType, EventInput, INPUTS} from './eventType.store';
import * as _ from 'lodash';

export interface  DayEventData {
    id: number;
    data:  { [key: string]: string };
    typeId: number;
}
export class DayEvent {
    id: number;
    private type: EventType;
    
    private data: { [key: string]: string } = {};
    
    constructor(type: EventType, override: any = {}) {
        this.id = Date.now();
        this.type = type;
        this.id = override.id || this.id;
        this.data = override.data || this.data;
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
    
    get dataAsJSON() {
        return {
            id: this.id,
            typeId: this.type.id,
            data: this.data
        };
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
