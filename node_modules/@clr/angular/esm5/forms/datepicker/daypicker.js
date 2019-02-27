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
import { DateNavigationService } from './providers/date-navigation.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
var ClrDaypicker = /** @class */ (function () {
    function ClrDaypicker(_viewManagerService, _dateNavigationService, _localeHelperService, commonStrings) {
        this._viewManagerService = _viewManagerService;
        this._dateNavigationService = _dateNavigationService;
        this._localeHelperService = _localeHelperService;
        this.commonStrings = commonStrings;
    }
    /**
     * Calls the ViewManagerService to change to the monthpicker view.
     */
    /**
     * Calls the ViewManagerService to change to the monthpicker view.
     * @return {?}
     */
    ClrDaypicker.prototype.changeToMonthView = /**
     * Calls the ViewManagerService to change to the monthpicker view.
     * @return {?}
     */
    function () {
        this._viewManagerService.changeToMonthView();
    };
    /**
     * Calls the ViewManagerService to change to the yearpicker view.
     */
    /**
     * Calls the ViewManagerService to change to the yearpicker view.
     * @return {?}
     */
    ClrDaypicker.prototype.changeToYearView = /**
     * Calls the ViewManagerService to change to the yearpicker view.
     * @return {?}
     */
    function () {
        this._viewManagerService.changeToYearView();
    };
    Object.defineProperty(ClrDaypicker.prototype, "calendarMonth", {
        /**
         * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
         */
        get: /**
         * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
         * @return {?}
         */
        function () {
            return this._localeHelperService.localeMonthsAbbreviated[this._dateNavigationService.displayedCalendar.month];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDaypicker.prototype, "calendarYear", {
        /**
         * Returns the year value of the calendar.
         */
        get: /**
         * Returns the year value of the calendar.
         * @return {?}
         */
        function () {
            return this._dateNavigationService.displayedCalendar.year;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calls the DateNavigationService to move to the next month.
     */
    /**
     * Calls the DateNavigationService to move to the next month.
     * @return {?}
     */
    ClrDaypicker.prototype.nextMonth = /**
     * Calls the DateNavigationService to move to the next month.
     * @return {?}
     */
    function () {
        this._dateNavigationService.moveToNextMonth();
    };
    /**
     * Calls the DateNavigationService to move to the previous month.
     */
    /**
     * Calls the DateNavigationService to move to the previous month.
     * @return {?}
     */
    ClrDaypicker.prototype.previousMonth = /**
     * Calls the DateNavigationService to move to the previous month.
     * @return {?}
     */
    function () {
        this._dateNavigationService.moveToPreviousMonth();
    };
    /**
     * Calls the DateNavigationService to move to the current month.
     */
    /**
     * Calls the DateNavigationService to move to the current month.
     * @return {?}
     */
    ClrDaypicker.prototype.currentMonth = /**
     * Calls the DateNavigationService to move to the current month.
     * @return {?}
     */
    function () {
        this._dateNavigationService.moveToCurrentMonth();
    };
    ClrDaypicker.decorators = [
        { type: Component, args: [{ selector: 'clr-daypicker', template: "<div class=\"calendar-header\">\n    <div class=\"calendar-pickers\">\n        <button class=\"calendar-btn monthpicker-trigger\" type=\"button\" (click)=\"changeToMonthView()\">\n            {{calendarMonth}}\n        </button>\n        <button class=\"calendar-btn yearpicker-trigger\" type=\"button\" (click)=\"changeToYearView()\">\n            {{calendarYear}}\n        </button>\n    </div>\n    <div class=\"calendar-switchers\">\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"previousMonth()\">\n            <clr-icon shape=\"angle\" dir=\"left\" [attr.title]=\"commonStrings.previous\"></clr-icon>\n        </button>\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"currentMonth()\">\n            <clr-icon shape=\"event\" [attr.title]=\"commonStrings.current\"></clr-icon>\n        </button>\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"nextMonth()\">\n            <clr-icon shape=\"angle\" dir=\"right\" [attr.title]=\"commonStrings.next\"></clr-icon>\n        </button>\n    </div>\n</div>\n<clr-calendar></clr-calendar>\n", host: { '[class.daypicker]': 'true' } }] }
    ];
    /** @nocollapse */
    ClrDaypicker.ctorParameters = function () { return [
        { type: ViewManagerService },
        { type: DateNavigationService },
        { type: LocaleHelperService },
        { type: ClrCommonStrings }
    ]; };
    return ClrDaypicker;
}());
export { ClrDaypicker };
if (false) {
    /** @type {?} */
    ClrDaypicker.prototype._viewManagerService;
    /** @type {?} */
    ClrDaypicker.prototype._dateNavigationService;
    /** @type {?} */
    ClrDaypicker.prototype._localeHelperService;
    /** @type {?} */
    ClrDaypicker.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9kYXlwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RTtJQUVFLHNCQUNVLG1CQUF1QyxFQUN2QyxzQkFBNkMsRUFDN0Msb0JBQXlDLEVBQzFDLGFBQStCO1FBSDlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQzFDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUNyQyxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsd0NBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFnQjs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFLRCxzQkFBSSx1Q0FBYTtRQUhqQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoSCxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLHNDQUFZO1FBSGhCOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQVM7Ozs7SUFBVDtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsb0NBQWE7Ozs7SUFBYjtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBWTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsMG1DQUErQixFQUFFLElBQUksRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxFQUFFOzs7O2dCQUh2RyxrQkFBa0I7Z0JBRmxCLHFCQUFxQjtnQkFDckIsbUJBQW1CO2dCQUVuQixnQkFBZ0I7O0lBMkR6QixtQkFBQztDQUFBLEFBekRELElBeURDO1NBeERZLFlBQVk7OztJQUVyQiwyQ0FBK0M7O0lBQy9DLDhDQUFxRDs7SUFDckQsNENBQWlEOztJQUNqRCxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZGF0ZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxlSGVscGVyU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2xvY2FsZS1oZWxwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6ICdjbHItZGF5cGlja2VyJywgdGVtcGxhdGVVcmw6ICcuL2RheXBpY2tlci5odG1sJywgaG9zdDogeyAnW2NsYXNzLmRheXBpY2tlcl0nOiAndHJ1ZScgfSB9KVxuZXhwb3J0IGNsYXNzIENsckRheXBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdNYW5hZ2VyU2VydmljZTogVmlld01hbmFnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2RhdGVOYXZpZ2F0aW9uU2VydmljZTogRGF0ZU5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2xvY2FsZUhlbHBlclNlcnZpY2U6IExvY2FsZUhlbHBlclNlcnZpY2UsXG4gICAgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3NcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgVmlld01hbmFnZXJTZXJ2aWNlIHRvIGNoYW5nZSB0byB0aGUgbW9udGhwaWNrZXIgdmlldy5cbiAgICovXG4gIGNoYW5nZVRvTW9udGhWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdNYW5hZ2VyU2VydmljZS5jaGFuZ2VUb01vbnRoVmlldygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBWaWV3TWFuYWdlclNlcnZpY2UgdG8gY2hhbmdlIHRvIHRoZSB5ZWFycGlja2VyIHZpZXcuXG4gICAqL1xuICBjaGFuZ2VUb1llYXJWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdNYW5hZ2VyU2VydmljZS5jaGFuZ2VUb1llYXJWaWV3KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbW9udGggdmFsdWUgb2YgdGhlIGNhbGVuZGFyIGluIHRoZSBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkIGZvcm1hdC5cbiAgICovXG4gIGdldCBjYWxlbmRhck1vbnRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZUhlbHBlclNlcnZpY2UubG9jYWxlTW9udGhzQWJicmV2aWF0ZWRbdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLmRpc3BsYXllZENhbGVuZGFyLm1vbnRoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB5ZWFyIHZhbHVlIG9mIHRoZSBjYWxlbmRhci5cbiAgICovXG4gIGdldCBjYWxlbmRhclllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLmRpc3BsYXllZENhbGVuZGFyLnllYXI7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIERhdGVOYXZpZ2F0aW9uU2VydmljZSB0byBtb3ZlIHRvIHRoZSBuZXh0IG1vbnRoLlxuICAgKi9cbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGVOYXZpZ2F0aW9uU2VydmljZS5tb3ZlVG9OZXh0TW9udGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIHRvIG1vdmUgdG8gdGhlIHByZXZpb3VzIG1vbnRoLlxuICAgKi9cbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlTmF2aWdhdGlvblNlcnZpY2UubW92ZVRvUHJldmlvdXNNb250aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBEYXRlTmF2aWdhdGlvblNlcnZpY2UgdG8gbW92ZSB0byB0aGUgY3VycmVudCBtb250aC5cbiAgICovXG4gIGN1cnJlbnRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlTmF2aWdhdGlvblNlcnZpY2UubW92ZVRvQ3VycmVudE1vbnRoKCk7XG4gIH1cbn1cbiJdfQ==