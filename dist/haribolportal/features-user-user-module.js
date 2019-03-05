(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-module"],{

/***/ "./src/app/core/models/userRoles.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/userRoles.ts ***!
  \******************************************/
/*! exports provided: USERROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERROLES", function() { return USERROLES; });
var USERROLES = {
    'ADMIN': 'ADMIN',
    'CUST_REP': 'CUST_REP',
    'DELIVERY_REP': 'DELIVERY_REP',
    'DELIVERY_BOY': 'DELIVERY_BOY'
};


/***/ }),

/***/ "./src/app/features/user/user-create/user-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/features/user/user-create/user-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between flex-start\">\n  <div class=\"\" fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\n    <mat-icon fxFlexAlign=\"center\" (click)=\"redirectTo('user')\">arrow_back</mat-icon>\n    <i class=\"fs-40 fas fa-user-plus\" fxFlexAlign=\"center\"></i>\n    <div class=\"product-heading\" fxFlex>\n      <h1 class=\"p-0 m-0\"> {{title}}</h1>\n    </div>\n  </div>\n\n  <div class=\"text-right pt-15\" fxFlex fxFlexAlign=\"flex-start\">\n    <button mat-raised-button (click)=\"save()\">Save</button>\n  </div>\n</div>\n<div class=\"tbl-content\">\n  <form [formGroup]=\"userForm\">\n    <div class=\"create-form\" fxLayout=\"column\" fxLayoutGap=\"30px\">\n      <div fxLayout=\"column\" fxFlex=\"50\" class=\"inner-form\">\n        <div fxLayout=\"column\">\n          <mat-form-field>\n            <mat-select placeholder=\"User Roles\" formControlName=\"role\">\n              <mat-option *ngFor=\"let role of roles\" [value]=\"role.code\">\n                {{role.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <p class=\"error mt-5\" *ngIf=\"userForm.get('role').invalid && userForm.get('role').dirty\">\n            Please select user role\n          </p>\n        </div>\n        <div fxLayout=\"column\">\n          <mat-form-field>\n            <mat-select placeholder=\"Delivery Channels\" formControlName=\"deliveryChannel\">\n              <mat-option *ngFor=\"let identity of identityTypes\" [value]=\"identity.code\">\n                {{identity.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <p class=\"error mt-5\" *ngIf=\"userForm.get('deliveryChannel').invalid && userForm.get('deliveryChannel').dirty\">\n            Please enter delivery channel\n          </p>\n        </div>\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"20\" fxLayout=\"column\" fxLayoutGap=\"35px\">\n            <mat-form-field fxFlex=\"20\">\n              <mat-select placeholder=\"Salutions\" formControlName=\"salutation\">\n                <mat-option value=\"mr\">\n                  Mr\n                </mat-option>\n                <mat-option value=\"mrs\">\n                  Mrs\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <p class=\"error mt-10\" *ngIf=\"userForm.get('salutation').invalid && userForm.get('salutation').dirty\">\n              Please select Salutation\n            </p>\n          </div>\n          <div fxFlex=\"40\" fxLayout=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\n            </mat-form-field>\n\n            <p class=\"error mt-5\" *ngIf=\"userForm.get('firstName').invalid && userForm.get('firstName').dirty\">\n              Please select user firstname\n            </p>\n          </div>\n          <div fxFlex=\"40\" fxLayout=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\n            </mat-form-field>\n\n            <p class=\"error mt-5\" *ngIf=\"userForm.get('lastName').invalid && userForm.get('lastName').dirty\">\n              Please select user lastname\n            </p>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"50\" fxLayout=\"column\">\n            <mat-form-field>\n              <mat-select placeholder=\"Identity Types\" formControlName=\"identityType\">\n                <mat-option *ngFor=\"let identity of identityTypes\" [value]=\"identity.code\">\n                  {{identity.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"userForm.get('identityType').invalid && userForm.get('identityType').dirty \">\n              Please enter Identity Type\n            </p>\n          </div>\n          <div fxFlex=\"50\" fxLayout=\"column\">\n            <mat-form-field>\n              <input matInput placeholder=\"Identity Value\" formControlName=\"identityNo\">\n            </mat-form-field>\n            <p class=\"error\" *ngIf=\"userForm.get('identityNo').invalid && userForm.get('identityNo').dirty \">\n              Please enter Identity Number\n            </p>\n          </div>\n        </div>\n        <div fxFlex=\"50\" fxLayout=\"column\">\n          <mat-form-field fxFlex=\"50\" fxLayout=\"column\">\n            <input matInput placeholder=\"UserName\" formControlName=\"userName\">\n\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"userForm.get('userName').invalid && userForm.get('userName').dirty \">\n            Please enter username\n          </p>\n        </div>\n        <div fxFlex=\"50\" fxLayout=\"column\">\n          <mat-form-field>\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"userForm.get('password').invalid && userForm.get('password').dirty\">\n            Please enter password\n          </p>\n        </div>\n        <div fxFlex=\"50\" fxLayout=\"column\">\n          <mat-form-field>\n            <input matInput placeholder=\"Email Address\" formControlName=\"email\">\n\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"userForm.get('email').invalid && userForm.get('email').dirty\">\n            Please enter Email\n          </p>\n        </div>\n        <div fxFlex=\"20\" fxLayout=\"column\">\n          <mat-form-field>\n            <input matInput placeholder=\"Phone\" maxlength=\"10\" formControlName=\"phone\" />\n\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"userForm.get('phone').invalid && userForm.get('phone').dirty\">\n            Please enter Phone Number\n          </p>\n        </div>\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"50\" fxLayout=\"column\">\n            <mat-form-field>\n              <mat-select placeholder=\"Country\" formControlName=\"country\">\n                <mat-option *ngFor=\"let country of countrys\" [value]=\"country.code\">\n                  {{country.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <p class=\"error mt-5\" *ngIf=\"userForm.get('country').invalid && userForm.get('country').dirty\">\n              Please select country\n            </p>\n          </div>\n          <div fxFlex=\"50\" fxLayout=\"column\">\n            <mat-form-field>\n              <mat-select placeholder=\"City\" formControlName=\"city\">\n                <mat-option *ngFor=\"let city of cities\" [value]=\"city.code\">\n                  {{city.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <p class=\"error mt-5\" *ngIf=\"userForm.get('city').invalid && userForm.get('city').dirty\">\n              Please select city\n            </p>\n          </div>\n        </div>\n\n        <div fxFlex=\"20\" fxLayout=\"column\">\n          <mat-form-field class=\"\">\n            <input matInput #postalCode maxlength=\"6\" placeholder=\"Postal Code\" formControlName=\"pincode\">\n            <mat-hint align=\"end\">{{postalCode.value.length}} / 6</mat-hint>\n          </mat-form-field>\n          <p class=\"error\" *ngIf=\"userForm.get('pincode').invalid && userForm.get('pincode').dirty\">\n            Please enter Pincode\n          </p>\n        </div>\n        <mat-form-field fxFlex=\"80\">\n          <textarea matInput placeholder=\"Address\" formControlName=\"address1\"></textarea>\n        </mat-form-field>\n        <div fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-between center\">\n          <p>Payment Collection </p>\n          <div fxLayout=\"column\">\n            <mat-slide-toggle class=\"example-margin\" [color]=\"'red'\" value=\"1\" formControlName=\"paymentCollectionEligibility\"></mat-slide-toggle>\n          </div>\n        </div>\n        <p class=\"error\" *ngIf=\"!(userForm.get('paymentCollectionEligibility').value) && userForm.get('paymentCollectionEligibility').dirty\">\n          Please Select Payment Collection Eligibility\n        </p>\n        <br />\n      </div>\n      <div class=\"mtb-20 text-center\">\n        <button mat-raised-button color=\"accent\" (click)=\"save()\">Save User</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/user/user-create/user-create.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/user/user-create/user-create.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: auto; }\n  :host .section-header {\n    background-color: #0092d6;\n    padding: 15px 50px;\n    color: white; }\n  :host .inner-form {\n    margin: auto;\n    width: 500px; }\n  :host /deep/ .mat-form-field-empty.mat-form-field-label {\n  color: #a1a1a1;\n  font-weight: 400;\n  font-size: 0.9em; }\n  :host /deep/ .mat-form-field-underline {\n  background-color: #6b6b6b; }\n  :host /deep/ .red-snackbar {\n  position: absolute;\n  top: 20px; }\n  .error {\n  margin-top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdXNlci91c2VyLWNyZWF0ZS9EOlxcV09SS1xcTUVSVURBTlxcaGFyaWJvbF9hbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFx1c2VyXFx1c2VyLWNyZWF0ZVxcdXNlci1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBYWY7RUFkRDtJQUlJLDBCQUFrQztJQUNsQyxtQkFBa0I7SUFDbEIsYUFBWSxFQUNiO0VBUEg7SUFVSSxhQUFZO0lBQ1osYUFBWSxFQUNiO0VBSUg7RUFHSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtFQU5IO0VBU0ksMEJBQXlCLEVBQzFCO0VBVkg7RUFhSSxtQkFBa0I7RUFDbEIsVUFBUyxFQUNWO0VBR0g7RUFDRSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy91c2VyL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0NiwgMjE0KTtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5pbm5lci1mb3JtIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8ge1xyXG5cclxuICAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6ICNhMWExYTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNmI2YjtcclxuICB9XHJcblxyXG4gIC5yZWQtc25hY2tiYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/features/user/user-create/user-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/user/user-create/user-create.component.ts ***!
  \********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var src_app_shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user-management.service */ "./src/app/shared/services/user-management.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-user-data.service */ "./src/app/shared/services/share-data/shared-user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");
/* harmony import */ var src_app_core_models_userRoles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/models/userRoles */ "./src/app/core/models/userRoles.ts");
/* harmony import */ var src_app_shared_services_date_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/date-management.service */ "./src/app/shared/services/date-management.service.ts");










var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(fb, routingService, userService, shareUserDataService, route, commonService, dateManagementService) {
        this.fb = fb;
        this.routingService = routingService;
        this.userService = userService;
        this.shareUserDataService = shareUserDataService;
        this.route = route;
        this.commonService = commonService;
        this.dateManagementService = dateManagementService;
        this.title = 'User Create';
        this.identityTypes = [];
        this.countrys = [];
        this.cities = [];
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.url[0].path === 'update') {
            this.isUpdate = true;
            this.title = 'User Update';
        }
        /**
         * USER FORM creation
         */
        this.userForm = this.fb.group({
            salutation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[56789]\\d{9}$')]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identityType: [''],
            userId: [null],
            identityNo: [''],
            validity: [this.dateManagementService.getDateFormat()],
            deliveryChannel: [''],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')]],
            paymentCollectionEligibility: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get Countrys, Regions, Identity types
        this.getUtils();
        // USER ROLE SUBSCRIBE
        this.userForm.get('role').valueChanges.subscribe(function (type) {
            _this.userForm.get('identityType').clearValidators();
            _this.userForm.get('identityNo').clearValidators();
            _this.userForm.get('deliveryChannel').clearValidators();
            if (type === src_app_core_models_userRoles__WEBPACK_IMPORTED_MODULE_8__["USERROLES"].DELIVERY_BOY) {
                _this.userForm.get('identityType').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                _this.userForm.get('identityNo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            if (type === src_app_core_models_userRoles__WEBPACK_IMPORTED_MODULE_8__["USERROLES"].CUST_REP || type === src_app_core_models_userRoles__WEBPACK_IMPORTED_MODULE_8__["USERROLES"].DELIVERY_REP) {
                _this.userForm.get('deliveryChannel').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            }
            _this.userForm.get('identityType').updateValueAndValidity({ onlySelf: true });
            _this.userForm.get('identityNo').updateValueAndValidity({ onlySelf: true });
            _this.userForm.get('deliveryChannel').updateValueAndValidity({ onlySelf: true });
        });
        /**
         * If SharedService has "User" data will update the userform object
         */
        this.shareUserDataService.currentUser$.subscribe(function (data) {
            if (data) {
                _this.isUpdate = true;
                _this.dataAssignToForm(data);
            }
            else {
                _this.isUpdate = false;
            }
        });
    };
    /**
     * GET utils country, regions, IdentityTypes, Roles
     */
    UserCreateComponent.prototype.getUtils = function () {
        var _this = this;
        this.commonService.getAllCountrys().subscribe(function (res) {
            _this.countrys = res;
            _this.userForm.get('country').setValue(res[0].id);
        });
        this.commonService.getRegions().subscribe(function (res) {
            _this.cities = res;
        });
        this.commonService.getIdentityTypes().subscribe(function (res) {
            _this.identityTypes = res;
        });
        this.userService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
        });
    };
    /**
     * Save/update User
     */
    UserCreateComponent.prototype.save = function () {
        var _this = this;
        this.commonService.validate(this.userForm);
        if (this.userForm.valid) {
            var productObj = this.userForm.value;
            productObj.paymentCollectionEligibility = (productObj.paymentCollectionEligibility) ? 1 : 0;
            this.userService.addUser(productObj).subscribe(function (res) {
                _this.commonService.showSnackBar((!_this.isUpdate) ? 'Saved!!' : 'Updated User Record!!', (!_this.isUpdate) ? 'Success' : 'Updated Record');
                _this.routingService.goToPage('user');
            }, function (err) {
                _this.commonService.showSnackBar('Something went wrong!!', 'Failed Save');
            });
        }
    };
    /**
     * userform update with Userobject
     * @param data -> userObject
     */
    UserCreateComponent.prototype.redirectTo = function (page) {
        this.routingService.goToPage(page);
    };
    /**
     * userform update with Userobject
     * @param data -> userObject
     */
    UserCreateComponent.prototype.dataAssignToForm = function (data) {
        this.userForm.get('userName').setValue(data.userName);
        this.userForm.get('email').setValue(data.email);
        this.userForm.get('phone').setValue(data.phone);
        this.userForm.get('firstName').setValue(data.firstName);
        this.userForm.get('lastName').setValue(data.lastName);
        this.userForm.get('password').setValue(data.password);
        this.userForm.get('salutation').setValue(data.salutation);
        this.userForm.get('address1').setValue(data.address);
        this.userForm.get('role').setValue(data.role);
        this.userForm.get('userId').setValue(data.userId);
        this.userForm.get('address1').setValue(data.address1);
        this.userForm.get('pincode').setValue(data.pincode);
        this.userForm.get('city').setValue(data.city);
        this.userForm.get('identityType').setValue(data.identityType);
        this.userForm.get('identityNo').setValue(data.identityNo);
        this.userForm.get('paymentCollectionEligibility').setValue(data.paymentCollectionEligibility);
        this.userForm.updateValueAndValidity({ onlySelf: true });
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/features/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/features/user/user-create/user-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            src_app_shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"],
            src_app_shared_services_share_data_shared_user_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedUserDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            src_app_shared_services_date_management_service__WEBPACK_IMPORTED_MODULE_9__["DateManagementService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/features/user/user.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/user/user.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customer-section\">\r\n  <haribol-page-heading [title]=\"'User Management'\" [headIcon]=\"'fa-user-tie'\" [btnText]=\"'Add New User'\" (btnClick)=\"addNewBtnClick()\"\r\n    (searchVal)=\"getSearchInput($event)\" [count]=\"usersLength\"></haribol-page-heading>\r\n  <div class=\"tbl-content\">\r\n    <div class=\"user-info-row\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\r\n      <div fxFlex fxFlexAlign=\"center\" *ngIf=\"userData\">\r\n        Users: {{userData.length}}\r\n      </div>\r\n      <div class=\"sort-link\" fxFlex fxFlexAlign=\"center\" class=\"text-right\" (click)=\"sortClick()\">\r\n        <mat-icon>sort_by_alpha</mat-icon>\r\n      </div>\r\n    </div>\r\n    <div *ngFor=\"let user of userData\">\r\n      <div class=\"data-info ptb-10 mb-10\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n          <img fxFlex=\"50px\" gravatar [email]=\"user.email\" [size]=\"36\">\r\n          <p fxFlex fxFlexAlign=\"center\">{{user.firstName}} {{user.lastName}}</p>\r\n        </div>\r\n        <div fxFlex=\"200px\" class=\"wrap\"> {{user.email}}</div>\r\n        <div fxFlex=\"120px\"> {{user.phone}}</div>\r\n        <div fxFlex=\"200px\"> {{user.address1}}</div>\r\n        <div fxFlex>\r\n          <mat-slide-toggle [checked]=\"true\">Active</mat-slide-toggle>\r\n        </div>\r\n        <div fxFlex=\"180px\">\r\n          <button mat-button class=\"btn min-btn\" (click)=\"editBtnClick(user)\">\r\n            <i class=\"fs-18 fas fa-edit\"></i>\r\n          </button>\r\n          <button mat-button class=\"btn min-btn\" (click)=\"removeBtnClick(user)\">\r\n            <i class=\"fs-18 fas fa-times\"></i>\r\n          </button>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- <haribol-list-item [data]=\"user\"></haribol-list-item> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/user/user.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/user/user.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/user/user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/user/user.component.ts ***!
  \*************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/user-management.service */ "./src/app/shared/services/user-management.service.ts");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-user-data.service */ "./src/app/shared/services/share-data/shared-user-data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");







var UserComponent = /** @class */ (function () {
    function UserComponent(userMangementService, routingService, sharedUserDataService, commonService) {
        this.userMangementService = userMangementService;
        this.routingService = routingService;
        this.sharedUserDataService = sharedUserDataService;
        this.commonService = commonService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.usersLength = 0;
        this.init();
    };
    /**
     * Get all the users
     */
    UserComponent.prototype.init = function () {
        var _this = this;
        this.userMangementService.getUsers().subscribe(function (result) {
            _this.userData = result;
            _this.originalUsersArr = result;
            _this.usersLength = _this.userData.length;
        });
    };
    /**
     * SearchInput will filter the userData based on firstName and lastName.
     * @param searchInput -> searchInput string
     */
    UserComponent.prototype.getSearchInput = function (searchInput) {
        var searchStr = searchInput.toLowerCase();
        this.userData = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.originalUsersArr, function (val) {
            var str = (val.firstName + val.lastName).toLowerCase();
            return str.indexOf(searchStr) >= 0;
        });
        this.usersLength = this.userData.length;
    };
    /**
     * SortClick method will sort userData based on firstName.
     */
    UserComponent.prototype.sortClick = function () {
        this.userData = lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"](this.userData, ['firstName']);
    };
    /**
     * addNewBtnClick method to route the user creation page
     * And update sharedUserData
     */
    UserComponent.prototype.addNewBtnClick = function () {
        this.sharedUserDataService.changeData(null);
        this.routingService.goToPage('user', 'create');
    };
    /**
     * editBtnClick method to route the user update page
     * And update sharedUserData
     */
    UserComponent.prototype.editBtnClick = function (user) {
        this.sharedUserDataService.changeData(user);
        this.routingService.goToPage('user', 'update', user.userId);
    };
    /**
     * removeBtnClick method to remove user
     */
    UserComponent.prototype.removeBtnClick = function (user) {
        var _this = this;
        this.userMangementService.deleteUser(user.userId).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully deleted User!!', 'Deleted User');
            _this.init();
        }, function (err) {
            _this.commonService.showSnackBar('Somethign wrong while deletion', 'Delete Failed');
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/features/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/features/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_2__["UserManagementService"],
            src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            src_app_shared_services_share_data_shared_user_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedUserDataService"],
            src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/features/user/user.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/user/user.module.ts ***!
  \**********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/features/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @infinitycube/gravatar */ "./node_modules/@infinitycube/gravatar/fesm5/infinitycube-gravatar.js");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/features/user/user-create/user-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var routes = [
    {
        path: 'list',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    },
    {
        path: 'create',
        component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__["UserCreateComponent"]
    },
    { path: 'update/:id', component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__["UserCreateComponent"] },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_9__["UserCreateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_8__["GravatarModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/shared/services/share-data/shared-user-data.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/share-data/shared-user-data.service.ts ***!
  \************************************************************************/
/*! exports provided: SharedUserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUserDataService", function() { return SharedUserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



var SharedUserDataService = /** @class */ (function () {
    function SharedUserDataService() {
        this.userDataSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentUser$ = this.userDataSource.asObservable();
    }
    SharedUserDataService.prototype.changeData = function (data) {
        this.userDataSource.next(data);
    };
    SharedUserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedUserDataService);
    return SharedUserDataService;
}());



/***/ })

}]);
//# sourceMappingURL=features-user-user-module.js.map