/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive } from '@angular/core';
import { VerticalNavIconService } from './providers/vertical-nav-icon.service';
var ClrVerticalNavIcon = /** @class */ (function () {
    function ClrVerticalNavIcon(_verticalNavIconService) {
        this._verticalNavIconService = _verticalNavIconService;
        this._verticalNavIconService.registerIcon();
    }
    /**
     * @return {?}
     */
    ClrVerticalNavIcon.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._verticalNavIconService.unregisterIcon();
    };
    ClrVerticalNavIcon.decorators = [
        { type: Directive, args: [{ selector: '[clrVerticalNavIcon]', host: { class: 'nav-icon' } },] }
    ];
    /** @nocollapse */
    ClrVerticalNavIcon.ctorParameters = function () { return [
        { type: VerticalNavIconService }
    ]; };
    return ClrVerticalNavIcon;
}());
export { ClrVerticalNavIcon };
if (false) {
    /** @type {?} */
    ClrVerticalNavIcon.prototype._verticalNavIconService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWljb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi1pY29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFL0U7SUFFRSw0QkFBb0IsdUJBQStDO1FBQS9DLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDakUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Z0JBUkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRTs7OztnQkFGbkUsc0JBQXNCOztJQVcvQix5QkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLGtCQUFrQjs7O0lBQ2pCLHFEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbE5hdkljb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvdmVydGljYWwtbmF2LWljb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJWZXJ0aWNhbE5hdkljb25dJywgaG9zdDogeyBjbGFzczogJ25hdi1pY29uJyB9IH0pXG5leHBvcnQgY2xhc3MgQ2xyVmVydGljYWxOYXZJY29uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmVydGljYWxOYXZJY29uU2VydmljZTogVmVydGljYWxOYXZJY29uU2VydmljZSkge1xuICAgIHRoaXMuX3ZlcnRpY2FsTmF2SWNvblNlcnZpY2UucmVnaXN0ZXJJY29uKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl92ZXJ0aWNhbE5hdkljb25TZXJ2aWNlLnVucmVnaXN0ZXJJY29uKCk7XG4gIH1cbn1cbiJdfQ==