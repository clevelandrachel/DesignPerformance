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
export class ClrAlert {
    /**
     * @param {?} iconService
     * @param {?} cdr
     * @param {?} multiAlertService
     * @param {?} commonStrings
     */
    constructor(iconService, cdr, multiAlertService, commonStrings) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set alertType(val) {
        this.iconService.alertType = val;
    }
    /**
     * @return {?}
     */
    get alertType() {
        return this.iconService.alertType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set alertIconShape(value) {
        this.iconService.alertIconShape = value;
    }
    /**
     * @return {?}
     */
    get alertClass() {
        return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
    }
    /**
     * @return {?}
     */
    detectChangesIfNeeded() {
        if (this.previouslyHidden !== this.hidden) {
            this.previouslyHidden = this.hidden;
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    get isHidden() {
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
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.closable) {
            return;
        }
        this._closed = true;
        if (this.multiAlertService) {
            this.multiAlertService.close();
        }
        this._closedChanged.emit(true);
    }
    /**
     * @return {?}
     */
    open() {
        this._closed = false;
        this._closedChanged.emit(false);
    }
}
ClrAlert.decorators = [
    { type: Component, args: [{
                selector: 'clr-alert',
                providers: [AlertIconAndTypesService],
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div\n    *ngIf=\"!_closed\"\n    class=\"alert\"\n    [ngClass]=\"alertClass\"\n    [class.alert-hidden]=\"isHidden\"\n    [class.alert-sm]=\"isSmall\"\n    [class.alert-app-level]=\"isAppLevel\"\n    role=\"alert\"\n    aria-live=\"assertive\">\n    <div class=\"alert-items\">\n        <ng-content></ng-content>\n    </div>\n    <button type=\"button\" class=\"close\" *ngIf=\"closable\" (click)=\"close()\">\n        <clr-icon shape=\"close\" [attr.title]=\"commonStrings.close\"></clr-icon>\n    </button>\n</div>\n",
                styles: [':host { display: block; }']
            }] }
];
/** @nocollapse */
ClrAlert.ctorParameters = () => [
    { type: AlertIconAndTypesService },
    { type: ChangeDetectorRef },
    { type: MultiAlertService, decorators: [{ type: Optional }] },
    { type: ClrCommonStrings }
];
ClrAlert.propDecorators = {
    isSmall: [{ type: Input, args: ['clrAlertSizeSmall',] }],
    closable: [{ type: Input, args: ['clrAlertClosable',] }],
    isAppLevel: [{ type: Input, args: ['clrAlertAppLevel',] }],
    _closed: [{ type: Input, args: ['clrAlertClosed',] }],
    _closedChanged: [{ type: Output, args: ['clrAlertClosedChange',] }],
    alertType: [{ type: Input, args: ['clrAlertType',] }],
    alertIconShape: [{ type: Input, args: ['clrAlertIcon',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJlbXBoYXNpcy9hbGVydC9hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHcEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFRN0UsTUFBTSxPQUFPLFFBQVE7Ozs7Ozs7SUFDbkIsWUFDUyxXQUFxQyxFQUNyQyxHQUFzQixFQUNWLGlCQUFvQyxFQUNoRCxhQUErQjtRQUgvQixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7UUFDckMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2hELGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUdaLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTlCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDbEIsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFtQmpHLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBM0JwQixDQUFDOzs7OztJQVNKLElBQ0ksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxX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MDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIHByb3ZpZGVyc1xuaW1wb3J0IHsgQWxlcnRJY29uQW5kVHlwZXNTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvaWNvbi1hbmQtdHlwZXMuc2VydmljZSc7XG5pbXBvcnQgeyBNdWx0aUFsZXJ0U2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL211bHRpLWFsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWFsZXJ0JyxcbiAgcHJvdmlkZXJzOiBbQWxlcnRJY29uQW5kVHlwZXNTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0Lmh0bWwnLFxuICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfSddLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJBbGVydCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpY29uU2VydmljZTogQWxlcnRJY29uQW5kVHlwZXNTZXJ2aWNlLFxuICAgIHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBtdWx0aUFsZXJ0U2VydmljZTogTXVsdGlBbGVydFNlcnZpY2UsXG4gICAgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3NcbiAgKSB7fVxuXG4gIEBJbnB1dCgnY2xyQWxlcnRTaXplU21hbGwnKSBpc1NtYWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnY2xyQWxlcnRDbG9zYWJsZScpIGNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdjbHJBbGVydEFwcExldmVsJykgaXNBcHBMZXZlbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnY2xyQWxlcnRDbG9zZWQnKSBfY2xvc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoJ2NsckFsZXJ0Q2xvc2VkQ2hhbmdlJykgX2Nsb3NlZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIEBJbnB1dCgnY2xyQWxlcnRUeXBlJylcbiAgc2V0IGFsZXJ0VHlwZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuaWNvblNlcnZpY2UuYWxlcnRUeXBlID0gdmFsO1xuICB9XG4gIGdldCBhbGVydFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uU2VydmljZS5hbGVydFR5cGU7XG4gIH1cblxuICBASW5wdXQoJ2NsckFsZXJ0SWNvbicpXG4gIHNldCBhbGVydEljb25TaGFwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pY29uU2VydmljZS5hbGVydEljb25TaGFwZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFsZXJ0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uU2VydmljZS5pY29uSW5mb0Zyb21UeXBlKHRoaXMuaWNvblNlcnZpY2UuYWxlcnRUeXBlKS5jc3NDbGFzcztcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlvdXNseUhpZGRlbiA9IGZhbHNlO1xuICBwcml2YXRlIGhpZGRlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZGV0ZWN0Q2hhbmdlc0lmTmVlZGVkKCkge1xuICAgIGlmICh0aGlzLnByZXZpb3VzbHlIaWRkZW4gIT09IHRoaXMuaGlkZGVuKSB7XG4gICAgICB0aGlzLnByZXZpb3VzbHlIaWRkZW4gPSB0aGlzLmhpZGRlbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNIaWRkZW4oKSB7XG4gICAgaWYgKHRoaXMubXVsdGlBbGVydFNlcnZpY2UpIHtcbiAgICAgIC8vIGNoYW5nZSBkZXRlY3Rpb24gaXNzdWUgaW4gcHJvZHVjdGlvbiBtb2RlIGNhdXNlcyBjdXJyZW50QWxlcnQgdG8gYmUgdW5kZWZpbmVkIHdoZW4gb25seSB0aGUgZmlyc3QgYWxlcnQgZXhpc3RzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdm13YXJlL2NsYXJpdHkvaXNzdWVzLzI0MzBcbiAgICAgIGlmICh0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnRBbGVydCA9PT0gdGhpcyB8fCB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmNvdW50ID09PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLmhpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMucHJldmlvdXNseUhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c2x5SGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0lmTmVlZGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGlkZGVuO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3NhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMubXVsdGlBbGVydFNlcnZpY2UpIHtcbiAgICAgIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2xvc2VkQ2hhbmdlZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZWRDaGFuZ2VkLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=