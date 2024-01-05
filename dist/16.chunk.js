webpackJsonp([16],{

/***/ "../../../../../src/app/layout/change-password/change-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_change_password_component__ = __webpack_require__("../../../../../src/app/layout/change-password/component/change-password.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_change_password_component__["a" /* ChangePasswordComponent */] }
];
var ChangePasswordRoutingModule = (function () {
    function ChangePasswordRoutingModule() {
    }
    return ChangePasswordRoutingModule;
}());
ChangePasswordRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ChangePasswordRoutingModule);

//# sourceMappingURL=change-password-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/change-password/change-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_routing_module__ = __webpack_require__("../../../../../src/app/layout/change-password/change-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_change_password_component__ = __webpack_require__("../../../../../src/app/layout/change-password/component/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChangePasswordModule = (function () {
    function ChangePasswordModule() {
    }
    return ChangePasswordModule;
}());
ChangePasswordModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__change_password_routing_module__["a" /* ChangePasswordRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__component_change_password_component__["a" /* ChangePasswordComponent */]]
    })
], ChangePasswordModule);

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/change-password/component/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_change_password_service__ = __webpack_require__("../../../../../src/app/layout/change-password/service/change-password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(changePasswordService, toastrService, router, route, titleService) {
        this.changePasswordService = changePasswordService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Change Password");
    };
    ChangePasswordComponent.prototype.disabledButton = function () {
        if (this.newPassword && this.newPasswordCopy && this.newPassword != '' && this.newPasswordCopy != '' && this.newPassword == this.newPasswordCopy) {
            return false;
        }
        else {
            return true;
        }
    };
    ChangePasswordComponent.prototype.changePassword = function (changePasswordForm) {
        var _this = this;
        if (changePasswordForm.valid) {
            this.changePasswordService.changePassword(this.newPassword).subscribe(function (result) {
                if (result.Error) {
                    _this.toastrService.error(result.ErrorMessage);
                }
                else {
                    _this.toastrService.success(result.SuccessMessage);
                    _this.router.navigate(['/user-details']);
                }
            });
        }
        else {
            this.toastrService.error("Please provide required and valid details.");
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/layout/change-password/template/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/change-password/styles/change-password.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_change_password_service__["a" /* ChangePasswordService */], __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_change_password_service__["a" /* ChangePasswordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_change_password_service__["a" /* ChangePasswordService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/change-password/service/change-password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordService = (function () {
    function ChangePasswordService(http) {
        this.http = http;
        this.changePasswordUrl = __WEBPACK_IMPORTED_MODULE_2__shared_constants_constants__["a" /* Constants */].ServerUrl + 'dashboard/changeUserPassword';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    ChangePasswordService.prototype.changePassword = function (newPassword) {
        var _this = this;
        var url = this.changePasswordUrl;
        var data = [{ "LoggedInEmployeeId": this.loggedInEmployeeId },
            { "LoggedInUserRole": this.loggedInUserRole },
            { "NewPassword": newPassword }];
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, data, options)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    ChangePasswordService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    return ChangePasswordService;
}());
ChangePasswordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ChangePasswordService);

var _a;
//# sourceMappingURL=change-password.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/change-password/styles/change-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  color: #f00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/change-password/template/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n<app-page-header [heading]=\"'ChangePassword'\" [icon]=\"'fa-key'\"></app-page-header>    \n<form (ngSubmit)=\"changePassword(changePasswordForm)\" #changePasswordForm=\"ngForm\" id=\"changePasswordForm\" novalidate>\n  <div class=\"row\" >\n    <div class=\"col col-lg-12\">\n      <div class=\"card mb-3\">        \n        <div class=\"col col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <fieldset class=\"form-group\">\n                <label>Old Password <span class=\"error\">*</span></label>                            \n                <input type=\"text\" name=\"currentPassword\" \n                  [(ngModel)]=\"currentPassword\"\n                  class=\"form-control\"\n                  placeholder=\"Current Password\"\n                  #currentpassword=\"ngModel\"\n                  required>\n                <p class=\"error\" *ngIf=\"currentpassword.errors?.required && !changePasswordForm.pristine\">This field is required</p>\n              </fieldset>\n            </div>\n            <div class=\"col-lg-4\">\n              <fieldset class=\"form-group\">\n                <label>New Password<span class=\"error\">*</span></label>\n                <input type=\"text\" name=\"newPassword\" \n                  [(ngModel)]=\"newPassword\" \n                  class=\"form-control\" \n                  placeholder=\"New Password\" \n                  #newpassword=\"ngModel\" required>\n                <p class=\"error\" *ngIf=\"newpassword.errors?.required && changePasswordForm.submitted\">This field is required</p>\n              </fieldset>\n            </div>                \n            <div class=\"col-lg-4\">\n              <fieldset class=\"form-group\">\n                <label>Retype New Password <span class=\"error\">*</span></label>\n                <input type=\"text\" \n                  name=\"newPasswordCopy\" \n                  [(ngModel)]=\"newPasswordCopy\" \n                  class=\"form-control\" \n                  placeholder=\"Retype New Password\" \n                  #newpasswordCopy=\"ngModel\" \n                  required>\n                <p class=\"error\" *ngIf=\"newpasswordCopy.errors?.required && !changePasswordForm.pristine\">This field is required</p>\n              </fieldset>\n            </div> \n          </div>         \n        </div>\n      </div>\n    </div>\n  </div>\n<button type=\"submit\" [disabled]=\"disabledButton()\"\n    class=\"btn btn-info pull-right btn-md\">Submit</button>             \n</form>\n</div>"

/***/ })

});
//# sourceMappingURL=16.chunk.js.map