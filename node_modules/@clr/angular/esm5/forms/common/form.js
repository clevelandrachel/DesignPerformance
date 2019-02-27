/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive } from '@angular/core';
import { LayoutService } from './providers/layout.service';
import { IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER } from './providers/new-forms.service';
import { MarkControlService } from './providers/mark-control.service';
var ClrForm = /** @class */ (function () {
    function ClrForm(layoutService, markControlService) {
        this.layoutService = layoutService;
        this.markControlService = markControlService;
    }
    /**
     * @return {?}
     */
    ClrForm.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        this.markControlService.markAsDirty();
    };
    ClrForm.decorators = [
        { type: Directive, args: [{
                    selector: '[clrForm]',
                    providers: [LayoutService, MarkControlService, IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER],
                    host: {
                        '[class.clr-form]': 'true',
                        '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
                        '[class.clr-form-compact]': 'layoutService.isCompact()',
                    },
                },] }
    ];
    /** @nocollapse */
    ClrForm.ctorParameters = function () { return [
        { type: LayoutService },
        { type: MarkControlService }
    ]; };
    return ClrForm;
}());
export { ClrForm };
if (false) {
    /** @type {?} */
    ClrForm.prototype.layoutService;
    /** @type {?} */
    ClrForm.prototype.markControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFO0lBVUUsaUJBQW1CLGFBQTRCLEVBQVUsa0JBQXNDO1FBQTVFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUFHLENBQUM7Ozs7SUFFbkcsNkJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsU0FBUyxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGlDQUFpQyxDQUFDO29CQUNqRixJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsTUFBTTt3QkFDMUIsNkJBQTZCLEVBQUUsOEJBQThCO3dCQUM3RCwwQkFBMEIsRUFBRSwyQkFBMkI7cUJBQ3hEO2lCQUNGOzs7O2dCQVpRLGFBQWE7Z0JBRWIsa0JBQWtCOztJQWlCM0IsY0FBQztDQUFBLEFBZkQsSUFlQztTQU5ZLE9BQU87OztJQUNOLGdDQUFtQzs7SUFBRSxxQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBJU19ORVdfRk9STVNfTEFZT1VUX1RSVUVfUFJPVklERVIgfSBmcm9tICcuL3Byb3ZpZGVycy9uZXctZm9ybXMuc2VydmljZSc7XG5pbXBvcnQgeyBNYXJrQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9tYXJrLWNvbnRyb2wuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbHJGb3JtXScsXG4gIHByb3ZpZGVyczogW0xheW91dFNlcnZpY2UsIE1hcmtDb250cm9sU2VydmljZSwgSVNfTkVXX0ZPUk1TX0xBWU9VVF9UUlVFX1BST1ZJREVSXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuY2xyLWZvcm1dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuY2xyLWZvcm0taG9yaXpvbnRhbF0nOiAnbGF5b3V0U2VydmljZS5pc0hvcml6b250YWwoKScsXG4gICAgJ1tjbGFzcy5jbHItZm9ybS1jb21wYWN0XSc6ICdsYXlvdXRTZXJ2aWNlLmlzQ29tcGFjdCgpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRm9ybSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLCBwcml2YXRlIG1hcmtDb250cm9sU2VydmljZTogTWFya0NvbnRyb2xTZXJ2aWNlKSB7fVxuXG4gIG1hcmtBc0RpcnR5KCkge1xuICAgIHRoaXMubWFya0NvbnRyb2xTZXJ2aWNlLm1hcmtBc0RpcnR5KCk7XG4gIH1cbn1cbiJdfQ==