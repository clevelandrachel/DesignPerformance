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
export class ClrVerticalNav {
    /**
     * @param {?} _navService
     * @param {?} _navIconService
     * @param {?} _navGroupRegistrationService
     * @param {?} commonStrings
     */
    constructor(_navService, _navIconService, _navGroupRegistrationService, commonStrings) {
        this._navService = _navService;
        this._navIconService = _navIconService;
        this._navGroupRegistrationService = _navGroupRegistrationService;
        this.commonStrings = commonStrings;
        this._collapsedChanged = new EventEmitter(true);
        this._sub = this._navService.collapsedChanged.subscribe(value => {
            this._collapsedChanged.emit(value);
        });
    }
    /**
     * @return {?}
     */
    get collapsible() {
        return this._navService.collapsible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collapsible(value) {
        this._navService.collapsible = value;
    }
    /**
     * @return {?}
     */
    get collapsed() {
        return this._navService.collapsed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collapsed(value) {
        this._navService.collapsed = value;
    }
    /**
     * @return {?}
     */
    get hasNavGroups() {
        return this._navGroupRegistrationService.navGroupCount > 0;
    }
    /**
     * @return {?}
     */
    get hasIcons() {
        return this._navIconService.hasIcons;
    }
    /**
     * @return {?}
     */
    toggleByButton() {
        this.collapsed = !this.collapsed;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
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
ClrVerticalNav.ctorParameters = () => [
    { type: VerticalNavService },
    { type: VerticalNavIconService },
    { type: VerticalNavGroupRegistrationService },
    { type: ClrCommonStrings }
];
ClrVerticalNav.propDecorators = {
    collapsible: [{ type: Input, args: ['clrVerticalNavCollapsible',] }],
    collapsed: [{ type: Input, args: ['clrVerticalNavCollapsed',] }],
    _collapsedChanged: [{ type: Output, args: ['clrVerticalNavCollapsedChange',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdsRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQWE3RSxNQUFNLE9BQU8sY0FBYzs7Ozs7OztJQWdDekIsWUFDVSxXQUErQixFQUMvQixlQUF1QyxFQUN2Qyw0QkFBaUUsRUFDbEUsYUFBK0I7UUFIOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQXFDO1FBQ2xFLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQWhCaEMsc0JBQWlCLEdBQTBCLElBQUksWUFBWSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBa0JqRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBeENELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFLRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFlRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscTRCQUFrQztnQkFDbEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsbUNBQW1DLENBQUM7Z0JBQzVGLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixzQkFBc0IsRUFBRSxXQUFXO29CQUNuQyx3QkFBd0IsRUFBRSxjQUFjO29CQUN4QyxtQkFBbUIsRUFBRSxVQUFVO2lCQUNoQzthQUNGOzs7O1lBYlEsa0JBQWtCO1lBRGxCLHNCQUFzQjtZQUR0QixtQ0FBbUM7WUFHbkMsZ0JBQWdCOzs7MEJBa0J0QixLQUFLLFNBQUMsMkJBQTJCO3dCQVNqQyxLQUFLLFNBQUMseUJBQXlCO2dDQUsvQixNQUFNLFNBQUMsK0JBQStCOzs7O0lBQXZDLDJDQUNtRjs7SUFVbkYsOEJBQTJCOztJQUd6QixxQ0FBdUM7O0lBQ3ZDLHlDQUErQzs7SUFDL0Msc0RBQXlFOztJQUN6RSx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbE5hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3ZlcnRpY2FsLW5hdi1ncm91cC1yZWdpc3RyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbE5hdkljb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvdmVydGljYWwtbmF2LWljb24uc2VydmljZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbE5hdlNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy92ZXJ0aWNhbC1uYXYuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItdmVydGljYWwtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZlcnRpY2FsLW5hdi5odG1sJyxcbiAgcHJvdmlkZXJzOiBbVmVydGljYWxOYXZTZXJ2aWNlLCBWZXJ0aWNhbE5hdkljb25TZXJ2aWNlLCBWZXJ0aWNhbE5hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZV0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2Nsci12ZXJ0aWNhbC1uYXYnLFxuICAgICdbY2xhc3MuaXMtY29sbGFwc2VkXSc6ICdjb2xsYXBzZWQnLFxuICAgICdbY2xhc3MuaGFzLW5hdi1ncm91cHNdJzogJ2hhc05hdkdyb3VwcycsXG4gICAgJ1tjbGFzcy5oYXMtaWNvbnNdJzogJ2hhc0ljb25zJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVmVydGljYWxOYXYgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBnZXQgY29sbGFwc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdlNlcnZpY2UuY29sbGFwc2libGU7XG4gIH1cblxuICBASW5wdXQoJ2NsclZlcnRpY2FsTmF2Q29sbGFwc2libGUnKVxuICBzZXQgY29sbGFwc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uYXZTZXJ2aWNlLmNvbGxhcHNlZDtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyVmVydGljYWxOYXZDb2xsYXBzZWQnKVxuICBzZXQgY29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbmF2U2VydmljZS5jb2xsYXBzZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoJ2NsclZlcnRpY2FsTmF2Q29sbGFwc2VkQ2hhbmdlJylcbiAgcHJpdmF0ZSBfY29sbGFwc2VkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcblxuICBnZXQgaGFzTmF2R3JvdXBzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2UubmF2R3JvdXBDb3VudCA+IDA7XG4gIH1cblxuICBnZXQgaGFzSWNvbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25hdkljb25TZXJ2aWNlLmhhc0ljb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmF2U2VydmljZTogVmVydGljYWxOYXZTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25hdkljb25TZXJ2aWNlOiBWZXJ0aWNhbE5hdkljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX25hdkdyb3VwUmVnaXN0cmF0aW9uU2VydmljZTogVmVydGljYWxOYXZHcm91cFJlZ2lzdHJhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3NcbiAgKSB7XG4gICAgdGhpcy5fc3ViID0gdGhpcy5fbmF2U2VydmljZS5jb2xsYXBzZWRDaGFuZ2VkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLl9jb2xsYXBzZWRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlQnlCdXR0b24oKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19