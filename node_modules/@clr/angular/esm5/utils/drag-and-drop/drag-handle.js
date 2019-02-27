/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, Optional } from '@angular/core';
import { DragHandleRegistrarService } from './providers/drag-handle-registrar.service';
/**
 * @template T
 */
var ClrDragHandle = /** @class */ (function () {
    function ClrDragHandle(el, dragHandleRegistrar) {
        this.el = el;
        this.dragHandleRegistrar = dragHandleRegistrar;
        if (!this.dragHandleRegistrar) {
            // ClrDragHandleRegistrar is provided in ClrDraggable so we expect it to be present here
            // as clrDragHandle is required to be used only inside of a clrDraggable directive.
            throw new Error('The clrDragHandle directive can only be used inside of a clrDraggable directive.');
        }
        this.dragHandleRegistrar.registerCustomHandle(this.el.nativeElement);
    }
    /**
     * @return {?}
     */
    ClrDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dragHandleRegistrar.unregisterCustomHandle();
    };
    ClrDragHandle.decorators = [
        { type: Directive, args: [{ selector: '[clrDragHandle]', host: { '[class.drag-handle]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrDragHandle.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragHandleRegistrarService, decorators: [{ type: Optional }] }
    ]; };
    return ClrDragHandle;
}());
export { ClrDragHandle };
if (false) {
    /** @type {?} */
    ClrDragHandle.prototype.el;
    /** @type {?} */
    ClrDragHandle.prototype.dragHandleRegistrar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctaGFuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7OztBQUV2RjtJQUVFLHVCQUFvQixFQUFjLEVBQXNCLG1CQUFrRDtRQUF0RixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQXNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBK0I7UUFDeEcsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3Qix3RkFBd0Y7WUFDeEYsbUZBQW1GO1lBQ25GLE1BQU0sSUFBSSxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztTQUNyRztRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNwRCxDQUFDOztnQkFiRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLEVBQUU7Ozs7Z0JBSC9ELFVBQVU7Z0JBQ3JCLDBCQUEwQix1QkFJSSxRQUFROztJQVkvQyxvQkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGFBQWE7OztJQUNaLDJCQUFzQjs7SUFBRSw0Q0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0hhbmRsZVJlZ2lzdHJhclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kcmFnLWhhbmRsZS1yZWdpc3RyYXIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJEcmFnSGFuZGxlXScsIGhvc3Q6IHsgJ1tjbGFzcy5kcmFnLWhhbmRsZV0nOiAndHJ1ZScgfSB9KVxuZXhwb3J0IGNsYXNzIENsckRyYWdIYW5kbGU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRyYWdIYW5kbGVSZWdpc3RyYXI6IERyYWdIYW5kbGVSZWdpc3RyYXJTZXJ2aWNlPFQ+KSB7XG4gICAgaWYgKCF0aGlzLmRyYWdIYW5kbGVSZWdpc3RyYXIpIHtcbiAgICAgIC8vIENsckRyYWdIYW5kbGVSZWdpc3RyYXIgaXMgcHJvdmlkZWQgaW4gQ2xyRHJhZ2dhYmxlIHNvIHdlIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50IGhlcmVcbiAgICAgIC8vIGFzIGNsckRyYWdIYW5kbGUgaXMgcmVxdWlyZWQgdG8gYmUgdXNlZCBvbmx5IGluc2lkZSBvZiBhIGNsckRyYWdnYWJsZSBkaXJlY3RpdmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjbHJEcmFnSGFuZGxlIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsckRyYWdnYWJsZSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuICAgIHRoaXMuZHJhZ0hhbmRsZVJlZ2lzdHJhci5yZWdpc3RlckN1c3RvbUhhbmRsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlUmVnaXN0cmFyLnVucmVnaXN0ZXJDdXN0b21IYW5kbGUoKTtcbiAgfVxufVxuIl19