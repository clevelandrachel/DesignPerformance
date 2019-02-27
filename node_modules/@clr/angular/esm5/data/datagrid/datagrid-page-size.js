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
var ClrDatagridPageSize = /** @class */ (function () {
    function ClrDatagridPageSize(page) {
        this.page = page;
    }
    /**
     * @return {?}
     */
    ClrDatagridPageSize.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.pageSizeOptions || this.pageSizeOptions.length === 0) {
            this.pageSizeOptions = [this.page.size];
        }
    };
    ClrDatagridPageSize.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-page-size',
                    template: "\n    <ng-content></ng-content>\n    <div class=\"clr-select-wrapper\">\n      <select [class.clr-page-size-select]=\"true\" [(ngModel)]=\"page.size\">\n        <option *ngFor=\"let option of pageSizeOptions\" [ngValue]=\"option\">{{option}}</option>\n      </select>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    ClrDatagridPageSize.ctorParameters = function () { return [
        { type: Page }
    ]; };
    ClrDatagridPageSize.propDecorators = {
        pageSizeOptions: [{ type: Input, args: ['clrPageSizeOptions',] }]
    };
    return ClrDatagridPageSize;
}());
export { ClrDatagridPageSize };
if (false) {
    /** @type {?} */
    ClrDatagridPageSize.prototype.pageSizeOptions;
    /** @type {?} */
    ClrDatagridPageSize.prototype.page;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcGFnZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1wYWdlLXNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXhDO0lBY0UsNkJBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQzs7OztJQUVqQyxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSw2UkFPVDtpQkFDRjs7OztnQkFaUSxJQUFJOzs7a0NBY1YsS0FBSyxTQUFDLG9CQUFvQjs7SUFTN0IsMEJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQVZZLG1CQUFtQjs7O0lBQzlCLDhDQUF1RDs7SUFFM0MsbUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcHJvdmlkZXJzL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctcGFnZS1zaXplJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzcz1cImNsci1zZWxlY3Qtd3JhcHBlclwiPlxuICAgICAgPHNlbGVjdCBbY2xhc3MuY2xyLXBhZ2Utc2l6ZS1zZWxlY3RdPVwidHJ1ZVwiIFsobmdNb2RlbCldPVwicGFnZS5zaXplXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBwYWdlU2l6ZU9wdGlvbnNcIiBbbmdWYWx1ZV09XCJvcHRpb25cIj57e29wdGlvbn19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0YWdyaWRQYWdlU2l6ZSB7XG4gIEBJbnB1dCgnY2xyUGFnZVNpemVPcHRpb25zJykgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZTogUGFnZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZVNpemVPcHRpb25zIHx8IHRoaXMucGFnZVNpemVPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5wYWdlU2l6ZU9wdGlvbnMgPSBbdGhpcy5wYWdlLnNpemVdO1xuICAgIH1cbiAgfVxufVxuIl19