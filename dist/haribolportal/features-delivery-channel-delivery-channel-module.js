(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-delivery-channel-delivery-channel-module"],{

/***/ "./src/app/features/delivery-channel/delivery-channel.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/features/delivery-channel/delivery-channel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<haribol-page-heading [title]=\"'Delivery Channels'\" [headIcon]=\"'fa-users'\" [searchRequire]=\"'false'\"></haribol-page-heading>\r\n\r\n<div class=\"tbl-content\">\r\n  <br />\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n    <button mat-raised-button class=\"btn mt-4\" color=\"primary\" (click)=\"viewChannelList()\">\r\n      <i class=\"fas fa-arrow-down\" [ngClass]=\"{'fa-arrow-up' : isListEnabled, 'fa-arrow-down' : !isListEnabled}\"></i>View\r\n      Channel List\r\n    </button>\r\n\r\n  </div>\r\n  <ul *ngIf=\"isListEnabled\" class=\"dc-list\">\r\n    <li fxLayout=\"row\" fxLayoutGap=\"20px\" *ngFor=\"let channel of deliveryChannels\">\r\n      <div class=\"p-10\" fxFlex=\"300px\"><span>Name:</span> {{channel.name}}</div>\r\n      <div class=\"p-10\" fxFlex><span>Pin Code:</span> {{channel.pinCode}}</div>\r\n      <div class=\"p-10\" fxFlex><span>Area Code:</span> {{channel.code}}</div>\r\n      <div fxFlex class=\"text-right\">\r\n        <button mat-button class=\"btn min-btn\" (click)=\"removeDeliveryChannel(channel)\">\r\n          <i class=\"fs-18 fas fa-times\"></i>\r\n        </button>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <br />\r\n  <form [formGroup]=\"deliveryForm\">\r\n    <div class=\"create-form delivery-form\" fxLayout=\"column\" fxLayoutGap=\"30px\">\r\n      <h4 class=\"text-center\">Add Area Code</h4>\r\n      <div fxLayout=\"column\" fxFlex=\"30\" class=\"inner-form\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"deliveryForm.get('name').invalid && deliveryForm.get('name').dirty\">\r\n            Please enter name\r\n          </p>\r\n        </div>\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Area code\" formControlName=\"code\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"deliveryForm.get('code').invalid && deliveryForm.get('code').dirty\">\r\n            Please enter area code\r\n          </p>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Pincode\" formControlName=\"pinCode\">\r\n          </mat-form-field>\r\n          <p class=\"error mt-5\" *ngIf=\"deliveryForm.get('pinCode').invalid && deliveryForm.get('pinCode').dirty\">\r\n            Please enter pin code\r\n          </p>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n          <button mat-raised-button class=\"btn\" color=\"accent\" (click)=\"saveDeliveryChannel()\">\r\n            Add Delivery Code\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/delivery-channel/delivery-channel.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/features/delivery-channel/delivery-channel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delivery-form {\n  width: 50%;\n  margin: auto; }\n\n.dc-list {\n  padding: 10px;\n  background-color: #bee1ff; }\n\n.dc-list li {\n    border-bottom: 1px solid #9bd0ff; }\n\n.dc-list li div span {\n      font-weight: 700;\n      padding-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGVsaXZlcnktY2hhbm5lbC9EOlxcV09SS1xcTUVSVURBTlxcaGFyaWJvbF9hbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFxkZWxpdmVyeS1jaGFubmVsXFxkZWxpdmVyeS1jaGFubmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVTtFQUNWLGFBQVksRUFDYjs7QUFFRDtFQUNFLGNBQWE7RUFDYiwwQkFBb0MsRUFZckM7O0FBZEQ7SUFLSSxpQ0FBMkMsRUFRNUM7O0FBYkg7TUFTUSxpQkFBZ0I7TUFDaEIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGVsaXZlcnktY2hhbm5lbC9kZWxpdmVyeS1jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGl2ZXJ5LWZvcm0ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZGMtbGlzdCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkwLCAyMjUsIDI1NSk7XHJcblxyXG4gIGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTU1LCAyMDgsIDI1NSk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/delivery-channel/delivery-channel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/delivery-channel/delivery-channel.component.ts ***!
  \*************************************************************************/
/*! exports provided: DeliveryChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChannelComponent", function() { return DeliveryChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");
/* harmony import */ var src_app_shared_services_delivery_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/delivery-channel.service */ "./src/app/shared/services/delivery-channel.service.ts");






var DeliveryChannelComponent = /** @class */ (function () {
    function DeliveryChannelComponent(routingService, fb, commonService, deliveryChannelService) {
        this.routingService = routingService;
        this.fb = fb;
        this.commonService = commonService;
        this.deliveryChannelService = deliveryChannelService;
        this.isListEnabled = false;
    }
    DeliveryChannelComponent.prototype.ngOnInit = function () {
        this.deliveryForm = this.fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pinCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[1-9][0-9]{5}$')]]
        });
        this.init();
    };
    DeliveryChannelComponent.prototype.init = function () {
        var _this = this;
        this.deliveryChannelService.getDeliveryChannels().subscribe(function (res) {
            _this.deliveryChannels = res;
        });
    };
    /** View Channels list */
    DeliveryChannelComponent.prototype.viewChannelList = function () {
        this.isListEnabled = !this.isListEnabled;
    };
    /**
     *redirect to product list page
     */
    DeliveryChannelComponent.prototype.redirectTo = function (product) {
        this.routingService.goToPage(product);
    };
    /**
     * Save delivery channel
     */
    DeliveryChannelComponent.prototype.saveDeliveryChannel = function (data) {
        var _this = this;
        this.commonService.validate(this.deliveryForm);
        if (this.deliveryForm.valid) {
            this.deliveryChannelService.postDeliveryChannels(this.deliveryForm.value).subscribe(function (res) {
                // this.deliveryChannels = res;
                _this.commonService.showSnackBar('Delivery channel saved!!', 'Success');
                _this.deliveryForm.reset();
                _this.deliveryForm.updateValueAndValidity({ onlySelf: true });
                _this.init();
            }, function (err) {
                _this.commonService.showSnackBar('Something went wrong!!', 'Failure');
            });
        }
    };
    /**
     * Delivery channel remove
     */
    DeliveryChannelComponent.prototype.removeDeliveryChannel = function (channel) {
        var _this = this;
        this.deliveryChannelService.deleteDeliveryChannels({ channelId: channel.channelId }).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully deleted the channel!!', 'Deleted');
        }, function (err) {
            _this.commonService.showSnackBar('Something went wrong!!', 'Deleted');
        });
    };
    /**
     * Update delivery channel
     */
    DeliveryChannelComponent.prototype.updateDeliveryChannel = function (channel) {
        var _this = this;
        this.deliveryChannelService.updateDeliveryChannel(channel.channelId).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully updated the channel!!', 'Updated');
        }, function (err) {
            _this.commonService.showSnackBar('Something went wrong!!', 'updated');
        });
    };
    /**
     * Update delivery BOY
     */
    DeliveryChannelComponent.prototype.updateDeliveryBoy = function (deliveryboy) {
        var _this = this;
        this.deliveryChannelService.updateDeliveryBoy(deliveryboy).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully updated deliveryBoy!!', ' Success');
        }, function (err) {
            _this.commonService.showSnackBar('Something went wrong!!', 'Success');
        });
    };
    /**
     * Update delivery CUSTOMER
     */
    DeliveryChannelComponent.prototype.updateDeliveryCustomer = function (customer) {
        var _this = this;
        this.deliveryChannelService.updateDeliveryCustomer(customer).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully updated the channel customer!!', 'Customer Success');
        }, function (err) {
            _this.commonService.showSnackBar('Something went wrong!!', 'Customer Update');
        });
    };
    DeliveryChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-delivery-channel',
            template: __webpack_require__(/*! ./delivery-channel.component.html */ "./src/app/features/delivery-channel/delivery-channel.component.html"),
            styles: [__webpack_require__(/*! ./delivery-channel.component.scss */ "./src/app/features/delivery-channel/delivery-channel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            src_app_shared_services_delivery_channel_service__WEBPACK_IMPORTED_MODULE_5__["DeliveryChannelService"]])
    ], DeliveryChannelComponent);
    return DeliveryChannelComponent;
}());



/***/ }),

/***/ "./src/app/features/delivery-channel/delivery-channel.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/delivery-channel/delivery-channel.module.ts ***!
  \**********************************************************************/
/*! exports provided: DeliveryChannelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChannelModule", function() { return DeliveryChannelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delivery_channel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delivery-channel.component */ "./src/app/features/delivery-channel/delivery-channel.component.ts");










var routes = [
    {
        path: '',
        component: _delivery_channel_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryChannelComponent"]
    },
    { path: 'update/channel/:id', component: _delivery_channel_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryChannelComponent"] },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var DeliveryChannelModule = /** @class */ (function () {
    function DeliveryChannelModule() {
    }
    DeliveryChannelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_delivery_channel_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryChannelComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], DeliveryChannelModule);
    return DeliveryChannelModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-delivery-channel-delivery-channel-module.js.map