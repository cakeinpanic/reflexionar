import {Injectable} from "@angular/core";

@Injectable()
export class TypeService {
  private types: string[] = [];

  addType(name: string) {
    if (this.types.indexOf(name) === -1) {
      this.types.push(name);
    }
  }

  getTypes(): string[] {
    return this.types;
  }
}
