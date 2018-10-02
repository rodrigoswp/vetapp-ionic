webpackJsonp([9],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailPageModule", function() { return TripDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trip_detail__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TripDetailPageModule = (function () {
    function TripDetailPageModule() {
    }
    TripDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__trip_detail__["a" /* TripDetailPage */]
            ]
        })
    ], TripDetailPageModule);
    return TripDetailPageModule;
}());

//# sourceMappingURL=trip-detail.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trip_service__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripDetailPage = (function () {
    function TripDetailPage(nav, navParams, tripService) {
        this.nav = nav;
        this.navParams = navParams;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.param = this.navParams.get('id');
        this.trip = this.tripService.getItem(this.param) ? this.tripService.getItem(this.param) : this.tripService.getAll()[0];
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function (trip) {
        this.nav.push('page-checkout-trip', {
            'id': trip.id
        });
    };
    TripDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trip-detail',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/trip-detail/trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ trip.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img src="{{ image }}" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" color="primary"></ion-icon>\n            <span ion-text color="secondary">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left color="primary" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="secondary" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left color="primary" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="secondary" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12>\n        <!--high light-->\n        <div class="border-bottom" padding>\n          <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n          <ul class="highlight">\n            <li *ngFor="let highlight of trip.highlights">\n              <ion-icon name="checkmark" class="text-green"></ion-icon>\n              <span ion-text color="primary">{{ highlight }}</span>\n            </li>\n          </ul>\n        </div>\n\n        <!--booking form-->\n        <div class="booking-form card round" margin>\n          <div class="border-bottom" padding>\n            <h5>{{ trip.sub_name }}</h5>\n\n            <!--choose guest-->\n            <ion-grid class="filters" no-padding margin-top>\n              <ion-row>\n                <ion-col class="adult" width-70>\n                  <span ion-text color="primary"><strong>{{ trip.price_adult | currency }}</strong> Adults</span>\n                </ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                            color="secondary"></ion-icon>\n                </ion-col>\n                <ion-col width-10 text-center>{{ adults }}</ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n                </ion-col>\n              </ion-row>\n              <ion-row margin-top>\n                <ion-col width-70>\n                  <span ion-text color="primary"><strong>{{ trip.price_child | currency }}</strong> Child (0-12 years)</span>\n                </ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                            color="secondary"></ion-icon>\n                </ion-col>\n                <ion-col width-10 text-center>{{ children }}</ion-col>\n                <ion-col width-10 text-center>\n                  <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <div padding class="form-bottom">\n      <!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n            <!--booking button-->\n            <button ion-button class="pull-right" color="secondary" tappable (click)="checkout(trip)">Book Now {{ adults * trip.price_adult +\n              children * trip.price_child | currency }}\n            </button>\n            <div class="clear"></div>\n          </div>\n        </div>\n\n        <!--description-->\n        <div class="border-bottom" padding>\n          <span ion-text color="primary" class="bold">DESCRIPTION</span>\n          <p ion-text>{{ trip.description }}</p>\n        </div>\n\n        <!--address-->\n        <div class="border-bottom" padding>\n          <span ion-text color="primary" class="bold">LOCATION</span>\n          <p ion-text>{{ trip.location }}</p>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/trip-detail/trip-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_trip_service__["a" /* TripService */]])
    ], TripDetailPage);
    return TripDetailPage;
}());

//# sourceMappingURL=trip-detail.js.map

/***/ })

});
//# sourceMappingURL=9.js.map