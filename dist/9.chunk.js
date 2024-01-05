webpackJsonp([9],{

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/component/user-perfromance-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_perfromance_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/service/user-perfromance-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_user_performance_report_model__ = __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/model/user-performance-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_model__ = __webpack_require__("../../../../../src/app/authentication/authentication.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPerfromanceReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserPerfromanceReportComponent = (function () {
    function UserPerfromanceReportComponent(router, _commonService, _currencyPipe, route, _authenticationService, titleService, reportService, toastr) {
        this.router = router;
        this._commonService = _commonService;
        this._currencyPipe = _currencyPipe;
        this.route = route;
        this._authenticationService = _authenticationService;
        this.titleService = titleService;
        this.reportService = reportService;
        this.toastr = toastr;
        this.loading = false;
        this.reverse = false;
        this.userList = new __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_model__["a" /* AuthenticationModel */]();
        this.brandList = [];
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_11__shared_model_pagination_model__["a" /* PaginationModel */]();
    }
    UserPerfromanceReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBrandList();
        this.route.queryParams.forEach(function (params) {
            _this.currentType = params['type'];
            _this.currentReport = 'User Perfromance Report: ' + _this.currentType;
            _this.titleService.setTitle(_this.currentReport);
            window.scrollTo(0, 0);
            _this.getFinancialYearList();
            _this.currentFinancialYear = '-1';
            _this.currentTypeUser = '-1';
            _this.userPerformanceReportModelList = new Array();
            if (_this.currentType) {
                _this.getUserPerfromanceUsersList();
            }
        });
    };
    UserPerfromanceReportComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UserPerfromanceReportComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            var fileName = "UserPerformanceReport.xlsx";
            this._authenticationService.exportFunction(fileName, this.userPerformanceReportModelList);
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    UserPerfromanceReportComponent.prototype.getUserPerfromanceReport = function () {
        var _this = this;
        if (this.currentType != '-1') {
            this.loading = true;
            this.reportService.getUserPerfromanceReport(this.currentType, this.currentFinancialYear, this.currentTypeUser).subscribe(function (result) {
                _this.loading = false;
                if (!result) {
                    _this.toastr.error('Something went wrong!!! Please try after sometime.');
                }
                else if (result.Error) {
                    _this.toastr.error(result.ErrorMessage);
                }
                else {
                    _this.toastr.success(result.SuccessMessage);
                    _this.userPerformanceReportModelList = [];
                    _this.userPerformanceReportModelList = new Array();
                    for (var i = 0; i < result.Data.length; i++) {
                        var _userPerformanceReportModel = new __WEBPACK_IMPORTED_MODULE_6__model_user_performance_report_model__["a" /* UserPerformanceReportModel */]();
                        _userPerformanceReportModel.Username = result.Username;
                        _userPerformanceReportModel.Month = result.Data[i].Month;
                        _userPerformanceReportModel.NewPipelineNo = result.Data[i].NewPipelineNo;
                        _userPerformanceReportModel.NewPipelineValue = _this._currencyPipe.transform(result.Data[i].NewPipelineValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.OpeningPipelineNo = result.Data[i].OpeningPipelineNo;
                        _userPerformanceReportModel.OpeningPipelineValue = _this._currencyPipe.transform(result.Data[i].OpeningPipelineValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.LostNo = result.Data[i].LostNo;
                        _userPerformanceReportModel.LostValue = _this._currencyPipe.transform(result.Data[i].LostValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.EnquiryNo = result.Data[i].EnquiryNo;
                        _userPerformanceReportModel.EnquiryValue = _this._currencyPipe.transform(result.Data[i].EnquiryValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.FromNewValue = _this._currencyPipe.transform(result.Data[i].FromNewValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.FromNewNo = result.Data[i].FromNewNo;
                        _userPerformanceReportModel.FromOldValue = _this._currencyPipe.transform(result.Data[i].FromOldValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.FromOldNo = result.Data[i].FromOldNo;
                        _userPerformanceReportModel.PipelineBankValue = _this._currencyPipe.transform(result.Data[i].PipelineBankValue, 'INR', false, '1.0-0');
                        _userPerformanceReportModel.CummBalanceValue = _this._currencyPipe.transform(result.Data[i].CummBalanceValue, 'INR', false, '1.0-0');
                        _this.userPerformanceReportModelList.push(_userPerformanceReportModel);
                    }
                }
            });
        }
    };
    UserPerfromanceReportComponent.prototype.getUserPerfromanceUsersList = function () {
        var _this = this;
        this.reportService.getUserPerformanceReportUserList(this.currentType).subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.userList = result.Data;
            }
        });
    };
    UserPerfromanceReportComponent.prototype.getFinancialYearList = function () {
        var _this = this;
        this.reportService.getFinancialYearList().subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.financialYearList = result.Data;
            }
        });
    };
    UserPerfromanceReportComponent.prototype.getBrandList = function () {
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
    return UserPerfromanceReportComponent;
}());
UserPerfromanceReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-performance-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/template/user-perfromance-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/styles/user-perfromance-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_user_perfromance_report_service__["a" /* UserPerfromanceReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"], __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_services_common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["CurrencyPipe"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_perfromance_report_service__["a" /* UserPerfromanceReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_perfromance_report_service__["a" /* UserPerfromanceReportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _h || Object])
], UserPerfromanceReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=user-perfromance-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/model/user-performance-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPerformanceReportModel; });
var UserPerformanceReportModel = (function () {
    function UserPerformanceReportModel() {
    }
    return UserPerformanceReportModel;
}());

//# sourceMappingURL=user-performance-report.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/service/user-perfromance-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPerfromanceReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPerfromanceReportService = (function () {
    function UserPerfromanceReportService(http) {
        this.http = http;
        this.getReportsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'UserPerformanceReport/fetchUserPerformanceData';
        this.getUserPerformanceReportUserListUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'UserPerformanceReport/getUserPerformanceReportUserList';
        this.getFinancialYearListUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'Commmonfunctions/getYearDetails';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    UserPerfromanceReportService.prototype.getUserPerfromanceReport = function (brandName, currentFinancialYear, currentUser) {
        var _this = this;
        var url = this.getReportsUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "BrandName": brandName },
            { "financialYear": currentFinancialYear },
            { "UserId": currentUser }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    UserPerfromanceReportService.prototype.getFinancialYearList = function () {
        var _this = this;
        var url = this.getFinancialYearListUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    UserPerfromanceReportService.prototype.getUserPerformanceReportUserList = function (brandName) {
        var _this = this;
        var url = this.getUserPerformanceReportUserListUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "BrandName": brandName }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    UserPerfromanceReportService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return UserPerfromanceReportService;
}());
UserPerfromanceReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserPerfromanceReportService);

var _a;
//# sourceMappingURL=user-perfromance-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/styles/user-perfromance-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/template/user-perfromance-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<app-page-header [heading]=\"currentReport\" [icon]=\"'fa-file-text-o'\"></app-page-header>\t\n\t<div class=\"row\" *ngIf=\"brandList && brandList.length > 0\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<a class=\"col-sm-2 btn bnt-link btn-border btn-sm\"\n\t\t\t\t\t\t*ngFor=\"let item of brandList\"\n\t\t\t\t\t\t[ngClass]=\"{'btn-info' : currentType == item}\"\n\t\t\t\t\t\trouterLink=\"/user-performance-report\"\n\t\t\t\t\t\t[routerLinkActive]=\"['router-link-active']\"\n\t\t\t\t\t\t[queryParams]=\"{ type: item }\">{{ item }}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" *ngIf=\"currentType\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-5\" *ngIf=\"userList && userList.length > 0\">\n\t\t\t\t\t\t\t<fieldset class=\"form-group\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<select class=\"form-control\" [(ngModel)]=\"currentTypeUser\"\n\t\t\t\t\t\t\t\t\tname=\"currentTypeUser\" id=\"currentTypeUser\">\n\t\t\t\t\t\t\t\t\t<option value=\"-1\">Select {{ currentType }} User</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of userList\" value=\"{{ item.Id }}\">{{ item.Name }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-5\" *ngIf=\"financialYearList &&  financialYearList.length > 0\">\n\t\t\t\t\t\t\t<fieldset class=\"form-group\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"currentFinancialYear\" \n\t\t\t\t\t\t\t\t\tid=\"currentFinancialYear\"  [(ngModel)]=\"currentFinancialYear\">\n\t\t\t\t\t\t\t\t\t<option value=\"-1\">Select {{ currentType }} Financial Year</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of financialYearList\" value=\"{{ item.Year }}\">{{ item.DisplayYear  }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-2\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<button *ngIf=\"currentTypeUser != '-1' && currentFinancialYear != '-1' \"\n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-md\" \n\t\t\t\t\t\t\t\t(click)=\"getUserPerfromanceReport();\">Get Report</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<h5>User Performance Report : {{ userPerformanceReportModelList[0]?.Username }}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('excel')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">EXCEL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('pdf')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">PDF</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"table-responsive\" style=\"background-color: #FFF;\">\n\t\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" class=\"text-center\">Month &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Month'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"2\" colspan=\"2\" rowspan=\"2\" class=\"text-center\">Opening\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tPipeline</th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"2\" colspan=\"2\" class=\"text-center\">New <br>\n\t\t\t\t\t\t\t\t\t\tPipeline</th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"2\" colspan=\"2\" class=\"text-center\">From Enquiry</th>\n\t\t\t\t\t\t\t\t\t<th colspan=\"4\" class=\"text-center\">Conversion</th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"2\" colspan=\"2\" class=\"text-center\">Lost</th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" class=\"text-center\">Cumm.<br>\n\t\t\t\t\t\t\t\t\t\tBalance &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PipelineBankValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th rowspan=\"3\" class=\"text-center\">Pipeline\n\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\tBank &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='CummBalanceValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\">From New</th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\" colspan=\"2\">From Old</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='OpeningPipelineNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='OpeningPipelineValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='NewPipelineNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='NewPipelineValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EnquiryNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EnquiryValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='FromNewNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='FromNewValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='FromOldNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='FromOldValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='LostNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Value&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='LostValue'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\t\t\t\t\t\t\t\t    \n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of userPerformanceReportModelList \">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.Month}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.OpeningPipelineNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.OpeningPipelineValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.NewPipelineNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.NewPipelineValue}}</td>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.EnquiryNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.EnquiryValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.FromNewNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.FromNewValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.FromOldNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.FromOldValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.LostNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.LostValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.PipelineBankValue}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-right\">{{item.CummBalanceValue}}</td>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/user-perfromance-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_user_perfromance_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/component/user-perfromance-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPerfromanceReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_user_perfromance_report_component__["a" /* UserPerfromanceReportComponent */] }
];
var UserPerfromanceReportRoutingModule = (function () {
    function UserPerfromanceReportRoutingModule() {
    }
    return UserPerfromanceReportRoutingModule;
}());
UserPerfromanceReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UserPerfromanceReportRoutingModule);

//# sourceMappingURL=user-perfromance-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-perfromance-report/user-perfromance-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_perfromance_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/user-perfromance-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_user_perfromance_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/user-perfromance-report/component/user-perfromance-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPerfromanceReportModule", function() { return UserPerfromanceReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserPerfromanceReportModule = (function () {
    function UserPerfromanceReportModule() {
    }
    return UserPerfromanceReportModule;
}());
UserPerfromanceReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__user_perfromance_report_routing_module__["a" /* UserPerfromanceReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_user_perfromance_report_component__["a" /* UserPerfromanceReportComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]
        ]
    })
], UserPerfromanceReportModule);

//# sourceMappingURL=user-perfromance-report.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map