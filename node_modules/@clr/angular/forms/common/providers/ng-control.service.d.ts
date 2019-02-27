import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
export declare class NgControlService {
    private _controlChanges;
    readonly controlChanges: Observable<NgControl>;
    setControl(control: NgControl): void;
}
