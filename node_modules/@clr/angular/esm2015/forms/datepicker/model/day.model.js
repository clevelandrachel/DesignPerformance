/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CalendarModel } from './calendar.model';
export class DayModel {
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     */
    constructor(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }
    /**
     * Returns the Calendar for the current DayModel.
     * @return {?}
     */
    get calendar() {
        return new CalendarModel(this.year, this.month);
    }
    /**
     * Checks if the passed CalendarDate is equal to itself.
     * @param {?} day
     * @return {?}
     */
    isEqual(day) {
        if (day) {
            return this.year === day.year && this.month === day.month && this.date === day.date;
        }
        return false;
    }
    /**
     * Converts the CalendarDate into the Javascript Date object.
     * @return {?}
     */
    toDate() {
        return new Date(this.year, this.month, this.date);
    }
    /**
     * Returns a new DayModel which is incremented based on the value passed.
     * @param {?} value
     * @return {?}
     */
    incrementBy(value) {
        // Creating new Javascript Date object to increment because
        // it will automatically take care of switching to next or previous
        // months & years without we having to worry about it.
        /** @type {?} */
        const date = new Date(this.year, this.month, this.date + value);
        return new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
    }
    /**
     * Clones the current day model.
     * @return {?}
     */
    clone() {
        return new DayModel(this.year, this.month, this.date);
    }
}
if (false) {
    /** @type {?} */
    DayModel.prototype.year;
    /** @type {?} */
    DayModel.prototype.month;
    /** @type {?} */
    DayModel.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9tb2RlbC9kYXkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE1BQU0sT0FBTyxRQUFROzs7Ozs7SUFDbkIsWUFBNEIsSUFBWSxFQUFrQixLQUFhLEVBQWtCLElBQVk7UUFBekUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFrQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQVE7SUFBRyxDQUFDOzs7OztJQUt6RyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUtELE9BQU8sQ0FBQyxHQUFhO1FBQ25CLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQztTQUNyRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7OztJQUtELFdBQVcsQ0FBQyxLQUFhOzs7OztjQUlqQixJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3JFLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUtELEtBQUs7UUFDSCxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGOzs7SUEzQ2Esd0JBQTRCOztJQUFFLHlCQUE2Qjs7SUFBRSx3QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENhbGVuZGFyTW9kZWwgfSBmcm9tICcuL2NhbGVuZGFyLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIERheU1vZGVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHllYXI6IG51bWJlciwgcHVibGljIHJlYWRvbmx5IG1vbnRoOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBkYXRlOiBudW1iZXIpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIENhbGVuZGFyIGZvciB0aGUgY3VycmVudCBEYXlNb2RlbC5cbiAgICovXG4gIGdldCBjYWxlbmRhcigpOiBDYWxlbmRhck1vZGVsIHtcbiAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBDYWxlbmRhckRhdGUgaXMgZXF1YWwgdG8gaXRzZWxmLlxuICAgKi9cbiAgaXNFcXVhbChkYXk6IERheU1vZGVsKSB7XG4gICAgaWYgKGRheSkge1xuICAgICAgcmV0dXJuIHRoaXMueWVhciA9PT0gZGF5LnllYXIgJiYgdGhpcy5tb250aCA9PT0gZGF5Lm1vbnRoICYmIHRoaXMuZGF0ZSA9PT0gZGF5LmRhdGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgQ2FsZW5kYXJEYXRlIGludG8gdGhlIEphdmFzY3JpcHQgRGF0ZSBvYmplY3QuXG4gICAqL1xuICB0b0RhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMueWVhciwgdGhpcy5tb250aCwgdGhpcy5kYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IERheU1vZGVsIHdoaWNoIGlzIGluY3JlbWVudGVkIGJhc2VkIG9uIHRoZSB2YWx1ZSBwYXNzZWQuXG4gICAqL1xuICBpbmNyZW1lbnRCeSh2YWx1ZTogbnVtYmVyKTogRGF5TW9kZWwge1xuICAgIC8vIENyZWF0aW5nIG5ldyBKYXZhc2NyaXB0IERhdGUgb2JqZWN0IHRvIGluY3JlbWVudCBiZWNhdXNlXG4gICAgLy8gaXQgd2lsbCBhdXRvbWF0aWNhbGx5IHRha2UgY2FyZSBvZiBzd2l0Y2hpbmcgdG8gbmV4dCBvciBwcmV2aW91c1xuICAgIC8vIG1vbnRocyAmIHllYXJzIHdpdGhvdXQgd2UgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IGl0LlxuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSArIHZhbHVlKTtcbiAgICByZXR1cm4gbmV3IERheU1vZGVsKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvbmVzIHRoZSBjdXJyZW50IGRheSBtb2RlbC5cbiAgICovXG4gIGNsb25lKCk6IERheU1vZGVsIHtcbiAgICByZXR1cm4gbmV3IERheU1vZGVsKHRoaXMueWVhciwgdGhpcy5tb250aCwgdGhpcy5kYXRlKTtcbiAgfVxufVxuIl19