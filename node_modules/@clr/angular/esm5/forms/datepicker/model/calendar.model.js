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
var CalendarModel = /** @class */ (function () {
    function CalendarModel(year, month) {
        this.year = year;
        this.month = month;
        this.initializeDaysInCalendar();
    }
    /**
     * Populates the days array with the DayModels in the current Calendar.
     */
    /**
     * Populates the days array with the DayModels in the current Calendar.
     * @return {?}
     */
    CalendarModel.prototype.initializeDaysInCalendar = /**
     * Populates the days array with the DayModels in the current Calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var noOfDaysInCalendar = getNumberOfDaysInTheMonth(this.year, this.month);
        this.days = Array(noOfDaysInCalendar)
            .fill(null)
            .map(function (date, index) {
            return new DayModel(_this.year, _this.month, index + 1);
        });
    };
    /**
     * Checks if the calendar passed is equal to the current calendar.
     */
    /**
     * Checks if the calendar passed is equal to the current calendar.
     * @param {?} calendar
     * @return {?}
     */
    CalendarModel.prototype.isEqual = /**
     * Checks if the calendar passed is equal to the current calendar.
     * @param {?} calendar
     * @return {?}
     */
    function (calendar) {
        if (calendar) {
            return this.year === calendar.year && this.month === calendar.month;
        }
        return false;
    };
    /**
     * Checks if a DayModel is in the Calendar
     */
    /**
     * Checks if a DayModel is in the Calendar
     * @param {?} day
     * @return {?}
     */
    CalendarModel.prototype.isDayInCalendar = /**
     * Checks if a DayModel is in the Calendar
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (day) {
            return this.year === day.year && this.month === day.month;
        }
        return false;
    };
    /**
     * Returns CalendarModel of the previous month.
     */
    /**
     * Returns CalendarModel of the previous month.
     * @return {?}
     */
    CalendarModel.prototype.previousMonth = /**
     * Returns CalendarModel of the previous month.
     * @return {?}
     */
    function () {
        if (this.month === 0) {
            return new CalendarModel(this.year - 1, 11);
        }
        else {
            return new CalendarModel(this.year, this.month - 1);
        }
    };
    /**
     * Returns CalendarModel of the next month.
     */
    /**
     * Returns CalendarModel of the next month.
     * @return {?}
     */
    CalendarModel.prototype.nextMonth = /**
     * Returns CalendarModel of the next month.
     * @return {?}
     */
    function () {
        if (this.month === 11) {
            return new CalendarModel(this.year + 1, 0);
        }
        else {
            return new CalendarModel(this.year, this.month + 1);
        }
    };
    return CalendarModel;
}());
export { CalendarModel };
if (false) {
    /** @type {?} */
    CalendarModel.prototype.days;
    /** @type {?} */
    CalendarModel.prototype.year;
    /** @type {?} */
    CalendarModel.prototype.month;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL21vZGVsL2NhbGVuZGFyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkM7SUFDRSx1QkFBNEIsSUFBWSxFQUFrQixLQUFhO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBa0IsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNyRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBSUQ7O09BRUc7Ozs7O0lBQ0ssZ0RBQXdCOzs7O0lBQWhDO1FBQUEsaUJBT0M7O1lBTk8sa0JBQWtCLEdBQVcseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25GLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUNmLE9BQU8sSUFBSSxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsK0JBQU87Ozs7O0lBQVAsVUFBUSxRQUF1QjtRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNyRTtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCx1Q0FBZTs7Ozs7SUFBZixVQUFnQixHQUFhO1FBQzNCLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscUNBQWE7Ozs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaUNBQVM7Ozs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBNURELElBNERDOzs7O0lBdkRDLDZCQUFpQjs7SUFKTCw2QkFBNEI7O0lBQUUsOEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBnZXROdW1iZXJPZkRheXNJblRoZU1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IERheU1vZGVsIH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB5ZWFyOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBtb250aDogbnVtYmVyKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGF5c0luQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIGRheXM6IERheU1vZGVsW107XG5cbiAgLyoqXG4gICAqIFBvcHVsYXRlcyB0aGUgZGF5cyBhcnJheSB3aXRoIHRoZSBEYXlNb2RlbHMgaW4gdGhlIGN1cnJlbnQgQ2FsZW5kYXIuXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVEYXlzSW5DYWxlbmRhcigpOiB2b2lkIHtcbiAgICBjb25zdCBub09mRGF5c0luQ2FsZW5kYXI6IG51bWJlciA9IGdldE51bWJlck9mRGF5c0luVGhlTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgICB0aGlzLmRheXMgPSBBcnJheShub09mRGF5c0luQ2FsZW5kYXIpXG4gICAgICAuZmlsbChudWxsKVxuICAgICAgLm1hcCgoZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXlNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGgsIGluZGV4ICsgMSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGNhbGVuZGFyIHBhc3NlZCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCBjYWxlbmRhci5cbiAgICovXG4gIGlzRXF1YWwoY2FsZW5kYXI6IENhbGVuZGFyTW9kZWwpIHtcbiAgICBpZiAoY2FsZW5kYXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnllYXIgPT09IGNhbGVuZGFyLnllYXIgJiYgdGhpcy5tb250aCA9PT0gY2FsZW5kYXIubW9udGg7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBEYXlNb2RlbCBpcyBpbiB0aGUgQ2FsZW5kYXJcbiAgICovXG4gIGlzRGF5SW5DYWxlbmRhcihkYXk6IERheU1vZGVsKTogYm9vbGVhbiB7XG4gICAgaWYgKGRheSkge1xuICAgICAgcmV0dXJuIHRoaXMueWVhciA9PT0gZGF5LnllYXIgJiYgdGhpcy5tb250aCA9PT0gZGF5Lm1vbnRoO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBDYWxlbmRhck1vZGVsIG9mIHRoZSBwcmV2aW91cyBtb250aC5cbiAgICovXG4gIHByZXZpb3VzTW9udGgoKTogQ2FsZW5kYXJNb2RlbCB7XG4gICAgaWYgKHRoaXMubW9udGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIgLSAxLCAxMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ2FsZW5kYXJNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBDYWxlbmRhck1vZGVsIG9mIHRoZSBuZXh0IG1vbnRoLlxuICAgKi9cbiAgbmV4dE1vbnRoKCk6IENhbGVuZGFyTW9kZWwge1xuICAgIGlmICh0aGlzLm1vbnRoID09PSAxMSkge1xuICAgICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciArIDEsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IENhbGVuZGFyTW9kZWwodGhpcy55ZWFyLCB0aGlzLm1vbnRoICsgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=