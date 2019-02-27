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
var FocusTrapDirective = /** @class */ (function () {
    function FocusTrapDirective(el, injector, focusTrapsTracker, renderer, platformId) {
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
    FocusTrapDirective.prototype.onFocusIn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var nativeElement = this.el.nativeElement;
        if (this.focusTrapsTracker.current === this && event.target && !nativeElement.contains(event.target)) {
            nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.createFocusableOffScreenEl = /**
     * @return {?}
     */
    function () {
        // Not using Renderer2's createElement method because that leads to DOM leakage.
        // https://github.com/angular/angular/issues/26954
        /** @type {?} */
        var offScreenSpan = this.document.createElement('span');
        this.renderer.setAttribute(offScreenSpan, 'tabindex', '0');
        this.renderer.addClass(offScreenSpan, 'offscreen-focus-rebounder');
        return offScreenSpan;
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.addReboundEls = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.removeReboundEls = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.setPreviousFocus = /**
     * @return {?}
     */
    function () {
        if (this.previousActiveElement && this.previousActiveElement.focus) {
            this.previousActiveElement.focus();
        }
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.previousActiveElement = (/** @type {?} */ (this.document.activeElement));
        }
        this.addReboundEls();
    };
    /**
     * @return {?}
     */
    FocusTrapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeReboundEls();
        this.setPreviousFocus();
        this.focusTrapsTracker.activatePreviousTrapper();
    };
    FocusTrapDirective.decorators = [
        { type: Directive, args: [{ selector: '[clrFocusTrap]' },] }
    ];
    /** @nocollapse */
    FocusTrapDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Injector },
        { type: FocusTrapTracker },
        { type: Renderer2 },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    FocusTrapDirective.propDecorators = {
        onFocusIn: [{ type: HostListener, args: ['document:focusin', ['$event'],] }]
    };
    return FocusTrapDirective;
}());
export { FocusTrapDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9mb2N1cy10cmFwL2ZvY3VzLXRyYXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFO0lBUUUsNEJBQ1UsRUFBYyxFQUNkLFFBQWtCLEVBQ2xCLGlCQUFtQyxFQUNuQyxRQUFtQixFQUNFLFVBQWtCO1FBSnZDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNFLGVBQVUsR0FBVixVQUFVLENBQVE7UUFFL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFHRCxzQ0FBUzs7OztJQURULFVBQ1UsS0FBVTs7WUFDWixhQUFhLEdBQWdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUV4RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxP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LHVCQUF1QixFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Z0JBM0ZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztnQkFYdkMsVUFBVTtnQkFHVixRQUFRO2dCQU1ELGdCQUFnQjtnQkFIdkIsU0FBUztnQkFrQmtDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXOzs7NEJBUXBCLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF1RTlDLHlCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0EzRlksa0JBQWtCOzs7SUFDN0IsbURBQW1DOztJQUNuQyxzQ0FBMkI7O0lBRTNCLDBDQUEwQjs7SUFDMUIsNkNBQTZCOztJQUczQixnQ0FBc0I7O0lBQ3RCLHNDQUEwQjs7SUFDMUIsK0NBQTJDOztJQUMzQyxzQ0FBMkI7O0lBQzNCLHdDQUErQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9jdXNUcmFwVHJhY2tlciB9IGZyb20gJy4vZm9jdXMtdHJhcC10cmFja2VyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyRm9jdXNUcmFwXScgfSlcbmV4cG9ydCBjbGFzcyBGb2N1c1RyYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHByZXZpb3VzQWN0aXZlRWxlbWVudDogYW55O1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBwcml2YXRlIHRvcFJlYm91bmRFbDogYW55O1xuICBwcml2YXRlIGJvdHRvbVJlYm91bmRFbDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBzVHJhY2tlcjogRm9jdXNUcmFwVHJhY2tlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0KERPQ1VNRU5UKTtcbiAgICB0aGlzLmZvY3VzVHJhcHNUcmFja2VyLmN1cnJlbnQgPSB0aGlzO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGFiaW5kZXgnLCAnMCcpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Zm9jdXNpbicsIFsnJGV2ZW50J10pXG4gIG9uRm9jdXNJbihldmVudDogYW55KSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5mb2N1c1RyYXBzVHJhY2tlci5jdXJyZW50ID09PSB0aGlzICYmIGV2ZW50LnRhcmdldCAmJiAhbmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBuYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVGb2N1c2FibGVPZmZTY3JlZW5FbCgpOiBhbnkge1xuICAgIC8vIE5vdCB1c2luZyBSZW5kZXJlcjIncyBjcmVhdGVFbGVtZW50IG1ldGhvZCBiZWNhdXNlIHRoYXQgbGVhZHMgdG8gRE9NIGxlYWthZ2UuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjY5NTRcbiAgICBjb25zdCBvZmZTY3JlZW5TcGFuID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUob2ZmU2NyZWVuU3BhbiwgJ3RhYmluZGV4JywgJzAnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG9mZlNjcmVlblNwYW4sICdvZmZzY3JlZW4tZm9jdXMtcmVib3VuZGVyJyk7XG5cbiAgICByZXR1cm4gb2ZmU2NyZWVuU3BhbjtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUmVib3VuZEVscygpIHtcbiAgICAvLyBXZSB3aWxsIGFkZCB0aGVzZSBmb2N1cyByZWJvdW5kaW5nIGVsZW1lbnRzIG9ubHkgaW4gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgIC8vIDEuIEl0IHNob3VsZCBiZSBydW5uaW5nIGluc2lkZSBicm93c2VyIHBsYXRmb3JtIGFzIGl0IGFjY2Vzc2VzIGRvY3VtZW50LmJvZHkgZWxlbWVudFxuICAgIC8vIDIuIFdlIHNob3VsZCBOT1QgYWRkIHRoZW0gbW9yZSB0aGFuIG9uY2UuIEhlbmNlLCB3ZSBhcmUgY291bnRpbmcgYSBudW1iZXIgb2YgZm9jdXMgdHJhcHBlcnNcbiAgICAvLyAgICBhbmQgb25seSBhZGQgb24gdGhlIGZpcnN0IGZvY3VzIHRyYXBwZXIuXG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLmZvY3VzVHJhcHNUcmFja2VyLm5iRm9jdXNUcmFwcGVycyA9PT0gMSkge1xuICAgICAgdGhpcy50b3BSZWJvdW5kRWwgPSB0aGlzLmNyZWF0ZUZvY3VzYWJsZU9mZlNjcmVlbkVsKCk7XG4gICAgICB0aGlzLmJvdHRvbVJlYm91bmRFbCA9IHRoaXMuY3JlYXRlRm9jdXNhYmxlT2ZmU2NyZWVuRWwoKTtcbiAgICAgIC8vIEFkZCByZWJvdW5kQmVmb3JlVHJhcEVsIHRvIHRoZSBkb2N1bWVudCBib2R5IGFzIHRoZSBmaXJzdCBjaGlsZFxuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLnRvcFJlYm91bmRFbCwgdGhpcy5kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgLy8gQWRkIHJlYm91bmRBZnRlclRyYXBFbCB0byB0aGUgZG9jdW1lbnQgYm9keSBhcyB0aGUgbGFzdCBjaGlsZFxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuYm90dG9tUmVib3VuZEVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVJlYm91bmRFbHMoKSB7XG4gICAgaWYgKFxuICAgICAgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJlxuICAgICAgdGhpcy5mb2N1c1RyYXBzVHJhY2tlci5uYkZvY3VzVHJhcHBlcnMgPT09IDEgJiZcbiAgICAgIHRoaXMudG9wUmVib3VuZEVsICYmXG4gICAgICB0aGlzLmJvdHRvbVJlYm91bmRFbFxuICAgICkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMudG9wUmVib3VuZEVsKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmJvdHRvbVJlYm91bmRFbCk7XG5cbiAgICAgIC8vIFRoZXNlIGFyZSBoZXJlIHRvIHRvIG1ha2Ugc3VyZSB0aGF0XG4gICAgICAvLyB3ZSBjb21wbGV0ZWx5IGRlbGV0ZSBhbGwgdHJhY2VzIG9mIHRoZSByZW1vdmVkIERPTSBvYmplY3RzLlxuICAgICAgZGVsZXRlIHRoaXMudG9wUmVib3VuZEVsO1xuICAgICAgZGVsZXRlIHRoaXMuYm90dG9tUmVib3VuZEVsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRQcmV2aW91c0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCAmJiB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICB0aGlzLmFkZFJlYm91bmRFbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucmVtb3ZlUmVib3VuZEVscygpO1xuICAgIHRoaXMuc2V0UHJldmlvdXNGb2N1cygpO1xuICAgIHRoaXMuZm9jdXNUcmFwc1RyYWNrZXIuYWN0aXZhdGVQcmV2aW91c1RyYXBwZXIoKTtcbiAgfVxufVxuIl19