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
import { ChangeDetectorRef, Directive, Optional } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { RowActionService } from '../providers/row-action-service';
import { DatagridWillyWonka } from './datagrid-willy-wonka';
var ActionableOompaLoompa = /** @class */ (function (_super) {
    tslib_1.__extends(ActionableOompaLoompa, _super);
    function ActionableOompaLoompa(cdr, willyWonka, rowActions) {
        var _this = this;
        if (!willyWonka) {
            throw new Error('clr-dg-row should only be used inside of a clr-datagrid');
        }
        _this = _super.call(this, cdr, willyWonka) || this;
        _this.rowActions = rowActions;
        return _this;
    }
    Object.defineProperty(ActionableOompaLoompa.prototype, "flavor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.rowActions.hasActionableRow;
        },
        enumerable: true,
        configurable: true
    });
    ActionableOompaLoompa.decorators = [
        { type: Directive, args: [{ selector: 'clr-datagrid, clr-dg-row' },] }
    ];
    /** @nocollapse */
    ActionableOompaLoompa.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DatagridWillyWonka, decorators: [{ type: Optional }] },
        { type: RowActionService }
    ]; };
    return ActionableOompaLoompa;
}(OompaLoompa));
export { ActionableOompaLoompa };
if (false) {
    /** @type {?} */
    ActionableOompaLoompa.prototype.rowActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYWJsZS1vb21wYS1sb29tcGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2Nob2NvbGF0ZS9hY3Rpb25hYmxlLW9vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBQzJDLGlEQUFXO0lBR3BELCtCQUFZLEdBQXNCLEVBQWMsVUFBOEIsRUFBRSxVQUE0QjtRQUE1RyxpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDNUU7UUFDRCxRQUFBLGtCQUFNLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBQztRQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7SUFDL0IsQ0FBQztJQUVELHNCQUFJLHlDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7O2dCQWRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTs7OztnQkFMMUMsaUJBQWlCO2dCQUdqQixrQkFBa0IsdUJBTVksUUFBUTtnQkFQdEMsZ0JBQWdCOztJQWtCekIsNEJBQUM7Q0FBQSxBQWZELENBQzJDLFdBQVcsR0FjckQ7U0FkWSxxQkFBcUI7OztJQUNoQywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT29tcGFMb29tcGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jaG9jb2xhdGUvb29tcGEtbG9vbXBhJztcbmltcG9ydCB7IFJvd0FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvcm93LWFjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFncmlkV2lsbHlXb25rYSB9IGZyb20gJy4vZGF0YWdyaWQtd2lsbHktd29ua2EnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjbHItZGF0YWdyaWQsIGNsci1kZy1yb3cnIH0pXG5leHBvcnQgY2xhc3MgQWN0aW9uYWJsZU9vbXBhTG9vbXBhIGV4dGVuZHMgT29tcGFMb29tcGEge1xuICBwcml2YXRlIHJvd0FjdGlvbnM6IFJvd0FjdGlvblNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgd2lsbHlXb25rYTogRGF0YWdyaWRXaWxseVdvbmthLCByb3dBY3Rpb25zOiBSb3dBY3Rpb25TZXJ2aWNlKSB7XG4gICAgaWYgKCF3aWxseVdvbmthKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nsci1kZy1yb3cgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnNpZGUgb2YgYSBjbHItZGF0YWdyaWQnKTtcbiAgICB9XG4gICAgc3VwZXIoY2RyLCB3aWxseVdvbmthKTtcbiAgICB0aGlzLnJvd0FjdGlvbnMgPSByb3dBY3Rpb25zO1xuICB9XG5cbiAgZ2V0IGZsYXZvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dBY3Rpb25zLmhhc0FjdGlvbmFibGVSb3c7XG4gIH1cbn1cbiJdfQ==