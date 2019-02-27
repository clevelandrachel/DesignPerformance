/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrDatagridCell } from './datagrid-cell';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { HideableColumnService } from './providers/hideable-column.service';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 * @template T
 */
export class ClrDatagridRowDetail {
    /**
     * @param {?} selection
     * @param {?} rowActionService
     * @param {?} expand
     * @param {?} hideableColumnService
     * @param {?} expandableRows
     */
    constructor(selection, rowActionService, expand, hideableColumnService, expandableRows) {
        this.selection = selection;
        this.rowActionService = rowActionService;
        this.expand = expand;
        this.hideableColumnService = hideableColumnService;
        this.expandableRows = expandableRows;
        /* reference to the enum so that template can access it */
        this.SELECTION_TYPE = SelectionType;
        this.subscriptions = [];
        this.replacedRow = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set replace(value) {
        this.expand.setReplace(!!value);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const columnsList = this.hideableColumnService.getColumns();
        this.updateCellsForColumns(columnsList);
        // Triggered when the Cells list changes per row-renderer
        this.subscriptions.push(this.cells.changes.subscribe(cellList => {
            /** @type {?} */
            const columnList = this.hideableColumnService.getColumns();
            if (cellList.length === columnList.length) {
                this.updateCellsForColumns(columnList);
            }
        }));
        // Used to set things up the first time but only after all the columns are ready.
        this.subscriptions.push(this.hideableColumnService.columnListChange.subscribe(columnList => {
            // Prevents cell updates when cols and cells array are not aligned
            if (columnList.length === this.cells.length) {
                this.updateCellsForColumns(columnList);
            }
        }));
        this.subscriptions.push(this.expand.replace.subscribe(replaceChange => {
            this.replacedRow = replaceChange;
        }));
    }
    /**
     * @param {?} columnList
     * @return {?}
     */
    updateCellsForColumns(columnList) {
        this.cells.forEach((cell, index) => {
            /** @type {?} */
            const currentColumn = columnList[index];
            if (currentColumn) {
                cell.id = currentColumn.id;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
ClrDatagridRowDetail.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-row-detail',
                template: `
        <ng-container *ngIf="!replacedRow">
            <!-- space for multiselection state -->
            <div class="datagrid-cell datagrid-select datagrid-fixed-column"
                *ngIf="selection.selectionType === SELECTION_TYPE.Multi">
            </div>
            <!-- space for single selection state -->
            <div class="datagrid-cell datagrid-select datagrid-fixed-column"
                *ngIf="selection.selectionType === SELECTION_TYPE.Single">
            </div>
            <!-- space for single row action; only displayType if we have at least one actionable row in datagrid -->
            <div class="datagrid-cell datagrid-row-actions datagrid-fixed-column"
                *ngIf="rowActionService.hasActionableRow">
            </div>
            <!-- space for expandable caret action; only displayType if we have at least one expandable row in datagrid -->
            <div *ngIf="expandableRows.hasExpandableRow"
                        class="datagrid-expandable-caret datagrid-fixed-column datagrid-cell">
            </div>
        </ng-container>
        <ng-content></ng-content>
    `,
                host: {
                    '[class.datagrid-row-flex]': 'true',
                    '[class.datagrid-row-detail]': 'true',
                    '[class.datagrid-container]': 'cells.length === 0',
                }
            }] }
];
/** @nocollapse */
ClrDatagridRowDetail.ctorParameters = () => [
    { type: Selection },
    { type: RowActionService },
    { type: Expand },
    { type: HideableColumnService },
    { type: ExpandableRowsCount }
];
ClrDatagridRowDetail.propDecorators = {
    cells: [{ type: ContentChildren, args: [ClrDatagridCell,] }],
    replace: [{ type: Input, args: ['clrDgReplace',] }]
};
if (false) {
    /** @type {?} */
    ClrDatagridRowDetail.prototype.SELECTION_TYPE;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.cells;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.subscriptions;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.replacedRow;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.selection;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.rowActionService;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.expand;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.hideableColumnService;
    /** @type {?} */
    ClrDatagridRowDetail.prototype.expandableRows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcm93LWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtcm93LWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQW1DakUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7SUFJL0IsWUFDUyxTQUFvQixFQUNwQixnQkFBa0MsRUFDbEMsTUFBYyxFQUNkLHFCQUE0QyxFQUM1QyxjQUFtQztRQUpuQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQXFCOztRQVByQyxtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQWlCOUIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBVnhCLENBQUM7Ozs7O0lBSUosSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUtELGtCQUFrQjs7Y0FDVixXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtRQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEMseURBQXlEO1FBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUNoQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRTtZQUMxRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLGlGQUFpRjtRQUNqRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqRSxrRUFBa0U7WUFDbEUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUMzQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxxQkFBcUIsQ0FBQyxVQUF5QztRQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQzNCLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUE3RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQlA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLDJCQUEyQixFQUFFLE1BQU07b0JBQ25DLDZCQUE2QixFQUFFLE1BQU07b0JBQ3JDLDRCQUE0QixFQUFFLG9CQUFvQjtpQkFDbkQ7YUFDRjs7OztZQWxDUSxTQUFTO1lBRFQsZ0JBQWdCO1lBTmhCLE1BQU07WUFLTixxQkFBcUI7WUFEckIsbUJBQW1COzs7b0JBa0R6QixlQUFlLFNBQUMsZUFBZTtzQkFFL0IsS0FBSyxTQUFDLGNBQWM7Ozs7SUFackIsOENBQXNDOztJQVV0QyxxQ0FBb0U7O0lBT3BFLDZDQUEyQzs7SUFDM0MsMkNBQTJCOztJQWZ6Qix5Q0FBMkI7O0lBQzNCLGdEQUF5Qzs7SUFDekMsc0NBQXFCOztJQUNyQixxREFBbUQ7O0lBQ25ELDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgT25EZXN0cm95LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFeHBhbmQgfSBmcm9tICcuLi8uLi91dGlscy9leHBhbmQvcHJvdmlkZXJzL2V4cGFuZCc7XG5cbmltcG9ydCB7IENsckRhdGFncmlkQ2VsbCB9IGZyb20gJy4vZGF0YWdyaWQtY2VsbCc7XG5pbXBvcnQgeyBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWwgfSBmcm9tICcuL2RhdGFncmlkLWhpZGVhYmxlLWNvbHVtbi5tb2RlbCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlUm93c0NvdW50IH0gZnJvbSAnLi9wcm92aWRlcnMvZ2xvYmFsLWV4cGFuZGFibGUtcm93cyc7XG5pbXBvcnQgeyBIaWRlYWJsZUNvbHVtblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZSc7XG5pbXBvcnQgeyBSb3dBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvcm93LWFjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGlvbiwgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4vcHJvdmlkZXJzL3NlbGVjdGlvbic7XG5cbi8qKlxuICogR2VuZXJpYyBibGFuZCBjb250YWluZXIgc2VydmluZyB2YXJpb3VzIHB1cnBvc2VzIGZvciBEYXRhZ3JpZC5cbiAqIEZvciBpbnN0YW5jZSwgaXQgY2FuIGhlbHAgc3BhbiBhIHRleHQgb3ZlciBtdWx0aXBsZSByb3dzIGluIGRldGFpbCB2aWV3LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctcm93LWRldGFpbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVwbGFjZWRSb3dcIj5cbiAgICAgICAgICAgIDwhLS0gc3BhY2UgZm9yIG11bHRpc2VsZWN0aW9uIHN0YXRlIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFncmlkLWNlbGwgZGF0YWdyaWQtc2VsZWN0IGRhdGFncmlkLWZpeGVkLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzZWxlY3Rpb24uc2VsZWN0aW9uVHlwZSA9PT0gU0VMRUNUSU9OX1RZUEUuTXVsdGlcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSBzcGFjZSBmb3Igc2luZ2xlIHNlbGVjdGlvbiBzdGF0ZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhZ3JpZC1jZWxsIGRhdGFncmlkLXNlbGVjdCBkYXRhZ3JpZC1maXhlZC1jb2x1bW5cIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwic2VsZWN0aW9uLnNlbGVjdGlvblR5cGUgPT09IFNFTEVDVElPTl9UWVBFLlNpbmdsZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIHNwYWNlIGZvciBzaW5nbGUgcm93IGFjdGlvbjsgb25seSBkaXNwbGF5VHlwZSBpZiB3ZSBoYXZlIGF0IGxlYXN0IG9uZSBhY3Rpb25hYmxlIHJvdyBpbiBkYXRhZ3JpZCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhZ3JpZC1jZWxsIGRhdGFncmlkLXJvdy1hY3Rpb25zIGRhdGFncmlkLWZpeGVkLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJyb3dBY3Rpb25TZXJ2aWNlLmhhc0FjdGlvbmFibGVSb3dcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSBzcGFjZSBmb3IgZXhwYW5kYWJsZSBjYXJldCBhY3Rpb247IG9ubHkgZGlzcGxheVR5cGUgaWYgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgZXhwYW5kYWJsZSByb3cgaW4gZGF0YWdyaWQgLS0+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZXhwYW5kYWJsZVJvd3MuaGFzRXhwYW5kYWJsZVJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhdGFncmlkLWV4cGFuZGFibGUtY2FyZXQgZGF0YWdyaWQtZml4ZWQtY29sdW1uIGRhdGFncmlkLWNlbGxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRhdGFncmlkLXJvdy1mbGV4XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmRhdGFncmlkLXJvdy1kZXRhaWxdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZGF0YWdyaWQtY29udGFpbmVyXSc6ICdjZWxscy5sZW5ndGggPT09IDAnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZFJvd0RldGFpbDxUID0gYW55PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qIHJlZmVyZW5jZSB0byB0aGUgZW51bSBzbyB0aGF0IHRlbXBsYXRlIGNhbiBhY2Nlc3MgaXQgKi9cbiAgcHVibGljIFNFTEVDVElPTl9UWVBFID0gU2VsZWN0aW9uVHlwZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VsZWN0aW9uOiBTZWxlY3Rpb24sXG4gICAgcHVibGljIHJvd0FjdGlvblNlcnZpY2U6IFJvd0FjdGlvblNlcnZpY2UsXG4gICAgcHVibGljIGV4cGFuZDogRXhwYW5kLFxuICAgIHB1YmxpYyBoaWRlYWJsZUNvbHVtblNlcnZpY2U6IEhpZGVhYmxlQ29sdW1uU2VydmljZSxcbiAgICBwdWJsaWMgZXhwYW5kYWJsZVJvd3M6IEV4cGFuZGFibGVSb3dzQ291bnRcbiAgKSB7fVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2xyRGF0YWdyaWRDZWxsKSBjZWxsczogUXVlcnlMaXN0PENsckRhdGFncmlkQ2VsbD47XG5cbiAgQElucHV0KCdjbHJEZ1JlcGxhY2UnKVxuICBzZXQgcmVwbGFjZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZXhwYW5kLnNldFJlcGxhY2UoISF2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHB1YmxpYyByZXBsYWNlZFJvdyA9IGZhbHNlO1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCBjb2x1bW5zTGlzdCA9IHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmdldENvbHVtbnMoKTtcbiAgICB0aGlzLnVwZGF0ZUNlbGxzRm9yQ29sdW1ucyhjb2x1bW5zTGlzdCk7XG5cbiAgICAvLyBUcmlnZ2VyZWQgd2hlbiB0aGUgQ2VsbHMgbGlzdCBjaGFuZ2VzIHBlciByb3ctcmVuZGVyZXJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuY2VsbHMuY2hhbmdlcy5zdWJzY3JpYmUoY2VsbExpc3QgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5MaXN0ID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuZ2V0Q29sdW1ucygpO1xuICAgICAgICBpZiAoY2VsbExpc3QubGVuZ3RoID09PSBjb2x1bW5MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2VsbHNGb3JDb2x1bW5zKGNvbHVtbkxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBVc2VkIHRvIHNldCB0aGluZ3MgdXAgdGhlIGZpcnN0IHRpbWUgYnV0IG9ubHkgYWZ0ZXIgYWxsIHRoZSBjb2x1bW5zIGFyZSByZWFkeS5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmNvbHVtbkxpc3RDaGFuZ2Uuc3Vic2NyaWJlKGNvbHVtbkxpc3QgPT4ge1xuICAgICAgICAvLyBQcmV2ZW50cyBjZWxsIHVwZGF0ZXMgd2hlbiBjb2xzIGFuZCBjZWxscyBhcnJheSBhcmUgbm90IGFsaWduZWRcbiAgICAgICAgaWYgKGNvbHVtbkxpc3QubGVuZ3RoID09PSB0aGlzLmNlbGxzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2VsbHNGb3JDb2x1bW5zKGNvbHVtbkxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZXhwYW5kLnJlcGxhY2Uuc3Vic2NyaWJlKHJlcGxhY2VDaGFuZ2UgPT4ge1xuICAgICAgICB0aGlzLnJlcGxhY2VkUm93ID0gcmVwbGFjZUNoYW5nZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVDZWxsc0ZvckNvbHVtbnMoY29sdW1uTGlzdDogRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsW10pIHtcbiAgICB0aGlzLmNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gY29sdW1uTGlzdFtpbmRleF07IC8vIEFjY291bnRzIGZvciBudWxsIHNwYWNlLlxuICAgICAgaWYgKGN1cnJlbnRDb2x1bW4pIHtcbiAgICAgICAgY2VsbC5pZCA9IGN1cnJlbnRDb2x1bW4uaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=