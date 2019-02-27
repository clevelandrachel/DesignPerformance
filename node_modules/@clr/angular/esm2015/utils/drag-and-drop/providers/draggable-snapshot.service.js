/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
// This service is used to capture the state of clrDraggable element
// at a certain event and passes it to clrDraggableGhost component.
/**
 * @template T
 */
export class DraggableSnapshotService {
    /**
     * @param {?} domAdapter
     */
    constructor(domAdapter) {
        this.domAdapter = domAdapter;
    }
    /**
     * @param {?} el
     * @param {?} event
     * @return {?}
     */
    capture(el, event) {
        this.draggableElClientRect = this.domAdapter.clientRect(el);
        this.snapshotDragEvent = event;
    }
    /**
     * @return {?}
     */
    discard() {
        delete this.draggableElClientRect;
        delete this.snapshotDragEvent;
    }
    /**
     * @return {?}
     */
    get hasDraggableState() {
        return !!this.snapshotDragEvent && !!this.draggableElClientRect;
    }
    /**
     * @return {?}
     */
    get clientRect() {
        return this.draggableElClientRect;
    }
    /**
     * @return {?}
     */
    get dragEvent() {
        return this.snapshotDragEvent;
    }
}
DraggableSnapshotService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DraggableSnapshotService.ctorParameters = () => [
    { type: DomAdapter }
];
if (false) {
    /** @type {?} */
    DraggableSnapshotService.prototype.draggableElClientRect;
    /** @type {?} */
    DraggableSnapshotService.prototype.snapshotDragEvent;
    /** @type {?} */
    DraggableSnapshotService.prototype.domAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNuYXBzaG90LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL3Byb3ZpZGVycy9kcmFnZ2FibGUtc25hcHNob3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBTTNELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7Ozs7OztJQUt2QyxPQUFPLENBQUMsRUFBUSxFQUFFLEtBQTRCO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ2xFLENBQUM7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFMRixVQUFVOzs7O0lBU2pCLHlEQUEwQzs7SUFDMUMscURBQWlEOztJQUhyQyw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vZG9tLWFkYXB0ZXIvZG9tLWFkYXB0ZXInO1xuaW1wb3J0IHsgRHJhZ0V2ZW50SW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kcmFnLWV2ZW50LmludGVyZmFjZSc7XG5cbi8vIFRoaXMgc2VydmljZSBpcyB1c2VkIHRvIGNhcHR1cmUgdGhlIHN0YXRlIG9mIGNsckRyYWdnYWJsZSBlbGVtZW50XG4vLyBhdCBhIGNlcnRhaW4gZXZlbnQgYW5kIHBhc3NlcyBpdCB0byBjbHJEcmFnZ2FibGVHaG9zdCBjb21wb25lbnQuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU25hcHNob3RTZXJ2aWNlPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21BZGFwdGVyOiBEb21BZGFwdGVyKSB7fVxuXG4gIHByaXZhdGUgZHJhZ2dhYmxlRWxDbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuICBwcml2YXRlIHNuYXBzaG90RHJhZ0V2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD47XG5cbiAgcHVibGljIGNhcHR1cmUoZWw6IE5vZGUsIGV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmRyYWdnYWJsZUVsQ2xpZW50UmVjdCA9IHRoaXMuZG9tQWRhcHRlci5jbGllbnRSZWN0KGVsKTtcbiAgICB0aGlzLnNuYXBzaG90RHJhZ0V2ZW50ID0gZXZlbnQ7XG4gIH1cbiAgcHVibGljIGRpc2NhcmQoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuZHJhZ2dhYmxlRWxDbGllbnRSZWN0O1xuICAgIGRlbGV0ZSB0aGlzLnNuYXBzaG90RHJhZ0V2ZW50O1xuICB9XG4gIGdldCBoYXNEcmFnZ2FibGVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNuYXBzaG90RHJhZ0V2ZW50ICYmICEhdGhpcy5kcmFnZ2FibGVFbENsaWVudFJlY3Q7XG4gIH1cbiAgZ2V0IGNsaWVudFJlY3QoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlRWxDbGllbnRSZWN0O1xuICB9XG4gIGdldCBkcmFnRXZlbnQoKTogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zbmFwc2hvdERyYWdFdmVudDtcbiAgfVxufVxuIl19