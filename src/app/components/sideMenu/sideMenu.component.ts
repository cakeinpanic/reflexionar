import {Component} from "@angular/core";
import {MenuController} from "ionic-angular";

@Component({
    selector: 'side-menu',
    templateUrl: './sideMenu.template.html'
})
export class SideMenuComponent {

    constructor(private menuCtrl: MenuController) {

    }

    close() {
        this.menuCtrl.close();
    }

}