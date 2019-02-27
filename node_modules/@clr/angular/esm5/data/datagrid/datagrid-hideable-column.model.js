/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 *
 * \@description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
var /**
 *
 * \@description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
DatagridHideableColumnModel = /** @class */ (function () {
    /**
     *
     * @description
     * The init function for DatagridHideableColumnModel instances that does the following:
     *
     * 1. Set values for the private variables that enable a hideable column
     * 2. Broadcast the next hidden change for anyone (already) subscribed to this DatagridHideableColumnModel
     *
     */
    function DatagridHideableColumnModel(_template, _id, _hidden) {
        if (_hidden === void 0) { _hidden = false; }
        this._template = _template;
        this._id = _id;
        this._hidden = _hidden;
        /**
         * \@property hiddenChanges
         *
         * \@description
         * A stream of state changes an instance of DatagridHideableColumnModel will broadcast to subscribers.
         *
         */
        this.hiddenChangesState = new Subject();
        // Flag this true when the service only has one visible column open.
        this.lastVisibleColumn = false;
    }
    Object.defineProperty(DatagridHideableColumnModel.prototype, "template", {
        /**
         *
         * @description
         * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
         * populate the DatagridColumnToggle UI with the correct Column name.
         *
         */
        get: /**
         *
         * \@description
         * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
         * populate the DatagridColumnToggle UI with the correct Column name.
         *
         * @return {?}
         */
        function () {
            return this._template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumnModel.prototype, "id", {
        /**
         *
         * @description
         * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
         * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
         *
         */
        get: /**
         *
         * \@description
         * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
         * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
         *
         * @return {?}
         */
        function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumnModel.prototype, "hidden", {
        /**
         *
         * @description
         * A getter that returns the hidden value of a DatagridHideableColumnModel instance.
         *
         */
        get: /**
         *
         * \@description
         * A getter that returns the hidden value of a DatagridHideableColumnModel instance.
         *
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        /**
         *
         * @description
         * The setter for setting the hidden state of a DatagridHideableColumnModel instance.
         * It also broadcasts the change after its set.
         *
         */
        set: /**
         *
         * \@description
         * The setter for setting the hidden state of a DatagridHideableColumnModel instance.
         * It also broadcasts the change after its set.
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._hidden === value) {
                return;
            }
            this._hidden = value;
            this.hiddenChangesState.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridHideableColumnModel.prototype, "hiddenChangeState", {
        /**
         *
         * @description
         * An Observable for the HideableColumns hidden changes.
         *
         */
        get: /**
         *
         * \@description
         * An Observable for the HideableColumns hidden changes.
         *
         * @return {?}
         */
        function () {
            return this.hiddenChangesState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return DatagridHideableColumnModel;
}());
/**
 *
 * \@description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
export { DatagridHideableColumnModel };
if (false) {
    /**
     * \@property hiddenChanges
     *
     * \@description
     * A stream of state changes an instance of DatagridHideableColumnModel will broadcast to subscribers.
     *
     * @type {?}
     */
    DatagridHideableColumnModel.prototype.hiddenChangesState;
    /** @type {?} */
    DatagridHideableColumnModel.prototype.lastVisibleColumn;
    /** @type {?} */
    DatagridHideableColumnModel.prototype._template;
    /** @type {?} */
    DatagridHideableColumnModel.prototype._id;
    /** @type {?} */
    DatagridHideableColumnModel.prototype._hidden;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaGlkZWFibGUtY29sdW1uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBUy9COzs7Ozs7OztJQVVFOzs7Ozs7OztPQVFHO0lBQ0gscUNBQW9CLFNBQTJCLEVBQVUsR0FBVyxFQUFVLE9BQXdCO1FBQXhCLHdCQUFBLEVBQUEsZUFBd0I7UUFBbEYsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7Ozs7Ozs7O1FBWDlGLHVCQUFrQixHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDOztRQXdFL0Qsc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBN0QrRCxDQUFDO0lBUzFHLHNCQUFJLGlEQUFRO1FBUFo7Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQVNELHNCQUFJLDJDQUFFO1FBUE47Ozs7OztXQU1HOzs7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQVFELHNCQUFJLCtDQUFNO1FBTlY7Ozs7O1dBS0c7Ozs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQUVEOzs7Ozs7V0FNRzs7Ozs7Ozs7OztRQUNILFVBQVcsS0FBYztZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUMxQixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQWZBO0lBdUJELHNCQUFJLDBEQUFpQjtRQU5yQjs7Ozs7V0FLRzs7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBS0gsa0NBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF6RUMseURBQXNFOztJQXdFdEUsd0RBQTBDOztJQTdEOUIsZ0RBQW1DOztJQUFFLDBDQUFtQjs7SUFBRSw4Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgdXRpbGl0eSBjbGFzcyBmb3IgdGhhdCBhZGRzIGhpZGUvc2hvdyBmdW5jdGlvbmFsaXR5IHRvIGEgY29sdW1uLCBpdHMgY2VsbHMgYW5kIGVuYWJsZXMgYSB0b2dnbGVyIGluIHRoZVxuICogRGF0YWdyaWRDb2x1bW5Ub2dnbGUgQ29tcG9uZW50LlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCB7XG4gIC8qKlxuICAgKiBAcHJvcGVydHkgaGlkZGVuQ2hhbmdlc1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBzdHJlYW0gb2Ygc3RhdGUgY2hhbmdlcyBhbiBpbnN0YW5jZSBvZiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWwgd2lsbCBicm9hZGNhc3QgdG8gc3Vic2NyaWJlcnMuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIGhpZGRlbkNoYW5nZXNTdGF0ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBUaGUgaW5pdCBmdW5jdGlvbiBmb3IgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIGluc3RhbmNlcyB0aGF0IGRvZXMgdGhlIGZvbGxvd2luZzpcbiAgICpcbiAgICogMS4gU2V0IHZhbHVlcyBmb3IgdGhlIHByaXZhdGUgdmFyaWFibGVzIHRoYXQgZW5hYmxlIGEgaGlkZWFibGUgY29sdW1uXG4gICAqIDIuIEJyb2FkY2FzdCB0aGUgbmV4dCBoaWRkZW4gY2hhbmdlIGZvciBhbnlvbmUgKGFscmVhZHkpIHN1YnNjcmliZWQgdG8gdGhpcyBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIF9pZDogc3RyaW5nLCBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSBmYWxzZSkge31cblxuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBUZW1wbGF0ZVJlZiBvZiB0aGUgRGF0YWdyaWRDb2x1bW4gdGhhdCBpcyBoaWRlYWJsZS4gVGhpcyBpcyBjdXJyZW50bHkgdXNlZCB0b1xuICAgKiBwb3B1bGF0ZSB0aGUgRGF0YWdyaWRDb2x1bW5Ub2dnbGUgVUkgd2l0aCB0aGUgY29ycmVjdCBDb2x1bW4gbmFtZS5cbiAgICpcbiAgICovXG4gIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIHB1YmxpYyBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGlkIG9mIGEgSGlkZWFibGVDT2x1bW4gaW5zdGFuY2UuIFVzZWQgYnkgdGhlIEhpZGVhYmxlQ09sdW1uU2VydmljZSBmb3IgcGFzc2luZ1xuICAgKiBzdGF0ZSBhbmQgYWN0aW9ucyBiZXR3ZWVuIERhdGVHcmlkQ29sdW1ucywgRGF0YUdyaWRDZWxscyAmIHRoZSBEYXRhZ3JpZENvbHVtblRvZ2dsZSBDb21wb25lbnRzLlxuICAgKlxuICAgKi9cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIGdldHRlciB0aGF0IHJldHVybnMgdGhlIGhpZGRlbiB2YWx1ZSBvZiBhIERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCBpbnN0YW5jZS5cbiAgICpcbiAgICovXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGRlbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVGhlIHNldHRlciBmb3Igc2V0dGluZyB0aGUgaGlkZGVuIHN0YXRlIG9mIGEgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIGluc3RhbmNlLlxuICAgKiBJdCBhbHNvIGJyb2FkY2FzdHMgdGhlIGNoYW5nZSBhZnRlciBpdHMgc2V0LlxuICAgKlxuICAgKi9cbiAgc2V0IGhpZGRlbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9oaWRkZW4gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2hpZGRlbiA9IHZhbHVlO1xuICAgIHRoaXMuaGlkZGVuQ2hhbmdlc1N0YXRlLm5leHQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBPYnNlcnZhYmxlIGZvciB0aGUgSGlkZWFibGVDb2x1bW5zIGhpZGRlbiBjaGFuZ2VzLlxuICAgKlxuICAgKi9cbiAgZ2V0IGhpZGRlbkNoYW5nZVN0YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbkNoYW5nZXNTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8vIEZsYWcgdGhpcyB0cnVlIHdoZW4gdGhlIHNlcnZpY2Ugb25seSBoYXMgb25lIHZpc2libGUgY29sdW1uIG9wZW4uXG5cbiAgcHVibGljIGxhc3RWaXNpYmxlQ29sdW1uOiBib29sZWFuID0gZmFsc2U7XG59XG4iXX0=