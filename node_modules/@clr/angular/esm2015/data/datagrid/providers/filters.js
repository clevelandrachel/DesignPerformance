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
import { Page } from './page';
import { StateDebouncer } from './state-debouncer.provider';
/**
 * @template T
 */
export class FiltersProvider {
    /**
     * @param {?} _page
     * @param {?} stateDebouncer
     */
    constructor(_page, stateDebouncer) {
        this._page = _page;
        this.stateDebouncer = stateDebouncer;
        /**
         * This subject is the list of filters that changed last, not the whole list.
         * We emit a list rather than just one filter to allow batch changes to several at once.
         */
        this._change = new Subject();
        /**
         * List of all filters, whether they're active or not
         */
        this._all = [];
    }
    // We do not want to expose the Subject itself, but the Observable which is read-only
    /**
     * @return {?}
     */
    get change() {
        return this._change.asObservable();
    }
    /**
     * Tests if at least one filter is currently active
     * @return {?}
     */
    hasActiveFilters() {
        // We do not use getActiveFilters() because this function will be called much more often
        // and stopping the loop early might be relevant.
        for (const { filter } of this._all) {
            if (filter && filter.isActive()) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns a list of all currently active filters
     * @return {?}
     */
    getActiveFilters() {
        /** @type {?} */
        const ret = [];
        for (const { filter } of this._all) {
            if (filter && filter.isActive()) {
                ret.push(filter);
            }
        }
        return ret;
    }
    /**
     * Registers a filter, and returns a deregistration function
     * @template F
     * @param {?} filter
     * @return {?}
     */
    add(filter) {
        /** @type {?} */
        const index = this._all.length;
        /** @type {?} */
        const subscription = filter.changes.subscribe(() => this.resetPageAndEmitFilterChange([filter]));
        /** @type {?} */
        let hasUnregistered = false;
        /** @type {?} */
        const registered = new RegisteredFilter(filter, () => {
            if (hasUnregistered) {
                return;
            }
            subscription.unsubscribe();
            this._all.splice(index, 1);
            if (filter.isActive()) {
                this.resetPageAndEmitFilterChange([]);
            }
            hasUnregistered = true;
        });
        this._all.push(registered);
        if (filter.isActive()) {
            this.resetPageAndEmitFilterChange([filter]);
        }
        return registered;
    }
    /**
     * Accepts an item if it is accepted by all currently active filters
     * @param {?} item
     * @return {?}
     */
    accepts(item) {
        for (const { filter } of this._all) {
            if (filter && filter.isActive() && !filter.accepts(item)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    resetPageAndEmitFilterChange(filters) {
        this.stateDebouncer.changeStart();
        // filtering may change the page number such that current page number doesn't exist in the filtered dataset.
        // So here we always set the current page to 1 so that it'll fetch first page's data with the given filter.
        this._page.current = 1;
        this._change.next(filters);
        this.stateDebouncer.changeDone();
    }
}
FiltersProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FiltersProvider.ctorParameters = () => [
    { type: Page },
    { type: StateDebouncer }
];
if (false) {
    /**
     * This subject is the list of filters that changed last, not the whole list.
     * We emit a list rather than just one filter to allow batch changes to several at once.
     * @type {?}
     */
    FiltersProvider.prototype._change;
    /**
     * List of all filters, whether they're active or not
     * @type {?}
     */
    FiltersProvider.prototype._all;
    /** @type {?} */
    FiltersProvider.prototype._page;
    /** @type {?} */
    FiltersProvider.prototype.stateDebouncer;
}
/**
 * @template T, F
 */
export class RegisteredFilter {
    /**
     * @param {?} filter
     * @param {?} unregister
     */
    constructor(filter, unregister) {
        this.filter = filter;
        this.unregister = unregister;
    }
}
if (false) {
    /** @type {?} */
    RegisteredFilter.prototype.filter;
    /** @type {?} */
    RegisteredFilter.prototype.unregister;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL2ZpbHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRzVELE1BQU0sT0FBTyxlQUFlOzs7OztJQUMxQixZQUFvQixLQUFXLEVBQVUsY0FBOEI7UUFBbkQsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjs7Ozs7UUFLL0QsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFtQyxDQUFDOzs7O1FBU3pELFNBQUksR0FBeUQsRUFBRSxDQUFDO0lBZEUsQ0FBQzs7Ozs7SUFPM0UsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBVU0sZ0JBQWdCO1FBQ3JCLHdGQUF3RjtRQUN4RixpREFBaUQ7UUFDakQsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFLTSxnQkFBZ0I7O2NBQ2YsR0FBRyxHQUFvQyxFQUFFO1FBQy9DLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7SUFLTSxHQUFHLENBQTBDLE1BQVM7O2NBQ3JELEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07O2NBQ3hCLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztZQUM1RixlQUFlLEdBQUcsS0FBSzs7Y0FDckIsVUFBVSxHQUFHLElBQUksZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNuRCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsZUFBZSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7O0lBS00sT0FBTyxDQUFDLElBQU87UUFDcEIsS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNsQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4RCxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sNEJBQTRCLENBQUMsT0FBd0M7UUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyw0R0FBNEc7UUFDNUcsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXpGRixVQUFVOzs7O1lBSEYsSUFBSTtZQUNKLGNBQWM7Ozs7Ozs7O0lBU3JCLGtDQUFpRTs7Ozs7SUFTakUsK0JBQXdFOztJQWQ1RCxnQ0FBbUI7O0lBQUUseUNBQXNDOzs7OztBQTBGekUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBbUIsTUFBUyxFQUFTLFVBQXNCO1FBQXhDLFdBQU0sR0FBTixNQUFNLENBQUc7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztDQUNoRTs7O0lBRGEsa0NBQWdCOztJQUFFLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBTdGF0ZURlYm91bmNlciB9IGZyb20gJy4vc3RhdGUtZGVib3VuY2VyLnByb3ZpZGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlcnNQcm92aWRlcjxUID0gYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgc3RhdGVEZWJvdW5jZXI6IFN0YXRlRGVib3VuY2VyKSB7fVxuICAvKipcbiAgICogVGhpcyBzdWJqZWN0IGlzIHRoZSBsaXN0IG9mIGZpbHRlcnMgdGhhdCBjaGFuZ2VkIGxhc3QsIG5vdCB0aGUgd2hvbGUgbGlzdC5cbiAgICogV2UgZW1pdCBhIGxpc3QgcmF0aGVyIHRoYW4ganVzdCBvbmUgZmlsdGVyIHRvIGFsbG93IGJhdGNoIGNoYW5nZXMgdG8gc2V2ZXJhbCBhdCBvbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IFN1YmplY3Q8Q2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD5bXT4oKTtcbiAgLy8gV2UgZG8gbm90IHdhbnQgdG8gZXhwb3NlIHRoZSBTdWJqZWN0IGl0c2VsZiwgYnV0IHRoZSBPYnNlcnZhYmxlIHdoaWNoIGlzIHJlYWQtb25seVxuICBwdWJsaWMgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+W10+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGZpbHRlcnMsIHdoZXRoZXIgdGhleSdyZSBhY3RpdmUgb3Igbm90XG4gICAqL1xuICBwcml2YXRlIF9hbGw6IFJlZ2lzdGVyZWRGaWx0ZXI8VCwgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4+W10gPSBbXTtcblxuICAvKipcbiAgICogVGVzdHMgaWYgYXQgbGVhc3Qgb25lIGZpbHRlciBpcyBjdXJyZW50bHkgYWN0aXZlXG4gICAqL1xuICBwdWJsaWMgaGFzQWN0aXZlRmlsdGVycygpOiBib29sZWFuIHtcbiAgICAvLyBXZSBkbyBub3QgdXNlIGdldEFjdGl2ZUZpbHRlcnMoKSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgbXVjaCBtb3JlIG9mdGVuXG4gICAgLy8gYW5kIHN0b3BwaW5nIHRoZSBsb29wIGVhcmx5IG1pZ2h0IGJlIHJlbGV2YW50LlxuICAgIGZvciAoY29uc3QgeyBmaWx0ZXIgfSBvZiB0aGlzLl9hbGwpIHtcbiAgICAgIGlmIChmaWx0ZXIgJiYgZmlsdGVyLmlzQWN0aXZlKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgY3VycmVudGx5IGFjdGl2ZSBmaWx0ZXJzXG4gICAqL1xuICBwdWJsaWMgZ2V0QWN0aXZlRmlsdGVycygpOiBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPltdIHtcbiAgICBjb25zdCByZXQ6IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyIH0gb2YgdGhpcy5fYWxsKSB7XG4gICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5pc0FjdGl2ZSgpKSB7XG4gICAgICAgIHJldC5wdXNoKGZpbHRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgZmlsdGVyLCBhbmQgcmV0dXJucyBhIGRlcmVnaXN0cmF0aW9uIGZ1bmN0aW9uXG4gICAqL1xuICBwdWJsaWMgYWRkPEYgZXh0ZW5kcyBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPj4oZmlsdGVyOiBGKTogUmVnaXN0ZXJlZEZpbHRlcjxULCBGPiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9hbGwubGVuZ3RoO1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGZpbHRlci5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2V0UGFnZUFuZEVtaXRGaWx0ZXJDaGFuZ2UoW2ZpbHRlcl0pKTtcbiAgICBsZXQgaGFzVW5yZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgY29uc3QgcmVnaXN0ZXJlZCA9IG5ldyBSZWdpc3RlcmVkRmlsdGVyKGZpbHRlciwgKCkgPT4ge1xuICAgICAgaWYgKGhhc1VucmVnaXN0ZXJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2FsbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKGZpbHRlci5pc0FjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMucmVzZXRQYWdlQW5kRW1pdEZpbHRlckNoYW5nZShbXSk7XG4gICAgICB9XG4gICAgICBoYXNVbnJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2FsbC5wdXNoKHJlZ2lzdGVyZWQpO1xuICAgIGlmIChmaWx0ZXIuaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5yZXNldFBhZ2VBbmRFbWl0RmlsdGVyQ2hhbmdlKFtmaWx0ZXJdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyZWQ7XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhbiBpdGVtIGlmIGl0IGlzIGFjY2VwdGVkIGJ5IGFsbCBjdXJyZW50bHkgYWN0aXZlIGZpbHRlcnNcbiAgICovXG4gIHB1YmxpYyBhY2NlcHRzKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHsgZmlsdGVyIH0gb2YgdGhpcy5fYWxsKSB7XG4gICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci5pc0FjdGl2ZSgpICYmICFmaWx0ZXIuYWNjZXB0cyhpdGVtKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFBhZ2VBbmRFbWl0RmlsdGVyQ2hhbmdlKGZpbHRlcnM6IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+W10pIHtcbiAgICB0aGlzLnN0YXRlRGVib3VuY2VyLmNoYW5nZVN0YXJ0KCk7XG4gICAgLy8gZmlsdGVyaW5nIG1heSBjaGFuZ2UgdGhlIHBhZ2UgbnVtYmVyIHN1Y2ggdGhhdCBjdXJyZW50IHBhZ2UgbnVtYmVyIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGZpbHRlcmVkIGRhdGFzZXQuXG4gICAgLy8gU28gaGVyZSB3ZSBhbHdheXMgc2V0IHRoZSBjdXJyZW50IHBhZ2UgdG8gMSBzbyB0aGF0IGl0J2xsIGZldGNoIGZpcnN0IHBhZ2UncyBkYXRhIHdpdGggdGhlIGdpdmVuIGZpbHRlci5cbiAgICB0aGlzLl9wYWdlLmN1cnJlbnQgPSAxO1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGZpbHRlcnMpO1xuICAgIHRoaXMuc3RhdGVEZWJvdW5jZXIuY2hhbmdlRG9uZSgpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlcmVkRmlsdGVyPFQsIEYgZXh0ZW5kcyBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPj4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsdGVyOiBGLCBwdWJsaWMgdW5yZWdpc3RlcjogKCkgPT4gdm9pZCkge31cbn1cbiJdfQ==