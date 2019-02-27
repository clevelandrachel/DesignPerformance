/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, HostListener } from '@angular/core';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';
import { YearRangeModel } from './model/year-range.model';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export class ClrYearpicker {
    /**
     * @param {?} _dateNavigationService
     * @param {?} _viewManagerService
     * @param {?} _datepickerFocusService
     * @param {?} _elRef
     * @param {?} commonStrings
     */
    constructor(_dateNavigationService, _viewManagerService, _datepickerFocusService, _elRef, commonStrings) {
        this._dateNavigationService = _dateNavigationService;
        this._viewManagerService = _viewManagerService;
        this._datepickerFocusService = _datepickerFocusService;
        this._elRef = _elRef;
        this.commonStrings = commonStrings;
        this.yearRangeModel = new YearRangeModel(this.calendarYear);
        this._focusedYear = this.calendarYear;
    }
    /**
     * Gets the year which the user is currently on.
     * @return {?}
     */
    get calendarYear() {
        return this._dateNavigationService.displayedCalendar.year;
    }
    /**
     * Increments the focus year by the value passed. Updates the YearRangeModel if the
     * new value is not in the current decade.
     * @param {?} value
     * @return {?}
     */
    incrementFocusYearBy(value) {
        this._focusedYear = this._focusedYear + value;
        if (!this.yearRangeModel.inRange(this._focusedYear)) {
            if (value > 0) {
                this.yearRangeModel = this.yearRangeModel.nextDecade();
            }
            else {
                this.yearRangeModel = this.yearRangeModel.previousDecade();
            }
        }
        this._datepickerFocusService.focusCell(this._elRef);
    }
    /**
     * Calls the DateNavigationService to update the year value of the calendar.
     * Also changes the view to the daypicker.
     * @param {?} year
     * @return {?}
     */
    changeYear(year) {
        this._dateNavigationService.changeYear(year);
        this._viewManagerService.changeToDayView();
    }
    /**
     * Updates the YearRangeModel to the previous decade.
     * @return {?}
     */
    previousDecade() {
        this.yearRangeModel = this.yearRangeModel.previousDecade();
        // Year in the yearpicker is not focused because while navigating to a different decade,
        // you want the focus to remain on the decade switcher arrows.
    }
    /**
     * Updates the YearRangeModel to the current decade.
     * @return {?}
     */
    currentDecade() {
        if (!this.yearRangeModel.inRange(this._dateNavigationService.today.year)) {
            this.yearRangeModel = this.yearRangeModel.currentDecade();
        }
        this._datepickerFocusService.focusCell(this._elRef);
    }
    /**
     * Updates the YearRangeModel to the next decade.
     * @return {?}
     */
    nextDecade() {
        this.yearRangeModel = this.yearRangeModel.nextDecade();
        // Year in the yearpicker is not focused because while navigating to a different decade,
        // you want the focus to remain on the decade switcher arrows.
    }
    /**
     * Compares the year passed to the focused year and returns the tab index.
     * @param {?} year
     * @return {?}
     */
    getTabIndex(year) {
        if (!this.yearRangeModel.inRange(this._focusedYear)) {
            if (this.yearRangeModel.inRange(this.calendarYear)) {
                this._focusedYear = this.calendarYear;
            }
            else {
                this._focusedYear = this.yearRangeModel.middleYear;
            }
        }
        return this._focusedYear === year ? 0 : -1;
    }
    /**
     * Handles the Keyboard arrow navigation for the yearpicker.
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // NOTE: Didn't move this to the date navigation service because
        // the logic is fairly simple and it didn't make sense for me
        // to create extra observables just to move this logic to the service.
        if (event) {
            /** @type {?} */
            const keyCode = event.keyCode;
            if (keyCode === UP_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(-1);
            }
            else if (keyCode === DOWN_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(1);
            }
            else if (keyCode === RIGHT_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(5);
            }
            else if (keyCode === LEFT_ARROW) {
                event.preventDefault();
                this.incrementFocusYearBy(-5);
            }
        }
    }
    /**
     * Focuses on the current calendar year when the View is initialized.
     * @return {?}
     */
    ngAfterViewInit() {
        this._datepickerFocusService.focusCell(this._elRef);
    }
}
ClrYearpicker.decorators = [
    { type: Component, args: [{
                selector: 'clr-yearpicker',
                template: `
        <div class="year-switchers">
            <button class="calendar-btn switcher" type="button" (click)="previousDecade()">
                <clr-icon shape="angle" dir="left" [attr.title]="commonStrings.previous"></clr-icon>
            </button>
            <button class="calendar-btn switcher" type="button" (click)="currentDecade()">
                <clr-icon shape="event" [attr.title]="commonStrings.current"></clr-icon>
            </button>
            <button class="calendar-btn switcher" type="button" (click)="nextDecade()">
                <clr-icon shape="angle" dir="right" [attr.title]="commonStrings.next"></clr-icon>
            </button>
        </div>
        <div class="years">
            <button
                *ngFor="let year of yearRangeModel.yearRange"
                type="button"
                class="calendar-btn year"
                [attr.tabindex]="getTabIndex(year)"
                [class.is-selected]="year === calendarYear"
                (click)="changeYear(year)">
                {{year}}
            </button>
        </div>
    `,
                host: {
                    '[class.yearpicker]': 'true',
                }
            }] }
];
/** @nocollapse */
ClrYearpicker.ctorParameters = () => [
    { type: DateNavigationService },
    { type: ViewManagerService },
    { type: DatepickerFocusService },
    { type: ElementRef },
    { type: ClrCommonStrings }
];
ClrYearpicker.propDecorators = {
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /**
     * YearRangeModel which is used to build the YearPicker view.
     * @type {?}
     */
    ClrYearpicker.prototype.yearRangeModel;
    /**
     * Keeps track of the current focused year.
     * @type {?}
     */
    ClrYearpicker.prototype._focusedYear;
    /** @type {?} */
    ClrYearpicker.prototype._dateNavigationService;
    /** @type {?} */
    ClrYearpicker.prototype._viewManagerService;
    /** @type {?} */
    ClrYearpicker.prototype._datepickerFocusService;
    /** @type {?} */
    ClrYearpicker.prototype._elRef;
    /** @type {?} */
    ClrYearpicker.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIveWVhcnBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFnQzdFLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQUN4QixZQUNVLHNCQUE2QyxFQUM3QyxtQkFBdUMsRUFDdkMsdUJBQStDLEVBQy9DLE1BQWtCLEVBQ25CLGFBQStCO1FBSjlCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QyxDQUFDOzs7OztJQWVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBTU8sb0JBQW9CLENBQUMsS0FBYTtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDNUQ7U0FDRjtRQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozs7SUFNRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUtELGNBQWM7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0Qsd0ZBQXdGO1FBQ3hGLDhEQUE4RDtJQUNoRSxDQUFDOzs7OztJQUtELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUtELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkQsd0ZBQXdGO1FBQ3hGLDhEQUE4RDtJQUNoRSxDQUFDOzs7Ozs7SUFLRCxXQUFXLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzthQUNwRDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFNRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsZ0VBQWdFO1FBQ2hFLDZEQUE2RDtRQUM3RCxzRUFBc0U7UUFDdEUsSUFBSSxLQUFLLEVBQUU7O2tCQUNILE9BQU8sR0FBVyxLQUFLLENBQUMsT0FBTztZQUNyQyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUU7Z0JBQ2xDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBN0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBdUJQO2dCQUNILElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO2lCQUM3QjthQUNGOzs7O1lBbENRLHFCQUFxQjtZQUVyQixrQkFBa0I7WUFEbEIsc0JBQXNCO1lBTkksVUFBVTtZQVFwQyxnQkFBZ0I7Ozt3QkFtSXRCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFwRm5DLHVDQUErQjs7Ozs7SUFLL0IscUNBQTZCOztJQWxCM0IsK0NBQXFEOztJQUNyRCw0Q0FBK0M7O0lBQy9DLGdEQUF1RDs7SUFDdkQsK0JBQTBCOztJQUMxQixzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBET1dOX0FSUk9XLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMva2V5LWNvZGVzJztcblxuaW1wb3J0IHsgWWVhclJhbmdlTW9kZWwgfSBmcm9tICcuL21vZGVsL3llYXItcmFuZ2UubW9kZWwnO1xuaW1wb3J0IHsgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZGF0ZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckZvY3VzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RhdGVwaWNrZXItZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHIteWVhcnBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWFyLXN3aXRjaGVyc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbGVuZGFyLWJ0biBzd2l0Y2hlclwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicHJldmlvdXNEZWNhZGUoKVwiPlxuICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImFuZ2xlXCIgZGlyPVwibGVmdFwiIFthdHRyLnRpdGxlXT1cImNvbW1vblN0cmluZ3MucHJldmlvdXNcIj48L2Nsci1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FsZW5kYXItYnRuIHN3aXRjaGVyXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjdXJyZW50RGVjYWRlKClcIj5cbiAgICAgICAgICAgICAgICA8Y2xyLWljb24gc2hhcGU9XCJldmVudFwiIFthdHRyLnRpdGxlXT1cImNvbW1vblN0cmluZ3MuY3VycmVudFwiPjwvY2xyLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYWxlbmRhci1idG4gc3dpdGNoZXJcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm5leHREZWNhZGUoKVwiPlxuICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImFuZ2xlXCIgZGlyPVwicmlnaHRcIiBbYXR0ci50aXRsZV09XCJjb21tb25TdHJpbmdzLm5leHRcIj48L2Nsci1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwieWVhcnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgeWVhciBvZiB5ZWFyUmFuZ2VNb2RlbC55ZWFyUmFuZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXItYnRuIHllYXJcIlxuICAgICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cImdldFRhYkluZGV4KHllYXIpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuaXMtc2VsZWN0ZWRdPVwieWVhciA9PT0gY2FsZW5kYXJZZWFyXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlWWVhcih5ZWFyKVwiPlxuICAgICAgICAgICAgICAgIHt7eWVhcn19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MueWVhcnBpY2tlcl0nOiAndHJ1ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsclllYXJwaWNrZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGF0ZU5hdmlnYXRpb25TZXJ2aWNlOiBEYXRlTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdmlld01hbmFnZXJTZXJ2aWNlOiBWaWV3TWFuYWdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZGF0ZXBpY2tlckZvY3VzU2VydmljZTogRGF0ZXBpY2tlckZvY3VzU2VydmljZSxcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5nc1xuICApIHtcbiAgICB0aGlzLnllYXJSYW5nZU1vZGVsID0gbmV3IFllYXJSYW5nZU1vZGVsKHRoaXMuY2FsZW5kYXJZZWFyKTtcbiAgICB0aGlzLl9mb2N1c2VkWWVhciA9IHRoaXMuY2FsZW5kYXJZZWFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFllYXJSYW5nZU1vZGVsIHdoaWNoIGlzIHVzZWQgdG8gYnVpbGQgdGhlIFllYXJQaWNrZXIgdmlldy5cbiAgICovXG4gIHllYXJSYW5nZU1vZGVsOiBZZWFyUmFuZ2VNb2RlbDtcblxuICAvKipcbiAgICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZm9jdXNlZCB5ZWFyLlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9jdXNlZFllYXI6IG51bWJlcjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgeWVhciB3aGljaCB0aGUgdXNlciBpcyBjdXJyZW50bHkgb24uXG4gICAqL1xuICBnZXQgY2FsZW5kYXJZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVOYXZpZ2F0aW9uU2VydmljZS5kaXNwbGF5ZWRDYWxlbmRhci55ZWFyO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlbWVudHMgdGhlIGZvY3VzIHllYXIgYnkgdGhlIHZhbHVlIHBhc3NlZC4gVXBkYXRlcyB0aGUgWWVhclJhbmdlTW9kZWwgaWYgdGhlXG4gICAqIG5ldyB2YWx1ZSBpcyBub3QgaW4gdGhlIGN1cnJlbnQgZGVjYWRlLlxuICAgKi9cbiAgcHJpdmF0ZSBpbmNyZW1lbnRGb2N1c1llYXJCeSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZm9jdXNlZFllYXIgPSB0aGlzLl9mb2N1c2VkWWVhciArIHZhbHVlO1xuICAgIGlmICghdGhpcy55ZWFyUmFuZ2VNb2RlbC5pblJhbmdlKHRoaXMuX2ZvY3VzZWRZZWFyKSkge1xuICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICB0aGlzLnllYXJSYW5nZU1vZGVsID0gdGhpcy55ZWFyUmFuZ2VNb2RlbC5uZXh0RGVjYWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnllYXJSYW5nZU1vZGVsID0gdGhpcy55ZWFyUmFuZ2VNb2RlbC5wcmV2aW91c0RlY2FkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9kYXRlcGlja2VyRm9jdXNTZXJ2aWNlLmZvY3VzQ2VsbCh0aGlzLl9lbFJlZik7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgdGhlIERhdGVOYXZpZ2F0aW9uU2VydmljZSB0byB1cGRhdGUgdGhlIHllYXIgdmFsdWUgb2YgdGhlIGNhbGVuZGFyLlxuICAgKiBBbHNvIGNoYW5nZXMgdGhlIHZpZXcgdG8gdGhlIGRheXBpY2tlci5cbiAgICovXG4gIGNoYW5nZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLmNoYW5nZVllYXIoeWVhcik7XG4gICAgdGhpcy5fdmlld01hbmFnZXJTZXJ2aWNlLmNoYW5nZVRvRGF5VmlldygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFllYXJSYW5nZU1vZGVsIHRvIHRoZSBwcmV2aW91cyBkZWNhZGUuXG4gICAqL1xuICBwcmV2aW91c0RlY2FkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJSYW5nZU1vZGVsID0gdGhpcy55ZWFyUmFuZ2VNb2RlbC5wcmV2aW91c0RlY2FkZSgpO1xuICAgIC8vIFllYXIgaW4gdGhlIHllYXJwaWNrZXIgaXMgbm90IGZvY3VzZWQgYmVjYXVzZSB3aGlsZSBuYXZpZ2F0aW5nIHRvIGEgZGlmZmVyZW50IGRlY2FkZSxcbiAgICAvLyB5b3Ugd2FudCB0aGUgZm9jdXMgdG8gcmVtYWluIG9uIHRoZSBkZWNhZGUgc3dpdGNoZXIgYXJyb3dzLlxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFllYXJSYW5nZU1vZGVsIHRvIHRoZSBjdXJyZW50IGRlY2FkZS5cbiAgICovXG4gIGN1cnJlbnREZWNhZGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnllYXJSYW5nZU1vZGVsLmluUmFuZ2UodGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLnRvZGF5LnllYXIpKSB7XG4gICAgICB0aGlzLnllYXJSYW5nZU1vZGVsID0gdGhpcy55ZWFyUmFuZ2VNb2RlbC5jdXJyZW50RGVjYWRlKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGVwaWNrZXJGb2N1c1NlcnZpY2UuZm9jdXNDZWxsKHRoaXMuX2VsUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBZZWFyUmFuZ2VNb2RlbCB0byB0aGUgbmV4dCBkZWNhZGUuXG4gICAqL1xuICBuZXh0RGVjYWRlKCk6IHZvaWQge1xuICAgIHRoaXMueWVhclJhbmdlTW9kZWwgPSB0aGlzLnllYXJSYW5nZU1vZGVsLm5leHREZWNhZGUoKTtcbiAgICAvLyBZZWFyIGluIHRoZSB5ZWFycGlja2VyIGlzIG5vdCBmb2N1c2VkIGJlY2F1c2Ugd2hpbGUgbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCBkZWNhZGUsXG4gICAgLy8geW91IHdhbnQgdGhlIGZvY3VzIHRvIHJlbWFpbiBvbiB0aGUgZGVjYWRlIHN3aXRjaGVyIGFycm93cy5cbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlcyB0aGUgeWVhciBwYXNzZWQgdG8gdGhlIGZvY3VzZWQgeWVhciBhbmQgcmV0dXJucyB0aGUgdGFiIGluZGV4LlxuICAgKi9cbiAgZ2V0VGFiSW5kZXgoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMueWVhclJhbmdlTW9kZWwuaW5SYW5nZSh0aGlzLl9mb2N1c2VkWWVhcikpIHtcbiAgICAgIGlmICh0aGlzLnllYXJSYW5nZU1vZGVsLmluUmFuZ2UodGhpcy5jYWxlbmRhclllYXIpKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRZZWFyID0gdGhpcy5jYWxlbmRhclllYXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9mb2N1c2VkWWVhciA9IHRoaXMueWVhclJhbmdlTW9kZWwubWlkZGxlWWVhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRZZWFyID09PSB5ZWFyID8gMCA6IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIEtleWJvYXJkIGFycm93IG5hdmlnYXRpb24gZm9yIHRoZSB5ZWFycGlja2VyLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIC8vIE5PVEU6IERpZG4ndCBtb3ZlIHRoaXMgdG8gdGhlIGRhdGUgbmF2aWdhdGlvbiBzZXJ2aWNlIGJlY2F1c2VcbiAgICAvLyB0aGUgbG9naWMgaXMgZmFpcmx5IHNpbXBsZSBhbmQgaXQgZGlkbid0IG1ha2Ugc2Vuc2UgZm9yIG1lXG4gICAgLy8gdG8gY3JlYXRlIGV4dHJhIG9ic2VydmFibGVzIGp1c3QgdG8gbW92ZSB0aGlzIGxvZ2ljIHRvIHRoZSBzZXJ2aWNlLlxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3Qga2V5Q29kZTogbnVtYmVyID0gZXZlbnQua2V5Q29kZTtcbiAgICAgIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudEZvY3VzWWVhckJ5KC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudEZvY3VzWWVhckJ5KDEpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudEZvY3VzWWVhckJ5KDUpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50Rm9jdXNZZWFyQnkoLTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIG9uIHRoZSBjdXJyZW50IGNhbGVuZGFyIHllYXIgd2hlbiB0aGUgVmlldyBpcyBpbml0aWFsaXplZC5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9kYXRlcGlja2VyRm9jdXNTZXJ2aWNlLmZvY3VzQ2VsbCh0aGlzLl9lbFJlZik7XG4gIH1cbn1cbiJdfQ==