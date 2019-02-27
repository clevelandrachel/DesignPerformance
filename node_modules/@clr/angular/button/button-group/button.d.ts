import { EventEmitter, TemplateRef } from '@angular/core';
import { ClrLoadingState } from '../../utils/loading/loading';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ButtonInGroupService } from '../providers/button-in-group.service';
export declare class ClrButton implements LoadingListener {
    buttonInGroupService: ButtonInGroupService;
    private _enableService;
    templateRef: TemplateRef<ClrButton>;
    constructor(buttonInGroupService: ButtonInGroupService);
    private _inMenu;
    inMenu: boolean;
    private _classNames;
    classNames: string;
    private _name;
    name: string;
    private _type;
    type: string;
    private _disabled;
    disabled: any;
    loading: boolean;
    loadingStateChange(state: ClrLoadingState): void;
    _click: EventEmitter<boolean>;
    emitClick(): void;
    ngAfterViewInit(): void;
}
