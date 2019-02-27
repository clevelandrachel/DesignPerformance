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
var DayModel = /** @class */ (function () {
    function DayModel(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }
    Object.defineProperty(DayModel.prototype, "calendar", {
        /**
         * Returns the Calendar for the current DayModel.
         */
        get: /**
         * Returns the Calendar for the current DayModel.
         * @return {?}
         */
        function () {
            return new CalendarModel(this.year, this.month);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if the passed CalendarDate is equal to itself.
     */
    /**
     * Checks if the passed CalendarDate is equal to itself.
     * @param {?} day
     * @return {?}
     */
    DayModel.prototype.isEqual = /**
     * Checks if the passed CalendarDate is equal to itself.
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (day) {
            return this.year === day.year && this.month === day.month && this.date === day.date;
        }
        return false;
    };
    /**
     * Converts the CalendarDate into the Javascript Date object.
     */
    /**
     * Converts the CalendarDate into the Javascript Date object.
     * @return {?}
     */
    DayModel.prototype.toDate = /**
     * Converts the CalendarDate into the Javascript Date object.
     * @return {?}
     */
    function () {
        return new Date(this.year, this.month, this.date);
    };
    /**
     * Returns a new DayModel which is incremented based on the value passed.
     */
    /**
     * Returns a new DayModel which is incremented based on the value passed.
     * @param {?} value
     * @return {?}
     */
    DayModel.prototype.incrementBy = /**
     * Returns a new DayModel which is incremented based on the value passed.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // Creating new Javascript Date object to increment because
        // it will automatically take care of switching to next or previous
        // months & years without we having to worry about it.
        /** @type {?} */
        var date = new Date(this.year, this.month, this.date + value);
        return new DayModel(date.getFullYear(), date.getMonth(), date.getDate());
    };
    /**
     * Clones the current day model.
     */
    /**
     * Clones the current day model.
     * @return {?}
     */
    DayModel.prototype.clone = /**
     * Clones the current day model.
     * @return {?}
     */
    function () {
        return new DayModel(this.year, this.month, this.date);
    };
    return DayModel;
}());
export { DayModel };
if (false) {
    /** @type {?} */
    DayModel.prototype.year;
    /** @type {?} */
    DayModel.prototype.month;
    /** @type {?} */
    DayModel.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9tb2RlbC9kYXkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBQ0Usa0JBQTRCLElBQVksRUFBa0IsS0FBYSxFQUFrQixJQUFZO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBa0IsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUt6RyxzQkFBSSw4QkFBUTtRQUhaOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7Ozs7SUFDSCwwQkFBTzs7Ozs7SUFBUCxVQUFRLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUJBQU07Ozs7SUFBTjtRQUNFLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILDhCQUFXOzs7OztJQUFYLFVBQVksS0FBYTs7Ozs7WUFJakIsSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNyRSxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHdCQUFLOzs7O0lBQUw7UUFDRSxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDOzs7O0lBM0NhLHdCQUE0Qjs7SUFBRSx5QkFBNkI7O0lBQUUsd0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDYWxlbmRhck1vZGVsIH0gZnJvbSAnLi9jYWxlbmRhci5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBEYXlNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB5ZWFyOiBudW1iZXIsIHB1YmxpYyByZWFkb25seSBtb250aDogbnVtYmVyLCBwdWJsaWMgcmVhZG9ubHkgZGF0ZTogbnVtYmVyKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBDYWxlbmRhciBmb3IgdGhlIGN1cnJlbnQgRGF5TW9kZWwuXG4gICAqL1xuICBnZXQgY2FsZW5kYXIoKTogQ2FsZW5kYXJNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBDYWxlbmRhck1vZGVsKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgQ2FsZW5kYXJEYXRlIGlzIGVxdWFsIHRvIGl0c2VsZi5cbiAgICovXG4gIGlzRXF1YWwoZGF5OiBEYXlNb2RlbCkge1xuICAgIGlmIChkYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnllYXIgPT09IGRheS55ZWFyICYmIHRoaXMubW9udGggPT09IGRheS5tb250aCAmJiB0aGlzLmRhdGUgPT09IGRheS5kYXRlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIENhbGVuZGFyRGF0ZSBpbnRvIHRoZSBKYXZhc2NyaXB0IERhdGUgb2JqZWN0LlxuICAgKi9cbiAgdG9EYXRlKCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBEYXlNb2RlbCB3aGljaCBpcyBpbmNyZW1lbnRlZCBiYXNlZCBvbiB0aGUgdmFsdWUgcGFzc2VkLlxuICAgKi9cbiAgaW5jcmVtZW50QnkodmFsdWU6IG51bWJlcik6IERheU1vZGVsIHtcbiAgICAvLyBDcmVhdGluZyBuZXcgSmF2YXNjcmlwdCBEYXRlIG9iamVjdCB0byBpbmNyZW1lbnQgYmVjYXVzZVxuICAgIC8vIGl0IHdpbGwgYXV0b21hdGljYWxseSB0YWtlIGNhcmUgb2Ygc3dpdGNoaW5nIHRvIG5leHQgb3IgcHJldmlvdXNcbiAgICAvLyBtb250aHMgJiB5ZWFycyB3aXRob3V0IHdlIGhhdmluZyB0byB3b3JyeSBhYm91dCBpdC5cbiAgICBjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGhpcy55ZWFyLCB0aGlzLm1vbnRoLCB0aGlzLmRhdGUgKyB2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBEYXlNb2RlbChkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb25lcyB0aGUgY3VycmVudCBkYXkgbW9kZWwuXG4gICAqL1xuICBjbG9uZSgpOiBEYXlNb2RlbCB7XG4gICAgcmV0dXJuIG5ldyBEYXlNb2RlbCh0aGlzLnllYXIsIHRoaXMubW9udGgsIHRoaXMuZGF0ZSk7XG4gIH1cbn1cbiJdfQ==