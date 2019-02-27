import { Observable } from 'rxjs';
export declare class DateFormControlService {
    private _touchedChange;
    readonly touchedChange: Observable<void>;
    private _dirtyChange;
    readonly dirtyChange: Observable<void>;
    markAsTouched(): void;
    markAsDirty(): void;
}
