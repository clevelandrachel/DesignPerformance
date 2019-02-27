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
export class ClrTree {
    // This component can also be used just to declare providers once for trees with multiple root nodes.
    /**
     * @param {?} featuresService
     */
    constructor(featuresService) {
        this.featuresService = featuresService;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set lazy(value) {
        this.featuresService.eager = !value;
    }
}
ClrTree.decorators = [
    { type: Component, args: [{
                selector: 'clr-tree',
                template: `
    <ng-content></ng-content>
    <clr-recursive-children *ngIf="featuresService.recursion"
                            [children]="featuresService.recursion.root"></clr-recursive-children>
  `,
                providers: [TREE_FEATURES_PROVIDER]
            }] }
];
/** @nocollapse */
ClrTree.ctorParameters = () => [
    { type: TreeFeaturesService }
];
ClrTree.propDecorators = {
    lazy: [{ type: Input, args: ['clrLazy',] }]
};
if (false) {
    /** @type {?} */
    ClrTree.prototype.featuresService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L3RyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFXdEYsTUFBTSxPQUFPLE9BQU87Ozs7O0lBR2xCLFlBQW1CLGVBQXVDO1FBQXZDLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtJQUFHLENBQUM7Ozs7O0lBRTlELElBQ0ksSUFBSSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEM7Ozs7WUFWZ0MsbUJBQW1COzs7bUJBZ0JqRCxLQUFLLFNBQUMsU0FBUzs7OztJQUZKLGtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVFJFRV9GRUFUVVJFU19QUk9WSURFUiwgVHJlZUZlYXR1cmVzU2VydmljZSB9IGZyb20gJy4vdHJlZS1mZWF0dXJlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXRyZWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8Y2xyLXJlY3Vyc2l2ZS1jaGlsZHJlbiAqbmdJZj1cImZlYXR1cmVzU2VydmljZS5yZWN1cnNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZHJlbl09XCJmZWF0dXJlc1NlcnZpY2UucmVjdXJzaW9uLnJvb3RcIj48L2Nsci1yZWN1cnNpdmUtY2hpbGRyZW4+XG4gIGAsXG4gIHByb3ZpZGVyczogW1RSRUVfRkVBVFVSRVNfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJUcmVlPFQ+IHtcbiAgLy8gVGhpcyBjb21wb25lbnQgY2FuIGFsc28gYmUgdXNlZCBqdXN0IHRvIGRlY2xhcmUgcHJvdmlkZXJzIG9uY2UgZm9yIHRyZWVzIHdpdGggbXVsdGlwbGUgcm9vdCBub2Rlcy5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmVhdHVyZXNTZXJ2aWNlOiBUcmVlRmVhdHVyZXNTZXJ2aWNlPFQ+KSB7fVxuXG4gIEBJbnB1dCgnY2xyTGF6eScpXG4gIHNldCBsYXp5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5mZWF0dXJlc1NlcnZpY2UuZWFnZXIgPSAhdmFsdWU7XG4gIH1cbn1cbiJdfQ==