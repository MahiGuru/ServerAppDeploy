(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-customer-customer-module"],{

/***/ "./src/app/core/models/subscription.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/subscription.ts ***!
  \*********************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    return Subscription;
}());



/***/ }),

/***/ "./src/app/features/customer/customer-create/customer-create.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/features/customer/customer-create/customer-create.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customer-section create\">\r\n  <form [formGroup]=\"customerForm\">\r\n    <div class=\"\">\r\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n          <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutGap=\"30px\">\r\n            <mat-form-field fxFlex=\"30\">\r\n              <mat-select placeholder=\"Salutions\" formControlName=\"salutation\">\r\n                <mat-option value=\"mr\">\r\n                  Mr\r\n                </mat-option>\r\n                <mat-option value=\"mrs\">\r\n                  Mrs\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <p class=\"error mt-5\" *ngIf=\"customerForm.get('salutation').invalid && customerForm.get('salutation').dirty\">\r\n              Please select Salutation\r\n            </p>\r\n          </div>\r\n          <div fxFlex=\"70\" fxLayout=\"column\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Firstname\" formControlName=\"firstName\">\r\n            </mat-form-field>\r\n            <p class=\"error mt-5\" *ngIf=\"customerForm.get('firstName').invalid && customerForm.get('firstName').dirty\">\r\n              Please enter First name\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"50\" fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Lastname\" formControlName=\"lastName\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('firstName').invalid && customerForm.get('firstName').dirty\">\r\n            Please enter Last name\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n        <div fxLayout=\"column\" fxFlex=\"50\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('email').invalid && customerForm.get('email').dirty\">\r\n            Please enter Email\r\n          </p>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('email').errors?.pattern\">\r\n            Please enter Email Pattern\r\n          </p>\r\n        </div>\r\n        <div fxLayout=\"column\" fxFlex=\"50\">\r\n          <mat-form-field>\r\n            <span matPrefix>+91 &nbsp;</span>\r\n            <input type=\"tel\" maxlength=\"10\" matInput placeholder=\"Telephone\" formControlName=\"phone\" />\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('phone').invalid && customerForm.get('phone').dirty\">\r\n            Please enter Phone number\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n        <div fxFlex=\"50\" fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <textarea matInput placeholder=\"Address 1\" formControlName=\"address1\"></textarea>\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('address1').invalid && customerForm.get('address1').dirty\">\r\n            Please enter Address\r\n          </p>\r\n        </div>\r\n        <mat-form-field fxFlex=\"50\">\r\n          <textarea matInput placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n        <div fxFlex=\"50\" fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n          <mat-form-field fxFlex=\"50\">\r\n            <input matInput placeholder=\"Landmark\" formControlName=\"landmark\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"customerForm.get('landmark').invalid && customerForm.get('landmark').dirty\">\r\n            Please enter Landmark\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\r\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n          <mat-form-field fxFlex=\"30\">\r\n            <mat-select placeholder=\"Country\" formControlName=\"country\">\r\n              <mat-option *ngFor=\"let country of countrys\" [value]=\"country.code\">\r\n                {{country.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <div fxFlex=\"30\" fxLayout=\"column\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"City\" formControlName=\"city\">\r\n                <mat-option *ngFor=\"let city of cities\" [value]=\"city.code\">\r\n                  {{city.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <p class=\"error mt-5\" *ngIf=\"customerForm.get('city').invalid && customerForm.get('city').dirty\">\r\n              Please enter City\r\n            </p>\r\n          </div>\r\n          <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"start\">\r\n            <mat-form-field class=\"\">\r\n              <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" formControlName=\"pincode\">\r\n              <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\r\n            </mat-form-field>\r\n\r\n            <div class=\"error mt-5\" *ngIf=\"customerForm.get('pincode').invalid && customerForm.get('pincode').dirty\">\r\n              Please enter pincode\r\n            </div>\r\n            <div class=\"error mt-5\" *ngIf=\"customerForm.get('pincode').errors?.pattern\">\r\n              Please enter Valid pincode\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"50\">\r\n          <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"flex-start center\">\r\n            <p>Is VIP Customer? </p>\r\n            <div fxLayout=\"column\" fxFlexAlign=\"center\">\r\n              <mat-slide-toggle class=\"example-margin\" [color]=\"'red'\" formControlName=\"vip\"></mat-slide-toggle>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"mtb-20\">\r\n      <span *ngIf=\"!isUpdate\"><button mat-raised-button color=\"accent\" (click)=\"saveNext()\">Create Customer</button></span>\r\n      <span *ngIf=\"isUpdate\"><button mat-raised-button color=\"accent\" (click)=\"saveUpdate()\">Customer Update</button></span>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/customer/customer-create/customer-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/features/customer/customer-create/customer-create.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: auto; }\n  :host .section-header {\n    background-color: #0092d6;\n    padding: 15px 50px;\n    color: white; }\n  .ngx-datatable.scroll-vertical {\n  max-height: 250px; }\n  :host /deep/ .mat-form-field-empty.mat-form-field-label {\n  color: #a1a1a1;\n  font-weight: 400;\n  font-size: 0.9em; }\n  :host /deep/ .mat-form-field-underline {\n  background-color: #6b6b6b; }\n  :host /deep/ .red-snackbar {\n  position: absolute;\n  top: 20px; }\n  :host /deep/ mat-tab-group[vertical] .mat-tab-labels {\n  display: flex;\n  flex-direction: column !important;\n  margin-right: 50px; }\n  :host /deep/ mat-tab-group[vertical] {\n  display: flex;\n  flex-direction: row !important; }\n  :host /deep/ .mat-tab-body-wrapper {\n  width: 100%;\n  border-left: 2px solid #00b4e0;\n  padding: 5px 20px; }\n  :host /deep/ .mat-tab-label-active {\n  color: #0092d6;\n  border-radius: 50px;\n  opacity: 1; }\n  :host /deep/ .add-credit {\n  color: #00a2d3; }\n  :host /deep/ .customer-section {\n  padding: 10px; }\n  .error {\n  margin-top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY3VzdG9tZXIvY3VzdG9tZXItY3JlYXRlL0Q6XFxXT1JLXFxNRVJVREFOXFxoYXJpYm9sX2FuZy9zcmNcXGFwcFxcZmVhdHVyZXNcXGN1c3RvbWVyXFxjdXN0b21lci1jcmVhdGVcXGN1c3RvbWVyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUFRZjtFQVREO0lBSUksMEJBQWtDO0lBQ2xDLG1CQUFrQjtJQUNsQixhQUFZLEVBQ2I7RUFJSDtFQUNFLGtCQUFpQixFQUNsQjtFQUVEO0VBR0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDakI7RUFOSDtFQVNJLDBCQUF5QixFQUMxQjtFQVZIO0VBYUksbUJBQWtCO0VBQ2xCLFVBQVMsRUFDVjtFQWZIO0VBa0JJLGNBQWE7RUFDYixrQ0FBaUM7RUFDakMsbUJBQWtCLEVBQ25CO0VBckJIO0VBd0JJLGNBQWE7RUFDYiwrQkFBOEIsRUFDL0I7RUExQkg7RUE2QkksWUFBVztFQUNYLCtCQUF1QztFQUN2QyxrQkFBaUIsRUFDbEI7RUFoQ0g7RUFtQ0ksZUFBYztFQUVkLG9CQUFtQjtFQUVuQixXQUFVLEVBQ1g7RUF4Q0g7RUEyQ0ksZUFBdUIsRUFFeEI7RUE3Q0g7RUFnREksY0FBYSxFQUVkO0VBSUg7RUFDRSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jdXN0b21lci9jdXN0b21lci1jcmVhdGUvY3VzdG9tZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0NiwgMjE0KTtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8ge1xyXG5cclxuICAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNhMWExYTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcclxuICB9XHJcblxyXG4gIC5yZWQtc25hY2tiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cFt2ZXJ0aWNhbF0gLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtdGFiLWdyb3VwW3ZlcnRpY2FsXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMCwgMTgwLCAyMjQpO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDkyZDY7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1jcmVkaXQge1xyXG4gICAgY29sb3I6IHJnYigwLCAxNjIsIDIxMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbWVyLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/features/customer/customer-create/customer-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/customer/customer-create/customer-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function() { return CustomerCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/customer-management.service */ "./src/app/shared/services/customer-management.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");
/* harmony import */ var _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");
/* harmony import */ var src_app_shared_services_common_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common-utils.service */ "./src/app/shared/services/common-utils.service.ts");








var CustomerCreateComponent = /** @class */ (function () {
    function CustomerCreateComponent(fb, customerService, shareCustomerDataService, commonService, commonUtilService) {
        this.fb = fb;
        this.customerService = customerService;
        this.shareCustomerDataService = shareCustomerDataService;
        this.commonService = commonService;
        this.commonUtilService = commonUtilService;
        this.isUpdate = false;
        this.title = 'Customer Create';
        this.countrys = [];
        this.cities = [];
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        /***
         * Customer FORM creation
         */
        this.customerForm = this.fb.group({
            salutation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[56789]\\d{9}$')]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            customerId: [null],
            address2: [''],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: [''],
            landmark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')]],
            vip: [false]
        });
        this.customerId = null;
        // getting countrys, regions
        this.getUtils();
        // If customer data updated in currentCustomer$ subscribe here..
        this.shareCustomerDataService.currentCustomer$.subscribe(function (data) {
            if (data) {
                _this.dataAssignToForm(data);
            }
        });
        // from customer list click on actions subscribing to open the tabs
        this.shareCustomerDataService.customerAction$.subscribe(function (action) {
            if (_this.tabGroup) {
                switch (action) {
                    case 'EDIT':
                        _this.tabGroup.selectedIndex = 0;
                        break;
                    case 'SUBSCRIPTION':
                        _this.tabGroup.selectedIndex = 1;
                        break;
                    case 'TRANSACTION':
                        _this.tabGroup.selectedIndex = 2;
                        break;
                    default:
                        _this.tabGroup.selectedIndex = 0;
                }
            }
        });
    };
    /**
     * GET utils country, regions
     */
    CustomerCreateComponent.prototype.getUtils = function () {
        var _this = this;
        this.commonService.getAllCountrys().subscribe(function (res) {
            _this.countrys = res;
            _this.customerForm.get('country').setValue(res[0].id);
        });
        this.commonService.getRegions().subscribe(function (res) {
            _this.cities = res;
        });
    };
    /**
     * IF customer data updated from customer list actions click
     */
    CustomerCreateComponent.prototype.dataAssignToForm = function (data) {
        this.customerId = data.customerId;
        this.customerForm.get('firstName').setValue(data.firstName);
        this.customerForm.get('lastName').setValue(data.lastName);
        this.customerForm.get('email').setValue(data.email);
        this.customerForm.get('phone').setValue(data.phone);
        this.customerForm.get('address1').setValue(data.address1);
        this.customerForm.get('address2').setValue(data.address2);
        this.customerForm.get('country').setValue(data.country);
        this.customerForm.get('city').setValue(data.city);
        this.customerForm.get('landmark').setValue(data.landmark);
        this.customerForm.get('pincode').setValue(data.pincode);
        this.customerForm.get('customerId').setValue(data.customerId);
        this.customerForm.get('salutation').setValue(data.salutation);
        this.customerForm.get('vip').setValue(data.category);
        this.customerForm.updateValueAndValidity({ onlySelf: true });
    };
    /**
     * Save customer with customerForm object.
     */
    CustomerCreateComponent.prototype.saveNext = function () {
        var _this = this;
        this.commonService.validate(this.customerForm);
        if (this.customerForm.valid) {
            var customerObj = this.customerForm.value;
            customerObj.category = customerObj.vip ? 1 : 0;
            this.customerService.addCustomer(customerObj).subscribe(function (res) {
                _this.customerId = res.customerId;
                _this.commonService.showSnackBar('Customer Created!!', 'Success');
                _this.customerForm.reset();
                _this.tabGroup.selectedIndex = 1;
            }, function (err) {
                _this.commonService.showSnackBar('Customer creation failed!!', 'Failed');
            });
        }
    };
    /**
     * Update customer with customerForm object.
     */
    CustomerCreateComponent.prototype.saveUpdate = function () {
        var _this = this;
        this.commonService.validate(this.customerForm);
        if (this.customerForm.valid) {
            var customerObj = this.customerForm.value;
            this.customerService.updateCustomer(customerObj).subscribe(function (res) {
                _this.customerId = res.customerId;
                _this.commonService.showSnackBar('Customer Update Successfully!!', 'Success');
            }, function () {
                _this.commonService.showSnackBar('Customer update failed', 'Failed');
            });
        }
    };
    CustomerCreateComponent.prototype.onTabChange = function (tab) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"])
    ], CustomerCreateComponent.prototype, "tabGroup", void 0);
    CustomerCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-customer-create',
            template: __webpack_require__(/*! ./customer-create.component.html */ "./src/app/features/customer/customer-create/customer-create.component.html"),
            styles: [__webpack_require__(/*! ./customer-create.component.scss */ "./src/app/features/customer/customer-create/customer-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_4__["CustomerManagementService"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedCustomerDataService"],
            _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_app_shared_services_common_utils_service__WEBPACK_IMPORTED_MODULE_7__["CommonUtilsService"]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "./src/app/features/customer/customer-details/customer-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/features/customer/customer-details/customer-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customer-section\">\n  <haribol-page-heading [title]=\"'Customers'\" [headIcon]=\"'fa-users'\" [btnText]=\"'Add New Customer'\" (btnClick)=\"addNewBtnClick()\"\n    (searchVal)=\"getSearchInput($event)\" [count]=\"customersLength\"></haribol-page-heading>\n  <div class=\"tbl-content\">\n    <div class=\"user-info-row\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n      <div fxFlex fxFlexAlign=\"center\" *ngIf=\"customerData\">\n        Customers: {{customerData.length}}\n      </div>\n      <div fxFlex fxFlexAlign=\"center\" class=\"text-right sort-link\" (click)=\"sortClick()\">\n        <mat-icon>sort_by_alpha</mat-icon>\n      </div>\n    </div>\n    <div *ngFor=\"let customer of customerData\">\n\n      <div class=\"data-info ptb-10 mb-10\" fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\n\n        <div fxFlex=\"180px\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n          <img fxFlex=\"50px\" gravatar [email]=\"customer.email\" [size]=\"36\">\n          <p fxFlex fxFlexAlign=\"center\">{{customer.firstName}} {{customer.lastName}}</p>\n        </div>\n        <div fxFlex=\"200px\" class=\"wrap\">\n          <p>Mobile: {{customer.phone}}</p>\n          <p>{{customer.email}}</p>\n        </div>\n        <div fxFlex=\"200px\"> {{customer.address1}}</div>\n        <div fxFlex=\"100px\">\n          <mat-slide-toggle [checked]=\"true\">Active</mat-slide-toggle>\n        </div>\n        <div fxFlex=\"300px\">\n          <button mat-button class=\"btn min-btn\" matTooltip=\"VIP\" aria-label=\"vip\">\n            <i class=\"far fa-star\" *ngIf=\"!customer.vip\"></i>\n            <i class=\"fas fa-star\" *ngIf=\"customer.vip\"></i>\n          </button>\n\n          <button mat-button class=\"btn min-btn\" (click)=\"editBtnClick(customer)\" matTooltip=\"Edit Customer\" aria-label=\"Edit customer\">\n            <i class=\"fs-18 fas fa-edit\"></i>\n          </button>\n          <button mat-button class=\"btn min-btn\" (click)=\"subscriptBtnClick(customer)\" matTooltip=\"Subscription\"\n            aria-label=\"customer subscription\">\n            <i class=\"fs-18 fas fa-calendar-check\"></i>\n          </button>\n          <button mat-button class=\"btn min-btn\" (click)=\"transactionBtnClick(customer)\" matTooltip=\"Transactions\"\n            aria-label=\"customer Transactions\">\n            <i class=\"fas fa-rupee-sign\"></i>\n          </button>\n          <button mat-button class=\"btn min-btn\" (click)=\"removeBtnClick(customer)\">\n            <i class=\"fs-18 fas fa-times\"></i>\n          </button>\n\n        </div>\n\n      </div>\n\n      <!-- <haribol-list-item [data]=\"customer\" (editClick)=\"editBtnClick($event)\" (removeClick)=\"removeBtnClick($event)\"></haribol-list-item> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/customer/customer-details/customer-details.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/customer/customer-details/customer-details.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1c3RvbWVyL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/customer/customer-details/customer-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/customer/customer-details/customer-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/customer-management.service */ "./src/app/shared/services/customer-management.service.ts");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(customerManagementService, routingService, sharedCustomerDataService, snackBar) {
        this.customerManagementService = customerManagementService;
        this.routingService = routingService;
        this.sharedCustomerDataService = sharedCustomerDataService;
        this.snackBar = snackBar;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        this.customersLength = 0;
        this.customerData = [];
        this.init();
    };
    /**
     * Init method is for getting the customers
     * and assign to customerData, originalCustomerArr
     */
    CustomerDetailsComponent.prototype.init = function () {
        var _this = this;
        this.customerManagementService.getCustomers().subscribe(function (result) {
            _this.customerData = result;
            _this.originalCustomerArr = result;
            _this.customersLength = _this.customerData.length;
        });
    };
    /**
     * sortClick method is for sorting based on firstName
     */
    CustomerDetailsComponent.prototype.sortClick = function () {
        this.customerData = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](this.customerData, ['firstName']);
    };
    /**
     * getSearch input with param searchInput
     * @param searchInput - search string to filter the customers list
     */
    CustomerDetailsComponent.prototype.getSearchInput = function (searchInput) {
        var searchStr = searchInput.toLowerCase();
        this.customerData = lodash__WEBPACK_IMPORTED_MODULE_6__["filter"](this.originalCustomerArr, function (val) {
            var str = (val.firstName + val.lastName).toLowerCase();
            return str.indexOf(searchStr) >= 0;
        });
        this.customersLength = this.customerData.length;
    };
    /**
     * addNewBtnClick method to route the customer creation page
     * @param searchInput - search string to filter the customers list
     */
    CustomerDetailsComponent.prototype.addNewBtnClick = function () {
        this.sharedCustomerDataService.changeCustomerAction('EDIT');
        this.sharedCustomerDataService.changeData(null);
        this.routingService.goToPage('customer', 'create');
    };
    /**
     * editBtnClick method to route the customer update page with customerId
     * @param customer - customer object
     */
    CustomerDetailsComponent.prototype.editBtnClick = function (customer) {
        this.sharedCustomerDataService.changeCustomerAction('EDIT');
        this.sharedCustomerDataService.changeData(customer);
        this.routingService.goToPage('customer', 'update', customer.customerId);
    };
    /**
     * removeBtnClick method to remove the customer object
     * @param customer - customer object to get the customerId
     */
    CustomerDetailsComponent.prototype.removeBtnClick = function (customer) {
        var _this = this;
        this.customerManagementService.deleteCustomer(customer.customerId).subscribe(function (res) {
            _this.snackBar.open('Successfully removed Customer!!', 'Deleted Customer', {
                duration: 2000,
                panelClass: ['red-snackbar']
            });
            _this.init();
        });
    };
    /**
     * subscriptBtnClick method to route the customer update page and subscription tab.
     * @param customer - customer object to get the customerId
     */
    CustomerDetailsComponent.prototype.subscriptBtnClick = function (customer) {
        this.sharedCustomerDataService.changeData(customer);
        this.sharedCustomerDataService.changeCustomerAction('SUBSCRIPTION');
        this.routingService.goToPage('customer', 'update', customer.customerId);
    };
    /**
     * transactionBtnClick method to route the customer update page and Transaction tab.
     * @param customer - customer object to get the customerId
     */
    CustomerDetailsComponent.prototype.transactionBtnClick = function (customer) {
        this.sharedCustomerDataService.changeData(customer);
        this.sharedCustomerDataService.changeCustomerAction('TRANSACTION');
        this.routingService.goToPage('customer', 'update', customer.customerId);
    };
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/features/customer/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.scss */ "./src/app/features/customer/customer-details/customer-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_2__["CustomerManagementService"],
            src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedCustomerDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/features/customer/customer-subscription/customer-subscription.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-subscription/customer-subscription.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion [formGroup]=\"subscriptionGroup\">\r\n  <div formArrayName=\"products\">\r\n    <!-- <button type=\"button\" (click)=\"deleteSubscriptionGroup(i)\">Delete</button> -->\r\n    <mat-expansion-panel *ngFor=\"let productCtrl of subscriptionControls(); let i = index\" [formGroup]=\"subscriptionControls()[i]\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title class=\"fs-18 text-blue\" fxFlex=\"30\">\r\n          <h4>{{productCtrl.value.name}}</h4>\r\n        </mat-panel-title>\r\n        <mat-panel-description fxFlex=\"70\">\r\n          <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\r\n            <span>{{productCtrl.value.description}}</span>\r\n            <span>Quantity: {{productCtrl.value.quantityWithUOM}}</span>\r\n            <span>Price: {{productCtrl.value.basePrice}}</span>\r\n          </div>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <!-- *ngFor=\"let product of subscriptionGroup.controls.products.controls[i]['subscriptions'].controls\" -->\r\n      <div formArrayName=\"subscriptions\" *ngFor=\"let subscription of productCtrl.controls.subscriptions.controls; let j=index\">\r\n        <div class=\"subscription-area\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\" [formGroup]=\"productCtrl.controls.subscriptions.controls[j]\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"100px\" class=\"mb-0\">\r\n            <mat-form-field fxFlex=\"300px mr-20\">\r\n              <input matInput [matDatepicker]=\"picker\" [min]=\"today\" placeholder=\"Start Date \" formControlName=\"startDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"300px mr-20\">\r\n              <input matInput [matDatepicker]=\"endpicker\" [min]=\"today\" placeholder=\"End Date \" formControlName=\"endDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"endpicker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #endpicker></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mb-0\">\r\n            <mat-form-field fxFlex=\"300px\">\r\n              <input matInput placeholder=\"Quantity\" formControlName=\"quantity\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"Daily_content\" fxFlex>\r\n            <p fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n              <button mat-stroked-button color=\"primary\" [class.active]=\"isAllActive\" (click)=\"allDays(subscription.controls.days)\">All\r\n                Days</button>\r\n              <button mat-stroked-button color=\"primary\" [class.active]=\"isOnceActive\" (click)=\"once(subscription.controls.days)\">Once</button>\r\n              <button mat-stroked-button color=\"primary\" [class.active]=\"isWeekEndsActive\" (click)=\"alternateDaysOnly(subscription.controls.days)\">Alternate\r\n                Days</button>\r\n\r\n              <button mat-stroked-button color=\"primary\" [class.active]=\"isRandomActive\" (click)=\"randomDaysOnly(subscription.controls.days)\">Random\r\n                Days</button>\r\n            </p>\r\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n              <div fxFlex formArrayName=\"days\" *ngFor=\"let day of subscription.controls.days.controls; let k = index\">\r\n                <mat-checkbox [formControlName]=\"k\" [checked]=\"k\"> {{ weekArr[k] }} </mat-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n  <br />\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n    <button mat-raised-button (click)=\"saveSubscription()\" color=\"primary\">Save Subscription</button>\r\n  </div>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/features/customer/customer-subscription/customer-subscription.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-subscription/customer-subscription.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscription-area {\n  padding: 30px;\n  background-color: #f0faff; }\n  .subscription-area .mb-0 {\n    margin-bottom: 0px !important; }\n  .subscription-area .active {\n    background-color: #ff006a;\n    color: #f0faff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY3VzdG9tZXIvY3VzdG9tZXItc3Vic2NyaXB0aW9uL0Q6XFxXT1JLXFxNRVJVREFOXFxoYXJpYm9sX2FuZy9zcmNcXGFwcFxcZmVhdHVyZXNcXGN1c3RvbWVyXFxjdXN0b21lci1zdWJzY3JpcHRpb25cXGN1c3RvbWVyLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYiwwQkFBeUIsRUFVMUI7RUFaRDtJQUtJLDhCQUE2QixFQUM5QjtFQU5IO0lBU0ksMEJBQXlCO0lBQ3pCLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1c3RvbWVyL2N1c3RvbWVyLXN1YnNjcmlwdGlvbi9jdXN0b21lci1zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaXB0aW9uLWFyZWEge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmFmZjtcclxuXHJcbiAgLm1iLTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwNmE7XHJcbiAgICBjb2xvcjogI2YwZmFmZjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/features/customer/customer-subscription/customer-subscription.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-subscription/customer-subscription.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomerSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSubscriptionComponent", function() { return CustomerSubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/customer-management.service */ "./src/app/shared/services/customer-management.service.ts");
/* harmony import */ var _core_models_subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/models/subscription */ "./src/app/core/models/subscription.ts");
/* harmony import */ var src_app_shared_services_date_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/date-management.service */ "./src/app/shared/services/date-management.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");
/* harmony import */ var src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");









var CustomerSubscriptionComponent = /** @class */ (function () {
    function CustomerSubscriptionComponent(customerService, fb, dateService, shareCustomerDataService, commonService) {
        this.customerService = customerService;
        this.fb = fb;
        this.dateService = dateService;
        this.shareCustomerDataService = shareCustomerDataService;
        this.commonService = commonService;
        this.panelOpenState = false;
        this.weekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.mapDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
    // SUbscription controls
    CustomerSubscriptionComponent.prototype.subscriptionControls = function () {
        var prods = this.subscriptionGroup.controls['products'];
        return prods.controls;
    };
    CustomerSubscriptionComponent.prototype.ngOnChanges = function (changes) {
        this.customerId = changes.customerId.currentValue;
    };
    CustomerSubscriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date(new Date().setDate(new Date().getDate() + 3));
        this.subscriptionGroup = this.fb.group({
            name: [],
            products: this.fb.array([])
        });
        /**
         * CurrentCustomer$ subscribe to get the customer object if action from list
         **/
        this.shareCustomerDataService.currentCustomer$.subscribe(function (data) {
            if (data) {
                _this.getProducts(data.customerId);
            }
        });
    };
    /**
     * getProducts method for getting the customer products based on customer ID.
     **/
    CustomerSubscriptionComponent.prototype.getProducts = function (customerId) {
        var _this = this;
        var productsFormArray = this.subscriptionGroup.controls['products'];
        this.customerService.getCustomerProducts(customerId).subscribe(function (result) {
            var data = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_2__["map"](result, 'products')), ['productId']);
            _this.productData = data;
            _this.productData.forEach(function (product) {
                var productGroup = _this.fb.group({
                    name: [product.name],
                    quantityWithUOM: [product.quantityWithUOM],
                    basePrice: [product.basePrice],
                    customerId: [product.customerId],
                    productId: [product.productId],
                    categoryId: [product.categoryId],
                    dispensible: [product.dispensible],
                    quantity: [product.quantity],
                    description: [product.description],
                    image: [product.image],
                    hasDispensibleContainer: [product.hasDispensibleContainer],
                    subscriptions: _this.fb.array([])
                });
                var subscriptionFormArray = productGroup.controls['subscriptions'];
                var itemSubscription = _this.createSubscriptionGroup();
                subscriptionFormArray.push(itemSubscription);
                productsFormArray.push(productGroup);
            });
        });
    };
    /**
     * createSubscriptionGroup method for creating form group for "Items"
     */
    CustomerSubscriptionComponent.prototype.createSubscriptionGroup = function () {
        var _this = this;
        var days = [false, false, false, false, false, false, false];
        var itemSubGroup = this.fb.group({
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            days: this.fb.array(days.map(function (s) { return _this.fb.control(s); }))
        });
        itemSubGroup.get('days').valueChanges.subscribe(function (val) {
            _this.isAllActive = _this.isOnceActive = _this.isRandomActive = _this.isAlternateDaysActive = false;
        });
        return itemSubGroup;
    };
    /**
     * addSubscriptionGroup method for creating form group from "subscriptions"
     */
    CustomerSubscriptionComponent.prototype.addSubscriptionGroup = function () {
        var subscriptionFormArray = this.subscriptionGroup.controls['subscriptions'];
        subscriptionFormArray.push(this.createSubscriptionGroup());
    };
    /**
     * deleteSubscriptionGroup method for deleting form group "subscriptions"
     */
    CustomerSubscriptionComponent.prototype.deleteSubscriptionGroup = function (index) {
        var subscritionFormArray = this.subscriptionGroup.controls['subscriptions'];
        subscritionFormArray.removeAt(index);
    };
    /**
     * allDays method for days formcontrol true
     */
    CustomerSubscriptionComponent.prototype.allDays = function (days) {
        days.setValue(days.value.map(function (value) { return true; }));
        this.isAllActive = !this.isAllActive;
        this.freequency = 2;
    };
    /**
     * Once method for days formcontrol make it to false
     */
    CustomerSubscriptionComponent.prototype.once = function (days) {
        console.log(days);
        days.setValue(days.value.map(function (value) { return false; }));
        this.isOnceActive = !this.isOnceActive;
        this.freequency = 1;
    };
    /**
     * alternateDaysOnly method for days formcontrol make it to false
     */
    CustomerSubscriptionComponent.prototype.alternateDaysOnly = function (weekends) {
        weekends.setValue([false, false, false, false, false, false, false].map(function (value) { return value; }));
        this.isAlternateDaysActive = !this.isAlternateDaysActive;
        this.freequency = 3;
    };
    /**
     * randomDaysOnly method for days formcontrol make it to false
     */
    CustomerSubscriptionComponent.prototype.randomDaysOnly = function (weekdays) {
        weekdays.setValue([false, false, false, false, false, false, false].map(function (value) { return value; }));
        this.isRandomActive = !this.isRandomActive;
        this.freequency = 4;
    };
    /**
     * clearDays method for flags set to false
     */
    CustomerSubscriptionComponent.prototype.clearDays = function () {
        this.isAllActive = this.isOnceActive = this.isRandomActive = this.isAlternateDaysActive = false;
    };
    /**
     * saveSubscription method for saving the subscription array.
     */
    CustomerSubscriptionComponent.prototype.saveSubscription = function () {
        var _this = this;
        var myArr = [];
        this.subscriptionGroup.value.products.forEach(function (product) {
            var subscriptionObj = new _core_models_subscription__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
            subscriptionObj.customerId = _this.customerId;
            subscriptionObj.productId = product.productId;
            product.subscriptions.forEach(function (subscription) {
                var filteredDays = [];
                subscription.days.forEach(function (res, i) {
                    if (res) {
                        return filteredDays.push(_this.mapDays[i]);
                    }
                });
                subscriptionObj.startDate = _this.dateService.getDateFormat(subscription.startDate);
                subscriptionObj.endDate = _this.dateService.getDateFormat(subscription.endDate);
                subscriptionObj.frequency = _this.freequency;
                subscriptionObj.quantity = subscription.quantity;
                subscriptionObj.dates = filteredDays;
            });
            myArr.push(subscriptionObj);
        });
        this.customerService.saveProductSubscription(myArr).subscribe(function (res) {
            _this.commonService.showSnackBar('Saved!!', 'SUBSCRIPTION SAVED');
        }, function (err) {
            _this.commonService.showSnackBar('Please fill mandatory fields', 'Failed Save');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CustomerSubscriptionComponent.prototype, "customerId", void 0);
    CustomerSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-customer-subscription',
            template: __webpack_require__(/*! ./customer-subscription.component.html */ "./src/app/features/customer/customer-subscription/customer-subscription.component.html"),
            styles: [__webpack_require__(/*! ./customer-subscription.component.scss */ "./src/app/features/customer/customer-subscription/customer-subscription.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_4__["CustomerManagementService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_date_management_service__WEBPACK_IMPORTED_MODULE_6__["DateManagementService"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_7__["SharedCustomerDataService"],
            src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], CustomerSubscriptionComponent);
    return CustomerSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/features/customer/customer-transactions/customer-transactions.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-transactions/customer-transactions.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n\n  <table mat-table [dataSource]=\"dataSource\" class=\"\">\n\n    <!-- Date Column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <!-- Credit Column -->\n    <ng-container matColumnDef=\"credit\">\n      <th mat-header-cell *matHeaderCellDef> Credit </th>\n      <td mat-cell *matCellDef=\"let element\"> {{(element.credit) ? element.credit: '-'}} </td>\n    </ng-container>\n    <!-- Debit Column -->\n    <ng-container matColumnDef=\"debit\">\n      <th mat-header-cell *matHeaderCellDef> Debit </th>\n      <td mat-cell *matCellDef=\"let element\"> {{(element.debit) ? element.debit : '-'}} </td>\n    </ng-container>\n\n    <!-- outstanding Column -->\n    <ng-container matColumnDef=\"outstanding\">\n      <th mat-header-cell *matHeaderCellDef> Outstanding </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.outstanding}} </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n<br />\n<div fxLayout=\"row\" fxLayoutAlign=\"end\">\n  <div fxFlex=\"50\" fxFlexAlign=\"end\" fxLayout=\"row\" fxLayoutAlign=\"end\">\n    <button class=\"add-credit\" fxFlexAlign=\"end\" mat-raised-button (click)=\"addCreditDialog()\"> <i class=\"fas fa-plus\"></i>\n      ADD CREDIT</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/customer/customer-transactions/customer-transactions.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-transactions/customer-transactions.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n  table th.mat-header-cell {\n    font-size: 0.9em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY3VzdG9tZXIvY3VzdG9tZXItdHJhbnNhY3Rpb25zL0Q6XFxXT1JLXFxNRVJVREFOXFxoYXJpYm9sX2FuZy9zcmNcXGFwcFxcZmVhdHVyZXNcXGN1c3RvbWVyXFxjdXN0b21lci10cmFuc2FjdGlvbnNcXGN1c3RvbWVyLXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVcsRUFLWjtFQU5EO0lBSUksaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvY3VzdG9tZXIvY3VzdG9tZXItdHJhbnNhY3Rpb25zL2N1c3RvbWVyLXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/customer/customer-transactions/customer-transactions.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/customer/customer-transactions/customer-transactions.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomerTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTransactionsComponent", function() { return CustomerTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/common-utils.service */ "./src/app/shared/services/common-utils.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_components_add_credit_dialog_add_credit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/add-credit-dialog/add-credit-dialog.component */ "./src/app/shared/components/add-credit-dialog/add-credit-dialog.component.ts");
/* harmony import */ var _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");







var CustomerTransactionsComponent = /** @class */ (function () {
    function CustomerTransactionsComponent(dialog, commonUtilService, commonService, shareCustomerDataService) {
        this.dialog = dialog;
        this.commonUtilService = commonUtilService;
        this.commonService = commonService;
        this.shareCustomerDataService = shareCustomerDataService;
        // displayed columns
        this.displayedColumns = ['date', 'description', 'credit', 'debit', 'outstanding'];
    }
    CustomerTransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * CurrentCustomer$ subscribe to get the customerID
         **/
        this.shareCustomerDataService.currentCustomer$.subscribe(function (data) {
            if (data) {
                _this.getAllTransactions(data.customerId);
            }
        });
    };
    /**
     * GET ALL TRANSACTIONS using customer ID
     * @param custId - customer Id number
     */
    CustomerTransactionsComponent.prototype.getAllTransactions = function (custId) {
        var _this = this;
        this.commonUtilService.getAllTransactions(custId).subscribe(function (res) {
            _this.dataSource = res;
        });
    };
    /**
     * Create Dialog for credit creation
     */
    CustomerTransactionsComponent.prototype.addCreditDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_shared_components_add_credit_dialog_add_credit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddCreditDialogComponent"], {
            width: '250px',
            disableClose: true
        });
        /**
         * After closing the dialog callback
         */
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            var data = result.value;
            data['customerId'] = _this.customerId || 1;
            _this.commonUtilService.createTransactions(data).subscribe(function (res) {
                console.log('SAVED', res);
                _this.commonService.showSnackBar('Saved Transactions!!', 'Success');
            }, function (err) {
                _this.commonService.showSnackBar('FAILED', 'FAILED');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerTransactionsComponent.prototype, "transactions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerTransactionsComponent.prototype, "customerId", void 0);
    CustomerTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-customer-transactions',
            template: __webpack_require__(/*! ./customer-transactions.component.html */ "./src/app/features/customer/customer-transactions/customer-transactions.component.html"),
            styles: [__webpack_require__(/*! ./customer-transactions.component.scss */ "./src/app/features/customer/customer-transactions/customer-transactions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_shared_services_common_utils_service__WEBPACK_IMPORTED_MODULE_2__["CommonUtilsService"],
            _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedCustomerDataService"]])
    ], CustomerTransactionsComponent);
    return CustomerTransactionsComponent;
}());



/***/ }),

/***/ "./src/app/features/customer/customer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/customer/customer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between flex-start\">\r\n  <div class=\"\" fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n    <mat-icon fxFlexAlign=\"center\" (click)=\"redirectTo('customer')\">arrow_back</mat-icon>\r\n    <i class=\"fs-40 fas fa-user-tie\" fxFlexAlign=\"center\"></i>\r\n    <div class=\"product-heading\" fxFlex>\r\n      <h1 class=\"p-0 m-0\"> {{title}}</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"tbl-content\">\r\n  <br />\r\n  <mat-tab-group mat-align-tabs=\"center\" animationDuration=\"100ms\" #tabs (selectedTabChange)=\"onTabChange($event)\">\r\n    <mat-tab label=\"Add New Customer\">\r\n      <haribol-customer-create></haribol-customer-create>\r\n    </mat-tab>\r\n    <mat-tab label=\"Subscriptions\">\r\n      <div class=\"customer-section subscription\">\r\n        <haribol-customer-subscription></haribol-customer-subscription>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Transactions\">\r\n      <div class=\"customer-section transaction\">\r\n        <haribol-customer-transactions [customerId]=\"customerId\"></haribol-customer-transactions>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/customer/customer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/customer/customer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: auto; }\n  :host .section-header {\n    background-color: #0092d6;\n    padding: 15px 50px;\n    color: white; }\n  .ngx-datatable.scroll-vertical {\n  max-height: 250px; }\n  :host /deep/ .mat-form-field-empty.mat-form-field-label {\n  color: #a1a1a1;\n  font-weight: 400;\n  font-size: 0.9em; }\n  :host /deep/ .mat-form-field-underline {\n  background-color: #6b6b6b; }\n  :host /deep/ .red-snackbar {\n  position: absolute;\n  top: 20px; }\n  :host /deep/ mat-tab-group[vertical] .mat-tab-labels {\n  display: flex;\n  flex-direction: column !important;\n  margin-right: 50px; }\n  :host /deep/ mat-tab-group[vertical] {\n  display: flex;\n  flex-direction: row !important; }\n  :host /deep/ .mat-tab-body-wrapper {\n  width: 100%;\n  border-left: 2px solid #00b4e0;\n  padding: 5px 20px; }\n  :host /deep/ .mat-tab-label-active {\n  color: #0092d6;\n  border-radius: 50px;\n  opacity: 1; }\n  :host /deep/ .add-credit {\n  color: #00a2d3; }\n  :host /deep/ .customer-section {\n  padding: 10px; }\n  .error {\n  margin-top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY3VzdG9tZXIvRDpcXFdPUktcXE1FUlVEQU5cXGhhcmlib2xfYW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcY3VzdG9tZXJcXGN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYyxFQVFmO0VBVEQ7SUFJSSwwQkFBa0M7SUFDbEMsbUJBQWtCO0lBQ2xCLGFBQVksRUFDYjtFQUlIO0VBQ0Usa0JBQWlCLEVBQ2xCO0VBRUQ7RUFHSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtFQU5IO0VBU0ksMEJBQXlCLEVBQzFCO0VBVkg7RUFhSSxtQkFBa0I7RUFDbEIsVUFBUyxFQUNWO0VBZkg7RUFrQkksY0FBYTtFQUNiLGtDQUFpQztFQUNqQyxtQkFBa0IsRUFDbkI7RUFyQkg7RUF3QkksY0FBYTtFQUNiLCtCQUE4QixFQUMvQjtFQTFCSDtFQTZCSSxZQUFXO0VBQ1gsK0JBQXVDO0VBQ3ZDLGtCQUFpQixFQUNsQjtFQWhDSDtFQW1DSSxlQUFjO0VBRWQsb0JBQW1CO0VBRW5CLFdBQVUsRUFDWDtFQXhDSDtFQTJDSSxlQUF1QixFQUV4QjtFQTdDSDtFQWdESSxjQUFhLEVBRWQ7RUFJSDtFQUNFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0NiwgMjE0KTtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8ge1xyXG5cclxuICAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNhMWExYTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcclxuICB9XHJcblxyXG4gIC5yZWQtc25hY2tiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cFt2ZXJ0aWNhbF0gLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICBtYXQtdGFiLWdyb3VwW3ZlcnRpY2FsXSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMCwgMTgwLCAyMjQpO1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDkyZDY7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1jcmVkaXQge1xyXG4gICAgY29sb3I6IHJnYigwLCAxNjIsIDIxMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbWVyLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/features/customer/customer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/customer/customer.component.ts ***!
  \*********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(routingService, route, shareCustomerDataService) {
        this.routingService = routingService;
        this.route = route;
        this.shareCustomerDataService = shareCustomerDataService;
        this.isUpdate = false;
        this.title = 'Customer Create';
        this.countrys = [];
        this.cities = [];
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerId = null;
        if (this.route.snapshot.url[0].path === 'update') {
            this.isUpdate = true;
            this.customerId = this.route.snapshot.params.id;
            this.title = 'Customer Update';
        }
        /**
         * Tab will be highlighted based on sharedServiceCustomerAction from Customer list
         */
        this.shareCustomerDataService.customerAction$.subscribe(function (action) {
            switch (action) {
                case 'EDIT':
                    _this.tabGroup.selectedIndex = 0;
                    break;
                case 'SUBSCRIPTION':
                    _this.tabGroup.selectedIndex = 1;
                    break;
                case 'TRANSACTION':
                    _this.tabGroup.selectedIndex = 2;
                    break;
                default:
                    _this.tabGroup.selectedIndex = 0;
            }
        });
    };
    CustomerComponent.prototype.redirectTo = function (page) {
        this.routingService.goToPage(page);
    };
    CustomerComponent.prototype.onTabChange = function (tab) {
        console.log(tab.index, this.customerId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"])
    ], CustomerComponent.prototype, "tabGroup", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/features/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/features/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedCustomerDataService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/features/customer/customer.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/customer/customer.module.ts ***!
  \******************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer.component */ "./src/app/features/customer/customer.component.ts");
/* harmony import */ var _customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-create/customer-create.component */ "./src/app/features/customer/customer-create/customer-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @infinitycube/gravatar */ "./node_modules/@infinitycube/gravatar/fesm5/infinitycube-gravatar.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _customer_subscription_customer_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer-subscription/customer-subscription.component */ "./src/app/features/customer/customer-subscription/customer-subscription.component.ts");
/* harmony import */ var _customer_transactions_customer_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-transactions/customer-transactions.component */ "./src/app/features/customer/customer-transactions/customer-transactions.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/features/customer/customer-details/customer-details.component.ts");
















var routes = [
    {
        path: 'list',
        component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_15__["CustomerDetailsComponent"]
    },
    { path: 'update/:id', component: _customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
    {
        path: 'create',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"]
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
    // { path: '**', component: LoginComponent }
];
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"], _customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_9__["CustomerCreateComponent"],
                _customer_subscription_customer_subscription_component__WEBPACK_IMPORTED_MODULE_13__["CustomerSubscriptionComponent"], _customer_transactions_customer_transactions_component__WEBPACK_IMPORTED_MODULE_14__["CustomerTransactionsComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_15__["CustomerDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_11__["GravatarModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"], _customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_9__["CustomerCreateComponent"]],
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-customer-customer-module.js.map