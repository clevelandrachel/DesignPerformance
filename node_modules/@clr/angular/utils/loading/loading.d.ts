import { OnDestroy } from '@angular/core';
import { LoadingListener } from './loading-listener';
export declare enum ClrLoadingState {
    DEFAULT = 0,
    LOADING = 1,
    SUCCESS = 2,
    ERROR = 3
}
export declare class ClrLoading implements OnDestroy {
    private listener;
    constructor(listener: LoadingListener);
    private _loadingState;
    loadingState: boolean | ClrLoadingState;
    ngOnDestroy(): void;
}
