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
/*
 * This provider implements some form of synchronous debouncing through a lock pattern
 * to avoid emitting multiple state changes for a single user action.
 */
var StateDebouncer = /** @class */ (function () {
    function StateDebouncer() {
        /**
         * The Observable that lets other classes subscribe to global state changes
         */
        this._change = new Subject();
        /*
             * This is the lock, to only emit once all the changes have finished processing
             */
        this.nbChanges = 0;
    }
    Object.defineProperty(StateDebouncer.prototype, "change", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: 
        // We do not want to expose the Subject itself, but the Observable which is read-only
        /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StateDebouncer.prototype.changeStart = /**
     * @return {?}
     */
    function () {
        this.nbChanges++;
    };
    /**
     * @return {?}
     */
    StateDebouncer.prototype.changeDone = /**
     * @return {?}
     */
    function () {
        if (--this.nbChanges === 0) {
            this._change.next();
        }
    };
    StateDebouncer.decorators = [
        { type: Injectable }
    ];
    return StateDebouncer;
}());
export { StateDebouncer };
if (false) {
    /**
     * The Observable that lets other classes subscribe to global state changes
     * @type {?}
     */
    StateDebouncer.prototype._change;
    /** @type {?} */
    StateDebouncer.prototype.nbChanges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtZGVib3VuY2VyLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9wcm92aWRlcnMvc3RhdGUtZGVib3VuY2VyLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFNL0I7SUFBQTs7OztRQUtVLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBUzlCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFXeEIsQ0FBQztJQWxCQyxzQkFBVyxrQ0FBTTtRQURqQixxRkFBcUY7Ozs7OztRQUNyRjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7OztJQU9NLG9DQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLG1DQUFVOzs7SUFBakI7UUFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7O2dCQXhCRixVQUFVOztJQXlCWCxxQkFBQztDQUFBLEFBekJELElBeUJDO1NBeEJZLGNBQWM7Ozs7OztJQUl6QixpQ0FBc0M7O0lBU3RDLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKlxuICogVGhpcyBwcm92aWRlciBpbXBsZW1lbnRzIHNvbWUgZm9ybSBvZiBzeW5jaHJvbm91cyBkZWJvdW5jaW5nIHRocm91Z2ggYSBsb2NrIHBhdHRlcm5cbiAqIHRvIGF2b2lkIGVtaXR0aW5nIG11bHRpcGxlIHN0YXRlIGNoYW5nZXMgZm9yIGEgc2luZ2xlIHVzZXIgYWN0aW9uLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVEZWJvdW5jZXIge1xuICAvKipcbiAgICogVGhlIE9ic2VydmFibGUgdGhhdCBsZXRzIG90aGVyIGNsYXNzZXMgc3Vic2NyaWJlIHRvIGdsb2JhbCBzdGF0ZSBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvLyBXZSBkbyBub3Qgd2FudCB0byBleHBvc2UgdGhlIFN1YmplY3QgaXRzZWxmLCBidXQgdGhlIE9ic2VydmFibGUgd2hpY2ggaXMgcmVhZC1vbmx5XG4gIHB1YmxpYyBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKlxuICAgICAqIFRoaXMgaXMgdGhlIGxvY2ssIHRvIG9ubHkgZW1pdCBvbmNlIGFsbCB0aGUgY2hhbmdlcyBoYXZlIGZpbmlzaGVkIHByb2Nlc3NpbmdcbiAgICAgKi9cbiAgcHJpdmF0ZSBuYkNoYW5nZXMgPSAwO1xuXG4gIHB1YmxpYyBjaGFuZ2VTdGFydCgpIHtcbiAgICB0aGlzLm5iQ2hhbmdlcysrO1xuICB9XG5cbiAgcHVibGljIGNoYW5nZURvbmUoKSB7XG4gICAgaWYgKC0tdGhpcy5uYkNoYW5nZXMgPT09IDApIHtcbiAgICAgIHRoaXMuX2NoYW5nZS5uZXh0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=