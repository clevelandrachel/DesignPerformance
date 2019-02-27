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
 * TODO: support more types of inputs: checkbox, radio, ...
 * TODO: Mirror input attributes from the host to the actual input: size, min, max, placeholder, ...
 */
import { Component } from '@angular/core';
import { StackControl } from './stack-control';
import { ClrStackView } from './stack-view';
export class ClrStackInput extends StackControl {
    /**
     * @param {?} stackView
     */
    constructor(stackView) {
        super(stackView);
        this.stackView = stackView;
        this.type = 'text';
    }
}
ClrStackInput.decorators = [
    { type: Component, args: [{
                selector: 'clr-stack-input',
                inputs: ['model: clrModel', 'type'],
                outputs: ['modelChange: clrModelChange'],
                template: `
        <span *ngIf="!stackView.editing">{{model}}</span>
        <input [type]="type" *ngIf="stackView.editing" [(ngModel)]="model"/>
    `
            }] }
];
/** @nocollapse */
ClrStackInput.ctorParameters = () => [
    { type: ClrStackView }
];
if (false) {
    /** @type {?} */
    ClrStackInput.prototype.type;
    /** @type {?} */
    ClrStackInput.prototype.stackView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2staW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL3N0YWNrLXZpZXcvc3RhY2staW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVc1QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFlBQVk7Ozs7SUFHN0MsWUFBbUIsU0FBdUI7UUFDeEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBREEsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUYxQyxTQUFJLEdBQVcsTUFBTSxDQUFDO0lBSXRCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUN4QyxRQUFRLEVBQUU7OztLQUdQO2FBQ0o7Ozs7WUFWUSxZQUFZOzs7O0lBWW5CLDZCQUFzQjs7SUFFVixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG4vKipcbiAqIFVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZTogaW5saW5lIGVkaXRpbmcuXG4gKlxuICogVE9ETzogc3VwcG9ydCBtb3JlIHR5cGVzIG9mIGlucHV0czogY2hlY2tib3gsIHJhZGlvLCAuLi5cbiAqIFRPRE86IE1pcnJvciBpbnB1dCBhdHRyaWJ1dGVzIGZyb20gdGhlIGhvc3QgdG8gdGhlIGFjdHVhbCBpbnB1dDogc2l6ZSwgbWluLCBtYXgsIHBsYWNlaG9sZGVyLCAuLi5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YWNrQ29udHJvbCB9IGZyb20gJy4vc3RhY2stY29udHJvbCc7XG5pbXBvcnQgeyBDbHJTdGFja1ZpZXcgfSBmcm9tICcuL3N0YWNrLXZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItc3RhY2staW5wdXQnLFxuICBpbnB1dHM6IFsnbW9kZWw6IGNsck1vZGVsJywgJ3R5cGUnXSxcbiAgb3V0cHV0czogWydtb2RlbENoYW5nZTogY2xyTW9kZWxDaGFuZ2UnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhc3RhY2tWaWV3LmVkaXRpbmdcIj57e21vZGVsfX08L3NwYW4+XG4gICAgICAgIDxpbnB1dCBbdHlwZV09XCJ0eXBlXCIgKm5nSWY9XCJzdGFja1ZpZXcuZWRpdGluZ1wiIFsobmdNb2RlbCldPVwibW9kZWxcIi8+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU3RhY2tJbnB1dCBleHRlbmRzIFN0YWNrQ29udHJvbCB7XG4gIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhY2tWaWV3OiBDbHJTdGFja1ZpZXcpIHtcbiAgICBzdXBlcihzdGFja1ZpZXcpO1xuICB9XG59XG4iXX0=