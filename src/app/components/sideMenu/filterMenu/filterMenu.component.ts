import {Component,} from '@angular/core';
import {EventType} from '../../models/eventType.store';
import {CurrentCalendarViewService} from '../../models/currentClendarView.service';

@Component({
    selector: 'filter-menu',
    templateUrl: './filterMenu.template.html'
})
export class FilterMenuComponent {
    constructor(private currentViewService: CurrentCalendarViewService) {
    }

    filterByType(event: EventType) {
        this.currentViewService.toggleFilterEventId(event.id);
    }

    setNone() {
        this.currentViewService.setNoEventsFiltered();
    }

    setAll() {
        this.currentViewService.setAllEventsFiltered();
    }

}
