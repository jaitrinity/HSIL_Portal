webpackJsonp([5],{

/***/ "../../../../../src/app/layout/reports/visits/component/visits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_visits_service__ = __webpack_require__("../../../../../src/app/layout/reports/visits/service/visits.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_visits_summery_model__ = __webpack_require__("../../../../../src/app/layout/reports/visits/model/visits-summery.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_visits_model__ = __webpack_require__("../../../../../src/app/layout/reports/visits/model/visits.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var VisitsComponent = (function () {
    function VisitsComponent(router, _datePipe, route, modalService, titleService, _visitsService, _commonService, _authenticationService, toastr) {
        this.router = router;
        this._datePipe = _datePipe;
        this.route = route;
        this.modalService = modalService;
        this.titleService = titleService;
        this._visitsService = _visitsService;
        this._commonService = _commonService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.loading = false;
        this.reverse = false;
        this.visitsMonths = [];
        this.isShowFilters = false;
        this.isExcel = false;
        this.errorImage = 'https://kwspecialties.on.ca/wp-content/uploads/2014/07/no-image.png';
        this.myDatePickerOptions = {
            dateFormat: 'yyyy/mm/dd',
        };
        this.dt = new Date();
        // Initialized to specific date (09.10.2018).
        this.model = { date: { year: this.dt.getFullYear(), month: (this.dt.getMonth() + 1), day: this.dt.getDate() } };
        this.isShowVisitSummery = false;
        this.visitsSummeryModel = new __WEBPACK_IMPORTED_MODULE_6__model_visits_summery_model__["a" /* VisitsSummeryModel */]();
        this.visitsModelList = new Array();
        this.searchVisitsReport = '';
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_10__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.currentMonth = 'All';
        this.importance = 'All';
    }
    VisitsComponent.prototype.onDateFromChanged = function (event) {
        this.visitReportFromDate = event.formatted;
    };
    VisitsComponent.prototype.onDateEndChanged = function (event) {
        this.visitReportToDate = event.formatted;
    };
    VisitsComponent.prototype.ngOnInit = function () {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        this.getMonthsList();
        this.titleService.setTitle('Visits');
        this.resetPagination();
    };
    VisitsComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    VisitsComponent.prototype.updateCurrentImage = function (currentImage) {
        this.currentImageUrl = currentImage ? currentImage : this.errorImage;
    };
    VisitsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    VisitsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["f" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["f" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    VisitsComponent.prototype.getDataBySearch = function () {
        this.paginationModel.TotalRecords = 100;
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.getVisitsDetails();
    };
    VisitsComponent.prototype.resetPagination = function () {
        this.searchVisitsReport = '';
        this.paginationModel.TotalRecords = 100;
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.getVisitsDetails();
    };
    VisitsComponent.prototype.callMethod = function (type) {
        if (type == 'excel') {
            this.isExcel = true;
            this.getVisitsDetails();
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    VisitsComponent.prototype.changePage = function (event) {
        this.paginationModel.CurrentPage = event;
        this.getVisitsDetails();
    };
    VisitsComponent.prototype.getMonthsList = function () {
        var _this = this;
        this._commonService.getMonthsList().subscribe(function (result) {
            if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.visitsMonths = result.data;
            }
        });
    };
    VisitsComponent.prototype.getVisitsDetails = function () {
        var _this = this;
        this.loading = true;
        this.visitReportFromDate = this.visitReportFromDate ? this.visitReportFromDate : '';
        this.visitReportToDate = this.visitReportToDate ? this.visitReportToDate : '';
        this._visitsService.getVisitsDetails(this.visitReportFromDate, this.visitReportToDate, this.isExcel, this.searchVisitsReport, this.paginationModel, this.currentMonth, this.importance).subscribe(function (result) {
            if (!_this.isExcel) {
                _this.visitsModelList = [];
                _this.visitsModelList = new Array();
                _this.visitsSummeryModel = null;
                _this.visitsSummeryModel = new __WEBPACK_IMPORTED_MODULE_6__model_visits_summery_model__["a" /* VisitsSummeryModel */]();
            }
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.toastr.success(result.SuccessMessage);
                _this.paginationModel.TotalRecords = result.TotalRecords;
                var visitsModelList = [];
                for (var i = 0; i < result.Data.length; i++) {
                    var _visitsModel = new __WEBPACK_IMPORTED_MODULE_7__model_visits_model__["a" /* VisitsModel */]();
                    _this.srNo = ((_this.paginationModel.CurrentPage - 1) * _this.paginationModel.PerPage);
                    _visitsModel.EmpCode = result.Data[i].EmpCode;
                    _visitsModel.User = result.Data[i].User;
                    _visitsModel.TerritoryCode = result.Data[i].TERRITORY_CODE;
                    _visitsModel.DealerClassification = result.Data[i].DealerClassification;
                    _visitsModel.VisitType = result.Data[i].VisitType;
                    _visitsModel.AccountType = result.Data[i].AccountType;
                    _visitsModel.FirmName = result.Data[i].FIRM_NAME;
                    _visitsModel.Address = result.Data[i].Address;
                    _visitsModel.MetWhom = result.Data[i].MetWhom;
                    _visitsModel.Importance = result.Data[i].Importance;
                    _visitsModel.Objective = result.Data[i].Objective;
                    _visitsModel.PlanDate = _this._datePipe.transform(result.Data[i].PlanDate, 'mediumDate');
                    _visitsModel.Remarks = result.Data[i].Remarks;
                    _visitsModel.Image = result.Data[i].IMAGE ? result.Data[i].IMAGE : _this.errorImage;
                    if (result.Data[i].VisitDate != '' && result.Data[i].VisitDate != undefined && result.Data[i].VisitDate != null) {
                        _visitsModel.VisitDate = _this._datePipe.transform(result.Data[i].VisitDate, 'medium');
                    }
                    else {
                        _visitsModel.VisitDate = result.Data[i].VisitDate;
                    }
                    _visitsModel.WithRm = (result.Data[i].WithRm == 1 || result.Data[i].WithRm == 'Y') ? 'Yes' : 'No';
                    _this.isExcel ? visitsModelList.push(_visitsModel) : _this.visitsModelList.push(_visitsModel);
                }
                _this.visitsSummeryModel = result.Summery;
                if (_this.isExcel) {
                    _this._authenticationService.exportFunction("VisitReport.xlsx", visitsModelList);
                }
            }
            _this.loading = false;
            _this.isExcel = false;
        });
    };
    return VisitsComponent;
}());
VisitsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-visits',
        template: __webpack_require__("../../../../../src/app/layout/reports/visits/template/visits.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/visits/styles/visits.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_visits_service__["a" /* VisitsService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_11__shared_services_common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["DatePipe"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_visits_service__["a" /* VisitsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_visits_service__["a" /* VisitsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_common_service__["a" /* CommonService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _j || Object])
], VisitsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=visits.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/model/visits-summery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsSummeryModel; });
var VisitsSummeryModel = (function () {
    function VisitsSummeryModel() {
    }
    return VisitsSummeryModel;
}());

//# sourceMappingURL=visits-summery.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/model/visits.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsModel; });
var VisitsModel = (function () {
    function VisitsModel() {
    }
    return VisitsModel;
}());

//# sourceMappingURL=visits.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/service/visits.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitsService = (function () {
    function VisitsService(http) {
        this.http = http;
        this.getVisitsDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'VisitReport/fetchVisitReport';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    VisitsService.prototype.getVisitsDetails = function (fromDate, toDate, isExcel, searchVisitsReport, _paginationModel, currentMonth, importance) {
        var _this = this;
        var url = this.getVisitsDetailsUrl;
        var selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage },
            { "selectedUserID": selectedUser },
            { "currentMonth": currentMonth },
            { "SearchText": searchVisitsReport },
            { "fromDate": fromDate },
            { "toDate": toDate },
            { "excel": isExcel },
            { "selectedUser": selectedUser },
            { "importance": importance }];
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    VisitsService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return VisitsService;
}());
VisitsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], VisitsService);

var _a;
//# sourceMappingURL=visits.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/styles/visits.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n\n.image-center {\n  margin: 0 auto;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/template/visits.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <app-page-header [heading]=\"'Visit'\" [icon]=\"'fa-users'\"></app-page-header>\n        <div class=\"row\">\n            <div class=\"col col-sm-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <h4 class=\"pull-left\">Filters</h4>\n                            </div>\n                            <div class=\"col-sm-2 pull-right\" *ngIf=\"!isShowFilters\">\n                                <button (click)=\"isShowFilters = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                            </div>\n                            <div class=\"col-sm-2 pull-right\" *ngIf=\"isShowFilters\">\n                                <button (click)=\"isShowFilters = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                            </div>                                                                                                            \n                        </div>\n                        <div class=\"row\" *ngIf=\"isShowFilters\">\n                            <div class=\"col-sm-1 text-right\">\n                                <h6>From Date</h6>\n                            </div>\n                            <div class=\"col-sm-2\">\n                                    <my-date-picker name=\"mydate\" placeholder=\"yyyy/mm/dd\" [options]=\"myDatePickerOptions\"\n                                    (dateChanged)=\"onDateFromChanged($event)\"></my-date-picker>\n                                <!-- <owl-date-time [(ngModel)]=\"visitReportFromDate\" \n                                [type]=\"'calendar'\"\n                                [dataType]=\"'date'\"                                \n                                [autoClose]=\"true\"\n                                [dateFormat]=\"'YYYY/MM/DD'\"\n                                [placeHolder]=\"'YYYY/MM/DD'\"\n                                [hourFormat]=\"'12'\"\n                                [selectionMode]=\"'single'\"\n                                name=\"visitReportFromDate\"\n                                [locale]=\"en\"></owl-date-time>   -->                                              \n                            </div>\n                            <div class=\"col-sm-1 text-right\">\n                                <h6>To Date</h6>\n                            </div>\n                            <div class=\"col-sm-2\">\n                                    <my-date-picker name=\"mydate\" placeholder=\"yyyy/mm/dd\" [options]=\"myDatePickerOptions\"\n                                    (dateChanged)=\"onDateEndChanged($event)\"></my-date-picker>\n                                <!-- <owl-date-time [(ngModel)]=\"visitReportToDate\" \n                                [type]=\"'calendar'\"\n                                [dataType]=\"'date'\"\n                                [autoClose]=\"true\"\n                                [dateFormat]=\"'YYYY/MM/DD'\"\n                                [placeHolder]=\"'YYYY/MM/DD'\"\n                                [hourFormat]=\"'12'\"                                \n                                [selectionMode]=\"'single'\"\n                                name=\"visitReportToDate\" \n                                [locale]=\"en\"></owl-date-time>   -->                                              \n                            </div>\n                            <div class=\"col-sm-2\">\n                                <select class=\"form-control\" name=\"importance\"\n                                    id=\"importance\" [(ngModel)]=\"importance\"\n                                    (change)=\"resetPagination()\">\n                                    <option value=\"All\">All</option>                                            \n                                    <option value=\"Priority\">Priority</option>\n                                    <option value=\"Key Account\">Key Account</option>\n                                    <option value=\"Other Account\">Other Account</option>\n                                </select>\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\"\n                                    (click)=\"resetPagination()\"\n                                    class=\"btn btn-sm btn-info\">Get Report</button>\n                            </div>                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>   \n        <div class=\"row\" *ngIf=\"true==false\">\n                <div class=\"col col-sm-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-block\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <select class=\"form-control\" name=\"currentMonth\"\n                                        id=\"currentMonth\" [(ngModel)]=\"currentMonth\"\n                                        (change)=\"resetPagination()\">\n                                        <option value=\"All\">Current Financial Year</option>\n                                        <option *ngFor=\"let item of visitsMonths\" value=\"{{ item }}\">{{ item }}</option>\n                                    </select>\n                                </div>                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </div>               \n        <div class=\"row\" >\n                <div class=\"col col-sm-12\">\n                    <div class=\"card mb-3\">\n                        <div class=\"card-block\">                            \n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <h4 class=\"pull-left\">Visit Summary</h4>\n                                </div>\n                                <div class=\"col-sm-2 pull-right\" *ngIf=\"!isShowVisitSummery\" >\n                                    <button (click)=\"isShowVisitSummery = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                                </div>\n                                <div class=\"col-sm-2 pull-right\" *ngIf=\"isShowVisitSummery\" >\n                                    <button (click)=\"isShowVisitSummery = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                                </div>                                                                                                            \n                            </div>\n                                <div class=\"table-responsive\" *ngIf=\"isShowVisitSummery\" >\n                                    <br>\n                                    <table class=\"table table-bordered\">                                        \n                                        <thead>\n                                            <tr>\n                                                <th></th>\n                                                <th class=\"text-center\">Today</th>\n                                                <th class=\"text-center\">Last Month</th>\n                                                <th class=\"text-center\">MTD</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <th class=\"text-center\">Visits</th>\n                                                <td class=\"text-center\">{{ visitsSummeryModel.Today }} </td>\n                                                <td class=\"text-center\">{{ visitsSummeryModel.LastMonth }} </td>\n                                                <td class=\"text-center\">{{ visitsSummeryModel.MTD }} </td>                                 \n                                            </tr>\n                                        </tbody>\n                                    </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>    \n        <div class=\"row\" >\n            <div class=\"col col-sm-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <h4>Visit Details</h4>\n                            </div>                            \n                            <div class=\"col-sm-3\">\n                                <input type=\"text\" id=\"searchVisitsReport\" name=\"searchVisitsReport\" \n                                    class=\"form-control\"\n                                    placeholder=\"Search...\" [(ngModel)]=\"searchVisitsReport\">\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" \n                                    class=\"btn btn-info btn-sm\" \n                                    (click)=\"getDataBySearch()\">Search</button>\n                            </div>\n                            <div class=\"col-sm-1\">\n                                <button (click)=\"callMethod('excel')\" \n                                    class=\"btn btn-info btn-sm\">EXCEL</button>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"true == false\">\n                                No of Records:\n                                <select class=\"form-control\" name=\"paginationModelCurrentPerPage\"                                    \n                                    id=\"paginationModelCurrentPerPage\"                                     \n                                    [(ngModel)]=\"paginationModel.PerPage\"\n                                    (change)=\"getVisitsDetails()\">\n                                    <option value=\"5\">5</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"50\">50</option>\n                                    <option value=\"100\">100</option>\n                                </select>\n                            </div>\n                            <div class=\"col-sm-1\" *ngIf=\"true==false\">\n                                <button (click)=\"callMethod('pdf')\" \n                                    class=\"btn btn-info btn-sm\">PDF</button>\n                            </div>\n                        </div>\n                        <div class=\"table-responsive\" \n                            style=\"background-color: #FFF;\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th (click)=\"sort('SrNo')\" class=\"text-center\"> Sr No&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='SrNo'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('EmpCode')\" class=\"text-center\"> EmpCode&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='EmpCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('User')\" class=\"text-center\"> User&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='User'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('TerritoryCode')\" class=\"text-center\"> Territory<br>Code&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='TerritoryCode'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('DealerClassification')\" class=\"text-center\"> Dealer<br>Classification&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='DealerClassification'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('AccountType')\" class=\"text-center\"> Account<br>Type&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='AccountType'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('Importance')\" class=\"text-center\"> Importance &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Importance'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>                                        \n                                        <th (click)=\"sort('FirmName')\" class=\"text-center\"> Firm Name&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='FirmName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('VisitType')\" class=\"text-center\"> Visit Type&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='VisitType'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('MetWhom')\" class=\"text-center\"> Met Whom&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='MetWhom'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('Objective')\" class=\"text-center\"> Objective&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Objective'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('PlanDate')\" class=\"text-center\"> Plan Date&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='PlanDate'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('VisitDate')\" class=\"text-center\"> Visit Date&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='VisitDate'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('Remarks')\" class=\"text-center\"> Remarks&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Remarks'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <!-- <th (click)=\"sort('Address')\" class=\"text-center\"> Address&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Address'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th> -->\n                                        <th (click)=\"sort('WithRm')\" class=\"text-center\"> With Rm&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='WithRm'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                        <th (click)=\"sort('Image')\" class=\"text-center\"> Image&nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='WithRm'\" ></span></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let item of visitsModelList;let idx = index;\">\n                                        <td class=\"text-center\">\n                                            {{ srNo + idx + 1 }}\n                                        </td>\n                                        <td class=\"text-center\">{{item.EmpCode}}</td>\n                                        <td class=\"text-center\">{{item.User}}</td>\n                                        \n                                        <td class=\"text-center\">{{item.TerritoryCode}}</td>\n                                        <td class=\"text-center\">{{item.DealerClassification}}</td>\n                                        <td class=\"text-center\">{{item.AccountType}}</td>\n                                        <td class=\"text-center\">{{item.Importance}}</td>                                        \n                                        <td class=\"text-center\">{{item.FirmName}}</td>\t\t\t\t\t\t\t\t\t\n                                        <td class=\"text-center\">{{item.VisitType}}</td>\n                                        <td class=\"text-center\">{{item.MetWhom}}</td>\n                                        <td class=\"text-center\">{{item.Objective}}</td>\n                                        <td class=\"text-left\">{{item.PlanDate}}</td>\n                                        <td class=\"text-left\">{{item.VisitDate}}</td>\t\t\t\t\t\t\t\t\t\n                                        <td class=\"text-center\">{{item.Remarks}}</td>\t\n                                        <!-- <td class=\"text-center\">{{item.Address}}</td>\t -->\n                                        <td class=\"text-center\">{{item.WithRm}}</td>\t\n                                        <td class=\"text-center\">\n                                            <a (click)=\"updateCurrentImage(item.Image);open(content)\">\n                                                <img src=\"{{ item.Image || errorImage }}\" width=\"100\" >\n                                            </a>                                            \n                                        </td>\n                                    </tr>\n                                </tbody>                                \n                            </table>                            \n                            <ngb-pagination [(collectionSize)]=\"paginationModel.TotalRecords\" \n                                        (pageChange)=\"changePage($event)\" \n                                        [(page)]=\"paginationModel.CurrentPage\" \n                                        [(maxSize)]=\"paginationModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n                        </div>    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\t\t\n        <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Image Preview</h4>\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">        \n                <img class=\"text-center\" class=\"image-center\" src=\"{{ currentImageUrl }}\">\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n            </div>\t\t\n    </ng-template>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>    "

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/visits-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_visits_component__ = __webpack_require__("../../../../../src/app/layout/reports/visits/component/visits.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_visits_component__["a" /* VisitsComponent */] }
];
var VisitsRoutingModule = (function () {
    function VisitsRoutingModule() {
    }
    return VisitsRoutingModule;
}());
VisitsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], VisitsRoutingModule);

//# sourceMappingURL=visits-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/visits/visits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visits_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/visits/visits-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_visits_component__ = __webpack_require__("../../../../../src/app/layout/reports/visits/component/visits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsModule", function() { return VisitsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var VisitsModule = (function () {
    function VisitsModule() {
    }
    return VisitsModule;
}());
VisitsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__visits_routing_module__["a" /* VisitsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_mydatepicker__["MyDatePickerModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_visits_component__["a" /* VisitsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]]
    })
], VisitsModule);

//# sourceMappingURL=visits.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map