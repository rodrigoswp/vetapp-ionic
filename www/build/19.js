webpackJsonp([19],{

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVetPageModule", function() { return MenuVetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_vet__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuVetPageModule = (function () {
    function MenuVetPageModule() {
    }
    MenuVetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_vet__["a" /* MenuVetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_vet__["a" /* MenuVetPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__menu_vet__["a" /* MenuVetPage */]
            ]
        })
    ], MenuVetPageModule);
    return MenuVetPageModule;
}());

//# sourceMappingURL=menu-vet.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuVetPage; });
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


var MenuVetPage = (function () {
    function MenuVetPage(nav) {
        // set sample data
        this.nav = nav;
    }
    MenuVetPage.prototype.home = function () {
        this.nav.setRoot('page-home');
    };
    MenuVetPage.prototype.edit_vet_pessoal = function () {
        this.nav.setRoot('page-edit-profile');
    };
    MenuVetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu-vet',template:/*ion-inline-start:"/home/rodrigo/vetapp/src/pages/menu-vet/menu-vet.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title class="icon-title">\n      <div ion-text class="text-white"></div>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="search-cars common-bg">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12>\n        <!-- choose pickup and drop-off-->\n        <h6 ion-text no-margin color="primary" class="marginB-16px">\n\n              <ion-icon name="arrow-round-back" (click)="home()"> PERFIL</ion-icon>\n\n        </h6>\n\n\n        <p>\n          <button ion-button icon-end block no-margin color="primary" class="round" tappable (click)="edit_vet_pessoal()">\n          Dados Pessoais  <ion-icon name="create"></ion-icon>\n          </button>\n        </p>\n        <p>\n        <button ion-button icon-end block no-margin color="primary" class="round" tappable (click)="doSearch()">\n         Endereço  <ion-icon name="create"></ion-icon>\n        </button>\n        </p>\n        <p>\n        <button ion-button icon-end block no-margin color="primary" class="round" tappable (click)="doSearch()">\n        Info Profissionais  <ion-icon name="create"></ion-icon>\n        </button>\n      </p>\n      <p>\n        <button ion-button icon-end block no-margin color="primary" class="round" tappable (click)="doSearch()">\n          Documentação <ion-icon name="create"></ion-icon>\n        </button>\n      </p>\n      <p>\n        <button ion-button icon-end block no-margin color="primary" class="round"  tappable (click)="doSearch()">\n          Dados Bancários  <ion-icon name="create"></ion-icon>\n        </button>\n      </p>\n      <p>\n        <button ion-button icon-end block no-margin color="primary" class="round" tappable  (click)="doSearch()">\n        Tipos de Atendimento  <ion-icon name="create"></ion-icon>\n        </button>\n      </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/vetapp/src/pages/menu-vet/menu-vet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], MenuVetPage);
    return MenuVetPage;
}());

//# sourceMappingURL=menu-vet.js.map

/***/ })

});
//# sourceMappingURL=19.js.map