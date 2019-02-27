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
var Items = /** @class */ (function () {
    function Items(_filters, _sort, _page) {
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
        this.trackBy = function (index, item) { return item; };
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
     */
    /**
     * Cleans up our subscriptions to other providers
     * @return {?}
     */
    Items.prototype.destroy = /**
     * Cleans up our subscriptions to other providers
     * @return {?}
     */
    function () {
        if (this._filtersSub) {
            this._filtersSub.unsubscribe();
        }
        if (this._sortSub) {
            this._sortSub.unsubscribe();
        }
        if (this._pageSub) {
            this._pageSub.unsubscribe();
        }
    };
    Object.defineProperty(Items.prototype, "smart", {
        get: /**
         * @return {?}
         */
        function () {
            return this._smart;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Items.prototype.smartenUp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._smart = true;
        /*
             * These observers trigger a chain of function: filter -> sort -> paginate
             * An observer up the chain re-triggers all the operations that follow it.
             */
        this._filtersSub = this._filters.change.subscribe(function () { return _this._filterItems(); });
        this._sortSub = this._sort.change.subscribe(function () {
            // Special case, if the datagrid went from sorted to unsorted, we have to re-filter
            // to get the original order back
            if (!_this._sort.comparator) {
                _this._filterItems();
            }
            else {
                _this._sortItems();
            }
        });
        this._pageSub = this._page.change.subscribe(function () { return _this._changePage(); });
    };
    Object.defineProperty(Items.prototype, "all", {
        get: /**
         * @return {?}
         */
        function () {
            return this._all;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._all = items;
            this.emitAllChanges(items);
            if (this.smart) {
                this._filterItems();
            }
            else {
                this._displayed = items;
                this.emitChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Manually recompute the list of displayed items
     */
    /**
     * Manually recompute the list of displayed items
     * @return {?}
     */
    Items.prototype.refresh = /**
     * Manually recompute the list of displayed items
     * @return {?}
     */
    function () {
        if (this.smart) {
            this._filterItems();
        }
    };
    Object.defineProperty(Items.prototype, "displayed", {
        get: /**
         * @return {?}
         */
        function () {
            // Ideally we could return an immutable array, but we don't have it in Clarity yet.
            return this._displayed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Items.prototype.emitChange = /**
     * @return {?}
     */
    function () {
        this._change.next(this.displayed);
    };
    Object.defineProperty(Items.prototype, "change", {
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
     * @param {?} items
     * @return {?}
     */
    Items.prototype.emitAllChanges = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this._allChanges.next(items);
    };
    Object.defineProperty(Items.prototype, "allChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Items.prototype, "uninitialized", {
        /**
         * Checks if we don't have data to process yet, to abort early operations
         */
        get: /**
         * Checks if we don't have data to process yet, to abort early operations
         * @return {?}
         */
        function () {
            return !this._all;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * FiltersProvider items from the raw list
     */
    /**
     * FiltersProvider items from the raw list
     * @return {?}
     */
    Items.prototype._filterItems = /**
     * FiltersProvider items from the raw list
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.uninitialized) {
            return;
        }
        if (this._filters.hasActiveFilters()) {
            this._filtered = this._all.filter(function (item) { return _this._filters.accepts(item); });
        }
        else {
            // Work on a shallow copy of the array, to not modify the user's model
            this._filtered = this._all.slice();
        }
        this._page.totalItems = this._filtered.length;
        this._sortItems();
    };
    /**
     * Sorts items in the filtered list
     */
    /**
     * Sorts items in the filtered list
     * @return {?}
     */
    Items.prototype._sortItems = /**
     * Sorts items in the filtered list
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.uninitialized) {
            return;
        }
        if (this._sort.comparator) {
            this._filtered.sort(function (a, b) { return _this._sort.compare(a, b); });
        }
        this._changePage();
    };
    /**
     * Extracts the current page from the sorted list
     */
    /**
     * Extracts the current page from the sorted list
     * @return {?}
     */
    Items.prototype._changePage = /**
     * Extracts the current page from the sorted list
     * @return {?}
     */
    function () {
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
    };
    Items.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Items.ctorParameters = function () { return [
        { type: FiltersProvider },
        { type: Sort },
        { type: Page }
    ]; };
    return Items;
}());
export { Items };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9pdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFtQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7O0FBRTlCO0lBRUUsZUFBb0IsUUFBNEIsRUFBVSxLQUFjLEVBQVUsS0FBVztRQUF6RSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNOzs7O1FBS3RGLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7O1FBTWhCLFlBQU8sR0FBdUIsVUFBQyxLQUFhLEVBQUUsSUFBTyxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQzs7Ozs7UUEyQjlELFdBQU0sR0FBRyxLQUFLLENBQUM7Ozs7UUEwRGYsZUFBVSxHQUFRLEVBQUUsQ0FBQzs7OztRQVNyQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVM3QixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFsSHVELENBQUM7SUFtQmpHOztPQUVHOzs7OztJQUNJLHVCQUFPOzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxD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QUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQS9LRixVQUFVOzs7O2dCQUpGLGVBQWU7Z0JBRWYsSUFBSTtnQkFESixJQUFJOztJQW1MYixZQUFDO0NBQUEsQUFoTEQsSUFnTEM7U0EvS1ksS0FBSzs7Ozs7O0lBTWhCLHdCQUF1Qjs7Ozs7SUFNdkIsd0JBQXNFOzs7OztJQUt0RSw0QkFBa0M7O0lBQ2xDLHlCQUErQjs7SUFDL0IseUJBQStCOzs7Ozs7SUFvQi9CLHVCQUF1Qjs7Ozs7SUEwQnZCLHFCQUFrQjs7Ozs7SUEyQmxCLDBCQUF1Qjs7Ozs7SUFLdkIsMkJBQTZCOzs7OztJQVM3Qix3QkFBcUM7O0lBU3JDLDRCQUF5Qzs7SUFsSDdCLHlCQUFvQzs7SUFBRSxzQkFBc0I7O0lBQUUsc0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyIH0gZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gJy4vc29ydCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJdGVtczxUID0gYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpbHRlcnM6IEZpbHRlcnNQcm92aWRlcjxUPiwgcHJpdmF0ZSBfc29ydDogU29ydDxUPiwgcHJpdmF0ZSBfcGFnZTogUGFnZSkge31cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBkYXRhIGlzIGN1cnJlbnRseSBsb2FkaW5nXG4gICAqL1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8vIFRPRE86IFZlcmlmeSB0aGF0IHRyYWNrQnkgaXMgcmVnaXN0ZXJlZCBmb3IgdGhlICpuZ0ZvciBjYXNlIHRvb1xuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdG8gaWRlbnRpZnkgb2JqZWN0cy4gRGVmYXVsdCBpcyByZWZlcmVuY2UgZXF1YWxpdHkuXG4gICAqL1xuICBwdWJsaWMgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0gKGluZGV4OiBudW1iZXIsIGl0ZW06IFQpID0+IGl0ZW07XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbnMgdG8gdGhlIG90aGVyIHByb3ZpZGVycyBjaGFuZ2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZmlsdGVyc1N1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zb3J0U3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhZ2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgLyoqXG4gICAqIENsZWFucyB1cCBvdXIgc3Vic2NyaXB0aW9ucyB0byBvdGhlciBwcm92aWRlcnNcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJzU3ViKSB7XG4gICAgICB0aGlzLl9maWx0ZXJzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3J0U3ViKSB7XG4gICAgICB0aGlzLl9zb3J0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wYWdlU3ViKSB7XG4gICAgICB0aGlzLl9wYWdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBzbWFydCBpdGVtcyBmb3IgdGhpcyBkYXRhZ3JpZCBvciBsZXQgdGhlIHVzZXIgaGFuZGxlXG4gICAqIGV2ZXJ5dGhpbmcuXG4gICAqL1xuICBwcml2YXRlIF9zbWFydCA9IGZhbHNlO1xuICBwdWJsaWMgZ2V0IHNtYXJ0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zbWFydDtcbiAgfVxuICBwdWJsaWMgc21hcnRlblVwKCkge1xuICAgIHRoaXMuX3NtYXJ0ID0gdHJ1ZTtcbiAgICAvKlxuICAgICAgICAgKiBUaGVzZSBvYnNlcnZlcnMgdHJpZ2dlciBhIGNoYWluIG9mIGZ1bmN0aW9uOiBmaWx0ZXIgLT4gc29ydCAtPiBwYWdpbmF0ZVxuICAgICAgICAgKiBBbiBvYnNlcnZlciB1cCB0aGUgY2hhaW4gcmUtdHJpZ2dlcnMgYWxsIHRoZSBvcGVyYXRpb25zIHRoYXQgZm9sbG93IGl0LlxuICAgICAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJzU3ViID0gdGhpcy5fZmlsdGVycy5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2ZpbHRlckl0ZW1zKCkpO1xuICAgIHRoaXMuX3NvcnRTdWIgPSB0aGlzLl9zb3J0LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlLCBpZiB0aGUgZGF0YWdyaWQgd2VudCBmcm9tIHNvcnRlZCB0byB1bnNvcnRlZCwgd2UgaGF2ZSB0byByZS1maWx0ZXJcbiAgICAgIC8vIHRvIGdldCB0aGUgb3JpZ2luYWwgb3JkZXIgYmFja1xuICAgICAgaWYgKCF0aGlzLl9zb3J0LmNvbXBhcmF0b3IpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NvcnRJdGVtcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3BhZ2VTdWIgPSB0aGlzLl9wYWdlLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlUGFnZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBpdGVtcyBpbiB0aGUgZGF0YWdyaWRcbiAgICovXG4gIHByaXZhdGUgX2FsbDogVFtdO1xuICBwdWJsaWMgZ2V0IGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsO1xuICB9XG4gIHB1YmxpYyBzZXQgYWxsKGl0ZW1zOiBUW10pIHtcbiAgICB0aGlzLl9hbGwgPSBpdGVtcztcbiAgICB0aGlzLmVtaXRBbGxDaGFuZ2VzKGl0ZW1zKTtcbiAgICBpZiAodGhpcy5zbWFydCkge1xuICAgICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGlzcGxheWVkID0gaXRlbXM7XG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgcmVjb21wdXRlIHRoZSBsaXN0IG9mIGRpc3BsYXllZCBpdGVtc1xuICAgKi9cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuc21hcnQpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckl0ZW1zKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIHRlbXBvcmFyeSBzdGVwLCB3aGljaCB3ZSBwcmVzZXJ2ZSB0byBhdm9pZCByZS1maWx0ZXJpbmcgb3IgcmUtc29ydGluZyBpZiBub3QgbmVjZXNzYXJ5XG4gICAqL1xuICBwcml2YXRlIF9maWx0ZXJlZDogVFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGl0ZW1zIGN1cnJlbnRseSBkaXNwbGF5ZWRcbiAgICovXG4gIHByaXZhdGUgX2Rpc3BsYXllZDogVFtdID0gW107XG4gIHB1YmxpYyBnZXQgZGlzcGxheWVkKCk6IFRbXSB7XG4gICAgLy8gSWRlYWxseSB3ZSBjb3VsZCByZXR1cm4gYW4gaW1tdXRhYmxlIGFycmF5LCBidXQgd2UgZG9uJ3QgaGF2ZSBpdCBpbiBDbGFyaXR5IHlldC5cbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheWVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBpdGVtcyBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgU3ViamVjdDxUW10+KCk7XG4gIHByaXZhdGUgZW1pdENoYW5nZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0aGlzLmRpc3BsYXllZCk7XG4gIH1cbiAgLy8gV2UgZG8gbm90IHdhbnQgdG8gZXhwb3NlIHRoZSBTdWJqZWN0IGl0c2VsZiwgYnV0IHRoZSBPYnNlcnZhYmxlIHdoaWNoIGlzIHJlYWQtb25seVxuICBwdWJsaWMgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9hbGxDaGFuZ2VzID0gbmV3IFN1YmplY3Q8VFtdPigpO1xuICBwcml2YXRlIGVtaXRBbGxDaGFuZ2VzKGl0ZW1zOiBUW10pOiB2b2lkIHtcbiAgICB0aGlzLl9hbGxDaGFuZ2VzLm5leHQoaXRlbXMpO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxDaGFuZ2VzKCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbENoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHdlIGRvbid0IGhhdmUgZGF0YSB0byBwcm9jZXNzIHlldCwgdG8gYWJvcnQgZWFybHkgb3BlcmF0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXQgdW5pbml0aWFsaXplZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2FsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzUHJvdmlkZXIgaXRlbXMgZnJvbSB0aGUgcmF3IGxpc3RcbiAgICovXG4gIHByaXZhdGUgX2ZpbHRlckl0ZW1zKCkge1xuICAgIGlmICh0aGlzLnVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ZpbHRlcnMuaGFzQWN0aXZlRmlsdGVycygpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJlZCA9IHRoaXMuX2FsbC5maWx0ZXIoaXRlbSA9PiB0aGlzLl9maWx0ZXJzLmFjY2VwdHMoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXb3JrIG9uIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBhcnJheSwgdG8gbm90IG1vZGlmeSB0aGUgdXNlcidzIG1vZGVsXG4gICAgICB0aGlzLl9maWx0ZXJlZCA9IHRoaXMuX2FsbC5zbGljZSgpO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlLnRvdGFsSXRlbXMgPSB0aGlzLl9maWx0ZXJlZC5sZW5ndGg7XG4gICAgdGhpcy5fc29ydEl0ZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydHMgaXRlbXMgaW4gdGhlIGZpbHRlcmVkIGxpc3RcbiAgICovXG4gIHByaXZhdGUgX3NvcnRJdGVtcygpIHtcbiAgICBpZiAodGhpcy51bmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9zb3J0LmNvbXBhcmF0b3IpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IHRoaXMuX3NvcnQuY29tcGFyZShhLCBiKSk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZVBhZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY3VycmVudCBwYWdlIGZyb20gdGhlIHNvcnRlZCBsaXN0XG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VQYWdlKCkge1xuICAgIGlmICh0aGlzLnVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BhZ2Uuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZCA9IHRoaXMuX2ZpbHRlcmVkLnNsaWNlKHRoaXMuX3BhZ2UuZmlyc3RJdGVtLCB0aGlzLl9wYWdlLmxhc3RJdGVtICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZCA9IHRoaXMuX2ZpbHRlcmVkO1xuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKTtcbiAgfVxufVxuIl19