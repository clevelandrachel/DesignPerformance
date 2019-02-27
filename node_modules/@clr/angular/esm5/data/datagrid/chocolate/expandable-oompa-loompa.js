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
import { ExpandableRowsCount } from '../providers/global-expandable-rows';
import { DatagridWillyWonka } from './datagrid-willy-wonka';
var ExpandableOompaLoompa = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandableOompaLoompa, _super);
    function ExpandableOompaLoompa(cdr, willyWonka, expandableCount) {
        var _this = this;
        if (!willyWonka) {
            throw new Error('clr-dg-row should only be used inside of a clr-datagrid');
        }
        _this = _super.call(this, cdr, willyWonka) || this;
        _this.expandableCount = expandableCount;
        return _this;
    }
    Object.defineProperty(ExpandableOompaLoompa.prototype, "flavor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandableCount.hasExpandableRow;
        },
        enumerable: true,
        configurable: true
    });
    ExpandableOompaLoompa.decorators = [
        { type: Directive, args: [{ selector: 'clr-datagrid, clr-dg-row' },] }
    ];
    /** @nocollapse */
    ExpandableOompaLoompa.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DatagridWillyWonka, decorators: [{ type: Optional }] },
        { type: ExpandableRowsCount }
    ]; };
    return ExpandableOompaLoompa;
}(OompaLoompa));
export { ExpandableOompaLoompa };
if (false) {
    /** @type {?} */
    ExpandableOompaLoompa.prototype.expandableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1vb21wYS1sb29tcGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2Nob2NvbGF0ZS9leHBhbmRhYmxlLW9vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBQzJDLGlEQUFXO0lBR3BELCtCQUNFLEdBQXNCLEVBQ1YsVUFBOEIsRUFDMUMsZUFBb0M7UUFIdEMsaUJBVUM7UUFMQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsUUFBQSxrQkFBTSxHQUFHLEVBQUUsVUFBVSxDQUFDLFNBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7O0lBQ3pDLENBQUM7SUFFRCxzQkFBSSx5Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBQy9DLENBQUM7OztPQUFBOztnQkFsQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7O2dCQUwxQyxpQkFBaUI7Z0JBR2pCLGtCQUFrQix1QkFRdEIsUUFBUTtnQkFUSixtQkFBbUI7O0lBc0I1Qiw0QkFBQztDQUFBLEFBbkJELENBQzJDLFdBQVcsR0FrQnJEO1NBbEJZLHFCQUFxQjs7O0lBQ2hDLGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPb21wYUxvb21wYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nob2NvbGF0ZS9vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZVJvd3NDb3VudCB9IGZyb20gJy4uL3Byb3ZpZGVycy9nbG9iYWwtZXhwYW5kYWJsZS1yb3dzJztcbmltcG9ydCB7IERhdGFncmlkV2lsbHlXb25rYSB9IGZyb20gJy4vZGF0YWdyaWQtd2lsbHktd29ua2EnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjbHItZGF0YWdyaWQsIGNsci1kZy1yb3cnIH0pXG5leHBvcnQgY2xhc3MgRXhwYW5kYWJsZU9vbXBhTG9vbXBhIGV4dGVuZHMgT29tcGFMb29tcGEge1xuICBwcml2YXRlIGV4cGFuZGFibGVDb3VudDogRXhwYW5kYWJsZVJvd3NDb3VudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHdpbGx5V29ua2E6IERhdGFncmlkV2lsbHlXb25rYSxcbiAgICBleHBhbmRhYmxlQ291bnQ6IEV4cGFuZGFibGVSb3dzQ291bnRcbiAgKSB7XG4gICAgaWYgKCF3aWxseVdvbmthKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nsci1kZy1yb3cgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnNpZGUgb2YgYSBjbHItZGF0YWdyaWQnKTtcbiAgICB9XG4gICAgc3VwZXIoY2RyLCB3aWxseVdvbmthKTtcbiAgICB0aGlzLmV4cGFuZGFibGVDb3VudCA9IGV4cGFuZGFibGVDb3VudDtcbiAgfVxuXG4gIGdldCBmbGF2b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kYWJsZUNvdW50Lmhhc0V4cGFuZGFibGVSb3c7XG4gIH1cbn1cbiJdfQ==