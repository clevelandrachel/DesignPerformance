/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
let NB_INSTANCES = 0;
/** @type {?} */
export const UNIQUE_ID = new InjectionToken('UNIQUE_ID');
/**
 * @return {?}
 */
export function uniqueIdFactory() {
    return 'clr-id-' + NB_INSTANCES++;
}
/** @type {?} */
export const UNIQUE_ID_PROVIDER = {
    provide: UNIQUE_ID,
    useFactory: uniqueIdFactory,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQtZ2VuZXJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9pZC1nZW5lcmF0b3IvaWQtZ2VuZXJhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFM0MsWUFBWSxHQUFHLENBQUM7O0FBRXBCLE1BQU0sT0FBTyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQVMsV0FBVyxDQUFDOzs7O0FBRWhFLE1BQU0sVUFBVSxlQUFlO0lBQzdCLE9BQU8sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQ3BDLENBQUM7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQixHQUFHO0lBQ2hDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFVBQVUsRUFBRSxlQUFlO0NBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgTkJfSU5TVEFOQ0VTID0gMDtcblxuZXhwb3J0IGNvbnN0IFVOSVFVRV9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVTklRVUVfSUQnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZUlkRmFjdG9yeSgpIHtcbiAgcmV0dXJuICdjbHItaWQtJyArIE5CX0lOU1RBTkNFUysrO1xufVxuXG5leHBvcnQgY29uc3QgVU5JUVVFX0lEX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBVTklRVUVfSUQsXG4gIHVzZUZhY3Rvcnk6IHVuaXF1ZUlkRmFjdG9yeSxcbn07XG4iXX0=