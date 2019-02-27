import { EventEmitter, Injector, OnDestroy, OnInit } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { ClrSelectedState } from './models/selected-state.enum';
import { TreeNodeModel } from './models/tree-node.model';
import { TreeFeaturesService } from './tree-features.service';
export declare class ClrTreeNode<T> implements OnInit, OnDestroy {
    nodeId: string;
    featuresService: TreeFeaturesService<T>;
    expandService: Expand;
    commonStrings: ClrCommonStrings;
    STATES: typeof ClrSelectedState;
    constructor(nodeId: string, parent: ClrTreeNode<T>, featuresService: TreeFeaturesService<T>, expandService: Expand, commonStrings: ClrCommonStrings, injector: Injector);
    _model: TreeNodeModel<T>;
    isExpandable(): boolean;
    selected: ClrSelectedState | boolean;
    selectedChange: EventEmitter<ClrSelectedState>;
    readonly treeNodeRole: string;
    readonly rootAriaMultiSelectable: boolean;
    readonly ariaSelected: boolean;
    expandable: boolean | undefined;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    private subscriptions;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
