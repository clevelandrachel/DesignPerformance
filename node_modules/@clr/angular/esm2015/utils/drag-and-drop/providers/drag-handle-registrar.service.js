/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Renderer2 } from '@angular/core';
import { DragEventListenerService } from './drag-event-listener.service';
// This provider registers the drag handle element.
// When it registers a element as a drag handle, it attaches that element to the listeners from ClrDragEventListener.
// Also, it adds the "drag-handle" css class to the registered element through Renderer.
/**
 * @template T
 */
export class DragHandleRegistrarService {
    /**
     * @param {?} dragEventListener
     * @param {?} renderer
     */
    constructor(dragEventListener, renderer) {
        this.dragEventListener = dragEventListener;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get defaultHandleEl() {
        return this._defaultHandleEl;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set defaultHandleEl(el) {
        this._defaultHandleEl = el; // defaultHandleEl will be usually the clrDraggable element.
        // If the customHandleEl has been registered,
        // don't make the defaultHandleEl the drag handle yet until the customHandleEl is unregistered.
        if (!this._customHandleEl) {
            this.makeElementHandle(this._defaultHandleEl);
        }
    }
    /**
     * @param {?} el
     * @return {?}
     */
    makeElementHandle(el) {
        if (this._defaultHandleEl && this._defaultHandleEl !== el) {
            // Before making an element the custom handle element,
            // we should remove the existing drag-handle class from the draggable element.
            this.renderer.removeClass(this._defaultHandleEl, 'drag-handle');
        }
        this.dragEventListener.attachDragListeners(el);
        this.renderer.addClass(el, 'drag-handle');
    }
    /**
     * @return {?}
     */
    get customHandleEl() {
        return this._customHandleEl;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    registerCustomHandle(el) {
        this.dragEventListener.detachDragListeners(); // removes the existing listeners
        this._customHandleEl = el;
        this.makeElementHandle(this._customHandleEl);
    }
    /**
     * @return {?}
     */
    unregisterCustomHandle() {
        this.dragEventListener.detachDragListeners(); // removes the existing listeners
        this.renderer.removeClass(this._customHandleEl, 'drag-handle');
        delete this._customHandleEl;
        // if default handle is set, make that handle
        if (this._defaultHandleEl) {
            this.makeElementHandle(this._defaultHandleEl);
        }
    }
}
DragHandleRegistrarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DragHandleRegistrarService.ctorParameters = () => [
    { type: DragEventListenerService },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    DragHandleRegistrarService.prototype._customHandleEl;
    /** @type {?} */
    DragHandleRegistrarService.prototype._defaultHandleEl;
    /** @type {?} */
    DragHandleRegistrarService.prototype.dragEventListener;
    /** @type {?} */
    DragHandleRegistrarService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUtcmVnaXN0cmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL3Byb3ZpZGVycy9kcmFnLWhhbmRsZS1yZWdpc3RyYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQU16RSxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQWtCckMsWUFBb0IsaUJBQThDLEVBQVUsUUFBbUI7UUFBM0Usc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBRyxDQUFDOzs7O0lBZG5HLElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELElBQUksZUFBZSxDQUFDLEVBQVE7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLDREQUE0RDtRQUV4Riw2Q0FBNkM7UUFDN0MsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7Ozs7O0lBSU8saUJBQWlCLENBQUMsRUFBUTtRQUNoQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssRUFBRSxFQUFFO1lBQ3pELHNEQUFzRDtZQUN0RCw4RUFBOEU7WUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLG9CQUFvQixDQUFDLEVBQVE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxpQ0FBaUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRU0sc0JBQXNCO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsaUNBQWlDO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzVCLDZDQUE2QztRQUM3QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7WUFqREYsVUFBVTs7OztZQUxGLHdCQUF3QjtZQUZaLFNBQVM7Ozs7SUFTNUIscURBQTZCOztJQUM3QixzREFBOEI7O0lBZ0JsQix1REFBc0Q7O0lBQUUsOENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERyYWdFdmVudExpc3RlbmVyU2VydmljZSB9IGZyb20gJy4vZHJhZy1ldmVudC1saXN0ZW5lci5zZXJ2aWNlJztcblxuLy8gVGhpcyBwcm92aWRlciByZWdpc3RlcnMgdGhlIGRyYWcgaGFuZGxlIGVsZW1lbnQuXG4vLyBXaGVuIGl0IHJlZ2lzdGVycyBhIGVsZW1lbnQgYXMgYSBkcmFnIGhhbmRsZSwgaXQgYXR0YWNoZXMgdGhhdCBlbGVtZW50IHRvIHRoZSBsaXN0ZW5lcnMgZnJvbSBDbHJEcmFnRXZlbnRMaXN0ZW5lci5cbi8vIEFsc28sIGl0IGFkZHMgdGhlIFwiZHJhZy1oYW5kbGVcIiBjc3MgY2xhc3MgdG8gdGhlIHJlZ2lzdGVyZWQgZWxlbWVudCB0aHJvdWdoIFJlbmRlcmVyLlxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdIYW5kbGVSZWdpc3RyYXJTZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBfY3VzdG9tSGFuZGxlRWw6IGFueTtcbiAgcHJpdmF0ZSBfZGVmYXVsdEhhbmRsZUVsOiBhbnk7XG5cbiAgZ2V0IGRlZmF1bHRIYW5kbGVFbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEhhbmRsZUVsO1xuICB9XG5cbiAgc2V0IGRlZmF1bHRIYW5kbGVFbChlbDogTm9kZSkge1xuICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVFbCA9IGVsOyAvLyBkZWZhdWx0SGFuZGxlRWwgd2lsbCBiZSB1c3VhbGx5IHRoZSBjbHJEcmFnZ2FibGUgZWxlbWVudC5cblxuICAgIC8vIElmIHRoZSBjdXN0b21IYW5kbGVFbCBoYXMgYmVlbiByZWdpc3RlcmVkLFxuICAgIC8vIGRvbid0IG1ha2UgdGhlIGRlZmF1bHRIYW5kbGVFbCB0aGUgZHJhZyBoYW5kbGUgeWV0IHVudGlsIHRoZSBjdXN0b21IYW5kbGVFbCBpcyB1bnJlZ2lzdGVyZWQuXG4gICAgaWYgKCF0aGlzLl9jdXN0b21IYW5kbGVFbCkge1xuICAgICAgdGhpcy5tYWtlRWxlbWVudEhhbmRsZSh0aGlzLl9kZWZhdWx0SGFuZGxlRWwpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJhZ0V2ZW50TGlzdGVuZXI6IERyYWdFdmVudExpc3RlbmVyU2VydmljZTxUPiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgbWFrZUVsZW1lbnRIYW5kbGUoZWw6IE5vZGUpIHtcbiAgICBpZiAodGhpcy5fZGVmYXVsdEhhbmRsZUVsICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVFbCAhPT0gZWwpIHtcbiAgICAgIC8vIEJlZm9yZSBtYWtpbmcgYW4gZWxlbWVudCB0aGUgY3VzdG9tIGhhbmRsZSBlbGVtZW50LFxuICAgICAgLy8gd2Ugc2hvdWxkIHJlbW92ZSB0aGUgZXhpc3RpbmcgZHJhZy1oYW5kbGUgY2xhc3MgZnJvbSB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQuXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2RlZmF1bHRIYW5kbGVFbCwgJ2RyYWctaGFuZGxlJyk7XG4gICAgfVxuICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuYXR0YWNoRHJhZ0xpc3RlbmVycyhlbCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgJ2RyYWctaGFuZGxlJyk7XG4gIH1cblxuICBnZXQgY3VzdG9tSGFuZGxlRWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUhhbmRsZUVsO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyQ3VzdG9tSGFuZGxlKGVsOiBOb2RlKSB7XG4gICAgdGhpcy5kcmFnRXZlbnRMaXN0ZW5lci5kZXRhY2hEcmFnTGlzdGVuZXJzKCk7IC8vIHJlbW92ZXMgdGhlIGV4aXN0aW5nIGxpc3RlbmVyc1xuICAgIHRoaXMuX2N1c3RvbUhhbmRsZUVsID0gZWw7XG4gICAgdGhpcy5tYWtlRWxlbWVudEhhbmRsZSh0aGlzLl9jdXN0b21IYW5kbGVFbCk7XG4gIH1cblxuICBwdWJsaWMgdW5yZWdpc3RlckN1c3RvbUhhbmRsZSgpIHtcbiAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRldGFjaERyYWdMaXN0ZW5lcnMoKTsgLy8gcmVtb3ZlcyB0aGUgZXhpc3RpbmcgbGlzdGVuZXJzXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9jdXN0b21IYW5kbGVFbCwgJ2RyYWctaGFuZGxlJyk7XG4gICAgZGVsZXRlIHRoaXMuX2N1c3RvbUhhbmRsZUVsO1xuICAgIC8vIGlmIGRlZmF1bHQgaGFuZGxlIGlzIHNldCwgbWFrZSB0aGF0IGhhbmRsZVxuICAgIGlmICh0aGlzLl9kZWZhdWx0SGFuZGxlRWwpIHtcbiAgICAgIHRoaXMubWFrZUVsZW1lbnRIYW5kbGUodGhpcy5fZGVmYXVsdEhhbmRsZUVsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==