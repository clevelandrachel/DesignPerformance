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
export class ClrDaypicker {
    /**
     * @param {?} _viewManagerService
     * @param {?} _dateNavigationService
     * @param {?} _localeHelperService
     * @param {?} commonStrings
     */
    constructor(_viewManagerService, _dateNavigationService, _localeHelperService, commonStrings) {
        this._viewManagerService = _viewManagerService;
        this._dateNavigationService = _dateNavigationService;
        this._localeHelperService = _localeHelperService;
        this.commonStrings = commonStrings;
    }
    /**
     * Calls the ViewManagerService to change to the monthpicker view.
     * @return {?}
     */
    changeToMonthView() {
        this._viewManagerService.changeToMonthView();
    }
    /**
     * Calls the ViewManagerService to change to the yearpicker view.
     * @return {?}
     */
    changeToYearView() {
        this._viewManagerService.changeToYearView();
    }
    /**
     * Returns the month value of the calendar in the TranslationWidth.Abbreviated format.
     * @return {?}
     */
    get calendarMonth() {
        return this._localeHelperService.localeMonthsAbbreviated[this._dateNavigationService.displayedCalendar.month];
    }
    /**
     * Returns the year value of the calendar.
     * @return {?}
     */
    get calendarYear() {
        return this._dateNavigationService.displayedCalendar.year;
    }
    /**
     * Calls the DateNavigationService to move to the next month.
     * @return {?}
     */
    nextMonth() {
        this._dateNavigationService.moveToNextMonth();
    }
    /**
     * Calls the DateNavigationService to move to the previous month.
     * @return {?}
     */
    previousMonth() {
        this._dateNavigationService.moveToPreviousMonth();
    }
    /**
     * Calls the DateNavigationService to move to the current month.
     * @return {?}
     */
    currentMonth() {
        this._dateNavigationService.moveToCurrentMonth();
    }
}
ClrDaypicker.decorators = [
    { type: Component, args: [{ selector: 'clr-daypicker', template: "<div class=\"calendar-header\">\n    <div class=\"calendar-pickers\">\n        <button class=\"calendar-btn monthpicker-trigger\" type=\"button\" (click)=\"changeToMonthView()\">\n            {{calendarMonth}}\n        </button>\n        <button class=\"calendar-btn yearpicker-trigger\" type=\"button\" (click)=\"changeToYearView()\">\n            {{calendarYear}}\n        </button>\n    </div>\n    <div class=\"calendar-switchers\">\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"previousMonth()\">\n            <clr-icon shape=\"angle\" dir=\"left\" [attr.title]=\"commonStrings.previous\"></clr-icon>\n        </button>\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"currentMonth()\">\n            <clr-icon shape=\"event\" [attr.title]=\"commonStrings.current\"></clr-icon>\n        </button>\n        <button class=\"calendar-btn switcher\" type=\"button\" (click)=\"nextMonth()\">\n            <clr-icon shape=\"angle\" dir=\"right\" [attr.title]=\"commonStrings.next\"></clr-icon>\n        </button>\n    </div>\n</div>\n<clr-calendar></clr-calendar>\n", host: { '[class.daypicker]': 'true' } }] }
];
/** @nocollapse */
ClrDaypicker.ctorParameters = () => [
    { type: ViewManagerService },
    { type: DateNavigationService },
    { type: LocaleHelperService },
    { type: ClrCommonStrings }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5cGlja2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9kYXlwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUc3RSxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUN2QixZQUNVLG1CQUF1QyxFQUN2QyxzQkFBNkMsRUFDN0Msb0JBQXlDLEVBQzFDLGFBQStCO1FBSDlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQUM3Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQzFDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUNyQyxDQUFDOzs7OztJQUtKLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFLRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEgsQ0FBQzs7Ozs7SUFLRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFLRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBS0QsYUFBYTtRQUNYLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQXhERixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLDBtQ0FBK0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsRUFBRTs7OztZQUh2RyxrQkFBa0I7WUFGbEIscUJBQXFCO1lBQ3JCLG1CQUFtQjtZQUVuQixnQkFBZ0I7Ozs7SUFLckIsMkNBQStDOztJQUMvQyw4Q0FBcUQ7O0lBQ3JELDRDQUFpRDs7SUFDakQscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RhdGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9sb2NhbGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvdmlldy1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiAnY2xyLWRheXBpY2tlcicsIHRlbXBsYXRlVXJsOiAnLi9kYXlwaWNrZXIuaHRtbCcsIGhvc3Q6IHsgJ1tjbGFzcy5kYXlwaWNrZXJdJzogJ3RydWUnIH0gfSlcbmV4cG9ydCBjbGFzcyBDbHJEYXlwaWNrZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3TWFuYWdlclNlcnZpY2U6IFZpZXdNYW5hZ2VyU2VydmljZSxcbiAgICBwcml2YXRlIF9kYXRlTmF2aWdhdGlvblNlcnZpY2U6IERhdGVOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9sb2NhbGVIZWxwZXJTZXJ2aWNlOiBMb2NhbGVIZWxwZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge31cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIFZpZXdNYW5hZ2VyU2VydmljZSB0byBjaGFuZ2UgdG8gdGhlIG1vbnRocGlja2VyIHZpZXcuXG4gICAqL1xuICBjaGFuZ2VUb01vbnRoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3TWFuYWdlclNlcnZpY2UuY2hhbmdlVG9Nb250aFZpZXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgVmlld01hbmFnZXJTZXJ2aWNlIHRvIGNoYW5nZSB0byB0aGUgeWVhcnBpY2tlciB2aWV3LlxuICAgKi9cbiAgY2hhbmdlVG9ZZWFyVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3TWFuYWdlclNlcnZpY2UuY2hhbmdlVG9ZZWFyVmlldygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1vbnRoIHZhbHVlIG9mIHRoZSBjYWxlbmRhciBpbiB0aGUgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCBmb3JtYXQuXG4gICAqL1xuICBnZXQgY2FsZW5kYXJNb250aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVIZWxwZXJTZXJ2aWNlLmxvY2FsZU1vbnRoc0FiYnJldmlhdGVkW3RoaXMuX2RhdGVOYXZpZ2F0aW9uU2VydmljZS5kaXNwbGF5ZWRDYWxlbmRhci5tb250aF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgeWVhciB2YWx1ZSBvZiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBnZXQgY2FsZW5kYXJZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVOYXZpZ2F0aW9uU2VydmljZS5kaXNwbGF5ZWRDYWxlbmRhci55ZWFyO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBEYXRlTmF2aWdhdGlvblNlcnZpY2UgdG8gbW92ZSB0byB0aGUgbmV4dCBtb250aC5cbiAgICovXG4gIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kYXRlTmF2aWdhdGlvblNlcnZpY2UubW92ZVRvTmV4dE1vbnRoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIERhdGVOYXZpZ2F0aW9uU2VydmljZSB0byBtb3ZlIHRvIHRoZSBwcmV2aW91cyBtb250aC5cbiAgICovXG4gIHByZXZpb3VzTW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLm1vdmVUb1ByZXZpb3VzTW9udGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIHRvIG1vdmUgdG8gdGhlIGN1cnJlbnQgbW9udGguXG4gICAqL1xuICBjdXJyZW50TW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLm1vdmVUb0N1cnJlbnRNb250aCgpO1xuICB9XG59XG4iXX0=