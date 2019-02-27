/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Point } from '../../popover/common/popover';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 * @template T
 */
var ClrDatagridFilter = /** @class */ (function (_super) {
    tslib_1.__extends(ClrDatagridFilter, _super);
    function ClrDatagridFilter(_filters, commonStrings) {
        var _this = _super.call(this, _filters) || this;
        _this.commonStrings = commonStrings;
        _this.anchorPoint = Point.RIGHT_BOTTOM;
        _this.popoverPoint = Point.RIGHT_TOP;
        _this.popoverOptions = { allowMultipleOpen: true };
        /**
         * Tracks whether the filter dropdown is open or not
         */
        _this._open = false;
        _this.openChanged = new EventEmitter(false);
        return _this;
    }
    Object.defineProperty(ClrDatagridFilter.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            /** @type {?} */
            var boolOpen = !!open;
            if (boolOpen !== this._open) {
                this._open = boolOpen;
                this.openChanged.emit(boolOpen);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatagridFilter.prototype, "customFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this.setFilter(filter);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatagridFilter.prototype, "active", {
        /**
         * Indicates if the filter is currently active
         */
        get: /**
         * Indicates if the filter is currently active
         * @return {?}
         */
        function () {
            return !!this.filter && this.filter.isActive();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Shows/hides the filter dropdown
     */
    /**
     * Shows/hides the filter dropdown
     * @return {?}
     */
    ClrDatagridFilter.prototype.toggle = /**
     * Shows/hides the filter dropdown
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    ClrDatagridFilter.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-filter',
                    // We register this component as a CustomFilter, for the parent column to detect it.
                    providers: [{ provide: CustomFilter, useExisting: ClrDatagridFilter }],
                    template: "\n        <button #anchor class=\"datagrid-filter-toggle\" (click)=\"toggle()\"\n            [class.datagrid-filter-open]=\"open\" [class.datagrid-filtered]=\"active\"\n            type=\"button\"></button>\n\n        <ng-template [(clrPopoverOld)]=\"open\" [clrPopoverOldAnchor]=\"anchor\" [clrPopoverOldAnchorPoint]=\"anchorPoint\"\n             [clrPopoverOldPopoverPoint]=\"popoverPoint\" [clrPopoverOldOptions]=\"popoverOptions\">\n            <div class=\"datagrid-filter\">\n                <!-- FIXME: this whole filter part needs a final design before we can try to have a cleaner DOM -->\n                <div class=\"datagrid-filter-close-wrapper\">\n                    <button type=\"button\" class=\"close\" (click)=\"open = false\">\n                        <clr-icon shape=\"close\" [attr.title]=\"commonStrings.close\"></clr-icon>\n                    </button>\n                </div>\n    \n                <ng-content></ng-content>\n            </div>\n        </ng-template>\n    "
                }] }
    ];
    /** @nocollapse */
    ClrDatagridFilter.ctorParameters = function () { return [
        { type: FiltersProvider },
        { type: ClrCommonStrings }
    ]; };
    ClrDatagridFilter.propDecorators = {
        open: [{ type: Input, args: ['clrDgFilterOpen',] }],
        openChanged: [{ type: Output, args: ['clrDgFilterOpenChange',] }],
        customFilter: [{ type: Input, args: ['clrDgFilter',] }]
    };
    return ClrDatagridFilter;
}(DatagridFilterRegistrar));
export { ClrDatagridFilter };
if (false) {
    /** @type {?} */
    ClrDatagridFilter.prototype.anchorPoint;
    /** @type {?} */
    ClrDatagridFilter.prototype.popoverPoint;
    /** @type {?} */
    ClrDatagridFilter.prototype.popoverOptions;
    /**
     * Tracks whether the filter dropdown is open or not
     * @type {?}
     */
    ClrDatagridFilter.prototype._open;
    /** @type {?} */
    ClrDatagridFilter.prototype.openChanged;
    /** @type {?} */
    ClrDatagridFilter.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7Ozs7O0FBTzdFO0lBd0JnRCw2Q0FBeUQ7SUFFdkcsMkJBQVksUUFBNEIsRUFBUyxhQUErQjtRQUFoRixZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUNoQjtRQUZnRCxtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFJekUsaUJBQVcsR0FBVSxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ3hDLGtCQUFZLEdBQVUsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxvQkFBYyxHQUFtQixFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDOzs7O1FBSTVELFdBQUssR0FBRyxLQUFLLENBQUM7UUFja0IsaUJBQVcsR0FBRyxJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQzs7SUF0QnZGLENBQUM7SUFTRCxzQkFBVyxtQ0FBSTs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBRUQsVUFDZ0IsSUFBYTs7Z0JBQ3JCLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSTtZQUN2QixJQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDOzs7T0FUQTtJQWFELHNCQUNXLDJDQUFZOzs7OztRQUR2QixVQUN3QixNQUEwRjtZQUNoSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcscUNBQU07UUFIakI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7SUFDSSxrQ0FBTTs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Z0JBckVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTs7b0JBRXpCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztvQkFDdEUsUUFBUSxFQUFFLDIrQkFrQlA7aUJBQ0o7Ozs7Z0JBaENRLGVBQWU7Z0JBRWYsZ0JBQWdCOzs7dUJBZ0R0QixLQUFLLFNBQUMsaUJBQWlCOzhCQVN2QixNQUFNLFNBQUMsdUJBQXVCOytCQUU5QixLQUFLLFNBQUMsYUFBYTs7SUFrQnRCLHdCQUFDO0NBQUEsQUF0RUQsQ0F3QmdELHVCQUF1QixHQThDdEU7U0E5Q1ksaUJBQWlCOzs7SUFNNUIsd0NBQStDOztJQUMvQyx5Q0FBNkM7O0lBQzdDLDJDQUFvRTs7Ozs7SUFJcEUsa0NBQXNCOztJQWN0Qix3Q0FBdUY7O0lBeEI3QywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uLy4uL3BvcG92ZXIvY29tbW9uL3BvcG92ZXInO1xuaW1wb3J0IHsgUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMvZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDdXN0b21GaWx0ZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9jdXN0b20tZmlsdGVyJztcbmltcG9ydCB7IEZpbHRlcnNQcm92aWRlciwgUmVnaXN0ZXJlZEZpbHRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2ZpbHRlcnMnO1xuaW1wb3J0IHsgRGF0YWdyaWRGaWx0ZXJSZWdpc3RyYXIgfSBmcm9tICcuL3V0aWxzL2RhdGFncmlkLWZpbHRlci1yZWdpc3RyYXInO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBDdXN0b20gZmlsdGVyIHRoYXQgY2FuIGJlIGFkZGVkIGluIGFueSBjb2x1bW4gdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb2JqZWN0IHByb3BlcnR5IHN0cmluZyBmaWx0ZXIuXG4gKiBUaGUgcmVhc29uIHRoaXMgaXMgbm90IGp1c3QgYW4gaW5wdXQgb24gRGF0YWdyaWRDb2x1bW4gaXMgYmVjYXVzZSB3ZSBuZWVkIHRoZSBmaWx0ZXIncyB0ZW1wbGF0ZSB0byBiZSBwcm9qZWN0ZWQsXG4gKiBzaW5jZSBpdCBjYW4gYmUgYW55dGhpbmcgKG5vdCBqdXN0IGEgdGV4dCBpbnB1dCkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1kZy1maWx0ZXInLFxuICAvLyBXZSByZWdpc3RlciB0aGlzIGNvbXBvbmVudCBhcyBhIEN1c3RvbUZpbHRlciwgZm9yIHRoZSBwYXJlbnQgY29sdW1uIHRvIGRldGVjdCBpdC5cbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDdXN0b21GaWx0ZXIsIHVzZUV4aXN0aW5nOiBDbHJEYXRhZ3JpZEZpbHRlciB9XSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiAjYW5jaG9yIGNsYXNzPVwiZGF0YWdyaWQtZmlsdGVyLXRvZ2dsZVwiIChjbGljayk9XCJ0b2dnbGUoKVwiXG4gICAgICAgICAgICBbY2xhc3MuZGF0YWdyaWQtZmlsdGVyLW9wZW5dPVwib3BlblwiIFtjbGFzcy5kYXRhZ3JpZC1maWx0ZXJlZF09XCJhY3RpdmVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbKGNsclBvcG92ZXJPbGQpXT1cIm9wZW5cIiBbY2xyUG9wb3Zlck9sZEFuY2hvcl09XCJhbmNob3JcIiBbY2xyUG9wb3Zlck9sZEFuY2hvclBvaW50XT1cImFuY2hvclBvaW50XCJcbiAgICAgICAgICAgICBbY2xyUG9wb3Zlck9sZFBvcG92ZXJQb2ludF09XCJwb3BvdmVyUG9pbnRcIiBbY2xyUG9wb3Zlck9sZE9wdGlvbnNdPVwicG9wb3Zlck9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhZ3JpZC1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEZJWE1FOiB0aGlzIHdob2xlIGZpbHRlciBwYXJ0IG5lZWRzIGEgZmluYWwgZGVzaWduIGJlZm9yZSB3ZSBjYW4gdHJ5IHRvIGhhdmUgYSBjbGVhbmVyIERPTSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YWdyaWQtZmlsdGVyLWNsb3NlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJvcGVuID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNsb3NlXCIgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5jbG9zZVwiPjwvY2xyLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkRmlsdGVyPFQgPSBhbnk+IGV4dGVuZHMgRGF0YWdyaWRGaWx0ZXJSZWdpc3RyYXI8VCwgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4+XG4gIGltcGxlbWVudHMgQ3VzdG9tRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoX2ZpbHRlcnM6IEZpbHRlcnNQcm92aWRlcjxUPiwgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3MpIHtcbiAgICBzdXBlcihfZmlsdGVycyk7XG4gIH1cblxuICBwdWJsaWMgYW5jaG9yUG9pbnQ6IFBvaW50ID0gUG9pbnQuUklHSFRfQk9UVE9NO1xuICBwdWJsaWMgcG9wb3ZlclBvaW50OiBQb2ludCA9IFBvaW50LlJJR0hUX1RPUDtcbiAgcHVibGljIHBvcG92ZXJPcHRpb25zOiBQb3BvdmVyT3B0aW9ucyA9IHsgYWxsb3dNdWx0aXBsZU9wZW46IHRydWUgfTtcbiAgLyoqXG4gICAqIFRyYWNrcyB3aGV0aGVyIHRoZSBmaWx0ZXIgZHJvcGRvd24gaXMgb3BlbiBvciBub3RcbiAgICovXG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHVibGljIGdldCBvcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgQElucHV0KCdjbHJEZ0ZpbHRlck9wZW4nKVxuICBwdWJsaWMgc2V0IG9wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGJvb2xPcGVuID0gISFvcGVuO1xuICAgIGlmIChib29sT3BlbiAhPT0gdGhpcy5fb3Blbikge1xuICAgICAgdGhpcy5fb3BlbiA9IGJvb2xPcGVuO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlZC5lbWl0KGJvb2xPcGVuKTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCdjbHJEZ0ZpbHRlck9wZW5DaGFuZ2UnKSBwdWJsaWMgb3BlbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBASW5wdXQoJ2NsckRnRmlsdGVyJylcbiAgcHVibGljIHNldCBjdXN0b21GaWx0ZXIoZmlsdGVyOiBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPiB8IFJlZ2lzdGVyZWRGaWx0ZXI8VCwgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4+KSB7XG4gICAgdGhpcy5zZXRGaWx0ZXIoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIGZpbHRlciBpcyBjdXJyZW50bHkgYWN0aXZlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gISF0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5pc0FjdGl2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzL2hpZGVzIHRoZSBmaWx0ZXIgZHJvcGRvd25cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxufVxuIl19