webpackJsonp([10],{

/***/ "../../../../../src/app/layout/reports/segment-wise-report/component/segment-wise-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_segment_wise_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/service/segment-wise-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Segment_wise_report_model__ = __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/model/Segment-wise-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentWiseReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SegmentWiseReportComponent = (function () {
    function SegmentWiseReportComponent(router, _currencyPipe, route, titleService, reportService, _authenticationService, toastr) {
        this.router = router;
        this._currencyPipe = _currencyPipe;
        this.route = route;
        this.titleService = titleService;
        this.reportService = reportService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.loading = false;
        this.reverse = false;
        this.segmentWiseReportModelList = new Array();
        this.currentUserRole = '';
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_9__shared_model_pagination_model__["a" /* PaginationModel */]();
    }
    SegmentWiseReportComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.currentReport);
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.TotalRecords = 100;
        this.paginationModel.PerPage = 10;
        this.getSegmentwiseReport();
    };
    SegmentWiseReportComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    SegmentWiseReportComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            var fileName = "SegmentWiseReport.xlsx";
            this._authenticationService.exportFunction(fileName, this.segmentWiseReportModelList);
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    SegmentWiseReportComponent.prototype.getSegmentwiseReport = function () {
        var _this = this;
        this.loading = true;
        this.reportService.getSegmentWiseReports(this.paginationModel).subscribe(function (result) {
            _this.segmentWiseReportModelList = [];
            _this.segmentWiseReportModelList = new Array();
            _this.loading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for (var i = 0; i < result.Data.length; i++) {
                    var _segmentWiseReportModel = new __WEBPACK_IMPORTED_MODULE_6__model_Segment_wise_report_model__["a" /* SegmentWiseReportModel */]();
                    _segmentWiseReportModel.SrNo = result.Data[i].SrNo;
                    _segmentWiseReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _segmentWiseReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    _segmentWiseReportModel.ResidentialNo = result.Data[i].ResidentialNo;
                    _segmentWiseReportModel.ResidentialValue = _this._currencyPipe.transform(result.Data[i].ResidentialValue, 'INR', false, '1.0-0');
                    _segmentWiseReportModel.CommercialNo = result.Data[i].CommercialNo;
                    _segmentWiseReportModel.CommercialValue = _this._currencyPipe.transform(result.Data[i].CommercialValue, 'INR', false, '1.0-0');
                    _segmentWiseReportModel.GovernmentNo = result.Data[i].GovernmentNo;
                    _segmentWiseReportModel.GovernmentValue = _this._currencyPipe.transform(result.Data[i].GovernmentValue, 'INR', false, '1.0-0');
                    _segmentWiseReportModel.HospitalityNo = result.Data[i].HospitalityNo;
                    _segmentWiseReportModel.HospitalityValue = _this._currencyPipe.transform(result.Data[i].HospitalityValue, 'INR', false, '1.0-0');
                    _this.segmentWiseReportModelList.push(_segmentWiseReportModel);
                }
                _this.toastr.success(result.SuccessMessage);
            }
        });
    };
    return SegmentWiseReportComponent;
}());
SegmentWiseReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-segment-wise-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/template/segment-wise-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/styles/segment-wise-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_segment_wise_report_service__["a" /* SegmentWiseReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["CurrencyPipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_segment_wise_report_service__["a" /* SegmentWiseReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_segment_wise_report_service__["a" /* SegmentWiseReportService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _g || Object])
], SegmentWiseReportComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=segment-wise-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/model/Segment-wise-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentWiseReportModel; });
var SegmentWiseReportModel = (function () {
    function SegmentWiseReportModel() {
    }
    return SegmentWiseReportModel;
}());

//# sourceMappingURL=Segment-wise-report.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/segment-wise-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_segment_wise_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/component/segment-wise-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentWiseReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_segment_wise_report_component__["a" /* SegmentWiseReportComponent */] }
];
var SegmentWiseReportRoutingModule = (function () {
    function SegmentWiseReportRoutingModule() {
    }
    return SegmentWiseReportRoutingModule;
}());
SegmentWiseReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], SegmentWiseReportRoutingModule);

//# sourceMappingURL=segment-wise-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/segment-wise-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__segment_wise_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/segment-wise-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_segment_wise_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/segment-wise-report/component/segment-wise-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentWiseReportModule", function() { return SegmentWiseReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SegmentWiseReportModule = (function () {
    function SegmentWiseReportModule() {
    }
    return SegmentWiseReportModule;
}());
SegmentWiseReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__segment_wise_report_routing_module__["a" /* SegmentWiseReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__component_segment_wise_report_component__["a" /* SegmentWiseReportComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]
        ]
    })
], SegmentWiseReportModule);

//# sourceMappingURL=segment-wise-report.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/service/segment-wise-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentWiseReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SegmentWiseReportService = (function () {
    function SegmentWiseReportService(http) {
        this.http = http;
        this.getSegmentWiseReportsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'SegmentWiseReport/fetchSegmentWiseData';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    SegmentWiseReportService.prototype.getSegmentWiseReports = function (_paginationModel) {
        var _this = this;
        var url = this.getSegmentWiseReportsUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    SegmentWiseReportService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return SegmentWiseReportService;
}());
SegmentWiseReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SegmentWiseReportService);

var _a;
//# sourceMappingURL=segment-wise-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/styles/segment-wise-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/segment-wise-report/template/segment-wise-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<app-page-header [heading]=\"'Segmentwise Report'\"\n\t\t[icon]=\"'fa-file-text-o'\"></app-page-header>\t\t\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\t\t\t\t\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<h5>Segmentwise Report</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"text\" name=\"searchSegmentWiseReport\" id=\"searchSegmentWiseReport\" [(ngModel)]=\"searchSegmentWiseReport\" class=\"form-control\" placeholder=\"Search...\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('excel')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">EXCEL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('pdf')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">PDF</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"table-responsive\" style=\"background-color: #FFF;\">\n\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<th (click)=\"sort('SrNo')\" rowspan=\"2\" class=\"text-center\">Sr <br>No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='SrNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th *ngIf=\"currentUserRole == 'Administrator'\" (click)=\"sort('Zone')\" rowspan=\"2\" class=\"text-center\">Zone &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Zone'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th *ngIf=\"currentUserRole != 'Administrator'\" (click)=\"sort('EmployeeName')\" rowspan=\"2\" class=\"text-center\">Zone &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EmployeeName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Residential</th>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Government</th>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Hospitality</th>\n\t\t\t\t\t\t\t\t<th colspan=\"2\" class=\"text-center\">Commercial</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<th (click)=\"sort('ResidentialNo')\" class=\"text-center\">No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ResidentialNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('ResidentialValue')\" class=\"text-center\">Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ResidentialValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('GovernmentNo')\" class=\"text-center\">No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='GovernmentNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('GovernmentValue')\" class=\"text-center\">Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='GovernmentValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('HospitalityNo')\" class=\"text-center\">No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='HospitalityNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('HospitalityValue')\" class=\"text-center\">Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='HospitalityValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('CommercialNo')\" class=\"text-center\">No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='CommercialNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t<th (click)=\"sort('CommercialValue')\" class=\"text-center\">Value &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='CommercialValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t<tr *ngFor=\"let item of segmentWiseReportModelList | orderBy: { key : reverse }\">\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.SrNo}}</td>\n\t\t\t\t\t\t\t\t<td *ngIf=\"item.Zone\" class=\"text-center\">{{item.Zone}}</td>\t\n\t\t\t\t\t\t\t\t<td *ngIf=\"item.EmployeeName\" class=\"text-center\">{{item.EmployeeName}}</td>\t\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.ResidentialNo}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.ResidentialValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.GovernmentNo}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.GovernmentValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.HospitalityNo}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.HospitalityValue }}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.CommercialNo}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.CommercialValue }}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"paginationModel.TotalRecords\" \n                                        (pageChange)=\"changePage($event)\" \n                                        [(page)]=\"paginationModel.CurrentPage\" \n                                        [maxSize]=\"paginationModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map