/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional } from '@angular/core';
import { Items } from './providers/items';
/**
 * @template T
 */
export class ClrDatagridItemsTrackBy {
    /**
     * @param {?} _items
     */
    constructor(_items) {
        this._items = _items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trackBy(value) {
        if (this._items) {
            this._items.trackBy = value;
        }
    }
}
ClrDatagridItemsTrackBy.decorators = [
    { type: Directive, args: [{
                selector: '[ngForTrackBy]',
            },] }
];
/** @nocollapse */
ClrDatagridItemsTrackBy.ctorParameters = () => [
    { type: Items, decorators: [{ type: Optional }] }
];
ClrDatagridItemsTrackBy.propDecorators = {
    trackBy: [{ type: Input, args: ['ngForTrackBy',] }]
};
if (false) {
    /** @type {?} */
    ClrDatagridItemsTrackBy.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaXRlbXMtdHJhY2tieS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtaXRlbXMtdHJhY2tieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUsxQyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQWdDLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBRyxDQUFDOzs7OztJQUVwRCxJQUNJLE9BQU8sQ0FBQyxLQUF5QjtRQUNuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUpRLEtBQUssdUJBTUMsUUFBUTs7O3NCQUVwQixLQUFLLFNBQUMsY0FBYzs7OztJQUZULHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbXMgfSBmcm9tICcuL3Byb3ZpZGVycy9pdGVtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0ZvclRyYWNrQnldJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0YWdyaWRJdGVtc1RyYWNrQnk8VCA9IGFueT4ge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9pdGVtczogSXRlbXM8VD4pIHt9XG5cbiAgQElucHV0KCduZ0ZvclRyYWNrQnknKVxuICBzZXQgdHJhY2tCeSh2YWx1ZTogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zKSB7XG4gICAgICB0aGlzLl9pdGVtcy50cmFja0J5ID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=