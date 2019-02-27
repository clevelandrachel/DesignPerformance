import { AnimationEvent } from '@angular/animations';
import { EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { FocusTrapDirective } from '../utils/focus-trap/focus-trap.directive';
import { ScrollingService } from '../utils/scrolling/scrolling-service';
import { ClrCommonStrings } from '../utils/i18n/common-strings.interface';
export declare class ClrModal implements OnChanges, OnDestroy {
    private _scrollingService;
    commonStrings: ClrCommonStrings;
    modalId: string;
    focusTrap: FocusTrapDirective;
    _open: boolean;
    _openChanged: EventEmitter<boolean>;
    closable: boolean;
    size: string;
    staticBackdrop: boolean;
    skipAnimation: string;
    bypassScrollService: boolean;
    stopClose: boolean;
    altClose: EventEmitter<boolean>;
    constructor(_scrollingService: ScrollingService, commonStrings: ClrCommonStrings, modalId: string);
    readonly sizeClass: string;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    fadeDone(e: AnimationEvent): void;
}
