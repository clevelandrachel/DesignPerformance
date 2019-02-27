import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { NgControlService } from '../providers/ng-control.service';
export declare class IfErrorService implements OnDestroy {
    private ngControlService;
    private _statusChanges;
    readonly statusChanges: Observable<boolean>;
    private subscriptions;
    private control;
    constructor(ngControlService: NgControlService);
    private listenForChanges;
    private sendValidity;
    triggerStatusChange(): void;
    ngOnDestroy(): void;
}
