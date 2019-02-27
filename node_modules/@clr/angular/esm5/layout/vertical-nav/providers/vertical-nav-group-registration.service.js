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
var VerticalNavGroupRegistrationService = /** @class */ (function () {
    function VerticalNavGroupRegistrationService() {
        this.navGroupCount = 0;
    }
    /**
     * @return {?}
     */
    VerticalNavGroupRegistrationService.prototype.registerNavGroup = /**
     * @return {?}
     */
    function () {
        this.navGroupCount++;
    };
    /**
     * @return {?}
     */
    VerticalNavGroupRegistrationService.prototype.unregisterNavGroup = /**
     * @return {?}
     */
    function () {
        this.navGroupCount--;
    };
    VerticalNavGroupRegistrationService.decorators = [
        { type: Injectable }
    ];
    return VerticalNavGroupRegistrationService;
}());
export { VerticalNavGroupRegistrationService };
if (false) {
    /** @type {?} */
    VerticalNavGroupRegistrationService.prototype.navGroupCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWdyb3VwLXJlZ2lzdHJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3ZlcnRpY2FsLW5hdi9wcm92aWRlcnMvdmVydGljYWwtbmF2LWdyb3VwLXJlZ2lzdHJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQUVTLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBU25DLENBQUM7Ozs7SUFQQyw4REFBZ0I7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZ0VBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBVkYsVUFBVTs7SUFXWCwwQ0FBQztDQUFBLEFBWEQsSUFXQztTQVZZLG1DQUFtQzs7O0lBQzlDLDREQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxOYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgbmF2R3JvdXBDb3VudDogbnVtYmVyID0gMDtcblxuICByZWdpc3Rlck5hdkdyb3VwKCkge1xuICAgIHRoaXMubmF2R3JvdXBDb3VudCsrO1xuICB9XG5cbiAgdW5yZWdpc3Rlck5hdkdyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMubmF2R3JvdXBDb3VudC0tO1xuICB9XG59XG4iXX0=