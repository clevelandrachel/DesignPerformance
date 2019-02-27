import { ElementRef, Injector } from '@angular/core';
import { AbstractPopover } from '../common/abstract-popover';
export declare class ClrDropdownMenu extends AbstractPopover {
    constructor(injector: Injector, parentHost: ElementRef, nested: ClrDropdownMenu);
    position: string;
}
