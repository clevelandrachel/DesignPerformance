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
import { BehaviorSubject, Subject } from 'rxjs';
import { ClrLoadingState } from '../../loading/loading';
var Expand = /** @class */ (function () {
    function Expand() {
        this.expandable = 0;
        // private _replace: boolean = false;
        this._replace = new BehaviorSubject(false);
        this._loading = false;
        this._expanded = false;
        // TODO: Move this to the datagrid RowExpand.
        // I spent some time doing this but ran into a couple of issues
        // Will take care of this later.
        this._animate = new Subject();
        this._expandChange = new Subject();
    }
    Object.defineProperty(Expand.prototype, "replace", {
        get: /**
         * @return {?}
         */
        function () {
            return this._replace.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} replaceValue
     * @return {?}
     */
    Expand.prototype.setReplace = /**
     * @param {?} replaceValue
     * @return {?}
     */
    function (replaceValue) {
        this._replace.next(replaceValue);
    };
    Object.defineProperty(Expand.prototype, "loading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = !!value;
            if (value !== this._loading) {
                this._loading = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expand.prototype, "expanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = !!value;
            if (value !== this._expanded) {
                this._expanded = value;
                this._animate.next();
                this._expandChange.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Expand.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.expanded = !this._expanded;
    };
    Object.defineProperty(Expand.prototype, "animate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animate.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Expand.prototype, "expandChange", {
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
     * @param {?} state
     * @return {?}
     */
    Expand.prototype.loadingStateChange = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        switch (state) {
            case ClrLoadingState.LOADING:
                this.loading = true;
                break;
            default:
                this.loading = false;
                this._animate.next();
                break;
        }
    };
    Expand.decorators = [
        { type: Injectable }
    ];
    return Expand;
}());
export { Expand };
if (false) {
    /** @type {?} */
    Expand.prototype.expandable;
    /** @type {?} */
    Expand.prototype._replace;
    /** @type {?} */
    Expand.prototype._loading;
    /** @type {?} */
    Expand.prototype._expanded;
    /** @type {?} */
    Expand.prototype._animate;
    /** @type {?} */
    Expand.prototype._expandChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZXhwYW5kL3Byb3ZpZGVycy9leHBhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQ7SUFBQTtRQUVTLGVBQVUsR0FBVyxDQUFDLENBQUM7O1FBR3RCLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFRaEUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVkxQixjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBcUIzQixhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFLcEQsa0JBQWEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQWdCbkUsQ0FBQztJQTdEQyxzQkFBVywyQkFBTzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7Ozs7SUFDRCwyQkFBVTs7OztJQUFWLFVBQVcsWUFBcUI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELHNCQUFJLDJCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFZLEtBQWM7WUFDeEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FQQTtJQVVELHNCQUFJLDRCQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFhLEtBQWM7WUFDekIsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQzs7O09BVEE7Ozs7SUFXTSx1QkFBTTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBTUQsc0JBQVcsMkJBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxnQ0FBWTs7OztRQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxtQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBc0I7UUFDdkMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLGVBQWUsQ0FBQyxPQUFPO2dCQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7SUFDSCxDQUFDOztnQkFsRUYsVUFBVTs7SUFtRVgsYUFBQztDQUFBLEFBbkVELElBbUVDO1NBbEVZLE1BQU07OztJQUNqQiw0QkFBOEI7O0lBRzlCLDBCQUF3RTs7SUFReEUsMEJBQWtDOztJQVlsQywyQkFBbUM7O0lBcUJuQywwQkFBNEQ7O0lBSzVELCtCQUFpRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2FkaW5nTGlzdGVuZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9sb2FkaW5nL2xvYWRpbmctbGlzdGVuZXInO1xuaW1wb3J0IHsgQ2xyTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi4vLi4vbG9hZGluZy9sb2FkaW5nJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4cGFuZCBpbXBsZW1lbnRzIExvYWRpbmdMaXN0ZW5lciB7XG4gIHB1YmxpYyBleHBhbmRhYmxlOiBudW1iZXIgPSAwO1xuXG4gIC8vIHByaXZhdGUgX3JlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVwbGFjZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHB1YmxpYyBnZXQgcmVwbGFjZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVwbGFjZS5hc09ic2VydmFibGUoKTtcbiAgfVxuICBzZXRSZXBsYWNlKHJlcGxhY2VWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcGxhY2UubmV4dChyZXBsYWNlVmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIHNldCBsb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWQ7XG4gIH1cblxuICBzZXQgZXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9leHBhbmRlZCkge1xuICAgICAgdGhpcy5fZXhwYW5kZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2FuaW1hdGUubmV4dCgpO1xuICAgICAgdGhpcy5fZXhwYW5kQ2hhbmdlLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLl9leHBhbmRlZDtcbiAgfVxuXG4gIC8vIFRPRE86IE1vdmUgdGhpcyB0byB0aGUgZGF0YWdyaWQgUm93RXhwYW5kLlxuICAvLyBJIHNwZW50IHNvbWUgdGltZSBkb2luZyB0aGlzIGJ1dCByYW4gaW50byBhIGNvdXBsZSBvZiBpc3N1ZXNcbiAgLy8gV2lsbCB0YWtlIGNhcmUgb2YgdGhpcyBsYXRlci5cbiAgcHJpdmF0ZSBfYW5pbWF0ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBnZXQgYW5pbWF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4cGFuZENoYW5nZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHB1YmxpYyBnZXQgZXhwYW5kQ2hhbmdlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmRDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBsb2FkaW5nU3RhdGVDaGFuZ2Uoc3RhdGU6IENsckxvYWRpbmdTdGF0ZSk6IHZvaWQge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgQ2xyTG9hZGluZ1N0YXRlLkxPQURJTkc6XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FuaW1hdGUubmV4dCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==