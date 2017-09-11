import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PopoverController} from 'ionic-angular';
import {ColorpickerPopoverComponent} from './colorpickerPopover.component';

@Component({
    selector: 'color-sample',
    templateUrl: './colorSample.template.html'
})
export class ColorSample {
    @Input() color: string;
    @Input() small: boolean;
    @Input() big: boolean;
    @Input() popover: boolean;
    @Input() clickable = false;
    
    @Output() onColorChange = new EventEmitter();
    
    constructor(public popoverCtrl: PopoverController) {
    }
    
    presentPopover(clickEvent: MouseEvent) {
        if (this.clickable && !this.popover) {
            let popover = this.popoverCtrl.create(ColorpickerPopoverComponent);
            popover.present({
                ev: clickEvent
            });
            popover.onDidDismiss((selectedColor: string) => {
                if (selectedColor && this.color !== selectedColor) {
                    this.onColorChange.emit(selectedColor);
                }
            });
            
        }
    }
}

