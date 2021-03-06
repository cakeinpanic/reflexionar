import * as moment from 'moment';
import * as _ from 'lodash';
import {DayEvent, DayEventData} from './dayEvent.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import {EventType, EventTypeStore} from './eventType.store';
import {Storage} from '@ionic/Storage';

@Injectable()
export class CalendarStore {

    private store: { [key: string]: DayEvent[] } = {};
    private stream = new Subject<number>();

    private affectedIds: number[] = [];

    constructor(private eventTypeStore: EventTypeStore,
                private storage: Storage) {
    }

    init(): Promise<any> {
        return this.getAllFromStore()
            .then(() => {
                console.log(this.store);
                this.affectedIds.length = 0;
            });
    }

    syncData(): Promise<any> {
        return Promise.all(
            this.affectedIds.map((id) => {
                const key = this.getKeyFromId(id);
                if (this.store[id]) {
                    return this.storage.set(key, this.store[id].map((event: DayEvent) => event.dataAsJSON));
                }
                return this.storage.remove(key);
            })).then(() => {
            this.affectedIds.length = 0;
        });
    }

    getEventsOfType(typeId: number): Promise<moment.Moment[]> {
        return Promise.resolve(
            _.map(
                this.store,
                (events, key) => events.some((event: DayEvent) => event.isOfTypeId(typeId)) && key
            ).filter(data => !!data).map(dayID => {
                return moment(`/Date(${dayID})/`);
            })
        );
    }

    get eventStream(): Observable<number> {
        return this.stream.asObservable();
    }

    getEventsById(dateId: number): Promise<DayEvent[]> {
        return Promise.resolve(
            this.store[dateId]
                ? this.store[dateId]
                : []
        );
    }

    removeEvent(date: moment.Moment, eventToDelete: DayEvent) {
        const dateId = this.getDateId(date);
        this.affectedIds.push(dateId);
        _.remove(this.store[dateId], {id: eventToDelete.id});

        this.sendNext(dateId);
        this.syncData();
    }

    addEvent(date: any, event: DayEvent) {
        const dateId = this.getDateId(date);
        this.affectedIds.push(dateId);

        if (this.store[dateId]) {
            this.store[dateId].push(event);
        } else {
            this.store[dateId] = [event];
        }

        this.syncData();
        this.sendNext(dateId);

    }

    getDateId(date: moment.Moment): number {
        return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).valueOf();
    }

    clearAll() {
        this.getEventKeys().then(keys =>
            keys.forEach((key) => {
                this.storage.remove(key);
            })
        );
    }

    private getEventKeys(): Promise<string[]> {
        return this.storage.keys()
            .then(keys => keys.filter((key) => key.indexOf('event') > -1));
    }

    private getAllFromStore(): Promise<any> {
        return this.getEventKeys()
            .then(keys => Promise.all(keys.map((key) => this.getDataFromStorageByKey(key))));
    }

    private getDataFromStorageByKey(key: string): Promise<DayEvent[]> {
        let dayId = this.getDateFormKey(key);
        return this.storage.get(key)
            .then((dayEventsData) => Promise.all(dayEventsData.map(json => this.dayEventFromJSON(json))))
            .then((events: DayEvent[]) => this.store[dayId] = events);
    }

    private dayEventFromJSON(json: DayEventData): Promise<DayEvent> {
        return this.eventTypeStore.getTypeByID(json.typeId)
            .then((type: EventType) => new DayEvent(type, json))
            .catch(() => null);
    }

    private sendNext(dateId) {
        this.stream.next(dateId);
    }

    private getDateFormKey(key: string): string {
        return /event(\d+)/.exec(key)[1];
    }

    private getKeyFromId(id: number): string {
        return `event${id}`;
    }

}
