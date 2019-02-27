/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { LayoutService } from './providers/layout.service';
import { NgControlService } from './providers/ng-control.service';
export class ClrLabel {
    /**
     * @param {?} controlIdService
     * @param {?} layoutService
     * @param {?} ngControlService
     * @param {?} renderer
     * @param {?} el
     */
    constructor(controlIdService, layoutService, ngControlService, renderer, el) {
        this.controlIdService = controlIdService;
        this.layoutService = layoutService;
        this.ngControlService = ngControlService;
        this.renderer = renderer;
        this.el = el;
        this.subscriptions = [];
        this.enableGrid = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Only add the clr-control-label if it is inside a control container
        if (this.controlIdService || this.ngControlService) {
            this.renderer.addClass(this.el.nativeElement, 'clr-control-label');
        }
        // Only set the grid column classes if we are in the right context and if they aren't already set
        if (this.enableGrid &&
            this.layoutService &&
            !this.layoutService.isVertical() &&
            this.el.nativeElement &&
            this.el.nativeElement.className.indexOf('clr-col') < 0) {
            this.renderer.addClass(this.el.nativeElement, 'clr-col-12');
            this.renderer.addClass(this.el.nativeElement, 'clr-col-md-2');
        }
        if (this.controlIdService && !this.forAttr) {
            this.subscriptions.push(this.controlIdService.idChange.subscribe(id => (this.forAttr = id)));
        }
    }
    /**
     * @return {?}
     */
    disableGrid() {
        this.enableGrid = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
ClrLabel.decorators = [
    { type: Directive, args: [{ selector: 'label' },] }
];
/** @nocollapse */
ClrLabel.ctorParameters = () => [
    { type: ControlIdService, decorators: [{ type: Optional }] },
    { type: LayoutService, decorators: [{ type: Optional }] },
    { type: NgControlService, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef }
];
ClrLabel.propDecorators = {
    forAttr: [{ type: HostBinding, args: ['attr.for',] }, { type: Input, args: ['for',] }]
};
if (false) {
    /** @type {?} */
    ClrLabel.prototype.forAttr;
    /** @type {?} */
    ClrLabel.prototype.subscriptions;
    /** @type {?} */
    ClrLabel.prototype.enableGrid;
    /** @type {?} */
    ClrLabel.prototype.controlIdService;
    /** @type {?} */
    ClrLabel.prototype.layoutService;
    /** @type {?} */
    ClrLabel.prototype.ngControlService;
    /** @type {?} */
    ClrLabel.prototype.renderer;
    /** @type {?} */
    ClrLabel.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jb21tb24vbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHbEUsTUFBTSxPQUFPLFFBQVE7Ozs7Ozs7O0lBQ25CLFlBQ3NCLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixnQkFBa0MsRUFDOUMsUUFBbUIsRUFDbkIsRUFBYztRQUpGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFPaEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFQdkIsQ0FBQzs7OztJQVNKLFFBQVE7UUFDTixxRUFBcUU7UUFDckUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDcEU7UUFDRCxpR0FBaUc7UUFDakcsSUFDRSxJQUFJLENBQUMsVUFBVTtZQUNmLElBQUksQ0FBQyxhQUFhO1lBQ2xCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUN0RDtZQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQTVDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFOzs7O1lBSnZCLGdCQUFnQix1QkFPcEIsUUFBUTtZQU5KLGFBQWEsdUJBT2pCLFFBQVE7WUFOSixnQkFBZ0IsdUJBT3BCLFFBQVE7WUFab0UsU0FBUztZQUF0RSxVQUFVOzs7c0JBaUIzQixXQUFXLFNBQUMsVUFBVSxjQUN0QixLQUFLLFNBQUMsS0FBSzs7OztJQURaLDJCQUVnQjs7SUFFaEIsaUNBQTJDOztJQUMzQyw4QkFBMEI7O0lBWnhCLG9DQUFzRDs7SUFDdEQsaUNBQWdEOztJQUNoRCxvQ0FBc0Q7O0lBQ3RELDRCQUEyQjs7SUFDM0Isc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udHJvbElkU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2NvbnRyb2wtaWQuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDb250cm9sU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL25nLWNvbnRyb2wuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2xhYmVsJyB9KVxuZXhwb3J0IGNsYXNzIENsckxhYmVsIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyb2xJZFNlcnZpY2U6IENvbnRyb2xJZFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sU2VydmljZTogTmdDb250cm9sU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmZvcicpXG4gIEBJbnB1dCgnZm9yJylcbiAgZm9yQXR0cjogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBlbmFibGVHcmlkID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBPbmx5IGFkZCB0aGUgY2xyLWNvbnRyb2wtbGFiZWwgaWYgaXQgaXMgaW5zaWRlIGEgY29udHJvbCBjb250YWluZXJcbiAgICBpZiAodGhpcy5jb250cm9sSWRTZXJ2aWNlIHx8IHRoaXMubmdDb250cm9sU2VydmljZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbHItY29udHJvbC1sYWJlbCcpO1xuICAgIH1cbiAgICAvLyBPbmx5IHNldCB0aGUgZ3JpZCBjb2x1bW4gY2xhc3NlcyBpZiB3ZSBhcmUgaW4gdGhlIHJpZ2h0IGNvbnRleHQgYW5kIGlmIHRoZXkgYXJlbid0IGFscmVhZHkgc2V0XG4gICAgaWYgKFxuICAgICAgdGhpcy5lbmFibGVHcmlkICYmXG4gICAgICB0aGlzLmxheW91dFNlcnZpY2UgJiZcbiAgICAgICF0aGlzLmxheW91dFNlcnZpY2UuaXNWZXJ0aWNhbCgpICYmXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZignY2xyLWNvbCcpIDwgMFxuICAgICkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdjbHItY29sLTEyJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Nsci1jb2wtbWQtMicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250cm9sSWRTZXJ2aWNlICYmICF0aGlzLmZvckF0dHIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuY29udHJvbElkU2VydmljZS5pZENoYW5nZS5zdWJzY3JpYmUoaWQgPT4gKHRoaXMuZm9yQXR0ciA9IGlkKSkpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2FibGVHcmlkKCkge1xuICAgIHRoaXMuZW5hYmxlR3JpZCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19