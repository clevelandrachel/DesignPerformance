/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgForOf } from '@angular/common';
import { Directive, Input, IterableDiffers, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Items } from './providers/items';
/**
 * @template T
 */
export class ClrDatagridItems {
    /**
     * @param {?} template
     * @param {?} differs
     * @param {?} items
     * @param {?} vcr
     */
    constructor(template, differs, items, vcr) {
        this.template = template;
        this.differs = differs;
        this.items = items;
        this.vcr = vcr;
        this.differ = null;
        this.subscriptions = [];
        items.smartenUp();
        this.iterableProxy = new NgForOf(this.vcr, this.template, this.differs);
        this.subscriptions.push(items.change.subscribe(newItems => {
            this.iterableProxy.ngForOf = newItems;
            this.iterableProxy.ngDoCheck();
        }));
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set rawItems(items) {
        this._rawItems = items ? items : []; // local copy for ngOnChange diffing
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trackBy(value) {
        this.iterableProxy.ngForTrackBy = value;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this.differ) {
            this.differ = this.differs.find(this._rawItems).create(this.iterableProxy.ngForTrackBy);
        }
        if (this.differ) {
            /** @type {?} */
            const changes = this.differ.diff(this._rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this.items.all = this._rawItems;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
ClrDatagridItems.decorators = [
    { type: Directive, args: [{
                selector: '[clrDgItems][clrDgItemsOf]',
            },] }
];
/** @nocollapse */
ClrDatagridItems.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers },
    { type: Items },
    { type: ViewContainerRef }
];
ClrDatagridItems.propDecorators = {
    rawItems: [{ type: Input, args: ['clrDgItemsOf',] }],
    trackBy: [{ type: Input, args: ['clrDgItemsTrackBy',] }]
};
if (false) {
    /** @type {?} */
    ClrDatagridItems.prototype.iterableProxy;
    /** @type {?} */
    ClrDatagridItems.prototype._rawItems;
    /** @type {?} */
    ClrDatagridItems.prototype.differ;
    /** @type {?} */
    ClrDatagridItems.prototype.subscriptions;
    /** @type {?} */
    ClrDatagridItems.prototype.template;
    /** @type {?} */
    ClrDatagridItems.prototype.differs;
    /** @type {?} */
    ClrDatagridItems.prototype.items;
    /** @type {?} */
    ClrDatagridItems.prototype.vcr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaXRlbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWl0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBRUwsZUFBZSxFQUNmLFdBQVcsRUFFWCxnQkFBZ0IsR0FFakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBTTFDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFnQjNCLFlBQ1MsUUFBd0MsRUFDdkMsT0FBd0IsRUFDeEIsS0FBWSxFQUNaLEdBQXFCO1FBSHRCLGFBQVEsR0FBUixRQUFRLENBQWdDO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQWpCdkIsV0FBTSxHQUE2QixJQUFJLENBQUM7UUFDeEMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBa0J6QyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBSSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUF4QkQsSUFDVyxRQUFRLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxvQ0FBb0M7SUFDM0UsQ0FBQzs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUF5QjtRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7OztJQWtCRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2tCQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hELElBQUksT0FBTyxFQUFFO2dCQUNYLHNDQUFzQztnQkFDdEMsc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOzs7O1lBWEMsV0FBVztZQURYLGVBQWU7WUFPUixLQUFLO1lBSlosZ0JBQWdCOzs7dUJBZ0JmLEtBQUssU0FBQyxjQUFjO3NCQUtwQixLQUFLLFNBQUMsbUJBQW1COzs7O0lBVjFCLHlDQUFrQzs7SUFDbEMscUNBQXVCOztJQUN2QixrQ0FBZ0Q7O0lBQ2hELHlDQUEyQzs7SUFhekMsb0NBQStDOztJQUMvQyxtQ0FBZ0M7O0lBQ2hDLGlDQUFvQjs7SUFDcEIsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgTmdGb3JPZiwgTmdGb3JPZkNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBJbnB1dCxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbXMgfSBmcm9tICcuL3Byb3ZpZGVycy9pdGVtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NsckRnSXRlbXNdW2NsckRnSXRlbXNPZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZEl0ZW1zPFQ+IGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpdGVyYWJsZVByb3h5OiBOZ0Zvck9mPFQ+O1xuICBwcml2YXRlIF9yYXdJdGVtczogVFtdO1xuICBwcml2YXRlIGRpZmZlcjogSXRlcmFibGVEaWZmZXI8VD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIEBJbnB1dCgnY2xyRGdJdGVtc09mJylcbiAgcHVibGljIHNldCByYXdJdGVtcyhpdGVtczogVFtdKSB7XG4gICAgdGhpcy5fcmF3SXRlbXMgPSBpdGVtcyA/IGl0ZW1zIDogW107IC8vIGxvY2FsIGNvcHkgZm9yIG5nT25DaGFuZ2UgZGlmZmluZ1xuICB9XG5cbiAgQElucHV0KCdjbHJEZ0l0ZW1zVHJhY2tCeScpXG4gIHNldCB0cmFja0J5KHZhbHVlOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcbiAgICB0aGlzLml0ZXJhYmxlUHJveHkubmdGb3JUcmFja0J5ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE5nRm9yT2ZDb250ZXh0PFQ+PixcbiAgICBwcml2YXRlIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBwcml2YXRlIGl0ZW1zOiBJdGVtcyxcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICBpdGVtcy5zbWFydGVuVXAoKTtcbiAgICB0aGlzLml0ZXJhYmxlUHJveHkgPSBuZXcgTmdGb3JPZjxUPih0aGlzLnZjciwgdGhpcy50ZW1wbGF0ZSwgdGhpcy5kaWZmZXJzKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIGl0ZW1zLmNoYW5nZS5zdWJzY3JpYmUobmV3SXRlbXMgPT4ge1xuICAgICAgICB0aGlzLml0ZXJhYmxlUHJveHkubmdGb3JPZiA9IG5ld0l0ZW1zO1xuICAgICAgICB0aGlzLml0ZXJhYmxlUHJveHkubmdEb0NoZWNrKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLmRpZmZlcikge1xuICAgICAgdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLl9yYXdJdGVtcykuY3JlYXRlKHRoaXMuaXRlcmFibGVQcm94eS5uZ0ZvclRyYWNrQnkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWZmZXIpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMuX3Jhd0l0ZW1zKTtcbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIC8vIFRPRE86IG5vdCB2ZXJ5IGVmZmljaWVudCByaWdodCBub3csXG4gICAgICAgIC8vIGJ1dCBwcmVtYXR1cmUgb3B0aW1pemF0aW9uIGlzIHRoZSByb290IG9mIGFsbCBldmlsLlxuICAgICAgICB0aGlzLml0ZW1zLmFsbCA9IHRoaXMuX3Jhd0l0ZW1zO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==