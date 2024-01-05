webpackJsonp([12],{

/***/ "../../../../../src/app/layout/reports/consolidated-report/component/consolidated-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_consolidated_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/service/consolidated-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_consolidated_report_model__ = __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/model/consolidated-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolidatedReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConsolidatedReportComponent = (function () {
    function ConsolidatedReportComponent(router, _commonService, _currencyPipe, route, titleService, reportService, _authenticationService, toastr) {
        this.router = router;
        this._commonService = _commonService;
        this._currencyPipe = _currencyPipe;
        this.route = route;
        this.titleService = titleService;
        this.reportService = reportService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.loading = false;
        this.reverse = false;
        this.consolidatedReportModelList = new Array();
        this.brandList = [];
        this.currentUserRole = '';
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__["a" /* PaginationModel */]();
    }
    ConsolidatedReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.getBrandList();
        this.route.queryParams.forEach(function (params) {
            _this.currentBrand = params['type'];
            window.scrollTo(0, 0);
            _this.currentReport =  true ? _this.currentBrand : '';
            _this.titleService.setTitle(_this.currentReport);
            _this.paginationModel.CurrentPage = 1;
            _this.paginationModel.PerPage = 10;
            _this.paginationModel.TotalRecords = 100;
            if (_this.currentBrand) {
                _this.getConsolidatedReports();
            }
        });
    };
    ConsolidatedReportComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ConsolidatedReportComponent.prototype.getBrandList = function () {
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
    ConsolidatedReportComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            var fileName = "consolidatedReport.xlsx";
            this._authenticationService.exportFunction(fileName, this.consolidatedReportModelList);
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    ConsolidatedReportComponent.prototype.getConsolidatedReports = function () {
        var _this = this;
        this.loading = true;
        this.reportService.getConsolidatedReport(this.paginationModel, this.currentBrand).subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.toastr.success(result.SuccessMessage);
                _this.consolidatedReportModelList = [];
                _this.consolidatedReportModelList = new Array();
                _this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for (var i = 0; i < result.Data.length; i++) {
                    var _consolidatedReportModel = new __WEBPACK_IMPORTED_MODULE_6__model_consolidated_report_model__["a" /* ConsolidatedReportModel */]();
                    _consolidatedReportModel.SrNo = result.Data[i].SrNo;
                    _consolidatedReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _consolidatedReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    _consolidatedReportModel.PipelineYTDValue = _this._currencyPipe.transform(result.Data[i].PipelineYTDValue, 'INR', false, '1.0-0');
                    _consolidatedReportModel.PipelineYTDNos = result.Data[i].PipelineYTDNos;
                    _consolidatedReportModel.PercentPipelineToConversion = _this._currencyPipe.transform(result.Data[i].PercentPipelineToConversion, 'INR', false, '1.0-0');
                    _consolidatedReportModel.PercentEnquiriesToPipeline = _this._currencyPipe.transform(result.Data[i].PercentEnquiriesToPipeline, 'INR', false, '1.0-0');
                    _consolidatedReportModel.PercentEnquiriesToConversion = _this._currencyPipe.transform(result.Data[i].PercentEnquiriesToConversion, 'INR', false, '1.0-0');
                    _consolidatedReportModel.LostYTDValue = _this._currencyPipe.transform(result.Data[i].LostYTDValue, 'INR', false, '1.0-0');
                    _consolidatedReportModel.LostYTDNos = result.Data[i].LostYTDNos;
                    _consolidatedReportModel.EnquiriesYTDValue = _this._currencyPipe.transform(result.Data[i].EnquiriesYTDValue, 'INR', false, '1.0-0');
                    _consolidatedReportModel.EnquiriesYTDNos = result.Data[i].EnquiriesYTDNos;
                    _consolidatedReportModel.ConversionYTDValue = _this._currencyPipe.transform(result.Data[i].ConversionYTDValue, 'INR', false, '1.0-0');
                    _consolidatedReportModel.ConversionYTDNos = result.Data[i].ConversionYTDNos;
                    _this.consolidatedReportModelList.push(_consolidatedReportModel);
                }
            }
            _this.loading = false;
        });
    };
    return ConsolidatedReportComponent;
}());
ConsolidatedReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-consolidated-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/template/consolidated-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/consolidated-report/styles/consolidated-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_consolidated_report_service__["a" /* ConsolidatedReportService */],
            __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"], __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_consolidated_report_service__["a" /* ConsolidatedReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_consolidated_report_service__["a" /* ConsolidatedReportService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _h || Object])
], ConsolidatedReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=consolidated-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/consolidated-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_consolidated_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/component/consolidated-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolidatedReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_consolidated_report_component__["a" /* ConsolidatedReportComponent */] }
];
var ConsolidatedReportRoutingModule = (function () {
    function ConsolidatedReportRoutingModule() {
    }
    return ConsolidatedReportRoutingModule;
}());
ConsolidatedReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ConsolidatedReportRoutingModule);

//# sourceMappingURL=consolidated-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/consolidated-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consolidated_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/consolidated-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_consolidated_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/consolidated-report/component/consolidated-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidatedReportModule", function() { return ConsolidatedReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ConsolidatedReportModule = (function () {
    function ConsolidatedReportModule() {
    }
    return ConsolidatedReportModule;
}());
ConsolidatedReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__consolidated_report_routing_module__["a" /* ConsolidatedReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_consolidated_report_component__["a" /* ConsolidatedReportComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]]
    })
], ConsolidatedReportModule);

//# sourceMappingURL=consolidated-report.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/model/consolidated-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolidatedReportModel; });
var ConsolidatedReportModel = (function () {
    function ConsolidatedReportModel() {
    }
    return ConsolidatedReportModel;
}());

//# sourceMappingURL=consolidated-report.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/service/consolidated-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolidatedReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsolidatedReportService = (function () {
    function ConsolidatedReportService(http) {
        this.http = http;
        this.getConsolidatedReportUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'ConsolidatedReport/fetchConsolidatedData';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    ConsolidatedReportService.prototype.getConsolidatedReport = function (_paginationModel, currentBrand) {
        var _this = this;
        var url = this.getConsolidatedReportUrl;
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
    ConsolidatedReportService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return ConsolidatedReportService;
}());
ConsolidatedReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ConsolidatedReportService);

var _a;
//# sourceMappingURL=consolidated-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/styles/consolidated-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/consolidated-report/template/consolidated-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<app-page-header [heading]=\"currentReport\"\n\t\t[icon]=\"'fa-file-text-o'\"></app-page-header>\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<a class=\"col-sm-2 btn bnt-link btn-border btn-sm\"\n\t\t\t\t\t\t*ngFor=\"let item of brandList\"\n\t\t\t\t\t\t[ngClass]=\"{'btn-info' : currentBrand == item}\"\n\t\t\t\t\t\trouterLink=\"/consolidated-report\"\n\t\t\t\t\t\t[routerLinkActive]=\"['router-link-active']\"\n\t\t\t\t\t\t[queryParams]=\"{ type: item }\">{{ item }}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\t\t\t\t\n\t\t\t\t<div class=\"card-block\">\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<h5>Consolidated Report</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"SearchConsolidatedReport\" id=\"SearchConsolidatedReport\" [(ngModel)]=\"SearchConsolidatedReport\" class=\"form-control\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<button (click)=\"callMethod('excel')\" \n\t\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">EXCEL</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<button (click)=\"callMethod('pdf')\" \n\t\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">PDF</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"table-responsive\" style=\"background-color: #FFF;\">\n\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('SrNo')\" class=\"text-center\" rowspan=\"2\">Sr No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='SrNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th *ngIf=\"currentUserRole == 'Administrator'\" (click)=\"sort('Zone')\" class=\"text-center\" rowspan=\"2\">Zone &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Zone'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th *ngIf=\"currentUserRole != 'Administrator'\" (click)=\"sort('EmployeeName')\" class=\"text-center\" rowspan=\"2\">Employee Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EmployeeName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\" class=\"text-center\">Enquiries</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\" class=\"text-center\">Pipeline</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\" class=\"text-center\">Conversion</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\" class=\"text-center\">Lost</th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('PercentEnquiriesToPipeline')\" class=\"text-center\" rowspan=\"2\">%\n\t\t\t\t\t\t\t\t\tEnquiries <br>to\n\t\t\t\t\t\t\t\t\tPipeline  &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PercentEnquiriesToPipeline'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('PercentPipelineToConversion')\" class=\"text-center\" rowspan=\"2\">% \n\t\t\t\t\t\t\t\t\tPipeline <br>to\n\t\t\t\t\t\t\t\t\tConversion  &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PercentPipelineToConversion'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('PercentEnquiriesToConversion')\" class=\"text-center\" rowspan=\"2\">% \n\t\t\t\t\t\t\t\t\tEnquiries <br>to\n\t\t\t\t\t\t\t\t\tConversion  &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PercentEnquiriesToConversion'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<th (click)=\"sort('EnquiriesYTDNos')\" class=\"text-center\">YTD Nos &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EnquiriesYTDNos'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('EnquiriesYTDValue')\" class=\"text-center\">YTD Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EnquiriesYTDValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('PipelineYTDNos')\" class=\"text-center\">YTD Nos &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PipelineYTDNos'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('PipelineYTDValue')\" class=\"text-center\">YTD Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PipelineYTDValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('ConversionYTDNos')\" class=\"text-center\">YTD Nos &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ConversionYTDNos'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('ConversionYTDValue')\" class=\"text-center\">YTD Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ConversionYTDValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('LostYTDNos')\" class=\"text-center\">YTD No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='LostYTDNos'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('LostYTDValue')\" class=\"text-center\">YTD Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='LostYTDValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of consolidatedReportModelList | orderBy: { key : reverse }\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.SrNo}}</td>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<td *ngIf=\"item.EmployeeName\" class=\"text-center\">{{item.EmployeeName}}</td>\n\t\t\t\t\t\t\t\t<td *ngIf=\"item.Zone\" class=\"text-center\">{{item.Zone}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.EnquiriesYTDNos}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.EnquiriesYTDValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.PipelineYTDNos}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.PipelineYTDValue}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.ConversionYTDNos}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.ConversionYTDValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.LostYTDNos}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.LostYTDValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.PercentEnquiriesToPipeline }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.PercentPipelineToConversion}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.PercentEnquiriesToConversion}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\t\t\t\t\t\t\n\t\t\t\t\t</table>\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"paginationModel.TotalRecords\" \n                                        (pageChange)=\"changePage($event)\" \n                                        [(page)]=\"paginationModel.CurrentPage\" \n                                        [maxSize]=\"paginationModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ })

});
//# sourceMappingURL=12.chunk.js.map