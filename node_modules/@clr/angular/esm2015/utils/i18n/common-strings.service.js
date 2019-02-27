/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ClrCommonStringsService {
    constructor() {
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
}
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
    const defaults = new ClrCommonStringsService();
    if (existing) {
        return Object.assign({}, defaults, existing);
    }
    return defaults;
}
/** @type {?} */
export const COMMON_STRINGS_PROVIDER = {
    useFactory: commonStringsFactory,
    // We have a circular dependency for now, we can address it later once these
    // tree-shakeable providers have proper documentation.
    deps: [[new Optional(), new SkipSelf(), forwardRef(() => ClrCommonStrings)]],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXN0cmluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBc0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBSzlELE1BQU0sT0FBTyx1QkFBdUI7SUFBcEM7UUFDRSxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUM1QixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsZUFBVSxHQUFHLG1CQUFtQixDQUFDO1FBQ2pDLGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7SUFDdkMsQ0FBQztDQUFBOzs7SUFsQkMsdUNBQWM7O0lBQ2Qsd0NBQWdCOztJQUNoQix1Q0FBYzs7SUFDZCx1Q0FBYzs7SUFDZCx5Q0FBa0I7O0lBQ2xCLDJDQUFzQjs7SUFDdEIsdUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQiw0Q0FBeUI7O0lBQ3pCLDJDQUFzQjs7SUFDdEIsdUNBQWM7O0lBQ2QsMENBQTRCOztJQUM1Qix1Q0FBYzs7SUFDZCwwQ0FBb0I7O0lBQ3BCLDBDQUFvQjs7SUFDcEIseUNBQWlCOztJQUNqQiw2Q0FBaUM7O0lBQ2pDLDhDQUFxQzs7Ozs7O0FBR3ZDLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxRQUEyQjs7VUFDeEQsUUFBUSxHQUFHLElBQUksdUJBQXVCLEVBQUU7SUFDOUMsSUFBSSxRQUFRLEVBQUU7UUFDWix5QkFBWSxRQUFRLEVBQUssUUFBUSxFQUFHO0tBQ3JDO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sdUJBQXVCLEdBQXVCO0lBQ3pELFVBQVUsRUFBRSxvQkFBb0I7OztJQUdoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0NBQzdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgU2tpcFNlbGYsIE9wdGlvbmFsLCBJbmplY3RhYmxlUHJvdmlkZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuLy8gQFRPRE8gUHV0IHRoZSBSZXF1aXJlZCB0eXBlIGJhY2sgaW4gd2hlbiBvdXIgbWluaW11bWx5IHN1cHBvcnRlZCB2ZXJzaW9uIG9mIEFuZ3VsYXIgdXNlc1xuLy8gVFMgMi44IG9yIGdyZWF0ZXIgKHNob3VsZCBiZSBBbmd1bGFyIDcpXG4vLyBleHBvcnQgY2xhc3MgQ2xyQ29tbW9uU3RyaW5nc1NlcnZpY2UgaW1wbGVtZW50cyBSZXF1aXJlZDxDbHJDb21tb25TdHJpbmdzPiB7XG5leHBvcnQgY2xhc3MgQ2xyQ29tbW9uU3RyaW5nc1NlcnZpY2UgaW1wbGVtZW50cyBDbHJDb21tb25TdHJpbmdzIHtcbiAgb3BlbiA9ICdPcGVuJztcbiAgY2xvc2UgPSAnQ2xvc2UnO1xuICBzaG93ID0gJ1Nob3cnO1xuICBoaWRlID0gJ0hpZGUnO1xuICBleHBhbmQgPSAnRXhwYW5kJztcbiAgY29sbGFwc2UgPSAnQ29sbGFwc2UnO1xuICBtb3JlID0gJ01vcmUnO1xuICBzZWxlY3QgPSAnU2VsZWN0JztcbiAgc2VsZWN0QWxsID0gJ1NlbGVjdCBBbGwnO1xuICBwcmV2aW91cyA9ICdQcmV2aW91cyc7XG4gIG5leHQgPSAnTmV4dCc7XG4gIGN1cnJlbnQgPSAnSnVtcCB0byBjdXJyZW50JztcbiAgaW5mbyA9ICdJbmZvJztcbiAgc3VjY2VzcyA9ICdTdWNjZXNzJztcbiAgd2FybmluZyA9ICdXYXJuaW5nJztcbiAgZGFuZ2VyID0gJ0Vycm9yJztcbiAgcm93QWN0aW9ucyA9ICdBdmFpbGFibGUgYWN0aW9ucyc7XG4gIHBpY2tDb2x1bW5zID0gJ1Nob3cgb3IgaGlkZSBjb2x1bW5zJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1vblN0cmluZ3NGYWN0b3J5KGV4aXN0aW5nPzogQ2xyQ29tbW9uU3RyaW5ncyk6IENsckNvbW1vblN0cmluZ3Mge1xuICBjb25zdCBkZWZhdWx0cyA9IG5ldyBDbHJDb21tb25TdHJpbmdzU2VydmljZSgpO1xuICBpZiAoZXhpc3RpbmcpIHtcbiAgICByZXR1cm4geyAuLi5kZWZhdWx0cywgLi4uZXhpc3RpbmcgfTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG5cbmV4cG9ydCBjb25zdCBDT01NT05fU1RSSU5HU19QUk9WSURFUjogSW5qZWN0YWJsZVByb3ZpZGVyID0ge1xuICB1c2VGYWN0b3J5OiBjb21tb25TdHJpbmdzRmFjdG9yeSxcbiAgLy8gV2UgaGF2ZSBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgZm9yIG5vdywgd2UgY2FuIGFkZHJlc3MgaXQgbGF0ZXIgb25jZSB0aGVzZVxuICAvLyB0cmVlLXNoYWtlYWJsZSBwcm92aWRlcnMgaGF2ZSBwcm9wZXIgZG9jdW1lbnRhdGlvbi5cbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIGZvcndhcmRSZWYoKCkgPT4gQ2xyQ29tbW9uU3RyaW5ncyldXSxcbn07XG4iXX0=