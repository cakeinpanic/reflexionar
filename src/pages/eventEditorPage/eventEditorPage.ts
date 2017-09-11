import {Component, Inject, OnInit} from '@angular/core';
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
    editingType: EventType;
    
    constructor(@Inject(CurrentCalendarViewService) private currentCalendarView: CurrentCalendarViewService,
                @Inject(ModalController) private modalController: ModalController,
                @Inject(NavController) private navController: NavController) {
        
    }
    
    ngOnInit() {
        this.setBackButton();
        this.navController.viewWillEnter
            .filter(({component}) => component === EventEditorPage)
            .subscribe(() => {
                this.setBackButton();
            });
        
    }
    
    addNew() {
        this.editingType = new EventType();
    }
    
    onClose() {
        this.editingType = null;
    }
    
    startEdit(type: EventType) {
        this.editingType = type;
        let modal = this.modalController.create(EventTypeEditor, {type: this.editingType});
        modal.present();
        // modal.onDidDismiss(() => this.onClose());
    }
    
    private setBackButton() {
        const date = this.currentCalendarView.currentDate;
        this.navController.getActive().getNavbar().setBackButtonText(`${date.format('DD.MM')}`);
    }
    
}
