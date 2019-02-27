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
import { ClrStackView } from './stack-view';
export class ClrStackHeader {
    /**
     * @param {?} stackView
     */
    constructor(stackView) {
        this.stackView = stackView;
    }
}
ClrStackHeader.decorators = [
    { type: Component, args: [{
                selector: 'clr-stack-header',
                template: `
        <h4 class="stack-header">
            <span class="stack-title"><ng-content></ng-content></span>
            
            <span class="stack-actions">
                <ng-content select=".stack-action"></ng-content>
                <!-- Undocumented experimental feature: inline editing. -->
                <button *ngIf="stackView.editable" class="stack-action btn btn-sm btn-link" 
                        (click)="stackView.editing = !stackView.editing" type="button">
                        Edit
                </button>
                <!-- End of undocumented experimental feature. -->
            </span>
        </h4>
    `,
                styles: [`
        :host { display: block; }
    `]
            }] }
];
/** @nocollapse */
ClrStackHeader.ctorParameters = () => [
    { type: ClrStackView }
];
if (false) {
    /** @type {?} */
    ClrStackHeader.prototype.stackView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2staGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9zdGFjay12aWV3L3N0YWNrLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUEwQjVDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDOzs7WUF6Qi9DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0tBY1A7eUJBR0Q7O0tBRUM7YUFFSjs7OztZQXpCUSxZQUFZOzs7O0lBMkJQLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyU3RhY2tWaWV3IH0gZnJvbSAnLi9zdGFjay12aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXN0YWNrLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNCBjbGFzcz1cInN0YWNrLWhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGFjay10aXRsZVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhY2stYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi5zdGFjay1hY3Rpb25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPCEtLSBVbmRvY3VtZW50ZWQgZXhwZXJpbWVudGFsIGZlYXR1cmU6IGlubGluZSBlZGl0aW5nLiAtLT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic3RhY2tWaWV3LmVkaXRhYmxlXCIgY2xhc3M9XCJzdGFjay1hY3Rpb24gYnRuIGJ0bi1zbSBidG4tbGlua1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInN0YWNrVmlldy5lZGl0aW5nID0gIXN0YWNrVmlldy5lZGl0aW5nXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwhLS0gRW5kIG9mIHVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZS4gLS0+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDQ+XG4gICAgYCxcbiAgLy8gQ3VzdG9tIGVsZW1lbnRzIGFyZSBpbmxpbmUgYnkgZGVmYXVsdFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJTdGFja0hlYWRlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGFja1ZpZXc6IENsclN0YWNrVmlldykge31cbn1cbiJdfQ==