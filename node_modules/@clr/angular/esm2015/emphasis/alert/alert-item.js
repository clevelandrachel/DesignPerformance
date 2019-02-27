/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
export class ClrAlertItem {
    /**
     * @param {?} iconService
     */
    constructor(iconService) {
        this.iconService = iconService;
    }
}
ClrAlertItem.decorators = [
    { type: Component, args: [{
                selector: 'clr-alert-item',
                template: `
        <div class="alert-icon-wrapper">
            <clr-icon class="alert-icon" 
              [attr.shape]="iconService.alertIconShape" 
              [attr.title]="iconService.alertIconTitle"></clr-icon>
        </div>
        <ng-content></ng-content>
    `,
                host: { class: 'alert-item' }
            }] }
];
/** @nocollapse */
ClrAlertItem.ctorParameters = () => [
    { type: AlertIconAndTypesService }
];
if (false) {
    /** @type {?} */
    ClrAlertItem.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L2FsZXJ0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQWM5RSxNQUFNLE9BQU8sWUFBWTs7OztJQUN2QixZQUFtQixXQUFxQztRQUFyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7SUFBRyxDQUFDOzs7WUFiN0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7OztLQU9QO2dCQUNILElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7YUFDOUI7Ozs7WUFiUSx3QkFBd0I7Ozs7SUFlbkIsbUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0SWNvbkFuZFR5cGVzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2ljb24tYW5kLXR5cGVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItYWxlcnQtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydC1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxjbHItaWNvbiBjbGFzcz1cImFsZXJ0LWljb25cIiBcbiAgICAgICAgICAgICAgW2F0dHIuc2hhcGVdPVwiaWNvblNlcnZpY2UuYWxlcnRJY29uU2hhcGVcIiBcbiAgICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiaWNvblNlcnZpY2UuYWxlcnRJY29uVGl0bGVcIj48L2Nsci1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbGVydC1pdGVtJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJBbGVydEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWNvblNlcnZpY2U6IEFsZXJ0SWNvbkFuZFR5cGVzU2VydmljZSkge31cbn1cbiJdfQ==