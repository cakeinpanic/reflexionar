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
var ionic_angular_1 = __webpack_require__(17);
var moment = __webpack_require__(2);
var currentClendarView_service_1 = __webpack_require__(39);
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
var ionic_angular_1 = __webpack_require__(17);
var moment = __webpack_require__(2);
var _ = __webpack_require__(40);
var currentClendarView_service_1 = __webpack_require__(39);
var Subject_1 = __webpack_require__(11);
var yearViewPage_1 = __webpack_require__(127);
var MonthViewPage = MonthViewPage_1 = (function () {
    function MonthViewPage(navController, currentCalendarView) {
        this.navController = navController;
        this.currentCalendarView = currentCalendarView;
        this.months = [];
        this.onDestroy = new Subject_1.Subject();
    }
    MonthViewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setMonths();
        this.navController.viewWillEnter
            .takeUntil(this.onDestroy)
            .filter(function (_a) {
            var component = _a.component;
            return component === MonthViewPage_1;
        })
            .subscribe(function () {
            _this.setMonths();
        });
        this.navController.viewDidEnter
            .takeUntil(this.onDestroy)
            .filter(function (_a) {
            var component = _a.component;
            return component === MonthViewPage_1;
        })
            .subscribe(function () {
            if (_this.navController.getPrevious().component === yearViewPage_1.YearViewPage) {
                _this.scrollTo();
            }
        });
    };
    MonthViewPage.prototype.ngOnDestroy = function () {
        this.onDestroy.next();
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
        selector: 'month-view-page',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/monthViewPage/monthViewPage.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Reflexory\n        </ion-title>\n        <ion-buttons start></ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="page-content">\n\n    <button ion-button\n            icon-only\n            clear\n            full\n            (click)="showPrev()">\n        <ion-icon ios="ios-arrow-dropup"\n                  md="md-arrow-dropup"></ion-icon>\n    </button>\n    <month-view *ngFor="let month of months"\n                [month]="month"\n                [attr.month-number]="month.month()"></month-view>\n    <button ion-button\n            icon-only\n            clear\n            full\n            (click)="showNext()">\n        <ion-icon ios="ios-arrow-dropdown"\n                  md="md-arrow-dropdown"></ion-icon>\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/monthViewPage/monthViewPage.html"*/
    }),
    __param(0, core_1.Inject(ionic_angular_1.NavController)),
    __param(1, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
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
var ionic_angular_1 = __webpack_require__(17);
var currentClendarView_service_1 = __webpack_require__(39);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var eventType_store_1 = __webpack_require__(41);
var ionic_angular_1 = __webpack_require__(17);
var currentClendarView_service_1 = __webpack_require__(39);
var ionic_angular_2 = __webpack_require__(17);
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
    EventEditorPage.prototype.addNew = function () {
        this.editingType = new eventType_store_1.EventType();
    };
    EventEditorPage.prototype.onClose = function () {
        this.editingType = null;
    };
    EventEditorPage.prototype.startEdit = function (type) {
        this.editingType = type;
        var modal = this.modalController.create(eventTypeEditor_component_1.EventTypeEditor, { type: this.editingType });
        modal.present();
        // modal.onDidDismiss(() => this.onClose());
    };
    EventEditorPage.prototype.setBackButton = function () {
        var date = this.currentCalendarView.currentDate;
        this.navController.getActive().getNavbar().setBackButtonText("" + date.format('DD.MM'));
    };
    return EventEditorPage;
}());
EventEditorPage = EventEditorPage_1 = __decorate([
    core_1.Component({
        selector: 'page-edit-event-types',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/eventEditorPage/eventEditorPage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Manage event types\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="page-content">\n  <event-type-list (onTypeSelect)="startEdit($event)" (onAddNewClick)="addNew()"></event-type-list>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/pages/eventEditorPage/eventEditorPage.html"*/
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

/***/ 137:
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
var eventType_store_1 = __webpack_require__(41);
var ionic_angular_1 = __webpack_require__(17);
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

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(40);
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
            console.log(this.data);
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
var eventType_store_1 = __webpack_require__(41);
var _ = __webpack_require__(40);
var ionic_angular_1 = __webpack_require__(17);
var EventTypeEditor = (function () {
    function EventTypeEditor(eventTypeStore, viewCtrl, params) {
        var _this = this;
        this.eventTypeStore = eventTypeStore;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.creatingNew = false;
        this.inputTypeDetails = eventType_store_1.INPUT_TYPES.map(function (inputType) { return _this.getTypeDetails(inputType); });
    }
    Object.defineProperty(EventTypeEditor.prototype, "availableInputs", {
        get: function () {
            return _.difference(eventType_store_1.INPUT_TYPES, this.inputs.map(function (inputType) { return inputType.inputKind; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventTypeEditor.prototype, "formValid", {
        get: function () {
            return !!this.type.title && this.inputs.every(function (input) { return !!input.title; });
        },
        enumerable: true,
        configurable: true
    });
    EventTypeEditor.prototype.changeColor = function (newColor) {
        this.type.color = newColor;
    };
    EventTypeEditor.prototype.ngOnInit = function () {
        this.type = this.params.get('type');
        this.creatingNew = !this.type.title;
        this.inputs = _.clone(this.type.inputs);
    };
    EventTypeEditor.prototype.close = function () {
        this.viewCtrl.dismiss().catch(function () { });
    };
    EventTypeEditor.prototype.saveType = function () {
        this.type.inputs = this.inputs;
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
        selector: 'event-type-editor',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesEditor/eventTypeEditor.template.html"*/'<ion-content class="page-content">\n    <form (ngSubmit)="saveType()">\n        <div class="inputs-list">\n            <div>\n                <color-sample float-left\n                              [big]=\'true\'\n                              (onColorChange)="changeColor($event)"\n                              [clickable]="true"\n                              [color]="type.color"></color-sample>\n                <span class="title">\n                    <h6>{{type.title}}</h6>\n                </span>\n\n                <button ion-button\n                        icon-only\n                        float-right\n                        clear\n                        (click)="saveType()"\n                        [disabled]="!formValid"\n                        type="submit">\n                    <ion-icon name="checkmark"></ion-icon>\n                </button>\n                <button ion-button\n                        icon-only\n                        clear\n                        float-right\n                        (click)="close()"\n                        type="reset">\n                    <ion-icon name="close"></ion-icon>\n\n                </button>\n            </div>\n            <ion-list>\n\n                <ion-item>\n                    <ion-label>Title</ion-label>\n                    <ion-input placeholder="Event title"\n                               [(ngModel)]="type.title"\n                               name="title"></ion-input>\n\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <ion-list *ngIf=\'inputs.length\'>\n\n            <ion-list-header>Inputs</ion-list-header>\n            <ion-item *ngFor="let input of inputs">\n\n                <ion-icon class="trash-btn"\n                          name="ios-trash-outline"\n                          item-end\n                          (click)="removeInput(input)"></ion-icon>\n\n                <ion-input [placeholder]="getInputPlaceholder(input)"\n                           [(ngModel)]="input.title"\n                           required="true"\n                           name="{{input.title}}Title"></ion-input>\n                <ion-icon [name]="getInputIcon(input)"\n                          item-start></ion-icon>\n\n            </ion-item>\n        </ion-list>\n        <div class="input-buttons">\n            <!--adding new inputs-->\n            <button *ngFor="let inputType of availableInputs"\n                    (click)="addInput(inputType)"\n                    class="addInput-btn"\n                    color="secondary"\n                    type=\'"button\'\n                    ion-button>\n                <ion-icon [name]="inputTypeDetails[inputType].icon"></ion-icon>\n                {{inputTypeDetails[inputType].addTitle}}\n            </button>\n        </div>\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesEditor/eventTypeEditor.template.html"*/
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
var common_1 = __webpack_require__(45);
var ionic_angular_1 = __webpack_require__(17);
var colorSample_component_1 = __webpack_require__(706);
var colorpickerPopover_component_1 = __webpack_require__(137);
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
var platform_browser_1 = __webpack_require__(46);
var core_1 = __webpack_require__(1);
var ionic_angular_1 = __webpack_require__(17);
var splash_screen_1 = __webpack_require__(231);
var status_bar_1 = __webpack_require__(236);
var app_component_1 = __webpack_require__(426);
var monthViewPage_1 = __webpack_require__(134);
var yearViewPage_1 = __webpack_require__(127);
var dayViewPage_1 = __webpack_require__(135);
var eventEditorPage_1 = __webpack_require__(136);
var calendar_module_1 = __webpack_require__(700);
var eventTypeEditor_component_1 = __webpack_require__(376);
var eventTypeList_component_1 = __webpack_require__(707);
var currentClendarView_service_1 = __webpack_require__(39);
var Storage_1 = __webpack_require__(133);
var colorpickerPopover_component_1 = __webpack_require__(137);
var colorSample_module_1 = __webpack_require__(377);
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
            eventTypeList_component_1.EventTypeList
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

/***/ 39:
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
var CurrentCalendarViewService = (function () {
    function CurrentCalendarViewService() {
        this.currentDate = moment();
    }
    return CurrentCalendarViewService;
}());
CurrentCalendarViewService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CurrentCalendarViewService);
exports.CurrentCalendarViewService = CurrentCalendarViewService;
//# sourceMappingURL=currentClendarView.service.js.map

/***/ }),

/***/ 41:
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
var _ = __webpack_require__(40);
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
var ionic_angular_1 = __webpack_require__(17);
var status_bar_1 = __webpack_require__(236);
var splash_screen_1 = __webpack_require__(231);
var ionic_angular_2 = __webpack_require__(17);
var yearViewPage_1 = __webpack_require__(127);
var calendar_store_1 = __webpack_require__(48);
var eventType_store_1 = __webpack_require__(41);
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
    core_1.Component({template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/app.html"*/
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
	"./af": 238,
	"./af.js": 238,
	"./ar": 239,
	"./ar-dz": 240,
	"./ar-dz.js": 240,
	"./ar-kw": 241,
	"./ar-kw.js": 241,
	"./ar-ly": 242,
	"./ar-ly.js": 242,
	"./ar-ma": 243,
	"./ar-ma.js": 243,
	"./ar-sa": 244,
	"./ar-sa.js": 244,
	"./ar-tn": 245,
	"./ar-tn.js": 245,
	"./ar.js": 239,
	"./az": 246,
	"./az.js": 246,
	"./be": 247,
	"./be.js": 247,
	"./bg": 248,
	"./bg.js": 248,
	"./bn": 249,
	"./bn.js": 249,
	"./bo": 250,
	"./bo.js": 250,
	"./br": 251,
	"./br.js": 251,
	"./bs": 252,
	"./bs.js": 252,
	"./ca": 253,
	"./ca.js": 253,
	"./cs": 254,
	"./cs.js": 254,
	"./cv": 255,
	"./cv.js": 255,
	"./cy": 256,
	"./cy.js": 256,
	"./da": 257,
	"./da.js": 257,
	"./de": 258,
	"./de-at": 259,
	"./de-at.js": 259,
	"./de-ch": 260,
	"./de-ch.js": 260,
	"./de.js": 258,
	"./dv": 261,
	"./dv.js": 261,
	"./el": 262,
	"./el.js": 262,
	"./en-au": 263,
	"./en-au.js": 263,
	"./en-ca": 264,
	"./en-ca.js": 264,
	"./en-gb": 265,
	"./en-gb.js": 265,
	"./en-ie": 266,
	"./en-ie.js": 266,
	"./en-nz": 267,
	"./en-nz.js": 267,
	"./eo": 268,
	"./eo.js": 268,
	"./es": 269,
	"./es-do": 270,
	"./es-do.js": 270,
	"./es.js": 269,
	"./et": 271,
	"./et.js": 271,
	"./eu": 272,
	"./eu.js": 272,
	"./fa": 273,
	"./fa.js": 273,
	"./fi": 274,
	"./fi.js": 274,
	"./fo": 275,
	"./fo.js": 275,
	"./fr": 276,
	"./fr-ca": 277,
	"./fr-ca.js": 277,
	"./fr-ch": 278,
	"./fr-ch.js": 278,
	"./fr.js": 276,
	"./fy": 279,
	"./fy.js": 279,
	"./gd": 280,
	"./gd.js": 280,
	"./gl": 281,
	"./gl.js": 281,
	"./gom-latn": 282,
	"./gom-latn.js": 282,
	"./he": 283,
	"./he.js": 283,
	"./hi": 284,
	"./hi.js": 284,
	"./hr": 285,
	"./hr.js": 285,
	"./hu": 286,
	"./hu.js": 286,
	"./hy-am": 287,
	"./hy-am.js": 287,
	"./id": 288,
	"./id.js": 288,
	"./is": 289,
	"./is.js": 289,
	"./it": 290,
	"./it.js": 290,
	"./ja": 291,
	"./ja.js": 291,
	"./jv": 292,
	"./jv.js": 292,
	"./ka": 293,
	"./ka.js": 293,
	"./kk": 294,
	"./kk.js": 294,
	"./km": 295,
	"./km.js": 295,
	"./kn": 296,
	"./kn.js": 296,
	"./ko": 297,
	"./ko.js": 297,
	"./ky": 298,
	"./ky.js": 298,
	"./lb": 299,
	"./lb.js": 299,
	"./lo": 300,
	"./lo.js": 300,
	"./lt": 301,
	"./lt.js": 301,
	"./lv": 302,
	"./lv.js": 302,
	"./me": 303,
	"./me.js": 303,
	"./mi": 304,
	"./mi.js": 304,
	"./mk": 305,
	"./mk.js": 305,
	"./ml": 306,
	"./ml.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./my": 310,
	"./my.js": 310,
	"./nb": 311,
	"./nb.js": 311,
	"./ne": 312,
	"./ne.js": 312,
	"./nl": 313,
	"./nl-be": 314,
	"./nl-be.js": 314,
	"./nl.js": 313,
	"./nn": 315,
	"./nn.js": 315,
	"./pa-in": 316,
	"./pa-in.js": 316,
	"./pl": 317,
	"./pl.js": 317,
	"./pt": 318,
	"./pt-br": 319,
	"./pt-br.js": 319,
	"./pt.js": 318,
	"./ro": 320,
	"./ro.js": 320,
	"./ru": 321,
	"./ru.js": 321,
	"./sd": 322,
	"./sd.js": 322,
	"./se": 323,
	"./se.js": 323,
	"./si": 324,
	"./si.js": 324,
	"./sk": 325,
	"./sk.js": 325,
	"./sl": 326,
	"./sl.js": 326,
	"./sq": 327,
	"./sq.js": 327,
	"./sr": 328,
	"./sr-cyrl": 329,
	"./sr-cyrl.js": 329,
	"./sr.js": 328,
	"./ss": 330,
	"./ss.js": 330,
	"./sv": 331,
	"./sv.js": 331,
	"./sw": 332,
	"./sw.js": 332,
	"./ta": 333,
	"./ta.js": 333,
	"./te": 334,
	"./te.js": 334,
	"./tet": 335,
	"./tet.js": 335,
	"./th": 336,
	"./th.js": 336,
	"./tl-ph": 337,
	"./tl-ph.js": 337,
	"./tlh": 338,
	"./tlh.js": 338,
	"./tr": 339,
	"./tr.js": 339,
	"./tzl": 340,
	"./tzl.js": 340,
	"./tzm": 341,
	"./tzm-latn": 342,
	"./tzm-latn.js": 342,
	"./tzm.js": 341,
	"./uk": 343,
	"./uk.js": 343,
	"./ur": 344,
	"./ur.js": 344,
	"./uz": 345,
	"./uz-latn": 346,
	"./uz-latn.js": 346,
	"./uz.js": 345,
	"./vi": 347,
	"./vi.js": 347,
	"./x-pseudo": 348,
	"./x-pseudo.js": 348,
	"./yo": 349,
	"./yo.js": 349,
	"./zh-cn": 350,
	"./zh-cn.js": 350,
	"./zh-hk": 351,
	"./zh-hk.js": 351,
	"./zh-tw": 352,
	"./zh-tw.js": 352
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

/***/ 48:
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
var _ = __webpack_require__(40);
var dayEvent_model_1 = __webpack_require__(353);
var core_1 = __webpack_require__(1);
var rxjs_1 = __webpack_require__(428);
var eventType_store_1 = __webpack_require__(41);
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
    CalendarStore.prototype.hasEventsOfType = function (typeId) {
        return Promise.resolve(_.some(this.store, function (events) { return events.filter(function (event) { return event.isOfTypeId(typeId); }); }));
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
var common_1 = __webpack_require__(45);
var monthView_component_1 = __webpack_require__(701);
var ionic_angular_1 = __webpack_require__(17);
var dayView_component_1 = __webpack_require__(702);
var calendar_store_1 = __webpack_require__(48);
var dayDetails_component_1 = __webpack_require__(703);
var eventType_store_1 = __webpack_require__(41);
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
var _ = __webpack_require__(40);
var ionic_angular_1 = __webpack_require__(17);
var monthViewPage_1 = __webpack_require__(134);
var currentClendarView_service_1 = __webpack_require__(39);
var DAYS_IN_WEEK = 7;
var DEFAULT_WEKS_NUM = 5;
var MonthView = (function () {
    function MonthView(currentCalendarView, el, navController) {
        this.currentCalendarView = currentCalendarView;
        this.el = el;
        this.navController = navController;
        this.yearView = false;
    }
    MonthView.prototype.ngOnInit = function () {
        this.fillWeeks();
        this.size = Math.floor(this.el.nativeElement.offsetWidth / 7) + 'px';
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
            .forEach(function (day, i) {
            var weekNum = Math.floor(i / DAYS_IN_WEEK);
            if (!_this.weeks[weekNum]) {
                _this.weeks[weekNum] = [];
            }
            _this.weeks[weekNum].push(day);
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
        var concatThreeMonths = _.takeRight(prevDays, startsWith - 1)
            .concat(thisDays)
            .concat(_.take(nextDays, endsWith));
        return _.take(concatThreeMonths, datesCapacity);
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
        selector: 'month-view',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/monthView/monthView.template.html"*/'<div (click)="goToMonth()"\n     class="month"\n     [class.month-yearView]="yearView">\n\n  <h4 ion-text\n      class="monthTitle"\n      [class.title-small]="yearView">\n    {{currentMonthName}} </h4>\n\n  <div *ngIf="!yearView"\n       class="datesContainer">\n\n    <div *ngFor="let week of weeks"\n         class="week">\n      <day-view *ngFor="let day of week"\n                class="day-view"\n                [elementSize]="size"\n                [notThisMonth]="day.notDayOfCurrentMonth"\n                [date]="day.date"\n                [yearView]="yearView"></day-view>\n    </div>\n  </div>\n\n  <!--optimizing performance by not using component for logic-less moment-->\n  <div *ngIf="yearView"\n       class="datesContainer datesContainer-yearView">\n\n    <div *ngFor="let week of weeks"\n         class="week">\n      <div *ngFor="let day of week"\n           class="day-view">\n        <div [hidden]="day.notDayOfCurrentMonth"\n\n        >\n          {{day.date.date()}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/monthView/monthView.template.html"*/
    }),
    __param(0, core_1.Inject(currentClendarView_service_1.CurrentCalendarViewService)),
    __param(1, core_1.Inject(core_1.ElementRef)),
    __param(2, core_1.Inject(ionic_angular_1.NavController)),
    __metadata("design:paramtypes", [currentClendarView_service_1.CurrentCalendarViewService,
        core_1.ElementRef,
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
var calendar_store_1 = __webpack_require__(48);
var ionic_angular_1 = __webpack_require__(17);
var dayViewPage_1 = __webpack_require__(135);
var currentClendarView_service_1 = __webpack_require__(39);
var DayView = (function () {
    function DayView(currentCalendarView, calendarStore, navController) {
        this.currentCalendarView = currentCalendarView;
        this.calendarStore = calendarStore;
        this.navController = navController;
        this.yearView = false;
        this.notThisMonth = false;
        this.isToday = false;
        this.events = [];
    }
    DayView.prototype.ngOnInit = function () {
        this.day = this.date.date();
        this.updateEvents();
        this.setToday();
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
            this.calendarStore.eventStream
                .filter(function (timestamp) { return timestamp === dayId_1; })
                .subscribe(function () {
                _this.getEvents(dayId_1);
            });
        }
    };
    DayView.prototype.getEvents = function (dayId) {
        var _this = this;
        this.calendarStore.getEventsById(dayId).then(function (data) {
            _this.events = data;
        });
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
        selector: 'day-view',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/dayView/dayView.template.html"*/'<div class="day-container"\n     [hidden]="yearView && notThisMonth"\n     [style.width]="elementSize"\n     [style.height]="elementSize">\n  <div class="day day-{{className}}"\n       [class.day-small]="yearView"\n       [class.day-background]="!yearView"\n       [class.day-anotherMonth]="notThisMonth"\n       [class.day-today]="isToday"\n       (click)="openDetails()">\n\n    <div class="date">{{day}}</div>\n    <color-sample *ngFor="let event of events" small="true" [color]="event.type.color"></color-sample>\n\n  </div>\n</div>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/calendar/dayView/dayView.template.html"*/
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
var calendar_store_1 = __webpack_require__(48);
var eventEditorPage_1 = __webpack_require__(136);
var DayDetails = (function () {
    function DayDetails(calendarStore) {
        this.calendarStore = calendarStore;
        this.eventTypesPage = eventEditorPage_1.EventEditorPage;
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
var _ = __webpack_require__(40);
var calendar_store_1 = __webpack_require__(48);
var ionic_angular_1 = __webpack_require__(17);
var eventType_store_1 = __webpack_require__(41);
var dayEvent_model_1 = __webpack_require__(353);
var eventEditorPage_1 = __webpack_require__(136);
var currentClendarView_service_1 = __webpack_require__(39);
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
        selector: 'create-event-form',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/createEventForm/createEventForm.template.html"*/'<form (ngSubmit)="addEvent()">\n    <ion-item *ngIf="types.length">\n        <ion-select class="select-event"\n                    [(ngModel)]="selectedType"\n                    name="types"\n                    interface="action-sheet"\n                    (ngModelChange)="makeInputs()">\n            <ion-option *ngFor="let type of types"\n                        [value]="type">\n                <ion-icon class="trash-btn"\n                          name="ios-trash-outline"></ion-icon>\n                {{type.title}}\n            </ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngFor="let input of eventInputs">\n        <ion-input *ngIf="isStoryInput(input)"\n                   placeholder="title"\n                   [(ngModel)]="input.value"\n                   name="{{input.title}}Title"></ion-input>\n\n        <ion-datetime *ngIf="isTimeInput(input)"\n                      placeholder="12:00"\n                      displayFormat="HH:mm"\n                      [(ngModel)]="input.value"\n                      name="{{input.title}}Title"></ion-datetime>\n\n        <ion-label fixed>\n            {{input.title}}\n        </ion-label>\n    </ion-item>\n\n    <button *ngIf="types.length"\n            ion-button\n            type="submit">Add event\n    </button>\n    <button ion-button\n            float-right\n            [navPush]="eventTypesPage">Manage types\n    </button>\n\n</form>\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/createEventForm/createEventForm.template.html"*/
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
var _ = __webpack_require__(40);
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
var ionic_angular_1 = __webpack_require__(17);
var colorpickerPopover_component_1 = __webpack_require__(137);
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
var eventType_store_1 = __webpack_require__(41);
var ionic_angular_1 = __webpack_require__(17);
var calendar_store_1 = __webpack_require__(48);
var EventTypeList = (function () {
    function EventTypeList(eventTypeStore, alertCtrl, calendarStore) {
        this.eventTypeStore = eventTypeStore;
        this.alertCtrl = alertCtrl;
        this.calendarStore = calendarStore;
        this.onTypeSelect = new core_1.EventEmitter();
        this.onAddNewClick = new core_1.EventEmitter();
    }
    EventTypeList.prototype.ngOnInit = function () {
        var _this = this;
        this.updateTypes();
        this.eventTypeStore.updateStream.subscribe(function () {
            _this.updateTypes();
        });
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
        this.calendarStore.hasEventsOfType(type.id)
            .then(function (hasEvents) {
            if (hasEvents) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Can\'t remove type',
                    subTitle: 'There are event of this type',
                    buttons: ['Ok']
                });
                alert_1.present();
                return;
            }
            _this.eventTypeStore.removeType(type.id);
        });
    };
    EventTypeList.prototype.addNewEventType = function () {
        this.onAddNewClick.emit();
    };
    return EventTypeList;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventTypeList.prototype, "onTypeSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventTypeList.prototype, "onAddNewClick", void 0);
EventTypeList = __decorate([
    core_1.Component({
        selector: 'event-type-list',template:/*ion-inline-start:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesList/eventTypeList.template.html"*/'<h4 ion-text>Types:\n  <button class="add-btn"\n          (click)="addNewEventType()"\n          ion-button\n          icon-only\n          float-right\n          clear>\n    <ion-icon name="add"></ion-icon>\n  </button>\n</h4>\n<ion-list>\n  <div ion-item\n       *ngFor="let type of types"\n       (click)="edit(type)">\n    {{ type.title }}\n    <ion-icon class="trash-btn"\n              name="ios-trash-outline"\n              item-end\n              (click)="removeType($event, type)"></ion-icon>\n    <color-sample item-start\n                  [color]="type.color"></color-sample>\n  </div>\n</ion-list>\n\n'/*ion-inline-end:"/Users/cakeinpanic/projects/reflectar/reflectar/src/app/components/eventTypesList/eventTypeList.template.html"*/
    }),
    __param(0, core_1.Inject(eventType_store_1.EventTypeStore)),
    __param(1, core_1.Inject(ionic_angular_1.AlertController)),
    __param(2, core_1.Inject(calendar_store_1.CalendarStore)),
    __metadata("design:paramtypes", [eventType_store_1.EventTypeStore,
        ionic_angular_1.AlertController,
        calendar_store_1.CalendarStore])
], EventTypeList);
exports.EventTypeList = EventTypeList;
//# sourceMappingURL=eventTypeList.component.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map