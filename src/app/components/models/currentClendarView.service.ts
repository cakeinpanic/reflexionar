import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CurrentCalendarViewService {
    currentDate: moment.Moment;
    filterEventStream = new Subject<number>();
    private _filterEventId: number;

    constructor() {
        this.currentDate = moment();
    }

    set filterEventId(id: number) {
        this._filterEventId = id;
        this.filterEventStream.next(id);
    }

    get filterEventId(): number {
        return this._filterEventId;
    }
}
