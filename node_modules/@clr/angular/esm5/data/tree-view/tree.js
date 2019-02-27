/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { TREE_FEATURES_PROVIDER, TreeFeaturesService } from './tree-features.service';
/**
 * @template T
 */
var ClrTree = /** @class */ (function () {
    // This component can also be used just to declare providers once for trees with multiple root nodes.
    function ClrTree(featuresService) {
        this.featuresService = featuresService;
    }
    Object.defineProperty(ClrTree.prototype, "lazy", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.featuresService.eager = !value;
        },
        enumerable: true,
        configurable: true
    });
    ClrTree.decorators = [
        { type: Component, args: [{
                    selector: 'clr-tree',
                    template: "\n    <ng-content></ng-content>\n    <clr-recursive-children *ngIf=\"featuresService.recursion\"\n                            [children]=\"featuresService.recursion.root\"></clr-recursive-children>\n  ",
                    providers: [TREE_FEATURES_PROVIDER]
                }] }
    ];
    /** @nocollapse */
    ClrTree.ctorParameters = function () { return [
        { type: TreeFeaturesService }
    ]; };
    ClrTree.propDecorators = {
        lazy: [{ type: Input, args: ['clrLazy',] }]
    };
    return ClrTree;
}());
export { ClrTree };
if (false) {
    /** @type {?} */
    ClrTree.prototype.featuresService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFdEY7SUFVRSxxR0FBcUc7SUFFckcsaUJBQW1CLGVBQXVDO1FBQXZDLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUFHLENBQUM7SUFFOUQsc0JBQ0kseUJBQUk7Ozs7O1FBRFIsVUFDUyxLQUFjO1lBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMk1BSVQ7b0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDOzs7O2dCQVZnQyxtQkFBbUI7Ozt1QkFnQmpELEtBQUssU0FBQyxTQUFTOztJQUlsQixjQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FUWSxPQUFPOzs7SUFHTixrQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRSRUVfRkVBVFVSRVNfUFJPVklERVIsIFRyZWVGZWF0dXJlc1NlcnZpY2UgfSBmcm9tICcuL3RyZWUtZmVhdHVyZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci10cmVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPGNsci1yZWN1cnNpdmUtY2hpbGRyZW4gKm5nSWY9XCJmZWF0dXJlc1NlcnZpY2UucmVjdXJzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRyZW5dPVwiZmVhdHVyZXNTZXJ2aWNlLnJlY3Vyc2lvbi5yb290XCI+PC9jbHItcmVjdXJzaXZlLWNoaWxkcmVuPlxuICBgLFxuICBwcm92aWRlcnM6IFtUUkVFX0ZFQVRVUkVTX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVHJlZTxUPiB7XG4gIC8vIFRoaXMgY29tcG9uZW50IGNhbiBhbHNvIGJlIHVzZWQganVzdCB0byBkZWNsYXJlIHByb3ZpZGVycyBvbmNlIGZvciB0cmVlcyB3aXRoIG11bHRpcGxlIHJvb3Qgbm9kZXMuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGZlYXR1cmVzU2VydmljZTogVHJlZUZlYXR1cmVzU2VydmljZTxUPikge31cblxuICBASW5wdXQoJ2NsckxhenknKVxuICBzZXQgbGF6eSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZmVhdHVyZXNTZXJ2aWNlLmVhZ2VyID0gIXZhbHVlO1xuICB9XG59XG4iXX0=