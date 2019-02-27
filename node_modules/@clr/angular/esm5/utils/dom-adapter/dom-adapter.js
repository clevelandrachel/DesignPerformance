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
 * If we someday want to be able to render the datagrid in a webworker,
 * this is where we would test if we're in headless mode. Right now it's not testing anything, but any access
 * to native DOM elements' methods and properties in the Datagrid happens here.
 */
import { Injectable } from '@angular/core';
var DomAdapter = /** @class */ (function () {
    function DomAdapter() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.userDefinedWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.classList.add('datagrid-cell-width-zero');
        /** @type {?} */
        var userDefinedWidth = this.clientRect(element).width;
        element.classList.remove('datagrid-cell-width-zero');
        return userDefinedWidth;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.scrollBarWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element.offsetWidth - element.clientWidth;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.scrollWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element.scrollWidth || 0;
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.computedHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return parseInt(getComputedStyle(element).getPropertyValue('height'), 10);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.clientRect = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var elementClientRect = element.getBoundingClientRect();
        return {
            top: parseInt(elementClientRect.top, 10),
            bottom: parseInt(elementClientRect.bottom, 10),
            left: parseInt(elementClientRect.left, 10),
            right: parseInt(elementClientRect.right, 10),
            width: parseInt(elementClientRect.width, 10),
            height: parseInt(elementClientRect.height, 10),
        };
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.minWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return parseInt(getComputedStyle(element).getPropertyValue('min-width'), 10);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAdapter.prototype.focus = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.focus();
    };
    DomAdapter.decorators = [
        { type: Injectable }
    ];
    return DomAdapter;
}());
export { DomAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kb20tYWRhcHRlci9kb20tYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQXdDQSxDQUFDOzs7OztJQXRDQyxxQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBb0I7UUFDbkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7WUFDNUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLO1FBQ3ZELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDckQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG1DQUFjOzs7O0lBQWQsVUFBZSxPQUFZO1FBQ3pCLE9BQU8sT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsZ0NBQVc7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDdEIsT0FBTyxPQUFPLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELG1DQUFjOzs7O0lBQWQsVUFBZSxPQUFZO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRUQsK0JBQVU7Ozs7SUFBVixVQUFXLE9BQVk7O1lBQ2YsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1FBQ3pELE9BQU87WUFDTCxHQUFHLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDeEMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUMxQyxLQUFLLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDNUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztTQUMvQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw2QkFBUTs7OztJQUFSLFVBQVMsT0FBWTtRQUNuQixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVELDBCQUFLOzs7O0lBQUwsVUFBTSxPQUFZO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkF2Q0YsVUFBVTs7SUF3Q1gsaUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG4vKlxuICogSWYgd2Ugc29tZWRheSB3YW50IHRvIGJlIGFibGUgdG8gcmVuZGVyIHRoZSBkYXRhZ3JpZCBpbiBhIHdlYndvcmtlcixcbiAqIHRoaXMgaXMgd2hlcmUgd2Ugd291bGQgdGVzdCBpZiB3ZSdyZSBpbiBoZWFkbGVzcyBtb2RlLiBSaWdodCBub3cgaXQncyBub3QgdGVzdGluZyBhbnl0aGluZywgYnV0IGFueSBhY2Nlc3NcbiAqIHRvIG5hdGl2ZSBET00gZWxlbWVudHMnIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgaW4gdGhlIERhdGFncmlkIGhhcHBlbnMgaGVyZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21BZGFwdGVyIHtcbiAgdXNlckRlZmluZWRXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXRhZ3JpZC1jZWxsLXdpZHRoLXplcm8nKTtcbiAgICBjb25zdCB1c2VyRGVmaW5lZFdpZHRoID0gdGhpcy5jbGllbnRSZWN0KGVsZW1lbnQpLndpZHRoO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGF0YWdyaWQtY2VsbC13aWR0aC16ZXJvJyk7XG4gICAgcmV0dXJuIHVzZXJEZWZpbmVkV2lkdGg7XG4gIH1cblxuICBzY3JvbGxCYXJXaWR0aChlbGVtZW50OiBhbnkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBzY3JvbGxXaWR0aChlbGVtZW50OiBhbnkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCB8fCAwO1xuICB9XG5cbiAgY29tcHV0ZWRIZWlnaHQoZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSwgMTApO1xuICB9XG5cbiAgY2xpZW50UmVjdChlbGVtZW50OiBhbnkpOiBDbGllbnRSZWN0IHtcbiAgICBjb25zdCBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3QudG9wLCAxMCksXG4gICAgICBib3R0b206IHBhcnNlSW50KGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSwgMTApLFxuICAgICAgbGVmdDogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3QubGVmdCwgMTApLFxuICAgICAgcmlnaHQ6IHBhcnNlSW50KGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0LCAxMCksXG4gICAgICB3aWR0aDogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3Qud2lkdGgsIDEwKSxcbiAgICAgIGhlaWdodDogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3QuaGVpZ2h0LCAxMCksXG4gICAgfTtcbiAgfVxuXG4gIG1pbldpZHRoKGVsZW1lbnQ6IGFueSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnbWluLXdpZHRoJyksIDEwKTtcbiAgfVxuXG4gIGZvY3VzKGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19