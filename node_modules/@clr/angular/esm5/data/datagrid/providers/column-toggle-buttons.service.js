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
var ColumnToggleButtonsService = /** @class */ (function () {
    function ColumnToggleButtonsService() {
        this.buttons = null;
        this.selectAllDisabled = false;
        this._selectAllButtonClicked = new Subject();
    }
    Object.defineProperty(ColumnToggleButtonsService.prototype, "selectAllButtonClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectAllButtonClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColumnToggleButtonsService.prototype.buttonClicked = /**
     * @return {?}
     */
    function () {
        this._selectAllButtonClicked.next();
    };
    ColumnToggleButtonsService.decorators = [
        { type: Injectable }
    ];
    return ColumnToggleButtonsService;
}());
export { ColumnToggleButtonsService };
if (false) {
    /** @type {?} */
    ColumnToggleButtonsService.prototype.buttons;
    /** @type {?} */
    ColumnToggleButtonsService.prototype.selectAllDisabled;
    /** @type {?} */
    ColumnToggleButtonsService.prototype._selectAllButtonClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRvZ2dsZS1idXR0b25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9jb2x1bW4tdG9nZ2xlLWJ1dHRvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBQTtRQUVFLFlBQU8sR0FBcUIsSUFBSSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUUzQiw0QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBUXhELENBQUM7SUFQQyxzQkFBVyw4REFBc0I7Ozs7UUFBakM7WUFDRSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTs7OztJQUVNLGtEQUFhOzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWkYsVUFBVTs7SUFhWCxpQ0FBQztDQUFBLEFBYkQsSUFhQztTQVpZLDBCQUEwQjs7O0lBQ3JDLDZDQUFpQzs7SUFDakMsdURBQW1DOztJQUVuQyw2REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uVG9nZ2xlQnV0dG9uc1NlcnZpY2Uge1xuICBidXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcbiAgc2VsZWN0QWxsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9zZWxlY3RBbGxCdXR0b25DbGlja2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIGdldCBzZWxlY3RBbGxCdXR0b25DbGlja2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RBbGxCdXR0b25DbGlja2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGJ1dHRvbkNsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0QWxsQnV0dG9uQ2xpY2tlZC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==