/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional } from '@angular/core';
import { LoadingListener } from './loading-listener';
/** @enum {number} */
const ClrLoadingState = {
    DEFAULT: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
};
export { ClrLoadingState };
ClrLoadingState[ClrLoadingState.DEFAULT] = 'DEFAULT';
ClrLoadingState[ClrLoadingState.LOADING] = 'LOADING';
ClrLoadingState[ClrLoadingState.SUCCESS] = 'SUCCESS';
ClrLoadingState[ClrLoadingState.ERROR] = 'ERROR';
export class ClrLoading {
    // We find the first parent that handles something loading
    /**
     * @param {?} listener
     */
    constructor(listener) {
        this.listener = listener;
        this._loadingState = ClrLoadingState.DEFAULT;
    }
    /**
     * @return {?}
     */
    get loadingState() {
        return this._loadingState;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loadingState(value) {
        if (value === true) {
            value = ClrLoadingState.LOADING;
        }
        else if (!value) {
            value = ClrLoadingState.DEFAULT;
        }
        if (value === this._loadingState) {
            return;
        }
        this._loadingState = value;
        if (this.listener) {
            this.listener.loadingStateChange(value);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.loadingState = ClrLoadingState.DEFAULT;
    }
}
ClrLoading.decorators = [
    { type: Directive, args: [{ selector: '[clrLoading]' },] }
];
/** @nocollapse */
ClrLoading.ctorParameters = () => [
    { type: LoadingListener, decorators: [{ type: Optional }] }
];
ClrLoading.propDecorators = {
    loadingState: [{ type: Input, args: ['clrLoading',] }]
};
if (false) {
    /** @type {?} */
    ClrLoading.prototype._loadingState;
    /** @type {?} */
    ClrLoading.prototype.listener;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2xvYWRpbmcvbG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7SUFHbkQsVUFBTztJQUNQLFVBQU87SUFDUCxVQUFPO0lBQ1AsUUFBSzs7Ozs7OztBQUlQLE1BQU0sT0FBTyxVQUFVOzs7OztJQUVyQixZQUFnQyxRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUVqRCxrQkFBYSxHQUFvQixlQUFlLENBQUMsT0FBTyxDQUFDO0lBRkwsQ0FBQzs7OztJQUk3RCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFDVyxZQUFZLENBQUMsS0FBZ0M7UUFDdEQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLEtBQUssR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNqQixLQUFLLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztTQUNqQztRQUVELElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUM5QyxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7OztZQVQ5QixlQUFlLHVCQVlULFFBQVE7OzsyQkFRcEIsS0FBSyxTQUFDLFlBQVk7Ozs7SUFObkIsbUNBQWlFOztJQUZyRCw4QkFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdMaXN0ZW5lciB9IGZyb20gJy4vbG9hZGluZy1saXN0ZW5lcic7XG5cbmV4cG9ydCBlbnVtIENsckxvYWRpbmdTdGF0ZSB7XG4gIERFRkFVTFQsXG4gIExPQURJTkcsXG4gIFNVQ0NFU1MsXG4gIEVSUk9SLFxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyTG9hZGluZ10nIH0pXG5leHBvcnQgY2xhc3MgQ2xyTG9hZGluZyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8vIFdlIGZpbmQgdGhlIGZpcnN0IHBhcmVudCB0aGF0IGhhbmRsZXMgc29tZXRoaW5nIGxvYWRpbmdcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBsaXN0ZW5lcjogTG9hZGluZ0xpc3RlbmVyKSB7fVxuXG4gIHByaXZhdGUgX2xvYWRpbmdTdGF0ZTogQ2xyTG9hZGluZ1N0YXRlID0gQ2xyTG9hZGluZ1N0YXRlLkRFRkFVTFQ7XG5cbiAgcHVibGljIGdldCBsb2FkaW5nU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyTG9hZGluZycpXG4gIHB1YmxpYyBzZXQgbG9hZGluZ1N0YXRlKHZhbHVlOiBib29sZWFuIHwgQ2xyTG9hZGluZ1N0YXRlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICB2YWx1ZSA9IENsckxvYWRpbmdTdGF0ZS5MT0FESU5HO1xuICAgIH0gZWxzZSBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IENsckxvYWRpbmdTdGF0ZS5ERUZBVUxUO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fbG9hZGluZ1N0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9hZGluZ1N0YXRlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIubG9hZGluZ1N0YXRlQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmxvYWRpbmdTdGF0ZSA9IENsckxvYWRpbmdTdGF0ZS5ERUZBVUxUO1xuICB9XG59XG4iXX0=