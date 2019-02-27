/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrDropdownModule } from '../../popover/dropdown/dropdown.module';
import { ClrAlert } from './alert';
import { ClrAlertItem } from './alert-item';
import { ClrAlerts } from './alerts';
import { ClrAlertsPager } from './alerts-pager';
/** @type {?} */
export var CLR_ALERT_DIRECTIVES = [ClrAlert, ClrAlertItem, ClrAlerts, ClrAlertsPager];
var ClrAlertModule = /** @class */ (function () {
    function ClrAlertModule() {
    }
    ClrAlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrIconModule, ClrDropdownModule],
                    declarations: [CLR_ALERT_DIRECTIVES],
                    exports: [CLR_ALERT_DIRECTIVES],
                },] }
    ];
    return ClrAlertModule;
}());
export { ClrAlertModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZW1waGFzaXMvYWxlcnQvYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWhELE1BQU0sS0FBTyxvQkFBb0IsR0FBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUM7QUFFcEc7SUFBQTtJQUs2QixDQUFDOztnQkFMN0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3pELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7O0lBQzRCLHFCQUFDO0NBQUEsQUFMOUIsSUFLOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENsckRyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vLi4vcG9wb3Zlci9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDbHJBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IHsgQ2xyQWxlcnRJdGVtIH0gZnJvbSAnLi9hbGVydC1pdGVtJztcbmltcG9ydCB7IENsckFsZXJ0cyB9IGZyb20gJy4vYWxlcnRzJztcbmltcG9ydCB7IENsckFsZXJ0c1BhZ2VyIH0gZnJvbSAnLi9hbGVydHMtcGFnZXInO1xuXG5leHBvcnQgY29uc3QgQ0xSX0FMRVJUX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW0NsckFsZXJ0LCBDbHJBbGVydEl0ZW0sIENsckFsZXJ0cywgQ2xyQWxlcnRzUGFnZXJdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbHJJY29uTW9kdWxlLCBDbHJEcm9wZG93bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NMUl9BTEVSVF9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9BTEVSVF9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQWxlcnRNb2R1bGUge31cbiJdfQ==