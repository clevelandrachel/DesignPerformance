/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Directive, Optional } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { RowActionService } from '../providers/row-action-service';
import { DatagridWillyWonka } from './datagrid-willy-wonka';
export class ActionableOompaLoompa extends OompaLoompa {
    /**
     * @param {?} cdr
     * @param {?} willyWonka
     * @param {?} rowActions
     */
    constructor(cdr, willyWonka, rowActions) {
        if (!willyWonka) {
            throw new Error('clr-dg-row should only be used inside of a clr-datagrid');
        }
        super(cdr, willyWonka);
        this.rowActions = rowActions;
    }
    /**
     * @return {?}
     */
    get flavor() {
        return this.rowActions.hasActionableRow;
    }
}
ActionableOompaLoompa.decorators = [
    { type: Directive, args: [{ selector: 'clr-datagrid, clr-dg-row' },] }
];
/** @nocollapse */
ActionableOompaLoompa.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DatagridWillyWonka, decorators: [{ type: Optional }] },
    { type: RowActionService }
];
if (false) {
    /** @type {?} */
    ActionableOompaLoompa.prototype.rowActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uYWJsZS1vb21wYS1sb29tcGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2Nob2NvbGF0ZS9hY3Rpb25hYmxlLW9vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFdBQVc7Ozs7OztJQUdwRCxZQUFZLEdBQXNCLEVBQWMsVUFBOEIsRUFBRSxVQUE0QjtRQUMxRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0lBQzFDLENBQUM7OztZQWRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTs7OztZQUwxQyxpQkFBaUI7WUFHakIsa0JBQWtCLHVCQU1ZLFFBQVE7WUFQdEMsZ0JBQWdCOzs7O0lBS3ZCLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPb21wYUxvb21wYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nob2NvbGF0ZS9vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgUm93QWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9yb3ctYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YWdyaWRXaWxseVdvbmthIH0gZnJvbSAnLi9kYXRhZ3JpZC13aWxseS13b25rYSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2Nsci1kYXRhZ3JpZCwgY2xyLWRnLXJvdycgfSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25hYmxlT29tcGFMb29tcGEgZXh0ZW5kcyBPb21wYUxvb21wYSB7XG4gIHByaXZhdGUgcm93QWN0aW9uczogUm93QWN0aW9uU2VydmljZTtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSB3aWxseVdvbmthOiBEYXRhZ3JpZFdpbGx5V29ua2EsIHJvd0FjdGlvbnM6IFJvd0FjdGlvblNlcnZpY2UpIHtcbiAgICBpZiAoIXdpbGx5V29ua2EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xyLWRnLXJvdyBzaG91bGQgb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsci1kYXRhZ3JpZCcpO1xuICAgIH1cbiAgICBzdXBlcihjZHIsIHdpbGx5V29ua2EpO1xuICAgIHRoaXMucm93QWN0aW9ucyA9IHJvd0FjdGlvbnM7XG4gIH1cblxuICBnZXQgZmxhdm9yKCkge1xuICAgIHJldHVybiB0aGlzLnJvd0FjdGlvbnMuaGFzQWN0aW9uYWJsZVJvdztcbiAgfVxufVxuIl19