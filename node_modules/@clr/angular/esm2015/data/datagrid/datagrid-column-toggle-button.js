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
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
export class ClrDatagridColumnToggleButton {
    /**
     * @param {?} toggleButtons
     */
    constructor(toggleButtons) {
        this.toggleButtons = toggleButtons;
    }
}
ClrDatagridColumnToggleButton.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-column-toggle-button',
                template: `
        <button class="btn btn-sm btn-link"
            (click)="toggleButtons.buttonClicked()"
            [disabled]="toggleButtons.selectAllDisabled"
            type="button">
            <ng-content></ng-content>
        </button>
    `
            }] }
];
/** @nocollapse */
ClrDatagridColumnToggleButton.ctorParameters = () => [
    { type: ColumnToggleButtonsService }
];
if (false) {
    /** @type {?} */
    ClrDatagridColumnToggleButton.prototype.toggleButtons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFhdkYsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUN4QyxZQUFtQixhQUF5QztRQUF6QyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7SUFBRyxDQUFDOzs7WUFaakUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7OztLQU9QO2FBQ0o7Ozs7WUFaUSwwQkFBMEI7Ozs7SUFjckIsc0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtblRvZ2dsZUJ1dHRvbnNTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvY29sdW1uLXRvZ2dsZS1idXR0b25zLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctY29sdW1uLXRvZ2dsZS1idXR0b24nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlua1wiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQnV0dG9ucy5idXR0b25DbGlja2VkKClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRvZ2dsZUJ1dHRvbnMuc2VsZWN0QWxsRGlzYWJsZWRcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZUJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0b2dnbGVCdXR0b25zOiBDb2x1bW5Ub2dnbGVCdXR0b25zU2VydmljZSkge31cbn1cbiJdfQ==