webpackJsonp([15],{

/***/ "../../../../../src/app/layout/reports/review-format-report/components/review-format-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_review_format_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/service/review-format-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_review_format_weekwise_report_model__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/model/review-format-weekwise-report.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormatReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReviewFormatReportComponent = (function () {
    function ReviewFormatReportComponent(titleService, _commonService, _authenticationService, toastr, decimalPipe, route, reviewFormatReportService, vcr) {
        this.titleService = titleService;
        this._commonService = _commonService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.decimalPipe = decimalPipe;
        this.route = route;
        this.reviewFormatReportService = reviewFormatReportService;
        this.vcr = vcr;
        this.showFilters = false;
        this.showReviewFormatReport = true;
        this.showCurrentWeek = false;
        this.showLastWeek = false;
        this.reviewReportSrNo = 0;
        this.currentWeekSrNo = 1;
        this.lastWeekSrNo = 1;
        this.importance = 'All';
        this.reviewFormatReportModelList = new Array();
        this.reviewFormatWeekwiseReportModelCurrentWeekList = new Array();
        this.reviewFormatWeekwiseReportModelLastWeekList = new Array();
        this.excel = false;
        this.isPDF = false;
        this.isLoading = false;
        this.paginationModelCurrentPerPage = 10;
        this.paginationModelLastPerPage = 10;
        this.segmentTypeList = [];
        this.brandsList = [];
        this.brands = 'All';
        this.segment = 'All';
        this.visitsMonths = [];
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.d = new Date();
        this.currentMonthName = this.monthNames[this.d.getMonth()];
        this.lastMonthName = this.monthNames[((this.d.getMonth() - 1) == -1) ? 11 : (this.d.getMonth() - 1)];
        this.paginationModel = new __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.paginationModel.TotalRecords = 0;
    }
    ReviewFormatReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            _this.currentReport = params['type'];
            window.scrollTo(0, 0);
            _this.currentReport = _this.currentReport ? _this.currentReport : '';
            _this.titleService.setTitle("Review Format Report:" + _this.currentReport);
            _this.showCurrentWeek = false;
            _this.showLastWeek = false;
        });
        this.resetCurrentWeekReportPagination();
        this.resetLastWeekReportPagination();
        this.getMonthsList();
        if (this.showReviewFormatReport) {
            this.getReviewFormatReport();
        }
        this.getSegmentDetails();
        this.getBrandsDetails();
    };
    ReviewFormatReportComponent.prototype.callMethod = function (reviewFormatWeekList) {
        var fileName = '';
        if (this.excel) {
            fileName = (this.weekType == 1 || this.weekType == 3) ? "ReviewFormatCurrent" + this.currentReport + "Report.xlsx" : "ReviewFormatLast" + this.currentReport + "Report.xlsx";
            this._authenticationService.exportFunction(fileName, reviewFormatWeekList);
            this.excel = false;
        }
        else if (this.isPDF) {
            this.toastr.info("Functionaity In Progress");
            this.isPDF = false;
        }
    };
    ReviewFormatReportComponent.prototype.getMonthsList = function () {
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
    ReviewFormatReportComponent.prototype.getBrandsDetails = function () {
        var _this = this;
        this._commonService.getBrandList().subscribe(function (result) {
            if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.brandsList = result.Data;
            }
        });
    };
    ReviewFormatReportComponent.prototype.getSegmentDetails = function () {
        var _this = this;
        this.reviewFormatReportService.getSegmentDetails().subscribe(function (result) {
            if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.segmentTypeList = result.Data;
            }
        });
    };
    ReviewFormatReportComponent.prototype.getExcelPDF = function (weekType) {
        this.excel = true;
        if (weekType == 1) {
            if (this.currentReport == 'Month') {
                this.weekType = 3;
            }
            else {
                this.weekType = 1;
            }
        }
        else if (weekType == 0) {
            if (this.currentReport == 'Month') {
                this.weekType = 2;
            }
            else {
                this.weekType = 0;
            }
        }
        this.getReviewFormatWeekwiseReport();
    };
    ReviewFormatReportComponent.prototype.getReviewFormatReport = function () {
        var _this = this;
        this.isLoading = true;
        this.reviewFormatReportService.getReviewFormatReportDetails(this.currentMonth, this.paginationModel).subscribe(function (result) {
            if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
                _this.isLoading = false;
            }
            else {
                _this.toastr.success(result.SuccessMessage);
                _this.reviewFormatReportModelList = [];
                for (var i = 0; i < result.Data.length; i++) {
                    _this.reviewFormatReportModelList.push(result.Data[i]);
                }
                _this.paginationModel.TotalRecords = result.Data.TotalRecords;
                _this.isLoading = false;
            }
        });
    };
    ReviewFormatReportComponent.prototype.getCurrentWeekReport = function (event) {
        this.weekType = this.currentReport == 'Month' ? 3 : 1;
        this.excel = false;
        this.paginationModelCurrentWeek.CurrentPage = event;
        this.getReviewFormatWeekwiseReport();
    };
    ReviewFormatReportComponent.prototype.getLastWeekReport = function (event) {
        this.weekType = this.currentReport == 'Week' ? 0 : 2;
        this.excel = false;
        this.paginationModelLastWeek.CurrentPage = event;
        this.getReviewFormatWeekwiseReport();
    };
    ReviewFormatReportComponent.prototype.getWeekWiseReport = function (isCurrent) {
        if (isCurrent == 1 && this.currentReport == 'Month') {
            this.weekType = 3;
        }
        else if (isCurrent == 1 && this.currentReport == 'Week') {
            this.weekType = 1;
        }
        else if (isCurrent == 0 && this.currentReport == 'Month') {
            this.weekType = 2;
        }
        else if (isCurrent == 0 && this.currentReport == 'Week') {
            this.weekType = 0;
        }
        if (this.weekType == 1 || this.weekType == 3) {
            this.resetCurrentWeekReportPagination();
        }
        else {
            this.resetLastWeekReportPagination();
        }
        this.excel = false;
        this.getReviewFormatWeekwiseReport();
    };
    ReviewFormatReportComponent.prototype.resetCurrentWeekReportPagination = function () {
        this.paginationModelCurrentWeek = new __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.paginationModelCurrentWeek.CurrentPage = 1;
        this.paginationModelCurrentWeek.PerPage = this.paginationModelCurrentPerPage;
        this.paginationModelCurrentWeek.TotalRecords = 0;
    };
    ReviewFormatReportComponent.prototype.resetLastWeekReportPagination = function () {
        this.paginationModelLastWeek = new __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.paginationModelLastWeek.CurrentPage = 1;
        this.paginationModelLastWeek.PerPage = this.paginationModelLastPerPage;
        this.paginationModelLastWeek.TotalRecords = 0;
    };
    ReviewFormatReportComponent.prototype.updateLastMonth = function () {
        this.lastMonthName = this.monthNames[((this.monthNames.indexOf(this.currentMonthName) - 1) == -1) ? 11 : (this.monthNames.indexOf(this.currentMonthName) - 1)];
    };
    ReviewFormatReportComponent.prototype.getReviewFormatWeekwiseReport = function () {
        var _this = this;
        this.isLoading = true;
        var paginationTemp = null;
        paginationTemp = (this.weekType == 1 || this.weekType == 3) ? this.paginationModelCurrentWeek : this.paginationModelLastWeek;
        this.reviewFormatReportService.getReviewFormatWeekwiseReport(this.currentMonthName, this.lastMonthName, this.brands, this.segment, this.excel, this.importance, this.weekType, paginationTemp).subscribe(function (result) {
            if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
                _this.isLoading = false;
            }
            else {
                _this.toastr.success(result.SuccessMessage);
                if (_this.excel || _this.isPDF) {
                    _this.callMethod(result.Data);
                }
                else {
                    if (_this.weekType == 1 || _this.weekType == 3) {
                        _this.reviewFormatWeekwiseReportModelCurrentWeekList = [];
                        _this.reviewFormatWeekwiseReportModelCurrentWeekList = new Array();
                        result.Data.forEach(function (data) {
                            var reviewFormatReport = new __WEBPACK_IMPORTED_MODULE_6__model_review_format_weekwise_report_model__["a" /* ReviewFormatWeekwiseReportModel */]();
                            reviewFormatReport.UserName = data.UserName;
                            reviewFormatReport.TerritoryCode = data.TERRITORY_CODE;
                            reviewFormatReport.Brand = data.Brand;
                            reviewFormatReport.Importance = data.Importance;
                            console.log("Current Report", _this.currentReport);
                            if (_this.currentReport == 'Week') {
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheWeek;
                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisWeek;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisWeek;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastWeekEnquiry;
                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisWeek;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisWeek;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastWeekPipeline;
                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastWeekOpenPipeline;
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastWeekConversionValueYTD;
                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastWeekBillingDoneYTD;
                            }
                            else {
                                console.log("Current Report m", _this.currentReport);
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheMonth;
                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisMonth;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisMonth;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastMonthEnquiry;
                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisMonth;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisMonth;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastMonthPipeline;
                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastMonthOpenPipeline;
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastMonthConversionValueYTD;
                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastMonthBillingDoneYTD;
                            }
                            _this.reviewFormatWeekwiseReportModelCurrentWeekList.push(reviewFormatReport);
                        });
                        if (_this.excel || _this.isPDF) {
                            _this.callMethod(_this.reviewFormatWeekwiseReportModelCurrentWeekList);
                        }
                        _this.paginationModelCurrentWeek.TotalRecords = result.TotalRecords;
                        _this.currentWeekSrNo = ((_this.paginationModelCurrentWeek.CurrentPage - 1) * _this.paginationModelCurrentWeek.PerPage);
                    }
                    else if (_this.weekType == 0 || _this.weekType == 2) {
                        _this.reviewFormatWeekwiseReportModelLastWeekList = [];
                        _this.reviewFormatWeekwiseReportModelLastWeekList = new Array();
                        _this.paginationModelLastWeek.TotalRecords = result.TotalRecords;
                        result.Data.forEach(function (data) {
                            var reviewFormatReport = new __WEBPACK_IMPORTED_MODULE_6__model_review_format_weekwise_report_model__["a" /* ReviewFormatWeekwiseReportModel */]();
                            reviewFormatReport.UserName = data.UserName;
                            reviewFormatReport.TerritoryCode = data.TERRITORY_CODE;
                            reviewFormatReport.Brand = data.Brand;
                            reviewFormatReport.Importance = data.Importance;
                            if (_this.currentReport == 'Week') {
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheWeek;
                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisWeek;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisWeek;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastWeekEnquiry;
                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisWeek;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisWeek;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastWeekPipeline;
                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastWeekOpenPipeline;
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastWeekConversionValueYTD;
                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastWeekBillingDoneYTD;
                            }
                            else {
                                console.log("Current Report m", _this.currentReport);
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheMonth;
                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisMonth;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisMonth;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastMonthEnquiry;
                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisMonth;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisMonth;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastMonthPipeline;
                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastMonthOpenPipeline;
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastMonthConversionValueYTD;
                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastMonthBillingDoneYTD;
                            }
                            _this.reviewFormatWeekwiseReportModelLastWeekList.push(reviewFormatReport);
                        });
                        _this.lastWeekSrNo = ((_this.paginationModelCurrentWeek.CurrentPage - 1) * _this.paginationModelCurrentWeek.PerPage);
                    }
                }
                _this.isLoading = false;
            }
        });
    };
    return ReviewFormatReportComponent;
}());
ReviewFormatReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-review-format-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/review-format-report/template/review-format-report.component.html"),
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_review_format_report_service__["a" /* ReviewFormatReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_10__angular_common__["DecimalPipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__angular_common__["DecimalPipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_common__["DecimalPipe"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__service_review_format_report_service__["a" /* ReviewFormatReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_review_format_report_service__["a" /* ReviewFormatReportService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object])
], ReviewFormatReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=review-format-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/review-format-report/model/review-format-weekwise-report.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormatWeekwiseReportModel; });
var ReviewFormatWeekwiseReportModel = (function () {
    function ReviewFormatWeekwiseReportModel() {
        this.NoOfCallsMadeInTheWeek = 0;
        this.NoOfEnquiryThisWeek = 0;
        this.EnquiryValueThisWeek = 0.00;
        this.PercentChangeFromLastWeekEnquiry = 0;
        this.NoOfPipelineThisWeek = 0;
        this.PipelineValueThisWeek = 0.00;
        this.PercentageChangeFromLastWeekPipeline = 0;
        this.TotalNoOfOpenPipeline = 0;
        this.TotalValueOfOpenPipeline = 0.00;
        this.PercentageChangeFromLastWeekOpenPipeline = 0;
        this.ConversionValueYTD = 0.00;
        this.PercentageChangeFromLastWeekConversionValueYTD = 0;
    }
    return ReviewFormatWeekwiseReportModel;
}());

//# sourceMappingURL=review-format-weekwise-report.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/review-format-report/review-format-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_review_format_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/components/review-format-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormatReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_review_format_report_component__["a" /* ReviewFormatReportComponent */] }
];
var ReviewFormatReportRoutingModule = (function () {
    function ReviewFormatReportRoutingModule() {
    }
    return ReviewFormatReportRoutingModule;
}());
ReviewFormatReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ReviewFormatReportRoutingModule);

//# sourceMappingURL=review-format-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/review-format-report/review-format-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_format_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/review-format-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_review_format_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/components/review-format-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_review_format_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/review-format-report/service/review-format-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewFormatReportModule", function() { return ReviewFormatReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











 // <-- import the module
var ReviewFormatReportModule = (function () {
    function ReviewFormatReportModule() {
    }
    return ReviewFormatReportModule;
}());
ReviewFormatReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_4__review_format_report_routing_module__["a" /* ReviewFormatReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_review_format_report_component__["a" /* ReviewFormatReportComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */], __WEBPACK_IMPORTED_MODULE_7__service_review_format_report_service__["a" /* ReviewFormatReportService */]]
    })
], ReviewFormatReportModule);

//# sourceMappingURL=review-format-report.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/review-format-report/service/review-format-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormatReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewFormatReportService = (function () {
    function ReviewFormatReportService(http) {
        this.http = http;
        this.getReviewFormatReportUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'ReviewFormatReport/fetchReviewFormatReport';
        this.getReviewFormatLastWeekReportUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'ReviewFormatReport/fetchReviewFormatWeekWiseReport';
        this.getSegmentDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'Dashboard/getSegmentDetails';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    ReviewFormatReportService.prototype.getReviewFormatReportDetails = function (currentMonth, _paginationModel) {
        var _this = this;
        var url = this.getReviewFormatReportUrl;
        //let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        var selectUserId = sessionStorage.getItem("selectedUser");
        this.dataString = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage },
            { "currentMonth": currentMonth },
            { "selectedUserID": selectUserId }];
        var headers = null;
        var excel = false;
        console.log(this.dataString);
        if (excel) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'accept': 'application/vnd.ms-excel', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        }
        else {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, this.dataString, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    ReviewFormatReportService.prototype.getSegmentDetails = function () {
        var _this = this;
        var url = this.getSegmentDetailsUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    ReviewFormatReportService.prototype.getReviewFormatWeekwiseReport = function (currentMonthName, lastMonthName, brands, segment, excel, importance, weekType, _paginationModel) {
        var _this = this;
        var url = this.getReviewFormatLastWeekReportUrl;
        console.log(excel);
        var selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "selectedUserID": selectedUser },
            { "WeekType": weekType },
            { "excel": excel ? 1 : 0 },
            { "brands": brands },
            { "segment": segment },
            { "currentMonthName": currentMonthName },
            { "lastMonthName": lastMonthName },
            { "importance": importance },
            { "PerPage": _paginationModel.PerPage }];
        var headers = null;
        //let excel = false;
        // if(excel){
        //     headers = new Headers({ 'Content-Type': 'application/json','accept':'application/vnd.ms-excel','Cache-Control':'no-cache','Pragma':'no-cache' });
        // }
        // else{
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        //}
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    ReviewFormatReportService.prototype.extractData = function (res) {
        console.log("Response:", res);
        var body = res.json();
        return body || {};
    };
    ReviewFormatReportService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    return ReviewFormatReportService;
}());
ReviewFormatReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ReviewFormatReportService);

var _a;
//# sourceMappingURL=review-format-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/review-format-report/template/review-format-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Review Format Report'\" [icon]=\"'fa-users'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">                        \n                        <div class=\"col-sm-2\">\n                            <a class=\"btn btn-border btn-sm\" \n\t\t\t\t\t\t\t\trouterLink=\"/review-format-report\"\n\t\t\t\t\t\t\t\t[routerLinkActive]=\"['router-link-active']\"\n\t\t\t\t\t\t\t\t[queryParams]=\"{ type: 'Month' }\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'btn-info' : currentReport == 'Month' }\" >Month Wise</a>                            \n                        </div> \n                        <div class=\"col-sm-2\">\n                            <a class=\"btn btn-border btn-sm\" \n\t\t\t\t\t\t\t\trouterLink=\"/review-format-report\"\n\t\t\t\t\t\t\t\t[routerLinkActive]=\"['router-link-active']\"\n\t\t\t\t\t\t\t\t[queryParams]=\"{ type: 'Week' }\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{'btn-info' : currentReport == 'Week' }\" >Week Wise</a>                           \n                        </div>                          \n                    </div>                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-11\" >\n                            <h5 class=\"pull-left\">Filters</h5>\n                        </div>\n                        <div class=\"col-sm-1\" *ngIf=\"!showFilters\">\n                            <a class=\"btn btn-info btn-sm pull-right\" style=\"color:white\" (click)=\"showFilters = true\"><i class=\"fa fa-plus\"></i></a>\n                        </div> \n                        <div class=\"col-sm-1\" *ngIf=\"showFilters\">\n                            <a class=\"btn btn-info btn-sm pull-right\" style=\"color:white\" (click)=\"showFilters = false\"><i class=\"fa fa-minus\"></i></a>\n                        </div>                                               \n                    </div>\n                    <div class=\"row\" *ngIf=\"showFilters\">\n                        <div class=\"col-sm-2\">\n                            <select class=\"form-control\" name=\"importance\"\n                                id=\"importance\" [(ngModel)]=\"importance\">\n                                <option value=\"All\">All</option>                                            \n                                <option value=\"Priority\">Priority</option>\n                                <option value=\"Key Account\">Key Account</option>\n                                <option value=\"Other Account\">Other Account</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <select class=\"form-control\" name=\"brands\"\n                                id=\"brands\" [(ngModel)]=\"brands\">\n                                <option value=\"All\">All</option>\n                                <option *ngFor=\"let item of brandsList\" value=\"{{ item }}\">{{ item }}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"segment\"\n\t\t\t\t\t\t\t\tname=\"segment\" [(ngModel)]=\"segment\"\n\t\t\t\t\t\t\t\t(change)=\"resetPagination()\">\t\n\t\t\t\t\t\t\t\t<option value=\"All\">All</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of segmentTypeList\" value=\"{{ item }}\">{{ item }}</option>\n\t\t\t\t\t\t\t</select>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"currentReport == 'Month'\">\n                            <select class=\"form-control\" name=\"currentMonthName\"\n                                (change)=\"updateLastMonth()\"\n                                id=\"currentMonthName\" [(ngModel)]=\"currentMonthName\">                                \n                                <option *ngFor=\"let item of visitsMonths\" value=\"{{ item }}\">{{ item }}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"currentReport != 'Month'\">                        \n                            <button class=\"btn btn-info\" (click)=\"getReviewFormatReport();showCurrentWeek = false;showLastWeek = false;\">Get Report</button>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"currentReport == 'Month'\">\n                            <button class=\"btn btn-info\" (click)=\"getReviewFormatReport();showCurrentWeek = false;showLastWeek = false;\">Get Report</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-10\">\n                            <h5 class=\"pull-left\">Review Format Report</h5>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"!showReviewFormatReport\">\n                            <a (click)=\"getReviewFormatReport();showReviewFormatReport = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></a>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"showReviewFormatReport\">\n                            <a (click)=\"showReviewFormatReport = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"table-responsive\" *ngIf=\"showReviewFormatReport\">\n                        <br>\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th rowspan=\"2\" class=\"text-center\">Sr No</th>\n                                    <th rowspan=\"2\" class=\"text-center\">Name</th>\n                                    <th rowspan=\"2\" class=\"text-center\">Role</th>\n                                    <th rowspan=\"2\" class=\"text-center\">Zone</th>\n                                    <th colspan=\"2\" class=\"text-center\">Hindware</th>\n                                    <th colspan=\"2\" class=\"text-center\">Lifestyle</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-center\">No</th>\n                                    <th class=\"text-center\">Value</th>\n                                    <th class=\"text-center\">No</th>\n                                    <th class=\"text-center\">Value</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let reviewFormatReportItem of reviewFormatReportModelList | paginate: { itemsPerPage: 10, currentPage: p } ;let currentReviewIdx = index;\">\n                                    <td>{{ reviewReportSrNo + currentReviewIdx + 1 }}</td>\n                                    <td>{{ reviewFormatReportItem.Name }}</td>\n                                    <td>{{ reviewFormatReportItem.Role }}</td>\n                                    <td>{{ reviewFormatReportItem.Zone }}</td>\n                                    <td>{{ reviewFormatReportItem.HindwareNo || '-' }}</td>\n                                    <td class=\"text-right\">{{ reviewFormatReportItem.HindwareValue || '-' }}</td>\n                                    <td>{{ reviewFormatReportItem.LifestyleNo || '-' }}</td>\n                                    <td class=\"text-right\">{{ reviewFormatReportItem.LifestyleValue || '-' }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-7\">\n                            <h5 class=\"pull-left\" *ngIf=\"currentReport != 'Month'\">Review Format Report : Current {{ currentReport }}</h5>\n                            <h5 class=\"pull-left\" *ngIf=\"currentReport == 'Month'\">Review Format Report : {{ currentMonthName }}</h5>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <label>No of Records:</label>\n                                </div>\n                                <div class=\"col-sm-6\">                   \n                                    <select class=\"form-control\" name=\"paginationModelCurrentPerPage\"\n                                        (change)=\"getWeekWiseReport(1)\"\n                                        id=\"paginationModelCurrentPerPage\" [(ngModel)]=\"paginationModelCurrentPerPage\">                                \n                                        <option value=\"10\">10</option>\n                                        <option value=\"20\">20</option>\n                                        <option value=\"25\">25</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <a (click)=\"getExcelPDF(1)\" style=\"color:white\" class=\"btn btn-info btn-sm\">Excel</a>\n                        </div>\n                        <div class=\"col-sm-1\" *ngIf=\"!showCurrentWeek\">\n                            <a (click)=\"getWeekWiseReport(1);showCurrentWeek = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></a>\n                        </div>\n                        <div class=\"col-sm-1\" *ngIf=\"showCurrentWeek\">\n                            <a (click)=\"showCurrentWeek = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"table-responsive\" *ngIf=\"showCurrentWeek\">\n                        <br>\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>Sr No</th>\n                                    <th>User Name (Sales / BD)</th>\n                                    <th>Territory Code</th>\n                                    <th>Brand</th>\n                                    <th>Importance</th>\n                                    <th>No. of calls made</th>\n                                    <th>No. of Enquiry</th>\n                                    <th>Enquiry Value(in Lacs)</th>\n                                    <th>% Change from last {{ currentReport }}(Enquiry)</th>\n                                    <th>No. of Pipeline(Hot + Warm)</th>\n                                    <th>Pipeline Value(Hot + Warm)</th>\n                                    <th>% Change from last {{ currentReport }}(Pipeline)</th>\n                                    <th>Total no. of Open Pipeline</th>\n                                    <th>Total value of open pipeline</th>\n                                    <th>% Change from last {{ currentReport }}</th>\n                                    <th>Total YTD Conversion Value (in Lacs)</th>\n                                    <th>% Change from last {{ currentReport }}</th>\n                                    <!-- <th>Billing done (Rs Lakhs) YTD</th>\n                                    <th>% Change from last {{ currentReport }}</th>                                     -->\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let reviewFormatReportItem of reviewFormatWeekwiseReportModelCurrentWeekList;let currentWeekIdx = index;\">\n                                    <td *ngIf=\"currentWeekIdx != (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\">{{ currentWeekSrNo + currentWeekIdx + 1 }}</td>\n                                    <td *ngIf=\"currentWeekIdx == (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\" colspan=\"5\" class=\"text-center\"><b>Total</b></td>\n                                    <td *ngIf=\"currentWeekIdx != (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\">{{ reviewFormatReportItem.UserName }}</td>\n                                    <td *ngIf=\"currentWeekIdx != (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\">{{ reviewFormatReportItem.TerritoryCode }}</td>\n                                    <td *ngIf=\"currentWeekIdx != (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\">{{ reviewFormatReportItem.Brand }}</td>\n                                    <td *ngIf=\"currentWeekIdx != (reviewFormatWeekwiseReportModelCurrentWeekList.length - 1)\">{{ reviewFormatReportItem.Importance }}</td>\n                                    <td>{{ reviewFormatReportItem.NoOfCallsMadeInTheWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.NoOfEnquiryThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.EnquiryValueThisWeek == 0 ? '0.00' : reviewFormatReportItem.EnquiryValueThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentChangeFromLastWeekEnquiry }}</td>\n\n                                    <td>{{ reviewFormatReportItem.NoOfPipelineThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PipelineValueThisWeek == 0 ? '0.00' : reviewFormatReportItem.PipelineValueThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekPipeline }}</td>\n\n                                    <td>{{ reviewFormatReportItem.TotalNoOfOpenPipeline }}</td>\n                                    <td>{{ reviewFormatReportItem.TotalValueOfOpenPipeline == 0 ? '0.00' : reviewFormatReportItem.TotalValueOfOpenPipeline }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekOpenPipeline }}</td>\n\n                                    <td>{{ reviewFormatReportItem.ConversionValueYTD == 0 ? '0.00' : reviewFormatReportItem.ConversionValueYTD }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekConversionValueYTD }}</td>\n                                    <!-- <td>{{ reviewFormatReportItem.BillingDoneYTD }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekBillingDoneYTD }}</td> -->\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div *ngIf=\"paginationModelCurrentWeek.TotalRecords >= 0\">\n                                <ngb-pagination [collectionSize]=\"paginationModelCurrentWeek.TotalRecords\" (pageChange)=\"getCurrentWeekReport($event)\" [(page)]=\"paginationModelCurrentWeek.CurrentPage\" [maxSize]=\"paginationModelCurrentWeek.PerPage\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-7\">\n                            <h5 class=\"pull-left\" *ngIf=\"currentReport != 'Month'\">Review Format Report : Last {{ currentReport }}</h5>\n                            <h5 class=\"pull-left\" *ngIf=\"currentReport == 'Month'\">Review Format Report : {{ lastMonthName }}</h5>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <label>No of Records:</label>\n                                </div>\n                                <div class=\"col-sm-6\">                   \n                                    <select class=\"form-control\" name=\"paginationModelLastPerPage\"\n                                        (change)=\"getWeekWiseReport(0)\"\n                                        id=\"paginationModelLastPerPage\" [(ngModel)]=\"paginationModelLastPerPage\">                                \n                                        <option value=\"10\">10</option>\n                                        <option value=\"20\">20</option>\n                                        <option value=\"25\">25</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <a (click)=\"getExcelPDF(0)\" style=\"color:white\" class=\"btn btn-info btn-sm\">Excel</a>\n                        </div>                        \n                        <div class=\"col-sm-1  pull-right\" *ngIf=\"!showLastWeek\">\n                            <a (click)=\"getWeekWiseReport(0);showLastWeek = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></a>\n                        </div>\n                        <div class=\"col-sm-1 pull-right\" *ngIf=\"showLastWeek\">\n                                <a (click)=\"showLastWeek = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></a>\n                        </div>\n                    </div>                    \n                    <div class=\"table-responsive\" *ngIf=\"showLastWeek\">\n                        <br>\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>Sr No</th>\n                                    <th>User Name (Sales / BD)</th>\n                                    <th>Territory Code</th>\n                                    <th>Brand </th>\n                                    <th>Importance</th>\n                                    <th>No. of calls made</th>\n                                    <th>No. of Enquiry</th>\n                                    <th>Enquiry Value (in Lacs)</th>\n                                    <th>% Change from last {{ currentReport }}(Enquiry)</th>\n                                    <th>No. of Pipeline (Hot + Warm)</th>\n                                    <th>Pipeline Value (Hot + Warm)</th>\n                                    <th>% Change from last {{ currentReport }}(Pipeline)</th>\n                                    <th>Total no. of Open Pipeline</th>\n                                    <th>Total value of open pipeline</th>\n                                    <th>% Change from last {{ currentReport }}</th>\n                                    <th>Total YTD Conversion Value (in Lacs)</th>\n                                    <th>% Change from last {{ currentReport }}</th>\n                                    <!-- <th>Billing done (Rs Lakhs) YTD</th>\n                                    <th>% Change from last {{ currentReport }}</th>                                     -->\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let reviewFormatReportItem of reviewFormatWeekwiseReportModelLastWeekList;let lastWeekIdx = index;\">\n                                    <td *ngIf=\"lastWeekIdx != (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\">{{ lastWeekSrNo + lastWeekIdx + 1 }}</td>\n                                    <td *ngIf=\"lastWeekIdx == (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\" colspan=\"5\" class=\"text-center\"><b>Total</b></td>\n                                    <td *ngIf=\"lastWeekIdx != (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\">{{ reviewFormatReportItem.UserName }}</td>\n                                    <td *ngIf=\"lastWeekIdx != (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\">{{ reviewFormatReportItem.TerritoryCode }}</td>\n                                    <td *ngIf=\"lastWeekIdx != (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\">{{ reviewFormatReportItem.Brand }}</td>\n                                    <td *ngIf=\"lastWeekIdx != (reviewFormatWeekwiseReportModelLastWeekList.length - 1)\">{{ reviewFormatReportItem.Importance }}</td>                                    \n                                    <td>{{ reviewFormatReportItem.NoOfCallsMadeInTheWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.NoOfEnquiryThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.EnquiryValueThisWeek == 0 ? '0.00' : reviewFormatReportItem.EnquiryValueThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentChangeFromLastWeekEnquiry }}</td>\n\n                                    <td>{{ reviewFormatReportItem.NoOfPipelineThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PipelineValueThisWeek == 0 ? '0.00' : reviewFormatReportItem.PipelineValueThisWeek }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekPipeline }}</td>\n\n                                    <td>{{ reviewFormatReportItem.TotalNoOfOpenPipeline }}</td>\n                                    <td>{{ reviewFormatReportItem.TotalValueOfOpenPipeline == 0 ? '0.00' : reviewFormatReportItem.TotalValueOfOpenPipeline }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekOpenPipeline }}</td>\n\n                                    <td>{{ reviewFormatReportItem.ConversionValueYTD == 0 ? '0.00' : reviewFormatReportItem.ConversionValueYTD }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekConversionValueYTD }}</td>\n                                    <!-- <td>{{ reviewFormatReportItem.BillingDoneYTD }}</td>\n                                    <td>{{ reviewFormatReportItem.PercentageChangeFromLastWeekBillingDoneYTD }}</td> -->\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div *ngIf=\"paginationModelLastWeek.TotalRecords >= 0\">\n                                <ngb-pagination [collectionSize]=\"paginationModelLastWeek.TotalRecords\" (pageChange)=\"getLastWeekReport($event)\" [(page)]=\"paginationModelLastWeek.CurrentPage\" [maxSize]=\"paginationModelLastWeek.PerPage\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<ngx-loading [show]=\"isLoading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ })

});
//# sourceMappingURL=15.chunk.js.map