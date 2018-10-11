webpackJsonp([12],{

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelUserPageModule", function() { return SelUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sel_user__ = __webpack_require__(903);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelUserPageModule = (function () {
    function SelUserPageModule() {
    }
    SelUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sel_user__["a" /* SelUserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sel_user__["a" /* SelUserPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sel_user__["a" /* SelUserPage */]
            ]
        })
    ], SelUserPageModule);
    return SelUserPageModule;
}());

//# sourceMappingURL=sel-user.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelUserPage; });
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


var SelUserPage = (function () {
    function SelUserPage(nav) {
        this.nav = nav;
    }
    // register and go to home page
    SelUserPage.prototype.register = function () {
        this.nav.setRoot('page-register');
    };
    // register and go to home page
    SelUserPage.prototype.login = function () {
        this.nav.setRoot('page-login');
    };
    SelUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sel-user',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/sel-user/sel-user.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center>\n      <div class="logo"></div>\n    <!--  <h2 ion-text class="text-white" no-margin>\n        ion<strong>Booking</strong>\n      </h2> -->\n\n      <h5 ion-text class="text-white" no-margin>\n          Selecione uma opção abaixo para criar seu primeiro acesso.\n        </h5>\n    </div>\n\n    <!-- Register form -->\n    <form  class="list-form">\n\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="secondary" tappable (click)="register()" >\n        Sou um VET\n      </button>\n\n      <button ion-button block color="secondary" tappable (click)="register()" >\n      Tenho um PET\n      </button>\n\n\n\n\n    </div>\n\n    <!-- Other links -->\n    <div text-left margin-top>\n      <span ion-text color="light" tappable (click)="login()">Dúvidas?</span>\n    </div>\n\n    <div text-right margin-top>\n      <span ion-text color="light" tappable (click)="login()">Contato</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/sel-user/sel-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SelUserPage);
    return SelUserPage;
}());

//# sourceMappingURL=sel-user.js.map

/***/ })

});
//# sourceMappingURL=12.js.map