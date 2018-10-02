webpackJsonp([5],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCarsPageModule", function() { return SearchCarsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_cars__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchCarsPageModule = (function () {
    function SearchCarsPageModule() {
    }
    SearchCarsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_cars__["a" /* SearchCarsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__search_cars__["a" /* SearchCarsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_cars__["a" /* SearchCarsPage */]
            ]
        })
    ], SearchCarsPageModule);
    return SearchCarsPageModule;
}());

//# sourceMappingURL=search-cars.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    SearchLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-location',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/search-location/search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/search-location/search-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SearchLocationPage);
    return SearchLocationPage;
}());

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_location_search_location__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchCarsPage = (function () {
    function SearchCarsPage(storage, nav) {
        this.storage = storage;
        this.nav = nav;
        // search condition
        this.search = {
            pickup: "Rio de Janeiro, Brazil",
            dropOff: "Same as pickup",
            from: new Date().toISOString(),
            to: new Date().toISOString()
        };
    }
    SearchCarsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    SearchCarsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Rio de Janeiro, Brazil";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            // console.log(val)
            if (val === null) {
                _this.search.pickup = "Rio de Janeiro, Brazil";
            }
            else {
                _this.search.pickup = val;
            }
            // this.search.pickup = val;
            console.log(_this.search.pickup);
        }).catch(function (err) {
            console.log(err);
        });
        this.storage.get('dropOff').then(function (val) {
            if (val === null) {
                _this.search.dropOff = "Same as pickup";
            }
            else {
                _this.search.dropOff = val;
            }
            // this.search.dropOff = val;
        }).catch(function (err) {
            console.log(err);
        });
    };
    // choose place
    SearchCarsPage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // go to result page
    SearchCarsPage.prototype.doSearch = function () {
        this.nav.push('page-cars');
    };
    SearchCarsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-cars',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/search-cars/search-cars.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n      <ion-icon name="car" item-start></ion-icon>\n      Search Cars\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="search-cars common-bg">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12>\n        <!-- choose pickup and drop-off-->\n        <h6 ion-text no-margin color="primary" class="marginB-16px">\n          Pick-up / Drop-off\n        </h6>\n        <ion-card no-margin margin-bottom class="full-width">\n          <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom">\n            <ion-icon name="pin" color="primary" item-left></ion-icon>\n            <span ion-text>{{ search.pickup }}</span>\n          </ion-item>\n          <ion-item tappable (click)="choosePlace(\'to\')">\n            <ion-icon name="pin" color="primary" item-left></ion-icon>\n            <span ion-text>{{ search.dropOff }}</span>\n          </ion-item>\n        </ion-card>\n\n        <!--choose time-->\n        <ion-card no-margin margin-bottom class="full-width">\n          <ion-item class="border-bottom">\n            <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n            <ion-datetime class="no-pl" ion-text displayFormat="DD/MM/YYYY h:mm A" pickerFormat="DD/MM/YYYY h:mm A" [(ngModel)]="search.from"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n            <ion-datetime class="no-pl" ion-text displayFormat="DD/MM/YYYY h:mm A" pickerFormat="DD/MM/YYYY h:mm A" [(ngModel)]="search.to"></ion-datetime>\n          </ion-item>\n        </ion-card>\n\n        <hr>\n\n        <h6 ion-text color="primary">\n          Make:\n        </h6>\n        <ion-card no-margin margin-bottom class="full-width">\n          <ion-item>\n            <ion-label ion-text color="primary">One or more:</ion-label>\n            <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancel" okText="OK">\n              <ion-option value="audi" selected="true">Audi</ion-option>\n              <ion-option value="bmw">BMW</ion-option>\n              <ion-option value="chevrolet" selected="true">Chevrolet</ion-option>\n              <ion-option value="dodge">Dodge</ion-option>\n              <ion-option value="fiat">FIAT</ion-option>\n              <ion-option value="ford">Ford</ion-option>\n              <ion-option value="honda">Honda</ion-option>\n              <ion-option value="toyota">Toyota</ion-option>\n              <ion-option value="volvo">Volvo</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n\n        <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n          <ion-icon name="search"></ion-icon> Search\n        </button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <!-- search button -->\n\n</ion-footer>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/search-cars/search-cars.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SearchCarsPage);
    return SearchCarsPage;
}());

//# sourceMappingURL=search-cars.js.map

/***/ })

});
//# sourceMappingURL=5.js.map