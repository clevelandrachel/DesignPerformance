/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { Page } from './providers/page';
export class ClrDatagridPageSize {
    /**
     * @param {?} page
     */
    constructor(page) {
        this.page = page;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.pageSizeOptions || this.pageSizeOptions.length === 0) {
            this.pageSizeOptions = [this.page.size];
        }
    }
}
ClrDatagridPageSize.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-page-size',
                template: `
    <ng-content></ng-content>
    <div class="clr-select-wrapper">
      <select [class.clr-page-size-select]="true" [(ngModel)]="page.size">
        <option *ngFor="let option of pageSizeOptions" [ngValue]="option">{{option}}</option>
      </select>
    </div>
  `
            }] }
];
/** @nocollapse */
ClrDatagridPageSize.ctorParameters = () => [
    { type: Page }
];
ClrDatagridPageSize.propDecorators = {
    pageSizeOptions: [{ type: Input, args: ['clrPageSizeOptions',] }]
};
if (false) {
    /** @type {?} */
    ClrDatagridPageSize.prototype.pageSizeOptions;
    /** @type {?} */
    ClrDatagridPageSize.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcGFnZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1wYWdlLXNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBYXhDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFHOUIsWUFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDOzs7O0lBRWpDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0Y7Ozs7WUFaUSxJQUFJOzs7OEJBY1YsS0FBSyxTQUFDLG9CQUFvQjs7OztJQUEzQiw4Q0FBdUQ7O0lBRTNDLG1DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3Byb3ZpZGVycy9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWRnLXBhZ2Utc2l6ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJjbHItc2VsZWN0LXdyYXBwZXJcIj5cbiAgICAgIDxzZWxlY3QgW2NsYXNzLmNsci1wYWdlLXNpemUtc2VsZWN0XT1cInRydWVcIiBbKG5nTW9kZWwpXT1cInBhZ2Uuc2l6ZVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcGFnZVNpemVPcHRpb25zXCIgW25nVmFsdWVdPVwib3B0aW9uXCI+e3tvcHRpb259fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkUGFnZVNpemUge1xuICBASW5wdXQoJ2NsclBhZ2VTaXplT3B0aW9ucycpIHBhZ2VTaXplT3B0aW9uczogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2VTaXplT3B0aW9ucyB8fCB0aGlzLnBhZ2VTaXplT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucGFnZVNpemVPcHRpb25zID0gW3RoaXMucGFnZS5zaXplXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==