import { AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrDatagridCell } from './datagrid-cell';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { HideableColumnService } from './providers/hideable-column.service';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 */
export declare class ClrDatagridRowDetail<T = any> implements AfterContentInit, OnDestroy {
    selection: Selection;
    rowActionService: RowActionService;
    expand: Expand;
    hideableColumnService: HideableColumnService;
    expandableRows: ExpandableRowsCount;
    SELECTION_TYPE: typeof SelectionType;
    constructor(selection: Selection, rowActionService: RowActionService, expand: Expand, hideableColumnService: HideableColumnService, expandableRows: ExpandableRowsCount);
    cells: QueryList<ClrDatagridCell>;
    replace: boolean;
    private subscriptions;
    replacedRow: boolean;
    ngAfterContentInit(): void;
    updateCellsForColumns(columnList: DatagridHideableColumnModel[]): void;
    ngOnDestroy(): void;
}
