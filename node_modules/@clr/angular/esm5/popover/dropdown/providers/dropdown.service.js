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
var RootDropdownService = /** @class */ (function () {
    function RootDropdownService() {
        this._changes = new Subject();
    }
    Object.defineProperty(RootDropdownService.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RootDropdownService.prototype.closeMenus = /**
     * @return {?}
     */
    function () {
        this._changes.next(false);
    };
    RootDropdownService.decorators = [
        { type: Injectable }
    ];
    return RootDropdownService;
}());
export { RootDropdownService };
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
export var ROOT_DROPDOWN_PROVIDER = {
    provide: RootDropdownService,
    useFactory: clrRootDropdownFactory,
    deps: [[new Optional(), new SkipSelf(), RootDropdownService]],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHJvcGRvd24vcHJvdmlkZXJzL2Ryb3Bkb3duLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFBQTtRQUVVLGFBQVEsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQVM5RCxDQUFDO0lBUEMsc0JBQUksd0NBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQVZGLFVBQVU7O0lBV1gsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxtQkFBbUI7OztJQUM5Qix1Q0FBNEQ7Ozs7OztBQVc5RCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsUUFBNkI7SUFDbEUsT0FBTyxRQUFRLElBQUksSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQy9DLENBQUM7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQixHQUFHO0lBQ3BDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0NBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb290RHJvcGRvd25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2hhbmdlczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjbG9zZU1lbnVzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZXMubmV4dChmYWxzZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsclJvb3REcm9wZG93bkZhY3RvcnkoZXhpc3Rpbmc6IFJvb3REcm9wZG93blNlcnZpY2UpIHtcbiAgcmV0dXJuIGV4aXN0aW5nIHx8IG5ldyBSb290RHJvcGRvd25TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBST09UX0RST1BET1dOX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBSb290RHJvcGRvd25TZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBjbHJSb290RHJvcGRvd25GYWN0b3J5LFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgUm9vdERyb3Bkb3duU2VydmljZV1dLFxufTtcbiJdfQ==