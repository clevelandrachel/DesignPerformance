import { TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { ClrDatagridColumn } from './datagrid-column';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
export declare class ClrDatagridHideableColumn {
    private templateRef;
    private viewContainerRef;
    private dgColumn;
    /**
     *
     * @description
     * Used to initialize the column with either hidden or visible state.
     *
     */
    private _hidden;
    /**
     *
     * @description
     * Setter fn for the @Input with the same name as this structural directive.
     * It allows the user to pre-configure the column's hide/show state. { hidden: true }
     * It's more verbose but has more Clarity.
     *
     *
     * @example
     * *clrDgHideableColumn
     * *clrDgHideableColumn={hidden: false}
     * *clrDgHideableColumn={hidden: true}
     *
     */
    clrDgHideableColumn: {
        hidden: boolean;
    };
    clrDgHidden: boolean;
    hiddenChange: EventEmitter<boolean>;
    /**
     *
     * @description
     * A unique identifier passed into the directive from the parent (A DatagridColumn).
     *
     */
    columnId: string;
    /**
     *
     * @description
     * An instance of the DatagridHideableColumn Utility class that is used to:
     * 1. Create an instance of HideableColumn that will manage the TemplateRef, state and communication
     * 2. Manage the hidden/shown state for the column to which this directive is applied
     * 3. track the id of the hidden column so it can be used in cells as well as on the column
     */
    column: DatagridHideableColumnModel;
    /**
     * @description
     * Used the DatagridColumn to get and set an id for this HiddenColumn
     *
     */
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, dgColumn: ClrDatagridColumn<any>);
}
