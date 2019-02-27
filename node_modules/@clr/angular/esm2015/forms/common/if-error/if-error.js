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
export class ClrIfError {
    /**
     * @param {?} ifErrorService
     * @param {?} ngControlService
     * @param {?} template
     * @param {?} container
     */
    constructor(ifErrorService, ngControlService, template, container) {
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
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(control => {
            this.control = control;
        }));
        this.subscriptions.push(this.ifErrorService.statusChanges.subscribe(invalid => {
            // If there is a specific error to track, check it, otherwise check overall validity
            if (this.error && this.control) {
                this.displayError(this.control.hasError(this.error));
            }
            else {
                this.displayError(invalid);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    /**
     * @param {?} invalid
     * @return {?}
     */
    displayError(invalid) {
        if (invalid && !this.displayed) {
            this.container.createEmbeddedView(this.template);
            this.displayed = true;
        }
        else if (!invalid) {
            this.container.clear();
            this.displayed = false;
        }
    }
}
ClrIfError.decorators = [
    { type: Directive, args: [{ selector: '[clrIfError]' },] }
];
/** @nocollapse */
ClrIfError.ctorParameters = () => [
    { type: IfErrorService, decorators: [{ type: Optional }] },
    { type: NgControlService, decorators: [{ type: Optional }] },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
ClrIfError.propDecorators = {
    error: [{ type: Input, args: ['clrIfError',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy9jb21tb24vaWYtZXJyb3IvaWYtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJbkUsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7SUFDckIsWUFDc0IsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQzlDLFFBQTBCLEVBQzFCLFNBQTJCO1FBSGYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDOUMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUEwQjdCLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBekJqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDhGQUE4RixDQUFDLENBQUM7U0FDakg7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEQsb0ZBQW9GO1lBQ3BGLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQVFELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRU8sWUFBWSxDQUFDLE9BQWdCO1FBQ25DLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQWhERixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOzs7O1lBSjlCLGNBQWMsdUJBT2xCLFFBQVE7WUFOSixnQkFBZ0IsdUJBT3BCLFFBQVE7WUFYd0IsV0FBVztZQUFFLGdCQUFnQjs7O29CQXFDL0QsS0FBSyxTQUFDLFlBQVk7Ozs7SUFBbkIsMkJBQW1DOztJQUVuQyxtQ0FBMkM7O0lBQzNDLCtCQUFtQzs7SUFDbkMsNkJBQTJCOztJQS9CekIsb0NBQWtEOztJQUNsRCxzQ0FBc0Q7O0lBQ3RELDhCQUFrQzs7SUFDbEMsK0JBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSWZFcnJvclNlcnZpY2UgfSBmcm9tICcuL2lmLWVycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDb250cm9sU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9uZy1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xySWZFcnJvcl0nIH0pXG5leHBvcnQgY2xhc3MgQ2xySWZFcnJvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgaWZFcnJvclNlcnZpY2U6IElmRXJyb3JTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdDb250cm9sU2VydmljZTogTmdDb250cm9sU2VydmljZSxcbiAgICBwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIGlmICghdGhpcy5pZkVycm9yU2VydmljZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbHJJZkVycm9yIGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGEgZm9ybSBjb250cm9sIGNvbnRhaW5lciBlbGVtZW50IGxpa2UgY2xyLWlucHV0LWNvbnRhaW5lcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlFcnJvcihmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5uZ0NvbnRyb2xTZXJ2aWNlLmNvbnRyb2xDaGFuZ2VzLnN1YnNjcmliZShjb250cm9sID0+IHtcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaWZFcnJvclNlcnZpY2Uuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoaW52YWxpZCA9PiB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc3BlY2lmaWMgZXJyb3IgdG8gdHJhY2ssIGNoZWNrIGl0LCBvdGhlcndpc2UgY2hlY2sgb3ZlcmFsbCB2YWxpZGl0eVxuICAgICAgICBpZiAodGhpcy5lcnJvciAmJiB0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcih0aGlzLmNvbnRyb2wuaGFzRXJyb3IodGhpcy5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGludmFsaWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBASW5wdXQoJ2NscklmRXJyb3InKSBlcnJvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBkaXNwbGF5ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2w7XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheUVycm9yKGludmFsaWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaW52YWxpZCAmJiAhdGhpcy5kaXNwbGF5ZWQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuZGlzcGxheWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFpbnZhbGlkKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5kaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==