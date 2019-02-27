/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
var OutsideClick = /** @class */ (function () {
    function OutsideClick(el) {
        this.el = el;
        this.strict = false;
        this.outsideClick = new EventEmitter(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OutsideClick.prototype.documentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = event.target;
        // Get the element in the DOM on which the mouse was clicked
        /** @type {?} */
        var host = this.el.nativeElement;
        if (target === host) {
            return;
        }
        if (!this.strict && host.contains(target)) {
            return;
        }
        this.outsideClick.emit(event);
    };
    OutsideClick.decorators = [
        { type: Directive, args: [{ selector: '[clrOutsideClick]' },] }
    ];
    /** @nocollapse */
    OutsideClick.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    OutsideClick.propDecorators = {
        strict: [{ type: Input, args: ['clrStrict',] }],
        outsideClick: [{ type: Output, args: ['clrOutsideClick',] }],
        documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return OutsideClick;
}());
export { OutsideClick };
if (false) {
    /** @type {?} */
    OutsideClick.prototype.strict;
    /** @type {?} */
    OutsideClick.prototype.outsideClick;
    /** @type {?} */
    OutsideClick.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS1jbGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svb3V0c2lkZS1jbGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakc7SUFFRSxzQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFFZCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRVIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBTSxLQUFLLENBQUMsQ0FBQztJQUpsQyxDQUFDOzs7OztJQU90QyxvQ0FBYTs7OztJQURiLFVBQ2MsS0FBaUI7O1lBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7O1lBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFFbEMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7OztnQkFGeEIsVUFBVTs7O3lCQU0zQixLQUFLLFNBQUMsV0FBVzsrQkFFakIsTUFBTSxTQUFDLGlCQUFpQjtnQ0FFeEIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQWE1QyxtQkFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLFlBQVk7OztJQUd2Qiw4QkFBbUM7O0lBRW5DLG9DQUF1RTs7SUFKM0QsMEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyT3V0c2lkZUNsaWNrXScgfSlcbmV4cG9ydCBjbGFzcyBPdXRzaWRlQ2xpY2sge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBJbnB1dCgnY2xyU3RyaWN0Jykgc3RyaWN0ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgnY2xyT3V0c2lkZUNsaWNrJykgb3V0c2lkZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGRvY3VtZW50Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7IC8vIEdldCB0aGUgZWxlbWVudCBpbiB0aGUgRE9NIG9uIHdoaWNoIHRoZSBtb3VzZSB3YXMgY2xpY2tlZFxuICAgIGNvbnN0IGhvc3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7IC8vIEdldCB0aGUgY3VycmVudCBhY3Rpb25NZW51IG5hdGl2ZSBIVE1MIGVsZW1lbnRcblxuICAgIGlmICh0YXJnZXQgPT09IGhvc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0cmljdCAmJiBob3N0LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vdXRzaWRlQ2xpY2suZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==