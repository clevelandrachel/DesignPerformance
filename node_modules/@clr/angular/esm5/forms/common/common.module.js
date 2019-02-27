/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrControlError } from './error';
import { ClrControlHelper } from './helper';
import { ClrIfError } from './if-error/if-error';
import { ClrLabel } from './label';
import { ClrForm } from './form';
import { ClrLayout } from './layout';
var ClrCommonFormsModule = /** @class */ (function () {
    function ClrCommonFormsModule() {
    }
    ClrCommonFormsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
                    exports: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
                },] }
    ];
    return ClrCommonFormsModule;
}());
export { ClrCommonFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVyQztJQUFBO0lBS21DLENBQUM7O2dCQUxuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO29CQUMzRixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO2lCQUN2Rjs7SUFDa0MsMkJBQUM7Q0FBQSxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xyQ29udHJvbEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBDbHJDb250cm9sSGVscGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuaW1wb3J0IHsgQ2xySWZFcnJvciB9IGZyb20gJy4vaWYtZXJyb3IvaWYtZXJyb3InO1xuaW1wb3J0IHsgQ2xyTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IENsckZvcm0gfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgQ2xyTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2xyTGFiZWwsIENsckNvbnRyb2xFcnJvciwgQ2xyQ29udHJvbEhlbHBlciwgQ2xySWZFcnJvciwgQ2xyRm9ybSwgQ2xyTGF5b3V0XSxcbiAgZXhwb3J0czogW0NsckxhYmVsLCBDbHJDb250cm9sRXJyb3IsIENsckNvbnRyb2xIZWxwZXIsIENscklmRXJyb3IsIENsckZvcm0sIENsckxheW91dF0sXG59KVxuZXhwb3J0IGNsYXNzIENsckNvbW1vbkZvcm1zTW9kdWxlIHt9XG4iXX0=