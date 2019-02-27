/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ClrStackSelect = /** @class */ (function (_super) {
    tslib_1.__extends(ClrStackSelect, _super);
    function ClrStackSelect(stackView) {
        var _this = _super.call(this, stackView) || this;
        _this.stackView = stackView;
        return _this;
    }
    ClrStackSelect.decorators = [
        { type: Component, args: [{
                    selector: 'clr-stack-select',
                    inputs: ['model: clrModel'],
                    outputs: ['modelChange: clrModelChange'],
                    template: "\n        <span *ngIf=\"!stackView.editing\">{{model}}</span>\n        <div class=\"select\" *ngIf=\"stackView.editing\" >\n            <select [(ngModel)]=\"model\">\n                <ng-content></ng-content>\n            </select>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    ClrStackSelect.ctorParameters = function () { return [
        { type: ClrStackView }
    ]; };
    return ClrStackSelect;
}(StackControl));
export { ClrStackSelect };
if (false) {
    /** @type {?} */
    ClrStackSelect.prototype.stackView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9zdGFjay12aWV3L3N0YWNrLXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTVDO0lBYW9DLDBDQUFZO0lBQzlDLHdCQUFtQixTQUF1QjtRQUExQyxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUZrQixlQUFTLEdBQVQsU0FBUyxDQUFjOztJQUUxQyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUMzQixPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDeEMsUUFBUSxFQUFFLGdRQU9QO2lCQUNKOzs7O2dCQWRRLFlBQVk7O0lBbUJyQixxQkFBQztDQUFBLEFBakJELENBYW9DLFlBQVksR0FJL0M7U0FKWSxjQUFjOzs7SUFDYixtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG4vKipcbiAqIFVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZTogaW5saW5lIGVkaXRpbmcuXG4gKlxuICogVE9ETzogT2ZmZXIgYSBhIHdheSB0byBjdXN0b21pemUgdGhlIHZhbHVlIGRpc3BsYXllZCwgcGxhaW4gdmFsdWUgbWF5IGJlIHVucmVhZGFibGUuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGFja0NvbnRyb2wgfSBmcm9tICcuL3N0YWNrLWNvbnRyb2wnO1xuaW1wb3J0IHsgQ2xyU3RhY2tWaWV3IH0gZnJvbSAnLi9zdGFjay12aWV3JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXN0YWNrLXNlbGVjdCcsXG4gIGlucHV0czogWydtb2RlbDogY2xyTW9kZWwnXSxcbiAgb3V0cHV0czogWydtb2RlbENoYW5nZTogY2xyTW9kZWxDaGFuZ2UnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhc3RhY2tWaWV3LmVkaXRpbmdcIj57e21vZGVsfX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIiAqbmdJZj1cInN0YWNrVmlldy5lZGl0aW5nXCIgPlxuICAgICAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cIm1vZGVsXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENsclN0YWNrU2VsZWN0IGV4dGVuZHMgU3RhY2tDb250cm9sIHtcbiAgY29uc3RydWN0b3IocHVibGljIHN0YWNrVmlldzogQ2xyU3RhY2tWaWV3KSB7XG4gICAgc3VwZXIoc3RhY2tWaWV3KTtcbiAgfVxufVxuIl19