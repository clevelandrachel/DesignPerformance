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
import { ResponsiveNavigationService } from './providers/responsive-navigation.service';
import { ResponsiveNavCodes } from './responsive-nav-codes';
var ClrHeader = /** @class */ (function () {
    function ClrHeader(responsiveNavService) {
        var _this = this;
        this.responsiveNavService = responsiveNavService;
        this.isNavLevel1OnPage = false;
        this.isNavLevel2OnPage = false;
        this.responsiveNavCodes = ResponsiveNavCodes;
        this._subscription = this.responsiveNavService.registeredNavs.subscribe({
            next: function (navLevelList) {
                _this.initializeNavTriggers(navLevelList);
            },
        });
    }
    // reset triggers. handles cases when an application has different nav levels on different pages.
    // reset triggers. handles cases when an application has different nav levels on different pages.
    /**
     * @return {?}
     */
    ClrHeader.prototype.resetNavTriggers = 
    // reset triggers. handles cases when an application has different nav levels on different pages.
    /**
     * @return {?}
     */
    function () {
        this.isNavLevel1OnPage = false;
        this.isNavLevel2OnPage = false;
    };
    // decides which triggers to show on the header
    // decides which triggers to show on the header
    /**
     * @param {?} navList
     * @return {?}
     */
    ClrHeader.prototype.initializeNavTriggers = 
    // decides which triggers to show on the header
    /**
     * @param {?} navList
     * @return {?}
     */
    function (navList) {
        var _this = this;
        this.resetNavTriggers();
        if (navList.length > 2) {
            console.error('More than 2 Nav Levels detected.');
            return;
        }
        navList.forEach(function (navLevel) {
            if (navLevel === ResponsiveNavCodes.NAV_LEVEL_1) {
                _this.isNavLevel1OnPage = true;
            }
            else if (navLevel === ResponsiveNavCodes.NAV_LEVEL_2) {
                _this.isNavLevel2OnPage = true;
            }
        });
    };
    // closes the nav that is open
    // closes the nav that is open
    /**
     * @return {?}
     */
    ClrHeader.prototype.closeOpenNav = 
    // closes the nav that is open
    /**
     * @return {?}
     */
    function () {
        this.responsiveNavService.closeAllNavs();
    };
    // toggles the nav that is open
    // toggles the nav that is open
    /**
     * @param {?} navLevel
     * @return {?}
     */
    ClrHeader.prototype.toggleNav = 
    // toggles the nav that is open
    /**
     * @param {?} navLevel
     * @return {?}
     */
    function (navLevel) {
        this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_TOGGLE, navLevel);
    };
    /**
     * @return {?}
     */
    ClrHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    ClrHeader.decorators = [
        { type: Component, args: [{
                    selector: 'clr-header',
                    template: "\n        <button\n            type=\"button\"\n            *ngIf=\"isNavLevel1OnPage\"\n            class=\"header-hamburger-trigger\"\n            (click)=\"toggleNav(responsiveNavCodes.NAV_LEVEL_1)\">\n            <span></span>\n        </button>\n        <ng-content></ng-content>\n        <button\n            type=\"button\"\n            *ngIf=\"isNavLevel2OnPage\"\n            class=\"header-overflow-trigger\"\n            (click)=\"toggleNav(responsiveNavCodes.NAV_LEVEL_2)\">\n            <span></span>\n        </button>\n        <div class=\"header-backdrop\" (click)=\"closeOpenNav()\"></div>\n    ",
                    host: { '[class.header]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ClrHeader.ctorParameters = function () { return [
        { type: ResponsiveNavigationService }
    ]; };
    return ClrHeader;
}());
export { ClrHeader };
if (false) {
    /** @type {?} */
    ClrHeader.prototype._subscription;
    /** @type {?} */
    ClrHeader.prototype.isNavLevel1OnPage;
    /** @type {?} */
    ClrHeader.prototype.isNavLevel2OnPage;
    /** @type {?} */
    ClrHeader.prototype.responsiveNavCodes;
    /** @type {?} */
    ClrHeader.prototype.responsiveNavService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L25hdi9oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUdyRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQTRCRSxtQkFBb0Isb0JBQWlEO1FBQXJFLGlCQU1DO1FBTm1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNkI7UUFKOUQsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUc3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQ3RFLElBQUksRUFBRSxVQUFDLFlBQXNCO2dCQUMzQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpR0FBaUc7Ozs7O0lBQ2pHLG9DQUFnQjs7Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELCtDQUErQzs7Ozs7O0lBQy9DLHlDQUFxQjs7Ozs7O0lBQXJCLFVBQXNCLE9BQWlCO1FBQXZDLGlCQWFDO1FBWkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDbEQsT0FBTztTQUNSO1FBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7WUFDdEIsSUFBSSxRQUFRLEtBQUssa0JBQWtCLENBQUMsV0FBVyxFQUFFO2dCQUMvQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQy9CO2lCQUFNLElBQUksUUFBUSxLQUFLLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUE4Qjs7Ozs7SUFDOUIsZ0NBQVk7Ozs7O0lBQVo7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUErQjs7Ozs7O0lBQy9CLDZCQUFTOzs7Ozs7SUFBVCxVQUFVLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7OztJQUVELCtCQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHNtQkFpQlA7b0JBQ0gsSUFBSSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO2lCQUNuQzs7OztnQkF4QlEsMkJBQTJCOztJQTBFcEMsZ0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWpEWSxTQUFTOzs7SUFDcEIsa0NBQW9DOztJQUNwQyxzQ0FBMEM7O0lBQzFDLHNDQUEwQzs7SUFDMUMsdUNBQStDOztJQUVuQyx5Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3Jlc3BvbnNpdmUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZDb2RlcyB9IGZyb20gJy4vcmVzcG9uc2l2ZS1uYXYtY29kZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAqbmdJZj1cImlzTmF2TGV2ZWwxT25QYWdlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyLWhhbWJ1cmdlci10cmlnZ2VyXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVOYXYocmVzcG9uc2l2ZU5hdkNvZGVzLk5BVl9MRVZFTF8xKVwiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaXNOYXZMZXZlbDJPblBhZ2VcIlxuICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXItb3ZlcmZsb3ctdHJpZ2dlclwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlTmF2KHJlc3BvbnNpdmVOYXZDb2Rlcy5OQVZfTEVWRUxfMilcIj5cbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYmFja2Ryb3BcIiAoY2xpY2spPVwiY2xvc2VPcGVuTmF2KClcIj48L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3MuaGVhZGVyXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJIZWFkZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGlzTmF2TGV2ZWwxT25QYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBpc05hdkxldmVsMk9uUGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVzcG9uc2l2ZU5hdkNvZGVzID0gUmVzcG9uc2l2ZU5hdkNvZGVzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzcG9uc2l2ZU5hdlNlcnZpY2U6IFJlc3BvbnNpdmVOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMucmVzcG9uc2l2ZU5hdlNlcnZpY2UucmVnaXN0ZXJlZE5hdnMuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChuYXZMZXZlbExpc3Q6IG51bWJlcltdKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU5hdlRyaWdnZXJzKG5hdkxldmVsTGlzdCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVzZXQgdHJpZ2dlcnMuIGhhbmRsZXMgY2FzZXMgd2hlbiBhbiBhcHBsaWNhdGlvbiBoYXMgZGlmZmVyZW50IG5hdiBsZXZlbHMgb24gZGlmZmVyZW50IHBhZ2VzLlxuICByZXNldE5hdlRyaWdnZXJzKCkge1xuICAgIHRoaXMuaXNOYXZMZXZlbDFPblBhZ2UgPSBmYWxzZTtcbiAgICB0aGlzLmlzTmF2TGV2ZWwyT25QYWdlID0gZmFsc2U7XG4gIH1cblxuICAvLyBkZWNpZGVzIHdoaWNoIHRyaWdnZXJzIHRvIHNob3cgb24gdGhlIGhlYWRlclxuICBpbml0aWFsaXplTmF2VHJpZ2dlcnMobmF2TGlzdDogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0TmF2VHJpZ2dlcnMoKTtcbiAgICBpZiAobmF2TGlzdC5sZW5ndGggPiAyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNb3JlIHRoYW4gMiBOYXYgTGV2ZWxzIGRldGVjdGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuYXZMaXN0LmZvckVhY2gobmF2TGV2ZWwgPT4ge1xuICAgICAgaWYgKG5hdkxldmVsID09PSBSZXNwb25zaXZlTmF2Q29kZXMuTkFWX0xFVkVMXzEpIHtcbiAgICAgICAgdGhpcy5pc05hdkxldmVsMU9uUGFnZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5hdkxldmVsID09PSBSZXNwb25zaXZlTmF2Q29kZXMuTkFWX0xFVkVMXzIpIHtcbiAgICAgICAgdGhpcy5pc05hdkxldmVsMk9uUGFnZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBjbG9zZXMgdGhlIG5hdiB0aGF0IGlzIG9wZW5cbiAgY2xvc2VPcGVuTmF2KCkge1xuICAgIHRoaXMucmVzcG9uc2l2ZU5hdlNlcnZpY2UuY2xvc2VBbGxOYXZzKCk7XG4gIH1cblxuICAvLyB0b2dnbGVzIHRoZSBuYXYgdGhhdCBpcyBvcGVuXG4gIHRvZ2dsZU5hdihuYXZMZXZlbDogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXNwb25zaXZlTmF2U2VydmljZS5zZW5kQ29udHJvbE1lc3NhZ2UoUmVzcG9uc2l2ZU5hdkNvZGVzLk5BVl9UT0dHTEUsIG5hdkxldmVsKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=