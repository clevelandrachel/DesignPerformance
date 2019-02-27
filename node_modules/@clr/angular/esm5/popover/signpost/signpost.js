/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, ElementRef } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';
import { ClrSignpostTrigger } from './signpost-trigger';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
var ClrSignpost = /** @class */ (function () {
    function ClrSignpost(commonStrings) {
        this.commonStrings = commonStrings;
        /**
         * *******
         * \@property useCustomTrigger
         *
         * \@description
         * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
         *
         */
        this.useCustomTrigger = false;
    }
    Object.defineProperty(ClrSignpost.prototype, "customTrigger", {
        /**********
         * @property signPostTrigger
         *
         * @description
         * Uses ContentChild to check for a user supplied element with the ClrSignpostTrigger on it.
         *
         */
        set: /**
         * *******
         * \@property signPostTrigger
         *
         * \@description
         * Uses ContentChild to check for a user supplied element with the ClrSignpostTrigger on it.
         *
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            this.useCustomTrigger = !!trigger;
        },
        enumerable: true,
        configurable: true
    });
    ClrSignpost.decorators = [
        { type: Component, args: [{
                    selector: 'clr-signpost',
                    template: "\n        <ng-container *ngIf=\"!useCustomTrigger\">\n            <button\n                type=\"button\"\n                class=\"signpost-action btn btn-small btn-link\"\n                clrSignpostTrigger>\n                <clr-icon shape=\"info\" [attr.title]=\"commonStrings.info\"></clr-icon>\n            </button>\n        </ng-container>\n        \n        <ng-content></ng-content>\n    ",
                    host: { '[class.signpost]': 'true' },
                    providers: [IfOpenService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }]
                }] }
    ];
    /** @nocollapse */
    ClrSignpost.ctorParameters = function () { return [
        { type: ClrCommonStrings }
    ]; };
    ClrSignpost.propDecorators = {
        customTrigger: [{ type: ContentChild, args: [ClrSignpostTrigger,] }]
    };
    return ClrSignpost;
}());
export { ClrSignpost };
if (false) {
    /**
     * *******
     * \@property useCustomTrigger
     *
     * \@description
     * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
     *
     * @type {?}
     */
    ClrSignpost.prototype.useCustomTrigger;
    /** @type {?} */
    ClrSignpost.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJwb3BvdmVyL3NpZ25wb3N0L3NpZ25wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUE0QkUscUJBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjs7Ozs7Ozs7O1FBUzNDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQVRZLENBQUM7SUFrQnRELHNCQUNJLHNDQUFhO1FBUmpCOzs7Ozs7V0FNRzs7Ozs7Ozs7Ozs7UUFDSCxVQUNrQixPQUEyQjtZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdaQVdQO29CQUNILElBQUksRUFBRSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRTtvQkFDcEMsU0FBUyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQztpQkFDdEY7Ozs7Z0JBbEJRLGdCQUFnQjs7O2dDQWdEdEIsWUFBWSxTQUFDLGtCQUFrQjs7SUFJbEMsa0JBQUM7Q0FBQSxBQWxERCxJQWtEQztTQXZCWSxXQUFXOzs7Ozs7Ozs7OztJQVV0Qix1Q0FBeUM7O0lBVDdCLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElmT3BlblNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1vcGVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUE9QT1ZFUl9IT1NUX0FOQ0hPUiB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyLWhvc3QtYW5jaG9yLnRva2VuJztcblxuaW1wb3J0IHsgQ2xyU2lnbnBvc3RUcmlnZ2VyIH0gZnJvbSAnLi9zaWducG9zdC10cmlnZ2VyJztcbmltcG9ydCB7IENsckNvbW1vblN0cmluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9pMThuL2NvbW1vbi1zdHJpbmdzLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1zaWducG9zdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlQ3VzdG9tVHJpZ2dlclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2lnbnBvc3QtYWN0aW9uIGJ0biBidG4tc21hbGwgYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgIGNsclNpZ25wb3N0VHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8Y2xyLWljb24gc2hhcGU9XCJpbmZvXCIgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5pbmZvXCI+PC9jbHItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3Muc2lnbnBvc3RdJzogJ3RydWUnIH0sXG4gIHByb3ZpZGVyczogW0lmT3BlblNlcnZpY2UsIHsgcHJvdmlkZTogUE9QT1ZFUl9IT1NUX0FOQ0hPUiwgdXNlRXhpc3Rpbmc6IEVsZW1lbnRSZWYgfV0sXG59KVxuXG4vKioqKioqKioqXG4gKlxuICogQGNsYXNzIENsclNpZ25wb3N0XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDbGFzcyB1c2VkIHRvIGNvbmZpZ3VyZSBhbmQgY29udHJvbCB0aGUgc3RhdGUgb2YgYSBDbHJTaWducG9zdCBhbmQgaXRzIGFzc29jaWF0ZWQgQ2xyU2lnbnBvc3RDb250ZW50LlxuICogSXQgc3VwcG9ydHMgdGhlIGNsclBvc2l0aW9uIHdpdGggYSAncmlnaHQtbWlkZGxlJyBkZWZhdWx0LlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENsclNpZ25wb3N0IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3MpIHt9XG5cbiAgLyoqKioqKioqKipcbiAgICogQHByb3BlcnR5IHVzZUN1c3RvbVRyaWdnZXJcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEZsYWcgdXNlZCB0byBkZXRlcm1pbmUgaWYgd2UgbmVlZCB0byB1c2UgdGhlIGRlZmF1bHQgdHJpZ2dlciBvciBhIHVzZXIgc3VwcGxpZWQgdHJpZ2dlciBlbGVtZW50LlxuICAgKlxuICAgKi9cbiAgcHVibGljIHVzZUN1c3RvbVRyaWdnZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKioqKioqKioqKlxuICAgKiBAcHJvcGVydHkgc2lnblBvc3RUcmlnZ2VyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBVc2VzIENvbnRlbnRDaGlsZCB0byBjaGVjayBmb3IgYSB1c2VyIHN1cHBsaWVkIGVsZW1lbnQgd2l0aCB0aGUgQ2xyU2lnbnBvc3RUcmlnZ2VyIG9uIGl0LlxuICAgKlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChDbHJTaWducG9zdFRyaWdnZXIpXG4gIHNldCBjdXN0b21UcmlnZ2VyKHRyaWdnZXI6IENsclNpZ25wb3N0VHJpZ2dlcikge1xuICAgIHRoaXMudXNlQ3VzdG9tVHJpZ2dlciA9ICEhdHJpZ2dlcjtcbiAgfVxufVxuIl19