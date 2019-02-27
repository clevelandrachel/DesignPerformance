/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Optional } from '@angular/core';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
/*
 * I don't think this deserves to be in IfExpanded itself,
 * so I'm adding a second directive on the same selector for now just for the datagrid
 */
export class DatagridDetailRegisterer {
    /**
     * @param {?} expandableRowsCount
     */
    constructor(expandableRowsCount) {
        this.expandableRowsCount = expandableRowsCount;
        if (this.expandableRowsCount) {
            this.expandableRowsCount.register();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.expandableRowsCount) {
            this.expandableRowsCount.unregister();
        }
    }
}
DatagridDetailRegisterer.decorators = [
    { type: Directive, args: [{ selector: '[clrIfExpanded]' },] }
];
/** @nocollapse */
DatagridDetailRegisterer.ctorParameters = () => [
    { type: ExpandableRowsCount, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    DatagridDetailRegisterer.prototype.expandableRowsCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZGV0YWlsLXJlZ2lzdGVyZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLWRldGFpbC1yZWdpc3RlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU96RSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQWdDLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3RFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O1lBTmpDLG1CQUFtQix1QkFRYixRQUFROzs7O0lBQVQsdURBQTREIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZVJvd3NDb3VudCB9IGZyb20gJy4vcHJvdmlkZXJzL2dsb2JhbC1leHBhbmRhYmxlLXJvd3MnO1xuXG4vKlxuICogSSBkb24ndCB0aGluayB0aGlzIGRlc2VydmVzIHRvIGJlIGluIElmRXhwYW5kZWQgaXRzZWxmLFxuICogc28gSSdtIGFkZGluZyBhIHNlY29uZCBkaXJlY3RpdmUgb24gdGhlIHNhbWUgc2VsZWN0b3IgZm9yIG5vdyBqdXN0IGZvciB0aGUgZGF0YWdyaWRcbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NscklmRXhwYW5kZWRdJyB9KVxuZXhwb3J0IGNsYXNzIERhdGFncmlkRGV0YWlsUmVnaXN0ZXJlciB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgZXhwYW5kYWJsZVJvd3NDb3VudDogRXhwYW5kYWJsZVJvd3NDb3VudCkge1xuICAgIGlmICh0aGlzLmV4cGFuZGFibGVSb3dzQ291bnQpIHtcbiAgICAgIHRoaXMuZXhwYW5kYWJsZVJvd3NDb3VudC5yZWdpc3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmV4cGFuZGFibGVSb3dzQ291bnQpIHtcbiAgICAgIHRoaXMuZXhwYW5kYWJsZVJvd3NDb3VudC51bnJlZ2lzdGVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=