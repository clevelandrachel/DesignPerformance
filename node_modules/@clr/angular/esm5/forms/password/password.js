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
import { Directive, ElementRef, HostListener, Inject, Injector, Optional, Renderer2, Self, ViewContainerRef, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgControl } from '@angular/forms';
import { ClrPasswordContainer, TOGGLE_SERVICE } from './password-container';
import { WrappedFormControl } from '../common/wrapped-control';
import { FocusService } from '../common/providers/focus.service';
var ClrPassword = /** @class */ (function (_super) {
    tslib_1.__extends(ClrPassword, _super);
    function ClrPassword(vcr, injector, control, renderer, el, focusService, toggleService) {
        var _this = _super.call(this, vcr, ClrPasswordContainer, injector, control, renderer, el) || this;
        _this.focusService = focusService;
        _this.toggleService = toggleService;
        _this.index = 1;
        if (!_this.focusService) {
            throw new Error('clrPassword requires being wrapped in <clr-password-container>');
        }
        _this.subscriptions.push(_this.toggleService.subscribe(function (toggle) {
            renderer.setProperty(el.nativeElement, 'type', toggle ? 'text' : 'password');
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    ClrPassword.prototype.triggerFocus = /**
     * @return {?}
     */
    function () {
        if (this.focusService) {
            this.focusService.focused = true;
        }
    };
    /**
     * @return {?}
     */
    ClrPassword.prototype.triggerValidation = /**
     * @return {?}
     */
    function () {
        _super.prototype.triggerValidation.call(this);
        if (this.focusService) {
            this.focusService.focused = false;
        }
    };
    ClrPassword.decorators = [
        { type: Directive, args: [{ selector: '[clrPassword]', host: { '[class.clr-input]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrPassword.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Injector },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: FocusService, decorators: [{ type: Optional }] },
        { type: BehaviorSubject, decorators: [{ type: Optional }, { type: Inject, args: [TOGGLE_SERVICE,] }] }
    ]; };
    ClrPassword.propDecorators = {
        triggerFocus: [{ type: HostListener, args: ['focus',] }],
        triggerValidation: [{ type: HostListener, args: ['blur',] }]
    };
    return ClrPassword;
}(WrappedFormControl));
export { ClrPassword };
if (false) {
    /** @type {?} */
    ClrPassword.prototype.index;
    /** @type {?} */
    ClrPassword.prototype.focusService;
    /** @type {?} */
    ClrPassword.prototype.toggleService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9wYXNzd29yZC9wYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBR1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0osZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakU7SUFDaUMsdUNBQXdDO0lBR3ZFLHFCQUNFLEdBQXFCLEVBQ3JCLFFBQWtCLEVBR2xCLE9BQWtCLEVBQ2xCLFFBQW1CLEVBQ25CLEVBQWMsRUFDTSxZQUEwQixFQUd0QyxhQUF1QztRQVhqRCxZQWFFLGtCQUFNLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsU0FXbEU7UUFoQnFCLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBR3RDLG1CQUFhLEdBQWIsYUFBYSxDQUEwQjtRQWJ2QyxXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBaUJsQixJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDbkY7UUFFRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2pDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUNILENBQUM7O0lBQ0osQ0FBQzs7OztJQUdELGtDQUFZOzs7SUFEWjtRQUVFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBR0QsdUNBQWlCOzs7SUFEakI7UUFFRSxpQkFBTSxpQkFBaUIsV0FBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkM7SUFDSCxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsRUFBRTs7OztnQkFUN0UsZ0JBQWdCO2dCQU5oQixRQUFRO2dCQVNELFNBQVMsdUJBYWIsSUFBSSxZQUNKLFFBQVE7Z0JBbkJYLFNBQVM7Z0JBUFQsVUFBVTtnQkFnQkgsWUFBWSx1QkFjaEIsUUFBUTtnQkFuQkosZUFBZSx1QkFvQm5CLFFBQVEsWUFDUixNQUFNLFNBQUMsY0FBYzs7OytCQWdCdkIsWUFBWSxTQUFDLE9BQU87b0NBT3BCLFlBQVksU0FBQyxNQUFNOztJQU90QixrQkFBQztDQUFBLEFBNUNELENBQ2lDLGtCQUFrQixHQTJDbEQ7U0EzQ1ksV0FBVzs7O0lBQ3RCLDRCQUFvQjs7SUFVbEIsbUNBQThDOztJQUM5QyxvQ0FFK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENsclBhc3N3b3JkQ29udGFpbmVyLCBUT0dHTEVfU0VSVklDRSB9IGZyb20gJy4vcGFzc3dvcmQtY29udGFpbmVyJztcbmltcG9ydCB7IFdyYXBwZWRGb3JtQ29udHJvbCB9IGZyb20gJy4uL2NvbW1vbi93cmFwcGVkLWNvbnRyb2wnO1xuaW1wb3J0IHsgRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9mb2N1cy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclBhc3N3b3JkXScsIGhvc3Q6IHsgJ1tjbGFzcy5jbHItaW5wdXRdJzogJ3RydWUnIH0gfSlcbmV4cG9ydCBjbGFzcyBDbHJQYXNzd29yZCBleHRlbmRzIFdyYXBwZWRGb3JtQ29udHJvbDxDbHJQYXNzd29yZENvbnRhaW5lcj4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBpbmRleCA9IDE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAU2VsZigpXG4gICAgQE9wdGlvbmFsKClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvY3VzU2VydmljZTogRm9jdXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChUT0dHTEVfU0VSVklDRSlcbiAgICBwcml2YXRlIHRvZ2dsZVNlcnZpY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPlxuICApIHtcbiAgICBzdXBlcih2Y3IsIENsclBhc3N3b3JkQ29udGFpbmVyLCBpbmplY3RvciwgY29udHJvbCwgcmVuZGVyZXIsIGVsKTtcblxuICAgIGlmICghdGhpcy5mb2N1c1NlcnZpY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xyUGFzc3dvcmQgcmVxdWlyZXMgYmVpbmcgd3JhcHBlZCBpbiA8Y2xyLXBhc3N3b3JkLWNvbnRhaW5lcj4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMudG9nZ2xlU2VydmljZS5zdWJzY3JpYmUodG9nZ2xlID0+IHtcbiAgICAgICAgcmVuZGVyZXIuc2V0UHJvcGVydHkoZWwubmF0aXZlRWxlbWVudCwgJ3R5cGUnLCB0b2dnbGUgPyAndGV4dCcgOiAncGFzc3dvcmQnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgdHJpZ2dlckZvY3VzKCkge1xuICAgIGlmICh0aGlzLmZvY3VzU2VydmljZSkge1xuICAgICAgdGhpcy5mb2N1c1NlcnZpY2UuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHRyaWdnZXJWYWxpZGF0aW9uKCkge1xuICAgIHN1cGVyLnRyaWdnZXJWYWxpZGF0aW9uKCk7XG4gICAgaWYgKHRoaXMuZm9jdXNTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmZvY3VzU2VydmljZS5mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=