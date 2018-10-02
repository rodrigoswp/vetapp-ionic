webpackJsonp([7],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingListPageModule", function() { return BookingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_list__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookingListPageModule = (function () {
    function BookingListPageModule() {
    }
    BookingListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__booking_list__["a" /* BookingListPage */]
            ]
        })
    ], BookingListPageModule);
    return BookingListPageModule;
}());

//# sourceMappingURL=booking-list.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelDetailPage = (function () {
    function HotelDetailPage(nav, navParams, hotelService, platform, toastCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.hotelService = hotelService;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        //
        this.arr = Array;
        // set sample data
        this.param = this.navParams.get('id');
        // console.log(this.param);
        // this.hotel = hotelService.getItem(1);
        this.hotel = this.hotelService.getItem(this.param) ? this.hotelService.getItem(this.param) : this.hotelService.getAll()[0];
    }
    HotelDetailPage.prototype.ionViewDidLoad = function () {
    };
    HotelDetailPage.prototype.scrollTo = function (element) {
        var elem = document.getElementById(element);
        var box = elem.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var top = box.top + scrollTop - clientTop;
        var cDim = this.content.getContentDimensions();
        var scrollOffset = Math.round(top) + cDim.scrollTop - cDim.contentTop;
        this.content.scrollTo(0, scrollOffset, 500);
    };
    // view a room
    HotelDetailPage.prototype.viewRoom = function (room) {
        for (var i = 0; i < this.hotel.rooms.length; i++) {
            this.hotel.rooms[i].active = false;
        }
        room.active = true;
    };
    // go to reviews page
    HotelDetailPage.prototype.viewReviews = function () {
        this.nav.push('page-reviews');
    };
    // go to checkout page
    HotelDetailPage.prototype.checkout = function (hotel) {
        this.nav.push('page-checkout-hotel', {
            'id': hotel.id
        });
    };
    HotelDetailPage.prototype.favorite = function (hotel) {
        var _this = this;
        this.hotelService.favorite(hotel)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Hotel added to your favorites',
                cssClass: 'mytoast',
                duration: 2000
            });
            toast.present(toast);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], HotelDetailPage.prototype, "content", void 0);
    HotelDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hotel-detail',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/hotel-detail/hotel-detail.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar class="nav-transparent" color="dark">\n    <ion-title>{{ hotel.name }}</ion-title>\n  </ion-navbar>\n  <ion-fab top right class="toptop">\n    <button ion-fab mini round icon-only color="dark">\n      <ion-icon name="share-alt" class="text-white"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-fab class="btn-facebook text-white"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab class="btn-twitter text-white"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab class="btn-gplus text-white"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-header>\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of hotel.images">\n      <img src="{{ image }}" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--price info-->\n  <div class="price-info">\n    <ion-badge *ngIf="hotel.sale_price" class="square badge-left green-bg text-white">{{ (100 * (1 - hotel.price /\n      hotel.sale_price)).toFixed(0) }}%\n    </ion-badge>\n    <ion-badge class="square badge-right" color="danger">\n    {{ hotel.numb_available_rooms }} rooms left\n    </ion-badge>\n    <div class="pull-left">\n      <span class="price text-white" *ngIf="!hotel.sale_price" ion-text>{{ hotel.price | currency }}</span>\n      <span class="sale-price bold text-white" *ngIf="hotel.sale_price"\n            ion-text>{{ hotel.sale_price | currency }}</span><span ion-text class="text-white">/night</span>\n      <span class="origin-price" *ngIf="hotel.sale_price" ion-text color="light">{{ hotel.price | currency }}</span>\n    </div>\n    <div class="pull-right">\n\n      <button ion-button (click)="scrollTo(\'rooms\')" class="white-bg">Select a Room</button>\n\n      <ion-fab bottom center edge>\n        <button ion-fab mini color="secondary" (click)="favorite(hotel)">\n          <ion-icon name="heart" class="text-white"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n    <div class="clear"></div>\n  </div>\n\n  <!--rating info-->\n  <div class="border-bottom dark-bg" padding>\n    <div class="pull-left">\n      <span ion-text>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-secondary"></ion-icon>\n        <ion-icon name="star" class="text-white"></ion-icon>\n      </span> <!-- {{ hotel.rating }} -->\n      <span ion-text class="text-white">of <strong>5</strong></span>\n    </div>\n    <div class="pull-right">\n      <span ion-text class="text-white" tappable (click)="viewReviews()">VIEW ALL <span class="bold">{{ hotel.reviews.length }} REVIEWS</span></span>\n    </div>\n    <div class="clear"></div>\n  </div>\n\n  <!-- Show map here -->\n  <agm-map [latitude]="hotel.location.lat" [longitude]="hotel.location.lon">\n    <agm-marker [latitude]="hotel.location.lat" [longitude]="hotel.location.lon">\n    </agm-marker>\n  </agm-map>\n\n\n  <!--hotel description-->\n  <p class="border-bottom" padding no-margin ion-text color="primary">\n    {{ hotel.description }}\n  </p>\n\n  <!--services-->\n  <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <ion-col *ngFor="let service of hotel.services" text-center>\n        <ion-icon class="text-2x" name="{{ service.icon }}" color="primary"></ion-icon>\n        <span class="service-name" ion-text color="primary">{{ service.name }}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- all rooms -->\n  <div class="border-bottom" padding>\n    <h5 ion-text color="primary">Rooms</h5>\n    <div *ngIf="hotel.free_wifi">\n      <ion-icon name="checkmark" class="text-green"></ion-icon>\n      <span ion-text color="dark">All rooms include free wifi internet</span>\n    </div>\n  </div>\n\n  <!--rooms-->\n  <div class="rooms" id="rooms">\n    <ion-grid class="border-bottom detail-bg">\n    <ion-row>\n      <div class="border-bottom detail-bg" padding col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let room of hotel.rooms">\n        <div class="room-info card" [hidden]="!room.active">\n          <div class="room-image" [ngStyle]="{\'background-image\': \'url(\' + room.thumb + \')\'}"></div>\n          <div class="border-bottom" padding>\n            <div>\n              <div class="pull-left">\n                <h6 ion-text color="dark">{{ room.name }}</h6>\n              </div>\n              <div class="pull-right">\n                <span class="bold" ion-text color="primary">{{ room.price | currency }}</span>\n                <span ion-text color="primary">/night</span>\n              </div>\n              <div class="clear"></div>\n            </div>\n            <div class="room-features">\n              <div class="pull-left">\n                <div>\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n                  {{ room.beds }}\n                </div>\n                <div *ngIf="hotel.free_wifi">\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n                  <span>Includes free wifi internet</span>\n                </div>\n                <div *ngIf="room.refundable">\n                  <ion-icon name="checkmark" class="text-green"></ion-icon>\n                  Refundable\n                </div>\n                <div *ngIf="!room.refundable">\n                  <ion-icon name="ios-close-circle-outline" color="danger"></ion-icon>\n                  Non-refundable\n                </div>\n              </div>\n              <div class="pull-right" text-right>\n                <button ion-button tappable (click)="checkout(hotel)">Book</button>\n              </div>\n              <div class="clear"></div>\n            </div>\n          </div>\n          <div padding>\n            <span ion-text color="primary" class="bold">Room information</span>\n            <span class="pull-right" [hidden]="room.show_info" tappable (click)="room.show_info = true">\n              <ion-icon name="ios-arrow-down" color="primary"></ion-icon>\n            </span>\n            <p [hidden]="!room.show_info" ion-text color="primary">{{ room.room_info }}</p>\n            <span class="pull-right" [hidden]="!room.show_info" tappable (click)="room.show_info = false">\n              <ion-icon name="ios-arrow-up" color="primary"></ion-icon>\n            </span>\n            <div class="clear"></div>\n          </div>\n        </div>\n\n        <div [hidden]="room.active">\n          <div class="pull-left">\n            <h6 ion-text color="primary">{{ room.name }}</h6>\n          </div>\n          <div class="pull-right">\n            <span class="bold" ion-text color="secondary">{{ room.price | currency }}</span>\n            <span ion-text color="secondary">/night</span>\n          </div>\n          <div class="clear"></div>\n        </div>\n        <div [hidden]="room.active">\n          <div class="pull-left">\n            <div class="mb-half">{{ room.beds }}</div>\n            <ion-badge color="secondary">{{ room.numb_available_rooms }} rooms left</ion-badge>\n            <!-- <span ion-text color="dark">{{ room.numb_available_rooms }} rooms left</span> -->\n          </div>\n          <div class="pull-right" text-right>\n            <button ion-button color="secondary" tappable (click)="viewRoom(room)">\n              <span ion-text class="text-white">View Room</span>\n            </button>\n          </div>\n          <div class="clear"></div>\n        </div>\n      </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!--hotel info-->\n  <div class="border-bottom" padding>\n    <h6 ion-text color="primary">Hotel Features</h6>\n    <p>{{ hotel.features }}</p>\n\n    <h6 ion-text color="primary">Room Amenities</h6>\n    <p>{{ hotel.room_amenities }}</p>\n\n    <h6 ion-text color="primary">Property Amenities</h6>\n    <p>{{ hotel.room_amenities }}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/hotel-detail/hotel-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__["a" /* HotelService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], HotelDetailPage);
    return HotelDetailPage;
}());

//# sourceMappingURL=hotel-detail.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingListPage = (function () {
    function BookingListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.bookings = [];
        this.getBookings();
        // console.log(this.favorites);
    }
    BookingListPage.prototype.itemTapped = function (booking) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hotel_detail_hotel_detail__["a" /* HotelDetailPage */], booking);
    };
    BookingListPage.prototype.getBookings = function () {
        var _this = this;
        this.service.getBookings()
            .then(function (data) { _this.bookings = data; });
    };
    BookingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking-list',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/booking-list/booking-list.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Bookings</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="common-bg">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12 margin-bottom>\n        <ion-card *ngIf="!bookings.length" class="primary-bg" margin-top>\n          <ion-card-content>\n          	<p text-center class="text-white">You have no bookings yet.</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-list>\n            <ion-item-sliding *ngFor="let booking of bookings">\n                <button ion-item (click)="itemTapped(booking.hotel)">\n                    <ion-thumbnail item-left>\n                        <img src="{{booking.hotel.thumb}}"/>\n                    </ion-thumbnail>\n                    <h2>{{booking.hotel.name}}</h2>\n                    <p>{{booking.hotel.address}} ∙ {{booking.hotel.price  | currency }}</p>\n                    <ion-badge class="green-bg">Booked</ion-badge>\n                </button>\n            </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/booking-list/booking-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_hotel_service__["a" /* HotelService */]])
    ], BookingListPage);
    return BookingListPage;
}());

//# sourceMappingURL=booking-list.js.map

/***/ })

});
//# sourceMappingURL=7.js.map