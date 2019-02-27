import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Page } from './providers/page';
import { ClrDatagridPageSize } from './datagrid-page-size';
export declare class ClrDatagridPagination implements OnDestroy, OnInit {
    page: Page;
    _pageSizeComponent: ClrDatagridPageSize;
    currentPageInputRef: ElementRef;
    private defaultSize;
    constructor(page: Page);
    /**********
     * Subscription to the Page service for page changes.
     * Note: this only emits after the datagrid is initialized/stabalized and the page changes.
     */
    ngOnInit(): void;
    /**
     * Subscription to the page service changes
     */
    private _pageSubscription;
    ngOnDestroy(): void;
    /**
     * Page size
     */
    pageSize: number;
    /**
     * Total items (needed to guess the last page)
     */
    totalItems: number;
    /**
     * Last page
     */
    lastPage: number;
    /**
     * Current page
     */
    currentPage: number;
    currentChanged: EventEmitter<number>;
    /**
     * Moves to the previous page if it exists
     */
    previous(): void;
    /**
     * Moves to the next page if it exists
     */
    next(): void;
    /**
     * Index of the first item displayed on the current page, starting at 0
     */
    readonly firstItem: number;
    /**
     * Index of the last item displayed on the current page, starting at 0
     */
    readonly lastItem: number;
    /**
     * Conditionally adds page numbers before and after the current page
     */
    readonly middlePages: number[];
    /**
     * We only update the pagination's current page on blur of the input field, or
     * when they press enter.
     */
    updateCurrentPage(event: any): void;
}
