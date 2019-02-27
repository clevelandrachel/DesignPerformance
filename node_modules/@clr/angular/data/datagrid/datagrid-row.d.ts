import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrDatagridCell } from './datagrid-cell';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { DisplayModeService } from './providers/display-mode.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { HideableColumnService } from './providers/hideable-column.service';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrDatagridRow<T = any> implements AfterContentInit, AfterViewInit {
    selection: Selection<T>;
    rowActionService: RowActionService;
    globalExpandable: ExpandableRowsCount;
    expand: Expand;
    hideableColumnService: HideableColumnService;
    private displayMode;
    private vcr;
    private renderer;
    private el;
    commonStrings: ClrCommonStrings;
    id: string;
    radioId: string;
    checkboxId: string;
    SELECTION_TYPE: typeof SelectionType;
    /**
     * Model of the row, to use for selection
     */
    item: T;
    replaced: any;
    constructor(selection: Selection<T>, rowActionService: RowActionService, globalExpandable: ExpandableRowsCount, expand: Expand, hideableColumnService: HideableColumnService, displayMode: DisplayModeService, vcr: ViewContainerRef, renderer: Renderer2, el: ElementRef, commonStrings: ClrCommonStrings);
    private _selected;
    /**
     * Indicates if the row is selected
     */
    selected: boolean;
    selectedChanged: EventEmitter<boolean>;
    toggle(selected?: boolean): void;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    toggleExpand(): void;
    /*****
     * property dgCells
     *
     * @description
     * A Query List of the ClrDatagrid cells in this row.
     *
     */
    dgCells: QueryList<ClrDatagridCell>;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    /**********
     *
     * @description
     * 1. Maps the new columnListChange to the dgCells list by index
     * 2. Sets the hidden state on the cell
     * Take a Column list and use index to access the columns for hideable properties.
     *
     */
    updateCellsForColumns(columnList: DatagridHideableColumnModel[]): void;
    private subscriptions;
    ngOnDestroy(): void;
    displayCells: boolean;
    _stickyCells: ViewContainerRef;
    _scrollableCells: ViewContainerRef;
    _calculatedCells: ViewContainerRef;
    private wrappedInjector;
    ngOnInit(): void;
    readonly _view: any;
}
