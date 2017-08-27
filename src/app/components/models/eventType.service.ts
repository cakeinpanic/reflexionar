import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

export function getColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

export enum INPUTS { Time, Story }

export const INPUT_TYPES = [INPUTS.Time, INPUTS.Story];

export class EventInput {
    inputKind: INPUTS;
    title: string;
    private id: number;
    
    constructor({inputKind, title}) {
        this.id = Date.now();
        this.inputKind = inputKind;
        this.title = title;
    }
}

export class EventType {
    title: string = '';
    color: string = '#000000';
    inputs: EventInput[] = [];
    
    _id: number;
    
    constructor(params: any = {}) {
        _.merge(this, params);
        if (!params.color) {
            this.color = getColor();
        }
        this._id = Date.now();
    }
    
    get id(): number {
        return this._id;
    }
    
}

@Injectable()
export class EventTypeService {
    private types: EventType[] = [];
    private stream = new Subject<void>();
    
    constructor() {
        this.saveType(new EventType({title: 'Running', color: '#991824'}))
            .inputs.push(
            new EventInput({inputKind: INPUTS.Time, title: 'Time'}),
            new EventInput({inputKind: INPUTS.Story, title: 'Distance'})
        );
        
        this.saveType(new EventType({title: 'Saw airplane', color: '#0caa37'}))
            .inputs.push(new EventInput({inputKind: INPUTS.Time, title: 'When'}));
        
    }
    
    get updateStream(): Observable<void> {
        return this.stream.asObservable();
    }
    
    saveType(type: EventType) {
        let existingType = _.find(this.types, {title: type.title});
        
        if (!existingType) {
            this.types.push(type);
        } else {
            _.merge(existingType, type);
        }
        
        this.stream.next();
        return existingType || type;
    }
    
    getAllTypes(): EventType[] {
        return this.types;
    }
    
    removeType(typeId: number) {
        _.remove(this.types, {id: typeId});
        this.stream.next();
    }
    
}
