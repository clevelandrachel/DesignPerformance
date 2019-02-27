/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
export class RootDropdownService {
    constructor() {
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    closeMenus() {
        this._changes.next(false);
    }
}
RootDropdownService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    RootDropdownService.prototype._changes;
}
/**
 * @param {?} existing
 * @return {?}
 */
export function clrRootDropdownFactory(existing) {
    return existing || new RootDropdownService();
}
/** @type {?} */
export const ROOT_DROPDOWN_PROVIDER = {
    provide: RootDropdownService,
    useFactory: clrRootDropdownFactory,
    deps: [[new Optional(), new SkipSelf(), RootDropdownService]],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHJvcGRvd24vcHJvdmlkZXJzL2Ryb3Bkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVVLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQVM5RCxDQUFDOzs7O0lBUEMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBVkYsVUFBVTs7OztJQUVULHVDQUE0RDs7Ozs7O0FBVzlELE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxRQUE2QjtJQUNsRSxPQUFPLFFBQVEsSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDL0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQUc7SUFDcEMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7Q0FDOUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvb3REcm9wZG93blNlcnZpY2Uge1xuICBwcml2YXRlIF9jaGFuZ2VzOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNsb3NlTWVudXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KGZhbHNlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xyUm9vdERyb3Bkb3duRmFjdG9yeShleGlzdGluZzogUm9vdERyb3Bkb3duU2VydmljZSkge1xuICByZXR1cm4gZXhpc3RpbmcgfHwgbmV3IFJvb3REcm9wZG93blNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFJPT1RfRFJPUERPV05fUFJPVklERVIgPSB7XG4gIHByb3ZpZGU6IFJvb3REcm9wZG93blNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IGNsclJvb3REcm9wZG93bkZhY3RvcnksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBSb290RHJvcGRvd25TZXJ2aWNlXV0sXG59O1xuIl19