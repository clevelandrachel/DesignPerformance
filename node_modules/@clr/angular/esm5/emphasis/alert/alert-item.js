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
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
var ClrAlertItem = /** @class */ (function () {
    function ClrAlertItem(iconService) {
        this.iconService = iconService;
    }
    ClrAlertItem.decorators = [
        { type: Component, args: [{
                    selector: 'clr-alert-item',
                    template: "\n        <div class=\"alert-icon-wrapper\">\n            <clr-icon class=\"alert-icon\" \n              [attr.shape]=\"iconService.alertIconShape\" \n              [attr.title]=\"iconService.alertIconTitle\"></clr-icon>\n        </div>\n        <ng-content></ng-content>\n    ",
                    host: { class: 'alert-item' }
                }] }
    ];
    /** @nocollapse */
    ClrAlertItem.ctorParameters = function () { return [
        { type: AlertIconAndTypesService }
    ]; };
    return ClrAlertItem;
}());
export { ClrAlertItem };
if (false) {
    /** @type {?} */
    ClrAlertItem.prototype.iconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L2FsZXJ0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RTtJQWFFLHNCQUFtQixXQUFxQztRQUFyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7SUFBRyxDQUFDOztnQkFiN0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSx1UkFPUDtvQkFDSCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2lCQUM5Qjs7OztnQkFiUSx3QkFBd0I7O0lBZ0JqQyxtQkFBQztDQUFBLEFBZEQsSUFjQztTQUZZLFlBQVk7OztJQUNYLG1DQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydEljb25BbmRUeXBlc1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9pY29uLWFuZC10eXBlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWFsZXJ0LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Y2xyLWljb24gY2xhc3M9XCJhbGVydC1pY29uXCIgXG4gICAgICAgICAgICAgIFthdHRyLnNoYXBlXT1cImljb25TZXJ2aWNlLmFsZXJ0SWNvblNoYXBlXCIgXG4gICAgICAgICAgICAgIFthdHRyLnRpdGxlXT1cImljb25TZXJ2aWNlLmFsZXJ0SWNvblRpdGxlXCI+PC9jbHItaWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnYWxlcnQtaXRlbScgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQWxlcnRJdGVtIHtcbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBBbGVydEljb25BbmRUeXBlc1NlcnZpY2UpIHt9XG59XG4iXX0=