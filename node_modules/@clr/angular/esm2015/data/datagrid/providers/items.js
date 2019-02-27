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
import { FiltersProvider } from './filters';
import { Page } from './page';
import { Sort } from './sort';
/**
 * @template T
 */
export class Items {
    /**
     * @param {?} _filters
     * @param {?} _sort
     * @param {?} _page
     */
    constructor(_filters, _sort, _page) {
        this._filters = _filters;
        this._sort = _sort;
        this._page = _page;
        /**
         * Indicates if the data is currently loading
         */
        this.loading = false;
        // TODO: Verify that trackBy is registered for the *ngFor case too
        /**
         * Tracking function to identify objects. Default is reference equality.
         */
        this.trackBy = (index, item) => item;
        /**
         * Whether we should use smart items for this datagrid or let the user handle
         * everything.
         */
        this._smart = false;
        /**
         * List of items currently displayed
         */
        this._displayed = [];
        /**
         * The Observable that lets other classes subscribe to items changes
         */
        this._change = new Subject();
        this._allChanges = new Subject();
    }
    /**
     * Cleans up our subscriptions to other providers
     * @return {?}
     */
    destroy() {
        if (this._filtersSub) {
            this._filtersSub.unsubscribe();
        }
        if (this._sortSub) {
            this._sortSub.unsubscribe();
        }
        if (this._pageSub) {
            this._pageSub.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    get smart() {
        return this._smart;
    }
    /**
     * @return {?}
     */
    smartenUp() {
        this._smart = true;
        /*
             * These observers trigger a chain of function: filter -> sort -> paginate
             * An observer up the chain re-triggers all the operations that follow it.
             */
        this._filtersSub = this._filters.change.subscribe(() => this._filterItems());
        this._sortSub = this._sort.change.subscribe(() => {
            // Special case, if the datagrid went from sorted to unsorted, we have to re-filter
            // to get the original order back
            if (!this._sort.comparator) {
                this._filterItems();
            }
            else {
                this._sortItems();
            }
        });
        this._pageSub = this._page.change.subscribe(() => this._changePage());
    }
    /**
     * @return {?}
     */
    get all() {
        return this._all;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set all(items) {
        this._all = items;
        this.emitAllChanges(items);
        if (this.smart) {
            this._filterItems();
        }
        else {
            this._displayed = items;
            this.emitChange();
        }
    }
    /**
     * Manually recompute the list of displayed items
     * @return {?}
     */
    refresh() {
        if (this.smart) {
            this._filterItems();
        }
    }
    /**
     * @return {?}
     */
    get displayed() {
        // Ideally we could return an immutable array, but we don't have it in Clarity yet.
        return this._displayed;
    }
    /**
     * @return {?}
     */
    emitChange() {
        this._change.next(this.displayed);
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    /**
     * @return {?}
     */
    get change() {
        return this._change.asObservable();
    }
    /**
     * @param {?} items
     * @return {?}
     */
    emitAllChanges(items) {
        this._allChanges.next(items);
    }
    /**
     * @return {?}
     */
    get allChanges() {
        return this._allChanges.asObservable();
    }
    /**
     * Checks if we don't have data to process yet, to abort early operations
     * @return {?}
     */
    get uninitialized() {
        return !this._all;
    }
    /**
     * FiltersProvider items from the raw list
     * @return {?}
     */
    _filterItems() {
        if (this.uninitialized) {
            return;
        }
        if (this._filters.hasActiveFilters()) {
            this._filtered = this._all.filter(item => this._filters.accepts(item));
        }
        else {
            // Work on a shallow copy of the array, to not modify the user's model
            this._filtered = this._all.slice();
        }
        this._page.totalItems = this._filtered.length;
        this._sortItems();
    }
    /**
     * Sorts items in the filtered list
     * @return {?}
     */
    _sortItems() {
        if (this.uninitialized) {
            return;
        }
        if (this._sort.comparator) {
            this._filtered.sort((a, b) => this._sort.compare(a, b));
        }
        this._changePage();
    }
    /**
     * Extracts the current page from the sorted list
     * @return {?}
     */
    _changePage() {
        if (this.uninitialized) {
            return;
        }
        if (this._page.size > 0) {
            this._displayed = this._filtered.slice(this._page.firstItem, this._page.lastItem + 1);
        }
        else {
            this._displayed = this._filtered;
        }
        this.emitChange();
    }
}
Items.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Items.ctorParameters = () => [
    { type: FiltersProvider },
    { type: Sort },
    { type: Page }
];
if (false) {
    /**
     * Indicates if the data is currently loading
     * @type {?}
     */
    Items.prototype.loading;
    /**
     * Tracking function to identify objects. Default is reference equality.
     * @type {?}
     */
    Items.prototype.trackBy;
    /**
     * Subscriptions to the other providers changes.
     * @type {?}
     */
    Items.prototype._filtersSub;
    /** @type {?} */
    Items.prototype._sortSub;
    /** @type {?} */
    Items.prototype._pageSub;
    /**
     * Whether we should use smart items for this datagrid or let the user handle
     * everything.
     * @type {?}
     */
    Items.prototype._smart;
    /**
     * List of all items in the datagrid
     * @type {?}
     */
    Items.prototype._all;
    /**
     * Internal temporary step, which we preserve to avoid re-filtering or re-sorting if not necessary
     * @type {?}
     */
    Items.prototype._filtered;
    /**
     * List of items currently displayed
     * @type {?}
     */
    Items.prototype._displayed;
    /**
     * The Observable that lets other classes subscribe to items changes
     * @type {?}
     */
    Items.prototype._change;
    /** @type {?} */
    Items.prototype._allChanges;
    /** @type {?} */
    Items.prototype._filters;
    /** @type {?} */
    Items.prototype._sort;
    /** @type {?} */
    Items.prototype._page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9pdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRzlCLE1BQU0sT0FBTyxLQUFLOzs7Ozs7SUFDaEIsWUFBb0IsUUFBNEIsRUFBVSxLQUFjLEVBQVUsS0FBVztRQUF6RSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNOzs7O1FBS3RGLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7O1FBTWhCLFlBQU8sR0FBdUIsQ0FBQyxLQUFhLEVBQUUsSUFBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7Ozs7O1FBMkI5RCxXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBMERmLGVBQVUsR0FBUSxFQUFFLENBQUM7Ozs7UUFTckIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFTN0IsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBbEh1RCxDQUFDOzs7OztJQXNCMUYsT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7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OztJQUt0RSw0QkFBa0M7O0lBQ2xDLHlCQUErQjs7SUFDL0IseUJBQStCOzs7Ozs7SUFvQi9CLHVCQUF1Qjs7Ozs7SUEwQnZCLHFCQUFrQjs7Ozs7SUEyQmxCLDBCQUF1Qjs7Ozs7SUFLdkIsMkJBQTZCOzs7OztJQVM3Qix3QkFBcUM7O0lBU3JDLDRCQUF5Qzs7SUFsSDdCLHlCQUFvQzs7SUFBRSxzQkFBc0I7O0lBQUUsc0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyIH0gZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gJy4vc29ydCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtczxUID0gYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcnNQcm92aWRlcjxUPiwgcHJpdmF0ZSBfc29ydDogU29ydDxUPiwgcHJpdmF0ZSBfcGFnZTogUGFnZSkge31cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBkYXRhIGlzIGN1cnJlbnRseSBsb2FkaW5nXG4gICAqL1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8vIFRPRE86IFZlcmlmeSB0aGF0IHRyYWNrQnkgaXMgcmVnaXN0ZXJlZCBmb3IgdGhlICpuZ0ZvciBjYXNlIHRvb1xuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdG8gaWRlbnRpZnkgb2JqZWN0cy4gRGVmYXVsdCBpcyByZWZlcmVuY2UgZXF1YWxpdHkuXG4gICAqL1xuICBwdWJsaWMgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IFQpID0+IGl0ZW07XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbnMgdG8gdGhlIG90aGVyIHByb3ZpZGVycyBjaGFuZ2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZmlsdGVyc1N1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zb3J0U3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhZ2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIENsZWFucyB1cCBvdXIgc3Vic2NyaXB0aW9ucyB0byBvdGhlciBwcm92aWRlcnNcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJzU3ViKSB7XG4gICAgICB0aGlzLl9maWx0ZXJzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3J0U3ViKSB7XG4gICAgICB0aGlzLl9zb3J0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYWdlU3ViKSB7XG4gICAgICB0aGlzLl9wYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBzbWFydCBpdGVtcyBmb3IgdGhpcyBkYXRhZ3JpZCBvciBsZXQgdGhlIHVzZXIgaGFuZGxlXG4gICAqIGV2ZXJ5dGhpbmcuXG4gICAqL1xuICBwcml2YXRlIF9zbWFydCA9IGZhbHNlO1xuICBwdWJsaWMgZ2V0IHNtYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zbWFydDtcbiAgfVxuICBwdWJsaWMgc21hcnRlblVwKCkge1xuICAgIHRoaXMuX3NtYXJ0ID0gdHJ1ZTtcbiAgICAvKlxuICAgICAgICAgKiBUaGVzZSBvYnNlcnZlcnMgdHJpZ2dlciBhIGNoYWluIG9mIGZ1bmN0aW9uOiBmaWx0ZXIgLT4gc29ydCAtPiBwYWdpbmF0ZVxuICAgICAgICAgKiBBbiBvYnNlcnZlciB1cCB0aGUgY2hhaW4gcmUtdHJpZ2dlcnMgYWxsIHRoZSBvcGVyYXRpb25zIHRoYXQgZm9sbG93IGl0LlxuICAgICAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJzU3ViID0gdGhpcy5fZmlsdGVycy5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2ZpbHRlckl0ZW1zKCkpO1xuICAgIHRoaXMuX3NvcnRTdWIgPSB0aGlzLl9zb3J0LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLCBpZiB0aGUgZGF0YWdyaWQgd2VudCBmcm9tIHNvcnRlZCB0byB1bnNvcnRlZCwgd2UgaGF2ZSB0byByZS1maWx0ZXJcbiAgICAgIC8vIHRvIGdldCB0aGUgb3JpZ2luYWwgb3JkZXIgYmFja1xuICAgICAgaWYgKCF0aGlzLl9zb3J0LmNvbXBhcmF0b3IpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NvcnRJdGVtcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3BhZ2VTdWIgPSB0aGlzLl9wYWdlLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlUGFnZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBpdGVtcyBpbiB0aGUgZGF0YWdyaWRcbiAgICovXG4gIHByaXZhdGUgX2FsbDogVFtdO1xuICBwdWJsaWMgZ2V0IGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsKGl0ZW1zOiBUW10pIHtcbiAgICB0aGlzLl9hbGwgPSBpdGVtcztcbiAgICB0aGlzLmVtaXRBbGxDaGFuZ2VzKGl0ZW1zKTtcbiAgICBpZiAodGhpcy5zbWFydCkge1xuICAgICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGlzcGxheWVkID0gaXRlbXM7XG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgcmVjb21wdXRlIHRoZSBsaXN0IG9mIGRpc3BsYXllZCBpdGVtc1xuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuc21hcnQpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckl0ZW1zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHRlbXBvcmFyeSBzdGVwLCB3aGljaCB3ZSBwcmVzZXJ2ZSB0byBhdm9pZCByZS1maWx0ZXJpbmcgb3IgcmUtc29ydGluZyBpZiBub3QgbmVjZXNzYXJ5XG4gICAqL1xuICBwcml2YXRlIF9maWx0ZXJlZDogVFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGl0ZW1zIGN1cnJlbnRseSBkaXNwbGF5ZWRcbiAgICovXG4gIHByaXZhdGUgX2Rpc3BsYXllZDogVFtdID0gW107XG4gIHB1YmxpYyBnZXQgZGlzcGxheWVkKCk6IFRbXSB7XG4gICAgLy8gSWRlYWxseSB3ZSBjb3VsZCByZXR1cm4gYW4gaW1tdXRhYmxlIGFycmF5LCBidXQgd2UgZG9uJ3QgaGF2ZSBpdCBpbiBDbGFyaXR5IHlldC5cbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheWVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBpdGVtcyBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgU3ViamVjdDxUW10+KCk7XG4gIHByaXZhdGUgZW1pdENoYW5nZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0aGlzLmRpc3BsYXllZCk7XG4gIH1cbiAgLy8gV2UgZG8gbm90IHdhbnQgdG8gZXhwb3NlIHRoZSBTdWJqZWN0IGl0c2VsZiwgYnV0IHRoZSBPYnNlcnZhYmxlIHdoaWNoIGlzIHJlYWQtb25seVxuICBwdWJsaWMgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9hbGxDaGFuZ2VzID0gbmV3IFN1YmplY3Q8VFtdPigpO1xuICBwcml2YXRlIGVtaXRBbGxDaGFuZ2VzKGl0ZW1zOiBUW10pOiB2b2lkIHtcbiAgICB0aGlzLl9hbGxDaGFuZ2VzLm5leHQoaXRlbXMpO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxDaGFuZ2VzKCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbENoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHdlIGRvbid0IGhhdmUgZGF0YSB0byBwcm9jZXNzIHlldCwgdG8gYWJvcnQgZWFybHkgb3BlcmF0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgdW5pbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzUHJvdmlkZXIgaXRlbXMgZnJvbSB0aGUgcmF3IGxpc3RcbiAgICovXG4gIHByaXZhdGUgX2ZpbHRlckl0ZW1zKCkge1xuICAgIGlmICh0aGlzLnVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbHRlcnMuaGFzQWN0aXZlRmlsdGVycygpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJlZCA9IHRoaXMuX2FsbC5maWx0ZXIoaXRlbSA9PiB0aGlzLl9maWx0ZXJzLmFjY2VwdHMoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXb3JrIG9uIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBhcnJheSwgdG8gbm90IG1vZGlmeSB0aGUgdXNlcidzIG1vZGVsXG4gICAgICB0aGlzLl9maWx0ZXJlZCA9IHRoaXMuX2FsbC5zbGljZSgpO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlLnRvdGFsSXRlbXMgPSB0aGlzLl9maWx0ZXJlZC5sZW5ndGg7XG4gICAgdGhpcy5fc29ydEl0ZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgaXRlbXMgaW4gdGhlIGZpbHRlcmVkIGxpc3RcbiAgICovXG4gIHByaXZhdGUgX3NvcnRJdGVtcygpIHtcbiAgICBpZiAodGhpcy51bmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3J0LmNvbXBhcmF0b3IpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHRoaXMuX3NvcnQuY29tcGFyZShhLCBiKSk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZVBhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY3VycmVudCBwYWdlIGZyb20gdGhlIHNvcnRlZCBsaXN0XG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VQYWdlKCkge1xuICAgIGlmICh0aGlzLnVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhZ2Uuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZCA9IHRoaXMuX2ZpbHRlcmVkLnNsaWNlKHRoaXMuX3BhZ2UuZmlyc3RJdGVtLCB0aGlzLl9wYWdlLmxhc3RJdGVtICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZCA9IHRoaXMuX2ZpbHRlcmVkO1xuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxufVxuIl19