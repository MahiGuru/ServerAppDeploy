(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-schedule-delivery-schedule-delivery-module"],{

/***/ "./src/app/features/schedule-delivery/schedule-delivery.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/schedule-delivery/schedule-delivery.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<haribol-page-heading [title]=\"'Schedule Delivery'\" [headIcon]=\"'fa-users'\" (searchVal)=\"getSearchInput($event)\"\r\n  [count]=\"customersLength\"></haribol-page-heading>\r\n<div class=\"tbl-content\">\r\n  <br />\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"User Roles\" [formControl]=\"roleId\">\r\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role.code\">\r\n          {{role.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <br />\r\n  <mat-tab-group animationDuration=\"100ms\" mat-align-tabs=\"center\">\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <i class=\"fas fa-location-arrow mr-10 \"></i>\r\n        Assign Delivery\r\n      </ng-template>\r\n      <div class=\"customer-rep\" *ngIf=\"roleId.value == 'CUST_REP'\">\r\n        <div *ngFor=\"let customer of customerData\">\r\n          <div class=\"data-info ptb-10 mb-10\" fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"150px\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n              <img fxFlex=\"50px\" gravatar [email]=\"customer.email\" [size]=\"36\">\r\n              <p fxFlex fxFlexAlign=\"center\">{{customer.firstName}} {{customer.lastName}}</p>\r\n            </div>\r\n            <div fxFlex=\"20\" class=\"wrap\">\r\n              <p>{{customer.email}}</p>\r\n              <p>{{customer.phone}}</p>\r\n            </div>\r\n            <div fxFlex=\"20\"> {{customer.address1}}</div>\r\n            <div fxFlex=\"15\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Delivery Channels\" [formControl]=\"deliveryChannelId\">\r\n                  <mat-option *ngFor=\"let channel of deliveryChannels\" [value]=\"channel.channelId\">\r\n                    {{channel.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100px\">\r\n              <button mat-button class=\"btn assign-btn\" (click)=\"assignChannelToCustomer(deliveryChannelId.value, customer.customerId)\">\r\n                <i class=\"fas fa-location-arrow\"></i> Assign\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"delivery-rep\" *ngIf=\"roleId.value == 'DELIVERY_REP'\">\r\n        <div *ngFor=\"let customer of customerData\">\r\n          <div class=\"data-info ptb-10 mb-10\" fxLayout=\"row\" fxLayoutWrap fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"150px\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n              <img fxFlex=\"50px\" gravatar [email]=\"customer.email\" [size]=\"36\">\r\n              <p fxFlex fxFlexAlign=\"center\">{{customer.firstName}} {{customer.lastName}}</p>\r\n            </div>\r\n            <div fxFlex=\"20\" class=\"wrap\">\r\n              <p>{{customer.email}}</p>\r\n              <p>{{customer.phone}}</p>\r\n            </div>\r\n            <div fxFlex=\"20\"> {{customer.address1}}</div>\r\n            <div fxFlex=\"15\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Delivery Channels\" [(ngModel)]=\"deliveryChannelId\">\r\n                  <mat-option *ngFor=\"let channel of deliveryChannels\" [value]=\"channel.channelId\">\r\n                    {{channel.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"15\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Delivery Boys\" [formControl]=\"deliveryBoyId\">\r\n                  <mat-option *ngFor=\"let boy of deliveryBoys\" [value]=\"boy.userId\">\r\n                    {{boy.firstName }} {{boy.lastName }}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div fxFlex=\"100px\">\r\n              <button mat-button class=\"btn assign-btn\" (click)=\"assignToDeliveryBoy(deliveryBoyId.value, customer.customerId)\">\r\n                <i class=\"fas fa-location-arrow\"></i> Assign\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <i class=\"fas fa-map-marker-alt mr-10\"></i>\r\n        Assigned Deliverys\r\n      </ng-template>\r\n      <div>\r\n\r\n\r\n      </div>\r\n\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/schedule-delivery/schedule-delivery.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/schedule-delivery/schedule-delivery.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assign-btn {\n  background-color: #00adf1;\n  color: #ffffff; }\n  .assign-btn:hover {\n    background-color: #005e94; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2NoZWR1bGUtZGVsaXZlcnkvRDpcXFdPUktcXE1FUlVEQU5cXGhhcmlib2xfYW5nL3NyY1xcYXBwXFxmZWF0dXJlc1xcc2NoZWR1bGUtZGVsaXZlcnlcXHNjaGVkdWxlLWRlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQXlCO0VBQ3pCLGVBQWMsRUFLZjtFQVBEO0lBS0ksMEJBQWlDLEVBQ2xDIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvc2NoZWR1bGUtZGVsaXZlcnkvc2NoZWR1bGUtZGVsaXZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNzaWduLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRmMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgOTQsIDE0OCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/schedule-delivery/schedule-delivery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/schedule-delivery/schedule-delivery.component.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDeliveryComponent", function() { return ScheduleDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/customer-management.service */ "./src/app/shared/services/customer-management.service.ts");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-customer-data.service */ "./src/app/shared/services/share-data/shared-customer-data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_delivery_channel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/delivery-channel.service */ "./src/app/shared/services/delivery-channel.service.ts");
/* harmony import */ var src_app_shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/user-management.service */ "./src/app/shared/services/user-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");










var ScheduleDeliveryComponent = /** @class */ (function () {
    function ScheduleDeliveryComponent(customerManagementService, routingService, sharedCustomerDataService, deliveryChannelService, userService, commonService) {
        this.customerManagementService = customerManagementService;
        this.routingService = routingService;
        this.sharedCustomerDataService = sharedCustomerDataService;
        this.deliveryChannelService = deliveryChannelService;
        this.userService = userService;
        this.commonService = commonService;
    }
    ScheduleDeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryBoyId = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('');
        this.roleId = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('');
        this.deliveryChannelId = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('');
        this.customerManagementService.getCustomers().subscribe(function (result) {
            _this.customerData = result;
            _this.originalCustomerArr = result;
            _this.customersLength = _this.customerData.length;
        });
        this.init();
        this.deliveryBoyId.valueChanges.subscribe(function (boy) {
        });
        this.roleId.valueChanges.subscribe(function (role) {
        });
        this.deliveryChannelId.valueChanges.subscribe(function (channel) {
        });
    };
    // load Delivery Channels
    ScheduleDeliveryComponent.prototype.init = function () {
        var _this = this;
        this.deliveryChannelService.getDeliveryChannels().subscribe(function (res) {
            _this.deliveryChannels = res;
        });
        this.userService.getRoles().subscribe(function (res) {
            _this.roles = res;
            _this.roleId.setValue('CUST_REP', { onlySelf: true });
        });
        this.userService.getUsers().subscribe(function (result) {
            _this.deliveryBoys = result;
        });
    };
    ScheduleDeliveryComponent.prototype.getSearchInput = function (searchInput) {
        var searchStr = searchInput.toLowerCase();
        this.customerData = lodash__WEBPACK_IMPORTED_MODULE_5__["filter"](this.originalCustomerArr, function (val) {
            var str = (val.firstName + val.lastName).toLowerCase();
            return str.indexOf(searchStr) >= 0;
        });
        console.log(this.customerData);
        this.customersLength = this.customerData.length;
    };
    ScheduleDeliveryComponent.prototype.addNewBtnClick = function () {
        this.sharedCustomerDataService.changeData(null);
        this.routingService.goToPage('customer', 'create');
    };
    ScheduleDeliveryComponent.prototype.assignAreaClick = function (customerId) {
        console.log(customerId);
    };
    ScheduleDeliveryComponent.prototype.assignChannelToCustomer = function (chId, cId) {
        var _this = this;
        if (cId && chId) {
            this.deliveryChannelService.updateDeliveryCustomer({ channelId: chId, customerId: cId }).subscribe(function (res) {
                _this.commonService.showSnackBar('Successfully assigned to customer rep!!', 'Assigned to Customer');
            }, function (err) {
                _this.commonService.showSnackBar('Something went wrong!!', 'Assigned Fail Customer');
            });
        }
    };
    ScheduleDeliveryComponent.prototype.assignToDeliveryBoy = function (boyId, cId) {
        var _this = this;
        if (cId && boyId) {
            this.deliveryChannelService.updateDeliveryBoy({ delBoyId: boyId, customerId: cId }).subscribe(function (res) {
                _this.commonService.showSnackBar('Successfully assigned to Delivery boy!!', 'Assigned to DeliveryBoy');
            }, function (err) {
                _this.commonService.showSnackBar('Something went wrong!!', 'Assigned Fail DeliveryBoy');
            });
        }
    };
    ScheduleDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-schedule-delivery',
            template: __webpack_require__(/*! ./schedule-delivery.component.html */ "./src/app/features/schedule-delivery/schedule-delivery.component.html"),
            styles: [__webpack_require__(/*! ./schedule-delivery.component.scss */ "./src/app/features/schedule-delivery/schedule-delivery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_customer_management_service__WEBPACK_IMPORTED_MODULE_2__["CustomerManagementService"],
            src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            src_app_shared_services_share_data_shared_customer_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedCustomerDataService"],
            src_app_shared_services_delivery_channel_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryChannelService"],
            src_app_shared_services_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"],
            src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
    ], ScheduleDeliveryComponent);
    return ScheduleDeliveryComponent;
}());



/***/ }),

/***/ "./src/app/features/schedule-delivery/schedule-delivery.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/schedule-delivery/schedule-delivery.module.ts ***!
  \************************************************************************/
/*! exports provided: ScheduleDeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDeliveryModule", function() { return ScheduleDeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _schedule_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-delivery.component */ "./src/app/features/schedule-delivery/schedule-delivery.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @infinitycube/gravatar */ "./node_modules/@infinitycube/gravatar/fesm5/infinitycube-gravatar.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__);












var routes = [
    {
        path: '',
        component: _schedule_delivery_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleDeliveryComponent"]
    },
];
var ScheduleDeliveryModule = /** @class */ (function () {
    function ScheduleDeliveryModule() {
    }
    ScheduleDeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _schedule_delivery_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleDeliveryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _infinitycube_gravatar__WEBPACK_IMPORTED_MODULE_7__["GravatarModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], ScheduleDeliveryModule);
    return ScheduleDeliveryModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-schedule-delivery-schedule-delivery-module.js.map