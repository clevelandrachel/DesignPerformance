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
/** @enum {string} */
var DatepickerViewEnum = {
    MONTHVIEW: 'MONTHVIEW',
    YEARVIEW: 'YEARVIEW',
    DAYVIEW: 'DAYVIEW',
};
/**
 * This service manages which view is visible in the datepicker popover.
 */
var ViewManagerService = /** @class */ (function () {
    function ViewManagerService() {
        this._currentView = "DAYVIEW" /* DAYVIEW */;
    }
    Object.defineProperty(ViewManagerService.prototype, "isDayView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentView === "DAYVIEW" /* DAYVIEW */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewManagerService.prototype, "isYearView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentView === "YEARVIEW" /* YEARVIEW */;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewManagerService.prototype, "isMonthView", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentView === "MONTHVIEW" /* MONTHVIEW */;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ViewManagerService.prototype.changeToMonthView = /**
     * @return {?}
     */
    function () {
        this._currentView = "MONTHVIEW" /* MONTHVIEW */;
    };
    /**
     * @return {?}
     */
    ViewManagerService.prototype.changeToYearView = /**
     * @return {?}
     */
    function () {
        this._currentView = "YEARVIEW" /* YEARVIEW */;
    };
    /**
     * @return {?}
     */
    ViewManagerService.prototype.changeToDayView = /**
     * @return {?}
     */
    function () {
        this._currentView = "DAYVIEW" /* DAYVIEW */;
    };
    ViewManagerService.decorators = [
        { type: Injectable }
    ];
    return ViewManagerService;
}());
export { ViewManagerService };
if (false) {
    /** @type {?} */
    ViewManagerService.prototype._currentView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFHekMsV0FBWSxXQUFXO0lBQ3ZCLFVBQVcsVUFBVTtJQUNyQixTQUFVLFNBQVM7Ozs7O0FBTXJCO0lBQUE7UUFFVSxpQkFBWSwyQkFBa0Q7SUF5QnhFLENBQUM7SUF2QkMsc0JBQUkseUNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksNEJBQStCLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSw4QkFBZ0MsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLGdDQUFpQyxDQUFDO1FBQzVELENBQUM7OztPQUFBOzs7O0lBRUQsOENBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsWUFBWSw4QkFBK0IsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsNkNBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsWUFBWSw0QkFBOEIsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsNENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFlBQVksMEJBQTZCLENBQUM7SUFDakQsQ0FBQzs7Z0JBMUJGLFVBQVU7O0lBMkJYLHlCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksa0JBQWtCOzs7SUFDN0IsMENBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IGVudW0gRGF0ZXBpY2tlclZpZXdFbnVtIHtcbiAgTU9OVEhWSUVXID0gJ01PTlRIVklFVycsXG4gIFlFQVJWSUVXID0gJ1lFQVJWSUVXJyxcbiAgREFZVklFVyA9ICdEQVlWSUVXJyxcbn1cblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgbWFuYWdlcyB3aGljaCB2aWV3IGlzIHZpc2libGUgaW4gdGhlIGRhdGVwaWNrZXIgcG9wb3Zlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyU2VydmljZSB7XG4gIHByaXZhdGUgX2N1cnJlbnRWaWV3OiBEYXRlcGlja2VyVmlld0VudW0gPSBEYXRlcGlja2VyVmlld0VudW0uREFZVklFVztcblxuICBnZXQgaXNEYXlWaWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gRGF0ZXBpY2tlclZpZXdFbnVtLkRBWVZJRVc7XG4gIH1cblxuICBnZXQgaXNZZWFyVmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXcgPT09IERhdGVwaWNrZXJWaWV3RW51bS5ZRUFSVklFVztcbiAgfVxuXG4gIGdldCBpc01vbnRoVmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXcgPT09IERhdGVwaWNrZXJWaWV3RW51bS5NT05USFZJRVc7XG4gIH1cblxuICBjaGFuZ2VUb01vbnRoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IERhdGVwaWNrZXJWaWV3RW51bS5NT05USFZJRVc7XG4gIH1cblxuICBjaGFuZ2VUb1llYXJWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gRGF0ZXBpY2tlclZpZXdFbnVtLllFQVJWSUVXO1xuICB9XG5cbiAgY2hhbmdlVG9EYXlWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gRGF0ZXBpY2tlclZpZXdFbnVtLkRBWVZJRVc7XG4gIH1cbn1cbiJdfQ==