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
export class IfErrorService {
    /**
     * @param {?} ngControlService
     */
    constructor(ngControlService) {
        this.ngControlService = ngControlService;
        // Implement our own status changes observable, since Angular controls don't
        // fire on events like blur, and we want to return the boolean state instead of a string
        this._statusChanges = new Subject();
        this.subscriptions = [];
        // Wait for the control to be available
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(control => {
            if (control) {
                this.control = control;
                this.listenForChanges();
            }
        }));
    }
    /**
     * @return {?}
     */
    get statusChanges() {
        return this._statusChanges.asObservable();
    }
    // Subscribe to the status change events, only after touched and emit the control
    /**
     * @return {?}
     */
    listenForChanges() {
        this.subscriptions.push(this.control.statusChanges.subscribe(() => {
            this.sendValidity();
        }));
    }
    /**
     * @return {?}
     */
    sendValidity() {
        if ((this.control.touched || this.control.dirty) && this.control.invalid) {
            this._statusChanges.next(true);
        }
        else {
            this._statusChanges.next(false);
        }
    }
    // Allows a control to push a status check upstream, such as on blur
    /**
     * @return {?}
     */
    triggerStatusChange() {
        if (this.control) {
            this.sendValidity();
        }
    }
    // Clean up subscriptions
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
IfErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IfErrorService.ctorParameters = () => [
    { type: NgControlService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9pZi1lcnJvci9pZi1lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHbkUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFXekIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7OztRQVI5QyxtQkFBYyxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBS2pELGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUl6Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBakJELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQWtCTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7OztJQUdELG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUFuREYsVUFBVTs7OztZQUZGLGdCQUFnQjs7OztJQU12Qix3Q0FBeUQ7O0lBS3pELHVDQUEyQzs7SUFDM0MsaUNBQTJCOztJQUVmLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTmdDb250cm9sU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9uZy1jb250cm9sLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSWZFcnJvclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyBJbXBsZW1lbnQgb3VyIG93biBzdGF0dXMgY2hhbmdlcyBvYnNlcnZhYmxlLCBzaW5jZSBBbmd1bGFyIGNvbnRyb2xzIGRvbid0XG4gIC8vIGZpcmUgb24gZXZlbnRzIGxpa2UgYmx1ciwgYW5kIHdlIHdhbnQgdG8gcmV0dXJuIHRoZSBib29sZWFuIHN0YXRlIGluc3RlYWQgb2YgYSBzdHJpbmdcbiAgcHJpdmF0ZSBfc3RhdHVzQ2hhbmdlczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGdldCBzdGF0dXNDaGFuZ2VzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIGNvbnRyb2w6IE5nQ29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nQ29udHJvbFNlcnZpY2U6IE5nQ29udHJvbFNlcnZpY2UpIHtcbiAgICAvLyBXYWl0IGZvciB0aGUgY29udHJvbCB0byBiZSBhdmFpbGFibGVcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMubmdDb250cm9sU2VydmljZS5jb250cm9sQ2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbCA9PiB7XG4gICAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICAgICAgICB0aGlzLmxpc3RlbkZvckNoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHRoZSBzdGF0dXMgY2hhbmdlIGV2ZW50cywgb25seSBhZnRlciB0b3VjaGVkIGFuZCBlbWl0IHRoZSBjb250cm9sXG4gIHByaXZhdGUgbGlzdGVuRm9yQ2hhbmdlcygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VuZFZhbGlkaXR5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNlbmRWYWxpZGl0eSgpIHtcbiAgICBpZiAoKHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuY29udHJvbC5kaXJ0eSkgJiYgdGhpcy5jb250cm9sLmludmFsaWQpIHtcbiAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMubmV4dCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5uZXh0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBBbGxvd3MgYSBjb250cm9sIHRvIHB1c2ggYSBzdGF0dXMgY2hlY2sgdXBzdHJlYW0sIHN1Y2ggYXMgb24gYmx1clxuICB0cmlnZ2VyU3RhdHVzQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuc2VuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=