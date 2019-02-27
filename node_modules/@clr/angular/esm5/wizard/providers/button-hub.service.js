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
import { Subject } from 'rxjs';
var ButtonHubService = /** @class */ (function () {
    function ButtonHubService() {
        this.buttonsReady = false;
        this._previousBtnClicked = new Subject();
        this._nextBtnClicked = new Subject();
        this._dangerBtnClicked = new Subject();
        this._cancelBtnClicked = new Subject();
        this._finishBtnClicked = new Subject();
        this._customBtnClicked = new Subject();
    }
    Object.defineProperty(ButtonHubService.prototype, "previousBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._previousBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "nextBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nextBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "dangerBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dangerBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "cancelBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cancelBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "finishBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._finishBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonHubService.prototype, "customBtnClicked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customBtnClicked.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} buttonType
     * @return {?}
     */
    ButtonHubService.prototype.buttonClicked = /**
     * @param {?} buttonType
     * @return {?}
     */
    function (buttonType) {
        if ('previous' === buttonType) {
            this._previousBtnClicked.next();
        }
        else if ('next' === buttonType) {
            this._nextBtnClicked.next();
        }
        else if ('finish' === buttonType) {
            this._finishBtnClicked.next();
        }
        else if ('danger' === buttonType) {
            this._dangerBtnClicked.next();
        }
        else if ('cancel' === buttonType) {
            this._cancelBtnClicked.next();
        }
        else {
            this._customBtnClicked.next(buttonType);
        }
    };
    ButtonHubService.decorators = [
        { type: Injectable }
    ];
    return ButtonHubService;
}());
export { ButtonHubService };
if (false) {
    /** @type {?} */
    ButtonHubService.prototype.buttonsReady;
    /** @type {?} */
    ButtonHubService.prototype._previousBtnClicked;
    /** @type {?} */
    ButtonHubService.prototype._nextBtnClicked;
    /** @type {?} */
    ButtonHubService.prototype._dangerBtnClicked;
    /** @type {?} */
    ButtonHubService.prototype._cancelBtnClicked;
    /** @type {?} */
    ButtonHubService.prototype._finishBtnClicked;
    /** @type {?} */
    ButtonHubService.prototype._customBtnClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWh1Yi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsid2l6YXJkL3Byb3ZpZGVycy9idXR0b24taHViLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQUE7UUFFUyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU3Qix3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBS3pDLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUtyQyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBS3ZDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFLdkMsc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUt2QyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBb0JqRCxDQUFDO0lBNUNDLHNCQUFXLGdEQUFrQjs7OztRQUE3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsNENBQWM7Ozs7UUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw4Q0FBZ0I7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDhDQUFnQjs7OztRQUEzQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsOENBQWdCOzs7O1FBQTNCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyw4Q0FBZ0I7Ozs7UUFBM0I7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7Ozs7SUFFTSx3Q0FBYTs7OztJQUFwQixVQUFxQixVQUFrQjtRQUNyQyxJQUFJLFVBQVUsS0FBSyxVQUFVLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDN0I7YUFBTSxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOztnQkFoREYsVUFBVTs7SUFpRFgsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWhEWSxnQkFBZ0I7OztJQUMzQix3Q0FBcUM7O0lBRXJDLCtDQUFpRDs7SUFLakQsMkNBQTZDOztJQUs3Qyw2Q0FBK0M7O0lBSy9DLDZDQUErQzs7SUFLL0MsNkNBQStDOztJQUsvQyw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkh1YlNlcnZpY2Uge1xuICBwdWJsaWMgYnV0dG9uc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfcHJldmlvdXNCdG5DbGlja2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgZ2V0IHByZXZpb3VzQnRuQ2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wcmV2aW91c0J0bkNsaWNrZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9uZXh0QnRuQ2xpY2tlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGdldCBuZXh0QnRuQ2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9uZXh0QnRuQ2xpY2tlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2RhbmdlckJ0bkNsaWNrZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBnZXQgZGFuZ2VyQnRuQ2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYW5nZXJCdG5DbGlja2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FuY2VsQnRuQ2xpY2tlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGdldCBjYW5jZWxCdG5DbGlja2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbEJ0bkNsaWNrZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIF9maW5pc2hCdG5DbGlja2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgZ2V0IGZpbmlzaEJ0bkNsaWNrZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZmluaXNoQnRuQ2xpY2tlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2N1c3RvbUJ0bkNsaWNrZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBnZXQgY3VzdG9tQnRuQ2xpY2tlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21CdG5DbGlja2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGJ1dHRvbkNsaWNrZWQoYnV0dG9uVHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCdwcmV2aW91cycgPT09IGJ1dHRvblR5cGUpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzQnRuQ2xpY2tlZC5uZXh0KCk7XG4gICAgfSBlbHNlIGlmICgnbmV4dCcgPT09IGJ1dHRvblR5cGUpIHtcbiAgICAgIHRoaXMuX25leHRCdG5DbGlja2VkLm5leHQoKTtcbiAgICB9IGVsc2UgaWYgKCdmaW5pc2gnID09PSBidXR0b25UeXBlKSB7XG4gICAgICB0aGlzLl9maW5pc2hCdG5DbGlja2VkLm5leHQoKTtcbiAgICB9IGVsc2UgaWYgKCdkYW5nZXInID09PSBidXR0b25UeXBlKSB7XG4gICAgICB0aGlzLl9kYW5nZXJCdG5DbGlja2VkLm5leHQoKTtcbiAgICB9IGVsc2UgaWYgKCdjYW5jZWwnID09PSBidXR0b25UeXBlKSB7XG4gICAgICB0aGlzLl9jYW5jZWxCdG5DbGlja2VkLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VzdG9tQnRuQ2xpY2tlZC5uZXh0KGJ1dHRvblR5cGUpO1xuICAgIH1cbiAgfVxufVxuIl19