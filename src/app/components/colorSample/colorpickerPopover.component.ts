
import {Component} from '@angular/core';
import {COLORS} from '../models/eventType.store';
import {ViewController} from 'ionic-angular';

@Component({
    templateUrl: './popover.template.html'
})
export class ColorpickerPopoverComponent {
    colors = COLORS;

    constructor(public viewCtrl: ViewController) {
    }

    select(selectedColor: string) {
        this.viewCtrl.dismiss(selectedColor);
    }

}