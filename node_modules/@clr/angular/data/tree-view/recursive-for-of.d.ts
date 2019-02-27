import { OnChanges, TemplateRef } from '@angular/core';
import { TreeFeaturesService } from './tree-features.service';
import { TreeNodeModel } from './models/tree-node.model';
import { AsyncArray } from './models/async-array';
export interface ClrRecursiveForOfContext<T> {
    $implicit: T;
    clrModel: TreeNodeModel<T>;
}
export declare class ClrRecursiveForOf<T> implements OnChanges {
    private template;
    private featuresService;
    constructor(template: TemplateRef<ClrRecursiveForOfContext<T>>, featuresService: TreeFeaturesService<T>);
    nodes: T | T[];
    getChildren: (node: T) => AsyncArray<T>;
    ngOnChanges(): void;
}
