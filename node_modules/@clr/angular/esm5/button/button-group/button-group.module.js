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
import { ClrCommonPopoverModule } from '../../popover/common/popover.module';
import { ClrButton } from './button';
import { ClrButtonGroup } from './button-group';
/** @type {?} */
export var CLR_BUTTON_GROUP_DIRECTIVES = [ClrButton, ClrButtonGroup];
var ClrButtonGroupModule = /** @class */ (function () {
    function ClrButtonGroupModule() {
    }
    ClrButtonGroupModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrIconModule, ClrCommonPopoverModule],
                    declarations: [CLR_BUTTON_GROUP_DIRECTIVES],
                    exports: [CLR_BUTTON_GROUP_DIRECTIVES],
                },] }
    ];
    return ClrButtonGroupModule;
}());
export { ClrButtonGroupModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWhELE1BQU0sS0FBTywyQkFBMkIsR0FBZ0IsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO0FBRW5GO0lBQUE7SUFLbUMsQ0FBQzs7Z0JBTG5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO29CQUM5RCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3ZDOztJQUNrQywyQkFBQztDQUFBLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENsckNvbW1vblBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IENsckJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IENsckJ1dHRvbkdyb3VwIH0gZnJvbSAnLi9idXR0b24tZ3JvdXAnO1xuXG5leHBvcnQgY29uc3QgQ0xSX0JVVFRPTl9HUk9VUF9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtDbHJCdXR0b24sIENsckJ1dHRvbkdyb3VwXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2xySWNvbk1vZHVsZSwgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NMUl9CVVRUT05fR1JPVVBfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtDTFJfQlVUVE9OX0dST1VQX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJCdXR0b25Hcm91cE1vZHVsZSB7fVxuIl19