import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * @deprecated ClrCheckbox will be renamed to ClrCheckboxDeprecated in 0.12, and will be replaced with a new
 * implementation in 0.13, so if you import it you will need to update your references.
 */
export declare class ClrCheckboxDeprecated implements ControlValueAccessor {
    _id: string;
    readonly id: string;
    clrAriaLabeledBy: string;
    name: string;
    disabled: boolean;
    inline: boolean;
    private _checked;
    checked: boolean;
    private _indeterminate;
    indeterminate: boolean;
    indeterminateChange: EventEmitter<boolean>;
    private setIndeterminate;
    private setChecked;
    change: EventEmitter<boolean>;
    toggle(): void;
    writeValue(value: any): void;
    private onChangeCallback;
    registerOnChange(onChange: any): void;
    private onTouchedCallback;
    registerOnTouched(onTouched: any): void;
    touch(): void;
    checkIndeterminateState(): void;
}
