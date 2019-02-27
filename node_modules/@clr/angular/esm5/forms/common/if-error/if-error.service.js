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
import { NgControlService } from '../providers/ng-control.service';
var IfErrorService = /** @class */ (function () {
    function IfErrorService(ngControlService) {
        var _this = this;
        this.ngControlService = ngControlService;
        // Implement our own status changes observable, since Angular controls don't
        // fire on events like blur, and we want to return the boolean state instead of a string
        this._statusChanges = new Subject();
        this.subscriptions = [];
        // Wait for the control to be available
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(function (control) {
            if (control) {
                _this.control = control;
                _this.listenForChanges();
            }
        }));
    }
    Object.defineProperty(IfErrorService.prototype, "statusChanges", {
        get: /**
         * @return {?}
         */
        function () {
            return this._statusChanges.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Subscribe to the status change events, only after touched and emit the control
    // Subscribe to the status change events, only after touched and emit the control
    /**
     * @return {?}
     */
    IfErrorService.prototype.listenForChanges = 
    // Subscribe to the status change events, only after touched and emit the control
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.control.statusChanges.subscribe(function () {
            _this.sendValidity();
        }));
    };
    /**
     * @return {?}
     */
    IfErrorService.prototype.sendValidity = /**
     * @return {?}
     */
    function () {
        if ((this.control.touched || this.control.dirty) && this.control.invalid) {
            this._statusChanges.next(true);
        }
        else {
            this._statusChanges.next(false);
        }
    };
    // Allows a control to push a status check upstream, such as on blur
    // Allows a control to push a status check upstream, such as on blur
    /**
     * @return {?}
     */
    IfErrorService.prototype.triggerStatusChange = 
    // Allows a control to push a status check upstream, such as on blur
    /**
     * @return {?}
     */
    function () {
        if (this.control) {
            this.sendValidity();
        }
    };
    // Clean up subscriptions
    // Clean up subscriptions
    /**
     * @return {?}
     */
    IfErrorService.prototype.ngOnDestroy = 
    // Clean up subscriptions
    /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    IfErrorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IfErrorService.ctorParameters = function () { return [
        { type: NgControlService }
    ]; };
    return IfErrorService;
}());
export { IfErrorService };
if (false) {
    /** @type {?} */
    IfErrorService.prototype._statusChanges;
    /** @type {?} */
    IfErrorService.prototype.subscriptions;
    /** @type {?} */
    IfErrorService.prototype.control;
    /** @type {?} */
    IfErrorService.prototype.ngControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9pZi1lcnJvci9pZi1lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkU7SUFZRSx3QkFBb0IsZ0JBQWtDO1FBQXRELGlCQVVDO1FBVm1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7OztRQVI5QyxtQkFBYyxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS2pELGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUl6Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNwRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQWpCRCxzQkFBSSx5Q0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQWlCRCxpRkFBaUY7Ozs7O0lBQ3pFLHlDQUFnQjs7Ozs7SUFBeEI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDbkMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRU8scUNBQVk7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxvRUFBb0U7Ozs7O0lBQ3BFLDRDQUFtQjs7Ozs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7SUFDekIsb0NBQVc7Ozs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQW5ERixVQUFVOzs7O2dCQUZGLGdCQUFnQjs7SUFzRHpCLHFCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FuRFksY0FBYzs7O0lBR3pCLHdDQUF5RDs7SUFLekQsdUNBQTJDOztJQUMzQyxpQ0FBMkI7O0lBRWYsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ0NvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL25nLWNvbnRyb2wuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJZkVycm9yU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8vIEltcGxlbWVudCBvdXIgb3duIHN0YXR1cyBjaGFuZ2VzIG9ic2VydmFibGUsIHNpbmNlIEFuZ3VsYXIgY29udHJvbHMgZG9uJ3RcbiAgLy8gZmlyZSBvbiBldmVudHMgbGlrZSBibHVyLCBhbmQgd2Ugd2FudCB0byByZXR1cm4gdGhlIGJvb2xlYW4gc3RhdGUgaW5zdGVhZCBvZiBhIHN0cmluZ1xuICBwcml2YXRlIF9zdGF0dXNDaGFuZ2VzOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgZ2V0IHN0YXR1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgY29udHJvbDogTmdDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdDb250cm9sU2VydmljZTogTmdDb250cm9sU2VydmljZSkge1xuICAgIC8vIFdhaXQgZm9yIHRoZSBjb250cm9sIHRvIGJlIGF2YWlsYWJsZVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5uZ0NvbnRyb2xTZXJ2aWNlLmNvbnRyb2xDaGFuZ2VzLnN1YnNjcmliZShjb250cm9sID0+IHtcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgICAgICAgIHRoaXMubGlzdGVuRm9yQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0YXR1cyBjaGFuZ2UgZXZlbnRzLCBvbmx5IGFmdGVyIHRvdWNoZWQgYW5kIGVtaXQgdGhlIGNvbnRyb2xcbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JDaGFuZ2VzKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZW5kVmFsaWRpdHkoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZFZhbGlkaXR5KCkge1xuICAgIGlmICgodGhpcy5jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5jb250cm9sLmRpcnR5KSAmJiB0aGlzLmNvbnRyb2wuaW52YWxpZCkge1xuICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5uZXh0KHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLm5leHQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93cyBhIGNvbnRyb2wgdG8gcHVzaCBhIHN0YXR1cyBjaGVjayB1cHN0cmVhbSwgc3VjaCBhcyBvbiBibHVyXG4gIHRyaWdnZXJTdGF0dXNDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5zZW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cblxuICAvLyBDbGVhbiB1cCBzdWJzY3JpcHRpb25zXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==