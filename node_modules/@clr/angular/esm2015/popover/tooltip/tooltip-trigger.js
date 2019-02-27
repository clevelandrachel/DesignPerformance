/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
export class ClrTooltipTrigger {
    /**
     * @param {?} ifOpenService
     */
    constructor(ifOpenService) {
        this.ifOpenService = ifOpenService;
    }
    /**
     * @return {?}
     */
    showTooltip() {
        this.ifOpenService.open = true;
    }
    /**
     * @return {?}
     */
    hideTooltip() {
        this.ifOpenService.open = false;
    }
}
ClrTooltipTrigger.decorators = [
    { type: Directive, args: [{ selector: '[clrTooltipTrigger]', host: { '[attr.tabindex]': '0', '[class.tooltip-trigger]': 'true' } },] }
];
/** @nocollapse */
ClrTooltipTrigger.ctorParameters = () => [
    { type: IfOpenService }
];
ClrTooltipTrigger.propDecorators = {
    showTooltip: [{ type: HostListener, args: ['mouseenter',] }, { type: HostListener, args: ['focus',] }],
    hideTooltip: [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] }]
};
if (false) {
    /** @type {?} */
    ClrTooltipTrigger.prototype.ifOpenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci90b29sdGlwL3Rvb2x0aXAtdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHeEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7Ozs7SUFJcEQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7WUFkRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxFQUFFOzs7O1lBRjFHLGFBQWE7OzswQkFNbkIsWUFBWSxTQUFDLFlBQVksY0FDekIsWUFBWSxTQUFDLE9BQU87MEJBS3BCLFlBQVksU0FBQyxZQUFZLGNBQ3pCLFlBQVksU0FBQyxNQUFNOzs7O0lBVFIsMENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmT3BlblNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1vcGVuLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyVG9vbHRpcFRyaWdnZXJdJywgaG9zdDogeyAnW2F0dHIudGFiaW5kZXhdJzogJzAnLCAnW2NsYXNzLnRvb2x0aXAtdHJpZ2dlcl0nOiAndHJ1ZScgfSB9KVxuZXhwb3J0IGNsYXNzIENsclRvb2x0aXBUcmlnZ2VyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpZk9wZW5TZXJ2aWNlOiBJZk9wZW5TZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXG4gIHNob3dUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgaGlkZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPSBmYWxzZTtcbiAgfVxufVxuIl19