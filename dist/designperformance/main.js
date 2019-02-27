(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");


// import { RouterModule, Routes, PreloadAllModules } from '@angular/router';




var appRoutes = [
    {
        path: 'resources',
        component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_4__["ResourcesComponent"]
    },
    //   {
    //     path: 'sequences',
    //     component: SequencesComponent
    //  },
    {
        path: 'components',
        component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: {
            bodyClass: 'layout-home',
        },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<clr-main-container>\n  <clr-header class=\"header-6\">\n      <div class=\"branding\">\n          <a routerLink=\"/home\" class=\"logo-and-title\">\n              <!-- Design for Interaction Guide -->\n              <span class=\"title\">Design for Performance</span>\n          </a>\n      </div>\n      <div class=\"divider\"></div>\n      <div class=\"header-nav\" [clr-nav-level]=\"1\">\n          <a id=\"home-link\" class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><span class=\"nav-text\">Home</span></a>\n          <a class=\"nav-link\" routerLink=\"/components\" routerLinkActive=\"active\"><span class=\"nav-text\">Components</span></a>\n          <!-- <a class=\"nav-link\" routerLink=\"/sequences\" routerLinkActive=\"active\"><span class=\"nav-text\">Sequences</span></a>-->\n          <a class=\"nav-link\" routerLink=\"/resources\" routerLinkActive=\"active\"><span class=\"nav-text\">Resources</span></a>\n      </div>\n      <div class=\"settings\">\n      </div>\n  </clr-header>\n\n<div class=\"content-container\">\n    <div class=\"content-area\">\n      </div>\n       <router-outlet></router-outlet>\n       <nav class=\"sidenav\" [clr-nav-level]=\"2\">\n          <section class=\"sidenav-content\">\n\n          <a class=\"nav-link\" routerLink=\"/components\" routerLinkActive=\"active\"\n              [routerLinkActiveOptions]=\"{exact:true}\">Component Status</a>\n\n           <section class=\"nav-group collapsible\">\n               <input id=\"tab1\" type=\"checkbox\">\n               <label for=\"tab1\">Components</label>\n               <ul class=\"nav-list\">\n                    <!-- <nav-links type=\"component\"></nav-links> -->\n               </ul>\n           </section>\n          </section>\n      </nav>\n\n  </div>\n\n</clr-main-container>\n<!--  -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _componentlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentlist.service */ "./src/app/componentlist.service.ts");

/* tslint:disable */



var AppComponent = /** @class */ (function () {
    function AppComponent(_electronService) {
        this._electronService = _electronService;
    }
    AppComponent.prototype.launchWindow = function () {
        this._electronService.shell.openExternal('https://coursetro.com');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            host: {
                '[class.content-container]': 'true',
                '[class.content-area]': 'true',
            },
            providers: [_componentlist_service__WEBPACK_IMPORTED_MODULE_3__["COMPONENTLISTSERVICE"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time/time.component */ "./src/app/time/time.component.ts");
/* harmony import */ var _sequences_sequences_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sequences/sequences.component */ "./src/app/sequences/sequences.component.ts");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/resources.component */ "./src/app/resources/resources.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _componentlist_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentlist.service */ "./src/app/componentlist.service.ts");
/* harmony import */ var _nav_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav-links.component */ "./src/app/nav-links.component.ts");

/* tslint:disable */















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _time_time_component__WEBPACK_IMPORTED_MODULE_8__["TimeComponent"],
                _sequences_sequences_component__WEBPACK_IMPORTED_MODULE_9__["SequencesComponent"],
                _resources_resources_component__WEBPACK_IMPORTED_MODULE_10__["ResourcesComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _nav_links_component__WEBPACK_IMPORTED_MODULE_15__["NavLinksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_12__["NgxElectronModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [_componentlist_service__WEBPACK_IMPORTED_MODULE_14__["COMPONENTLISTSERVICE"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componentlist.service.ts":
/*!******************************************!*\
  !*** ./src/app/componentlist.service.ts ***!
  \******************************************/
/*! exports provided: COMPONENTLISTSERVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTLISTSERVICE", function() { return COMPONENTLISTSERVICE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var COMPONENTLISTSERVICE = /** @class */ (function () {
    function COMPONENTLISTSERVICE(http) {
        this.http = http;
        this.component = 'componentslist.json';
    }
    COMPONENTLISTSERVICE.prototype.getComponent = function () {
        return this.http.get(this.component);
    };
    COMPONENTLISTSERVICE.prototype.getComponent_1 = function () {
        return this.http.get(this.component);
    };
    COMPONENTLISTSERVICE.prototype.getComponent_2 = function () {
        // now returns an Observable of Config
        return this.http.get(this.component);
    };
    COMPONENTLISTSERVICE.prototype.getComponent_3 = function () {
        return this.http.get(this.component)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    COMPONENTLISTSERVICE.prototype.getComponentResponse = function () {
        return this.http.get(this.component, { observe: 'response' });
    };
    COMPONENTLISTSERVICE.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    COMPONENTLISTSERVICE.prototype.makeIntentionalError = function () {
        return this.http.get('not/a/real/url')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    COMPONENTLISTSERVICE = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], COMPONENTLISTSERVICE);
    return COMPONENTLISTSERVICE;
}());



/***/ }),

/***/ "./src/app/components/components.component.css":
/*!*****************************************************!*\
  !*** ./src/app/components/components.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {color: red;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvciB7Y29sb3I6IHJlZDt9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dox-content\" hash-listener #scrollable>\n    <div class=\"dox-content-wrapper\">\n        <a id=\"top\"></a>\n    <h1>Component Performance Targets</h1>\n\n    <p>\n      Meaningful, quantifiable, and testable component targets can be categorized for application speed, scalability and stability according to the following service level indicators.\n    </p>\n    <p>A component is a simple, independent microservice operation (sometimes called distributed systems, or distributed services) of a user interface that communicates via an API.  Microservice architectures help solve common, complex issues like speed and scalability, while also supporting continuous improvement and continuous delivery. The composition of UI components should be aligned and tested with real users. </p>\n\n    <p class=\"component-legend\">\n        <span class=\"component-legend-item\">\n        </span>\n        <span class=\"component-legend-item\">\n        </span>\n        <span class=\"component-legend-item\">\n        </span>\n        <span class=\"component-legend-item\">\n        </span>\n    </p>\n\n    <table class=\"table table-component-list bump-down\" style=\"max-width: 880px\">\n        <thead>\n          <th>Item</th>\n          <th>Target</th>\n          <th>Releaseable</th>\n          <th class=\"hidden-xs-down\">Goal</th>\n          <th>Description</th>\n          <th class=\"hidden-xs-down\">Link</th>\n        </thead>\n        <tbody >\n          <tr *ngFor=\"let item of component\" class=\"left\">\n            <td>\n              <a *ngIf=\"item.url\">{{item.text}}</a>\n              <span *ngIf=\"!item.url\">{{item.text}}</span>\n\n            </td>\n            <td>\n              <span class=\"item.target\">{{item.target}}</span>\n            </td>\n            <td>\n              <span class=\"item.releasable\">{{item.releasable}}</span>\n            </td>\n            <td class=\"hidden-xs-down\">\n              <span class=\"item.goal\">{{item.goal}}</span>\n            </td>\n            <td>\n              <span class=\"item.description\">{{item.description}}</span>\n            </td>\n            <td><a *ngIf=\"item.url\">{{item.url}}</a>\n\n            </td>\n          </tr>\n        </tbody>\n    </table>\n    <h3>Performance Targets</h3>\n\n    <p>Performance targets are used to evaluate and observe latency tolerance, which is information of how much a user waits for a response before taking the next action like application abandonment or refresh.  These targets translate to service level indicators explained below.  </p>\n    <p>Quantitative results from these targets provide the best outcome for the user experience of the design. Some key tenants of performance targets are:\n    </p>\n\n    <ul class=\"list\">\n        <li>They are used to improve the product quality.</li>\n        <li>They provide easy and clear output of the activity and identify areas that need more attention.</li>\n        <li>They help in comparing the results of different tests to find out the impact of any UI changes.</li>\n        <li>They provide guidance on the root cause of problem.</li>\n        <li>They establish a baseline for user acceptance tests.</li>\n        <li>They shape the user interaction.</li>\n        <li>They can be observed and measured accurately by people.</li>\n        <li>They can be measured on actual users.</li>\n        <li>They provide insights for both regression testing and future enhancements.</li>\n    </ul>\n    <p>Traditional performance targets like load time or DOMContentLoaded time can be considered unreliable performance targets if the user thinks the app is loaded. The key tenants above help guide the goals and service level indicators of the metrics.</p>\n\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _componentslist_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../componentslist.json */ "./src/app/componentslist.json");
var _componentslist_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../componentslist.json */ "./src/app/componentslist.json", 1);
/* harmony import */ var _componentlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../componentlist.service */ "./src/app/componentlist.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
        this.component = _componentslist_json__WEBPACK_IMPORTED_MODULE_2__.list;
    }
    ComponentsComponent.prototype.getUrl = function (item) {
        return item.url.split('#')[0];
    };
    ComponentsComponent.prototype.getFragment = function (item) {
        return item.url.split('#')[1];
    };
    ComponentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[class.content-container]': 'true',
                '[class.content-area]': 'true',
            },
            providers: [_componentlist_service__WEBPACK_IMPORTED_MODULE_3__["COMPONENTLISTSERVICE"]],
            styles: [__webpack_require__(/*! ./components.component.css */ "./src/app/components/components.component.css")]
        })
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/componentslist.json":
/*!*************************************!*\
  !*** ./src/app/componentslist.json ***!
  \*************************************/
/*! exports provided: status, list, default */
/***/ (function(module) {

module.exports = {"status":{"done":20,"started":10,"notStarted":5,"notDoing":-1},"list":[{"url":"progress","text":"Progress Bars","type":"component","target":"10 seconds","releasable":"15 seconds","goal":"5 seconds","description":"A progress bar may either show an approximate percentage of completion (determinate), or indicate that an operation is ongoing (indeterminate). Usability studies have shown that users are aware of response times of over one second. Consequently, operations that take five seconds or longer to complete to be lengthy and in need of progress bar feedback.","dox":"src/app/components/components-demos/progress-bars/progress-bars.module#ProgressBarsModule"},{"url":"spinners","text":"Spinners","type":"component","target":"3 seconds","releasable":"5 seconds","goal":"2 seconds","description":"The “spinny wheel” is a progressive indicator that can be used for import/export operations under 5 seconds.","dox":"src/app/components/components-demos/spinners/spinners.module#SpinnersModule"}]};

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"dox-content\">\n    <h1 id=\"introduction\">Welcome </h1>\n    <p>Design for Performance was created from the evolving need of software technology to continually strive to discover and address the needs of human computer interaction. The designs discussed can be applied to any web technology, regardless of the underlying framework.</p>\n\n    <p>This site was inspired by and built with <a href=\"https://clarity.design/\" target=\"_blank\">Project Clarity</a>, an open source design system that brings together UX guidelines, HTML/CSS framework, and Angular components. More to Come on this Site Spring 2019.\n    </p>\n\n    <h2 id=\"howToUse\">How to Use This Guide</h2>\n    <p>There are three approaches for utilizing Design for Interaction: just the Interaction guidance, Interaction guidance and the HTML/CSS/JS framework, or put everything together with the Clarity Design System.</p>\n\n    <h3 id=\"uiInstallation\">About Design for Performance</h3>\n    <p>Understanding user experience in the context of interaction design can aid in the ability to detect and recommend ways to improve performance in application design. In turn, improving the usability of application design can increase customer satisfaction in products.</p>\n    <p>The guidance outlined in this document relates to the performance of user interaction focused on instrumenting systems and applications to collect metrics and logs and then validating the architecture through user insights.</p>\n    <p>More background and resources are provided on the site.\n    </p>\n\n    <h2 id=\"attributions\">Attributions</h2>\n    <p>See more attribution information found on the Project Clarity website  <a href=\"https://github.com/vmware/clarity/blob/master/ATTRIBUTION.md\" target=\"_blank\">legal\n        attributions</a> for third party software.\n    </p>\n    <div style=\"visibility: hidden; height: 80vh;\">This is a spacer to force sidenav highlighting on scroll</div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            // tslint:disable-next-line:use-host-property-decorator
            host: { '[class.content-container]': 'true',
            },
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-links.component.ts":
/*!****************************************!*\
  !*** ./src/app/nav-links.component.ts ***!
  \****************************************/
/*! exports provided: NavLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinksComponent", function() { return NavLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _componentslist_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentslist.json */ "./src/app/componentslist.json");
var _componentslist_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./componentslist.json */ "./src/app/componentslist.json", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/* tslint:disable */



var NavLinksComponent = /** @class */ (function () {
    function NavLinksComponent() {
        this.components = _componentslist_json__WEBPACK_IMPORTED_MODULE_2__.list;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavLinksComponent.prototype, "type", void 0);
    NavLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav-links',
            template: "\n        <ng-container *ngFor=\"let component of components\">\n            <li *ngIf=\"component.url && component.type == type\">\n                <a class=\"nav-link\" [routerLink]=\"component.url\" routerLinkActive=\"active\">\n                    {{component.text}}\n                </a>\n            </li>\n        </ng-container>\n    ",
        })
    ], NavLinksComponent);
    return NavLinksComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.html":
/*!****************************************************!*\
  !*** ./src/app/resources/resources.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dox-content\">\n    <div class=\"dox-content-wrapper\">\n\n  <h1>Additional Resources</h1>\n\n  <p>\n    The following documents contain additional external perspectives on this topic.\n  </p>\n\n  <h2>Articles</h2>\n  <ul class=\"list\">\n      <li><a href=\"https://developers.google.com/web/fundamentals/performance/rail\" target=\"_blank\">Web Performance Fundamentals</a></li>\n      <li><a href=\"https://ux.stackexchange.com/questions/58163/acceptable-waiting-time-for-users-in-time-sensitive-actions\" target=\"_blank\">Wait Times for Users</a></li>\n      <li><a href=\"http://www.agileload.com/agileload/blog/2013/02/18/web-applications-performance-testing-metrics\" target=\"_blank\">Performance Testing Metrics</a></li>\n      <li><a href=\"http://www.webperformancetoday.com/2010/06/15/everything-you-wanted-to-know-about-web-performance/\" target=\"_blank\">Web Performance</a></li>\n      <li><a href=\"https://www.nngroup.com/articles/response-times-3-important-limits/\" target=\"_blank\">NNGroup Response Time Limits</a></li>\n      <li><a href=\"https://www.nngroup.com/articles/website-response-times/\" target=\"_blank\">Website Response Times</a> </li>\n  </ul>\n</div>\n</section>\n"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/resources/resources.component.html"),
            // tslint:disable-next-line:use-host-property-decorator
            host: { '[class.content-container]': 'true',
            },
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/sequences/sequences.component.html":
/*!****************************************************!*\
  !*** ./src/app/sequences/sequences.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Welcome to Time to Use\n  </h1>\n  <!-- <button (click)=\"onclick()\">Service</button>  -->\n"

/***/ }),

/***/ "./src/app/sequences/sequences.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sequences/sequences.component.ts ***!
  \**************************************************/
/*! exports provided: SequencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequencesComponent", function() { return SequencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* tslint:disable */

var SequencesComponent = /** @class */ (function () {
    function SequencesComponent() {
    }
    SequencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sequences',
            template: __webpack_require__(/*! ./sequences.component.html */ "./src/app/sequences/sequences.component.html"),
            host: {
                '[class.content-container]': 'true',
            },
        })
    ], SequencesComponent);
    return SequencesComponent;
}());



/***/ }),

/***/ "./src/app/time/time.component.css":
/*!*****************************************!*\
  !*** ./src/app/time/time.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWUvdGltZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/time/time.component.html":
/*!******************************************!*\
  !*** ./src/app/time/time.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* tslint:disable */\n<!-- <h2>{{time.name | uppercase}} Details</h2>\n<div><span>id: </span>{{time.id}}</div>\n<div><span>name: </span>{{time.name}}</div> -->\n"

/***/ }),

/***/ "./src/app/time/time.component.ts":
/*!****************************************!*\
  !*** ./src/app/time/time.component.ts ***!
  \****************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* tslint:disable */


var TimeComponent = /** @class */ (function () {
    function TimeComponent() {
    }
    TimeComponent.prototype.ngOnInit = function () {
    };
    TimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time',
            template: __webpack_require__(/*! ./time.component.html */ "./src/app/time/time.component.html"),
            styles: [__webpack_require__(/*! ./time.component.css */ "./src/app/time/time.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeComponent);
    return TimeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rwpatel/designperformance/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map