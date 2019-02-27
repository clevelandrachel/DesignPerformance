/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFactoryResolver, Directive, ElementRef, HostListener, Inject, Input, ViewContainerRef, } from '@angular/core';
import { IF_ACTIVE_ID, IfActiveService } from '../../utils/conditional/if-active.service';
import { TemplateRefContainer } from '../../utils/template-ref/template-ref-container';
import { AriaService } from './providers/aria.service';
import { TABS_ID } from './tabs-id.provider';
/** @type {?} */
let nbTabLinkComponents = 0;
export class ClrTabLink {
    /**
     * @param {?} ifActiveService
     * @param {?} id
     * @param {?} ariaService
     * @param {?} el
     * @param {?} cfr
     * @param {?} viewContainerRef
     * @param {?} tabsId
     */
    constructor(ifActiveService, id, ariaService, el, cfr, viewContainerRef, tabsId) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.ariaService = ariaService;
        this.el = el;
        this.cfr = cfr;
        this.viewContainerRef = viewContainerRef;
        this.tabsId = tabsId;
        if (!this.tabLinkId) {
            this.tabLinkId = 'clr-tab-link-' + nbTabLinkComponents++;
        }
        // Tab links can be rendered in one of two places: in the main area or inside the overflow dropdown menu.
        // Here, we create a container so that its template can be used to create embeddedView on the fly.
        // See TabsService's renderView() method and how it's used in Tabs class for an example.
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(TemplateRefContainer);
        this.templateRefContainer = this.viewContainerRef.createComponent(factory, 1, undefined, [
            [this.el.nativeElement],
        ]).instance;
    }
    /**
     * @return {?}
     */
    get ariaControls() {
        return this.ariaService.ariaControls;
    }
    /**
     * @return {?}
     */
    get tabLinkId() {
        return this.ariaService.ariaLabelledBy;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set tabLinkId(id) {
        this.ariaService.ariaLabelledBy = id;
    }
    /**
     * @return {?}
     */
    activate() {
        this.ifActiveService.current = this.id;
    }
    /**
     * @return {?}
     */
    get active() {
        return this.ifActiveService.current === this.id;
    }
}
ClrTabLink.decorators = [
    { type: Directive, args: [{
                selector: '[clrTabLink]',
                host: {
                    '[id]': 'tabLinkId',
                    '[attr.aria-selected]': 'active',
                    '[attr.aria-hidden]': 'false',
                    '[attr.aria-controls]': 'ariaControls',
                    '[class.btn]': 'true',
                    '[class.btn-link]': '!inOverflow',
                    '[class.nav-link]': '!inOverflow',
                    '[class.nav-item]': '!inOverflow',
                    '[class.active]': 'active',
                    role: 'tab',
                    type: 'button',
                },
            },] }
];
/** @nocollapse */
ClrTabLink.ctorParameters = () => [
    { type: IfActiveService },
    { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
    { type: AriaService },
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: Number, decorators: [{ type: Inject, args: [TABS_ID,] }] }
];
ClrTabLink.propDecorators = {
    inOverflow: [{ type: Input, args: ['clrTabLinkInOverflow',] }],
    tabLinkId: [{ type: Input, args: ['id',] }],
    activate: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    ClrTabLink.prototype.inOverflow;
    /** @type {?} */
    ClrTabLink.prototype.templateRefContainer;
    /** @type {?} */
    ClrTabLink.prototype.ifActiveService;
    /** @type {?} */
    ClrTabLink.prototype.id;
    /** @type {?} */
    ClrTabLink.prototype.ariaService;
    /** @type {?} */
    ClrTabLink.prototype.el;
    /** @type {?} */
    ClrTabLink.prototype.cfr;
    /** @type {?} */
    ClrTabLink.prototype.viewContainerRef;
    /** @type {?} */
    ClrTabLink.prototype.tabsId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3RhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV6QyxtQkFBbUIsR0FBVyxDQUFDO0FBa0JuQyxNQUFNLE9BQU8sVUFBVTs7Ozs7Ozs7OztJQUlyQixZQUNTLGVBQWdDLEVBQ1QsRUFBVSxFQUNoQyxXQUF3QixFQUN4QixFQUFjLEVBQ2QsR0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xCLE1BQWM7UUFOL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ1QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixFQUFFLENBQUM7U0FDMUQ7Ozs7O2NBS0ssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUM7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7WUFDdkYsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN4QixDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osTUFBTSxFQUFFLFdBQVc7b0JBQ25CLHNCQUFzQixFQUFFLFFBQVE7b0JBQ2hDLG9CQUFvQixFQUFFLE9BQU87b0JBQzdCLHNCQUFzQixFQUFFLGNBQWM7b0JBQ3RDLGFBQWEsRUFBRSxNQUFNO29CQUNyQixrQkFBa0IsRUFBRSxhQUFhO29CQUNqQyxrQkFBa0IsRUFBRSxhQUFhO29CQUNqQyxrQkFBa0IsRUFBRSxhQUFhO29CQUNqQyxnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixJQUFJLEVBQUUsS0FBSztvQkFDWCxJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGOzs7O1lBdkJzQixlQUFlO3lDQThCakMsTUFBTSxTQUFDLFlBQVk7WUEzQmYsV0FBVztZQVZsQixVQUFVO1lBRlYsd0JBQXdCO1lBTXhCLGdCQUFnQjt5Q0FzQ2IsTUFBTSxTQUFDLE9BQU87Ozt5QkFWaEIsS0FBSyxTQUFDLHNCQUFzQjt3QkFpQzVCLEtBQUssU0FBQyxJQUFJO3VCQUtWLFlBQVksU0FBQyxPQUFPOzs7O0lBdENyQixnQ0FBbUQ7O0lBQ25ELDBDQUEyQzs7SUFHekMscUNBQXVDOztJQUN2Qyx3QkFBd0M7O0lBQ3hDLGlDQUFnQzs7SUFDaEMsd0JBQXNCOztJQUN0Qix5QkFBcUM7O0lBQ3JDLHNDQUEwQzs7SUFDMUMsNEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElGX0FDVElWRV9JRCwgSWZBY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtYWN0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZWZDb250YWluZXIgfSBmcm9tICcuLi8uLi91dGlscy90ZW1wbGF0ZS1yZWYvdGVtcGxhdGUtcmVmLWNvbnRhaW5lcic7XG5cbmltcG9ydCB7IEFyaWFTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvYXJpYS5zZXJ2aWNlJztcbmltcG9ydCB7IFRBQlNfSUQgfSBmcm9tICcuL3RhYnMtaWQucHJvdmlkZXInO1xuXG5sZXQgbmJUYWJMaW5rQ29tcG9uZW50czogbnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NsclRhYkxpbmtdJyxcbiAgaG9zdDoge1xuICAgICdbaWRdJzogJ3RhYkxpbmtJZCcsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ2FjdGl2ZScsXG4gICAgJ1thdHRyLmFyaWEtaGlkZGVuXSc6ICdmYWxzZScsXG4gICAgJ1thdHRyLmFyaWEtY29udHJvbHNdJzogJ2FyaWFDb250cm9scycsXG4gICAgJ1tjbGFzcy5idG5dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYnRuLWxpbmtdJzogJyFpbk92ZXJmbG93JyxcbiAgICAnW2NsYXNzLm5hdi1saW5rXSc6ICchaW5PdmVyZmxvdycsXG4gICAgJ1tjbGFzcy5uYXYtaXRlbV0nOiAnIWluT3ZlcmZsb3cnLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUnLFxuICAgIHJvbGU6ICd0YWInLFxuICAgIHR5cGU6ICdidXR0b24nLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJUYWJMaW5rIHtcbiAgQElucHV0KCdjbHJUYWJMaW5rSW5PdmVyZmxvdycpIGluT3ZlcmZsb3c6IGJvb2xlYW47XG4gIHRlbXBsYXRlUmVmQ29udGFpbmVyOiBUZW1wbGF0ZVJlZkNvbnRhaW5lcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWZBY3RpdmVTZXJ2aWNlOiBJZkFjdGl2ZVNlcnZpY2UsXG4gICAgQEluamVjdChJRl9BQ1RJVkVfSUQpIHByaXZhdGUgaWQ6IG51bWJlcixcbiAgICBwcml2YXRlIGFyaWFTZXJ2aWNlOiBBcmlhU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoVEFCU19JRCkgcHVibGljIHRhYnNJZDogbnVtYmVyXG4gICkge1xuICAgIGlmICghdGhpcy50YWJMaW5rSWQpIHtcbiAgICAgIHRoaXMudGFiTGlua0lkID0gJ2Nsci10YWItbGluay0nICsgbmJUYWJMaW5rQ29tcG9uZW50cysrO1xuICAgIH1cblxuICAgIC8vIFRhYiBsaW5rcyBjYW4gYmUgcmVuZGVyZWQgaW4gb25lIG9mIHR3byBwbGFjZXM6IGluIHRoZSBtYWluIGFyZWEgb3IgaW5zaWRlIHRoZSBvdmVyZmxvdyBkcm9wZG93biBtZW51LlxuICAgIC8vIEhlcmUsIHdlIGNyZWF0ZSBhIGNvbnRhaW5lciBzbyB0aGF0IGl0cyB0ZW1wbGF0ZSBjYW4gYmUgdXNlZCB0byBjcmVhdGUgZW1iZWRkZWRWaWV3IG9uIHRoZSBmbHkuXG4gICAgLy8gU2VlIFRhYnNTZXJ2aWNlJ3MgcmVuZGVyVmlldygpIG1ldGhvZCBhbmQgaG93IGl0J3MgdXNlZCBpbiBUYWJzIGNsYXNzIGZvciBhbiBleGFtcGxlLlxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShUZW1wbGF0ZVJlZkNvbnRhaW5lcik7XG4gICAgdGhpcy50ZW1wbGF0ZVJlZkNvbnRhaW5lciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgMSwgdW5kZWZpbmVkLCBbXG4gICAgICBbdGhpcy5lbC5uYXRpdmVFbGVtZW50XSxcbiAgICBdKS5pbnN0YW5jZTtcbiAgfVxuXG4gIGdldCBhcmlhQ29udHJvbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhU2VydmljZS5hcmlhQ29udHJvbHM7XG4gIH1cblxuICBnZXQgdGFiTGlua0lkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXJpYVNlcnZpY2UuYXJpYUxhYmVsbGVkQnk7XG4gIH1cblxuICBASW5wdXQoJ2lkJylcbiAgc2V0IHRhYkxpbmtJZChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcmlhU2VydmljZS5hcmlhTGFiZWxsZWRCeSA9IGlkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmlmQWN0aXZlU2VydmljZS5jdXJyZW50ID0gdGhpcy5pZDtcbiAgfVxuXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZBY3RpdmVTZXJ2aWNlLmN1cnJlbnQgPT09IHRoaXMuaWQ7XG4gIH1cbn1cbiJdfQ==