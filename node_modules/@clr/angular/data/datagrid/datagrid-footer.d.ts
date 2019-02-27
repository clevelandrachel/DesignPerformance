import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { HideableColumnService } from './providers/hideable-column.service';
import { Selection, SelectionType } from './providers/selection';
export declare class ClrDatagridFooter<T = any> implements OnInit {
    selection: Selection<T>;
    hideableColumnService: HideableColumnService;
    cdr: ChangeDetectorRef;
    constructor(selection: Selection<T>, hideableColumnService: HideableColumnService, cdr: ChangeDetectorRef);
    activeToggler: boolean;
    private subscriptions;
    SELECTION_TYPE: typeof SelectionType;
    toggle: ClrDatagridColumnToggle;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
