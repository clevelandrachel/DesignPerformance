/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, Optional } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { TreeFeaturesService } from './tree-features.service';
import { TreeNodeModel } from './models/tree-node.model';
/**
 * @template T
 */
var RecursiveChildren = /** @class */ (function () {
    function RecursiveChildren(featuresService, expandService) {
        var _this = this;
        this.featuresService = featuresService;
        this.expandService = expandService;
        if (expandService && featuresService.recursion) {
            this.subscription = this.expandService.expandChange.subscribe(function (value) {
                if (value && _this.parent) {
                    // Once again, I'm sure we can find a way to avoid this casting by typing every component in a way that
                    // lets us use the more specific model classes depending on the use of *clrRecursiveForOf or not.
                    // But it would take time, which we don't have right now.
                    ((/** @type {?} */ (_this.parent))).fetchChildren();
                }
            });
        }
    }
    /**
     * @return {?}
     */
    RecursiveChildren.prototype.shouldRender = /**
     * @return {?}
     */
    function () {
        return (this.featuresService.recursion &&
            // In the smart case, we eagerly render all the recursive children
            // to make sure two-way bindings for selection are available.
            // They will be hidden with CSS by the parent.
            (this.featuresService.eager || !this.expandService || this.expandService.expanded));
    };
    /**
     * @param {?} node
     * @return {?}
     */
    RecursiveChildren.prototype.getContext = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return {
            $implicit: node.model,
            clrModel: node,
        };
    };
    /**
     * @return {?}
     */
    RecursiveChildren.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    RecursiveChildren.decorators = [
        { type: Component, args: [{
                    selector: 'clr-recursive-children',
                    template: "\n    <ng-container *ngIf=\"shouldRender()\">\n      <ng-container *ngFor=\"let child of parent?.children || children\">\n        <ng-container *ngTemplateOutlet=\"featuresService.recursion.template; context: getContext(child)\"></ng-container>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    RecursiveChildren.ctorParameters = function () { return [
        { type: TreeFeaturesService },
        { type: Expand, decorators: [{ type: Optional }] }
    ]; };
    RecursiveChildren.propDecorators = {
        parent: [{ type: Input, args: ['parent',] }],
        children: [{ type: Input, args: ['children',] }]
    };
    return RecursiveChildren;
}());
export { RecursiveChildren };
if (false) {
    /** @type {?} */
    RecursiveChildren.prototype.parent;
    /** @type {?} */
    RecursiveChildren.prototype.children;
    /** @type {?} */
    RecursiveChildren.prototype.subscription;
    /** @type {?} */
    RecursiveChildren.prototype.featuresService;
    /** @type {?} */
    RecursiveChildren.prototype.expandService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlLWNoaWxkcmVuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvcmVjdXJzaXZlLWNoaWxkcmVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBSXpEO0lBZUUsMkJBQW1CLGVBQXVDLEVBQXNCLGFBQXFCO1FBQXJHLGlCQVdDO1FBWGtCLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUFzQixrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUNuRyxJQUFJLGFBQWEsSUFBSSxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDakUsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtvQkFDeEIsdUdBQXVHO29CQUN2RyxpR0FBaUc7b0JBQ2pHLHlEQUF5RDtvQkFDekQsQ0FBQyxtQkFBMkIsS0FBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQzFEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7SUFFRCx3Q0FBWTs7O0lBQVo7UUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTO1lBQzlCLGtFQUFrRTtZQUNsRSw2REFBNkQ7WUFDN0QsOENBQThDO1lBQzlDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ25GLENBQUM7SUFDSixDQUFDOzs7OztJQU9ELHNDQUFVOzs7O0lBQVYsVUFBVyxJQUFzQjtRQUMvQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7SUFJRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHNTQU1UO2lCQUNGOzs7O2dCQWRRLG1CQUFtQjtnQkFEbkIsTUFBTSx1QkFxQmdELFFBQVE7Ozt5QkF5QnBFLEtBQUssU0FBQyxRQUFROzJCQUNkLEtBQUssU0FBQyxVQUFVOztJQWdCbkIsd0JBQUM7Q0FBQSxBQXpERCxJQXlEQztTQTNDWSxpQkFBaUI7OztJQTBCNUIsbUNBQTBDOztJQUMxQyxxQ0FBZ0Q7O0lBU2hELHlDQUEyQjs7SUFuQ2YsNENBQThDOztJQUFFLDBDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFeHBhbmQgfSBmcm9tICcuLi8uLi91dGlscy9leHBhbmQvcHJvdmlkZXJzL2V4cGFuZCc7XG5pbXBvcnQgeyBUcmVlRmVhdHVyZXNTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWZlYXR1cmVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJlZU5vZGVNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBDbHJSZWN1cnNpdmVGb3JPZkNvbnRleHQgfSBmcm9tICcuL3JlY3Vyc2l2ZS1mb3Itb2YnO1xuaW1wb3J0IHsgUmVjdXJzaXZlVHJlZU5vZGVNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3JlY3Vyc2l2ZS10cmVlLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItcmVjdXJzaXZlLWNoaWxkcmVuJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvdWxkUmVuZGVyKClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoaWxkIG9mIHBhcmVudD8uY2hpbGRyZW4gfHwgY2hpbGRyZW5cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZlYXR1cmVzU2VydmljZS5yZWN1cnNpb24udGVtcGxhdGU7IGNvbnRleHQ6IGdldENvbnRleHQoY2hpbGQpXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG4vKipcbiAqIEludGVybmFsIGNvbXBvbmVudCwgZG8gbm90IGV4cG9ydCFcbiAqIFRoaXMgaXMgcGFydCBvZiB0aGUgaGFjayB0byBnZXQgYXJvdW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1OTk4XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWN1cnNpdmVDaGlsZHJlbjxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmZWF0dXJlc1NlcnZpY2U6IFRyZWVGZWF0dXJlc1NlcnZpY2U8VD4sIEBPcHRpb25hbCgpIHByaXZhdGUgZXhwYW5kU2VydmljZTogRXhwYW5kKSB7XG4gICAgaWYgKGV4cGFuZFNlcnZpY2UgJiYgZmVhdHVyZXNTZXJ2aWNlLnJlY3Vyc2lvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmV4cGFuZFNlcnZpY2UuZXhwYW5kQ2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgICAgIC8vIE9uY2UgYWdhaW4sIEknbSBzdXJlIHdlIGNhbiBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXMgY2FzdGluZyBieSB0eXBpbmcgZXZlcnkgY29tcG9uZW50IGluIGEgd2F5IHRoYXRcbiAgICAgICAgICAvLyBsZXRzIHVzIHVzZSB0aGUgbW9yZSBzcGVjaWZpYyBtb2RlbCBjbGFzc2VzIGRlcGVuZGluZyBvbiB0aGUgdXNlIG9mICpjbHJSZWN1cnNpdmVGb3JPZiBvciBub3QuXG4gICAgICAgICAgLy8gQnV0IGl0IHdvdWxkIHRha2UgdGltZSwgd2hpY2ggd2UgZG9uJ3QgaGF2ZSByaWdodCBub3cuXG4gICAgICAgICAgKDxSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+PnRoaXMucGFyZW50KS5mZXRjaENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZFJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mZWF0dXJlc1NlcnZpY2UucmVjdXJzaW9uICYmXG4gICAgICAvLyBJbiB0aGUgc21hcnQgY2FzZSwgd2UgZWFnZXJseSByZW5kZXIgYWxsIHRoZSByZWN1cnNpdmUgY2hpbGRyZW5cbiAgICAgIC8vIHRvIG1ha2Ugc3VyZSB0d28td2F5IGJpbmRpbmdzIGZvciBzZWxlY3Rpb24gYXJlIGF2YWlsYWJsZS5cbiAgICAgIC8vIFRoZXkgd2lsbCBiZSBoaWRkZW4gd2l0aCBDU1MgYnkgdGhlIHBhcmVudC5cbiAgICAgICh0aGlzLmZlYXR1cmVzU2VydmljZS5lYWdlciB8fCAhdGhpcy5leHBhbmRTZXJ2aWNlIHx8IHRoaXMuZXhwYW5kU2VydmljZS5leHBhbmRlZClcbiAgICApO1xuICB9XG5cbiAgLy8gT2ZmZXJpbmcgdGhlIG9wdGlvbiB0byBlaXRoZXIgZ2l2ZSB0aGUgcGFyZW50IG5vZGUgdG8gcmVjdXJzZSBwb3RlbnRpYWxseSBsYXppbHksXG4gIC8vIG9yIGRpcmVjdGx5IHRoZSBsaXN0IG9mIGNoaWxkcmVuIHRvIGRpc3BsYXkuXG4gIEBJbnB1dCgncGFyZW50JykgcGFyZW50OiBUcmVlTm9kZU1vZGVsPFQ+O1xuICBASW5wdXQoJ2NoaWxkcmVuJykgY2hpbGRyZW46IFRyZWVOb2RlTW9kZWw8VD5bXTtcblxuICBnZXRDb250ZXh0KG5vZGU6IFRyZWVOb2RlTW9kZWw8VD4pOiBDbHJSZWN1cnNpdmVGb3JPZkNvbnRleHQ8VD4ge1xuICAgIHJldHVybiB7XG4gICAgICAkaW1wbGljaXQ6IG5vZGUubW9kZWwsXG4gICAgICBjbHJNb2RlbDogbm9kZSxcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19