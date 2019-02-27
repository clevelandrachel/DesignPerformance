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
const Layouts = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
    COMPACT: 'compact',
};
export { Layouts };
export class LayoutService {
    constructor() {
        this.layout = Layouts.HORIZONTAL;
        // This is basically a replacement for Object.values(), which IE11 and Node <9 don't support :(
        // String enums cannot be reverse-mapped, meaning Layouts['COMPACT'] does not return 'compact' so
        // this exists to deal with this little caveat to get the list of the values as an array.
        this.layoutValues = Object.keys(Layouts).map(key => Layouts[key]);
    }
    /**
     * @return {?}
     */
    isVertical() {
        return this.layout === Layouts.VERTICAL;
    }
    /**
     * @return {?}
     */
    isHorizontal() {
        return this.layout === Layouts.HORIZONTAL;
    }
    /**
     * @return {?}
     */
    isCompact() {
        return this.layout === Layouts.COMPACT;
    }
    /**
     * @return {?}
     */
    get layoutClass() {
        return `clr-form-${this.layout}`;
    }
    /**
     * @param {?} layout
     * @return {?}
     */
    isValid(layout) {
        return this.layoutValues.indexOf(layout) > -1;
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    LayoutService.prototype.layout;
    /** @type {?} */
    LayoutService.prototype.layoutValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jb21tb24vcHJvdmlkZXJzL2xheW91dC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztJQUd6QyxVQUFXLFVBQVU7SUFDckIsWUFBYSxZQUFZO0lBQ3pCLFNBQVUsU0FBUzs7O0FBSXJCLE1BQU0sT0FBTyxhQUFhO0lBRDFCO1FBRUUsV0FBTSxHQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUM7Ozs7UUFJN0IsaUJBQVksR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBcUJqRixDQUFDOzs7O0lBbkJDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sWUFBWSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTFCRixVQUFVOzs7O0lBRVQsK0JBQXFDOztJQUlyQyxxQ0FBK0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gTGF5b3V0cyB7XG4gIFZFUlRJQ0FMID0gJ3ZlcnRpY2FsJyxcbiAgSE9SSVpPTlRBTCA9ICdob3Jpem9udGFsJyxcbiAgQ09NUEFDVCA9ICdjb21wYWN0Jyxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xuICBsYXlvdXQ6IExheW91dHMgPSBMYXlvdXRzLkhPUklaT05UQUw7XG4gIC8vIFRoaXMgaXMgYmFzaWNhbGx5IGEgcmVwbGFjZW1lbnQgZm9yIE9iamVjdC52YWx1ZXMoKSwgd2hpY2ggSUUxMSBhbmQgTm9kZSA8OSBkb24ndCBzdXBwb3J0IDooXG4gIC8vIFN0cmluZyBlbnVtcyBjYW5ub3QgYmUgcmV2ZXJzZS1tYXBwZWQsIG1lYW5pbmcgTGF5b3V0c1snQ09NUEFDVCddIGRvZXMgbm90IHJldHVybiAnY29tcGFjdCcgc29cbiAgLy8gdGhpcyBleGlzdHMgdG8gZGVhbCB3aXRoIHRoaXMgbGl0dGxlIGNhdmVhdCB0byBnZXQgdGhlIGxpc3Qgb2YgdGhlIHZhbHVlcyBhcyBhbiBhcnJheS5cbiAgcHJpdmF0ZSBsYXlvdXRWYWx1ZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoTGF5b3V0cykubWFwKGtleSA9PiBMYXlvdXRzW2tleV0pO1xuXG4gIGlzVmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0ID09PSBMYXlvdXRzLlZFUlRJQ0FMO1xuICB9XG5cbiAgaXNIb3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dCA9PT0gTGF5b3V0cy5IT1JJWk9OVEFMO1xuICB9XG5cbiAgaXNDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dCA9PT0gTGF5b3V0cy5DT01QQUNUO1xuICB9XG5cbiAgZ2V0IGxheW91dENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBjbHItZm9ybS0ke3RoaXMubGF5b3V0fWA7XG4gIH1cblxuICBpc1ZhbGlkKGxheW91dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF5b3V0VmFsdWVzLmluZGV4T2YobGF5b3V0KSA+IC0xO1xuICB9XG59XG4iXX0=