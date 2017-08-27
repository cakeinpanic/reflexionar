import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CurrentCalendarViewService {
    currentDate: moment.Moment;
    
    constructor() {
        this.currentDate = moment();
    }
}
