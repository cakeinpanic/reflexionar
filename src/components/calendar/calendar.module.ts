
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Calendar} from './calendar.component';
@NgModule({
  imports: [CommonModule],
  exports: [
    Calendar
  ],
  declarations: [
    Calendar
  ]
})
export class CalendarModule {}
