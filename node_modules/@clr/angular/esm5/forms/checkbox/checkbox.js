/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ClrCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(ClrCheckbox, _super);
    function ClrCheckbox(vcr, injector, control, renderer, el, toggle) {
        var _this = _super.call(this, vcr, ClrCheckboxWrapper, injector, control, renderer, el) || this;
        _this.toggle = toggle;
        return _this;
    }
    /**
     * @return {?}
     */
    ClrCheckbox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        /** @type {?} */
        var toggleService = this.getProviderFromContainer(IS_TOGGLE, null);
        if (toggleService && this.toggle !== null) {
            toggleService.next(true);
        }
    };
    ClrCheckbox.decorators = [
        { type: Directive, args: [{ selector: '[clrCheckbox],[clrToggle]' },] }
    ];
    /** @nocollapse */
    ClrCheckbox.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Injector },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Attribute, args: ['clrToggle',] }] }
    ]; };
    return ClrCheckbox;
}(WrappedFormControl));
export { ClrCheckbox };
if (false) {
    /** @type {?} */
    ClrCheckbox.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jaGVja2JveC9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBUS9EO0lBQ2lDLHVDQUFzQztJQUNyRSxxQkFDRSxHQUFxQixFQUNyQixRQUFrQixFQUdsQixPQUFrQixFQUNsQixRQUFtQixFQUNuQixFQUFjLEVBQ2tCLE1BQWM7UUFSaEQsWUFVRSxrQkFBTSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQ2hFO1FBSGlDLFlBQU0sR0FBTixNQUFNLENBQVE7O0lBR2hELENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQzs7WUFFWCxhQUFhLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUEyQixTQUFTLEVBQUUsSUFBSSxDQUFDO1FBRTlGLElBQUksYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFOzs7O2dCQWJpQixnQkFBZ0I7Z0JBQTFDLFFBQVE7Z0JBQzFDLFNBQVMsdUJBaUJiLElBQUksWUFDSixRQUFRO2dCQW5CTyxTQUFTO2dCQUFFLFVBQVU7NkNBdUJwQyxTQUFTLFNBQUMsV0FBVzs7SUFjMUIsa0JBQUM7Q0FBQSxBQXhCRCxDQUNpQyxrQkFBa0IsR0F1QmxEO1NBdkJZLFdBQVc7OztJQVNwQiw2QkFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIFNlbGYsIE9wdGlvbmFsLCBWaWV3Q29udGFpbmVyUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDbHJDaGVja2JveFdyYXBwZXIsIElTX1RPR0dMRSB9IGZyb20gJy4vY2hlY2tib3gtd3JhcHBlcic7XG5pbXBvcnQgeyBXcmFwcGVkRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vd3JhcHBlZC1jb250cm9sJztcblxuLyoqXG4gKiBUaGlzIGltcGxlbWVudHMgYm90aCB0aGUgY2xyQ2hlY2tib3ggYW5kIGNsclRvZ2dsZSBmdW5jdGlvbmFsaXR5LCBzaW5jZSB0aGV5IGFyZSBib3RoIGp1c3QgY2hlY2tib3hlcyB3aXRoIGRpZmZlcmVudFxuICogdmlzdWFsIHN0eWxpbmcuIFRoZSBjaGFsbGVuZ2UgaXMgdGhhdCB0aGUgY29udGFpbmVyIG5lZWRzIHRvIGtub3cgd2hpY2ggc2VsZWN0b3Igd2FzIHVzZWQsIHdoaWNoIHRoZSBAQXR0cmlidXRlXG4gKiBkZWNvcmF0b3IgZ2V0cyBmb3IgdXMgdG8gZGV0ZXJtaW5lIGlmIHRoZSB0b2dnbGUgaXMgdXNlZCwgYW5kIGVtaXRzIGEgdmFsdWUgdG8gdGhlIHdyYXBwZXIgY29udGFpbmVyIHRvIHRlbGwgaXRcbiAqIHRoZXJlIGlzIGEgdG9nZ2xlIHN3aXRjaCBpbnN0ZWFkLlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyQ2hlY2tib3hdLFtjbHJUb2dnbGVdJyB9KVxuZXhwb3J0IGNsYXNzIENsckNoZWNrYm94IGV4dGVuZHMgV3JhcHBlZEZvcm1Db250cm9sPENsckNoZWNrYm94V3JhcHBlcj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBBdHRyaWJ1dGUoJ2NsclRvZ2dsZScpIHByaXZhdGUgdG9nZ2xlOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIodmNyLCBDbHJDaGVja2JveFdyYXBwZXIsIGluamVjdG9yLCBjb250cm9sLCByZW5kZXJlciwgZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIGNvbnN0IHRvZ2dsZVNlcnZpY2UgPSB0aGlzLmdldFByb3ZpZGVyRnJvbUNvbnRhaW5lcjxCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4+KElTX1RPR0dMRSwgbnVsbCk7XG5cbiAgICBpZiAodG9nZ2xlU2VydmljZSAmJiB0aGlzLnRvZ2dsZSAhPT0gbnVsbCkge1xuICAgICAgdG9nZ2xlU2VydmljZS5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxufVxuIl19