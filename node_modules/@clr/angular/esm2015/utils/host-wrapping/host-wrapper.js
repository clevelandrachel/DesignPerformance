/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFactoryResolver, ElementRef, } from '@angular/core';
import { EmptyAnchor } from './empty-anchor';
/**
 * HostWrapper must be called in OnInit to ensure that the Views are ready. If its called in a constructor the view is
 * still undefined.
 * TODO - make sure these comment annotations do not break ng-packgr.
 * @template W
 */
export class HostWrapper {
    /**
     * @param {?} containerType
     * @param {?} vcr
     * @param {?=} index
     */
    constructor(containerType, vcr, index = 0) {
        this.injector = vcr.injector;
        // If the host is already wrapped, we don't do anything
        if (!this.injector.get(containerType, null)) {
            /** @type {?} */
            const cfr = this.injector.get(ComponentFactoryResolver);
            /** @type {?} */
            const el = this.injector.get(ElementRef);
            // We need a new anchor, since we're projecting the current one.
            vcr.createComponent(cfr.resolveComponentFactory(EmptyAnchor));
            /** @type {?} */
            const factory = cfr.resolveComponentFactory(containerType);
            // Craft the element array based on what slot to use. Angular only uses the index to determine
            // which ng-content to project into, so if you have more than one ng-content you'll need to set
            // the index in the constructor appropriately
            /** @type {?} */
            const element = [];
            element[index] = [el.nativeElement];
            // We're assuming only one projection slot, but in more complex cases we might want to provide
            // a different array of projected elements.
            /** @type {?} */
            const containerRef = vcr.createComponent(factory, undefined, undefined, element);
            // We can now remove the useless anchor
            vcr.remove(0);
            // We note that the container was dynamically created
            containerRef.instance._dynamic = true;
            // We keep the wrapper's injector to access the dependencies that weren't available before.
            this.injector = containerRef.injector;
        }
    }
    /**
     * @template T
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        return this.injector.get(token, notFoundValue);
    }
}
if (false) {
    /** @type {?} */
    HostWrapper.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC13cmFwcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvaG9zdC13cmFwcGluZy9ob3N0LXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUVMLHdCQUF3QixFQUN4QixVQUFVLEdBS1gsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBTzdDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsWUFBWSxhQUFzQixFQUFFLEdBQXFCLEVBQUUsUUFBZ0IsQ0FBQztRQUMxRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDN0IsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7O2tCQUNyQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUM7O2tCQUNqRCxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBRXhDLGdFQUFnRTtZQUNoRSxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztrQkFDeEQsT0FBTyxHQUF3QixHQUFHLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDOzs7OztrQkFJekUsT0FBTyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7O2tCQUc5QixZQUFZLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFDaEYsdUNBQXVDO1lBQ3ZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFZCxxREFBcUQ7WUFDckQsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXRDLDJGQUEyRjtZQUMzRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7O0lBSUQsR0FBRyxDQUFJLEtBQWtDLEVBQUUsYUFBaUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGOzs7SUFMQywrQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi9keW5hbWljLXdyYXBwZXInO1xuaW1wb3J0IHsgRW1wdHlBbmNob3IgfSBmcm9tICcuL2VtcHR5LWFuY2hvcic7XG5cbi8qKlxuICogSG9zdFdyYXBwZXIgbXVzdCBiZSBjYWxsZWQgaW4gT25Jbml0IHRvIGVuc3VyZSB0aGF0IHRoZSBWaWV3cyBhcmUgcmVhZHkuIElmIGl0cyBjYWxsZWQgaW4gYSBjb25zdHJ1Y3RvciB0aGUgdmlldyBpc1xuICogc3RpbGwgdW5kZWZpbmVkLlxuICogVE9ETyAtIG1ha2Ugc3VyZSB0aGVzZSBjb21tZW50IGFubm90YXRpb25zIGRvIG5vdCBicmVhayBuZy1wYWNrZ3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBIb3N0V3JhcHBlcjxXIGV4dGVuZHMgRHluYW1pY1dyYXBwZXI+IGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJUeXBlOiBUeXBlPFc+LCB2Y3I6IFZpZXdDb250YWluZXJSZWYsIGluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy5pbmplY3RvciA9IHZjci5pbmplY3RvcjtcbiAgICAvLyBJZiB0aGUgaG9zdCBpcyBhbHJlYWR5IHdyYXBwZWQsIHdlIGRvbid0IGRvIGFueXRoaW5nXG4gICAgaWYgKCF0aGlzLmluamVjdG9yLmdldChjb250YWluZXJUeXBlLCBudWxsKSkge1xuICAgICAgY29uc3QgY2ZyID0gdGhpcy5pbmplY3Rvci5nZXQoQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5pbmplY3Rvci5nZXQoRWxlbWVudFJlZik7XG5cbiAgICAgIC8vIFdlIG5lZWQgYSBuZXcgYW5jaG9yLCBzaW5jZSB3ZSdyZSBwcm9qZWN0aW5nIHRoZSBjdXJyZW50IG9uZS5cbiAgICAgIHZjci5jcmVhdGVDb21wb25lbnQoY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEVtcHR5QW5jaG9yKSk7XG4gICAgICBjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFc+ID0gY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbnRhaW5lclR5cGUpO1xuICAgICAgLy8gQ3JhZnQgdGhlIGVsZW1lbnQgYXJyYXkgYmFzZWQgb24gd2hhdCBzbG90IHRvIHVzZS4gQW5ndWxhciBvbmx5IHVzZXMgdGhlIGluZGV4IHRvIGRldGVybWluZVxuICAgICAgLy8gd2hpY2ggbmctY29udGVudCB0byBwcm9qZWN0IGludG8sIHNvIGlmIHlvdSBoYXZlIG1vcmUgdGhhbiBvbmUgbmctY29udGVudCB5b3UnbGwgbmVlZCB0byBzZXRcbiAgICAgIC8vIHRoZSBpbmRleCBpbiB0aGUgY29uc3RydWN0b3IgYXBwcm9wcmlhdGVseVxuICAgICAgY29uc3QgZWxlbWVudCA9IFtdO1xuICAgICAgZWxlbWVudFtpbmRleF0gPSBbZWwubmF0aXZlRWxlbWVudF07XG4gICAgICAvLyBXZSdyZSBhc3N1bWluZyBvbmx5IG9uZSBwcm9qZWN0aW9uIHNsb3QsIGJ1dCBpbiBtb3JlIGNvbXBsZXggY2FzZXMgd2UgbWlnaHQgd2FudCB0byBwcm92aWRlXG4gICAgICAvLyBhIGRpZmZlcmVudCBhcnJheSBvZiBwcm9qZWN0ZWQgZWxlbWVudHMuXG4gICAgICBjb25zdCBjb250YWluZXJSZWYgPSB2Y3IuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBlbGVtZW50KTtcbiAgICAgIC8vIFdlIGNhbiBub3cgcmVtb3ZlIHRoZSB1c2VsZXNzIGFuY2hvclxuICAgICAgdmNyLnJlbW92ZSgwKTtcblxuICAgICAgLy8gV2Ugbm90ZSB0aGF0IHRoZSBjb250YWluZXIgd2FzIGR5bmFtaWNhbGx5IGNyZWF0ZWRcbiAgICAgIGNvbnRhaW5lclJlZi5pbnN0YW5jZS5fZHluYW1pYyA9IHRydWU7XG5cbiAgICAgIC8vIFdlIGtlZXAgdGhlIHdyYXBwZXIncyBpbmplY3RvciB0byBhY2Nlc3MgdGhlIGRlcGVuZGVuY2llcyB0aGF0IHdlcmVuJ3QgYXZhaWxhYmxlIGJlZm9yZS5cbiAgICAgIHRoaXMuaW5qZWN0b3IgPSBjb250YWluZXJSZWYuaW5qZWN0b3I7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3I7XG5cbiAgZ2V0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU/OiBUKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19