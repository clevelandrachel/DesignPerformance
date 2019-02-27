import { Observable } from 'rxjs';
import { ClrButton } from '../button-group/button';
export declare class ButtonInGroupService {
    private _changes;
    readonly changes: Observable<ClrButton>;
    updateButtonGroup(button: ClrButton): void;
}
