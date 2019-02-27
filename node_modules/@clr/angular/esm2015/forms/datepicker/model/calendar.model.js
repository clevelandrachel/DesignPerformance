/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { getNumberOfDaysInTheMonth } from '../utils/date-utils';
import { DayModel } from './day.model';
export class CalendarModel {
    /**
     * @param {?} year
     * @param {?} month
     */
    constructor(year, month) {
        this.year = year;
        this.month = month;
        this.initializeDaysInCalendar();
    }
    /**
     * Populates the days array with the DayModels in the current Calendar.
     * @return {?}
     */
    initializeDaysInCalendar() {
        /** @type {?} */
        const noOfDaysInCalendar = getNumberOfDaysInTheMonth(this.year, this.month);
        this.days = Array(noOfDaysInCalendar)
            .fill(null)
            .map((date, index) => {
            return new DayModel(this.year, this.month, index + 1);
        });
    }
    /**
     * Checks if the calendar passed is equal to the current calendar.
     * @param {?} calendar
     * @return {?}
     */
    isEqual(calendar) {
        if (calendar) {
            return this.year === calendar.year && this.month === calendar.month;
        }
        return false;
    }
    /**
     * Checks if a DayModel is in the Calendar
     * @param {?} day
     * @return {?}
     */
    isDayInCalendar(day) {
        if (day) {
            return this.year === day.year && this.month === day.month;
        }
        return false;
    }
    /**
     * Returns CalendarModel of the previous month.
     * @return {?}
     */
    previousMonth() {
        if (this.month === 0) {
            return new CalendarModel(this.year - 1, 11);
        }
        else {
            return new CalendarModel(this.year, this.month - 1);
        }
    }
    /**
     * Returns CalendarModel of the next month.
     * @return {?}
     */
    nextMonth() {
        if (this.month === 11) {
            return new CalendarModel(this.year + 1, 0);
        }
        else {
            return new CalendarModel(this.year, this.month + 1);
        }
    }
}
if (false) {
    /** @type {?} */
    CalendarModel.prototype.days;
    /** @type {?} */
    CalendarModel.prototype.year;
    /** @type {?} */
    CalendarModel.prototype.month;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL21vZGVsL2NhbGVuZGFyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFlBQTRCLElBQVksRUFBa0IsS0FBYTtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQWtCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDckUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFPTyx3QkFBd0I7O2NBQ3hCLGtCQUFrQixHQUFXLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUtELE9BQU8sQ0FBQyxRQUF1QjtRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNyRTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBS0QsZUFBZSxDQUFDLEdBQWE7UUFDM0IsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDM0Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBS0QsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztDQUNGOzs7SUF2REMsNkJBQWlCOztJQUpMLDZCQUE0Qjs7SUFBRSw4QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IGdldE51bWJlck9mRGF5c0luVGhlTW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXV0aWxzJztcblxuaW1wb3J0IHsgRGF5TW9kZWwgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vZGVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHllYXI6IG51bWJlciwgcHVibGljIHJlYWRvbmx5IG1vbnRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmluaXRpYWxpemVEYXlzSW5DYWxlbmRhcigpO1xuICB9XG5cbiAgZGF5czogRGF5TW9kZWxbXTtcblxuICAvKipcbiAgICogUG9wdWxhdGVzIHRoZSBkYXlzIGFycmF5IHdpdGggdGhlIERheU1vZGVscyBpbiB0aGUgY3VycmVudCBDYWxlbmRhci5cbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZURheXNJbkNhbGVuZGFyKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vT2ZEYXlzSW5DYWxlbmRhcjogbnVtYmVyID0gZ2V0TnVtYmVyT2ZEYXlzSW5UaGVNb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgIHRoaXMuZGF5cyA9IEFycmF5KG5vT2ZEYXlzSW5DYWxlbmRhcilcbiAgICAgIC5maWxsKG51bGwpXG4gICAgICAubWFwKChkYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERheU1vZGVsKHRoaXMueWVhciwgdGhpcy5tb250aCwgaW5kZXggKyAxKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY2FsZW5kYXIgcGFzc2VkIGlzIGVxdWFsIHRvIHRoZSBjdXJyZW50IGNhbGVuZGFyLlxuICAgKi9cbiAgaXNFcXVhbChjYWxlbmRhcjogQ2FsZW5kYXJNb2RlbCkge1xuICAgIGlmIChjYWxlbmRhcikge1xuICAgICAgcmV0dXJuIHRoaXMueWVhciA9PT0gY2FsZW5kYXIueWVhciAmJiB0aGlzLm1vbnRoID09PSBjYWxlbmRhci5tb250aDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIERheU1vZGVsIGlzIGluIHRoZSBDYWxlbmRhclxuICAgKi9cbiAgaXNEYXlJbkNhbGVuZGFyKGRheTogRGF5TW9kZWwpOiBib29sZWFuIHtcbiAgICBpZiAoZGF5KSB7XG4gICAgICByZXR1cm4gdGhpcy55ZWFyID09PSBkYXkueWVhciAmJiB0aGlzLm1vbnRoID09PSBkYXkubW9udGg7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIENhbGVuZGFyTW9kZWwgb2YgdGhlIHByZXZpb3VzIG1vbnRoLlxuICAgKi9cbiAgcHJldmlvdXNNb250aCgpOiBDYWxlbmRhck1vZGVsIHtcbiAgICBpZiAodGhpcy5tb250aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciAtIDEsIDExKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciwgdGhpcy5tb250aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIENhbGVuZGFyTW9kZWwgb2YgdGhlIG5leHQgbW9udGguXG4gICAqL1xuICBuZXh0TW9udGgoKTogQ2FsZW5kYXJNb2RlbCB7XG4gICAgaWYgKHRoaXMubW9udGggPT09IDExKSB7XG4gICAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyICsgMSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGggKyAxKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==