/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 *
 * TODO: Offer a a way to customize the value displayed, plain value may be unreadable.
 */
import { Component } from '@angular/core';
import { StackControl } from './stack-control';
import { ClrStackView } from './stack-view';
export class ClrStackSelect extends StackControl {
    /**
     * @param {?} stackView
     */
    constructor(stackView) {
        super(stackView);
        this.stackView = stackView;
    }
}
ClrStackSelect.decorators = [
    { type: Component, args: [{
                selector: 'clr-stack-select',
                inputs: ['model: clrModel'],
                outputs: ['modelChange: clrModelChange'],
                template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <div class="select" *ngIf="stackView.editing" >
            <select [(ngModel)]="model">
                <ng-content></ng-content>
            </select>
        </div>
    `
            }] }
];
/** @nocollapse */
ClrStackSelect.ctorParameters = () => [
    { type: ClrStackView }
];
if (false) {
    /** @type {?} */
    ClrStackSelect.prototype.stackView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9zdGFjay12aWV3L3N0YWNrLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFlNUMsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZOzs7O0lBQzlDLFlBQW1CLFNBQXVCO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURBLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFFMUMsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7OztLQU9QO2FBQ0o7Ozs7WUFkUSxZQUFZOzs7O0lBZ0JQLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbi8qKlxuICogVW5kb2N1bWVudGVkIGV4cGVyaW1lbnRhbCBmZWF0dXJlOiBpbmxpbmUgZWRpdGluZy5cbiAqXG4gKiBUT0RPOiBPZmZlciBhIGEgd2F5IHRvIGN1c3RvbWl6ZSB0aGUgdmFsdWUgZGlzcGxheWVkLCBwbGFpbiB2YWx1ZSBtYXkgYmUgdW5yZWFkYWJsZS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YWNrQ29udHJvbCB9IGZyb20gJy4vc3RhY2stY29udHJvbCc7XG5pbXBvcnQgeyBDbHJTdGFja1ZpZXcgfSBmcm9tICcuL3N0YWNrLXZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItc3RhY2stc2VsZWN0JyxcbiAgaW5wdXRzOiBbJ21vZGVsOiBjbHJNb2RlbCddLFxuICBvdXRwdXRzOiBbJ21vZGVsQ2hhbmdlOiBjbHJNb2RlbENoYW5nZSddLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFzdGFja1ZpZXcuZWRpdGluZ1wiPnt7bW9kZWx9fTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiICpuZ0lmPVwic3RhY2tWaWV3LmVkaXRpbmdcIiA+XG4gICAgICAgICAgICA8c2VsZWN0IFsobmdNb2RlbCldPVwibW9kZWxcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU3RhY2tTZWxlY3QgZXh0ZW5kcyBTdGFja0NvbnRyb2wge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhY2tWaWV3OiBDbHJTdGFja1ZpZXcpIHtcbiAgICBzdXBlcihzdGFja1ZpZXcpO1xuICB9XG59XG4iXX0=