/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, TemplateRef, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { ClrDatagridColumn } from './datagrid-column';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
var ClrDatagridHideableColumn = /** @class */ (function () {
    /**
     * @description
     * Used the DatagridColumn to get and set an id for this HiddenColumn
     *
     */
    function ClrDatagridHideableColumn(templateRef, viewContainerRef, dgColumn) {
        var _this = this;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.dgColumn = dgColumn;
        this.hiddenChange = new EventEmitter();
        this.columnId = dgColumn.columnId;
        // Use the templateRef to create this view
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        // Create instance of the utility class DatagridHideableColumn.
        // Note this is on the parent instance of DatagridColumn.
        this.dgColumn.hideable = new DatagridHideableColumnModel(this.templateRef, this.columnId, this._hidden);
        this.dgColumn.hideable.hiddenChangeState.subscribe(function (state) { return _this.hiddenChange.emit(state); });
    }
    Object.defineProperty(ClrDatagridHideableColumn.prototype, "clrDgHideableColumn", {
        /**
         *
         * @description
         * Setter fn for the @Input with the same name as this structural directive.
         * It allows the user to pre-configure the column's hide/show state. { hidden: true }
         * It's more verbose but has more Clarity.
         *
         *
         * @example
         * *clrDgHideableColumn
         * *clrDgHideableColumn={hidden: false}
         * *clrDgHideableColumn={hidden: true}
         *
         */
        set: /**
         *
         * \@description
         * Setter fn for the \@Input with the same name as this structural directive.
         * It allows the user to pre-configure the column's hide/show state. { hidden: true }
         * It's more verbose but has more Clarity.
         *
         *
         * \@example
         * *clrDgHideableColumn
         * *clrDgHideableColumn={hidden: false}
         * *clrDgHideableColumn={hidden: true}
         *
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clrDgHidden = value && value.hidden ? value.hidden : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatagridHideableColumn.prototype, "clrDgHidden", {
        set: /**
         * @param {?} hidden
         * @return {?}
         */
        function (hidden) {
            this._hidden = hidden ? hidden : false;
            if (this.dgColumn.hideable) {
                this.dgColumn.hideable.hidden = this._hidden;
            }
        },
        enumerable: true,
        configurable: true
    });
    ClrDatagridHideableColumn.decorators = [
        { type: Directive, args: [{ selector: '[clrDgHideableColumn]' },] }
    ];
    /** @nocollapse */
    ClrDatagridHideableColumn.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ClrDatagridColumn }
    ]; };
    ClrDatagridHideableColumn.propDecorators = {
        clrDgHideableColumn: [{ type: Input, args: ['clrDgHideableColumn',] }],
        clrDgHidden: [{ type: Input, args: ['clrDgHidden',] }],
        hiddenChange: [{ type: Output, args: ['clrDgHiddenChange',] }]
    };
    return ClrDatagridHideableColumn;
}());
export { ClrDatagridHideableColumn };
if (false) {
    /**
     *
     * \@description
     * Used to initialize the column with either hidden or visible state.
     *
     * @type {?}
     */
    ClrDatagridHideableColumn.prototype._hidden;
    /** @type {?} */
    ClrDatagridHideableColumn.prototype.hiddenChange;
    /**
     *
     * \@description
     * A unique identifier passed into the directive from the parent (A DatagridColumn).
     *
     * @type {?}
     */
    ClrDatagridHideableColumn.prototype.columnId;
    /**
     *
     * \@description
     * An instance of the DatagridHideableColumn Utility class that is used to:
     * 1. Create an instance of HideableColumn that will manage the TemplateRef, state and communication
     * 2. Manage the hidden/shown state for the column to which this directive is applied
     * 3. track the id of the hidden column so it can be used in cells as well as on the column
     * @type {?}
     */
    ClrDatagridHideableColumn.prototype.column;
    /** @type {?} */
    ClrDatagridHideableColumn.prototype.templateRef;
    /** @type {?} */
    ClrDatagridHideableColumn.prototype.viewContainerRef;
    /** @type {?} */
    ClrDatagridHideableColumn.prototype.dgColumn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaGlkZWFibGUtY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0U7SUF5RUU7Ozs7T0FJRztJQUNILG1DQUNVLFdBQTZCLEVBQzdCLGdCQUFrQyxFQUNsQyxRQUFnQztRQUgxQyxpQkFjQztRQWJTLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBNUJOLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQThCN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRWxDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNELCtEQUErRDtRQUMvRCx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDN0YsQ0FBQztJQXBERCxzQkFDSSwwREFBbUI7UUFmdkI7Ozs7Ozs7Ozs7Ozs7V0FhRzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDSCxVQUN3QixLQUEwQjtZQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxrREFBVzs7Ozs7UUFEZixVQUNnQixNQUFlO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5QztRQUNILENBQUM7OztPQUFBOztnQkFuREYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFOzs7O2dCQUxyQixXQUFXO2dCQUFFLGdCQUFnQjtnQkFFL0MsaUJBQWlCOzs7c0NBMkN2QixLQUFLLFNBQUMscUJBQXFCOzhCQUszQixLQUFLLFNBQUMsYUFBYTsrQkFRbkIsTUFBTSxTQUFDLG1CQUFtQjs7SUF3QzdCLGdDQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0E1RVkseUJBQXlCOzs7Ozs7Ozs7SUFPcEMsNENBQXlCOztJQTZCekIsaURBQStFOzs7Ozs7OztJQVEvRSw2Q0FBd0I7Ozs7Ozs7Ozs7SUFVeEIsMkNBQTJDOztJQVF6QyxnREFBcUM7O0lBQ3JDLHFEQUEwQzs7SUFDMUMsNkNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckRhdGFncmlkQ29sdW1uIH0gZnJvbSAnLi9kYXRhZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIH0gZnJvbSAnLi9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4ubW9kZWwnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyRGdIaWRlYWJsZUNvbHVtbl0nIH0pXG5cbi8qKlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQSBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBtZWFudCB0byBiZSB1c2VkIGluc2lkZSBhIGNsci1kZy1jb2x1bW4gY29tcG9uZW50LlxuICpcbiAqIDxjbHItZGctY29sdW1uPlxuICogICAgICAgPG5nLWNvbnRhaW5lciAqY2xyRGdIaWRlYWJsZUNvbHVtbj1cInsgaGlkZGVuOiB0cnVlIH1cIj5cbiAqICAgICAgICAgICBVc2VyIElEXG4gKiAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAqICAgPC9jbHItZGctY29sdW1uPlxuICpcbiAqIEl0IHNldHMgdXAgc3RhdGUgYW5kIHByb3BlcnRpZXMgc28gdGhhdCBjb2x1bW5zIGNhbiBiZSBtYW5nZXMgZm9yIGhpZGUvc2hvdyBieSBhIHNlcnZpY2UgYW5kIGFuIGludGVybmFsXG4gKiBkYXRhZ3JpZCB0b2dnbGUgY29tcG9uZW50LlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkSGlkZWFibGVDb2x1bW4ge1xuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFVzZWQgdG8gaW5pdGlhbGl6ZSB0aGUgY29sdW1uIHdpdGggZWl0aGVyIGhpZGRlbiBvciB2aXNpYmxlIHN0YXRlLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0dGVyIGZuIGZvciB0aGUgQElucHV0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGlzIHN0cnVjdHVyYWwgZGlyZWN0aXZlLlxuICAgKiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gcHJlLWNvbmZpZ3VyZSB0aGUgY29sdW1uJ3MgaGlkZS9zaG93IHN0YXRlLiB7IGhpZGRlbjogdHJ1ZSB9XG4gICAqIEl0J3MgbW9yZSB2ZXJib3NlIGJ1dCBoYXMgbW9yZSBDbGFyaXR5LlxuICAgKlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAqY2xyRGdIaWRlYWJsZUNvbHVtblxuICAgKiAqY2xyRGdIaWRlYWJsZUNvbHVtbj17aGlkZGVuOiBmYWxzZX1cbiAgICogKmNsckRnSGlkZWFibGVDb2x1bW49e2hpZGRlbjogdHJ1ZX1cbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY2xyRGdIaWRlYWJsZUNvbHVtbicpXG4gIHNldCBjbHJEZ0hpZGVhYmxlQ29sdW1uKHZhbHVlOiB7IGhpZGRlbjogYm9vbGVhbiB9KSB7XG4gICAgdGhpcy5jbHJEZ0hpZGRlbiA9IHZhbHVlICYmIHZhbHVlLmhpZGRlbiA/IHZhbHVlLmhpZGRlbiA6IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCdjbHJEZ0hpZGRlbicpXG4gIHNldCBjbHJEZ0hpZGRlbihoaWRkZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRkZW4gPSBoaWRkZW4gPyBoaWRkZW4gOiBmYWxzZTtcbiAgICBpZiAodGhpcy5kZ0NvbHVtbi5oaWRlYWJsZSkge1xuICAgICAgdGhpcy5kZ0NvbHVtbi5oaWRlYWJsZS5oaWRkZW4gPSB0aGlzLl9oaWRkZW47XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgnY2xyRGdIaWRkZW5DaGFuZ2UnKSBwdWJsaWMgaGlkZGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSB1bmlxdWUgaWRlbnRpZmllciBwYXNzZWQgaW50byB0aGUgZGlyZWN0aXZlIGZyb20gdGhlIHBhcmVudCAoQSBEYXRhZ3JpZENvbHVtbikuXG4gICAqXG4gICAqL1xuICBwdWJsaWMgY29sdW1uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEFuIGluc3RhbmNlIG9mIHRoZSBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uIFV0aWxpdHkgY2xhc3MgdGhhdCBpcyB1c2VkIHRvOlxuICAgKiAxLiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgSGlkZWFibGVDb2x1bW4gdGhhdCB3aWxsIG1hbmFnZSB0aGUgVGVtcGxhdGVSZWYsIHN0YXRlIGFuZCBjb21tdW5pY2F0aW9uXG4gICAqIDIuIE1hbmFnZSB0aGUgaGlkZGVuL3Nob3duIHN0YXRlIGZvciB0aGUgY29sdW1uIHRvIHdoaWNoIHRoaXMgZGlyZWN0aXZlIGlzIGFwcGxpZWRcbiAgICogMy4gdHJhY2sgdGhlIGlkIG9mIHRoZSBoaWRkZW4gY29sdW1uIHNvIGl0IGNhbiBiZSB1c2VkIGluIGNlbGxzIGFzIHdlbGwgYXMgb24gdGhlIGNvbHVtblxuICAgKi9cbiAgcHVibGljIGNvbHVtbjogRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsO1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVXNlZCB0aGUgRGF0YWdyaWRDb2x1bW4gdG8gZ2V0IGFuZCBzZXQgYW4gaWQgZm9yIHRoaXMgSGlkZGVuQ29sdW1uXG4gICAqXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGRnQ29sdW1uOiBDbHJEYXRhZ3JpZENvbHVtbjxhbnk+XG4gICkge1xuICAgIHRoaXMuY29sdW1uSWQgPSBkZ0NvbHVtbi5jb2x1bW5JZDtcblxuICAgIC8vIFVzZSB0aGUgdGVtcGxhdGVSZWYgdG8gY3JlYXRlIHRoaXMgdmlld1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG5cbiAgICAvLyBDcmVhdGUgaW5zdGFuY2Ugb2YgdGhlIHV0aWxpdHkgY2xhc3MgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbi5cbiAgICAvLyBOb3RlIHRoaXMgaXMgb24gdGhlIHBhcmVudCBpbnN0YW5jZSBvZiBEYXRhZ3JpZENvbHVtbi5cbiAgICB0aGlzLmRnQ29sdW1uLmhpZGVhYmxlID0gbmV3IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCh0aGlzLnRlbXBsYXRlUmVmLCB0aGlzLmNvbHVtbklkLCB0aGlzLl9oaWRkZW4pO1xuICAgIHRoaXMuZGdDb2x1bW4uaGlkZWFibGUuaGlkZGVuQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKHN0YXRlID0+IHRoaXMuaGlkZGVuQ2hhbmdlLmVtaXQoc3RhdGUpKTtcbiAgfVxufVxuIl19