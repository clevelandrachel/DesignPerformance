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
var ExpandableRowsCount = /** @class */ (function () {
    function ExpandableRowsCount() {
        this.expandableCount = 0;
    }
    /**
     * @return {?}
     */
    ExpandableRowsCount.prototype.register = /**
     * @return {?}
     */
    function () {
        this.expandableCount++;
    };
    /**
     * @return {?}
     */
    ExpandableRowsCount.prototype.unregister = /**
     * @return {?}
     */
    function () {
        this.expandableCount--;
    };
    Object.defineProperty(ExpandableRowsCount.prototype, "hasExpandableRow", {
        /**
         * false means no rows with action
         */
        get: /**
         * false means no rows with action
         * @return {?}
         */
        function () {
            return this.expandableCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    ExpandableRowsCount.decorators = [
        { type: Injectable }
    ];
    return ExpandableRowsCount;
}());
export { ExpandableRowsCount };
if (false) {
    /** @type {?} */
    ExpandableRowsCount.prototype.expandableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV4cGFuZGFibGUtcm93cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL2dsb2JhbC1leHBhbmRhYmxlLXJvd3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRVUsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFnQjlCLENBQUM7Ozs7SUFkUSxzQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVNLHdDQUFVOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUtELHNCQUFXLGlEQUFnQjtRQUgzQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7O2dCQWpCRixVQUFVOztJQWtCWCwwQkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLG1CQUFtQjs7O0lBQzlCLDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVSb3dzQ291bnQge1xuICBwcml2YXRlIGV4cGFuZGFibGVDb3VudCA9IDA7XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuZXhwYW5kYWJsZUNvdW50Kys7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcigpIHtcbiAgICB0aGlzLmV4cGFuZGFibGVDb3VudC0tO1xuICB9XG5cbiAgLyoqXG4gICAqIGZhbHNlIG1lYW5zIG5vIHJvd3Mgd2l0aCBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzRXhwYW5kYWJsZVJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlQ291bnQgPiAwO1xuICB9XG59XG4iXX0=