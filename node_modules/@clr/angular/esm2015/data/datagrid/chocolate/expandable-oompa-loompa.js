/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Directive, Optional } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { ExpandableRowsCount } from '../providers/global-expandable-rows';
import { DatagridWillyWonka } from './datagrid-willy-wonka';
export class ExpandableOompaLoompa extends OompaLoompa {
    /**
     * @param {?} cdr
     * @param {?} willyWonka
     * @param {?} expandableCount
     */
    constructor(cdr, willyWonka, expandableCount) {
        if (!willyWonka) {
            throw new Error('clr-dg-row should only be used inside of a clr-datagrid');
        }
        super(cdr, willyWonka);
        this.expandableCount = expandableCount;
    }
    /**
     * @return {?}
     */
    get flavor() {
        return this.expandableCount.hasExpandableRow;
    }
}
ExpandableOompaLoompa.decorators = [
    { type: Directive, args: [{ selector: 'clr-datagrid, clr-dg-row' },] }
];
/** @nocollapse */
ExpandableOompaLoompa.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DatagridWillyWonka, decorators: [{ type: Optional }] },
    { type: ExpandableRowsCount }
];
if (false) {
    /** @type {?} */
    ExpandableOompaLoompa.prototype.expandableCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1vb21wYS1sb29tcGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2Nob2NvbGF0ZS9leHBhbmRhYmxlLW9vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFdBQVc7Ozs7OztJQUdwRCxZQUNFLEdBQXNCLEVBQ1YsVUFBOEIsRUFDMUMsZUFBb0M7UUFFcEMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztTQUM1RTtRQUNELEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFOzs7O1lBTDFDLGlCQUFpQjtZQUdqQixrQkFBa0IsdUJBUXRCLFFBQVE7WUFUSixtQkFBbUI7Ozs7SUFLMUIsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9vbXBhTG9vbXBhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2hvY29sYXRlL29vbXBhLWxvb21wYSc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlUm93c0NvdW50IH0gZnJvbSAnLi4vcHJvdmlkZXJzL2dsb2JhbC1leHBhbmRhYmxlLXJvd3MnO1xuaW1wb3J0IHsgRGF0YWdyaWRXaWxseVdvbmthIH0gZnJvbSAnLi9kYXRhZ3JpZC13aWxseS13b25rYSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2Nsci1kYXRhZ3JpZCwgY2xyLWRnLXJvdycgfSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlT29tcGFMb29tcGEgZXh0ZW5kcyBPb21wYUxvb21wYSB7XG4gIHByaXZhdGUgZXhwYW5kYWJsZUNvdW50OiBFeHBhbmRhYmxlUm93c0NvdW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgd2lsbHlXb25rYTogRGF0YWdyaWRXaWxseVdvbmthLFxuICAgIGV4cGFuZGFibGVDb3VudDogRXhwYW5kYWJsZVJvd3NDb3VudFxuICApIHtcbiAgICBpZiAoIXdpbGx5V29ua2EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xyLWRnLXJvdyBzaG91bGQgb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsci1kYXRhZ3JpZCcpO1xuICAgIH1cbiAgICBzdXBlcihjZHIsIHdpbGx5V29ua2EpO1xuICAgIHRoaXMuZXhwYW5kYWJsZUNvdW50ID0gZXhwYW5kYWJsZUNvdW50O1xuICB9XG5cbiAgZ2V0IGZsYXZvcigpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlQ291bnQuaGFzRXhwYW5kYWJsZVJvdztcbiAgfVxufVxuIl19