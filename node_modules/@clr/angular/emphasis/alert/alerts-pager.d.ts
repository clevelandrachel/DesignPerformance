import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ClrAlert } from './alert';
import { MultiAlertService } from './providers/multi-alert.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrAlertsPager implements OnInit, OnDestroy {
    multiAlertService: MultiAlertService;
    commonStrings: ClrCommonStrings;
    private multiAlertServiceChanges;
    /**
     * Input/Output to support two way binding on current alert instance
     */
    currentAlert: ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    /**
     * Input/Output to support two way binding on current alert index
     */
    currentAlertIndex: number;
    currentAlertIndexChange: EventEmitter<number>;
    constructor(multiAlertService: MultiAlertService, commonStrings: ClrCommonStrings);
    ngOnInit(): void;
    pageUp(): void;
    pageDown(): void;
    ngOnDestroy(): void;
}
