/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { WizardNavigationService } from './wizard-navigation.service';
var HeaderActionService = /** @class */ (function () {
    // this service communicates information about the presence/display of header actions
    // across the wizard
    function HeaderActionService(navService) {
        this.navService = navService;
    }
    Object.defineProperty(HeaderActionService.prototype, "wizardHasHeaderActions", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var wizardHdrActions = this.wizardHeaderActions;
            if (!wizardHdrActions) {
                return false;
            }
            return wizardHdrActions.toArray().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "currentPageHasHeaderActions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.navService.currentPage ? this.navService.currentPage.hasHeaderActions : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "showWizardHeaderActions", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.currentPageHasHeaderActions && this.wizardHasHeaderActions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderActionService.prototype, "displayHeaderActionsWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentPageHasHeaderActions || this.wizardHasHeaderActions;
        },
        enumerable: true,
        configurable: true
    });
    HeaderActionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HeaderActionService.ctorParameters = function () { return [
        { type: WizardNavigationService }
    ]; };
    return HeaderActionService;
}());
export { HeaderActionService };
if (false) {
    /** @type {?} */
    HeaderActionService.prototype.wizardHeaderActions;
    /** @type {?} */
    HeaderActionService.prototype.navService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWFjdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC9wcm92aWRlcnMvaGVhZGVyLWFjdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFO0lBRUUscUZBQXFGO0lBQ3JGLG9CQUFvQjtJQUVwQiw2QkFBbUIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7SUFBRyxDQUFDO0lBSTFELHNCQUFXLHVEQUFzQjs7OztRQUFqQzs7Z0JBQ1EsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0REFBMkI7Ozs7UUFBdEM7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVGLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0RBQXVCOzs7O1FBQWxDO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0REFBMkI7Ozs7UUFBdEM7WUFDRSxPQUFPLElBQUksQ0FBQywyQkFBMkIsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDekUsQ0FBQzs7O09BQUE7O2dCQTNCRixVQUFVOzs7O2dCQUZGLHVCQUF1Qjs7SUE4QmhDLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQlksbUJBQW1COzs7SUFNOUIsa0RBQTZEOztJQUZqRCx5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkSGVhZGVyQWN0aW9uIH0gZnJvbSAnLi4vd2l6YXJkLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHsgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3dpemFyZC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhZGVyQWN0aW9uU2VydmljZSB7XG4gIC8vIHRoaXMgc2VydmljZSBjb21tdW5pY2F0ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByZXNlbmNlL2Rpc3BsYXkgb2YgaGVhZGVyIGFjdGlvbnNcbiAgLy8gYWNyb3NzIHRoZSB3aXphcmRcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2U2VydmljZTogV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UpIHt9XG5cbiAgcHVibGljIHdpemFyZEhlYWRlckFjdGlvbnM6IFF1ZXJ5TGlzdDxDbHJXaXphcmRIZWFkZXJBY3Rpb24+O1xuXG4gIHB1YmxpYyBnZXQgd2l6YXJkSGFzSGVhZGVyQWN0aW9ucygpOiBib29sZWFuIHtcbiAgICBjb25zdCB3aXphcmRIZHJBY3Rpb25zID0gdGhpcy53aXphcmRIZWFkZXJBY3Rpb25zO1xuICAgIGlmICghd2l6YXJkSGRyQWN0aW9ucykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gd2l6YXJkSGRyQWN0aW9ucy50b0FycmF5KCkubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudFBhZ2VIYXNIZWFkZXJBY3Rpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2UgPyB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2UuaGFzSGVhZGVyQWN0aW9ucyA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93V2l6YXJkSGVhZGVyQWN0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY3VycmVudFBhZ2VIYXNIZWFkZXJBY3Rpb25zICYmIHRoaXMud2l6YXJkSGFzSGVhZGVyQWN0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlzcGxheUhlYWRlckFjdGlvbnNXcmFwcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlSGFzSGVhZGVyQWN0aW9ucyB8fCB0aGlzLndpemFyZEhhc0hlYWRlckFjdGlvbnM7XG4gIH1cbn1cbiJdfQ==