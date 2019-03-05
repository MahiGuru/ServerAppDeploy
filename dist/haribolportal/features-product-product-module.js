(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-product-product-module"],{

/***/ "./src/app/features/product/product-create/product-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/features/product/product-create/product-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between flex-start\">\n  <div class=\"\" fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\">\n    <mat-icon fxFlexAlign=\"center\" (click)=\"redirectTo('product')\">arrow_back</mat-icon>\n    <i class=\"fs-40 fas fa-cart-arrow-down\"></i>\n    <div class=\"product-heading\" fxFlex>\n      <h1 class=\"p-0 m-0\"> Product <span *ngIf=\"!isUpdate\">Creation</span> <span *ngIf=\"isUpdate\">Update</span></h1>\n    </div>\n  </div>\n\n  <div class=\"text-right pt-15\" fxFlex fxFlexAlign=\"flex-start\">\n    <button mat-raised-button (click)=\"save()\">Save</button>\n  </div>\n</div>\n<div class=\"tbl-content\">\n  <form [formGroup]=\"productForm\">\n    <div class=\"create-form\" fxLayout=\"column\">\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\">\n        <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutGap=\"20px\">\n          <mat-form-field fxFlex=\"50\">\n            <mat-select placeholder=\"Category\" formControlName=\"categoryId\">\n              <mat-option *ngFor=\"let category of categorys\" [value]=\"category.categoryId\">\n                {{category.fullName}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <p class=\"error mt-5\" *ngIf=\"productForm.get('categoryId').invalid && productForm.get('categoryId').dirty\">\n            Please select one category\n          </p>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"50\" fxLayoutGap=\"20px\">\n          <mat-form-field fxFlex=\"50\">\n            <input matInput placeholder=\"Product Name\" formControlName=\"name\">\n          </mat-form-field>\n          <p class=\"error mt-5\" *ngIf=\"productForm.get('name').invalid && productForm.get('name').dirty\">\n            Please enter product name\n          </p>\n        </div>\n\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"center center\">\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-form-field fxFlex=\"50\">\n            <input matInput placeholder=\"Price\" formControlName=\"basePrice\">\n          </mat-form-field>\n          <div fxLayout=\"column\" fxFlex=\"50\">\n            <mat-form-field fxFlex>\n              <input matInput placeholder=\"Product Code\" formControlName=\"code\">\n            </mat-form-field>\n            <p class=\"error mt-5\" *ngIf=\"productForm.get('code').invalid && productForm.get('code').dirty\">\n              Please enter product Code\n            </p>\n          </div>\n\n        </div>\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n          <mat-form-field fxFlex=\"50\">\n            <input matInput placeholder=\"Quantity\" formControlName=\"quantity\">\n          </mat-form-field>\n          <mat-form-field fxFlex=\"50\">\n            <mat-select placeholder=\"Unit of Measure\" formControlName=\"uom\">\n              <mat-option *ngFor=\"let weighingType of weighingTypes\" [value]=\"weighingType.id\">\n                {{weighingType.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"flex-start center\">\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutAlign=\"flex-start center\">\n          <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutAlign=\"flex-start\">\n            <p>Sellable Product?</p>\n            <div fxLayout=\"column\" fxFlexAlign=\"center\">\n              <mat-slide-toggle class=\"example-margin\" [color]=\"'red'\" formControlName=\"forSale\"></mat-slide-toggle>\n            </div>\n          </div>\n          <mat-checkbox fxFlex=\"50\" formControlName=\"hasDispensibleContainer\" *ngIf=\"productForm.get('forSale').value\">\n            Has Dispensible Container?\n          </mat-checkbox>\n\n        </div>\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutAlign=\"flex-start center\" fxLayoutGap=\"30px\">\n          <div *ngIf=\"productForm.get('forSale').value\" fxFlex=\"50\">\n            <mat-form-field fxFlex *ngIf=\"productForm.get('hasDispensibleContainer').value\">\n              <mat-select placeholder=\"Choose Non selling Products\" formControlName=\"dispensibleProduct\">\n                <mat-option *ngFor=\"let nonSellingProduct of nonSellingProducts\" [value]=\"nonSellingProduct.productId\">\n                  {{nonSellingProduct.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutAlign=\"flex-start\">\n            <p>Product Subscriptable?</p>\n            <div fxLayout=\"column\" fxFlexAlign=\"center\">\n              <mat-slide-toggle class=\"example-margin\" [color]=\"'red'\" formControlName=\"subscriptable\"></mat-slide-toggle>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"50px\" fxLayoutAlign=\"flex-start center\">\n        <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-form-field fxFlex=\"50\">\n            <mat-select placeholder=\"Country\" formControlName=\"country\">\n              <mat-option *ngFor=\"let country of countrys\" [value]=\"country.code\">\n                {{country.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlex=\"50\">\n            <mat-select placeholder=\"City\" formControlName=\"city\">\n              <mat-option *ngFor=\"let city of cities\" [value]=\"city.id\">\n                {{city.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <!-- <mat-form-field fxFlex=\"50\">\n          <input matInput type=\"text\" placeholder=\"Upload File\" #fileInput>\n        </mat-form-field> -->\n\n      </div>\n      <mat-form-field fxFlex=\"50\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n      </mat-form-field>\n      <div class=\"mtb-20 text-center\">\n        <button *ngIf=\"!isUpdate\" mat-raised-button color=\"accent\" (click)=\"save()\">\n          Save\n\n        </button>\n        <button *ngIf=\"isUpdate\" mat-raised-button color=\"accent\" (click)=\"saveUpdate()\">\n          Update\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/product/product-create/product-create.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/product/product-create/product-create.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: auto; }\n  :host .section-header {\n    background-color: #0092d6;\n    padding: 15px 50px;\n    color: white; }\n  :host /deep/ .mat-form-field-empty.mat-form-field-label {\n  color: #a1a1a1;\n  font-weight: 400;\n  font-size: 0.9em; }\n  :host /deep/ .mat-form-field-underline {\n  background-color: #6b6b6b; }\n  :host /deep/ .red-snackbar {\n  position: absolute;\n  top: 20px; }\n  :host /deep/ mat-tab-group[vertical] .mat-tab-labels {\n  display: flex;\n  flex-direction: column !important;\n  margin-right: 50px; }\n  :host /deep/ mat-tab-group[vertical] {\n  display: flex;\n  flex-direction: row !important; }\n  :host /deep/ .mat-tab-body-wrapper {\n  width: 100%;\n  border-left: 2px solid #00b4e0;\n  padding: 5px 20px; }\n  :host /deep/ .mat-tab-label-active {\n  background-color: #00b4e0;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0LWNyZWF0ZS9EOlxcV09SS1xcTUVSVURBTlxcaGFyaWJvbF9hbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFxwcm9kdWN0XFxwcm9kdWN0LWNyZWF0ZVxccHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBUWY7RUFURDtJQUlJLDBCQUFrQztJQUNsQyxtQkFBa0I7SUFDbEIsYUFBWSxFQUNiO0VBSUg7RUFHSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjtFQU5IO0VBU0ksMEJBQXlCLEVBQzFCO0VBVkg7RUFhSSxtQkFBa0I7RUFDbEIsVUFBUyxFQUNWO0VBZkg7RUFrQkksY0FBYTtFQUNiLGtDQUFpQztFQUNqQyxtQkFBa0IsRUFDbkI7RUFyQkg7RUF3QkksY0FBYTtFQUNiLCtCQUE4QixFQUMvQjtFQTFCSDtFQTZCSSxZQUFXO0VBQ1gsK0JBQXVDO0VBQ3ZDLGtCQUFpQixFQUNsQjtFQWhDSDtFQW1DSSwwQkFBa0M7RUFDbEMsV0FBVSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNDYsIDIxNCk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIHtcclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjYTFhMWExO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjZiNmI7XHJcbiAgfVxyXG5cclxuICAucmVkLXNuYWNrYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIG1hdC10YWItZ3JvdXBbdmVydGljYWxdIC5tYXQtdGFiLWxhYmVscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXRhYi1ncm91cFt2ZXJ0aWNhbF0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDAsIDE4MCwgMjI0KTtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODAsIDIyNCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/features/product/product-create/product-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/product/product-create/product-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var src_app_shared_services_product_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product-management.service */ "./src/app/shared/services/product-management.service.ts");
/* harmony import */ var _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");
/* harmony import */ var src_app_shared_services_share_data_shared_product_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-product-data.service */ "./src/app/shared/services/share-data/shared-product-data.service.ts");







var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(fb, routingService, productservice, commonService, sharedProductDataService) {
        this.fb = fb;
        this.routingService = routingService;
        this.productservice = productservice;
        this.commonService = commonService;
        this.sharedProductDataService = sharedProductDataService;
        this.categorys = [];
        this.weighingTypes = [];
        this.nonSellingProducts = [];
        this.countrys = [];
        this.cities = [];
        this.states = [];
        this.identityTypes = [];
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUtils();
        // productForm intiate formgroup
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            basePrice: [''],
            country: [''],
            city: [''],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uom: [null],
            quantity: [''],
            description: [''],
            image: [''],
            forSale: [0],
            subscriptable: [1],
            dispensibleProduct: [null],
            hasDispensibleContainer: [0]
        });
        /**
         * Valuechanges subscribe forSale and currentUser$
         */
        this.productForm.get('forSale').valueChanges.subscribe(function (forsale) {
            if (!forsale) {
                _this.productForm.get('dispensibleProduct').setValue(null);
            }
        });
        this.sharedProductDataService.currentUser$.subscribe(function (data) {
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
     * Get services categorys, uoms, identityTypes, getNonSellingProducts
     */
    ProductCreateComponent.prototype.getUtils = function () {
        var _this = this;
        this.commonService.getUomList().subscribe(function (res) {
            _this.weighingTypes = res;
        });
        this.commonService.getIdentityTypes().subscribe(function (res) {
            _this.identityTypes = res;
        });
        this.productservice.getCategoryList().subscribe(function (res) {
            _this.categorys = res;
            console.log('THIS CATEGORYS ', _this.categorys);
        });
        this.productservice.getNonSellingProducts().subscribe(function (res) {
            _this.nonSellingProducts = res;
        });
        this.commonService.getAllCountrys().subscribe(function (res) {
            _this.countrys = res;
            console.log(_this.countrys);
            _this.productForm.get('country').setValue(res[0].code);
        });
        this.commonService.getRegions().subscribe(function (regions) {
            _this.cities = regions;
        });
    };
    /** Save product */
    ProductCreateComponent.prototype.save = function () {
        var _this = this;
        this.commonService.validate(this.productForm);
        if (this.productForm.valid) {
            var productObj = this.productForm.value;
            productObj.forSale = productObj.forSale ? 1 : 0;
            productObj.hasDispensibleContainer = productObj.hasDispensibleContainer ? 1 : 0;
            productObj.subscriptable = productObj.subscriptable ? 1 : 0;
            this.productservice.addProduct(productObj).subscribe(function (res) {
                _this.commonService.showSnackBar('Saved!!', 'Success');
                _this.routingService.goToPage('product');
            }, function () {
                _this.commonService.showSnackBar('Please fill mandatory fields', 'Failed Save');
            });
        }
    };
    /** update product */
    ProductCreateComponent.prototype.saveUpdate = function () {
        var _this = this;
        this.commonService.validate(this.productForm);
        if (this.productForm.valid) {
            var productObj = this.productForm.value;
            productObj.forSale = productObj.forSale ? 1 : 0;
            productObj.hasDispensibleContainer = productObj.hasDispensibleContainer ? 1 : 0;
            productObj.subscriptable = productObj.subscriptable ? 1 : 0;
            this.productservice.updateProduct(productObj).subscribe(function (res) {
                _this.commonService.showSnackBar('Saved!!', 'Update Success');
                _this.routingService.goToPage('product');
            }, function () {
                _this.commonService.showSnackBar('Please fill mandatory fields', 'Failed update');
            });
        }
    };
    /** Redirect to product list page */
    ProductCreateComponent.prototype.redirectTo = function (page) {
        this.routingService.goToPage(page);
    };
    /** Update the productForm based on sharedService data */
    ProductCreateComponent.prototype.dataAssignToForm = function (data) {
        this.productForm.get('name').setValue(data.name);
        this.productForm.get('code').setValue(data.code);
        this.productForm.get('basePrice').setValue(data.basePrice);
        this.productForm.get('country').setValue(data.country);
        this.productForm.get('categoryId').setValue(data.categoryId);
        this.productForm.get('uom').setValue(data.uom);
        this.productForm.get('quantity').setValue(data.quantity);
        this.productForm.get('description').setValue(data.description);
        this.productForm.get('forSale').setValue(data.forSale);
        this.productForm.get('city').setValue(data.regions[0]);
        this.productForm.get('subscriptable').setValue(data.subscriptable);
        this.productForm.get('dispensibleProduct').setValue(data.dispensibleProduct);
        this.productForm.get('hasDispensibleContainer').setValue(data.hasDispensibleContainer);
        this.productForm.updateValueAndValidity({ onlySelf: true });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCreateComponent.prototype, "fileInput", void 0);
    ProductCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/features/product/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.scss */ "./src/app/features/product/product-create/product-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            src_app_shared_services_product_management_service__WEBPACK_IMPORTED_MODULE_4__["ProductManagementService"],
            _shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_app_shared_services_share_data_shared_product_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedProductDataService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/features/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-section\">\n  <haribol-page-heading [title]=\"'Products'\" [headIcon]=\"'fa-cart-plus'\" [btnText]=\"'Add New Product'\" (btnClick)=\"addNewBtnClick()\"\n    (searchVal)=\"getSearchInput($event)\" [count]=\"productLength\"></haribol-page-heading>\n  <div class=\"tbl-content\" *ngIf=\"this.productData.length > 0\">\n    <haribol-data-table [dataSource]=\"productData\" (editClick)=\"editBtnClick($event)\" (removeClick)=\"removeBtnClick($event)\"\n      [filterVal]=\"searchVal\"></haribol-data-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/product/product.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/features/product/product.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tbl-content {\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9EOlxcV09SS1xcTUVSVURBTlxcaGFyaWJvbF9hbmcvc3JjXFxhcHBcXGZlYXR1cmVzXFxwcm9kdWN0XFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRibC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _shared_services_product_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/product-management.service */ "./src/app/shared/services/product-management.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_services_share_data_shared_product_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/share-data/shared-product-data.service */ "./src/app/shared/services/share-data/shared-product-data.service.ts");
/* harmony import */ var src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common-service.service */ "./src/app/shared/services/common-service.service.ts");







var ProductComponent = /** @class */ (function () {
    function ProductComponent(routingService, productService, sharedProductDataService, commonService) {
        this.routingService = routingService;
        this.productService = productService;
        this.sharedProductDataService = sharedProductDataService;
        this.commonService = commonService;
        this.productData = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.productLength = 0;
        this.init();
    };
    /**
     * Init method for getting all products
     */
    ProductComponent.prototype.init = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (result) {
            var data = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](lodash__WEBPACK_IMPORTED_MODULE_4__["flatten"](lodash__WEBPACK_IMPORTED_MODULE_4__["map"](result, 'products')), ['productId']);
            _this.productData = data;
            _this.productLength = result.length;
        });
    };
    /**
     * getSearchInput method for assign searchValue
     */
    ProductComponent.prototype.getSearchInput = function (val) {
        this.searchVal = val;
    };
    /**
     * addNewBtnClick method will update sharedProductDadta to null
     * And also it will redirect to product create page
     */
    ProductComponent.prototype.addNewBtnClick = function () {
        this.sharedProductDataService.changeData(null);
        this.routingService.goToPage('product', 'create');
    };
    /**
     * editBtnClick method will update sharedProductDadta with product object
     * And also it will redirect to product update page
     */
    ProductComponent.prototype.editBtnClick = function (product) {
        this.sharedProductDataService.changeData(product);
        this.routingService.goToPage('product', 'update', product.productId);
    };
    /**
     * removeBtnClick method will remove product object
     */
    ProductComponent.prototype.removeBtnClick = function (product) {
        var _this = this;
        this.productService.deleteProduct(product.productId).subscribe(function (res) {
            _this.commonService.showSnackBar('Successfully removed Product!!', 'Deleted Product');
            _this.init();
        });
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'haribol-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/features/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/features/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"],
            _shared_services_product_management_service__WEBPACK_IMPORTED_MODULE_3__["ProductManagementService"],
            src_app_shared_services_share_data_shared_product_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedProductDataService"],
            src_app_shared_services_common_service_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/features/product/product.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ "./src/app/features/product/product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/features/product/product-create/product-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var routes = [
    {
        path: 'list',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
    }, {
        path: 'create',
        component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"]
    },
    { path: 'update/:id', component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"] },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/shared/services/product-management.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/product-management.service.ts ***!
  \***************************************************************/
/*! exports provided: ProductManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductManagementService", function() { return ProductManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);





var ProductManagementService = /** @class */ (function () {
    function ProductManagementService(http) {
        this.http = http;
    }
    ProductManagementService.prototype.getProducts = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.url).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService.prototype.addProduct = function (data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.path, data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService.prototype.updateProduct = function (data) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.path, data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService.prototype.getCategoryList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.category).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService.prototype.deleteProduct = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.url + '?productId=' + id).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService.prototype.getNonSellingProducts = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].product.nonselling).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.data; }));
    };
    ProductManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductManagementService);
    return ProductManagementService;
}());



/***/ }),

/***/ "./src/app/shared/services/share-data/shared-product-data.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/services/share-data/shared-product-data.service.ts ***!
  \***************************************************************************/
/*! exports provided: SharedProductDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedProductDataService", function() { return SharedProductDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);



var SharedProductDataService = /** @class */ (function () {
    function SharedProductDataService() {
        this.productDataSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentUser$ = this.productDataSource.asObservable();
    }
    SharedProductDataService.prototype.changeData = function (data) {
        this.productDataSource.next(data);
    };
    SharedProductDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedProductDataService);
    return SharedProductDataService;
}());



/***/ })

}]);
//# sourceMappingURL=features-product-product-module.js.map