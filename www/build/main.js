webpackJsonp([26],{

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		856,
		25
	],
	"../pages/booking-list/booking-list.module": [
		857,
		5
	],
	"../pages/car-detail/car-detail.module": [
		858,
		24
	],
	"../pages/cars/cars.module": [
		859,
		23
	],
	"../pages/checkout-car/checkout-car.module": [
		860,
		22
	],
	"../pages/checkout-hotel/checkout-hotel.module": [
		861,
		21
	],
	"../pages/checkout-trip/checkout-trip.module": [
		862,
		20
	],
	"../pages/edit-profile/edit-profile.module": [
		863,
		0
	],
	"../pages/favorite-list/favorite-list.module": [
		864,
		4
	],
	"../pages/home/home.module": [
		865,
		3
	],
	"../pages/hotel-detail/hotel-detail.module": [
		866,
		19
	],
	"../pages/hotel/hotel.module": [
		867,
		18
	],
	"../pages/local-weather/local-weather.module": [
		868,
		17
	],
	"../pages/login/login.module": [
		869,
		16
	],
	"../pages/message-detail/message-detail.module": [
		870,
		15
	],
	"../pages/message-list/message-list.module": [
		871,
		14
	],
	"../pages/notifications/notifications.module": [
		872,
		13
	],
	"../pages/register/register.module": [
		873,
		12
	],
	"../pages/reviews/reviews.module": [
		874,
		11
	],
	"../pages/search-cars/search-cars.module": [
		875,
		2
	],
	"../pages/search-location/search-location.module": [
		876,
		10
	],
	"../pages/search-trips/search-trips.module": [
		877,
		1
	],
	"../pages/support/support.module": [
		878,
		9
	],
	"../pages/tab-reviews/tab-reviews.module": [
		879,
		8
	],
	"../pages/trip-detail/trip-detail.module": [
		880,
		7
	],
	"../pages/trips/trips.module": [
		881,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_hotels__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelService = (function () {
    function HotelService() {
        this.favoriteCounter = 0;
        this.favorites = [];
        this.bookingCounter = 0;
        this.bookings = [];
        this.hotels = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_hotels__["a" /* HOTELS */];
    }
    HotelService.prototype.getAll = function () {
        return this.hotels;
    };
    HotelService.prototype.getItem = function (id) {
        for (var i = 0; i < this.hotels.length; i++) {
            if (this.hotels[i].id === parseInt(id)) {
                return this.hotels[i];
            }
        }
        return null;
    };
    HotelService.prototype.remove = function (item) {
        this.hotels.splice(this.hotels.indexOf(item), 1);
    };
    /////
    //For Search and Favorites
    ////
    HotelService.prototype.findAll = function () {
        return Promise.resolve(this.hotels);
    };
    HotelService.prototype.findById = function (id) {
        return Promise.resolve(this.hotels[id - 1]);
    };
    HotelService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.hotels.filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    HotelService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    HotelService.prototype.getBookings = function () {
        return Promise.resolve(this.bookings);
    };
    HotelService.prototype.favorite = function (hotel) {
        this.favoriteCounter = this.favoriteCounter + 1;
        var exist = false;
        if (this.favorites && this.favorites.length > 0) {
            this.favorites.forEach(function (val, i) {
                if (val.hotel.id === hotel.id) {
                    exist = true;
                }
            });
        }
        if (!exist) {
            this.favorites.push({ id: this.favoriteCounter, hotel: hotel });
        }
        return Promise.resolve();
    };
    HotelService.prototype.booking = function (hotel) {
        this.bookingCounter = this.bookingCounter + 1;
        var existb = false;
        if (this.bookings && this.bookings.length > 0) {
            this.bookings.forEach(function (val, i) {
                if (val.hotel.id === hotel.id) {
                    existb = true;
                }
            });
        }
        if (!existb) {
            this.bookings.push({ id: this.bookingCounter, hotel: hotel });
        }
        return Promise.resolve();
    };
    HotelService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    HotelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HotelService);
    return HotelService;
}());

//# sourceMappingURL=hotel-service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_cars__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService() {
        this.cars = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_cars__["a" /* CARS */];
    }
    CarService.prototype.getAll = function () {
        return this.cars;
    };
    CarService.prototype.getItem = function (id) {
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === parseInt(id)) {
                return this.cars[i];
            }
        }
        return null;
    };
    CarService.prototype.remove = function (item) {
        this.cars.splice(this.cars.indexOf(item), 1);
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CarService);
    return CarService;
}());

//# sourceMappingURL=car-service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_trips__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    TripService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TripService);
    return TripService;
}());

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
        this.messageCounter = 0;
        this.messages = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__["a" /* default */];
        // console.log('mock messages: ', messages);
        // console.log(this.messages)
    }
    MessageService.prototype.findById = function (id) {
        // console.log(id)
        return Promise.resolve(this.messages[id - 1]);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.message = function (message) {
        this.messageCounter = this.messageCounter + 1;
        this.messages.push({ id: this.messageCounter, message: message });
        return Promise.resolve();
    };
    MessageService.prototype.getItem = function (id) {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].id === parseInt(id)) {
                return this.messages[i];
            }
        }
        return null;
    };
    MessageService.prototype.delMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service-mock.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { api } from './config';


var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Private
    WeatherProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    WeatherProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WeatherProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherProvider);
    return WeatherProvider;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(515);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_place_service__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_activity_service__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_car_service__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_trip_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_weather__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_message_service_mock__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ionBookingApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ionBookingApp */], {
                    preloadModules: true,
                    iconMode: 'md',
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'page-account', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-list/booking-list.module#BookingListPageModule', name: 'page-booking-list', segment: 'booking-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-detail/car-detail.module#CarDetailPageModule', name: 'page-car-detail', segment: 'car-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cars/cars.module#CarsPageModule', name: 'page-cars', segment: 'cars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-car/checkout-car.module#CheckoutCarPageModule', name: 'page-checkout-car', segment: 'checkout-car/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-hotel/checkout-hotel.module#CheckoutHotelPageModule', name: 'page-checkout-hotel', segment: 'checkout-hotel/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-trip/checkout-trip.module#CheckoutTripPageModule', name: 'page-checkout-trip', segment: 'checkout-trip/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'page-edit-profile', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule', name: 'page-favorite-list', segment: 'favorite-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'page-home', segment: 'home', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/hotel-detail/hotel-detail.module#HotelDetailPageModule', name: 'page-hotel-detail', segment: 'hotel-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel.module#HotelPageModule', name: 'page-hotel', segment: 'hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/local-weather/local-weather.module#LocalWeatherModule', name: 'page-local-weather', segment: 'local-weather', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'page-login', segment: 'login', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'page-message-detail', segment: 'message/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'page-message-list', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'page-register', segment: 'register', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'page-reviews', segment: 'reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-cars/search-cars.module#SearchCarsPageModule', name: 'page-search-cars', segment: 'search-cars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-location/search-location.module#SearchLocationPageModule', name: 'page-search-location', segment: 'search-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-trips/search-trips.module#SearchTripsPageModule', name: 'page-search-trips', segment: 'search-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-reviews/tab-reviews.module#TabReviewsPageModule', name: 'tabs-reviews', segment: 'tab-reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trip-detail/trip-detail.module#TripDetailPageModule', name: 'page-trip-detail', segment: 'trip-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trips/trips.module#TripsPageModule', name: 'page-trips', segment: 'trips', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionBookingDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_5_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* ionBookingApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_hotel_service__["a" /* HotelService */],
                __WEBPACK_IMPORTED_MODULE_7__providers_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_8__providers_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_9__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_weather__["a" /* WeatherProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOTELS; });
var HOTELS = [
    {
        id: 1,
        name: "Copacabana Hotel",
        rating: 5,
        price: 150,
        sale_price: 120,
        location: {
            lat: -22.906847,
            lon: -43.172896,
        },
        address: "Av Pres. Antônio Carlos, 223",
        description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
        location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
        thumb: "assets/img/hotel/thumb/hotel_1.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_3.jpg",
            "assets/img/hotel/thumb/hotel_4.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 3,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 2,
        name: "La Belle Place",
        rating: 4.7,
        price: 120,
        sale_price: 80,
        location: {
            lat: -22.969778,
            lon: -43.186859,
        },
        address: "Av Copacabana, 44",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach.",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_7.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_3.jpg",
            "assets/img/hotel/thumb/hotel_4.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 12,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 3,
        name: "Marshal Hotel",
        rating: 4.5,
        price: 100,
        sale_price: 70,
        location: {
            lat: -22.984337,
            lon: -43.223142,
        },
        address: "Av Ataulfo de Paiva, 98",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_3.jpg",
            "assets/img/hotel/thumb/hotel_4.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 5,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 4,
        name: "Pousada Marés do Amanhã",
        rating: 3.3,
        price: 40,
        sale_price: 30,
        location: {
            lat: -22.933129,
            lon: -43.177427,
        },
        address: "Praia do Flamengo",
        description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_8.jpg",
            "assets/img/hotel/thumb/hotel_7.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 5,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 5,
        name: "Ipanema Garden Hotel",
        rating: 3.5,
        price: 50,
        sale_price: 40,
        location: {
            lat: -22.984667,
            lon: -43.198593,
        },
        address: "Av Vieira Solto, 13",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_9.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_9.jpg",
            "assets/img/hotel/thumb/hotel_8.jpg",
            "assets/img/hotel/thumb/hotel_7.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 4,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 6,
        name: "Tijuquinha Plaza Hotel",
        rating: 4.1,
        price: 65,
        sale_price: 45,
        location: {
            lat: -23.000371,
            lon: -43.365895,
        },
        address: "Av Ayrton Senna, 877",
        description: "Family-friendly place in Rio de Janeiro, close to Botafogo Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Botafogo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_10.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_10.jpg",
            "assets/img/hotel/thumb/hotel_4.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 12,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 7,
        name: "Pousada Maresias",
        rating: 4.0,
        price: 100,
        sale_price: 70,
        location: {
            lat: -23.791402,
            lon: -45.567807,
        },
        address: "Alameda Água Branca, 123",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_11.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_11.jpg",
            "assets/img/hotel/thumb/hotel_8.jpg",
            "assets/img/hotel/thumb/hotel_10.jpg",
            "assets/img/hotel/thumb/hotel_9.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 6,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    },
    {
        id: 8,
        name: "Solar Beach Hotel",
        rating: 4.1,
        price: 90,
        sale_price: 80,
        location: {
            lat: -9.010380,
            lon: -35.220805,
        },
        address: "Rua Jangadeiros",
        description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
        location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
        features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
        room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
        thumb: "assets/img/hotel/thumb/hotel_8.jpg",
        images: [
            "assets/img/hotel/thumb/hotel_8.jpg",
            "assets/img/hotel/thumb/hotel_11.jpg",
            "assets/img/hotel/thumb/hotel_5.jpg",
            "assets/img/hotel/thumb/hotel_6.jpg"
        ],
        free_wifi: 1,
        services: [
            {
                id: 1,
                icon: "checkmark-circle-outline",
                name: "Pool"
            },
            {
                id: 2,
                icon: "wifi",
                name: "Internet"
            },
            {
                id: 3,
                icon: "cafe",
                name: "Breakfast"
            },
            {
                id: 4,
                icon: "restaurant",
                name: "Restaurant"
            },
            {
                id: 5,
                icon: "easel",
                name: "Conference"
            },
            {
                id: 6,
                icon: "sunny",
                name: "Beach"
            }
        ],
        numb_available_rooms: 12,
        reviews: [
            {
                id: 1,
                username: "Oliver Bishop",
                from: "Chesterfield, UK",
                title: "Nice place, as long as you don't want to leave",
                content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
                rating: 4
            },
            {
                id: 2,
                username: " Alejandro Suarez",
                from: "Bogotá, CO",
                title: "Close to old quarter",
                content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
                rating: 4
            },
            {
                id: 3,
                username: "Matt Doley",
                from: "Cincinnati, US",
                title: "Short stay",
                content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
                rating: 3
            },
            {
                id: 4,
                username: "Jorge Silva",
                from: "São Paulo, BR",
                title: "Disappointing and overpriced",
                content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
                rating: 2
            }
        ],
        rooms: [
            {
                id: 1,
                active: 1,
                name: "Deluxe Room",
                beds: "1 king bed or 1 twin bed",
                numb_available_rooms: 1,
                refundable: 0,
                room_info: "Free Parking, Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_4.jpg",
                price: 120
            },
            {
                id: 2,
                active: 0,
                name: "Grand Deluxe",
                beds: "1 king bed or 1 queen bed",
                numb_available_rooms: 2,
                refundable: 0,
                room_info: "Free Internet and Free Breakfast.",
                thumb: "assets/img/hotel/thumb/hotel_2.jpg",
                price: 180
            },
        ]
    }
];
//# sourceMappingURL=mock-hotels.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARS; });
var CARS = [
    {
        id: 1,
        name: "Localize Autos",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_1.jpg",
        price: 100,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_1.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_4.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 2,
        name: "Beach Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_2.jpg",
        price: 250,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_2.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_3.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 3,
        name: "Speedy Cars",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_3.jpg",
        price: 200,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_3.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 1,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_1.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    },
    {
        id: 4,
        name: "J&F Rent a Car",
        slogan: "The Best Cars of Rio de Janeiro",
        address: "Copacabana Avenue, 3250",
        passengers_from: 2,
        passengers_to: 5,
        luggage: 2,
        doors_from: 2,
        doors_to: 4,
        thumb: "assets/img/car/thumb/car_4.jpg",
        price: 350,
        cars: [
            {
                id: 1,
                name: "Ford Focus B2017",
                thumb: "assets/img/car/thumb/car_4.jpg",
                price: 100,
                doors: 2,
                passengers: 4,
                automatic_transmission: 0,
                free_miles: 150,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.906847,
                    lon: -43.172896
                }
            },
            {
                id: 2,
                name: "Volkswagen Jetta Tbi",
                thumb: "assets/img/car/thumb/car_2.jpg",
                price: 250,
                doors: 4,
                passengers: 5,
                automatic_transmission: 1,
                free_miles: 250,
                address: "Copacabana Avenue, 3250 - Rio de Janeiro",
                location: {
                    lat: -22.969778,
                    lon: -43.186859
                }
            }
        ]
    }
];
//# sourceMappingURL=mock-cars.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_1.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_2.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [
            "assets/img/trip/thumb/trip_3.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [
            "assets/img/trip/thumb/trip_4.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 228,
	"./af.js": 228,
	"./ar": 229,
	"./ar-dz": 230,
	"./ar-dz.js": 230,
	"./ar-kw": 231,
	"./ar-kw.js": 231,
	"./ar-ly": 232,
	"./ar-ly.js": 232,
	"./ar-ma": 233,
	"./ar-ma.js": 233,
	"./ar-sa": 234,
	"./ar-sa.js": 234,
	"./ar-tn": 235,
	"./ar-tn.js": 235,
	"./ar.js": 229,
	"./az": 236,
	"./az.js": 236,
	"./be": 237,
	"./be.js": 237,
	"./bg": 238,
	"./bg.js": 238,
	"./bm": 239,
	"./bm.js": 239,
	"./bn": 240,
	"./bn.js": 240,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 242,
	"./br.js": 242,
	"./bs": 243,
	"./bs.js": 243,
	"./ca": 244,
	"./ca.js": 244,
	"./cs": 245,
	"./cs.js": 245,
	"./cv": 246,
	"./cv.js": 246,
	"./cy": 247,
	"./cy.js": 247,
	"./da": 248,
	"./da.js": 248,
	"./de": 249,
	"./de-at": 250,
	"./de-at.js": 250,
	"./de-ch": 251,
	"./de-ch.js": 251,
	"./de.js": 249,
	"./dv": 252,
	"./dv.js": 252,
	"./el": 253,
	"./el.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-il": 258,
	"./en-il.js": 258,
	"./en-nz": 259,
	"./en-nz.js": 259,
	"./eo": 260,
	"./eo.js": 260,
	"./es": 261,
	"./es-do": 262,
	"./es-do.js": 262,
	"./es-us": 263,
	"./es-us.js": 263,
	"./es.js": 261,
	"./et": 264,
	"./et.js": 264,
	"./eu": 265,
	"./eu.js": 265,
	"./fa": 266,
	"./fa.js": 266,
	"./fi": 267,
	"./fi.js": 267,
	"./fo": 268,
	"./fo.js": 268,
	"./fr": 269,
	"./fr-ca": 270,
	"./fr-ca.js": 270,
	"./fr-ch": 271,
	"./fr-ch.js": 271,
	"./fr.js": 269,
	"./fy": 272,
	"./fy.js": 272,
	"./gd": 273,
	"./gd.js": 273,
	"./gl": 274,
	"./gl.js": 274,
	"./gom-latn": 275,
	"./gom-latn.js": 275,
	"./gu": 276,
	"./gu.js": 276,
	"./he": 277,
	"./he.js": 277,
	"./hi": 278,
	"./hi.js": 278,
	"./hr": 279,
	"./hr.js": 279,
	"./hu": 280,
	"./hu.js": 280,
	"./hy-am": 281,
	"./hy-am.js": 281,
	"./id": 282,
	"./id.js": 282,
	"./is": 283,
	"./is.js": 283,
	"./it": 284,
	"./it.js": 284,
	"./ja": 285,
	"./ja.js": 285,
	"./jv": 286,
	"./jv.js": 286,
	"./ka": 287,
	"./ka.js": 287,
	"./kk": 288,
	"./kk.js": 288,
	"./km": 289,
	"./km.js": 289,
	"./kn": 290,
	"./kn.js": 290,
	"./ko": 291,
	"./ko.js": 291,
	"./ky": 292,
	"./ky.js": 292,
	"./lb": 293,
	"./lb.js": 293,
	"./lo": 294,
	"./lo.js": 294,
	"./lt": 295,
	"./lt.js": 295,
	"./lv": 296,
	"./lv.js": 296,
	"./me": 297,
	"./me.js": 297,
	"./mi": 298,
	"./mi.js": 298,
	"./mk": 299,
	"./mk.js": 299,
	"./ml": 300,
	"./ml.js": 300,
	"./mn": 301,
	"./mn.js": 301,
	"./mr": 302,
	"./mr.js": 302,
	"./ms": 303,
	"./ms-my": 304,
	"./ms-my.js": 304,
	"./ms.js": 303,
	"./mt": 305,
	"./mt.js": 305,
	"./my": 306,
	"./my.js": 306,
	"./nb": 307,
	"./nb.js": 307,
	"./ne": 308,
	"./ne.js": 308,
	"./nl": 309,
	"./nl-be": 310,
	"./nl-be.js": 310,
	"./nl.js": 309,
	"./nn": 311,
	"./nn.js": 311,
	"./pa-in": 312,
	"./pa-in.js": 312,
	"./pl": 313,
	"./pl.js": 313,
	"./pt": 314,
	"./pt-br": 315,
	"./pt-br.js": 315,
	"./pt.js": 314,
	"./ro": 316,
	"./ro.js": 316,
	"./ru": 317,
	"./ru.js": 317,
	"./sd": 318,
	"./sd.js": 318,
	"./se": 319,
	"./se.js": 319,
	"./si": 320,
	"./si.js": 320,
	"./sk": 321,
	"./sk.js": 321,
	"./sl": 322,
	"./sl.js": 322,
	"./sq": 323,
	"./sq.js": 323,
	"./sr": 324,
	"./sr-cyrl": 325,
	"./sr-cyrl.js": 325,
	"./sr.js": 324,
	"./ss": 326,
	"./ss.js": 326,
	"./sv": 327,
	"./sv.js": 327,
	"./sw": 328,
	"./sw.js": 328,
	"./ta": 329,
	"./ta.js": 329,
	"./te": 330,
	"./te.js": 330,
	"./tet": 331,
	"./tet.js": 331,
	"./tg": 332,
	"./tg.js": 332,
	"./th": 333,
	"./th.js": 333,
	"./tl-ph": 334,
	"./tl-ph.js": 334,
	"./tlh": 335,
	"./tlh.js": 335,
	"./tr": 336,
	"./tr.js": 336,
	"./tzl": 337,
	"./tzl.js": 337,
	"./tzm": 338,
	"./tzm-latn": 339,
	"./tzm-latn.js": 339,
	"./tzm.js": 338,
	"./ug-cn": 340,
	"./ug-cn.js": 340,
	"./uk": 341,
	"./uk.js": 341,
	"./ur": 342,
	"./ur.js": 342,
	"./uz": 343,
	"./uz-latn": 344,
	"./uz-latn.js": 344,
	"./uz.js": 343,
	"./vi": 345,
	"./vi.js": 345,
	"./x-pseudo": 346,
	"./x-pseudo.js": 346,
	"./yo": 347,
	"./yo.js": 347,
	"./zh-cn": 348,
	"./zh-cn.js": 348,
	"./zh-hk": 349,
	"./zh-hk.js": 349,
	"./zh-tw": 350,
	"./zh-tw.js": 350
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
webpackContext.id = 539;

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var messages = [
    {
        id: 1,
        title: "New Offer 25% OFF",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 2,
        senderName: "Caroline Broker",
        email: "caroline@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    },
    {
        id: 2,
        title: "New Offer 15% OFF!",
        date: "2017-11-01T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 3,
        title: "New Cruises coming!",
        date: "2017-10-20T00:00:00.000-0300",
        senderId: 3,
        senderName: "Michael Jones",
        email: "michael@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: true
    },
    {
        id: 4,
        title: "Your New Trip",
        date: "2017-10-09T00:00:00.000-0300",
        senderId: 5,
        senderName: "Jessica Stevens",
        email: "jessica@tripionic.com",
        message: "Please body! contact me for help you with my new offer, keep in touch for this or other offers.",
        read: false
    }
];
/* harmony default export */ __webpack_exports__["a"] = (messages);
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_places__ = __webpack_require__(852);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceService = (function () {
    function PlaceService() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_places__["a" /* PLACES */];
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_activities__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mocks_mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ionBookingApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ionBookingApp = (function () {
    function ionBookingApp(platform) {
        this.platform = platform;
        this.rootPage = "page-login";
        this.showMenu = true;
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: 'page-home', icon: 'home' },
            { title: 'Atualizar Perfil', component: 'page-edit-profile', icon: 'person' },
            { title: 'Consultar Agenda', component: 'page-search-cars', icon: 'list-box' },
            { title: 'Atendimentos Realizados', component: 'page-search-trips', icon: 'checkmark-circle' },
            { title: 'Pagamentos', component: 'page-search-cars', icon: 'cash' },
            { title: 'Messages', component: 'page-message-list', icon: 'mail' },
            { title: 'Contato', component: 'page-support', icon: 'help-circle' }
        ];
    }
    ionBookingApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
        });
    };
    ionBookingApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    ionBookingApp.prototype.logout = function () {
        this.nav.setRoot('page-login');
    };
    ionBookingApp.prototype.editProfile = function () {
        this.nav.setRoot('page-edit-profile');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], ionBookingApp.prototype, "nav", void 0);
    ionBookingApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/rodrigo/vetapp/src/app/app.html"*/'<ion-split-pane when="lg">\n\n  <ion-menu side="left" id="authenticated" [content]="content">\n    <ion-header>\n      <ion-toolbar class="user-profile">\n\n        <ion-fab top right class="hideLg">\n          <button ion-fab mini color="dark" menuClose>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-fab>\n\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-col padding-left padding-right padding-top col-auto>\n                <div class="user-avatar"></div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row justify-content-center>\n            <ion-col padding-left padding-right padding-bottom text-center col-auto>\n              <h2 ion-text color="light" class="no-margin bold">\n                Lucas Guedes\n              </h2>\n              <span ion-text color="secondary">guedes@gmail.com</span>\n          \n            </ion-col>\n          </ion-row>\n\n          <!--\n          <ion-row class="other-data" no-padding>\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Points</span>\n              <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n            </ion-col>\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Location</span>\n              <h5 ion-text no-margin class="text-1x text-white">São Paulo/BR</h5>\n            </ion-col>\n          </ion-row>\n          -->\n        </ion-grid>\n\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="primary">\n\n      <ion-list class="user-list">\n        <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n          <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n          <span ion-text color="primary">{{menuItem.title}}</span>\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object])
    ], ionBookingApp);
    return ionBookingApp;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.js.map