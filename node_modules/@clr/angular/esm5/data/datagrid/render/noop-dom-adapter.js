/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * This version of the DomAdapter is for use on non-browser platforms, where there are no
 * nativeElements to use for calculations.
 */
import { Injectable } from '@angular/core';
var NoopDomAdapter = /** @class */ (function () {
    function NoopDomAdapter() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.userDefinedWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.scrollBarWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.scrollWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.computedHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.clientRect = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0,
        };
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.minWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NoopDomAdapter.prototype.focus = /**
     * @param {?} element
     * @return {?}
     */
    function (element) { };
    NoopDomAdapter.decorators = [
        { type: Injectable }
    ];
    return NoopDomAdapter;
}());
export { NoopDomAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1kb20tYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcmVuZGVyL25vb3AtZG9tLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTtJQWtDQSxDQUFDOzs7OztJQWhDQyx5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBWTtRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLE9BQVk7UUFDekIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFZO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCx1Q0FBYzs7OztJQUFkLFVBQWUsT0FBWTtRQUN6QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Ozs7O0lBRUQsbUNBQVU7Ozs7SUFBVixVQUFXLE9BQVk7UUFDckIsT0FBTztZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGlDQUFROzs7O0lBQVIsVUFBUyxPQUFZO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFFRCw4QkFBSzs7OztJQUFMLFVBQU0sT0FBWSxJQUFTLENBQUM7O2dCQWpDN0IsVUFBVTs7SUFrQ1gscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG4vKlxuICogVGhpcyB2ZXJzaW9uIG9mIHRoZSBEb21BZGFwdGVyIGlzIGZvciB1c2Ugb24gbm9uLWJyb3dzZXIgcGxhdGZvcm1zLCB3aGVyZSB0aGVyZSBhcmUgbm9cbiAqIG5hdGl2ZUVsZW1lbnRzIHRvIHVzZSBmb3IgY2FsY3VsYXRpb25zLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kb20tYWRhcHRlci9kb20tYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb29wRG9tQWRhcHRlciBpbXBsZW1lbnRzIERvbUFkYXB0ZXIge1xuICB1c2VyRGVmaW5lZFdpZHRoKGVsZW1lbnQ6IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBzY3JvbGxCYXJXaWR0aChlbGVtZW50OiBhbnkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHNjcm9sbFdpZHRoKGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29tcHV0ZWRIZWlnaHQoZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNsaWVudFJlY3QoZWxlbWVudDogYW55KTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH07XG4gIH1cblxuICBtaW5XaWR0aChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZm9jdXMoZWxlbWVudDogYW55KTogdm9pZCB7fVxufVxuIl19