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
var VerticalNavGroupService = /** @class */ (function () {
    function VerticalNavGroupService() {
        this._expandChange = new Subject();
    }
    Object.defineProperty(VerticalNavGroupService.prototype, "expandChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VerticalNavGroupService.prototype.expand = /**
     * @return {?}
     */
    function () {
        this._expandChange.next(true);
    };
    VerticalNavGroupService.decorators = [
        { type: Injectable }
    ];
    return VerticalNavGroupService;
}());
export { VerticalNavGroupService };
if (false) {
    /** @type {?} */
    VerticalNavGroupService.prototype._expandChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWdyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdmVydGljYWwtbmF2L3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYtZ3JvdXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBQTtRQUVVLGtCQUFhLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7SUFTbkUsQ0FBQztJQVBDLHNCQUFJLGlEQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUM7OztPQUFBOzs7O0lBRUQsd0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBVkYsVUFBVTs7SUFXWCw4QkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLHVCQUF1Qjs7O0lBQ2xDLGdEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxOYXZHcm91cFNlcnZpY2Uge1xuICBwcml2YXRlIF9leHBhbmRDaGFuZ2U6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGdldCBleHBhbmRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGV4cGFuZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9leHBhbmRDaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxufVxuIl19