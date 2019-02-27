/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';
export class WrappedRow {
    constructor() {
        this._dynamic = false;
    }
    // the rows projected view (in memory)
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Create the cells view in memory, not the DOM.
        this.rowView = this.templateRef.createEmbeddedView(null);
    }
}
WrappedRow.decorators = [
    { type: Component, args: [{
                selector: 'dg-wrapped-row',
                template: `        
        <ng-template #rowPortal>
            <ng-content></ng-content>
        </ng-template>
    `
            }] }
];
WrappedRow.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['rowPortal',] }]
};
if (false) {
    /** @type {?} */
    WrappedRow.prototype._dynamic;
    /** @type {?} */
    WrappedRow.prototype.templateRef;
    /** @type {?} */
    WrappedRow.prototype.rowView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3dyYXBwZWQtcm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBaUIsU0FBUyxFQUFtQixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWWxHLE1BQU0sT0FBTyxVQUFVO0lBUnZCO1FBU0UsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVNuQixDQUFDOzs7OztJQUpDLGVBQWU7UUFDYixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7O0tBSVA7YUFDSjs7OzBCQUlFLFNBQVMsU0FBQyxXQUFXOzs7O0lBRnRCLDhCQUFpQjs7SUFFakIsaUNBQXVEOztJQUN2RCw2QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVtYmVkZGVkVmlld1JlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEeW5hbWljV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2hvc3Qtd3JhcHBpbmcvZHluYW1pYy13cmFwcGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGctd3JhcHBlZC1yb3cnLFxuICB0ZW1wbGF0ZTogYCAgICAgICAgXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcm93UG9ydGFsPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFdyYXBwZWRSb3cgaW1wbGVtZW50cyBEeW5hbWljV3JhcHBlciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIF9keW5hbWljID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncm93UG9ydGFsJykgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICByb3dWaWV3OiBFbWJlZGRlZFZpZXdSZWY8dm9pZD47IC8vIHRoZSByb3dzIHByb2plY3RlZCB2aWV3IChpbiBtZW1vcnkpXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgY2VsbHMgdmlldyBpbiBtZW1vcnksIG5vdCB0aGUgRE9NLlxuICAgIHRoaXMucm93VmlldyA9IHRoaXMudGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xuICB9XG59XG4iXX0=