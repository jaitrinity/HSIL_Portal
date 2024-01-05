webpackJsonp([3],{

/***/ "../../../../../src/app/layout/reports/user-report/component/user-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/service/user-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_user_data_model__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/model/user-data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_user_summery_model__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/model/user-summery.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_role_wise_count_model__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/model/role-wise-count.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserReportComponent = (function () {
    function UserReportComponent(router, route, titleService, _userReportService, _authenticationService, toastr, vcr) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this._userReportService = _userReportService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loading = false;
        this.reverse = false;
        this.showUserSummary = false;
        this.userDataModelList = new Array();
        this.userSummeryModel = new __WEBPACK_IMPORTED_MODULE_7__model_user_summery_model__["a" /* UserSummeryModel */]();
        this.userSummeryModel.RoleWiseCountModelList = new Array();
        this.reportTypeList = ["Inactive", "Active"];
        this.noOfDays = 7;
        this.searchUserReportReport = '';
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__["a" /* PaginationModel */]();
    }
    UserReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.currentReportType = params['type'];
            window.scrollTo(0, 0);
            _this.currentReportName = (_this.currentReportType ? _this.currentReportType : '') + ' User Report';
            _this.titleService.setTitle(_this.currentReportName);
            _this.paginationModel.TotalRecords = 100;
            _this.paginationModel.CurrentPage = 1;
            _this.paginationModel.PerPage = 10;
            if (_this.currentReportType) {
                _this.getUserDetails();
            }
        });
    };
    UserReportComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            var fileName = "SegmentWiseReport.xlsx";
            this._authenticationService.exportFunction(fileName, this.userDataModelList);
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    UserReportComponent.prototype.changeReportType = function (currentReportType) {
        this.router.navigateByUrl('/user-report?type=' + currentReportType);
    };
    UserReportComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UserReportComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.loading = true;
        this._userReportService.getUserDetails(this.paginationModel, this.currentReportType, this.noOfDays).subscribe(function (result) {
            _this.userDataModelList = [];
            _this.userDataModelList = new Array();
            _this.loading = false;
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
                    var userDataModel = new __WEBPACK_IMPORTED_MODULE_6__model_user_data_model__["a" /* UserDataModel */]();
                    userDataModel.Name = result.Data[i].Name ? result.Data[i].Name : 'N/A';
                    userDataModel.Region = result.Data[i].Region ? result.Data[i].Region : 'N/A';
                    userDataModel.ResignationDate = result.Data[i].ResignationDate ? result.Data[i].ResignationDate : 'N/A';
                    userDataModel.ResignationRemarks = result.Data[i].ResignationRemarks ? result.Data[i].ResignationRemarks : 'N/A';
                    userDataModel.RmName = result.Data[i].RMName ? result.Data[i].RMName : 'N/A';
                    userDataModel.Role = result.Data[i].Role ? result.Data[i].Role : 'N/A';
                    userDataModel.SrNo = result.Data[i].SrNo ? result.Data[i].SrNo : 'N/A';
                    _this.userDataModelList.push(userDataModel);
                }
                var userSummeryModel = new __WEBPACK_IMPORTED_MODULE_7__model_user_summery_model__["a" /* UserSummeryModel */]();
                userSummeryModel.RoleWiseCountModelList = new Array();
                userSummeryModel.TotalCount = result.RoleWiseCountModelList.TotalCount ? result.RoleWiseCountModelList.TotalCount : 'N/A';
                for (var i = 0; i < result.RoleWiseCountModelList.Data.length; i++) {
                    var roleWiseCountModel = new __WEBPACK_IMPORTED_MODULE_8__model_role_wise_count_model__["a" /* RoleWiseCountModel */]();
                    roleWiseCountModel.InActiveCount = result.RoleWiseCountModelList.Data[i].RoleCount ? result.RoleWiseCountModelList.Data[i].RoleCount : 'N/A';
                    roleWiseCountModel.Role = result.RoleWiseCountModelList.Data[i].Role ? result.RoleWiseCountModelList.Data[i].Role : 'N/A';
                    userSummeryModel.RoleWiseCountModelList.push(roleWiseCountModel);
                }
                _this.userSummeryModel = userSummeryModel;
            }
        });
    };
    return UserReportComponent;
}());
UserReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/user-report/template/user-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/user-report/styles/user-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_user_report_service__["a" /* UserReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__["a" /* AuthenticationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_report_service__["a" /* UserReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_report_service__["a" /* UserReportService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], UserReportComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=user-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/model/role-wise-count.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleWiseCountModel; });
var RoleWiseCountModel = (function () {
    function RoleWiseCountModel() {
    }
    return RoleWiseCountModel;
}());

//# sourceMappingURL=role-wise-count.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/model/user-data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataModel; });
var UserDataModel = (function () {
    function UserDataModel() {
    }
    return UserDataModel;
}());

//# sourceMappingURL=user-data.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/model/user-summery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSummeryModel; });
var UserSummeryModel = (function () {
    function UserSummeryModel() {
    }
    return UserSummeryModel;
}());

//# sourceMappingURL=user-summery.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/service/user-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserReportService = (function () {
    function UserReportService(http) {
        this.http = http;
        this.getUserDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'UserReport/fetchUserDataReport';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    UserReportService.prototype.getUserDetails = function (paginationModel, reportType, noOfDays) {
        var _this = this;
        var url = this.getUserDetailsUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "ReportType": reportType },
            { "NoOfDays": noOfDays },
            { "CurrentPage": paginationModel.CurrentPage },
            { "PerPage": paginationModel.PerPage }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    UserReportService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return UserReportService;
}());
UserReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserReportService);

var _a;
//# sourceMappingURL=user-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/styles/user-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/template/user-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n\t<app-page-header [heading]=\"currentReportName\"\n\t\t[icon]=\"'fa-file-text-o'\"></app-page-header>\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<a class=\"col-sm-2 btn bnt-link btn-border btn-sm\" \t\t\t\t\t\t\n\t\t\t\t\t\t\t*ngFor=\"let item of reportTypeList\"\n\t\t\t\t\t\t\t[ngClass]=\"{'btn-info' : currentReportType == item }\"\n\t\t\t\t\t\t\t(click)=\"changeReportType(item)\">{{ item }}</a>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t<h5>{{ currentReportName }} Summary </h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<a *ngIf=\"!showUserSummary\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-link btn-sm pull-right btn-border\" \n\t\t\t\t\t\t\t\t(click)=\"showUserSummary = true\"><i class=\"fa fa-plus\"></i></a> \n\t\t\t\t\t\t\t<a *ngIf=\"showUserSummary\" class=\"btn btn-link btn-sm btn-border pull-right\"\n\t\t\t\t\t\t\t\t(click)=\"showUserSummary = false\"><i\n\t\t\t\t\t\t\t\tclass=\"fa fa-minus\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"table-responsive\" *ngIf=\"showUserSummary\">\n\t\t\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Role</th>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">{{ currentReportType }} Count</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of userSummeryModel.RoleWiseCountModelList\">\n\t\t\t\t\t\t\t\t\t\t<td>{{ item.Role }}</td>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ item.InActiveCount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th class=\"text-center\">Total</th>\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ userSummeryModel.TotalCount }}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n\t<div class=\"row\">\n\t\t<div class=\"col col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-5\"><h5>{{ currentReportName }} User Report</h5></div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<input type=\"text\" id=\"searchUserReportReport\" \n\t\t\t\t\t\t\tname=\"searchUserReportReport\" placeholder=\"Search...\"\n\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"searchUserReportReport\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<input type=\"number\" (change)=\"getUserDetails();\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"noOfDays\" placeholder=\"Enter No of Days.\"\n\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('excel')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">EXCEL</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t<button (click)=\"callMethod('pdf')\" \n\t\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\">PDF</button>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th (click)=\"sort('SrNo')\" class=\"text-center\">Sr No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='SrNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th (click)=\"sort('Name')\" class=\"text-center\">Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Name'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th (click)=\"sort('Role')\" class=\"text-center\">Role &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Role'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th (click)=\"sort('Region')\" class=\"text-center\">Region &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Region'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th (click)=\"sort('RmName')\" class=\"text-center\">Rm Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='RmName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"currentReportType == 'Inactive'\" (click)=\"sort('ResignationRemarks')\"\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\">Resignation<br>Remarks &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ResignationRemarks'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t\t<th *ngIf=\"currentReportType == 'Inactive'\" (click)=\"sort('ResignationDate')\"\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\">Resignation<br>Date &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ResignationDate'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of userDataModelList | orderBy: { key : reverse }\">\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.SrNo}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.Name}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.Role}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.Region}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{item.RmName}}</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"currentReportType == 'Inactive'\"\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\">{{item.ResignationRemarks}}</td>\n\t\t\t\t\t\t\t\t\t<td *ngIf=\"currentReportType == 'Inactive'\"\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\">{{item.ResignationDate}}</td>\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<ngb-pagination [collectionSize]=\"paginationModel.TotalRecords\" \n                                        (pageChange)=\"changePage($event)\" \n                                        [(page)]=\"paginationModel.CurrentPage\" \n                                        [maxSize]=\"paginationModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/user-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_user_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/component/user-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_user_report_component__["a" /* UserReportComponent */] }
];
var UserReportRoutingModule = (function () {
    function UserReportRoutingModule() {
    }
    return UserReportRoutingModule;
}());
UserReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UserReportRoutingModule);

//# sourceMappingURL=user-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/user-report/user-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/user-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_user_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/user-report/component/user-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportModule", function() { return UserReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserReportModule = (function () {
    function UserReportModule() {
    }
    return UserReportModule;
}());
UserReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__user_report_routing_module__["a" /* UserReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__component_user_report_component__["a" /* UserReportComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]
        ]
    })
], UserReportModule);

//# sourceMappingURL=user-report.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map