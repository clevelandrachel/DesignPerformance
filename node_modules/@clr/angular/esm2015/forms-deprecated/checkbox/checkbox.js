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
let latestId = 0;
/**
 * @deprecated ClrCheckbox will be renamed to ClrCheckboxDeprecated in 0.12, and will be replaced with a new
 * implementation in 0.13, so if you import it you will need to update your references.
 */
export class ClrCheckboxDeprecated {
    constructor() {
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
        this.onChangeCallback = (_) => { };
        this.onTouchedCallback = () => { };
    }
    /**
     * @return {?}
     */
    get id() {
        return `clr-checkbox-${this._id}`;
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set checked(value) {
        if (value !== this._checked) {
            if (this._indeterminate) {
                this.setIndeterminate(false);
            }
            this.setChecked(value);
        }
    }
    /**
     * @return {?}
     */
    get indeterminate() {
        return this._indeterminate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set indeterminate(value) {
        if (this._indeterminate !== value) {
            if (this._checked) {
                this.setChecked(false);
            }
            this.setIndeterminate(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setIndeterminate(value) {
        this._indeterminate = value;
        this.indeterminateChange.emit(this._indeterminate);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setChecked(value) {
        this._checked = value;
        this.change.emit(this._checked);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
        this.onChangeCallback(this.checked);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value === null) {
            value = false;
        }
        if (value !== this.checked) {
            this.checked = value;
        }
    }
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.onChangeCallback = onChange;
    }
    /**
     * @param {?} onTouched
     * @return {?}
     */
    registerOnTouched(onTouched) {
        this.onTouchedCallback = onTouched;
    }
    /**
     * @return {?}
     */
    touch() {
        this.onTouchedCallback();
    }
    /**
     * @return {?}
     */
    checkIndeterminateState() {
        if (!this.disabled) {
            this.toggle();
        }
    }
}
ClrCheckboxDeprecated.decorators = [
    { type: Component, args: [{
                selector: 'clr-checkbox',
                template: `
        <!--
            FIXME: We are not subscribed to the change event but the click event here.
            The reason for that is because checkboxes behave differently on IE & Edge.
            https://stackoverflow.com/a/19447939
            
            To fix that, we listen to every click event and then toggle the checkbox manually
            to make it behave the same way across the browsers we support.
            
            This works for cases when users toggle the checkbox using the keyboard too:
            https://stackoverflow.com/questions/27878940/spacebar-triggering-click-event-on-checkbox
        -->
        <input type="checkbox" [attr.aria-labelledby]="clrAriaLabeledBy"
               [id]="id" [name]="name" [checked]="checked"
               [indeterminate]="indeterminate" [disabled]="disabled"
               (blur)="touch()" (click)="checkIndeterminateState()">
        <label [attr.for]="id">
            <ng-content></ng-content>
        </label>
    `,
                host: { '[class.checkbox]': '!inline', '[class.checkbox-inline]': 'inline', '[class.disabled]': 'disabled' },
                /*
                     * This provider lets us declare our checkbox as a ControlValueAccessor,
                     * which allows us to use [(ngModel)] directly on our component,
                     * with all the automatic features wiring that come with it.
                     */
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ClrCheckboxDeprecated), multi: true }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy1kZXByZWNhdGVkL2NoZWNrYm94L2NoZWNrYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFLckUsUUFBUSxHQUFHLENBQUM7Ozs7O0FBb0NoQixNQUFNLE9BQU8scUJBQXFCO0lBOUJsQzs7UUFnQ2UsUUFBRyxHQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFPakIscUJBQWdCLEdBQVcsSUFBSSxDQUFDOztRQUc1QyxTQUFJLEdBQVcsSUFBSSxDQUFDOztRQUdiLGFBQVEsR0FBWSxLQUFLLENBQUM7O1FBRzVCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCakIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFpQmpDLHdCQUFtQixHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQVlsRCxXQUFNLEdBQUcsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBb0JyRSxxQkFBZ0IsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBTWxDLHNCQUFpQixHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQWV2QyxDQUFDOzs7O0lBdEdDLElBQVcsRUFBRTtRQUNYLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBZ0JELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7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QUFDLGtCQUFrQjtrQ0FVeEIsTUFBTSxTQUFDLHdCQUF3QjtxQkFhL0IsTUFBTSxTQUFDLGtCQUFrQjs7OztJQS9EMUIsb0NBQW1EOztJQU9uRCxpREFBa0U7O0lBR2xFLHFDQUEwQzs7SUFHMUMseUNBQXVEOztJQUd2RCx1Q0FBMEM7O0lBRTFDLHlDQUF5Qjs7SUFnQnpCLCtDQUF3Qzs7SUFnQnhDLG9EQUNxRjs7SUFZckYsdUNBQTZFOztJQW9CN0UsaURBQTBDOztJQU0xQyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIFByaXZhdGUgY291bnRlciB0byBnZW5lcmF0ZSB1bmlxdWUgSURzIGZvciB0aGUgY2hlY2tib3hlcywgdG8gYmluZCB0aGUgbGFiZWxzIHRvIHRoZW0uXG4gKi9cbmxldCBsYXRlc3RJZCA9IDA7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgQ2xyQ2hlY2tib3ggd2lsbCBiZSByZW5hbWVkIHRvIENsckNoZWNrYm94RGVwcmVjYXRlZCBpbiAwLjEyLCBhbmQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGEgbmV3XG4gKiBpbXBsZW1lbnRhdGlvbiBpbiAwLjEzLCBzbyBpZiB5b3UgaW1wb3J0IGl0IHlvdSB3aWxsIG5lZWQgdG8gdXBkYXRlIHlvdXIgcmVmZXJlbmNlcy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPCEtLVxuICAgICAgICAgICAgRklYTUU6IFdlIGFyZSBub3Qgc3Vic2NyaWJlZCB0byB0aGUgY2hhbmdlIGV2ZW50IGJ1dCB0aGUgY2xpY2sgZXZlbnQgaGVyZS5cbiAgICAgICAgICAgIFRoZSByZWFzb24gZm9yIHRoYXQgaXMgYmVjYXVzZSBjaGVja2JveGVzIGJlaGF2ZSBkaWZmZXJlbnRseSBvbiBJRSAmIEVkZ2UuXG4gICAgICAgICAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk0NDc5MzlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVG8gZml4IHRoYXQsIHdlIGxpc3RlbiB0byBldmVyeSBjbGljayBldmVudCBhbmQgdGhlbiB0b2dnbGUgdGhlIGNoZWNrYm94IG1hbnVhbGx5XG4gICAgICAgICAgICB0byBtYWtlIGl0IGJlaGF2ZSB0aGUgc2FtZSB3YXkgYWNyb3NzIHRoZSBicm93c2VycyB3ZSBzdXBwb3J0LlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUaGlzIHdvcmtzIGZvciBjYXNlcyB3aGVuIHVzZXJzIHRvZ2dsZSB0aGUgY2hlY2tib3ggdXNpbmcgdGhlIGtleWJvYXJkIHRvbzpcbiAgICAgICAgICAgIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODc4OTQwL3NwYWNlYmFyLXRyaWdnZXJpbmctY2xpY2stZXZlbnQtb24tY2hlY2tib3hcbiAgICAgICAgLS0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiY2xyQXJpYUxhYmVsZWRCeVwiXG4gICAgICAgICAgICAgICBbaWRdPVwiaWRcIiBbbmFtZV09XCJuYW1lXCIgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgIChibHVyKT1cInRvdWNoKClcIiAoY2xpY2spPVwiY2hlY2tJbmRldGVybWluYXRlU3RhdGUoKVwiPlxuICAgICAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImlkXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLmNoZWNrYm94XSc6ICchaW5saW5lJywgJ1tjbGFzcy5jaGVja2JveC1pbmxpbmVdJzogJ2lubGluZScsICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyB9LFxuICAvKlxuICAgICAqIFRoaXMgcHJvdmlkZXIgbGV0cyB1cyBkZWNsYXJlIG91ciBjaGVja2JveCBhcyBhIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAqIHdoaWNoIGFsbG93cyB1cyB0byB1c2UgWyhuZ01vZGVsKV0gZGlyZWN0bHkgb24gb3VyIGNvbXBvbmVudCxcbiAgICAgKiB3aXRoIGFsbCB0aGUgYXV0b21hdGljIGZlYXR1cmVzIHdpcmluZyB0aGF0IGNvbWUgd2l0aCBpdC5cbiAgICAgKi9cbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2xyQ2hlY2tib3hEZXByZWNhdGVkKSwgbXVsdGk6IHRydWUgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENsckNoZWNrYm94RGVwcmVjYXRlZCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLy8gSWYgb3VyIGhvc3QgaGFzIGFuIElEIGF0dHJpYnV0ZSwgd2UgdXNlIHRoaXMgaW5zdGVhZCBvZiBvdXIgaW5kZXguXG4gIEBJbnB1dCgnaWQnKSBfaWQ6IHN0cmluZyA9IChsYXRlc3RJZCsrKS50b1N0cmluZygpO1xuXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIGBjbHItY2hlY2tib3gtJHt0aGlzLl9pZH1gO1xuICB9XG5cbiAgLy8gSWYgaG9zdCBwcm92aWRlcyBhbiBjbHJBcmlhTGFiZWxlZEJ5IGlucHV0LCB3ZSBhcHBseSBpdCB0byB0aGUgY2hlY2tib3hcbiAgQElucHV0KCdjbHJBcmlhTGFiZWxlZEJ5JykgcHVibGljIGNsckFyaWFMYWJlbGVkQnk6IHN0cmluZyA9IG51bGw7XG5cbiAgLy8gSWYgb3VyIGhvc3QgaGFzIGEgbmFtZSBhdHRyaWJ1dGUsIHdlIGFwcGx5IGl0IHRvIHRoZSBjaGVja2JveC5cbiAgQElucHV0KCduYW1lJykgcHVibGljIG5hbWU6IHN0cmluZyA9IG51bGw7XG5cbiAgLy8gSWYgdGhlIGhvc3QgaXMgZGlzYWJsZWQgd2UgYXBwbHkgaXQgdG8gdGhlIGNoZWNrYm94XG4gIEBJbnB1dCgnY2xyRGlzYWJsZWQnKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvLyBTdXBwb3J0IGZvciBpbmxpbmUgY2hlY2tib3hlcywgYWRkcyB0aGUgbmVjZXNzYXJ5IGNsYXNzIHRvIHRoZSBob3N0XG4gIEBJbnB1dCgnY2xySW5saW5lJykgcHVibGljIGlubGluZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBASW5wdXQoJ2NsckNoZWNrZWQnKVxuICBwdWJsaWMgc2V0IGNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2NoZWNrZWQpIHtcbiAgICAgIGlmICh0aGlzLl9pbmRldGVybWluYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZShmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldENoZWNrZWQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IGluZGV0ZXJtaW5hdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV0ZXJtaW5hdGU7XG4gIH1cblxuICBASW5wdXQoJ2NsckluZGV0ZXJtaW5hdGUnKVxuICBwdWJsaWMgc2V0IGluZGV0ZXJtaW5hdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faW5kZXRlcm1pbmF0ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2V0Q2hlY2tlZChmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoJ2NsckluZGV0ZXJtaW5hdGVDaGFuZ2UnKVxuICBwdWJsaWMgaW5kZXRlcm1pbmF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBzZXRJbmRldGVybWluYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9IHZhbHVlO1xuICAgIHRoaXMuaW5kZXRlcm1pbmF0ZUNoYW5nZS5lbWl0KHRoaXMuX2luZGV0ZXJtaW5hdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fY2hlY2tlZCk7XG4gIH1cblxuICBAT3V0cHV0KCdjbHJDaGVja2VkQ2hhbmdlJykgcHVibGljIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgICogVGhlc2UgY2FsbGJhY2tzIHdpbGwgYmUgZ2l2ZW4gdG8gdXMgdGhyb3VnaCB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlLFxuICAgICAqIGFuZCB3ZSBuZWVkIHRvIGNhbGwgdGhlbSB3aGVuIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrID0gKF86IGFueSkgPT4ge307XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShvbkNoYW5nZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gb25DaGFuZ2U7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4ge307XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQob25Ub3VjaGVkOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gb25Ub3VjaGVkO1xuICB9XG5cbiAgcHVibGljIHRvdWNoKCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGNoZWNrSW5kZXRlcm1pbmF0ZVN0YXRlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==