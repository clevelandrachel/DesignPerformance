/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { DayViewModel } from './model/day-view.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateNavigationService } from './providers/date-navigation.service';
var ClrDay = /** @class */ (function () {
    function ClrDay(_dateNavigationService, _ifOpenService, dateFormControlService) {
        this._dateNavigationService = _dateNavigationService;
        this._ifOpenService = _ifOpenService;
        this.dateFormControlService = dateFormControlService;
    }
    /**
     * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
     */
    /**
     * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
     * @return {?}
     */
    ClrDay.prototype.onDayViewFocus = /**
     * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
     * @return {?}
     */
    function () {
        this._dateNavigationService.focusedDay = this.dayView.dayModel;
    };
    /**
     * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
     */
    /**
     * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
     * @return {?}
     */
    ClrDay.prototype.selectDay = /**
     * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var day = this.dayView.dayModel;
        this._dateNavigationService.notifySelectedDayChanged(day);
        this.dateFormControlService.markAsDirty();
        this._ifOpenService.open = false;
    };
    ClrDay.decorators = [
        { type: Component, args: [{
                    selector: 'clr-day',
                    template: "\n        <button\n            class=\"day-btn\"\n            type=\"button\"\n            [class.is-today]=\"dayView.isTodaysDate\"\n            [class.is-disabled]=\"dayView.isDisabled\"\n            [class.is-selected]=\"dayView.isSelected\"\n            [attr.tabindex]=\"dayView.tabIndex\"\n            (click)=\"selectDay()\"\n            (focus)=\"onDayViewFocus()\">\n            {{dayView.dayModel.date}}\n        </button>\n    ",
                    host: { '[class.day]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ClrDay.ctorParameters = function () { return [
        { type: DateNavigationService },
        { type: IfOpenService },
        { type: DateFormControlService }
    ]; };
    ClrDay.propDecorators = {
        dayView: [{ type: Input, args: ['clrDayView',] }]
    };
    return ClrDay;
}());
export { ClrDay };
if (false) {
    /**
     * DayViewModel input which is used to build the Day View.
     * @type {?}
     */
    ClrDay.prototype.dayView;
    /** @type {?} */
    ClrDay.prototype._dateNavigationService;
    /** @type {?} */
    ClrDay.prototype._ifOpenService;
    /** @type {?} */
    ClrDay.prototype.dateFormControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9kYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU1RTtJQWtCRSxnQkFDVSxzQkFBNkMsRUFDN0MsY0FBNkIsRUFDN0Isc0JBQThDO1FBRjlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFDN0MsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUNyRCxDQUFDO0lBT0o7O09BRUc7Ozs7O0lBQ0gsK0JBQWM7Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBCQUFTOzs7O0lBQVQ7O1lBQ1EsR0FBRyxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUMzQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsd2JBWVA7b0JBQ0gsSUFBSSxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRTtpQkFDaEM7Ozs7Z0JBbEJRLHFCQUFxQjtnQkFMckIsYUFBYTtnQkFJYixzQkFBc0I7OzswQkE4QjVCLEtBQUssU0FBQyxZQUFZOztJQWtCckIsYUFBQztDQUFBLEFBN0NELElBNkNDO1NBNUJZLE1BQU07Ozs7OztJQVVqQix5QkFBMkM7O0lBUnpDLHdDQUFxRDs7SUFDckQsZ0NBQXFDOztJQUNyQyx3Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWZPcGVuU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmRpdGlvbmFsL2lmLW9wZW4uc2VydmljZSc7XG5cbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4vbW9kZWwvZGF5LXZpZXcubW9kZWwnO1xuaW1wb3J0IHsgRGF5TW9kZWwgfSBmcm9tICcuL21vZGVsL2RheS5tb2RlbCc7XG5pbXBvcnQgeyBEYXRlRm9ybUNvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZGF0ZS1mb3JtLWNvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kYXRlLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1kYXknLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cImRheS1idG5cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBbY2xhc3MuaXMtdG9kYXldPVwiZGF5Vmlldy5pc1RvZGF5c0RhdGVcIlxuICAgICAgICAgICAgW2NsYXNzLmlzLWRpc2FibGVkXT1cImRheVZpZXcuaXNEaXNhYmxlZFwiXG4gICAgICAgICAgICBbY2xhc3MuaXMtc2VsZWN0ZWRdPVwiZGF5Vmlldy5pc1NlbGVjdGVkXCJcbiAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cImRheVZpZXcudGFiSW5kZXhcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdERheSgpXCJcbiAgICAgICAgICAgIChmb2N1cyk9XCJvbkRheVZpZXdGb2N1cygpXCI+XG4gICAgICAgICAgICB7e2RheVZpZXcuZGF5TW9kZWwuZGF0ZX19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5kYXldJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRheSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2RhdGVOYXZpZ2F0aW9uU2VydmljZTogRGF0ZU5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2lmT3BlblNlcnZpY2U6IElmT3BlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRlRm9ybUNvbnRyb2xTZXJ2aWNlOiBEYXRlRm9ybUNvbnRyb2xTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogRGF5Vmlld01vZGVsIGlucHV0IHdoaWNoIGlzIHVzZWQgdG8gYnVpbGQgdGhlIERheSBWaWV3LlxuICAgKi9cbiAgQElucHV0KCdjbHJEYXlWaWV3JykgZGF5VmlldzogRGF5Vmlld01vZGVsO1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBmb2N1c2VkRGF5IGluIHRoZSBEYXRlTmF2aWdhdGlvblNlcnZpY2Ugd2hlbiB0aGUgQ2xyRGF5IGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbkRheVZpZXdGb2N1cygpIHtcbiAgICB0aGlzLl9kYXRlTmF2aWdhdGlvblNlcnZpY2UuZm9jdXNlZERheSA9IHRoaXMuZGF5Vmlldy5kYXlNb2RlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZERheSB3aGVuIHRoZSBDbHJEYXkgaXMgc2VsZWN0ZWQgYW5kIGNsb3NlcyB0aGUgZGF0ZXBpY2tlciBwb3BvdmVyLlxuICAgKi9cbiAgc2VsZWN0RGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IGRheTogRGF5TW9kZWwgPSB0aGlzLmRheVZpZXcuZGF5TW9kZWw7XG4gICAgdGhpcy5fZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLm5vdGlmeVNlbGVjdGVkRGF5Q2hhbmdlZChkYXkpO1xuICAgIHRoaXMuZGF0ZUZvcm1Db250cm9sU2VydmljZS5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuX2lmT3BlblNlcnZpY2Uub3BlbiA9IGZhbHNlO1xuICB9XG59XG4iXX0=