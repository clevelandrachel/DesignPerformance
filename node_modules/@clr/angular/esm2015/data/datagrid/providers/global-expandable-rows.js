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
export class ExpandableRowsCount {
    constructor() {
        this.expandableCount = 0;
    }
    /**
     * @return {?}
     */
    register() {
        this.expandableCount++;
    }
    /**
     * @return {?}
     */
    unregister() {
        this.expandableCount--;
    }
    /**
     * false means no rows with action
     * @return {?}
     */
    get hasExpandableRow() {
        return this.expandableCount > 0;
    }
}
ExpandableRowsCount.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    ExpandableRowsCount.prototype.expandableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV4cGFuZGFibGUtcm93cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL2dsb2JhbC1leHBhbmRhYmxlLXJvd3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sbUJBQW1CO0lBRGhDO1FBRVUsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFnQjlCLENBQUM7Ozs7SUFkUSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBS0QsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFqQkYsVUFBVTs7OztJQUVULDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVSb3dzQ291bnQge1xuICBwcml2YXRlIGV4cGFuZGFibGVDb3VudCA9IDA7XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuZXhwYW5kYWJsZUNvdW50Kys7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcigpIHtcbiAgICB0aGlzLmV4cGFuZGFibGVDb3VudC0tO1xuICB9XG5cbiAgLyoqXG4gICAqIGZhbHNlIG1lYW5zIG5vIHJvd3Mgd2l0aCBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzRXhwYW5kYWJsZVJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlQ291bnQgPiAwO1xuICB9XG59XG4iXX0=