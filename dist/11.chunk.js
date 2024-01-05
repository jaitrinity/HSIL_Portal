webpackJsonp([11],{

/***/ "../../../../../src/app/layout/reports/project-report/component/project-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_project_report_service__ = __webpack_require__("../../../../../src/app/layout/reports/project-report/service/project-report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_project_summery_model__ = __webpack_require__("../../../../../src/app/layout/reports/project-report/model/project-summery.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__ = __webpack_require__("../../../../../src/app/shared/model/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProjectReportComponent = (function () {
    function ProjectReportComponent(router, route, _commonService, modalService, titleService, _projectReportService, _authenticationService, toastr, vcr) {
        this.router = router;
        this.route = route;
        this._commonService = _commonService;
        this.modalService = modalService;
        this.titleService = titleService;
        this._projectReportService = _projectReportService;
        this._authenticationService = _authenticationService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.snapshotLoading = false;
        this.detailsLoading = false;
        this.visitsMonths = [];
        this.currentMonth = "All";
        this.detailsSrNo = 1;
        this.snapshotSrNo = 1;
        this.projectSnapshotReportSortByReverse = true;
        this.projectDetailsReportSortByReverse = true;
        this.zoneList = [];
        this.detailsExcel = false;
        this.snapshotExcel = false;
        this.currentImageUrl = '';
        this.errorImage = 'https://kwspecialties.on.ca/wp-content/uploads/2014/07/no-image.png';
        this.isSalesBDE = false;
        this.excelDataModelList = [];
        this.isShowFilters = false;
        this.isVirtualState = true;
        this.ishotWarmCode = false;
        this.virtualCity = [];
        this.myDatePickerOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy/mm/dd',
        };
        this.dt = new Date();
        // Initialized to specific date (09.10.2018).
        this.model = { date: { year: this.dt.getFullYear(), month: (this.dt.getMonth() + 1), day: this.dt.getDate() } };
        this.projectReportSnapshotModelList = new Array();
        this.projectReportDetailsModelList = new Array();
        this.projectTypeList = ['Enquiry', 'Pipeline', 'Conversion', 'OrderLost'];
        this.isShowProjectSummery = false;
        this.isShowProjectSnashot = true;
        this.isShowProjectDetails = false;
        this.projectSummeryModel = new __WEBPACK_IMPORTED_MODULE_6__model_project_summery_model__["a" /* ProjectSummeryModel */]();
        this.projectReportSnapshotColumnList = [];
        this.projectReportDetailsColumnList = [];
        this.paginationSnapshotModel = new __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.paginationDetailsModel = new __WEBPACK_IMPORTED_MODULE_8__shared_model_pagination_model__["a" /* PaginationModel */]();
        this.taggedProject = 0;
    }
    ProjectReportComponent.prototype.onDateFromChanged = function (event) {
        this.projectReportFromDate = event.formatted;
    };
    ProjectReportComponent.prototype.onDateEndChanged = function (event) {
        this.projectReportToDate = event.formatted;
    };
    ProjectReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        this.route.queryParams.forEach(function (params) {
            _this.getMonthsList();
            _this.currentProjectType = params['type'];
            window.scrollTo(0, 0);
            _this.currentReportName = 'Project ' + (_this.currentProjectType ? _this.currentProjectType : '') + ' Report';
            _this.titleService.setTitle(_this.currentReportName);
            _this.paginationDetailsModel.TotalRecords = 0;
            _this.paginationDetailsModel.CurrentPage = 1;
            _this.paginationDetailsModel.PerPage = 10;
            _this.paginationSnapshotModel.TotalRecords = 0;
            _this.paginationSnapshotModel.CurrentPage = 1;
            _this.paginationSnapshotModel.PerPage = 10;
            _this.getProjectReportSnapshot();
            _this.isShowProjectDetails = false;
        });
        var userRole = sessionStorage.getItem("UserRole");
        this.role = userRole;
        // console.log(userRole);
        // console.log("user role:- " +userRole.toLowerCase());
        if (userRole.toLowerCase() == 'business development executive' || userRole.toLowerCase() == 'sales') {
            this.isSalesBDE = true;
        }
        this.virtualCity = JSON.parse(localStorage.getItem("virtualStateList"));
        this.zoneList = JSON.parse(localStorage.getItem("zoneList"));
    };
    ProjectReportComponent.prototype.changeCurrentType = function (item) {
        this.router.navigateByUrl('/project-report?type=' + item);
        if (item === "Enquiry") {
            this.ishotWarmCode = false;
        }
        else {
            this.ishotWarmCode = true;
        }
    };
    ProjectReportComponent.prototype.sortSnapshot = function (key) {
        this.projectSnapshotReportSortBy = key;
        this.projectSnapshotReportSortByReverse = !this.projectSnapshotReportSortByReverse;
    };
    ProjectReportComponent.prototype.sortDetails = function (key) {
        this.projectDetailsReportSortBy = key;
        this.projectDetailsReportSortByReverse = !this.projectDetailsReportSortByReverse;
    };
    ProjectReportComponent.prototype.changeSnapshotPage = function (event) {
        this.paginationSnapshotModel.CurrentPage = event;
        this.getProjectReportSnapshot();
    };
    ProjectReportComponent.prototype.changeDetailsPage = function (event) {
        this.paginationDetailsModel.CurrentPage = event;
        this.getProjectReportDetails();
    };
    ProjectReportComponent.prototype.getMonthsList = function () {
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
    ProjectReportComponent.prototype.callDetailsMethod = function (type) {
        if (type == 'excel') {
            this.detailsExcel = true;
            this.getProjectReportDetails();
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    ProjectReportComponent.prototype.callSnapshotMethod = function (type) {
        if (type == 'excel') {
            this.snapshotExcel = true;
            this.getProjectReportSnapshot();
        }
        else if (type == 'pdf') {
            this.toastr.info("Functionaity In Progress");
        }
    };
    ProjectReportComponent.prototype.resetSnapshotPagination = function (isSearch) {
        if (!isSearch) {
            this.searcProjectSnapshotReport = '';
        }
        this.paginationSnapshotModel.TotalRecords = 100;
        this.paginationSnapshotModel.CurrentPage = 1;
        this.paginationSnapshotModel.PerPage = 10;
        this.getProjectReportSnapshot();
    };
    ProjectReportComponent.prototype.resetDetailsPagination = function (isSearch) {
        if (!isSearch) {
            this.searcProjectDetailsReport = '';
        }
        this.paginationDetailsModel.TotalRecords = 100;
        this.paginationDetailsModel.CurrentPage = 1;
        this.paginationDetailsModel.PerPage = 10;
        this.getProjectReportDetails();
    };
    ProjectReportComponent.prototype.updateCurrentImage = function (currentImage) {
        this.currentImageUrl = currentImage ? currentImage : this.errorImage;
    };
    ProjectReportComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProjectReportComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["f" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["f" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProjectReportComponent.prototype.getProjectReportSnapshot = function () {
        var _this = this;
        this.snapshotLoading = true;
        // console.log(this.projectReportFromDate);
        this.projectReportFromDate = this.projectReportFromDate ? this.projectReportFromDate : '';
        this.projectReportToDate = this.projectReportToDate ? this.projectReportToDate : '';
        this._projectReportService.getProjectReportDetails(this.projectReportFromDate, this.projectReportToDate, this.snapshotExcel, this.taggedProject, this.virtualState, this.zone, this.monthOfCloser, this.projectSnapshotReportSortBy, this.projectDetailsReportSortByReverse, this.searcProjectSnapshotReport, 'Snapshot', this.currentMonth, this.currentProjectType, this.paginationSnapshotModel).subscribe(function (result) {
            if (!_this.snapshotExcel) {
                _this.paginationSnapshotModel.TotalRecords = 0;
                _this.projectReportSnapshotModelList = [];
                _this.projectSummeryModel = null;
                _this.projectReportSnapshotColumnList = [];
                // console.log(result);
            }
            _this.snapshotLoading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.snapshotSrNo = ((_this.paginationSnapshotModel.CurrentPage - 1) * _this.paginationSnapshotModel.PerPage);
                if (_this.snapshotExcel) {
                    _this.snapshotExcel = false;
                    _this.excelDataModelList = [];
                    _this.excelDataModelList.push(result.Columns);
                    result.ArrayData.forEach(function (element) {
                        _this.excelDataModelList.push(element);
                    });
                    _this._authenticationService.exportFunction("ProjectSnapshotReport.xlsx", _this.excelDataModelList);
                }
                else {
                    _this.toastr.success(result.SuccessMessage);
                    _this.paginationSnapshotModel.TotalRecords = result.TotalRecords;
                    _this.projectReportSnapshotModelList = result.ArrayData;
                    _this.projectSummeryModel = result.Summery;
                    _this.projectReportSnapshotColumnList = result.Columns;
                }
            }
        });
    };
    ProjectReportComponent.prototype.getProjectReportDetails = function () {
        var _this = this;
        this.detailsLoading = true;
        this.projectReportFromDate = this.projectReportFromDate ? this.projectReportFromDate : '';
        this.projectReportToDate = this.projectReportToDate ? this.projectReportToDate : '';
        this._projectReportService.getProjectReportDetails(this.projectReportFromDate, this.projectReportToDate, this.detailsExcel, this.taggedProject, this.virtualState, this.zone, this.monthOfCloser, this.projectDetailsReportSortBy, this.projectSnapshotReportSortByReverse, this.searcProjectDetailsReport, 'Details', this.currentMonth, this.currentProjectType, this.paginationDetailsModel).subscribe(function (result) {
            if (!_this.detailsExcel) {
                _this.paginationDetailsModel.TotalRecords = 0;
                _this.projectReportDetailsModelList = [];
                _this.projectReportDetailsColumnList = [];
            }
            _this.detailsLoading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.detailsSrNo = ((_this.paginationDetailsModel.CurrentPage - 1) * _this.paginationDetailsModel.PerPage);
                if (_this.detailsExcel) {
                    _this.detailsExcel = false;
                    _this.excelDataModelList = [];
                    _this.excelDataModelList.push(result.Columns);
                    result.ArrayData.forEach(function (element) {
                        _this.excelDataModelList.push(element);
                    });
                    _this._authenticationService.exportFunction("ProjectDetailsReport.xlsx", _this.excelDataModelList);
                }
                else {
                    _this.toastr.success(result.SuccessMessage);
                    _this.paginationDetailsModel.TotalRecords = result.TotalRecords;
                    _this.projectReportDetailsModelList = result.ArrayData;
                    _this.projectReportDetailsColumnList = result.Columns;
                }
            }
        });
    };
    return ProjectReportComponent;
}());
ProjectReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-report',
        template: __webpack_require__("../../../../../src/app/layout/reports/project-report/template/project-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/reports/project-report/styles/project-report.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_project_report_service__["a" /* ProjectReportService */], __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["g" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__service_project_report_service__["a" /* ProjectReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_project_report_service__["a" /* ProjectReportService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object])
], ProjectReportComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=project-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/model/project-summery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSummeryModel; });
var ProjectSummeryModel = (function () {
    function ProjectSummeryModel() {
    }
    return ProjectSummeryModel;
}());

//# sourceMappingURL=project-summery.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/project-report-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_project_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/project-report/component/project-report.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_project_report_component__["a" /* ProjectReportComponent */] }
];
var ProjectReportRoutingModule = (function () {
    function ProjectReportRoutingModule() {
    }
    return ProjectReportRoutingModule;
}());
ProjectReportRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ProjectReportRoutingModule);

//# sourceMappingURL=project-report-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/project-report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_report_routing_module__ = __webpack_require__("../../../../../src/app/layout/reports/project-report/project-report-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_project_report_component__ = __webpack_require__("../../../../../src/app/layout/reports/project-report/component/project-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportModule", function() { return ProjectReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ProjectReportModule = (function () {
    function ProjectReportModule() {
    }
    return ProjectReportModule;
}());
ProjectReportModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__project_report_routing_module__["a" /* ProjectReportRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
            __WEBPACK_IMPORTED_MODULE_10_mydatepicker__["MyDatePickerModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_project_report_component__["a" /* ProjectReportComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["e" /* NgbPaginationConfig */]]
    })
], ProjectReportModule);

//# sourceMappingURL=project-report.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/service/project-report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectReportService = (function () {
    function ProjectReportService(http) {
        this.http = http;
        this.getProjectReportUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'ProjectReport/fetchProjectReportUsingStage';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    ProjectReportService.prototype.getProjectReportDetails = function (fromDate, toDate, excel, taggedProject, virtualState, zone, monthOfClosure, sortkey, sortOrder, searchText, reportSectionType, currentMonth, currentReportType, _paginationModel) {
        var _this = this;
        var url = this.getProjectReportUrl;
        var selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "CurrentReportType": currentReportType },
            { "CurrentPage": _paginationModel.CurrentPage },
            { "PerPage": _paginationModel.PerPage },
            { "currentMonth": currentMonth },
            { "searchText": searchText },
            { "selectedUser": selectedUser },
            { "selectedUserID": selectedUser },
            { "fromDate": fromDate },
            { "toDate": toDate },
            { "Sortkey": sortkey },
            { "excel": excel },
            { "TaggedProject": taggedProject },
            { "virtual_city": virtualState },
            { "zone": zone },
            { "month_of_closure": monthOfClosure },
            { "sortOrder": sortOrder },
            { "reportSectionType": reportSectionType }];
        console.log(data);
        var headers = null;
        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    ProjectReportService.prototype.extractData = function (res) {
        console.log("Response:", res);
        var body = res.json();
        return body || {};
    };
    ProjectReportService.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    return ProjectReportService;
}());
ProjectReportService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProjectReportService);

var _a;
//# sourceMappingURL=project-report.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/styles/project-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n  position: relative; }\n\n.grid-item {\n  position: absolute; }\n\n.grid-item.moving {\n  z-index: z-index1; }\n\n.placeholder {\n  position: absolute; }\n\n.btn-border:hover {\n  border: 1px solid #31B0D5; }\n\n.image-center {\n  margin: 0 auto;\n  display: block; }\n\n.modal-body {\n  overflow: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/reports/project-report/template/project-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"currentReportName\" [icon]=\"'fa-users'\"></app-page-header> \n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-8\">\n                            <a class=\"btn col-sm-2 btn-border btn-sm\" *ngFor=\"let item of projectTypeList\" [ngClass]=\"{'btn-info' : currentProjectType == item }\" (click)=\"changeCurrentType(item)\">{{ item }}</a>\n                        </div>                        \n                        <div class=\"col-sm-2\" *ngIf=\"true==false\">\n                            <select class=\"form-control\" name=\"currentMonth\"\n                                id=\"currentMonth\" [(ngModel)]=\"currentMonth\"\n                                (change)=\"getProjectReportSnapshot()\">\n                                <option value=\"All\">All</option>\n                                <option *ngFor=\"let item of visitsMonths\" value=\"{{ item }}\">{{ item }}</option>\n                            </select>\n                        </div>                                                \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" >\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-11\">\n                            <h4>Filters</h4>\n                        </div>\n                        <div class=\"col-sm-1\" *ngIf=\"!isShowFilters\">\n                            <button (click)=\"isShowFilters = true;\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                        </div>\n                        <div class=\"col-sm-1\" *ngIf=\"isShowFilters\">\n                            <button (click)=\"isShowFilters = false;\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"isShowFilters\">\n                        <!-- <div class=\"col-sm-1\">\n                            \n                        </div> -->\n                        <div class=\"col-sm-2\">\n                                <h6>From Date</h6>\n                                <my-date-picker name=\"projectReportFromDate\" placeholder=\"yyyy/mm/dd\" [options]=\"myDatePickerOptions\"\n                                (dateChanged)=\"onDateFromChanged($event)\"></my-date-picker>\n                          <!--   <owl-date-time [(ngModel)]=\"projectReportFromDate\" \n                            [type]=\"'calendar'\"\n\t\t\t\t\t\t\t[dataType]=\"'date'\"\n                            [autoClose]=\"true\"\n                            [dateFormat]=\"'YYYY/MM/DD'\"\n                            [placeHolder]=\"'YYYY/MM/DD'\"\n                            [hourFormat]=\"'12'\"\n                            [selectionMode]=\"'single'\"\n                            name=\"projectReportFromDate\"\n                            [locale]=\"en\"></owl-date-time>    -->                                             \n                        </div>\n                       <!--  <div class=\"col-sm-1\">\n                            <h6>To Date</h6>\n                        </div> -->\n                        <div class=\"col-sm-2\">\n                                <h6>To Date</h6>\n                                <my-date-picker name=\"projectReportToDate\" placeholder=\"yyyy/mm/dd\" [options]=\"myDatePickerOptions\"\n                                (dateChanged)=\"onDateEndChanged($event)\"></my-date-picker>\n                           <!--  <owl-date-time [(ngModel)]=\"projectReportToDate\" \n                            [type]=\"'calendar'\"\n\t\t\t\t\t\t\t[dataType]=\"'date'\"\n                            [autoClose]=\"true\"\n                            [dateFormat]=\"'YYYY/MM/DD'\"\n                            [placeHolder]=\"'YYYY/MM/DD'\"\n                            [hourFormat]=\"'12'\"\n                            [selectionMode]=\"'single'\"\n                            name=\"projectReportToDate\" \n                            [locale]=\"en\"></owl-date-time>             -->                                    \n                        </div>   \n                        <div class=\"col-sm-2\">\n                            <h6 style=\"color: transparent\">Select Project</h6>\n                            <select class=\"form-control\" name=\"taggedProject\"\n                                    id=\"taggedProject\" [(ngModel)]=\"taggedProject\"\n                                    (change)=\"getProjectReportSnapshot()\">\n                                    <option value=\"0\">All Projects</option>\n                                    <option value=\"1\">Tagged Project</option>\n                                    <option value=\"2\">Self Created Project</option>\n                            </select>\n                        </div>\n                               \n                        <div class=\"col-md-2\">\n                            <h6 style=\"color: transparent\">Select Virtual City</h6>\n                            <select class=\"form-control\" name=\"virtualState\"\n                            id=\"virtualState\" [(ngModel)]=\"virtualState\"\n                                (change)=\"getProjectReportSnapshot()\">\n                                <option [ngValue]=\"undefined\">Select Virtual State</option>  \n                                <option *ngFor=\"let virtual of virtualCity\" value=\"{{virtual.VIRTUAL_CITY}}\">{{virtual.VIRTUAL_CITY}}</option>                         \n                            </select>\n                        </div>\n                        <div class=\"col-md-2\" *ngIf=\"role === 'BDM_HEAD' || role === 'HINDWARE_ZM' || role === 'LIFESTYLE_ZM' || role === 'Hindware_NSM' || role === 'Hindware_PR' ||role === 'Administrator' || role === 'HINDWARE_HH'\">\n                            <h6 style=\"color: transparent\">Select Zone</h6>\n                            <select class=\"form-control\" name=\"zone\"\n                            id=\"zone\" [(ngModel)]=\"zone\"\n                                (change)=\"getProjectReportSnapshot()\">\n                                <option [ngValue]=\"undefined\">Select Zone</option>  \n                                <option *ngFor=\"let z of zoneList\" value=\"{{z.ZONE}}\">{{z.ZONE}}</option>                         \n                            </select>\n                        </div>   \n                        <div class=\"col-md-2\" *ngIf=\"ishotWarmCode\">\n                                <h6 style=\"color: transparent\">Month Of Closure</h6>\n                                <select class=\"form-control\" name=\"monthOfCloser\"\n                                id=\"monthOfCloser\" [(ngModel)]=\"monthOfCloser\"\n                                    (change)=\"getProjectReportSnapshot()\">\n                                    <option [ngValue]=\"undefined\">Select Month Of Closure</option>  \n                                    <option value=\"HOT (0-3 Months)\">HOT (0-3 Months)</option>    \n                                    <option value=\"WARM (3-6 Months)\">WARM (3-6 Months)</option>      \n                                    <option value=\"COLD (6-12 Months)\">COLD (6-12 Months)</option>               \n                                </select>\n                            </div>            \n                        <div class=\"col-sm-2\">\n                            <h6 style=\"color: transparent\">Get Report</h6>\n                            <button type=\"button\"\n                                (click)=\"getProjectReportSnapshot()\"\n                                class=\"btn btn-sm btn-info\">Get Report</button>\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>   \n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-10\">\n                            <h5>Project {{ currentProjectType }} Summary</h5>\n                        </div>                                               \n                        <div class=\"col-sm-2\" *ngIf=\"!isShowProjectSummery\">\n                            <button (click)=\"isShowProjectSummery = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                        </div>\n                        <div class=\"col-sm-2\" *ngIf=\"isShowProjectSummery\">\n                            <button (click)=\"isShowProjectSummery = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                        </div>\n                    </div>\n                    <div *ngIf=\"isShowProjectSummery\">\n                        <table class=\"table table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th class=\"text-center\">No. of Projects</th>\n                                    <th class=\"text-center\">Value (in Lacs)</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngIf=\"currentProjectType == 'Conversion'\">\n                                    <th>Conversion Value Current month</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.ConversionThisMonthNo }}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.ConversionThisMonthValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Conversion'\">\n                                    <th>Conversion Value Current fiscal period</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.ConversionThisFiscalPeriodNo }}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.ConversionThisFiscalPeriodValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Conversion'\">\n                                    <th>Total Conversion</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.TotalConversionNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.TotalConversionValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Enquiry'\">\n                                    <th>Enquiry Value Current month</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.EnquiryThisMonthNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.EnquiryThisMonthValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Enquiry'\">\n                                    <th>Enquiry Value Current fiscal period</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.EnquiryThisFiscalPeriodNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.EnquiryThisFiscalPeriodValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Enquiry'\">\n                                    <th>Total Enquiry</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.TotalEnquiryNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.TotalEnquiryValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Pipeline'\">\n                                    <th>Pipeline Value Current month</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.PipelineThisMonthNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.PipelineThisMonthValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Pipeline'\">\n                                    <th>Pipeline Value Current fiscal period</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.PipelineThisFiscalPeriodNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.PipelineThisFiscalPeriodValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'Pipeline'\">\n                                    <th>Total Pipeline</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.TotalPipelineNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.TotalPipelineValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'OrderLost'\">\n                                    <th>Order Lost Value Current month</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.LostThisMonthNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.LostThisMonthValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'OrderLost'\">\n                                    <th>Order Lost Value Current fiscal period</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.LostThisFiscalPeriodNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.LostThisFiscalPeriodValue}}</td>\n                                </tr>\n                                <tr *ngIf=\"currentProjectType == 'OrderLost'\">\n                                    <th>Total Order Lost</th>\n                                    <td class=\"text-center\">{{ projectSummeryModel?.TotalLostNo}}</td>\n                                    <td class=\"text-right\">{{ projectSummeryModel?.TotalLostValue}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" >\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <ng-container >\n                        <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                                <h5>Project {{ currentProjectType }} Snapshot</h5>\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <input type=\"text\" id=\"searcProjectSnapshotReport\" name=\"searcProjectSnapshotReport\" placeholder=\"Search...\" [(ngModel)]=\"searcProjectSnapshotReport\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-1\">\n                                <button class=\"btn btn-info btn-sm\" (click)=\"resetSnapshotPagination(1)\">Search</button>\n                            </div>\n                            <div class=\"col-sm-1\">\n                                <button (click)=\"callSnapshotMethod('excel')\" class=\"btn btn-info btn-sm\">EXCEL</button>\n                            </div>\n                            <div class=\"col-sm-1\" *ngIf=\"true==false\">\n                                <button (click)=\"callSnapshotMethod('pdf')\" class=\"btn btn-info btn-sm\">PDF</button>\n                            </div>\n                            <div class=\"col-sm-1\" *ngIf=\"!isShowProjectSnashot\">\n                                <button (click)=\"isShowProjectSnashot = true\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                                </div>\n                            <div class=\"col-sm-1\" *ngIf=\"isShowProjectSnashot\">\n                                <button (click)=\"isShowProjectSnashot = false\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                            </div>\n                        </div>\n                        <div class=\"table-responsive\" style=\"background-color: #FFF;\" *ngIf=\"isShowProjectSnashot\">                            \n                            <table class=\"table table-bordered table-fixed\" style=\"background-color: #fff;\">\n                                <thead>\n                                    <tr>\n                                        <th>Sr No</th>\n                                        <th *ngFor=\"let columnItem of projectReportSnapshotColumnList\" (click)=\"sortSnapshot(columnItem)\">{{ columnItem }} &nbsp;<span class=\"fa fa-sort\" *ngIf=\"projectSnapshotReportSortBy ==columnItem \"  [ngClass]=\"{'fa-sort-asc':projectSnapshotReportSortByReverse,'fa-sort-desc':!projectSnapshotReportSortByReverse}\"></span></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let rowItem of  projectReportSnapshotModelList;let snapshotIdx = index;\">\n                                        <td>{{ snapshotSrNo + snapshotIdx + 1 }}</td>\n                                        <td *ngFor=\"let dataItem of rowItem;let idx = index\">\n                                            <ng-container *ngIf=\"(idx == 15 && currentProjectType == 'Conversion') || ((idx == 15 || idx == 16 || idx == 17) && currentProjectType == 'Pipeline')\">\n                                                <a (click)=\"updateCurrentImage(dataItem);open(content)\">\n                                                    <img src=\"{{ dataItem || errorImage }}\" width=\"100\">\n                                                </a>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"!((idx == 15 && currentProjectType == 'Conversion') || ((idx == 15 || idx == 16 || idx == 17) && currentProjectType == 'Pipeline'))\">\n                                                <span *ngIf=\"dataItem && dataItem != 'null'\">\n                                                    {{ dataItem }}\n                                                </span>                                                                                                \n                                                <span *ngIf=\"dataItem && dataItem == 'null'\">-</span>\n                                                <span *ngIf=\"!dataItem\">-</span>\n                                            </ng-container>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <ngb-pagination [collectionSize]=\"paginationSnapshotModel.TotalRecords\" \n                                        (pageChange)=\"changeSnapshotPage($event)\" \n                                        [(page)]=\"paginationSnapshotModel.CurrentPage\" \n                                        [maxSize]=\"paginationSnapshotModel.PerPage\" \n                                        [rotate]=\"true\" [ellipses]=\"false\" \n                                        [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>                            \n                        </div>\n                    </ng-container>                    \n                </div>\n            </div>\n        </div>\n        <ngx-loading [show]=\"snapshotLoading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>\n    </div>\n    <div class=\"row\" >\n            <div class=\"col col-sm-12\">\n                <div class=\"card mb-3\">\n                    <div class=\"card-block\">\n                        <ng-container >\n                            <div class=\"row\">\n                                <div class=\"col-sm-7\">\n                                    <h5>Project {{ currentProjectType }} Details</h5>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <input type=\"text\" id=\"searcProjectDetailsReport\" name=\"searcProjectDetailsReport\" placeholder=\"Search...\" [(ngModel)]=\"searcProjectDetailsReport\" class=\"form-control\">\n                                </div>\n                                <div class=\"col-sm-1\">\n                                    <button type=\"button\" class=\"btn btn-info btn-sm\"  (click)=\"resetDetailsPagination(1)\">Search</button>\n                                </div>\n                                <div class=\"col-sm-1\">\n                                    <button (click)=\"callDetailsMethod('excel')\" class=\"btn btn-info btn-sm\">EXCEL</button>\n                                </div>\n                                <div class=\"col-sm-1\" *ngIf=\"true==false\">\n                                    <button (click)=\"callDetailsMethod('pdf')\" class=\"btn btn-info btn-sm\">PDF</button>\n                                </div>\n                                <div class=\"col-sm-1\" *ngIf=\"!isShowProjectDetails\">\n                                    <button (click)=\"isShowProjectDetails = true;getProjectReportDetails();\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-plus\"></i></button>\n                                </div>\n                                <div class=\"col-sm-1\" *ngIf=\"isShowProjectDetails\">\n                                    <button (click)=\"isShowProjectDetails = false;\" style=\"color:white\" class=\"btn btn-info pull-right btn-sm\"><i class=\"fa fa-minus\"></i></button>\n                                </div>\n                            </div>\n                            <div class=\"table-responsive\" style=\"background-color: #FFF;\" *ngIf=\"isShowProjectDetails\">\n                                <table class=\"table table-bordered table-fixed\" style=\"background-color: #fff;\">\n                                    <thead>\n                                        <tr>\n                                            <th>Sr No</th>\n                                            <th *ngFor=\"let columnItem of projectReportDetailsColumnList\" > <span style=\"text-transform: capitalize !important;\"> {{ columnItem.split('_').join(' ') }} </span></th>\n                                            <!-- (click)=\"sortDetails(columnItem)\"  &nbsp;<span class=\"fa fa-sort\" *ngIf=\"projectDetailsReportSortBy ==columnItem \"  [ngClass]=\"{'fa-sort-asc':projectDetailsReportSortByReverse,'fa-sort-desc':!projectDetailsReportSortByReverse}\"></span> -->\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let rowItem of  projectReportDetailsModelList;let detailsIdx = index;\">\n                                                <td>{{ detailsSrNo + detailsIdx + 1 }}</td>\n                                            <td *ngFor=\"let dataItem of rowItem;let idx = index\">\n                                                <ng-container *ngIf=\"(currentProjectType == 'Pipeline' && (idx == 50 || idx == 51 || idx == 52)) || (currentProjectType == 'Conversion' && idx == 42)\">\n                                                    <a (click)=\"updateCurrentImage(dataItem);open(content)\">\n                                                        <img src=\"{{ dataItem || errorImage }}\" width=\"100\">\n                                                    </a>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"!((currentProjectType == 'Pipeline' && (idx == 50 || idx == 51 || idx == 52)) || (currentProjectType == 'Conversion' && idx == 42))\">\n                                                    <span *ngIf=\"dataItem && dataItem != 'null'\">\n                                                        {{ dataItem }}\n                                                    </span>\n                                                    <span *ngIf=\"dataItem && dataItem == 'null'\">-</span>\n                                                    <span *ngIf=\"!dataItem\">-</span>\n                                                </ng-container>                                                                                             \n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                <ngb-pagination [collectionSize]=\"paginationDetailsModel.TotalRecords\" \n                                            (pageChange)=\"changeDetailsPage($event)\" \n                                            [(page)]=\"paginationDetailsModel.CurrentPage\" \n                                            [maxSize]=\"paginationDetailsModel.PerPage\" \n                                            [rotate]=\"true\" [ellipses]=\"false\" \n                                            [boundaryLinks]=\"true\" size=\"sm\"></ngb-pagination>                            \n                            </div>\n                        </ng-container>                    \n                    </div>\n                </div>\n            </div>\n            <ngx-loading [show]=\"detailsLoading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>\n        </div>\n</div>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\t\t\n    <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Image Preview</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">        \n            <img class=\"text-center\" class=\"image-center\" src=\"{{ currentImageUrl }}\">\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n        </div>\t\t\n</ng-template>"

/***/ })

});
//# sourceMappingURL=11.chunk.js.map