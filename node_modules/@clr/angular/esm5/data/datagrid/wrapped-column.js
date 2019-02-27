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
var WrappedColumn = /** @class */ (function () {
    function WrappedColumn() {
        this._dynamic = false;
    }
    // the columns projected view (in memory)
    /**
     * @return {?}
     */
    WrappedColumn.prototype.ngAfterViewInit = 
    // the columns projected view (in memory)
    /**
     * @return {?}
     */
    function () {
        // Create the cells view in memory, not the DOM.
        this.columnView = this.templateRef.createEmbeddedView(null);
    };
    WrappedColumn.decorators = [
        { type: Component, args: [{
                    selector: 'dg-wrapped-column',
                    template: "        \n        <ng-template #columnPortal>\n            <ng-content></ng-content>\n        </ng-template>\n    "
                }] }
    ];
    WrappedColumn.propDecorators = {
        templateRef: [{ type: ViewChild, args: ['columnPortal',] }]
    };
    return WrappedColumn;
}());
export { WrappedColumn };
if (false) {
    /** @type {?} */
    WrappedColumn.prototype._dynamic;
    /** @type {?} */
    WrappedColumn.prototype.templateRef;
    /** @type {?} */
    WrappedColumn.prototype.columnView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1jb2x1bW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3dyYXBwZWQtY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsU0FBUyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWxHO0lBQUE7UUFTRSxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBU25CLENBQUM7Ozs7O0lBSkMsdUNBQWU7Ozs7O0lBQWY7UUFDRSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLG9IQUlQO2lCQUNKOzs7OEJBSUUsU0FBUyxTQUFDLGNBQWM7O0lBTzNCLG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FWWSxhQUFhOzs7SUFDeEIsaUNBQWlCOztJQUVqQixvQ0FBMEQ7O0lBQzFELG1DQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRW1iZWRkZWRWaWV3UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9zdC13cmFwcGluZy9keW5hbWljLXdyYXBwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZy13cmFwcGVkLWNvbHVtbicsXG4gIHRlbXBsYXRlOiBgICAgICAgICBcbiAgICAgICAgPG5nLXRlbXBsYXRlICNjb2x1bW5Qb3J0YWw+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlZENvbHVtbiBpbXBsZW1lbnRzIER5bmFtaWNXcmFwcGVyLCBBZnRlclZpZXdJbml0IHtcbiAgX2R5bmFtaWMgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdjb2x1bW5Qb3J0YWwnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGNvbHVtblZpZXc6IEVtYmVkZGVkVmlld1JlZjx2b2lkPjsgLy8gdGhlIGNvbHVtbnMgcHJvamVjdGVkIHZpZXcgKGluIG1lbW9yeSlcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBjZWxscyB2aWV3IGluIG1lbW9yeSwgbm90IHRoZSBET00uXG4gICAgdGhpcy5jb2x1bW5WaWV3ID0gdGhpcy50ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gIH1cbn1cbiJdfQ==