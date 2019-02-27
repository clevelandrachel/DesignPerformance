import { TreeNodeModel } from './tree-node.model';
import { AsyncArray } from './async-array';
export declare class RecursiveTreeNodeModel<T> extends TreeNodeModel<T> {
    private getChildren;
    constructor(model: T, parent: RecursiveTreeNodeModel<T> | null, getChildren: (node: T) => AsyncArray<T> | undefined);
    parent: RecursiveTreeNodeModel<T> | null;
    private childrenFetched;
    fetchChildren(): void;
    private wrapChildren;
    private _children;
    children: RecursiveTreeNodeModel<T>[];
    private subscription;
    destroy(): void;
}
