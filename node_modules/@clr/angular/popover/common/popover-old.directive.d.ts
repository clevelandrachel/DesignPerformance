import { EventEmitter, TemplateRef, ViewContainerRef } from '@angular/core';
import { Point } from './popover';
import { PopoverOptions } from './popover-options.interface';
export declare class PopoverDirectiveOld {
    private templateRef;
    private viewContainer;
    private _popoverInstance;
    private _subscription;
    anchorElem: any;
    anchorPoint: Point;
    popoverPoint: Point;
    popoverOptions: PopoverOptions;
    clrPopoverOldChange: EventEmitter<boolean>;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef);
    clrPopoverOld: boolean;
    createPopover(): void;
    destroyPopover(): void;
    ngOnDestroy(): void;
}
