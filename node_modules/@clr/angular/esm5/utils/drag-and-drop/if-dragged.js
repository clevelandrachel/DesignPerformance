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
var ClrIfDragged = /** @class */ (function () {
    function ClrIfDragged(template, container, dragEventListener) {
        var _this = this;
        this.template = template;
        this.container = container;
        this.dragEventListener = dragEventListener;
        this.subscriptions = [];
        if (!this.dragEventListener || !this.container) {
            throw new Error('The *clrIfDragged directive can only be used inside of a clrDraggable directive.');
        }
        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe(function (event) {
            _this.container.createEmbeddedView(_this.template);
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe(function (event) {
            _this.container.clear();
        }));
    }
    /**
     * @return {?}
     */
    ClrIfDragged.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ClrIfDragged.decorators = [
        { type: Directive, args: [{ selector: '[clrIfDragged]' },] }
    ];
    /** @nocollapse */
    ClrIfDragged.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: DragEventListenerService, decorators: [{ type: Optional }] }
    ]; };
    return ClrIfDragged;
}());
export { ClrIfDragged };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZHJhZ2dlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2RyYWctYW5kLWRyb3AvaWYtZHJhZ2dlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXhHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7OztBQU9uRjtJQUdFLHNCQUNVLFFBQTBCLEVBRzFCLFNBQTJCLEVBQ2YsaUJBQThDO1FBTHBFLGlCQXFCQztRQXBCUyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUcxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNmLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFONUQsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBUXpDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztTQUNyRztRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQTRCO1lBQ3hFLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUE0QjtZQUN0RSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFpQixJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztnQkFYVSxXQUFXO2dCQUFFLGdCQUFnQix1QkFnQjNFLFFBQVEsWUFDUixRQUFRO2dCQWJKLHdCQUF3Qix1QkFlNUIsUUFBUTs7SUFxQmIsbUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSxZQUFZOzs7SUFDdkIscUNBQTJDOztJQUV6QyxnQ0FBa0M7O0lBQ2xDLGlDQUVtQzs7SUFDbkMseUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEcmFnRXZlbnRJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMvZHJhZy1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZHJhZy1ldmVudC1saXN0ZW5lci5zZXJ2aWNlJztcblxuLy8gVGhpcyBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSB3aWxsIGJlIHVzZWQgbWFpbmx5IHRvZ2V0aGVyIHdpdGggYGNsci1kcmFnZ2FibGUtZ2hvc3RgIGRpcmVjdGl2ZSBpbnNpZGUgb2YgY2xyRHJhZ2dhYmxlXG4vLyBkaXJlY3RpdmUuIFRoZSBkaXJlY3RpdmUgaXMgcmVzcG9uc2libGUgZm9yIGluc3RhbnRpYXRpbmcgYGNsci1kcmFnZ2FibGUtZ2hvc3RgIGRpcmVjdGl2ZSBvbmx5IGR1cmluZyBkcmFnZ2luZyBzb1xuLy8gdGhhdCBBbmd1bGFyIENoYW5nZSBEZXRlY3Rpb24gaXMgcHJldmVudGVkIGZyb20gcnVubmluZyBpZiBhIGNvbXBvbmVudCBvciBkaXJlY3RpdmUgaXMgcGxhY2VkIGluc2lkZSBvZiB0aGVcbi8vIGBjbHItZHJhZ2dhYmxlLWdob3N0YCBkaXJlY3RpdmUuXG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJJZkRyYWdnZWRdJyB9KVxuZXhwb3J0IGNsYXNzIENscklmRHJhZ2dlZDxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFnRXZlbnRMaXN0ZW5lcjogRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlPFQ+XG4gICkge1xuICAgIGlmICghdGhpcy5kcmFnRXZlbnRMaXN0ZW5lciB8fCAhdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlICpjbHJJZkRyYWdnZWQgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIG9mIGEgY2xyRHJhZ2dhYmxlIGRpcmVjdGl2ZS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZHJhZ1N0YXJ0ZWQuc3Vic2NyaWJlKChldmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KSA9PiB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZHJhZ0VuZGVkLnN1YnNjcmliZSgoZXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==