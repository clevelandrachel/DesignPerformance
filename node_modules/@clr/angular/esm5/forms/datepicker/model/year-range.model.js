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
var YEARS_TO_DISPLAY = 10;
var YearRangeModel = /** @class */ (function () {
    function YearRangeModel(year) {
        this.year = year;
        this.yearRange = [];
        this.generateYearRange();
    }
    Object.defineProperty(YearRangeModel.prototype, "middleYear", {
        /**
         * Gets the number in the middle of the range.
         */
        get: /**
         * Gets the number in the middle of the range.
         * @return {?}
         */
        function () {
            return this.yearRange[Math.floor(this.yearRange.length / 2)];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     */
    /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     * @return {?}
     */
    YearRangeModel.prototype.generateYearRange = /**
     * Generates the year range based on the year parameter.
     * eg: If 2018 is passed the output will be [2010, 2011, ..., 2019]
     * @return {?}
     */
    function () {
        /** @type {?} */
        var remainder = this.year % YEARS_TO_DISPLAY;
        /** @type {?} */
        var floor = this.year - remainder;
        /** @type {?} */
        var ceil = floor + YEARS_TO_DISPLAY;
        this.yearRange = this.generateRange(floor, ceil);
    };
    /**
     * Function which generate a range of numbers from floor to ceil.
     */
    /**
     * Function which generate a range of numbers from floor to ceil.
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    YearRangeModel.prototype.generateRange = /**
     * Function which generate a range of numbers from floor to ceil.
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    function (floor, ceil) {
        return Array.from({ length: ceil - floor }, function (v, k) { return k + floor; });
    };
    /**
     * Generates the YearRangeModel for the next decade.
     */
    /**
     * Generates the YearRangeModel for the next decade.
     * @return {?}
     */
    YearRangeModel.prototype.nextDecade = /**
     * Generates the YearRangeModel for the next decade.
     * @return {?}
     */
    function () {
        return new YearRangeModel(this.year + 10);
    };
    /**
     * Generates the YearRangeModel for the previous decade.
     */
    /**
     * Generates the YearRangeModel for the previous decade.
     * @return {?}
     */
    YearRangeModel.prototype.previousDecade = /**
     * Generates the YearRangeModel for the previous decade.
     * @return {?}
     */
    function () {
        return new YearRangeModel(this.year - 10);
    };
    /**
     * Generates the YearRangeModel for the current decade.
     */
    /**
     * Generates the YearRangeModel for the current decade.
     * @return {?}
     */
    YearRangeModel.prototype.currentDecade = /**
     * Generates the YearRangeModel for the current decade.
     * @return {?}
     */
    function () {
        return new YearRangeModel(new Date().getFullYear());
    };
    /**
     * Checks if the value is in the YearRangeModel.
     */
    /**
     * Checks if the value is in the YearRangeModel.
     * @param {?} value
     * @return {?}
     */
    YearRangeModel.prototype.inRange = /**
     * Checks if the value is in the YearRangeModel.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.yearRange.indexOf(value) > -1;
    };
    return YearRangeModel;
}());
export { YearRangeModel };
if (false) {
    /** @type {?} */
    YearRangeModel.prototype.yearRange;
    /** @type {?} */
    YearRangeModel.prototype.year;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1yYW5nZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvbW9kZWwveWVhci1yYW5nZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBTU0sZ0JBQWdCLEdBQVcsRUFBRTtBQUVuQztJQUNFLHdCQUE2QixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUl6QyxjQUFTLEdBQWEsRUFBRSxDQUFDO1FBSHZCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFPRCxzQkFBSSxzQ0FBVTtRQUhkOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ssMENBQWlCOzs7OztJQUF6Qjs7WUFDUSxTQUFTLEdBQVcsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0I7O1lBQ2hELEtBQUssR0FBVyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVM7O1lBQ3JDLElBQUksR0FBVyxLQUFLLEdBQUcsZ0JBQWdCO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0ssc0NBQWE7Ozs7OztJQUFyQixVQUFzQixLQUFhLEVBQUUsSUFBWTtRQUMvQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsR0FBRyxLQUFLLEVBQVQsQ0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG1DQUFVOzs7O0lBQVY7UUFDRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHNDQUFhOzs7O0lBQWI7UUFDRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILGdDQUFPOzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7Ozs7SUF0REMsbUNBQXlCOztJQUpiLDhCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuY29uc3QgWUVBUlNfVE9fRElTUExBWTogbnVtYmVyID0gMTA7XG5cbmV4cG9ydCBjbGFzcyBZZWFyUmFuZ2VNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy5nZW5lcmF0ZVllYXJSYW5nZSgpO1xuICB9XG5cbiAgeWVhclJhbmdlOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBudW1iZXIgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcmFuZ2UuXG4gICAqL1xuICBnZXQgbWlkZGxlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnllYXJSYW5nZVtNYXRoLmZsb29yKHRoaXMueWVhclJhbmdlLmxlbmd0aCAvIDIpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIHllYXIgcmFuZ2UgYmFzZWQgb24gdGhlIHllYXIgcGFyYW1ldGVyLlxuICAgKiBlZzogSWYgMjAxOCBpcyBwYXNzZWQgdGhlIG91dHB1dCB3aWxsIGJlIFsyMDEwLCAyMDExLCAuLi4sIDIwMTldXG4gICAqL1xuICBwcml2YXRlIGdlbmVyYXRlWWVhclJhbmdlKCkge1xuICAgIGNvbnN0IHJlbWFpbmRlcjogbnVtYmVyID0gdGhpcy55ZWFyICUgWUVBUlNfVE9fRElTUExBWTtcbiAgICBjb25zdCBmbG9vcjogbnVtYmVyID0gdGhpcy55ZWFyIC0gcmVtYWluZGVyO1xuICAgIGNvbnN0IGNlaWw6IG51bWJlciA9IGZsb29yICsgWUVBUlNfVE9fRElTUExBWTtcbiAgICB0aGlzLnllYXJSYW5nZSA9IHRoaXMuZ2VuZXJhdGVSYW5nZShmbG9vciwgY2VpbCk7XG4gIH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGUgYSByYW5nZSBvZiBudW1iZXJzIGZyb20gZmxvb3IgdG8gY2VpbC5cbiAgICovXG4gIHByaXZhdGUgZ2VuZXJhdGVSYW5nZShmbG9vcjogbnVtYmVyLCBjZWlsOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGNlaWwgLSBmbG9vciB9LCAodiwgaykgPT4gayArIGZsb29yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIFllYXJSYW5nZU1vZGVsIGZvciB0aGUgbmV4dCBkZWNhZGUuXG4gICAqL1xuICBuZXh0RGVjYWRlKCk6IFllYXJSYW5nZU1vZGVsIHtcbiAgICByZXR1cm4gbmV3IFllYXJSYW5nZU1vZGVsKHRoaXMueWVhciArIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdGhlIFllYXJSYW5nZU1vZGVsIGZvciB0aGUgcHJldmlvdXMgZGVjYWRlLlxuICAgKi9cbiAgcHJldmlvdXNEZWNhZGUoKTogWWVhclJhbmdlTW9kZWwge1xuICAgIHJldHVybiBuZXcgWWVhclJhbmdlTW9kZWwodGhpcy55ZWFyIC0gMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgZm9yIHRoZSBjdXJyZW50IGRlY2FkZS5cbiAgICovXG4gIGN1cnJlbnREZWNhZGUoKTogWWVhclJhbmdlTW9kZWwge1xuICAgIHJldHVybiBuZXcgWWVhclJhbmdlTW9kZWwobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHZhbHVlIGlzIGluIHRoZSBZZWFyUmFuZ2VNb2RlbC5cbiAgICovXG4gIGluUmFuZ2UodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnllYXJSYW5nZS5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICB9XG59XG4iXX0=