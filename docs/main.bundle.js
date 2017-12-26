webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-section{\n    margin: 0;\n    padding: 0;\n    min-width: 100vh;\n}\n.header{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n    font-size: 1.2em;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 15px -150px;\n}\n.header .header-text{\n    margin-top: 20px;\n    margin-left: 20px;\n    width: 600px;\n}\nnav ul{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    list-style-type: none;\n    width: 60%;\n    margin: 20px auto;\n}\nli a:hover{\n    border: 1px solid blue;\n    background-color: orange;\n}\nli a{\n    text-decoration: none;\n}\n.banner{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 30px;\n}\n.content .row{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-top: 30px;\n    width: 100%;;\n    -ms-flex-pack: distribute;;\n        justify-content: space-around;\n}\n.row div::content{\n    width: 200px;\n    height: 1200px;\n    border: 1px solid blue;\n    margin-bottom: 20px;\n}\n\n.footer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 30px auto;\n    width: 70%;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\ndiv i{\n    font-size: 10em;\n}\n@media screen and (min-width: 620px){\n    .footer-section{\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        background-image: url(" + __webpack_require__("../../../../../src/assets/img/footer-background.jpg") + ");\n        position: relative;\n        padding-bottom: -70px;\n    }\n    hr{\n        border: none;\n        border-left: 1px solid hsla(200, 10%, 50%,100);\n        height: 200px;\n        width: 1px;    \n    }\n}\n@media all and (max-width: 600px){\n    .header{\n        font-size: 2em;\n    }\n    .burger{\n        display: inline-block;\n    }\n    .top-bun, .meat, .bottom-bun{\n        width: 35px;\n        height: 5px;\n        background-color: #333;\n        margin: 6px 0;\n        transition: 0.4s;\n    }\n    .change .top-bun{\n        -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n        transform: rotate(-45deg) translate(-9px, 6px);\n    }\n    .change .meat{\n        opacity: 0;\n    }\n    .change .bottom-bun{\n        -webkit-transform: rotate(45deg) translate(-8px, -8px);\n        transform: rotate(45deg) translate(-8px, -8px);\n    }\n    nav ul{\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        font-size: 3em;\n    }\n    li{\n        background-color: aqua;\n    }\n    .content .row{\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n    .footer{\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-section\">\n  <div class=\"burger\" onclick=\"burgerFunc(this)\">\n      <div class=\"top-bun\"></div>\n      <div class=\"meat\"></div>\n      <div class=\"bottom-bun\"></div>\n  </div>\n  <div class=\"header\"> <!-- Begin Header -->\n    <div class=\"logo\">\n      <a href=\"./\"><img id=\"logo\" src=\"./../assets/img/LOGOnw1.png\" alt=\"\"></a>\n    </div>\n    <div class=\"header-text\">\n      <p>\n        Turkistanian American Association is a cultural non-profit organization established in 1958. The organization strives to preserve and cherish Turkistanian customs and traditions.\n      </p>\n    </div>\n  </div> <!-- End Header -->\n  <nav>\n      <ul>\n          <li><a href=\"#\">About Us</a></li>\n          <li><a href=\"#\">Event Calender</a></li>\n          <li><a href=\"#\">Community News</a></li>\n          <li><a href=\"#\">Multimedia</a></li>\n          <li><a href=\"#\">Donate</a></li>\n          <li><a href=\"#\">Contact Us</a></li>\n      </ul>\n  </nav>\n  <div class=\"banner\">\n      <h2>Carousel goes here!</h2>\n  </div>\n  <div class=\"content\">\n    <!-- <h2>content: contains three grid structures.</h2> -->\n    <div class=\"row\">\n      <div class=\"sec1\">\n          <ol>Helping Section</ol>\n      </div>\n      <div class=\"sec2\">\n          <ol>Events + Past Events</ol>\n      </div>\n      <div class=\"sec3\">\n          <ol>Email Sign Up</ol>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-section\">\n\n    <footer class=\"footer\">\n      <div>\n          <span><h2>Video Gallery</h2></span>\n          <a href=\"\"><img src=\"./../assets/img/video_gallery.png\" alt=\"\"></a>\n      </div>\n      <div>\n          <span><h2>Photo Gallery</h2></span>\n          <a href=\"\"><img src=\"./../assets/img/photo_gallery.png\" alt=\"\"></a>\n          \n      </div>\n      <hr>\n      <div>\n        <span><h2>Social Network </h2></span>\n        <a href=\"\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a>\n        <a href=\"\"><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a>\n        <a href=\"\"><i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i></a> \n      </div>\n      <hr>\n      <div>\n        <span><h2>Contact Us</h2></span>\n        <p>Turkistanian American Association</p>\n        <p>4 Princeton Ave., Dover, NJ 07801, USA</p>\n        <p>Tel - (973) 309-1364</p>\n      </div>\n    </footer>\n  </div>\n  <div class=\"copyright\">\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/assets/img/footer-background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "footer-background.44dae1bd75fb1cb4f840.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map