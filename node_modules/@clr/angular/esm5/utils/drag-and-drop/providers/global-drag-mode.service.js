/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Renderer2 } from '@angular/core';
// This service class adds and removes the "in-drag" class to the document body element
// through its public enter() and exit() methods.
var GlobalDragModeService = /** @class */ (function () {
    function GlobalDragModeService(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    GlobalDragModeService.prototype.enter = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(document.body, 'in-drag');
    };
    /**
     * @return {?}
     */
    GlobalDragModeService.prototype.exit = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(document.body, 'in-drag');
    };
    GlobalDragModeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalDragModeService.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return GlobalDragModeService;
}());
export { GlobalDragModeService };
if (false) {
    /** @type {?} */
    GlobalDragModeService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWRyYWctbW9kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9wcm92aWRlcnMvZ2xvYmFsLWRyYWctbW9kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJdEQ7SUFFRSwrQkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7Ozs7SUFFM0MscUNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFWRixVQUFVOzs7O2dCQUpVLFNBQVM7O0lBZTlCLDRCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlkscUJBQXFCOzs7SUFDcEIseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFRoaXMgc2VydmljZSBjbGFzcyBhZGRzIGFuZCByZW1vdmVzIHRoZSBcImluLWRyYWdcIiBjbGFzcyB0byB0aGUgZG9jdW1lbnQgYm9keSBlbGVtZW50XG4vLyB0aHJvdWdoIGl0cyBwdWJsaWMgZW50ZXIoKSBhbmQgZXhpdCgpIG1ldGhvZHMuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsRHJhZ01vZGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIGVudGVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2luLWRyYWcnKTtcbiAgfVxuXG4gIGV4aXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnaW4tZHJhZycpO1xuICB9XG59XG4iXX0=