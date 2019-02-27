/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { TreeFeaturesService } from './tree-features.service';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
/**
 * @record
 * @template T
 */
export function ClrRecursiveForOfContext() { }
if (false) {
    /** @type {?} */
    ClrRecursiveForOfContext.prototype.$implicit;
    /** @type {?} */
    ClrRecursiveForOfContext.prototype.clrModel;
}
/**
 * @template T
 */
var ClrRecursiveForOf = /** @class */ (function () {
    function ClrRecursiveForOf(template, featuresService) {
        this.template = template;
        this.featuresService = featuresService;
    }
    // I'm using OnChanges instead of OnInit to easily keep up to date with dynamic trees. Maybe optimizable later.
    // I'm using OnChanges instead of OnInit to easily keep up to date with dynamic trees. Maybe optimizable later.
    /**
     * @return {?}
     */
    ClrRecursiveForOf.prototype.ngOnChanges = 
    // I'm using OnChanges instead of OnInit to easily keep up to date with dynamic trees. Maybe optimizable later.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var wrapped;
        if (Array.isArray(this.nodes)) {
            wrapped = this.nodes.map(function (node) { return new RecursiveTreeNodeModel(node, null, _this.getChildren); });
        }
        else {
            wrapped = [new RecursiveTreeNodeModel(this.nodes, null, this.getChildren)];
        }
        this.featuresService.recursion = {
            template: this.template,
            root: wrapped,
        };
    };
    ClrRecursiveForOf.decorators = [
        { type: Directive, args: [{ selector: '[clrRecursiveFor][clrRecursiveForOf]' },] }
    ];
    /** @nocollapse */
    ClrRecursiveForOf.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: TreeFeaturesService }
    ]; };
    ClrRecursiveForOf.propDecorators = {
        nodes: [{ type: Input, args: ['clrRecursiveForOf',] }],
        getChildren: [{ type: Input, args: ['clrRecursiveForGetChildren',] }]
    };
    return ClrRecursiveForOf;
}());
export { ClrRecursiveForOf };
if (false) {
    /** @type {?} */
    ClrRecursiveForOf.prototype.nodes;
    /** @type {?} */
    ClrRecursiveForOf.prototype.getChildren;
    /** @type {?} */
    ClrRecursiveForOf.prototype.template;
    /** @type {?} */
    ClrRecursiveForOf.prototype.featuresService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlLWZvci1vZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L3JlY3Vyc2l2ZS1mb3Itb2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUk1RSw4Q0FHQzs7O0lBRkMsNkNBQWE7O0lBQ2IsNENBQTJCOzs7OztBQUc3QjtJQUVFLDJCQUNVLFFBQWtELEVBQ2xELGVBQXVDO1FBRHZDLGFBQVEsR0FBUixRQUFRLENBQTBDO1FBQ2xELG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUM5QyxDQUFDO0lBUUosK0dBQStHOzs7OztJQUMvRyx1Q0FBVzs7Ozs7SUFBWDtRQUFBLGlCQVdDOztZQVZLLE9BQW9DO1FBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDO1NBQzVGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUc7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztJQUNKLENBQUM7O2dCQXpCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0NBQXNDLEVBQUU7Ozs7Z0JBWHpCLFdBQVc7Z0JBQ3hDLG1CQUFtQjs7O3dCQWtCekIsS0FBSyxTQUFDLG1CQUFtQjs4QkFHekIsS0FBSyxTQUFDLDRCQUE0Qjs7SUFlckMsd0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSxpQkFBaUI7OztJQU81QixrQ0FBMkM7O0lBRzNDLHdDQUE2RTs7SUFSM0UscUNBQTBEOztJQUMxRCw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVGZWF0dXJlc1NlcnZpY2UgfSBmcm9tICcuL3RyZWUtZmVhdHVyZXMuc2VydmljZSc7XG5pbXBvcnQgeyBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvcmVjdXJzaXZlLXRyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IEFzeW5jQXJyYXkgfSBmcm9tICcuL21vZGVscy9hc3luYy1hcnJheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xyUmVjdXJzaXZlRm9yT2ZDb250ZXh0PFQ+IHtcbiAgJGltcGxpY2l0OiBUO1xuICBjbHJNb2RlbDogVHJlZU5vZGVNb2RlbDxUPjtcbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclJlY3Vyc2l2ZUZvcl1bY2xyUmVjdXJzaXZlRm9yT2ZdJyB9KVxuZXhwb3J0IGNsYXNzIENsclJlY3Vyc2l2ZUZvck9mPFQ+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8Q2xyUmVjdXJzaXZlRm9yT2ZDb250ZXh0PFQ+PixcbiAgICBwcml2YXRlIGZlYXR1cmVzU2VydmljZTogVHJlZUZlYXR1cmVzU2VydmljZTxUPlxuICApIHt9XG5cbiAgLy8gVE9ETzogYWNjZXB0IE5nSXRlcmFibGU8VD5cbiAgQElucHV0KCdjbHJSZWN1cnNpdmVGb3JPZicpIG5vZGVzOiBUIHwgVFtdO1xuXG4gIC8vIFRPRE86IGFjY2VwdCBOZ0l0ZXJhYmxlPFQ+IHJldHVybiB0eXBlXG4gIEBJbnB1dCgnY2xyUmVjdXJzaXZlRm9yR2V0Q2hpbGRyZW4nKSBnZXRDaGlsZHJlbjogKG5vZGU6IFQpID0+IEFzeW5jQXJyYXk8VD47XG5cbiAgLy8gSSdtIHVzaW5nIE9uQ2hhbmdlcyBpbnN0ZWFkIG9mIE9uSW5pdCB0byBlYXNpbHkga2VlcCB1cCB0byBkYXRlIHdpdGggZHluYW1pYyB0cmVlcy4gTWF5YmUgb3B0aW1pemFibGUgbGF0ZXIuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGxldCB3cmFwcGVkOiBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+W107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ub2RlcykpIHtcbiAgICAgIHdyYXBwZWQgPSB0aGlzLm5vZGVzLm1hcChub2RlID0+IG5ldyBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsKG5vZGUsIG51bGwsIHRoaXMuZ2V0Q2hpbGRyZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlZCA9IFtuZXcgUmVjdXJzaXZlVHJlZU5vZGVNb2RlbCh0aGlzLm5vZGVzLCBudWxsLCB0aGlzLmdldENoaWxkcmVuKV07XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZXNTZXJ2aWNlLnJlY3Vyc2lvbiA9IHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuICAgICAgcm9vdDogd3JhcHBlZCxcbiAgICB9O1xuICB9XG59XG4iXX0=