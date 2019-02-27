import { EventEmitter } from '@angular/core';
export declare class ClrStackView {
    /**
     * Undocumented experimental feature: inline editing.
     */
    editable: boolean;
    save: EventEmitter<void>;
    private _editMode;
    editingChange: EventEmitter<boolean>;
    editing: boolean;
}
