/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class DeclarativeTreeNodeModel extends TreeNodeModel {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        super();
        this.parent = parent;
        if (parent) {
            parent._addChild(this);
        }
        this.children = [];
    }
    /**
     * @param {?} child
     * @return {?}
     */
    _addChild(child) {
        this.children.push(child);
    }
    /**
     * @param {?} child
     * @return {?}
     */
    _removeChild(child) {
        /** @type {?} */
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.parent) {
            this.parent._removeChild(this);
        }
        super.destroy();
    }
}
if (false) {
    /** @type {?} */
    DeclarativeTreeNodeModel.prototype.parent;
    /** @type {?} */
    DeclarativeTreeNodeModel.prototype.children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpdmUtdHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvbW9kZWxzL2RlY2xhcmF0aXZlLXRyZWUtbm9kZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0FBTWxELE1BQU0sT0FBTyx3QkFBNEIsU0FBUSxhQUFnQjs7OztJQUMvRCxZQUFZLE1BQTBDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFNRCxTQUFTLENBQUMsS0FBa0M7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBa0M7O2NBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjs7O0lBcEJDLDBDQUEyQzs7SUFDM0MsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuXG4vKlxuICogQSBkZWNsYXJhdGl2ZSBtb2RlbCBpcyBidWlsdCBieSB0cmF2ZXJzaW5nIHRoZSBBbmd1bGFyIGNvbXBvbmVudCB0cmVlLlxuICogRGVjbGFyYXRpdmUgPSBUcmVlIG5vZGUgY29tcG9uZW50cyBkaWN0YXRlIHRoZSBtb2RlbFxuICovXG5leHBvcnQgY2xhc3MgRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+IGV4dGVuZHMgVHJlZU5vZGVNb2RlbDxUPiB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudDogRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+IHwgbnVsbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Ll9hZGRDaGlsZCh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgZm9yIGEgbW9yZSBwcmVjaXNlIHR5cGVcbiAgcGFyZW50OiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4gfCBudWxsO1xuICBjaGlsZHJlbjogRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsPFQ+W107XG5cbiAgX2FkZENoaWxkKGNoaWxkOiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4pIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICB9XG5cbiAgX3JlbW92ZUNoaWxkKGNoaWxkOiBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQuX3JlbW92ZUNoaWxkKHRoaXMpO1xuICAgIH1cbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==