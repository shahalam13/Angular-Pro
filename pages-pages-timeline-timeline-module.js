(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-timeline-timeline-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/timeline/timeline.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/timeline/timeline.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\"></div>\n<div class=\"main-content\">\n  <div class=\"header text-center\"><h3 class=\"title\">Timeline</h3></div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card card-timeline card-plain\">\n        <div class=\"card-body\">\n          <ul class=\"timeline\">\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge danger\">\n                <i class=\"now-ui-icons objects_planet\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-danger\">Some Title</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>\n                    Wifey made the best Father's Day meal ever. So thankful so\n                    happy so blessed. Thank you for making my family We just had\n                    fun with the “future” theme !!! It was a fun night all\n                    together ... The always rude Kanye Show at 2am Sold Out\n                    Famous viewing @ Figueroa and 12th in downtown.\n                  </p>\n                </div>\n                <h6><i class=\"ti-time\"></i> 11 hours ago via Twitter</h6>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge success\">\n                <i class=\"now-ui-icons shopping_tag-content\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-success\">Another One</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>\n                    Thank God for the support of my wife and real friends. I\n                    also wanted to point out that it’s the first album to go\n                    number 1 off of streaming!!! I love you Ellen and also my\n                    number one design rule of anything I do from shoes to music\n                    to homes is that Kim has to like it....\n                  </p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge info\">\n                <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-info\">Another Title</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>\n                    Called I Miss the Old Kanye That’s all it was Kanye And I\n                    love you like Kanye loves Kanye Famous viewing @ Figueroa\n                    and 12th in downtown LA 11:10PM\n                  </p>\n                  <p>\n                    What if Kanye made a song about Kanye Royère doesn't make a\n                    Polar bear bed but the Polar bear couch is my favorite piece\n                    of furniture we own It wasn’t any Kanyes Set on his goals\n                    Kanye\n                  </p>\n                  <hr />\n                </div>\n                <div class=\"timeline-footer\">\n                  <div class=\"dropdown\" ngbDropdown>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-round btn-info dropdown-toggle\"\n                      data-toggle=\"dropdown\"\n                      ngbDropdownToggle\n                    >\n                      <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                    </button>\n                    <div class=\"dropdown-menu\" ngbDropdownMenu>\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge warning\">\n                <i class=\"now-ui-icons ui-1_email-85\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-warning\">Another One</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>\n                    Tune into Big Boy's 92.3 I'm about to play the first single\n                    from Cruel Winter also to Kim’s hair and makeup Lorraine\n                    jewelry and the whole style squad at Balmain and the Yeezy\n                    team. Thank you Anna for the invite thank you to the whole\n                    Vogue team\n                  </p>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/pages/timeline/timeline.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/pages/timeline/timeline.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/pages/timeline/timeline.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/timeline/timeline.component.ts ***!
  \************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () { };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-timeline",
            template: __importDefault(__webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/timeline/timeline.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./timeline.component.css */ "./src/app/pages/pages/timeline/timeline.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/timeline/timeline.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pages/timeline/timeline.module.ts ***!
  \*********************************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.component */ "./src/app/pages/pages/timeline/timeline.component.ts");
/* harmony import */ var _timeline_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline.routing */ "./src/app/pages/pages/timeline/timeline.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_timeline_routing__WEBPACK_IMPORTED_MODULE_6__["TimelineRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]]
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/timeline/timeline.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/timeline/timeline.routing.ts ***!
  \**********************************************************/
/*! exports provided: TimelineRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineRoutes", function() { return TimelineRoutes; });
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component */ "./src/app/pages/pages/timeline/timeline.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TimelineRoutes = [
    {
        path: "",
        children: [
            {
                path: "pages/timeline",
                component: _timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-pages-timeline-timeline-module.js.map