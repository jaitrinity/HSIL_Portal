webpackJsonp([6],{

/***/ "../../../../../src/app/layout/role-master/component/role-master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_role_master_service__ = __webpack_require__("../../../../../src/app/layout/role-master/service/role-master.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_role_master_model__ = __webpack_require__("../../../../../src/app/layout/role-master/model/role-master.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMasterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RoleMasterComponent = (function () {
    function RoleMasterComponent(titleService, router, _commonService, route, _authenticationService, _roleMasterService, _toastrService) {
        this.titleService = titleService;
        this.router = router;
        this._commonService = _commonService;
        this.route = route;
        this._authenticationService = _authenticationService;
        this._roleMasterService = _roleMasterService;
        this._toastrService = _toastrService;
        this.loading = false;
        this.key = 'Id'; //set default
        this.reverse = false;
        this.roleMasterModel = new __WEBPACK_IMPORTED_MODULE_5__model_role_master_model__["a" /* RoleMasterModel */]();
        this.roleMasterModelList = new Array();
        this.roleList = new Array();
        this.addNewRole = false;
        this.dateTimeFormatter = __WEBPACK_IMPORTED_MODULE_7__shared_constants_constants__["a" /* Constants */].DateTimeFormatter;
    }
    RoleMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Role Master');
        this.route.queryParams.forEach(function (params) {
            var isAdd = params['type'];
            _this.roleMasterModel.Id = params['details'];
            _this.currentParentId = params['parentId'] ? params['parentId'] : -1;
            window.scrollTo(0, 0);
            _this.getUserRolesList();
            if (isAdd == 'add') {
                _this.addNewRole = true;
                _this.getBrandList();
            }
            else if (_this.roleMasterModel.Id) {
                _this.getRoleMasterDetails();
            }
            else {
                _this.addNewRole = false;
                var item = void 0;
                _this.getRoleMasterDetails();
            }
        });
    };
    RoleMasterComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    RoleMasterComponent.prototype.getRoleDetails = function () {
        this.router.navigateByUrl("/role-master?parentId=" + this.currentParentId);
    };
    RoleMasterComponent.prototype.getBrandList = function () {
        var _this = this;
        this.loading = true;
        this._commonService.getBrandList().subscribe(function (result) {
            _this.loading = false;
            if (!result) {
                _this._toastrService.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this._toastrService.error(result.ErrorMessage);
            }
            else {
                _this.brandList = result.Data;
            }
        });
    };
    RoleMasterComponent.prototype.getRoleMasterDetails = function () {
        var _this = this;
        this.loading = true;
        this._roleMasterService.getRoleMasterDetails(this.currentParentId).subscribe(function (result) {
            _this.loading = false;
            _this.roleMasterModelList = [];
            _this.roleMasterModelList = new Array();
            if (result.Error) {
                _this._toastrService.error(result.ErrorMessage);
            }
            else {
                _this._toastrService.success(result.SuccessMessage);
                _this.currentParent = result.CurrentParent;
                for (var i = 0; i < result.Data.length; i++) {
                    var roleMasterModel = new __WEBPACK_IMPORTED_MODULE_5__model_role_master_model__["a" /* RoleMasterModel */]();
                    roleMasterModel = result.Data[i];
                    if (result.Data[i].Status == 0) {
                        roleMasterModel.StatusName = 'In-Active';
                    }
                    else {
                        roleMasterModel.StatusName = 'Active';
                    }
                    _this.roleMasterModelList.push(roleMasterModel);
                }
            }
        });
    };
    RoleMasterComponent.prototype.deleteRoleMasterDetails = function (itemId) {
        var _this = this;
        this.loading = true;
        this._roleMasterService.deleteRoleMasterDetails(itemId).subscribe(function (result) {
            _this.loading = false;
            if (result.Error) {
                _this._toastrService.error(result.ErrorMessage);
            }
            else {
                _this._toastrService.success(result.SuccessMessage);
                _this.getRoleMasterDetails();
            }
        });
    };
    RoleMasterComponent.prototype.getUserRolesList = function () {
        var _this = this;
        this.loading = true;
        this._roleMasterService.getUserRolesList().subscribe(function (result) {
            _this.loading = false;
            _this.roleList = [];
            _this.roleList = new Array();
            if (result.Error) {
                _this._toastrService.error(result.ErrorMessage);
            }
            else {
                for (var i = 0; i < result.Data.length; i++) {
                    var role = new __WEBPACK_IMPORTED_MODULE_5__model_role_master_model__["a" /* RoleMasterModel */]();
                    role.Id = result.Data[i].role_id;
                    role.Name = result.Data[i].role_name;
                    _this.roleList.push(role);
                }
            }
        });
    };
    RoleMasterComponent.prototype.saveRoleDetail = function (createRoleForm) {
        var _this = this;
        this._authenticationService.markFormDirty(createRoleForm);
        if (!createRoleForm.valid) {
            this._toastrService.error("Please provide all required and valid details.");
        }
        else {
            this.loading = true;
            this._roleMasterService.addRoleMasterDetail(this.roleMasterModel).subscribe(function (result) {
                _this.loading = false;
                if (result.Error) {
                    _this._toastrService.error(result.ErrorMessage);
                }
                else {
                    _this.roleMasterModel = new __WEBPACK_IMPORTED_MODULE_5__model_role_master_model__["a" /* RoleMasterModel */]();
                    _this._toastrService.success(result.SuccessMessage);
                    _this.currentParentId = _this.roleMasterModel.Parent;
                    _this.getRoleDetails();
                }
            });
        }
    };
    return RoleMasterComponent;
}());
RoleMasterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-role-master',
        template: __webpack_require__("../../../../../src/app/layout/role-master/template/role-master.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/role-master/styles/role-master.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__service_role_master_service__["a" /* RoleMasterService */],
            __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__service_role_master_service__["a" /* RoleMasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_role_master_service__["a" /* RoleMasterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */]) === "function" && _g || Object])
], RoleMasterComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=role-master.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/role-master/model/role-master.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMasterModel; });
var RoleMasterModel = (function () {
    function RoleMasterModel() {
        this.Parent = '0';
        this.BrandName = '-1';
    }
    return RoleMasterModel;
}());

//# sourceMappingURL=role-master.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/role-master/role-master-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_role_master_component__ = __webpack_require__("../../../../../src/app/layout/role-master/component/role-master.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMasterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_role_master_component__["a" /* RoleMasterComponent */] }
];
var RoleMasterRoutingModule = (function () {
    function RoleMasterRoutingModule() {
    }
    return RoleMasterRoutingModule;
}());
RoleMasterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RoleMasterRoutingModule);

//# sourceMappingURL=role-master-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/role-master/role-master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__role_master_routing_module__ = __webpack_require__("../../../../../src/app/layout/role-master/role-master-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_role_master_component__ = __webpack_require__("../../../../../src/app/layout/role-master/component/role-master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMasterModule", function() { return RoleMasterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { Ng2SearchPipeModule } from 'ng2-search-filter';


var RoleMasterModule = (function () {
    function RoleMasterModule() {
    }
    return RoleMasterModule;
}());
RoleMasterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__role_master_routing_module__["a" /* RoleMasterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__component_role_master_component__["a" /* RoleMasterComponent */]
        ]
    })
], RoleMasterModule);

//# sourceMappingURL=role-master.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/role-master/service/role-master.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleMasterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleMasterService = (function () {
    function RoleMasterService(http) {
        this.http = http;
        this.getRoleMasterDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'RoleMaster/fetchUserRoles';
        this.addRoleMasterDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'RoleMaster/saveUserRoles';
        this.deleteRoleMasterDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'RoleMaster/fetchDashboardContent';
        this.getRoleListUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'RoleMaster/fetchUserRolesList';
    }
    /* get all roles info */
    RoleMasterService.prototype.getRoleMasterDetails = function (parentRoleId) {
        var timeStamp = +new Date();
        var url = this.getRoleMasterDetailsUrl + '/' + parentRoleId + '/' + timeStamp;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /* get single role info */
    RoleMasterService.prototype.getUserRolesList = function () {
        var timeStamp = +new Date();
        var url = this.getRoleListUrl + '/' + timeStamp;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /* get delete role info */
    RoleMasterService.prototype.deleteRoleMasterDetails = function (RoleId) {
        var timeStamp = +new Date();
        var url = this.deleteRoleMasterDetailsUrl + '/' + RoleId + '/' + timeStamp;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /* Add role info */
    RoleMasterService.prototype.addRoleMasterDetail = function (roleMasterModel) {
        var _this = this;
        var url = this.addRoleMasterDetailsUrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, roleMasterModel, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    RoleMasterService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return RoleMasterService;
}());
RoleMasterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], RoleMasterService);

var _a;
//# sourceMappingURL=role-master.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/role-master/styles/role-master.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  color: #F00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/role-master/template/role-master.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Role Master'\" [icon]=\"'fa-user'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-sm-12\" *ngIf=\"!addNewRole\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-7\">\n                            <h5 class=\"pull-left\"><b>Role </b><span *ngIf=\"currentParentId != '-1'\">: {{ currentParent || 'Parent' }} </span></h5>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <a class=\"btn btn-info btn-sm pull-right\" routerLink=\"/role-master\" [routerLinkActive]=\"['router-link-active']\" [queryParams]=\"{ type: 'add' }\">Add New Role</a>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <select name=\"currentParentId\" [(ngModel)]=\"currentParentId\" (change)=\"getRoleDetails();\" class=\"form-control btn-sm\">\n                                <option value=\"-1\">All Roles</option>\n                                <option value=\"0\">All Parent Roles Only</option>\n                                <option *ngFor=\"let role of roleList\" value=\"{{ role.Id }}\">{{ role.Name }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-12\" *ngIf=\"!addNewRole\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <div class=\"table-responsive\" *ngIf=\"roleMasterModelList && roleMasterModelList.length > 0\">\n                        <table class=\"table\">\n                            <thead>\n                                <th (click)=\"sort('Id')\">Sr No &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Id'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <th (click)=\"sort('Name')\">Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='Name'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>                                \n                                <th *ngIf=\"currentParentId == '-1'\" (click)=\"sort('ParentName')\">Parent &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='ParentName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <th (click)=\"sort('BrandName')\">Brand Name &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='BrandName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <th (click)=\"sort('CreatedBy')\">Created By &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='CreatedBy'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <th (click)=\"sort('CreatedDate')\">Created Date &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='CreatedDate'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <th (click)=\"sort('StatusName')\">Status &nbsp;<span class=\"fa fa-sort\" *ngIf=\"key =='StatusName'\" [ngClass]=\"{'fa-sort-asc':reverse,'fa-sort-desc':!reverse}\"></span></th>\n                                <!-- <th>Remove</th> -->\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of roleMasterModelList | orderBy: key : reverse | paginate: { itemsPerPage: 10, currentPage: p }\">\n                                    <td>{{ item.Id }}</td>\n                                    <td>{{ item.Name }}</td>\n                                    <td *ngIf=\"currentParentId == '-1'\">{{ item.ParentName || 'Parent' }}</td>\n                                    <td >{{ item.BrandName }}</td>\n                                    <td>{{ item.CreatedBy }}</td>\n                                    <td>{{ item.CreatedDate }}</td>\n                                    <td>{{ item.StatusName }}</td>\n                                    <!-- <td><a class=\"btn btn-link btn-sm\" (click)=\"deleteRoleMasterDetails(item.Id)\"><i class=\"fa fa-times\"></i></a></td> -->\n                                </tr>\n                            </tbody>\n                        </table>\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h4 *ngIf=\"roleMasterModelList && roleMasterModelList.length == 0\">No Data Available!!!</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-12\" *ngIf=\"addNewRole\">\n            <div class=\"card mb-3\">\n                <div class=\"card-block\">\n                    <h5 class=\"pull-left\">Add Role Master Detail</h5>\n                    <a class=\"btn btn-info btn-sm pull-right\" routerLink=\"/role-master\" [routerLinkActive]=\"['router-link-active']\">Role Master Details</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-12\" *ngIf=\"addNewRole\">\n            <div class=\"card mb-3\">\n                <form (ngSubmit)=\"saveRoleDetail(createRoleForm)\" #createRoleForm=\"ngForm\" id=\"createRoleForm\" novalidate>\n                    <div class=\"card-block\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <fieldset class=\"form-group\">\n                                    <label>Role Name<span class=\"error\">*</span></label>\n                                    <input type=\"text\" name=\"title\" [(ngModel)]=\"roleMasterModel.Name\" class=\"form-control\" placeholder=\"Title\" pattern='^(?!\\s)([a-zA-Z0-9 _.\"()!?&]){1,}$' #Name=\"ngModel\" required>\n                                    <p class=\"error\" *ngIf=\"Name.errors?.required && !createRoleForm.pristine\">This field is required</p>\n                                    <p class=\"error\" *ngIf=\"Name.errors?.pattern && !createRoleForm.pristine\">Please provide a valid content.</p>\n                                </fieldset>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <fieldset class=\"form-group\">\n                                    <label>User Role Parent Role</label>\n                                    <select class=\"form-control\" [(ngModel)]=\"roleMasterModel.Parent\" name=\"Parent\" #Parent=\"ngModel\">\n                                        <option value=\"0\">Parent(Default)</option>\n                                        <option *ngFor=\"let role of roleList\" value=\"{{ role.Id }}\">{{ role.Name }}</option>\n                                    </select>\n                                </fieldset>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <fieldset class=\"form-group\">\n                                    <label>Brand Name<span class=\"error\">*</span></label>                                    \n                                    <select class=\"form-control\" [(ngModel)]=\"roleMasterModel.BrandName\" name=\"BrandName\" #BrandName=\"ngModel\" pattern='^(?!\\s)([a-zA-Z0-9 _.\"()!?&]){1,}$' required>                                        \n                                        <option value=\"-1\">Select Brand Name</option>\n                                        <option *ngFor=\"let item of brandList\" value=\"{{ item }}\">{{ item }}</option>\n                                    </select>                                    \n                                    <p class=\"error\" *ngIf=\"BrandName.errors?.pattern && !createRoleForm.pristine\">This field is required</p>                                    \n                                </fieldset>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <fieldset class=\"form-group\">\n                                    \n                                </fieldset>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button type=\"submit\" class=\"btn btn-info btn-sm\">Submit</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>"

/***/ })

});
//# sourceMappingURL=6.chunk.js.map