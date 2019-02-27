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
import { ClrTooltip } from './tooltip';
import { ClrTooltipContent } from './tooltip-content';
import { ClrTooltipTrigger } from './tooltip-trigger';
/** @type {?} */
export var CLR_TOOLTIP_DIRECTIVES = [ClrTooltip, ClrTooltipTrigger, ClrTooltipContent];
var ClrTooltipModule = /** @class */ (function () {
    function ClrTooltipModule() {
    }
    ClrTooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrCommonPopoverModule],
                    declarations: [CLR_TOOLTIP_DIRECTIVES],
                    exports: [CLR_TOOLTIP_DIRECTIVES, ClrConditionalModule, ClrIconModule],
                },] }
    ];
    return ClrTooltipModule;
}());
export { ClrTooltipModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJwb3BvdmVyL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXRELE1BQU0sS0FBTyxzQkFBc0IsR0FBZ0IsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7QUFFckc7SUFBQTtJQUsrQixDQUFDOztnQkFML0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxzQkFBc0IsQ0FBQztvQkFDL0MsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLGFBQWEsQ0FBQztpQkFDdkU7O0lBQzhCLHVCQUFDO0NBQUEsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29uZGl0aW9uYWxNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9jb25kaXRpb25hbC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IENsclRvb2x0aXAgfSBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQ2xyVG9vbHRpcENvbnRlbnQgfSBmcm9tICcuL3Rvb2x0aXAtY29udGVudCc7XG5pbXBvcnQgeyBDbHJUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4vdG9vbHRpcC10cmlnZ2VyJztcblxuZXhwb3J0IGNvbnN0IENMUl9UT09MVElQX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW0NsclRvb2x0aXAsIENsclRvb2x0aXBUcmlnZ2VyLCBDbHJUb29sdGlwQ29udGVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENsckNvbW1vblBvcG92ZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfVE9PTFRJUF9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9UT09MVElQX0RJUkVDVElWRVMsIENsckNvbmRpdGlvbmFsTW9kdWxlLCBDbHJJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVG9vbHRpcE1vZHVsZSB7fVxuIl19