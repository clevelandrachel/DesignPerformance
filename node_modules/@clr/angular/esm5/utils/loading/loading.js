/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional } from '@angular/core';
import { LoadingListener } from './loading-listener';
/** @enum {number} */
var ClrLoadingState = {
    DEFAULT: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
};
export { ClrLoadingState };
ClrLoadingState[ClrLoadingState.DEFAULT] = 'DEFAULT';
ClrLoadingState[ClrLoadingState.LOADING] = 'LOADING';
ClrLoadingState[ClrLoadingState.SUCCESS] = 'SUCCESS';
ClrLoadingState[ClrLoadingState.ERROR] = 'ERROR';
var ClrLoading = /** @class */ (function () {
    // We find the first parent that handles something loading
    function ClrLoading(listener) {
        this.listener = listener;
        this._loadingState = ClrLoadingState.DEFAULT;
    }
    Object.defineProperty(ClrLoading.prototype, "loadingState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loadingState;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === true) {
                value = ClrLoadingState.LOADING;
            }
            else if (!value) {
                value = ClrLoadingState.DEFAULT;
            }
            if (value === this._loadingState) {
                return;
            }
            this._loadingState = value;
            if (this.listener) {
                this.listener.loadingStateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrLoading.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.loadingState = ClrLoadingState.DEFAULT;
    };
    ClrLoading.decorators = [
        { type: Directive, args: [{ selector: '[clrLoading]' },] }
    ];
    /** @nocollapse */
    ClrLoading.ctorParameters = function () { return [
        { type: LoadingListener, decorators: [{ type: Optional }] }
    ]; };
    ClrLoading.propDecorators = {
        loadingState: [{ type: Input, args: ['clrLoading',] }]
    };
    return ClrLoading;
}());
export { ClrLoading };
if (false) {
    /** @type {?} */
    ClrLoading.prototype._loadingState;
    /** @type {?} */
    ClrLoading.prototype.listener;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2xvYWRpbmcvbG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7SUFHbkQsVUFBTztJQUNQLFVBQU87SUFDUCxVQUFPO0lBQ1AsUUFBSzs7Ozs7OztBQUdQO0lBRUUsMERBQTBEO0lBQzFELG9CQUFnQyxRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUVqRCxrQkFBYSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO0lBRkwsQ0FBQztJQUk3RCxzQkFBVyxvQ0FBWTs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQ3dCLEtBQWdDO1lBQ3RELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEIsS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7YUFDakM7aUJBQU0sSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDakIsS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7YUFDakM7WUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDOzs7T0FsQkE7Ozs7SUFvQkQsZ0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7O2dCQS9CRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O2dCQVQ5QixlQUFlLHVCQVlULFFBQVE7OzsrQkFRcEIsS0FBSyxTQUFDLFlBQVk7O0lBcUJyQixpQkFBQztDQUFBLEFBaENELElBZ0NDO1NBL0JZLFVBQVU7OztJQUlyQixtQ0FBaUU7O0lBRnJELDhCQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ0xpc3RlbmVyIH0gZnJvbSAnLi9sb2FkaW5nLWxpc3RlbmVyJztcblxuZXhwb3J0IGVudW0gQ2xyTG9hZGluZ1N0YXRlIHtcbiAgREVGQVVMVCxcbiAgTE9BRElORyxcbiAgU1VDQ0VTUyxcbiAgRVJST1IsXG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJMb2FkaW5nXScgfSlcbmV4cG9ydCBjbGFzcyBDbHJMb2FkaW5nIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLy8gV2UgZmluZCB0aGUgZmlyc3QgcGFyZW50IHRoYXQgaGFuZGxlcyBzb21ldGhpbmcgbG9hZGluZ1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGxpc3RlbmVyOiBMb2FkaW5nTGlzdGVuZXIpIHt9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZ1N0YXRlOiBDbHJMb2FkaW5nU3RhdGUgPSBDbHJMb2FkaW5nU3RhdGUuREVGQVVMVDtcblxuICBwdWJsaWMgZ2V0IGxvYWRpbmdTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZ1N0YXRlO1xuICB9XG5cbiAgQElucHV0KCdjbHJMb2FkaW5nJylcbiAgcHVibGljIHNldCBsb2FkaW5nU3RhdGUodmFsdWU6IGJvb2xlYW4gfCBDbHJMb2FkaW5nU3RhdGUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHZhbHVlID0gQ2xyTG9hZGluZ1N0YXRlLkxPQURJTkc7XG4gICAgfSBlbHNlIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gQ2xyTG9hZGluZ1N0YXRlLkRFRkFVTFQ7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9sb2FkaW5nU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkaW5nU3RhdGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lci5sb2FkaW5nU3RhdGVDaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMubG9hZGluZ1N0YXRlID0gQ2xyTG9hZGluZ1N0YXRlLkRFRkFVTFQ7XG4gIH1cbn1cbiJdfQ==