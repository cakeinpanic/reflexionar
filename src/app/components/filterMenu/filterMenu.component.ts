import {Component, } from '@angular/core';
import {EventType} from '../models/eventType.store';
import {CurrentCalendarViewService} from '../models/currentClendarView.service';
import {MenuController} from 'ionic-angular';
import * as _ from 'lodash';

@Component({
    selector: 'filter-menu',
    templateUrl: './filterMenu.template.html'
})
export class FilterMenuComponent {
    constructor( public menuCtrl: MenuController,
         private currentViewService: CurrentCalendarViewService) {

    }

    filterByType(event: EventType) {
        this.currentViewService.filterEventId = _.xor(this.currentViewService.filterEventId, [event.id]);
        this.menuCtrl.close();
    }

    reset() {
        this.currentViewService.filterEventId = [];
        this.menuCtrl.close();
    }

}
