import * as moment from 'moment';
import * as _ from 'lodash';
import {DayEvent} from './dayEvent.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CalendarStore {
    types: string[];
    private store: { [key: string]: DayEvent[] } = {};
    
    private stream = new Subject<number>();
    
    get eventStream(): Observable<number> {
        return this.stream.asObservable();
    }
    
    getEventsById(dateId: number): Promise<DayEvent[]> {
        return Promise.resolve(this.store[dateId] || []);
    }
    
    getEventsByDate(date: any): Promise<DayEvent[]> {
        const dateId = this.getDateId(date);
        return this.getEventsById(dateId);
    }
    
    removeEvent(date: moment.Moment, eventToDelete: DayEvent) {
        const dateAsUTC = this.getDateId(date);
        _.remove(this.store[dateAsUTC], {id: eventToDelete.id});
        this.stream.next(dateAsUTC);
    }
    
    addEvent(date: any, event: DayEvent) {
        
        const dateId = this.getDateId(date);
        
        if (this.store[dateId]) {
            this.store[dateId].push(event);
        } else {
            this.store[dateId] = [event];
        }
        
        this.stream.next(dateId);
    }
    
    clearInfo(date: any) {
        const dateId = this.getDateId(date);
        this.store[dateId] = [];
        
        this.stream.next(dateId);
    }
    
    getDateId(date: moment.Moment): number {
        return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).valueOf();
    }
}
