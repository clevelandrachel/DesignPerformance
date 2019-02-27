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
export class ControlClassService {
    constructor() {
        this.className = '';
    }
    /**
     * @param {?=} invalid
     * @param {?=} grid
     * @param {?=} additional
     * @return {?}
     */
    controlClass(invalid = false, grid = false, additional = '') {
        /** @type {?} */
        const controlClasses = [this.className, additional];
        if (invalid) {
            controlClasses.push('clr-error');
        }
        if (grid && this.className.indexOf('clr-col') === -1) {
            controlClasses.push('clr-col-md-10 clr-col-12');
        }
        return controlClasses.join(' ').trim();
    }
    // We want to remove the column classes from the input up to the container
    /**
     * @param {?} renderer
     * @param {?} element
     * @return {?}
     */
    initControlClass(renderer, element) {
        if (element && element.className) {
            this.className = element.className;
            /** @type {?} */
            const klasses = element.className.split(' ');
            klasses.forEach(klass => {
                if (klass.startsWith('clr-col')) {
                    renderer.removeClass(element, klass);
                }
            });
        }
    }
}
ControlClassService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ControlClassService.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jbGFzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRUUsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQXlCakIsQ0FBQzs7Ozs7OztJQXZCQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFOztjQUNuRCxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUNuRCxJQUFJLE9BQU8sRUFBRTtZQUNYLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNwRCxjQUFjLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7OztJQUdELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFvQjtRQUM3QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7a0JBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDNUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBMUJGLFVBQVU7Ozs7SUFFVCx3Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udHJvbENsYXNzU2VydmljZSB7XG4gIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGNvbnRyb2xDbGFzcyhpbnZhbGlkID0gZmFsc2UsIGdyaWQgPSBmYWxzZSwgYWRkaXRpb25hbCA9ICcnKSB7XG4gICAgY29uc3QgY29udHJvbENsYXNzZXMgPSBbdGhpcy5jbGFzc05hbWUsIGFkZGl0aW9uYWxdO1xuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICBjb250cm9sQ2xhc3Nlcy5wdXNoKCdjbHItZXJyb3InKTtcbiAgICB9XG4gICAgaWYgKGdyaWQgJiYgdGhpcy5jbGFzc05hbWUuaW5kZXhPZignY2xyLWNvbCcpID09PSAtMSkge1xuICAgICAgY29udHJvbENsYXNzZXMucHVzaCgnY2xyLWNvbC1tZC0xMCBjbHItY29sLTEyJyk7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sQ2xhc3Nlcy5qb2luKCcgJykudHJpbSgpO1xuICB9XG5cbiAgLy8gV2Ugd2FudCB0byByZW1vdmUgdGhlIGNvbHVtbiBjbGFzc2VzIGZyb20gdGhlIGlucHV0IHVwIHRvIHRoZSBjb250YWluZXJcbiAgaW5pdENvbnRyb2xDbGFzcyhyZW5kZXJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZTtcbiAgICAgIGNvbnN0IGtsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IHtcbiAgICAgICAgaWYgKGtsYXNzLnN0YXJ0c1dpdGgoJ2Nsci1jb2wnKSkge1xuICAgICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGtsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=