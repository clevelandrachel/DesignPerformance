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
let wizardHeaderActionIndex = 0;
export class ClrWizardHeaderAction {
    constructor() {
        // title is explanatory text added to the header action
        this.title = '';
        // If our host has an ID attribute, we use this instead of our index.
        this._id = (wizardHeaderActionIndex++).toString();
        this.disabled = false;
        this.headerActionClicked = new EventEmitter(false);
    }
    /**
     * @return {?}
     */
    get id() {
        return `clr-wizard-header-action-${this._id}`;
    }
    /**
     * @return {?}
     */
    click() {
        if (this.disabled) {
            return;
        }
        // passing the header action id allows users to have one method that
        // routes to many different actions based on the type of header action
        // clicked. this is further aided by users being able to specify ids
        // for their header actions.
        this.headerActionClicked.emit(this._id);
    }
}
ClrWizardHeaderAction.decorators = [
    { type: Component, args: [{
                selector: 'clr-wizard-header-action',
                template: `
        <button 
            type="button"
            class="btn clr-wizard-header-action btn-link"
            [id]="id"
            [class.disabled]="disabled"
            (click)="click()"
            [title]="title">
            <ng-content></ng-content>
        </button>
    `,
                host: { class: 'clr-wizard-header-action-wrapper' }
            }] }
];
ClrWizardHeaderAction.propDecorators = {
    title: [{ type: Input, args: ['title',] }],
    _id: [{ type: Input, args: ['id',] }],
    disabled: [{ type: Input, args: ['clrWizardHeaderActionDisabled',] }],
    headerActionClicked: [{ type: Output, args: ['actionClicked',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWhlYWRlci1hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ3aXphcmQvd2l6YXJkLWhlYWRlci1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFbkUsdUJBQXVCLEdBQUcsQ0FBQztBQWlCL0IsTUFBTSxPQUFPLHFCQUFxQjtJQWZsQzs7UUFpQmtCLFVBQUssR0FBVyxFQUFFLENBQUM7O1FBR3RCLFFBQUcsR0FBVyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQU1uQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRWhELHdCQUFtQixHQUF5QixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQWEvRixDQUFDOzs7O0lBbkJDLElBQVcsRUFBRTtRQUNYLE9BQU8sNEJBQTRCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7O0lBTUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxvRUFBb0U7UUFDcEUsc0VBQXNFO1FBQ3RFLG9FQUFvRTtRQUNwRSw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDtnQkFDSCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0NBQWtDLEVBQUU7YUFDcEQ7OztvQkFHRSxLQUFLLFNBQUMsT0FBTztrQkFHYixLQUFLLFNBQUMsSUFBSTt1QkFNVixLQUFLLFNBQUMsK0JBQStCO2tDQUVyQyxNQUFNLFNBQUMsZUFBZTs7OztJQVh2QixzQ0FBbUM7O0lBR25DLG9DQUFrRTs7SUFNbEUseUNBQXlFOztJQUV6RSxvREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCB3aXphcmRIZWFkZXJBY3Rpb25JbmRleCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci13aXphcmQtaGVhZGVyLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGNsci13aXphcmQtaGVhZGVyLWFjdGlvbiBidG4tbGlua1wiXG4gICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjbGljaygpXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnY2xyLXdpemFyZC1oZWFkZXItYWN0aW9uLXdyYXBwZXInIH0sXG59KVxuZXhwb3J0IGNsYXNzIENscldpemFyZEhlYWRlckFjdGlvbiB7XG4gIC8vIHRpdGxlIGlzIGV4cGxhbmF0b3J5IHRleHQgYWRkZWQgdG8gdGhlIGhlYWRlciBhY3Rpb25cbiAgQElucHV0KCd0aXRsZScpIHRpdGxlOiBzdHJpbmcgPSAnJztcblxuICAvLyBJZiBvdXIgaG9zdCBoYXMgYW4gSUQgYXR0cmlidXRlLCB3ZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIG91ciBpbmRleC5cbiAgQElucHV0KCdpZCcpIF9pZDogc3RyaW5nID0gKHdpemFyZEhlYWRlckFjdGlvbkluZGV4KyspLnRvU3RyaW5nKCk7XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgY2xyLXdpemFyZC1oZWFkZXItYWN0aW9uLSR7dGhpcy5faWR9YDtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyV2l6YXJkSGVhZGVyQWN0aW9uRGlzYWJsZWQnKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCdhY3Rpb25DbGlja2VkJykgaGVhZGVyQWN0aW9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHBhc3NpbmcgdGhlIGhlYWRlciBhY3Rpb24gaWQgYWxsb3dzIHVzZXJzIHRvIGhhdmUgb25lIG1ldGhvZCB0aGF0XG4gICAgLy8gcm91dGVzIHRvIG1hbnkgZGlmZmVyZW50IGFjdGlvbnMgYmFzZWQgb24gdGhlIHR5cGUgb2YgaGVhZGVyIGFjdGlvblxuICAgIC8vIGNsaWNrZWQuIHRoaXMgaXMgZnVydGhlciBhaWRlZCBieSB1c2VycyBiZWluZyBhYmxlIHRvIHNwZWNpZnkgaWRzXG4gICAgLy8gZm9yIHRoZWlyIGhlYWRlciBhY3Rpb25zLlxuICAgIHRoaXMuaGVhZGVyQWN0aW9uQ2xpY2tlZC5lbWl0KHRoaXMuX2lkKTtcbiAgfVxufVxuIl19