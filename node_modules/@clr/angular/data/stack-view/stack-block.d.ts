import { EventEmitter, OnInit } from '@angular/core';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrStackBlock implements OnInit {
    private parent;
    commonStrings: ClrCommonStrings;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    expandable: boolean;
    focused: boolean;
    private _changedChildren;
    private _fullyInitialized;
    private _changed;
    readonly getChangedValue: boolean;
    setChangedValue: boolean;
    constructor(parent: ClrStackBlock, commonStrings: ClrCommonStrings);
    ngOnInit(): void;
    addChild(): void;
    toggleExpand(): void;
    readonly caretDirection: string;
    readonly caretTitle: string;
    readonly role: string;
    readonly tabIndex: string;
    readonly onStackLabelFocus: boolean;
    readonly ariaExpanded: string;
}
