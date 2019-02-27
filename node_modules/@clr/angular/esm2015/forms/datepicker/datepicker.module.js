/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrFocusTrapModule } from '../../utils/focus-trap/focus-trap.module';
import { ClrHostWrappingModule } from '../../utils/host-wrapping/host-wrapping.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrCalendar } from './calendar';
import { ClrDateContainer } from './date-container';
import { ClrDateInput } from './date-input';
import { ClrDatepickerViewManager } from './datepicker-view-manager';
import { ClrDay } from './day';
import { ClrDaypicker } from './daypicker';
import { ClrMonthpicker } from './monthpicker';
import { ClrYearpicker } from './yearpicker';
/** @type {?} */
export const CLR_DATEPICKER_DIRECTIVES = [
    ClrDay,
    ClrDateContainer,
    ClrDateInput,
    ClrDatepickerViewManager,
    ClrMonthpicker,
    ClrYearpicker,
    ClrDaypicker,
    ClrCalendar,
];
export class ClrDatepickerModule {
}
ClrDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ClrHostWrappingModule,
                    ClrConditionalModule,
                    ClrIconModule,
                    ClrFocusTrapModule,
                    ClrCommonFormsModule,
                ],
                declarations: [CLR_DATEPICKER_DIRECTIVES],
                exports: [CLR_DATEPICKER_DIRECTIVES],
                entryComponents: [ClrDateContainer],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFN0MsTUFBTSxPQUFPLHlCQUF5QixHQUFnQjtJQUNwRCxNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztDQUNaO0FBZUQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBYi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUNwQyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENsckNvbmRpdGlvbmFsTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvY29uZGl0aW9uYWwubW9kdWxlJztcbmltcG9ydCB7IENsckZvY3VzVHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xySG9zdFdyYXBwaW5nTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9zdC13cmFwcGluZy9ob3N0LXdyYXBwaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDbHJDb21tb25Gb3Jtc01vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcblxuaW1wb3J0IHsgQ2xyQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcbmltcG9ydCB7IENsckRhdGVDb250YWluZXIgfSBmcm9tICcuL2RhdGUtY29udGFpbmVyJztcbmltcG9ydCB7IENsckRhdGVJbnB1dCB9IGZyb20gJy4vZGF0ZS1pbnB1dCc7XG5pbXBvcnQgeyBDbHJEYXRlcGlja2VyVmlld01hbmFnZXIgfSBmcm9tICcuL2RhdGVwaWNrZXItdmlldy1tYW5hZ2VyJztcbmltcG9ydCB7IENsckRheSB9IGZyb20gJy4vZGF5JztcbmltcG9ydCB7IENsckRheXBpY2tlciB9IGZyb20gJy4vZGF5cGlja2VyJztcbmltcG9ydCB7IENsck1vbnRocGlja2VyIH0gZnJvbSAnLi9tb250aHBpY2tlcic7XG5pbXBvcnQgeyBDbHJZZWFycGlja2VyIH0gZnJvbSAnLi95ZWFycGlja2VyJztcblxuZXhwb3J0IGNvbnN0IENMUl9EQVRFUElDS0VSX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBDbHJEYXksXG4gIENsckRhdGVDb250YWluZXIsXG4gIENsckRhdGVJbnB1dCxcbiAgQ2xyRGF0ZXBpY2tlclZpZXdNYW5hZ2VyLFxuICBDbHJNb250aHBpY2tlcixcbiAgQ2xyWWVhcnBpY2tlcixcbiAgQ2xyRGF5cGlja2VyLFxuICBDbHJDYWxlbmRhcixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2xySG9zdFdyYXBwaW5nTW9kdWxlLFxuICAgIENsckNvbmRpdGlvbmFsTW9kdWxlLFxuICAgIENsckljb25Nb2R1bGUsXG4gICAgQ2xyRm9jdXNUcmFwTW9kdWxlLFxuICAgIENsckNvbW1vbkZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfREFURVBJQ0tFUl9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9EQVRFUElDS0VSX0RJUkVDVElWRVNdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbHJEYXRlQ29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0ZXBpY2tlck1vZHVsZSB7fVxuIl19