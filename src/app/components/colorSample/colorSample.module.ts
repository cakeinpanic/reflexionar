import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IonicModule} from 'ionic-angular';
import {ColorSample} from './colorSample.component';
import {ColorpickerPopoverComponent} from './colorpickerPopover.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ColorSample
    ],
    declarations: [
        ColorSample,
        ColorpickerPopoverComponent
    ]
})
export class ColorSampleModule {
}
