(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/user-profile/user-profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/user-profile/user-profile.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\">Create New CW Request</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Account Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"MD Shah Alom\" value=\"\">\n                </div>\n              </div>\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Account Number</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Account Number\" value=\"\">\n                </div>\n              </div>\n                            \n     \n              \n        \n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Bank Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Bank Name\" value=\"\">\n                </div>\n              </div>\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Branch Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Branch Name\" value=\"\">\n                </div>\n              </div>\n\n        \n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>SWIFT Code</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"SWIFT Code\" value=\"\">\n                </div>\n              </div>\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Branch Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Branch Address\" value=\"\">\n                </div>\n              </div>\n\n        \n            </div>\n\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Withdrawl Ammount</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Ammount\" value=\"\">\n                </div>\n              </div>\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Currencry</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"USD\" value=\"\">\n                </div>\n              </div>\n\n        \n            </div>\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\" \" value=\"\">\n                </div>\n              </div>\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>State</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\" \" value=\"\">\n                </div>\n              </div>\n\n        \n            </div>\n\n\n            <div class=\"row\">\n\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"\">\n                </div>\n              </div>\n              \n              <div class=\"col-md-6\">\n                <h4 class=\"card-title\">Customisable Select</h4>\n                <div class=\"row\">\n                  <div class=\"col-lg-5 col-md-8 col-sm-5 mb-3\">\n                    <angular2-multiselect\n                      [data]=\"dropdownList\"\n                      [(ngModel)]=\"selectedItems1\"\n                      [settings]=\"dropdownSettings1\"\n                      (onSelect)=\"onItemSelect($event)\"\n                      (onDeSelect)=\"OnItemDeSelect($event)\"\n                      (onSelectAll)=\"onSelectAll($event)\"\n                      (onDeSelectAll)=\"onDeSelectAll($event)\"\n                    >\n                    </angular2-multiselect>\n                  </div>\n                  <div class=\"col-lg-5 col-md-8 col-sm-5\">\n                    <angular2-multiselect\n                      [data]=\"dropdownList\"\n                      [(ngModel)]=\"selectedItems\"\n                      [settings]=\"dropdownSettings\"\n                      (onSelect)=\"onItemSelect($event)\"\n                      (onDeSelect)=\"OnItemDeSelect($event)\"\n                      (onSelectAll)=\"onSelectAll($event)\"\n                      (onDeSelectAll)=\"onDeSelectAll($event)\"\n                    >\n                    </angular2-multiselect>\n                  </div>\n\n                  \n                </div>\n              </div>\n              <!-- <div class=\"col-md-6\">\n                <h4 class=\"card-title\">Dropdown & Dropup</h4>\n                <div class=\"row\">\n                  <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                    <div class=\"\" ngbDropdown>\n                      <button\n                        class=\" btn btn-primary btn-round btn-block\"\n                        type=\"button\"\n                        id=\"dropdownMenuButton\"\n                        data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\"\n                        aria-expanded=\"false\"\n                        ngbDropdownToggle\n                      >\n                        Dropdown\n                      </button>\n                      <div\n                        class=\"\"\n                        aria-labelledby=\"dropdownMenuButton\"\n                        ngbDropdownMenu\n                      >\n                        <h6 class=\"dropdown-header\">Dropdown header</h6>\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                    <div class=\"\" placement=\"top-left\" ngbDropdown>\n                      <button\n                        type=\"button\"\n                        class=\"dropdown-toggle btn btn-primary btn-round btn-block\"\n                        data-toggle=\"dropdown\"\n                        ngbDropdownToggle\n                      >\n                        Dropup\n                      </button>\n                      <div class=\"\" ngbDropdownMenu>\n                        <h6 class=\"dropdown-header\">Dropdown header</h6>\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div> -->\n              \n\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Zip Code</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"10000\" value=\"\">\n                </div>\n              </div>\n\n        \n            </div>\n\n\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n\n\n                  <h3>Upload your bank Statement</h3>\n               \n                    <!-- <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" /> -->\n              \n\n              </div>\n            </div>\n          </form>\n\n          \n        </div>\n        <div  class=\"col-md-9 text-right\"  style=\"float: right;\"><button  class=\" btn btn-danger\" type=\"submit\"> Submit </button></div>\n      </div>\n    </div>\n   \n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/pages/user-profile/user-profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pages/user-profile/user-profile.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pages/user-profile/user-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/pages/user-profile/user-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.state = true;
        this.state1 = true;
        this.state2 = true;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { id: 1, itemName: "Roman", category: "All" },
            { id: 2, itemName: "Paris", category: "All" },
            { id: 3, itemName: "Bucharest", category: "All" },
            { id: 4, itemName: "Rome", category: "All" },
            { id: 5, itemName: "New York", category: "All" },
            { id: 6, itemName: "Miami", category: "All" },
            { id: 7, itemName: "Piatra Neamt", category: "All" },
            { id: 8, itemName: "Paris", category: "All" },
            { id: 9, itemName: "Bucharest", category: "All" },
            { id: 10, itemName: "Rome", category: "All" },
            { id: 11, itemName: "New York", category: "All" },
            { id: 12, itemName: "Miami", category: "All" },
            { id: 13, itemName: "Piatra Neamt", category: "All" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            enableSearchFilter: true,
            classes: "",
            groupBy: "category"
        };
        this.dropdownList1 = [
            { id: 1, itemName: "Roman" },
            { id: 2, itemName: "Paris" },
            { id: 3, itemName: "Bucharest" },
            { id: 4, itemName: "Rome" },
            { id: 5, itemName: "New York" },
            { id: 6, itemName: "Miami" },
            { id: 7, itemName: "Piatra Neamt" },
            { id: 8, itemName: "Paris" },
            { id: 9, itemName: "Bucharest" },
            { id: 10, itemName: "Rome" },
            { id: 11, itemName: "New York" },
            { id: 12, itemName: "Miami" },
            { id: 13, itemName: "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            enableSearchFilter: true,
            classes: "",
            lazyLoading: true
        };
    };
    UserProfileComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UserProfileComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    UserProfileComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    UserProfileComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-profile",
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages/user-profile/user-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/pages/user-profile/user-profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages/user-profile/user-profile.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/pages/user-profile/user-profile.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/pages/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.routing */ "./src/app/pages/pages/user-profile/user-profile.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_profile_routing__WEBPACK_IMPORTED_MODULE_5__["UserRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/user-profile/user-profile.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/pages/user-profile/user-profile.routing.ts ***!
  \******************************************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/pages/pages/user-profile/user-profile.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UserRoutes = [
    {
        path: "",
        children: [
            {
                path: "pages/user",
                component: _user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-pages-user-profile-user-profile-module.js.map