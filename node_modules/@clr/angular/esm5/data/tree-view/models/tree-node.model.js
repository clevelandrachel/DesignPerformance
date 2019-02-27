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
import { ClrSelectedState } from './selected-state.enum';
import { BehaviorSubject } from 'rxjs';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
TreeNodeModel = /** @class */ (function () {
    function TreeNodeModel() {
        this.selected = new BehaviorSubject(ClrSelectedState.UNSELECTED);
        /*
           * Being able to push this down to the RecursiveTreeNodeModel would require too much work on the angular components
           * right now for them to know which kind of model they are using. So I'm lifting the public properties to this
           * abstract parent class for now and we can revisit it later, when we're not facing such a close deadline.
           */
        this.loading = false;
    }
    /**
     * @return {?}
     */
    TreeNodeModel.prototype.destroy = /**
     * @return {?}
     */
    function () {
        // Just to be safe
        this.selected.complete();
    };
    // Propagate by default when eager, don't propagate in the lazy-loaded tree.
    // Propagate by default when eager, don't propagate in the lazy-loaded tree.
    /**
     * @param {?} state
     * @param {?} propagateUp
     * @param {?} propagateDown
     * @return {?}
     */
    TreeNodeModel.prototype.setSelected = 
    // Propagate by default when eager, don't propagate in the lazy-loaded tree.
    /**
     * @param {?} state
     * @param {?} propagateUp
     * @param {?} propagateDown
     * @return {?}
     */
    function (state, propagateUp, propagateDown) {
        if (state === this.selected.value) {
            return;
        }
        this.selected.next(state);
        if (propagateDown && state !== ClrSelectedState.INDETERMINATE && this.children) {
            this.children.forEach(function (child) { return child.setSelected(state, false, true); });
        }
        if (propagateUp && this.parent) {
            this.parent._updateSelectionFromChildren();
        }
    };
    /**
     * @param {?} propagate
     * @return {?}
     */
    TreeNodeModel.prototype.toggleSelection = /**
     * @param {?} propagate
     * @return {?}
     */
    function (propagate) {
        // Both unselected and indeterminate toggle to selected
        /** @type {?} */
        var newState = this.selected.value === ClrSelectedState.SELECTED ? ClrSelectedState.UNSELECTED : ClrSelectedState.SELECTED;
        // NOTE: we always propagate selection up in this method because it is only called when the user takes an action.
        // It should never be called from lifecycle hooks or app-provided inputs.
        this.setSelected(newState, true, propagate);
    };
    /**
     * @return {?}
     */
    TreeNodeModel.prototype.computeSelectionStateFromChildren = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var oneSelected = false;
        /** @type {?} */
        var oneUnselected = false;
        try {
            // Using a good old for loop to exit as soon as we can tell, for better performance on large trees.
            for (var _b = tslib_1.__values(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                switch (child.selected.value) {
                    case ClrSelectedState.INDETERMINATE:
                        return ClrSelectedState.INDETERMINATE;
                    case ClrSelectedState.SELECTED:
                        oneSelected = true;
                        if (oneUnselected) {
                            return ClrSelectedState.INDETERMINATE;
                        }
                        break;
                    case ClrSelectedState.UNSELECTED:
                    default:
                        // Default is the same as unselected, in case an undefined somehow made it all the way here.
                        oneUnselected = true;
                        if (oneSelected) {
                            return ClrSelectedState.INDETERMINATE;
                        }
                        break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!oneSelected) {
            return ClrSelectedState.UNSELECTED;
        }
        else if (!oneUnselected) {
            return ClrSelectedState.SELECTED;
        }
    };
    /*
     * Internal, but needs to be called by other nodes
     */
    /*
       * Internal, but needs to be called by other nodes
       */
    /**
     * @return {?}
     */
    TreeNodeModel.prototype._updateSelectionFromChildren = /*
       * Internal, but needs to be called by other nodes
       */
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newState = this.computeSelectionStateFromChildren();
        if (newState === this.selected.value) {
            return;
        }
        this.selected.next(newState);
        if (this.parent) {
            this.parent._updateSelectionFromChildren();
        }
    };
    return TreeNodeModel;
}());
/**
 * @abstract
 * @template T
 */
export { TreeNodeModel };
if (false) {
    /** @type {?} */
    TreeNodeModel.prototype.selected;
    /** @type {?} */
    TreeNodeModel.prototype.model;
    /** @type {?} */
    TreeNodeModel.prototype.parent;
    /** @type {?} */
    TreeNodeModel.prototype.children;
    /** @type {?} */
    TreeNodeModel.prototype.loading;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvbW9kZWxzL3RyZWUtbm9kZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFdkM7Ozs7O0lBQUE7UUFDRSxhQUFRLEdBQUcsSUFBSSxlQUFlLENBQW1CLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7UUFpQjlFLFlBQU8sR0FBRyxLQUFLLENBQUM7SUEwRWxCLENBQUM7Ozs7SUF4RUMsK0JBQU87OztJQUFQO1FBQ0Usa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDRFQUE0RTs7Ozs7Ozs7SUFDNUUsbUNBQVc7Ozs7Ozs7O0lBQVgsVUFBWSxLQUF1QixFQUFFLFdBQW9CLEVBQUUsYUFBc0I7UUFDL0UsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxhQUFhLElBQUksS0FBSyxLQUFLLGdCQUFnQixDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7Ozs7O0lBRUQsdUNBQWU7Ozs7SUFBZixVQUFnQixTQUFrQjs7O1lBRTFCLFFBQVEsR0FDWixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtRQUM3RyxpSEFBaUg7UUFDakgseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRU8seURBQWlDOzs7SUFBekM7OztZQUNNLFdBQVcsR0FBRyxLQUFLOztZQUNuQixhQUFhLEdBQUcsS0FBSzs7WUFDekIsbUdBQW1HO1lBQ25HLEtBQW9CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QixJQUFNLEtBQUssV0FBQTtnQkFDZCxRQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUM1QixLQUFLLGdCQUFnQixDQUFDLGFBQWE7d0JBQ2pDLE9BQU8sZ0JBQWdCLENBQUMsYUFBYSxDQUFDO29CQUN4QyxLQUFLLGdCQUFnQixDQUFDLFFBQVE7d0JBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ25CLElBQUksYUFBYSxFQUFFOzRCQUNqQixPQUFPLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzt5QkFDdkM7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztvQkFDakM7d0JBQ0UsNEZBQTRGO3dCQUM1RixhQUFhLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLFdBQVcsRUFBRTs0QkFDZixPQUFPLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzt5QkFDdkM7d0JBQ0QsTUFBTTtpQkFDVDthQUNGOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN6QixPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILG9EQUE0Qjs7Ozs7O0lBQTVCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsaUNBQWlDLEVBQUU7UUFDekQsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQTVGRCxJQTRGQzs7Ozs7Ozs7SUEzRkMsaUNBQThFOztJQUM5RSw4QkFBZ0I7O0lBUWhCLCtCQUF5Qzs7SUFDekMsaUNBQXNDOztJQU90QyxnQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENsclNlbGVjdGVkU3RhdGUgfSBmcm9tICcuL3NlbGVjdGVkLXN0YXRlLmVudW0nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmVlTm9kZU1vZGVsPFQ+IHtcbiAgc2VsZWN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENsclNlbGVjdGVkU3RhdGU+KENsclNlbGVjdGVkU3RhdGUuVU5TRUxFQ1RFRCk7XG4gIG1vZGVsOiBUIHwgbnVsbDtcbiAgLypcbiAgICogSWRlYWxseSwgSSB3b3VsZCBsaWtlIHRvIHVzZSBhIHBvbHltb3JwaGljIHRoaXMgdHlwZSBoZXJlIHRvIGVuc3VyZSBob21vZ2VuZWl0eSBvZiB0aGUgdHJlZSwgc29tZXRoaW5nIGxpa2U6XG4gICAqIGFic3RyYWN0IHBhcmVudDogdGhpczxUPiB8IG51bGw7XG4gICAqIGFic3RyYWN0IGNoaWxkcmVuOiB0aGlzPFQ+W107XG4gICAqIEJ1dCBJJ20gaGl0dGluZyBsaW1pdGF0aW9ucyBvbiB0eXBlc2NyaXB0IG5vdCBhbGxvd2luZyB0aGF0IHR5cGUgaW4gY29uc3RydWN0b3JzIG9yIHN0YXRpYyBtZXRob2RzLlxuICAgKiBTbyBJJ20gcmVzb3J0aW5nIHRvIGZvcmNpbmcgb3ZlcnJpZGUgd2l0aCBtb3JlIHByZWNpc2UgdHlwZXMgYnkgbWFya2luZyB0aGVzZSBhYnN0cmFjdC5cbiAgICovXG4gIGFic3RyYWN0IHBhcmVudDogVHJlZU5vZGVNb2RlbDxUPiB8IG51bGw7XG4gIGFic3RyYWN0IGNoaWxkcmVuOiBUcmVlTm9kZU1vZGVsPFQ+W107XG5cbiAgLypcbiAgICogQmVpbmcgYWJsZSB0byBwdXNoIHRoaXMgZG93biB0byB0aGUgUmVjdXJzaXZlVHJlZU5vZGVNb2RlbCB3b3VsZCByZXF1aXJlIHRvbyBtdWNoIHdvcmsgb24gdGhlIGFuZ3VsYXIgY29tcG9uZW50c1xuICAgKiByaWdodCBub3cgZm9yIHRoZW0gdG8ga25vdyB3aGljaCBraW5kIG9mIG1vZGVsIHRoZXkgYXJlIHVzaW5nLiBTbyBJJ20gbGlmdGluZyB0aGUgcHVibGljIHByb3BlcnRpZXMgdG8gdGhpc1xuICAgKiBhYnN0cmFjdCBwYXJlbnQgY2xhc3MgZm9yIG5vdyBhbmQgd2UgY2FuIHJldmlzaXQgaXQgbGF0ZXIsIHdoZW4gd2UncmUgbm90IGZhY2luZyBzdWNoIGEgY2xvc2UgZGVhZGxpbmUuXG4gICAqL1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgZGVzdHJveSgpIHtcbiAgICAvLyBKdXN0IHRvIGJlIHNhZmVcbiAgICB0aGlzLnNlbGVjdGVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvLyBQcm9wYWdhdGUgYnkgZGVmYXVsdCB3aGVuIGVhZ2VyLCBkb24ndCBwcm9wYWdhdGUgaW4gdGhlIGxhenktbG9hZGVkIHRyZWUuXG4gIHNldFNlbGVjdGVkKHN0YXRlOiBDbHJTZWxlY3RlZFN0YXRlLCBwcm9wYWdhdGVVcDogYm9vbGVhbiwgcHJvcGFnYXRlRG93bjogYm9vbGVhbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdGhpcy5zZWxlY3RlZC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkLm5leHQoc3RhdGUpO1xuICAgIGlmIChwcm9wYWdhdGVEb3duICYmIHN0YXRlICE9PSBDbHJTZWxlY3RlZFN0YXRlLklOREVURVJNSU5BVEUgJiYgdGhpcy5jaGlsZHJlbikge1xuICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNldFNlbGVjdGVkKHN0YXRlLCBmYWxzZSwgdHJ1ZSkpO1xuICAgIH1cbiAgICBpZiAocHJvcGFnYXRlVXAgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Ll91cGRhdGVTZWxlY3Rpb25Gcm9tQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWxlY3Rpb24ocHJvcGFnYXRlOiBib29sZWFuKSB7XG4gICAgLy8gQm90aCB1bnNlbGVjdGVkIGFuZCBpbmRldGVybWluYXRlIHRvZ2dsZSB0byBzZWxlY3RlZFxuICAgIGNvbnN0IG5ld1N0YXRlID1cbiAgICAgIHRoaXMuc2VsZWN0ZWQudmFsdWUgPT09IENsclNlbGVjdGVkU3RhdGUuU0VMRUNURUQgPyBDbHJTZWxlY3RlZFN0YXRlLlVOU0VMRUNURUQgOiBDbHJTZWxlY3RlZFN0YXRlLlNFTEVDVEVEO1xuICAgIC8vIE5PVEU6IHdlIGFsd2F5cyBwcm9wYWdhdGUgc2VsZWN0aW9uIHVwIGluIHRoaXMgbWV0aG9kIGJlY2F1c2UgaXQgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgdXNlciB0YWtlcyBhbiBhY3Rpb24uXG4gICAgLy8gSXQgc2hvdWxkIG5ldmVyIGJlIGNhbGxlZCBmcm9tIGxpZmVjeWNsZSBob29rcyBvciBhcHAtcHJvdmlkZWQgaW5wdXRzLlxuICAgIHRoaXMuc2V0U2VsZWN0ZWQobmV3U3RhdGUsIHRydWUsIHByb3BhZ2F0ZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVTZWxlY3Rpb25TdGF0ZUZyb21DaGlsZHJlbigpIHtcbiAgICBsZXQgb25lU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBsZXQgb25lVW5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIC8vIFVzaW5nIGEgZ29vZCBvbGQgZm9yIGxvb3AgdG8gZXhpdCBhcyBzb29uIGFzIHdlIGNhbiB0ZWxsLCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlIG9uIGxhcmdlIHRyZWVzLlxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgc3dpdGNoIChjaGlsZC5zZWxlY3RlZC52YWx1ZSkge1xuICAgICAgICBjYXNlIENsclNlbGVjdGVkU3RhdGUuSU5ERVRFUk1JTkFURTpcbiAgICAgICAgICByZXR1cm4gQ2xyU2VsZWN0ZWRTdGF0ZS5JTkRFVEVSTUlOQVRFO1xuICAgICAgICBjYXNlIENsclNlbGVjdGVkU3RhdGUuU0VMRUNURUQ6XG4gICAgICAgICAgb25lU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChvbmVVbnNlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xyU2VsZWN0ZWRTdGF0ZS5JTkRFVEVSTUlOQVRFO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDbHJTZWxlY3RlZFN0YXRlLlVOU0VMRUNURUQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gRGVmYXVsdCBpcyB0aGUgc2FtZSBhcyB1bnNlbGVjdGVkLCBpbiBjYXNlIGFuIHVuZGVmaW5lZCBzb21laG93IG1hZGUgaXQgYWxsIHRoZSB3YXkgaGVyZS5cbiAgICAgICAgICBvbmVVbnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAob25lU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBDbHJTZWxlY3RlZFN0YXRlLklOREVURVJNSU5BVEU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9uZVNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gQ2xyU2VsZWN0ZWRTdGF0ZS5VTlNFTEVDVEVEO1xuICAgIH0gZWxzZSBpZiAoIW9uZVVuc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiBDbHJTZWxlY3RlZFN0YXRlLlNFTEVDVEVEO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEludGVybmFsLCBidXQgbmVlZHMgdG8gYmUgY2FsbGVkIGJ5IG90aGVyIG5vZGVzXG4gICAqL1xuICBfdXBkYXRlU2VsZWN0aW9uRnJvbUNoaWxkcmVuKCkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy5jb21wdXRlU2VsZWN0aW9uU3RhdGVGcm9tQ2hpbGRyZW4oKTtcbiAgICBpZiAobmV3U3RhdGUgPT09IHRoaXMuc2VsZWN0ZWQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZC5uZXh0KG5ld1N0YXRlKTtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50Ll91cGRhdGVTZWxlY3Rpb25Gcm9tQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==