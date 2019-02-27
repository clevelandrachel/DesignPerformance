/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ElementRef, Injectable } from '@angular/core';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridRenderOrganizer } from '../render/render-organizer';
/** @type {?} */
const MIN_COLUMN_WIDTH = 96;
// This service allows DatagridHeaderRenderer and ClrDatagridColumnSeparator
// to share column resize data with each other.
export class ColumnResizerService {
    /**
     * @param {?} el
     * @param {?} domAdapter
     * @param {?} organizer
     */
    constructor(el, domAdapter, organizer) {
        this.el = el;
        this.domAdapter = domAdapter;
        this.organizer = organizer;
        this._resizedBy = 0;
    }
    /**
     * @return {?}
     */
    get resizedBy() {
        return this._resizedBy;
    }
    /**
     * @return {?}
     */
    get minColumnWidth() {
        return this.domAdapter.minWidth(this.el.nativeElement) || MIN_COLUMN_WIDTH;
    }
    /**
     * @return {?}
     */
    get maxResizeRange() {
        return this.widthBeforeResize - this.minColumnWidth;
    }
    /**
     * @return {?}
     */
    startResize() {
        this._resizedBy = 0;
        this.isWithinMaxResizeRange = true;
        this.widthBeforeResize = this.domAdapter.clientRect(this.el.nativeElement).width;
    }
    /**
     * @return {?}
     */
    endResize() {
        this.organizer.resize();
    }
    /**
     * @return {?}
     */
    get widthAfterResize() {
        return this.widthBeforeResize + this._resizedBy;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    calculateResize(event) {
        /** @type {?} */
        const moveX = event.dragPosition.moveX;
        // returns the resize amount within the allowed range
        if (moveX < -this.maxResizeRange) {
            this._resizedBy = -this.maxResizeRange;
            this.isWithinMaxResizeRange = false;
        }
        else {
            this._resizedBy = moveX;
            this.isWithinMaxResizeRange = true;
        }
    }
}
ColumnResizerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ColumnResizerService.ctorParameters = () => [
    { type: ElementRef },
    { type: DomAdapter },
    { type: DatagridRenderOrganizer }
];
if (false) {
    /** @type {?} */
    ColumnResizerService.prototype.widthBeforeResize;
    /** @type {?} */
    ColumnResizerService.prototype._resizedBy;
    /** @type {?} */
    ColumnResizerService.prototype.isWithinMaxResizeRange;
    /** @type {?} */
    ColumnResizerService.prototype.el;
    /** @type {?} */
    ColumnResizerService.prototype.domAdapter;
    /** @type {?} */
    ColumnResizerService.prototype.organizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXJlc2l6ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL2NvbHVtbi1yZXNpemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztNQUUvRCxnQkFBZ0IsR0FBRyxFQUFFOzs7QUFNM0IsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBQy9CLFlBQW9CLEVBQWMsRUFBVSxVQUFzQixFQUFVLFNBQWtDO1FBQTFGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBeUI7UUFJdEcsZUFBVSxHQUFXLENBQUMsQ0FBQztJQUprRixDQUFDOzs7O0lBTWxILElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUtELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQWdCLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ25GLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxLQUF3Qjs7Y0FDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztRQUN0QyxxREFBcUQ7UUFDckQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUEvQ0YsVUFBVTs7OztZQVhGLFVBQVU7WUFFVixVQUFVO1lBRVYsdUJBQXVCOzs7O0lBVzlCLGlEQUFrQzs7SUFFbEMsMENBQStCOztJQU8vQixzREFBdUM7O0lBWDNCLGtDQUFzQjs7SUFBRSwwQ0FBOEI7O0lBQUUseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tLWFkYXB0ZXIvZG9tLWFkYXB0ZXInO1xuaW1wb3J0IHsgQ2xyRHJhZ0V2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZHJhZy1hbmQtZHJvcC9kcmFnLWV2ZW50JztcbmltcG9ydCB7IERhdGFncmlkUmVuZGVyT3JnYW5pemVyIH0gZnJvbSAnLi4vcmVuZGVyL3JlbmRlci1vcmdhbml6ZXInO1xuXG5jb25zdCBNSU5fQ09MVU1OX1dJRFRIID0gOTY7XG5cbi8vIFRoaXMgc2VydmljZSBhbGxvd3MgRGF0YWdyaWRIZWFkZXJSZW5kZXJlciBhbmQgQ2xyRGF0YWdyaWRDb2x1bW5TZXBhcmF0b3Jcbi8vIHRvIHNoYXJlIGNvbHVtbiByZXNpemUgZGF0YSB3aXRoIGVhY2ggb3RoZXIuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5SZXNpemVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZG9tQWRhcHRlcjogRG9tQWRhcHRlciwgcHJpdmF0ZSBvcmdhbml6ZXI6IERhdGFncmlkUmVuZGVyT3JnYW5pemVyKSB7fVxuXG4gIHByaXZhdGUgd2lkdGhCZWZvcmVSZXNpemU6IG51bWJlcjtcblxuICBwcml2YXRlIF9yZXNpemVkQnk6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGdldCByZXNpemVkQnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc2l6ZWRCeTtcbiAgfVxuXG4gIC8vIGlzIGl0IHdpdGhpbiB0aGUgbWF4aW11bSByZXNpemUgcmFuZ2UgdG8gdGhlIGxlZnRcbiAgcHVibGljIGlzV2l0aGluTWF4UmVzaXplUmFuZ2U6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBtaW5Db2x1bW5XaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21BZGFwdGVyLm1pbldpZHRoKHRoaXMuZWwubmF0aXZlRWxlbWVudCkgfHwgTUlOX0NPTFVNTl9XSURUSDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4UmVzaXplUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGhCZWZvcmVSZXNpemUgLSB0aGlzLm1pbkNvbHVtbldpZHRoO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0UmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZWRCeSA9IDA7XG4gICAgdGhpcy5pc1dpdGhpbk1heFJlc2l6ZVJhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLndpZHRoQmVmb3JlUmVzaXplID0gdGhpcy5kb21BZGFwdGVyLmNsaWVudFJlY3QodGhpcy5lbC5uYXRpdmVFbGVtZW50KS53aWR0aDtcbiAgfVxuXG4gIHB1YmxpYyBlbmRSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5vcmdhbml6ZXIucmVzaXplKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHdpZHRoQWZ0ZXJSZXNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aEJlZm9yZVJlc2l6ZSArIHRoaXMuX3Jlc2l6ZWRCeTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVSZXNpemUoZXZlbnQ6IENsckRyYWdFdmVudDxhbnk+KTogdm9pZCB7XG4gICAgY29uc3QgbW92ZVggPSBldmVudC5kcmFnUG9zaXRpb24ubW92ZVg7XG4gICAgLy8gcmV0dXJucyB0aGUgcmVzaXplIGFtb3VudCB3aXRoaW4gdGhlIGFsbG93ZWQgcmFuZ2VcbiAgICBpZiAobW92ZVggPCAtdGhpcy5tYXhSZXNpemVSYW5nZSkge1xuICAgICAgdGhpcy5fcmVzaXplZEJ5ID0gLXRoaXMubWF4UmVzaXplUmFuZ2U7XG4gICAgICB0aGlzLmlzV2l0aGluTWF4UmVzaXplUmFuZ2UgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzaXplZEJ5ID0gbW92ZVg7XG4gICAgICB0aGlzLmlzV2l0aGluTWF4UmVzaXplUmFuZ2UgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19