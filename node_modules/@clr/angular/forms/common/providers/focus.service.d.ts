import { Observable } from 'rxjs';
export declare class FocusService {
    private _focused;
    readonly focusChange: Observable<boolean>;
    focused: boolean;
}
