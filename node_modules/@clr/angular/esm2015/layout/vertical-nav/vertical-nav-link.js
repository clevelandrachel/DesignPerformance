/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, HostListener, Optional } from '@angular/core';
import { VerticalNavGroupService } from './providers/vertical-nav-group.service';
export class ClrVerticalNavLink {
    /**
     * @param {?} _navGroupService
     */
    constructor(_navGroupService) {
        this._navGroupService = _navGroupService;
    }
    /**
     * @return {?}
     */
    expandParentNavGroup() {
        if (this._navGroupService) {
            this._navGroupService.expand();
        }
    }
}
ClrVerticalNavLink.decorators = [
    { type: Component, args: [{
                selector: '[clrVerticalNavLink]',
                template: `
        <ng-content select="[clrVerticalNavIcon]"></ng-content>
        <span class="nav-text">
            <ng-content></ng-content>    
        </span>
    `,
                host: { class: 'nav-link' }
            }] }
];
/** @nocollapse */
ClrVerticalNavLink.ctorParameters = () => [
    { type: VerticalNavGroupService, decorators: [{ type: Optional }] }
];
ClrVerticalNavLink.propDecorators = {
    expandParentNavGroup: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    ClrVerticalNavLink.prototype._navGroupService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWxpbmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQVlqRixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQWdDLGdCQUF5QztRQUF6QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO0lBQUcsQ0FBQzs7OztJQUd0RSxvQkFBb0I7UUFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7O0tBS1A7Z0JBQ0gsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTthQUM1Qjs7OztZQVhRLHVCQUF1Qix1QkFhakIsUUFBUTs7O21DQUVwQixZQUFZLFNBQUMsT0FBTzs7OztJQUZULDhDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVydGljYWxOYXZHcm91cFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYtZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tjbHJWZXJ0aWNhbE5hdkxpbmtdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NsclZlcnRpY2FsTmF2SWNvbl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gICAgXG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuICBob3N0OiB7IGNsYXNzOiAnbmF2LWxpbmsnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsclZlcnRpY2FsTmF2TGluayB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX25hdkdyb3VwU2VydmljZTogVmVydGljYWxOYXZHcm91cFNlcnZpY2UpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgZXhwYW5kUGFyZW50TmF2R3JvdXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX25hdkdyb3VwU2VydmljZSkge1xuICAgICAgdGhpcy5fbmF2R3JvdXBTZXJ2aWNlLmV4cGFuZCgpO1xuICAgIH1cbiAgfVxufVxuIl19