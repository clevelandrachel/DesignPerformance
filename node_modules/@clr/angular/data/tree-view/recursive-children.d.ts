import { Subscription } from 'rxjs';
import { Expand } from '../../utils/expand/providers/expand';
import { TreeFeaturesService } from './tree-features.service';
import { TreeNodeModel } from './models/tree-node.model';
import { ClrRecursiveForOfContext } from './recursive-for-of';
export declare class RecursiveChildren<T> {
    featuresService: TreeFeaturesService<T>;
    private expandService;
    constructor(featuresService: TreeFeaturesService<T>, expandService: Expand);
    shouldRender(): boolean;
    parent: TreeNodeModel<T>;
    children: TreeNodeModel<T>[];
    getContext(node: TreeNodeModel<T>): ClrRecursiveForOfContext<T>;
    subscription: Subscription;
    ngOnDestroy(): void;
}
