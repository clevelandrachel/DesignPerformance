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
/**
 *
 * @description
 * A structural directive meant to be used inside a clr-dg-column component.
 *
 * <clr-dg-column>
 *       <ng-container *clrDgHideableColumn="{ hidden: true }">
 *           User ID
 *       </ng-container>
 *   </clr-dg-column>
 *
 * It sets up state and properties so that columns can be manges for hide/show by a service and an internal
 * datagrid toggle component.
 *
 */
export class ClrDatagridHideableColumn {
    /**
     * \@description
     * Used the DatagridColumn to get and set an id for this HiddenColumn
     *
     * @param {?} templateRef
     * @param {?} viewContainerRef
     * @param {?} dgColumn
     */
    constructor(templateRef, viewContainerRef, dgColumn) {
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
        this.dgColumn.hideable.hiddenChangeState.subscribe(state => this.hiddenChange.emit(state));
    }
    /**
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
    set clrDgHideableColumn(value) {
        this.clrDgHidden = value && value.hidden ? value.hidden : false;
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    set clrDgHidden(hidden) {
        this._hidden = hidden ? hidden : false;
        if (this.dgColumn.hideable) {
            this.dgColumn.hideable.hidden = this._hidden;
        }
    }
}
ClrDatagridHideableColumn.decorators = [
    { type: Directive, args: [{ selector: '[clrDgHideableColumn]' },] }
];
/** @nocollapse */
ClrDatagridHideableColumn.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: ClrDatagridColumn }
];
ClrDatagridHideableColumn.propDecorators = {
    clrDgHideableColumn: [{ type: Input, args: ['clrDgHideableColumn',] }],
    clrDgHidden: [{ type: Input, args: ['clrDgHidden',] }],
    hiddenChange: [{ type: Output, args: ['clrDgHiddenChange',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaGlkZWFibGUtY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJL0U7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7Ozs7SUE2RHBDLFlBQ1UsV0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xDLFFBQWdDO1FBRmhDLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBNUJOLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQThCN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRWxDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNELCtEQUErRDtRQUMvRCx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFwREQsSUFDSSxtQkFBbUIsQ0FBQyxLQUEwQjtRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxNQUFlO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRTs7OztZQUxyQixXQUFXO1lBQUUsZ0JBQWdCO1lBRS9DLGlCQUFpQjs7O2tDQTJDdkIsS0FBSyxTQUFDLHFCQUFxQjswQkFLM0IsS0FBSyxTQUFDLGFBQWE7MkJBUW5CLE1BQU0sU0FBQyxtQkFBbUI7Ozs7Ozs7Ozs7SUE3QjNCLDRDQUF5Qjs7SUE2QnpCLGlEQUErRTs7Ozs7Ozs7SUFRL0UsNkNBQXdCOzs7Ozs7Ozs7O0lBVXhCLDJDQUEyQzs7SUFRekMsZ0RBQXFDOztJQUNyQyxxREFBMEM7O0lBQzFDLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbHVtbiB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uJztcbmltcG9ydCB7IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCB9IGZyb20gJy4vZGF0YWdyaWQtaGlkZWFibGUtY29sdW1uLm1vZGVsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsckRnSGlkZWFibGVDb2x1bW5dJyB9KVxuXG4vKipcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgc3RydWN0dXJhbCBkaXJlY3RpdmUgbWVhbnQgdG8gYmUgdXNlZCBpbnNpZGUgYSBjbHItZGctY29sdW1uIGNvbXBvbmVudC5cbiAqXG4gKiA8Y2xyLWRnLWNvbHVtbj5cbiAqICAgICAgIDxuZy1jb250YWluZXIgKmNsckRnSGlkZWFibGVDb2x1bW49XCJ7IGhpZGRlbjogdHJ1ZSB9XCI+XG4gKiAgICAgICAgICAgVXNlciBJRFxuICogICAgICAgPC9uZy1jb250YWluZXI+XG4gKiAgIDwvY2xyLWRnLWNvbHVtbj5cbiAqXG4gKiBJdCBzZXRzIHVwIHN0YXRlIGFuZCBwcm9wZXJ0aWVzIHNvIHRoYXQgY29sdW1ucyBjYW4gYmUgbWFuZ2VzIGZvciBoaWRlL3Nob3cgYnkgYSBzZXJ2aWNlIGFuZCBhbiBpbnRlcm5hbFxuICogZGF0YWdyaWQgdG9nZ2xlIGNvbXBvbmVudC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uIHtcbiAgLyoqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBVc2VkIHRvIGluaXRpYWxpemUgdGhlIGNvbHVtbiB3aXRoIGVpdGhlciBoaWRkZW4gb3IgdmlzaWJsZSBzdGF0ZS5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgX2hpZGRlbjogYm9vbGVhbjtcblxuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNldHRlciBmbiBmb3IgdGhlIEBJbnB1dCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhpcyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZS5cbiAgICogSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHByZS1jb25maWd1cmUgdGhlIGNvbHVtbidzIGhpZGUvc2hvdyBzdGF0ZS4geyBoaWRkZW46IHRydWUgfVxuICAgKiBJdCdzIG1vcmUgdmVyYm9zZSBidXQgaGFzIG1vcmUgQ2xhcml0eS5cbiAgICpcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogKmNsckRnSGlkZWFibGVDb2x1bW5cbiAgICogKmNsckRnSGlkZWFibGVDb2x1bW49e2hpZGRlbjogZmFsc2V9XG4gICAqICpjbHJEZ0hpZGVhYmxlQ29sdW1uPXtoaWRkZW46IHRydWV9XG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NsckRnSGlkZWFibGVDb2x1bW4nKVxuICBzZXQgY2xyRGdIaWRlYWJsZUNvbHVtbih2YWx1ZTogeyBoaWRkZW46IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuY2xyRGdIaWRkZW4gPSB2YWx1ZSAmJiB2YWx1ZS5oaWRkZW4gPyB2YWx1ZS5oaWRkZW4gOiBmYWxzZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyRGdIaWRkZW4nKVxuICBzZXQgY2xyRGdIaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZGVuID0gaGlkZGVuID8gaGlkZGVuIDogZmFsc2U7XG4gICAgaWYgKHRoaXMuZGdDb2x1bW4uaGlkZWFibGUpIHtcbiAgICAgIHRoaXMuZGdDb2x1bW4uaGlkZWFibGUuaGlkZGVuID0gdGhpcy5faGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoJ2NsckRnSGlkZGVuQ2hhbmdlJykgcHVibGljIGhpZGRlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgcGFzc2VkIGludG8gdGhlIGRpcmVjdGl2ZSBmcm9tIHRoZSBwYXJlbnQgKEEgRGF0YWdyaWRDb2x1bW4pLlxuICAgKlxuICAgKi9cbiAgcHVibGljIGNvbHVtbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBpbnN0YW5jZSBvZiB0aGUgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbiBVdGlsaXR5IGNsYXNzIHRoYXQgaXMgdXNlZCB0bzpcbiAgICogMS4gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEhpZGVhYmxlQ29sdW1uIHRoYXQgd2lsbCBtYW5hZ2UgdGhlIFRlbXBsYXRlUmVmLCBzdGF0ZSBhbmQgY29tbXVuaWNhdGlvblxuICAgKiAyLiBNYW5hZ2UgdGhlIGhpZGRlbi9zaG93biBzdGF0ZSBmb3IgdGhlIGNvbHVtbiB0byB3aGljaCB0aGlzIGRpcmVjdGl2ZSBpcyBhcHBsaWVkXG4gICAqIDMuIHRyYWNrIHRoZSBpZCBvZiB0aGUgaGlkZGVuIGNvbHVtbiBzbyBpdCBjYW4gYmUgdXNlZCBpbiBjZWxscyBhcyB3ZWxsIGFzIG9uIHRoZSBjb2x1bW5cbiAgICovXG4gIHB1YmxpYyBjb2x1bW46IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbDtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFVzZWQgdGhlIERhdGFncmlkQ29sdW1uIHRvIGdldCBhbmQgc2V0IGFuIGlkIGZvciB0aGlzIEhpZGRlbkNvbHVtblxuICAgKlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkZ0NvbHVtbjogQ2xyRGF0YWdyaWRDb2x1bW48YW55PlxuICApIHtcbiAgICB0aGlzLmNvbHVtbklkID0gZGdDb2x1bW4uY29sdW1uSWQ7XG5cbiAgICAvLyBVc2UgdGhlIHRlbXBsYXRlUmVmIHRvIGNyZWF0ZSB0aGlzIHZpZXdcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuXG4gICAgLy8gQ3JlYXRlIGluc3RhbmNlIG9mIHRoZSB1dGlsaXR5IGNsYXNzIERhdGFncmlkSGlkZWFibGVDb2x1bW4uXG4gICAgLy8gTm90ZSB0aGlzIGlzIG9uIHRoZSBwYXJlbnQgaW5zdGFuY2Ugb2YgRGF0YWdyaWRDb2x1bW4uXG4gICAgdGhpcy5kZ0NvbHVtbi5oaWRlYWJsZSA9IG5ldyBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWwodGhpcy50ZW1wbGF0ZVJlZiwgdGhpcy5jb2x1bW5JZCwgdGhpcy5faGlkZGVuKTtcbiAgICB0aGlzLmRnQ29sdW1uLmhpZGVhYmxlLmhpZGRlbkNoYW5nZVN0YXRlLnN1YnNjcmliZShzdGF0ZSA9PiB0aGlzLmhpZGRlbkNoYW5nZS5lbWl0KHN0YXRlKSk7XG4gIH1cbn1cbiJdfQ==