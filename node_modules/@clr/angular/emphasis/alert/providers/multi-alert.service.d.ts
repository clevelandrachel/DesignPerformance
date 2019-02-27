import { QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { ClrAlert } from '../alert';
export declare class MultiAlertService {
    private allAlerts;
    private subscription;
    private _current;
    /**
     * The Observable that lets other classes subscribe to changes
     */
    private _change;
    readonly changes: Observable<number>;
    current: number;
    readonly activeAlerts: ClrAlert[];
    currentAlert: ClrAlert;
    readonly count: number;
    manage(alerts: QueryList<ClrAlert>): void;
    next(): void;
    previous(): void;
    close(): void;
    destroy(): void;
}
