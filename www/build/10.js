webpackJsonp([10],{

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabReviewsPageModule", function() { return TabReviewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_reviews__ = __webpack_require__(906);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabReviewsPageModule = (function () {
    function TabReviewsPageModule() {
    }
    TabReviewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_reviews__["a" /* TabReviewsPage */]
            ]
        })
    ], TabReviewsPageModule);
    return TabReviewsPageModule;
}());

//# sourceMappingURL=tab-reviews.module.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabReviewsPage = (function () {
    function TabReviewsPage(nav, hotelService, app) {
        this.nav = nav;
        this.hotelService = hotelService;
        this.app = app;
        // list of reviews
        this.reviews = [];
        // set hotel data
        this.hotel = hotelService.getItem(1);
        // filter reviews
        var tabId = this.nav.id;
        for (var i = 0; i < this.hotel.reviews.length; i++) {
            // if is recent tab
            if (tabId == 't0-0') {
                this.reviews.push(this.hotel.reviews[i]);
            }
            else if (tabId == 't0-1') {
                if (this.hotel.reviews[i].rating > 3) {
                    this.reviews.push(this.hotel.reviews[i]);
                }
            }
            else {
                if (this.hotel.reviews[i].rating <= 3) {
                    this.reviews.push(this.hotel.reviews[i]);
                }
            }
        }
    }
    // make array with range is n
    TabReviewsPage.prototype.range = function (n) {
        return new Array(n);
    };
    // dismiss
    TabReviewsPage.prototype.dismiss = function () {
        this.app.getRootNav().pop();
    };
    TabReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tab-reviews',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/tab-reviews/tab-reviews.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button tappable (click)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>{{ hotel.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="rating" padding>\n    <!--rating-->\n    <ion-badge class="square" color="dark">{{ hotel.rating }}</ion-badge>\n    <span ion-text color="dark">of 5 - guest rating</span>\n  </div>\n\n  <!--list of reviews-->\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let review of reviews" text-wrap>\n      <div class="title">\n        <div class="pull-left bold">{{ review.title }}</div>\n        <div class="pull-right">{{ review.date }}</div>\n        <div class="clear"></div>\n        <div class="text-sm">\n          <ion-icon name="md-star" dark *ngFor="let start of range(review.rating)"></ion-icon>\n        </div>\n      </div>\n      <div>\n        {{ review.content }}\n      </div>\n      <div class="author">{{ review.username }} from {{ review.from }}</div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/tab-reviews/tab-reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], TabReviewsPage);
    return TabReviewsPage;
}());

//# sourceMappingURL=tab-reviews.js.map

/***/ })

});
//# sourceMappingURL=10.js.map