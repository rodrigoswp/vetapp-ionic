webpackJsonp([3],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(892);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]
            ]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage.prototype.messages = function () {
        this.navCtrl.push('page-message-list');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="messages()">\n  	<ion-icon name="mail"></ion-icon>\n  	New Trip Offer 25% OFF\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="messages()">\n  	<ion-icon name="mail"></ion-icon>\n  	New Offer 15% OFF by month!\n  </button>\n  <button ion-item class="text-1x" tappable (click)="messages()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Copacabana Hotel Offer!</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="messages()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Big Deal of the Week!</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(nav, navParams, menuCtrl, modalCtrl, popoverCtrl, hotelService) {
        this.nav = nav;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.hotelService = hotelService;
        this.dDate = new Date();
        this.searchQuery = '';
        this.showItems = false;
        this.lat = -22.9068;
        this.lng = -43.1729;
        // search conditions
        this.checkin = {
            name: "Check-in",
            date: new Date().toLocaleString().split(',')[0]
        };
        this.checkout = {
            name: "Check-out",
            date: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleString().split(',')[0]
        };
        // set sample data
        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.menuCtrl.enable(true);
        this.hotels = hotelService.getAll();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // init map
        // this.initializeMap();
    };
    HomePage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'range',
            title: 'Range Date'
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            if (date !== null) {
                _this.checkin.date = new Date(new Date(date.from.time)).toLocaleString().split(',')[0];
                _this.checkout.date = new Date(new Date(date.to.time)).toLocaleString().split(',')[0];
            }
        });
    };
    // initializeMap() {
    //   let latLng = new google.maps.LatLng(this.hotels[0].location.lat, this.hotels[0].location.lon);
    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 11,
    //     scrollwheel: false,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     mapTypeControl: false,
    //     zoomControl: false,
    //     streetViewControl: false
    //   }
    //   this.map = new google.maps.Map(document.getElementById("home-map"), mapOptions);
    //   // add markers to map by hotel
    //   for (let i = 0; i < this.hotels.length; i++) {
    //     let hotel = this.hotels[i];
    //     new google.maps.Marker({
    //       map: this.map,
    //       animation: google.maps.Animation.DROP,
    //       position: new google.maps.LatLng(hotel.location.lat, hotel.location.lon)
    //     });
    //   }
    //   // refresh map
    //   setTimeout(() => {
    //     google.maps.event.trigger(this.map, 'resize');
    //   }, 300);
    // }
    HomePage.prototype.initializeItems = function () {
        this.items = [
            'La Belle Place - Rio de Janeiro',
            'Marshall Hotel - Marshall Islands',
            'Maksoud Plaza - São Paulo',
            'Hotel Copacabana - Rio de Janeiro',
            'Pousada Marés do amanhã - Maragogi'
        ];
    };
    HomePage.prototype.itemSelected = function (item) {
        this.hotellocation = item;
        this.showItems = false;
    };
    HomePage.prototype.childrenArr = function (chil) {
        var child = Number(chil);
        this.childs = Array(child).fill(0).map(function (v, i) { return i; });
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.showItems = true;
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.showItems = false;
        }
    };
    // view hotel detail
    HomePage.prototype.viewHotel = function (hotel) {
        // console.log(hotel.id)
        this.nav.push('page-hotel-detail', {
            'id': hotel.id
        });
    };
    // view all hotels
    HomePage.prototype.viewHotels = function () {
        this.nav.push('page-hotel');
    };
    // go to search car page
    HomePage.prototype.searchCar = function () {
        this.nav.push('page-search-cars');
    };
    // go to search trip page
    HomePage.prototype.searchTrip = function () {
        this.nav.push('page-search-trips');
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push('page-account');
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        // console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/home/home.html"*/'<!-- -->\n<ion-header class="animated fadeIn no-shadow">\n\n  <ion-navbar class="no-border" color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <div ion-text class="icon-title text-white"></div>\n      <strong>Vets</strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="animated fadeIn common-bg">\n  <!--list menu on the top-->\n  <div class="booking-card marginB-16px">\n    <ion-grid class="card" fixed>\n      <ion-row>\n        <ion-col class="no-padding">\n          <ion-searchbar [(ngModel)]="hotellocation" (ionInput)="getItems($event)" (ionCancel)="showItems = !showItems" autocomplete="on" autocorrect="on" spellcheck="true" animated="true" placeholder="Destination or address..."></ion-searchbar>\n          <ion-list class="searchbar-results animated fadeIn" *ngIf="showItems">\n            <button ion-item *ngFor="let item of items" tappable (click)="itemSelected(item)">\n              <ion-icon name="pin"></ion-icon>\n              {{ item }}\n            </button>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 class="bb no-paddingB">\n          <ion-label class="no-margin mb-half bold text-primary">{{ checkin.name }}</ion-label>\n        </ion-col>\n        <ion-col col-6 class="bb no-paddingB">\n           <ion-label class="no-margin mb-half bold text-primary">{{ checkout.name }}</ion-label>\n        </ion-col>\n        <ion-col col-6 class="br bb datetime-btn" tappable (click)="openCalendar()">\n          <ion-icon name="md-calendar" item-left></ion-icon>\n          <span ion-text color="primary">{{ checkin.date }}</span>\n        </ion-col>\n        <ion-col col-6 class="bb datetime-btn" tappable (click)="openCalendar()">\n          <ion-icon name="md-calendar" item-left></ion-icon>\n          <span ion-text color="primary">{{ checkout.date }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Rooms</ion-label>\n              <ion-select [(ngModel)]="rooms" cancelText="Cancel" okText="OK">\n                <ion-option value="1" selected="true">1</ion-option>\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Adults</ion-label>\n              <ion-select [(ngModel)]="adults" cancelText="Cancel" okText="OK">\n                <ion-option value="1" selected="true">1</ion-option>\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Children</ion-label>\n              <ion-select [(ngModel)]="children" cancelText="Cancel" okText="OK" (ngModelChange)="childrenArr($event)">\n                <ion-option value="0" selected="true">0</ion-option>\n                <ion-option value="1">1</ion-option>\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-6 class="no-paddingT no-paddingB">\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="children > 0">\n        <ion-col col-12 class="no-paddingT no-paddingB">\n          <p ion-text color="primary" class="bold" *ngIf="children == 1">Child\'s age</p>\n          <p ion-text color="primary" class="bold" *ngIf="children > 1">Children\'s ages</p>\n        </ion-col>\n        <ion-col col-6 col-md-4 class="no-paddingT no-paddingB" *ngFor="let child of childs; let i = index">\n          <div class="guests bb">\n            <ion-item>\n              <ion-label>Child {{ i + 1 }}</ion-label>\n              <ion-select cancelText="Cancel" okText="OK">\n                <ion-option value="0" selected="true">0</ion-option>\n                <ion-option value="1">1</ion-option>\n                <ion-option value="2">2</ion-option>\n                <ion-option value="3">3</ion-option>\n                <ion-option value="4">4</ion-option>\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n                <ion-option value="13">13</ion-option>\n                <ion-option value="14">14</ion-option>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="primary" class="round" tappable (click)="viewHotels()">\n            <ion-icon name="search"></ion-icon>\n            Search\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-md-8 col-lg-6 offset-md-2 offset-lg-3>\n\n        <ion-card class="home-card no-marginT marginB-32px" no-padding>\n\n          <ion-list>\n            <button ion-item color="secondary" tappable (click)="searchCar()">\n              <ion-icon name="list-box" item-start></ion-icon>\n                Consulta\n            </button>\n            <button ion-item color="secondary" tappable (click)="searchTrip()">\n              <ion-icon name="medkit" item-start></ion-icon>\n                Exames\n            </button>\n          </ion-list>\n\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <hr class="secondary-bg quarter-op" no-margin>\n\n  <ion-item-group class="home-widget">\n    <ion-item-divider color="primary">\n      <h2 ion-text class="bold text-white">\n        <ion-icon name="home"></ion-icon>\n        Hotels Near You\n        <ion-badge class="pull-right green-bg text-white" tappable (click)="viewHotels()">SEE MORE</ion-badge>\n      </h2>\n    </ion-item-divider>\n    <ion-item>\n      <agm-map [latitude]="lat" [longitude]="lng">\n        <agm-marker *ngFor="let hotel of hotels; let i = index" [latitude]="hotel.location.lat" [longitude]="hotel.location.lon">\n          <agm-info-window>\n            <h3>\n              <strong>{{hotel.name}}</strong>\n            </h3>\n            <p>{{ hotel.price | currency:\'USD\':\'code\' }} <br><br>\n              <a tappable (click)="viewHotel(hotel)">\n               <strong>Go to Hotel ></strong>\n              </a>\n            </p>\n          </agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group class="home-widget">\n    <ion-item-divider color="primary">\n      <h2 ion-text class="bold text-white">\n        <ion-icon name="pricetags"></ion-icon>\n        Promotions Today\n      </h2>\n    </ion-item-divider>\n    <ion-item>\n\n      <ion-grid class="list-hotels primary-bg" no-padding>\n        <ion-row no-padding>\n          <ion-col col-6 col-lg-3 *ngFor="let hotel of hotels; let i = index" col-6 col-md-3 tappable (click)="viewHotel(hotel)">\n            <div class="hotel-bg" [ngStyle]="{\'background-image\': \'url(\' + hotel.thumb + \')\'}" *ngIf="i < 4">\n              <div class="bg-filter">\n                <div class="discount" *ngIf="hotel.sale_price">{{ (100 * (1 - hotel.price / hotel.sale_price)).toFixed(0)\n                  }}%\n                </div>\n                <div class="bottom-info">\n\n                  <div>\n                    <div class="pull-left">\n                      <h5 ion-text class="text-white">{{ hotel.name }}</h5>\n                    </div>\n                    <div class="pull-right">\n                      <span class="origin-price hide-sm"\n                            *ngIf="hotel.sale_price">{{ hotel.price | currency:\'USD\':\'code\' }}</span>\n                    </div>\n                    <div class="clear"></div>\n                  </div>\n\n                  <div>\n                    <div class="pull-left">\n                      <ion-badge class="square" color="secondary">{{ hotel.rating }}</ion-badge>\n                      <span class="rating-label text-white" ion-text> of 5 - guest rating</span>\n                    </div>\n                    <div class="pull-right">\n                      <span class="origin-price hide-lg"\n                            *ngIf="hotel.sale_price">{{ hotel.price | currency }}</span>\n                      <span class="price text-white" *ngIf="!hotel.sale_price"\n                            ion-text>{{ hotel.price | currency }}</span>\n                      <span class="sale-price" *ngIf="hotel.sale_price"\n                            ion-text class="text-white">{{ hotel.sale_price | currency }}</span>\n                    </div>\n                    <div class="clear"></div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"], __WEBPACK_IMPORTED_MODULE_4__providers_hotel_service__["a" /* HotelService */]])
    ], HomePage);
    return HomePage;
}());

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.profiledata = true;
    }
    // process send button
    EditProfilePage.prototype.sendData = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Your Data was Edited!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <span ion-text>Edit Profile</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="profile common-bg">\n\n    <ion-card>\n      <ion-card-content class="profile-bg">\n          <img src="assets/img/avatar.jpeg">\n          <h2 class="fw500">João Firmino</h2>\n          <h3 ion-text color="light">Customer</h3>\n          <button ion-button icon-start margin-top color="secondary">\n            <ion-icon name="photos"></ion-icon>\n            Edit / Insert Avatar\n          </button>\n      </ion-card-content>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col col-12 margin-bottom padding>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Full Name:</ion-label>\n  	          <ion-input type="text" placeholder="Ex..: Joe Doe" value="João Firmino"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Email:</ion-label>\n  	          <ion-input type="email" placeholder="Ex.: joe@doe.com" value="firminoata@gmail.com"></ion-input>\n  	        </ion-item>\n\n  	        <ion-item>\n  	          <ion-label color="dark" stacked>Address:</ion-label>\n  	          <ion-input type="text" placeholder="Ex.: Abey Road 5"></ion-input>\n  	        </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="dark">City</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">New York</ion-option>\n  				      <ion-option value="n64">Los Angeles</ion-option>\n  				      <ion-option value="ps">London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">São Paulo</ion-option>\n  				      <ion-option value="snes">Tokyo</ion-option>\n  				      <ion-option value="snes">New Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  				  <ion-item>\n  				    <ion-label color="dark">State</ion-label>\n  				    <ion-select>\n  				      <ion-option value="nes">NY</ion-option>\n  				      <ion-option value="n64">CA</ion-option>\n  				      <ion-option value="ps">Greater London</ion-option>\n  				      <ion-option value="genesis">Paris</ion-option>\n  				      <ion-option value="saturn">SP</ion-option>\n  				      <ion-option value="snes">Kantō</ion-option>\n  				      <ion-option value="snes">Delhi</ion-option>\n  				    </ion-select>\n  				  </ion-item>\n\n  					<div radio-group margin-top margin-bottom>\n  					  <ion-list-header no-margin no-padding>\n  					    <span ion-text color="dark" class="fw500">Tipo Usuario</span>\n  					  </ion-list-header>\n\n  					  <ion-item>\n  					    <ion-label color="dark">Sou um VET</ion-label>\n  					    <ion-radio checked="true" value="customer"></ion-radio>\n  					  </ion-item>\n\n  					  <ion-item>\n  					    <ion-label color="dark">Tenho um PET</ion-label>\n  					    <ion-radio value="agent"></ion-radio>\n  					  </ion-item>\n  					</div>\n\n            <ion-item>\n            	<ion-label class="text-1x">Available to chat w/ Travel Agents?</ion-label>\n            	<ion-checkbox></ion-checkbox>\n          	</ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n			<button ion-button large full color="dark" (click)="sendData()">Edit</button>\n    </ion-card>\n\n    <div padding>\n      <p ion-text color="dark" no-margin>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum odio placeat incidunt nesciunt atque ratione quisquam, fugit omnis maxime adipisci excepturi dignissimos aliquam asperiores itaque unde sequi? Minus, quia, dolore?\n      </p>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/edit-profile/edit-profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map