import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
import { MultiAlertService } from './providers/multi-alert.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrAlert {
    iconService: AlertIconAndTypesService;
    cdr: ChangeDetectorRef;
    multiAlertService: MultiAlertService;
    commonStrings: ClrCommonStrings;
    constructor(iconService: AlertIconAndTypesService, cdr: ChangeDetectorRef, multiAlertService: MultiAlertService, commonStrings: ClrCommonStrings);
    isSmall: boolean;
    closable: boolean;
    isAppLevel: boolean;
    _closed: boolean;
    _closedChanged: EventEmitter<boolean>;
    alertType: string;
    alertIconShape: string;
    readonly alertClass: string;
    private previouslyHidden;
    private hidden;
    private detectChangesIfNeeded;
    readonly isHidden: boolean;
    close(): void;
    open(): void;
}
