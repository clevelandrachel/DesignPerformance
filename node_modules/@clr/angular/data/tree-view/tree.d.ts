import { TreeFeaturesService } from './tree-features.service';
export declare class ClrTree<T> {
    featuresService: TreeFeaturesService<T>;
    constructor(featuresService: TreeFeaturesService<T>);
    lazy: boolean;
}
