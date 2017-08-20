import {Component, Inject, OnInit} from '@angular/core';
import {EventType} from '../../app/components/models/eventType.service';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-edit-event-types',
  templateUrl: './eventEditorPage.html'
})
export class EventEditorPage implements OnInit {
  editingType: EventType;

  constructor(@Inject(NavParams) private navParams: NavParams,
              @Inject(NavController) private navController: NavController) {

  }

  ngOnInit() {
    this.setBackButton();
    this.navController.viewWillEnter.subscribe(() => {
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
  }


  private setBackButton() {
    const date = this.navParams.get('date');
    this.navController.getActive().getNavbar().setBackButtonText(`${date.format('DD.MM')}`);
  }

}
