import { EventEmitter, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DatagridStringFilterImpl } from './built-in/filters/datagrid-string-filter-impl';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { ClrDatagridSortOrder } from './enums/sort-order.enum';
import { ClrDatagridComparatorInterface } from './interfaces/comparator.interface';
import { FiltersProvider } from './providers/filters';
import { Sort } from './providers/sort';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
export declare class ClrDatagridColumn<T = any> extends DatagridFilterRegistrar<T, DatagridStringFilterImpl<T>> implements OnDestroy, OnInit {
    private _sort;
    private vcr;
    constructor(_sort: Sort<T>, filters: FiltersProvider<T>, vcr: ViewContainerRef);
    /**
     * @property columnId
     *
     * @description
     * A ClrDatagridColumn class variable that holds the number of ClrDatagridColumn instances for a Datagrid.
     * It is used to generate a unique id for the ClrDatagridColumn instance.
     *
     */
    columnId: string;
    /**
     * @property hidden
     *
     * @description
     * A property that allows the column to be hidden / shown with css
     * Note the default allows the ClrDatagridColumn to have an *ngIf on it. (EHCAIWC - will occur if its not
     * initialized)
     *
     * @default false
     *
     */
    readonly hidden: boolean;
    /**
     * Subscription to the sort service changes
     */
    private _sortSubscription;
    ngOnDestroy(): void;
    private _field;
    field: string;
    /**
     * ClrDatagridComparatorInterface to use when sorting the column
     */
    private _sortBy;
    sortBy: ClrDatagridComparatorInterface<T> | string;
    /**
     * Indicates if the column is sortable
     */
    readonly sortable: boolean;
    /**
     * Indicates if the column is currently sorted
     *
     * @deprecated This will be removed soon, in favor of the sortOrder mechanism
     */
    private _sorted;
    /**
    * @deprecated This will be removed soon, in favor of the sortOrder mechanism
    */
    sorted: boolean;
    /**
     * @deprecated This will be removed soon, in favor of the sortOrder mechanism
     */
    sortedChange: EventEmitter<boolean>;
    /**
     * Indicates how the column is currently sorted
     */
    private _sortOrder;
    sortOrder: ClrDatagridSortOrder;
    readonly ariaSort: "none" | "ascending" | "descending";
    sortOrderChange: EventEmitter<ClrDatagridSortOrder>;
    /**
     * Sorts the datagrid based on this column
     */
    sort(reverse?: boolean): void;
    /**
     * Indicates if the column is currently sorted in ascending order
     */
    readonly asc: boolean;
    /**
     * Indicates if the column is currently sorted in descending order
     */
    readonly desc: boolean;
    /**
     * A custom filter for this column that can be provided in the projected content
     */
    customFilter: boolean;
    projectedFilter: any;
    filterValue: string;
    updateFilterValue: string;
    filterValueChange: EventEmitter<{}>;
    /***********
     *
     * @property hideable
     *
     * @description
     * When a column is hideable this is defined with an instance of DatagridHideableColumnModel.
     * When its not hideable should be undefined.
     *
     */
    hideable: DatagridHideableColumnModel;
    private wrappedInjector;
    ngOnInit(): void;
    readonly _view: any;
}
