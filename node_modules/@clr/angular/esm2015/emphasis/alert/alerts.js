/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, } from '@angular/core';
import { ClrAlert } from './alert';
import { MultiAlertService } from './providers/multi-alert.service';
export class ClrAlerts {
    /**
     * @param {?} multiAlertService
     */
    constructor(multiAlertService) {
        this.multiAlertService = multiAlertService;
        this.currentAlertIndexChange = new EventEmitter(false);
        this.currentAlertChange = new EventEmitter(false);
    }
    /**
     * Input/Output to support two way binding on current alert index
     * @param {?} index
     * @return {?}
     */
    set _inputCurrentIndex(index) {
        if (Number.isInteger(index) && index >= 0) {
            this.multiAlertService.current = index;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set currentAlertIndex(index) {
        this.multiAlertService.current = index;
    }
    /**
     * @return {?}
     */
    get currentAlertIndex() {
        return this.multiAlertService.current;
    }
    /**
     * Input/Output to support two way binding on current alert instance
     * @param {?} alert
     * @return {?}
     */
    set currentAlert(alert) {
        if (alert) {
            this.multiAlertService.currentAlert = alert;
        }
    }
    /**
     * @return {?}
     */
    get currentAlert() {
        return this.multiAlertService.currentAlert;
    }
    /**
     * Ensure we are only dealing with alerts that have not been closed yet
     * @return {?}
     */
    get alerts() {
        return this.allAlerts.filter(alert => {
            return alert.isHidden === false;
        });
    }
    /**
     * @return {?}
     */
    get currentAlertType() {
        if (this.multiAlertService.currentAlert) {
            return this.multiAlertService.currentAlert.alertType;
        }
        return '';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.multiAlertService.manage(this.allAlerts);
        this.multiAlertService.changes.subscribe(index => {
            this.currentAlertIndexChange.next(index);
            this.currentAlertChange.next(this.multiAlertService.currentAlert);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.multiAlertService.destroy();
    }
}
ClrAlerts.decorators = [
    { type: Component, args: [{
                selector: 'clr-alerts',
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<clr-alerts-pager\n        *ngIf=\"multiAlertService.count > 1\"\n        [clrCurrentAlertIndex]=\"currentAlertIndex\">\n</clr-alerts-pager>\n<ng-content select=\"clr-alert\"></ng-content>\n",
                providers: [MultiAlertService],
                host: {
                    '[class.alerts]': 'true',
                    '[class.alert-danger]': "this.currentAlertType == 'danger'",
                    '[class.alert-info]': "this.currentAlertType == 'info'",
                    '[class.alert-success]': "this.currentAlertType == 'success'",
                    '[class.alert-warning]': "this.currentAlertType == 'warning'",
                },
                styles: [':host { display: block }']
            }] }
];
/** @nocollapse */
ClrAlerts.ctorParameters = () => [
    { type: MultiAlertService }
];
ClrAlerts.propDecorators = {
    allAlerts: [{ type: ContentChildren, args: [ClrAlert,] }],
    _inputCurrentIndex: [{ type: Input, args: ['clrCurrentAlertIndex',] }],
    currentAlertIndexChange: [{ type: Output, args: ['clrCurrentAlertIndexChange',] }],
    currentAlert: [{ type: Input, args: ['clrCurrentAlert',] }],
    currentAlertChange: [{ type: Output, args: ['clrCurrentAlertChange',] }]
};
if (false) {
    /** @type {?} */
    ClrAlerts.prototype.allAlerts;
    /** @type {?} */
    ClrAlerts.prototype.currentAlertIndexChange;
    /** @type {?} */
    ClrAlerts.prototype.currentAlertChange;
    /** @type {?} */
    ClrAlerts.prototype.multiAlertService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZW1waGFzaXMvYWxlcnQvYWxlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBZXBFLE1BQU0sT0FBTyxTQUFTOzs7O0lBb0RwQixZQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQXZDViw0QkFBdUIsR0FBRyxJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUMsQ0FBQztRQXFCL0QsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLENBQVcsS0FBSyxDQUFDLENBQUM7SUFrQnJDLENBQUM7Ozs7OztJQTlDM0QsSUFDVyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3pDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxJQUFJLGlCQUFpQixDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7OztJQUNELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFLRCxJQUNJLFlBQVksQ0FBQyxLQUFlO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBTUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBSUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwyYUFBNEI7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUM5QixJQUFJLEVBQUU7b0JBQ0osZ0JBQWdCLEVBQUUsTUFBTTtvQkFDeEIsc0JBQXNCLEVBQUUsbUNBQW1DO29CQUMzRCxvQkFBb0IsRUFBRSxpQ0FBaUM7b0JBQ3ZELHVCQUF1QixFQUFFLG9DQUFvQztvQkFDN0QsdUJBQXVCLEVBQUUsb0NBQW9DO2lCQUM5RDt5QkFDUSwwQkFBMEI7YUFDcEM7Ozs7WUFkUSxpQkFBaUI7Ozt3QkFnQnZCLGVBQWUsU0FBQyxRQUFRO2lDQUt4QixLQUFLLFNBQUMsc0JBQXNCO3NDQU81QixNQUFNLFNBQUMsNEJBQTRCOzJCQVluQyxLQUFLLFNBQUMsaUJBQWlCO2lDQVN2QixNQUFNLFNBQUMsdUJBQXVCOzs7O0lBakMvQiw4QkFBMEQ7O0lBWTFELDRDQUF1Rzs7SUFxQnZHLHVDQUErRjs7SUFrQm5GLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsckFsZXJ0IH0gZnJvbSAnLi9hbGVydCc7XG5pbXBvcnQgeyBNdWx0aUFsZXJ0U2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL211bHRpLWFsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItYWxlcnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0cy5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTXVsdGlBbGVydFNlcnZpY2VdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGVydHNdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYWxlcnQtZGFuZ2VyXSc6IFwidGhpcy5jdXJyZW50QWxlcnRUeXBlID09ICdkYW5nZXInXCIsXG4gICAgJ1tjbGFzcy5hbGVydC1pbmZvXSc6IFwidGhpcy5jdXJyZW50QWxlcnRUeXBlID09ICdpbmZvJ1wiLFxuICAgICdbY2xhc3MuYWxlcnQtc3VjY2Vzc10nOiBcInRoaXMuY3VycmVudEFsZXJ0VHlwZSA9PSAnc3VjY2VzcydcIixcbiAgICAnW2NsYXNzLmFsZXJ0LXdhcm5pbmddJzogXCJ0aGlzLmN1cnJlbnRBbGVydFR5cGUgPT0gJ3dhcm5pbmcnXCIsXG4gIH0sXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IGJsb2NrIH0nXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQWxlcnRzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihDbHJBbGVydCkgYWxsQWxlcnRzOiBRdWVyeUxpc3Q8Q2xyQWxlcnQ+O1xuXG4gIC8qKlxuICAgKiBJbnB1dC9PdXRwdXQgdG8gc3VwcG9ydCB0d28gd2F5IGJpbmRpbmcgb24gY3VycmVudCBhbGVydCBpbmRleFxuICAgKi9cbiAgQElucHV0KCdjbHJDdXJyZW50QWxlcnRJbmRleCcpXG4gIHB1YmxpYyBzZXQgX2lucHV0Q3VycmVudEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihpbmRleCkgJiYgaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jdXJyZW50ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgnY2xyQ3VycmVudEFsZXJ0SW5kZXhDaGFuZ2UnKSBwdWJsaWMgY3VycmVudEFsZXJ0SW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oZmFsc2UpO1xuXG4gIHNldCBjdXJyZW50QWxlcnRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jdXJyZW50ID0gaW5kZXg7XG4gIH1cbiAgZ2V0IGN1cnJlbnRBbGVydEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5wdXQvT3V0cHV0IHRvIHN1cHBvcnQgdHdvIHdheSBiaW5kaW5nIG9uIGN1cnJlbnQgYWxlcnQgaW5zdGFuY2VcbiAgICovXG4gIEBJbnB1dCgnY2xyQ3VycmVudEFsZXJ0JylcbiAgc2V0IGN1cnJlbnRBbGVydChhbGVydDogQ2xyQWxlcnQpIHtcbiAgICBpZiAoYWxlcnQpIHtcbiAgICAgIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudEFsZXJ0ID0gYWxlcnQ7XG4gICAgfVxuICB9XG4gIGdldCBjdXJyZW50QWxlcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudEFsZXJ0O1xuICB9XG4gIEBPdXRwdXQoJ2NsckN1cnJlbnRBbGVydENoYW5nZScpIHB1YmxpYyBjdXJyZW50QWxlcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENsckFsZXJ0PihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVuc3VyZSB3ZSBhcmUgb25seSBkZWFsaW5nIHdpdGggYWxlcnRzIHRoYXQgaGF2ZSBub3QgYmVlbiBjbG9zZWQgeWV0XG4gICAqL1xuICBnZXQgYWxlcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFsbEFsZXJ0cy5maWx0ZXIoYWxlcnQgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0LmlzSGlkZGVuID09PSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjdXJyZW50QWxlcnRUeXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudEFsZXJ0KSB7XG4gICAgICByZXR1cm4gdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jdXJyZW50QWxlcnQuYWxlcnRUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbXVsdGlBbGVydFNlcnZpY2U6IE11bHRpQWxlcnRTZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLm1hbmFnZSh0aGlzLmFsbEFsZXJ0cyk7XG4gICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jaGFuZ2VzLnN1YnNjcmliZShpbmRleCA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRBbGVydEluZGV4Q2hhbmdlLm5leHQoaW5kZXgpO1xuICAgICAgdGhpcy5jdXJyZW50QWxlcnRDaGFuZ2UubmV4dCh0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnRBbGVydCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19