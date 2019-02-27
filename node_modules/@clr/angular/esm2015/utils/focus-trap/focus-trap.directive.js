/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Injector, PLATFORM_ID, Renderer2, } from '@angular/core';
import { FocusTrapTracker } from './focus-trap-tracker.service';
export class FocusTrapDirective {
    /**
     * @param {?} el
     * @param {?} injector
     * @param {?} focusTrapsTracker
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(el, injector, focusTrapsTracker, renderer, platformId) {
        this.el = el;
        this.injector = injector;
        this.focusTrapsTracker = focusTrapsTracker;
        this.renderer = renderer;
        this.platformId = platformId;
        this.document = this.injector.get(DOCUMENT);
        this.focusTrapsTracker.current = this;
        this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusIn(event) {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        if (this.focusTrapsTracker.current === this && event.target && !nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    createFocusableOffScreenEl() {
        // Not using Renderer2's createElement method because that leads to DOM leakage.
        // https://github.com/angular/angular/issues/26954
        /** @type {?} */
        const offScreenSpan = this.document.createElement('span');
        this.renderer.setAttribute(offScreenSpan, 'tabindex', '0');
        this.renderer.addClass(offScreenSpan, 'offscreen-focus-rebounder');
        return offScreenSpan;
    }
    /**
     * @return {?}
     */
    addReboundEls() {
        // We will add these focus rebounding elements only in the following conditions:
        // 1. It should be running inside browser platform as it accesses document.body element
        // 2. We should NOT add them more than once. Hence, we are counting a number of focus trappers
        //    and only add on the first focus trapper.
        if (isPlatformBrowser(this.platformId) && this.focusTrapsTracker.nbFocusTrappers === 1) {
            this.topReboundEl = this.createFocusableOffScreenEl();
            this.bottomReboundEl = this.createFocusableOffScreenEl();
            // Add reboundBeforeTrapEl to the document body as the first child
            this.renderer.insertBefore(this.document.body, this.topReboundEl, this.document.body.firstChild);
            // Add reboundAfterTrapEl to the document body as the last child
            this.renderer.appendChild(this.document.body, this.bottomReboundEl);
        }
    }
    /**
     * @return {?}
     */
    removeReboundEls() {
        if (isPlatformBrowser(this.platformId) &&
            this.focusTrapsTracker.nbFocusTrappers === 1 &&
            this.topReboundEl &&
            this.bottomReboundEl) {
            this.renderer.removeChild(this.document.body, this.topReboundEl);
            this.renderer.removeChild(this.document.body, this.bottomReboundEl);
            // These are here to to make sure that
            // we completely delete all traces of the removed DOM objects.
            delete this.topReboundEl;
            delete this.bottomReboundEl;
        }
    }
    /**
     * @return {?}
     */
    setPreviousFocus() {
        if (this.previousActiveElement && this.previousActiveElement.focus) {
            this.previousActiveElement.focus();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.previousActiveElement = (/** @type {?} */ (this.document.activeElement));
        }
        this.addReboundEls();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeReboundEls();
        this.setPreviousFocus();
        this.focusTrapsTracker.activatePreviousTrapper();
    }
}
FocusTrapDirective.decorators = [
    { type: Directive, args: [{ selector: '[clrFocusTrap]' },] }
];
/** @nocollapse */
FocusTrapDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: FocusTrapTracker },
    { type: Renderer2 },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
FocusTrapDirective.propDecorators = {
    onFocusIn: [{ type: HostListener, args: ['document:focusin', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    FocusTrapDirective.prototype.previousActiveElement;
    /** @type {?} */
    FocusTrapDirective.prototype.document;
    /** @type {?} */
    FocusTrapDirective.prototype.topReboundEl;
    /** @type {?} */
    FocusTrapDirective.prototype.bottomReboundEl;
    /** @type {?} */
    FocusTrapDirective.prototype.el;
    /** @type {?} */
    FocusTrapDirective.prototype.injector;
    /** @type {?} */
    FocusTrapDirective.prototype.focusTrapsTracker;
    /** @type {?} */
    FocusTrapDirective.prototype.renderer;
    /** @type {?} */
    FocusTrapDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9mb2N1cy10cmFwL2ZvY3VzLXRyYXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR2hFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBTzdCLFlBQ1UsRUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGlCQUFtQyxFQUNuQyxRQUFtQixFQUNFLFVBQWtCO1FBSnZDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNFLGVBQVUsR0FBVixVQUFVLENBQVE7UUFFL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBVTs7Y0FDWixhQUFhLEdBQWdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUV4RCxJQUFJLElBQUksQ0FB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O1lBM0ZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztZQVh2QyxVQUFVO1lBR1YsUUFBUTtZQU1ELGdCQUFnQjtZQUh2QixTQUFTO1lBa0JrQyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVzs7O3dCQVFwQixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFuQjVDLG1EQUFtQzs7SUFDbkMsc0NBQTJCOztJQUUzQiwwQ0FBMEI7O0lBQzFCLDZDQUE2Qjs7SUFHM0IsZ0NBQXNCOztJQUN0QixzQ0FBMEI7O0lBQzFCLCtDQUEyQzs7SUFDM0Msc0NBQTJCOztJQUMzQix3Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvY3VzVHJhcFRyYWNrZXIgfSBmcm9tICcuL2ZvY3VzLXRyYXAtdHJhY2tlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsckZvY3VzVHJhcF0nIH0pXG5leHBvcnQgY2xhc3MgRm9jdXNUcmFwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgcHJpdmF0ZSB0b3BSZWJvdW5kRWw6IGFueTtcbiAgcHJpdmF0ZSBib3R0b21SZWJvdW5kRWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZm9jdXNUcmFwc1RyYWNrZXI6IEZvY3VzVHJhcFRyYWNrZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSB0aGlzLmluamVjdG9yLmdldChET0NVTUVOVCk7XG4gICAgdGhpcy5mb2N1c1RyYXBzVHJhY2tlci5jdXJyZW50ID0gdGhpcztcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RhYmluZGV4JywgJzAnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmZvY3VzaW4nLCBbJyRldmVudCddKVxuICBvbkZvY3VzSW4oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwc1RyYWNrZXIuY3VycmVudCA9PT0gdGhpcyAmJiBldmVudC50YXJnZXQgJiYgIW5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgbmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9jdXNhYmxlT2ZmU2NyZWVuRWwoKTogYW55IHtcbiAgICAvLyBOb3QgdXNpbmcgUmVuZGVyZXIyJ3MgY3JlYXRlRWxlbWVudCBtZXRob2QgYmVjYXVzZSB0aGF0IGxlYWRzIHRvIERPTSBsZWFrYWdlLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI2OTU0XG4gICAgY29uc3Qgb2ZmU2NyZWVuU3BhbiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG9mZlNjcmVlblNwYW4sICd0YWJpbmRleCcsICcwJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhvZmZTY3JlZW5TcGFuLCAnb2Zmc2NyZWVuLWZvY3VzLXJlYm91bmRlcicpO1xuXG4gICAgcmV0dXJuIG9mZlNjcmVlblNwYW47XG4gIH1cblxuICBwcml2YXRlIGFkZFJlYm91bmRFbHMoKSB7XG4gICAgLy8gV2Ugd2lsbCBhZGQgdGhlc2UgZm9jdXMgcmVib3VuZGluZyBlbGVtZW50cyBvbmx5IGluIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAvLyAxLiBJdCBzaG91bGQgYmUgcnVubmluZyBpbnNpZGUgYnJvd3NlciBwbGF0Zm9ybSBhcyBpdCBhY2Nlc3NlcyBkb2N1bWVudC5ib2R5IGVsZW1lbnRcbiAgICAvLyAyLiBXZSBzaG91bGQgTk9UIGFkZCB0aGVtIG1vcmUgdGhhbiBvbmNlLiBIZW5jZSwgd2UgYXJlIGNvdW50aW5nIGEgbnVtYmVyIG9mIGZvY3VzIHRyYXBwZXJzXG4gICAgLy8gICAgYW5kIG9ubHkgYWRkIG9uIHRoZSBmaXJzdCBmb2N1cyB0cmFwcGVyLlxuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5mb2N1c1RyYXBzVHJhY2tlci5uYkZvY3VzVHJhcHBlcnMgPT09IDEpIHtcbiAgICAgIHRoaXMudG9wUmVib3VuZEVsID0gdGhpcy5jcmVhdGVGb2N1c2FibGVPZmZTY3JlZW5FbCgpO1xuICAgICAgdGhpcy5ib3R0b21SZWJvdW5kRWwgPSB0aGlzLmNyZWF0ZUZvY3VzYWJsZU9mZlNjcmVlbkVsKCk7XG4gICAgICAvLyBBZGQgcmVib3VuZEJlZm9yZVRyYXBFbCB0byB0aGUgZG9jdW1lbnQgYm9keSBhcyB0aGUgZmlyc3QgY2hpbGRcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy50b3BSZWJvdW5kRWwsIHRoaXMuZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgIC8vIEFkZCByZWJvdW5kQWZ0ZXJUcmFwRWwgdG8gdGhlIGRvY3VtZW50IGJvZHkgYXMgdGhlIGxhc3QgY2hpbGRcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmJvdHRvbVJlYm91bmRFbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVSZWJvdW5kRWxzKCkge1xuICAgIGlmIChcbiAgICAgIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiZcbiAgICAgIHRoaXMuZm9jdXNUcmFwc1RyYWNrZXIubmJGb2N1c1RyYXBwZXJzID09PSAxICYmXG4gICAgICB0aGlzLnRvcFJlYm91bmRFbCAmJlxuICAgICAgdGhpcy5ib3R0b21SZWJvdW5kRWxcbiAgICApIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLnRvcFJlYm91bmRFbCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5ib3R0b21SZWJvdW5kRWwpO1xuXG4gICAgICAvLyBUaGVzZSBhcmUgaGVyZSB0byB0byBtYWtlIHN1cmUgdGhhdFxuICAgICAgLy8gd2UgY29tcGxldGVseSBkZWxldGUgYWxsIHRyYWNlcyBvZiB0aGUgcmVtb3ZlZCBET00gb2JqZWN0cy5cbiAgICAgIGRlbGV0ZSB0aGlzLnRvcFJlYm91bmRFbDtcbiAgICAgIGRlbGV0ZSB0aGlzLmJvdHRvbVJlYm91bmRFbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0UHJldmlvdXNGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgdGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMpIHtcbiAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRSZWJvdW5kRWxzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbW92ZVJlYm91bmRFbHMoKTtcbiAgICB0aGlzLnNldFByZXZpb3VzRm9jdXMoKTtcbiAgICB0aGlzLmZvY3VzVHJhcHNUcmFja2VyLmFjdGl2YXRlUHJldmlvdXNUcmFwcGVyKCk7XG4gIH1cbn1cbiJdfQ==