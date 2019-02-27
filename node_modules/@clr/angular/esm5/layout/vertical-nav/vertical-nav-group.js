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
var EXPANDED_STATE = 'expanded';
/** @type {?} */
var COLLAPSED_STATE = 'collapsed';
var ClrVerticalNavGroup = /** @class */ (function () {
    function ClrVerticalNavGroup(_itemExpand, _navGroupRegistrationService, _navGroupService, _navService, commonStrings) {
        var _this = this;
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
        this._subscriptions.push(this._itemExpand.expandChange.subscribe(function (value) {
            if (value && _this.expandAnimationState === COLLAPSED_STATE) {
                if (_this._navService.collapsed) {
                    _this._navService.collapsed = false;
                }
                _this.expandAnimationState = EXPANDED_STATE;
            }
            else if (!value && _this.expandAnimationState === EXPANDED_STATE) {
                _this.expandAnimationState = COLLAPSED_STATE;
            }
        }));
        // 1. If the nav is collapsing, close the open nav group + save its state
        // 2. If the nav is expanding, expand the nav group if the previous state was expanded
        this._subscriptions.push(this._navService.animateOnCollapsed.subscribe(function (goingToCollapse) {
            if (goingToCollapse && _this.expanded) {
                _this.wasExpanded = true;
                _this.expandAnimationState = COLLAPSED_STATE;
            }
            else if (!goingToCollapse && _this.wasExpanded) {
                _this.expandGroup();
                _this.wasExpanded = false;
            }
        }));
        // If a link is clicked, expand the nav group
        this._subscriptions.push(this._navGroupService.expandChange.subscribe(function (expand) {
            if (expand && !_this.expanded) {
                _this.expandGroup();
            }
        }));
    }
    Object.defineProperty(ClrVerticalNavGroup.prototype, "expanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemExpand.expanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._itemExpand.expanded !== value) {
                this._itemExpand.expanded = value;
                this.expandedChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrVerticalNavGroup.prototype, "userExpandedInput", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = !!value;
            if (this.expanded !== value) {
                // We have to call toggleExpand because some cases require animations to occur first
                // Directly setting the Expand service value skips the animation and can result in
                // nodes in the DOM but the nav group still being collapsed
                this.toggleExpand();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.expandGroup = /**
     * @return {?}
     */
    function () {
        this.expanded = true;
        // Expanded animation occurs after Expand.expand is set to true
        this.expandAnimationState = EXPANDED_STATE;
    };
    /**
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.collapseGroup = /**
     * @return {?}
     */
    function () {
        // If a Vertical Nav Group toggle button is clicked while the Vertical Nav is in Collapsed state,
        // the Vertical Nav should be expanded first.
        this.expandAnimationState = COLLAPSED_STATE;
    };
    // closes a group after the collapse animation
    // closes a group after the collapse animation
    /**
     * @param {?} $event
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.expandAnimationDone = 
    // closes a group after the collapse animation
    /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.toState === COLLAPSED_STATE) {
            this.expanded = false;
        }
    };
    Object.defineProperty(ClrVerticalNavGroup.prototype, "expandAnimationState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expandAnimationState;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._expandAnimationState) {
                this._expandAnimationState = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.toggleExpand = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // This makes sure that if someone marks a nav group expanded in a collapsed nav
        // the expanded property is switched back to collapsed state.
        if (this._navService.collapsed && this.expanded) {
            this.wasExpanded = true;
            this.expandAnimationState = COLLAPSED_STATE;
        }
    };
    /**
     * @return {?}
     */
    ClrVerticalNavGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this._navGroupRegistrationService.unregisterNavGroup();
    };
    ClrVerticalNavGroup.decorators = [
        { type: Component, args: [{
                    selector: 'clr-vertical-nav-group',
                    template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div class=\"nav-group-content\">\n    <ng-content select=\"[clrVerticalNavLink]\"></ng-content>\n    <button\n        class=\"nav-group-trigger\"\n        type=\"button\"\n        (click)=\"toggleExpand()\">\n        <ng-content select=\"[clrVerticalNavIcon]\"></ng-content>\n        <div class=\"nav-group-text\">\n            <ng-content></ng-content>\n        </div>\n        <clr-icon shape=\"caret\"\n                  class=\"nav-group-trigger-icon\"\n                  [attr.dir]=\"(this.expanded) ? 'down' : 'right'\"\n                  [attr.title]=\"(this.expanded) ? commonStrings.collapse : commonStrings.expand\">\n        </clr-icon>\n    </button>\n</div>\n<!--TODO: This animation needs to be added to the clr-vertical-nav-group-children component-->\n<div class=\"nav-group-children\"\n     [@clrExpand]=\"expandAnimationState\"\n     (@clrExpand.done)=\"expandAnimationDone($event)\">\n    <ng-content select=\"[clrIfExpanded], clr-vertical-nav-group-children\"></ng-content>\n</div>\n",
                    providers: [Expand, VerticalNavGroupService],
                    animations: [
                        trigger('clrExpand', [
                            state(EXPANDED_STATE, style({ height: '*' })),
                            state(COLLAPSED_STATE, style({ height: 0, 'overflow-y': 'hidden', visibility: 'hidden' })),
                            transition(EXPANDED_STATE + " <=> " + COLLAPSED_STATE, animate('0.2s ease-in-out')),
                        ]),
                    ],
                    host: { class: 'nav-group' }
                }] }
    ];
    /** @nocollapse */
    ClrVerticalNavGroup.ctorParameters = function () { return [
        { type: Expand },
        { type: VerticalNavGroupRegistrationService },
        { type: VerticalNavGroupService },
        { type: VerticalNavService },
        { type: ClrCommonStrings }
    ]; };
    ClrVerticalNavGroup.propDecorators = {
        expanded: [{ type: HostBinding, args: ['class.is-expanded',] }],
        userExpandedInput: [{ type: Input, args: ['clrVerticalNavGroupExpanded',] }],
        expandedChange: [{ type: Output, args: ['clrVerticalNavGroupExpandedChange',] }]
    };
    return ClrVerticalNavGroup;
}());
export { ClrVerticalNavGroup };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7SUFFdkUsY0FBYyxHQUFXLFVBQVU7O0lBQ25DLGVBQWUsR0FBVyxXQUFXO0FBRTNDO0lBY0UsNkJBQ1UsV0FBbUIsRUFDbkIsNEJBQWlFLEVBQ2pFLGdCQUF5QyxFQUN6QyxXQUErQixFQUNoQyxhQUErQjtRQUx4QyxpQkFrREM7UUFqRFMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFxQztRQUNqRSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUErQ2hDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBeUJRLG1CQUFjLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FB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OztJQUN6RSwrQ0FBaUQ7O0lBQ2pELDBDQUF1Qzs7SUFDdkMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25FdmVudCwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEV4cGFuZCB9IGZyb20gJy4uLy4uL3V0aWxzL2V4cGFuZC9wcm92aWRlcnMvZXhwYW5kJztcblxuaW1wb3J0IHsgVmVydGljYWxOYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYtZ3JvdXAtcmVnaXN0cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmVydGljYWxOYXZHcm91cFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYtZ3JvdXAuc2VydmljZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbE5hdlNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5jb25zdCBFWFBBTkRFRF9TVEFURTogc3RyaW5nID0gJ2V4cGFuZGVkJztcbmNvbnN0IENPTExBUFNFRF9TVEFURTogc3RyaW5nID0gJ2NvbGxhcHNlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci12ZXJ0aWNhbC1uYXYtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmVydGljYWwtbmF2LWdyb3VwLmh0bWwnLFxuICBwcm92aWRlcnM6IFtFeHBhbmQsIFZlcnRpY2FsTmF2R3JvdXBTZXJ2aWNlXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NsckV4cGFuZCcsIFtcbiAgICAgIHN0YXRlKEVYUEFOREVEX1NUQVRFLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKENPTExBUFNFRF9TVEFURSwgc3R5bGUoeyBoZWlnaHQ6IDAsICdvdmVyZmxvdy15JzogJ2hpZGRlbicsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oYCR7RVhQQU5ERURfU1RBVEV9IDw9PiAke0NPTExBUFNFRF9TVEFURX1gLCBhbmltYXRlKCcwLjJzIGVhc2UtaW4tb3V0JykpLFxuICAgIF0pLFxuICBdLFxuICBob3N0OiB7IGNsYXNzOiAnbmF2LWdyb3VwJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJWZXJ0aWNhbE5hdkdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaXRlbUV4cGFuZDogRXhwYW5kLFxuICAgIHByaXZhdGUgX25hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZTogVmVydGljYWxOYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2R3JvdXBTZXJ2aWNlOiBWZXJ0aWNhbE5hdkdyb3VwU2VydmljZSxcbiAgICBwcml2YXRlIF9uYXZTZXJ2aWNlOiBWZXJ0aWNhbE5hdlNlcnZpY2UsXG4gICAgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3NcbiAgKSB7XG4gICAgdGhpcy5fbmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlLnJlZ2lzdGVyTmF2R3JvdXAoKTtcblxuICAgIC8vIEZJWE1FOiBUaGlzIHN1YnNjcmlwdGlvbiBoYW5kbGVzIGEgY29ybmVyIGNhc2VcbiAgICAvLyBWZXJ0aWNhbCBOYXYgY29sbGFwc2UgcmVxdWlyZXMgdGhlIGFuaW1hdGlvbiB0byBydW4gZmlyc3QgYW5kIHRoZW5cbiAgICAvLyByZW1vdmUgdGhlIG5vZGVzIGZyb20gdGhlIERPTS4gSWYgdGhlIHVzZXIgZGlyZWN0bHkgc2V0cyB0aGUgaW5wdXRcbiAgICAvLyBvbiB0aGUgY2xySWZFeHBhbmRlZCBkaXJlY3RpdmUsIHdlIGhhdmUgbm8gY2hhbmNlIHRvIHJ1biB0aGUgYW5pbWF0aW9uXG4gICAgLy8gYW5kIHdhaXQgZm9yIGl0IHRvIGNvbXBsZXRlLiBUaGlzIHN1YnNjcmlwdGlvbiBtYWtlcyBzdXJlIHRoYXQgdGhlXG4gICAgLy8gYW5pbWF0aW9uIHN0YXRlcyBhcmUgY29ycmVjdCBmb3IgdGhhdCBlZGdlIGNhc2UuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5faXRlbUV4cGFuZC5leHBhbmRDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09IENPTExBUFNFRF9TVEFURSkge1xuICAgICAgICAgIGlmICh0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmF2U2VydmljZS5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9IEVYUEFOREVEX1NUQVRFO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZSAmJiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID09PSBFWFBBTkRFRF9TVEFURSkge1xuICAgICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSBDT0xMQVBTRURfU1RBVEU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIDEuIElmIHRoZSBuYXYgaXMgY29sbGFwc2luZywgY2xvc2UgdGhlIG9wZW4gbmF2IGdyb3VwICsgc2F2ZSBpdHMgc3RhdGVcbiAgICAvLyAyLiBJZiB0aGUgbmF2IGlzIGV4cGFuZGluZywgZXhwYW5kIHRoZSBuYXYgZ3JvdXAgaWYgdGhlIHByZXZpb3VzIHN0YXRlIHdhcyBleHBhbmRlZFxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuX25hdlNlcnZpY2UuYW5pbWF0ZU9uQ29sbGFwc2VkLnN1YnNjcmliZSgoZ29pbmdUb0NvbGxhcHNlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChnb2luZ1RvQ29sbGFwc2UgJiYgdGhpcy5leHBhbmRlZCkge1xuICAgICAgICAgIHRoaXMud2FzRXhwYW5kZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSBDT0xMQVBTRURfU1RBVEU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWdvaW5nVG9Db2xsYXBzZSAmJiB0aGlzLndhc0V4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRHcm91cCgpO1xuICAgICAgICAgIHRoaXMud2FzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gSWYgYSBsaW5rIGlzIGNsaWNrZWQsIGV4cGFuZCB0aGUgbmF2IGdyb3VwXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5fbmF2R3JvdXBTZXJ2aWNlLmV4cGFuZENoYW5nZS5zdWJzY3JpYmUoKGV4cGFuZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAoZXhwYW5kICYmICF0aGlzLmV4cGFuZGVkKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRHcm91cCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHdhc0V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1leHBhbmRlZCcpXG4gIGdldCBleHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbUV4cGFuZC5leHBhbmRlZDtcbiAgfVxuXG4gIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl9pdGVtRXhwYW5kLmV4cGFuZGVkICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5faXRlbUV4cGFuZC5leHBhbmRlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoJ2NsclZlcnRpY2FsTmF2R3JvdXBFeHBhbmRlZCcpXG4gIHNldCB1c2VyRXhwYW5kZWRJbnB1dCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBpZiAodGhpcy5leHBhbmRlZCAhPT0gdmFsdWUpIHtcbiAgICAgIC8vIFdlIGhhdmUgdG8gY2FsbCB0b2dnbGVFeHBhbmQgYmVjYXVzZSBzb21lIGNhc2VzIHJlcXVpcmUgYW5pbWF0aW9ucyB0byBvY2N1ciBmaXJzdFxuICAgICAgLy8gRGlyZWN0bHkgc2V0dGluZyB0aGUgRXhwYW5kIHNlcnZpY2UgdmFsdWUgc2tpcHMgdGhlIGFuaW1hdGlvbiBhbmQgY2FuIHJlc3VsdCBpblxuICAgICAgLy8gbm9kZXMgaW4gdGhlIERPTSBidXQgdGhlIG5hdiBncm91cCBzdGlsbCBiZWluZyBjb2xsYXBzZWRcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kKCk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgnY2xyVmVydGljYWxOYXZHcm91cEV4cGFuZGVkQ2hhbmdlJykgZXhwYW5kZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIF9leHBhbmRBbmltYXRpb25TdGF0ZTogc3RyaW5nID0gQ09MTEFQU0VEX1NUQVRFO1xuXG4gIGV4cGFuZEdyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuICAgIC8vIEV4cGFuZGVkIGFuaW1hdGlvbiBvY2N1cnMgYWZ0ZXIgRXhwYW5kLmV4cGFuZCBpcyBzZXQgdG8gdHJ1ZVxuICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSBFWFBBTkRFRF9TVEFURTtcbiAgfVxuXG4gIGNvbGxhcHNlR3JvdXAoKTogdm9pZCB7XG4gICAgLy8gSWYgYSBWZXJ0aWNhbCBOYXYgR3JvdXAgdG9nZ2xlIGJ1dHRvbiBpcyBjbGlja2VkIHdoaWxlIHRoZSBWZXJ0aWNhbCBOYXYgaXMgaW4gQ29sbGFwc2VkIHN0YXRlLFxuICAgIC8vIHRoZSBWZXJ0aWNhbCBOYXYgc2hvdWxkIGJlIGV4cGFuZGVkIGZpcnN0LlxuICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSBDT0xMQVBTRURfU1RBVEU7XG4gIH1cblxuICAvLyBjbG9zZXMgYSBncm91cCBhZnRlciB0aGUgY29sbGFwc2UgYW5pbWF0aW9uXG4gIGV4cGFuZEFuaW1hdGlvbkRvbmUoJGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIGlmICgkZXZlbnQudG9TdGF0ZSA9PT0gQ09MTEFQU0VEX1NUQVRFKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGV4cGFuZEFuaW1hdGlvblN0YXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZEFuaW1hdGlvblN0YXRlO1xuICB9XG5cbiAgc2V0IGV4cGFuZEFuaW1hdGlvblN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2V4cGFuZEFuaW1hdGlvblN0YXRlKSB7XG4gICAgICB0aGlzLl9leHBhbmRBbmltYXRpb25TdGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUV4cGFuZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgdGhpcy5jb2xsYXBzZUdyb3VwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIG5hdiBpcyBjb2xsYXNwZWQsIGZpcnN0IG9wZW4gdGhlIG5hdlxuICAgICAgaWYgKHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyB0aGVuIGV4cGFuZCB0aGUgbmF2IGdyb3VwXG4gICAgICB0aGlzLmV4cGFuZEdyb3VwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IGlmIHNvbWVvbmUgbWFya3MgYSBuYXYgZ3JvdXAgZXhwYW5kZWQgaW4gYSBjb2xsYXBzZWQgbmF2XG4gICAgLy8gdGhlIGV4cGFuZGVkIHByb3BlcnR5IGlzIHN3aXRjaGVkIGJhY2sgdG8gY29sbGFwc2VkIHN0YXRlLlxuICAgIGlmICh0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZCAmJiB0aGlzLmV4cGFuZGVkKSB7XG4gICAgICB0aGlzLndhc0V4cGFuZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSBDT0xMQVBTRURfU1RBVEU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX25hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZS51bnJlZ2lzdGVyTmF2R3JvdXAoKTtcbiAgfVxufVxuIl19