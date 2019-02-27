import { ElementRef } from '@angular/core';
/**
 * @description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
export declare class TableSizeService {
    private platformId;
    private _tableRef;
    tableRef: HTMLElement;
    constructor(platformId: Object);
    table: ElementRef;
    getColumnDragHeight(): string;
}
