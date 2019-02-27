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
import { isObservable } from 'rxjs';
import { TreeNodeModel } from './tree-node.model';
import { isPromise } from './async-array';
/*
 * A recursive model is built received from the app and traversed to create the corresponding components.
 * Recursive = Model dictates the tree node components
 */
/**
 * @template T
 */
var /*
 * A recursive model is built received from the app and traversed to create the corresponding components.
 * Recursive = Model dictates the tree node components
 */
/**
 * @template T
 */
RecursiveTreeNodeModel = /** @class */ (function (_super) {
    tslib_1.__extends(RecursiveTreeNodeModel, _super);
    function RecursiveTreeNodeModel(model, parent, getChildren) {
        var _this = _super.call(this) || this;
        _this.getChildren = getChildren;
        _this.childrenFetched = false;
        _this._children = [];
        _this.model = model;
        _this.parent = parent;
        return _this;
    }
    /**
     * @return {?}
     */
    RecursiveTreeNodeModel.prototype.fetchChildren = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.childrenFetched) {
            return;
        }
        /** @type {?} */
        var asyncChildren = this.getChildren(this.model);
        if (isPromise(asyncChildren)) {
            this.loading = true;
            asyncChildren.then(function (raw) {
                _this._children = _this.wrapChildren(raw);
                _this.loading = false;
            });
        }
        else if (isObservable(asyncChildren)) {
            this.loading = true;
            this.subscription = asyncChildren.subscribe(function (raw) {
                _this._children = _this.wrapChildren(raw);
                _this.loading = false;
            });
        }
        else if (asyncChildren) {
            // Synchronous case
            this._children = this.wrapChildren(asyncChildren);
        }
        else {
            this._children = [];
        }
        this.childrenFetched = true;
    };
    /**
     * @param {?} rawModels
     * @return {?}
     */
    RecursiveTreeNodeModel.prototype.wrapChildren = /**
     * @param {?} rawModels
     * @return {?}
     */
    function (rawModels) {
        var _this = this;
        return rawModels.map(function (m) { return new RecursiveTreeNodeModel(m, _this, _this.getChildren); });
    };
    Object.defineProperty(RecursiveTreeNodeModel.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            this.fetchChildren();
            return this._children;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._children = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RecursiveTreeNodeModel.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        _super.prototype.destroy.call(this);
    };
    return RecursiveTreeNodeModel;
}(TreeNodeModel));
/*
 * A recursive model is built received from the app and traversed to create the corresponding components.
 * Recursive = Model dictates the tree node components
 */
/**
 * @template T
 */
export { RecursiveTreeNodeModel };
if (false) {
    /** @type {?} */
    RecursiveTreeNodeModel.prototype.parent;
    /** @type {?} */
    RecursiveTreeNodeModel.prototype.childrenFetched;
    /** @type {?} */
    RecursiveTreeNodeModel.prototype._children;
    /** @type {?} */
    RecursiveTreeNodeModel.prototype.subscription;
    /** @type {?} */
    RecursiveTreeNodeModel.prototype.getChildren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlLXRyZWUtbm9kZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L21vZGVscy9yZWN1cnNpdmUtdHJlZS1ub2RlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFNdEQ7Ozs7Ozs7O0lBQStDLGtEQUFnQjtJQUM3RCxnQ0FDRSxLQUFRLEVBQ1IsTUFBd0MsRUFDaEMsV0FBbUQ7UUFIN0QsWUFLRSxpQkFBTyxTQUdSO1FBTFMsaUJBQVcsR0FBWCxXQUFXLENBQXdDO1FBU3JELHFCQUFlLEdBQUcsS0FBSyxDQUFDO1FBaUN4QixlQUFTLEdBQWdDLEVBQUUsQ0FBQztRQXZDbEQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7Ozs7SUFNRCw4Q0FBYTs7O0lBQWI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU87U0FDUjs7WUFFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO2dCQUM3QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLGFBQWEsRUFBRTtZQUN4QixtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRU8sNkNBQVk7Ozs7SUFBcEIsVUFBcUIsU0FBYztRQUFuQyxpQkFFQztRQURDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsQ0FBQyxFQUFFLEtBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQXJELENBQXFELENBQUMsQ0FBQztJQUNuRixDQUFDO0lBR0Qsc0JBQUksNENBQVE7Ozs7UUFBWjtZQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEtBQWtDO1lBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBOzs7O0lBT0Qsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBL0RELENBQStDLGFBQWEsR0ErRDNEOzs7Ozs7Ozs7OztJQXBEQyx3Q0FBeUM7O0lBRXpDLGlEQUFnQzs7SUFpQ2hDLDJDQUFvRDs7SUFTcEQsOENBQW1DOztJQW5EakMsNkNBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBpc09ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgQXN5bmNBcnJheSwgaXNQcm9taXNlIH0gZnJvbSAnLi9hc3luYy1hcnJheSc7XG5cbi8qXG4gKiBBIHJlY3Vyc2l2ZSBtb2RlbCBpcyBidWlsdCByZWNlaXZlZCBmcm9tIHRoZSBhcHAgYW5kIHRyYXZlcnNlZCB0byBjcmVhdGUgdGhlIGNvcnJlc3BvbmRpbmcgY29tcG9uZW50cy5cbiAqIFJlY3Vyc2l2ZSA9IE1vZGVsIGRpY3RhdGVzIHRoZSB0cmVlIG5vZGUgY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgUmVjdXJzaXZlVHJlZU5vZGVNb2RlbDxUPiBleHRlbmRzIFRyZWVOb2RlTW9kZWw8VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RlbDogVCxcbiAgICBwYXJlbnQ6IFJlY3Vyc2l2ZVRyZWVOb2RlTW9kZWw8VD4gfCBudWxsLFxuICAgIHByaXZhdGUgZ2V0Q2hpbGRyZW46IChub2RlOiBUKSA9PiBBc3luY0FycmF5PFQ+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgcGFyZW50OiBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+IHwgbnVsbDtcblxuICBwcml2YXRlIGNoaWxkcmVuRmV0Y2hlZCA9IGZhbHNlO1xuXG4gIGZldGNoQ2hpbGRyZW4oKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW5GZXRjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXN5bmNDaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4odGhpcy5tb2RlbCk7XG4gICAgaWYgKGlzUHJvbWlzZShhc3luY0NoaWxkcmVuKSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGFzeW5jQ2hpbGRyZW4udGhlbihyYXcgPT4ge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMud3JhcENoaWxkcmVuKHJhdyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUoYXN5bmNDaGlsZHJlbikpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGFzeW5jQ2hpbGRyZW4uc3Vic2NyaWJlKHJhdyA9PiB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy53cmFwQ2hpbGRyZW4ocmF3KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGFzeW5jQ2hpbGRyZW4pIHtcbiAgICAgIC8vIFN5bmNocm9ub3VzIGNhc2VcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gdGhpcy53cmFwQ2hpbGRyZW4oYXN5bmNDaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgfVxuICAgIHRoaXMuY2hpbGRyZW5GZXRjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgd3JhcENoaWxkcmVuKHJhd01vZGVsczogVFtdKSB7XG4gICAgcmV0dXJuIHJhd01vZGVscy5tYXAobSA9PiBuZXcgUmVjdXJzaXZlVHJlZU5vZGVNb2RlbChtLCB0aGlzLCB0aGlzLmdldENoaWxkcmVuKSk7XG4gIH1cblxuICBwcml2YXRlIF9jaGlsZHJlbjogUmVjdXJzaXZlVHJlZU5vZGVNb2RlbDxUPltdID0gW107XG4gIGdldCBjaGlsZHJlbigpOiBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+W10ge1xuICAgIHRoaXMuZmV0Y2hDaGlsZHJlbigpO1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgfVxuICBzZXQgY2hpbGRyZW4odmFsdWU6IFJlY3Vyc2l2ZVRyZWVOb2RlTW9kZWw8VD5bXSkge1xuICAgIHRoaXMuX2NoaWxkcmVuID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBzdXBlci5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==