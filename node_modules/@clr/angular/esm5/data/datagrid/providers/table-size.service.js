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
var TableSizeService = /** @class */ (function () {
    function TableSizeService(platformId) {
        this.platformId = platformId;
    }
    Object.defineProperty(TableSizeService.prototype, "tableRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tableRef;
        },
        set: /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            this._tableRef = element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableSizeService.prototype, "table", {
        set: /**
         * @param {?} table
         * @return {?}
         */
        function (table) {
            if (isPlatformBrowser(this.platformId) && table.nativeElement) {
                this.tableRef = table.nativeElement.querySelector('.datagrid-table');
            }
        },
        enumerable: true,
        configurable: true
    });
    // Used when resizing columns to show the column border being dragged.
    // Used when resizing columns to show the column border being dragged.
    /**
     * @return {?}
     */
    TableSizeService.prototype.getColumnDragHeight = 
    // Used when resizing columns to show the column border being dragged.
    /**
     * @return {?}
     */
    function () {
        if (!this.tableRef) {
            return;
        }
        return this.tableRef.clientHeight + "px";
    };
    TableSizeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TableSizeService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return TableSizeService;
}());
export { TableSizeService };
if (false) {
    /** @type {?} */
    TableSizeService.prototype._tableRef;
    /** @type {?} */
    TableSizeService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2l6ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9wcm92aWRlcnMvdGFibGUtc2l6ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNNUU7SUFZRSwwQkFBeUMsVUFBa0I7UUFBbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUFHLENBQUM7SUFSL0Qsc0JBQVcsc0NBQVE7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFvQixPQUFvQjtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU9ELHNCQUFXLG1DQUFLOzs7OztRQUFoQixVQUFpQixLQUFpQjtZQUNoQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDdEU7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNFQUFzRTs7Ozs7SUFDdEUsOENBQW1COzs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELE9BQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLE9BQUksQ0FBQztJQUMzQyxDQUFDOztnQkF6QkYsVUFBVTs7OztnQkFZNEMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7O0lBY2pDLHVCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksZ0JBQWdCOzs7SUFDM0IscUNBQStCOztJQVVuQixzQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJbnRlcm5hbCBkYXRhZ3JpZCBzZXJ2aWNlIHRoYXQgaG9sZHMgYSByZWZlcmVuY2UgdG8gdGhlIGNsci1kZy10YWJsZSBlbGVtZW50IGFuZCBleHBvc2VzIGEgbWV0aG9kIHRvIGdldCBoZWlnaHQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUYWJsZVNpemVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdGFibGVSZWY6IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBnZXQgdGFibGVSZWYoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl90YWJsZVJlZjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdGFibGVSZWYoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl90YWJsZVJlZiA9IGVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCkge31cbiAgcHVibGljIHNldCB0YWJsZSh0YWJsZTogRWxlbWVudFJlZikge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRhYmxlLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGFibGVSZWYgPSB0YWJsZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhZ3JpZC10YWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiByZXNpemluZyBjb2x1bW5zIHRvIHNob3cgdGhlIGNvbHVtbiBib3JkZXIgYmVpbmcgZHJhZ2dlZC5cbiAgZ2V0Q29sdW1uRHJhZ0hlaWdodCgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy50YWJsZVJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy50YWJsZVJlZi5jbGllbnRIZWlnaHR9cHhgO1xuICB9XG59XG4iXX0=