import { ElementRef, Injector } from '@angular/core';
import { AbstractPopover } from '../../popover/common/abstract-popover';
import { ViewManagerService } from './providers/view-manager.service';
export declare class ClrDatepickerViewManager extends AbstractPopover {
    private _viewManagerService;
    constructor(parent: ElementRef, _injector: Injector, _viewManagerService: ViewManagerService);
    /**
     * Configure Popover Direction and Close indicators
     */
    private configurePopover;
    /**
     * Returns if the current view is the monthpicker.
     */
    readonly isMonthView: boolean;
    /**
     * Returns if the current view is the yearpicker.
     */
    readonly isYearView: boolean;
    /**
     * Returns if the current view is the daypicker.
     */
    readonly isDayView: boolean;
}
