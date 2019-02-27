/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Input, Optional } from '@angular/core';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';
var ClrCheckboxContainer = /** @class */ (function () {
    // @TODO Solve for group validation, which doesn't work now with ngModelGroup
    // Blocked by https://github.com/angular/angular/issues/20268
    // @Input()
    // set clrFormGroup(value: FormGroup) {
    //   this.formGroup = value;
    // }
    // @Input()
    // set clrFormArray(value: FormArray) {
    //   this.formGroup = value;
    // }
    function ClrCheckboxContainer(ifErrorService, layoutService, controlClassService, ngControlService) {
        var _this = this;
        this.ifErrorService = ifErrorService;
        this.layoutService = layoutService;
        this.controlClassService = controlClassService;
        this.ngControlService = ngControlService;
        this.subscriptions = [];
        this.invalid = false;
        this.inline = false;
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(function (control) {
            _this.control = control;
        }));
    }
    Object.defineProperty(ClrCheckboxContainer.prototype, "clrInline", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inline;
        },
        // private formGroup: AbstractControl;
        /*
         * Here we want to support the following cases
         * clrInline - true by presence
         * clrInline="true|false" - unless it is explicitly false, strings are considered true
         * [clrInline]="true|false" - expect a boolean
         */
        set: 
        // private formGroup: AbstractControl;
        /*
           * Here we want to support the following cases
           * clrInline - true by presence
           * clrInline="true|false" - unless it is explicitly false, strings are considered true
           * [clrInline]="true|false" - expect a boolean
           */
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this.inline = value === 'false' ? false : true;
            }
            else {
                this.inline = !!value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrCheckboxContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // @TODO put a solution in for form group validation
        // if (!this.formGroup) {
        this.subscriptions.push(this.ifErrorService.statusChanges.subscribe(function (invalid) {
            _this.invalid = invalid;
        }));
        // } else {
        //   // Because ngModel does this, we have to delay a tick to get the result
        //   Promise.resolve().then(() => {
        //     this.subscriptions.push(
        //       this.formGroup.statusChanges.subscribe(() => {
        //         this.invalid = this.formGroup.invalid;
        //       })
        //     );
        //   });
        // }
    };
    /**
     * @return {?}
     */
    ClrCheckboxContainer.prototype.controlClass = /**
     * @return {?}
     */
    function () {
        return this.controlClassService.controlClass(this.invalid, this.addGrid(), this.inline ? 'clr-control-inline' : '');
    };
    /**
     * @return {?}
     */
    ClrCheckboxContainer.prototype.addGrid = /**
     * @return {?}
     */
    function () {
        if (this.layoutService && !this.layoutService.isVertical()) {
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    ClrCheckboxContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.map(function (sub) { return sub.unsubscribe(); });
    };
    ClrCheckboxContainer.decorators = [
        { type: Component, args: [{
                    selector: 'clr-checkbox-container,clr-toggle-container',
                    template: "\n    <ng-content select=\"label\"></ng-content>\n    <label *ngIf=\"!label && addGrid()\"></label>\n    <div class=\"clr-control-container\" [class.clr-control-inline]=\"clrInline\" [ngClass]=\"controlClass()\">\n      <ng-content select=\"clr-checkbox-wrapper,clr-toggle-wrapper\"></ng-content>\n      <div class=\"clr-subtext-wrapper\">\n        <ng-content select=\"clr-control-helper\" *ngIf=\"!invalid\"></ng-content>\n        <clr-icon *ngIf=\"invalid\" class=\"clr-validate-icon\" shape=\"exclamation-circle\" aria-hidden=\"true\"></clr-icon>\n        <ng-content select=\"clr-control-error\" *ngIf=\"invalid\"></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        '[class.clr-form-control]': 'true',
                        '[class.clr-form-control-disabled]': 'control?.disabled',
                        '[class.clr-row]': 'addGrid()',
                    },
                    providers: [NgControlService, ControlClassService, IfErrorService]
                }] }
    ];
    /** @nocollapse */
    ClrCheckboxContainer.ctorParameters = function () { return [
        { type: IfErrorService },
        { type: LayoutService, decorators: [{ type: Optional }] },
        { type: ControlClassService },
        { type: NgControlService }
    ]; };
    ClrCheckboxContainer.propDecorators = {
        label: [{ type: ContentChild, args: [ClrLabel,] }],
        clrInline: [{ type: Input }]
    };
    return ClrCheckboxContainer;
}());
export { ClrCheckboxContainer };
if (false) {
    /** @type {?} */
    ClrCheckboxContainer.prototype.subscriptions;
    /** @type {?} */
    ClrCheckboxContainer.prototype.invalid;
    /** @type {?} */
    ClrCheckboxContainer.prototype.label;
    /** @type {?} */
    ClrCheckboxContainer.prototype.inline;
    /** @type {?} */
    ClrCheckboxContainer.prototype.control;
    /** @type {?} */
    ClrCheckboxContainer.prototype.ifErrorService;
    /** @type {?} */
    ClrCheckboxContainer.prototype.layoutService;
    /** @type {?} */
    ClrCheckboxContainer.prototype.controlClassService;
    /** @type {?} */
    ClrCheckboxContainer.prototype.ngControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY2hlY2tib3gvY2hlY2tib3gtY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUU7SUErQ0UsNkVBQTZFO0lBQzdFLDZEQUE2RDtJQUM3RCxXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixJQUFJO0lBRUosV0FBVztJQUNYLHVDQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsSUFBSTtJQUVKLDhCQUNVLGNBQThCLEVBQ2xCLGFBQTRCLEVBQ3hDLG1CQUF3QyxFQUN4QyxnQkFBa0M7UUFKNUMsaUJBV0M7UUFWUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBekNwQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDM0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVSLFdBQU0sR0FBRyxLQUFLLENBQUM7UUF3Q3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDcEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFuQ0Qsc0JBQ0ksMkNBQVM7Ozs7UUFPYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBbEJELHNDQUFzQztRQUV0Qzs7Ozs7V0FLRzs7Ozs7Ozs7Ozs7OztRQUNILFVBQ2MsS0FBdUI7WUFDbkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUE4QkQsdUNBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLG9EQUFvRDtRQUNwRCx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLFdBQVc7UUFDWCw0RUFBNEU7UUFDNUUsbUNBQW1DO1FBQ25DLCtCQUErQjtRQUMvQix1REFBdUQ7UUFDdkQsaURBQWlEO1FBQ2pELFdBQVc7UUFDWCxTQUFTO1FBQ1QsUUFBUTtRQUNSLElBQUk7SUFDTixDQUFDOzs7O0lBRUQsMkNBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0SCxDQUFDOzs7O0lBRUQsc0NBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkF6R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2Q0FBNkM7b0JBQ3ZELFFBQVEsRUFBRSx3cEJBV1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLE1BQU07d0JBQ2xDLG1DQUFtQyxFQUFFLG1CQUFtQjt3QkFDeEQsaUJBQWlCLEVBQUUsV0FBVztxQkFDL0I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO2lCQUNuRTs7OztnQkExQlEsY0FBYztnQkFHZCxhQUFhLHVCQWdFakIsUUFBUTtnQkFqRUosbUJBQW1CO2dCQUVuQixnQkFBZ0I7Ozt3QkEwQnRCLFlBQVksU0FBQyxRQUFROzRCQVdyQixLQUFLOztJQXVFUiwyQkFBQztDQUFBLEFBMUdELElBMEdDO1NBckZZLG9CQUFvQjs7O0lBQy9CLDZDQUEyQzs7SUFDM0MsdUNBQWdCOztJQUNoQixxQ0FBd0M7O0lBQ3hDLHNDQUF1Qjs7SUFDdkIsdUNBQW1COztJQWtDakIsOENBQXNDOztJQUN0Qyw2Q0FBZ0Q7O0lBQ2hELG1EQUFnRDs7SUFDaEQsZ0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSWZFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaWYtZXJyb3IvaWYtZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbCc7XG5pbXBvcnQgeyBDb250cm9sQ2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDb250cm9sU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvbmctY29udHJvbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWNoZWNrYm94LWNvbnRhaW5lcixjbHItdG9nZ2xlLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgPGxhYmVsICpuZ0lmPVwiIWxhYmVsICYmIGFkZEdyaWQoKVwiPjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNsci1jb250cm9sLWNvbnRhaW5lclwiIFtjbGFzcy5jbHItY29udHJvbC1pbmxpbmVdPVwiY2xySW5saW5lXCIgW25nQ2xhc3NdPVwiY29udHJvbENsYXNzKClcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1jaGVja2JveC13cmFwcGVyLGNsci10b2dnbGUtd3JhcHBlclwiPjwvbmctY29udGVudD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjbHItc3VidGV4dC13cmFwcGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1jb250cm9sLWhlbHBlclwiICpuZ0lmPVwiIWludmFsaWRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxjbHItaWNvbiAqbmdJZj1cImludmFsaWRcIiBjbGFzcz1cImNsci12YWxpZGF0ZS1pY29uXCIgc2hhcGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Nsci1pY29uPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItY29udHJvbC1lcnJvclwiICpuZ0lmPVwiaW52YWxpZFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jbHItZm9ybS1jb250cm9sXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmNsci1mb3JtLWNvbnRyb2wtZGlzYWJsZWRdJzogJ2NvbnRyb2w/LmRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmNsci1yb3ddJzogJ2FkZEdyaWQoKScsXG4gIH0sXG4gIHByb3ZpZGVyczogW05nQ29udHJvbFNlcnZpY2UsIENvbnRyb2xDbGFzc1NlcnZpY2UsIElmRXJyb3JTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQ2hlY2tib3hDb250YWluZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZChDbHJMYWJlbCkgbGFiZWw6IENsckxhYmVsO1xuICBwcml2YXRlIGlubGluZSA9IGZhbHNlO1xuICBjb250cm9sOiBOZ0NvbnRyb2w7XG4gIC8vIHByaXZhdGUgZm9ybUdyb3VwOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgLypcbiAgICogSGVyZSB3ZSB3YW50IHRvIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBjYXNlc1xuICAgKiBjbHJJbmxpbmUgLSB0cnVlIGJ5IHByZXNlbmNlXG4gICAqIGNscklubGluZT1cInRydWV8ZmFsc2VcIiAtIHVubGVzcyBpdCBpcyBleHBsaWNpdGx5IGZhbHNlLCBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIHRydWVcbiAgICogW2NscklubGluZV09XCJ0cnVlfGZhbHNlXCIgLSBleHBlY3QgYSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgY2xySW5saW5lKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaW5saW5lID0gdmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5saW5lID0gISF2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNscklubGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmxpbmU7XG4gIH1cblxuICAvLyBAVE9ETyBTb2x2ZSBmb3IgZ3JvdXAgdmFsaWRhdGlvbiwgd2hpY2ggZG9lc24ndCB3b3JrIG5vdyB3aXRoIG5nTW9kZWxHcm91cFxuICAvLyBCbG9ja2VkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwMjY4XG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBjbHJGb3JtR3JvdXAodmFsdWU6IEZvcm1Hcm91cCkge1xuICAvLyAgIHRoaXMuZm9ybUdyb3VwID0gdmFsdWU7XG4gIC8vIH1cblxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgY2xyRm9ybUFycmF5KHZhbHVlOiBGb3JtQXJyYXkpIHtcbiAgLy8gICB0aGlzLmZvcm1Hcm91cCA9IHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpZkVycm9yU2VydmljZTogSWZFcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udHJvbENsYXNzU2VydmljZTogQ29udHJvbENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIG5nQ29udHJvbFNlcnZpY2U6IE5nQ29udHJvbFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLm5nQ29udHJvbFNlcnZpY2UuY29udHJvbENoYW5nZXMuc3Vic2NyaWJlKGNvbnRyb2wgPT4ge1xuICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gQFRPRE8gcHV0IGEgc29sdXRpb24gaW4gZm9yIGZvcm0gZ3JvdXAgdmFsaWRhdGlvblxuICAgIC8vIGlmICghdGhpcy5mb3JtR3JvdXApIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaWZFcnJvclNlcnZpY2Uuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoaW52YWxpZCA9PiB7XG4gICAgICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgICB9KVxuICAgICk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vIEJlY2F1c2UgbmdNb2RlbCBkb2VzIHRoaXMsIHdlIGhhdmUgdG8gZGVsYXkgYSB0aWNrIHRvIGdldCB0aGUgcmVzdWx0XG4gICAgLy8gICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgLy8gICAgICAgdGhpcy5mb3JtR3JvdXAuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5pbnZhbGlkID0gdGhpcy5mb3JtR3JvdXAuaW52YWxpZDtcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbiAgY29udHJvbENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xDbGFzc1NlcnZpY2UuY29udHJvbENsYXNzKHRoaXMuaW52YWxpZCwgdGhpcy5hZGRHcmlkKCksIHRoaXMuaW5saW5lID8gJ2Nsci1jb250cm9sLWlubGluZScgOiAnJyk7XG4gIH1cblxuICBhZGRHcmlkKCkge1xuICAgIGlmICh0aGlzLmxheW91dFNlcnZpY2UgJiYgIXRoaXMubGF5b3V0U2VydmljZS5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMubWFwKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==