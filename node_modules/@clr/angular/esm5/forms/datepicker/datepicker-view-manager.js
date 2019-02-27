/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ClrDatepickerViewManager = /** @class */ (function (_super) {
    tslib_1.__extends(ClrDatepickerViewManager, _super);
    function ClrDatepickerViewManager(parent, _injector, _viewManagerService) {
        var _this = _super.call(this, _injector, parent) || this;
        _this._viewManagerService = _viewManagerService;
        _this.configurePopover();
        return _this;
    }
    /**
     * Configure Popover Direction and Close indicators
     */
    /**
     * Configure Popover Direction and Close indicators
     * @return {?}
     */
    ClrDatepickerViewManager.prototype.configurePopover = /**
     * Configure Popover Direction and Close indicators
     * @return {?}
     */
    function () {
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        this.closeOnOutsideClick = true;
    };
    Object.defineProperty(ClrDatepickerViewManager.prototype, "isMonthView", {
        /**
         * Returns if the current view is the monthpicker.
         */
        get: /**
         * Returns if the current view is the monthpicker.
         * @return {?}
         */
        function () {
            return this._viewManagerService.isMonthView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatepickerViewManager.prototype, "isYearView", {
        /**
         * Returns if the current view is the yearpicker.
         */
        get: /**
         * Returns if the current view is the yearpicker.
         * @return {?}
         */
        function () {
            return this._viewManagerService.isYearView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatepickerViewManager.prototype, "isDayView", {
        /**
         * Returns if the current view is the daypicker.
         */
        get: /**
         * Returns if the current view is the daypicker.
         * @return {?}
         */
        function () {
            return this._viewManagerService.isDayView;
        },
        enumerable: true,
        configurable: true
    });
    ClrDatepickerViewManager.decorators = [
        { type: Component, args: [{
                    selector: 'clr-datepicker-view-manager',
                    template: "<!--\n* Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n* This software is released under MIT license.\n* The full license information can be found in LICENSE in the root directory of this project.\n-->\n\n<clr-monthpicker *ngIf=\"isMonthView\"></clr-monthpicker>\n<clr-yearpicker *ngIf=\"isYearView\"></clr-yearpicker>\n<clr-daypicker *ngIf=\"isDayView\"></clr-daypicker>\n",
                    providers: [ViewManagerService, DatepickerFocusService],
                    host: { '[class.datepicker]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ClrDatepickerViewManager.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: SkipSelf }] },
        { type: Injector },
        { type: ViewManagerService }
    ]; };
    return ClrDatepickerViewManager;
}(AbstractPopover));
export { ClrDatepickerViewManager };
if (false) {
    /** @type {?} */
    ClrDatepickerViewManager.prototype._viewManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3LW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL2RhdGVwaWNrZXItdmlldy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdEU7SUFNOEMsb0RBQWU7SUFDM0Qsa0NBQXdCLE1BQWtCLEVBQUUsU0FBbUIsRUFBVSxtQkFBdUM7UUFBaEgsWUFDRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBRXpCO1FBSHdFLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFFOUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0lBQzFCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSyxtREFBZ0I7Ozs7SUFBeEI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUtELHNCQUFJLGlEQUFXO1FBSGY7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxnREFBVTtRQUhkOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksK0NBQVM7UUFIYjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2Qyw2WUFBNkM7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO29CQUN2RCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7aUJBQ3ZDOzs7O2dCQWJtQixVQUFVLHVCQWVmLFFBQVE7Z0JBZlMsUUFBUTtnQkFNL0Isa0JBQWtCOztJQTJDM0IsK0JBQUM7Q0FBQSxBQXpDRCxDQU04QyxlQUFlLEdBbUM1RDtTQW5DWSx3QkFBd0I7OztJQUM4Qix1REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0UG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXIvY29tbW9uL2Fic3RyYWN0LXBvcG92ZXInO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyJztcblxuaW1wb3J0IHsgRGF0ZXBpY2tlckZvY3VzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RhdGVwaWNrZXItZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3TWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92aWV3LW1hbmFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1kYXRlcGlja2VyLXZpZXctbWFuYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlcGlja2VyLXZpZXctbWFuYWdlci5odG1sJyxcbiAgcHJvdmlkZXJzOiBbVmlld01hbmFnZXJTZXJ2aWNlLCBEYXRlcGlja2VyRm9jdXNTZXJ2aWNlXSxcbiAgaG9zdDogeyAnW2NsYXNzLmRhdGVwaWNrZXJdJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGVwaWNrZXJWaWV3TWFuYWdlciBleHRlbmRzIEFic3RyYWN0UG9wb3ZlciB7XG4gIGNvbnN0cnVjdG9yKEBTa2lwU2VsZigpIHBhcmVudDogRWxlbWVudFJlZiwgX2luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfdmlld01hbmFnZXJTZXJ2aWNlOiBWaWV3TWFuYWdlclNlcnZpY2UpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IsIHBhcmVudCk7XG4gICAgdGhpcy5jb25maWd1cmVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIFBvcG92ZXIgRGlyZWN0aW9uIGFuZCBDbG9zZSBpbmRpY2F0b3JzXG4gICAqL1xuICBwcml2YXRlIGNvbmZpZ3VyZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JQb2ludCA9IFBvaW50LkJPVFRPTV9MRUZUO1xuICAgIHRoaXMucG9wb3ZlclBvaW50ID0gUG9pbnQuTEVGVF9UT1A7XG4gICAgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBjdXJyZW50IHZpZXcgaXMgdGhlIG1vbnRocGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzTW9udGhWaWV3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3TWFuYWdlclNlcnZpY2UuaXNNb250aFZpZXc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgY3VycmVudCB2aWV3IGlzIHRoZSB5ZWFycGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzWWVhclZpZXcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdNYW5hZ2VyU2VydmljZS5pc1llYXJWaWV3O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIGN1cnJlbnQgdmlldyBpcyB0aGUgZGF5cGlja2VyLlxuICAgKi9cbiAgZ2V0IGlzRGF5VmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld01hbmFnZXJTZXJ2aWNlLmlzRGF5VmlldztcbiAgfVxufVxuIl19