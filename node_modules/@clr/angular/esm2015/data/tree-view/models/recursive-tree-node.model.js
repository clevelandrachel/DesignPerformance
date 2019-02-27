/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class RecursiveTreeNodeModel extends TreeNodeModel {
    /**
     * @param {?} model
     * @param {?} parent
     * @param {?} getChildren
     */
    constructor(model, parent, getChildren) {
        super();
        this.getChildren = getChildren;
        this.childrenFetched = false;
        this._children = [];
        this.model = model;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    fetchChildren() {
        if (this.childrenFetched) {
            return;
        }
        /** @type {?} */
        const asyncChildren = this.getChildren(this.model);
        if (isPromise(asyncChildren)) {
            this.loading = true;
            asyncChildren.then(raw => {
                this._children = this.wrapChildren(raw);
                this.loading = false;
            });
        }
        else if (isObservable(asyncChildren)) {
            this.loading = true;
            this.subscription = asyncChildren.subscribe(raw => {
                this._children = this.wrapChildren(raw);
                this.loading = false;
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
    }
    /**
     * @param {?} rawModels
     * @return {?}
     */
    wrapChildren(rawModels) {
        return rawModels.map(m => new RecursiveTreeNodeModel(m, this, this.getChildren));
    }
    /**
     * @return {?}
     */
    get children() {
        this.fetchChildren();
        return this._children;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set children(value) {
        this._children = value;
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        super.destroy();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlLXRyZWUtbm9kZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L21vZGVscy9yZWN1cnNpdmUtdHJlZS1ub2RlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQU10RCxNQUFNLE9BQU8sc0JBQTBCLFNBQVEsYUFBZ0I7Ozs7OztJQUM3RCxZQUNFLEtBQVEsRUFDUixNQUF3QyxFQUNoQyxXQUFtRDtRQUUzRCxLQUFLLEVBQUUsQ0FBQztRQUZBLGdCQUFXLEdBQVgsV0FBVyxDQUF3QztRQVNyRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQWlDeEIsY0FBUyxHQUFnQyxFQUFFLENBQUM7UUF2Q2xELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFNRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE9BQU87U0FDUjs7Y0FFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxhQUFhLEVBQUU7WUFDeEIsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDOzs7OztJQUVPLFlBQVksQ0FBQyxTQUFjO1FBQ2pDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7O0lBR0QsSUFBSSxRQUFRO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksUUFBUSxDQUFDLEtBQWtDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFJRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNGOzs7SUFwREMsd0NBQXlDOztJQUV6QyxpREFBZ0M7O0lBaUNoQywyQ0FBb0Q7O0lBU3BELDhDQUFtQzs7SUFuRGpDLDZDQUEyRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVHJlZU5vZGVNb2RlbCB9IGZyb20gJy4vdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IEFzeW5jQXJyYXksIGlzUHJvbWlzZSB9IGZyb20gJy4vYXN5bmMtYXJyYXknO1xuXG4vKlxuICogQSByZWN1cnNpdmUgbW9kZWwgaXMgYnVpbHQgcmVjZWl2ZWQgZnJvbSB0aGUgYXBwIGFuZCB0cmF2ZXJzZWQgdG8gY3JlYXRlIHRoZSBjb3JyZXNwb25kaW5nIGNvbXBvbmVudHMuXG4gKiBSZWN1cnNpdmUgPSBNb2RlbCBkaWN0YXRlcyB0aGUgdHJlZSBub2RlIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZVRyZWVOb2RlTW9kZWw8VD4gZXh0ZW5kcyBUcmVlTm9kZU1vZGVsPFQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgbW9kZWw6IFQsXG4gICAgcGFyZW50OiBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+IHwgbnVsbCxcbiAgICBwcml2YXRlIGdldENoaWxkcmVuOiAobm9kZTogVCkgPT4gQXN5bmNBcnJheTxUPiB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHBhcmVudDogUmVjdXJzaXZlVHJlZU5vZGVNb2RlbDxUPiB8IG51bGw7XG5cbiAgcHJpdmF0ZSBjaGlsZHJlbkZldGNoZWQgPSBmYWxzZTtcblxuICBmZXRjaENoaWxkcmVuKCkge1xuICAgIGlmICh0aGlzLmNoaWxkcmVuRmV0Y2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFzeW5jQ2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKHRoaXMubW9kZWwpO1xuICAgIGlmIChpc1Byb21pc2UoYXN5bmNDaGlsZHJlbikpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBhc3luY0NoaWxkcmVuLnRoZW4ocmF3ID0+IHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSB0aGlzLndyYXBDaGlsZHJlbihyYXcpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKGFzeW5jQ2hpbGRyZW4pKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBhc3luY0NoaWxkcmVuLnN1YnNjcmliZShyYXcgPT4ge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMud3JhcENoaWxkcmVuKHJhdyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhc3luY0NoaWxkcmVuKSB7XG4gICAgICAvLyBTeW5jaHJvbm91cyBjYXNlXG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IHRoaXMud3JhcENoaWxkcmVuKGFzeW5jQ2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmNoaWxkcmVuRmV0Y2hlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHdyYXBDaGlsZHJlbihyYXdNb2RlbHM6IFRbXSkge1xuICAgIHJldHVybiByYXdNb2RlbHMubWFwKG0gPT4gbmV3IFJlY3Vyc2l2ZVRyZWVOb2RlTW9kZWwobSwgdGhpcywgdGhpcy5nZXRDaGlsZHJlbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hpbGRyZW46IFJlY3Vyc2l2ZVRyZWVOb2RlTW9kZWw8VD5bXSA9IFtdO1xuICBnZXQgY2hpbGRyZW4oKTogUmVjdXJzaXZlVHJlZU5vZGVNb2RlbDxUPltdIHtcbiAgICB0aGlzLmZldGNoQ2hpbGRyZW4oKTtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gIH1cbiAgc2V0IGNoaWxkcmVuKHZhbHVlOiBSZWN1cnNpdmVUcmVlTm9kZU1vZGVsPFQ+W10pIHtcbiAgICB0aGlzLl9jaGlsZHJlbiA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=