/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/** @type {?} */
var wizardHeaderActionIndex = 0;
var ClrWizardHeaderAction = /** @class */ (function () {
    function ClrWizardHeaderAction() {
        // title is explanatory text added to the header action
        this.title = '';
        // If our host has an ID attribute, we use this instead of our index.
        this._id = (wizardHeaderActionIndex++).toString();
        this.disabled = false;
        this.headerActionClicked = new EventEmitter(false);
    }
    Object.defineProperty(ClrWizardHeaderAction.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return "clr-wizard-header-action-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrWizardHeaderAction.prototype.click = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        // passing the header action id allows users to have one method that
        // routes to many different actions based on the type of header action
        // clicked. this is further aided by users being able to specify ids
        // for their header actions.
        this.headerActionClicked.emit(this._id);
    };
    ClrWizardHeaderAction.decorators = [
        { type: Component, args: [{
                    selector: 'clr-wizard-header-action',
                    template: "\n        <button \n            type=\"button\"\n            class=\"btn clr-wizard-header-action btn-link\"\n            [id]=\"id\"\n            [class.disabled]=\"disabled\"\n            (click)=\"click()\"\n            [title]=\"title\">\n            <ng-content></ng-content>\n        </button>\n    ",
                    host: { class: 'clr-wizard-header-action-wrapper' }
                }] }
    ];
    ClrWizardHeaderAction.propDecorators = {
        title: [{ type: Input, args: ['title',] }],
        _id: [{ type: Input, args: ['id',] }],
        disabled: [{ type: Input, args: ['clrWizardHeaderActionDisabled',] }],
        headerActionClicked: [{ type: Output, args: ['actionClicked',] }]
    };
    return ClrWizardHeaderAction;
}());
export { ClrWizardHeaderAction };
if (false) {
    /** @type {?} */
    ClrWizardHeaderAction.prototype.title;
    /** @type {?} */
    ClrWizardHeaderAction.prototype._id;
    /** @type {?} */
    ClrWizardHeaderAction.prototype.disabled;
    /** @type {?} */
    ClrWizardHeaderAction.prototype.headerActionClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWhlYWRlci1hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ3aXphcmQvd2l6YXJkLWhlYWRlci1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFbkUsdUJBQXVCLEdBQUcsQ0FBQztBQUUvQjtJQUFBOztRQWlCa0IsVUFBSyxHQUFXLEVBQUUsQ0FBQzs7UUFHdEIsUUFBRyxHQUFXLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBTW5CLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFaEQsd0JBQW1CLEdBQXlCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBYS9GLENBQUM7SUFuQkMsc0JBQVcscUNBQUU7Ozs7UUFBYjtZQUNFLE9BQU8sOEJBQTRCLElBQUksQ0FBQyxHQUFLLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7Ozs7SUFNRCxxQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsb0VBQW9FO1FBQ3BFLHNFQUFzRTtRQUN0RSxvRUFBb0U7UUFDcEUsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG1UQVVQO29CQUNILElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxrQ0FBa0MsRUFBRTtpQkFDcEQ7Ozt3QkFHRSxLQUFLLFNBQUMsT0FBTztzQkFHYixLQUFLLFNBQUMsSUFBSTsyQkFNVixLQUFLLFNBQUMsK0JBQStCO3NDQUVyQyxNQUFNLFNBQUMsZUFBZTs7SUFhekIsNEJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQTFCWSxxQkFBcUI7OztJQUVoQyxzQ0FBbUM7O0lBR25DLG9DQUFrRTs7SUFNbEUseUNBQXlFOztJQUV6RSxvREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCB3aXphcmRIZWFkZXJBY3Rpb25JbmRleCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci13aXphcmQtaGVhZGVyLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGNsci13aXphcmQtaGVhZGVyLWFjdGlvbiBidG4tbGlua1wiXG4gICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygpXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnY2xyLXdpemFyZC1oZWFkZXItYWN0aW9uLXdyYXBwZXInIH0sXG59KVxuZXhwb3J0IGNsYXNzIENscldpemFyZEhlYWRlckFjdGlvbiB7XG4gIC8vIHRpdGxlIGlzIGV4cGxhbmF0b3J5IHRleHQgYWRkZWQgdG8gdGhlIGhlYWRlciBhY3Rpb25cbiAgQElucHV0KCd0aXRsZScpIHRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAvLyBJZiBvdXIgaG9zdCBoYXMgYW4gSUQgYXR0cmlidXRlLCB3ZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIG91ciBpbmRleC5cbiAgQElucHV0KCdpZCcpIF9pZDogc3RyaW5nID0gKHdpemFyZEhlYWRlckFjdGlvbkluZGV4KyspLnRvU3RyaW5nKCk7XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgY2xyLXdpemFyZC1oZWFkZXItYWN0aW9uLSR7dGhpcy5faWR9YDtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyV2l6YXJkSGVhZGVyQWN0aW9uRGlzYWJsZWQnKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCdhY3Rpb25DbGlja2VkJykgaGVhZGVyQWN0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHBhc3NpbmcgdGhlIGhlYWRlciBhY3Rpb24gaWQgYWxsb3dzIHVzZXJzIHRvIGhhdmUgb25lIG1ldGhvZCB0aGF0XG4gICAgLy8gcm91dGVzIHRvIG1hbnkgZGlmZmVyZW50IGFjdGlvbnMgYmFzZWQgb24gdGhlIHR5cGUgb2YgaGVhZGVyIGFjdGlvblxuICAgIC8vIGNsaWNrZWQuIHRoaXMgaXMgZnVydGhlciBhaWRlZCBieSB1c2VycyBiZWluZyBhYmxlIHRvIHNwZWNpZnkgaWRzXG4gICAgLy8gZm9yIHRoZWlyIGhlYWRlciBhY3Rpb25zLlxuICAgIHRoaXMuaGVhZGVyQWN0aW9uQ2xpY2tlZC5lbWl0KHRoaXMuX2lkKTtcbiAgfVxufVxuIl19