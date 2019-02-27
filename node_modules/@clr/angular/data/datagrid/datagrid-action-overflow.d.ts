import { EventEmitter, OnDestroy } from '@angular/core';
import { Point } from '../../popover/common/popover';
import { RowActionService } from './providers/row-action-service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrDatagridActionOverflow implements OnDestroy {
    private rowActionService;
    commonStrings: ClrCommonStrings;
    anchorPoint: Point;
    popoverPoint: Point;
    constructor(rowActionService: RowActionService, commonStrings: ClrCommonStrings);
    ngOnDestroy(): void;
    /**
     * Tracks whether the action overflow menu is open or not
     */
    private _open;
    open: boolean;
    openChanged: EventEmitter<boolean>;
    private openingEvent;
    /**
     * Shows/hides the action overflow menu
     */
    toggle(event: any): void;
    close(event: MouseEvent): void;
}
