import {Component, Input} from '@angular/core';

@Component({
    selector: 'color-sample',
    template: '<div class="inner" [class.small]="small" [style.background]="color"></div>'
})
export class ColorSample {
    @Input() color: string;
    @Input() small: boolean;
    
}
