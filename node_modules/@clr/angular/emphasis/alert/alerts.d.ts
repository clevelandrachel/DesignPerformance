import { AfterContentInit, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { ClrAlert } from './alert';
import { MultiAlertService } from './providers/multi-alert.service';
export declare class ClrAlerts implements AfterContentInit, OnDestroy {
    multiAlertService: MultiAlertService;
    allAlerts: QueryList<ClrAlert>;
    /**
     * Input/Output to support two way binding on current alert index
     */
    _inputCurrentIndex: number;
    currentAlertIndexChange: EventEmitter<number>;
    currentAlertIndex: number;
    /**
     * Input/Output to support two way binding on current alert instance
     */
    currentAlert: ClrAlert;
    currentAlertChange: EventEmitter<ClrAlert>;
    /**
     * Ensure we are only dealing with alerts that have not been closed yet
     */
    readonly alerts: ClrAlert[];
    readonly currentAlertType: string;
    constructor(multiAlertService: MultiAlertService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
