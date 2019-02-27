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
import { BehaviorSubject } from 'rxjs';
/**
 *
 * \@description
 * An \@Injectable provider class that enables
 *
 * 1. Managing, track hideability of DatagridColumns
 *
 */
var HideableColumnService = /** @class */ (function () {
    function HideableColumnService() {
        /**
         * *******
         * \@property dgHiddenColumnMap
         *
         * \@description
         * An array of DatagridHideableColumn.
         * NOTE: because we can have columns w/o the *clrDgHideableColumn directive
         * this array will have empty spaces a.k.a nulls. This is needed to be able to map
         * DatagridCells to DatagridColumns in the RowRenderer.
         *
         */
        this._columnList = [];
        /**
         * *******
         *
         * \@property dgHiddenColumnMapChange
         *
         * \@description
         * A behavior subject that can broadcast updates to the column list.
         * NOTE: I am using BehaviorSubject because <clr-dg-column-toggle> is not getting the latest _columnListChange
         * on page load.
         *
         */
        this._columnListChange = new BehaviorSubject(this._columnList);
    }
    Object.defineProperty(HideableColumnService.prototype, "canHideNextColumn", {
        /**********
         *
         * @property canHideNextColumn
         *
         * @description
         * Service function that is called by clr-dg-column-toggle component. Use this if you need to ask if you can hide
         * a column. It acts as a guard against hiding all the columns making sure there is at least one column displayed.
         *
         */
        get: /**
         * *******
         *
         * \@property canHideNextColumn
         *
         * \@description
         * Service function that is called by clr-dg-column-toggle component. Use this if you need to ask if you can hide
         * a column. It acts as a guard against hiding all the columns making sure there is at least one column displayed.
         *
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hiddenColumns = this._columnList.filter(function (column) { return column !== undefined; }).filter(function (column) { return column.hidden; });
            return this._columnList.length - hiddenColumns.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideableColumnService.prototype, "checkForAllColumnsVisible", {
        /**********
         *
         * @property checkForAllColumnsVisible
         *
         * @description
         * For when you need to know if the datagrid's columns are all showing.
         *
         */
        get: /**
         * *******
         *
         * \@property checkForAllColumnsVisible
         *
         * \@description
         * For when you need to know if the datagrid's columns are all showing.
         *
         * @return {?}
         */
        function () {
            return !this._columnList.some(function (column) { return column && column.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideableColumnService.prototype, "columnListChange", {
        /***********
         * @property columnListChange
         *
         * @description
         * A public property that enables subscribers to hear updates to the column map.
         * Use this if you need to do something whenever the Datagrid's column list is changed (i.e *ngIf on a column).
         *
         */
        get: /**
         * ********
         * \@property columnListChange
         *
         * \@description
         * A public property that enables subscribers to hear updates to the column map.
         * Use this if you need to do something whenever the Datagrid's column list is changed (i.e *ngIf on a column).
         *
         * @return {?}
         */
        function () {
            return this._columnListChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**********
     *
     * @description
     * Public function that returns the current list of columns. I needed an array of to iterate on in the RowRenderer
     * but subscribing to the _columnListChange changes did not seem like the correct way to get it.
     *
     */
    /**
     * *******
     *
     * \@description
     * Public function that returns the current list of columns. I needed an array of to iterate on in the RowRenderer
     * but subscribing to the _columnListChange changes did not seem like the correct way to get it.
     *
     * @return {?}
     */
    HideableColumnService.prototype.getColumns = /**
     * *******
     *
     * \@description
     * Public function that returns the current list of columns. I needed an array of to iterate on in the RowRenderer
     * but subscribing to the _columnListChange changes did not seem like the correct way to get it.
     *
     * @return {?}
     */
    function () {
        return this._columnList;
    };
    /**********
     *
     * @description
     * Iterate through the current _columnList:
     * - if it has a DatagridHideableColumn and is hidden then show it.
     * - if it's DatagridHideableColumn was previously the last column visible, turn that flag off.
     *
     */
    /**
     * *******
     *
     * \@description
     * Iterate through the current _columnList:
     * - if it has a DatagridHideableColumn and is hidden then show it.
     * - if it's DatagridHideableColumn was previously the last column visible, turn that flag off.
     *
     * @return {?}
     */
    HideableColumnService.prototype.showHiddenColumns = /**
     * *******
     *
     * \@description
     * Iterate through the current _columnList:
     * - if it has a DatagridHideableColumn and is hidden then show it.
     * - if it's DatagridHideableColumn was previously the last column visible, turn that flag off.
     *
     * @return {?}
     */
    function () {
        this._columnList.forEach(function (column) {
            if (column && column.hidden === true) {
                column.hidden = false;
            }
            if (column && column.lastVisibleColumn) {
                column.lastVisibleColumn = false;
            }
        });
    };
    /**
     *
     * @param columns: DatagridColumn[]
     *
     * @description
     * Creates an array of DatagridHideableColumn's || null based column array passed as param.
     * Is dependent on the order in @ContentChildren in Datagrid.
     *
     */
    /**
     *
     * \@description
     * Creates an array of DatagridHideableColumn's || null based column array passed as param.
     * Is dependent on the order in \@ContentChildren in Datagrid.
     *
     * @param {?} columns
     * @return {?}
     */
    HideableColumnService.prototype.updateColumnList = /**
     *
     * \@description
     * Creates an array of DatagridHideableColumn's || null based column array passed as param.
     * Is dependent on the order in \@ContentChildren in Datagrid.
     *
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this._columnList = columns; // clear the list
        this.updateForLastVisibleColumn(); // Update our visibility state for UI
        this._columnListChange.next(this._columnList); // Broadcast it
    };
    /**********
     *
     * @description
     * Gets the current visible count for all columns.
     * When it is greater than 1 it marks everything as false for the lastVisibleColumn.
     * When visible count is not > 1 (i.e) 1. , it finds the only column that is not hidden and marks it as the
     * lastVisibleColumn.
     *
     */
    /**
     * *******
     *
     * \@description
     * Gets the current visible count for all columns.
     * When it is greater than 1 it marks everything as false for the lastVisibleColumn.
     * When visible count is not > 1 (i.e) 1. , it finds the only column that is not hidden and marks it as the
     * lastVisibleColumn.
     *
     * @return {?}
     */
    HideableColumnService.prototype.updateForLastVisibleColumn = /**
     * *******
     *
     * \@description
     * Gets the current visible count for all columns.
     * When it is greater than 1 it marks everything as false for the lastVisibleColumn.
     * When visible count is not > 1 (i.e) 1. , it finds the only column that is not hidden and marks it as the
     * lastVisibleColumn.
     *
     * @return {?}
     */
    function () {
        // There is more than one column showing, make sure nothing is marked lastVisibleColumn
        if (this.canHideNextColumn) {
            this._columnList.map(function (column) {
                if (column && column.lastVisibleColumn) {
                    column.lastVisibleColumn = false;
                }
            });
        }
        else {
            // The visibleCount is down to only one column showing. Find it and flag it as the lastVisibleColumn
            this._columnList.map(function (column) {
                if (column && !column.hidden) {
                    column.lastVisibleColumn = true;
                }
            });
        }
    };
    /**********
     *
     * @description
     * Return a HideableColumn in this._columnList for the given id.
     *
     *
     */
    /**
     * *******
     *
     * \@description
     * Return a HideableColumn in this._columnList for the given id.
     *
     *
     * @param {?} id
     * @return {?}
     */
    HideableColumnService.prototype.getColumnById = /**
     * *******
     *
     * \@description
     * Return a HideableColumn in this._columnList for the given id.
     *
     *
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id) {
            return this._columnList.find(function (column) { return column && column.id === id; });
        }
        return;
    };
    HideableColumnService.decorators = [
        { type: Injectable }
    ];
    return HideableColumnService;
}());
export { HideableColumnService };
if (false) {
    /**
     * *******
     * \@property dgHiddenColumnMap
     *
     * \@description
     * An array of DatagridHideableColumn.
     * NOTE: because we can have columns w/o the *clrDgHideableColumn directive
     * this array will have empty spaces a.k.a nulls. This is needed to be able to map
     * DatagridCells to DatagridColumns in the RowRenderer.
     *
     * @type {?}
     */
    HideableColumnService.prototype._columnList;
    /**
     * *******
     *
     * \@property dgHiddenColumnMapChange
     *
     * \@description
     * A behavior subject that can broadcast updates to the column list.
     * NOTE: I am using BehaviorSubject because <clr-dg-column-toggle> is not getting the latest _columnListChange
     * on page load.
     *
     * @type {?}
     */
    HideableColumnService.prototype._columnListChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZWFibGUtY29sdW1uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQWF2QztJQUFBOzs7Ozs7Ozs7Ozs7UUFZVSxnQkFBVyxHQUFrQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztRQVloRCxzQkFBaUIsR0FBbUQsSUFBSSxlQUFlLENBRTdGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQThIdEIsQ0FBQztJQW5IQyxzQkFBVyxvREFBaUI7UUFUNUI7Ozs7Ozs7O1dBUUc7Ozs7Ozs7Ozs7OztRQUNIOztnQkFDUSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEtBQUssU0FBUyxFQUFwQixDQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sRUFBYixDQUFhLENBQUM7WUFDN0csT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQVVELHNCQUFXLDREQUF5QjtRQVJwQzs7Ozs7OztXQU9HOzs7Ozs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNuRSxDQUFDOzs7T0FBQTtJQVVELHNCQUFXLG1EQUFnQjtRQVIzQjs7Ozs7OztXQU9HOzs7Ozs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSSwwQ0FBVTs7Ozs7Ozs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNJLGlEQUFpQjs7Ozs7Ozs7OztJQUF4QjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUM3QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDcEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkI7WUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7OztJQUNJLGdEQUFnQjs7Ozs7Ozs7O0lBQXZCLFVBQXdCLE9BQXNDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsaUJBQWlCO1FBQzdDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMscUNBQXFDO1FBQ3hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUNoRSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7OztJQUNJLDBEQUEwQjs7Ozs7Ozs7Ozs7SUFBakM7UUFDRSx1RkFBdUY7UUFDdkYsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNO2dCQUN6QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3RDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsb0dBQW9HO1lBQ3BHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTTtnQkFDekIsSUFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUM1QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUNqQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7OztJQUNJLDZDQUFhOzs7Ozs7Ozs7O0lBQXBCLFVBQXFCLEVBQVU7UUFDN0IsSUFBSSxFQUFFLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7Z0JBdkpGLFVBQVU7O0lBd0pYLDRCQUFDO0NBQUEsQUF4SkQsSUF3SkM7U0F2SlkscUJBQXFCOzs7Ozs7Ozs7Ozs7OztJQVdoQyw0Q0FBd0Q7Ozs7Ozs7Ozs7Ozs7SUFZeEQsa0RBRW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIH0gZnJvbSAnLi4vZGF0YWdyaWQtaGlkZWFibGUtY29sdW1uLm1vZGVsJztcblxuLyoqXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBbiBASW5qZWN0YWJsZSBwcm92aWRlciBjbGFzcyB0aGF0IGVuYWJsZXNcbiAqXG4gKiAxLiBNYW5hZ2luZywgdHJhY2sgaGlkZWFiaWxpdHkgb2YgRGF0YWdyaWRDb2x1bW5zXG4gKlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGlkZWFibGVDb2x1bW5TZXJ2aWNlIHtcbiAgLyoqKioqKioqKipcbiAgICogQHByb3BlcnR5IGRnSGlkZGVuQ29sdW1uTWFwXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBhcnJheSBvZiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uLlxuICAgKiBOT1RFOiBiZWNhdXNlIHdlIGNhbiBoYXZlIGNvbHVtbnMgdy9vIHRoZSAqY2xyRGdIaWRlYWJsZUNvbHVtbiBkaXJlY3RpdmVcbiAgICogdGhpcyBhcnJheSB3aWxsIGhhdmUgZW1wdHkgc3BhY2VzIGEuay5hIG51bGxzLiBUaGlzIGlzIG5lZWRlZCB0byBiZSBhYmxlIHRvIG1hcFxuICAgKiBEYXRhZ3JpZENlbGxzIHRvIERhdGFncmlkQ29sdW1ucyBpbiB0aGUgUm93UmVuZGVyZXIuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9jb2x1bW5MaXN0OiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXSA9IFtdO1xuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBkZ0hpZGRlbkNvbHVtbk1hcENoYW5nZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBiZWhhdmlvciBzdWJqZWN0IHRoYXQgY2FuIGJyb2FkY2FzdCB1cGRhdGVzIHRvIHRoZSBjb2x1bW4gbGlzdC5cbiAgICogTk9URTogSSBhbSB1c2luZyBCZWhhdmlvclN1YmplY3QgYmVjYXVzZSA8Y2xyLWRnLWNvbHVtbi10b2dnbGU+IGlzIG5vdCBnZXR0aW5nIHRoZSBsYXRlc3QgX2NvbHVtbkxpc3RDaGFuZ2VcbiAgICogb24gcGFnZSBsb2FkLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfY29sdW1uTGlzdENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsW11cbiAgPih0aGlzLl9jb2x1bW5MaXN0KTtcblxuICAvKioqKioqKioqKlxuICAgKlxuICAgKiBAcHJvcGVydHkgY2FuSGlkZU5leHRDb2x1bW5cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNlcnZpY2UgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgYnkgY2xyLWRnLWNvbHVtbi10b2dnbGUgY29tcG9uZW50LiBVc2UgdGhpcyBpZiB5b3UgbmVlZCB0byBhc2sgaWYgeW91IGNhbiBoaWRlXG4gICAqIGEgY29sdW1uLiBJdCBhY3RzIGFzIGEgZ3VhcmQgYWdhaW5zdCBoaWRpbmcgYWxsIHRoZSBjb2x1bW5zIG1ha2luZyBzdXJlIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBjb2x1bW4gZGlzcGxheWVkLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBjYW5IaWRlTmV4dENvbHVtbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBoaWRkZW5Db2x1bW5zID0gdGhpcy5fY29sdW1uTGlzdC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbiAhPT0gdW5kZWZpbmVkKS5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5oaWRkZW4pO1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5MaXN0Lmxlbmd0aCAtIGhpZGRlbkNvbHVtbnMubGVuZ3RoID4gMTtcbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBjaGVja0ZvckFsbENvbHVtbnNWaXNpYmxlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBGb3Igd2hlbiB5b3UgbmVlZCB0byBrbm93IGlmIHRoZSBkYXRhZ3JpZCdzIGNvbHVtbnMgYXJlIGFsbCBzaG93aW5nLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBjaGVja0ZvckFsbENvbHVtbnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5fY29sdW1uTGlzdC5zb21lKGNvbHVtbiA9PiBjb2x1bW4gJiYgY29sdW1uLmhpZGRlbik7XG4gIH1cblxuICAvKioqKioqKioqKipcbiAgICogQHByb3BlcnR5IGNvbHVtbkxpc3RDaGFuZ2VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgcHVibGljIHByb3BlcnR5IHRoYXQgZW5hYmxlcyBzdWJzY3JpYmVycyB0byBoZWFyIHVwZGF0ZXMgdG8gdGhlIGNvbHVtbiBtYXAuXG4gICAqIFVzZSB0aGlzIGlmIHlvdSBuZWVkIHRvIGRvIHNvbWV0aGluZyB3aGVuZXZlciB0aGUgRGF0YWdyaWQncyBjb2x1bW4gbGlzdCBpcyBjaGFuZ2VkIChpLmUgKm5nSWYgb24gYSBjb2x1bW4pLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBjb2x1bW5MaXN0Q2hhbmdlKCk6IE9ic2VydmFibGU8RGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsW10+IHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uTGlzdENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBQdWJsaWMgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgY29sdW1ucy4gSSBuZWVkZWQgYW4gYXJyYXkgb2YgdG8gaXRlcmF0ZSBvbiBpbiB0aGUgUm93UmVuZGVyZXJcbiAgICogYnV0IHN1YnNjcmliaW5nIHRvIHRoZSBfY29sdW1uTGlzdENoYW5nZSBjaGFuZ2VzIGRpZCBub3Qgc2VlbSBsaWtlIHRoZSBjb3JyZWN0IHdheSB0byBnZXQgaXQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29sdW1ucygpOiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbkxpc3Q7XG4gIH1cblxuICAvKioqKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjdXJyZW50IF9jb2x1bW5MaXN0OlxuICAgKiAtIGlmIGl0IGhhcyBhIERhdGFncmlkSGlkZWFibGVDb2x1bW4gYW5kIGlzIGhpZGRlbiB0aGVuIHNob3cgaXQuXG4gICAqIC0gaWYgaXQncyBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uIHdhcyBwcmV2aW91c2x5IHRoZSBsYXN0IGNvbHVtbiB2aXNpYmxlLCB0dXJuIHRoYXQgZmxhZyBvZmYuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgc2hvd0hpZGRlbkNvbHVtbnMoKSB7XG4gICAgdGhpcy5fY29sdW1uTGlzdC5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5oaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgY29sdW1uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5sYXN0VmlzaWJsZUNvbHVtbikge1xuICAgICAgICBjb2x1bW4ubGFzdFZpc2libGVDb2x1bW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gY29sdW1uczogRGF0YWdyaWRDb2x1bW5bXVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQ3JlYXRlcyBhbiBhcnJheSBvZiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uJ3MgfHwgbnVsbCBiYXNlZCBjb2x1bW4gYXJyYXkgcGFzc2VkIGFzIHBhcmFtLlxuICAgKiBJcyBkZXBlbmRlbnQgb24gdGhlIG9yZGVyIGluIEBDb250ZW50Q2hpbGRyZW4gaW4gRGF0YWdyaWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlQ29sdW1uTGlzdChjb2x1bW5zOiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXSkge1xuICAgIHRoaXMuX2NvbHVtbkxpc3QgPSBjb2x1bW5zOyAvLyBjbGVhciB0aGUgbGlzdFxuICAgIHRoaXMudXBkYXRlRm9yTGFzdFZpc2libGVDb2x1bW4oKTsgLy8gVXBkYXRlIG91ciB2aXNpYmlsaXR5IHN0YXRlIGZvciBVSVxuICAgIHRoaXMuX2NvbHVtbkxpc3RDaGFuZ2UubmV4dCh0aGlzLl9jb2x1bW5MaXN0KTsgLy8gQnJvYWRjYXN0IGl0XG4gIH1cblxuICAvKioqKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogR2V0cyB0aGUgY3VycmVudCB2aXNpYmxlIGNvdW50IGZvciBhbGwgY29sdW1ucy5cbiAgICogV2hlbiBpdCBpcyBncmVhdGVyIHRoYW4gMSBpdCBtYXJrcyBldmVyeXRoaW5nIGFzIGZhbHNlIGZvciB0aGUgbGFzdFZpc2libGVDb2x1bW4uXG4gICAqIFdoZW4gdmlzaWJsZSBjb3VudCBpcyBub3QgPiAxIChpLmUpIDEuICwgaXQgZmluZHMgdGhlIG9ubHkgY29sdW1uIHRoYXQgaXMgbm90IGhpZGRlbiBhbmQgbWFya3MgaXQgYXMgdGhlXG4gICAqIGxhc3RWaXNpYmxlQ29sdW1uLlxuICAgKlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZUZvckxhc3RWaXNpYmxlQ29sdW1uKCk6IHZvaWQge1xuICAgIC8vIFRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgY29sdW1uIHNob3dpbmcsIG1ha2Ugc3VyZSBub3RoaW5nIGlzIG1hcmtlZCBsYXN0VmlzaWJsZUNvbHVtblxuICAgIGlmICh0aGlzLmNhbkhpZGVOZXh0Q29sdW1uKSB7XG4gICAgICB0aGlzLl9jb2x1bW5MaXN0Lm1hcChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5sYXN0VmlzaWJsZUNvbHVtbikge1xuICAgICAgICAgIGNvbHVtbi5sYXN0VmlzaWJsZUNvbHVtbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHZpc2libGVDb3VudCBpcyBkb3duIHRvIG9ubHkgb25lIGNvbHVtbiBzaG93aW5nLiBGaW5kIGl0IGFuZCBmbGFnIGl0IGFzIHRoZSBsYXN0VmlzaWJsZUNvbHVtblxuICAgICAgdGhpcy5fY29sdW1uTGlzdC5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbiAmJiAhY29sdW1uLmhpZGRlbikge1xuICAgICAgICAgIGNvbHVtbi5sYXN0VmlzaWJsZUNvbHVtbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZXR1cm4gYSBIaWRlYWJsZUNvbHVtbiBpbiB0aGlzLl9jb2x1bW5MaXN0IGZvciB0aGUgZ2l2ZW4gaWQuXG4gICAqXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0Q29sdW1uQnlJZChpZDogc3RyaW5nKTogdW5kZWZpbmVkIHwgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5MaXN0LmZpbmQoY29sdW1uID0+IGNvbHVtbiAmJiBjb2x1bW4uaWQgPT09IGlkKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=