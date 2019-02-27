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
var ClrDatagridItems = /** @class */ (function () {
    function ClrDatagridItems(template, differs, items, vcr) {
        var _this = this;
        this.template = template;
        this.differs = differs;
        this.items = items;
        this.vcr = vcr;
        this.differ = null;
        this.subscriptions = [];
        items.smartenUp();
        this.iterableProxy = new NgForOf(this.vcr, this.template, this.differs);
        this.subscriptions.push(items.change.subscribe(function (newItems) {
            _this.iterableProxy.ngForOf = newItems;
            _this.iterableProxy.ngDoCheck();
        }));
    }
    Object.defineProperty(ClrDatagridItems.prototype, "rawItems", {
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._rawItems = items ? items : []; // local copy for ngOnChange diffing
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDatagridItems.prototype, "trackBy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iterableProxy.ngForTrackBy = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrDatagridItems.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.differ) {
            this.differ = this.differs.find(this._rawItems).create(this.iterableProxy.ngForTrackBy);
        }
        if (this.differ) {
            /** @type {?} */
            var changes = this.differ.diff(this._rawItems);
            if (changes) {
                // TODO: not very efficient right now,
                // but premature optimization is the root of all evil.
                this.items.all = this._rawItems;
            }
        }
    };
    /**
     * @return {?}
     */
    ClrDatagridItems.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ClrDatagridItems.decorators = [
        { type: Directive, args: [{
                    selector: '[clrDgItems][clrDgItemsOf]',
                },] }
    ];
    /** @nocollapse */
    ClrDatagridItems.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: IterableDiffers },
        { type: Items },
        { type: ViewContainerRef }
    ]; };
    ClrDatagridItems.propDecorators = {
        rawItems: [{ type: Input, args: ['clrDgItemsOf',] }],
        trackBy: [{ type: Input, args: ['clrDgItemsTrackBy',] }]
    };
    return ClrDatagridItems;
}());
export { ClrDatagridItems };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtaXRlbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWl0ZW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBRUwsZUFBZSxFQUNmLFdBQVcsRUFFWCxnQkFBZ0IsR0FFakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRzFDO0lBbUJFLDBCQUNTLFFBQXdDLEVBQ3ZDLE9BQXdCLEVBQ3hCLEtBQVksRUFDWixHQUFxQjtRQUovQixpQkFjQztRQWJRLGFBQVEsR0FBUixRQUFRLENBQWdDO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQWpCdkIsV0FBTSxHQUE2QixJQUFJLENBQUM7UUFDeEMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBa0J6QyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBSSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUF4QkQsc0JBQ1csc0NBQVE7Ozs7O1FBRG5CLFVBQ29CLEtBQVU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsb0NBQW9DO1FBQzNFLENBQUM7OztPQUFBO0lBRUQsc0JBQ0kscUNBQU87Ozs7O1FBRFgsVUFDWSxLQUF5QjtZQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFrQkQsb0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUNULE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hELElBQUksT0FBTyxFQUFFO2dCQUNYLHNDQUFzQztnQkFDdEMsc0RBQXNEO2dCQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3ZDOzs7O2dCQVhDLFdBQVc7Z0JBRFgsZUFBZTtnQkFPUixLQUFLO2dCQUpaLGdCQUFnQjs7OzJCQWdCZixLQUFLLFNBQUMsY0FBYzswQkFLcEIsS0FBSyxTQUFDLG1CQUFtQjs7SUFzQzVCLHVCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FqRFksZ0JBQWdCOzs7SUFDM0IseUNBQWtDOztJQUNsQyxxQ0FBdUI7O0lBQ3ZCLGtDQUFnRDs7SUFDaEQseUNBQTJDOztJQWF6QyxvQ0FBK0M7O0lBQy9DLG1DQUFnQzs7SUFDaEMsaUNBQW9COztJQUNwQiwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBOZ0Zvck9mLCBOZ0Zvck9mQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIElucHV0LFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vcHJvdmlkZXJzL2l0ZW1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xyRGdJdGVtc11bY2xyRGdJdGVtc09mXScsXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkSXRlbXM8VD4gaW1wbGVtZW50cyBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGl0ZXJhYmxlUHJveHk6IE5nRm9yT2Y8VD47XG4gIHByaXZhdGUgX3Jhd0l0ZW1zOiBUW107XG4gIHByaXZhdGUgZGlmZmVyOiBJdGVyYWJsZURpZmZlcjxUPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgQElucHV0KCdjbHJEZ0l0ZW1zT2YnKVxuICBwdWJsaWMgc2V0IHJhd0l0ZW1zKGl0ZW1zOiBUW10pIHtcbiAgICB0aGlzLl9yYXdJdGVtcyA9IGl0ZW1zID8gaXRlbXMgOiBbXTsgLy8gbG9jYWwgY29weSBmb3IgbmdPbkNoYW5nZSBkaWZmaW5nXG4gIH1cblxuICBASW5wdXQoJ2NsckRnSXRlbXNUcmFja0J5JylcbiAgc2V0IHRyYWNrQnkodmFsdWU6IFRyYWNrQnlGdW5jdGlvbjxUPikge1xuICAgIHRoaXMuaXRlcmFibGVQcm94eS5uZ0ZvclRyYWNrQnkgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8TmdGb3JPZkNvbnRleHQ8VD4+LFxuICAgIHByaXZhdGUgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIHByaXZhdGUgaXRlbXM6IEl0ZW1zLFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIGl0ZW1zLnNtYXJ0ZW5VcCgpO1xuICAgIHRoaXMuaXRlcmFibGVQcm94eSA9IG5ldyBOZ0Zvck9mPFQ+KHRoaXMudmNyLCB0aGlzLnRlbXBsYXRlLCB0aGlzLmRpZmZlcnMpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgaXRlbXMuY2hhbmdlLnN1YnNjcmliZShuZXdJdGVtcyA9PiB7XG4gICAgICAgIHRoaXMuaXRlcmFibGVQcm94eS5uZ0Zvck9mID0gbmV3SXRlbXM7XG4gICAgICAgIHRoaXMuaXRlcmFibGVQcm94eS5uZ0RvQ2hlY2soKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuZGlmZmVyKSB7XG4gICAgICB0aGlzLmRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuX3Jhd0l0ZW1zKS5jcmVhdGUodGhpcy5pdGVyYWJsZVByb3h5Lm5nRm9yVHJhY2tCeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpZmZlcikge1xuICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGlmZmVyLmRpZmYodGhpcy5fcmF3SXRlbXMpO1xuICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgLy8gVE9ETzogbm90IHZlcnkgZWZmaWNpZW50IHJpZ2h0IG5vdyxcbiAgICAgICAgLy8gYnV0IHByZW1hdHVyZSBvcHRpbWl6YXRpb24gaXMgdGhlIHJvb3Qgb2YgYWxsIGV2aWwuXG4gICAgICAgIHRoaXMuaXRlbXMuYWxsID0gdGhpcy5fcmF3SXRlbXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19