/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var DayViewModel = /** @class */ (function () {
    function DayViewModel(dayModel, isTodaysDate, isDisabled, isSelected, isFocusable) {
        if (isTodaysDate === void 0) { isTodaysDate = false; }
        if (isDisabled === void 0) { isDisabled = false; }
        if (isSelected === void 0) { isSelected = false; }
        if (isFocusable === void 0) { isFocusable = false; }
        this.dayModel = dayModel;
        this.isTodaysDate = isTodaysDate;
        this.isDisabled = isDisabled;
        this.isSelected = isSelected;
        this.isFocusable = isFocusable;
    }
    Object.defineProperty(DayViewModel.prototype, "tabIndex", {
        /**
         * Gets the tab index based on the isFocusable flag.
         */
        get: /**
         * Gets the tab index based on the isFocusable flag.
         * @return {?}
         */
        function () {
            return this.isFocusable ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DayViewModel;
}());
export { DayViewModel };
if (false) {
    /** @type {?} */
    DayViewModel.prototype.dayModel;
    /** @type {?} */
    DayViewModel.prototype.isTodaysDate;
    /** @type {?} */
    DayViewModel.prototype.isDisabled;
    /** @type {?} */
    DayViewModel.prototype.isSelected;
    /** @type {?} */
    DayViewModel.prototype.isFocusable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL21vZGVsL2RheS12aWV3Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVFBO0lBQ0Usc0JBQ1MsUUFBa0IsRUFDbEIsWUFBNkIsRUFDN0IsVUFBMkIsRUFDM0IsVUFBMkIsRUFDM0IsV0FBNEI7UUFINUIsNkJBQUEsRUFBQSxvQkFBNkI7UUFDN0IsMkJBQUEsRUFBQSxrQkFBMkI7UUFDM0IsMkJBQUEsRUFBQSxrQkFBMkI7UUFDM0IsNEJBQUEsRUFBQSxtQkFBNEI7UUFKNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ2xDLENBQUM7SUFLSixzQkFBSSxrQ0FBUTtRQUhaOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7OztJQWJHLGdDQUF5Qjs7SUFDekIsb0NBQW9DOztJQUNwQyxrQ0FBa0M7O0lBQ2xDLGtDQUFrQzs7SUFDbEMsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBEYXlNb2RlbCB9IGZyb20gJy4vZGF5Lm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIERheVZpZXdNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkYXlNb2RlbDogRGF5TW9kZWwsXG4gICAgcHVibGljIGlzVG9kYXlzRGF0ZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2UsXG4gICAgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBwdWJsaWMgaXNGb2N1c2FibGU6IGJvb2xlYW4gPSBmYWxzZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRhYiBpbmRleCBiYXNlZCBvbiB0aGUgaXNGb2N1c2FibGUgZmxhZy5cbiAgICovXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmlzRm9jdXNhYmxlID8gMCA6IC0xO1xuICB9XG59XG4iXX0=