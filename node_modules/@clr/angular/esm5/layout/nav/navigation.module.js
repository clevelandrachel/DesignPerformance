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
import { ClrDropdownModule } from '../../popover/dropdown/dropdown.module';
import { MainContainerWillyWonka } from './chocolate/main-container-willy-wonka';
import { NavDetectionOompaLoompa } from './chocolate/nav-detection-oompa-loompa';
import { ClrHeader } from './header';
import { ClrNavLevel } from './nav-level';
/** @type {?} */
export var CLR_NAVIGATION_DIRECTIVES = [
    ClrHeader,
    ClrNavLevel,
    NavDetectionOompaLoompa,
    MainContainerWillyWonka,
];
var ClrNavigationModule = /** @class */ (function () {
    function ClrNavigationModule() {
    }
    ClrNavigationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrIconModule, ClrDropdownModule],
                    declarations: [CLR_NAVIGATION_DIRECTIVES],
                    exports: [CLR_NAVIGATION_DIRECTIVES],
                },] }
    ];
    return ClrNavigationModule;
}());
export { ClrNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvbmF2L25hdmlnYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRTFDLE1BQU0sS0FBTyx5QkFBeUIsR0FBZ0I7SUFDcEQsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCO0FBRUQ7SUFBQTtJQUtrQyxDQUFDOztnQkFMbEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3pELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDckM7O0lBQ2lDLDBCQUFDO0NBQUEsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1haW5Db250YWluZXJXaWxseVdvbmthIH0gZnJvbSAnLi9jaG9jb2xhdGUvbWFpbi1jb250YWluZXItd2lsbHktd29ua2EnO1xuaW1wb3J0IHsgTmF2RGV0ZWN0aW9uT29tcGFMb29tcGEgfSBmcm9tICcuL2Nob2NvbGF0ZS9uYXYtZGV0ZWN0aW9uLW9vbXBhLWxvb21wYSc7XG5pbXBvcnQgeyBDbHJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBDbHJOYXZMZXZlbCB9IGZyb20gJy4vbmF2LWxldmVsJztcblxuZXhwb3J0IGNvbnN0IENMUl9OQVZJR0FUSU9OX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBDbHJIZWFkZXIsXG4gIENsck5hdkxldmVsLFxuICBOYXZEZXRlY3Rpb25Pb21wYUxvb21wYSxcbiAgTWFpbkNvbnRhaW5lcldpbGx5V29ua2EsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbHJJY29uTW9kdWxlLCBDbHJEcm9wZG93bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NMUl9OQVZJR0FUSU9OX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbQ0xSX05BVklHQVRJT05fRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIENsck5hdmlnYXRpb25Nb2R1bGUge31cbiJdfQ==