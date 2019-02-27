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
import { PageCollectionService } from './providers/page-collection.service';
var ClrWizardStepnav = /** @class */ (function () {
    function ClrWizardStepnav(pageService) {
        this.pageService = pageService;
    }
    ClrWizardStepnav.decorators = [
        { type: Component, args: [{
                    selector: 'clr-wizard-stepnav',
                    template: "\n        <ol class=\"clr-wizard-stepnav-list\" role=\"tablist\">\n            <li *ngFor=\"let page of pageService.pages\" clr-wizard-stepnav-item \n            [page]=\"page\" class=\"clr-wizard-stepnav-item\"></li>\n        </ol>\n    ",
                    host: { class: 'clr-wizard-stepnav' }
                }] }
    ];
    /** @nocollapse */
    ClrWizardStepnav.ctorParameters = function () { return [
        { type: PageCollectionService }
    ]; };
    return ClrWizardStepnav;
}());
export { ClrWizardStepnav };
if (false) {
    /** @type {?} */
    ClrWizardStepnav.prototype.pageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXBuYXYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ3aXphcmQvd2l6YXJkLXN0ZXBuYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU1RTtJQVdFLDBCQUFtQixXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7SUFBRyxDQUFDOztnQkFYMUQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxnUEFLUDtvQkFDSCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUU7aUJBQ3RDOzs7O2dCQVhRLHFCQUFxQjs7SUFjOUIsdUJBQUM7Q0FBQSxBQVpELElBWUM7U0FGWSxnQkFBZ0I7OztJQUNmLHVDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29sbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9wYWdlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci13aXphcmQtc3RlcG5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxvbCBjbGFzcz1cImNsci13aXphcmQtc3RlcG5hdi1saXN0XCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlU2VydmljZS5wYWdlc1wiIGNsci13aXphcmQtc3RlcG5hdi1pdGVtIFxuICAgICAgICAgICAgW3BhZ2VdPVwicGFnZVwiIGNsYXNzPVwiY2xyLXdpemFyZC1zdGVwbmF2LWl0ZW1cIj48L2xpPlxuICAgICAgICA8L29sPlxuICAgIGAsXG4gIGhvc3Q6IHsgY2xhc3M6ICdjbHItd2l6YXJkLXN0ZXBuYXYnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENscldpemFyZFN0ZXBuYXYge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZVNlcnZpY2U6IFBhZ2VDb2xsZWN0aW9uU2VydmljZSkge31cbn1cbiJdfQ==