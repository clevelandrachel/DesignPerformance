/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Injector, SkipSelf } from '@angular/core';
import { AbstractPopover } from '../../popover/common/abstract-popover';
import { Point } from '../../popover/common/popover';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { ViewManagerService } from './providers/view-manager.service';
export class ClrDatepickerViewManager extends AbstractPopover {
    /**
     * @param {?} parent
     * @param {?} _injector
     * @param {?} _viewManagerService
     */
    constructor(parent, _injector, _viewManagerService) {
        super(_injector, parent);
        this._viewManagerService = _viewManagerService;
        this.configurePopover();
    }
    /**
     * Configure Popover Direction and Close indicators
     * @return {?}
     */
    configurePopover() {
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    }
    /**
     * Returns if the current view is the monthpicker.
     * @return {?}
     */
    get isMonthView() {
        return this._viewManagerService.isMonthView;
    }
    /**
     * Returns if the current view is the yearpicker.
     * @return {?}
     */
    get isYearView() {
        return this._viewManagerService.isYearView;
    }
    /**
     * Returns if the current view is the daypicker.
     * @return {?}
     */
    get isDayView() {
        return this._viewManagerService.isDayView;
    }
}
ClrDatepickerViewManager.decorators = [
    { type: Component, args: [{
                selector: 'clr-datepicker-view-manager',
                template: "<!--\n* Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n* This software is released under MIT license.\n* The full license information can be found in LICENSE in the root directory of this project.\n-->\n\n<clr-monthpicker *ngIf=\"isMonthView\"></clr-monthpicker>\n<clr-yearpicker *ngIf=\"isYearView\"></clr-yearpicker>\n<clr-daypicker *ngIf=\"isDayView\"></clr-daypicker>\n",
                providers: [ViewManagerService, DatepickerFocusService],
                host: { '[class.datepicker]': 'true' }
            }] }
];
/** @nocollapse */
ClrDatepickerViewManager.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: SkipSelf }] },
    { type: Injector },
    { type: ViewManagerService }
];
if (false) {
    /** @type {?} */
    ClrDatepickerViewManager.prototype._viewManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3LW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL2RhdGVwaWNrZXItdmlldy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQVF0RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBZTs7Ozs7O0lBQzNELFlBQXdCLE1BQWtCLEVBQUUsU0FBbUIsRUFBVSxtQkFBdUM7UUFDOUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUQ4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBRTlHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBS08sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDOzs7OztJQUtELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUtELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUtELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDZZQUE2QztnQkFDN0MsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3ZELElBQUksRUFBRSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRTthQUN2Qzs7OztZQWJtQixVQUFVLHVCQWVmLFFBQVE7WUFmUyxRQUFRO1lBTS9CLGtCQUFrQjs7OztJQVN3Qyx1REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0UG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXIvY29tbW9uL2Fic3RyYWN0LXBvcG92ZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyJztcblxuaW1wb3J0IHsgRGF0ZXBpY2tlckZvY3VzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RhdGVwaWNrZXItZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1kYXRlcGlja2VyLXZpZXctbWFuYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXZpZXctbWFuYWdlci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbVmlld01hbmFnZXJTZXJ2aWNlLCBEYXRlcGlja2VyRm9jdXNTZXJ2aWNlXSxcbiAgaG9zdDogeyAnW2NsYXNzLmRhdGVwaWNrZXJdJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGVwaWNrZXJWaWV3TWFuYWdlciBleHRlbmRzIEFic3RyYWN0UG9wb3ZlciB7XG4gIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIHBhcmVudDogRWxlbWVudFJlZiwgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfdmlld01hbmFnZXJTZXJ2aWNlOiBWaWV3TWFuYWdlclNlcnZpY2UpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IsIHBhcmVudCk7XG4gICAgdGhpcy5jb25maWd1cmVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIFBvcG92ZXIgRGlyZWN0aW9uIGFuZCBDbG9zZSBpbmRpY2F0b3JzXG4gICAqL1xuICBwcml2YXRlIGNvbmZpZ3VyZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JQb2ludCA9IFBvaW50LkJPVFRPTV9MRUZUO1xuICAgIHRoaXMucG9wb3ZlclBvaW50ID0gUG9pbnQuTEVGVF9UT1A7XG4gICAgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgdGhlIG1vbnRocGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzTW9udGhWaWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3TWFuYWdlclNlcnZpY2UuaXNNb250aFZpZXc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgY3VycmVudCB2aWV3IGlzIHRoZSB5ZWFycGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzWWVhclZpZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdNYW5hZ2VyU2VydmljZS5pc1llYXJWaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIGN1cnJlbnQgdmlldyBpcyB0aGUgZGF5cGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzRGF5VmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld01hbmFnZXJTZXJ2aWNlLmlzRGF5VmlldztcbiAgfVxufVxuIl19