/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Renderer2, ElementRef, Injector, Self, Optional, ViewContainerRef, Attribute } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ClrCheckboxWrapper, IS_TOGGLE } from './checkbox-wrapper';
import { WrappedFormControl } from '../common/wrapped-control';
/**
 * This implements both the clrCheckbox and clrToggle functionality, since they are both just checkboxes with different
 * visual styling. The challenge is that the container needs to know which selector was used, which the \@Attribute
 * decorator gets for us to determine if the toggle is used, and emits a value to the wrapper container to tell it
 * there is a toggle switch instead.
 */
export class ClrCheckbox extends WrappedFormControl {
    /**
     * @param {?} vcr
     * @param {?} injector
     * @param {?} control
     * @param {?} renderer
     * @param {?} el
     * @param {?} toggle
     */
    constructor(vcr, injector, control, renderer, el, toggle) {
        super(vcr, ClrCheckboxWrapper, injector, control, renderer, el);
        this.toggle = toggle;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        /** @type {?} */
        const toggleService = this.getProviderFromContainer(IS_TOGGLE, null);
        if (toggleService && this.toggle !== null) {
            toggleService.next(true);
        }
    }
}
ClrCheckbox.decorators = [
    { type: Directive, args: [{ selector: '[clrCheckbox],[clrToggle]' },] }
];
/** @nocollapse */
ClrCheckbox.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Injector },
    { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['clrToggle',] }] }
];
if (false) {
    /** @type {?} */
    ClrCheckbox.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jaGVja2JveC9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFTL0QsTUFBTSxPQUFPLFdBQVksU0FBUSxrQkFBc0M7Ozs7Ozs7OztJQUNyRSxZQUNFLEdBQXFCLEVBQ3JCLFFBQWtCLEVBR2xCLE9BQWtCLEVBQ2xCLFFBQW1CLEVBQ25CLEVBQWMsRUFDa0IsTUFBYztRQUU5QyxLQUFLLENBQUMsR0FBRyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRmhDLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHaEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O2NBRVgsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBMkIsU0FBUyxFQUFFLElBQUksQ0FBQztRQUU5RixJQUFJLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6QyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRTs7OztZQWJpQixnQkFBZ0I7WUFBMUMsUUFBUTtZQUMxQyxTQUFTLHVCQWlCYixJQUFJLFlBQ0osUUFBUTtZQW5CTyxTQUFTO1lBQUUsVUFBVTt5Q0F1QnBDLFNBQVMsU0FBQyxXQUFXOzs7O0lBQXRCLDZCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3RvciwgU2VsZiwgT3B0aW9uYWwsIFZpZXdDb250YWluZXJSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENsckNoZWNrYm94V3JhcHBlciwgSVNfVE9HR0xFIH0gZnJvbSAnLi9jaGVja2JveC13cmFwcGVyJztcbmltcG9ydCB7IFdyYXBwZWRGb3JtQ29udHJvbCB9IGZyb20gJy4uL2NvbW1vbi93cmFwcGVkLWNvbnRyb2wnO1xuXG4vKipcbiAqIFRoaXMgaW1wbGVtZW50cyBib3RoIHRoZSBjbHJDaGVja2JveCBhbmQgY2xyVG9nZ2xlIGZ1bmN0aW9uYWxpdHksIHNpbmNlIHRoZXkgYXJlIGJvdGgganVzdCBjaGVja2JveGVzIHdpdGggZGlmZmVyZW50XG4gKiB2aXN1YWwgc3R5bGluZy4gVGhlIGNoYWxsZW5nZSBpcyB0aGF0IHRoZSBjb250YWluZXIgbmVlZHMgdG8ga25vdyB3aGljaCBzZWxlY3RvciB3YXMgdXNlZCwgd2hpY2ggdGhlIEBBdHRyaWJ1dGVcbiAqIGRlY29yYXRvciBnZXRzIGZvciB1cyB0byBkZXRlcm1pbmUgaWYgdGhlIHRvZ2dsZSBpcyB1c2VkLCBhbmQgZW1pdHMgYSB2YWx1ZSB0byB0aGUgd3JhcHBlciBjb250YWluZXIgdG8gdGVsbCBpdFxuICogdGhlcmUgaXMgYSB0b2dnbGUgc3dpdGNoIGluc3RlYWQuXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJDaGVja2JveF0sW2NsclRvZ2dsZV0nIH0pXG5leHBvcnQgY2xhc3MgQ2xyQ2hlY2tib3ggZXh0ZW5kcyBXcmFwcGVkRm9ybUNvbnRyb2w8Q2xyQ2hlY2tib3hXcmFwcGVyPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgY29udHJvbDogTmdDb250cm9sLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEF0dHJpYnV0ZSgnY2xyVG9nZ2xlJykgcHJpdmF0ZSB0b2dnbGU6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcih2Y3IsIENsckNoZWNrYm94V3JhcHBlciwgaW5qZWN0b3IsIGNvbnRyb2wsIHJlbmRlcmVyLCBlbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgY29uc3QgdG9nZ2xlU2VydmljZSA9IHRoaXMuZ2V0UHJvdmlkZXJGcm9tQ29udGFpbmVyPEJlaGF2aW9yU3ViamVjdDxib29sZWFuPj4oSVNfVE9HR0xFLCBudWxsKTtcblxuICAgIGlmICh0b2dnbGVTZXJ2aWNlICYmIHRoaXMudG9nZ2xlICE9PSBudWxsKSB7XG4gICAgICB0b2dnbGVTZXJ2aWNlLm5leHQodHJ1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=