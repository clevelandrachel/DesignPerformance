/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StateProvider = /** @class */ (function () {
    function StateProvider(filters, sort, page, debouncer) {
        var _this = this;
        this.filters = filters;
        this.sort = sort;
        this.page = page;
        this.debouncer = debouncer;
        /**
         * The Observable that lets other classes subscribe to global state changes
         */
        this.change = this.debouncer.change.pipe(map(function () { return _this.state; }));
    }
    Object.defineProperty(StateProvider.prototype, "state", {
        /*
           * By making this a getter, we open the possibility for a setter in the future.
           * It's been requested a couple times.
           */
        get: /*
             * By making this a getter, we open the possibility for a setter in the future.
             * It's been requested a couple times.
             */
        /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var state = {};
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
            var activeFilters = this.filters.getActiveFilters();
            if (activeFilters.length > 0) {
                state.filters = [];
                try {
                    for (var activeFilters_1 = tslib_1.__values(activeFilters), activeFilters_1_1 = activeFilters_1.next(); !activeFilters_1_1.done; activeFilters_1_1 = activeFilters_1.next()) {
                        var filter = activeFilters_1_1.value;
                        if (filter.state) {
                            state.filters.push(filter.state);
                        }
                        else {
                            state.filters.push(filter);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (activeFilters_1_1 && !activeFilters_1_1.done && (_a = activeFilters_1.return)) _a.call(activeFilters_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return state;
        },
        enumerable: true,
        configurable: true
    });
    StateProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StateProvider.ctorParameters = function () { return [
        { type: FiltersProvider },
        { type: Sort },
        { type: Page },
        { type: StateDebouncer }
    ]; };
    return StateProvider;
}());
export { StateProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9zdGF0ZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHbEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUs1RDtJQUVFLHVCQUNVLE9BQTJCLEVBQzNCLElBQWEsRUFDYixJQUFVLEVBQ1YsU0FBeUI7UUFKbkMsaUJBS0k7UUFKTSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQWdCOzs7O1FBTW5DLFdBQU0sR0FBNkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO0lBTGxHLENBQUM7SUFXSixzQkFBSSxnQ0FBSztRQUpUOzs7YUFHSzs7Ozs7Ozs7UUFDTDs7O2dCQUNRLEtBQUssR0FBaUMsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDdEIsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUY7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxZQUFZLDBCQUEwQixFQUFFO29CQUM5RDs7OytCQUdXO29CQUNYLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxtQkFBK0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDN0c7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkU7YUFDRjs7Z0JBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDckQsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDNUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O29CQUNuQixLQUFxQixJQUFBLGtCQUFBLGlCQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTt3QkFBL0IsSUFBTSxNQUFNLDBCQUFBO3dCQUNmLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTs0QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNsQzs2QkFBTTs0QkFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDNUI7cUJBQ0Y7Ozs7Ozs7OzthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7Z0JBL0NGLFVBQVU7Ozs7Z0JBUkYsZUFBZTtnQkFFZixJQUFJO2dCQURKLElBQUk7Z0JBRUosY0FBYzs7SUFxRHZCLG9CQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksYUFBYTs7Ozs7O0lBV3hCLCtCQUFxRzs7SUFUbkcsZ0NBQW1DOztJQUNuQyw2QkFBcUI7O0lBQ3JCLDZCQUFrQjs7SUFDbEIsa0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhZ3JpZFByb3BlcnR5Q29tcGFyYXRvciB9IGZyb20gJy4uL2J1aWx0LWluL2NvbXBhcmF0b3JzL2RhdGFncmlkLXByb3BlcnR5LWNvbXBhcmF0b3InO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRTdGF0ZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvc3RhdGUuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyIH0gZnJvbSAnLi9maWx0ZXJzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgeyBTdGF0ZURlYm91bmNlciB9IGZyb20gJy4vc3RhdGUtZGVib3VuY2VyLnByb3ZpZGVyJztcblxuLyoqXG4gKiBUaGlzIHByb3ZpZGVyIGFnZ3JlZ2F0ZXMgc3RhdGUgY2hhbmdlcyBmcm9tIHRoZSB2YXJpb3VzIHByb3ZpZGVycyBvZiB0aGUgRGF0YWdyaWRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0YXRlUHJvdmlkZXI8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpbHRlcnM6IEZpbHRlcnNQcm92aWRlcjxUPixcbiAgICBwcml2YXRlIHNvcnQ6IFNvcnQ8VD4sXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgZGVib3VuY2VyOiBTdGF0ZURlYm91bmNlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBPYnNlcnZhYmxlIHRoYXQgbGV0cyBvdGhlciBjbGFzc2VzIHN1YnNjcmliZSB0byBnbG9iYWwgc3RhdGUgY2hhbmdlc1xuICAgKi9cbiAgY2hhbmdlOiBPYnNlcnZhYmxlPENsckRhdGFncmlkU3RhdGVJbnRlcmZhY2U8VD4+ID0gdGhpcy5kZWJvdW5jZXIuY2hhbmdlLnBpcGUobWFwKCgpID0+IHRoaXMuc3RhdGUpKTtcblxuICAvKlxuICAgICAqIEJ5IG1ha2luZyB0aGlzIGEgZ2V0dGVyLCB3ZSBvcGVuIHRoZSBwb3NzaWJpbGl0eSBmb3IgYSBzZXR0ZXIgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBJdCdzIGJlZW4gcmVxdWVzdGVkIGEgY291cGxlIHRpbWVzLlxuICAgICAqL1xuICBnZXQgc3RhdGUoKTogQ2xyRGF0YWdyaWRTdGF0ZUludGVyZmFjZTxUPiB7XG4gICAgY29uc3Qgc3RhdGU6IENsckRhdGFncmlkU3RhdGVJbnRlcmZhY2U8VD4gPSB7fTtcbiAgICBpZiAodGhpcy5wYWdlLnNpemUgPiAwKSB7XG4gICAgICBzdGF0ZS5wYWdlID0geyBmcm9tOiB0aGlzLnBhZ2UuZmlyc3RJdGVtLCB0bzogdGhpcy5wYWdlLmxhc3RJdGVtLCBzaXplOiB0aGlzLnBhZ2Uuc2l6ZSB9O1xuICAgIH1cbiAgICBpZiAodGhpcy5zb3J0LmNvbXBhcmF0b3IpIHtcbiAgICAgIGlmICh0aGlzLnNvcnQuY29tcGFyYXRvciBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlDb21wYXJhdG9yKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogU3BlY2lhbCBjYXNlIGZvciB0aGUgZGVmYXVsdCBvYmplY3QgcHJvcGVydHkgY29tcGFyYXRvcixcbiAgICAgICAgICAgICAgICAgKiB3ZSBnaXZlIHRoZSBwcm9wZXJ0eSBuYW1lIGluc3RlYWQgb2YgdGhlIGFjdHVhbCBjb21wYXJhdG9yLlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICBzdGF0ZS5zb3J0ID0geyBieTogKDxEYXRhZ3JpZFByb3BlcnR5Q29tcGFyYXRvcjxUPj50aGlzLnNvcnQuY29tcGFyYXRvcikucHJvcCwgcmV2ZXJzZTogdGhpcy5zb3J0LnJldmVyc2UgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnNvcnQgPSB7IGJ5OiB0aGlzLnNvcnQuY29tcGFyYXRvciwgcmV2ZXJzZTogdGhpcy5zb3J0LnJldmVyc2UgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdGhpcy5maWx0ZXJzLmdldEFjdGl2ZUZpbHRlcnMoKTtcbiAgICBpZiAoYWN0aXZlRmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBzdGF0ZS5maWx0ZXJzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBhY3RpdmVGaWx0ZXJzKSB7XG4gICAgICAgIGlmIChmaWx0ZXIuc3RhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5maWx0ZXJzLnB1c2goZmlsdGVyLnN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5maWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==