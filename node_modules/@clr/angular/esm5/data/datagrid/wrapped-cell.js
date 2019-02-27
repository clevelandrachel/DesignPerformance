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
var WrappedCell = /** @class */ (function () {
    function WrappedCell() {
        this._dynamic = false;
    }
    // the cells projected view
    /**
     * @return {?}
     */
    WrappedCell.prototype.ngAfterViewInit = 
    // the cells projected view
    /**
     * @return {?}
     */
    function () {
        this.cellView = this.templateRef.createEmbeddedView(null);
    };
    WrappedCell.decorators = [
        { type: Component, args: [{
                    selector: 'dg-wrapped-cell',
                    template: "        \n        <ng-template #cellPortal>\n            <ng-content></ng-content>\n        </ng-template>\n    "
                }] }
    ];
    WrappedCell.propDecorators = {
        templateRef: [{ type: ViewChild, args: ['cellPortal',] }]
    };
    return WrappedCell;
}());
export { WrappedCell };
if (false) {
    /** @type {?} */
    WrappedCell.prototype._dynamic;
    /** @type {?} */
    WrappedCell.prototype.templateRef;
    /** @type {?} */
    WrappedCell.prototype.cellView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1jZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC93cmFwcGVkLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFpQixTQUFTLEVBQW1CLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbEc7SUFBQTtRQVNFLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFPbkIsQ0FBQzs7Ozs7SUFIQyxxQ0FBZTs7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGtIQUlQO2lCQUNKOzs7OEJBR0UsU0FBUyxTQUFDLFlBQVk7O0lBTXpCLGtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FSWSxXQUFXOzs7SUFDdEIsK0JBQWlCOztJQUNqQixrQ0FBd0Q7O0lBQ3hELCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRW1iZWRkZWRWaWV3UmVmLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9zdC13cmFwcGluZy9keW5hbWljLXdyYXBwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZy13cmFwcGVkLWNlbGwnLFxuICB0ZW1wbGF0ZTogYCAgICAgICAgXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2VsbFBvcnRhbD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBXcmFwcGVkQ2VsbCBpbXBsZW1lbnRzIER5bmFtaWNXcmFwcGVyLCBBZnRlclZpZXdJbml0IHtcbiAgX2R5bmFtaWMgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnY2VsbFBvcnRhbCcpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgY2VsbFZpZXc6IEVtYmVkZGVkVmlld1JlZjx2b2lkPjsgLy8gdGhlIGNlbGxzIHByb2plY3RlZCB2aWV3XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2VsbFZpZXcgPSB0aGlzLnRlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhudWxsKTtcbiAgfVxufVxuIl19