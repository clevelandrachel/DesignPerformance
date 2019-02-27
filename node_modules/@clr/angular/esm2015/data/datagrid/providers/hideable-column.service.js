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
export class HideableColumnService {
    constructor() {
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
    /**
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
    get canHideNextColumn() {
        /** @type {?} */
        const hiddenColumns = this._columnList.filter(column => column !== undefined).filter(column => column.hidden);
        return this._columnList.length - hiddenColumns.length > 1;
    }
    /**
     * *******
     *
     * \@property checkForAllColumnsVisible
     *
     * \@description
     * For when you need to know if the datagrid's columns are all showing.
     *
     * @return {?}
     */
    get checkForAllColumnsVisible() {
        return !this._columnList.some(column => column && column.hidden);
    }
    /**
     * ********
     * \@property columnListChange
     *
     * \@description
     * A public property that enables subscribers to hear updates to the column map.
     * Use this if you need to do something whenever the Datagrid's column list is changed (i.e *ngIf on a column).
     *
     * @return {?}
     */
    get columnListChange() {
        return this._columnListChange.asObservable();
    }
    /**
     * *******
     *
     * \@description
     * Public function that returns the current list of columns. I needed an array of to iterate on in the RowRenderer
     * but subscribing to the _columnListChange changes did not seem like the correct way to get it.
     *
     * @return {?}
     */
    getColumns() {
        return this._columnList;
    }
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
    showHiddenColumns() {
        this._columnList.forEach(column => {
            if (column && column.hidden === true) {
                column.hidden = false;
            }
            if (column && column.lastVisibleColumn) {
                column.lastVisibleColumn = false;
            }
        });
    }
    /**
     *
     * \@description
     * Creates an array of DatagridHideableColumn's || null based column array passed as param.
     * Is dependent on the order in \@ContentChildren in Datagrid.
     *
     * @param {?} columns
     * @return {?}
     */
    updateColumnList(columns) {
        this._columnList = columns; // clear the list
        this.updateForLastVisibleColumn(); // Update our visibility state for UI
        this._columnListChange.next(this._columnList); // Broadcast it
    }
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
    updateForLastVisibleColumn() {
        // There is more than one column showing, make sure nothing is marked lastVisibleColumn
        if (this.canHideNextColumn) {
            this._columnList.map(column => {
                if (column && column.lastVisibleColumn) {
                    column.lastVisibleColumn = false;
                }
            });
        }
        else {
            // The visibleCount is down to only one column showing. Find it and flag it as the lastVisibleColumn
            this._columnList.map(column => {
                if (column && !column.hidden) {
                    column.lastVisibleColumn = true;
                }
            });
        }
    }
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
    getColumnById(id) {
        if (id) {
            return this._columnList.find(column => column && column.id === id);
        }
        return;
    }
}
HideableColumnService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZWFibGUtY29sdW1uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQWN2QyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDOzs7Ozs7Ozs7Ozs7UUFZVSxnQkFBVyxHQUFrQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztRQVloRCxzQkFBaUIsR0FBbUQsSUFBSSxlQUFlLENBRTdGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQThIdEIsQ0FBQzs7Ozs7Ozs7Ozs7O0lBbkhDLElBQVcsaUJBQWlCOztjQUNwQixhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3RyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7Ozs7Ozs7O0lBVUQsSUFBVyx5QkFBeUI7UUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7Ozs7OztJQVVELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7Ozs7SUFTTSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7Ozs7O0lBVU0saUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNwQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN2QjtZQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQzthQUNsQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7OztJQVdNLGdCQUFnQixDQUFDLE9BQXNDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUMsaUJBQWlCO1FBQzdDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUMscUNBQXFDO1FBQ3hFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZUFBZTtJQUNoRSxDQUFDOzs7Ozs7Ozs7Ozs7SUFXTSwwQkFBMEI7UUFDL0IsdUZBQXVGO1FBQ3ZGLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3RDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsb0dBQW9HO1lBQ3BHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7aUJBQ2pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7Ozs7Ozs7O0lBU00sYUFBYSxDQUFDLEVBQVU7UUFDN0IsSUFBSSxFQUFFLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEU7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7O1lBdkpGLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztJQVlULDRDQUF3RDs7Ozs7Ozs7Ozs7OztJQVl4RCxrREFFb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWwgfSBmcm9tICcuLi9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4ubW9kZWwnO1xuXG4vKipcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFuIEBJbmplY3RhYmxlIHByb3ZpZGVyIGNsYXNzIHRoYXQgZW5hYmxlc1xuICpcbiAqIDEuIE1hbmFnaW5nLCB0cmFjayBoaWRlYWJpbGl0eSBvZiBEYXRhZ3JpZENvbHVtbnNcbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaWRlYWJsZUNvbHVtblNlcnZpY2Uge1xuICAvKioqKioqKioqKlxuICAgKiBAcHJvcGVydHkgZGdIaWRkZW5Db2x1bW5NYXBcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEFuIGFycmF5IG9mIERhdGFncmlkSGlkZWFibGVDb2x1bW4uXG4gICAqIE5PVEU6IGJlY2F1c2Ugd2UgY2FuIGhhdmUgY29sdW1ucyB3L28gdGhlICpjbHJEZ0hpZGVhYmxlQ29sdW1uIGRpcmVjdGl2ZVxuICAgKiB0aGlzIGFycmF5IHdpbGwgaGF2ZSBlbXB0eSBzcGFjZXMgYS5rLmEgbnVsbHMuIFRoaXMgaXMgbmVlZGVkIHRvIGJlIGFibGUgdG8gbWFwXG4gICAqIERhdGFncmlkQ2VsbHMgdG8gRGF0YWdyaWRDb2x1bW5zIGluIHRoZSBSb3dSZW5kZXJlci5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgX2NvbHVtbkxpc3Q6IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbFtdID0gW107XG5cbiAgLyoqKioqKioqKipcbiAgICpcbiAgICogQHByb3BlcnR5IGRnSGlkZGVuQ29sdW1uTWFwQ2hhbmdlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIGJlaGF2aW9yIHN1YmplY3QgdGhhdCBjYW4gYnJvYWRjYXN0IHVwZGF0ZXMgdG8gdGhlIGNvbHVtbiBsaXN0LlxuICAgKiBOT1RFOiBJIGFtIHVzaW5nIEJlaGF2aW9yU3ViamVjdCBiZWNhdXNlIDxjbHItZGctY29sdW1uLXRvZ2dsZT4gaXMgbm90IGdldHRpbmcgdGhlIGxhdGVzdCBfY29sdW1uTGlzdENoYW5nZVxuICAgKiBvbiBwYWdlIGxvYWQuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9jb2x1bW5MaXN0Q2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8RGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXVxuICA+KHRoaXMuX2NvbHVtbkxpc3QpO1xuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBjYW5IaWRlTmV4dENvbHVtblxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2VydmljZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBieSBjbHItZGctY29sdW1uLXRvZ2dsZSBjb21wb25lbnQuIFVzZSB0aGlzIGlmIHlvdSBuZWVkIHRvIGFzayBpZiB5b3UgY2FuIGhpZGVcbiAgICogYSBjb2x1bW4uIEl0IGFjdHMgYXMgYSBndWFyZCBhZ2FpbnN0IGhpZGluZyBhbGwgdGhlIGNvbHVtbnMgbWFraW5nIHN1cmUgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGNvbHVtbiBkaXNwbGF5ZWQuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhbkhpZGVOZXh0Q29sdW1uKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSB0aGlzLl9jb2x1bW5MaXN0LmZpbHRlcihjb2x1bW4gPT4gY29sdW1uICE9PSB1bmRlZmluZWQpLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLmhpZGRlbik7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbkxpc3QubGVuZ3RoIC0gaGlkZGVuQ29sdW1ucy5sZW5ndGggPiAxO1xuICB9XG5cbiAgLyoqKioqKioqKipcbiAgICpcbiAgICogQHByb3BlcnR5IGNoZWNrRm9yQWxsQ29sdW1uc1Zpc2libGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEZvciB3aGVuIHlvdSBuZWVkIHRvIGtub3cgaWYgdGhlIGRhdGFncmlkJ3MgY29sdW1ucyBhcmUgYWxsIHNob3dpbmcuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNoZWNrRm9yQWxsQ29sdW1uc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLl9jb2x1bW5MaXN0LnNvbWUoY29sdW1uID0+IGNvbHVtbiAmJiBjb2x1bW4uaGlkZGVuKTtcbiAgfVxuXG4gIC8qKioqKioqKioqKlxuICAgKiBAcHJvcGVydHkgY29sdW1uTGlzdENoYW5nZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBwdWJsaWMgcHJvcGVydHkgdGhhdCBlbmFibGVzIHN1YnNjcmliZXJzIHRvIGhlYXIgdXBkYXRlcyB0byB0aGUgY29sdW1uIG1hcC5cbiAgICogVXNlIHRoaXMgaWYgeW91IG5lZWQgdG8gZG8gc29tZXRoaW5nIHdoZW5ldmVyIHRoZSBEYXRhZ3JpZCdzIGNvbHVtbiBsaXN0IGlzIGNoYW5nZWQgKGkuZSAqbmdJZiBvbiBhIGNvbHVtbikuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbHVtbkxpc3RDaGFuZ2UoKTogT2JzZXJ2YWJsZTxEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXT4ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5MaXN0Q2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFB1YmxpYyBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgbGlzdCBvZiBjb2x1bW5zLiBJIG5lZWRlZCBhbiBhcnJheSBvZiB0byBpdGVyYXRlIG9uIGluIHRoZSBSb3dSZW5kZXJlclxuICAgKiBidXQgc3Vic2NyaWJpbmcgdG8gdGhlIF9jb2x1bW5MaXN0Q2hhbmdlIGNoYW5nZXMgZGlkIG5vdCBzZWVtIGxpa2UgdGhlIGNvcnJlY3Qgd2F5IHRvIGdldCBpdC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXRDb2x1bW5zKCk6IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uTGlzdDtcbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBJdGVyYXRlIHRocm91Z2ggdGhlIGN1cnJlbnQgX2NvbHVtbkxpc3Q6XG4gICAqIC0gaWYgaXQgaGFzIGEgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbiBhbmQgaXMgaGlkZGVuIHRoZW4gc2hvdyBpdC5cbiAgICogLSBpZiBpdCdzIERhdGFncmlkSGlkZWFibGVDb2x1bW4gd2FzIHByZXZpb3VzbHkgdGhlIGxhc3QgY29sdW1uIHZpc2libGUsIHR1cm4gdGhhdCBmbGFnIG9mZi5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBzaG93SGlkZGVuQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5MaXN0LmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBjb2x1bW4uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5sYXN0VmlzaWJsZUNvbHVtbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjb2x1bW5zOiBEYXRhZ3JpZENvbHVtbltdXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIERhdGFncmlkSGlkZWFibGVDb2x1bW4ncyB8fCBudWxsIGJhc2VkIGNvbHVtbiBhcnJheSBwYXNzZWQgYXMgcGFyYW0uXG4gICAqIElzIGRlcGVuZGVudCBvbiB0aGUgb3JkZXIgaW4gQENvbnRlbnRDaGlsZHJlbiBpbiBEYXRhZ3JpZC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVDb2x1bW5MaXN0KGNvbHVtbnM6IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbFtdKSB7XG4gICAgdGhpcy5fY29sdW1uTGlzdCA9IGNvbHVtbnM7IC8vIGNsZWFyIHRoZSBsaXN0XG4gICAgdGhpcy51cGRhdGVGb3JMYXN0VmlzaWJsZUNvbHVtbigpOyAvLyBVcGRhdGUgb3VyIHZpc2liaWxpdHkgc3RhdGUgZm9yIFVJXG4gICAgdGhpcy5fY29sdW1uTGlzdENoYW5nZS5uZXh0KHRoaXMuX2NvbHVtbkxpc3QpOyAvLyBCcm9hZGNhc3QgaXRcbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHZpc2libGUgY291bnQgZm9yIGFsbCBjb2x1bW5zLlxuICAgKiBXaGVuIGl0IGlzIGdyZWF0ZXIgdGhhbiAxIGl0IG1hcmtzIGV2ZXJ5dGhpbmcgYXMgZmFsc2UgZm9yIHRoZSBsYXN0VmlzaWJsZUNvbHVtbi5cbiAgICogV2hlbiB2aXNpYmxlIGNvdW50IGlzIG5vdCA+IDEgKGkuZSkgMS4gLCBpdCBmaW5kcyB0aGUgb25seSBjb2x1bW4gdGhhdCBpcyBub3QgaGlkZGVuIGFuZCBtYXJrcyBpdCBhcyB0aGVcbiAgICogbGFzdFZpc2libGVDb2x1bW4uXG4gICAqXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlRm9yTGFzdFZpc2libGVDb2x1bW4oKTogdm9pZCB7XG4gICAgLy8gVGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBjb2x1bW4gc2hvd2luZywgbWFrZSBzdXJlIG5vdGhpbmcgaXMgbWFya2VkIGxhc3RWaXNpYmxlQ29sdW1uXG4gICAgaWYgKHRoaXMuY2FuSGlkZU5leHRDb2x1bW4pIHtcbiAgICAgIHRoaXMuX2NvbHVtbkxpc3QubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4gJiYgY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uKSB7XG4gICAgICAgICAgY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgdmlzaWJsZUNvdW50IGlzIGRvd24gdG8gb25seSBvbmUgY29sdW1uIHNob3dpbmcuIEZpbmQgaXQgYW5kIGZsYWcgaXQgYXMgdGhlIGxhc3RWaXNpYmxlQ29sdW1uXG4gICAgICB0aGlzLl9jb2x1bW5MaXN0Lm1hcChjb2x1bW4gPT4ge1xuICAgICAgICBpZiAoY29sdW1uICYmICFjb2x1bW4uaGlkZGVuKSB7XG4gICAgICAgICAgY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybiBhIEhpZGVhYmxlQ29sdW1uIGluIHRoaXMuX2NvbHVtbkxpc3QgZm9yIHRoZSBnaXZlbiBpZC5cbiAgICpcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXRDb2x1bW5CeUlkKGlkOiBzdHJpbmcpOiB1bmRlZmluZWQgfCBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWwge1xuICAgIGlmIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbkxpc3QuZmluZChjb2x1bW4gPT4gY29sdW1uICYmIGNvbHVtbi5pZCA9PT0gaWQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==