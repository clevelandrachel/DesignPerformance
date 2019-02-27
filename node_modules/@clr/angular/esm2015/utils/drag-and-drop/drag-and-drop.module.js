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
import { ClrDraggable } from './draggable/draggable';
import { ClrDroppable } from './droppable/droppable';
import { ClrIfDragged } from './if-dragged';
import { ClrDragHandle } from './drag-handle';
import { ClrDraggableGhost } from './draggable-ghost';
/** @type {?} */
export const CLR_DRAG_AND_DROP_DIRECTIVES = [
    ClrDraggable,
    ClrDroppable,
    ClrIfDragged,
    ClrDragHandle,
    ClrDraggableGhost,
];
export class ClrDragAndDropModule {
}
ClrDragAndDropModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CLR_DRAG_AND_DROP_DIRECTIVES],
                entryComponents: [ClrDraggableGhost],
                exports: [CLR_DRAG_AND_DROP_DIRECTIVES],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUV0RCxNQUFNLE9BQU8sNEJBQTRCLEdBQWdCO0lBQ3ZELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7Q0FDbEI7QUFRRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQzVDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZS9kcmFnZ2FibGUnO1xuaW1wb3J0IHsgQ2xyRHJvcHBhYmxlIH0gZnJvbSAnLi9kcm9wcGFibGUvZHJvcHBhYmxlJztcbmltcG9ydCB7IENscklmRHJhZ2dlZCB9IGZyb20gJy4vaWYtZHJhZ2dlZCc7XG5pbXBvcnQgeyBDbHJEcmFnSGFuZGxlIH0gZnJvbSAnLi9kcmFnLWhhbmRsZSc7XG5pbXBvcnQgeyBDbHJEcmFnZ2FibGVHaG9zdCB9IGZyb20gJy4vZHJhZ2dhYmxlLWdob3N0JztcblxuZXhwb3J0IGNvbnN0IENMUl9EUkFHX0FORF9EUk9QX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBDbHJEcmFnZ2FibGUsXG4gIENsckRyb3BwYWJsZSxcbiAgQ2xySWZEcmFnZ2VkLFxuICBDbHJEcmFnSGFuZGxlLFxuICBDbHJEcmFnZ2FibGVHaG9zdCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfRFJBR19BTkRfRFJPUF9ESVJFQ1RJVkVTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2xyRHJhZ2dhYmxlR2hvc3RdLFxuICBleHBvcnRzOiBbQ0xSX0RSQUdfQU5EX0RST1BfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyYWdBbmREcm9wTW9kdWxlIHt9XG4iXX0=