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
export const CLR_STACK_VIEW_DIRECTIVES = [
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
export class ClrStackViewModule {
}
ClrStackViewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ClrIconModule],
                declarations: [CLR_STACK_VIEW_DIRECTIVES],
                exports: [CLR_STACK_VIEW_DIRECTIVES],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL3N0YWNrLXZpZXcvc3RhY2stdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV2RCxNQUFNLE9BQU8seUJBQXlCLEdBQWdCO0lBQ3BELFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qjs7T0FFRztJQUNILGFBQWE7SUFDYixjQUFjO0NBSWY7QUFPRCxNQUFNLE9BQU8sa0JBQWtCOzs7WUFMOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDO2dCQUNuRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENsclN0YWNrQmxvY2sgfSBmcm9tICcuL3N0YWNrLWJsb2NrJztcbmltcG9ydCB7IENsclN0YWNrSGVhZGVyIH0gZnJvbSAnLi9zdGFjay1oZWFkZXInO1xuaW1wb3J0IHsgQ2xyU3RhY2tJbnB1dCB9IGZyb20gJy4vc3RhY2staW5wdXQnO1xuaW1wb3J0IHsgQ2xyU3RhY2tTZWxlY3QgfSBmcm9tICcuL3N0YWNrLXNlbGVjdCc7XG5pbXBvcnQgeyBDbHJTdGFja1ZpZXcgfSBmcm9tICcuL3N0YWNrLXZpZXcnO1xuaW1wb3J0IHsgQ2xyU3RhY2tWaWV3Q3VzdG9tVGFncyB9IGZyb20gJy4vc3RhY2stdmlldy1jdXN0b20tdGFncyc7XG5pbXBvcnQgeyBDbHJJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBDTFJfU1RBQ0tfVklFV19ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtcbiAgQ2xyU3RhY2tWaWV3LFxuICBDbHJTdGFja0hlYWRlcixcbiAgQ2xyU3RhY2tCbG9jayxcbiAgQ2xyU3RhY2tWaWV3Q3VzdG9tVGFncyxcbiAgLyoqXG4gICAqIFVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZTogaW5saW5lIGVkaXRpbmcuXG4gICAqL1xuICBDbHJTdGFja0lucHV0LFxuICBDbHJTdGFja1NlbGVjdCxcbiAgLyoqXG4gICAqIEVuZCBvZiB1bmRvY3VtZW50ZWQgZXhwZXJpbWVudGFsIGZlYXR1cmUuXG4gICAqL1xuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIENsckljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfU1RBQ0tfVklFV19ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9TVEFDS19WSUVXX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJTdGFja1ZpZXdNb2R1bGUge31cbiJdfQ==