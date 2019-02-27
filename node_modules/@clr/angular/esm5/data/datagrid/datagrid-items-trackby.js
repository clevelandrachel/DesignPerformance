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
var ClrDatagridItemsTrackBy = /** @class */ (function () {
    function ClrDatagridItemsTrackBy(_items) {
        this._items = _items;
    }
    Object.defineProperty(ClrDatagridItemsTrackBy.prototype, "trackBy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._items) {
                this._items.trackBy = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ClrDatagridItemsTrackBy.decorators = [
        { type: Directive, args: [{
                    selector: '[ngForTrackBy]',
                },] }
    ];
    /** @nocollapse */
    ClrDatagridItemsTrackBy.ctorParameters = function () { return [
        { type: Items, decorators: [{ type: Optional }] }
    ]; };
    ClrDatagridItemsTrackBy.propDecorators = {
        trackBy: [{ type: Input, args: ['ngForTrackBy',] }]
    };
    return ClrDatagridItemsTrackBy;
}());
export { ClrDatagridItemsTrackBy };
if (false) {
    /** @type {?} */
    ClrDatagridItemsTrackBy.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaXRlbXMtdHJhY2tieS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtaXRlbXMtdHJhY2tieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBRTVFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUUxQztJQUlFLGlDQUFnQyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUcsQ0FBQztJQUVwRCxzQkFDSSw0Q0FBTzs7Ozs7UUFEWCxVQUNZLEtBQXlCO1lBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDN0I7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQUpRLEtBQUssdUJBTUMsUUFBUTs7OzBCQUVwQixLQUFLLFNBQUMsY0FBYzs7SUFNdkIsOEJBQUM7Q0FBQSxBQVpELElBWUM7U0FUWSx1QkFBdUI7OztJQUN0Qix5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPcHRpb25hbCwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi9wcm92aWRlcnMvaXRlbXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdGb3JUcmFja0J5XScsXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkSXRlbXNUcmFja0J5PFQgPSBhbnk+IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1zPFQ+KSB7fVxuXG4gIEBJbnB1dCgnbmdGb3JUcmFja0J5JylcbiAgc2V0IHRyYWNrQnkodmFsdWU6IFRyYWNrQnlGdW5jdGlvbjxUPikge1xuICAgIGlmICh0aGlzLl9pdGVtcykge1xuICAgICAgdGhpcy5faXRlbXMudHJhY2tCeSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuIl19