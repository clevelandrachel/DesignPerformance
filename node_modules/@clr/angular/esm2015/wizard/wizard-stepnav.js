/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { PageCollectionService } from './providers/page-collection.service';
export class ClrWizardStepnav {
    /**
     * @param {?} pageService
     */
    constructor(pageService) {
        this.pageService = pageService;
    }
}
ClrWizardStepnav.decorators = [
    { type: Component, args: [{
                selector: 'clr-wizard-stepnav',
                template: `
        <ol class="clr-wizard-stepnav-list" role="tablist">
            <li *ngFor="let page of pageService.pages" clr-wizard-stepnav-item 
            [page]="page" class="clr-wizard-stepnav-item"></li>
        </ol>
    `,
                host: { class: 'clr-wizard-stepnav' }
            }] }
];
/** @nocollapse */
ClrWizardStepnav.ctorParameters = () => [
    { type: PageCollectionService }
];
if (false) {
    /** @type {?} */
    ClrWizardStepnav.prototype.pageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXBuYXYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ3aXphcmQvd2l6YXJkLXN0ZXBuYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVk1RSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW1CLFdBQWtDO1FBQWxDLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtJQUFHLENBQUM7OztZQVgxRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7OztLQUtQO2dCQUNILElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRTthQUN0Qzs7OztZQVhRLHFCQUFxQjs7OztJQWFoQix1Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbGxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvcGFnZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItd2l6YXJkLXN0ZXBuYXYnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8b2wgY2xhc3M9XCJjbHItd2l6YXJkLXN0ZXBuYXYtbGlzdFwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZVNlcnZpY2UucGFnZXNcIiBjbHItd2l6YXJkLXN0ZXBuYXYtaXRlbSBcbiAgICAgICAgICAgIFtwYWdlXT1cInBhZ2VcIiBjbGFzcz1cImNsci13aXphcmQtc3RlcG5hdi1pdGVtXCI+PC9saT5cbiAgICAgICAgPC9vbD5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnY2xyLXdpemFyZC1zdGVwbmF2JyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJXaXphcmRTdGVwbmF2IHtcbiAgY29uc3RydWN0b3IocHVibGljIHBhZ2VTZXJ2aWNlOiBQYWdlQ29sbGVjdGlvblNlcnZpY2UpIHt9XG59XG4iXX0=