/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * Private counter to generate unique IDs for the checkboxes, to bind the labels to them.
 * @type {?}
 */
var latestId = 0;
/**
 * @deprecated ClrCheckbox will be renamed to ClrCheckboxDeprecated in 0.12, and will be replaced with a new
 * implementation in 0.13, so if you import it you will need to update your references.
 */
var ClrCheckboxDeprecated = /** @class */ (function () {
    function ClrCheckboxDeprecated() {
        // If our host has an ID attribute, we use this instead of our index.
        this._id = (latestId++).toString();
        // If host provides an clrAriaLabeledBy input, we apply it to the checkbox
        this.clrAriaLabeledBy = null;
        // If our host has a name attribute, we apply it to the checkbox.
        this.name = null;
        // If the host is disabled we apply it to the checkbox
        this.disabled = false;
        // Support for inline checkboxes, adds the necessary class to the host
        this.inline = false;
        this._checked = false;
        this._indeterminate = false;
        this.indeterminateChange = new EventEmitter(false);
        this.change = new EventEmitter(false);
        /*
             * These callbacks will be given to us through the ControlValueAccessor interface,
             * and we need to call them when the user interacts with the checkbox.
             */
        this.onChangeCallback = function (_) { };
        this.onTouchedCallback = function () { };
    }
    Object.defineProperty(ClrCheckboxDeprecated.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return "clr-checkbox-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrCheckboxDeprecated.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._checked) {
                if (this._indeterminate) {
                    this.setIndeterminate(false);
                }
                this.setChecked(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrCheckboxDeprecated.prototype, "indeterminate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indeterminate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._indeterminate !== value) {
                if (this._checked) {
                    this.setChecked(false);
                }
                this.setIndeterminate(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.setIndeterminate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._indeterminate = value;
        this.indeterminateChange.emit(this._indeterminate);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.setChecked = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._checked = value;
        this.change.emit(this._checked);
    };
    /**
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
        this.onChangeCallback(this.checked);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            value = false;
        }
        if (value !== this.checked) {
            this.checked = value;
        }
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.onChangeCallback = onChange;
    };
    /**
     * @param {?} onTouched
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.registerOnTouched = /**
     * @param {?} onTouched
     * @return {?}
     */
    function (onTouched) {
        this.onTouchedCallback = onTouched;
    };
    /**
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.touch = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @return {?}
     */
    ClrCheckboxDeprecated.prototype.checkIndeterminateState = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.toggle();
        }
    };
    ClrCheckboxDeprecated.decorators = [
        { type: Component, args: [{
                    selector: 'clr-checkbox',
                    template: "\n        <!--\n            FIXME: We are not subscribed to the change event but the click event here.\n            The reason for that is because checkboxes behave differently on IE & Edge.\n            https://stackoverflow.com/a/19447939\n            \n            To fix that, we listen to every click event and then toggle the checkbox manually\n            to make it behave the same way across the browsers we support.\n            \n            This works for cases when users toggle the checkbox using the keyboard too:\n            https://stackoverflow.com/questions/27878940/spacebar-triggering-click-event-on-checkbox\n        -->\n        <input type=\"checkbox\" [attr.aria-labelledby]=\"clrAriaLabeledBy\"\n               [id]=\"id\" [name]=\"name\" [checked]=\"checked\"\n               [indeterminate]=\"indeterminate\" [disabled]=\"disabled\"\n               (blur)=\"touch()\" (click)=\"checkIndeterminateState()\">\n        <label [attr.for]=\"id\">\n            <ng-content></ng-content>\n        </label>\n    ",
                    host: { '[class.checkbox]': '!inline', '[class.checkbox-inline]': 'inline', '[class.disabled]': 'disabled' },
                    /*
                         * This provider lets us declare our checkbox as a ControlValueAccessor,
                         * which allows us to use [(ngModel)] directly on our component,
                         * with all the automatic features wiring that come with it.
                         */
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return ClrCheckboxDeprecated; }), multi: true }]
                }] }
    ];
    ClrCheckboxDeprecated.propDecorators = {
        _id: [{ type: Input, args: ['id',] }],
        clrAriaLabeledBy: [{ type: Input, args: ['clrAriaLabeledBy',] }],
        name: [{ type: Input, args: ['name',] }],
        disabled: [{ type: Input, args: ['clrDisabled',] }],
        inline: [{ type: Input, args: ['clrInline',] }],
        checked: [{ type: Input, args: ['clrChecked',] }],
        indeterminate: [{ type: Input, args: ['clrIndeterminate',] }],
        indeterminateChange: [{ type: Output, args: ['clrIndeterminateChange',] }],
        change: [{ type: Output, args: ['clrCheckedChange',] }]
    };
    return ClrCheckboxDeprecated;
}());
export { ClrCheckboxDeprecated };
if (false) {
    /** @type {?} */
    ClrCheckboxDeprecated.prototype._id;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.clrAriaLabeledBy;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.name;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.disabled;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.inline;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype._checked;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype._indeterminate;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.indeterminateChange;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.change;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.onChangeCallback;
    /** @type {?} */
    ClrCheckboxDeprecated.prototype.onTouchedCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy1kZXByZWNhdGVkL2NoZWNrYm94L2NoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFLckUsUUFBUSxHQUFHLENBQUM7Ozs7O0FBTWhCO0lBQUE7O1FBZ0NlLFFBQUcsR0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBT2pCLHFCQUFnQixHQUFXLElBQUksQ0FBQzs7UUFHNUMsU0FBSSxHQUFXLElBQUksQ0FBQzs7UUFHYixhQUFRLEdBQVksS0FBSyxDQUFDOztRQUc1QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWxDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFnQmpCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBaUJqQyx3QkFBbUIsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFZbEQsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDOzs7OztRQW9CckUscUJBQWdCLEdBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxDQUFDO1FBTWxDLHNCQUFpQixHQUFHLGNBQU8sQ0FBQyxDQUFDO0lBZXZDLENBQUM7SUF0R0Msc0JBQVcscUNBQUU7Ozs7UUFBYjtZQUNFLE9BQU8sa0JBQWdCLElBQUksQ0FBQyxHQUFLLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFnQkQsc0JBQVcsMENBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUNtQixLQUFjO1lBQy9C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QUFLLFNBQUMsV0FBVzswQkFRakIsS0FBSyxTQUFDLFlBQVk7Z0NBZ0JsQixLQUFLLFNBQUMsa0JBQWtCO3NDQVV4QixNQUFNLFNBQUMsd0JBQXdCO3lCQWEvQixNQUFNLFNBQUMsa0JBQWtCOztJQXlDNUIsNEJBQUM7Q0FBQSxBQXhJRCxJQXdJQztTQTFHWSxxQkFBcUI7OztJQUVoQyxvQ0FBbUQ7O0lBT25ELGlEQUFrRTs7SUFHbEUscUNBQTBDOztJQUcxQyx5Q0FBdUQ7O0lBR3ZELHVDQUEwQzs7SUFFMUMseUNBQXlCOztJQWdCekIsK0NBQXdDOztJQWdCeEMsb0RBQ3FGOztJQVlyRix1Q0FBNkU7O0lBb0I3RSxpREFBMEM7O0lBTTFDLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogUHJpdmF0ZSBjb3VudGVyIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIHRoZSBjaGVja2JveGVzLCB0byBiaW5kIHRoZSBsYWJlbHMgdG8gdGhlbS5cbiAqL1xubGV0IGxhdGVzdElkID0gMDtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBDbHJDaGVja2JveCB3aWxsIGJlIHJlbmFtZWQgdG8gQ2xyQ2hlY2tib3hEZXByZWNhdGVkIGluIDAuMTIsIGFuZCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYSBuZXdcbiAqIGltcGxlbWVudGF0aW9uIGluIDAuMTMsIHNvIGlmIHlvdSBpbXBvcnQgaXQgeW91IHdpbGwgbmVlZCB0byB1cGRhdGUgeW91ciByZWZlcmVuY2VzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8IS0tXG4gICAgICAgICAgICBGSVhNRTogV2UgYXJlIG5vdCBzdWJzY3JpYmVkIHRvIHRoZSBjaGFuZ2UgZXZlbnQgYnV0IHRoZSBjbGljayBldmVudCBoZXJlLlxuICAgICAgICAgICAgVGhlIHJlYXNvbiBmb3IgdGhhdCBpcyBiZWNhdXNlIGNoZWNrYm94ZXMgYmVoYXZlIGRpZmZlcmVudGx5IG9uIElFICYgRWRnZS5cbiAgICAgICAgICAgIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTQ0NzkzOVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUbyBmaXggdGhhdCwgd2UgbGlzdGVuIHRvIGV2ZXJ5IGNsaWNrIGV2ZW50IGFuZCB0aGVuIHRvZ2dsZSB0aGUgY2hlY2tib3ggbWFudWFsbHlcbiAgICAgICAgICAgIHRvIG1ha2UgaXQgYmVoYXZlIHRoZSBzYW1lIHdheSBhY3Jvc3MgdGhlIGJyb3dzZXJzIHdlIHN1cHBvcnQuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRoaXMgd29ya3MgZm9yIGNhc2VzIHdoZW4gdXNlcnMgdG9nZ2xlIHRoZSBjaGVja2JveCB1c2luZyB0aGUga2V5Ym9hcmQgdG9vOlxuICAgICAgICAgICAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4Nzg5NDAvc3BhY2ViYXItdHJpZ2dlcmluZy1jbGljay1ldmVudC1vbi1jaGVja2JveFxuICAgICAgICAtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJjbHJBcmlhTGFiZWxlZEJ5XCJcbiAgICAgICAgICAgICAgIFtpZF09XCJpZFwiIFtuYW1lXT1cIm5hbWVcIiBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgKGJsdXIpPVwidG91Y2goKVwiIChjbGljayk9XCJjaGVja0luZGV0ZXJtaW5hdGVTdGF0ZSgpXCI+XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3MuY2hlY2tib3hdJzogJyFpbmxpbmUnLCAnW2NsYXNzLmNoZWNrYm94LWlubGluZV0nOiAnaW5saW5lJywgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnIH0sXG4gIC8qXG4gICAgICogVGhpcyBwcm92aWRlciBsZXRzIHVzIGRlY2xhcmUgb3VyIGNoZWNrYm94IGFzIGEgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICogd2hpY2ggYWxsb3dzIHVzIHRvIHVzZSBbKG5nTW9kZWwpXSBkaXJlY3RseSBvbiBvdXIgY29tcG9uZW50LFxuICAgICAqIHdpdGggYWxsIHRoZSBhdXRvbWF0aWMgZmVhdHVyZXMgd2lyaW5nIHRoYXQgY29tZSB3aXRoIGl0LlxuICAgICAqL1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbHJDaGVja2JveERlcHJlY2F0ZWQpLCBtdWx0aTogdHJ1ZSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQ2hlY2tib3hEZXByZWNhdGVkIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvLyBJZiBvdXIgaG9zdCBoYXMgYW4gSUQgYXR0cmlidXRlLCB3ZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIG91ciBpbmRleC5cbiAgQElucHV0KCdpZCcpIF9pZDogc3RyaW5nID0gKGxhdGVzdElkKyspLnRvU3RyaW5nKCk7XG5cbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gYGNsci1jaGVja2JveC0ke3RoaXMuX2lkfWA7XG4gIH1cblxuICAvLyBJZiBob3N0IHByb3ZpZGVzIGFuIGNsckFyaWFMYWJlbGVkQnkgaW5wdXQsIHdlIGFwcGx5IGl0IHRvIHRoZSBjaGVja2JveFxuICBASW5wdXQoJ2NsckFyaWFMYWJlbGVkQnknKSBwdWJsaWMgY2xyQXJpYUxhYmVsZWRCeTogc3RyaW5nID0gbnVsbDtcblxuICAvLyBJZiBvdXIgaG9zdCBoYXMgYSBuYW1lIGF0dHJpYnV0ZSwgd2UgYXBwbHkgaXQgdG8gdGhlIGNoZWNrYm94LlxuICBASW5wdXQoJ25hbWUnKSBwdWJsaWMgbmFtZTogc3RyaW5nID0gbnVsbDtcblxuICAvLyBJZiB0aGUgaG9zdCBpcyBkaXNhYmxlZCB3ZSBhcHBseSBpdCB0byB0aGUgY2hlY2tib3hcbiAgQElucHV0KCdjbHJEaXNhYmxlZCcpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIFN1cHBvcnQgZm9yIGlubGluZSBjaGVja2JveGVzLCBhZGRzIHRoZSBuZWNlc3NhcnkgY2xhc3MgdG8gdGhlIGhvc3RcbiAgQElucHV0KCdjbHJJbmxpbmUnKSBwdWJsaWMgaW5saW5lID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyQ2hlY2tlZCcpXG4gIHB1YmxpYyBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fY2hlY2tlZCkge1xuICAgICAgaWYgKHRoaXMuX2luZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgaW5kZXRlcm1pbmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZXRlcm1pbmF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xySW5kZXRlcm1pbmF0ZScpXG4gIHB1YmxpYyBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pbmRldGVybWluYXRlICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX2NoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgnY2xySW5kZXRlcm1pbmF0ZUNoYW5nZScpXG4gIHB1YmxpYyBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBwcml2YXRlIHNldEluZGV0ZXJtaW5hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gdmFsdWU7XG4gICAgdGhpcy5pbmRldGVybWluYXRlQ2hhbmdlLmVtaXQodGhpcy5faW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldENoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl9jaGVja2VkKTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2NsckNoZWNrZWRDaGFuZ2UnKSBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICAgKiBUaGVzZSBjYWxsYmFja3Mgd2lsbCBiZSBnaXZlbiB0byB1cyB0aHJvdWdoIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UsXG4gICAgICogYW5kIHdlIG5lZWQgdG8gY2FsbCB0aGVtIHdoZW4gdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoXzogYW55KSA9PiB7fTtcblxuICByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBvbkNoYW5nZTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAoKSA9PiB7fTtcblxuICByZWdpc3Rlck9uVG91Y2hlZChvblRvdWNoZWQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBvblRvdWNoZWQ7XG4gIH1cblxuICBwdWJsaWMgdG91Y2goKSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY2hlY2tJbmRldGVybWluYXRlU3RhdGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxufVxuIl19