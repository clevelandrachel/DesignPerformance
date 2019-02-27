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
var ClrWizardStepnavItem = /** @class */ (function () {
    function ClrWizardStepnavItem(navService, pageCollection) {
        this.navService = navService;
        this.pageCollection = pageCollection;
    }
    /**
     * @return {?}
     */
    ClrWizardStepnavItem.prototype.pageGuard = /**
     * @return {?}
     */
    function () {
        if (!this.page) {
            throw new Error('Wizard stepnav item is not associated with a wizard page.');
        }
    };
    Object.defineProperty(ClrWizardStepnavItem.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            this.pageGuard();
            return this.pageCollection.getStepItemIdForPage(this.page);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardStepnavItem.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            this.pageGuard();
            return this.page.disabled || this.navService.wizardStopNavigation || this.navService.wizardDisableStepnav;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardStepnavItem.prototype, "isCurrent", {
        get: /**
         * @return {?}
         */
        function () {
            this.pageGuard();
            return this.page.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardStepnavItem.prototype, "isComplete", {
        get: /**
         * @return {?}
         */
        function () {
            this.pageGuard();
            return this.page.completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrWizardStepnavItem.prototype, "canNavigate", {
        get: /**
         * @return {?}
         */
        function () {
            this.pageGuard();
            return this.pageCollection.previousPageIsCompleted(this.page);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrWizardStepnavItem.prototype.click = /**
     * @return {?}
     */
    function () {
        this.pageGuard();
        // if we click on our own stepnav or a disabled stepnav, we don't want to do anything
        if (this.isDisabled || this.isCurrent) {
            return;
        }
        this.navService.goTo(this.page);
    };
    ClrWizardStepnavItem.decorators = [
        { type: Component, args: [{
                    selector: '[clr-wizard-stepnav-item]',
                    template: "\n        <button type=\"button\" class=\"btn btn-link clr-wizard-stepnav-link\" (click)=\"click()\">\n            <ng-template [ngTemplateOutlet]=\"page.navTitle\"></ng-template>\n        </button>\n    ",
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
    ClrWizardStepnavItem.ctorParameters = function () { return [
        { type: WizardNavigationService },
        { type: PageCollectionService }
    ]; };
    ClrWizardStepnavItem.propDecorators = {
        page: [{ type: Input, args: ['page',] }]
    };
    return ClrWizardStepnavItem;
}());
export { ClrWizardStepnavItem };
if (false) {
    /** @type {?} */
    ClrWizardStepnavItem.prototype.page;
    /** @type {?} */
    ClrWizardStepnavItem.prototype.navService;
    /** @type {?} */
    ClrWizardStepnavItem.prototype.pageCollection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXBuYXYtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcG5hdi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUM7SUF1QkUsOEJBQW1CLFVBQW1DLEVBQVMsY0FBcUM7UUFBakYsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFBRyxDQUFDOzs7O0lBRWhHLHdDQUFTOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCxzQkFBVyxvQ0FBRTs7OztRQUFiO1lBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVTs7OztRQUFyQjtZQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUM1RyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJDQUFTOzs7O1FBQXBCO1lBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0Q0FBVTs7OztRQUFyQjtZQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkNBQVc7Ozs7UUFBdEI7WUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTs7OztJQUVELG9DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixxRkFBcUY7UUFDckYsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLDhNQUlQO29CQUNILElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsSUFBSTt3QkFDWixzQkFBc0IsRUFBRSxXQUFXO3dCQUNuQyxzQkFBc0IsRUFBRSxJQUFJO3dCQUM1QixJQUFJLEVBQUUsS0FBSzt3QkFDWCxzQkFBc0IsRUFBRSxNQUFNO3dCQUM5QixrQkFBa0IsRUFBRSxNQUFNO3dCQUMxQixnQkFBZ0IsRUFBRSxXQUFXO3dCQUM3QixrQkFBa0IsRUFBRSxZQUFZO3dCQUNoQyxrQkFBa0IsRUFBRSxjQUFjO3dCQUNsQyxrQkFBa0IsRUFBRSxZQUFZO3FCQUNqQztpQkFDRjs7OztnQkF0QlEsdUJBQXVCO2dCQUR2QixxQkFBcUI7Ozt1QkF5QjNCLEtBQUssU0FBQyxNQUFNOztJQTZDZiwyQkFBQztDQUFBLEFBbEVELElBa0VDO1NBOUNZLG9CQUFvQjs7O0lBQy9CLG9DQUEwQzs7SUFFOUIsMENBQTBDOztJQUFFLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdlQ29sbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9wYWdlLWNvbGxlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBXaXphcmROYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3dpemFyZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkUGFnZSB9IGZyb20gJy4vd2l6YXJkLXBhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY2xyLXdpemFyZC1zdGVwbmF2LWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgY2xyLXdpemFyZC1zdGVwbmF2LWxpbmtcIiAoY2xpY2spPVwiY2xpY2soKVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBhZ2UubmF2VGl0bGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tpZF0nOiAnaWQnLFxuICAgICdbYXR0ci5hcmlhLXNlbGVjdGVkXSc6ICdpc0N1cnJlbnQnLFxuICAgICdbYXR0ci5hcmlhLWNvbnRyb2xzXSc6ICdpZCcsXG4gICAgcm9sZTogJ3RhYicsXG4gICAgJ1tjbGFzcy5jbHItbmF2LWxpbmtdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubmF2LWl0ZW1dJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0N1cnJlbnQnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2lzRGlzYWJsZWQnLFxuICAgICdbY2xhc3Mubm8tY2xpY2tdJzogJyFjYW5OYXZpZ2F0ZScsXG4gICAgJ1tjbGFzcy5jb21wbGV0ZV0nOiAnaXNDb21wbGV0ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENscldpemFyZFN0ZXBuYXZJdGVtIHtcbiAgQElucHV0KCdwYWdlJykgcHVibGljIHBhZ2U6IENscldpemFyZFBhZ2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdlNlcnZpY2U6IFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlLCBwdWJsaWMgcGFnZUNvbGxlY3Rpb246IFBhZ2VDb2xsZWN0aW9uU2VydmljZSkge31cblxuICBwcml2YXRlIHBhZ2VHdWFyZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGFnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXaXphcmQgc3RlcG5hdiBpdGVtIGlzIG5vdCBhc3NvY2lhdGVkIHdpdGggYSB3aXphcmQgcGFnZS4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgdGhpcy5wYWdlR3VhcmQoKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlQ29sbGVjdGlvbi5nZXRTdGVwSXRlbUlkRm9yUGFnZSh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucGFnZUd1YXJkKCk7XG4gICAgcmV0dXJuIHRoaXMucGFnZS5kaXNhYmxlZCB8fCB0aGlzLm5hdlNlcnZpY2Uud2l6YXJkU3RvcE5hdmlnYXRpb24gfHwgdGhpcy5uYXZTZXJ2aWNlLndpemFyZERpc2FibGVTdGVwbmF2O1xuICB9XG5cbiAgcHVibGljIGdldCBpc0N1cnJlbnQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5wYWdlR3VhcmQoKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlLmN1cnJlbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5wYWdlR3VhcmQoKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FuTmF2aWdhdGUoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5wYWdlR3VhcmQoKTtcbiAgICByZXR1cm4gdGhpcy5wYWdlQ29sbGVjdGlvbi5wcmV2aW91c1BhZ2VJc0NvbXBsZXRlZCh0aGlzLnBhZ2UpO1xuICB9XG5cbiAgY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlR3VhcmQoKTtcblxuICAgIC8vIGlmIHdlIGNsaWNrIG9uIG91ciBvd24gc3RlcG5hdiBvciBhIGRpc2FibGVkIHN0ZXBuYXYsIHdlIGRvbid0IHdhbnQgdG8gZG8gYW55dGhpbmdcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuaXNDdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uYXZTZXJ2aWNlLmdvVG8odGhpcy5wYWdlKTtcbiAgfVxufVxuIl19