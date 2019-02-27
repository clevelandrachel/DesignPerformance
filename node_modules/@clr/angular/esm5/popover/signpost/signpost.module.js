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
import { ClrCommonPopoverModule } from '../common/popover.module';
import { ClrSignpost } from './signpost';
import { ClrSignpostContent } from './signpost-content';
import { ClrSignpostTrigger } from './signpost-trigger';
/** @type {?} */
export var CLR_SIGNPOST_DIRECTIVES = [ClrSignpost, ClrSignpostContent, ClrSignpostTrigger];
var ClrSignpostModule = /** @class */ (function () {
    function ClrSignpostModule() {
    }
    ClrSignpostModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrCommonPopoverModule, ClrIconModule],
                    declarations: [CLR_SIGNPOST_DIRECTIVES],
                    exports: [CLR_SIGNPOST_DIRECTIVES, ClrConditionalModule],
                },] }
    ];
    return ClrSignpostModule;
}());
export { ClrSignpostModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci9zaWducG9zdC9zaWducG9zdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXhELE1BQU0sS0FBTyx1QkFBdUIsR0FBZ0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7QUFFekc7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxhQUFhLENBQUM7b0JBQzlELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztpQkFDekQ7O0lBQytCLHdCQUFDO0NBQUEsQUFMakMsSUFLaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29uZGl0aW9uYWxNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9jb25kaXRpb25hbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IENsclNpZ25wb3N0IH0gZnJvbSAnLi9zaWducG9zdCc7XG5pbXBvcnQgeyBDbHJTaWducG9zdENvbnRlbnQgfSBmcm9tICcuL3NpZ25wb3N0LWNvbnRlbnQnO1xuaW1wb3J0IHsgQ2xyU2lnbnBvc3RUcmlnZ2VyIH0gZnJvbSAnLi9zaWducG9zdC10cmlnZ2VyJztcblxuZXhwb3J0IGNvbnN0IENMUl9TSUdOUE9TVF9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtDbHJTaWducG9zdCwgQ2xyU2lnbnBvc3RDb250ZW50LCBDbHJTaWducG9zdFRyaWdnZXJdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbHJDb21tb25Qb3BvdmVyTW9kdWxlLCBDbHJJY29uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ0xSX1NJR05QT1NUX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbQ0xSX1NJR05QT1NUX0RJUkVDVElWRVMsIENsckNvbmRpdGlvbmFsTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU2lnbnBvc3RNb2R1bGUge31cbiJdfQ==