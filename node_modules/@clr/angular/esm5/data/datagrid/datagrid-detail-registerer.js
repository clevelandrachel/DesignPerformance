/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Optional } from '@angular/core';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
/*
 * I don't think this deserves to be in IfExpanded itself,
 * so I'm adding a second directive on the same selector for now just for the datagrid
 */
var DatagridDetailRegisterer = /** @class */ (function () {
    function DatagridDetailRegisterer(expandableRowsCount) {
        this.expandableRowsCount = expandableRowsCount;
        if (this.expandableRowsCount) {
            this.expandableRowsCount.register();
        }
    }
    /**
     * @return {?}
     */
    DatagridDetailRegisterer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.expandableRowsCount) {
            this.expandableRowsCount.unregister();
        }
    };
    DatagridDetailRegisterer.decorators = [
        { type: Directive, args: [{ selector: '[clrIfExpanded]' },] }
    ];
    /** @nocollapse */
    DatagridDetailRegisterer.ctorParameters = function () { return [
        { type: ExpandableRowsCount, decorators: [{ type: Optional }] }
    ]; };
    return DatagridDetailRegisterer;
}());
export { DatagridDetailRegisterer };
if (false) {
    /** @type {?} */
    DatagridDetailRegisterer.prototype.expandableRowsCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZGV0YWlsLXJlZ2lzdGVyZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWRldGFpbC1yZWdpc3RlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU16RTtJQUVFLGtDQUFnQyxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN0RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O2dCQU5qQyxtQkFBbUIsdUJBUWIsUUFBUTs7SUFXdkIsK0JBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSx3QkFBd0I7OztJQUN2Qix1REFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlUm93c0NvdW50IH0gZnJvbSAnLi9wcm92aWRlcnMvZ2xvYmFsLWV4cGFuZGFibGUtcm93cyc7XG5cbi8qXG4gKiBJIGRvbid0IHRoaW5rIHRoaXMgZGVzZXJ2ZXMgdG8gYmUgaW4gSWZFeHBhbmRlZCBpdHNlbGYsXG4gKiBzbyBJJ20gYWRkaW5nIGEgc2Vjb25kIGRpcmVjdGl2ZSBvbiB0aGUgc2FtZSBzZWxlY3RvciBmb3Igbm93IGp1c3QgZm9yIHRoZSBkYXRhZ3JpZFxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xySWZFeHBhbmRlZF0nIH0pXG5leHBvcnQgY2xhc3MgRGF0YWdyaWREZXRhaWxSZWdpc3RlcmVyIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBleHBhbmRhYmxlUm93c0NvdW50OiBFeHBhbmRhYmxlUm93c0NvdW50KSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZVJvd3NDb3VudCkge1xuICAgICAgdGhpcy5leHBhbmRhYmxlUm93c0NvdW50LnJlZ2lzdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZVJvd3NDb3VudCkge1xuICAgICAgdGhpcy5leHBhbmRhYmxlUm93c0NvdW50LnVucmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==