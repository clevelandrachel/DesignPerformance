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
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrCommonPopoverModule } from '../common/popover.module';
import { ClrDropdown } from './dropdown';
import { ClrDropdownItem } from './dropdown-item';
import { ClrDropdownMenu } from './dropdown-menu';
import { ClrDropdownTrigger } from './dropdown-trigger';
/** @type {?} */
export var CLR_DROPDOWN_DIRECTIVES = [ClrDropdown, ClrDropdownMenu, ClrDropdownTrigger, ClrDropdownItem];
var ClrDropdownModule = /** @class */ (function () {
    function ClrDropdownModule() {
    }
    ClrDropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrCommonPopoverModule],
                    declarations: [CLR_DROPDOWN_DIRECTIVES],
                    exports: [CLR_DROPDOWN_DIRECTIVES, ClrConditionalModule, ClrIconModule],
                },] }
    ];
    return ClrDropdownModule;
}());
export { ClrDropdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFeEQsTUFBTSxLQUFPLHVCQUF1QixHQUFnQixDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDO0FBRXZIO0lBQUE7SUFLZ0MsQ0FBQzs7Z0JBTGhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsc0JBQXNCLENBQUM7b0JBQy9DLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLENBQUM7aUJBQ3hFOztJQUMrQix3QkFBQztDQUFBLEFBTGpDLElBS2lDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENsckNvbmRpdGlvbmFsTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvY29uZGl0aW9uYWwubW9kdWxlJztcbmltcG9ydCB7IENsckNvbW1vblBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vcG9wb3Zlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDbHJEcm9wZG93biB9IGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IHsgQ2xyRHJvcGRvd25JdGVtIH0gZnJvbSAnLi9kcm9wZG93bi1pdGVtJztcbmltcG9ydCB7IENsckRyb3Bkb3duTWVudSB9IGZyb20gJy4vZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgeyBDbHJEcm9wZG93blRyaWdnZXIgfSBmcm9tICcuL2Ryb3Bkb3duLXRyaWdnZXInO1xuXG5leHBvcnQgY29uc3QgQ0xSX0RST1BET1dOX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW0NsckRyb3Bkb3duLCBDbHJEcm9wZG93bk1lbnUsIENsckRyb3Bkb3duVHJpZ2dlciwgQ2xyRHJvcGRvd25JdGVtXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NMUl9EUk9QRE9XTl9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9EUk9QRE9XTl9ESVJFQ1RJVkVTLCBDbHJDb25kaXRpb25hbE1vZHVsZSwgQ2xySWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyb3Bkb3duTW9kdWxlIHt9XG4iXX0=