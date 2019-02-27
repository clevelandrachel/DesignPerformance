/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/** @type {?} */
const YEARS_TO_DISPLAY = 10;
export class YearRangeModel {
    /**
     * @param {?} year
     */
    constructor(year) {
        this.year = year;
        this.yearRange = [];
        this.generateYearRange();
    }
    /**
     * Gets the number in the middle of the range.
     * @return {?}
     */
    get middleYear() {
        return this.yearRange[Math.floor(this.yearRange.length / 2)];
    }
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     * @return {?}
     */
    generateYearRange() {
        /** @type {?} */
        const remainder = this.year % YEARS_TO_DISPLAY;
        /** @type {?} */
        const floor = this.year - remainder;
        /** @type {?} */
        const ceil = floor + YEARS_TO_DISPLAY;
        this.yearRange = this.generateRange(floor, ceil);
    }
    /**
     * Function which generate a range of numbers from floor to ceil.
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    generateRange(floor, ceil) {
        return Array.from({ length: ceil - floor }, (v, k) => k + floor);
    }
    /**
     * Generates the YearRangeModel for the next decade.
     * @return {?}
     */
    nextDecade() {
        return new YearRangeModel(this.year + 10);
    }
    /**
     * Generates the YearRangeModel for the previous decade.
     * @return {?}
     */
    previousDecade() {
        return new YearRangeModel(this.year - 10);
    }
    /**
     * Generates the YearRangeModel for the current decade.
     * @return {?}
     */
    currentDecade() {
        return new YearRangeModel(new Date().getFullYear());
    }
    /**
     * Checks if the value is in the YearRangeModel.
     * @param {?} value
     * @return {?}
     */
    inRange(value) {
        return this.yearRange.indexOf(value) > -1;
    }
}
if (false) {
    /** @type {?} */
    YearRangeModel.prototype.yearRange;
    /** @type {?} */
    YearRangeModel.prototype.year;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1yYW5nZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvbW9kZWwveWVhci1yYW5nZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O01BTU0sZ0JBQWdCLEdBQVcsRUFBRTtBQUVuQyxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUE2QixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUl6QyxjQUFTLEdBQWEsRUFBRSxDQUFDO1FBSHZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBT0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFNTyxpQkFBaUI7O2NBQ2pCLFNBQVMsR0FBVyxJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQjs7Y0FDaEQsS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUzs7Y0FDckMsSUFBSSxHQUFXLEtBQUssR0FBRyxnQkFBZ0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7O0lBS08sYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUtELGFBQWE7UUFDWCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFLRCxPQUFPLENBQUMsS0FBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjs7O0lBdERDLG1DQUF5Qjs7SUFKYiw4QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmNvbnN0IFlFQVJTX1RPX0RJU1BMQVk6IG51bWJlciA9IDEwO1xuXG5leHBvcnQgY2xhc3MgWWVhclJhbmdlTW9kZWwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHllYXI6IG51bWJlcikge1xuICAgIHRoaXMuZ2VuZXJhdGVZZWFyUmFuZ2UoKTtcbiAgfVxuXG4gIHllYXJSYW5nZTogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgbnVtYmVyIGluIHRoZSBtaWRkbGUgb2YgdGhlIHJhbmdlLlxuICAgKi9cbiAgZ2V0IG1pZGRsZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyUmFuZ2VbTWF0aC5mbG9vcih0aGlzLnllYXJSYW5nZS5sZW5ndGggLyAyKV07XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSB5ZWFyIHJhbmdlIGJhc2VkIG9uIHRoZSB5ZWFyIHBhcmFtZXRlci5cbiAgICogZWc6IElmIDIwMTggaXMgcGFzc2VkIHRoZSBvdXRwdXQgd2lsbCBiZSBbMjAxMCwgMjAxMSwgLi4uLCAyMDE5XVxuICAgKi9cbiAgcHJpdmF0ZSBnZW5lcmF0ZVllYXJSYW5nZSgpIHtcbiAgICBjb25zdCByZW1haW5kZXI6IG51bWJlciA9IHRoaXMueWVhciAlIFlFQVJTX1RPX0RJU1BMQVk7XG4gICAgY29uc3QgZmxvb3I6IG51bWJlciA9IHRoaXMueWVhciAtIHJlbWFpbmRlcjtcbiAgICBjb25zdCBjZWlsOiBudW1iZXIgPSBmbG9vciArIFlFQVJTX1RPX0RJU1BMQVk7XG4gICAgdGhpcy55ZWFyUmFuZ2UgPSB0aGlzLmdlbmVyYXRlUmFuZ2UoZmxvb3IsIGNlaWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlIGEgcmFuZ2Ugb2YgbnVtYmVycyBmcm9tIGZsb29yIHRvIGNlaWwuXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlUmFuZ2UoZmxvb3I6IG51bWJlciwgY2VpbDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjZWlsIC0gZmxvb3IgfSwgKHYsIGspID0+IGsgKyBmbG9vcik7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBZZWFyUmFuZ2VNb2RlbCBmb3IgdGhlIG5leHQgZGVjYWRlLlxuICAgKi9cbiAgbmV4dERlY2FkZSgpOiBZZWFyUmFuZ2VNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBZZWFyUmFuZ2VNb2RlbCh0aGlzLnllYXIgKyAxMCk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHRoZSBZZWFyUmFuZ2VNb2RlbCBmb3IgdGhlIHByZXZpb3VzIGRlY2FkZS5cbiAgICovXG4gIHByZXZpb3VzRGVjYWRlKCk6IFllYXJSYW5nZU1vZGVsIHtcbiAgICByZXR1cm4gbmV3IFllYXJSYW5nZU1vZGVsKHRoaXMueWVhciAtIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIFllYXJSYW5nZU1vZGVsIGZvciB0aGUgY3VycmVudCBkZWNhZGUuXG4gICAqL1xuICBjdXJyZW50RGVjYWRlKCk6IFllYXJSYW5nZU1vZGVsIHtcbiAgICByZXR1cm4gbmV3IFllYXJSYW5nZU1vZGVsKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBpcyBpbiB0aGUgWWVhclJhbmdlTW9kZWwuXG4gICAqL1xuICBpblJhbmdlKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyUmFuZ2UuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgfVxufVxuIl19