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
export class WrappedCell {
    constructor() {
        this._dynamic = false;
    }
    // the cells projected view
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.cellView = this.templateRef.createEmbeddedView(null);
    }
}
WrappedCell.decorators = [
    { type: Component, args: [{
                selector: 'dg-wrapped-cell',
                template: `        
        <ng-template #cellPortal>
            <ng-content></ng-content>
        </ng-template>
    `
            }] }
];
WrappedCell.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['cellPortal',] }]
};
if (false) {
    /** @type {?} */
    WrappedCell.prototype._dynamic;
    /** @type {?} */
    WrappedCell.prototype.templateRef;
    /** @type {?} */
    WrappedCell.prototype.cellView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1jZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC93cmFwcGVkLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFpQixTQUFTLEVBQW1CLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZbEcsTUFBTSxPQUFPLFdBQVc7SUFSeEI7UUFTRSxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBT25CLENBQUM7Ozs7O0lBSEMsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7O0tBSVA7YUFDSjs7OzBCQUdFLFNBQVMsU0FBQyxZQUFZOzs7O0lBRHZCLCtCQUFpQjs7SUFDakIsa0NBQXdEOztJQUN4RCwrQkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVtYmVkZGVkVmlld1JlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEeW5hbWljV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2hvc3Qtd3JhcHBpbmcvZHluYW1pYy13cmFwcGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGctd3JhcHBlZC1jZWxsJyxcbiAgdGVtcGxhdGU6IGAgICAgICAgIFxuICAgICAgICA8bmctdGVtcGxhdGUgI2NlbGxQb3J0YWw+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlZENlbGwgaW1wbGVtZW50cyBEeW5hbWljV3JhcHBlciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIF9keW5hbWljID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2NlbGxQb3J0YWwnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGNlbGxWaWV3OiBFbWJlZGRlZFZpZXdSZWY8dm9pZD47IC8vIHRoZSBjZWxscyBwcm9qZWN0ZWQgdmlld1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNlbGxWaWV3ID0gdGhpcy50ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcobnVsbCk7XG4gIH1cbn1cbiJdfQ==