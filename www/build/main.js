webpackJsonp([0],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var moment = __webpack_require__(2);
var currentClendarView_service_1 = __webpack_require__(29);
var YearViewPage = YearViewPage_1 = (function () {
    function YearViewPage(navController, currentCalendarView) {
        this.navController = navController;
        this.currentCalendarView = currentCalendarView;
        this.years = [];
    }
    YearViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setYear();
        this.navController.viewWillEnter
            .filter(function (_a) {
            var component = _a.component;
            return component === YearViewPage_1;
        })
            .subscribe(function () {
            _this.setYear();
        });
    };
    YearViewPage.prototype.showNext = function () {
        this.currentCalendarView.currentDate.add(1, 'year');
        this.setYear();
    };
    YearViewPage.prototype.showPrev = function () {
        this.currentCalendarView.currentDate.subtract(1, 'year');
        this.setYear();
    };
    YearViewPage.prototype.setYear = function () {
        var year = this.currentCalendarView.currentDate.year();
        if (this.currentYear !== year) {
            this.currentYear = year;
            this.currentYearName = this.currentCalendarView.currentDate.format('YYYY');
            this.years = [moment().year(year)];
        }
    };
    return YearViewPage;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Content),
    __metadata("design:type", ionic_angular_1.Content)
], YearViewPage.prototype, "content", void 0);
YearViewPage = YearViewPage_1 = __decorate([
    core_1.Component({
        selector: 'year-view-page',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/yearViewPage/yearViewPage.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start class="header-buttons">\n\n            <button ion-button\n                    icon-only\n                    clear\n                    full\n                    end\n                    (click)="showNext()">\n                <ion-icon ios="ios-arrow-dropdown"\n                          md="md-arrow-dropdown"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-buttons end  class="header-buttons">\n            <button ion-button\n                    icon-only\n                    start\n                    clear\n                    full\n                    (click)="showPrev()">\n                <ion-icon ios="ios-arrow-dropup"\n                          md="md-arrow-dropup"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>\n\n\n            {{currentYearName}}\n\n\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="page-content"\n             no-bounce>\n    <year-view *ngFor="let year of years"\n               [year]="year"></year-view>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/yearViewPage/yearViewPage.html"*/
    }),
    __param(0, core_1.Inject(ionic_angular_1.NavController)),
    __param(1, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        currentClendarView_service_1.CurrentCalendarViewService])
], YearViewPage);
exports.YearViewPage = YearViewPage;
var YearViewPage_1;
//# sourceMappingURL=yearViewPage.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var moment = __webpack_require__(2);
var _ = __webpack_require__(30);
var currentClendarView_service_1 = __webpack_require__(29);
var Subject_1 = __webpack_require__(11);
var yearViewPage_1 = __webpack_require__(127);
var MonthViewPage = MonthViewPage_1 = (function () {
    function MonthViewPage(navController, menuCtrl, currentCalendarView) {
        this.navController = navController;
        this.menuCtrl = menuCtrl;
        this.currentCalendarView = currentCalendarView;
        this.months = [];
        this.onDestroy = new Subject_1.Subject();
    }
    MonthViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setMonths();
        this.navController.viewWillEnter.takeUntil(this.onDestroy).
            filter(function (_a) {
            var component = _a.component;
            return component === MonthViewPage_1;
        }).
            subscribe(function () {
            _this.setMonths();
        });
        this.navController.viewDidEnter.takeUntil(this.onDestroy).
            filter(function (_a) {
            var component = _a.component;
            return component === MonthViewPage_1;
        }).
            subscribe(function () {
            if (_this.navController.getPrevious().component === yearViewPage_1.YearViewPage) {
                _this.scrollTo();
            }
        });
    };
    MonthViewPage.prototype.ngOnDestroy = function () {
        this.onDestroy.next();
    };
    MonthViewPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MonthViewPage.prototype.showNext = function () {
        this.currentCalendarView.currentDate.add(1, 'year');
        this.setMonths();
    };
    MonthViewPage.prototype.showPrev = function () {
        this.currentCalendarView.currentDate.subtract(1, 'year');
        this.setMonths();
    };
    MonthViewPage.prototype.setMonths = function () {
        var year = this.currentCalendarView.currentDate.year();
        if (this.currentYear !== year) {
            this.currentYear = year;
            this.months = _.times(12, function (i) {
                return moment().year(year).month(i);
            });
            this.setBackButton();
        }
    };
    // private addNext() {
    //   this.months.push(moment(_.last(this.months)).add(1, 'month'));
    // }
    //
    // private addPrev() {
    //   this.months.unshift(moment(this.months[0]).subtract(1, 'month'));
    // }
    MonthViewPage.prototype.setBackButton = function () {
        this.navController.getActive().getNavbar().setBackButtonText(this.months[0].format('YYYY'));
    };
    MonthViewPage.prototype.scrollTo = function () {
        var monthToScroll = this.currentCalendarView.currentDate.month();
        var element = this.getMonthView(monthToScroll);
        if (element && this.content) {
            var monthPosition = element.getBoundingClientRect();
            var containerPosition = this.content.getElementRef().nativeElement.getBoundingClientRect();
            // todo get number offset from layout
            this.content.scrollTo(0, monthPosition.top - containerPosition.top - 60, 200);
        }
    };
    MonthViewPage.prototype.getMonthView = function (monthNumber) {
        return this.content.getScrollElement().querySelector("[month-number=\"" + monthNumber + "\"]");
    };
    return MonthViewPage;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Content),
    __metadata("design:type", ionic_angular_1.Content)
], MonthViewPage.prototype, "content", void 0);
MonthViewPage = MonthViewPage_1 = __decorate([
    core_1.Component({
        selector: 'month-view-page',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/monthViewPage/monthViewPage.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Reflexory\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleMenu()"><ion-icon name="menu"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-content">\n\n    <button ion-button\n            icon-only\n            clear\n            full\n            (click)="showPrev()">\n        <ion-icon ios="ios-arrow-dropup"\n                  md="md-arrow-dropup"></ion-icon>\n    </button>\n    <month-view *ngFor="let month of months"\n                [month]="month"\n                [attr.month-number]="month.month()"></month-view>\n    <button ion-button\n            icon-only\n            clear\n            full\n            (click)="showNext()">\n        <ion-icon ios="ios-arrow-dropdown"\n                  md="md-arrow-dropdown"></ion-icon>\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/monthViewPage/monthViewPage.html"*/
    }),
    __param(0, core_1.Inject(ionic_angular_1.NavController)),
    __param(1, core_1.Inject(ionic_angular_1.MenuController)),
    __param(2, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.MenuController,
        currentClendarView_service_1.CurrentCalendarViewService])
], MonthViewPage);
exports.MonthViewPage = MonthViewPage;
var MonthViewPage_1;
//# sourceMappingURL=monthViewPage.js.map

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var currentClendarView_service_1 = __webpack_require__(29);
var DayViewPage = DayViewPage_1 = (function () {
    function DayViewPage(currentCalendarView, navController) {
        this.currentCalendarView = currentCalendarView;
        this.navController = navController;
    }
    DayViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.date = this.currentCalendarView.currentDate;
        this.displayDate = this.date.format('DD MMMM');
        this.setBackButton();
        this.navController.viewWillEnter
            .filter(function (_a) {
            var component = _a.component;
            return component === DayViewPage_1;
        })
            .subscribe(function () {
            _this.setBackButton();
        });
    };
    DayViewPage.prototype.setBackButton = function () {
        this.navController.getActive().getNavbar().setBackButtonText(this.date.format('YYYY'));
    };
    return DayViewPage;
}());
DayViewPage = DayViewPage_1 = __decorate([
    core_1.Component({
        selector: 'day-view-page',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/dayViewPage/dayViewPage.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{displayDate}}\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-content">\n    <create-event-form></create-event-form>\n    <day-details-list [date]="date"></day-details-list>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/dayViewPage/dayViewPage.html"*/
    }),
    __param(0, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(1, core_1.Inject(ionic_angular_1.NavController)),
    __metadata("design:paramtypes", [currentClendarView_service_1.CurrentCalendarViewService,
        ionic_angular_1.NavController])
], DayViewPage);
exports.DayViewPage = DayViewPage;
var DayViewPage_1;
//# sourceMappingURL=dayViewPage.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var eventType_store_1 = __webpack_require__(45);
var ionic_angular_1 = __webpack_require__(16);
var ColorpickerPopoverComponent = (function () {
    function ColorpickerPopoverComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.colors = eventType_store_1.COLORS;
    }
    ColorpickerPopoverComponent.prototype.select = function (selectedColor) {
        this.viewCtrl.dismiss(selectedColor);
    };
    return ColorpickerPopoverComponent;
}());
ColorpickerPopoverComponent = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/colorSample/popover.template.html"*/'<div class="colors-container">\n    <color-sample *ngFor=\'let color of colors\'\n                  (click)="select(color)"\n                  [popover]="true"\n                  [color]="color"></color-sample>\n</div>'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/colorSample/popover.template.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.ViewController])
], ColorpickerPopoverComponent);
exports.ColorpickerPopoverComponent = ColorpickerPopoverComponent;
//# sourceMappingURL=colorpickerPopover.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var moment = __webpack_require__(2);
var Subject_1 = __webpack_require__(11);
var CurrentCalendarViewService = (function () {
    function CurrentCalendarViewService() {
        this.filterEventStream = new Subject_1.Subject();
        this.currentDate = moment();
    }
    Object.defineProperty(CurrentCalendarViewService.prototype, "filterEventId", {
        get: function () {
            return this._filterEventId;
        },
        set: function (id) {
            this._filterEventId = id;
            this.filterEventStream.next(id);
        },
        enumerable: true,
        configurable: true
    });
    return CurrentCalendarViewService;
}());
CurrentCalendarViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CurrentCalendarViewService);
exports.CurrentCalendarViewService = CurrentCalendarViewService;
//# sourceMappingURL=currentClendarView.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(30);
var DayEvent = (function () {
    function DayEvent(type, override) {
        if (override === void 0) { override = {}; }
        this.data = {};
        this.id = Date.now();
        this.type = type;
        this.id = override.id || this.id;
        this.data = override.data || this.data;
        this.makeDataFields();
    }
    DayEvent.prototype.isOfTypeId = function (typeId) {
        return this.type.id === typeId;
    };
    DayEvent.prototype.changeInputData = function (inputKind, value) {
        if (this.hasThisInput(inputKind)) {
            this.data[inputKind] = value;
        }
    };
    DayEvent.prototype.getInputs = function () {
        return this.type.inputs;
    };
    DayEvent.prototype.getInputData = function (inputKind) {
        if (this.hasThisInput(inputKind)) {
            return this.data[inputKind];
        }
    };
    Object.defineProperty(DayEvent.prototype, "dataAsJSON", {
        get: function () {
            return {
                id: this.id,
                typeId: this.type.id,
                data: this.data
            };
        },
        enumerable: true,
        configurable: true
    });
    DayEvent.prototype.hasThisInput = function (inputKind) {
        if (_.isNil(this.data[inputKind])) {
            throw new Error("no field " + inputKind + " in event " + this.type);
        }
        return true;
    };
    DayEvent.prototype.makeDataFields = function () {
        var _this = this;
        this.type.inputs.forEach(function (input) {
            _this.data[input.inputKind] = _this.data[input.inputKind] || '';
        });
    };
    return DayEvent;
}());
exports.DayEvent = DayEvent;
//# sourceMappingURL=dayEvent.model.js.map

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var currentClendarView_service_1 = __webpack_require__(29);
var ionic_angular_2 = __webpack_require__(16);
var eventTypeEditor_component_1 = __webpack_require__(376);
var EventEditorPage = EventEditorPage_1 = (function () {
    function EventEditorPage(currentCalendarView, modalController, navController) {
        this.currentCalendarView = currentCalendarView;
        this.modalController = modalController;
        this.navController = navController;
    }
    EventEditorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setBackButton();
        this.navController.viewWillEnter
            .filter(function (_a) {
            var component = _a.component;
            return component === EventEditorPage_1;
        })
            .subscribe(function () {
            _this.setBackButton();
        });
    };
    EventEditorPage.prototype.onClose = function () {
    };
    EventEditorPage.prototype.startEdit = function (type) {
        var _this = this;
        var modal = this.modalController.create(eventTypeEditor_component_1.EventTypeEditor, { type: type });
        modal.present();
        modal.onDidDismiss(function () { return _this.onClose(); });
    };
    EventEditorPage.prototype.setBackButton = function () {
        var date = this.currentCalendarView.currentDate;
        this.navController.getActive().getNavbar().setBackButtonText("" + date.format('DD.MM'));
    };
    return EventEditorPage;
}());
EventEditorPage = EventEditorPage_1 = __decorate([
    core_1.Component({
        selector: 'page-edit-event-types',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/eventEditorPage/eventEditorPage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Manage event types\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-content">\n  <event-type-list (onTypeSelect)="startEdit($event)"></event-type-list>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/eventEditorPage/eventEditorPage.html"*/
    }),
    __param(0, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(1, core_1.Inject(ionic_angular_2.ModalController)),
    __param(2, core_1.Inject(ionic_angular_1.NavController)),
    __metadata("design:paramtypes", [currentClendarView_service_1.CurrentCalendarViewService,
        ionic_angular_2.ModalController,
        ionic_angular_1.NavController])
], EventEditorPage);
exports.EventEditorPage = EventEditorPage;
var EventEditorPage_1;
//# sourceMappingURL=eventEditorPage.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var eventType_store_1 = __webpack_require__(45);
var _ = __webpack_require__(30);
var ionic_angular_1 = __webpack_require__(16);
var EventTypeEditor = (function () {
    function EventTypeEditor(eventTypeStore, viewCtrl, params) {
        var _this = this;
        this.eventTypeStore = eventTypeStore;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.inputTypeDetails = eventType_store_1.INPUT_TYPES.map(function (inputType) { return _this.getTypeDetails(inputType); });
    }
    Object.defineProperty(EventTypeEditor.prototype, "availableInputs", {
        get: function () {
            return eventType_store_1.INPUT_TYPES;
            //_.difference(INPUT_TYPES, this.inputs.map((inputType) => inputType.inputKind));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventTypeEditor.prototype, "formValid", {
        get: function () {
            return !!this.title && this.inputs.every(function (input) { return !!input.title; });
        },
        enumerable: true,
        configurable: true
    });
    EventTypeEditor.prototype.changeColor = function (newColor) {
        this.type.color = newColor;
    };
    EventTypeEditor.prototype.ngOnInit = function () {
        this.type = this.params.get('type');
        this.title = this.type.title;
        this.inputs = _.cloneDeep(this.type.inputs);
    };
    EventTypeEditor.prototype.close = function () {
        this.viewCtrl.dismiss().catch(function () { });
    };
    EventTypeEditor.prototype.saveType = function () {
        this.type.inputs = _.cloneDeep(this.inputs);
        this.type.title = this.title;
        this.eventTypeStore.saveType(this.type);
        this.close();
    };
    EventTypeEditor.prototype.removeInput = function (input) {
        _.remove(this.inputs, input);
    };
    EventTypeEditor.prototype.addInput = function (inputType) {
        this.inputs.push(new eventType_store_1.EventInput({
            inputKind: inputType,
            title: ''
        }));
    };
    EventTypeEditor.prototype.getInputIcon = function (input) {
        return this.inputTypeDetails[input.inputKind].icon;
    };
    EventTypeEditor.prototype.getInputPlaceholder = function (input) {
        return this.inputTypeDetails[input.inputKind].placeholder;
    };
    EventTypeEditor.prototype.getTypeDetails = function (inputType) {
        switch (inputType) {
            case eventType_store_1.INPUTS.Time:
                return { icon: 'clock-outline', addTitle: 'Add time input', placeholder: 'New time input' };
            case eventType_store_1.INPUTS.Story:
                return { icon: 'clipboard-outline', addTitle: 'Add text input', placeholder: 'New text input' };
        }
    };
    return EventTypeEditor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", eventType_store_1.EventType)
], EventTypeEditor.prototype, "type", void 0);
EventTypeEditor = __decorate([
    core_1.Component({
        selector: 'event-type-editor',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesEditor/eventTypeEditor.template.html"*/'<ion-content class="page-content">\n\n    <form (ngSubmit)="saveType()">\n        <h5 class="event-editor-header">Editing event type\n            <button ion-button\n                    icon-only\n                    float-right\n                    clear\n                    (click)="saveType()"\n                    [disabled]="!formValid"\n                    type="submit">\n                <ion-icon name="checkmark"></ion-icon>\n            </button>\n            <button ion-button\n                    icon-only\n                    clear\n                    float-right\n                    (click)="close()"\n                    type="reset">\n                <ion-icon name="close"></ion-icon>\n            </button></h5>\n        <div class="inputs-list">\n            <div>\n                <color-sample float-left\n                              [big]=\'true\'\n                              (onColorChange)="changeColor($event)"\n                              [clickable]="true"\n                              [color]="type.color"></color-sample>\n                <span class="title">\n                    <h6>{{title}}</h6>\n                </span>\n\n            </div>\n            <ion-list>\n\n                <ion-item>\n                    <ion-label>Title</ion-label>\n                    <ion-input placeholder="Event title"\n                               [(ngModel)]="title"\n                               name="title"></ion-input>\n\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <ion-list *ngIf=\'inputs.length\'>\n\n            <ion-list-header>Inputs</ion-list-header>\n            <ion-item *ngFor="let input of inputs">\n\n                <ion-icon class="trash-btn"\n                          name="ios-trash-outline"\n                          item-end\n                          (click)="removeInput(input)"></ion-icon>\n\n                <ion-input [placeholder]="getInputPlaceholder(input)"\n                           [(ngModel)]="input.title"\n                           required="true"\n                           name="{{input.title}}Title"></ion-input>\n                <ion-icon [name]="getInputIcon(input)"\n                          item-start></ion-icon>\n\n            </ion-item>\n        </ion-list>\n        <div class="input-buttons">\n            <!--adding new inputs-->\n            <button *ngFor="let inputType of availableInputs"\n                    (click)="addInput(inputType)"\n                    class="addInput-btn"\n                    color="secondary"\n                    type=\'button\'\n                    ion-button\n                    full\n            >\n                <ion-icon [name]="inputTypeDetails[inputType].icon"></ion-icon>\n                {{inputTypeDetails[inputType].addTitle}}\n            </button>\n        </div>\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesEditor/eventTypeEditor.template.html"*/
    }),
    __param(0, core_1.Inject(eventType_store_1.EventTypeStore)),
    __metadata("design:paramtypes", [eventType_store_1.EventTypeStore,
        ionic_angular_1.ViewController,
        ionic_angular_1.NavParams])
], EventTypeEditor);
exports.EventTypeEditor = EventTypeEditor;
//# sourceMappingURL=eventTypeEditor.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(46);
var ionic_angular_1 = __webpack_require__(16);
var colorSample_component_1 = __webpack_require__(706);
var colorpickerPopover_component_1 = __webpack_require__(136);
var ColorSampleModule = (function () {
    function ColorSampleModule() {
    }
    return ColorSampleModule;
}());
ColorSampleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ionic_angular_1.IonicModule,
        ],
        exports: [
            colorSample_component_1.ColorSample
        ],
        declarations: [
            colorSample_component_1.ColorSample,
            colorpickerPopover_component_1.ColorpickerPopoverComponent
        ]
    })
], ColorSampleModule);
exports.ColorSampleModule = ColorSampleModule;
//# sourceMappingURL=colorSample.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(379);
var app_module_1 = __webpack_require__(383);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(47);
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var splash_screen_1 = __webpack_require__(230);
var status_bar_1 = __webpack_require__(235);
var app_component_1 = __webpack_require__(426);
var monthViewPage_1 = __webpack_require__(134);
var yearViewPage_1 = __webpack_require__(127);
var dayViewPage_1 = __webpack_require__(135);
var eventEditorPage_1 = __webpack_require__(375);
var calendar_module_1 = __webpack_require__(700);
var eventTypeEditor_component_1 = __webpack_require__(376);
var eventTypeList_component_1 = __webpack_require__(707);
var currentClendarView_service_1 = __webpack_require__(29);
var Storage_1 = __webpack_require__(133);
var colorpickerPopover_component_1 = __webpack_require__(136);
var colorSample_module_1 = __webpack_require__(377);
var filterMenu_component_1 = __webpack_require__(708);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            monthViewPage_1.MonthViewPage,
            yearViewPage_1.YearViewPage,
            dayViewPage_1.DayViewPage,
            eventEditorPage_1.EventEditorPage,
            eventTypeEditor_component_1.EventTypeEditor,
            eventTypeList_component_1.EventTypeList,
            filterMenu_component_1.FilterMenuComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            calendar_module_1.CalendarModule,
            colorSample_module_1.ColorSampleModule,
            Storage_1.IonicStorageModule.forRoot(),
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            monthViewPage_1.MonthViewPage,
            yearViewPage_1.YearViewPage,
            dayViewPage_1.DayViewPage,
            eventEditorPage_1.EventEditorPage,
            eventTypeEditor_component_1.EventTypeEditor,
            eventTypeList_component_1.EventTypeList,
            filterMenu_component_1.FilterMenuComponent,
            colorpickerPopover_component_1.ColorpickerPopoverComponent
        ],
        providers: [
            currentClendarView_service_1.CurrentCalendarViewService,
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var status_bar_1 = __webpack_require__(235);
var splash_screen_1 = __webpack_require__(230);
var ionic_angular_2 = __webpack_require__(16);
var yearViewPage_1 = __webpack_require__(127);
var calendar_store_1 = __webpack_require__(44);
var eventType_store_1 = __webpack_require__(45);
var monthViewPage_1 = __webpack_require__(134);
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, loading, calendarStore, eventTypeStore) {
        var _this = this;
        this.loading = loading;
        this.calendarStore = calendarStore;
        this.eventTypeStore = eventTypeStore;
        this.rootPage = yearViewPage_1.YearViewPage;
        this.dataLoaded = false;
        platform.ready()
            .then(function () { return _this.updateData(); })
            .then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.nav.push(yearViewPage_1.YearViewPage, {}, { animate: false, duration: 0 });
            _this.nav.push(monthViewPage_1.MonthViewPage, {}, { animate: false, duration: 0 });
        });
    }
    MyApp.prototype.updateData = function () {
        var _this = this;
        var loading = this.loading.create({
            content: 'Updating data...'
        });
        loading.present();
        // order is IMPORTANT, TYPES FIRST
        return this.eventTypeStore.init()
            .then(function () { return _this.calendarStore.init(); })
            .then(function () {
            loading.dismiss();
            return _this.dataLoaded = true;
        });
    };
    return MyApp;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Nav),
    __metadata("design:type", ionic_angular_1.NavController)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/app.html"*/'<ion-menu side="right"\n          [content]="mainContent">\n    <ion-content>\n       <filter-menu></filter-menu>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent></ion-nav>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.Platform, status_bar_1.StatusBar, splash_screen_1.SplashScreen,
        ionic_angular_2.LoadingController,
        calendar_store_1.CalendarStore,
        eventType_store_1.EventTypeStore])
], MyApp);
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 237,
	"./af.js": 237,
	"./ar": 238,
	"./ar-dz": 239,
	"./ar-dz.js": 239,
	"./ar-kw": 240,
	"./ar-kw.js": 240,
	"./ar-ly": 241,
	"./ar-ly.js": 241,
	"./ar-ma": 242,
	"./ar-ma.js": 242,
	"./ar-sa": 243,
	"./ar-sa.js": 243,
	"./ar-tn": 244,
	"./ar-tn.js": 244,
	"./ar.js": 238,
	"./az": 245,
	"./az.js": 245,
	"./be": 246,
	"./be.js": 246,
	"./bg": 247,
	"./bg.js": 247,
	"./bn": 248,
	"./bn.js": 248,
	"./bo": 249,
	"./bo.js": 249,
	"./br": 250,
	"./br.js": 250,
	"./bs": 251,
	"./bs.js": 251,
	"./ca": 252,
	"./ca.js": 252,
	"./cs": 253,
	"./cs.js": 253,
	"./cv": 254,
	"./cv.js": 254,
	"./cy": 255,
	"./cy.js": 255,
	"./da": 256,
	"./da.js": 256,
	"./de": 257,
	"./de-at": 258,
	"./de-at.js": 258,
	"./de-ch": 259,
	"./de-ch.js": 259,
	"./de.js": 257,
	"./dv": 260,
	"./dv.js": 260,
	"./el": 261,
	"./el.js": 261,
	"./en-au": 262,
	"./en-au.js": 262,
	"./en-ca": 263,
	"./en-ca.js": 263,
	"./en-gb": 264,
	"./en-gb.js": 264,
	"./en-ie": 265,
	"./en-ie.js": 265,
	"./en-nz": 266,
	"./en-nz.js": 266,
	"./eo": 267,
	"./eo.js": 267,
	"./es": 268,
	"./es-do": 269,
	"./es-do.js": 269,
	"./es.js": 268,
	"./et": 270,
	"./et.js": 270,
	"./eu": 271,
	"./eu.js": 271,
	"./fa": 272,
	"./fa.js": 272,
	"./fi": 273,
	"./fi.js": 273,
	"./fo": 274,
	"./fo.js": 274,
	"./fr": 275,
	"./fr-ca": 276,
	"./fr-ca.js": 276,
	"./fr-ch": 277,
	"./fr-ch.js": 277,
	"./fr.js": 275,
	"./fy": 278,
	"./fy.js": 278,
	"./gd": 279,
	"./gd.js": 279,
	"./gl": 280,
	"./gl.js": 280,
	"./gom-latn": 281,
	"./gom-latn.js": 281,
	"./he": 282,
	"./he.js": 282,
	"./hi": 283,
	"./hi.js": 283,
	"./hr": 284,
	"./hr.js": 284,
	"./hu": 285,
	"./hu.js": 285,
	"./hy-am": 286,
	"./hy-am.js": 286,
	"./id": 287,
	"./id.js": 287,
	"./is": 288,
	"./is.js": 288,
	"./it": 289,
	"./it.js": 289,
	"./ja": 290,
	"./ja.js": 290,
	"./jv": 291,
	"./jv.js": 291,
	"./ka": 292,
	"./ka.js": 292,
	"./kk": 293,
	"./kk.js": 293,
	"./km": 294,
	"./km.js": 294,
	"./kn": 295,
	"./kn.js": 295,
	"./ko": 296,
	"./ko.js": 296,
	"./ky": 297,
	"./ky.js": 297,
	"./lb": 298,
	"./lb.js": 298,
	"./lo": 299,
	"./lo.js": 299,
	"./lt": 300,
	"./lt.js": 300,
	"./lv": 301,
	"./lv.js": 301,
	"./me": 302,
	"./me.js": 302,
	"./mi": 303,
	"./mi.js": 303,
	"./mk": 304,
	"./mk.js": 304,
	"./ml": 305,
	"./ml.js": 305,
	"./mr": 306,
	"./mr.js": 306,
	"./ms": 307,
	"./ms-my": 308,
	"./ms-my.js": 308,
	"./ms.js": 307,
	"./my": 309,
	"./my.js": 309,
	"./nb": 310,
	"./nb.js": 310,
	"./ne": 311,
	"./ne.js": 311,
	"./nl": 312,
	"./nl-be": 313,
	"./nl-be.js": 313,
	"./nl.js": 312,
	"./nn": 314,
	"./nn.js": 314,
	"./pa-in": 315,
	"./pa-in.js": 315,
	"./pl": 316,
	"./pl.js": 316,
	"./pt": 317,
	"./pt-br": 318,
	"./pt-br.js": 318,
	"./pt.js": 317,
	"./ro": 319,
	"./ro.js": 319,
	"./ru": 320,
	"./ru.js": 320,
	"./sd": 321,
	"./sd.js": 321,
	"./se": 322,
	"./se.js": 322,
	"./si": 323,
	"./si.js": 323,
	"./sk": 324,
	"./sk.js": 324,
	"./sl": 325,
	"./sl.js": 325,
	"./sq": 326,
	"./sq.js": 326,
	"./sr": 327,
	"./sr-cyrl": 328,
	"./sr-cyrl.js": 328,
	"./sr.js": 327,
	"./ss": 329,
	"./ss.js": 329,
	"./sv": 330,
	"./sv.js": 330,
	"./sw": 331,
	"./sw.js": 331,
	"./ta": 332,
	"./ta.js": 332,
	"./te": 333,
	"./te.js": 333,
	"./tet": 334,
	"./tet.js": 334,
	"./th": 335,
	"./th.js": 335,
	"./tl-ph": 336,
	"./tl-ph.js": 336,
	"./tlh": 337,
	"./tlh.js": 337,
	"./tr": 338,
	"./tr.js": 338,
	"./tzl": 339,
	"./tzl.js": 339,
	"./tzm": 340,
	"./tzm-latn": 341,
	"./tzm-latn.js": 341,
	"./tzm.js": 340,
	"./uk": 342,
	"./uk.js": 342,
	"./ur": 343,
	"./ur.js": 343,
	"./uz": 344,
	"./uz-latn": 345,
	"./uz-latn.js": 345,
	"./uz.js": 344,
	"./vi": 346,
	"./vi.js": 346,
	"./x-pseudo": 347,
	"./x-pseudo.js": 347,
	"./yo": 348,
	"./yo.js": 348,
	"./zh-cn": 349,
	"./zh-cn.js": 349,
	"./zh-hk": 350,
	"./zh-hk.js": 350,
	"./zh-tw": 351,
	"./zh-tw.js": 351
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 427;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(2);
var _ = __webpack_require__(30);
var dayEvent_model_1 = __webpack_require__(352);
var core_1 = __webpack_require__(1);
var rxjs_1 = __webpack_require__(428);
var eventType_store_1 = __webpack_require__(45);
var Storage_1 = __webpack_require__(133);
var CalendarStore = (function () {
    function CalendarStore(eventTypeStore, storage) {
        this.eventTypeStore = eventTypeStore;
        this.storage = storage;
        this.store = {};
        this.stream = new rxjs_1.Subject();
        this.affectedIds = [];
    }
    CalendarStore.prototype.init = function () {
        var _this = this;
        return this.getAllFromStore()
            .then(function () {
            console.log(_this.store);
            _this.affectedIds.length = 0;
        });
    };
    CalendarStore.prototype.syncData = function () {
        var _this = this;
        return Promise.all(this.affectedIds.map(function (id) {
            var key = _this.getKeyFromId(id);
            if (_this.store[id]) {
                return _this.storage.set(key, _this.store[id].map(function (event) { return event.dataAsJSON; }));
            }
            return _this.storage.remove(key);
        }))
            .then(function () {
            _this.affectedIds.length = 0;
        });
    };
    CalendarStore.prototype.getEventsOfType = function (typeId) {
        return Promise.resolve(_.map(this.store, function (events, key) { return events.some(function (event) { return event.isOfTypeId(typeId); }) && key; })
            .filter(function (data) { return !!data; })
            .map(function (dayID) { return moment("/Date(" + dayID + ")/"); }));
    };
    Object.defineProperty(CalendarStore.prototype, "eventStream", {
        get: function () {
            return this.stream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CalendarStore.prototype.getEventsById = function (dateId) {
        return Promise.resolve(this.store[dateId]
            ? this.store[dateId]
            : []);
    };
    CalendarStore.prototype.removeEvent = function (date, eventToDelete) {
        var dateId = this.getDateId(date);
        this.affectedIds.push(dateId);
        _.remove(this.store[dateId], { id: eventToDelete.id });
        this.sendNext(dateId);
        this.syncData();
    };
    CalendarStore.prototype.addEvent = function (date, event) {
        var dateId = this.getDateId(date);
        this.affectedIds.push(dateId);
        if (this.store[dateId]) {
            this.store[dateId].push(event);
        }
        else {
            this.store[dateId] = [event];
        }
        this.syncData();
        this.sendNext(dateId);
    };
    CalendarStore.prototype.getDateId = function (date) {
        return moment(date).hours(0).minutes(0).seconds(0).milliseconds(0).valueOf();
    };
    CalendarStore.prototype.clearAll = function () {
        var _this = this;
        this.getEventKeys()
            .then(function (keys) {
            return keys.forEach(function (key) {
                _this.storage.remove(key);
            });
        });
    };
    CalendarStore.prototype.getEventKeys = function () {
        return this.storage.keys()
            .then(function (keys) { return keys.filter(function (key) { return key.indexOf('event') > -1; }); });
    };
    CalendarStore.prototype.getAllFromStore = function () {
        var _this = this;
        return this.getEventKeys()
            .then(function (keys) { return Promise.all(keys.map(function (key) { return _this.getDataFromStorageByKey(key); })); });
    };
    CalendarStore.prototype.getDataFromStorageByKey = function (key) {
        var _this = this;
        var dayId = this.getDateFormKey(key);
        return this.storage.get(key)
            .then(function (dayEventsData) {
            return Promise.all(dayEventsData.map(function (json) { return _this.dayEventFromJSON(json); }));
        })
            .then(function (events) {
            return _this.store[dayId] = events;
        });
    };
    CalendarStore.prototype.dayEventFromJSON = function (json) {
        return this.eventTypeStore.getTypeByID(json.typeId)
            .then(function (type) {
            return new dayEvent_model_1.DayEvent(type, json);
        }).catch(function () {
            return null;
        });
    };
    CalendarStore.prototype.sendNext = function (dateId) {
        this.stream.next(dateId);
    };
    CalendarStore.prototype.getDateFormKey = function (key) {
        return /event(\d+)/.exec(key)[1];
    };
    CalendarStore.prototype.getKeyFromId = function (id) {
        return "event" + id;
    };
    return CalendarStore;
}());
CalendarStore = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(eventType_store_1.EventTypeStore)),
    __param(1, core_1.Inject(Storage_1.Storage)),
    __metadata("design:paramtypes", [eventType_store_1.EventTypeStore,
        Storage_1.Storage])
], CalendarStore);
exports.CalendarStore = CalendarStore;
//# sourceMappingURL=calendar.store.js.map

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var _ = __webpack_require__(30);
var Subject_1 = __webpack_require__(11);
var Storage_1 = __webpack_require__(133);
exports.COLORS = [
    '#092140', '#024959', '#F2C777', '#F24738', '#BF2A2A', '#FE938C',
    '#FE938C', '#EAD2AC', '#E6B89C', '#4281A4', '#9CAFB7', '#CF4232',
    '#EB7F23', '#FAC023', '#068675', '#6B202E'
];
function getColor() {
    var index = Math.floor(Math.random() * exports.COLORS.length);
    console.log(index);
    return exports.COLORS[index];
}
exports.getColor = getColor;
var INPUTS;
(function (INPUTS) {
    INPUTS[INPUTS["Time"] = 0] = "Time";
    INPUTS[INPUTS["Story"] = 1] = "Story";
})(INPUTS = exports.INPUTS || (exports.INPUTS = {}));
exports.INPUT_TYPES = [INPUTS.Time, INPUTS.Story];
var EventInput = (function () {
    function EventInput(_a) {
        var inputKind = _a.inputKind, title = _a.title, id = _a.id;
        this.id = id || Date.now();
        this.inputKind = inputKind;
        this.title = title;
    }
    EventInput.prototype.getDataAsJSON = function () {
        return {
            id: this.id,
            inputKind: this.inputKind,
            title: this.title
        };
    };
    return EventInput;
}());
exports.EventInput = EventInput;
var EventType = (function () {
    function EventType(params) {
        if (params === void 0) { params = {}; }
        this.title = '';
        this.color = '#000000';
        this.inputs = [];
        _.merge(this, params);
        if (!params.color) {
            this.color = getColor();
        }
        this._id = params.id || Date.now();
        if (params.inputs) {
            this.inputs = params.inputs.map(function (input) { return new EventInput(input); });
        }
    }
    Object.defineProperty(EventType.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventType.prototype, "dataAsJSON", {
        get: function () {
            return {
                id: this._id,
                title: this.title, color: this.color,
                inputs: this.inputs.map(function (input) { return input.getDataAsJSON(); })
            };
        },
        enumerable: true,
        configurable: true
    });
    return EventType;
}());
exports.EventType = EventType;
var EventTypeStore = (function () {
    function EventTypeStore(storage) {
        this.storage = storage;
        this.stream = new Subject_1.Subject();
        this.types = [];
        // this.storage.clear();
        // this.saveType(new EventType({title: 'Running', color: '#991824'})).then((type) => {
        //     type.inputs.push(
        //         new EventInput({inputKind: INPUTS.Time, title: 'Time'}),
        //         new EventInput({inputKind: INPUTS.Story, title: 'Distance'})
        //     )
        //     this.saveType(type);
        // });
        //
        // this.saveType(new EventType({title: 'Saw airplane', color: '#0caa37'}))
        //     .inputs.push(new EventInput({inputKind: INPUTS.Time, title: 'When'}));
        //
    }
    EventTypeStore.prototype.init = function () {
        var _this = this;
        return this.getAllDataFromStore().then(function () {
            console.log(_this.types);
        });
    };
    Object.defineProperty(EventTypeStore.prototype, "updateStream", {
        get: function () {
            return this.stream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    EventTypeStore.prototype.syncData = function () {
        var _this = this;
        return this.clearAllTypesFromStorage()
            .then(function () {
            return Promise.all(_this.types.map(function (type) {
                return _this.storage.set(_this.makeKeyFromId(type.id), type.dataAsJSON);
            }));
        });
    };
    EventTypeStore.prototype.getAllDataFromStore = function () {
        var _this = this;
        return this.getAllStorageKeys()
            .then(function (keys) {
            return Promise.all(keys.map(function (key) { return _this.getTypeFromStorage(key); }));
        });
    };
    EventTypeStore.prototype.getTypeFromStorage = function (key) {
        var _this = this;
        return this.storage.get(key).then(function (data) {
            if (!data) {
                return null;
            }
            _this.types.push(new EventType(data));
        });
    };
    EventTypeStore.prototype.sendNext = function () {
        this.stream.next();
    };
    EventTypeStore.prototype.clearAllTypesFromStorage = function () {
        var _this = this;
        return this.getAllStorageKeys()
            .then(function (keys) { return Promise.all(keys.map(function (key) { return _this.storage.remove(key); })); });
    };
    EventTypeStore.prototype.saveType = function (type) {
        var existingType = _.find(this.types, { id: type.id });
        if (!existingType) {
            this.types.push(type);
        }
        else {
            _.merge(existingType, type);
        }
        this.syncData();
        this.sendNext();
        return existingType || type;
    };
    EventTypeStore.prototype.getAllTypes = function () {
        return Promise.resolve(this.types);
    };
    EventTypeStore.prototype.getTypeByID = function (id) {
        return Promise.resolve(_.find(this.types, { id: id }));
    };
    EventTypeStore.prototype.removeType = function (typeId) {
        _.remove(this.types, { id: typeId });
        this.syncData();
        this.sendNext();
    };
    EventTypeStore.prototype.getAllStorageKeys = function () {
        return this.storage.keys()
            .then(function (keys) { return keys.filter(function (key) { return key.indexOf('type') > -1; }); });
    };
    EventTypeStore.prototype.makeKeyFromId = function (id) {
        return "type" + id;
    };
    return EventTypeStore;
}());
EventTypeStore = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(Storage_1.Storage)),
    __metadata("design:paramtypes", [Storage_1.Storage])
], EventTypeStore);
exports.EventTypeStore = EventTypeStore;
//# sourceMappingURL=eventType.store.js.map

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(46);
var monthView_component_1 = __webpack_require__(701);
var ionic_angular_1 = __webpack_require__(16);
var dayView_component_1 = __webpack_require__(702);
var calendar_store_1 = __webpack_require__(44);
var dayDetails_component_1 = __webpack_require__(703);
var eventType_store_1 = __webpack_require__(45);
var createEventForm_component_1 = __webpack_require__(704);
var yearView_component_1 = __webpack_require__(705);
var colorSample_module_1 = __webpack_require__(377);
var CalendarModule = (function () {
    function CalendarModule() {
    }
    return CalendarModule;
}());
CalendarModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ionic_angular_1.IonicModule,
            colorSample_module_1.ColorSampleModule
        ],
        exports: [
            monthView_component_1.MonthView,
            dayDetails_component_1.DayDetails,
            yearView_component_1.YearViewComponent,
            createEventForm_component_1.CreateEventFormComponent
        ],
        declarations: [
            monthView_component_1.MonthView,
            dayView_component_1.DayView,
            dayDetails_component_1.DayDetails,
            yearView_component_1.YearViewComponent,
            createEventForm_component_1.CreateEventFormComponent
        ],
        providers: [
            calendar_store_1.CalendarStore,
            eventType_store_1.EventTypeStore
        ]
    })
], CalendarModule);
exports.CalendarModule = CalendarModule;
//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var moment = __webpack_require__(2);
var _ = __webpack_require__(30);
var ionic_angular_1 = __webpack_require__(16);
var monthViewPage_1 = __webpack_require__(134);
var currentClendarView_service_1 = __webpack_require__(29);
var calendar_store_1 = __webpack_require__(44);
var DAYS_IN_WEEK = 7;
var DEFAULT_WEKS_NUM = 5;
var MonthView = (function () {
    function MonthView(currentCalendarView, el, calendarStore, navController) {
        this.currentCalendarView = currentCalendarView;
        this.el = el;
        this.calendarStore = calendarStore;
        this.navController = navController;
        this.yearView = false;
    }
    MonthView.prototype.ngOnInit = function () {
        var _this = this;
        this.fillWeeks();
        this.size = Math.floor(this.el.nativeElement.offsetWidth / 7) + 'px';
        this.calendarStore.eventStream.subscribe(function () {
            _this.countEvents(_this.days);
        });
    };
    MonthView.prototype.goToMonth = function () {
        if (this.yearView) {
            // TODO move to some navservice
            this.currentCalendarView.currentDate.month(this.currentDate.month());
            this.navController.push(monthViewPage_1.MonthViewPage);
        }
    };
    MonthView.prototype.fillWeeks = function (date) {
        var _this = this;
        if (date === void 0) { date = this.currentDate; }
        this.setMonthName(date);
        this.weeks = [];
        this.getDaysToDisplay(date)
            .then(function (dates) { return _this.countEvents(dates); })
            .then(function (dates) {
            _this.days = dates;
            dates.forEach(function (day, i) {
                var weekNum = Math.floor(i / DAYS_IN_WEEK);
                if (!_this.weeks[weekNum]) {
                    _this.weeks[weekNum] = [];
                }
                _this.weeks[weekNum].push(day);
            });
        });
    };
    MonthView.prototype.setMonthName = function (date) {
        this.currentMonthName = this.yearView
            ? date.format('MMMM')
            : date.format('MMMM YYYY');
    };
    MonthView.prototype.calculateWeeksNum = function (thisMonth) {
        var startsWith = moment(thisMonth).date(1).isoWeekday() - 1;
        return startsWith + thisMonth.daysInMonth() > DEFAULT_WEKS_NUM * DAYS_IN_WEEK
            ? DEFAULT_WEKS_NUM + 1
            : DEFAULT_WEKS_NUM;
    };
    MonthView.prototype.getDaysToDisplay = function (date) {
        var weeksNum = this.calculateWeeksNum(date);
        var thisMonth = moment(date);
        var prevMonth = moment(thisMonth).subtract(1, 'month');
        var nextMonth = moment(thisMonth).add(1, 'month');
        var prevDays = this.getDaysOfMonth(prevMonth);
        var thisDays = this.getDaysOfMonth(thisMonth);
        var nextDays = this.getDaysOfMonth(nextMonth);
        var startsWith = moment(thisMonth).date(1).isoWeekday();
        var endsWith = weeksNum * DAYS_IN_WEEK - thisDays.length - startsWith + 1;
        var datesCapacity = weeksNum * DAYS_IN_WEEK;
        var concatThreeMonths = _.takeRight(prevDays, startsWith - 1).concat(thisDays).concat(_.take(nextDays, endsWith));
        return Promise.resolve(_.take(concatThreeMonths, datesCapacity));
    };
    MonthView.prototype.countEvents = function (dates) {
        var _this = this;
        if (!this.yearView) {
            return Promise.resolve(dates);
        }
        return Promise.all(dates.map(function (date) {
            var dayId = _this.calendarStore.getDateId(date.date);
            return _this.calendarStore.getEventsById(dayId).then(function (data) {
                date.events = data;
                date.hasEvents = data.length > 0;
                return date;
            });
        }));
    };
    MonthView.prototype.getDaysOfMonth = function (date) {
        var _this = this;
        var daysInMonth = date.daysInMonth();
        return _.times(daysInMonth, function (i) {
            var momentDate = moment(date).date(i + 1);
            return {
                date: momentDate,
                notDayOfCurrentMonth: _this.currentDate.month() !== momentDate.month()
            };
        });
    };
    return MonthView;
}());
__decorate([
    core_1.Input('month'),
    __metadata("design:type", Object)
], MonthView.prototype, "currentDate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MonthView.prototype, "yearView", void 0);
MonthView = __decorate([
    core_1.Component({
        selector: 'month-view',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/monthView/monthView.template.html"*/'<div (click)="goToMonth()"\n     class="month"\n     [class.month-yearView]="yearView">\n\n  <h4 ion-text\n      class="monthTitle"\n      [class.title-small]="yearView">\n    {{currentMonthName}} </h4>\n\n  <div *ngIf="!yearView"\n       class="datesContainer">\n\n    <div *ngFor="let week of weeks"\n         class="week">\n      <day-view *ngFor="let day of week"\n                class="day-view"\n                [elementSize]="size"\n                [notThisMonth]="day.notDayOfCurrentMonth"\n                [date]="day.date"\n                [yearView]="yearView"></day-view>\n    </div>\n  </div>\n\n  <!--optimizing performance by not using component for logic-less moment-->\n  <div *ngIf="yearView"\n       class="datesContainer datesContainer-yearView">\n\n    <div *ngFor="let week of weeks"\n         class="week">\n      <div *ngFor="let day of week"\n           class="day-view"\n           [class.has-event]="day.hasEvents">\n        <div [hidden]="day.notDayOfCurrentMonth"\n        >\n          {{day.date.date()}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/monthView/monthView.template.html"*/
    }),
    __param(0, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(1, core_1.Inject(core_1.ElementRef)),
    __param(2, core_1.Inject(calendar_store_1.CalendarStore)),
    __param(3, core_1.Inject(ionic_angular_1.NavController)),
    __metadata("design:paramtypes", [currentClendarView_service_1.CurrentCalendarViewService,
        core_1.ElementRef,
        calendar_store_1.CalendarStore,
        ionic_angular_1.NavController])
], MonthView);
exports.MonthView = MonthView;
//# sourceMappingURL=monthView.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var moment = __webpack_require__(2);
var calendar_store_1 = __webpack_require__(44);
var ionic_angular_1 = __webpack_require__(16);
var dayViewPage_1 = __webpack_require__(135);
var currentClendarView_service_1 = __webpack_require__(29);
var _ = __webpack_require__(30);
var MAX_DISPLAY_EVENTS = 5;
var DayView = (function () {
    function DayView(currentCalendarView, calendarStore, navController) {
        this.currentCalendarView = currentCalendarView;
        this.calendarStore = calendarStore;
        this.navController = navController;
        this.yearView = false;
        this.notThisMonth = false;
        this.displayEvents = [];
        this.lotOfEvents = false;
        this.isToday = false;
        this.events = [];
    }
    DayView.prototype.ngOnInit = function () {
        var _this = this;
        this.day = this.date.date();
        this.filteredType = this.currentCalendarView.filterEventId;
        this.updateEvents();
        this.setToday();
        this.currentCalendarView.filterEventStream.subscribe(function (newType) {
            _this.filteredType = newType;
            _this.filterEvents();
        });
    };
    DayView.prototype.openDetails = function () {
        if (!this.yearView) {
            this.currentCalendarView.currentDate.date(this.day).month(this.date.month());
            this.navController.push(dayViewPage_1.DayViewPage);
        }
    };
    DayView.prototype.updateEvents = function () {
        var _this = this;
        if (!this.yearView && !this.notThisMonth) {
            var dayId_1 = this.calendarStore.getDateId(this.date);
            this.getEvents(dayId_1);
            this.calendarStore.eventStream.filter(function (timestamp) { return timestamp === dayId_1; }).subscribe(function () {
                _this.getEvents(dayId_1);
            });
        }
    };
    DayView.prototype.getEvents = function (dayId) {
        var _this = this;
        this.calendarStore.getEventsById(dayId).then(function (data) {
            _this.events = data;
            _this.filterEvents();
        });
    };
    DayView.prototype.filterEvents = function () {
        var _this = this;
        this.displayEvents =
            this.events.filter(function (event) { return !_this.filteredType || event.isOfTypeId(_this.filteredType); });
        this.lotOfEvents = false;
        if (this.displayEvents.length > MAX_DISPLAY_EVENTS) {
            this.displayEvents = _.take(this.displayEvents, MAX_DISPLAY_EVENTS);
            this.lotOfEvents = true;
        }
    };
    DayView.prototype.setToday = function () {
        if (!this.yearView) {
            var diff = moment().diff(this.date, 'hours');
            this.isToday = diff < 24 && diff >= 0;
        }
    };
    return DayView;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DayView.prototype, "date", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DayView.prototype, "className", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DayView.prototype, "yearView", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DayView.prototype, "notThisMonth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DayView.prototype, "elementSize", void 0);
DayView = __decorate([
    core_1.Component({
        selector: 'day-view',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/dayView/dayView.template.html"*/'<div class="day-container"\n     [hidden]="yearView && notThisMonth"\n     [style.width]="elementSize"\n     [style.height]="elementSize">\n  <div class="day day-{{className}}"\n       [class.day-small]="yearView"\n       [class.day-background]="!yearView"\n       [class.day-anotherMonth]="notThisMonth"\n       [class.day-today]="isToday"\n       (click)="openDetails()">\n\n    <div class="date">{{day}}</div>\n    <color-sample *ngFor="let event of displayEvents" small="true" [color]="event.type.color"></color-sample>\n      <div class="lot-events" *ngIf="lotOfEvents">\n          <ion-icon name="arrow-dropright"></ion-icon>\n      </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/dayView/dayView.template.html"*/
    }),
    __param(0, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(1, core_1.Inject(calendar_store_1.CalendarStore)),
    __param(2, core_1.Inject(ionic_angular_1.NavController)),
    __metadata("design:paramtypes", [currentClendarView_service_1.CurrentCalendarViewService,
        calendar_store_1.CalendarStore,
        ionic_angular_1.NavController])
], DayView);
exports.DayView = DayView;
//# sourceMappingURL=dayView.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var moment = __webpack_require__(2);
var calendar_store_1 = __webpack_require__(44);
var DayDetails = (function () {
    function DayDetails(calendarStore) {
        this.calendarStore = calendarStore;
    }
    DayDetails.prototype.ngOnInit = function () {
        var _this = this;
        var dayId = this.calendarStore.getDateId(this.date);
        this.getEvents(dayId);
        this.calendarStore.eventStream
            .filter(function (timestamp) { return timestamp === dayId; })
            .subscribe(function () {
            _this.getEvents(dayId);
        });
    };
    DayDetails.prototype.getEvents = function (dayId) {
        var _this = this;
        this.calendarStore.getEventsById(dayId).then(function (data) {
            _this.events = data;
        });
    };
    DayDetails.prototype.removeEvent = function (event) {
        this.calendarStore.removeEvent(this.date, event);
    };
    DayDetails.prototype.getInputsList = function (dayEvent) {
        return dayEvent.getInputs();
    };
    return DayDetails;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DayDetails.prototype, "date", void 0);
DayDetails = __decorate([
    core_1.Component({
        selector: 'day-details-list',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/dayDetailsList/dayDetails.template.html"*/'<div *ngIf="!!events">\n    <ion-card *ngFor="let event of events">\n\n        <ion-card-header>\n            <color-sample float-left\n                          class="event-icon"\n                          [color]="event.type.color"></color-sample>\n               {{event.type.title}}\n            <ion-icon float-right\n                      class="trash-btn"\n                      name="ios-trash-outline"\n                      float-right\n                      (click)="removeEvent(event)"></ion-icon>\n        </ion-card-header>\n\n        <ion-card-content *ngIf="getInputsList(event).length">\n            <div *ngFor="let input of getInputsList(event)">\n                <b>{{input.title}}:</b> {{event.getInputData(input.inputKind)}}\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n</div>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/dayDetailsList/dayDetails.template.html"*/
    }),
    __param(0, core_1.Inject(calendar_store_1.CalendarStore)),
    __metadata("design:paramtypes", [calendar_store_1.CalendarStore])
], DayDetails);
exports.DayDetails = DayDetails;
//# sourceMappingURL=dayDetails.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var _ = __webpack_require__(30);
var calendar_store_1 = __webpack_require__(44);
var ionic_angular_1 = __webpack_require__(16);
var eventType_store_1 = __webpack_require__(45);
var dayEvent_model_1 = __webpack_require__(352);
var eventEditorPage_1 = __webpack_require__(375);
var currentClendarView_service_1 = __webpack_require__(29);
var dayViewPage_1 = __webpack_require__(135);
var CreateEventFormComponent = (function () {
    function CreateEventFormComponent(navController, currentCalendarView, eventTypeStore, calendarStore) {
        var _this = this;
        this.navController = navController;
        this.currentCalendarView = currentCalendarView;
        this.eventTypeStore = eventTypeStore;
        this.calendarStore = calendarStore;
        this.types = [];
        this.eventTypesPage = eventEditorPage_1.EventEditorPage;
        this.navController.viewWillEnter
            .filter(function (_a) {
            var component = _a.component;
            return component === dayViewPage_1.DayViewPage;
        })
            .subscribe(function () {
            _this.updateEvents();
        });
    }
    CreateEventFormComponent.prototype.ngOnInit = function () {
        this.date = this.currentCalendarView.currentDate;
    };
    CreateEventFormComponent.prototype.updateEvents = function () {
        var _this = this;
        this.eventTypeStore.getAllTypes().then(function (types) {
            _this.types = types;
            if (types.length > 0) {
                _this.selectedType = _this.types[0];
                _this.makeInputs();
            }
        });
    };
    CreateEventFormComponent.prototype.addEvent = function () {
        var event = new dayEvent_model_1.DayEvent(this.selectedType);
        this.eventInputs.forEach(function (eventInput) {
            event.changeInputData(eventInput.inputKind, eventInput.value);
        });
        this.calendarStore.addEvent(this.date, event);
    };
    CreateEventFormComponent.prototype.makeInputs = function () {
        var type = this.selectedType;
        this.eventInputs = type.inputs.map(function (input) { return _.assign({}, input, { value: '' }); });
    };
    CreateEventFormComponent.prototype.isTimeInput = function (input) {
        return input.inputKind === eventType_store_1.INPUTS.Time;
    };
    CreateEventFormComponent.prototype.isStoryInput = function (input) {
        return input.inputKind === eventType_store_1.INPUTS.Story;
    };
    return CreateEventFormComponent;
}());
CreateEventFormComponent = __decorate([
    core_1.Component({
        selector: 'create-event-form',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/createEventForm/createEventForm.template.html"*/'<form (ngSubmit)="addEvent()">\n    <ion-item *ngIf="types.length">\n        <ion-select class="select-event"\n                    [(ngModel)]="selectedType"\n                    name="types"\n                    interface="action-sheet"\n                    (ngModelChange)="makeInputs()">\n            <ion-option *ngFor="let type of types"\n                        [value]="type">\n                <ion-icon class="trash-btn"\n                          name="ios-trash-outline"></ion-icon>\n                {{type.title}}\n            </ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngFor="let input of eventInputs">\n        <ion-input *ngIf="isStoryInput(input)"\n                   placeholder="title"\n                   [(ngModel)]="input.value"\n                   name="{{input.title}}Title"></ion-input>\n\n        <ion-datetime *ngIf="isTimeInput(input)"\n                      placeholder="12:00"\n                      displayFormat="HH:mm"\n                      [(ngModel)]="input.value"\n                      name="{{input.title}}Title"></ion-datetime>\n\n        <ion-label fixed>\n            {{input.title}}\n        </ion-label>\n    </ion-item>\n\n    <ion-buttons padding-vertical>\n        <button *ngIf="types.length"\n                padding\n                ion-button\n                type="submit">Add event\n        </button>\n        <button ion-button\n                float-right\n                [navPush]="eventTypesPage">Manage types\n        </button>\n    </ion-buttons>\n</form>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/createEventForm/createEventForm.template.html"*/
    }),
    __param(0, core_1.Inject(ionic_angular_1.NavController)),
    __param(1, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(2, core_1.Inject(eventType_store_1.EventTypeStore)),
    __param(3, core_1.Inject(calendar_store_1.CalendarStore)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        currentClendarView_service_1.CurrentCalendarViewService,
        eventType_store_1.EventTypeStore,
        calendar_store_1.CalendarStore])
], CreateEventFormComponent);
exports.CreateEventFormComponent = CreateEventFormComponent;
//# sourceMappingURL=createEventForm.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var moment = __webpack_require__(2);
var _ = __webpack_require__(30);
var YearViewComponent = (function () {
    function YearViewComponent() {
    }
    YearViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var counter = 0;
        this.monthRows = _.times(4, function () {
            return _.times(3, function () {
                return moment(_this.currentDate).month(counter++);
            });
        });
    };
    return YearViewComponent;
}());
__decorate([
    core_1.Input('year'),
    __metadata("design:type", Object)
], YearViewComponent.prototype, "currentDate", void 0);
YearViewComponent = __decorate([
    core_1.Component({
        selector: 'year-view',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/yearView/yearView.template.html"*/'<div class="monthsContainer">\n  <ion-grid>\n    <ion-row *ngFor="let fewMonths of monthRows">\n      <ion-col class="month-col" *ngFor="let month of fewMonths" col-4>\n        <month-view class="year-month"  [month]="month" [yearView]="true">\n        </month-view>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/yearView/yearView.template.html"*/
    })
], YearViewComponent);
exports.YearViewComponent = YearViewComponent;
//# sourceMappingURL=yearView.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(16);
var colorpickerPopover_component_1 = __webpack_require__(136);
var ColorSample = (function () {
    function ColorSample(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.clickable = false;
        this.onColorChange = new core_1.EventEmitter();
    }
    ColorSample.prototype.presentPopover = function (clickEvent) {
        var _this = this;
        if (this.clickable && !this.popover) {
            var popover = this.popoverCtrl.create(colorpickerPopover_component_1.ColorpickerPopoverComponent);
            popover.present({
                ev: clickEvent
            });
            popover.onDidDismiss(function (selectedColor) {
                if (selectedColor && _this.color !== selectedColor) {
                    _this.onColorChange.emit(selectedColor);
                }
            });
        }
    };
    return ColorSample;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColorSample.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColorSample.prototype, "small", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColorSample.prototype, "big", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColorSample.prototype, "popover", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ColorSample.prototype, "clickable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ColorSample.prototype, "onColorChange", void 0);
ColorSample = __decorate([
    core_1.Component({
        selector: 'color-sample',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/colorSample/colorSample.template.html"*/'<div (click)="presentPopover($event)"\n     class="inner"\n     [class.small]="small"\n     [class.big]="big"\n     [class.popover]="popover"\n     [style.background]="color"></div>'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/colorSample/colorSample.template.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.PopoverController])
], ColorSample);
exports.ColorSample = ColorSample;
//# sourceMappingURL=colorSample.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var eventType_store_1 = __webpack_require__(45);
var ionic_angular_1 = __webpack_require__(16);
var calendar_store_1 = __webpack_require__(44);
var _ = __webpack_require__(30);
var currentClendarView_service_1 = __webpack_require__(29);
var EventTypeList = (function () {
    function EventTypeList(eventTypeStore, currentViewService, alertCtrl, calendarStore) {
        this.eventTypeStore = eventTypeStore;
        this.currentViewService = currentViewService;
        this.alertCtrl = alertCtrl;
        this.calendarStore = calendarStore;
        this.filterMenuMode = false;
        this.onTypeSelect = new core_1.EventEmitter();
    }
    EventTypeList.prototype.ngOnInit = function () {
        var _this = this;
        this.updateTypes();
        this.eventTypeStore.updateStream.subscribe(function () {
            _this.updateTypes();
        });
    };
    EventTypeList.prototype.isCurrentFilteredType = function (type) {
        console.log(this.currentViewService.filterEventId);
        return this.currentViewService.filterEventId === type.id;
    };
    EventTypeList.prototype.edit = function (type) {
        this.onTypeSelect.emit(type);
    };
    EventTypeList.prototype.updateTypes = function () {
        var _this = this;
        this.eventTypeStore.getAllTypes().then(function (types) {
            _this.types = types;
        });
    };
    EventTypeList.prototype.removeType = function (event, type) {
        var _this = this;
        event.stopPropagation();
        this.calendarStore.getEventsOfType(type.id).then(function (events) {
            if (events.length) {
                console.log(events);
                var daysList = _.take(events, 2).map(function (event) { return event.format('DD/MM/YY'); }).join(',');
                if (daysList.length > 2) {
                    daysList += '...';
                }
                var alert_1 = _this.alertCtrl.create({
                    title: 'Can\'t remove type',
                    subTitle: "There are event(s) of this type on days:" + daysList,
                    buttons: ['Ok']
                });
                alert_1.present();
                return;
            }
            _this.eventTypeStore.removeType(type.id);
        });
    };
    EventTypeList.prototype.addNewEventType = function () {
        this.onTypeSelect.emit(new eventType_store_1.EventType());
    };
    return EventTypeList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventTypeList.prototype, "filterMenuMode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventTypeList.prototype, "onTypeSelect", void 0);
EventTypeList = __decorate([
    core_1.Component({
        selector: 'event-type-list',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesList/eventTypeList.template.html"*/'<h4 ion-text\n    *ngIf="!filterMenuMode">\n    Types:\n    <button class="add-btn"\n            (click)="addNewEventType()"\n            ion-button\n            icon-only\n            float-right\n            clear>\n        <ion-icon name="add"></ion-icon>\n    </button>\n</h4>\n<ion-list>\n    <div ion-item\n         *ngFor="let type of types"\n         [class.current-type]="filterMenuMode && isCurrentFilteredType(type)"\n         (click)="edit(type)">\n        {{ type.title }}\n        <ion-icon class="trash-btn"\n                  name="ios-trash-outline"\n                  item-end\n                  *ngIf="!filterMenuMode"\n                  (click)="removeType($event, type)"></ion-icon>\n        <color-sample item-start\n                      [color]="type.color"></color-sample>\n    </div>\n</ion-list>\n\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesList/eventTypeList.template.html"*/
    }),
    __param(0, core_1.Inject(eventType_store_1.EventTypeStore)),
    __param(1, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(2, core_1.Inject(ionic_angular_1.AlertController)),
    __param(3, core_1.Inject(calendar_store_1.CalendarStore)),
    __metadata("design:paramtypes", [eventType_store_1.EventTypeStore,
        currentClendarView_service_1.CurrentCalendarViewService,
        ionic_angular_1.AlertController,
        calendar_store_1.CalendarStore])
], EventTypeList);
exports.EventTypeList = EventTypeList;
//# sourceMappingURL=eventTypeList.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var currentClendarView_service_1 = __webpack_require__(29);
var ionic_angular_1 = __webpack_require__(16);
var FilterMenuComponent = (function () {
    function FilterMenuComponent(menuCtrl, currentViewService) {
        this.menuCtrl = menuCtrl;
        this.currentViewService = currentViewService;
    }
    FilterMenuComponent.prototype.filterByType = function (event) {
        this.currentViewService.filterEventId = event.id;
        this.menuCtrl.close();
    };
    FilterMenuComponent.prototype.reset = function () {
        this.currentViewService.filterEventId = null;
        this.menuCtrl.close();
    };
    return FilterMenuComponent;
}());
FilterMenuComponent = __decorate([
    core_1.Component({
        selector: 'filter-menu',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/filterMenu/filterMenu.template.html"*/'<h5 padding>Filter by type\n    <button ion-button\n            icon-only\n            clear\n            float-right\n            class="reset-button"\n            (click)="reset()"\n            type="reset">\n        <ion-icon name="close"></ion-icon>\n    </button>\n</h5>\n\n<event-type-list (onTypeSelect)="filterByType($event)"\n                 [filterMenuMode]="true">\n</event-type-list>'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/filterMenu/filterMenu.template.html"*/
    }),
    __param(0, core_1.Inject(ionic_angular_1.MenuController)),
    __param(1, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __metadata("design:paramtypes", [ionic_angular_1.MenuController,
        currentClendarView_service_1.CurrentCalendarViewService])
], FilterMenuComponent);
exports.FilterMenuComponent = FilterMenuComponent;
//# sourceMappingURL=filterMenu.component.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map