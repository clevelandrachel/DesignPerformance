/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
/** @type {?} */
var activeCounter = 0;
/** @type {?} */
export var IF_ACTIVE_ID = new InjectionToken('IF_ACTIVE_ID');
/**
 * @return {?}
 */
export function tokenFactory() {
    return ++activeCounter;
}
/** @type {?} */
export var IF_ACTIVE_ID_PROVIDER = {
    provide: IF_ACTIVE_ID,
    useFactory: tokenFactory,
};
var IfActiveService = /** @class */ (function () {
    function IfActiveService() {
        /**
         * *****
         * \@property _currentChange
         *
         * \@description
         * A RXJS Subject that updates and provides subscriptions to for the current current state of a component template
         * implemting the IfActive structural directive.
         *
         */
        this._currentChange = new Subject();
    }
    Object.defineProperty(IfActiveService.prototype, "currentChange", {
        /*********
         *
         * @description
         * A getter function that provides an observable for the _current Subject.
         *
         */
        get: /**
         * ******
         *
         * \@description
         * A getter function that provides an observable for the _current Subject.
         *
         * @return {?}
         */
        function () {
            return this._currentChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IfActiveService.prototype, "current", {
        /*********
         *
         * @description
         * A getter that returns the current value of this IfActive instance.
         * @returns
         */
        get: /**
         * ******
         *
         * \@description
         * A getter that returns the current value of this IfActive instance.
         * @return {?}
         */
        function () {
            return this._current;
        },
        /*********
         *
         * @description
         * A setter function that updates the current state of _current for this instance of IfActive structural directive.
         * And, broadcasts the new value to all subscribers.
         *
         * @param value
         */
        set: /**
         * ******
         *
         * \@description
         * A setter function that updates the current state of _current for this instance of IfActive structural directive.
         * And, broadcasts the new value to all subscribers.
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._current !== value) {
                this._current = value;
                this._currentChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    IfActiveService.decorators = [
        { type: Injectable }
    ];
    return IfActiveService;
}());
export { IfActiveService };
if (false) {
    /**
     * *****
     * \@property _currentChange
     *
     * \@description
     * A RXJS Subject that updates and provides subscriptions to for the current current state of a component template
     * implemting the IfActive structural directive.
     *
     * @type {?}
     */
    IfActiveService.prototype._currentChange;
    /**
     * ******
     * \@property _current
     *
     * \@description
     * A property holding the current value for current/closed state of an IfActive structural directive.
     * @type {?}
     */
    IfActiveService.prototype._current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtYWN0aXZlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9jb25kaXRpb25hbC9pZi1hY3RpdmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQUUzQixhQUFhLEdBQUcsQ0FBQzs7QUFFckIsTUFBTSxLQUFPLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBUyxjQUFjLENBQUM7Ozs7QUFFdEUsTUFBTSxVQUFVLFlBQVk7SUFDMUIsT0FBTyxFQUFFLGFBQWEsQ0FBQztBQUN6QixDQUFDOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FBRztJQUNuQyxPQUFPLEVBQUUsWUFBWTtJQUNyQixVQUFVLEVBQUUsWUFBWTtDQUN6QjtBQUVEO0lBQUE7Ozs7Ozs7Ozs7UUFvQlUsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQTRDbEUsQ0FBQztJQTVCQyxzQkFBVywwQ0FBYTtRQU54Qjs7Ozs7V0FLRzs7Ozs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFVRCxzQkFBVyxvQ0FBTztRQU9sQjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO1FBdkJEOzs7Ozs7O1dBT0c7Ozs7Ozs7Ozs7O1FBQ0gsVUFBbUIsS0FBYTtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO2dCQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBckRGLFVBQVU7O0lBZ0VYLHNCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FyRFksZUFBZTs7Ozs7Ozs7Ozs7O0lBUzFCLHlDQUFnRTs7Ozs7Ozs7O0lBUWhFLG1DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmxldCBhY3RpdmVDb3VudGVyID0gMDtcblxuZXhwb3J0IGNvbnN0IElGX0FDVElWRV9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxudW1iZXI+KCdJRl9BQ1RJVkVfSUQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuRmFjdG9yeSgpIHtcbiAgcmV0dXJuICsrYWN0aXZlQ291bnRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IElGX0FDVElWRV9JRF9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogSUZfQUNUSVZFX0lELFxuICB1c2VGYWN0b3J5OiB0b2tlbkZhY3RvcnksXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5cbi8qKioqKioqKipcbiAqIEBjbGFzcyBJZkFjdGl2ZVNlcnZpY2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIGluamVjdGFibGUgc2VydmljZSB1c2VkIGJ5IElmQWN0aXZlIHN0cnVjdHVyYWwgZGlyZWN0aXZlcyBhbmQgdGhlIGNvbXBvbmVudHMgdGhhdCBpbXBsZW1lbnQgSWZBY3RpdmUgaW4gdGhlaXJcbiAqIHRlbXBsYXRlcy4gSXQgaG9sZHMgdGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBwcm92aWRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgYm90aCB0aGUgZGlyZWN0aXZlIGFuZCB0aGVcbiAqIGltcGxlbWVudGluZyBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byBpbiBvcmRlciB0byB0YWtlIGFjdGlvbiBvbiBjdXJyZW50IHZhbHVlIGNoYW5nZXMuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgSWZBY3RpdmVTZXJ2aWNlIHtcbiAgLyoqKioqKioqXG4gICAqIEBwcm9wZXJ0eSBfY3VycmVudENoYW5nZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBSWEpTIFN1YmplY3QgdGhhdCB1cGRhdGVzIGFuZCBwcm92aWRlcyBzdWJzY3JpcHRpb25zIHRvIGZvciB0aGUgY3VycmVudCBjdXJyZW50IHN0YXRlIG9mIGEgY29tcG9uZW50IHRlbXBsYXRlXG4gICAqIGltcGxlbXRpbmcgdGhlIElmQWN0aXZlIHN0cnVjdHVyYWwgZGlyZWN0aXZlLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VycmVudENoYW5nZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8qKioqKioqKipcbiAgICogQHByb3BlcnR5IF9jdXJyZW50XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIHByb3BlcnR5IGhvbGRpbmcgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIGN1cnJlbnQvY2xvc2VkIHN0YXRlIG9mIGFuIElmQWN0aXZlIHN0cnVjdHVyYWwgZGlyZWN0aXZlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VycmVudDogbnVtYmVyO1xuXG4gIC8qKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgYW4gb2JzZXJ2YWJsZSBmb3IgdGhlIF9jdXJyZW50IFN1YmplY3QuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGN1cnJlbnRDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiBfY3VycmVudCBmb3IgdGhpcyBpbnN0YW5jZSBvZiBJZkFjdGl2ZSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZS5cbiAgICogQW5kLCBicm9hZGNhc3RzIHRoZSBuZXcgdmFsdWUgdG8gYWxsIHN1YnNjcmliZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXQgY3VycmVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLl9jdXJyZW50Q2hhbmdlLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgZ2V0dGVyIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIElmQWN0aXZlIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gIH1cbn1cbiJdfQ==