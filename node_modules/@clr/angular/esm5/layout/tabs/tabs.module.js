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
import { ClrCommonPopoverModule } from '../../popover/common/popover.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrTemplateRefModule } from '../../utils/template-ref/template-ref.module';
import { ActiveOompaLoompa } from './chocolate/active-oompa-loompa';
import { TabsWillyWonka } from './chocolate/tabs-willy-wonka';
import { ClrTab } from './tab';
import { ClrTabContent } from './tab-content';
import { ClrTabLink } from './tab-link.directive';
import { ClrTabOverflowContent } from './tab-overflow-content';
import { ClrTabs } from './tabs';
/** @type {?} */
export var CLR_TABS_DIRECTIVES = [
    ClrTabContent,
    ClrTab,
    ClrTabs,
    ClrTabOverflowContent,
    ClrTabLink,
    TabsWillyWonka,
    ActiveOompaLoompa,
];
var ClrTabsModule = /** @class */ (function () {
    function ClrTabsModule() {
    }
    ClrTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrCommonPopoverModule, ClrConditionalModule, ClrIconModule, ClrTemplateRefModule],
                    declarations: [CLR_TABS_DIRECTIVES],
                    exports: [CLR_TABS_DIRECTIVES, ClrConditionalModule],
                },] }
    ];
    return ClrTabsModule;
}());
export { ClrTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFFakMsTUFBTSxLQUFPLG1CQUFtQixHQUFnQjtJQUM5QyxhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7Q0FDbEI7QUFFRDtJQUFBO0lBSzRCLENBQUM7O2dCQUw1QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztvQkFDMUcsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDO2lCQUNyRDs7SUFDMkIsb0JBQUM7Q0FBQSxBQUw3QixJQUs2QjtTQUFoQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uLy4uL3BvcG92ZXIvY29tbW9uL3BvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IENsckNvbmRpdGlvbmFsTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvY29uZGl0aW9uYWwubW9kdWxlJztcbmltcG9ydCB7IENsclRlbXBsYXRlUmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVtcGxhdGUtcmVmL3RlbXBsYXRlLXJlZi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBY3RpdmVPb21wYUxvb21wYSB9IGZyb20gJy4vY2hvY29sYXRlL2FjdGl2ZS1vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgVGFic1dpbGx5V29ua2EgfSBmcm9tICcuL2Nob2NvbGF0ZS90YWJzLXdpbGx5LXdvbmthJztcbmltcG9ydCB7IENsclRhYiB9IGZyb20gJy4vdGFiJztcbmltcG9ydCB7IENsclRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50JztcbmltcG9ydCB7IENsclRhYkxpbmsgfSBmcm9tICcuL3RhYi1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDbHJUYWJPdmVyZmxvd0NvbnRlbnQgfSBmcm9tICcuL3RhYi1vdmVyZmxvdy1jb250ZW50JztcbmltcG9ydCB7IENsclRhYnMgfSBmcm9tICcuL3RhYnMnO1xuXG5leHBvcnQgY29uc3QgQ0xSX1RBQlNfRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbXG4gIENsclRhYkNvbnRlbnQsXG4gIENsclRhYixcbiAgQ2xyVGFicyxcbiAgQ2xyVGFiT3ZlcmZsb3dDb250ZW50LFxuICBDbHJUYWJMaW5rLFxuICBUYWJzV2lsbHlXb25rYSxcbiAgQWN0aXZlT29tcGFMb29tcGEsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbHJDb21tb25Qb3BvdmVyTW9kdWxlLCBDbHJDb25kaXRpb25hbE1vZHVsZSwgQ2xySWNvbk1vZHVsZSwgQ2xyVGVtcGxhdGVSZWZNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfVEFCU19ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9UQUJTX0RJUkVDVElWRVMsIENsckNvbmRpdGlvbmFsTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVGFic01vZHVsZSB7fVxuIl19