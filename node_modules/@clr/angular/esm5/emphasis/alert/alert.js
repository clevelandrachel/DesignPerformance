/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output } from '@angular/core';
// providers
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
import { MultiAlertService } from './providers/multi-alert.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
var ClrAlert = /** @class */ (function () {
    function ClrAlert(iconService, cdr, multiAlertService, commonStrings) {
        this.iconService = iconService;
        this.cdr = cdr;
        this.multiAlertService = multiAlertService;
        this.commonStrings = commonStrings;
        this.isSmall = false;
        this.closable = true;
        this.isAppLevel = false;
        this._closed = false;
        this._closedChanged = new EventEmitter(false);
        this.previouslyHidden = false;
        this.hidden = false;
    }
    Object.defineProperty(ClrAlert.prototype, "alertType", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconService.alertType;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.iconService.alertType = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlert.prototype, "alertIconShape", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconService.alertIconShape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlert.prototype, "alertClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrAlert.prototype.detectChangesIfNeeded = /**
     * @return {?}
     */
    function () {
        if (this.previouslyHidden !== this.hidden) {
            this.previouslyHidden = this.hidden;
            this.cdr.detectChanges();
        }
    };
    Object.defineProperty(ClrAlert.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.multiAlertService) {
                // change detection issue in production mode causes currentAlert to be undefined when only the first alert exists
                // https://github.com/vmware/clarity/issues/2430
                if (this.multiAlertService.currentAlert === this || this.multiAlertService.count === 0) {
                    if (this.hidden === true) {
                        this.previouslyHidden = true;
                        this.hidden = false;
                    }
                }
                else if (this.hidden === false) {
                    this.previouslyHidden = false;
                    this.hidden = true;
                }
                this.detectChangesIfNeeded();
            }
            return this.hidden;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrAlert.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.closable) {
            return;
        }
        this._closed = true;
        if (this.multiAlertService) {
            this.multiAlertService.close();
        }
        this._closedChanged.emit(true);
    };
    /**
     * @return {?}
     */
    ClrAlert.prototype.open = /**
     * @return {?}
     */
    function () {
        this._closed = false;
        this._closedChanged.emit(false);
    };
    ClrAlert.decorators = [
        { type: Component, args: [{
                    selector: 'clr-alert',
                    providers: [AlertIconAndTypesService],
                    template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div\n    *ngIf=\"!_closed\"\n    class=\"alert\"\n    [ngClass]=\"alertClass\"\n    [class.alert-hidden]=\"isHidden\"\n    [class.alert-sm]=\"isSmall\"\n    [class.alert-app-level]=\"isAppLevel\"\n    role=\"alert\"\n    aria-live=\"assertive\">\n    <div class=\"alert-items\">\n        <ng-content></ng-content>\n    </div>\n    <button type=\"button\" class=\"close\" *ngIf=\"closable\" (click)=\"close()\">\n        <clr-icon shape=\"close\" [attr.title]=\"commonStrings.close\"></clr-icon>\n    </button>\n</div>\n",
                    styles: [':host { display: block; }']
                }] }
    ];
    /** @nocollapse */
    ClrAlert.ctorParameters = function () { return [
        { type: AlertIconAndTypesService },
        { type: ChangeDetectorRef },
        { type: MultiAlertService, decorators: [{ type: Optional }] },
        { type: ClrCommonStrings }
    ]; };
    ClrAlert.propDecorators = {
        isSmall: [{ type: Input, args: ['clrAlertSizeSmall',] }],
        closable: [{ type: Input, args: ['clrAlertClosable',] }],
        isAppLevel: [{ type: Input, args: ['clrAlertAppLevel',] }],
        _closed: [{ type: Input, args: ['clrAlertClosed',] }],
        _closedChanged: [{ type: Output, args: ['clrAlertClosedChange',] }],
        alertType: [{ type: Input, args: ['clrAlertType',] }],
        alertIconShape: [{ type: Input, args: ['clrAlertIcon',] }]
    };
    return ClrAlert;
}());
export { ClrAlert };
if (false) {
    /** @type {?} */
    ClrAlert.prototype.isSmall;
    /** @type {?} */
    ClrAlert.prototype.closable;
    /** @type {?} */
    ClrAlert.prototype.isAppLevel;
    /** @type {?} */
    ClrAlert.prototype._closed;
    /** @type {?} */
    ClrAlert.prototype._closedChanged;
    /** @type {?} */
    ClrAlert.prototype.previouslyHidden;
    /** @type {?} */
    ClrAlert.prototype.hidden;
    /** @type {?} */
    ClrAlert.prototype.iconService;
    /** @type {?} */
    ClrAlert.prototype.cdr;
    /** @type {?} */
    ClrAlert.prototype.multiAlertService;
    /** @type {?} */
    ClrAlert.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJlbXBoYXNpcy9hbGVydC9hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHcEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUFPRSxrQkFDUyxXQUFxQyxFQUNyQyxHQUFzQixFQUNWLGlCQUFvQyxFQUNoRCxhQUErQjtRQUgvQixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7UUFDckMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2hELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUdaLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTlCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDbEIsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFtQmpHLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBM0JwQixDQUFDO0lBU0osc0JBQ0ksK0JBQVM7Ozs7UUFHYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDcEMsQ0FBQzs7Ozs7UUFORCxVQUNjLEdBQVc7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ25D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Qjs7SUEvQnJCLCtCQUE0Qzs7SUFDNUMsdUJBQTZCOztJQUM3QixxQ0FBdUQ7O0lBQ3ZELGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gcHJvdmlkZXJzXG5pbXBvcnQgeyBBbGVydEljb25BbmRUeXBlc1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9pY29uLWFuZC10eXBlcy5zZXJ2aWNlJztcbmltcG9ydCB7IE11bHRpQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvbXVsdGktYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItYWxlcnQnLFxuICBwcm92aWRlcnM6IFtBbGVydEljb25BbmRUeXBlc1NlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuaHRtbCcsXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9J10sXG59KVxuZXhwb3J0IGNsYXNzIENsckFsZXJ0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGljb25TZXJ2aWNlOiBBbGVydEljb25BbmRUeXBlc1NlcnZpY2UsXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG11bHRpQWxlcnRTZXJ2aWNlOiBNdWx0aUFsZXJ0U2VydmljZSxcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5nc1xuICApIHt9XG5cbiAgQElucHV0KCdjbHJBbGVydFNpemVTbWFsbCcpIGlzU21hbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdjbHJBbGVydENsb3NhYmxlJykgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2NsckFsZXJ0QXBwTGV2ZWwnKSBpc0FwcExldmVsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdjbHJBbGVydENsb3NlZCcpIF9jbG9zZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgnY2xyQWxlcnRDbG9zZWRDaGFuZ2UnKSBfY2xvc2VkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgQElucHV0KCdjbHJBbGVydFR5cGUnKVxuICBzZXQgYWxlcnRUeXBlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uU2VydmljZS5hbGVydFR5cGUgPSB2YWw7XG4gIH1cbiAgZ2V0IGFsZXJ0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25TZXJ2aWNlLmFsZXJ0VHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyQWxlcnRJY29uJylcbiAgc2V0IGFsZXJ0SWNvblNoYXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25TZXJ2aWNlLmFsZXJ0SWNvblNoYXBlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgYWxlcnRDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25TZXJ2aWNlLmljb25JbmZvRnJvbVR5cGUodGhpcy5pY29uU2VydmljZS5hbGVydFR5cGUpLmNzc0NsYXNzO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2aW91c2x5SGlkZGVuID0gZmFsc2U7XG4gIHByaXZhdGUgaGlkZGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBkZXRlY3RDaGFuZ2VzSWZOZWVkZWQoKSB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNseUhpZGRlbiAhPT0gdGhpcy5oaWRkZW4pIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUhpZGRlbiA9IHRoaXMuaGlkZGVuO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0hpZGRlbigpIHtcbiAgICBpZiAodGhpcy5tdWx0aUFsZXJ0U2VydmljZSkge1xuICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbiBpc3N1ZSBpbiBwcm9kdWN0aW9uIG1vZGUgY2F1c2VzIGN1cnJlbnRBbGVydCB0byBiZSB1bmRlZmluZWQgd2hlbiBvbmx5IHRoZSBmaXJzdCBhbGVydCBleGlzdHNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92bXdhcmUvY2xhcml0eS9pc3N1ZXMvMjQzMFxuICAgICAgaWYgKHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudEFsZXJ0ID09PSB0aGlzIHx8IHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY291bnQgPT09IDApIHtcbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c2x5SGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLnByZXZpb3VzbHlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzSWZOZWVkZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xvc2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tdWx0aUFsZXJ0U2VydmljZSkge1xuICAgICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jbG9zZWRDaGFuZ2VkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Nsb3NlZENoYW5nZWQuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==