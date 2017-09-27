import {Component, Inject} from '@angular/core';
import {EventType} from '../models/eventType.store';
import {CurrentCalendarViewService} from '../models/currentClendarView.service';
import {MenuController} from 'ionic-angular';

@Component({
    selector: 'filter-menu',
    templateUrl: './filterMenu.template.html'
})
export class FilterMenuComponent {
    constructor(@Inject(MenuController) public menuCtrl: MenuController,
        @Inject(CurrentCalendarViewService) private currentViewService: CurrentCalendarViewService) {

    }

    filterByType(event: EventType) {
        this.currentViewService.filterEventId = event.id;
        this.menuCtrl.close();
    }

    reset() {
        this.currentViewService.filterEventId = null;
        this.menuCtrl.close();
    }

}
