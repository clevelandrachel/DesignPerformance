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
/** @enum {string} */
var Layouts = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
    COMPACT: 'compact',
};
export { Layouts };
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layout = Layouts.HORIZONTAL;
        // This is basically a replacement for Object.values(), which IE11 and Node <9 don't support :(
        // String enums cannot be reverse-mapped, meaning Layouts['COMPACT'] does not return 'compact' so
        // this exists to deal with this little caveat to get the list of the values as an array.
        this.layoutValues = Object.keys(Layouts).map(function (key) { return Layouts[key]; });
    }
    /**
     * @return {?}
     */
    LayoutService.prototype.isVertical = /**
     * @return {?}
     */
    function () {
        return this.layout === Layouts.VERTICAL;
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.isHorizontal = /**
     * @return {?}
     */
    function () {
        return this.layout === Layouts.HORIZONTAL;
    };
    /**
     * @return {?}
     */
    LayoutService.prototype.isCompact = /**
     * @return {?}
     */
    function () {
        return this.layout === Layouts.COMPACT;
    };
    Object.defineProperty(LayoutService.prototype, "layoutClass", {
        get: /**
         * @return {?}
         */
        function () {
            return "clr-form-" + this.layout;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} layout
     * @return {?}
     */
    LayoutService.prototype.isValid = /**
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        return this.layoutValues.indexOf(layout) > -1;
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());
export { LayoutService };
if (false) {
    /** @type {?} */
    LayoutService.prototype.layout;
    /** @type {?} */
    LayoutService.prototype.layoutValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jb21tb24vcHJvdmlkZXJzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUd6QyxVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZO0lBQ3pCLFNBQVUsU0FBUzs7O0FBR3JCO0lBQUE7UUFFRSxXQUFNLEdBQVksT0FBTyxDQUFDLFVBQVUsQ0FBQzs7OztRQUk3QixpQkFBWSxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBcUJqRixDQUFDOzs7O0lBbkJDLGtDQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxvQ0FBWTs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsaUNBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFJLHNDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLGNBQVksSUFBSSxDQUFDLE1BQVEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwrQkFBTzs7OztJQUFQLFVBQVEsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQTFCRixVQUFVOztJQTJCWCxvQkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGFBQWE7OztJQUN4QiwrQkFBcUM7O0lBSXJDLHFDQUErRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZW51bSBMYXlvdXRzIHtcbiAgVkVSVElDQUwgPSAndmVydGljYWwnLFxuICBIT1JJWk9OVEFMID0gJ2hvcml6b250YWwnLFxuICBDT01QQUNUID0gJ2NvbXBhY3QnLFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG4gIGxheW91dDogTGF5b3V0cyA9IExheW91dHMuSE9SSVpPTlRBTDtcbiAgLy8gVGhpcyBpcyBiYXNpY2FsbHkgYSByZXBsYWNlbWVudCBmb3IgT2JqZWN0LnZhbHVlcygpLCB3aGljaCBJRTExIGFuZCBOb2RlIDw5IGRvbid0IHN1cHBvcnQgOihcbiAgLy8gU3RyaW5nIGVudW1zIGNhbm5vdCBiZSByZXZlcnNlLW1hcHBlZCwgbWVhbmluZyBMYXlvdXRzWydDT01QQUNUJ10gZG9lcyBub3QgcmV0dXJuICdjb21wYWN0JyBzb1xuICAvLyB0aGlzIGV4aXN0cyB0byBkZWFsIHdpdGggdGhpcyBsaXR0bGUgY2F2ZWF0IHRvIGdldCB0aGUgbGlzdCBvZiB0aGUgdmFsdWVzIGFzIGFuIGFycmF5LlxuICBwcml2YXRlIGxheW91dFZhbHVlczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhMYXlvdXRzKS5tYXAoa2V5ID0+IExheW91dHNba2V5XSk7XG5cbiAgaXNWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXQgPT09IExheW91dHMuVkVSVElDQUw7XG4gIH1cblxuICBpc0hvcml6b250YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0ID09PSBMYXlvdXRzLkhPUklaT05UQUw7XG4gIH1cblxuICBpc0NvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0ID09PSBMYXlvdXRzLkNPTVBBQ1Q7XG4gIH1cblxuICBnZXQgbGF5b3V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNsci1mb3JtLSR7dGhpcy5sYXlvdXR9YDtcbiAgfVxuXG4gIGlzVmFsaWQobGF5b3V0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRWYWx1ZXMuaW5kZXhPZihsYXlvdXQpID4gLTE7XG4gIH1cbn1cbiJdfQ==