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
var MIN_COLUMN_WIDTH = 96;
// This service allows DatagridHeaderRenderer and ClrDatagridColumnSeparator
// to share column resize data with each other.
var ColumnResizerService = /** @class */ (function () {
    function ColumnResizerService(el, domAdapter, organizer) {
        this.el = el;
        this.domAdapter = domAdapter;
        this.organizer = organizer;
        this._resizedBy = 0;
    }
    Object.defineProperty(ColumnResizerService.prototype, "resizedBy", {
        get: /**
         * @return {?}
         */
        function () {
            return this._resizedBy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnResizerService.prototype, "minColumnWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.domAdapter.minWidth(this.el.nativeElement) || MIN_COLUMN_WIDTH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnResizerService.prototype, "maxResizeRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.widthBeforeResize - this.minColumnWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColumnResizerService.prototype.startResize = /**
     * @return {?}
     */
    function () {
        this._resizedBy = 0;
        this.isWithinMaxResizeRange = true;
        this.widthBeforeResize = this.domAdapter.clientRect(this.el.nativeElement).width;
    };
    /**
     * @return {?}
     */
    ColumnResizerService.prototype.endResize = /**
     * @return {?}
     */
    function () {
        this.organizer.resize();
    };
    Object.defineProperty(ColumnResizerService.prototype, "widthAfterResize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.widthBeforeResize + this._resizedBy;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ColumnResizerService.prototype.calculateResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var moveX = event.dragPosition.moveX;
        // returns the resize amount within the allowed range
        if (moveX < -this.maxResizeRange) {
            this._resizedBy = -this.maxResizeRange;
            this.isWithinMaxResizeRange = false;
        }
        else {
            this._resizedBy = moveX;
            this.isWithinMaxResizeRange = true;
        }
    };
    ColumnResizerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ColumnResizerService.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomAdapter },
        { type: DatagridRenderOrganizer }
    ]; };
    return ColumnResizerService;
}());
export { ColumnResizerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXJlc2l6ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcHJvdmlkZXJzL2NvbHVtbi1yZXNpemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXBFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUUvRCxnQkFBZ0IsR0FBRyxFQUFFOzs7QUFLM0I7SUFFRSw4QkFBb0IsRUFBYyxFQUFVLFVBQXNCLEVBQVUsU0FBa0M7UUFBMUYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUF5QjtRQUl0RyxlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBSmtGLENBQUM7SUFNbEgsc0JBQVcsMkNBQVM7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxnREFBYzs7OztRQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdEQUFjOzs7O1FBQXpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTs7OztJQUVNLDBDQUFXOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDOzs7O0lBRU0sd0NBQVM7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFXLGtEQUFnQjs7OztRQUEzQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7Ozs7O0lBRU0sOENBQWU7Ozs7SUFBdEIsVUFBdUIsS0FBd0I7O1lBQ3ZDLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7UUFDdEMscURBQXFEO1FBQ3JELElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Z0JBL0NGLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFFVixVQUFVO2dCQUVWLHVCQUF1Qjs7SUF1RGhDLDJCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQ1ksb0JBQW9COzs7SUFHL0IsaURBQWtDOztJQUVsQywwQ0FBK0I7O0lBTy9CLHNEQUF1Qzs7SUFYM0Isa0NBQXNCOztJQUFFLDBDQUE4Qjs7SUFBRSx5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kb20tYWRhcHRlci9kb20tYWRhcHRlcic7XG5pbXBvcnQgeyBDbHJEcmFnRXZlbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctZXZlbnQnO1xuaW1wb3J0IHsgRGF0YWdyaWRSZW5kZXJPcmdhbml6ZXIgfSBmcm9tICcuLi9yZW5kZXIvcmVuZGVyLW9yZ2FuaXplcic7XG5cbmNvbnN0IE1JTl9DT0xVTU5fV0lEVEggPSA5NjtcblxuLy8gVGhpcyBzZXJ2aWNlIGFsbG93cyBEYXRhZ3JpZEhlYWRlclJlbmRlcmVyIGFuZCBDbHJEYXRhZ3JpZENvbHVtblNlcGFyYXRvclxuLy8gdG8gc2hhcmUgY29sdW1uIHJlc2l6ZSBkYXRhIHdpdGggZWFjaCBvdGhlci5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtblJlc2l6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkb21BZGFwdGVyOiBEb21BZGFwdGVyLCBwcml2YXRlIG9yZ2FuaXplcjogRGF0YWdyaWRSZW5kZXJPcmdhbml6ZXIpIHt9XG5cbiAgcHJpdmF0ZSB3aWR0aEJlZm9yZVJlc2l6ZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgX3Jlc2l6ZWRCeTogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgZ2V0IHJlc2l6ZWRCeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzaXplZEJ5O1xuICB9XG5cbiAgLy8gaXMgaXQgd2l0aGluIHRoZSBtYXhpbXVtIHJlc2l6ZSByYW5nZSB0byB0aGUgbGVmdFxuICBwdWJsaWMgaXNXaXRoaW5NYXhSZXNpemVSYW5nZTogYm9vbGVhbjtcblxuICBwdWJsaWMgZ2V0IG1pbkNvbHVtbldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRvbUFkYXB0ZXIubWluV2lkdGgodGhpcy5lbC5uYXRpdmVFbGVtZW50KSB8fCBNSU5fQ09MVU1OX1dJRFRIO1xuICB9XG5cbiAgcHVibGljIGdldCBtYXhSZXNpemVSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aEJlZm9yZVJlc2l6ZSAtIHRoaXMubWluQ29sdW1uV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzaXplZEJ5ID0gMDtcbiAgICB0aGlzLmlzV2l0aGluTWF4UmVzaXplUmFuZ2UgPSB0cnVlO1xuICAgIHRoaXMud2lkdGhCZWZvcmVSZXNpemUgPSB0aGlzLmRvbUFkYXB0ZXIuY2xpZW50UmVjdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLndpZHRoO1xuICB9XG5cbiAgcHVibGljIGVuZFJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9yZ2FuaXplci5yZXNpemUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgd2lkdGhBZnRlclJlc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpZHRoQmVmb3JlUmVzaXplICsgdGhpcy5fcmVzaXplZEJ5O1xuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZVJlc2l6ZShldmVudDogQ2xyRHJhZ0V2ZW50PGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBtb3ZlWCA9IGV2ZW50LmRyYWdQb3NpdGlvbi5tb3ZlWDtcbiAgICAvLyByZXR1cm5zIHRoZSByZXNpemUgYW1vdW50IHdpdGhpbiB0aGUgYWxsb3dlZCByYW5nZVxuICAgIGlmIChtb3ZlWCA8IC10aGlzLm1heFJlc2l6ZVJhbmdlKSB7XG4gICAgICB0aGlzLl9yZXNpemVkQnkgPSAtdGhpcy5tYXhSZXNpemVSYW5nZTtcbiAgICAgIHRoaXMuaXNXaXRoaW5NYXhSZXNpemVSYW5nZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXNpemVkQnkgPSBtb3ZlWDtcbiAgICAgIHRoaXMuaXNXaXRoaW5NYXhSZXNpemVSYW5nZSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=