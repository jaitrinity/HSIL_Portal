webpackJsonp([18],{

/***/ "../../../../../src/app/layout/user-details/component/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_details_service__ = __webpack_require__("../../../../../src/app/layout/user-details/service/user-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_details_model__ = __webpack_require__("../../../../../src/app/layout/user-details/model/user-details.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = (function () {
    function UserDetailsComponent(userDetailsService, toastrService, titleService) {
        this.userDetailsService = userDetailsService;
        this.toastrService = toastrService;
        this.titleService = titleService;
        this.userDetailsModel = new __WEBPACK_IMPORTED_MODULE_3__model_user_details_model__["a" /* UserDetailsModel */]();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("User Details");
        this.getUserDetails();
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userDetailsService.getUserDetails().subscribe(function (result) {
            if (result.Error) {
                _this.toastrService.error(result.ErrorMessage);
            }
            else {
                _this.userDetailsModel.AssignedSubMenu = result.Data.ASSIGNED_SUB_MEU;
                _this.userDetailsModel.Brand = result.Data.BRAND;
                _this.userDetailsModel.Department = result.Data.DEPT;
                _this.userDetailsModel.Email = result.Data.EMAIL;
                _this.userDetailsModel.EmployeeId = result.Data.EMP_ID;
                _this.userDetailsModel.EmployeeName = result.Data.EMP_NAME;
                _this.userDetailsModel.Hub = result.Data.HUB;
                _this.userDetailsModel.Location = result.Data.LOCATION;
                _this.userDetailsModel.Mobile = result.Data.MOBILE;
                _this.userDetailsModel.RegrastrationDate = result.Data.REG_DATE;
                _this.userDetailsModel.Role = result.Data.ROLE;
                _this.userDetailsModel.Zone = result.Data.ZONE;
                _this.toastrService.success(result.SuccessMessage);
            }
        });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__("../../../../../src/app/layout/user-details/template/user-details.component.html"),
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_details_service__["a" /* UserDetailsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_details_service__["a" /* UserDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_details_service__["a" /* UserDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_toastr_ng2__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === "function" && _c || Object])
], UserDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-details/service/user-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsService = (function () {
    function UserDetailsService(http) {
        this.http = http;
        this.getUserDetailsUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'dashboard/getUserDetails';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    UserDetailsService.prototype.getUserDetails = function () {
        var _this = this;
        var url = this.getUserDetailsUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    UserDetailsService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return UserDetailsService;
}());
UserDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserDetailsService);

var _a;
//# sourceMappingURL=user-details.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-details/template/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'User Details'\" [icon]=\"'fa-user'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"col col-lg-12\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-4\">\n                            <label>Id:</label> {{ userDetailsModel.EmployeeId }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Name:</label> {{ userDetailsModel.EmployeeName }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Role:</label> {{ userDetailsModel.Role }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Brand:</label> {{ userDetailsModel.Brand }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Department:</label> {{ userDetailsModel.Department }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Email:</label> {{ userDetailsModel.Email }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Hub:</label> {{ userDetailsModel.Hub }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Location:</label> {{ userDetailsModel.Location }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Mobile:</label> {{ userDetailsModel.Mobile }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Zone:</label> {{ userDetailsModel.Zone }}\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <label>Regrastration Date:</label> {{ userDetailsModel.RegrastrationDate }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/layout/user-details/user-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_user_details_component__ = __webpack_require__("../../../../../src/app/layout/user-details/component/user-details.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_user_details_component__["a" /* UserDetailsComponent */] }
];
var UserDetailsRoutingModule = (function () {
    function UserDetailsRoutingModule() {
    }
    return UserDetailsRoutingModule;
}());
UserDetailsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], UserDetailsRoutingModule);

//# sourceMappingURL=user-details-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/user-details/user-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_details_routing_module__ = __webpack_require__("../../../../../src/app/layout/user-details/user-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_user_details_component__ = __webpack_require__("../../../../../src/app/layout/user-details/component/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsModule", function() { return UserDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserDetailsModule = (function () {
    function UserDetailsModule() {
    }
    return UserDetailsModule;
}());
UserDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__user_details_routing_module__["a" /* UserDetailsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__component_user_details_component__["a" /* UserDetailsComponent */]]
    })
], UserDetailsModule);

//# sourceMappingURL=user-details.module.js.map

/***/ })

});
//# sourceMappingURL=18.chunk.js.map