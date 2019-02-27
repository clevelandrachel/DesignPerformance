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
import { NgControl } from '@angular/forms';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrTextareaContainer } from './textarea-container';
var ClrTextarea = /** @class */ (function (_super) {
    tslib_1.__extends(ClrTextarea, _super);
    function ClrTextarea(vcr, injector, control, renderer, el) {
        var _this = _super.call(this, vcr, ClrTextareaContainer, injector, control, renderer, el) || this;
        _this.index = 1;
        return _this;
    }
    ClrTextarea.decorators = [
        { type: Directive, args: [{ selector: '[clrTextarea]', host: { '[class.clr-textarea]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrTextarea.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Injector },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    return ClrTextarea;
}(WrappedFormControl));
export { ClrTextarea };
if (false) {
    /** @type {?} */
    ClrTextarea.prototype.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy90ZXh0YXJlYS90ZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1RDtJQUNpQyx1Q0FBd0M7SUFHdkUscUJBQ0UsR0FBcUIsRUFDckIsUUFBa0IsRUFHbEIsT0FBa0IsRUFDbEIsUUFBbUIsRUFDbkIsRUFBYztRQVBoQixZQVNFLGtCQUFNLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FDbEU7UUFaUyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQVlwQixDQUFDOztnQkFkRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFOzs7O2dCQU45RCxnQkFBZ0I7Z0JBQXlCLFFBQVE7Z0JBQzVELFNBQVMsdUJBWWIsSUFBSSxZQUNKLFFBQVE7Z0JBZHlCLFNBQVM7Z0JBQUUsVUFBVTs7SUFxQjNELGtCQUFDO0NBQUEsQUFmRCxDQUNpQyxrQkFBa0IsR0FjbEQ7U0FkWSxXQUFXOzs7SUFDdEIsNEJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBXcmFwcGVkRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vd3JhcHBlZC1jb250cm9sJztcbmltcG9ydCB7IENsclRleHRhcmVhQ29udGFpbmVyIH0gZnJvbSAnLi90ZXh0YXJlYS1jb250YWluZXInO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyVGV4dGFyZWFdJywgaG9zdDogeyAnW2NsYXNzLmNsci10ZXh0YXJlYV0nOiAndHJ1ZScgfSB9KVxuZXhwb3J0IGNsYXNzIENsclRleHRhcmVhIGV4dGVuZHMgV3JhcHBlZEZvcm1Db250cm9sPENsclRleHRhcmVhQ29udGFpbmVyPiB7XG4gIHByb3RlY3RlZCBpbmRleCA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAU2VsZigpXG4gICAgQE9wdGlvbmFsKClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBzdXBlcih2Y3IsIENsclRleHRhcmVhQ29udGFpbmVyLCBpbmplY3RvciwgY29udHJvbCwgcmVuZGVyZXIsIGVsKTtcbiAgfVxufVxuIl19