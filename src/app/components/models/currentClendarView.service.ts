import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';
import * as _ from 'lodash';
import {EventTypeStore} from "./eventType.store";


@Injectable()
export class CurrentCalendarViewService {
    currentDate: moment.Moment;
    filterEventStream = new Subject<number[]>();

    private _filterEventId: number[] = [];

    constructor(private eventTypeStore: EventTypeStore) {
        this.currentDate = moment();
    }

    get filterEventId(): number[] {
        return this._filterEventId;
    }

    toggleFilterEventId(eventId) {
        this.setFilterEventId(_.xor(this.setFilterEventId, [eventId]));
    }

    setNoEventsFiltered() {
        this.setFilterEventId([]);
    }

    setAllEventsFiltered() {
        this.eventTypeStore.getAllTypes()
            .then((types) => {
                this.setFilterEventId(types.map(type => type.id));
            });
    }

    private setFilterEventId(id: number[]) {
        this._filterEventId = id;
        this.filterEventStream.next(id);
    }
}
