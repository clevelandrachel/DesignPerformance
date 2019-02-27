/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VerticalNavGroupRegistrationService } from './providers/vertical-nav-group-registration.service';
import { VerticalNavIconService } from './providers/vertical-nav-icon.service';
import { VerticalNavService } from './providers/vertical-nav.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
var ClrVerticalNav = /** @class */ (function () {
    function ClrVerticalNav(_navService, _navIconService, _navGroupRegistrationService, commonStrings) {
        var _this = this;
        this._navService = _navService;
        this._navIconService = _navIconService;
        this._navGroupRegistrationService = _navGroupRegistrationService;
        this.commonStrings = commonStrings;
        this._collapsedChanged = new EventEmitter(true);
        this._sub = this._navService.collapsedChanged.subscribe(function (value) {
            _this._collapsedChanged.emit(value);
        });
    }
    Object.defineProperty(ClrVerticalNav.prototype, "collapsible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navService.collapsible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._navService.collapsible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrVerticalNav.prototype, "collapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navService.collapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._navService.collapsed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrVerticalNav.prototype, "hasNavGroups", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navGroupRegistrationService.navGroupCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrVerticalNav.prototype, "hasIcons", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navIconService.hasIcons;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrVerticalNav.prototype.toggleByButton = /**
     * @return {?}
     */
    function () {
        this.collapsed = !this.collapsed;
    };
    /**
     * @return {?}
     */
    ClrVerticalNav.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._sub.unsubscribe();
    };
    ClrVerticalNav.decorators = [
        { type: Component, args: [{
                    selector: 'clr-vertical-nav',
                    template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<button type=\"button\" class=\"nav-trigger\"\n        [class.on-collapse]=\"collapsed\"\n        (click)=\"toggleByButton()\"\n        *ngIf=\"collapsible\">\n    <clr-icon shape=\"angle-double\"\n              class=\"nav-trigger-icon\"\n              [attr.dir]=\"(this.collapsed) ? 'right' : 'left'\"\n              [attr.title]=\"(this.collapsed) ? commonStrings.expand : commonStrings.collapse\"></clr-icon>\n</button>\n<!-- Click handler on .nav-content is bad but required :-( -->\n<div class=\"nav-content\">\n    <ng-content></ng-content>\n    <button (click)=\"collapsed = false\" class=\"nav-btn\" *ngIf=\"collapsible && collapsed\"></button>\n</div>\n",
                    providers: [VerticalNavService, VerticalNavIconService, VerticalNavGroupRegistrationService],
                    host: {
                        class: 'clr-vertical-nav',
                        '[class.is-collapsed]': 'collapsed',
                        '[class.has-nav-groups]': 'hasNavGroups',
                        '[class.has-icons]': 'hasIcons',
                    }
                }] }
    ];
    /** @nocollapse */
    ClrVerticalNav.ctorParameters = function () { return [
        { type: VerticalNavService },
        { type: VerticalNavIconService },
        { type: VerticalNavGroupRegistrationService },
        { type: ClrCommonStrings }
    ]; };
    ClrVerticalNav.propDecorators = {
        collapsible: [{ type: Input, args: ['clrVerticalNavCollapsible',] }],
        collapsed: [{ type: Input, args: ['clrVerticalNavCollapsed',] }],
        _collapsedChanged: [{ type: Output, args: ['clrVerticalNavCollapsedChange',] }]
    };
    return ClrVerticalNav;
}());
export { ClrVerticalNav };
if (false) {
    /** @type {?} */
    ClrVerticalNav.prototype._collapsedChanged;
    /** @type {?} */
    ClrVerticalNav.prototype._sub;
    /** @type {?} */
    ClrVerticalNav.prototype._navService;
    /** @type {?} */
    ClrVerticalNav.prototype._navIconService;
    /** @type {?} */
    ClrVerticalNav.prototype._navGroupRegistrationService;
    /** @type {?} */
    ClrVerticalNav.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RTtJQTJDRSx3QkFDVSxXQUErQixFQUMvQixlQUF1QyxFQUN2Qyw0QkFBaUUsRUFDbEUsYUFBK0I7UUFKeEMsaUJBU0M7UUFSUyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQXdCO1FBQ3ZDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBcUM7UUFDbEUsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBaEJoQyxzQkFBaUIsR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFrQmpGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBeENELHNCQUFJLHVDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3RDLENBQUM7Ozs7O1FBRUQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7SUFPRCxzQkFBSSxxQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxDQUFDOzs7OztRQUVELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQzs7O09BTEE7SUFVRCxzQkFBSSx3Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7OztJQWVELHVDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscTRCQUFrQztvQkFDbEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsbUNBQW1DLENBQUM7b0JBQzVGLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsa0JBQWtCO3dCQUN6QixzQkFBc0IsRUFBRSxXQUFXO3dCQUNuQyx3QkFBd0IsRUFBRSxjQUFjO3dCQUN4QyxtQkFBbUIsRUFBRSxVQUFVO3FCQUNoQztpQkFDRjs7OztnQkFiUSxrQkFBa0I7Z0JBRGxCLHNCQUFzQjtnQkFEdEIsbUNBQW1DO2dCQUduQyxnQkFBZ0I7Ozs4QkFrQnRCLEtBQUssU0FBQywyQkFBMkI7NEJBU2pDLEtBQUssU0FBQyx5QkFBeUI7b0NBSy9CLE1BQU0sU0FBQywrQkFBK0I7O0lBK0J6QyxxQkFBQztDQUFBLEFBN0RELElBNkRDO1NBbERZLGNBQWM7OztJQW1CekIsMkNBQ21GOztJQVVuRiw4QkFBMkI7O0lBR3pCLHFDQUF1Qzs7SUFDdkMseUNBQStDOztJQUMvQyxzREFBeUU7O0lBQ3pFLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZlcnRpY2FsTmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvdmVydGljYWwtbmF2LWdyb3VwLXJlZ2lzdHJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFZlcnRpY2FsTmF2SWNvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYtaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFZlcnRpY2FsTmF2U2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IENsckNvbW1vblN0cmluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9pMThuL2NvbW1vbi1zdHJpbmdzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci12ZXJ0aWNhbC1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmVydGljYWwtbmF2Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtWZXJ0aWNhbE5hdlNlcnZpY2UsIFZlcnRpY2FsTmF2SWNvblNlcnZpY2UsIFZlcnRpY2FsTmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnY2xyLXZlcnRpY2FsLW5hdicsXG4gICAgJ1tjbGFzcy5pcy1jb2xsYXBzZWRdJzogJ2NvbGxhcHNlZCcsXG4gICAgJ1tjbGFzcy5oYXMtbmF2LWdyb3Vwc10nOiAnaGFzTmF2R3JvdXBzJyxcbiAgICAnW2NsYXNzLmhhcy1pY29uc10nOiAnaGFzSWNvbnMnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJWZXJ0aWNhbE5hdiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGdldCBjb2xsYXBzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2U2VydmljZS5jb2xsYXBzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyVmVydGljYWxOYXZDb2xsYXBzaWJsZScpXG4gIHNldCBjb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2libGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2VkO1xuICB9XG5cbiAgQElucHV0KCdjbHJWZXJ0aWNhbE5hdkNvbGxhcHNlZCcpXG4gIHNldCBjb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZCA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgnY2xyVmVydGljYWxOYXZDb2xsYXBzZWRDaGFuZ2UnKVxuICBwcml2YXRlIF9jb2xsYXBzZWRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIGdldCBoYXNOYXZHcm91cHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZS5uYXZHcm91cENvdW50ID4gMDtcbiAgfVxuXG4gIGdldCBoYXNJY29ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2SWNvblNlcnZpY2UuaGFzSWNvbnM7XG4gIH1cblxuICBwcml2YXRlIF9zdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uYXZTZXJ2aWNlOiBWZXJ0aWNhbE5hdlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2SWNvblNlcnZpY2U6IFZlcnRpY2FsTmF2SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmF2R3JvdXBSZWdpc3RyYXRpb25TZXJ2aWNlOiBWZXJ0aWNhbE5hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5nc1xuICApIHtcbiAgICB0aGlzLl9zdWIgPSB0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZENoYW5nZWQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX2NvbGxhcHNlZENoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVCeUJ1dHRvbigpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N1Yi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=