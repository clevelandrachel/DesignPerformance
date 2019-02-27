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
var nbTabLinkComponents = 0;
var ClrTabLink = /** @class */ (function () {
    function ClrTabLink(ifActiveService, id, ariaService, el, cfr, viewContainerRef, tabsId) {
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
        var factory = this.cfr.resolveComponentFactory(TemplateRefContainer);
        this.templateRefContainer = this.viewContainerRef.createComponent(factory, 1, undefined, [
            [this.el.nativeElement],
        ]).instance;
    }
    Object.defineProperty(ClrTabLink.prototype, "ariaControls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ariaService.ariaControls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrTabLink.prototype, "tabLinkId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ariaService.ariaLabelledBy;
        },
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.ariaService.ariaLabelledBy = id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrTabLink.prototype.activate = /**
     * @return {?}
     */
    function () {
        this.ifActiveService.current = this.id;
    };
    Object.defineProperty(ClrTabLink.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ifActiveService.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
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
    ClrTabLink.ctorParameters = function () { return [
        { type: IfActiveService },
        { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
        { type: AriaService },
        { type: ElementRef },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: Number, decorators: [{ type: Inject, args: [TABS_ID,] }] }
    ]; };
    ClrTabLink.propDecorators = {
        inOverflow: [{ type: Input, args: ['clrTabLinkInOverflow',] }],
        tabLinkId: [{ type: Input, args: ['id',] }],
        activate: [{ type: HostListener, args: ['click',] }]
    };
    return ClrTabLink;
}());
export { ClrTabLink };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3RhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV6QyxtQkFBbUIsR0FBVyxDQUFDO0FBRW5DO0lBb0JFLG9CQUNTLGVBQWdDLEVBQ1QsRUFBVSxFQUNoQyxXQUF3QixFQUN4QixFQUFjLEVBQ2QsR0FBNkIsRUFDN0IsZ0JBQWtDLEVBQ2xCLE1BQWM7UUFOL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ1QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLG1CQUFtQixFQUFFLENBQUM7U0FDMUQ7Ozs7O1lBS0ssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQUM7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7WUFDdkYsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN4QixDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFJLG9DQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBRUQsVUFDYyxFQUFVO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN2QyxDQUFDOzs7T0FMQTs7OztJQVFELDZCQUFROzs7SUFEUjtRQUVFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFJLDhCQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsV0FBVzt3QkFDbkIsc0JBQXNCLEVBQUUsUUFBUTt3QkFDaEMsb0JBQW9CLEVBQUUsT0FBTzt3QkFDN0Isc0JBQXNCLEVBQUUsY0FBYzt3QkFDdEMsYUFBYSxFQUFFLE1BQU07d0JBQ3JCLGtCQUFrQixFQUFFLGFBQWE7d0JBQ2pDLGtCQUFrQixFQUFFLGFBQWE7d0JBQ2pDLGtCQUFrQixFQUFFLGFBQWE7d0JBQ2pDLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxRQUFRO3FCQUNmO2lCQUNGOzs7O2dCQXZCc0IsZUFBZTs2Q0E4QmpDLE1BQU0sU0FBQyxZQUFZO2dCQTNCZixXQUFXO2dCQVZsQixVQUFVO2dCQUZWLHdCQUF3QjtnQkFNeEIsZ0JBQWdCOzZDQXNDYixNQUFNLFNBQUMsT0FBTzs7OzZCQVZoQixLQUFLLFNBQUMsc0JBQXNCOzRCQWlDNUIsS0FBSyxTQUFDLElBQUk7MkJBS1YsWUFBWSxTQUFDLE9BQU87O0lBUXZCLGlCQUFDO0NBQUEsQUEvREQsSUErREM7U0EvQ1ksVUFBVTs7O0lBQ3JCLGdDQUFtRDs7SUFDbkQsMENBQTJDOztJQUd6QyxxQ0FBdUM7O0lBQ3ZDLHdCQUF3Qzs7SUFDeEMsaUNBQWdDOztJQUNoQyx3QkFBc0I7O0lBQ3RCLHlCQUFxQzs7SUFDckMsc0NBQTBDOztJQUMxQyw0QkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUZfQUNUSVZFX0lELCBJZkFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1hY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlZkNvbnRhaW5lciB9IGZyb20gJy4uLy4uL3V0aWxzL3RlbXBsYXRlLXJlZi90ZW1wbGF0ZS1yZWYtY29udGFpbmVyJztcblxuaW1wb3J0IHsgQXJpYVNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9hcmlhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEFCU19JRCB9IGZyb20gJy4vdGFicy1pZC5wcm92aWRlcic7XG5cbmxldCBuYlRhYkxpbmtDb21wb25lbnRzOiBudW1iZXIgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xyVGFiTGlua10nLFxuICBob3N0OiB7XG4gICAgJ1tpZF0nOiAndGFiTGlua0lkJyxcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nOiAnYWN0aXZlJyxcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJ2ZhbHNlJyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAnYXJpYUNvbnRyb2xzJyxcbiAgICAnW2NsYXNzLmJ0bl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5idG4tbGlua10nOiAnIWluT3ZlcmZsb3cnLFxuICAgICdbY2xhc3MubmF2LWxpbmtdJzogJyFpbk92ZXJmbG93JyxcbiAgICAnW2NsYXNzLm5hdi1pdGVtXSc6ICchaW5PdmVyZmxvdycsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgcm9sZTogJ3RhYicsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsclRhYkxpbmsge1xuICBASW5wdXQoJ2NsclRhYkxpbmtJbk92ZXJmbG93JykgaW5PdmVyZmxvdzogYm9vbGVhbjtcbiAgdGVtcGxhdGVSZWZDb250YWluZXI6IFRlbXBsYXRlUmVmQ29udGFpbmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpZkFjdGl2ZVNlcnZpY2U6IElmQWN0aXZlU2VydmljZSxcbiAgICBASW5qZWN0KElGX0FDVElWRV9JRCkgcHJpdmF0ZSBpZDogbnVtYmVyLFxuICAgIHByaXZhdGUgYXJpYVNlcnZpY2U6IEFyaWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQEluamVjdChUQUJTX0lEKSBwdWJsaWMgdGFic0lkOiBudW1iZXJcbiAgKSB7XG4gICAgaWYgKCF0aGlzLnRhYkxpbmtJZCkge1xuICAgICAgdGhpcy50YWJMaW5rSWQgPSAnY2xyLXRhYi1saW5rLScgKyBuYlRhYkxpbmtDb21wb25lbnRzKys7XG4gICAgfVxuXG4gICAgLy8gVGFiIGxpbmtzIGNhbiBiZSByZW5kZXJlZCBpbiBvbmUgb2YgdHdvIHBsYWNlczogaW4gdGhlIG1haW4gYXJlYSBvciBpbnNpZGUgdGhlIG92ZXJmbG93IGRyb3Bkb3duIG1lbnUuXG4gICAgLy8gSGVyZSwgd2UgY3JlYXRlIGEgY29udGFpbmVyIHNvIHRoYXQgaXRzIHRlbXBsYXRlIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBlbWJlZGRlZFZpZXcgb24gdGhlIGZseS5cbiAgICAvLyBTZWUgVGFic1NlcnZpY2UncyByZW5kZXJWaWV3KCkgbWV0aG9kIGFuZCBob3cgaXQncyB1c2VkIGluIFRhYnMgY2xhc3MgZm9yIGFuIGV4YW1wbGUuXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRlbXBsYXRlUmVmQ29udGFpbmVyKTtcbiAgICB0aGlzLnRlbXBsYXRlUmVmQ29udGFpbmVyID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5LCAxLCB1bmRlZmluZWQsIFtcbiAgICAgIFt0aGlzLmVsLm5hdGl2ZUVsZW1lbnRdLFxuICAgIF0pLmluc3RhbmNlO1xuICB9XG5cbiAgZ2V0IGFyaWFDb250cm9scygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmFyaWFTZXJ2aWNlLmFyaWFDb250cm9scztcbiAgfVxuXG4gIGdldCB0YWJMaW5rSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhU2VydmljZS5hcmlhTGFiZWxsZWRCeTtcbiAgfVxuXG4gIEBJbnB1dCgnaWQnKVxuICBzZXQgdGFiTGlua0lkKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFyaWFTZXJ2aWNlLmFyaWFMYWJlbGxlZEJ5ID0gaWQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuaWZBY3RpdmVTZXJ2aWNlLmN1cnJlbnQgPSB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pZkFjdGl2ZVNlcnZpY2UuY3VycmVudCA9PT0gdGhpcy5pZDtcbiAgfVxufVxuIl19