import { AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
export declare class WillyWonka implements AfterViewChecked {
    private _chocolate;
    readonly chocolate: Observable<void>;
    ngAfterViewChecked(): void;
}
