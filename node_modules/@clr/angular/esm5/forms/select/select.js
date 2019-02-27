/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ViewContainerRef, Renderer2, ElementRef, Injector, Optional, Self } from '@angular/core';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrSelectContainer } from './select-container';
import { NgControl } from '@angular/forms';
var ClrSelect = /** @class */ (function (_super) {
    tslib_1.__extends(ClrSelect, _super);
    function ClrSelect(vcr, injector, control, renderer, el) {
        var _this = _super.call(this, vcr, ClrSelectContainer, injector, control, renderer, el) || this;
        _this.index = 1;
        return _this;
    }
    ClrSelect.decorators = [
        { type: Directive, args: [{ selector: '[clrSelect]', host: { '[class.clr-select]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrSelect.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Injector },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    return ClrSelect;
}(WrappedFormControl));
export { ClrSelect };
if (false) {
    /** @type {?} */
    ClrSelect.prototype.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvc2VsZWN0L3NlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUMrQixxQ0FBc0M7SUFHbkUsbUJBQ0UsR0FBcUIsRUFDckIsUUFBa0IsRUFHbEIsT0FBa0IsRUFDbEIsUUFBbUIsRUFDbkIsRUFBYztRQVBoQixZQVNFLGtCQUFNLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FDaEU7UUFaUyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQVlwQixDQUFDOztnQkFkRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxFQUFFOzs7O2dCQU4xRCxnQkFBZ0I7Z0JBQXlCLFFBQVE7Z0JBSTVELFNBQVMsdUJBU2IsSUFBSSxZQUNKLFFBQVE7Z0JBZHlCLFNBQVM7Z0JBQUUsVUFBVTs7SUFxQjNELGdCQUFDO0NBQUEsQUFmRCxDQUMrQixrQkFBa0IsR0FjaEQ7U0FkWSxTQUFTOzs7SUFDcEIsMEJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBXcmFwcGVkRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vd3JhcHBlZC1jb250cm9sJztcbmltcG9ydCB7IENsclNlbGVjdENvbnRhaW5lciB9IGZyb20gJy4vc2VsZWN0LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJTZWxlY3RdJywgaG9zdDogeyAnW2NsYXNzLmNsci1zZWxlY3RdJzogJ3RydWUnIH0gfSlcbmV4cG9ydCBjbGFzcyBDbHJTZWxlY3QgZXh0ZW5kcyBXcmFwcGVkRm9ybUNvbnRyb2w8Q2xyU2VsZWN0Q29udGFpbmVyPiB7XG4gIHByb3RlY3RlZCBpbmRleCA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAU2VsZigpXG4gICAgQE9wdGlvbmFsKClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBzdXBlcih2Y3IsIENsclNlbGVjdENvbnRhaW5lciwgaW5qZWN0b3IsIGNvbnRyb2wsIHJlbmRlcmVyLCBlbCk7XG4gIH1cbn1cbiJdfQ==