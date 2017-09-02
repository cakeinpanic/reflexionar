import * as moment from 'moment';
import * as _ from 'lodash';
import {DayEvent} from './dayEvent.model';
import {Inject, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {EventTypeService} from './eventType.service';

@Injectable()
export class CalendarStore {
    types: string[];
    private store: { [key: string]: any[] } = {};
    
    private stream = new Subject<number>();
    
    constructor(@Inject(EventTypeService) private typeService: EventTypeService) {
    
    }
    
    get eventStream(): Observable<number> {
        return this.stream.asObservable();
    }
    
    getEventsById(dateId: number): Promise<DayEvent[]> {
        return Promise.resolve(
            this.store[dateId]
                ? this.store[dateId].map((event) => this.dayEventFromJSON(event))
                : []
        );
    }
    
    removeEvent(date: moment.Moment, eventToDelete: DayEvent) {
        const dateAsUTC = this.getDateId(date);
        _.remove(this.store[dateAsUTC], {id: eventToDelete.id});
        this.stream.next(dateAsUTC);
    }
    
    addEvent(date: any, event: DayEvent) {
        
        const dateId = this.getDateId(date);
        let eventAsJSON = event.dataAsJSON;
        
        if (this.store[dateId]) {
            this.store[dateId].push(eventAsJSON);
        } else {
            this.store[dateId] = [eventAsJSON];
        }
        
        this.stream.next(dateId);
    }
    
    getDateId(date: moment.Moment): number {
        return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).valueOf();
    }
    
    private dayEventFromJSON(json: any) {
        const type = this.typeService.getTypeByID(json.typeId);
        return new DayEvent(type, json);
    }
}
