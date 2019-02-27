/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DATEPICKER_ENABLE_BREAKPOINT } from '../../../utils/breakpoints/breakpoints';
import { MOBILE_USERAGENT_REGEX } from '../utils/constants';
var DatepickerEnabledService = /** @class */ (function () {
    function DatepickerEnabledService(_document) {
        this._document = _document;
        this._isUserAgentMobile = false;
        if (this._document) {
            this._isUserAgentMobile = MOBILE_USERAGENT_REGEX.test(_document.defaultView.navigator.userAgent);
            this._innerWidth = _document.defaultView.innerWidth;
        }
    }
    Object.defineProperty(DatepickerEnabledService.prototype, "isEnabled", {
        /**
         * Returns if the calendar should be active or not.
         * If the user agent is mobile and the screen width is less than DATEPICKER_ACTIVE_BREAKPOINT
         * then the calendar is inactive.
         */
        get: /**
         * Returns if the calendar should be active or not.
         * If the user agent is mobile and the screen width is less than DATEPICKER_ACTIVE_BREAKPOINT
         * then the calendar is inactive.
         * @return {?}
         */
        function () {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
            // What they recommend is:
            //"In summary, we recommend looking for the string 'Mobi'
            // anywhere in the User Agent to detect a mobile device."
            if (this._document) {
                if (this._innerWidth < DATEPICKER_ENABLE_BREAKPOINT && this._isUserAgentMobile) {
                    return false;
                }
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerEnabledService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DatepickerEnabledService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return DatepickerEnabledService;
}());
export { DatepickerEnabledService };
if (false) {
    /** @type {?} */
    DatepickerEnabledService.prototype._isUserAgentMobile;
    /** @type {?} */
    DatepickerEnabledService.prototype._innerWidth;
    /** @type {?} */
    DatepickerEnabledService.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1lbmFibGVkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL3Byb3ZpZGVycy9kYXRlcGlja2VyLWVuYWJsZWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUQ7SUFFRSxrQ0FBc0MsU0FBYztRQUFkLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFPNUMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBTjFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBVUQsc0JBQUksK0NBQVM7UUFMYjs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDRSwyRkFBMkY7WUFDM0YsMEJBQTBCO1lBQzFCLHlEQUF5RDtZQUN6RCx5REFBeUQ7WUFDekQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUM5RSxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDOzs7T0FBQTs7Z0JBNUJGLFVBQVU7Ozs7Z0RBRUksTUFBTSxTQUFDLFFBQVE7O0lBMkI5QiwrQkFBQztDQUFBLEFBN0JELElBNkJDO1NBNUJZLHdCQUF3Qjs7O0lBUW5DLHNEQUE0Qzs7SUFDNUMsK0NBQTRCOztJQVJoQiw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEQVRFUElDS0VSX0VOQUJMRV9CUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYnJlYWtwb2ludHMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgTU9CSUxFX1VTRVJBR0VOVF9SRUdFWCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRW5hYmxlZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9pc1VzZXJBZ2VudE1vYmlsZSA9IE1PQklMRV9VU0VSQUdFTlRfUkVHRVgudGVzdChfZG9jdW1lbnQuZGVmYXVsdFZpZXcubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB0aGlzLl9pbm5lcldpZHRoID0gX2RvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNVc2VyQWdlbnRNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5uZXJXaWR0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBjYWxlbmRhciBzaG91bGQgYmUgYWN0aXZlIG9yIG5vdC5cbiAgICogSWYgdGhlIHVzZXIgYWdlbnQgaXMgbW9iaWxlIGFuZCB0aGUgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBEQVRFUElDS0VSX0FDVElWRV9CUkVBS1BPSU5UXG4gICAqIHRoZW4gdGhlIGNhbGVuZGFyIGlzIGluYWN0aXZlLlxuICAgKi9cbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jyb3dzZXJfZGV0ZWN0aW9uX3VzaW5nX3RoZV91c2VyX2FnZW50XG4gICAgLy8gV2hhdCB0aGV5IHJlY29tbWVuZCBpczpcbiAgICAvL1wiSW4gc3VtbWFyeSwgd2UgcmVjb21tZW5kIGxvb2tpbmcgZm9yIHRoZSBzdHJpbmcgJ01vYmknXG4gICAgLy8gYW55d2hlcmUgaW4gdGhlIFVzZXIgQWdlbnQgdG8gZGV0ZWN0IGEgbW9iaWxlIGRldmljZS5cIlxuICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgaWYgKHRoaXMuX2lubmVyV2lkdGggPCBEQVRFUElDS0VSX0VOQUJMRV9CUkVBS1BPSU5UICYmIHRoaXMuX2lzVXNlckFnZW50TW9iaWxlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==