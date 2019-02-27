/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class NgControlService {
    constructor() {
        // Observable to subscribe to the control, since its not available immediately for projected content
        this._controlChanges = new Subject();
    }
    /**
     * @return {?}
     */
    get controlChanges() {
        return this._controlChanges.asObservable();
    }
    /**
     * @param {?} control
     * @return {?}
     */
    setControl(control) {
        this._controlChanges.next(control);
    }
}
NgControlService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    NgControlService.prototype._controlChanges;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY29tbW9uL3Byb3ZpZGVycy9uZy1jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7O1FBR1Usb0JBQWUsR0FBdUIsSUFBSSxPQUFPLEVBQWEsQ0FBQztJQVF6RSxDQUFDOzs7O0lBUEMsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFrQjtRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFWRixVQUFVOzs7O0lBR1QsMkNBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ0NvbnRyb2xTZXJ2aWNlIHtcbiAgLy8gT2JzZXJ2YWJsZSB0byBzdWJzY3JpYmUgdG8gdGhlIGNvbnRyb2wsIHNpbmNlIGl0cyBub3QgYXZhaWxhYmxlIGltbWVkaWF0ZWx5IGZvciBwcm9qZWN0ZWQgY29udGVudFxuICBwcml2YXRlIF9jb250cm9sQ2hhbmdlczogU3ViamVjdDxOZ0NvbnRyb2w+ID0gbmV3IFN1YmplY3Q8TmdDb250cm9sPigpO1xuICBnZXQgY29udHJvbENoYW5nZXMoKTogT2JzZXJ2YWJsZTxOZ0NvbnRyb2w+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbENoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRDb250cm9sKGNvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgIHRoaXMuX2NvbnRyb2xDaGFuZ2VzLm5leHQoY29udHJvbCk7XG4gIH1cbn1cbiJdfQ==