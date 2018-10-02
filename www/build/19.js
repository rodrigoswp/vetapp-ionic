webpackJsonp([19],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalWeatherModule", function() { return LocalWeatherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_weather__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocalWeatherModule = (function () {
    function LocalWeatherModule() {
    }
    LocalWeatherModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__local_weather__["a" /* LocalWeatherPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__local_weather__["a" /* LocalWeatherPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__local_weather__["a" /* LocalWeatherPage */]
            ]
        })
    ], LocalWeatherModule);
    return LocalWeatherModule;
}());

//# sourceMappingURL=local-weather.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalWeatherPage = (function () {
    function LocalWeatherPage(navCtrl, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
        this.locationList = [
            { city: 'Los Angeles', state: 'CA' },
            { city: 'Miami', state: 'FL' },
            { city: 'New York', state: 'NY' },
            { city: 'Seattle', state: 'WA' },
            { city: 'São Paulo', state: 'SP' }
        ];
    }
    LocalWeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    state: 'NY',
                    city: 'New York'
                };
            }
            _this.getWeather(_this.location);
        });
    };
    LocalWeatherPage.prototype.getWeather = function (location) {
        var _this = this;
        if (typeof location === 'string') {
            this.location = JSON.parse(location);
        }
        else {
            this.location = location;
        }
        this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe(function (weather) {
            _this.weather = weather.current_observation;
        });
    };
    LocalWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-local-weather',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/local-weather/local-weather.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Local Weather</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-card class="full-width" no-margin margin-bottom>\n    <ion-card-content no-padding>\n\n      <ion-item>\n        <ion-label class="text-1x bold">Select Local</ion-label>\n        <ion-select [(ngModel)]="location" (ionChange)="getWeather(location)">\n          <ion-option *ngFor="let location of locationList" [value]="location">{{ location.city }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid class="card" padding *ngIf="weather">\n    <ion-row>\n        <ion-col width-50 offset-25>\n            <h2 class="location text-dark">{{weather.display_location.full}}</h2>\n            <div class="icon"><img src="{{weather.icon_url}}" alt="weather"></div>\n            <h3 class="desc">{{weather.weather}}</h3>\n            <h1 class="temp">{{weather.temp_c}}&deg;</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col width-100>\n            <ion-list>\n\n                <ion-item>\n                <strong>Temp:</strong> {{weather.temperature_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Relative Humidity:</strong> {{weather.relative_humidity}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Dewpoint:</strong> {{weather.dewpoint_string}}\n                </ion-item>\n                 <ion-item>\n                    <strong>Visibility:</strong> {{weather.visibility_km}}\n                </ion-item>\n                <ion-item>\n                    <strong>Heat Index:</strong> {{weather.heat_index_string}}\n                </ion-item>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/local-weather/local-weather.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LocalWeatherPage);
    return LocalWeatherPage;
}());

//# sourceMappingURL=local-weather.js.map

/***/ })

});
//# sourceMappingURL=19.js.map