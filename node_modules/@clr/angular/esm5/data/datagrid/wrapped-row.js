/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
var WrappedRow = /** @class */ (function () {
    function WrappedRow() {
        this._dynamic = false;
    }
    // the rows projected view (in memory)
    /**
     * @return {?}
     */
    WrappedRow.prototype.ngAfterViewInit = 
    // the rows projected view (in memory)
    /**
     * @return {?}
     */
    function () {
        // Create the cells view in memory, not the DOM.
        this.rowView = this.templateRef.createEmbeddedView(null);
    };
    WrappedRow.decorators = [
        { type: Component, args: [{
                    selector: 'dg-wrapped-row',
                    template: "        \n        <ng-template #rowPortal>\n            <ng-content></ng-content>\n        </ng-template>\n    "
                }] }
    ];
    WrappedRow.propDecorators = {
        templateRef: [{ type: ViewChild, args: ['rowPortal',] }]
    };
    return WrappedRow;
}());
export { WrappedRow };
if (false) {
    /** @type {?} */
    WrappedRow.prototype._dynamic;
    /** @type {?} */
    WrappedRow.prototype.templateRef;
    /** @type {?} */
    WrappedRow.prototype.rowView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3dyYXBwZWQtcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsU0FBUyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWxHO0lBQUE7UUFTRSxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBU25CLENBQUM7Ozs7O0lBSkMsb0NBQWU7Ozs7O0lBQWY7UUFDRSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGlIQUlQO2lCQUNKOzs7OEJBSUUsU0FBUyxTQUFDLFdBQVc7O0lBT3hCLGlCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FWWSxVQUFVOzs7SUFDckIsOEJBQWlCOztJQUVqQixpQ0FBdUQ7O0lBQ3ZELDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRW1iZWRkZWRWaWV3UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9zdC13cmFwcGluZy9keW5hbWljLXdyYXBwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZy13cmFwcGVkLXJvdycsXG4gIHRlbXBsYXRlOiBgICAgICAgICBcbiAgICAgICAgPG5nLXRlbXBsYXRlICNyb3dQb3J0YWw+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlZFJvdyBpbXBsZW1lbnRzIER5bmFtaWNXcmFwcGVyLCBBZnRlclZpZXdJbml0IHtcbiAgX2R5bmFtaWMgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdyb3dQb3J0YWwnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIHJvd1ZpZXc6IEVtYmVkZGVkVmlld1JlZjx2b2lkPjsgLy8gdGhlIHJvd3MgcHJvamVjdGVkIHZpZXcgKGluIG1lbW9yeSlcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBjZWxscyB2aWV3IGluIG1lbW9yeSwgbm90IHRoZSBET00uXG4gICAgdGhpcy5yb3dWaWV3ID0gdGhpcy50ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gIH1cbn1cbiJdfQ==