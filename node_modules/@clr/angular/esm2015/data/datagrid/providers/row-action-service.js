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
export class RowActionService {
    constructor() {
        this.actionableCount = 0;
    }
    /**
     * @return {?}
     */
    register() {
        this.actionableCount++;
    }
    /**
     * @return {?}
     */
    unregister() {
        this.actionableCount--;
    }
    /**
     * false means no rows with action
     * @return {?}
     */
    get hasActionableRow() {
        return this.actionableCount > 0;
    }
}
RowActionService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    RowActionService.prototype.actionableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWFjdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9wcm92aWRlcnMvcm93LWFjdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVVLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBZ0I5QixDQUFDOzs7O0lBZFEsUUFBUTtRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUtELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBakJGLFVBQVU7Ozs7SUFFVCwyQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvd0FjdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGFjdGlvbmFibGVDb3VudCA9IDA7XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWN0aW9uYWJsZUNvdW50Kys7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcigpIHtcbiAgICB0aGlzLmFjdGlvbmFibGVDb3VudC0tO1xuICB9XG5cbiAgLyoqXG4gICAqIGZhbHNlIG1lYW5zIG5vIHJvd3Mgd2l0aCBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzQWN0aW9uYWJsZVJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25hYmxlQ291bnQgPiAwO1xuICB9XG59XG4iXX0=