import { ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { ClrSignpost } from '../../popover/signpost/signpost';
import { HideableColumnService } from './providers/hideable-column.service';
export declare class ClrDatagridCell implements OnInit, OnDestroy {
    hideableColumnService: HideableColumnService;
    private _el;
    private _renderer;
    private vcr;
    /*********
     * @property signpost
     *
     * @description
     * @ContentChild is used to detect the presence of a Signpost in the projected content.
     * On the host, we set the .datagrid-signpost-trigger class on the cell when signpost.length is greater than 0.
     *
     */
    signpost: QueryList<ClrSignpost>;
    /**
     * @property id
     *
     * @description
     * An identifier for an instance of this cell that maps it to a specific column
     *
     */
    private _id;
    id: string;
    private hiddenStateSubscription;
    constructor(hideableColumnService: HideableColumnService, _el: ElementRef, _renderer: Renderer2, vcr: ViewContainerRef);
    private mapHideableColumn;
    private setHiddenClass;
    private wrappedInjector;
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly _view: any;
}
