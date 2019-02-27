/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';
import { DragEventListenerService } from './providers/drag-event-listener.service';
// This structural directive will be used mainly together with `clr-draggable-ghost` directive inside of clrDraggable
// directive. The directive is responsible for instantiating `clr-draggable-ghost` directive only during dragging so
// that Angular Change Detection is prevented from running if a component or directive is placed inside of the
// `clr-draggable-ghost` directive.
/**
 * @template T
 */
export class ClrIfDragged {
    /**
     * @param {?} template
     * @param {?} container
     * @param {?} dragEventListener
     */
    constructor(template, container, dragEventListener) {
        this.template = template;
        this.container = container;
        this.dragEventListener = dragEventListener;
        this.subscriptions = [];
        if (!this.dragEventListener || !this.container) {
            throw new Error('The *clrIfDragged directive can only be used inside of a clrDraggable directive.');
        }
        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe((event) => {
            this.container.createEmbeddedView(this.template);
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe((event) => {
            this.container.clear();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
ClrIfDragged.decorators = [
    { type: Directive, args: [{ selector: '[clrIfDragged]' },] }
];
/** @nocollapse */
ClrIfDragged.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: DragEventListenerService, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    ClrIfDragged.prototype.subscriptions;
    /** @type {?} */
    ClrIfDragged.prototype.template;
    /** @type {?} */
    ClrIfDragged.prototype.container;
    /** @type {?} */
    ClrIfDragged.prototype.dragEventListener;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZHJhZ2dlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2RyYWctYW5kLWRyb3AvaWYtZHJhZ2dlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7OztBQVFuRixNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBRXZCLFlBQ1UsUUFBMEIsRUFHMUIsU0FBMkIsRUFDZixpQkFBOEM7UUFKMUQsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFHMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCO1FBTjVELGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQVF6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7U0FDckc7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUE0QixFQUFFLEVBQUU7WUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQTRCLEVBQUUsRUFBRTtZQUMxRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztZQVhVLFdBQVc7WUFBRSxnQkFBZ0IsdUJBZ0IzRSxRQUFRLFlBQ1IsUUFBUTtZQWJKLHdCQUF3Qix1QkFlNUIsUUFBUTs7OztJQU5YLHFDQUEyQzs7SUFFekMsZ0NBQWtDOztJQUNsQyxpQ0FFbUM7O0lBQ25DLHlDQUFrRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgT25EZXN0cm95LCBPcHRpb25hbCwgU2tpcFNlbGYsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRHJhZ0V2ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2RyYWctZXZlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IERyYWdFdmVudExpc3RlbmVyU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RyYWctZXZlbnQtbGlzdGVuZXIuc2VydmljZSc7XG5cbi8vIFRoaXMgc3RydWN0dXJhbCBkaXJlY3RpdmUgd2lsbCBiZSB1c2VkIG1haW5seSB0b2dldGhlciB3aXRoIGBjbHItZHJhZ2dhYmxlLWdob3N0YCBkaXJlY3RpdmUgaW5zaWRlIG9mIGNsckRyYWdnYWJsZVxuLy8gZGlyZWN0aXZlLiBUaGUgZGlyZWN0aXZlIGlzIHJlc3BvbnNpYmxlIGZvciBpbnN0YW50aWF0aW5nIGBjbHItZHJhZ2dhYmxlLWdob3N0YCBkaXJlY3RpdmUgb25seSBkdXJpbmcgZHJhZ2dpbmcgc29cbi8vIHRoYXQgQW5ndWxhciBDaGFuZ2UgRGV0ZWN0aW9uIGlzIHByZXZlbnRlZCBmcm9tIHJ1bm5pbmcgaWYgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIGlzIHBsYWNlZCBpbnNpZGUgb2YgdGhlXG4vLyBgY2xyLWRyYWdnYWJsZS1naG9zdGAgZGlyZWN0aXZlLlxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xySWZEcmFnZ2VkXScgfSlcbmV4cG9ydCBjbGFzcyBDbHJJZkRyYWdnZWQ8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2tpcFNlbGYoKVxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhZ0V2ZW50TGlzdGVuZXI6IERyYWdFdmVudExpc3RlbmVyU2VydmljZTxUPlxuICApIHtcbiAgICBpZiAoIXRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIgfHwgIXRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSAqY2xySWZEcmFnZ2VkIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsckRyYWdnYWJsZSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdTdGFydGVkLnN1YnNjcmliZSgoZXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdFbmRlZC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=