webpackJsonp([13],{

/***/ "../../../../../src/app/layout/reports/brand-wise-report/brand-wise-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_brand_wise_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/component/brand-wise-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandWiseReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_brand_wise_report_component__["a" /* BrandWiseReportComponent */] }
];
var BrandWiseReportRoutingModule = (function () {
    function BrandWiseReportRoutingModule() {
    }
    return BrandWiseReportRoutingModule;
}());
BrandWiseReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], BrandWiseReportRoutingModule);

//# sourceMappingURL=brand-wise-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/brand-wise-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_wise_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/brand-wise-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_brand_wise_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/component/brand-wise-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandWiseReportModule", function() { return BrandWiseReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BrandWiseReportModule = (function () {
    function BrandWiseReportModule() {
    }
    return BrandWiseReportModule;
}());
BrandWiseReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__brand_wise_report_routing_module__["a" /* BrandWiseReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_brand_wise_report_component__["a" /* BrandWiseReportComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]]
    })
], BrandWiseReportModule);

//# sourceMappingURL=brand-wise-report.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/component/brand-wise-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_brand_wise_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/service/brand-wise-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_brand_wise_report_model__ = __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/model/brand-wise-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandWiseReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BrandWiseReportComponent = (function () {
    function BrandWiseReportComponent(router, _currencyPipe, route, titleService, reportService, _authenticationService, _commonService, toastr) {
        this.router = router;
        this._currencyPipe = _currencyPipe;
        this.route = route;
        this.titleService = titleService;
        this.reportService = reportService;
        this._authenticationService = _authenticationService;
        this._commonService = _commonService;
        this.toastr = toastr;
        this.loading = false;
        this.reverse = false;
        this.brandWiseReportModelList = new Array();
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.currentUserRole = '';
    }
    BrandWiseReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.getBrandList();
        this.route.queryParams.forEach(function (params) {
            _this.currentBrand = params['type'];
            window.scrollTo(0, 0);
            _this.currentReport =  true ? _this.currentBrand : '';
            _this.titleService.setTitle(_this.currentReport);
            _this.paginationModel.TotalRecords = 500;
            _this.paginationModel.CurrentPage = 1;
            _this.paginationModel.PerPage = 10;
            if (_this.currentBrand) {
                _this.getBrandWiseReports();
            }
        });
    };
    BrandWiseReportComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            var fileName = "BrandWiseReport.xlsx";
            var data = this.brandWiseReportModelList;
            this._authenticationService.exportFunction(fileName, data);
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    BrandWiseReportComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    BrandWiseReportComponent.prototype.getBrandList = function () {
        var _this = this;
        this._commonService.getBrandList().subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.brandList = result.Data;
            }
        });
    };
    BrandWiseReportComponent.prototype.getBrandWiseReports = function () {
        var _this = this;
        this.loading = true;
        this.reportService.getBrandWiseReports(this.paginationModel, this.currentBrand).subscribe(function (result) {
            _this.brandWiseReportModelList = [];
            _this.brandWiseReportModelList = new Array();
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.toastr.success(result.SuccessMessage);
                _this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for (var i = 0; i < result.Data.length; i++) {
                    var _brandWiseReportModel = new __WEBPACK_IMPORTED_MODULE_6__model_brand_wise_report_model__["a" /* BrandWiseReportModel */]();
                    _brandWiseReportModel.SrNo = result.Data[i].SrNo ? result.Data[i].SrNo : null;
                    _brandWiseReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _brandWiseReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    if (_this.currentBrand == 'Hindware') {
                        _brandWiseReportModel.VirtualState = result.Data[i].VirtualState ? result.Data[i].VirtualState : '0';
                        _brandWiseReportModel.HWItalianValue = result.Data[i].HWItalianValue ? result.Data[i].HWItalianValue : '0';
                        _brandWiseReportModel.HWItalianValue = _this._currencyPipe.transform(_brandWiseReportModel.HWItalianValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.HWFaucetsValue = result.Data[i].HWFaucetsValue ? result.Data[i].HWFaucetsValue : '0';
                        _brandWiseReportModel.HWFaucetsValue = _this._currencyPipe.transform(_brandWiseReportModel.HWFaucetsValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.PVCCisternsValue = result.Data[i].PVCCisternsValue ? result.Data[i].PVCCisternsValue : '0';
                        _brandWiseReportModel.PVCCisternsValue = _this._currencyPipe.transform(_brandWiseReportModel.PVCCisternsValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.ConcealoValue = result.Data[i].ConcealoValue ? result.Data[i].ConcealoValue : '0';
                        _brandWiseReportModel.ConcealoValue = _this._currencyPipe.transform(_brandWiseReportModel.ConcealoValue, 'INR', false, '1.0-0');
                    }
                    if (_this.currentBrand == 'Lifestyle') {
                        _brandWiseReportModel.QueoSwValue = result.Data[i].QueoSwValue ? result.Data[i].QueoSwValue : '0';
                        _brandWiseReportModel.QueoSwValue = _this._currencyPipe.transform(_brandWiseReportModel.QueoSwValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.QueoFaucetsValue = result.Data[i].QueoFaucetsValue ? result.Data[i].QueoFaucetsValue : '0';
                        _brandWiseReportModel.QueoFaucetsValue = _this._currencyPipe.transform(_brandWiseReportModel.QueoFaucetsValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.AmoreValue = result.Data[i].AmoreValue ? result.Data[i].AmoreValue : '0';
                        _brandWiseReportModel.AmoreValue = _this._currencyPipe.transform(_brandWiseReportModel.AmoreValue, 'INR', false, '1.0-0');
                    }
                    if (_this.currentBrand == 'Benelave') {
                        _brandWiseReportModel.BenelaveSwValue = result.Data[i].BenelaveSwValue ? result.Data[i].BenelaveSwValue : '0';
                        _brandWiseReportModel.BenelaveSwValue = _this._currencyPipe.transform(_brandWiseReportModel.BenelaveSwValue, 'INR', false, '1.0-0');
                        _brandWiseReportModel.BenelaveFaucetsValue = result.Data[i].BenelaveFaucetsValue ? result.Data[i].BenelaveFaucetsValue : '0';
                        _brandWiseReportModel.BenelaveFaucetsValue = _this._currencyPipe.transform(_brandWiseReportModel.BenelaveFaucetsValue, 'INR', false, '1.0-0');
                    }
                    _brandWiseReportModel.HotValue = result.Data[i].HotValue ? result.Data[i].HotValue : '0';
                    _brandWiseReportModel.HotValue = _this._currencyPipe.transform(_brandWiseReportModel.HotValue, 'INR', false, '1.0-0');
                    _brandWiseReportModel.WarmValue = result.Data[i].WarmValue ? result.Data[i].WarmValue : '0';
                    _brandWiseReportModel.WarmValue = _this._currencyPipe.transform(_brandWiseReportModel.WarmValue, 'INR', false, '1.0-0');
                    _brandWiseReportModel.ColdValue = result.Data[i].ColdValue ? result.Data[i].ColdValue : '0';
                    _brandWiseReportModel.ColdValue = _this._currencyPipe.transform(_brandWiseReportModel.ColdValue, 'INR', false, '1.0-0');
                    _brandWiseReportModel.BudgetaryValue = result.Data[i].BudgetaryValue ? result.Data[i].BudgetaryValue : '0';
                    _brandWiseReportModel.BudgetaryValue = _this._currencyPipe.transform(_brandWiseReportModel.BudgetaryValue, 'INR', false, '1.0-0');
                    _brandWiseReportModel.TotalValue = result.Data[i].TotalValue ? result.Data[i].TotalValue : '0';
                    _brandWiseReportModel.TotalValue = _this._currencyPipe.transform(_brandWiseReportModel.TotalValue, 'INR', false, '1.0-0');
                    _this.brandWiseReportModelList.push(_brandWiseReportModel);
                }
            }
            _this.loading = false;
        });
    };
    return BrandWiseReportComponent;
}());
BrandWiseReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand-wise-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/template/brand-wise-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/brand-wise-report/styles/brand-wise-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_brand_wise_report_service__["a" /* BrandWiseReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__shared_services_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_brand_wise_report_service__["a" /* BrandWiseReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_brand_wise_report_service__["a" /* BrandWiseReportService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_common_service__["a" /* CommonService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _h || Object])
], BrandWiseReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=brand-wise-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/model/brand-wise-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandWiseReportModel; });
var BrandWiseReportModel = (function () {
    function BrandWiseReportModel() {
    }
    return BrandWiseReportModel;
}());

//# sourceMappingURL=brand-wise-report.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/service/brand-wise-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandWiseReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandWiseReportService = (function () {
    function BrandWiseReportService(http) {
        this.http = http;
        this.getBrandwiseReportUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'BrandWiseReport/fetchBrandWiseData';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    BrandWiseReportService.prototype.getBrandWiseReports = function (_paginationModel, currentBrand) {
        var _this = this;
        var url = this.getBrandwiseReportUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentBrand": currentBrand },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    BrandWiseReportService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return BrandWiseReportService;
}());
BrandWiseReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BrandWiseReportService);

var _a;
//# sourceMappingURL=brand-wise-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/styles/brand-wise-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/brand-wise-report/template/brand-wise-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"currentReport\" [icon]=\"'fa-file-text-o'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <a class=\"col-sm-2 btn bnt-link btn-border btn-sm\" *ngFor=\"let item of brandList\" [ngClass]=\"{'btn-info' : currentBrand == item}\" routerLink=\"/brand-wise-report\" [routerLinkActive]=\"['router-link-active']\" [queryParams]=\"{ type: item }\">{{ item }}</a>\n                </div>\n            </div>\n        </div>\n    </div>    \n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <h5>BrandWise Report</h5>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <input type=\"text\" id=\"searchBrandwiseReport\" name=\"searchBrandwiseReport\" class=\"form-control\" [(ngModel)]=\"searchBrandwiseReport\" placeholder=\"Search...\">\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <button (click)=\"callMethod('excel')\" class=\"btn btn-info btn-sm\">EXCEL</button>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <button (click)=\"callMethod('pdf')\" class=\"btn btn-info btn-sm\">PDF</button>\n                        </div>\n                    </div>                             \n                    <div class=\"table-responsive\" style=\"background-color: #FFF;\">\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th (click)=\"sort('SrNo')\" class=\"text-center\">Sr No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='SrNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                    <th *ngIf=\"currentUserRole == 'Administrator'\" (click)=\"sort('Zone')\" class=\"text-center\">Zone&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Zone'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                    <th *ngIf=\"currentUserRole != 'Administrator'\" (click)=\"sort('EmployeeName')\" class=\"text-center\">Employee Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EmployeeName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                    <ng-container *ngIf=\"currentBrand == 'Hindware'\">\n                                        <th (click)=\"sort('VirtualState')\" class=\"text-center\">Virtual State &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='VirtualState'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('HWItalianValue')\" class=\"text-center\">HW Italian &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='HWItalianValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('HWFaucetsValue')\" class=\"text-center\">HW Faucets &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='HWFaucetsValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('PVCCisternsValue')\" class=\"text-center\">PVC Cisterns &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PVCCisternsValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('ConcealoValue')\" class=\"text-center\">Concealo&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ConcealoValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>                                    \n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"currentBrand == 'Lifestyle'\">\n                                        <th (click)=\"sort('QueoSwValue')\" class=\"text-center\">Queo SW &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='QueoSwValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('QueoFaucetsValue')\" class=\"text-center\">Queo Faucets &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='QueoFaucetsValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('AmoreValue')\" class=\"text-center\">Amore &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='AmoreValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"currentBrand == 'Benelave'\">\n                                        <th (click)=\"sort('BenelaveSwValue')\" class=\"text-center\">Benelave SW &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='BenelaveSwValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('BenelaveFaucetsValue')\" class=\"text-center\">Benelave Faucets &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='BenelaveFaucetsValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                    </ng-container>\n                                    <th (click)=\"sort('HotValue')\" class=\"text-center\">Hot &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='HotValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n                                    </th>\n                                    <th (click)=\"sort('WarmValue')\" class=\"text-center\">Warm &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='WarmValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n                                    </th>\n                                    <th (click)=\"sort('ColdValue')\" class=\"text-center\">Cold &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ColdValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n                                    </th>\n                                    <th (click)=\"sort('BudgetaryValue')\" class=\"text-center\">Budgetary &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='BudgetaryValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n                                    </th>\n                                    <th (click)=\"sort('TotalValue')\" class=\"text-center\">Total Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='TotalValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span>\n                                    </th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of brandWiseReportModelList | orderBy: { key : reverse }\">\n                                    <td class=\"text-center\">{{item.SrNo}}</td>\n                                    <td *ngIf=\"item.Zone\" class=\"text-center\">{{item.Zone}}</td>\n                                    <td *ngIf=\"item.EmployeeName\" class=\"text-center\">{{item.EmployeeName}}</td>\n                                    <ng-container *ngIf=\"currentBrand == 'Hindware'\">\n                                        <td class=\"text-center\">{{item.VirtualState}}</td>\n                                        <td class=\"text-right\">{{item.HWItalianValue }}</td>\n                                        <td class=\"text-right\">{{item.HWFaucetsValue }}</td>\n                                        <td class=\"text-right\">{{item.PVCCisternsValue }}</td>\n                                        <td class=\"text-right\">{{item.ConcealoValue }}</td>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"currentBrand == 'Lifestyle'\">\n                                        <td class=\"text-right\">{{item.QueoSwValue }}</td>\n                                        <td class=\"text-right\">{{item.QueoFaucetsValue }}</td>\n                                        <td class=\"text-right\">{{item.AmoreValue }}</td>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"currentBrand == 'Benelave'\">\n                                        <td class=\"text-right\">{{item.BenelaveSwValue }}</td>\n                                        <td class=\"text-right\">{{item.BenelaveFaucetsValue }}</td>\n                                    </ng-container>\n                                    <td class=\"text-right\">{{item.HotValue }}</td>\n                                    <td class=\"text-right\">{{item.WarmValue }}</td>\n                                    <td class=\"text-right\">{{item.ColdValue }}</td>\n                                    <td class=\"text-right\">{{item.BudgetaryValue }}</td>\n                                    <td class=\"text-right\">{{item.TotalValue }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <ngb-pagination [collectionSize]=\"paginationModel.TotalRecords\" \n                                        (pageChange)=\"changePage($event)\" \n                                        [(page)]=\"paginationModel.CurrentPage\" \n                                        [maxSize]=\"paginationModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ })

});
//# sourceMappingURL=13.chunk.js.map