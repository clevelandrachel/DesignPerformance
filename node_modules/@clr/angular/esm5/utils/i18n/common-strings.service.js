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
import { SkipSelf, Optional, forwardRef } from '@angular/core';
import { ClrCommonStrings } from './common-strings.interface';
// @TODO Put the Required type back in when our minimumly supported version of Angular uses
// TS 2.8 or greater (should be Angular 7)
// export class ClrCommonStringsService implements Required<ClrCommonStrings> {
var 
// @TODO Put the Required type back in when our minimumly supported version of Angular uses
// TS 2.8 or greater (should be Angular 7)
// export class ClrCommonStringsService implements Required<ClrCommonStrings> {
ClrCommonStringsService = /** @class */ (function () {
    function ClrCommonStringsService() {
        this.open = 'Open';
        this.close = 'Close';
        this.show = 'Show';
        this.hide = 'Hide';
        this.expand = 'Expand';
        this.collapse = 'Collapse';
        this.more = 'More';
        this.select = 'Select';
        this.selectAll = 'Select All';
        this.previous = 'Previous';
        this.next = 'Next';
        this.current = 'Jump to current';
        this.info = 'Info';
        this.success = 'Success';
        this.warning = 'Warning';
        this.danger = 'Error';
        this.rowActions = 'Available actions';
        this.pickColumns = 'Show or hide columns';
    }
    return ClrCommonStringsService;
}());
// @TODO Put the Required type back in when our minimumly supported version of Angular uses
// TS 2.8 or greater (should be Angular 7)
// export class ClrCommonStringsService implements Required<ClrCommonStrings> {
export { ClrCommonStringsService };
if (false) {
    /** @type {?} */
    ClrCommonStringsService.prototype.open;
    /** @type {?} */
    ClrCommonStringsService.prototype.close;
    /** @type {?} */
    ClrCommonStringsService.prototype.show;
    /** @type {?} */
    ClrCommonStringsService.prototype.hide;
    /** @type {?} */
    ClrCommonStringsService.prototype.expand;
    /** @type {?} */
    ClrCommonStringsService.prototype.collapse;
    /** @type {?} */
    ClrCommonStringsService.prototype.more;
    /** @type {?} */
    ClrCommonStringsService.prototype.select;
    /** @type {?} */
    ClrCommonStringsService.prototype.selectAll;
    /** @type {?} */
    ClrCommonStringsService.prototype.previous;
    /** @type {?} */
    ClrCommonStringsService.prototype.next;
    /** @type {?} */
    ClrCommonStringsService.prototype.current;
    /** @type {?} */
    ClrCommonStringsService.prototype.info;
    /** @type {?} */
    ClrCommonStringsService.prototype.success;
    /** @type {?} */
    ClrCommonStringsService.prototype.warning;
    /** @type {?} */
    ClrCommonStringsService.prototype.danger;
    /** @type {?} */
    ClrCommonStringsService.prototype.rowActions;
    /** @type {?} */
    ClrCommonStringsService.prototype.pickColumns;
}
/**
 * @param {?=} existing
 * @return {?}
 */
export function commonStringsFactory(existing) {
    /** @type {?} */
    var defaults = new ClrCommonStringsService();
    if (existing) {
        return tslib_1.__assign({}, defaults, existing);
    }
    return defaults;
}
/** @type {?} */
export var COMMON_STRINGS_PROVIDER = {
    useFactory: commonStringsFactory,
    // We have a circular dependency for now, we can address it later once these
    // tree-shakeable providers have proper documentation.
    deps: [[new Optional(), new SkipSelf(), forwardRef(function () { return ClrCommonStrings; })]],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXN0cmluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQXNCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUs5RDs7Ozs7SUFBQTtRQUNFLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsWUFBTyxHQUFHLGlCQUFpQixDQUFDO1FBQzVCLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixlQUFVLEdBQUcsbUJBQW1CLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztJQUN2QyxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDOzs7Ozs7O0lBbEJDLHVDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIsdUNBQWM7O0lBQ2QsdUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQiwyQ0FBc0I7O0lBQ3RCLHVDQUFjOztJQUNkLHlDQUFrQjs7SUFDbEIsNENBQXlCOztJQUN6QiwyQ0FBc0I7O0lBQ3RCLHVDQUFjOztJQUNkLDBDQUE0Qjs7SUFDNUIsdUNBQWM7O0lBQ2QsMENBQW9COztJQUNwQiwwQ0FBb0I7O0lBQ3BCLHlDQUFpQjs7SUFDakIsNkNBQWlDOztJQUNqQyw4Q0FBcUM7Ozs7OztBQUd2QyxNQUFNLFVBQVUsb0JBQW9CLENBQUMsUUFBMkI7O1FBQ3hELFFBQVEsR0FBRyxJQUFJLHVCQUF1QixFQUFFO0lBQzlDLElBQUksUUFBUSxFQUFFO1FBQ1osNEJBQVksUUFBUSxFQUFLLFFBQVEsRUFBRztLQUNyQztJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUF1QjtJQUN6RCxVQUFVLEVBQUUsb0JBQW9COzs7SUFHaEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7Q0FDN0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBTa2lwU2VsZiwgT3B0aW9uYWwsIEluamVjdGFibGVQcm92aWRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG4vLyBAVE9ETyBQdXQgdGhlIFJlcXVpcmVkIHR5cGUgYmFjayBpbiB3aGVuIG91ciBtaW5pbXVtbHkgc3VwcG9ydGVkIHZlcnNpb24gb2YgQW5ndWxhciB1c2VzXG4vLyBUUyAyLjggb3IgZ3JlYXRlciAoc2hvdWxkIGJlIEFuZ3VsYXIgNylcbi8vIGV4cG9ydCBjbGFzcyBDbHJDb21tb25TdHJpbmdzU2VydmljZSBpbXBsZW1lbnRzIFJlcXVpcmVkPENsckNvbW1vblN0cmluZ3M+IHtcbmV4cG9ydCBjbGFzcyBDbHJDb21tb25TdHJpbmdzU2VydmljZSBpbXBsZW1lbnRzIENsckNvbW1vblN0cmluZ3Mge1xuICBvcGVuID0gJ09wZW4nO1xuICBjbG9zZSA9ICdDbG9zZSc7XG4gIHNob3cgPSAnU2hvdyc7XG4gIGhpZGUgPSAnSGlkZSc7XG4gIGV4cGFuZCA9ICdFeHBhbmQnO1xuICBjb2xsYXBzZSA9ICdDb2xsYXBzZSc7XG4gIG1vcmUgPSAnTW9yZSc7XG4gIHNlbGVjdCA9ICdTZWxlY3QnO1xuICBzZWxlY3RBbGwgPSAnU2VsZWN0IEFsbCc7XG4gIHByZXZpb3VzID0gJ1ByZXZpb3VzJztcbiAgbmV4dCA9ICdOZXh0JztcbiAgY3VycmVudCA9ICdKdW1wIHRvIGN1cnJlbnQnO1xuICBpbmZvID0gJ0luZm8nO1xuICBzdWNjZXNzID0gJ1N1Y2Nlc3MnO1xuICB3YXJuaW5nID0gJ1dhcm5pbmcnO1xuICBkYW5nZXIgPSAnRXJyb3InO1xuICByb3dBY3Rpb25zID0gJ0F2YWlsYWJsZSBhY3Rpb25zJztcbiAgcGlja0NvbHVtbnMgPSAnU2hvdyBvciBoaWRlIGNvbHVtbnMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tbW9uU3RyaW5nc0ZhY3RvcnkoZXhpc3Rpbmc/OiBDbHJDb21tb25TdHJpbmdzKTogQ2xyQ29tbW9uU3RyaW5ncyB7XG4gIGNvbnN0IGRlZmF1bHRzID0gbmV3IENsckNvbW1vblN0cmluZ3NTZXJ2aWNlKCk7XG4gIGlmIChleGlzdGluZykge1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRzLCAuLi5leGlzdGluZyB9O1xuICB9XG4gIHJldHVybiBkZWZhdWx0cztcbn1cblxuZXhwb3J0IGNvbnN0IENPTU1PTl9TVFJJTkdTX1BST1ZJREVSOiBJbmplY3RhYmxlUHJvdmlkZXIgPSB7XG4gIHVzZUZhY3Rvcnk6IGNvbW1vblN0cmluZ3NGYWN0b3J5LFxuICAvLyBXZSBoYXZlIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBmb3Igbm93LCB3ZSBjYW4gYWRkcmVzcyBpdCBsYXRlciBvbmNlIHRoZXNlXG4gIC8vIHRyZWUtc2hha2VhYmxlIHByb3ZpZGVycyBoYXZlIHByb3BlciBkb2N1bWVudGF0aW9uLlxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgZm9yd2FyZFJlZigoKSA9PiBDbHJDb21tb25TdHJpbmdzKV1dLFxufTtcbiJdfQ==