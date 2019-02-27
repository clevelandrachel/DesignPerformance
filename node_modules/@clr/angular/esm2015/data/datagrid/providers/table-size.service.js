/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
/**
 * \@description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
export class TableSizeService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    get tableRef() {
        return this._tableRef;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set tableRef(element) {
        this._tableRef = element;
    }
    /**
     * @param {?} table
     * @return {?}
     */
    set table(table) {
        if (isPlatformBrowser(this.platformId) && table.nativeElement) {
            this.tableRef = table.nativeElement.querySelector('.datagrid-table');
        }
    }
    // Used when resizing columns to show the column border being dragged.
    /**
     * @return {?}
     */
    getColumnDragHeight() {
        if (!this.tableRef) {
            return;
        }
        return `${this.tableRef.clientHeight}px`;
    }
}
TableSizeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableSizeService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    TableSizeService.prototype._tableRef;
    /** @type {?} */
    TableSizeService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2l6ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9wcm92aWRlcnMvdGFibGUtc2l6ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPNUUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVczQixZQUF5QyxVQUFrQjtRQUFsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUcsQ0FBQzs7OztJQVIvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBVyxRQUFRLENBQUMsT0FBb0I7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxJQUFXLEtBQUssQ0FBQyxLQUFpQjtRQUNoQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7O0lBR0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksSUFBSSxDQUFDO0lBQzNDLENBQUM7OztZQXpCRixVQUFVOzs7O1lBWTRDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXOzs7O0lBVi9CLHFDQUErQjs7SUFVbkIsc0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogSW50ZXJuYWwgZGF0YWdyaWQgc2VydmljZSB0aGF0IGhvbGRzIGEgcmVmZXJlbmNlIHRvIHRoZSBjbHItZGctdGFibGUgZWxlbWVudCBhbmQgZXhwb3NlcyBhIG1ldGhvZCB0byBnZXQgaGVpZ2h0LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVTaXplU2VydmljZSB7XG4gIHByaXZhdGUgX3RhYmxlUmVmOiBIVE1MRWxlbWVudDtcblxuICBwdWJsaWMgZ2V0IHRhYmxlUmVmKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVSZWY7XG4gIH1cblxuICBwdWJsaWMgc2V0IHRhYmxlUmVmKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5fdGFibGVSZWYgPSBlbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHt9XG4gIHB1YmxpYyBzZXQgdGFibGUodGFibGU6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0YWJsZS5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnRhYmxlUmVmID0gdGFibGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0YWdyaWQtdGFibGUnKTtcbiAgICB9XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gcmVzaXppbmcgY29sdW1ucyB0byBzaG93IHRoZSBjb2x1bW4gYm9yZGVyIGJlaW5nIGRyYWdnZWQuXG4gIGdldENvbHVtbkRyYWdIZWlnaHQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudGFibGVSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMudGFibGVSZWYuY2xpZW50SGVpZ2h0fXB4YDtcbiAgfVxufVxuIl19