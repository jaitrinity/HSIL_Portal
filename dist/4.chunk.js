webpackJsonp([4],{

/***/ "../../../../../src/app/layout/quotation-management/quotation-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_management_component__ = __webpack_require__("../../../../../src/app/layout/quotation-management/quotation-management.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationManagementRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__quotation_management_component__["a" /* QuotationManagementComponent */] }
];
var QuotationManagementRoutingModule = (function () {
    function QuotationManagementRoutingModule() {
    }
    return QuotationManagementRoutingModule;
}());
QuotationManagementRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], QuotationManagementRoutingModule);

//# sourceMappingURL=quotation-management-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quotation-management/quotation-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Quatation Management'\" [icon]=\"'fa-users'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-sm-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-block\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                        <a class=\"btn col-sm-2 btn-border btn-sm\" *ngFor=\"let item of quotationTypeList\" [ngClass]=\"{'btn-info' : currentQuotationType == item }\" (click)=\"changeCurrentType(item)\">{{ item }}</a>\n                    </div>                        \n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-sm-10\">\n                <h5>{{ currentQuotationType }}</h5>\n            </div>                                               \n          </div>\n          <div *ngIf=\"currentQuotationType == 'Budgetory' || currentQuotationType == 'Quote to Customer'\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\" *ngIf=\"projectList.length !=0; else elseCondition\">\n                <div class=\"table-responsive\" style=\"background-color: #FFF;\" >\n                  <table class=\"table table-bordered table-fixed\" style=\"background-color: #fff;\">\n                    <thead>\n                      <tr>\n                          <th>Project Name</th>\n                          <th>Project Stage</th>\n                          <th>Project Type</th>\n                          <th>Brand</th>\n                          <th>State</th>\n                          <th>No Of Bath</th>\n                          <!-- <th>More Lead type</th> -->\n                          <!-- <th>More Firm Name</th> -->\n                          <th *ngIf=\"for_TM\">Action for TM</th>\n                          <th *ngIf=\"for_Commercial\">Action for Commercial</th>\n                          <th>Add Product</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let pl of projectList\">\n                        <td>{{pl.projectName}}</td>\n                        <td>{{pl.project_stage}}</td>\n                        <td>{{pl.project_type}}</td>\n                        <td>{{pl.brand}}</td>\n                        <td>{{pl.state}}</td>\n                        <td>{{pl.total_bath | number}}</td>\n                        <!-- <td>{{pl.more_lead_type}}</td> -->\n                        <!-- <td>{{pl.more_firm_name}}</td> -->\n                        <td *ngIf=\"for_TM\">\n                          <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(pl.project_quotation_id, 'TM')\" \n                            *ngIf=\"pl.project_quotation_status == 'QUO_02' || pl.project_quotation_status == 'QUO_05' || pl.project_quotation_status == 'QUO_08' || pl.project_quotation_status == 'QUO_11' \">\n                              PO Receive\n                          </a>\n                          <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(pl.project_quotation_id, 'TM')\" \n                          *ngIf=\"pl.project_quotation_status == 'QUO_04' || pl.project_quotation_status == 'QUO_07' || pl.project_quotation_status == 'QUO_10' || pl.project_quotation_status == 'QUO_13' || pl.project_quotation_status == 'QUO_16' \">\n                            Close \n                          </a>\n                        </td>\n                        <td *ngIf=\"for_Commercial\">\n                          <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(pl.project_id, 'Commercial')\"\n                          *ngIf=\"pl.project_po_id != null \">\n                              For Commercial Team\n                          </a>\n                        </td>\n                        <td><a href=\"javascript:void(0)\" (click)=\"addProduct(pl)\" *ngIf=\"pl.project_stage != 'Conversion'\">Add Product</a></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <ng-template #elseCondition>\n                <div class=\"col-sm-12\">\n                  <h1 class=\"text-warning text-center\">No record found</h1>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n          <div *ngIf=\"currentQuotationType == 'View Quotation'\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\" style=\"margin: 10px 0px;\">\n                <label>Project Name</label>\n                <select class=\"form-control\" [(ngModel)]=\"projectName\" (change)=\"changeProjectName()\">\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let pn of projectNameList\">{{pn}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\" *ngIf=\"quatationList.length !=0; else elseCondition\">\n                <div class=\"table-responsive\" style=\"background-color: #FFF;\">\n                  <table class=\"table table-bordered table-fixed\" style=\"background-color: #fff;\">\n                    <thead>\n                      <tr>\n                          <th>Quotation Id</th>\n                          <th>Quotation Type</th>\n                          <th>Project Name</th>\n                          <th>Project Stage</th>\n                          <th>Quotation Save Date</th>\n                          <th>Status</th>\n                          <th *ngIf=\"is_action_required_on_quotation\">Status</th>\n                          <th *ngIf=\"is_action_required_on_quotation\">Action</th>\n                          <th>PDF</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let ql of quatationList\">\n                        <td>{{ql.quotation_id}}</td>\n                        <td>\n                          <span *ngIf=\"ql.isdiscount==1\">Quote to Customer</span>\n                          <span *ngIf=\"ql.isdiscount!=1\">Budgetory</span>\n                        </td>\n                        <td>{{ql.project_name}}</td>\n                        <td>{{ql.project_stage}}</td>\n                        <td>{{ql.quotationSaveDate}}</td>\n                        <td>{{ql.quotStatusDesc}}</td>\n                        <td *ngIf=\"is_action_required_on_quotation\">\n                          <div *ngIf=\"ql.isdiscount == 1\">\n                            {{ql.pendingTo}}\n                          </div>\n                        </td>\n                        <td *ngIf=\"is_action_required_on_quotation\">\n                          <div *ngIf=\"ql.isdiscount == 1\">\n                            <!-- <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_SH')\" *ngIf=\"ql.quotationStatus == 'QUO_01' \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_ZM')\" *ngIf=\"ql.quotationStatus == 'QUO_03' \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_NSM')\" *ngIf=\"ql.quotationStatus == 'QUO_06' \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_CEO')\" *ngIf=\"ql.quotationStatus == 'QUO_09' \">Action</a> -->\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_SH')\" *ngIf=\"ql.quotationStatus == 'QUO_01' && (loggedInUserRole == 'HINDWARE_SH') \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_ZM')\" *ngIf=\"ql.quotationStatus == 'QUO_03' && (loggedInUserRole == 'HINDWARE_ZM') \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_NSM')\" *ngIf=\"ql.quotationStatus == 'QUO_06' && (loggedInUserRole == 'HINDWARE_NSM') \">Action</a>\n                            <a href = \"javascript:void(0)\" (click)=\"openApprovalPortal(ql.quotation_id, 'HINDWARE_CEO')\" *ngIf=\"ql.quotationStatus == 'QUO_09' && (loggedInUserRole == 'HINDWARE_CEO' || loggedInUserRole == 'HINDWARE_PR') \">Action</a>\n                          </div>\n                          \n                        </td>\n                        <td>\n                          <a href=\"javascript:void(0)\" (click)=\"viewQuotPdf(ql.quotation_id,ql.isdiscount)\" *ngIf=\"ql.project_stage !='Lost' \">View PDF</a>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <ng-template #elseCondition>\n                <div class=\"col-sm-12\">\n                  <h1 class=\"text-warning text-center\">No record found</h1>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"snapshotLoading\" [config]=\"{ backdropBorderRadius: '0px' }\"></ngx-loading>\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content itemContent\">\n      <div class=\"modal-header\">\n        <!-- <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5> -->\n        <input type=\"text\" autocomplete=\"off\" class=\"form-control input-sm\" id=\"item-search-txt\" placeholder=\"Search\" (input) = \"searchItem($event)\"/>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"max-height: 440px;overflow: auto;background: lightgray\">\n        <!-- <img src =\"../../../assets/images/mobile.png\"/> -->\n        <div class=\"row\" *ngFor=\"let si of searchItemList;\" style=\"margin-bottom: 10px;background: white\">\n          <div class=\"col-sm-3\">\n            <label>Image</label>\n            <img [src] = \"si.image\" (click)=\"openImgModal(si.image)\" style=\"width: 100px;height: 100px;\" class=\"img-thumbnail\"/>\n          </div>\n          <div class=\"col-sm-3\">\n            <label>Line Diagram</label>\n            <img [src] = \"si.lineDiagram\" (click)=\"openImgModal(si.lineDiagram)\" style=\"width: 100px;height: 100px;\" class=\"img-thumbnail\"/>\n          </div>\n          <div class=\"col-sm-4\">\n              <div>{{si.item_desc}}</div>\n              <div>{{si.item_code}}</div>\n              <div>{{si.color}}</div>\n              <div>{{si.mrp}}</div>\n          </div>\n          <div class=\"col-sm-2\">\n            <button class=\"btn btn-block btn-default\" (click)=\"addAndRemoveItem('add',si.item_code)\">+</button>\n            <input type=\"text\" class=\"form-control input-sm addItemCount\" [attr.mrp]=\"si.mrp\" id=\"item_{{si.item_code}}\" value=\"0\" [disabled]=\"true\">\n            <button class=\"btn btn-block btn-default\" (click)=\"addAndRemoveItem('remove',si.item_code)\">-</button>\n\n          </div>\n          <!-- {{si.item_code}} -- {{si.cat_code}} - {{si.item_desc}} -- {{si.category}} -- {{si.image}} -- {{si.mrp}}\n          -- {{si.gst}} -- {{si.color}} -->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n        <input type=\"text\" class=\"form-control input-sm\" value=\"0\" id=\"total_mrp\" [disabled]=\"true\" placeholder=\"Total\"/>\n        <input type=\"text\" class=\"form-control input-sm\" value=\"0\" id=\"total_quantity\" [disabled]=\"true\" placeholder=\"Total Quantity\"/>\n        <button class=\"btn btn-block my-btn\" (click)=\"confirmToAddItem()\">Confirm</button>\n      </div>\n    </div>\n\n    <div class=\"modal-content addedItemContent\">\n      <div class=\"modal-header\">\n        <span (click)=\"backToAddItem('itemContent','addedItemContent')\" class=\"backIcon\">\n            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back\n        </span>\n        <span>Checkout</span>\n        <span></span>\n      </div>\n      <div class=\"modal-body\" style=\"max-height: 300px;overflow: auto;background: lightgray\">\n        <div class=\"row\" *ngFor=\"let si of addedItemInfo;let i = index\" style=\"margin-bottom: 10px;background: white\">\n          <div class=\"col-sm-3\">\n            <label>Image</label>\n            <img [src] = \"si.image\" (click)=\"openImgModal(si.image)\" style=\"width: 100px;height: 100px;\" class=\"img-thumbnail\"/>\n          </div>\n          <div class=\"col-sm-3\">\n            <label>Line Diagram</label>\n            <img [src] = \"si.lineDiagram\" (click)=\"openImgModal(si.lineDiagram)\" style=\"width: 100px;height: 100px;\" class=\"img-thumbnail\"/>\n          </div>\n          <div class=\"col-sm-4\">\n            <div>{{si.item_desc}}</div>\n            <div>{{si.item_code}}</div>\n            <div>{{si.color}}</div>\n            <div>{{si.mrp}}</div>\n            <!-- <div style=\"display: flex;align-items: center\">\n              <label>Exclusive</label>  &nbsp;  \n              <label class=\"switch\" (click)=\"excIncGst(si.totalPrice,si.gst,si.item_code)\">\n                <input type=\"checkbox\" id=\"gst_{{si.item_code}}\">\n                <span class=\"slider round\"></span> \n              </label>  &nbsp;\n              <label>GST</label> &nbsp; \n            </div> -->\n          </div>\n          <div class=\"col-sm-2 text-center\">\n            <div style=\"margin: 20px 10px\">Qty : {{si.quantity}}</div>\n            <input type=\"hidden\" class=\"total_price\" id=\"total_price_{{si.item_code}}\" value=\"{{si.totalPrice}}\"/>\n            <input type=\"hidden\" class=\"tax_price\" id=\"tax_price_{{si.item_code}}\" value = 0/>\n            <input type=\"hidden\" class=\"gst\" id=\"gst_value_{{si.item_code}}\" value = 0/>\n            <input type=\"hidden\" class=\"discount\" id=\"discount_value_{{si.item_code}}\" value = 0/>\n            <!-- <div class=\"text-center\" *ngIf=\"currentQuotationType == 'Quote to Customer' \"> -->\n              <button class=\"btn btn-block my-btn\" (click)=\"openDiscount(si.item_code,si)\">Discount</button>\n              <label id=\"discount_value_HTML_{{si.item_code}}\">0.0</label> %\n            <!-- </div> -->\n          </div>\n \n        </div>\n        \n      </div>\n      <div class=\"modal-footer addedItemContent-footer\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Project Name</label>\n          </div>\n          <div class=\"col-sm-6\">\n            {{projectName}}\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Summary</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Total Net Price</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <label>{{totalConfirmPrice}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Total Tax</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <label>{{totalConfirmTax}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Total Gross Price</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <label>{{totalConfirmGrossPrice}}</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label>Total Quantity</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <label>{{totalConfirmQuantity}}</label>\n          </div>\n        </div>\n        <!-- <div class=\"row\"> -->\n          <div class=\"col-sm-6\">\n            <!-- <button class=\"btn btn-block\">Add Product</button> -->\n          </div>\n          <div class=\"col-sm-6\">\n            <button class=\"btn btn-block my-btn\" (click)=\"submitCheckout()\">Submit</button>\n          </div>\n        <!-- </div> -->\n      </div>\n    </div>\n\n    <div class=\"modal-content customerDetailsContent\">\n      <div class=\"modal-header\">\n        <span (click)=\"backToAddItem('addedItemContent','customerDetailsContent')\" class=\"backIcon\">\n            <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Back\n        </span>\n        <span>Customer Details</span>\n        <span></span>\n      </div>\n      <div class=\"modal-body\" style=\"max-height: 300px;overflow: auto;\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label>Customer Name</label>\n            <select [(ngModel)] = \"customerName\" class=\"form-control input-sm\" id=\"custmerNameInput\">\n              <option value=\"\">Select</option>\n              <option value=\"{{cl.custCode}}---{{cl.custName}}\" *ngFor=\"let cl of customerList\">{{cl.custName}}</option>\n            </select>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label>Customer name</label>\n            <input type=\"text\" [(ngModel)] = \"customerName\" class=\"form-control input-sm\" id=\"custmerNameInput\"/>\n          </div>\n        </div> -->\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <label>Mobile No</label>\n            <input type=\"text\" [(ngModel)] = \"mobileNo\" class=\"form-control input-sm\" OnlyNumber=\"true\" LengthValidater=\"10\" id=\"mobileNoInput\"/>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Email Id</label>\n              <input type=\"text\" [(ngModel)] = \"emailId\" class=\"form-control input-sm\" id=\"emailIdInput\"/>\n          </div>\n \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Address</label>\n              <input type=\"text\" [(ngModel)] = \"address\" class=\"form-control input-sm\" id=\"addressInput\"/>\n          </div>\n \n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>State</label>\n              <input type=\"text\" [(ngModel)] = \"state\" class=\"form-control input-sm\" id=\"stateInput\"/>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>City</label>\n              <input type=\"text\" [(ngModel)] = \"city\" class=\"form-control input-sm\" id=\"cityInput\"/>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Pincode</label>\n              <input type=\"text\" [(ngModel)] = \"pincode\" class=\"form-control input-sm\" OnlyNumber=\"true\" LengthValidater=\"6\" id=\"pincodeInput\"/>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Type</label>\n              <input type=\"text\" [(ngModel)] = \"type\" class=\"form-control input-sm\" id=\"typeInput\"/>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Firm Name</label>\n              <input type=\"text\" [(ngModel)] = \"firmName\" class=\"form-control input-sm\" id=\"firmNameInput\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"currentQuotationType == 'Quote to Customer' \">\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>SW (Past Sales History in Lacs)</label>\n                <input type=\"text\" [(ngModel)] = \"SW_PAST\" class=\"form-control input-sm\" OnlyNumber=\"true\" id=\"SW_PASTInput\"/>\n            </div>\n          </div>\n         \n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Faucets (Past Sales History in Lacs)</label>\n                <input type=\"text\" [(ngModel)] = \"FAUCETS_PAST\" class=\"form-control input-sm\" OnlyNumber=\"true\" id=\"FAUCETS_PASTInput\"/>\n            </div>\n          </div> -->\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Past Sales History in Lacs</label>\n                <input type=\"text\" [(ngModel)] = \"PAST_Sales\" class=\"form-control input-sm\" OnlyNumber=\"true\" id=\"PAST_SalesInput\"/>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Ref ZQT Number</label>\n                <input type=\"text\" [(ngModel)] = \"Ref_ZQT\" class=\"form-control input-sm\" id=\"Ref_ZQTInput\"/>\n            </div>\n          </div>\n          \n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>TOD on Project Sales (%)</label>\n                <input type=\"text\" [(ngModel)] = \"TOD\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"TODInput\"/>\n            </div>\n          </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Extra liability Faucets (%)</label>\n                <input type=\"text\" [(ngModel)] = \"Liability_FAUCETS\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"Liability_FAUCETSInput\"/>\n            </div>\n          </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>In built TOD/Extra Liability SW (%)</label>\n                <input type=\"text\" [(ngModel)] = \"Liability_SW\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"Liability_SWInput\"/>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Payment Terms</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"PAY_TERMS\" id=\"PAY_TERMSInput\">\n                  <option value=\"\">Select</option>\n                  <!-- <option value=\"ZRPD\">ZRPD (Advance)</option>\n                  <option value=\"Z003\">Z003 (3 days)</option>\n                  <option value=\"Z005\">Z005 (5 days)</option>\n                  <option value=\"Z007\">Z007 (7 days)</option>\n                  <option value=\"Z010\">Z010 (10 days)</option>\n                  <option value=\"Z015\">Z015 (15 days)</option>\n                  <option value=\"Z021\">Z021 (21 days)</option>\n                  <option value=\"Z030\">Z030 (30 days)</option> -->\n                  <option value=\"{{pt.paramCode}}\" *ngFor=\"let pt of payTermList\">{{pt.paramDesc}}</option>\n                </select>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Payment Terms for SW</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"PAY_TERMS_SW\" id=\"PAY_TERMS_SWInput\">\n                  <option value=\"\">Select</option>\n                  <option>ZRPD (Advance)</option>\n                  <option>Z005 (5 days)</option>\n                  <option>Z015 (15 days)</option>\n                  <option>Z030 (30 days)</option>\n                  <option>Z045 (45 days)</option>\n                  <option>Z060 (60 days)</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Payment Terms for faucets</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"PAY_TERMS_FAUCETS\" id=\"PAY_TERMS_FAUCETSInput\">\n                  <option value=\"\">Select</option>\n                  <option>Z007 (7 Days)</option>\n                  <option>Z021 (21 Days)</option>\n                  <option>Z030 (30 Days)</option>\n                  <option>Z045 (45 Days)</option>\n                  <option>Z060 (60 Days)</option>\n                </select>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Freight given by</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"FREIGHT_GIVEN_BY\" id=\"FREIGHT_GIVEN_BYInput\">\n                  <option value=\"\">Select</option>\n                  <option>Dealer</option>\n                  <option>Company</option>\n                </select>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Freight for Faucets</label>\n                <input type=\"text\" [(ngModel)] = \"FREIGHT_FAUCETS\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"FREIGHT_FAUCETSInput\"/>\n            </div>\n          </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Freight for SW</label>\n                <input type=\"text\" [(ngModel)] = \"FREIGHT_SW\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"FREIGHT_SWInput\"/>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <label>Material dispatch from</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"DISPATCH_FROM\" id=\"DISPATCH_FROMInput\">\n                  <option value=\"\">Select</option>\n                  <option>1204 KAHARANI TRADING DIVISION</option>\n                  <option>1101 Ceramic Division I (BAHADURGARH)</option>\n                  <option>1102 Ceramic Division II (BIBINAGAR)</option>\n                </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label>ORC</label>\n              <input type=\"text\" [(ngModel)] = \"ORC\" class=\"form-control input-sm\" OnlyNumberWithDecimal=\"true\" id=\"ORCInput\"/>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <label>Term And Condtion</label>\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngFor=\"let tnc of termAndCondtionList\">\n          <div class=\"col-sm-12\">\n              <label> \n                <input type=\"checkbox\" class=\"termAndCondtion\" [attr.condition_id] = \"tnc.condition_id\" checked=\"currentQuotationType == 'Budgetory' \"\n                [disabled]=\"currentQuotationType == 'Budgetory' \"/> \n                {{tnc.condition_name}}\n              </label>\n          </div>\n        </div> -->\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <ol>\n                <li *ngFor=\"let tnc of termAndCondtionList\" class=\"termAndCondtion\" [attr.condition_id] = \"tnc.condition_id\">{{tnc.condition_name}}</li>\n              </ol>\n          </div>\n          <div class=\"col-sm-12\">\n            <label>Remark</label>\n            <textarea rows=\"5\" class=\"form-control\" [(ngModel)]=\"remark\" id=\"remarkInput\"></textarea>\n          </div>\n        </div>\n        \n      </div>\n      <div class=\"modal-footer addedItemContent-footer\">\n        <!-- <div class=\"row\"> -->\n          <div class=\"col-sm-6\">\n            <!-- <button class=\"btn btn-block my-btn\">Save to Draft</button> -->\n          </div>\n          <div class=\"col-sm-6\">\n            <button class=\"btn btn-block my-btn\" (click)=\"saveSkuData()\">Submit</button>\n          </div>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"discountModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"discountModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n  \n          </div>\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <input type=\"hidden\" id =\"discountOnItemcode\"/>\n                <input type=\"hidden\" id =\"itemGrossPrice\"/>\n                <input type=\"hidden\" id =\"itemCategory\"/>\n                <input type=\"hidden\" id =\"itemQuantity\"/>\n                <label>Gross Price : <span id =\"itemGrossPrice_HTML\"></span> </label>\n              </div>\n              <div class=\"col-sm-12\">\n                <label>Net Price : <span id =\"itemNetPrice\"></span> </label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <label>Discount on MRP in % :</label>\n                <input type=\"text\" autocomplete=\"off\" class=\"form-control\" id=\"discount_txt\" (input)=\"applyDiscount($event)\" OnlyNumberWithDecimal=\"true\" />\n              </div>\n            </div>\n            \n          </div>\n          <div class=\"modal-footer\">\n              <button class=\"btn btn-block my-btn\" (click)=\"closeAnyModal('discountModal')\">Cancel</button>\n              <button class=\"btn btn-block my-btn\" (click)=\"applyDiscountOnItem()\">Add</button>\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal fade\" id=\"imageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"imageModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Image</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\" style=\"background: lightgray\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <img [src]=\"imageUrl\" style=\"width: 100%;height:100%\"/>\n                </div>\n              </div>\n              \n            </div>\n            <!-- <div class=\"modal-footer\">\n                <button class=\"btn btn-block my-btn\" (click)=\"closeAnyModal('imageModal')\">Cancel</button>\n            </div> -->\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/layout/quotation-management/quotation-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header:after, .modal-header:before {\n  content: none !important; }\n\n.modal-backdrop {\n  display: none; }\n\n.modal {\n  background: rgba(0, 0, 0, 0.5); }\n\n.addedItemContent-footer {\n  display: unset; }\n\n.addedItemContent, .customerDetailsContent {\n  display: none; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 22px; }\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 17px;\n  width: 20px;\n  left: 6px;\n  bottom: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.backIcon {\n  cursor: pointer; }\n\n.my-btn {\n  height: 30px;\n  background-color: #D0424C;\n  color: white; }\n\n.btn-block + .btn-block {\n  margin-top: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/quotation-management/quotation-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_quo_mgt_service__ = __webpack_require__("../../../../../src/app/layout/quotation-management/service/quo-mgt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuotationManagementComponent = (function () {
    function QuotationManagementComponent(route, router, _quotationManagementService, toastr, titleService) {
        this.route = route;
        this.router = router;
        this._quotationManagementService = _quotationManagementService;
        this.toastr = toastr;
        this.titleService = titleService;
        this.project_id = "";
        this.project_type = "";
        this.projectName = "";
        this.snapshotLoading = false;
        this.customerName = "";
        this.mobileNo = "";
        this.emailId = "";
        this.address = "";
        this.state = "";
        this.city = "";
        this.pincode = "";
        this.type = "";
        this.firmName = "";
        this.remark = "";
        this.noOfBath = 0;
        this.payTermList = [
            // {paramCode : "ZRPD", paramDesc : "ZRPD (Advance)"},
            // {paramCode : "Z003", paramDesc : "Z003 (3 days)"},
            // {paramCode : "Z005", paramDesc : "Z005 (5 days)"},
            // {paramCode : "Z007", paramDesc : "Z007 (7 days)"},
            // {paramCode : "Z010", paramDesc : "Z010 (10 days)"},
            // {paramCode : "Z015", paramDesc : "Z015 (15 days)"},
            // {paramCode : "Z021", paramDesc : "Z021 (21 days)"},
            // {paramCode : "Z030", paramDesc : "Z030 (30 days)"},
            { paramCode: "Z003", paramDesc: "Z003 " },
            { paramCode: "Z030", paramDesc: "Z030 " },
        ];
        this.termAndCondtionList = [];
        this.is_action_required_on_quotation = false;
        this.quatationList = [];
        this.tempQuatationList = [];
        this.projectNameList = [];
        this.quotationDiscountMatrix = [];
        this.for_TM = false;
        this.for_Commercial = false;
        this.customerList = [];
        this.addedItemObjList = [];
        this.addedItemList = [];
        this.totalConfirmPrice = 0;
        this.totalConfirmGrossPrice = 0;
        this.totalConfirmQuantity = 0;
        this.addedItemInfo = [];
        this.totalConfirmTax = 0;
        this.itemList = [];
        this.SW_PAST = "";
        this.FAUCETS_PAST = "";
        this.PAST_Sales = "";
        this.Ref_ZQT = "";
        // TOD : string = "";
        // Liability_FAUCETS : string = "";
        // Liability_SW : string = "";
        this.PAY_TERMS = "";
        // PAY_TERMS_FAUCETS : string = "";
        // PAY_TERMS_SW : string = "";
        this.FREIGHT_GIVEN_BY = "";
        // FREIGHT_FAUCETS : string = "";
        // FREIGHT_SW : string = "";
        this.DISPATCH_FROM = "";
        this.ORC = "";
        this.termAndCondtion = "";
        this.discount = 0;
        this.imageUrl = "";
        // this.quotationTypeList = ["Budgetory","Quote to Customer","View Quotation","Draft"];
        this.quotationTypeList = ["Budgetory", "Quote to Customer", "View Quotation"];
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    QuotationManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.forEach(function (params) {
            // this.getMonthsList();
            _this.currentQuotationType = params['type'];
            window.scrollTo(0, 0);
            _this.getProjectReportSnapshot();
            _this.getQuotationDiscountMatrix();
            //if(this.currentQuotationType == 'Quote to Customer'){
            _this.getAllTermAndCondtion();
            //}
            if (_this.currentQuotationType == 'View Quotation') {
                _this.getQuotationByEmpId();
            }
            _this.titleService.setTitle("Quotation Management:" + _this.currentQuotationType);
        });
    };
    QuotationManagementComponent.prototype.changeCurrentType = function (item) {
        this.router.navigateByUrl('/quotation-management?type=' + item);
        // if(item === "Enquiry"){
        // this.ishotWarmCode = false;
        // }
        // else{
        // this.ishotWarmCode = true;
        // }
    };
    QuotationManagementComponent.prototype.getAllTermAndCondtion = function () {
        var _this = this;
        var jsonData = {};
        this._quotationManagementService.getDataByAnyPostRequest('getAllTermsAndConditions', jsonData).subscribe(function (result) {
            _this.snapshotLoading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.termAndCondtionList = result.wrappedList[0];
            }
        });
    };
    QuotationManagementComponent.prototype.getQuotationByEmpId = function () {
        var _this = this;
        var jsonData = {
            empId: this.loggedInEmployeeId
        };
        this._quotationManagementService.getDataByAnyPostRequest('getQuotationByEmpId', jsonData).subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.quatationList = result.wrappedList;
                if (_this.quatationList.length != 0) {
                    _this.tempQuatationList = result.wrappedList;
                    // let tempProjectNameList = [];
                    // for(let i=0;i<this.quatationList.length;i++){
                    //   let projectName = this.quatationList[i].project_name;
                    //   let index = tempProjectNameList.indexOf(projectName);
                    //   if(index < 0){
                    //     tempProjectNameList.push(projectName);
                    //   }
                    // }
                    // this.projectNameList = tempProjectNameList;
                    _this.projectNameList = _this.quatationList.map(function (key) { return key.project_name; });
                    _this.projectNameList = _this.removeDuplicateFromArray(_this.projectNameList);
                    for (var i = 0; i < _this.quatationList.length; i++) {
                        var quotObj = _this.quatationList[i];
                        // if(quotObj.isdiscount == 1) this.is_action_required_on_quotation = true;
                        if (quotObj.isdiscount == 1 &&
                            (quotObj.quotationStatus == "QUO_01" || quotObj.quotationStatus == "QUO_03" ||
                                quotObj.quotationStatus == "QUO_06" || quotObj.quotationStatus == "QUO_09")) {
                            _this.is_action_required_on_quotation = true;
                        }
                    }
                }
                _this.snapshotLoading = false;
            }
        });
    };
    QuotationManagementComponent.prototype.removeDuplicateFromArray = function (data) {
        return data.filter(function (value, index) { return data.indexOf(value) === index; });
    };
    QuotationManagementComponent.prototype.getQuotationDiscountMatrix = function () {
        var _this = this;
        var jsonData = {};
        this._quotationManagementService.getDataByAnyPostRequest('getQuotationDiscountMatrix', jsonData).subscribe(function (result) {
            _this.snapshotLoading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                _this.quotationDiscountMatrix = result.wrappedList;
            }
        });
    };
    QuotationManagementComponent.prototype.getProjectReportSnapshot = function () {
        var _this = this;
        this.projectList = [];
        this.snapshotLoading = true;
        this._quotationManagementService.getProjectReportDetails(this.currentQuotationType).subscribe(function (result) {
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                var wrappedList = result.wrappedList[0];
                if (_this.currentQuotationType == "Budgetory") {
                    var tempProjectList = [];
                    for (var i = 0; i < wrappedList.length; i++) {
                        var wrappedObj = wrappedList[i];
                        var projectStage = wrappedObj.project_stage;
                        var projectQuotationStatus = wrappedObj.project_quotation_status;
                        // if(!(projectStage == 'Lost' || projectStage == 'Conversion')){
                        if (projectStage == 'Enquiry' || projectStage == 'Pipeline') {
                            // if(!(projectStage == 'Lost')){
                            tempProjectList.push(wrappedObj);
                            if (!_this.for_TM && _this.loggedInUserRole == "Institutional_Sales" &&
                                (projectQuotationStatus == "QUO_02" || projectQuotationStatus == "QUO_05" ||
                                    projectQuotationStatus == "QUO_08" || projectQuotationStatus == "QUO_11" ||
                                    projectQuotationStatus == "QUO_04" || projectQuotationStatus == "QUO_07" ||
                                    projectQuotationStatus == "QUO_10" || projectQuotationStatus == "QUO_13" ||
                                    projectQuotationStatus == "QUO_16")) {
                                _this.for_TM = true;
                            }
                            if (!_this.for_Commercial && _this.loggedInUserRole == "HINDWARE_COMM" && (wrappedObj.project_po_id != null)) {
                                _this.for_Commercial = true;
                            }
                        }
                    }
                    _this.projectList = tempProjectList;
                }
                else if (_this.currentQuotationType == "Quote to Customer") {
                    var tempProjectList = [];
                    for (var i = 0; i < wrappedList.length; i++) {
                        var wrappedObj = wrappedList[i];
                        var projectStage = wrappedObj.project_stage;
                        var projectQuotationStatus = wrappedObj.project_quotation_status;
                        if (projectStage == 'Pipeline' || projectStage == 'Conversion') {
                            tempProjectList.push(wrappedList[i]);
                            if (!_this.for_TM && _this.loggedInUserRole == "Institutional_Sales" &&
                                (projectQuotationStatus == "QUO_02" || projectQuotationStatus == "QUO_05" ||
                                    projectQuotationStatus == "QUO_08" || projectQuotationStatus == "QUO_11" ||
                                    projectQuotationStatus == "QUO_04" || projectQuotationStatus == "QUO_07" ||
                                    projectQuotationStatus == "QUO_10" || projectQuotationStatus == "QUO_13" ||
                                    projectQuotationStatus == "QUO_16")) {
                                _this.for_TM = true;
                            }
                            if (!_this.for_Commercial && _this.loggedInUserRole == "HINDWARE_COMM" && (wrappedObj.project_po_id != null)) {
                                _this.for_Commercial = true;
                            }
                        }
                    }
                    _this.projectList = tempProjectList;
                }
                _this.snapshotLoading = false;
            }
        });
    };
    QuotationManagementComponent.prototype.addProduct = function (data) {
        // alert(data.projectName)
        this.projectName = data.projectName;
        this.firmName = data.builder_firm_name;
        this.state = data.state;
        this.city = data.city;
        this.noOfBath = data.total_bath;
        this.getCustomerList();
        // let itemObj = data.definedCaptionsResponse.find(item => item.key === 'SITE_NAME');
        for (var i = 0; i < data.definedCaptionsResponse.length; i++) {
            var key = data.definedCaptionsResponse[i].key;
            var value = data.definedCaptionsResponse[i].value;
            // if(key == "SITE_NAME") this.customerName = value;
            if (key == "SITE_CONTACT_NO")
                this.mobileNo = value;
            if (key == "SITE_ADDRESS")
                this.address = value;
        }
        this.makeAllAsDefault();
        this.project_id = data.project_id;
        this.project_type = data.project_type;
        $("#exampleModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    QuotationManagementComponent.prototype.getCustomerList = function () {
        var _this = this;
        var jsonData = {
            state: this.state,
        };
        this._quotationManagementService.getAllListBySelectType(jsonData, "customer")
            .subscribe(function (result) {
            _this.customerList = result.customerList;
        }, function (error) {
        });
    };
    QuotationManagementComponent.prototype.makeAllAsDefault = function () {
        $(".customerDetailsContent, .addedItemContent").hide();
        $(".itemContent").show();
        $("#item-search-txt").val("");
        $("#total_mrp,#total_quantity").val("");
        this.searchItemList = [];
        this.addedItemList = [];
        this.totalConfirmPrice = 0;
        this.totalConfirmTax = 0;
        this.totalConfirmGrossPrice = 0;
        this.totalConfirmQuantity = 0;
        this.addedItemInfo = [];
        $(".form-control").val("");
        // $("#custmerNameInput").val("");
        // $("#mobileNoInput").val("");
        // $("#emailIdInput").val("");
        // $("#addressInput").val("");
        // $("#stateInput").val("");
        // $("#cityInput").val("");
        // $("#pincodeInput").val("");
        // $("#typeInput").val("");
        // $("#firmNameInput").val("");
        // $("#SW_PASTInput").val("");
        // $("#FAUCETS_PASTInput").val("");
        // $("#PAST_SalesInput").val("");
        // $("#Ref_ZQTInput").val("");
        // $("#TODInput").val("");
        // $("#Liability_FAUCETSInput").val("");
        // $("#Liability_SWInput").val("");
        // $("#PAY_TERMSInput").val("");
        // $("#PAY_TERMS_FAUCETSInput").val("");
        // $("#PAY_TERMS_SWInput").val("");
        // $("#FREIGHT_GIVEN_BYInput").val("");
        // $("#FREIGHT_FAUCETSInput").val("");
        // $("#FREIGHT_SWInput").val("");
        // $("#DISPATCH_FROMInput").val("");
        // $("#ORCInput").val("");
        // $("#remarkInput").val("");
    };
    QuotationManagementComponent.prototype.searchItem = function (event) {
        var _this = this;
        // console.log(event.target.value)
        this.searchItemList = [];
        var searchValue = event.target.value;
        if (searchValue.length >= 3) {
            this.snapshotLoading = true;
            var jsonData = {
                project_id: this.project_id,
                searchkey: searchValue
            };
            this._quotationManagementService.getDataByAnyPostRequest('getAllSKUOnTheBasisOfProject', jsonData).subscribe(function (result) {
                // console.log(JSON.stringify(result));
                _this.snapshotLoading = false;
                if (!result) {
                    _this.toastr.error('Something went wrong!!! Please try after sometime.');
                }
                else if (result.Error) {
                    _this.toastr.error(result.ErrorMessage);
                }
                else {
                    _this.searchItemList = result.wrappedList[0];
                }
            });
        }
    };
    QuotationManagementComponent.prototype.addAndRemoveItem = function (action, item_code) {
        var _this = this;
        // alert(action+" "+id)
        var textObj = $("#item_" + item_code);
        var textValue = parseInt(textObj.val());
        if (action == "add") {
            textValue = textValue + 1;
            textObj.val(textValue);
        }
        else if (action == "remove" && textValue > 0) {
            textValue = textValue - 1;
            textObj.val(textValue);
        }
        var totalAddItemCount = 0;
        var total_mrp = 0;
        $(".addItemCount").each(function () {
            totalAddItemCount += parseInt($(this).val());
            var itemCount = parseInt($(this).val());
            if (itemCount != 0) {
                var itemMrp = parseFloat($(this).attr("mrp"));
                total_mrp += itemCount * itemMrp;
            }
        });
        $("#total_quantity").val(totalAddItemCount);
        $("#total_mrp").val(total_mrp);
        var index = this.addedItemList.indexOf(item_code);
        if (textValue != 0) {
            if (index < 0) {
                this.addedItemList.push(item_code);
            }
        }
        else {
            this.addedItemList.splice(index, 1);
        }
        var _loop_1 = function (i) {
            var itemObj = this_1.searchItemList.find(function (item) { return item.item_code === _this.addedItemList[i]; });
            if (itemObj != undefined) {
                var itemQuantity = parseInt($("#item_" + this_1.addedItemList[i]).val());
                var totalPrice = itemObj.mrp * itemQuantity;
                itemObj.quantity = itemQuantity;
                itemObj.totalPrice = totalPrice;
                this_1.addedItemObjList.push(itemObj);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.addedItemList.length; i++) {
            _loop_1(i);
        }
    };
    QuotationManagementComponent.prototype.confirmToAddItem = function () {
        var _this = this;
        if (this.addedItemList.length == 0) {
            this.toastr.warning("Pleas add atleast one item.");
            return;
        }
        this.totalConfirmTax = 0;
        var tempAddedItem = [];
        var tempConfirmPrice = 0;
        var tempConfirmQuantity = 0;
        var _loop_2 = function (i) {
            var itemObj = this_2.addedItemObjList.find(function (item) { return item.item_code === _this.addedItemList[i]; });
            // let itemQuantity = parseInt($("#item_"+this.addedItemList[i]).val());
            // let totalPrice = itemObj.mrp * itemQuantity;
            var itemQuantity = itemObj.quantity;
            var totalPrice = itemObj.totalPrice;
            var newJson = {
                item_code: itemObj.item_code,
                cat_code: itemObj.cat_code,
                item_desc: itemObj.item_desc,
                category: itemObj.category,
                color: itemObj.color,
                image: itemObj.image,
                lineDiagram: itemObj.lineDiagram,
                mrp: itemObj.mrp,
                gst: itemObj.gst,
                quantity: itemQuantity,
                totalPrice: totalPrice
            };
            tempAddedItem.push(newJson);
            tempConfirmPrice += totalPrice;
            tempConfirmQuantity += itemQuantity;
        };
        var this_2 = this;
        for (var i = 0; i < this.addedItemList.length; i++) {
            _loop_2(i);
        }
        this.addedItemInfo = tempAddedItem;
        this.totalConfirmPrice = tempConfirmPrice;
        this.totalConfirmGrossPrice = tempConfirmPrice;
        this.totalConfirmQuantity = tempConfirmQuantity;
        $(".itemContent").hide();
        $(".addedItemContent").show();
    };
    QuotationManagementComponent.prototype.backToAddItem = function (showClass, hideClass) {
        $("." + hideClass).hide();
        $("." + showClass).show();
    };
    QuotationManagementComponent.prototype.excIncGst = function (totalPrice, gst, item_code) {
        var isCheck = $("#gst_" + item_code).prop("checked");
        if (isCheck) {
            var taxPrice = totalPrice * gst / 100;
            $("#tax_price_" + item_code).val(taxPrice);
            $("#gst_value_" + item_code).val(gst);
        }
        else {
            $("#tax_price_" + item_code).val(0);
            $("#gst_value_" + item_code).val(0);
        }
        this.grossTaxAndPrice();
    };
    QuotationManagementComponent.prototype.grossTaxAndPrice = function () {
        var tempTotalPrice = 0;
        $(".total_price").each(function () {
            var tp = parseFloat($(this).val());
            tempTotalPrice += tp;
        });
        var tempTotalTaxPrice = 0;
        $(".tax_price").each(function () {
            var tp = parseFloat($(this).val());
            tempTotalTaxPrice += tp;
        });
        this.totalConfirmTax = tempTotalTaxPrice;
        this.totalConfirmGrossPrice = tempTotalPrice + tempTotalTaxPrice;
    };
    QuotationManagementComponent.prototype.emailValidator = function (email) {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            return false;
        }
        return true;
    };
    QuotationManagementComponent.prototype.validateCustomerDetails = function () {
        if (this.customerName == '') {
            $("#custmerNameInput").focus();
            this.toastr.warning("Please enter value of customer name");
            return false;
        }
        else if (this.mobileNo == '') {
            $("#mobileNoInput").focus();
            this.toastr.warning("Please enter value of mobile no");
            return false;
        }
        else if (this.emailId == '') {
            $("#emailIdInput").focus();
            this.toastr.warning("Please enter value of email id", "Alert", { timeOut: 2000 });
            return false;
        }
        else if (!this.emailValidator(this.emailId)) {
            $("#emailIdInput").focus();
            this.toastr.warning("Please enter valid email id", "Alert", { timeOut: 2000 });
            return false;
        }
        else if (this.address == '') {
            $("#addressInput").focus();
            this.toastr.warning("Please enter value of address");
            return false;
        }
        else if (this.state == '') {
            $("#stateInput").focus();
            this.toastr.warning("Please enter value of state");
            return false;
        }
        else if (this.city == '') {
            $("#cityInput").focus();
            this.toastr.warning("Please enter value of city");
            return false;
        }
        else if (this.pincode == '') {
            $("#pincodeInput").focus();
            this.toastr.warning("Please enter value of pincode");
            return false;
        }
        else if (this.type == '') {
            $("#typeInput").focus();
            this.toastr.warning("Please enter value of type");
            return false;
        }
        else if (this.firmName == '') {
            $("#firmNameInput").focus();
            this.toastr.warning("Please enter value of Firm Name");
            return false;
        }
        return true;
    };
    QuotationManagementComponent.prototype.validateDataForDiscountedQuotation = function () {
        // if(this.SW_PAST == ''){
        //   $("#SW_PASTInput").focus();
        //   this.toastr.warning("please enter value of `SW (Past Sales History in Lacs)` ");
        //   return false;
        // }
        // else if(this.FAUCETS_PAST == ''){
        //   $("#FAUCETS_PASTInput").focus();
        //   this.toastr.warning("please enter value of `Faucets (Past Sales History in Lacs)` ");
        //   return false;
        // }
        if (this.PAST_Sales == '') {
            $("#PAST_SalesInput").focus();
            this.toastr.warning("please enter value of `Past Sales History in Lacs` ");
            return false;
        }
        else if (this.Ref_ZQT == '') {
            $("#Ref_ZQTInput").focus();
            this.toastr.warning("please enter value of `Ref ZQT Number` ");
            return false;
        }
        else if (this.PAY_TERMS == '') {
            $("#PAY_TERMSInput").focus();
            this.toastr.warning("please select value of `Payment Terms` ");
            return false;
        }
        else if (this.FREIGHT_GIVEN_BY == '') {
            $("#FREIGHT_GIVEN_BYInput").focus();
            this.toastr.warning("please select value of `Freight given by` ");
            return false;
        }
        else if (this.DISPATCH_FROM == '') {
            $("#DISPATCH_FROMInput").focus();
            this.toastr.warning("please select value of `Material dispatch from` ");
            return false;
        }
        else if (this.ORC == '') {
            $("#ORCInput").focus();
            this.toastr.warning("please enter value of `ORC` ");
            return false;
        }
        return true;
    };
    QuotationManagementComponent.prototype.submitCheckout = function () {
        var _this = this;
        var tempItemList = [];
        var _loop_3 = function (i) {
            var itemObj = this_3.addedItemObjList.find(function (item) { return item.item_code === _this.addedItemList[i]; });
            // let itemQuantity = parseInt($("#item_"+this.addedItemList[i]).val());
            var itemQuantity = itemObj.quantity;
            var itemGst = $("#gst_value_" + this_3.addedItemList[i]).val();
            var itemDiscount = $("#discount_value_" + this_3.addedItemList[i]).val();
            // let totalPrice = itemObj.mrp * itemQuantity;
            var totalPrice = itemObj.totalPrice;
            var saveSkuJson = {
                cat_code: itemObj.cat_code,
                discount: itemDiscount,
                gst: itemGst,
                item_code: itemObj.item_code,
                mrp: itemObj.mrp,
                dealerExfactory: itemObj.dealerExfactory,
                distributorExfactory: itemObj.distributorExfactory,
                costPrice: itemObj.costPrice,
                division: itemObj.division,
                materialType: itemObj.materialType,
                pvcCisternConcealo: itemObj.pvcCisternConcealo,
                net_price: totalPrice,
                quantity: itemQuantity
            };
            tempItemList.push(saveSkuJson);
        };
        var this_3 = this;
        for (var i = 0; i < this.addedItemList.length; i++) {
            _loop_3(i);
        }
        this.itemList = tempItemList;
        $(".addedItemContent").hide();
        $(".customerDetailsContent").show();
    };
    QuotationManagementComponent.prototype.saveSkuData = function () {
        var _this = this;
        if (!this.validateCustomerDetails()) {
            return;
        }
        else if (this.currentQuotationType == 'Quote to Customer' && !this.validateDataForDiscountedQuotation()) {
            return;
        }
        var tAndc = "";
        // $(".termAndCondtion").each(function(){
        //   let isChecked = $(this).prop("checked");
        //   if(isChecked){
        //     tAndc += $(this).attr("condition_id")+",";
        //   }
        // });
        $(".termAndCondtion").each(function () {
            tAndc += $(this).attr("condition_id") + ",";
        });
        this.termAndCondtion = tAndc.slice(0, -1);
        // console.log(this.termAndCondtion)
        if (this.remark == "") {
            $("#remarkInput").focus();
            this.toastr.warning("please enter value of `Remark` ");
            return false;
        }
        var tempCustomer = this.customerName;
        var custSplit = tempCustomer.split("---");
        var custCode = custSplit[0];
        var custName = custSplit[1];
        var dc = "";
        if (this.project_type == 'Project Channel 16')
            dc = '16';
        else if (this.project_type == 'Project Channel 23')
            dc = '23';
        else if (this.project_type == 'Project Channel 11')
            dc = '11';
        var jsonData = [];
        if (this.currentQuotationType == "Budgetory") {
            var json = {
                definedCaptionRequest: [],
                empid: this.loggedInEmployeeId,
                emp_role: this.loggedInUserRole,
                isdiscount: 0,
                itemList: this.itemList,
                project_id: this.project_id,
                project_type: this.project_type,
                dist_channel: dc,
                selected_terms_cond: this.termAndCondtion,
                remark: this.remark,
                skuCustInfoDetails: {
                    accountType: this.type,
                    address: this.address,
                    city: this.city,
                    customerCode: custCode,
                    customerName: custName,
                    emailId: this.emailId,
                    firmName: this.firmName,
                    mobileNo: this.mobileNo,
                    pinCode: this.pincode,
                    state: this.state
                }
            };
            jsonData.push(json);
        }
        else {
            var json = {
                definedCaptionRequest: [
                    { key: 'SW_PAST', value: this.SW_PAST },
                    { key: 'FAUCETS_PAST', value: this.FAUCETS_PAST },
                    { key: 'PAST_Sales', value: this.PAST_Sales },
                    { key: 'Ref_ZQT', value: this.Ref_ZQT },
                    // {key : 'TOD', value : this.TOD},
                    // {key : 'Liability_FAUCETS', value : this.Liability_FAUCETS},
                    // {key : 'Liability_SW', value : this.Liability_SW},
                    { key: 'PAY_TERMS', value: this.PAY_TERMS },
                    // {key : 'PAY_TERMS_FAUCETS', value : this.PAY_TERMS_FAUCETS},
                    // {key : 'PAY_TERMS_SW', value : this.PAY_TERMS_SW},
                    { key: 'FREIGHT_GIVEN_BY', value: this.FREIGHT_GIVEN_BY },
                    // {key : 'FREIGHT_FAUCETS', value : this.FREIGHT_FAUCETS},
                    // {key : 'FREIGHT_SW', value : this.FREIGHT_SW},
                    { key: 'DISPATCH_FROM', value: this.DISPATCH_FROM },
                    { key: 'ORC', value: this.ORC }
                ],
                empid: this.loggedInEmployeeId,
                emp_role: this.loggedInUserRole,
                isdiscount: 1,
                itemList: this.itemList,
                project_id: this.project_id,
                project_type: this.project_type,
                dist_channel: dc,
                selected_terms_cond: this.termAndCondtion,
                remark: this.remark,
                skuCustInfoDetails: {
                    accountType: this.type,
                    address: this.address,
                    city: this.city,
                    customerCode: custCode,
                    customerName: custName,
                    emailId: this.emailId,
                    firmName: this.firmName,
                    mobileNo: this.mobileNo,
                    pinCode: this.pincode,
                    state: this.state
                }
            };
            jsonData.push(json);
        }
        // console.log(jsonData)
        this.snapshotLoading = true;
        this._quotationManagementService.getDataByAnyPostRequest('saveSkuData', jsonData).subscribe(function (result) {
            _this.snapshotLoading = false;
            if (!result) {
                _this.toastr.error('Something went wrong!!! Please try after sometime.');
            }
            else if (result.Error) {
                _this.toastr.error(result.ErrorMessage);
            }
            else {
                var quotID = result.wrappedList[0].quotID;
                _this.toastr.success(result.responseDesc);
                _this.closeAnyModal('exampleModal');
            }
        });
    };
    QuotationManagementComponent.prototype.openDiscount = function (item_code, itemObj) {
        $("#discount_txt").val("");
        $("#itemNetPrice").html("");
        var total_price = parseFloat($("#total_price_" + item_code).val());
        $("#itemGrossPrice_HTML").html(total_price);
        $("#itemGrossPrice").val(total_price);
        $("#discountOnItemcode").val(item_code);
        $("#itemCategory").val(itemObj.category);
        $("#itemQuantity").val(itemObj.quantity);
        $("#discountModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    QuotationManagementComponent.prototype.applyDiscount = function (event) {
        var category = $("#itemCategory").val();
        var total_price = parseFloat($("#itemGrossPrice").val());
        this.discount = event.target.value;
        this.discount = parseFloat(this.discount);
        if (this.currentQuotationType == "Budgetory") {
            var isCatFound = false;
            var isFind = false;
            for (var i = 0; i < this.quotationDiscountMatrix.length; i++) {
                var disObj = this.quotationDiscountMatrix[i];
                var dd = disObj.Catogory == category &&
                    this.noOfBath >= parseFloat(disObj.Start_No_Of_Bathrooms) &&
                    this.noOfBath <= parseFloat(disObj.End_No_Of_Bathrooms) &&
                    this.discount <= parseFloat(disObj.Discount);
                // if(dd){
                //     isFind = true;
                //     break;
                // }
                var cat = disObj.Catogory == category;
                if (cat) {
                    isCatFound = true;
                    if (dd) {
                        isFind = true;
                        break;
                    }
                }
            }
            if (isCatFound == false) {
                if (this.discount > 100) {
                    alert("Please enter correct value ");
                    $("#itemNetPrice").html("");
                    $("#discount_txt").val("");
                    event.preventDefault();
                    return false;
                }
            }
            else if (!isFind) {
                alert("Please enter correct value ");
                $("#itemNetPrice").html("");
                $("#discount_txt").val("");
                event.preventDefault();
                return false;
            }
        }
        else {
            if (this.discount > 100) {
                alert("Please enter correct value ");
                $("#itemNetPrice").html("");
                $("#discount_txt").val("");
                event.preventDefault();
                return false;
            }
        }
        var netPrice = total_price - (total_price * this.discount / 100);
        $("#itemNetPrice").html(netPrice);
    };
    QuotationManagementComponent.prototype.applyDiscountOnItem = function () {
        var itemCode = $("#discountOnItemcode").val();
        var netPrice = $("#itemNetPrice").html();
        if (netPrice == '') {
            this.toastr.warning("please apply right discount");
            return false;
        }
        $("#total_price_" + itemCode).val(netPrice);
        $("#discount_value_" + itemCode).val(this.discount);
        $("#discount_value_HTML_" + itemCode).html(this.discount);
        this.grossTaxAndPrice();
        this.closeAnyModal('discountModal');
    };
    QuotationManagementComponent.prototype.closeAnyModal = function (modalId) {
        $("#" + modalId).modal("hide");
    };
    QuotationManagementComponent.prototype.openImgModal = function (imageUrl) {
        this.imageUrl = imageUrl;
        $("#imageModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    QuotationManagementComponent.prototype.viewQuotPdf = function (quotId, quotType) {
        // if qoutType == 1 this is discounted quotation else budgetory
        var line = 0;
        var isShow = confirm("Is show line diagram in PDF?? \nFor Yes press on Ok else Cancel");
        if (isShow) {
            line = 1;
        }
        var type = quotType == 1 ? 'c' : 'b';
        var pdfUrl = "http://www.fast.org.in:8080/HSILQuotation_test/Service/generatePdfForQuotation?EMP_ID=" + this.loggedInEmployeeId + "&QUOT_ID=" + quotId + "&line=" + line + "&type=" + type;
        window.open(pdfUrl);
    };
    QuotationManagementComponent.prototype.changeProjectName = function () {
        if (this.projectName == "") {
            this.quatationList = this.tempQuatationList;
            return;
        }
        var searchQuotationList = [];
        for (var i = 0; i < this.tempQuatationList.length; i++) {
            var arrayObj = this.tempQuatationList[i];
            if (arrayObj.project_name == this.projectName) {
                searchQuotationList.push(arrayObj);
            }
        }
        this.quatationList = searchQuotationList;
    };
    QuotationManagementComponent.prototype.openApprovalPortal = function (quotId, role) {
        var url = "";
        // if(role == "TM")
        if (role != "Commercial")
            url = "http://www.fast.org.in/QuotationApprovalView/#/layout/quotation-approval?empId=" + this.loggedInEmployeeId + "&quotId=" + quotId + "&role=" + role;
        else
            url = "http://www.fast.org.in/QuotationApprovalView/#/layout/quotation-approval?empId=" + this.loggedInEmployeeId + "&projectId=" + quotId + "&role=" + role;
        window.open(url);
    };
    return QuotationManagementComponent;
}());
QuotationManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quotation-management',
        template: __webpack_require__("../../../../../src/app/layout/quotation-management/quotation-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/quotation-management/quotation-management.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_quo_mgt_service__["a" /* QuotationManagementService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_quo_mgt_service__["a" /* QuotationManagementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_quo_mgt_service__["a" /* QuotationManagementService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_toastr_ng2__["b" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* Title */]) === "function" && _e || Object])
], QuotationManagementComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=quotation-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quotation-management/quotation-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr_ng2__ = __webpack_require__("../../../../toastr-ng2/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__("../../../../ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quotation_management_routing_module__ = __webpack_require__("../../../../../src/app/layout/quotation-management/quotation-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quotation_management_component__ = __webpack_require__("../../../../../src/app/layout/quotation-management/quotation-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_Validations_OnlyNumber__ = __webpack_require__("../../../../../src/app/shared/Validations/OnlyNumber.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_Validations_OnlyNumberWithDecimal__ = __webpack_require__("../../../../../src/app/shared/Validations/OnlyNumberWithDecimal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_validations_LengthValidater__ = __webpack_require__("../../../../../src/app/shared/validations/LengthValidater.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationManagementModule", function() { return QuotationManagementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var QuotationManagementModule = (function () {
    function QuotationManagementModule() {
    }
    return QuotationManagementModule;
}());
QuotationManagementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__quotation_management_routing_module__["a" /* QuotationManagementRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_loading__["a" /* LoadingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_toastr_ng2__["a" /* ToastrModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* PageHeaderModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__quotation_management_component__["a" /* QuotationManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_11_app_shared_Validations_OnlyNumber__["a" /* OnlyNumber */],
            __WEBPACK_IMPORTED_MODULE_12_app_shared_Validations_OnlyNumberWithDecimal__["a" /* OnlyNumberWithDecimal */],
            __WEBPACK_IMPORTED_MODULE_13_app_shared_validations_LengthValidater__["a" /* LengthValidater */]
        ]
    })
], QuotationManagementModule);

//# sourceMappingURL=quotation-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/quotation-management/service/quo-mgt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_constants__ = __webpack_require__("../../../../../src/app/shared/constants/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationManagementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotationManagementService = (function () {
    function QuotationManagementService(http) {
        this.http = http;
        // this.getQuotationManagementUrl = Constants.serviceUrl + 'QuotationManagement/fetchProjectReportUsingStage';
        this.quotationManagementUrl = __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_constants__["a" /* Constants */].serviceUrl;
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }
    QuotationManagementService.prototype.getProjectReportDetails = function (currentQuotationType) {
        var _this = this;
        // let url = this.getQuotationManagementUrl;
        var url = this.quotationManagementUrl + "viewProjectDetails.php";
        // let data = [
        //     {"LoggedInEmployeeId":this.loggedInEmployeeId},
        //             {"LoggedInUserRole":this.loggedInUserRole},
        //             {"currentQuotationType":currentQuotationType},
        // ]
        var data = { "empid": this.loggedInEmployeeId };
        // console.log(data); 
        return this.http.post(url, data)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    QuotationManagementService.prototype.extractData = function (res) {
        // console.log( "Response:",res );
        var body = res.json();
        return body || {};
    };
    QuotationManagementService.prototype.getDataByAnyPostRequest = function (apiName, jsonData) {
        var _this = this;
        var url = this.quotationManagementUrl + apiName + ".php";
        return this.http.post(url, jsonData)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    QuotationManagementService.prototype.getAllListBySelectType = function (jsonData, selectType) {
        var _this = this;
        var url = this.quotationManagementUrl + "getAllList.php?selectType=" + selectType;
        return this.http.post(url, jsonData)
            .map(function (res) { return _this.extractData(res); })
            .share();
    };
    return QuotationManagementService;
}());
QuotationManagementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], QuotationManagementService);

var _a;
//# sourceMappingURL=quo-mgt.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Validations/OnlyNumber.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumber; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumber = (function () {
    function OnlyNumber(el) {
        this.el = el;
    }
    OnlyNumber.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    return OnlyNumber;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnlyNumber.prototype, "OnlyNumber", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnlyNumber.prototype, "onKeyDown", null);
OnlyNumber = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[OnlyNumber]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], OnlyNumber);

var _a;
//# sourceMappingURL=OnlyNumber.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Validations/OnlyNumberWithDecimal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumberWithDecimal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyNumberWithDecimal = (function () {
    function OnlyNumberWithDecimal(el) {
        this.el = el;
    }
    OnlyNumberWithDecimal.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumberWithDecimal) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39) ||
                // Allow decimal point(.)
                (e.keyCode === 110)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    return OnlyNumberWithDecimal;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnlyNumberWithDecimal.prototype, "OnlyNumberWithDecimal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnlyNumberWithDecimal.prototype, "onKeyDown", null);
OnlyNumberWithDecimal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[OnlyNumberWithDecimal]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], OnlyNumberWithDecimal);

var _a;
//# sourceMappingURL=OnlyNumberWithDecimal.js.map

/***/ }),

/***/ "../../../../../src/app/shared/validations/LengthValidater.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LengthValidater; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LengthValidater = (function () {
    function LengthValidater(el) {
        this.el = el;
    }
    LengthValidater.prototype.onKeyDown = function (event) {
        var e = event;
        //console.log(event.target.value.length);
        if (event.target.value.length == this.LengthValidater) {
            // Allow only backspace
            if (e.keyCode != 8) {
                e.preventDefault();
            }
        }
    };
    return LengthValidater;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LengthValidater.prototype, "LengthValidater", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LengthValidater.prototype, "onKeyDown", null);
LengthValidater = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[LengthValidater]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LengthValidater);

var _a;
//# sourceMappingURL=LengthValidater.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map