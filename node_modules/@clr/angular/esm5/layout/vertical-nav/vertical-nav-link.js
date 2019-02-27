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
var ClrVerticalNavLink = /** @class */ (function () {
    function ClrVerticalNavLink(_navGroupService) {
        this._navGroupService = _navGroupService;
    }
    /**
     * @return {?}
     */
    ClrVerticalNavLink.prototype.expandParentNavGroup = /**
     * @return {?}
     */
    function () {
        if (this._navGroupService) {
            this._navGroupService.expand();
        }
    };
    ClrVerticalNavLink.decorators = [
        { type: Component, args: [{
                    selector: '[clrVerticalNavLink]',
                    template: "\n        <ng-content select=\"[clrVerticalNavIcon]\"></ng-content>\n        <span class=\"nav-text\">\n            <ng-content></ng-content>    \n        </span>\n    ",
                    host: { class: 'nav-link' }
                }] }
    ];
    /** @nocollapse */
    ClrVerticalNavLink.ctorParameters = function () { return [
        { type: VerticalNavGroupService, decorators: [{ type: Optional }] }
    ]; };
    ClrVerticalNavLink.propDecorators = {
        expandParentNavGroup: [{ type: HostListener, args: ['click',] }]
    };
    return ClrVerticalNavLink;
}());
export { ClrVerticalNavLink };
if (false) {
    /** @type {?} */
    ClrVerticalNavLink.prototype._navGroupService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbmF2LWxpbmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi1saW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVqRjtJQVdFLDRCQUFnQyxnQkFBeUM7UUFBekMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUFHLENBQUM7Ozs7SUFHdEUsaURBQW9COzs7SUFEM0I7UUFFRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwwS0FLUDtvQkFDSCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO2lCQUM1Qjs7OztnQkFYUSx1QkFBdUIsdUJBYWpCLFFBQVE7Ozt1Q0FFcEIsWUFBWSxTQUFDLE9BQU87O0lBTXZCLHlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FUWSxrQkFBa0I7OztJQUNqQiw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlcnRpY2FsTmF2R3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvdmVydGljYWwtbmF2LWdyb3VwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY2xyVmVydGljYWxOYXZMaW5rXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbHJWZXJ0aWNhbE5hdkljb25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+ICAgIFxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgaG9zdDogeyBjbGFzczogJ25hdi1saW5rJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJWZXJ0aWNhbE5hdkxpbmsge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9uYXZHcm91cFNlcnZpY2U6IFZlcnRpY2FsTmF2R3JvdXBTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIGV4cGFuZFBhcmVudE5hdkdyb3VwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9uYXZHcm91cFNlcnZpY2UpIHtcbiAgICAgIHRoaXMuX25hdkdyb3VwU2VydmljZS5leHBhbmQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==