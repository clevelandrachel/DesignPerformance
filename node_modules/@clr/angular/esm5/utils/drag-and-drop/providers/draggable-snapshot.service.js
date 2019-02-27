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
var DraggableSnapshotService = /** @class */ (function () {
    function DraggableSnapshotService(domAdapter) {
        this.domAdapter = domAdapter;
    }
    /**
     * @param {?} el
     * @param {?} event
     * @return {?}
     */
    DraggableSnapshotService.prototype.capture = /**
     * @param {?} el
     * @param {?} event
     * @return {?}
     */
    function (el, event) {
        this.draggableElClientRect = this.domAdapter.clientRect(el);
        this.snapshotDragEvent = event;
    };
    /**
     * @return {?}
     */
    DraggableSnapshotService.prototype.discard = /**
     * @return {?}
     */
    function () {
        delete this.draggableElClientRect;
        delete this.snapshotDragEvent;
    };
    Object.defineProperty(DraggableSnapshotService.prototype, "hasDraggableState", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.snapshotDragEvent && !!this.draggableElClientRect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableSnapshotService.prototype, "clientRect", {
        get: /**
         * @return {?}
         */
        function () {
            return this.draggableElClientRect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableSnapshotService.prototype, "dragEvent", {
        get: /**
         * @return {?}
         */
        function () {
            return this.snapshotDragEvent;
        },
        enumerable: true,
        configurable: true
    });
    DraggableSnapshotService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DraggableSnapshotService.ctorParameters = function () { return [
        { type: DomAdapter }
    ]; };
    return DraggableSnapshotService;
}());
export { DraggableSnapshotService };
if (false) {
    /** @type {?} */
    DraggableSnapshotService.prototype.draggableElClientRect;
    /** @type {?} */
    DraggableSnapshotService.prototype.snapshotDragEvent;
    /** @type {?} */
    DraggableSnapshotService.prototype.domAdapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNuYXBzaG90LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL3Byb3ZpZGVycy9kcmFnZ2FibGUtc25hcHNob3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBSzNEO0lBRUUsa0NBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7Ozs7SUFLdkMsMENBQU87Ozs7O0lBQWQsVUFBZSxFQUFRLEVBQUUsS0FBNEI7UUFDbkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQzs7OztJQUNNLDBDQUFPOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxzQkFBSSx1REFBaUI7Ozs7UUFBckI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGdEQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLCtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTs7Z0JBdkJGLFVBQVU7Ozs7Z0JBTEYsVUFBVTs7SUE2Qm5CLCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2Qlksd0JBQXdCOzs7SUFHbkMseURBQTBDOztJQUMxQyxxREFBaUQ7O0lBSHJDLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kb20tYWRhcHRlci9kb20tYWRhcHRlcic7XG5pbXBvcnQgeyBEcmFnRXZlbnRJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RyYWctZXZlbnQuaW50ZXJmYWNlJztcblxuLy8gVGhpcyBzZXJ2aWNlIGlzIHVzZWQgdG8gY2FwdHVyZSB0aGUgc3RhdGUgb2YgY2xyRHJhZ2dhYmxlIGVsZW1lbnRcbi8vIGF0IGEgY2VydGFpbiBldmVudCBhbmQgcGFzc2VzIGl0IHRvIGNsckRyYWdnYWJsZUdob3N0IGNvbXBvbmVudC5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTbmFwc2hvdFNlcnZpY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbUFkYXB0ZXI6IERvbUFkYXB0ZXIpIHt9XG5cbiAgcHJpdmF0ZSBkcmFnZ2FibGVFbENsaWVudFJlY3Q6IENsaWVudFJlY3Q7XG4gIHByaXZhdGUgc25hcHNob3REcmFnRXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPjtcblxuICBwdWJsaWMgY2FwdHVyZShlbDogTm9kZSwgZXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPik6IHZvaWQge1xuICAgIHRoaXMuZHJhZ2dhYmxlRWxDbGllbnRSZWN0ID0gdGhpcy5kb21BZGFwdGVyLmNsaWVudFJlY3QoZWwpO1xuICAgIHRoaXMuc25hcHNob3REcmFnRXZlbnQgPSBldmVudDtcbiAgfVxuICBwdWJsaWMgZGlzY2FyZCgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5kcmFnZ2FibGVFbENsaWVudFJlY3Q7XG4gICAgZGVsZXRlIHRoaXMuc25hcHNob3REcmFnRXZlbnQ7XG4gIH1cbiAgZ2V0IGhhc0RyYWdnYWJsZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc25hcHNob3REcmFnRXZlbnQgJiYgISF0aGlzLmRyYWdnYWJsZUVsQ2xpZW50UmVjdDtcbiAgfVxuICBnZXQgY2xpZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVFbENsaWVudFJlY3Q7XG4gIH1cbiAgZ2V0IGRyYWdFdmVudCgpOiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4ge1xuICAgIHJldHVybiB0aGlzLnNuYXBzaG90RHJhZ0V2ZW50O1xuICB9XG59XG4iXX0=