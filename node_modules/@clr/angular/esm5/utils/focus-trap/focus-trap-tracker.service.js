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
import * as i0 from "@angular/core";
var FocusTrapTracker = /** @class */ (function () {
    function FocusTrapTracker() {
        this._previousFocusTraps = [];
    }
    Object.defineProperty(FocusTrapTracker.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._previousFocusTraps.push(this._current);
            this._current = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FocusTrapTracker.prototype, "nbFocusTrappers", {
        get: /**
         * @return {?}
         */
        function () {
            return this._previousFocusTraps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FocusTrapTracker.prototype.activatePreviousTrapper = /**
     * @return {?}
     */
    function () {
        this._current = this._previousFocusTraps.pop();
    };
    FocusTrapTracker.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FocusTrapTracker.ngInjectableDef = i0.defineInjectable({ factory: function FocusTrapTracker_Factory() { return new FocusTrapTracker(); }, token: FocusTrapTracker, providedIn: "root" });
    return FocusTrapTracker;
}());
export { FocusTrapTracker };
if (false) {
    /** @type {?} */
    FocusTrapTracker.prototype._previousFocusTraps;
    /** @type {?} */
    FocusTrapTracker.prototype._current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC10cmFja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9mb2N1cy10cmFwL2ZvY3VzLXRyYXAtdHJhY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBQUE7UUFFVSx3QkFBbUIsR0FBeUIsRUFBRSxDQUFDO0tBbUJ4RDtJQWhCQyxzQkFBSSxxQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBWSxLQUF5QjtZQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FMQTtJQU9ELHNCQUFJLDZDQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOzs7O0lBRUQsa0RBQXVCOzs7SUFBdkI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRCxDQUFDOztnQkFwQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzJCQVJsQztDQTZCQyxBQXJCRCxJQXFCQztTQXBCWSxnQkFBZ0I7OztJQUMzQiwrQ0FBdUQ7O0lBQ3ZELG9DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvY3VzVHJhcERpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMtdHJhcC5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcFRyYWNrZXIge1xuICBwcml2YXRlIF9wcmV2aW91c0ZvY3VzVHJhcHM6IEZvY3VzVHJhcERpcmVjdGl2ZVtdID0gW107XG4gIHByaXZhdGUgX2N1cnJlbnQ6IEZvY3VzVHJhcERpcmVjdGl2ZTtcblxuICBnZXQgY3VycmVudCgpOiBGb2N1c1RyYXBEaXJlY3RpdmUge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICB9XG5cbiAgc2V0IGN1cnJlbnQodmFsdWU6IEZvY3VzVHJhcERpcmVjdGl2ZSkge1xuICAgIHRoaXMuX3ByZXZpb3VzRm9jdXNUcmFwcy5wdXNoKHRoaXMuX2N1cnJlbnQpO1xuICAgIHRoaXMuX2N1cnJlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuYkZvY3VzVHJhcHBlcnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcHJldmlvdXNGb2N1c1RyYXBzLmxlbmd0aDtcbiAgfVxuXG4gIGFjdGl2YXRlUHJldmlvdXNUcmFwcGVyKCkge1xuICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9wcmV2aW91c0ZvY3VzVHJhcHMucG9wKCk7XG4gIH1cbn1cbiJdfQ==