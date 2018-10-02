webpackJsonp([14],{

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(_fb, nav, menu) {
        this._fb = _fb;
        this.nav = nav;
        this.menu = menu;
        this.menu.swipeEnable(false);
        this.menu.enable(false);
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.onRegisterForm = this._fb.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
                ])]
        });
    };
    // register and go to home page
    RegisterPage.prototype.register = function () {
        this.nav.setRoot('page-home');
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot('page-login');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/register/register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center>\n      <div class="logo"></div>\n    <!--  <h2 ion-text class="text-white" no-margin>\n        ion<strong>Booking</strong>\n      </h2> -->\n    </div>\n\n    <!-- Register form -->\n    <form [formGroup]="onRegisterForm" class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-white"></ion-icon>\n          Nome Completo\n        </ion-label>\n        <ion-input type="text" formControlName="fullName"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'fullName\').touched && onRegisterForm.get(\'fullName\').hasError(\'required\')">This field is required</p>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-white"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" class="text-1x has-error" *ngIf="onRegisterForm.get(\'email\').touched && onRegisterForm.get(\'email\').hasError(\'required\')">This field is required</p>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-white"></ion-icon>\n          Senha\n        </ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n\n      <p ion-text color="danger" class="secondary" *ngIf="onRegisterForm.get(\'password\').touched && onRegisterForm.get(\'password\').hasError(\'required\')">This field is required</p>\n\n      <div radio-group margin-top margin-bottom>\n        <ion-item>\n          <ion-label>Tipo usuario:</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="medkit" item-start class="text-white"></ion-icon>\n            <ion-label>Sou um VET</ion-label>           \n            <ion-radio value="agent"></ion-radio>\n          </ion-item>\n        <ion-item>\n          <ion-icon name="paw" item-start class="text-white"></ion-icon>\n          <ion-label>Tenho um PET</ion-label>           \n          <ion-radio value="agent"></ion-radio>\n        </ion-item>\n      </div>\n      \n      \n    </form>\n\n    <div margin-top>\n      <button ion-button block color="secondary" tappable (click)="register()" [disabled]="!onRegisterForm.valid">\n        CADASTRAR\n      </button>\n\n      <p text-center ion-text color="light">Ou faça login via as opções abaixo:</p>\n\n      <ion-grid class="btn-group">\n        <ion-row>\n          <button ion-button icon-only block class="btn-facebook col col-4">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-twitter col col-4">\n            <ion-icon name="logo-twitter"></ion-icon>\n          </button>\n          <button ion-button icon-only block class="btn-gplus col col-4">\n            <ion-icon name="logo-googleplus"></ion-icon>\n          </button>\n        </ion-row>\n      </ion-grid>  \n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" tappable (click)="login()">Eu já tenho conta</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=14.js.map