import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
/**
 *
 * @description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
export declare class DatagridHideableColumnModel {
    private _template;
    private _id;
    private _hidden;
    /**
     * @property hiddenChanges
     *
     * @description
     * A stream of state changes an instance of DatagridHideableColumnModel will broadcast to subscribers.
     *
     */
    private hiddenChangesState;
    /**
     *
     * @description
     * The init function for DatagridHideableColumnModel instances that does the following:
     *
     * 1. Set values for the private variables that enable a hideable column
     * 2. Broadcast the next hidden change for anyone (already) subscribed to this DatagridHideableColumnModel
     *
     */
    constructor(_template: TemplateRef<any>, _id: string, _hidden?: boolean);
    /**
     *
     * @description
     * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
     * populate the DatagridColumnToggle UI with the correct Column name.
     *
     */
    readonly template: TemplateRef<any>;
    /**
     *
     * @description
     * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
     * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
     *
     */
    readonly id: string;
    /**
     *
     * @description
     * A getter that returns the hidden value of a DatagridHideableColumnModel instance.
     *
     */
    /**
    *
    * @description
    * The setter for setting the hidden state of a DatagridHideableColumnModel instance.
    * It also broadcasts the change after its set.
    *
    */
    hidden: boolean;
    /**
     *
     * @description
     * An Observable for the HideableColumns hidden changes.
     *
     */
    readonly hiddenChangeState: Observable<boolean>;
    lastVisibleColumn: boolean;
}
