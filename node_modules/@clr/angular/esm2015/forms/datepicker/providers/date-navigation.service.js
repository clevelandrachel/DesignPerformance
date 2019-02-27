/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarModel } from '../model/calendar.model';
import { DayModel } from '../model/day.model';
/**
 * This service is responsible for:
 * 1. Initializing the displayed calendar.
 * 2. Moving the calendar to the next, previous or current months
 * 3. Managing the focused and selected day models.
 */
export class DateNavigationService {
    constructor() {
        /**
         * Variable to store today's date.
         */
        this._todaysFullDate = new Date();
        this._selectedDayChange = new Subject();
        this._displayedCalendarChange = new Subject();
        this._focusOnCalendarChange = new Subject();
        this._focusedDayChange = new Subject();
    }
    /**
     * @return {?}
     */
    get displayedCalendar() {
        return this._displayedCalendar;
    }
    // not a setter because i want this to remain private
    /**
     * @param {?} value
     * @return {?}
     */
    setDisplayedCalendar(value) {
        if (!this._displayedCalendar.isEqual(value)) {
            this._displayedCalendar = value;
            this._displayedCalendarChange.next();
        }
    }
    /**
     * @return {?}
     */
    initializeTodaysDate() {
        this._todaysFullDate = new Date();
        this._today = new DayModel(this._todaysFullDate.getFullYear(), this._todaysFullDate.getMonth(), this._todaysFullDate.getDate());
    }
    /**
     * @return {?}
     */
    get today() {
        return this._today;
    }
    /**
     * @return {?}
     */
    get selectedDayChange() {
        return this._selectedDayChange.asObservable();
    }
    /**
     * Notifies that the selected day has changed so that the date can be emitted to the user.
     * Note: Only to be called from day.ts
     * @param {?} dayModel
     * @return {?}
     */
    notifySelectedDayChanged(dayModel) {
        if (dayModel.isEqual(this.selectedDay)) {
            return;
        }
        this.selectedDay = dayModel;
        this._selectedDayChange.next(dayModel);
    }
    /**
     * Initializes the calendar based on the selected day.
     * @return {?}
     */
    initializeCalendar() {
        this.focusedDay = null; // Can be removed later on the store focus
        this.initializeTodaysDate();
        if (this.selectedDay) {
            this._displayedCalendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        }
        else {
            this._displayedCalendar = new CalendarModel(this.today.year, this.today.month);
        }
    }
    /**
     * @param {?} month
     * @return {?}
     */
    changeMonth(month) {
        this.setDisplayedCalendar(new CalendarModel(this._displayedCalendar.year, month));
    }
    /**
     * @param {?} year
     * @return {?}
     */
    changeYear(year) {
        this.setDisplayedCalendar(new CalendarModel(year, this._displayedCalendar.month));
    }
    /**
     * Moves the displayed calendar to the next month.
     * @return {?}
     */
    moveToNextMonth() {
        this.setDisplayedCalendar(this._displayedCalendar.nextMonth());
    }
    /**
     * Moves the displayed calendar to the previous month.
     * @return {?}
     */
    moveToPreviousMonth() {
        this.setDisplayedCalendar(this._displayedCalendar.previousMonth());
    }
    /**
     * Moves the displayed calendar to the current month and year.
     * @return {?}
     */
    moveToCurrentMonth() {
        if (!this.displayedCalendar.isDayInCalendar(this.today)) {
            this.setDisplayedCalendar(new CalendarModel(this.today.year, this.today.month));
        }
        this._focusOnCalendarChange.next();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    incrementFocusDay(value) {
        this.focusedDay = this.focusedDay.incrementBy(value);
        if (this._displayedCalendar.isDayInCalendar(this.focusedDay)) {
            this._focusedDayChange.next(this.focusedDay);
        }
        else {
            this.setDisplayedCalendar(this.focusedDay.calendar);
        }
        this._focusOnCalendarChange.next();
    }
    /**
     * This observable lets the subscriber know that the displayed calendar has changed.
     * @return {?}
     */
    get displayedCalendarChange() {
        return this._displayedCalendarChange.asObservable();
    }
    /**
     * This observable lets the subscriber know that the focus should be applied on the calendar.
     * @return {?}
     */
    get focusOnCalendarChange() {
        return this._focusOnCalendarChange.asObservable();
    }
    /**
     * This observable lets the subscriber know that the focused day in the displayed calendar has changed.
     * @return {?}
     */
    get focusedDayChange() {
        return this._focusedDayChange.asObservable();
    }
}
DateNavigationService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    DateNavigationService.prototype._displayedCalendar;
    /**
     * Variable to store today's date.
     * @type {?}
     */
    DateNavigationService.prototype._todaysFullDate;
    /** @type {?} */
    DateNavigationService.prototype._today;
    /** @type {?} */
    DateNavigationService.prototype.selectedDay;
    /** @type {?} */
    DateNavigationService.prototype._selectedDayChange;
    /** @type {?} */
    DateNavigationService.prototype.focusedDay;
    /** @type {?} */
    DateNavigationService.prototype._displayedCalendarChange;
    /** @type {?} */
    DateNavigationService.prototype._focusOnCalendarChange;
    /** @type {?} */
    DateNavigationService.prototype._focusedDayChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL3Byb3ZpZGVycy9kYXRlLW5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVM5QyxNQUFNLE9BQU8scUJBQXFCO0lBRGxDOzs7O1FBbUJVLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQWtCbkMsdUJBQWtCLEdBQXNCLElBQUksT0FBTyxFQUFZLENBQUM7UUEyRWhFLDZCQUF3QixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBUzlELDJCQUFzQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBUzVELHNCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBWSxDQUFDO0lBUXpFLENBQUM7Ozs7SUF0SUMsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBR08sb0JBQW9CLENBQUMsS0FBb0I7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7O0lBUU8sb0JBQW9CO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksUUFBUSxDQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxFQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxFQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUMvQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBTUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQU1ELHdCQUF3QixDQUFDLFFBQWtCO1FBQ3pDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQU9ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLDBDQUEwQztRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUY7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQUtELGVBQWU7UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBT0QsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFPRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7OztJQU9ELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7OztZQXpJRixVQUFVOzs7O0lBRVQsbURBQTBDOzs7OztJQWlCMUMsZ0RBQTJDOztJQUMzQyx1Q0FBeUI7O0lBZXpCLDRDQUE2Qjs7SUFFN0IsbURBQXdFOztJQWtCeEUsMkNBQTRCOztJQXlENUIseURBQXNFOztJQVN0RSx1REFBb0U7O0lBU3BFLGtEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2RlbCB9IGZyb20gJy4uL21vZGVsL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IERheU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvZGF5Lm1vZGVsJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgaXMgcmVzcG9uc2libGUgZm9yOlxuICogMS4gSW5pdGlhbGl6aW5nIHRoZSBkaXNwbGF5ZWQgY2FsZW5kYXIuXG4gKiAyLiBNb3ZpbmcgdGhlIGNhbGVuZGFyIHRvIHRoZSBuZXh0LCBwcmV2aW91cyBvciBjdXJyZW50IG1vbnRoc1xuICogMy4gTWFuYWdpbmcgdGhlIGZvY3VzZWQgYW5kIHNlbGVjdGVkIGRheSBtb2RlbHMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlTmF2aWdhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kaXNwbGF5ZWRDYWxlbmRhcjogQ2FsZW5kYXJNb2RlbDtcblxuICBnZXQgZGlzcGxheWVkQ2FsZW5kYXIoKTogQ2FsZW5kYXJNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyO1xuICB9XG5cbiAgLy8gbm90IGEgc2V0dGVyIGJlY2F1c2UgaSB3YW50IHRoaXMgdG8gcmVtYWluIHByaXZhdGVcbiAgcHJpdmF0ZSBzZXREaXNwbGF5ZWRDYWxlbmRhcih2YWx1ZTogQ2FsZW5kYXJNb2RlbCkge1xuICAgIGlmICghdGhpcy5fZGlzcGxheWVkQ2FsZW5kYXIuaXNFcXVhbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhckNoYW5nZS5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhcmlhYmxlIHRvIHN0b3JlIHRvZGF5J3MgZGF0ZS5cbiAgICovXG4gIHByaXZhdGUgX3RvZGF5c0Z1bGxEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfdG9kYXk6IERheU1vZGVsO1xuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVRvZGF5c0RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9kYXlzRnVsbERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuX3RvZGF5ID0gbmV3IERheU1vZGVsKFxuICAgICAgdGhpcy5fdG9kYXlzRnVsbERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIHRoaXMuX3RvZGF5c0Z1bGxEYXRlLmdldE1vbnRoKCksXG4gICAgICB0aGlzLl90b2RheXNGdWxsRGF0ZS5nZXREYXRlKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IHRvZGF5KCk6IERheU1vZGVsIHtcbiAgICByZXR1cm4gdGhpcy5fdG9kYXk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWREYXk6IERheU1vZGVsO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkRGF5Q2hhbmdlOiBTdWJqZWN0PERheU1vZGVsPiA9IG5ldyBTdWJqZWN0PERheU1vZGVsPigpO1xuXG4gIGdldCBzZWxlY3RlZERheUNoYW5nZSgpOiBPYnNlcnZhYmxlPERheU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkRGF5Q2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIHRoYXQgdGhlIHNlbGVjdGVkIGRheSBoYXMgY2hhbmdlZCBzbyB0aGF0IHRoZSBkYXRlIGNhbiBiZSBlbWl0dGVkIHRvIHRoZSB1c2VyLlxuICAgKiBOb3RlOiBPbmx5IHRvIGJlIGNhbGxlZCBmcm9tIGRheS50c1xuICAgKi9cbiAgbm90aWZ5U2VsZWN0ZWREYXlDaGFuZ2VkKGRheU1vZGVsOiBEYXlNb2RlbCkge1xuICAgIGlmIChkYXlNb2RlbC5pc0VxdWFsKHRoaXMuc2VsZWN0ZWREYXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWREYXkgPSBkYXlNb2RlbDtcbiAgICB0aGlzLl9zZWxlY3RlZERheUNoYW5nZS5uZXh0KGRheU1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c2VkRGF5OiBEYXlNb2RlbDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNhbGVuZGFyIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBkYXkuXG4gICAqL1xuICBpbml0aWFsaXplQ2FsZW5kYXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkRGF5ID0gbnVsbDsgLy8gQ2FuIGJlIHJlbW92ZWQgbGF0ZXIgb24gdGhlIHN0b3JlIGZvY3VzXG4gICAgdGhpcy5pbml0aWFsaXplVG9kYXlzRGF0ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkRGF5KSB7XG4gICAgICB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhciA9IG5ldyBDYWxlbmRhck1vZGVsKHRoaXMuc2VsZWN0ZWREYXkueWVhciwgdGhpcy5zZWxlY3RlZERheS5tb250aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyID0gbmV3IENhbGVuZGFyTW9kZWwodGhpcy50b2RheS55ZWFyLCB0aGlzLnRvZGF5Lm1vbnRoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaXNwbGF5ZWRDYWxlbmRhcihuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhci55ZWFyLCBtb250aCkpO1xuICB9XG5cbiAgY2hhbmdlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldERpc3BsYXllZENhbGVuZGFyKG5ldyBDYWxlbmRhck1vZGVsKHllYXIsIHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyLm1vbnRoKSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGRpc3BsYXllZCBjYWxlbmRhciB0byB0aGUgbmV4dCBtb250aC5cbiAgICovXG4gIG1vdmVUb05leHRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldERpc3BsYXllZENhbGVuZGFyKHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyLm5leHRNb250aCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZGlzcGxheWVkIGNhbGVuZGFyIHRvIHRoZSBwcmV2aW91cyBtb250aC5cbiAgICovXG4gIG1vdmVUb1ByZXZpb3VzTW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaXNwbGF5ZWRDYWxlbmRhcih0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhci5wcmV2aW91c01vbnRoKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBkaXNwbGF5ZWQgY2FsZW5kYXIgdG8gdGhlIGN1cnJlbnQgbW9udGggYW5kIHllYXIuXG4gICAqL1xuICBtb3ZlVG9DdXJyZW50TW9udGgoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc3BsYXllZENhbGVuZGFyLmlzRGF5SW5DYWxlbmRhcih0aGlzLnRvZGF5KSkge1xuICAgICAgdGhpcy5zZXREaXNwbGF5ZWRDYWxlbmRhcihuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnRvZGF5LnllYXIsIHRoaXMudG9kYXkubW9udGgpKTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNPbkNhbGVuZGFyQ2hhbmdlLm5leHQoKTtcbiAgfVxuXG4gIGluY3JlbWVudEZvY3VzRGF5KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWREYXkgPSB0aGlzLmZvY3VzZWREYXkuaW5jcmVtZW50QnkodmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhci5pc0RheUluQ2FsZW5kYXIodGhpcy5mb2N1c2VkRGF5KSkge1xuICAgICAgdGhpcy5fZm9jdXNlZERheUNoYW5nZS5uZXh0KHRoaXMuZm9jdXNlZERheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGlzcGxheWVkQ2FsZW5kYXIodGhpcy5mb2N1c2VkRGF5LmNhbGVuZGFyKTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNPbkNhbGVuZGFyQ2hhbmdlLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BsYXllZENhbGVuZGFyQ2hhbmdlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhpcyBvYnNlcnZhYmxlIGxldHMgdGhlIHN1YnNjcmliZXIga25vdyB0aGF0IHRoZSBkaXNwbGF5ZWQgY2FsZW5kYXIgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBnZXQgZGlzcGxheWVkQ2FsZW5kYXJDaGFuZ2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXllZENhbGVuZGFyQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9jdXNPbkNhbGVuZGFyQ2hhbmdlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogVGhpcyBvYnNlcnZhYmxlIGxldHMgdGhlIHN1YnNjcmliZXIga25vdyB0aGF0IHRoZSBmb2N1cyBzaG91bGQgYmUgYXBwbGllZCBvbiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBnZXQgZm9jdXNPbkNhbGVuZGFyQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c09uQ2FsZW5kYXJDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9mb2N1c2VkRGF5Q2hhbmdlOiBTdWJqZWN0PERheU1vZGVsPiA9IG5ldyBTdWJqZWN0PERheU1vZGVsPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIG9ic2VydmFibGUgbGV0cyB0aGUgc3Vic2NyaWJlciBrbm93IHRoYXQgdGhlIGZvY3VzZWQgZGF5IGluIHRoZSBkaXNwbGF5ZWQgY2FsZW5kYXIgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBnZXQgZm9jdXNlZERheUNoYW5nZSgpOiBPYnNlcnZhYmxlPERheU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWREYXlDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==