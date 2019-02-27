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
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
var ClrDatagridColumnToggleButton = /** @class */ (function () {
    function ClrDatagridColumnToggleButton(toggleButtons) {
        this.toggleButtons = toggleButtons;
    }
    ClrDatagridColumnToggleButton.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-column-toggle-button',
                    template: "\n        <button class=\"btn btn-sm btn-link\"\n            (click)=\"toggleButtons.buttonClicked()\"\n            [disabled]=\"toggleButtons.selectAllDisabled\"\n            type=\"button\">\n            <ng-content></ng-content>\n        </button>\n    "
                }] }
    ];
    /** @nocollapse */
    ClrDatagridColumnToggleButton.ctorParameters = function () { return [
        { type: ColumnToggleButtonsService }
    ]; };
    return ClrDatagridColumnToggleButton;
}());
export { ClrDatagridColumnToggleButton };
if (false) {
    /** @type {?} */
    ClrDatagridColumnToggleButton.prototype.toggleButtons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS1idXR0b24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFdkY7SUFZRSx1Q0FBbUIsYUFBeUM7UUFBekMsa0JBQWEsR0FBYixhQUFhLENBQTRCO0lBQUcsQ0FBQzs7Z0JBWmpFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUsa1FBT1A7aUJBQ0o7Ozs7Z0JBWlEsMEJBQTBCOztJQWVuQyxvQ0FBQztDQUFBLEFBYkQsSUFhQztTQUZZLDZCQUE2Qjs7O0lBQzVCLHNEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW5Ub2dnbGVCdXR0b25zU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbHVtbi10b2dnbGUtYnV0dG9ucy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWRnLWNvbHVtbi10b2dnbGUtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpbmtcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUJ1dHRvbnMuYnV0dG9uQ2xpY2tlZCgpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0b2dnbGVCdXR0b25zLnNlbGVjdEFsbERpc2FibGVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdG9nZ2xlQnV0dG9uczogQ29sdW1uVG9nZ2xlQnV0dG9uc1NlcnZpY2UpIHt9XG59XG4iXX0=