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
import { FormsModule } from '@angular/forms';
import { ClrStackBlock } from './stack-block';
import { ClrStackHeader } from './stack-header';
import { ClrStackInput } from './stack-input';
import { ClrStackSelect } from './stack-select';
import { ClrStackView } from './stack-view';
import { ClrStackViewCustomTags } from './stack-view-custom-tags';
import { ClrIconModule } from '../../icon/icon.module';
/** @type {?} */
export var CLR_STACK_VIEW_DIRECTIVES = [
    ClrStackView,
    ClrStackHeader,
    ClrStackBlock,
    ClrStackViewCustomTags,
    /**
     * Undocumented experimental feature: inline editing.
     */
    ClrStackInput,
    ClrStackSelect,
];
var ClrStackViewModule = /** @class */ (function () {
    function ClrStackViewModule() {
    }
    ClrStackViewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ClrIconModule],
                    declarations: [CLR_STACK_VIEW_DIRECTIVES],
                    exports: [CLR_STACK_VIEW_DIRECTIVES],
                },] }
    ];
    return ClrStackViewModule;
}());
export { ClrStackViewModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL3N0YWNrLXZpZXcvc3RhY2stdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV2RCxNQUFNLEtBQU8seUJBQXlCLEdBQWdCO0lBQ3BELFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qjs7T0FFRztJQUNILGFBQWE7SUFDYixjQUFjO0NBSWY7QUFFRDtJQUFBO0lBS2lDLENBQUM7O2dCQUxqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUM7b0JBQ25ELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckM7O0lBQ2dDLHlCQUFDO0NBQUEsQUFMbEMsSUFLa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDbHJTdGFja0Jsb2NrIH0gZnJvbSAnLi9zdGFjay1ibG9jayc7XG5pbXBvcnQgeyBDbHJTdGFja0hlYWRlciB9IGZyb20gJy4vc3RhY2staGVhZGVyJztcbmltcG9ydCB7IENsclN0YWNrSW5wdXQgfSBmcm9tICcuL3N0YWNrLWlucHV0JztcbmltcG9ydCB7IENsclN0YWNrU2VsZWN0IH0gZnJvbSAnLi9zdGFjay1zZWxlY3QnO1xuaW1wb3J0IHsgQ2xyU3RhY2tWaWV3IH0gZnJvbSAnLi9zdGFjay12aWV3JztcbmltcG9ydCB7IENsclN0YWNrVmlld0N1c3RvbVRhZ3MgfSBmcm9tICcuL3N0YWNrLXZpZXctY3VzdG9tLXRhZ3MnO1xuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgQ0xSX1NUQUNLX1ZJRVdfRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbXG4gIENsclN0YWNrVmlldyxcbiAgQ2xyU3RhY2tIZWFkZXIsXG4gIENsclN0YWNrQmxvY2ssXG4gIENsclN0YWNrVmlld0N1c3RvbVRhZ3MsXG4gIC8qKlxuICAgKiBVbmRvY3VtZW50ZWQgZXhwZXJpbWVudGFsIGZlYXR1cmU6IGlubGluZSBlZGl0aW5nLlxuICAgKi9cbiAgQ2xyU3RhY2tJbnB1dCxcbiAgQ2xyU3RhY2tTZWxlY3QsXG4gIC8qKlxuICAgKiBFbmQgb2YgdW5kb2N1bWVudGVkIGV4cGVyaW1lbnRhbCBmZWF0dXJlLlxuICAgKi9cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBDbHJJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ0xSX1NUQUNLX1ZJRVdfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtDTFJfU1RBQ0tfVklFV19ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU3RhY2tWaWV3TW9kdWxlIHt9XG4iXX0=