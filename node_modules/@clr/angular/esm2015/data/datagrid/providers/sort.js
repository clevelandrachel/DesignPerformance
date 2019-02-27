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
import { StateDebouncer } from './state-debouncer.provider';
/**
 * @template T
 */
export class Sort {
    /**
     * @param {?} stateDebouncer
     */
    constructor(stateDebouncer) {
        this.stateDebouncer = stateDebouncer;
        /**
         * Ascending order if false, descending if true
         */
        this._reverse = false;
        /**
         * The Observable that lets other classes subscribe to sort changes
         */
        this._change = new Subject();
    }
    /**
     * @return {?}
     */
    get comparator() {
        return this._comparator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set comparator(value) {
        this.stateDebouncer.changeStart();
        this._comparator = value;
        this.emitChange();
        this.stateDebouncer.changeDone();
    }
    /**
     * @return {?}
     */
    get reverse() {
        return this._reverse;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set reverse(value) {
        this.stateDebouncer.changeStart();
        this._reverse = value;
        this.emitChange();
        this.stateDebouncer.changeDone();
    }
    /**
     * @return {?}
     */
    emitChange() {
        this._change.next(this);
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    /**
     * @return {?}
     */
    get change() {
        return this._change.asObservable();
    }
    /**
     * Sets a comparator as the current one, or toggles reverse if the comparator is already used. The
     * optional forceReverse input parameter allows to override that toggling behavior by sorting in
     * reverse order if `true`.
     *
     * \@memberof Sort
     * @param {?} sortBy
     * @param {?=} forceReverse
     * @return {?}
     */
    toggle(sortBy, forceReverse) {
        this.stateDebouncer.changeStart();
        // We modify private properties directly, to batch the change event
        if (this.comparator === sortBy) {
            this._reverse = typeof forceReverse !== 'undefined' ? forceReverse || !this._reverse : !this._reverse;
        }
        else {
            this._comparator = sortBy;
            this._reverse = typeof forceReverse !== 'undefined' ? forceReverse : false;
        }
        this.emitChange();
        this.stateDebouncer.changeDone();
    }
    /**
     * Clears the current sorting order
     * @return {?}
     */
    clear() {
        this.comparator = null;
    }
    /**
     * Compares two objects according to the current comparator
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compare(a, b) {
        return (this.reverse ? -1 : 1) * this.comparator.compare(a, b);
    }
}
Sort.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Sort.ctorParameters = () => [
    { type: StateDebouncer }
];
if (false) {
    /**
     * Currently active comparator
     * @type {?}
     */
    Sort.prototype._comparator;
    /**
     * Ascending order if false, descending if true
     * @type {?}
     */
    Sort.prototype._reverse;
    /**
     * The Observable that lets other classes subscribe to sort changes
     * @type {?}
     */
    Sort.prototype._change;
    /** @type {?} */
    Sort.prototype.stateDebouncer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL3NvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUc1RCxNQUFNLE9BQU8sSUFBSTs7OztJQUNmLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjs7OztRQW1CMUMsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQWMxQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQWpDWSxDQUFDOzs7O0lBTXRELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUF3QztRQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFNRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFNTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7Ozs7O0lBU00sTUFBTSxDQUFDLE1BQXlDLEVBQUUsWUFBc0I7UUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxtRUFBbUU7UUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZHO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUtNLEtBQUs7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBS00sT0FBTyxDQUFDLENBQUksRUFBRSxDQUFJO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OztZQTVFRixVQUFVOzs7O1lBRkYsY0FBYzs7Ozs7OztJQVNyQiwyQkFBdUQ7Ozs7O0lBY3ZELHdCQUFrQzs7Ozs7SUFjbEMsdUJBQXlDOztJQWpDN0IsOEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbXBhcmF0b3JJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbXBhcmF0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0YXRlRGVib3VuY2VyIH0gZnJvbSAnLi9zdGF0ZS1kZWJvdW5jZXIucHJvdmlkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29ydDxUID0gYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdGVEZWJvdW5jZXI6IFN0YXRlRGVib3VuY2VyKSB7fVxuXG4gIC8qKlxuICAgKiBDdXJyZW50bHkgYWN0aXZlIGNvbXBhcmF0b3JcbiAgICovXG4gIHByaXZhdGUgX2NvbXBhcmF0b3I6IENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZTxUPjtcbiAgcHVibGljIGdldCBjb21wYXJhdG9yKCk6IENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmF0b3I7XG4gIH1cbiAgcHVibGljIHNldCBjb21wYXJhdG9yKHZhbHVlOiBDbHJEYXRhZ3JpZENvbXBhcmF0b3JJbnRlcmZhY2U8VD4pIHtcbiAgICB0aGlzLnN0YXRlRGVib3VuY2VyLmNoYW5nZVN0YXJ0KCk7XG4gICAgdGhpcy5fY29tcGFyYXRvciA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIHRoaXMuc3RhdGVEZWJvdW5jZXIuY2hhbmdlRG9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzY2VuZGluZyBvcmRlciBpZiBmYWxzZSwgZGVzY2VuZGluZyBpZiB0cnVlXG4gICAqL1xuICBwcml2YXRlIF9yZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgcmV2ZXJzZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZTtcbiAgfVxuICBwdWJsaWMgc2V0IHJldmVyc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN0YXRlRGVib3VuY2VyLmNoYW5nZVN0YXJ0KCk7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIHRoaXMuc3RhdGVEZWJvdW5jZXIuY2hhbmdlRG9uZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBzb3J0IGNoYW5nZXNcbiAgICovXG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBTdWJqZWN0PFNvcnQ8VD4+KCk7XG4gIHByaXZhdGUgZW1pdENoYW5nZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0aGlzKTtcbiAgfVxuICAvLyBXZSBkbyBub3Qgd2FudCB0byBleHBvc2UgdGhlIFN1YmplY3QgaXRzZWxmLCBidXQgdGhlIE9ic2VydmFibGUgd2hpY2ggaXMgcmVhZC1vbmx5XG4gIHB1YmxpYyBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8U29ydDxUPj4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGNvbXBhcmF0b3IgYXMgdGhlIGN1cnJlbnQgb25lLCBvciB0b2dnbGVzIHJldmVyc2UgaWYgdGhlIGNvbXBhcmF0b3IgaXMgYWxyZWFkeSB1c2VkLiBUaGVcbiAgICogb3B0aW9uYWwgZm9yY2VSZXZlcnNlIGlucHV0IHBhcmFtZXRlciBhbGxvd3MgdG8gb3ZlcnJpZGUgdGhhdCB0b2dnbGluZyBiZWhhdmlvciBieSBzb3J0aW5nIGluXG4gICAqIHJldmVyc2Ugb3JkZXIgaWYgYHRydWVgLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgU29ydFxuICAgKi9cbiAgcHVibGljIHRvZ2dsZShzb3J0Qnk6IENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZTxUPiwgZm9yY2VSZXZlcnNlPzogYm9vbGVhbikge1xuICAgIHRoaXMuc3RhdGVEZWJvdW5jZXIuY2hhbmdlU3RhcnQoKTtcbiAgICAvLyBXZSBtb2RpZnkgcHJpdmF0ZSBwcm9wZXJ0aWVzIGRpcmVjdGx5LCB0byBiYXRjaCB0aGUgY2hhbmdlIGV2ZW50XG4gICAgaWYgKHRoaXMuY29tcGFyYXRvciA9PT0gc29ydEJ5KSB7XG4gICAgICB0aGlzLl9yZXZlcnNlID0gdHlwZW9mIGZvcmNlUmV2ZXJzZSAhPT0gJ3VuZGVmaW5lZCcgPyBmb3JjZVJldmVyc2UgfHwgIXRoaXMuX3JldmVyc2UgOiAhdGhpcy5fcmV2ZXJzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcGFyYXRvciA9IHNvcnRCeTtcbiAgICAgIHRoaXMuX3JldmVyc2UgPSB0eXBlb2YgZm9yY2VSZXZlcnNlICE9PSAndW5kZWZpbmVkJyA/IGZvcmNlUmV2ZXJzZSA6IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB0aGlzLnN0YXRlRGVib3VuY2VyLmNoYW5nZURvbmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc29ydGluZyBvcmRlclxuICAgKi9cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuY29tcGFyYXRvciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZXMgdHdvIG9iamVjdHMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IGNvbXBhcmF0b3JcbiAgICovXG4gIHB1YmxpYyBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5yZXZlcnNlID8gLTEgOiAxKSAqIHRoaXMuY29tcGFyYXRvci5jb21wYXJlKGEsIGIpO1xuICB9XG59XG4iXX0=