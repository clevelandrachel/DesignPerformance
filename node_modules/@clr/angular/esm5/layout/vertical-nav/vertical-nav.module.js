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
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';
import { ClrVerticalNav } from './vertical-nav';
import { ClrVerticalNavGroup } from './vertical-nav-group';
import { ClrVerticalNavGroupChildren } from './vertical-nav-group-children';
import { ClrVerticalNavIcon } from './vertical-nav-icon';
import { ClrVerticalNavLink } from './vertical-nav-link';
/** @type {?} */
export var CLR_VERTICAL_NAV_DIRECTIVES = [
    ClrVerticalNav,
    ClrVerticalNavLink,
    ClrVerticalNavGroup,
    ClrVerticalNavGroupChildren,
    ClrVerticalNavIcon,
];
var ClrVerticalNavModule = /** @class */ (function () {
    function ClrVerticalNavModule() {
    }
    ClrVerticalNavModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrIconModule, ClrIfExpandModule],
                    declarations: [CLR_VERTICAL_NAV_DIRECTIVES],
                    exports: [CLR_VERTICAL_NAV_DIRECTIVES, ClrIfExpandModule, ClrIconModule],
                },] }
    ];
    return ClrVerticalNavModule;
}());
export { ClrVerticalNavModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxheW91dC92ZXJ0aWNhbC1uYXYvdmVydGljYWwtbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV6RCxNQUFNLEtBQU8sMkJBQTJCLEdBQWdCO0lBQ3RELGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7Q0FDbkI7QUFFRDtJQUFBO0lBS21DLENBQUM7O2dCQUxuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztvQkFDekQsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztpQkFDekU7O0lBQ2tDLDJCQUFDO0NBQUEsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xySWZFeHBhbmRNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9leHBhbmQvaWYtZXhwYW5kLm1vZHVsZSc7XG5cbmltcG9ydCB7IENsclZlcnRpY2FsTmF2IH0gZnJvbSAnLi92ZXJ0aWNhbC1uYXYnO1xuaW1wb3J0IHsgQ2xyVmVydGljYWxOYXZHcm91cCB9IGZyb20gJy4vdmVydGljYWwtbmF2LWdyb3VwJztcbmltcG9ydCB7IENsclZlcnRpY2FsTmF2R3JvdXBDaGlsZHJlbiB9IGZyb20gJy4vdmVydGljYWwtbmF2LWdyb3VwLWNoaWxkcmVuJztcbmltcG9ydCB7IENsclZlcnRpY2FsTmF2SWNvbiB9IGZyb20gJy4vdmVydGljYWwtbmF2LWljb24nO1xuaW1wb3J0IHsgQ2xyVmVydGljYWxOYXZMaW5rIH0gZnJvbSAnLi92ZXJ0aWNhbC1uYXYtbGluayc7XG5cbmV4cG9ydCBjb25zdCBDTFJfVkVSVElDQUxfTkFWX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICBDbHJWZXJ0aWNhbE5hdixcbiAgQ2xyVmVydGljYWxOYXZMaW5rLFxuICBDbHJWZXJ0aWNhbE5hdkdyb3VwLFxuICBDbHJWZXJ0aWNhbE5hdkdyb3VwQ2hpbGRyZW4sXG4gIENsclZlcnRpY2FsTmF2SWNvbixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENsckljb25Nb2R1bGUsIENscklmRXhwYW5kTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ0xSX1ZFUlRJQ0FMX05BVl9ESVJFQ1RJVkVTXSxcbiAgZXhwb3J0czogW0NMUl9WRVJUSUNBTF9OQVZfRElSRUNUSVZFUywgQ2xySWZFeHBhbmRNb2R1bGUsIENsckljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJWZXJ0aWNhbE5hdk1vZHVsZSB7fVxuIl19