import { Observable } from 'rxjs';
export declare class MarkControlService {
    private _dirty;
    readonly dirtyChange: Observable<void>;
    markAsDirty(): void;
}
