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
var DateNavigationService = /** @class */ (function () {
    function DateNavigationService() {
        /**
         * Variable to store today's date.
         */
        this._todaysFullDate = new Date();
        this._selectedDayChange = new Subject();
        this._displayedCalendarChange = new Subject();
        this._focusOnCalendarChange = new Subject();
        this._focusedDayChange = new Subject();
    }
    Object.defineProperty(DateNavigationService.prototype, "displayedCalendar", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayedCalendar;
        },
        enumerable: true,
        configurable: true
    });
    // not a setter because i want this to remain private
    // not a setter because i want this to remain private
    /**
     * @param {?} value
     * @return {?}
     */
    DateNavigationService.prototype.setDisplayedCalendar = 
    // not a setter because i want this to remain private
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._displayedCalendar.isEqual(value)) {
            this._displayedCalendar = value;
            this._displayedCalendarChange.next();
        }
    };
    /**
     * @return {?}
     */
    DateNavigationService.prototype.initializeTodaysDate = /**
     * @return {?}
     */
    function () {
        this._todaysFullDate = new Date();
        this._today = new DayModel(this._todaysFullDate.getFullYear(), this._todaysFullDate.getMonth(), this._todaysFullDate.getDate());
    };
    Object.defineProperty(DateNavigationService.prototype, "today", {
        get: /**
         * @return {?}
         */
        function () {
            return this._today;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateNavigationService.prototype, "selectedDayChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedDayChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Notifies that the selected day has changed so that the date can be emitted to the user.
     * Note: Only to be called from day.ts
     */
    /**
     * Notifies that the selected day has changed so that the date can be emitted to the user.
     * Note: Only to be called from day.ts
     * @param {?} dayModel
     * @return {?}
     */
    DateNavigationService.prototype.notifySelectedDayChanged = /**
     * Notifies that the selected day has changed so that the date can be emitted to the user.
     * Note: Only to be called from day.ts
     * @param {?} dayModel
     * @return {?}
     */
    function (dayModel) {
        if (dayModel.isEqual(this.selectedDay)) {
            return;
        }
        this.selectedDay = dayModel;
        this._selectedDayChange.next(dayModel);
    };
    /**
     * Initializes the calendar based on the selected day.
     */
    /**
     * Initializes the calendar based on the selected day.
     * @return {?}
     */
    DateNavigationService.prototype.initializeCalendar = /**
     * Initializes the calendar based on the selected day.
     * @return {?}
     */
    function () {
        this.focusedDay = null; // Can be removed later on the store focus
        this.initializeTodaysDate();
        if (this.selectedDay) {
            this._displayedCalendar = new CalendarModel(this.selectedDay.year, this.selectedDay.month);
        }
        else {
            this._displayedCalendar = new CalendarModel(this.today.year, this.today.month);
        }
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DateNavigationService.prototype.changeMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.setDisplayedCalendar(new CalendarModel(this._displayedCalendar.year, month));
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DateNavigationService.prototype.changeYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.setDisplayedCalendar(new CalendarModel(year, this._displayedCalendar.month));
    };
    /**
     * Moves the displayed calendar to the next month.
     */
    /**
     * Moves the displayed calendar to the next month.
     * @return {?}
     */
    DateNavigationService.prototype.moveToNextMonth = /**
     * Moves the displayed calendar to the next month.
     * @return {?}
     */
    function () {
        this.setDisplayedCalendar(this._displayedCalendar.nextMonth());
    };
    /**
     * Moves the displayed calendar to the previous month.
     */
    /**
     * Moves the displayed calendar to the previous month.
     * @return {?}
     */
    DateNavigationService.prototype.moveToPreviousMonth = /**
     * Moves the displayed calendar to the previous month.
     * @return {?}
     */
    function () {
        this.setDisplayedCalendar(this._displayedCalendar.previousMonth());
    };
    /**
     * Moves the displayed calendar to the current month and year.
     */
    /**
     * Moves the displayed calendar to the current month and year.
     * @return {?}
     */
    DateNavigationService.prototype.moveToCurrentMonth = /**
     * Moves the displayed calendar to the current month and year.
     * @return {?}
     */
    function () {
        if (!this.displayedCalendar.isDayInCalendar(this.today)) {
            this.setDisplayedCalendar(new CalendarModel(this.today.year, this.today.month));
        }
        this._focusOnCalendarChange.next();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateNavigationService.prototype.incrementFocusDay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.focusedDay = this.focusedDay.incrementBy(value);
        if (this._displayedCalendar.isDayInCalendar(this.focusedDay)) {
            this._focusedDayChange.next(this.focusedDay);
        }
        else {
            this.setDisplayedCalendar(this.focusedDay.calendar);
        }
        this._focusOnCalendarChange.next();
    };
    Object.defineProperty(DateNavigationService.prototype, "displayedCalendarChange", {
        /**
         * This observable lets the subscriber know that the displayed calendar has changed.
         */
        get: /**
         * This observable lets the subscriber know that the displayed calendar has changed.
         * @return {?}
         */
        function () {
            return this._displayedCalendarChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateNavigationService.prototype, "focusOnCalendarChange", {
        /**
         * This observable lets the subscriber know that the focus should be applied on the calendar.
         */
        get: /**
         * This observable lets the subscriber know that the focus should be applied on the calendar.
         * @return {?}
         */
        function () {
            return this._focusOnCalendarChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateNavigationService.prototype, "focusedDayChange", {
        /**
         * This observable lets the subscriber know that the focused day in the displayed calendar has changed.
         */
        get: /**
         * This observable lets the subscriber know that the focused day in the displayed calendar has changed.
         * @return {?}
         */
        function () {
            return this._focusedDayChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DateNavigationService.decorators = [
        { type: Injectable }
    ];
    return DateNavigationService;
}());
export { DateNavigationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL3Byb3ZpZGVycy9kYXRlLW5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQVE5QztJQUFBOzs7O1FBbUJVLG9CQUFlLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQWtCbkMsdUJBQWtCLEdBQXNCLElBQUksT0FBTyxFQUFZLENBQUM7UUEyRWhFLDZCQUF3QixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBUzlELDJCQUFzQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBUzVELHNCQUFpQixHQUFzQixJQUFJLE9BQU8sRUFBWSxDQUFDO0lBUXpFLENBQUM7SUF0SUMsc0JBQUksb0RBQWlCOzs7O1FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxxREFBcUQ7Ozs7OztJQUM3QyxvREFBb0I7Ozs7OztJQUE1QixVQUE2QixLQUFvQjtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7SUFRTyxvREFBb0I7OztJQUE1QjtRQUNFLElBQUks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IEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbGVuZGFyTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9jYWxlbmRhci5tb2RlbCc7XG5pbXBvcnQgeyBEYXlNb2RlbCB9IGZyb20gJy4uL21vZGVsL2RheS5tb2RlbCc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGlzIHJlc3BvbnNpYmxlIGZvcjpcbiAqIDEuIEluaXRpYWxpemluZyB0aGUgZGlzcGxheWVkIGNhbGVuZGFyLlxuICogMi4gTW92aW5nIHRoZSBjYWxlbmRhciB0byB0aGUgbmV4dCwgcHJldmlvdXMgb3IgY3VycmVudCBtb250aHNcbiAqIDMuIE1hbmFnaW5nIHRoZSBmb2N1c2VkIGFuZCBzZWxlY3RlZCBkYXkgbW9kZWxzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGlzcGxheWVkQ2FsZW5kYXI6IENhbGVuZGFyTW9kZWw7XG5cbiAgZ2V0IGRpc3BsYXllZENhbGVuZGFyKCk6IENhbGVuZGFyTW9kZWwge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhcjtcbiAgfVxuXG4gIC8vIG5vdCBhIHNldHRlciBiZWNhdXNlIGkgd2FudCB0aGlzIHRvIHJlbWFpbiBwcml2YXRlXG4gIHByaXZhdGUgc2V0RGlzcGxheWVkQ2FsZW5kYXIodmFsdWU6IENhbGVuZGFyTW9kZWwpIHtcbiAgICBpZiAoIXRoaXMuX2Rpc3BsYXllZENhbGVuZGFyLmlzRXF1YWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhciA9IHZhbHVlO1xuICAgICAgdGhpcy5fZGlzcGxheWVkQ2FsZW5kYXJDaGFuZ2UubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYXJpYWJsZSB0byBzdG9yZSB0b2RheSdzIGRhdGUuXG4gICAqL1xuICBwcml2YXRlIF90b2RheXNGdWxsRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgX3RvZGF5OiBEYXlNb2RlbDtcblxuICBwcml2YXRlIGluaXRpYWxpemVUb2RheXNEYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuX3RvZGF5c0Z1bGxEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLl90b2RheSA9IG5ldyBEYXlNb2RlbChcbiAgICAgIHRoaXMuX3RvZGF5c0Z1bGxEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICB0aGlzLl90b2RheXNGdWxsRGF0ZS5nZXRNb250aCgpLFxuICAgICAgdGhpcy5fdG9kYXlzRnVsbERhdGUuZ2V0RGF0ZSgpXG4gICAgKTtcbiAgfVxuXG4gIGdldCB0b2RheSgpOiBEYXlNb2RlbCB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZGF5O1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkRGF5OiBEYXlNb2RlbDtcblxuICBwcml2YXRlIF9zZWxlY3RlZERheUNoYW5nZTogU3ViamVjdDxEYXlNb2RlbD4gPSBuZXcgU3ViamVjdDxEYXlNb2RlbD4oKTtcblxuICBnZXQgc2VsZWN0ZWREYXlDaGFuZ2UoKTogT2JzZXJ2YWJsZTxEYXlNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZERheUNoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RpZmllcyB0aGF0IHRoZSBzZWxlY3RlZCBkYXkgaGFzIGNoYW5nZWQgc28gdGhhdCB0aGUgZGF0ZSBjYW4gYmUgZW1pdHRlZCB0byB0aGUgdXNlci5cbiAgICogTm90ZTogT25seSB0byBiZSBjYWxsZWQgZnJvbSBkYXkudHNcbiAgICovXG4gIG5vdGlmeVNlbGVjdGVkRGF5Q2hhbmdlZChkYXlNb2RlbDogRGF5TW9kZWwpIHtcbiAgICBpZiAoZGF5TW9kZWwuaXNFcXVhbCh0aGlzLnNlbGVjdGVkRGF5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkRGF5ID0gZGF5TW9kZWw7XG4gICAgdGhpcy5fc2VsZWN0ZWREYXlDaGFuZ2UubmV4dChkYXlNb2RlbCk7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNlZERheTogRGF5TW9kZWw7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjYWxlbmRhciBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZGF5LlxuICAgKi9cbiAgaW5pdGlhbGl6ZUNhbGVuZGFyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZERheSA9IG51bGw7IC8vIENhbiBiZSByZW1vdmVkIGxhdGVyIG9uIHRoZSBzdG9yZSBmb2N1c1xuICAgIHRoaXMuaW5pdGlhbGl6ZVRvZGF5c0RhdGUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZERheSkge1xuICAgICAgdGhpcy5fZGlzcGxheWVkQ2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnNlbGVjdGVkRGF5LnllYXIsIHRoaXMuc2VsZWN0ZWREYXkubW9udGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhciA9IG5ldyBDYWxlbmRhck1vZGVsKHRoaXMudG9kYXkueWVhciwgdGhpcy50b2RheS5tb250aCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTW9udGgobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0RGlzcGxheWVkQ2FsZW5kYXIobmV3IENhbGVuZGFyTW9kZWwodGhpcy5fZGlzcGxheWVkQ2FsZW5kYXIueWVhciwgbW9udGgpKTtcbiAgfVxuXG4gIGNoYW5nZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaXNwbGF5ZWRDYWxlbmRhcihuZXcgQ2FsZW5kYXJNb2RlbCh5ZWFyLCB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhci5tb250aCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBkaXNwbGF5ZWQgY2FsZW5kYXIgdG8gdGhlIG5leHQgbW9udGguXG4gICAqL1xuICBtb3ZlVG9OZXh0TW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaXNwbGF5ZWRDYWxlbmRhcih0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhci5uZXh0TW9udGgoKSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGRpc3BsYXllZCBjYWxlbmRhciB0byB0aGUgcHJldmlvdXMgbW9udGguXG4gICAqL1xuICBtb3ZlVG9QcmV2aW91c01vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RGlzcGxheWVkQ2FsZW5kYXIodGhpcy5fZGlzcGxheWVkQ2FsZW5kYXIucHJldmlvdXNNb250aCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgZGlzcGxheWVkIGNhbGVuZGFyIHRvIHRoZSBjdXJyZW50IG1vbnRoIGFuZCB5ZWFyLlxuICAgKi9cbiAgbW92ZVRvQ3VycmVudE1vbnRoKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNwbGF5ZWRDYWxlbmRhci5pc0RheUluQ2FsZW5kYXIodGhpcy50b2RheSkpIHtcbiAgICAgIHRoaXMuc2V0RGlzcGxheWVkQ2FsZW5kYXIobmV3IENhbGVuZGFyTW9kZWwodGhpcy50b2RheS55ZWFyLCB0aGlzLnRvZGF5Lm1vbnRoKSk7XG4gICAgfVxuICAgIHRoaXMuX2ZvY3VzT25DYWxlbmRhckNoYW5nZS5uZXh0KCk7XG4gIH1cblxuICBpbmNyZW1lbnRGb2N1c0RheSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1c2VkRGF5ID0gdGhpcy5mb2N1c2VkRGF5LmluY3JlbWVudEJ5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZGlzcGxheWVkQ2FsZW5kYXIuaXNEYXlJbkNhbGVuZGFyKHRoaXMuZm9jdXNlZERheSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWREYXlDaGFuZ2UubmV4dCh0aGlzLmZvY3VzZWREYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERpc3BsYXllZENhbGVuZGFyKHRoaXMuZm9jdXNlZERheS5jYWxlbmRhcik7XG4gICAgfVxuICAgIHRoaXMuX2ZvY3VzT25DYWxlbmRhckNoYW5nZS5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNwbGF5ZWRDYWxlbmRhckNoYW5nZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgb2JzZXJ2YWJsZSBsZXRzIHRoZSBzdWJzY3JpYmVyIGtub3cgdGhhdCB0aGUgZGlzcGxheWVkIGNhbGVuZGFyIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgZ2V0IGRpc3BsYXllZENhbGVuZGFyQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5ZWRDYWxlbmRhckNoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZvY3VzT25DYWxlbmRhckNoYW5nZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgb2JzZXJ2YWJsZSBsZXRzIHRoZSBzdWJzY3JpYmVyIGtub3cgdGhhdCB0aGUgZm9jdXMgc2hvdWxkIGJlIGFwcGxpZWQgb24gdGhlIGNhbGVuZGFyLlxuICAgKi9cbiAgZ2V0IGZvY3VzT25DYWxlbmRhckNoYW5nZSgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNPbkNhbGVuZGFyQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9jdXNlZERheUNoYW5nZTogU3ViamVjdDxEYXlNb2RlbD4gPSBuZXcgU3ViamVjdDxEYXlNb2RlbD4oKTtcblxuICAvKipcbiAgICogVGhpcyBvYnNlcnZhYmxlIGxldHMgdGhlIHN1YnNjcmliZXIga25vdyB0aGF0IHRoZSBmb2N1c2VkIGRheSBpbiB0aGUgZGlzcGxheWVkIGNhbGVuZGFyIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgZ2V0IGZvY3VzZWREYXlDaGFuZ2UoKTogT2JzZXJ2YWJsZTxEYXlNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkRGF5Q2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=