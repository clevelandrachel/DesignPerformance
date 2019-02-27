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
export var CLR_DRAG_AND_DROP_DIRECTIVES = [
    ClrDraggable,
    ClrDroppable,
    ClrIfDragged,
    ClrDragHandle,
    ClrDraggableGhost,
];
var ClrDragAndDropModule = /** @class */ (function () {
    function ClrDragAndDropModule() {
    }
    ClrDragAndDropModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [CLR_DRAG_AND_DROP_DIRECTIVES],
                    entryComponents: [ClrDraggableGhost],
                    exports: [CLR_DRAG_AND_DROP_DIRECTIVES],
                },] }
    ];
    return ClrDragAndDropModule;
}());
export { ClrDragAndDropModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUV0RCxNQUFNLEtBQU8sNEJBQTRCLEdBQWdCO0lBQ3ZELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7Q0FDbEI7QUFFRDtJQUFBO0lBTW1DLENBQUM7O2dCQU5uQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDNUMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUN4Qzs7SUFDa0MsMkJBQUM7Q0FBQSxBQU5wQyxJQU1vQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xyRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUvZHJhZ2dhYmxlJztcbmltcG9ydCB7IENsckRyb3BwYWJsZSB9IGZyb20gJy4vZHJvcHBhYmxlL2Ryb3BwYWJsZSc7XG5pbXBvcnQgeyBDbHJJZkRyYWdnZWQgfSBmcm9tICcuL2lmLWRyYWdnZWQnO1xuaW1wb3J0IHsgQ2xyRHJhZ0hhbmRsZSB9IGZyb20gJy4vZHJhZy1oYW5kbGUnO1xuaW1wb3J0IHsgQ2xyRHJhZ2dhYmxlR2hvc3QgfSBmcm9tICcuL2RyYWdnYWJsZS1naG9zdCc7XG5cbmV4cG9ydCBjb25zdCBDTFJfRFJBR19BTkRfRFJPUF9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtcbiAgQ2xyRHJhZ2dhYmxlLFxuICBDbHJEcm9wcGFibGUsXG4gIENscklmRHJhZ2dlZCxcbiAgQ2xyRHJhZ0hhbmRsZSxcbiAgQ2xyRHJhZ2dhYmxlR2hvc3QsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ0xSX0RSQUdfQU5EX0RST1BfRElSRUNUSVZFU10sXG4gIGVudHJ5Q29tcG9uZW50czogW0NsckRyYWdnYWJsZUdob3N0XSxcbiAgZXhwb3J0czogW0NMUl9EUkFHX0FORF9EUk9QX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEcmFnQW5kRHJvcE1vZHVsZSB7fVxuIl19