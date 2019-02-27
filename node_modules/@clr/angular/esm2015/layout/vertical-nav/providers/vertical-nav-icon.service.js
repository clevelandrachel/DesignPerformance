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
export class VerticalNavIconService {
    constructor() {
        this._icons = 0;
    }
    /**
     * @return {?}
     */
    get hasIcons() {
        return this._icons > 0;
    }
    /**
     * @return {?}
     */
    registerIcon() {
        this._icons++;
    }
    /**
     * @return {?}
     */
    unregisterIcon() {
        this._icons--;
    }
}
VerticalNavIconService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    VerticalNavIconService.prototype._icons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWljb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxheW91dC92ZXJ0aWNhbC1uYXYvcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi1pY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBRVUsV0FBTSxHQUFXLENBQUMsQ0FBQztJQWE3QixDQUFDOzs7O0lBWEMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7WUFkRixVQUFVOzs7O0lBRVQsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbE5hdkljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaWNvbnM6IG51bWJlciA9IDA7XG5cbiAgZ2V0IGhhc0ljb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pY29ucyA+IDA7XG4gIH1cblxuICByZWdpc3Rlckljb24oKTogdm9pZCB7XG4gICAgdGhpcy5faWNvbnMrKztcbiAgfVxuXG4gIHVucmVnaXN0ZXJJY29uKCk6IHZvaWQge1xuICAgIHRoaXMuX2ljb25zLS07XG4gIH1cbn1cbiJdfQ==