/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var DateFormControlService = /** @class */ (function () {
    function DateFormControlService() {
        this._touchedChange = new Subject();
        this._dirtyChange = new Subject();
    }
    Object.defineProperty(DateFormControlService.prototype, "touchedChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._touchedChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateFormControlService.prototype, "dirtyChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dirtyChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateFormControlService.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        this._touchedChange.next();
    };
    /**
     * @return {?}
     */
    DateFormControlService.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        this._dirtyChange.next();
    };
    DateFormControlService.decorators = [
        { type: Injectable }
    ];
    return DateFormControlService;
}());
export { DateFormControlService };
if (false) {
    /** @type {?} */
    DateFormControlService.prototype._touchedChange;
    /** @type {?} */
    DateFormControlService.prototype._dirtyChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtLWNvbnRyb2wuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvcHJvdmlkZXJzL2RhdGUtZm9ybS1jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDO0lBQUE7UUFFVSxtQkFBYyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBTXBELGlCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFhNUQsQ0FBQztJQWpCQyxzQkFBSSxpREFBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLCtDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFFRCw4Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXBCRixVQUFVOztJQXFCWCw2QkFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLHNCQUFzQjs7O0lBQ2pDLGdEQUE0RDs7SUFNNUQsOENBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybUNvbnRyb2xTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdG91Y2hlZENoYW5nZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IHRvdWNoZWRDaGFuZ2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoZWRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9kaXJ0eUNoYW5nZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGRpcnR5Q2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kaXJ0eUNoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG1hcmtBc1RvdWNoZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hlZENoYW5nZS5uZXh0KCk7XG4gIH1cblxuICBtYXJrQXNEaXJ0eSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXJ0eUNoYW5nZS5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==