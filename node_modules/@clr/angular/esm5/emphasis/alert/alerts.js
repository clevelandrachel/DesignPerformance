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
var ClrAlerts = /** @class */ (function () {
    function ClrAlerts(multiAlertService) {
        this.multiAlertService = multiAlertService;
        this.currentAlertIndexChange = new EventEmitter(false);
        this.currentAlertChange = new EventEmitter(false);
    }
    Object.defineProperty(ClrAlerts.prototype, "_inputCurrentIndex", {
        /**
         * Input/Output to support two way binding on current alert index
         */
        set: /**
         * Input/Output to support two way binding on current alert index
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (Number.isInteger(index) && index >= 0) {
                this.multiAlertService.current = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlerts.prototype, "currentAlertIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multiAlertService.current;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.multiAlertService.current = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlerts.prototype, "currentAlert", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multiAlertService.currentAlert;
        },
        /**
         * Input/Output to support two way binding on current alert instance
         */
        set: /**
         * Input/Output to support two way binding on current alert instance
         * @param {?} alert
         * @return {?}
         */
        function (alert) {
            if (alert) {
                this.multiAlertService.currentAlert = alert;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlerts.prototype, "alerts", {
        /**
         * Ensure we are only dealing with alerts that have not been closed yet
         */
        get: /**
         * Ensure we are only dealing with alerts that have not been closed yet
         * @return {?}
         */
        function () {
            return this.allAlerts.filter(function (alert) {
                return alert.isHidden === false;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrAlerts.prototype, "currentAlertType", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.multiAlertService.currentAlert) {
                return this.multiAlertService.currentAlert.alertType;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrAlerts.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.multiAlertService.manage(this.allAlerts);
        this.multiAlertService.changes.subscribe(function (index) {
            _this.currentAlertIndexChange.next(index);
            _this.currentAlertChange.next(_this.multiAlertService.currentAlert);
        });
    };
    /**
     * @return {?}
     */
    ClrAlerts.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.multiAlertService.destroy();
    };
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
    ClrAlerts.ctorParameters = function () { return [
        { type: MultiAlertService }
    ]; };
    ClrAlerts.propDecorators = {
        allAlerts: [{ type: ContentChildren, args: [ClrAlert,] }],
        _inputCurrentIndex: [{ type: Input, args: ['clrCurrentAlertIndex',] }],
        currentAlertIndexChange: [{ type: Output, args: ['clrCurrentAlertIndexChange',] }],
        currentAlert: [{ type: Input, args: ['clrCurrentAlert',] }],
        currentAlertChange: [{ type: Output, args: ['clrCurrentAlertChange',] }]
    };
    return ClrAlerts;
}());
export { ClrAlerts };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZW1waGFzaXMvYWxlcnQvYWxlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFO0lBaUVFLG1CQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQXZDViw0QkFBdUIsR0FBRyxJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUMsQ0FBQztRQXFCL0QsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLENBQVcsS0FBSyxDQUFDLENBQUM7SUFrQnJDLENBQUM7SUE5QzNELHNCQUNXLHlDQUFrQjtRQUo3Qjs7V0FFRzs7Ozs7O1FBQ0gsVUFDOEIsS0FBYTtZQUN6QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEM7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHdDQUFpQjs7OztRQUdyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDOzs7OztRQUxELFVBQXNCLEtBQWE7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFRRCxzQkFDSSxtQ0FBWTs7OztRQUtoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztRQUM3QyxDQUFDO1FBWEQ7O1dBRUc7Ozs7OztRQUNILFVBQ2lCLEtBQWU7WUFDOUIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0M7UUFDSCxDQUFDOzs7T0FBQTtJQVNELHNCQUFJLDZCQUFNO1FBSFY7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztnQkFDaEMsT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQWdCOzs7O1FBQXBCO1lBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFO2dCQUN2QyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDOzs7T0FBQTs7OztJQUlELHNDQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDNUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwrQkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsMmFBQTRCO29CQUM1QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLGdCQUFnQixFQUFFLE1BQU07d0JBQ3hCLHNCQUFzQixFQUFFLG1DQUFtQzt3QkFDM0Qsb0JBQW9CLEVBQUUsaUNBQWlDO3dCQUN2RCx1QkFBdUIsRUFBRSxvQ0FBb0M7d0JBQzdELHVCQUF1QixFQUFFLG9DQUFvQztxQkFDOUQ7NkJBQ1EsMEJBQTBCO2lCQUNwQzs7OztnQkFkUSxpQkFBaUI7Ozs0QkFnQnZCLGVBQWUsU0FBQyxRQUFRO3FDQUt4QixLQUFLLFNBQUMsc0JBQXNCOzBDQU81QixNQUFNLFNBQUMsNEJBQTRCOytCQVluQyxLQUFLLFNBQUMsaUJBQWlCO3FDQVN2QixNQUFNLFNBQUMsdUJBQXVCOztJQStCakMsZ0JBQUM7Q0FBQSxBQTlFRCxJQThFQztTQWpFWSxTQUFTOzs7SUFDcEIsOEJBQTBEOztJQVkxRCw0Q0FBdUc7O0lBcUJ2Ryx1Q0FBK0Y7O0lBa0JuRixzQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbHJBbGVydCB9IGZyb20gJy4vYWxlcnQnO1xuaW1wb3J0IHsgTXVsdGlBbGVydFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9tdWx0aS1hbGVydC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWFsZXJ0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydHMuaHRtbCcsXG4gIHByb3ZpZGVyczogW011bHRpQWxlcnRTZXJ2aWNlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxlcnRzXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFsZXJ0LWRhbmdlcl0nOiBcInRoaXMuY3VycmVudEFsZXJ0VHlwZSA9PSAnZGFuZ2VyJ1wiLFxuICAgICdbY2xhc3MuYWxlcnQtaW5mb10nOiBcInRoaXMuY3VycmVudEFsZXJ0VHlwZSA9PSAnaW5mbydcIixcbiAgICAnW2NsYXNzLmFsZXJ0LXN1Y2Nlc3NdJzogXCJ0aGlzLmN1cnJlbnRBbGVydFR5cGUgPT0gJ3N1Y2Nlc3MnXCIsXG4gICAgJ1tjbGFzcy5hbGVydC13YXJuaW5nXSc6IFwidGhpcy5jdXJyZW50QWxlcnRUeXBlID09ICd3YXJuaW5nJ1wiLFxuICB9LFxuICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiBibG9jayB9J10sXG59KVxuZXhwb3J0IGNsYXNzIENsckFsZXJ0cyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ2xyQWxlcnQpIGFsbEFsZXJ0czogUXVlcnlMaXN0PENsckFsZXJ0PjtcblxuICAvKipcbiAgICogSW5wdXQvT3V0cHV0IHRvIHN1cHBvcnQgdHdvIHdheSBiaW5kaW5nIG9uIGN1cnJlbnQgYWxlcnQgaW5kZXhcbiAgICovXG4gIEBJbnB1dCgnY2xyQ3VycmVudEFsZXJ0SW5kZXgnKVxuICBwdWJsaWMgc2V0IF9pbnB1dEN1cnJlbnRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoaW5kZXgpICYmIGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudCA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoJ2NsckN1cnJlbnRBbGVydEluZGV4Q2hhbmdlJykgcHVibGljIGN1cnJlbnRBbGVydEluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KGZhbHNlKTtcblxuICBzZXQgY3VycmVudEFsZXJ0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudCA9IGluZGV4O1xuICB9XG4gIGdldCBjdXJyZW50QWxlcnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0L091dHB1dCB0byBzdXBwb3J0IHR3byB3YXkgYmluZGluZyBvbiBjdXJyZW50IGFsZXJ0IGluc3RhbmNlXG4gICAqL1xuICBASW5wdXQoJ2NsckN1cnJlbnRBbGVydCcpXG4gIHNldCBjdXJyZW50QWxlcnQoYWxlcnQ6IENsckFsZXJ0KSB7XG4gICAgaWYgKGFsZXJ0KSB7XG4gICAgICB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnRBbGVydCA9IGFsZXJ0O1xuICAgIH1cbiAgfVxuICBnZXQgY3VycmVudEFsZXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnRBbGVydDtcbiAgfVxuICBAT3V0cHV0KCdjbHJDdXJyZW50QWxlcnRDaGFuZ2UnKSBwdWJsaWMgY3VycmVudEFsZXJ0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDbHJBbGVydD4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBFbnN1cmUgd2UgYXJlIG9ubHkgZGVhbGluZyB3aXRoIGFsZXJ0cyB0aGF0IGhhdmUgbm90IGJlZW4gY2xvc2VkIHlldFxuICAgKi9cbiAgZ2V0IGFsZXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxBbGVydHMuZmlsdGVyKGFsZXJ0ID0+IHtcbiAgICAgIHJldHVybiBhbGVydC5pc0hpZGRlbiA9PT0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY3VycmVudEFsZXJ0VHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm11bHRpQWxlcnRTZXJ2aWNlLmN1cnJlbnRBbGVydCkge1xuICAgICAgcmV0dXJuIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY3VycmVudEFsZXJ0LmFsZXJ0VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG11bHRpQWxlcnRTZXJ2aWNlOiBNdWx0aUFsZXJ0U2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5tYW5hZ2UodGhpcy5hbGxBbGVydHMpO1xuICAgIHRoaXMubXVsdGlBbGVydFNlcnZpY2UuY2hhbmdlcy5zdWJzY3JpYmUoaW5kZXggPT4ge1xuICAgICAgdGhpcy5jdXJyZW50QWxlcnRJbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgICAgIHRoaXMuY3VycmVudEFsZXJ0Q2hhbmdlLm5leHQodGhpcy5tdWx0aUFsZXJ0U2VydmljZS5jdXJyZW50QWxlcnQpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aUFsZXJ0U2VydmljZS5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==