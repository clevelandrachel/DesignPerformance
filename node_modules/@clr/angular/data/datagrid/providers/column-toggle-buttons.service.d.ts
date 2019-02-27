import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
export declare class ColumnToggleButtonsService {
    buttons: TemplateRef<any>;
    selectAllDisabled: boolean;
    private _selectAllButtonClicked;
    readonly selectAllButtonClicked: Observable<void>;
    buttonClicked(): void;
}
