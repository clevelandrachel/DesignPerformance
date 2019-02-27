/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ResponsiveNavigationService } from './providers/responsive-navigation.service';
import { ResponsiveNavCodes } from './responsive-nav-codes';
var ClrNavLevel = /** @class */ (function () {
    function ClrNavLevel(responsiveNavService, elementRef) {
        this.responsiveNavService = responsiveNavService;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ClrNavLevel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.level !== ResponsiveNavCodes.NAV_LEVEL_1 && this.level !== ResponsiveNavCodes.NAV_LEVEL_2) {
            console.error('Nav Level can only be 1 or 2');
            return;
        }
        this.responsiveNavService.registerNav(this.level);
        this.addNavClass(this.level);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    ClrNavLevel.prototype.addNavClass = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var navHostClassList = this.elementRef.nativeElement.classList;
        if (level === ResponsiveNavCodes.NAV_LEVEL_1) {
            navHostClassList.add(ResponsiveNavCodes.NAV_CLASS_LEVEL_1);
        }
        else if (level === ResponsiveNavCodes.NAV_LEVEL_2) {
            navHostClassList.add(ResponsiveNavCodes.NAV_CLASS_LEVEL_2);
        }
    };
    Object.defineProperty(ClrNavLevel.prototype, "level", {
        get: /**
         * @return {?}
         */
        function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrNavLevel.prototype, "responsiveNavCodes", {
        // getter to access the responsive navigation codes from the template
        get: 
        // getter to access the responsive navigation codes from the template
        /**
         * @return {?}
         */
        function () {
            return ResponsiveNavCodes;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrNavLevel.prototype.open = /**
     * @return {?}
     */
    function () {
        this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_OPEN, this.level);
    };
    /**
     * @return {?}
     */
    ClrNavLevel.prototype.close = /**
     * @return {?}
     */
    function () {
        this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_CLOSE, this.level);
    };
    // TODO: Figure out whats the best way to do this. Possible methods
    // 1. HostListener (current solution)
    // 2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason
    // why
    // TODO: Figure out whats the best way to do this. Possible methods
    // 1. HostListener (current solution)
    // 2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason
    // why
    /**
     * @param {?} target
     * @return {?}
     */
    ClrNavLevel.prototype.onMouseClick = 
    // TODO: Figure out whats the best way to do this. Possible methods
    // 1. HostListener (current solution)
    // 2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason
    // why
    /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var current = target;
        // Get the element in the DOM on which the mouse was clicked
        /** @type {?} */
        var navHost = this.elementRef.nativeElement;
        // Start checking if current and navHost are equal.
        // If not traverse to the parentNode and check again.
        while (current) {
            if (current === navHost) {
                return;
            }
            else if (current.classList.contains('nav-link')) {
                this.close();
                return;
            }
            current = current.parentNode;
        }
    };
    /**
     * @return {?}
     */
    ClrNavLevel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.responsiveNavService.unregisterNav(this.level);
    };
    ClrNavLevel.decorators = [
        { type: Directive, args: [{ selector: '[clr-nav-level]' },] }
    ];
    /** @nocollapse */
    ClrNavLevel.ctorParameters = function () { return [
        { type: ResponsiveNavigationService },
        { type: ElementRef }
    ]; };
    ClrNavLevel.propDecorators = {
        _level: [{ type: Input, args: ['clr-nav-level',] }],
        onMouseClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return ClrNavLevel;
}());
export { ClrNavLevel };
if (false) {
    /** @type {?} */
    ClrNavLevel.prototype._level;
    /** @type {?} */
    ClrNavLevel.prototype.responsiveNavService;
    /** @type {?} */
    ClrNavLevel.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxldmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L25hdi9uYXYtbGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQUlFLHFCQUFvQixvQkFBaUQsRUFBVSxVQUFzQjtRQUFqRix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFekcsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUNsRyxPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDOUMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksS0FBYTs7WUFDakIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUNoRSxJQUFJLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFDbkQsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFrQjtRQUR0QixxRUFBcUU7Ozs7OztRQUNyRTtZQUNFLE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFFRCwwQkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxxQ0FBcUM7SUFDckMsaUhBQWlIO0lBQ2pILE1BQU07Ozs7Ozs7OztJQUVOLGtDQUFZOzs7Ozs7Ozs7SUFEWixVQUNhLE1BQVc7O1lBQ2xCLE9BQU8sR0FBUSxNQUFNOzs7WUFDbkIsT0FBTyxHQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtRQUVsRCxtREFBbUQ7UUFDbkQscURBQXFEO1FBQ3JELE9BQU8sT0FBTyxFQUFFO1lBQ2QsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO2dCQUN2QixPQUFPO2FBQ1I7aUJBQU0sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLE9BQU87YUFDUjtZQUNELE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQWpFRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7Z0JBSGpDLDJCQUEyQjtnQkFGaEIsVUFBVTs7O3lCQU8zQixLQUFLLFNBQUMsZUFBZTsrQkEyQ3JCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7O0lBcUIxQyxrQkFBQztDQUFBLEFBbEVELElBa0VDO1NBakVZLFdBQVc7OztJQUN0Qiw2QkFBdUM7O0lBRTNCLDJDQUF5RDs7SUFBRSxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9yZXNwb25zaXZlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlTmF2Q29kZXMgfSBmcm9tICcuL3Jlc3BvbnNpdmUtbmF2LWNvZGVzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2Nsci1uYXYtbGV2ZWxdJyB9KVxuZXhwb3J0IGNsYXNzIENsck5hdkxldmVsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjbHItbmF2LWxldmVsJykgX2xldmVsOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNwb25zaXZlTmF2U2VydmljZTogUmVzcG9uc2l2ZU5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgIT09IFJlc3BvbnNpdmVOYXZDb2Rlcy5OQVZfTEVWRUxfMSAmJiB0aGlzLmxldmVsICE9PSBSZXNwb25zaXZlTmF2Q29kZXMuTkFWX0xFVkVMXzIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05hdiBMZXZlbCBjYW4gb25seSBiZSAxIG9yIDInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNwb25zaXZlTmF2U2VydmljZS5yZWdpc3Rlck5hdih0aGlzLmxldmVsKTtcbiAgICB0aGlzLmFkZE5hdkNsYXNzKHRoaXMubGV2ZWwpO1xuICB9XG5cbiAgYWRkTmF2Q2xhc3MobGV2ZWw6IG51bWJlcikge1xuICAgIGNvbnN0IG5hdkhvc3RDbGFzc0xpc3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgaWYgKGxldmVsID09PSBSZXNwb25zaXZlTmF2Q29kZXMuTkFWX0xFVkVMXzEpIHtcbiAgICAgIG5hdkhvc3RDbGFzc0xpc3QuYWRkKFJlc3BvbnNpdmVOYXZDb2Rlcy5OQVZfQ0xBU1NfTEVWRUxfMSk7XG4gICAgfSBlbHNlIGlmIChsZXZlbCA9PT0gUmVzcG9uc2l2ZU5hdkNvZGVzLk5BVl9MRVZFTF8yKSB7XG4gICAgICBuYXZIb3N0Q2xhc3NMaXN0LmFkZChSZXNwb25zaXZlTmF2Q29kZXMuTkFWX0NMQVNTX0xFVkVMXzIpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgfVxuXG4gIC8vIGdldHRlciB0byBhY2Nlc3MgdGhlIHJlc3BvbnNpdmUgbmF2aWdhdGlvbiBjb2RlcyBmcm9tIHRoZSB0ZW1wbGF0ZVxuICBnZXQgcmVzcG9uc2l2ZU5hdkNvZGVzKCk6IFJlc3BvbnNpdmVOYXZDb2RlcyB7XG4gICAgcmV0dXJuIFJlc3BvbnNpdmVOYXZDb2RlcztcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5yZXNwb25zaXZlTmF2U2VydmljZS5zZW5kQ29udHJvbE1lc3NhZ2UoUmVzcG9uc2l2ZU5hdkNvZGVzLk5BVl9PUEVOLCB0aGlzLmxldmVsKTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMucmVzcG9uc2l2ZU5hdlNlcnZpY2Uuc2VuZENvbnRyb2xNZXNzYWdlKFJlc3BvbnNpdmVOYXZDb2Rlcy5OQVZfQ0xPU0UsIHRoaXMubGV2ZWwpO1xuICB9XG5cbiAgLy8gVE9ETzogRmlndXJlIG91dCB3aGF0cyB0aGUgYmVzdCB3YXkgdG8gZG8gdGhpcy4gUG9zc2libGUgbWV0aG9kc1xuICAvLyAxLiBIb3N0TGlzdGVuZXIgKGN1cnJlbnQgc29sdXRpb24pXG4gIC8vIDIuIERpcmVjdGl2ZXMgb24gdGhlIC5uYXYtbGluayBjbGFzcy4gV2UgZGlzY3Vzc2VkIG9uIG1vdmluZyBhd2F5IGZyb20gY2xhc3Mgc2VsZWN0b3JzIGJ1dCBJIGZvcmdldCB0aGUgcmVhc29uXG4gIC8vIHdoeVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbk1vdXNlQ2xpY2sodGFyZ2V0OiBhbnkpIHtcbiAgICBsZXQgY3VycmVudDogYW55ID0gdGFyZ2V0OyAvLyBHZXQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBvbiB3aGljaCB0aGUgbW91c2Ugd2FzIGNsaWNrZWRcbiAgICBjb25zdCBuYXZIb3N0OiBhbnkgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDsgLy8gR2V0IHRoZSBjdXJyZW50IG5hdiBuYXRpdmUgSFRNTCBlbGVtZW50XG5cbiAgICAvLyBTdGFydCBjaGVja2luZyBpZiBjdXJyZW50IGFuZCBuYXZIb3N0IGFyZSBlcXVhbC5cbiAgICAvLyBJZiBub3QgdHJhdmVyc2UgdG8gdGhlIHBhcmVudE5vZGUgYW5kIGNoZWNrIGFnYWluLlxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudCA9PT0gbmF2SG9zdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtbGluaycpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlc3BvbnNpdmVOYXZTZXJ2aWNlLnVucmVnaXN0ZXJOYXYodGhpcy5sZXZlbCk7XG4gIH1cbn1cbiJdfQ==