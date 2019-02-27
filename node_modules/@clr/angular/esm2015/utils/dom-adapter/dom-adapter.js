/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * If we someday want to be able to render the datagrid in a webworker,
 * this is where we would test if we're in headless mode. Right now it's not testing anything, but any access
 * to native DOM elements' methods and properties in the Datagrid happens here.
 */
import { Injectable } from '@angular/core';
export class DomAdapter {
    /**
     * @param {?} element
     * @return {?}
     */
    userDefinedWidth(element) {
        element.classList.add('datagrid-cell-width-zero');
        /** @type {?} */
        const userDefinedWidth = this.clientRect(element).width;
        element.classList.remove('datagrid-cell-width-zero');
        return userDefinedWidth;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    scrollBarWidth(element) {
        return element.offsetWidth - element.clientWidth;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    scrollWidth(element) {
        return element.scrollWidth || 0;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    computedHeight(element) {
        return parseInt(getComputedStyle(element).getPropertyValue('height'), 10);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    clientRect(element) {
        /** @type {?} */
        const elementClientRect = element.getBoundingClientRect();
        return {
            top: parseInt(elementClientRect.top, 10),
            bottom: parseInt(elementClientRect.bottom, 10),
            left: parseInt(elementClientRect.left, 10),
            right: parseInt(elementClientRect.right, 10),
            width: parseInt(elementClientRect.width, 10),
            height: parseInt(elementClientRect.height, 10),
        };
    }
    /**
     * @param {?} element
     * @return {?}
     */
    minWidth(element) {
        return parseInt(getComputedStyle(element).getPropertyValue('min-width'), 10);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    focus(element) {
        element.focus();
    }
}
DomAdapter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kb20tYWRhcHRlci9kb20tYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBQ3JCLGdCQUFnQixDQUFDLE9BQW9CO1FBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2NBQzVDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSztRQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBWTtRQUN6QixPQUFPLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBWTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFZOztjQUNmLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtRQUN6RCxPQUFPO1lBQ0wsR0FBRyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUM5QyxJQUFJLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDMUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzVDLEtBQUssRUFBRSxRQUFRLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7U0FDL0MsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQVk7UUFDbkIsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWTtRQUNoQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBdkNGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbi8qXG4gKiBJZiB3ZSBzb21lZGF5IHdhbnQgdG8gYmUgYWJsZSB0byByZW5kZXIgdGhlIGRhdGFncmlkIGluIGEgd2Vid29ya2VyLFxuICogdGhpcyBpcyB3aGVyZSB3ZSB3b3VsZCB0ZXN0IGlmIHdlJ3JlIGluIGhlYWRsZXNzIG1vZGUuIFJpZ2h0IG5vdyBpdCdzIG5vdCB0ZXN0aW5nIGFueXRoaW5nLCBidXQgYW55IGFjY2Vzc1xuICogdG8gbmF0aXZlIERPTSBlbGVtZW50cycgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBpbiB0aGUgRGF0YWdyaWQgaGFwcGVucyBoZXJlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbUFkYXB0ZXIge1xuICB1c2VyRGVmaW5lZFdpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhdGFncmlkLWNlbGwtd2lkdGgtemVybycpO1xuICAgIGNvbnN0IHVzZXJEZWZpbmVkV2lkdGggPSB0aGlzLmNsaWVudFJlY3QoZWxlbWVudCkud2lkdGg7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXRhZ3JpZC1jZWxsLXdpZHRoLXplcm8nKTtcbiAgICByZXR1cm4gdXNlckRlZmluZWRXaWR0aDtcbiAgfVxuXG4gIHNjcm9sbEJhcldpZHRoKGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHNjcm9sbFdpZHRoKGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiBlbGVtZW50LnNjcm9sbFdpZHRoIHx8IDA7XG4gIH1cblxuICBjb21wdXRlZEhlaWdodChlbGVtZW50OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLCAxMCk7XG4gIH1cblxuICBjbGllbnRSZWN0KGVsZW1lbnQ6IGFueSk6IENsaWVudFJlY3Qge1xuICAgIGNvbnN0IGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBwYXJzZUludChlbGVtZW50Q2xpZW50UmVjdC50b3AsIDEwKSxcbiAgICAgIGJvdHRvbTogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3QuYm90dG9tLCAxMCksXG4gICAgICBsZWZ0OiBwYXJzZUludChlbGVtZW50Q2xpZW50UmVjdC5sZWZ0LCAxMCksXG4gICAgICByaWdodDogcGFyc2VJbnQoZWxlbWVudENsaWVudFJlY3QucmlnaHQsIDEwKSxcbiAgICAgIHdpZHRoOiBwYXJzZUludChlbGVtZW50Q2xpZW50UmVjdC53aWR0aCwgMTApLFxuICAgICAgaGVpZ2h0OiBwYXJzZUludChlbGVtZW50Q2xpZW50UmVjdC5oZWlnaHQsIDEwKSxcbiAgICB9O1xuICB9XG5cbiAgbWluV2lkdGgoZWxlbWVudDogYW55KTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdtaW4td2lkdGgnKSwgMTApO1xuICB9XG5cbiAgZm9jdXMoZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgZWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=