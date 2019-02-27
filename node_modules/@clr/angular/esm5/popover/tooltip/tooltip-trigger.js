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
var ClrTooltipTrigger = /** @class */ (function () {
    function ClrTooltipTrigger(ifOpenService) {
        this.ifOpenService = ifOpenService;
    }
    /**
     * @return {?}
     */
    ClrTooltipTrigger.prototype.showTooltip = /**
     * @return {?}
     */
    function () {
        this.ifOpenService.open = true;
    };
    /**
     * @return {?}
     */
    ClrTooltipTrigger.prototype.hideTooltip = /**
     * @return {?}
     */
    function () {
        this.ifOpenService.open = false;
    };
    ClrTooltipTrigger.decorators = [
        { type: Directive, args: [{ selector: '[clrTooltipTrigger]', host: { '[attr.tabindex]': '0', '[class.tooltip-trigger]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrTooltipTrigger.ctorParameters = function () { return [
        { type: IfOpenService }
    ]; };
    ClrTooltipTrigger.propDecorators = {
        showTooltip: [{ type: HostListener, args: ['mouseenter',] }, { type: HostListener, args: ['focus',] }],
        hideTooltip: [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] }]
    };
    return ClrTooltipTrigger;
}());
export { ClrTooltipTrigger };
if (false) {
    /** @type {?} */
    ClrTooltipTrigger.prototype.ifOpenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci90b29sdGlwL3Rvb2x0aXAtdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFeEU7SUFFRSwyQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDOzs7O0lBSXBELHVDQUFXOzs7SUFGWDtRQUdFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsdUNBQVc7OztJQUZYO1FBR0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7O2dCQWRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLEVBQUU7Ozs7Z0JBRjFHLGFBQWE7Ozs4QkFNbkIsWUFBWSxTQUFDLFlBQVksY0FDekIsWUFBWSxTQUFDLE9BQU87OEJBS3BCLFlBQVksU0FBQyxZQUFZLGNBQ3pCLFlBQVksU0FBQyxNQUFNOztJQUl0Qix3QkFBQztDQUFBLEFBZkQsSUFlQztTQWRZLGlCQUFpQjs7O0lBQ2hCLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtb3Blbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclRvb2x0aXBUcmlnZ2VyXScsIGhvc3Q6IHsgJ1thdHRyLnRhYmluZGV4XSc6ICcwJywgJ1tjbGFzcy50b29sdGlwLXRyaWdnZXJdJzogJ3RydWUnIH0gfSlcbmV4cG9ydCBjbGFzcyBDbHJUb29sdGlwVHJpZ2dlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWZPcGVuU2VydmljZTogSWZPcGVuU2VydmljZSkge31cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBzaG93VG9vbHRpcCgpOiB2b2lkIHtcbiAgICB0aGlzLmlmT3BlblNlcnZpY2Uub3BlbiA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGhpZGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==