/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, HostListener } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { ClrDropdown } from './dropdown';
export class ClrDropdownTrigger {
    /**
     * @param {?} dropdown
     * @param {?} ifOpenService
     */
    constructor(dropdown, ifOpenService) {
        this.ifOpenService = ifOpenService;
        this.isRootLevelToggle = true;
        // if the containing dropdown has a parent, then this is not the root level one
        if (dropdown.parent) {
            this.isRootLevelToggle = false;
        }
    }
    /**
     * @return {?}
     */
    get active() {
        return this.ifOpenService.open;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDropdownTriggerClick(event) {
        this.ifOpenService.toggleWithEvent(event);
    }
}
ClrDropdownTrigger.decorators = [
    { type: Directive, args: [{
                // We support both selectors for legacy reasons
                selector: '[clrDropdownTrigger],[clrDropdownToggle]',
                host: {
                    '[class.dropdown-toggle]': 'isRootLevelToggle',
                    '[class.dropdown-item]': '!isRootLevelToggle',
                    '[class.expandable]': '!isRootLevelToggle',
                    '[class.active]': 'active',
                },
            },] }
];
/** @nocollapse */
ClrDropdownTrigger.ctorParameters = () => [
    { type: ClrDropdown },
    { type: IfOpenService }
];
ClrDropdownTrigger.propDecorators = {
    onDropdownTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ClrDropdownTrigger.prototype.isRootLevelToggle;
    /** @type {?} */
    ClrDropdownTrigger.prototype.ifOpenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHJvcGRvd24vZHJvcGRvd24tdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVl6QyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUc3QixZQUFZLFFBQXFCLEVBQVUsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGaEUsc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBR3ZDLCtFQUErRTtRQUMvRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBR0Qsc0JBQXNCLENBQUMsS0FBVTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsbUJBQW1CO29CQUM5Qyx1QkFBdUIsRUFBRSxvQkFBb0I7b0JBQzdDLG9CQUFvQixFQUFFLG9CQUFvQjtvQkFDMUMsZ0JBQWdCLEVBQUUsUUFBUTtpQkFDM0I7YUFDRjs7OztZQVhRLFdBQVc7WUFGWCxhQUFhOzs7cUNBNEJuQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBYmpDLCtDQUF5Qzs7SUFFTiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtb3Blbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ2xyRHJvcGRvd24gfSBmcm9tICcuL2Ryb3Bkb3duJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIFdlIHN1cHBvcnQgYm90aCBzZWxlY3RvcnMgZm9yIGxlZ2FjeSByZWFzb25zXG4gIHNlbGVjdG9yOiAnW2NsckRyb3Bkb3duVHJpZ2dlcl0sW2NsckRyb3Bkb3duVG9nZ2xlXScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmRyb3Bkb3duLXRvZ2dsZV0nOiAnaXNSb290TGV2ZWxUb2dnbGUnLFxuICAgICdbY2xhc3MuZHJvcGRvd24taXRlbV0nOiAnIWlzUm9vdExldmVsVG9nZ2xlJyxcbiAgICAnW2NsYXNzLmV4cGFuZGFibGVdJzogJyFpc1Jvb3RMZXZlbFRvZ2dsZScsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyb3Bkb3duVHJpZ2dlciB7XG4gIHB1YmxpYyBpc1Jvb3RMZXZlbFRvZ2dsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZHJvcGRvd246IENsckRyb3Bkb3duLCBwcml2YXRlIGlmT3BlblNlcnZpY2U6IElmT3BlblNlcnZpY2UpIHtcbiAgICAvLyBpZiB0aGUgY29udGFpbmluZyBkcm9wZG93biBoYXMgYSBwYXJlbnQsIHRoZW4gdGhpcyBpcyBub3QgdGhlIHJvb3QgbGV2ZWwgb25lXG4gICAgaWYgKGRyb3Bkb3duLnBhcmVudCkge1xuICAgICAgdGhpcy5pc1Jvb3RMZXZlbFRvZ2dsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkRyb3Bkb3duVHJpZ2dlckNsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlmT3BlblNlcnZpY2UudG9nZ2xlV2l0aEV2ZW50KGV2ZW50KTtcbiAgfVxufVxuIl19