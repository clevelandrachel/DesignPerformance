/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { VerticalNavGroupRegistrationService } from './providers/vertical-nav-group-registration.service';
import { VerticalNavGroupService } from './providers/vertical-nav-group.service';
import { VerticalNavService } from './providers/vertical-nav.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
/** @type {?} */
const EXPANDED_STATE = 'expanded';
/** @type {?} */
const COLLAPSED_STATE = 'collapsed';
export class ClrVerticalNavGroup {
    /**
     * @param {?} _itemExpand
     * @param {?} _navGroupRegistrationService
     * @param {?} _navGroupService
     * @param {?} _navService
     * @param {?} commonStrings
     */
    constructor(_itemExpand, _navGroupRegistrationService, _navGroupService, _navService, commonStrings) {
        this._itemExpand = _itemExpand;
        this._navGroupRegistrationService = _navGroupRegistrationService;
        this._navGroupService = _navGroupService;
        this._navService = _navService;
        this.commonStrings = commonStrings;
        this.wasExpanded = false;
        this.expandedChange = new EventEmitter(true);
        this._subscriptions = [];
        this._expandAnimationState = COLLAPSED_STATE;
        this._navGroupRegistrationService.registerNavGroup();
        // FIXME: This subscription handles a corner case
        // Vertical Nav collapse requires the animation to run first and then
        // remove the nodes from the DOM. If the user directly sets the input
        // on the clrIfExpanded directive, we have no chance to run the animation
        // and wait for it to complete. This subscription makes sure that the
        // animation states are correct for that edge case.
        this._subscriptions.push(this._itemExpand.expandChange.subscribe(value => {
            if (value && this.expandAnimationState === COLLAPSED_STATE) {
                if (this._navService.collapsed) {
                    this._navService.collapsed = false;
                }
                this.expandAnimationState = EXPANDED_STATE;
            }
            else if (!value && this.expandAnimationState === EXPANDED_STATE) {
                this.expandAnimationState = COLLAPSED_STATE;
            }
        }));
        // 1. If the nav is collapsing, close the open nav group + save its state
        // 2. If the nav is expanding, expand the nav group if the previous state was expanded
        this._subscriptions.push(this._navService.animateOnCollapsed.subscribe((goingToCollapse) => {
            if (goingToCollapse && this.expanded) {
                this.wasExpanded = true;
                this.expandAnimationState = COLLAPSED_STATE;
            }
            else if (!goingToCollapse && this.wasExpanded) {
                this.expandGroup();
                this.wasExpanded = false;
            }
        }));
        // If a link is clicked, expand the nav group
        this._subscriptions.push(this._navGroupService.expandChange.subscribe((expand) => {
            if (expand && !this.expanded) {
                this.expandGroup();
            }
        }));
    }
    /**
     * @return {?}
     */
    get expanded() {
        return this._itemExpand.expanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expanded(value) {
        if (this._itemExpand.expanded !== value) {
            this._itemExpand.expanded = value;
            this.expandedChange.emit(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set userExpandedInput(value) {
        value = !!value;
        if (this.expanded !== value) {
            // We have to call toggleExpand because some cases require animations to occur first
            // Directly setting the Expand service value skips the animation and can result in
            // nodes in the DOM but the nav group still being collapsed
            this.toggleExpand();
        }
    }
    /**
     * @return {?}
     */
    expandGroup() {
        this.expanded = true;
        // Expanded animation occurs after Expand.expand is set to true
        this.expandAnimationState = EXPANDED_STATE;
    }
    /**
     * @return {?}
     */
    collapseGroup() {
        // If a Vertical Nav Group toggle button is clicked while the Vertical Nav is in Collapsed state,
        // the Vertical Nav should be expanded first.
        this.expandAnimationState = COLLAPSED_STATE;
    }
    // closes a group after the collapse animation
    /**
     * @param {?} $event
     * @return {?}
     */
    expandAnimationDone($event) {
        if ($event.toState === COLLAPSED_STATE) {
            this.expanded = false;
        }
    }
    /**
     * @return {?}
     */
    get expandAnimationState() {
        return this._expandAnimationState;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandAnimationState(value) {
        if (value !== this._expandAnimationState) {
            this._expandAnimationState = value;
        }
    }
    /**
     * @return {?}
     */
    toggleExpand() {
        if (this.expanded) {
            this.collapseGroup();
        }
        else {
            // If nav is collasped, first open the nav
            if (this._navService.collapsed) {
                this._navService.collapsed = false;
            }
            // then expand the nav group
            this.expandGroup();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // This makes sure that if someone marks a nav group expanded in a collapsed nav
        // the expanded property is switched back to collapsed state.
        if (this._navService.collapsed && this.expanded) {
            this.wasExpanded = true;
            this.expandAnimationState = COLLAPSED_STATE;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.forEach((sub) => sub.unsubscribe());
        this._navGroupRegistrationService.unregisterNavGroup();
    }
}
ClrVerticalNavGroup.decorators = [
    { type: Component, args: [{
                selector: 'clr-vertical-nav-group',
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div class=\"nav-group-content\">\n    <ng-content select=\"[clrVerticalNavLink]\"></ng-content>\n    <button\n        class=\"nav-group-trigger\"\n        type=\"button\"\n        (click)=\"toggleExpand()\">\n        <ng-content select=\"[clrVerticalNavIcon]\"></ng-content>\n        <div class=\"nav-group-text\">\n            <ng-content></ng-content>\n        </div>\n        <clr-icon shape=\"caret\"\n                  class=\"nav-group-trigger-icon\"\n                  [attr.dir]=\"(this.expanded) ? 'down' : 'right'\"\n                  [attr.title]=\"(this.expanded) ? commonStrings.collapse : commonStrings.expand\">\n        </clr-icon>\n    </button>\n</div>\n<!--TODO: This animation needs to be added to the clr-vertical-nav-group-children component-->\n<div class=\"nav-group-children\"\n     [@clrExpand]=\"expandAnimationState\"\n     (@clrExpand.done)=\"expandAnimationDone($event)\">\n    <ng-content select=\"[clrIfExpanded], clr-vertical-nav-group-children\"></ng-content>\n</div>\n",
                providers: [Expand, VerticalNavGroupService],
                animations: [
                    trigger('clrExpand', [
                        state(EXPANDED_STATE, style({ height: '*' })),
                        state(COLLAPSED_STATE, style({ height: 0, 'overflow-y': 'hidden', visibility: 'hidden' })),
                        transition(`${EXPANDED_STATE} <=> ${COLLAPSED_STATE}`, animate('0.2s ease-in-out')),
                    ]),
                ],
                host: { class: 'nav-group' }
            }] }
];
/** @nocollapse */
ClrVerticalNavGroup.ctorParameters = () => [
    { type: Expand },
    { type: VerticalNavGroupRegistrationService },
    { type: VerticalNavGroupService },
    { type: VerticalNavService },
    { type: ClrCommonStrings }
];
ClrVerticalNavGroup.propDecorators = {
    expanded: [{ type: HostBinding, args: ['class.is-expanded',] }],
    userExpandedInput: [{ type: Input, args: ['clrVerticalNavGroupExpanded',] }],
    expandedChange: [{ type: Output, args: ['clrVerticalNavGroupExpandedChange',] }]
};
if (false) {
    /** @type {?} */
    ClrVerticalNavGroup.prototype.wasExpanded;
    /** @type {?} */
    ClrVerticalNavGroup.prototype.expandedChange;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._subscriptions;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._expandAnimationState;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._itemExpand;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._navGroupRegistrationService;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._navGroupService;
    /** @type {?} */
    ClrVerticalNavGroup.prototype._navService;
    /** @type {?} */
    ClrVerticalNavGroup.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7TUFFdkUsY0FBYyxHQUFXLFVBQVU7O01BQ25DLGVBQWUsR0FBVyxXQUFXO0FBZTNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBQzlCLFlBQ1UsV0FBbUIsRUFDbkIsNEJBQWlFLEVBQ2pFLGdCQUF5QyxFQUN6QyxXQUErQixFQUNoQyxhQUErQjtRQUo5QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFDO1FBQ2pFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFDekMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQStDaEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUF5QlEsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFN0csbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRXBDLDBCQUFxQixHQUFXLGVBQWUsQ0FBQztRQTFFdEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFckQsaURBQWlEO1FBQ2pELHFFQUFxRTtRQUNyRSxxRUFBcUU7UUFDckUseUVBQXlFO1FBQ3pFLHFFQUFxRTtRQUNyRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssZUFBZSxFQUFFO2dCQUMxRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO29CQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssY0FBYyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLHlFQUF5RTtRQUN6RSxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBd0IsRUFBRSxFQUFFO1lBQ3pFLElBQUksZUFBZSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDO2FBQzdDO2lCQUFNLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRiw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDL0QsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUlELElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBRUQsSUFDSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2xDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDM0Isb0ZBQW9GO1lBQ3BGLGtGQUFrRjtZQUNsRiwyREFBMkQ7WUFDM0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQVFELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLGlHQUFpRztRQUNqRyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFHRCxtQkFBbUIsQ0FBQyxNQUFzQjtRQUN4QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssZUFBZSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCwwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3BDO1lBQ0QsNEJBQTRCO1lBQzVCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsZ0ZBQWdGO1FBQ2hGLDZEQUE2RDtRQUM3RCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN6RCxDQUFDOzs7WUF2SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHl0Q0FBd0M7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztnQkFDNUMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUMxRixVQUFVLENBQUMsR0FBRyxjQUFjLFFBQVEsZUFBZSxFQUFFLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7cUJBQ3BGLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTthQUM3Qjs7OztZQXRCUSxNQUFNO1lBRU4sbUNBQW1DO1lBQ25DLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIsZ0JBQWdCOzs7dUJBeUV0QixXQUFXLFNBQUMsbUJBQW1CO2dDQVkvQixLQUFLLFNBQUMsNkJBQTZCOzZCQVduQyxNQUFNLFNBQUMsbUNBQW1DOzs7O0lBekIzQywwQ0FBcUM7O0lBeUJyQyw2Q0FBcUg7O0lBRXJILDZDQUE0Qzs7SUFFNUMsb0RBQXdEOztJQWhGdEQsMENBQTJCOztJQUMzQiwyREFBeUU7O0lBQ3pFLCtDQUFpRDs7SUFDakQsMENBQXVDOztJQUN2Qyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvbkV2ZW50LCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRXhwYW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhwYW5kL3Byb3ZpZGVycy9leHBhbmQnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbE5hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi1ncm91cC1yZWdpc3RyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbE5hdkdyb3VwU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi1ncm91cC5zZXJ2aWNlJztcbmltcG9ydCB7IFZlcnRpY2FsTmF2U2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IENsckNvbW1vblN0cmluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9pMThuL2NvbW1vbi1zdHJpbmdzLmludGVyZmFjZSc7XG5cbmNvbnN0IEVYUEFOREVEX1NUQVRFOiBzdHJpbmcgPSAnZXhwYW5kZWQnO1xuY29uc3QgQ09MTEFQU0VEX1NUQVRFOiBzdHJpbmcgPSAnY29sbGFwc2VkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXZlcnRpY2FsLW5hdi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZXJ0aWNhbC1uYXYtZ3JvdXAuaHRtbCcsXG4gIHByb3ZpZGVyczogW0V4cGFuZCwgVmVydGljYWxOYXZHcm91cFNlcnZpY2VdLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignY2xyRXhwYW5kJywgW1xuICAgICAgc3RhdGUoRVhQQU5ERURfU1RBVEUsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgc3RhdGUoQ09MTEFQU0VEX1NUQVRFLCBzdHlsZSh7IGhlaWdodDogMCwgJ292ZXJmbG93LXknOiAnaGlkZGVuJywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgICAgdHJhbnNpdGlvbihgJHtFWFBBTkRFRF9TVEFURX0gPD0+ICR7Q09MTEFQU0VEX1NUQVRFfWAsIGFuaW1hdGUoJzAuMnMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG4gIGhvc3Q6IHsgY2xhc3M6ICduYXYtZ3JvdXAnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsclZlcnRpY2FsTmF2R3JvdXAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9pdGVtRXhwYW5kOiBFeHBhbmQsXG4gICAgcHJpdmF0ZSBfbmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlOiBWZXJ0aWNhbE5hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9uYXZHcm91cFNlcnZpY2U6IFZlcnRpY2FsTmF2R3JvdXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25hdlNlcnZpY2U6IFZlcnRpY2FsTmF2U2VydmljZSxcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5nc1xuICApIHtcbiAgICB0aGlzLl9uYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2UucmVnaXN0ZXJOYXZHcm91cCgpO1xuXG4gICAgLy8gRklYTUU6IFRoaXMgc3Vic2NyaXB0aW9uIGhhbmRsZXMgYSBjb3JuZXIgY2FzZVxuICAgIC8vIFZlcnRpY2FsIE5hdiBjb2xsYXBzZSByZXF1aXJlcyB0aGUgYW5pbWF0aW9uIHRvIHJ1biBmaXJzdCBhbmQgdGhlblxuICAgIC8vIHJlbW92ZSB0aGUgbm9kZXMgZnJvbSB0aGUgRE9NLiBJZiB0aGUgdXNlciBkaXJlY3RseSBzZXRzIHRoZSBpbnB1dFxuICAgIC8vIG9uIHRoZSBjbHJJZkV4cGFuZGVkIGRpcmVjdGl2ZSwgd2UgaGF2ZSBubyBjaGFuY2UgdG8gcnVuIHRoZSBhbmltYXRpb25cbiAgICAvLyBhbmQgd2FpdCBmb3IgaXQgdG8gY29tcGxldGUuIFRoaXMgc3Vic2NyaXB0aW9uIG1ha2VzIHN1cmUgdGhhdCB0aGVcbiAgICAvLyBhbmltYXRpb24gc3RhdGVzIGFyZSBjb3JyZWN0IGZvciB0aGF0IGVkZ2UgY2FzZS5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9pdGVtRXhwYW5kLmV4cGFuZENoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9PT0gQ09MTEFQU0VEX1NUQVRFKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gRVhQQU5ERURfU1RBVEU7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09IEVYUEFOREVEX1NUQVRFKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IENPTExBUFNFRF9TVEFURTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gMS4gSWYgdGhlIG5hdiBpcyBjb2xsYXBzaW5nLCBjbG9zZSB0aGUgb3BlbiBuYXYgZ3JvdXAgKyBzYXZlIGl0cyBzdGF0ZVxuICAgIC8vIDIuIElmIHRoZSBuYXYgaXMgZXhwYW5kaW5nLCBleHBhbmQgdGhlIG5hdiBncm91cCBpZiB0aGUgcHJldmlvdXMgc3RhdGUgd2FzIGV4cGFuZGVkXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fbmF2U2VydmljZS5hbmltYXRlT25Db2xsYXBzZWQuc3Vic2NyaWJlKChnb2luZ1RvQ29sbGFwc2U6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGdvaW5nVG9Db2xsYXBzZSAmJiB0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy53YXNFeHBhbmRlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IENPTExBUFNFRF9TVEFURTtcbiAgICAgICAgfSBlbHNlIGlmICghZ29pbmdUb0NvbGxhcHNlICYmIHRoaXMud2FzRXhwYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZEdyb3VwKCk7XG4gICAgICAgICAgdGhpcy53YXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiBhIGxpbmsgaXMgY2xpY2tlZCwgZXhwYW5kIHRoZSBuYXYgZ3JvdXBcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLl9uYXZHcm91cFNlcnZpY2UuZXhwYW5kQ2hhbmdlLnN1YnNjcmliZSgoZXhwYW5kOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChleHBhbmQgJiYgIXRoaXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICB0aGlzLmV4cGFuZEdyb3VwKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgd2FzRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWV4cGFuZGVkJylcbiAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtRXhwYW5kLmV4cGFuZGVkO1xuICB9XG5cbiAgc2V0IGV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1FeHBhbmQuZXhwYW5kZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9pdGVtRXhwYW5kLmV4cGFuZGVkID0gdmFsdWU7XG4gICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgnY2xyVmVydGljYWxOYXZHcm91cEV4cGFuZGVkJylcbiAgc2V0IHVzZXJFeHBhbmRlZElucHV0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIGlmICh0aGlzLmV4cGFuZGVkICE9PSB2YWx1ZSkge1xuICAgICAgLy8gV2UgaGF2ZSB0byBjYWxsIHRvZ2dsZUV4cGFuZCBiZWNhdXNlIHNvbWUgY2FzZXMgcmVxdWlyZSBhbmltYXRpb25zIHRvIG9jY3VyIGZpcnN0XG4gICAgICAvLyBEaXJlY3RseSBzZXR0aW5nIHRoZSBFeHBhbmQgc2VydmljZSB2YWx1ZSBza2lwcyB0aGUgYW5pbWF0aW9uIGFuZCBjYW4gcmVzdWx0IGluXG4gICAgICAvLyBub2RlcyBpbiB0aGUgRE9NIGJ1dCB0aGUgbmF2IGdyb3VwIHN0aWxsIGJlaW5nIGNvbGxhcHNlZFxuICAgICAgdGhpcy50b2dnbGVFeHBhbmQoKTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCdjbHJWZXJ0aWNhbE5hdkdyb3VwRXhwYW5kZWRDaGFuZ2UnKSBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX2V4cGFuZEFuaW1hdGlvblN0YXRlOiBzdHJpbmcgPSBDT0xMQVBTRURfU1RBVEU7XG5cbiAgZXhwYW5kR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gICAgLy8gRXhwYW5kZWQgYW5pbWF0aW9uIG9jY3VycyBhZnRlciBFeHBhbmQuZXhwYW5kIGlzIHNldCB0byB0cnVlXG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IEVYUEFOREVEX1NUQVRFO1xuICB9XG5cbiAgY29sbGFwc2VHcm91cCgpOiB2b2lkIHtcbiAgICAvLyBJZiBhIFZlcnRpY2FsIE5hdiBHcm91cCB0b2dnbGUgYnV0dG9uIGlzIGNsaWNrZWQgd2hpbGUgdGhlIFZlcnRpY2FsIE5hdiBpcyBpbiBDb2xsYXBzZWQgc3RhdGUsXG4gICAgLy8gdGhlIFZlcnRpY2FsIE5hdiBzaG91bGQgYmUgZXhwYW5kZWQgZmlyc3QuXG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IENPTExBUFNFRF9TVEFURTtcbiAgfVxuXG4gIC8vIGNsb3NlcyBhIGdyb3VwIGFmdGVyIHRoZSBjb2xsYXBzZSBhbmltYXRpb25cbiAgZXhwYW5kQW5pbWF0aW9uRG9uZSgkZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKCRldmVudC50b1N0YXRlID09PSBDT0xMQVBTRURfU1RBVEUpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZXhwYW5kQW5pbWF0aW9uU3RhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kQW5pbWF0aW9uU3RhdGU7XG4gIH1cblxuICBzZXQgZXhwYW5kQW5pbWF0aW9uU3RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fZXhwYW5kQW5pbWF0aW9uU3RhdGUpIHtcbiAgICAgIHRoaXMuX2V4cGFuZEFuaW1hdGlvblN0YXRlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRXhwYW5kKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlR3JvdXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgbmF2IGlzIGNvbGxhc3BlZCwgZmlyc3Qgb3BlbiB0aGUgbmF2XG4gICAgICBpZiAodGhpcy5fbmF2U2VydmljZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5fbmF2U2VydmljZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHRoZW4gZXhwYW5kIHRoZSBuYXYgZ3JvdXBcbiAgICAgIHRoaXMuZXhwYW5kR3JvdXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgaWYgc29tZW9uZSBtYXJrcyBhIG5hdiBncm91cCBleHBhbmRlZCBpbiBhIGNvbGxhcHNlZCBuYXZcbiAgICAvLyB0aGUgZXhwYW5kZWQgcHJvcGVydHkgaXMgc3dpdGNoZWQgYmFjayB0byBjb2xsYXBzZWQgc3RhdGUuXG4gICAgaWYgKHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2VkICYmIHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMud2FzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IENPTExBUFNFRF9TVEFURTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5fbmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlLnVucmVnaXN0ZXJOYXZHcm91cCgpO1xuICB9XG59XG4iXX0=