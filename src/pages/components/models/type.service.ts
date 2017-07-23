import {Injectable} from "@angular/core";

@Injectable()
export class TypeService {
  private types: string[] = ['defaultType', 'defaultType2'];

  addType(name: string) {
    if (this.types.indexOf(name) === -1) {
      this.types.push(name);
    }
  }

  getTypes(): string[] {
    return this.types;
  }
}
