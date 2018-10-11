webpackJsonp([28],{

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		553,
		27
	],
	"../pages/booking-list/booking-list.module": [
		554,
		7
	],
	"../pages/car-detail/car-detail.module": [
		555,
		26
	],
	"../pages/cars/cars.module": [
		556,
		25
	],
	"../pages/checkout-car/checkout-car.module": [
		557,
		24
	],
	"../pages/checkout-hotel/checkout-hotel.module": [
		558,
		23
	],
	"../pages/checkout-trip/checkout-trip.module": [
		559,
		22
	],
	"../pages/edit-profile/edit-profile.module": [
		560,
		3
	],
	"../pages/favorite-list/favorite-list.module": [
		561,
		6
	],
	"../pages/home/home.module": [
		562,
		0
	],
	"../pages/hotel-detail/hotel-detail.module": [
		563,
		2
	],
	"../pages/hotel/hotel.module": [
		564,
		1
	],
	"../pages/local-weather/local-weather.module": [
		565,
		21
	],
	"../pages/login/login.module": [
		566,
		20
	],
	"../pages/menu-vet/menu-vet.module": [
		567,
		19
	],
	"../pages/message-detail/message-detail.module": [
		568,
		18
	],
	"../pages/message-list/message-list.module": [
		569,
		17
	],
	"../pages/notifications/notifications.module": [
		570,
		16
	],
	"../pages/register/register.module": [
		571,
		15
	],
	"../pages/reviews/reviews.module": [
		572,
		14
	],
	"../pages/search-cars/search-cars.module": [
		573,
		5
	],
	"../pages/search-location/search-location.module": [
		575,
		13
	],
	"../pages/search-trips/search-trips.module": [
		576,
		4
	],
	"../pages/sel-user/sel-user.module": [
		574,
		12
	],
	"../pages/support/support.module": [
		577,
		11
	],
	"../pages/tab-reviews/tab-reviews.module": [
		578,
		10
	],
	"../pages/trip-detail/trip-detail.module": [
		579,
		9
	],
	"../pages/trips/trips.module": [
		580,
		8
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
webpackAsyncContext.id = 199;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_hotels__ = __webpack_require__(500);
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

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_cars__ = __webpack_require__(501);
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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_trips__ = __webpack_require__(502);
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__ = __webpack_require__(525);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(470);
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

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        this.API_URL = 'https://reqres.in/api/';
    }
    UsersProvider.prototype.createAccount = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                email: email,
                password: password
            };
            _this.http.post(_this.API_URL + 'register', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                email: email,
                password: password
            };
            _this.http.post(_this.API_URL + 'login', data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.getAll = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'users/?per_page=10&page=' + page;
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'users/' + id;
            _this.http.get(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.insert = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'users/';
            _this.http.post(url, user)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.update = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'users/' + user.id;
            var data = {
                "first_name": user.first_name,
                "last_name": user.last_name
            };
            _this.http.put(url, user)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider.prototype.remove = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.API_URL + 'users/' + id;
            _this.http.delete(url)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(480);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_hotel_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_place_service__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_activity_service__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_car_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_trip_service__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_weather__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_message_service_mock__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_users_users__ = __webpack_require__(474);
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
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* ionBookingApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* ionBookingApp */], {
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
                        { loadChildren: '../pages/menu-vet/menu-vet.module#MenuVetPageModule', name: 'page-menu-vet', segment: 'menu-vet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-detail/message-detail.module#MessageDetailPageModule', name: 'page-message-detail', segment: 'message/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'page-message-list', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'page-notifications', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'page-register', segment: 'register', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'page-reviews', segment: 'reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-cars/search-cars.module#SearchCarsPageModule', name: 'page-search-cars', segment: 'search-cars', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sel-user/sel-user.module#SelUserPageModule', name: 'page-sel-user', segment: 'sel-user', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/search-location/search-location.module#SearchLocationPageModule', name: 'page-search-location', segment: 'search-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-trips/search-trips.module#SearchTripsPageModule', name: 'page-search-trips', segment: 'search-trips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'page-support', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-reviews/tab-reviews.module#TabReviewsPageModule', name: 'tabs-reviews', segment: 'tab-reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trip-detail/trip-detail.module#TripDetailPageModule', name: 'page-trip-detail', segment: 'trip-detail/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trips/trips.module#TripsPageModule', name: 'page-trips', segment: 'trips', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__ionBookingDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* ionBookingApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_hotel_service__["a" /* HotelService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_trip_service__["a" /* TripService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_message_service_mock__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_weather__["a" /* WeatherProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_18__providers_users_users__["a" /* UsersProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 500:
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

/***/ 501:
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

/***/ 502:
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

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn.js": 212,
	"./bo": 213,
	"./bo.js": 213,
	"./br": 214,
	"./br.js": 214,
	"./bs": 215,
	"./bs.js": 215,
	"./ca": 216,
	"./ca.js": 216,
	"./cs": 217,
	"./cs.js": 217,
	"./cv": 218,
	"./cv.js": 218,
	"./cy": 219,
	"./cy.js": 219,
	"./da": 220,
	"./da.js": 220,
	"./de": 221,
	"./de-at": 222,
	"./de-at.js": 222,
	"./de-ch": 223,
	"./de-ch.js": 223,
	"./de.js": 221,
	"./dv": 224,
	"./dv.js": 224,
	"./el": 225,
	"./el.js": 225,
	"./en-au": 226,
	"./en-au.js": 226,
	"./en-ca": 227,
	"./en-ca.js": 227,
	"./en-gb": 228,
	"./en-gb.js": 228,
	"./en-ie": 229,
	"./en-ie.js": 229,
	"./en-il": 230,
	"./en-il.js": 230,
	"./en-nz": 231,
	"./en-nz.js": 231,
	"./eo": 232,
	"./eo.js": 232,
	"./es": 233,
	"./es-do": 234,
	"./es-do.js": 234,
	"./es-us": 235,
	"./es-us.js": 235,
	"./es.js": 233,
	"./et": 236,
	"./et.js": 236,
	"./eu": 237,
	"./eu.js": 237,
	"./fa": 238,
	"./fa.js": 238,
	"./fi": 239,
	"./fi.js": 239,
	"./fo": 240,
	"./fo.js": 240,
	"./fr": 241,
	"./fr-ca": 242,
	"./fr-ca.js": 242,
	"./fr-ch": 243,
	"./fr-ch.js": 243,
	"./fr.js": 241,
	"./fy": 244,
	"./fy.js": 244,
	"./gd": 245,
	"./gd.js": 245,
	"./gl": 246,
	"./gl.js": 246,
	"./gom-latn": 247,
	"./gom-latn.js": 247,
	"./gu": 248,
	"./gu.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it.js": 256,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ky": 264,
	"./ky.js": 264,
	"./lb": 265,
	"./lb.js": 265,
	"./lo": 266,
	"./lo.js": 266,
	"./lt": 267,
	"./lt.js": 267,
	"./lv": 268,
	"./lv.js": 268,
	"./me": 269,
	"./me.js": 269,
	"./mi": 270,
	"./mi.js": 270,
	"./mk": 271,
	"./mk.js": 271,
	"./ml": 272,
	"./ml.js": 272,
	"./mn": 273,
	"./mn.js": 273,
	"./mr": 274,
	"./mr.js": 274,
	"./ms": 275,
	"./ms-my": 276,
	"./ms-my.js": 276,
	"./ms.js": 275,
	"./mt": 277,
	"./mt.js": 277,
	"./my": 278,
	"./my.js": 278,
	"./nb": 279,
	"./nb.js": 279,
	"./ne": 280,
	"./ne.js": 280,
	"./nl": 281,
	"./nl-be": 282,
	"./nl-be.js": 282,
	"./nl.js": 281,
	"./nn": 283,
	"./nn.js": 283,
	"./pa-in": 284,
	"./pa-in.js": 284,
	"./pl": 285,
	"./pl.js": 285,
	"./pt": 286,
	"./pt-br": 287,
	"./pt-br.js": 287,
	"./pt.js": 286,
	"./ro": 288,
	"./ro.js": 288,
	"./ru": 289,
	"./ru.js": 289,
	"./sd": 290,
	"./sd.js": 290,
	"./se": 291,
	"./se.js": 291,
	"./si": 292,
	"./si.js": 292,
	"./sk": 293,
	"./sk.js": 293,
	"./sl": 294,
	"./sl.js": 294,
	"./sq": 295,
	"./sq.js": 295,
	"./sr": 296,
	"./sr-cyrl": 297,
	"./sr-cyrl.js": 297,
	"./sr.js": 296,
	"./ss": 298,
	"./ss.js": 298,
	"./sv": 299,
	"./sv.js": 299,
	"./sw": 300,
	"./sw.js": 300,
	"./ta": 301,
	"./ta.js": 301,
	"./te": 302,
	"./te.js": 302,
	"./tet": 303,
	"./tet.js": 303,
	"./tg": 304,
	"./tg.js": 304,
	"./th": 305,
	"./th.js": 305,
	"./tl-ph": 306,
	"./tl-ph.js": 306,
	"./tlh": 307,
	"./tlh.js": 307,
	"./tr": 308,
	"./tr.js": 308,
	"./tzl": 309,
	"./tzl.js": 309,
	"./tzm": 310,
	"./tzm-latn": 311,
	"./tzm-latn.js": 311,
	"./tzm.js": 310,
	"./ug-cn": 312,
	"./ug-cn.js": 312,
	"./uk": 313,
	"./uk.js": 313,
	"./ur": 314,
	"./ur.js": 314,
	"./uz": 315,
	"./uz-latn": 316,
	"./uz-latn.js": 316,
	"./uz.js": 315,
	"./vi": 317,
	"./vi.js": 317,
	"./x-pseudo": 318,
	"./x-pseudo.js": 318,
	"./yo": 319,
	"./yo.js": 319,
	"./zh-cn": 320,
	"./zh-cn.js": 320,
	"./zh-hk": 321,
	"./zh-hk.js": 321,
	"./zh-tw": 322,
	"./zh-tw.js": 322
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
webpackContext.id = 504;

/***/ }),

/***/ 525:
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

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_places__ = __webpack_require__(549);
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

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_activities__ = __webpack_require__(551);
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

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ionBookingApp; });
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


var ionBookingApp = (function () {
    function ionBookingApp(platform) {
        this.platform = platform;
        this.rootPage = "page-login";
        this.showMenu = true;
        this.tab1Root = 'page-menu-vet';
        this.tab2Root = 'page-menu-vet';
        this.tab3Root = 'page-menu-vet';
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Home', component: 'page-home', icon: 'home' },
            { title: 'Atualizar Perfil', component: 'page-menu-vet', icon: 'person' },
            { title: 'Consultar Agenda', component: 'page-search-cars', icon: 'list-box' },
            { title: 'Atendimentos Realizados', component: 'page-search-trips', icon: 'checkmark-circle' },
            { title: 'Pagamentos', component: 'page-search-cars', icon: 'cash' },
            { title: 'Mensagens', component: 'page-message-list', icon: 'mail' },
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], ionBookingApp.prototype, "nav", void 0);
    ionBookingApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/rodrigo/vetapp/src/app/app.html"*/'<ion-split-pane when="lg">\n\n  <ion-menu side="left" id="authenticated" [content]="content">\n    <ion-header>\n      <ion-toolbar class="user-profile">\n\n        <ion-fab top right class="hideLg">\n          <button ion-fab mini color="dark" menuClose>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-fab>\n\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-col padding-left padding-right padding-top col-auto>\n                <div class="user-avatar"></div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row justify-content-center>\n            <ion-col padding-left padding-right padding-bottom text-center col-auto>\n              <h2 ion-text color="light" class="no-margin bold">\n                Lucas Guedes\n              </h2>\n              <span ion-text color="secondary">guedes@gmail.com</span>\n\n            </ion-col>\n          </ion-row>\n\n          <!--\n          <ion-row class="other-data" no-padding>\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Points</span>\n              <h5 ion-text no-margin class="text-1x text-white">1124</h5>\n            </ion-col>\n            <ion-col text-center class="column">\n              <span ion-text color="light" class="bold">Location</span>\n              <h5 ion-text no-margin class="text-1x text-white">São Paulo/BR</h5>\n            </ion-col>\n          </ion-row>\n          -->\n        </ion-grid>\n\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="primary">\n      <ion-list class="user-list">\n        <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n          <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n          <span ion-text color="primary">{{menuItem.title}}</span>\n        </button>\n      </ion-list>\n    </ion-content>\n\n\n\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n  <ion-tabs>\n    <ion-tab [root]="tab1Root"></ion-tab>\n    <ion-tab [root]="tab2Root"></ion-tab>\n    <ion-tab [root]="tab3Root"></ion-tab>\n  </ion-tabs>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], ionBookingApp);
    return ionBookingApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[475]);
//# sourceMappingURL=main.js.map