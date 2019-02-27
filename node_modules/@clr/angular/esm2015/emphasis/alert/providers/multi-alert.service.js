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
export class MultiAlertService {
    constructor() {
        this.allAlerts = new QueryList();
        this._current = 0;
        /**
         * The Observable that lets other classes subscribe to changes
         */
        this._change = new Subject();
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._change.asObservable();
    }
    /**
     * @return {?}
     */
    get current() {
        return this._current;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set current(index) {
        if (index !== this._current) {
            this._current = index;
            this._change.next(index);
        }
    }
    /**
     * @return {?}
     */
    get activeAlerts() {
        return this.allAlerts.filter(alert => !alert._closed);
    }
    /**
     * @return {?}
     */
    get currentAlert() {
        return this.activeAlerts[this.current];
    }
    /**
     * @param {?} alert
     * @return {?}
     */
    set currentAlert(alert) {
        this.current = this.activeAlerts.indexOf(alert);
    }
    /**
     * @return {?}
     */
    get count() {
        return this.activeAlerts.length;
    }
    /**
     * @param {?} alerts
     * @return {?}
     */
    manage(alerts) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.allAlerts = alerts;
        this.subscription = this.allAlerts.changes.subscribe(() => {
            if (this.current >= this.allAlerts.length) {
                this.current = Math.max(0, this.allAlerts.length - 1);
            }
        });
    }
    /**
     * @return {?}
     */
    next() {
        this.current = this.current === this.activeAlerts.length - 1 ? 0 : this.current + 1;
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.activeAlerts.length === 0) {
            return;
        }
        this.current = this.current === 0 ? this.activeAlerts.length - 1 : this.current - 1;
    }
    /**
     * @return {?}
     */
    close() {
        this.previous();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
MultiAlertService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L3Byb3ZpZGVycy9tdWx0aS1hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVVLGNBQVMsR0FBd0IsSUFBSSxTQUFTLEVBQVksQ0FBQztRQUUzRCxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBS2IsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUErRDFDLENBQUM7Ozs7SUE5REMsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELElBQUksWUFBWSxDQUFDLEtBQWU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUEyQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4RCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQXZFRixVQUFVOzs7O0lBRVQsc0NBQW1FOztJQUNuRSx5Q0FBbUM7O0lBQ25DLHFDQUFxQjs7Ozs7SUFLckIsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2xyQWxlcnQgfSBmcm9tICcuLi9hbGVydCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aUFsZXJ0U2VydmljZSB7XG4gIHByaXZhdGUgYWxsQWxlcnRzOiBRdWVyeUxpc3Q8Q2xyQWxlcnQ+ID0gbmV3IFF1ZXJ5TGlzdDxDbHJBbGVydD4oKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY3VycmVudCA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHB1YmxpYyBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgY3VycmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgfVxuICBzZXQgY3VycmVudChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLl9jdXJyZW50KSB7XG4gICAgICB0aGlzLl9jdXJyZW50ID0gaW5kZXg7XG4gICAgICB0aGlzLl9jaGFuZ2UubmV4dChpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFjdGl2ZUFsZXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxBbGVydHMuZmlsdGVyKGFsZXJ0ID0+ICFhbGVydC5fY2xvc2VkKTtcbiAgfVxuXG4gIGdldCBjdXJyZW50QWxlcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQWxlcnRzW3RoaXMuY3VycmVudF07XG4gIH1cblxuICBzZXQgY3VycmVudEFsZXJ0KGFsZXJ0OiBDbHJBbGVydCkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuYWN0aXZlQWxlcnRzLmluZGV4T2YoYWxlcnQpO1xuICB9XG5cbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUFsZXJ0cy5sZW5ndGg7XG4gIH1cblxuICBtYW5hZ2UoYWxlcnRzOiBRdWVyeUxpc3Q8Q2xyQWxlcnQ+KSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmFsbEFsZXJ0cyA9IGFsZXJ0cztcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYWxsQWxlcnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgPj0gdGhpcy5hbGxBbGVydHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IE1hdGgubWF4KDAsIHRoaXMuYWxsQWxlcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPT09IHRoaXMuYWN0aXZlQWxlcnRzLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5jdXJyZW50ICsgMTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUFsZXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ID09PSAwID8gdGhpcy5hY3RpdmVBbGVydHMubGVuZ3RoIC0gMSA6IHRoaXMuY3VycmVudCAtIDE7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnByZXZpb3VzKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==