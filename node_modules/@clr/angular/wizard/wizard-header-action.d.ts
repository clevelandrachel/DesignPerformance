import { EventEmitter } from '@angular/core';
export declare class ClrWizardHeaderAction {
    title: string;
    _id: string;
    readonly id: string;
    disabled: boolean;
    headerActionClicked: EventEmitter<string>;
    click(): void;
}
