/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
/** @type {?} */
export var TOGGLE_SERVICE = new InjectionToken(undefined);
/**
 * @return {?}
 */
export function ToggleServiceFactory() {
    return new BehaviorSubject(false);
}
/** @type {?} */
export var TOGGLE_SERVICE_PROVIDER = { provide: TOGGLE_SERVICE, useFactory: ToggleServiceFactory };
var ClrPasswordContainer = /** @class */ (function () {
    function ClrPasswordContainer(ifErrorService, layoutService, controlClassService, focusService, ngControlService, toggleService, commonStrings) {
        var _this = this;
        this.ifErrorService = ifErrorService;
        this.layoutService = layoutService;
        this.controlClassService = controlClassService;
        this.focusService = focusService;
        this.ngControlService = ngControlService;
        this.toggleService = toggleService;
        this.commonStrings = commonStrings;
        this.subscriptions = [];
        this.invalid = false;
        this._dynamic = false;
        this.show = false;
        this.focus = false;
        this._toggle = true;
        this.subscriptions.push(this.ifErrorService.statusChanges.subscribe(function (invalid) {
            _this.invalid = invalid;
        }));
        this.subscriptions.push(this.focusService.focusChange.subscribe(function (state) {
            _this.focus = state;
        }));
        this.subscriptions.push(this.ngControlService.controlChanges.subscribe(function (control) {
            _this.control = control;
        }));
    }
    Object.defineProperty(ClrPasswordContainer.prototype, "clrToggle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._toggle;
        },
        set: /**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            this._toggle = state;
            if (!state) {
                this.show = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrPasswordContainer.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
        this.toggleService.next(this.show);
    };
    /**
     * @return {?}
     */
    ClrPasswordContainer.prototype.controlClass = /**
     * @return {?}
     */
    function () {
        return this.controlClassService.controlClass(this.invalid, this.addGrid());
    };
    /**
     * @return {?}
     */
    ClrPasswordContainer.prototype.addGrid = /**
     * @return {?}
     */
    function () {
        if (this.layoutService && !this.layoutService.isVertical()) {
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    ClrPasswordContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscriptions) {
            this.subscriptions.map(function (sub) { return sub.unsubscribe(); });
        }
    };
    ClrPasswordContainer.decorators = [
        { type: Component, args: [{
                    selector: 'clr-password-container',
                    template: "\n    <ng-content select=\"label\"></ng-content>\n    <label *ngIf=\"!label && addGrid()\"></label>\n    <div class=\"clr-control-container\" [ngClass]=\"controlClass()\">\n      <div class=\"clr-input-wrapper\">\n        <div class=\"clr-input-group\" [class.clr-focus]=\"focus\">\n          <ng-content select=\"[clrPassword]\"></ng-content>\n          <clr-icon *ngIf=\"!show && clrToggle\"\n            shape=\"eye\" \n            class=\"clr-input-group-icon-action\"\n            [attr.title]=\"commonStrings.show\"\n            (click)=\"toggle()\"></clr-icon>\n          <clr-icon *ngIf=\"show && clrToggle\" \n            shape=\"eye-hide\"\n            class=\"clr-input-group-icon-action\"\n            [attr.title]=\"commonStrings.hide\"\n            (click)=\"toggle()\"></clr-icon>\n        </div>\n        <clr-icon *ngIf=\"invalid\" class=\"clr-validate-icon\" shape=\"exclamation-circle\" aria-hidden=\"true\"></clr-icon>\n      </div>\n      <ng-content select=\"clr-control-helper\" *ngIf=\"!invalid\"></ng-content>\n      <ng-content select=\"clr-control-error\" *ngIf=\"invalid\"></ng-content>\n    </div>\n    ",
                    host: {
                        '[class.clr-form-control]': 'true',
                        '[class.clr-form-control-disabled]': 'control?.disabled',
                        '[class.clr-row]': 'addGrid()',
                    },
                    providers: [
                        IfErrorService,
                        NgControlService,
                        ControlIdService,
                        ControlClassService,
                        FocusService,
                        TOGGLE_SERVICE_PROVIDER,
                    ]
                }] }
    ];
    /** @nocollapse */
    ClrPasswordContainer.ctorParameters = function () { return [
        { type: IfErrorService },
        { type: LayoutService, decorators: [{ type: Optional }] },
        { type: ControlClassService },
        { type: FocusService },
        { type: NgControlService },
        { type: BehaviorSubject, decorators: [{ type: Inject, args: [TOGGLE_SERVICE,] }] },
        { type: ClrCommonStrings }
    ]; };
    ClrPasswordContainer.propDecorators = {
        clrToggle: [{ type: Input, args: ['clrToggle',] }],
        label: [{ type: ContentChild, args: [ClrLabel,] }]
    };
    return ClrPasswordContainer;
}());
export { ClrPasswordContainer };
if (false) {
    /** @type {?} */
    ClrPasswordContainer.prototype.subscriptions;
    /** @type {?} */
    ClrPasswordContainer.prototype.invalid;
    /** @type {?} */
    ClrPasswordContainer.prototype.control;
    /** @type {?} */
    ClrPasswordContainer.prototype._dynamic;
    /** @type {?} */
    ClrPasswordContainer.prototype.show;
    /** @type {?} */
    ClrPasswordContainer.prototype.focus;
    /** @type {?} */
    ClrPasswordContainer.prototype._toggle;
    /** @type {?} */
    ClrPasswordContainer.prototype.label;
    /** @type {?} */
    ClrPasswordContainer.prototype.ifErrorService;
    /** @type {?} */
    ClrPasswordContainer.prototype.layoutService;
    /** @type {?} */
    ClrPasswordContainer.prototype.controlClassService;
    /** @type {?} */
    ClrPasswordContainer.prototype.focusService;
    /** @type {?} */
    ClrPasswordContainer.prototype.ngControlService;
    /** @type {?} */
    ClrPasswordContainer.prototype.toggleService;
    /** @type {?} */
    ClrPasswordContainer.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvcGFzc3dvcmQvcGFzc3dvcmQtY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUdyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBRTdFLE1BQU0sS0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQTJCLFNBQVMsQ0FBQzs7OztBQUNyRixNQUFNLFVBQVUsb0JBQW9CO0lBQ2xDLE9BQU8sSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7QUFDRCxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRTtBQUVwRztJQTZERSw4QkFDVSxjQUE4QixFQUNsQixhQUE0QixFQUN4QyxtQkFBd0Ms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RCxpQkFBaUIsRUFBRSxXQUFXO3FCQUMvQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLHVCQUF1QjtxQkFDeEI7aUJBQ0Y7Ozs7Z0JBdERRLGNBQWM7Z0JBS2QsYUFBYSx1QkF5RWpCLFFBQVE7Z0JBNUVKLG1CQUFtQjtnQkFFbkIsWUFBWTtnQkFFWixnQkFBZ0I7Z0JBVGhCLGVBQWUsdUJBcUZuQixNQUFNLFNBQUMsY0FBYztnQkEzRWpCLGdCQUFnQjs7OzRCQXlEdEIsS0FBSyxTQUFDLFdBQVc7d0JBVWpCLFlBQVksU0FBQyxRQUFROztJQWlEeEIsMkJBQUM7Q0FBQSxBQTVHRCxJQTRHQztTQXBFWSxvQkFBb0I7OztJQUMvQiw2Q0FBMkM7O0lBQzNDLHVDQUFnQjs7SUFDaEIsdUNBQW1COztJQUNuQix3Q0FBaUI7O0lBQ2pCLG9DQUFhOztJQUNiLHFDQUFjOztJQUNkLHVDQUF1Qjs7SUFZdkIscUNBQXdDOztJQUd0Qyw4Q0FBc0M7O0lBQ3RDLDZDQUFnRDs7SUFDaEQsbURBQWdEOztJQUNoRCw0Q0FBaUM7O0lBQ2pDLGdEQUEwQzs7SUFDMUMsNkNBQXVFOztJQUN2RSw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5qZWN0LCBJbmplY3Rpb25Ub2tlbiwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEeW5hbWljV3JhcHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2hvc3Qtd3JhcHBpbmcvZHluYW1pYy13cmFwcGVyJztcblxuaW1wb3J0IHsgSWZFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vaWYtZXJyb3IvaWYtZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBDbHJMYWJlbCB9IGZyb20gJy4uL2NvbW1vbi9sYWJlbCc7XG5pbXBvcnQgeyBDb250cm9sQ2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbElkU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvY29udHJvbC1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvY3VzU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9uZy1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IFRPR0dMRV9TRVJWSUNFID0gbmV3IEluamVjdGlvblRva2VuPEJlaGF2aW9yU3ViamVjdDxib29sZWFuPj4odW5kZWZpbmVkKTtcbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGVTZXJ2aWNlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xufVxuZXhwb3J0IGNvbnN0IFRPR0dMRV9TRVJWSUNFX1BST1ZJREVSID0geyBwcm92aWRlOiBUT0dHTEVfU0VSVklDRSwgdXNlRmFjdG9yeTogVG9nZ2xlU2VydmljZUZhY3RvcnkgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXBhc3N3b3JkLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgPGxhYmVsICpuZ0lmPVwiIWxhYmVsICYmIGFkZEdyaWQoKVwiPjwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImNsci1jb250cm9sLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImNvbnRyb2xDbGFzcygpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2xyLWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsci1pbnB1dC1ncm91cFwiIFtjbGFzcy5jbHItZm9jdXNdPVwiZm9jdXNcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY2xyUGFzc3dvcmRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDxjbHItaWNvbiAqbmdJZj1cIiFzaG93ICYmIGNsclRvZ2dsZVwiXG4gICAgICAgICAgICBzaGFwZT1cImV5ZVwiIFxuICAgICAgICAgICAgY2xhc3M9XCJjbHItaW5wdXQtZ3JvdXAtaWNvbi1hY3Rpb25cIlxuICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5zaG93XCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPjwvY2xyLWljb24+XG4gICAgICAgICAgPGNsci1pY29uICpuZ0lmPVwic2hvdyAmJiBjbHJUb2dnbGVcIiBcbiAgICAgICAgICAgIHNoYXBlPVwiZXllLWhpZGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJjbHItaW5wdXQtZ3JvdXAtaWNvbi1hY3Rpb25cIlxuICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5oaWRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPjwvY2xyLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y2xyLWljb24gKm5nSWY9XCJpbnZhbGlkXCIgY2xhc3M9XCJjbHItdmFsaWRhdGUtaWNvblwiIHNoYXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9jbHItaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY2xyLWNvbnRyb2wtaGVscGVyXCIgKm5nSWY9XCIhaW52YWxpZFwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1jb250cm9sLWVycm9yXCIgKm5nSWY9XCJpbnZhbGlkXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNsci1mb3JtLWNvbnRyb2xdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuY2xyLWZvcm0tY29udHJvbC1kaXNhYmxlZF0nOiAnY29udHJvbD8uZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuY2xyLXJvd10nOiAnYWRkR3JpZCgpJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSWZFcnJvclNlcnZpY2UsXG4gICAgTmdDb250cm9sU2VydmljZSxcbiAgICBDb250cm9sSWRTZXJ2aWNlLFxuICAgIENvbnRyb2xDbGFzc1NlcnZpY2UsXG4gICAgRm9jdXNTZXJ2aWNlLFxuICAgIFRPR0dMRV9TRVJWSUNFX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJQYXNzd29yZENvbnRhaW5lciBpbXBsZW1lbnRzIER5bmFtaWNXcmFwcGVyLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgY29udHJvbDogTmdDb250cm9sO1xuICBfZHluYW1pYyA9IGZhbHNlO1xuICBzaG93ID0gZmFsc2U7XG4gIGZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX3RvZ2dsZSA9IHRydWU7XG5cbiAgQElucHV0KCdjbHJUb2dnbGUnKVxuICBzZXQgY2xyVG9nZ2xlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdG9nZ2xlID0gc3RhdGU7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdldCBjbHJUb2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvZ2dsZTtcbiAgfVxuICBAQ29udGVudENoaWxkKENsckxhYmVsKSBsYWJlbDogQ2xyTGFiZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpZkVycm9yU2VydmljZTogSWZFcnJvclNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udHJvbENsYXNzU2VydmljZTogQ29udHJvbENsYXNzU2VydmljZSxcbiAgICBwdWJsaWMgZm9jdXNTZXJ2aWNlOiBGb2N1c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ0NvbnRyb2xTZXJ2aWNlOiBOZ0NvbnRyb2xTZXJ2aWNlLFxuICAgIEBJbmplY3QoVE9HR0xFX1NFUlZJQ0UpIHByaXZhdGUgdG9nZ2xlU2VydmljZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+LFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5pZkVycm9yU2VydmljZS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShpbnZhbGlkID0+IHtcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZm9jdXNTZXJ2aWNlLmZvY3VzQ2hhbmdlLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXMgPSBzdGF0ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMubmdDb250cm9sU2VydmljZS5jb250cm9sQ2hhbmdlcy5zdWJzY3JpYmUoY29udHJvbCA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnRvZ2dsZVNlcnZpY2UubmV4dCh0aGlzLnNob3cpO1xuICB9XG5cbiAgY29udHJvbENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xDbGFzc1NlcnZpY2UuY29udHJvbENsYXNzKHRoaXMuaW52YWxpZCwgdGhpcy5hZGRHcmlkKCkpO1xuICB9XG5cbiAgYWRkR3JpZCgpIHtcbiAgICBpZiAodGhpcy5sYXlvdXRTZXJ2aWNlICYmICF0aGlzLmxheW91dFNlcnZpY2UuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLm1hcChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxufVxuIl19