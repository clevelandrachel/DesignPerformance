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
import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardPage } from './wizard-page';
export class ClrWizardStepnavItem {
    /**
     * @param {?} navService
     * @param {?} pageCollection
     */
    constructor(navService, pageCollection) {
        this.navService = navService;
        this.pageCollection = pageCollection;
    }
    /**
     * @return {?}
     */
    pageGuard() {
        if (!this.page) {
            throw new Error('Wizard stepnav item is not associated with a wizard page.');
        }
    }
    /**
     * @return {?}
     */
    get id() {
        this.pageGuard();
        return this.pageCollection.getStepItemIdForPage(this.page);
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        this.pageGuard();
        return this.page.disabled || this.navService.wizardStopNavigation || this.navService.wizardDisableStepnav;
    }
    /**
     * @return {?}
     */
    get isCurrent() {
        this.pageGuard();
        return this.page.current;
    }
    /**
     * @return {?}
     */
    get isComplete() {
        this.pageGuard();
        return this.page.completed;
    }
    /**
     * @return {?}
     */
    get canNavigate() {
        this.pageGuard();
        return this.pageCollection.previousPageIsCompleted(this.page);
    }
    /**
     * @return {?}
     */
    click() {
        this.pageGuard();
        // if we click on our own stepnav or a disabled stepnav, we don't want to do anything
        if (this.isDisabled || this.isCurrent) {
            return;
        }
        this.navService.goTo(this.page);
    }
}
ClrWizardStepnavItem.decorators = [
    { type: Component, args: [{
                selector: '[clr-wizard-stepnav-item]',
                template: `
        <button type="button" class="btn btn-link clr-wizard-stepnav-link" (click)="click()">
            <ng-template [ngTemplateOutlet]="page.navTitle"></ng-template>
        </button>
    `,
                host: {
                    '[id]': 'id',
                    '[attr.aria-selected]': 'isCurrent',
                    '[attr.aria-controls]': 'id',
                    role: 'tab',
                    '[class.clr-nav-link]': 'true',
                    '[class.nav-item]': 'true',
                    '[class.active]': 'isCurrent',
                    '[class.disabled]': 'isDisabled',
                    '[class.no-click]': '!canNavigate',
                    '[class.complete]': 'isComplete',
                }
            }] }
];
/** @nocollapse */
ClrWizardStepnavItem.ctorParameters = () => [
    { type: WizardNavigationService },
    { type: PageCollectionService }
];
ClrWizardStepnavItem.propDecorators = {
    page: [{ type: Input, args: ['page',] }]
};
if (false) {
    /** @type {?} */
    ClrWizardStepnavItem.prototype.page;
    /** @type {?} */
    ClrWizardStepnavItem.prototype.navService;
    /** @type {?} */
    ClrWizardStepnavItem.prototype.pageCollection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXBuYXYtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcG5hdi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzQjlDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRy9CLFlBQW1CLFVBQW1DLEVBQVMsY0FBcUM7UUFBakYsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFBRyxDQUFDOzs7O0lBRWhHLFNBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7Ozs7SUFFRCxJQUFXLEVBQUU7UUFDWCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsSUFBVyxVQUFVO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1RyxDQUFDOzs7O0lBRUQsSUFBVyxTQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFXLFVBQVU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQVcsV0FBVztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixxRkFBcUY7UUFDckYsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7O0tBSVA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxJQUFJO29CQUNaLHNCQUFzQixFQUFFLFdBQVc7b0JBQ25DLHNCQUFzQixFQUFFLElBQUk7b0JBQzVCLElBQUksRUFBRSxLQUFLO29CQUNYLHNCQUFzQixFQUFFLE1BQU07b0JBQzlCLGtCQUFrQixFQUFFLE1BQU07b0JBQzFCLGdCQUFnQixFQUFFLFdBQVc7b0JBQzdCLGtCQUFrQixFQUFFLFlBQVk7b0JBQ2hDLGtCQUFrQixFQUFFLGNBQWM7b0JBQ2xDLGtCQUFrQixFQUFFLFlBQVk7aUJBQ2pDO2FBQ0Y7Ozs7WUF0QlEsdUJBQXVCO1lBRHZCLHFCQUFxQjs7O21CQXlCM0IsS0FBSyxTQUFDLE1BQU07Ozs7SUFBYixvQ0FBMEM7O0lBRTlCLDBDQUEwQzs7SUFBRSw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnZUNvbGxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvcGFnZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy93aXphcmQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENscldpemFyZFBhZ2UgfSBmcm9tICcuL3dpemFyZC1wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2Nsci13aXphcmQtc3RlcG5hdi1pdGVtXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGNsci13aXphcmQtc3RlcG5hdi1saW5rXCIgKGNsaWNrKT1cImNsaWNrKClcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwYWdlLm5hdlRpdGxlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nOiAnaXNDdXJyZW50JyxcbiAgICAnW2F0dHIuYXJpYS1jb250cm9sc10nOiAnaWQnLFxuICAgIHJvbGU6ICd0YWInLFxuICAgICdbY2xhc3MuY2xyLW5hdi1saW5rXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLm5hdi1pdGVtXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnaXNDdXJyZW50JyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdpc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLm5vLWNsaWNrXSc6ICchY2FuTmF2aWdhdGUnLFxuICAgICdbY2xhc3MuY29tcGxldGVdJzogJ2lzQ29tcGxldGUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJXaXphcmRTdGVwbmF2SXRlbSB7XG4gIEBJbnB1dCgncGFnZScpIHB1YmxpYyBwYWdlOiBDbHJXaXphcmRQYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZTZXJ2aWNlOiBXaXphcmROYXZpZ2F0aW9uU2VydmljZSwgcHVibGljIHBhZ2VDb2xsZWN0aW9uOiBQYWdlQ29sbGVjdGlvblNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBwYWdlR3VhcmQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2l6YXJkIHN0ZXBuYXYgaXRlbSBpcyBub3QgYXNzb2NpYXRlZCB3aXRoIGEgd2l6YXJkIHBhZ2UuJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMucGFnZUNvbGxlY3Rpb24uZ2V0U3RlcEl0ZW1JZEZvclBhZ2UodGhpcy5wYWdlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICB0aGlzLnBhZ2VHdWFyZCgpO1xuICAgIHJldHVybiB0aGlzLnBhZ2UuZGlzYWJsZWQgfHwgdGhpcy5uYXZTZXJ2aWNlLndpemFyZFN0b3BOYXZpZ2F0aW9uIHx8IHRoaXMubmF2U2VydmljZS53aXphcmREaXNhYmxlU3RlcG5hdjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNDdXJyZW50KCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMucGFnZS5jdXJyZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc0NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMucGFnZS5jb21wbGV0ZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbk5hdmlnYXRlKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMucGFnZUNvbGxlY3Rpb24ucHJldmlvdXNQYWdlSXNDb21wbGV0ZWQodGhpcy5wYWdlKTtcbiAgfVxuXG4gIGNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG5cbiAgICAvLyBpZiB3ZSBjbGljayBvbiBvdXIgb3duIHN0ZXBuYXYgb3IgYSBkaXNhYmxlZCBzdGVwbmF2LCB3ZSBkb24ndCB3YW50IHRvIGRvIGFueXRoaW5nXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLmlzQ3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmF2U2VydmljZS5nb1RvKHRoaXMucGFnZSk7XG4gIH1cbn1cbiJdfQ==