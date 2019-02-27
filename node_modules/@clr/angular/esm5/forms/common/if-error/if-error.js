/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { IfErrorService } from './if-error.service';
import { NgControlService } from '../providers/ng-control.service';
var ClrIfError = /** @class */ (function () {
    function ClrIfError(ifErrorService, ngControlService, template, container) {
        var _this = this;
        this.ifErrorService = ifErrorService;
        this.ngControlService = ngControlService;
        this.template = template;
        this.container = container;
        this.subscriptions = [];
        this.displayed = false;
        if (!this.ifErrorService) {
            throw new Error('clrIfError can only be used within a form control container element like clr-input-container');
        }
        else {
            this.displayError(false);
        }
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(function (control) {
            _this.control = control;
        }));
        this.subscriptions.push(this.ifErrorService.statusChanges.subscribe(function (invalid) {
            // If there is a specific error to track, check it, otherwise check overall validity
            if (_this.error && _this.control) {
                _this.displayError(_this.control.hasError(_this.error));
            }
            else {
                _this.displayError(invalid);
            }
        }));
    }
    /**
     * @return {?}
     */
    ClrIfError.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @param {?} invalid
     * @return {?}
     */
    ClrIfError.prototype.displayError = /**
     * @param {?} invalid
     * @return {?}
     */
    function (invalid) {
        if (invalid && !this.displayed) {
            this.container.createEmbeddedView(this.template);
            this.displayed = true;
        }
        else if (!invalid) {
            this.container.clear();
            this.displayed = false;
        }
    };
    ClrIfError.decorators = [
        { type: Directive, args: [{ selector: '[clrIfError]' },] }
    ];
    /** @nocollapse */
    ClrIfError.ctorParameters = function () { return [
        { type: IfErrorService, decorators: [{ type: Optional }] },
        { type: NgControlService, decorators: [{ type: Optional }] },
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    ClrIfError.propDecorators = {
        error: [{ type: Input, args: ['clrIfError',] }]
    };
    return ClrIfError;
}());
export { ClrIfError };
if (false) {
    /** @type {?} */
    ClrIfError.prototype.error;
    /** @type {?} */
    ClrIfError.prototype.subscriptions;
    /** @type {?} */
    ClrIfError.prototype.displayed;
    /** @type {?} */
    ClrIfError.prototype.control;
    /** @type {?} */
    ClrIfError.prototype.ifErrorService;
    /** @type {?} */
    ClrIfError.prototype.ngControlService;
    /** @type {?} */
    ClrIfError.prototype.template;
    /** @type {?} */
    ClrIfError.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jb21tb24vaWYtZXJyb3IvaWYtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHbkU7SUFFRSxvQkFDc0IsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQzlDLFFBQTBCLEVBQzFCLFNBQTJCO1FBSnJDLGlCQTBCQztRQXpCcUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUEwQjdCLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBekJqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDhGQUE4RixDQUFDLENBQUM7U0FDakg7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNqRCxvRkFBb0Y7WUFDcEYsSUFBSSxLQUFJLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBUUQsZ0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVPLGlDQUFZOzs7O0lBQXBCLFVBQXFCLE9BQWdCO1FBQ25DLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQWhERixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O2dCQUo5QixjQUFjLHVCQU9sQixRQUFRO2dCQU5KLGdCQUFnQix1QkFPcEIsUUFBUTtnQkFYd0IsV0FBVztnQkFBRSxnQkFBZ0I7Ozt3QkFxQy9ELEtBQUssU0FBQyxZQUFZOztJQW1CckIsaUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWhEWSxVQUFVOzs7SUE2QnJCLDJCQUFtQzs7SUFFbkMsbUNBQTJDOztJQUMzQywrQkFBbUM7O0lBQ25DLDZCQUEyQjs7SUEvQnpCLG9DQUFrRDs7SUFDbEQsc0NBQXNEOztJQUN0RCw4QkFBa0M7O0lBQ2xDLCtCQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElmRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9pZi1lcnJvci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbmctY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NscklmRXJyb3JdJyB9KVxuZXhwb3J0IGNsYXNzIENscklmRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGlmRXJyb3JTZXJ2aWNlOiBJZkVycm9yU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nQ29udHJvbFNlcnZpY2U6IE5nQ29udHJvbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICBpZiAoIXRoaXMuaWZFcnJvclNlcnZpY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xySWZFcnJvciBjYW4gb25seSBiZSB1c2VkIHdpdGhpbiBhIGZvcm0gY29udHJvbCBjb250YWluZXIgZWxlbWVudCBsaWtlIGNsci1pbnB1dC1jb250YWluZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMubmdDb250cm9sU2VydmljZS5jb250cm9sQ2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbCA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmlmRXJyb3JTZXJ2aWNlLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKGludmFsaWQgPT4ge1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNwZWNpZmljIGVycm9yIHRvIHRyYWNrLCBjaGVjayBpdCwgb3RoZXJ3aXNlIGNoZWNrIG92ZXJhbGwgdmFsaWRpdHlcbiAgICAgICAgaWYgKHRoaXMuZXJyb3IgJiYgdGhpcy5jb250cm9sKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IodGhpcy5jb250cm9sLmhhc0Vycm9yKHRoaXMuZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihpbnZhbGlkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQElucHV0KCdjbHJJZkVycm9yJykgZXJyb3I6IHN0cmluZztcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgZGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgY29udHJvbDogTmdDb250cm9sO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlFcnJvcihpbnZhbGlkOiBib29sZWFuKSB7XG4gICAgaWYgKGludmFsaWQgJiYgIXRoaXMuZGlzcGxheWVkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgICB0aGlzLmRpc3BsYXllZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghaW52YWxpZCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuZGlzcGxheWVkID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=