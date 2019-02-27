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
var RowActionService = /** @class */ (function () {
    function RowActionService() {
        this.actionableCount = 0;
    }
    /**
     * @return {?}
     */
    RowActionService.prototype.register = /**
     * @return {?}
     */
    function () {
        this.actionableCount++;
    };
    /**
     * @return {?}
     */
    RowActionService.prototype.unregister = /**
     * @return {?}
     */
    function () {
        this.actionableCount--;
    };
    Object.defineProperty(RowActionService.prototype, "hasActionableRow", {
        /**
         * false means no rows with action
         */
        get: /**
         * false means no rows with action
         * @return {?}
         */
        function () {
            return this.actionableCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    RowActionService.decorators = [
        { type: Injectable }
    ];
    return RowActionService;
}());
export { RowActionService };
if (false) {
    /** @type {?} */
    RowActionService.prototype.actionableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWFjdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9wcm92aWRlcnMvcm93LWFjdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQUVVLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBZ0I5QixDQUFDOzs7O0lBZFEsbUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFTSxxQ0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFLRCxzQkFBVyw4Q0FBZ0I7UUFIM0I7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBOztnQkFqQkYsVUFBVTs7SUFrQlgsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxnQkFBZ0I7OztJQUMzQiwyQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvd0FjdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGFjdGlvbmFibGVDb3VudCA9IDA7XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWN0aW9uYWJsZUNvdW50Kys7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlcigpIHtcbiAgICB0aGlzLmFjdGlvbmFibGVDb3VudC0tO1xuICB9XG5cbiAgLyoqXG4gICAqIGZhbHNlIG1lYW5zIG5vIHJvd3Mgd2l0aCBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzQWN0aW9uYWJsZVJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25hYmxlQ291bnQgPiAwO1xuICB9XG59XG4iXX0=