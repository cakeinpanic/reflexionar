import {Component, OnInit} from '@angular/core';
import {EventType} from '../../app/components/models/eventType.store';
import {NavController} from 'ionic-angular';
import {CurrentCalendarViewService} from '../../app/components/models/currentClendarView.service';
import {ModalController} from 'ionic-angular';
import {EventTypeEditor} from '../../app/components/eventTypesEditor/eventTypeEditor.component';

@Component({
    selector: 'page-edit-event-types',
    templateUrl: './eventEditorPage.html'
})
export class EventEditorPage implements OnInit {

    constructor( private currentCalendarView: CurrentCalendarViewService,
                 private modalController: ModalController,
                 private navController: NavController) {

    }

    ngOnInit() {
        this.setBackButton();
        this.navController.viewWillEnter
            .filter(({component}) => component === EventEditorPage)
            .subscribe(() => {
                this.setBackButton();
            });

    }

    onClose() {
    }

    startEdit(type: EventType) {
        let modal = this.modalController.create(EventTypeEditor, {type});
        modal.present();
        modal.onDidDismiss(() => this.onClose());
    }

    private setBackButton() {
        const date = this.currentCalendarView.currentDate;
        this.navController.getActive().getNavbar().setBackButtonText(`${date.format('DD.MM')}`);
    }

}
