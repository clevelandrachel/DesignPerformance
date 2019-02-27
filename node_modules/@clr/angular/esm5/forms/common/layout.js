/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input } from '@angular/core';
import { Layouts, LayoutService } from './providers/layout.service';
var ClrLayout = /** @class */ (function () {
    function ClrLayout(layoutService) {
        this.layoutService = layoutService;
    }
    /**
     * @return {?}
     */
    ClrLayout.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Only set the layout if it is a valid option
        if (this.layout && this.layoutService.isValid(this.layout)) {
            this.layoutService.layout = this.layout;
        }
    };
    ClrLayout.decorators = [
        { type: Directive, args: [{
                    selector: '[clrLayout]',
                },] }
    ];
    /** @nocollapse */
    ClrLayout.ctorParameters = function () { return [
        { type: LayoutService }
    ]; };
    ClrLayout.propDecorators = {
        layout: [{ type: Input, args: ['clrLayout',] }]
    };
    return ClrLayout;
}());
export { ClrLayout };
if (false) {
    /** @type {?} */
    ClrLayout.prototype.layout;
    /** @type {?} */
    ClrLayout.prototype.layoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY29tbW9uL2xheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBTUUsbUJBQW1CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQzs7OztJQUVuRCw0QkFBUTs7O0lBQVI7UUFDRSw4Q0FBOEM7UUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFKaUIsYUFBYTs7O3lCQU01QixLQUFLLFNBQUMsV0FBVzs7SUFVcEIsZ0JBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxTQUFTOzs7SUFDcEIsMkJBQW9DOztJQUV4QixrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dHMsIExheW91dFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9sYXlvdXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbHJMYXlvdXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyTGF5b3V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjbHJMYXlvdXQnKSBsYXlvdXQ6IExheW91dHM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gT25seSBzZXQgdGhlIGxheW91dCBpZiBpdCBpcyBhIHZhbGlkIG9wdGlvblxuICAgIGlmICh0aGlzLmxheW91dCAmJiB0aGlzLmxheW91dFNlcnZpY2UuaXNWYWxpZCh0aGlzLmxheW91dCkpIHtcbiAgICAgIHRoaXMubGF5b3V0U2VydmljZS5sYXlvdXQgPSB0aGlzLmxheW91dDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==