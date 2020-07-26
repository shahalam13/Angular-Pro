(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-charts-charts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panel-header panel-header\">\n  <div class=\"header text-center\">\n    <h2 class=\"title\">Charts.js</h2>\n    <p class=\"category\">\n      Simple yet flexible JavaScript charting for designers & developers. Made\n      by our friends from\n      <a target=\"_blank\" href=\"http://www.chartjs.org\">Charts.js</a>. Please\n      check\n      <a target=\"_blank\" href=\"http://www.chartjs.org/docs/latest/\"\n        >the full documentation</a\n      >.\n    </p>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-5 ml-auto\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">Simple with gradient</h5>\n          <h4 class=\"card-title\">Line Chart</h4>\n          <div class=\"\" ngbDropdown>\n            <button\n              type=\"button\"\n              class=\"btn btn-round btn-default btn-simple btn-icon no-caret\"\n              data-toggle=\"dropdown\"\n              ngbDropdownToggle\n            >\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"lineChartExample\"></canvas></div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons arrows-1_refresh-69\"></i> Just Updated\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 mr-auto\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">With numbers and grid</h5>\n          <h4 class=\"card-title\">Line Chart 2</h4>\n          <div class=\"\" ngbDropdown>\n            <button\n              type=\"button\"\n              class=\"btn btn-round btn-defaul btn-simple btn-icon no-caret\"\n              data-toggle=\"dropdown\"\n              ngbDropdownToggle\n            >\n              <i class=\"now-ui-icons loader_gear\"></i>\n            </button>\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              <a class=\"dropdown-item text-danger\" href=\"#\">Remove Data</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas id=\"lineChartExampleWithNumbersAndGrid\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons arrows-1_refresh-69\"></i> Just Updated\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-5 ml-auto\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">Simple with grids and numbers</h5>\n          <h4 class=\"card-title\">Bar Chart</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas id=\"barChartSimpleGradientsNumbers\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_time-alarm\"></i> Last 7 days\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5 mr-auto\">\n      <div class=\"card card-chart\">\n        <div class=\"card-header\">\n          <h5 class=\"card-category\">Multiple bars no gradient</h5>\n          <h4 class=\"card-title\">Bar Chart 2</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\">\n            <canvas id=\"barChartMultipleBarsNoGradient\"></canvas>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"stats\">\n            <i class=\"now-ui-icons ui-2_time-alarm\"></i> Last 7 days\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/charts/charts.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/charts/charts.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
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


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.chartColor = "#FFFFFF";
        this.cardStatsMiniLineColor = "#fff";
        this.cardStatsMiniDotColor = "#fff";
    }
    ChartsComponent.prototype.hexToRGB = function (hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        }
        else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    };
    ChartsComponent.prototype.ngOnInit = function () {
        this.gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [
                    {
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }
                ],
                xAxes: [
                    {
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }
                ]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawBorder: false
                        }
                    }
                ],
                xAxes: [
                    {
                        display: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }
                ]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };
        this.canvas = document.getElementById("lineChartExample");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, "#80b6f4");
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                datasets: [
                    {
                        label: "Active Users",
                        borderColor: "#f96332",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#f96332",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: this.gradientFill,
                        borderWidth: 2,
                        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                    }
                ]
            },
            options: this.gradientChartOptionsConfiguration
        });
        this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, "#18ce0f");
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB("#18ce0f", 0.4));
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
                datasets: [
                    {
                        label: "Email Stats",
                        borderColor: "#18ce0f",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#18ce0f",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        backgroundColor: this.gradientFill,
                        borderWidth: 2,
                        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
                    }
                ]
            },
            options: this.gradientChartOptionsConfigurationWithNumbersAndGrid
        });
        this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
        this.ctx = this.canvas.getContext("2d");
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB("#2CA8FF", 0.6));
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "Active Countries",
                        backgroundColor: this.gradientFill,
                        borderColor: "#2CA8FF",
                        pointBorderColor: "#FFF",
                        pointBackgroundColor: "#2CA8FF",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        fill: true,
                        borderWidth: 1,
                        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                responsive: 1,
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawBorder: false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            display: 0,
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawTicks: false,
                                display: false,
                                drawBorder: false
                            }
                        }
                    ]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 15,
                        bottom: 15
                    }
                }
            }
        });
        this.canvas = document.getElementById("barChartMultipleBarsNoGradient");
        this.ctx = this.canvas.getContext("2d");
        this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.ctx, {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        backgroundColor: "#f96332",
                        data: [40, 26, 28, 45, 20, 25, 30, 25, 20, 25, 20, 15]
                    },
                    {
                        backgroundColor: "#2CA8FF",
                        data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawBorder: false
                            }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: {
                                display: false
                            },
                            gridLines: {
                                zeroLineColor: "transparent",
                                drawTicks: false,
                                drawBorder: false
                            }
                        }
                    ]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 15,
                        bottom: 15
                    }
                }
            }
        });
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-charts",
            template: __importDefault(__webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charts/charts.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./charts.component.css */ "./src/app/pages/charts/charts.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
/* harmony import */ var _charts_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts.routing */ "./src/app/pages/charts/charts.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_charts_routing__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutes"])],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]],
            exports: [_charts_component__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/charts.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/charts/charts.routing.ts ***!
  \************************************************/
/*! exports provided: ChartsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutes", function() { return ChartsRoutes; });
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ChartsRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _charts_component__WEBPACK_IMPORTED_MODULE_0__["ChartsComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-charts-charts-module.js.map