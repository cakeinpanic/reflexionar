import {Inject, Injectable} from '@angular/core';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Storage} from '@ionic/Storage';

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
    
    constructor({inputKind, title, id}: any) {
        this.id = id || Date.now();
        this.inputKind = inputKind;
        this.title = title;
    }
    
    getDataAsJSON() {
        return {
            id: this.id,
            inputKind: this.inputKind,
            title: this.title
        };
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
        this._id = params.id || Date.now();
        if (params.inputs) {
            this.inputs = params.inputs.map(input => new EventInput(input));
        }
    }
    
    get id(): number {
        return this._id;
    }
    
    getDataAsJSON() {
        return {
            id: this._id,
            title: this.title, color: this.color,
            inputs: this.inputs.map(input => input.getDataAsJSON())
        };
    }
}

@Injectable()
export class EventTypeService {
    
    private stream = new Subject<void>();
    
    constructor(@Inject(Storage) private storage: Storage) {
        // this.storage.clear();
        // this.saveType(new EventType({title: 'Running', color: '#991824'})).then((type) => {
        //     type.inputs.push(
        //         new EventInput({inputKind: INPUTS.Time, title: 'Time'}),
        //         new EventInput({inputKind: INPUTS.Story, title: 'Distance'})
        //     )
        //     this.saveType(type);
        // });
        //
        // this.saveType(new EventType({title: 'Saw airplane', color: '#0caa37'}))
        //     .inputs.push(new EventInput({inputKind: INPUTS.Time, title: 'When'}));
        //
    }
    
    get updateStream(): Observable<void> {
        return this.stream.asObservable();
    }
    
    saveType(type: EventType): Promise<EventType> {
        return this.storage.get(`type${type.id}`).then(typeasJSON => {
            if (!typeasJSON) {
                this.storage.set(`type${type.id}`, type.getDataAsJSON())
                    .then(() => this.sendNext());
                return type;
                
            }
            let updatedType = new EventType(typeasJSON);
            _.merge(updatedType, type);
            
            this.storage.set(`type${type.id}`, updatedType.getDataAsJSON())
                .then(() => this.sendNext());
            
            return updatedType;
        });
        
    }
    
    getAllTypes(): Promise<EventType[]> {
        return this.storage.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key.indexOf('type') > -1)
                        .map((key) => {
                            const id = /type(\d+)/.exec(key)[1];
                            
                            return this.getTypeByID(+id);
                        }));
            });
    }
    
    getTypeByID(id: number): Promise<EventType> {
        return this.storage.get(`type${id}`).then(data => {
            if (!data) {
                return null;
            }
            return new EventType(data);
        });
    }
    
    private sendNext() {
        this.stream.next();
    }
    
    removeType(typeId: number) {
        this.storage.remove(`type${typeId}`)
            .then(() => this.sendNext());
        
    }
    
}
