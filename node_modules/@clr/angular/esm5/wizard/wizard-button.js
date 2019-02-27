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
import { ButtonHubService } from './providers/button-hub.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
/** @type {?} */
export var DEFAULT_BUTTON_TYPES = {
    cancel: 'cancel',
    previous: 'previous',
    next: 'next',
    finish: 'finish',
    danger: 'danger',
};
/** @type {?} */
export var CUSTOM_BUTTON_TYPES = {
    cancel: 'custom-cancel',
    previous: 'custom-previous',
    next: 'custom-next',
    finish: 'custom-finish',
    danger: 'custom-danger',
};
var ClrWizardButton = /** @class */ (function () {
    function ClrWizardButton(navService, buttonService) {
        this.navService = navService;
        this.buttonService = buttonService;
        this.type = '';
        this.disabled = false;
        this.hidden = false;
        // EventEmitter which is emitted when a button is clicked.
        this.wasClicked = new EventEmitter(false);
    }
    /**
     * @param {?=} valueToCheck
     * @param {?=} typeToLookUp
     * @return {?}
     */
    ClrWizardButton.prototype.checkDefaultAndCustomType = /**
     * @param {?=} valueToCheck
     * @param {?=} typeToLookUp
     * @return {?}
     */
    function (valueToCheck, typeToLookUp) {
        if (valueToCheck === void 0) { valueToCheck = ''; }
        if (DEFAULT_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
            return true;
        }
        if (CUSTOM_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
            return true;
        }
        return false;
    };
    Object.defineProperty(ClrWizardButton.prototype, "isCancel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkDefaultAndCustomType(this.type, 'cancel');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isNext", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkDefaultAndCustomType(this.type, 'next');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isPrevious", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkDefaultAndCustomType(this.type, 'previous');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isFinish", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkDefaultAndCustomType(this.type, 'finish');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isDanger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.checkDefaultAndCustomType(this.type, 'danger');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isPrimaryAction", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isNext || this.isDanger || this.isFinish;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "_disabledAttribute", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isDisabled) {
                return '';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            // dealing with negatives here. cognitively easier to think of it like this...
            /** @type {?} */
            var disabled = true;
            /** @type {?} */
            var nav = this.navService;
            /** @type {?} */
            var page = this.navService.currentPage;
            // Ensure we don't change the response until buttons are ready to avoid chocolate
            if (!this.buttonService.buttonsReady) {
                return !disabled;
            }
            if (this.disabled || nav.wizardStopNavigation || !page) {
                return true;
            }
            if (this.isCancel) {
                return !disabled;
            }
            if (this.isPrevious && (nav.currentPageIsFirst || page.previousStepDisabled)) {
                return disabled;
            }
            if (this.isDanger && !page.readyToComplete) {
                return disabled;
            }
            if (this.isNext && (nav.currentPageIsLast || !page.readyToComplete)) {
                return disabled;
            }
            if (this.isFinish && (!nav.currentPageIsLast || !page.readyToComplete)) {
                return disabled;
            }
            return !disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardButton.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            // dealing with negatives here. cognitively easier to think of it like this...
            /** @type {?} */
            var hidden = true;
            /** @type {?} */
            var nav = this.navService;
            // Ensure we don't change the response until buttons are ready to avoid chocolate
            if (!this.buttonService.buttonsReady) {
                return !hidden;
            }
            if (this.hidden) {
                return true;
            }
            if (this.isCancel) {
                return !hidden;
            }
            if (this.isPrevious && nav.currentPageIsFirst) {
                return hidden;
            }
            if (this.isNext && nav.currentPageIsLast) {
                return hidden;
            }
            if (this.isFinish && !nav.currentPageIsLast) {
                return hidden;
            }
            return !hidden;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrWizardButton.prototype.click = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.wasClicked.emit(this.type);
        this.buttonService.buttonClicked(this.type);
    };
    ClrWizardButton.decorators = [
        { type: Component, args: [{
                    selector: 'clr-wizard-button',
                    template: "\n        <button\n            type=\"button\"\n            class=\"btn clr-wizard-btn\"\n            [class.btn-link]=\"isCancel\"\n            [class.clr-wizard-btn--tertiary]=\"isCancel\"\n            [class.btn-outline]=\"isPrevious\"\n            [class.clr-wizard-btn--secondary]=\"isPrevious\"\n            [class.btn-primary]=\"isPrimaryAction\"\n            [class.clr-wizard-btn--primary]=\"isPrimaryAction\"\n            [class.btn-success]=\"isFinish\"\n            [class.btn-danger]=\"isDanger\"\n            [class.disabled]=\"isDisabled\"\n            [attr.disabled]=\"_disabledAttribute\"\n            (click)=\"click()\">\n            <ng-content></ng-content>\n        </button>\n    ",
                    host: { class: 'clr-wizard-btn-wrapper', '[attr.aria-hidden]': 'isHidden' },
                    styles: ['[aria-hidden="true"] { display: none; }']
                }] }
    ];
    /** @nocollapse */
    ClrWizardButton.ctorParameters = function () { return [
        { type: WizardNavigationService },
        { type: ButtonHubService }
    ]; };
    ClrWizardButton.propDecorators = {
        type: [{ type: Input, args: ['type',] }],
        disabled: [{ type: Input, args: ['clrWizardButtonDisabled',] }],
        hidden: [{ type: Input, args: ['clrWizardButtonHidden',] }],
        wasClicked: [{ type: Output, args: ['clrWizardButtonClicked',] }]
    };
    return ClrWizardButton;
}());
export { ClrWizardButton };
if (false) {
    /** @type {?} */
    ClrWizardButton.prototype.type;
    /** @type {?} */
    ClrWizardButton.prototype.disabled;
    /** @type {?} */
    ClrWizardButton.prototype.hidden;
    /** @type {?} */
    ClrWizardButton.prototype.wasClicked;
    /** @type {?} */
    ClrWizardButton.prototype.navService;
    /** @type {?} */
    ClrWizardButton.prototype.buttonService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLWJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7O0FBRWhGLE1BQU0sS0FBTyxvQkFBb0IsR0FBUTtJQUN2QyxNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0NBQ2pCOztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxNQUFNLEVBQUUsZUFBZTtJQUN2QixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLElBQUksRUFBRSxhQUFhO0lBQ25CLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLE1BQU0sRUFBRSxlQUFlO0NBQ3hCO0FBRUQ7SUFpQ0UseUJBQW1CLFVBQW1DLEVBQVMsYUFBK0I7UUFBM0UsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFUeEUsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBTSxHQUFZLEtBQUssQ0FBQzs7UUFHN0IsZUFBVSxHQUF5QixJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUMsQ0FBQztJQUVKLENBQUM7Ozs7OztJQUUxRixtREFBeUI7Ozs7O0lBQWpDLFVBQWtDLFlBQXlCLEVBQUUsWUFBb0I7UUFBL0MsNkJBQUEsRUFBQSxpQkFBeUI7UUFDekQsSUFBSSxvQkFBb0Is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RTs2QkFDbEUseUNBQXlDO2lCQUNuRDs7OztnQkF4Q1EsdUJBQXVCO2dCQUR2QixnQkFBZ0I7Ozt1QkEyQ3RCLEtBQUssU0FBQyxNQUFNOzJCQUVaLEtBQUssU0FBQyx5QkFBeUI7eUJBRS9CLEtBQUssU0FBQyx1QkFBdUI7NkJBRzdCLE1BQU0sU0FBQyx3QkFBd0I7O0lBNEhsQyxzQkFBQztDQUFBLEFBM0pELElBMkpDO1NBcElZLGVBQWU7OztJQUMxQiwrQkFBd0M7O0lBRXhDLG1DQUFtRTs7SUFFbkUsaUNBQStEOztJQUcvRCxxQ0FBcUc7O0lBRXpGLHFDQUEwQzs7SUFBRSx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkh1YlNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9idXR0b24taHViLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy93aXphcmQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQlVUVE9OX1RZUEVTOiBhbnkgPSB7XG4gIGNhbmNlbDogJ2NhbmNlbCcsXG4gIHByZXZpb3VzOiAncHJldmlvdXMnLFxuICBuZXh0OiAnbmV4dCcsXG4gIGZpbmlzaDogJ2ZpbmlzaCcsXG4gIGRhbmdlcjogJ2RhbmdlcicsXG59O1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0JVVFRPTl9UWVBFUzogYW55ID0ge1xuICBjYW5jZWw6ICdjdXN0b20tY2FuY2VsJyxcbiAgcHJldmlvdXM6ICdjdXN0b20tcHJldmlvdXMnLFxuICBuZXh0OiAnY3VzdG9tLW5leHQnLFxuICBmaW5pc2g6ICdjdXN0b20tZmluaXNoJyxcbiAgZGFuZ2VyOiAnY3VzdG9tLWRhbmdlcicsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItd2l6YXJkLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJidG4gY2xyLXdpemFyZC1idG5cIlxuICAgICAgICAgICAgW2NsYXNzLmJ0bi1saW5rXT1cImlzQ2FuY2VsXCJcbiAgICAgICAgICAgIFtjbGFzcy5jbHItd2l6YXJkLWJ0bi0tdGVydGlhcnldPVwiaXNDYW5jZWxcIlxuICAgICAgICAgICAgW2NsYXNzLmJ0bi1vdXRsaW5lXT1cImlzUHJldmlvdXNcIlxuICAgICAgICAgICAgW2NsYXNzLmNsci13aXphcmQtYnRuLS1zZWNvbmRhcnldPVwiaXNQcmV2aW91c1wiXG4gICAgICAgICAgICBbY2xhc3MuYnRuLXByaW1hcnldPVwiaXNQcmltYXJ5QWN0aW9uXCJcbiAgICAgICAgICAgIFtjbGFzcy5jbHItd2l6YXJkLWJ0bi0tcHJpbWFyeV09XCJpc1ByaW1hcnlBY3Rpb25cIlxuICAgICAgICAgICAgW2NsYXNzLmJ0bi1zdWNjZXNzXT1cImlzRmluaXNoXCJcbiAgICAgICAgICAgIFtjbGFzcy5idG4tZGFuZ2VyXT1cImlzRGFuZ2VyXCJcbiAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cIl9kaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2soKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnY2xyLXdpemFyZC1idG4td3JhcHBlcicsICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnaXNIaWRkZW4nIH0sXG4gIHN0eWxlczogWydbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHsgZGlzcGxheTogbm9uZTsgfSddLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJXaXphcmRCdXR0b24ge1xuICBASW5wdXQoJ3R5cGUnKSBwdWJsaWMgdHlwZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCdjbHJXaXphcmRCdXR0b25EaXNhYmxlZCcpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnY2xyV2l6YXJkQnV0dG9uSGlkZGVuJykgcHVibGljIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIEV2ZW50RW1pdHRlciB3aGljaCBpcyBlbWl0dGVkIHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZC5cbiAgQE91dHB1dCgnY2xyV2l6YXJkQnV0dG9uQ2xpY2tlZCcpIHdhc0NsaWNrZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2U2VydmljZTogV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UsIHB1YmxpYyBidXR0b25TZXJ2aWNlOiBCdXR0b25IdWJTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgY2hlY2tEZWZhdWx0QW5kQ3VzdG9tVHlwZSh2YWx1ZVRvQ2hlY2s6IHN0cmluZyA9ICcnLCB0eXBlVG9Mb29rVXA6IHN0cmluZykge1xuICAgIGlmIChERUZBVUxUX0JVVFRPTl9UWVBFU1t0eXBlVG9Mb29rVXBdID09PSB2YWx1ZVRvQ2hlY2spIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ1VTVE9NX0JVVFRPTl9UWVBFU1t0eXBlVG9Mb29rVXBdID09PSB2YWx1ZVRvQ2hlY2spIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ2FuY2VsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrRGVmYXVsdEFuZEN1c3RvbVR5cGUodGhpcy50eXBlLCAnY2FuY2VsJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0RlZmF1bHRBbmRDdXN0b21UeXBlKHRoaXMudHlwZSwgJ25leHQnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNQcmV2aW91cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0RlZmF1bHRBbmRDdXN0b21UeXBlKHRoaXMudHlwZSwgJ3ByZXZpb3VzJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRmluaXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrRGVmYXVsdEFuZEN1c3RvbVR5cGUodGhpcy50eXBlLCAnZmluaXNoJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrRGVmYXVsdEFuZEN1c3RvbVR5cGUodGhpcy50eXBlLCAnZGFuZ2VyJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzUHJpbWFyeUFjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc05leHQgfHwgdGhpcy5pc0RhbmdlciB8fCB0aGlzLmlzRmluaXNoO1xuICB9XG5cbiAgcHVibGljIGdldCBfZGlzYWJsZWRBdHRyaWJ1dGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAvLyBkZWFsaW5nIHdpdGggbmVnYXRpdmVzIGhlcmUuIGNvZ25pdGl2ZWx5IGVhc2llciB0byB0aGluayBvZiBpdCBsaWtlIHRoaXMuLi5cbiAgICBjb25zdCBkaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgbmF2ID0gdGhpcy5uYXZTZXJ2aWNlO1xuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2U7XG5cbiAgICAvLyBFbnN1cmUgd2UgZG9uJ3QgY2hhbmdlIHRoZSByZXNwb25zZSB1bnRpbCBidXR0b25zIGFyZSByZWFkeSB0byBhdm9pZCBjaG9jb2xhdGVcbiAgICBpZiAoIXRoaXMuYnV0dG9uU2VydmljZS5idXR0b25zUmVhZHkpIHtcbiAgICAgIHJldHVybiAhZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgbmF2LndpemFyZFN0b3BOYXZpZ2F0aW9uIHx8ICFwYWdlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhbmNlbCkge1xuICAgICAgcmV0dXJuICFkaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1ByZXZpb3VzICYmIChuYXYuY3VycmVudFBhZ2VJc0ZpcnN0IHx8IHBhZ2UucHJldmlvdXNTdGVwRGlzYWJsZWQpKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEYW5nZXIgJiYgIXBhZ2UucmVhZHlUb0NvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNOZXh0ICYmIChuYXYuY3VycmVudFBhZ2VJc0xhc3QgfHwgIXBhZ2UucmVhZHlUb0NvbXBsZXRlKSkge1xuICAgICAgcmV0dXJuIGRpc2FibGVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRmluaXNoICYmICghbmF2LmN1cnJlbnRQYWdlSXNMYXN0IHx8ICFwYWdlLnJlYWR5VG9Db21wbGV0ZSkpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gIWRpc2FibGVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICAvLyBkZWFsaW5nIHdpdGggbmVnYXRpdmVzIGhlcmUuIGNvZ25pdGl2ZWx5IGVhc2llciB0byB0aGluayBvZiBpdCBsaWtlIHRoaXMuLi5cbiAgICBjb25zdCBoaWRkZW4gPSB0cnVlO1xuICAgIGNvbnN0IG5hdiA9IHRoaXMubmF2U2VydmljZTtcblxuICAgIC8vIEVuc3VyZSB3ZSBkb24ndCBjaGFuZ2UgdGhlIHJlc3BvbnNlIHVudGlsIGJ1dHRvbnMgYXJlIHJlYWR5IHRvIGF2b2lkIGNob2NvbGF0ZVxuICAgIGlmICghdGhpcy5idXR0b25TZXJ2aWNlLmJ1dHRvbnNSZWFkeSkge1xuICAgICAgcmV0dXJuICFoaWRkZW47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NhbmNlbCkge1xuICAgICAgcmV0dXJuICFoaWRkZW47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNQcmV2aW91cyAmJiBuYXYuY3VycmVudFBhZ2VJc0ZpcnN0KSB7XG4gICAgICByZXR1cm4gaGlkZGVuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTmV4dCAmJiBuYXYuY3VycmVudFBhZ2VJc0xhc3QpIHtcbiAgICAgIHJldHVybiBoaWRkZW47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNGaW5pc2ggJiYgIW5hdi5jdXJyZW50UGFnZUlzTGFzdCkge1xuICAgICAgcmV0dXJuIGhpZGRlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gIWhpZGRlbjtcbiAgfVxuXG4gIGNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLndhc0NsaWNrZWQuZW1pdCh0aGlzLnR5cGUpO1xuICAgIHRoaXMuYnV0dG9uU2VydmljZS5idXR0b25DbGlja2VkKHRoaXMudHlwZSk7XG4gIH1cbn1cbiJdfQ==