import * as moment from 'moment';
import * as _ from 'lodash';
import {DayEvent, DayEventData} from './dayEvent.model';
import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {EventType, EventTypeService} from './eventType.service';
import {Storage} from '@ionic/Storage';

@Injectable()
export class CalendarStore {
    types: string[];
    
    private stream = new Subject<number>();
    
    constructor(@Inject(EventTypeService) private typeService: EventTypeService,
                @Inject(Storage) private storage: Storage) {
        
    }
    
    get eventStream(): Observable<number> {
        return this.stream.asObservable();
    }
    
    getEventsById(dateId: number): Promise<DayEvent[]> {
        return this.storage.get(`event${dateId}`)
            .then(data => {
                    if (data) {
                        return Promise.all(data.map((event) => this.dayEventFromJSON(event)));
                    }
                    return [];
                }
            );
    }
    
    removeEvent(date: moment.Moment, eventToDelete: DayEvent) {
        const dateId = this.getDateId(date);
        this.storage.get(`event${dateId}`).then(data => {
            _.remove(data, {id: eventToDelete.id});
            this.storage.set(`event${dateId}`, data)
                .then(() => this.sendNext(dateId));
            
        });
        
    }
    
    addEvent(date: any, event: DayEvent) {
        
        const dateId = this.getDateId(date);
        let eventAsJSON = event.dataAsJSON;
        
        this.storage.get(`event${dateId}`).then(data => {
                if (data) {
                    return this.storage.set(`event${dateId}`, data.concat(eventAsJSON))
                } else {
                    return this.storage.set(`event${dateId}`, [eventAsJSON])
                }
                
            })
            .then(() => this.sendNext(dateId));
        
    }
    
    getDateId(date: moment.Moment): number {
        return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).valueOf();
    }
    
    private dayEventFromJSON(json: DayEventData): Promise<DayEvent> {
        return this.typeService.getTypeByID(json.typeId)
            .then((type: EventType) => {
                return new DayEvent(type, json);
            });
    }
    
    private sendNext(dateId) {
        this.stream.next(dateId);
    }
}
