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
import { map } from 'rxjs/operators';
import { DatagridPropertyComparator } from '../built-in/comparators/datagrid-property-comparator';
import { FiltersProvider } from './filters';
import { Page } from './page';
import { Sort } from './sort';
import { StateDebouncer } from './state-debouncer.provider';
/**
 * This provider aggregates state changes from the various providers of the Datagrid
 * @template T
 */
export class StateProvider {
    /**
     * @param {?} filters
     * @param {?} sort
     * @param {?} page
     * @param {?} debouncer
     */
    constructor(filters, sort, page, debouncer) {
        this.filters = filters;
        this.sort = sort;
        this.page = page;
        this.debouncer = debouncer;
        /**
         * The Observable that lets other classes subscribe to global state changes
         */
        this.change = this.debouncer.change.pipe(map(() => this.state));
    }
    /*
         * By making this a getter, we open the possibility for a setter in the future.
         * It's been requested a couple times.
         */
    /**
     * @return {?}
     */
    get state() {
        /** @type {?} */
        const state = {};
        if (this.page.size > 0) {
            state.page = { from: this.page.firstItem, to: this.page.lastItem, size: this.page.size };
        }
        if (this.sort.comparator) {
            if (this.sort.comparator instanceof DatagridPropertyComparator) {
                /*
                         * Special case for the default object property comparator,
                         * we give the property name instead of the actual comparator.
                         */
                state.sort = { by: ((/** @type {?} */ (this.sort.comparator))).prop, reverse: this.sort.reverse };
            }
            else {
                state.sort = { by: this.sort.comparator, reverse: this.sort.reverse };
            }
        }
        /** @type {?} */
        const activeFilters = this.filters.getActiveFilters();
        if (activeFilters.length > 0) {
            state.filters = [];
            for (const filter of activeFilters) {
                if (filter.state) {
                    state.filters.push(filter.state);
                }
                else {
                    state.filters.push(filter);
                }
            }
        }
        return state;
    }
}
StateProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StateProvider.ctorParameters = () => [
    { type: FiltersProvider },
    { type: Sort },
    { type: Page },
    { type: StateDebouncer }
];
if (false) {
    /**
     * The Observable that lets other classes subscribe to global state changes
     * @type {?}
     */
    StateProvider.prototype.change;
    /** @type {?} */
    StateProvider.prototype.filters;
    /** @type {?} */
    StateProvider.prototype.sort;
    /** @type {?} */
    StateProvider.prototype.page;
    /** @type {?} */
    StateProvider.prototype.debouncer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9zdGF0ZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUdsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBTTVELE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBQ3hCLFlBQ1UsT0FBMkIsRUFDM0IsSUFBYSxFQUNiLElBQVUsRUFDVixTQUF5QjtRQUh6QixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQWdCOzs7O1FBTW5DLFdBQU0sR0FBNkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUxsRyxDQUFDOzs7Ozs7OztJQVdKLElBQUksS0FBSzs7Y0FDRCxLQUFLLEdBQWlDLEVBQUU7UUFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUY7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLFlBQVksMEJBQTBCLEVBQUU7Z0JBQzlEOzs7MkJBR1c7Z0JBQ1gsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLG1CQUErQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzdHO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkU7U0FDRjs7Y0FFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtRQUNyRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUssTUFBTSxNQUFNLElBQUksYUFBYSxFQUFFO2dCQUNsQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBL0NGLFVBQVU7Ozs7WUFSRixlQUFlO1lBRWYsSUFBSTtZQURKLElBQUk7WUFFSixjQUFjOzs7Ozs7O0lBaUJyQiwrQkFBcUc7O0lBVG5HLGdDQUFtQzs7SUFDbkMsNkJBQXFCOztJQUNyQiw2QkFBa0I7O0lBQ2xCLGtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGF0YWdyaWRQcm9wZXJ0eUNvbXBhcmF0b3IgfSBmcm9tICcuLi9idWlsdC1pbi9jb21wYXJhdG9ycy9kYXRhZ3JpZC1wcm9wZXJ0eS1jb21wYXJhdG9yJztcbmltcG9ydCB7IENsckRhdGFncmlkU3RhdGVJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3N0YXRlLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IEZpbHRlcnNQcm92aWRlciB9IGZyb20gJy4vZmlsdGVycyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFNvcnQgfSBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHsgU3RhdGVEZWJvdW5jZXIgfSBmcm9tICcuL3N0YXRlLWRlYm91bmNlci5wcm92aWRlcic7XG5cbi8qKlxuICogVGhpcyBwcm92aWRlciBhZ2dyZWdhdGVzIHN0YXRlIGNoYW5nZXMgZnJvbSB0aGUgdmFyaW91cyBwcm92aWRlcnMgb2YgdGhlIERhdGFncmlkXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVByb3ZpZGVyPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaWx0ZXJzOiBGaWx0ZXJzUHJvdmlkZXI8VD4sXG4gICAgcHJpdmF0ZSBzb3J0OiBTb3J0PFQ+LFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGRlYm91bmNlcjogU3RhdGVEZWJvdW5jZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgT2JzZXJ2YWJsZSB0aGF0IGxldHMgb3RoZXIgY2xhc3NlcyBzdWJzY3JpYmUgdG8gZ2xvYmFsIHN0YXRlIGNoYW5nZXNcbiAgICovXG4gIGNoYW5nZTogT2JzZXJ2YWJsZTxDbHJEYXRhZ3JpZFN0YXRlSW50ZXJmYWNlPFQ+PiA9IHRoaXMuZGVib3VuY2VyLmNoYW5nZS5waXBlKG1hcCgoKSA9PiB0aGlzLnN0YXRlKSk7XG5cbiAgLypcbiAgICAgKiBCeSBtYWtpbmcgdGhpcyBhIGdldHRlciwgd2Ugb3BlbiB0aGUgcG9zc2liaWxpdHkgZm9yIGEgc2V0dGVyIGluIHRoZSBmdXR1cmUuXG4gICAgICogSXQncyBiZWVuIHJlcXVlc3RlZCBhIGNvdXBsZSB0aW1lcy5cbiAgICAgKi9cbiAgZ2V0IHN0YXRlKCk6IENsckRhdGFncmlkU3RhdGVJbnRlcmZhY2U8VD4ge1xuICAgIGNvbnN0IHN0YXRlOiBDbHJEYXRhZ3JpZFN0YXRlSW50ZXJmYWNlPFQ+ID0ge307XG4gICAgaWYgKHRoaXMucGFnZS5zaXplID4gMCkge1xuICAgICAgc3RhdGUucGFnZSA9IHsgZnJvbTogdGhpcy5wYWdlLmZpcnN0SXRlbSwgdG86IHRoaXMucGFnZS5sYXN0SXRlbSwgc2l6ZTogdGhpcy5wYWdlLnNpemUgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydC5jb21wYXJhdG9yKSB7XG4gICAgICBpZiAodGhpcy5zb3J0LmNvbXBhcmF0b3IgaW5zdGFuY2VvZiBEYXRhZ3JpZFByb3BlcnR5Q29tcGFyYXRvcikge1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAqIFNwZWNpYWwgY2FzZSBmb3IgdGhlIGRlZmF1bHQgb2JqZWN0IHByb3BlcnR5IGNvbXBhcmF0b3IsXG4gICAgICAgICAgICAgICAgICogd2UgZ2l2ZSB0aGUgcHJvcGVydHkgbmFtZSBpbnN0ZWFkIG9mIHRoZSBhY3R1YWwgY29tcGFyYXRvci5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgc3RhdGUuc29ydCA9IHsgYnk6ICg8RGF0YWdyaWRQcm9wZXJ0eUNvbXBhcmF0b3I8VD4+dGhpcy5zb3J0LmNvbXBhcmF0b3IpLnByb3AsIHJldmVyc2U6IHRoaXMuc29ydC5yZXZlcnNlIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zb3J0ID0geyBieTogdGhpcy5zb3J0LmNvbXBhcmF0b3IsIHJldmVyc2U6IHRoaXMuc29ydC5yZXZlcnNlIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuZmlsdGVycy5nZXRBY3RpdmVGaWx0ZXJzKCk7XG4gICAgaWYgKGFjdGl2ZUZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgc3RhdGUuZmlsdGVycyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgYWN0aXZlRmlsdGVycykge1xuICAgICAgICBpZiAoZmlsdGVyLnN0YXRlKSB7XG4gICAgICAgICAgc3RhdGUuZmlsdGVycy5wdXNoKGZpbHRlci5zdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=