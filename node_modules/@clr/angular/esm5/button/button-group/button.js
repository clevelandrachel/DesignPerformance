/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Optional, Output, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { ClrLoadingState } from '../../utils/loading/loading';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ButtonInGroupService } from '../providers/button-in-group.service';
var ClrButton = /** @class */ (function () {
    function ClrButton(buttonInGroupService) {
        this.buttonInGroupService = buttonInGroupService;
        this._enableService = false;
        this._inMenu = false;
        this._classNames = 'btn';
        this._name = null;
        this._type = null;
        this._disabled = null;
        this._click = new EventEmitter(false);
    }
    Object.defineProperty(ClrButton.prototype, "inMenu", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inMenu;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = !!value;
            if (this._inMenu !== value) {
                this._inMenu = value;
                // We check if the service flag is enabled
                // and if the service exists because the service is optional
                if (this._enableService && this.buttonInGroupService) {
                    this.buttonInGroupService.updateButtonGroup(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrButton.prototype, "classNames", {
        get: /**
         * @return {?}
         */
        function () {
            return this._classNames;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                /** @type {?} */
                var classNames = value.split(' ');
                if (classNames.indexOf('btn') === -1) {
                    classNames.push('btn');
                }
                this._classNames = classNames.join(' ');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrButton.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._name = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrButton.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrButton.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== null && value !== false) {
                this._disabled = '';
            }
            else {
                this._disabled = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ClrButton.prototype.loadingStateChange = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.loading = state === ClrLoadingState.LOADING;
    };
    /**
     * @return {?}
     */
    ClrButton.prototype.emitClick = /**
     * @return {?}
     */
    function () {
        this._click.emit(true);
    };
    /**
     * @return {?}
     */
    ClrButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._enableService = true;
    };
    ClrButton.decorators = [
        { type: Component, args: [{
                    selector: 'clr-button',
                    template: "\n        <ng-template #buttonProjectedRef>\n            <button \n                [class]=\"classNames\" \n                (click)=\"emitClick()\"\n                [attr.type]=\"type\"\n                [attr.name]=\"name\"\n                [attr.disabled]=\"disabled\">\n                <span class=\"spinner spinner-inline\" *ngIf=\"loading\"></span>\n                <ng-content></ng-content>\n            </button>\n        </ng-template>\n    ",
                    providers: [{ provide: LoadingListener, useExisting: ClrButton }]
                }] }
    ];
    /** @nocollapse */
    ClrButton.ctorParameters = function () { return [
        { type: ButtonInGroupService, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
    ClrButton.propDecorators = {
        templateRef: [{ type: ViewChild, args: ['buttonProjectedRef',] }],
        inMenu: [{ type: Input, args: ['clrInMenu',] }],
        classNames: [{ type: Input, args: ['class',] }],
        name: [{ type: Input, args: ['name',] }],
        type: [{ type: Input, args: ['type',] }],
        disabled: [{ type: Input, args: ['disabled',] }],
        _click: [{ type: Output, args: ['click',] }]
    };
    return ClrButton;
}());
export { ClrButton };
if (false) {
    /** @type {?} */
    ClrButton.prototype._enableService;
    /** @type {?} */
    ClrButton.prototype.templateRef;
    /** @type {?} */
    ClrButton.prototype._inMenu;
    /** @type {?} */
    ClrButton.prototype._classNames;
    /** @type {?} */
    ClrButton.prototype._name;
    /** @type {?} */
    ClrButton.prototype._type;
    /** @type {?} */
    ClrButton.prototype._disabled;
    /** @type {?} */
    ClrButton.prototype.loading;
    /** @type {?} */
    ClrButton.prototype._click;
    /** @type {?} */
    ClrButton.prototype.buttonInGroupService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2J1dHRvbi1ncm91cC9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU1RTtJQXNCRSxtQkFHUyxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVAzQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQVVoQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBbUJ6QixnQkFBVyxHQUFXLEtBQUssQ0FBQztRQWlCNUIsVUFBSyxHQUFXLElBQUksQ0FBQztRQWFyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBYXJCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFxQmIsV0FBTSxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztJQXJGL0UsQ0FBQztJQUlKLHNCQUFJLDZCQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUNXLEtBQWM7WUFDdkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLDBDQUEwQztnQkFDMUMsNERBQTREO2dCQUM1RCxJQUFJLElB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SUFhN0IsMEJBQTZCOztJQWE3Qiw4QkFBOEI7O0lBZTlCLDRCQUF3Qjs7SUFNeEIsMkJBQWtGOztJQXhGaEYseUNBRWlEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQsIFNraXBTZWxmLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckxvYWRpbmdTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2xvYWRpbmcvbG9hZGluZyc7XG5pbXBvcnQgeyBMb2FkaW5nTGlzdGVuZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2FkaW5nL2xvYWRpbmctbGlzdGVuZXInO1xuaW1wb3J0IHsgQnV0dG9uSW5Hcm91cFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvYnV0dG9uLWluLWdyb3VwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLXRlbXBsYXRlICNidXR0b25Qcm9qZWN0ZWRSZWY+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJjbGFzc05hbWVzXCIgXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImVtaXRDbGljaygpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci50eXBlXT1cInR5cGVcIlxuICAgICAgICAgICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNwaW5uZXIgc3Bpbm5lci1pbmxpbmVcIiAqbmdJZj1cImxvYWRpbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBMb2FkaW5nTGlzdGVuZXIsIHVzZUV4aXN0aW5nOiBDbHJCdXR0b24gfV0sXG59KVxuZXhwb3J0IGNsYXNzIENsckJ1dHRvbiBpbXBsZW1lbnRzIExvYWRpbmdMaXN0ZW5lciB7XG4gIHByaXZhdGUgX2VuYWJsZVNlcnZpY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdidXR0b25Qcm9qZWN0ZWRSZWYnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8Q2xyQnV0dG9uPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2tpcFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHVibGljIGJ1dHRvbkluR3JvdXBTZXJ2aWNlOiBCdXR0b25Jbkdyb3VwU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBfaW5NZW51OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IGluTWVudSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5NZW51O1xuICB9XG5cbiAgQElucHV0KCdjbHJJbk1lbnUnKVxuICBzZXQgaW5NZW51KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgIGlmICh0aGlzLl9pbk1lbnUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9pbk1lbnUgPSB2YWx1ZTtcbiAgICAgIC8vIFdlIGNoZWNrIGlmIHRoZSBzZXJ2aWNlIGZsYWcgaXMgZW5hYmxlZFxuICAgICAgLy8gYW5kIGlmIHRoZSBzZXJ2aWNlIGV4aXN0cyBiZWNhdXNlIHRoZSBzZXJ2aWNlIGlzIG9wdGlvbmFsXG4gICAgICBpZiAodGhpcy5fZW5hYmxlU2VydmljZSAmJiB0aGlzLmJ1dHRvbkluR3JvdXBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uSW5Hcm91cFNlcnZpY2UudXBkYXRlQnV0dG9uR3JvdXAodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xhc3NOYW1lczogc3RyaW5nID0gJ2J0bic7XG5cbiAgZ2V0IGNsYXNzTmFtZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lcztcbiAgfVxuXG4gIEBJbnB1dCgnY2xhc3MnKVxuICBzZXQgY2xhc3NOYW1lcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXM6IHN0cmluZ1tdID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgIGlmIChjbGFzc05hbWVzLmluZGV4T2YoJ2J0bicpID09PSAtMSkge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2J0bicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuam9pbignICcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IG51bGw7XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgnbmFtZScpXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZyA9IG51bGw7XG5cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgndHlwZScpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBhbnkgPSBudWxsO1xuXG4gIGdldCBkaXNhYmxlZCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcblxuICBsb2FkaW5nU3RhdGVDaGFuZ2Uoc3RhdGU6IENsckxvYWRpbmdTdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZyA9IHN0YXRlID09PSBDbHJMb2FkaW5nU3RhdGUuTE9BRElORztcbiAgfVxuXG4gIEBPdXRwdXQoJ2NsaWNrJykgX2NsaWNrOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBlbWl0Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fY2xpY2suZW1pdCh0cnVlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGVTZXJ2aWNlID0gdHJ1ZTtcbiAgfVxufVxuIl19