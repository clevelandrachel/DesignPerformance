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
const DatepickerViewEnum = {
    MONTHVIEW: 'MONTHVIEW',
    YEARVIEW: 'YEARVIEW',
    DAYVIEW: 'DAYVIEW',
};
/**
 * This service manages which view is visible in the datepicker popover.
 */
export class ViewManagerService {
    constructor() {
        this._currentView = "DAYVIEW" /* DAYVIEW */;
    }
    /**
     * @return {?}
     */
    get isDayView() {
        return this._currentView === "DAYVIEW" /* DAYVIEW */;
    }
    /**
     * @return {?}
     */
    get isYearView() {
        return this._currentView === "YEARVIEW" /* YEARVIEW */;
    }
    /**
     * @return {?}
     */
    get isMonthView() {
        return this._currentView === "MONTHVIEW" /* MONTHVIEW */;
    }
    /**
     * @return {?}
     */
    changeToMonthView() {
        this._currentView = "MONTHVIEW" /* MONTHVIEW */;
    }
    /**
     * @return {?}
     */
    changeToYearView() {
        this._currentView = "YEARVIEW" /* YEARVIEW */;
    }
    /**
     * @return {?}
     */
    changeToDayView() {
        this._currentView = "DAYVIEW" /* DAYVIEW */;
    }
}
ViewManagerService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ViewManagerService.prototype._currentView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFHekMsV0FBWSxXQUFXO0lBQ3ZCLFVBQVcsVUFBVTtJQUNyQixTQUFVLFNBQVM7Ozs7O0FBT3JCLE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFVSxpQkFBWSwyQkFBa0Q7SUF5QnhFLENBQUM7Ozs7SUF2QkMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSw0QkFBK0IsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSw4QkFBZ0MsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxnQ0FBaUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFlBQVksOEJBQStCLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxZQUFZLDRCQUE4QixDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksMEJBQTZCLENBQUM7SUFDakQsQ0FBQzs7O1lBMUJGLFVBQVU7Ozs7SUFFVCwwQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgZW51bSBEYXRlcGlja2VyVmlld0VudW0ge1xuICBNT05USFZJRVcgPSAnTU9OVEhWSUVXJyxcbiAgWUVBUlZJRVcgPSAnWUVBUlZJRVcnLFxuICBEQVlWSUVXID0gJ0RBWVZJRVcnLFxufVxuXG4vKipcbiAqIFRoaXMgc2VydmljZSBtYW5hZ2VzIHdoaWNoIHZpZXcgaXMgdmlzaWJsZSBpbiB0aGUgZGF0ZXBpY2tlciBwb3BvdmVyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY3VycmVudFZpZXc6IERhdGVwaWNrZXJWaWV3RW51bSA9IERhdGVwaWNrZXJWaWV3RW51bS5EQVlWSUVXO1xuXG4gIGdldCBpc0RheVZpZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBEYXRlcGlja2VyVmlld0VudW0uREFZVklFVztcbiAgfVxuXG4gIGdldCBpc1llYXJWaWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gRGF0ZXBpY2tlclZpZXdFbnVtLllFQVJWSUVXO1xuICB9XG5cbiAgZ2V0IGlzTW9udGhWaWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlldyA9PT0gRGF0ZXBpY2tlclZpZXdFbnVtLk1PTlRIVklFVztcbiAgfVxuXG4gIGNoYW5nZVRvTW9udGhWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gRGF0ZXBpY2tlclZpZXdFbnVtLk1PTlRIVklFVztcbiAgfVxuXG4gIGNoYW5nZVRvWWVhclZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBEYXRlcGlja2VyVmlld0VudW0uWUVBUlZJRVc7XG4gIH1cblxuICBjaGFuZ2VUb0RheVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudFZpZXcgPSBEYXRlcGlja2VyVmlld0VudW0uREFZVklFVztcbiAgfVxufVxuIl19