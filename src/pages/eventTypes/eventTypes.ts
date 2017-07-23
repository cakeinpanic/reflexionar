import {Component, Inject, OnInit} from '@angular/core';
import {TypeService, IEventType} from "../components/models/type.service";

@Component({
  selector: 'page-eventTypes',
  templateUrl: 'eventTypes.html'
})
export class EventTypesPage implements  OnInit{

  types: IEventType[];
  typeName: string = '';
  constructor(@Inject(TypeService) private typeService: TypeService) {

  }

  ngOnInit() {
    this.updateTypes();
  }

  updateTypes() {
    this.types = this.typeService.getTypes();
  }

  addType() {
    this.typeService.addType(this.typeName);
    this.updateTypes();
  }

}
