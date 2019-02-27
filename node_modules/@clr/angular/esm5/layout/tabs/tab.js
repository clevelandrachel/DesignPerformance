/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Inject } from '@angular/core';
import { IF_ACTIVE_ID, IF_ACTIVE_ID_PROVIDER, IfActiveService } from '../../utils/conditional/if-active.service';
import { AriaService } from './providers/aria.service';
import { TabsService } from './providers/tabs.service';
import { ClrTabContent } from './tab-content';
import { ClrTabLink } from './tab-link.directive';
var ClrTab = /** @class */ (function () {
    function ClrTab(ifActiveService, id, tabsService) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.tabsService = tabsService;
        tabsService.register(this);
    }
    /**
     * @return {?}
     */
    ClrTab.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabsService.unregister(this);
    };
    Object.defineProperty(ClrTab.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ifActiveService.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
    ClrTab.decorators = [
        { type: Component, args: [{
                    selector: 'clr-tab',
                    template: "\n        <ng-content></ng-content>\n    ",
                    providers: [IF_ACTIVE_ID_PROVIDER, AriaService]
                }] }
    ];
    /** @nocollapse */
    ClrTab.ctorParameters = function () { return [
        { type: IfActiveService },
        { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
        { type: TabsService }
    ]; };
    ClrTab.propDecorators = {
        tabLink: [{ type: ContentChild, args: [ClrTabLink,] }],
        tabContent: [{ type: ContentChild, args: [ClrTabContent,] }]
    };
    return ClrTab;
}());
export { ClrTab };
if (false) {
    /** @type {?} */
    ClrTab.prototype.tabLink;
    /** @type {?} */
    ClrTab.prototype.tabContent;
    /** @type {?} */
    ClrTab.prototype.ifActiveService;
    /** @type {?} */
    ClrTab.prototype.id;
    /** @type {?} */
    ClrTab.prototype.tabsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3RhYnMvdGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWpILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFXRSxnQkFDUyxlQUFnQyxFQUNWLEVBQVUsRUFDL0IsV0FBd0I7UUFGekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ1YsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw0QkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQUksMEJBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJDQUVQO29CQUNILFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQztpQkFDaEQ7Ozs7Z0JBYjZDLGVBQWU7NkNBb0J4RCxNQUFNLFNBQUMsWUFBWTtnQkFqQmYsV0FBVzs7OzBCQVlqQixZQUFZLFNBQUMsVUFBVTs2QkFDdkIsWUFBWSxTQUFDLGFBQWE7O0lBaUI3QixhQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FuQlksTUFBTTs7O0lBQ2pCLHlCQUE4Qzs7SUFDOUMsNEJBQXVEOztJQUdyRCxpQ0FBdUM7O0lBQ3ZDLG9CQUF1Qzs7SUFDdkMsNkJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJRl9BQ1RJVkVfSUQsIElGX0FDVElWRV9JRF9QUk9WSURFUiwgSWZBY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtYWN0aXZlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBcmlhU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2FyaWEuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3RhYnMuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudCc7XG5pbXBvcnQgeyBDbHJUYWJMaW5rIH0gZnJvbSAnLi90YWItbGluay5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItdGFiJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG4gIHByb3ZpZGVyczogW0lGX0FDVElWRV9JRF9QUk9WSURFUiwgQXJpYVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJUYWIge1xuICBAQ29udGVudENoaWxkKENsclRhYkxpbmspIHRhYkxpbms6IENsclRhYkxpbms7XG4gIEBDb250ZW50Q2hpbGQoQ2xyVGFiQ29udGVudCkgdGFiQ29udGVudDogQ2xyVGFiQ29udGVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWZBY3RpdmVTZXJ2aWNlOiBJZkFjdGl2ZVNlcnZpY2UsXG4gICAgQEluamVjdChJRl9BQ1RJVkVfSUQpIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IFRhYnNTZXJ2aWNlXG4gICkge1xuICAgIHRhYnNTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50YWJzU2VydmljZS51bnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pZkFjdGl2ZVNlcnZpY2UuY3VycmVudCA9PT0gdGhpcy5pZDtcbiAgfVxufVxuIl19