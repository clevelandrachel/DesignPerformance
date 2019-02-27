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
import { Subject } from 'rxjs';
var NgControlService = /** @class */ (function () {
    function NgControlService() {
        // Observable to subscribe to the control, since its not available immediately for projected content
        this._controlChanges = new Subject();
    }
    Object.defineProperty(NgControlService.prototype, "controlChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._controlChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    NgControlService.prototype.setControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        this._controlChanges.next(control);
    };
    NgControlService.decorators = [
        { type: Injectable }
    ];
    return NgControlService;
}());
export { NgControlService };
if (false) {
    /** @type {?} */
    NgControlService.prototype._controlChanges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY29tbW9uL3Byb3ZpZGVycy9uZy1jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDO0lBQUE7O1FBR1Usb0JBQWUsR0FBdUIsSUFBSSxPQUFPLEVBQWEsQ0FBQztJQVF6RSxDQUFDO0lBUEMsc0JBQUksNENBQWM7Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLE9BQWtCO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQVZGLFVBQVU7O0lBV1gsdUJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxnQkFBZ0I7OztJQUUzQiwyQ0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nQ29udHJvbFNlcnZpY2Uge1xuICAvLyBPYnNlcnZhYmxlIHRvIHN1YnNjcmliZSB0byB0aGUgY29udHJvbCwgc2luY2UgaXRzIG5vdCBhdmFpbGFibGUgaW1tZWRpYXRlbHkgZm9yIHByb2plY3RlZCBjb250ZW50XG4gIHByaXZhdGUgX2NvbnRyb2xDaGFuZ2VzOiBTdWJqZWN0PE5nQ29udHJvbD4gPSBuZXcgU3ViamVjdDxOZ0NvbnRyb2w+KCk7XG4gIGdldCBjb250cm9sQ2hhbmdlcygpOiBPYnNlcnZhYmxlPE5nQ29udHJvbD4ge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sQ2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldENvbnRyb2woY29udHJvbDogTmdDb250cm9sKSB7XG4gICAgdGhpcy5fY29udHJvbENoYW5nZXMubmV4dChjb250cm9sKTtcbiAgfVxufVxuIl19