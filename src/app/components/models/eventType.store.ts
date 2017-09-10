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
    
    get dataAsJSON() {
        return {
            id: this._id,
            title: this.title, color: this.color,
            inputs: this.inputs.map(input => input.getDataAsJSON())
        };
    }
}

@Injectable()
export class EventTypeStore {
    
    private stream = new Subject<void>();
    private types: EventType[] = [];
    
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
    
    init(): Promise<any> {
        return this.getAllDataFromStore().then(() => {
            console.log(this.types);
        });
    }
    
    get updateStream(): Observable<void> {
        return this.stream.asObservable();
    }
    
    syncData(): Promise<any> {
        return this.clearAllTypesFromStorage()
            .then(() => {
                return Promise.all(this.types.map((type) =>
                    this.storage.set(this.makeKeyFromId(type.id), type.dataAsJSON)));
            });
    }
    
    private getAllDataFromStore(): Promise<EventType[]> {
        return this.getAllStorageKeys()
            .then((keys) =>
                Promise.all(keys.map(key => this.getTypeFromStorage(key)))
            );
    }
    
    private getTypeFromStorage(key: string): Promise<EventType> {
        return this.storage.get(key).then(data => {
            if (!data) {
                return null;
            }
            this.types.push(new EventType(data));
        });
    }
    
    private sendNext() {
        this.stream.next();
    }
    
    clearAllTypesFromStorage(): Promise<any> {
        return this.getAllStorageKeys()
            .then((keys) => Promise.all(keys.map(key => this.storage.remove(key))));
    }
    
    saveType(type: EventType) {
        let existingType = _.find(this.types, {id: type.id});
        
        if (!existingType) {
            this.types.push(type);
        } else {
            _.merge(existingType, type);
        }
        
        this.syncData();
        this.sendNext();
        return existingType || type;
    }
    
    getAllTypes(): Promise<EventType[]> {
        return Promise.resolve(this.types);
    }
    
    getTypeByID(id: number): Promise<EventType> {
        return Promise.resolve(_.find(this.types, {id}));
    }
    
    removeType(typeId: number) {
        _.remove(this.types, {id: typeId});
        
        this.syncData();
        this.sendNext();
    }
    
    private getAllStorageKeys(): Promise<string[]> {
        return this.storage.keys()
            .then(keys => keys.filter(key => key.indexOf('type') > -1));
    }
    
    private makeKeyFromId(id: number): string {
        return `type${id}`;
    }
}
