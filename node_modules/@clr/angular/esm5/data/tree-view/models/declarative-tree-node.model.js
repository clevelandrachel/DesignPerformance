/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TreeNodeModel } from './tree-node.model';
/*
 * A declarative model is built by traversing the Angular component tree.
 * Declarative = Tree node components dictate the model
 */
/**
 * @template T
 */
var /*
 * A declarative model is built by traversing the Angular component tree.
 * Declarative = Tree node components dictate the model
 */
/**
 * @template T
 */
DeclarativeTreeNodeModel = /** @class */ (function (_super) {
    tslib_1.__extends(DeclarativeTreeNodeModel, _super);
    function DeclarativeTreeNodeModel(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        if (parent) {
            parent._addChild(_this);
        }
        _this.children = [];
        return _this;
    }
    /**
     * @param {?} child
     * @return {?}
     */
    DeclarativeTreeNodeModel.prototype._addChild = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        this.children.push(child);
    };
    /**
     * @param {?} child
     * @return {?}
     */
    DeclarativeTreeNodeModel.prototype._removeChild = /**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    };
    /**
     * @return {?}
     */
    DeclarativeTreeNodeModel.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.parent) {
            this.parent._removeChild(this);
        }
        _super.prototype.destroy.call(this);
    };
    return DeclarativeTreeNodeModel;
}(TreeNodeModel));
/*
 * A declarative model is built by traversing the Angular component tree.
 * Declarative = Tree node components dictate the model
 */
/**
 * @template T
 */
export { DeclarativeTreeNodeModel };
if (false) {
    /** @type {?} */
    DeclarativeTreeNodeModel.prototype.parent;
    /** @type {?} */
    DeclarativeTreeNodeModel.prototype.children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpdmUtdHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvbW9kZWxzL2RlY2xhcmF0aXZlLXRyZWUtbm9kZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7OztBQU1sRDs7Ozs7Ozs7SUFBaUQsb0RBQWdCO0lBQy9ELGtDQUFZLE1BQTBDO1FBQXRELFlBQ0UsaUJBQU8sU0FNUjtRQUxDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQztTQUN4QjtRQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztJQUNyQixDQUFDOzs7OztJQU1ELDRDQUFTOzs7O0lBQVQsVUFBVSxLQUFrQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxLQUFrQzs7WUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFRCwwQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztRQUNELGlCQUFNLE9BQU8sV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBaUQsYUFBYSxHQStCN0Q7Ozs7Ozs7Ozs7O0lBcEJDLDBDQUEyQzs7SUFDM0MsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuXG4vKlxuICogQSBkZWNsYXJhdGl2ZSBtb2RlbCBpcyBidWlsdCBieSB0cmF2ZXJzaW5nIHRoZSBBbmd1bGFyIGNvbXBvbmVudCB0cmVlLlxuICogRGVjbGFyYXRpdmUgPSBUcmVlIG5vZGUgY29tcG9uZW50cyBkaWN0YXRlIHRoZSBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+IGV4dGVuZHMgVHJlZU5vZGVNb2RlbDxUPiB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudDogRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+IHwgbnVsbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgZm9yIGEgbW9yZSBwcmVjaXNlIHR5cGVcbiAgcGFyZW50OiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4gfCBudWxsO1xuICBjaGlsZHJlbjogRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+W107XG5cbiAgX2FkZENoaWxkKGNoaWxkOiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4pIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgX3JlbW92ZUNoaWxkKGNoaWxkOiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQuX3JlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==