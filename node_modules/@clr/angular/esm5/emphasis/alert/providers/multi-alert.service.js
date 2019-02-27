/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
var MultiAlertService = /** @class */ (function () {
    function MultiAlertService() {
        this.allAlerts = new QueryList();
        this._current = 0;
        /**
         * The Observable that lets other classes subscribe to changes
         */
        this._change = new Subject();
    }
    Object.defineProperty(MultiAlertService.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiAlertService.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index !== this._current) {
                this._current = index;
                this._change.next(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiAlertService.prototype, "activeAlerts", {
        get: /**
         * @return {?}
         */
        function () {
            return this.allAlerts.filter(function (alert) { return !alert._closed; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiAlertService.prototype, "currentAlert", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeAlerts[this.current];
        },
        set: /**
         * @param {?} alert
         * @return {?}
         */
        function (alert) {
            this.current = this.activeAlerts.indexOf(alert);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiAlertService.prototype, "count", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeAlerts.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} alerts
     * @return {?}
     */
    MultiAlertService.prototype.manage = /**
     * @param {?} alerts
     * @return {?}
     */
    function (alerts) {
        var _this = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.allAlerts = alerts;
        this.subscription = this.allAlerts.changes.subscribe(function () {
            if (_this.current >= _this.allAlerts.length) {
                _this.current = Math.max(0, _this.allAlerts.length - 1);
            }
        });
    };
    /**
     * @return {?}
     */
    MultiAlertService.prototype.next = /**
     * @return {?}
     */
    function () {
        this.current = this.current === this.activeAlerts.length - 1 ? 0 : this.current + 1;
    };
    /**
     * @return {?}
     */
    MultiAlertService.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.activeAlerts.length === 0) {
            return;
        }
        this.current = this.current === 0 ? this.activeAlerts.length - 1 : this.current - 1;
    };
    /**
     * @return {?}
     */
    MultiAlertService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.previous();
    };
    /**
     * @return {?}
     */
    MultiAlertService.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MultiAlertService.decorators = [
        { type: Injectable }
    ];
    return MultiAlertService;
}());
export { MultiAlertService };
if (false) {
    /** @type {?} */
    MultiAlertService.prototype.allAlerts;
    /** @type {?} */
    MultiAlertService.prototype.subscription;
    /** @type {?} */
    MultiAlertService.prototype._current;
    /**
     * The Observable that lets other classes subscribe to changes
     * @type {?}
     */
    MultiAlertService.prototype._change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L3Byb3ZpZGVycy9tdWx0aS1hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0I7SUFBQTtRQUVVLGNBQVMsR0FBd0IsSUFBSSxTQUFTLEVBQVksQ0FBQztRQUUzRCxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBS2IsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUErRDFDLENBQUM7SUE5REMsc0JBQVcsc0NBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBQ0QsVUFBWSxLQUFhO1lBQ3ZCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUM7OztPQU5BO0lBUUQsc0JBQUksMkNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBRUQsVUFBaUIsS0FBZTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLE1BQTJCO1FBQWxDLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNuRCxJQUFJLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBdkVGLFVBQVU7O0lBd0VYLHdCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0F2RVksaUJBQWlCOzs7SUFDNUIsc0NBQW1FOztJQUNuRSx5Q0FBbUM7O0lBQ25DLHFDQUFxQjs7Ozs7SUFLckIsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2xyQWxlcnQgfSBmcm9tICcuLi9hbGVydCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUFsZXJ0U2VydmljZSB7XG4gIHByaXZhdGUgYWxsQWxlcnRzOiBRdWVyeUxpc3Q8Q2xyQWxlcnQ+ID0gbmV3IFF1ZXJ5TGlzdDxDbHJBbGVydD4oKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudCA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHB1YmxpYyBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgfVxuICBzZXQgY3VycmVudChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLl9jdXJyZW50KSB7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gaW5kZXg7XG4gICAgICB0aGlzLl9jaGFuZ2UubmV4dChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZUFsZXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxBbGVydHMuZmlsdGVyKGFsZXJ0ID0+ICFhbGVydC5fY2xvc2VkKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50QWxlcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQWxlcnRzW3RoaXMuY3VycmVudF07XG4gIH1cblxuICBzZXQgY3VycmVudEFsZXJ0KGFsZXJ0OiBDbHJBbGVydCkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuYWN0aXZlQWxlcnRzLmluZGV4T2YoYWxlcnQpO1xuICB9XG5cbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUFsZXJ0cy5sZW5ndGg7XG4gIH1cblxuICBtYW5hZ2UoYWxlcnRzOiBRdWVyeUxpc3Q8Q2xyQWxlcnQ+KSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmFsbEFsZXJ0cyA9IGFsZXJ0cztcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYWxsQWxlcnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5hbGxBbGVydHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IE1hdGgubWF4KDAsIHRoaXMuYWxsQWxlcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPT09IHRoaXMuYWN0aXZlQWxlcnRzLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5jdXJyZW50ICsgMTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUFsZXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ID09PSAwID8gdGhpcy5hY3RpdmVBbGVydHMubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudCAtIDE7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByZXZpb3VzKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==