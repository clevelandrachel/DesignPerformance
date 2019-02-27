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
/*********
 *
 * @class ClrSignpost
 *
 * @description
 * Class used to configure and control the state of a ClrSignpost and its associated ClrSignpostContent.
 * It supports the clrPosition with a 'right-middle' default.
 *
 */
export class ClrSignpost {
    /**
     * @param {?} commonStrings
     */
    constructor(commonStrings) {
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
    /**
     * *******
     * \@property signPostTrigger
     *
     * \@description
     * Uses ContentChild to check for a user supplied element with the ClrSignpostTrigger on it.
     *
     * @param {?} trigger
     * @return {?}
     */
    set customTrigger(trigger) {
        this.useCustomTrigger = !!trigger;
    }
}
ClrSignpost.decorators = [
    { type: Component, args: [{
                selector: 'clr-signpost',
                template: `
        <ng-container *ngIf="!useCustomTrigger">
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                clrSignpostTrigger>
                <clr-icon shape="info" [attr.title]="commonStrings.info"></clr-icon>
            </button>
        </ng-container>
        
        <ng-content></ng-content>
    `,
                host: { '[class.signpost]': 'true' },
                providers: [IfOpenService, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }]
            }] }
];
/** @nocollapse */
ClrSignpost.ctorParameters = () => [
    { type: ClrCommonStrings }
];
ClrSignpost.propDecorators = {
    customTrigger: [{ type: ContentChild, args: [ClrSignpostTrigger,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJwb3BvdmVyL3NpZ25wb3N0L3NpZ25wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFvQjdFOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBbUIsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCOzs7Ozs7Ozs7UUFTM0MscUJBQWdCLEdBQVksS0FBSyxDQUFDO0lBVFksQ0FBQzs7Ozs7Ozs7Ozs7SUFrQnRELElBQ0ksYUFBYSxDQUFDLE9BQTJCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7S0FXUDtnQkFDSCxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDdEY7Ozs7WUFsQlEsZ0JBQWdCOzs7NEJBZ0R0QixZQUFZLFNBQUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7SUFUaEMsdUNBQXlDOztJQVQ3QixvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtb3Blbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBPUE9WRVJfSE9TVF9BTkNIT1IgfSBmcm9tICcuLi9jb21tb24vcG9wb3Zlci1ob3N0LWFuY2hvci50b2tlbic7XG5cbmltcG9ydCB7IENsclNpZ25wb3N0VHJpZ2dlciB9IGZyb20gJy4vc2lnbnBvc3QtdHJpZ2dlcic7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItc2lnbnBvc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZUN1c3RvbVRyaWdnZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNpZ25wb3N0LWFjdGlvbiBidG4gYnRuLXNtYWxsIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICBjbHJTaWducG9zdFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgPGNsci1pY29uIHNoYXBlPVwiaW5mb1wiIFthdHRyLnRpdGxlXT1cImNvbW1vblN0cmluZ3MuaW5mb1wiPjwvY2xyLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLnNpZ25wb3N0XSc6ICd0cnVlJyB9LFxuICBwcm92aWRlcnM6IFtJZk9wZW5TZXJ2aWNlLCB7IHByb3ZpZGU6IFBPUE9WRVJfSE9TVF9BTkNIT1IsIHVzZUV4aXN0aW5nOiBFbGVtZW50UmVmIH1dLFxufSlcblxuLyoqKioqKioqKlxuICpcbiAqIEBjbGFzcyBDbHJTaWducG9zdFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ2xhc3MgdXNlZCB0byBjb25maWd1cmUgYW5kIGNvbnRyb2wgdGhlIHN0YXRlIG9mIGEgQ2xyU2lnbnBvc3QgYW5kIGl0cyBhc3NvY2lhdGVkIENsclNpZ25wb3N0Q29udGVudC5cbiAqIEl0IHN1cHBvcnRzIHRoZSBjbHJQb3NpdGlvbiB3aXRoIGEgJ3JpZ2h0LW1pZGRsZScgZGVmYXVsdC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHJTaWducG9zdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzKSB7fVxuXG4gIC8qKioqKioqKioqXG4gICAqIEBwcm9wZXJ0eSB1c2VDdXN0b21UcmlnZ2VyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBGbGFnIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gdXNlIHRoZSBkZWZhdWx0IHRyaWdnZXIgb3IgYSB1c2VyIHN1cHBsaWVkIHRyaWdnZXIgZWxlbWVudC5cbiAgICpcbiAgICovXG4gIHB1YmxpYyB1c2VDdXN0b21UcmlnZ2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqKioqKioqKipcbiAgICogQHByb3BlcnR5IHNpZ25Qb3N0VHJpZ2dlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogVXNlcyBDb250ZW50Q2hpbGQgdG8gY2hlY2sgZm9yIGEgdXNlciBzdXBwbGllZCBlbGVtZW50IHdpdGggdGhlIENsclNpZ25wb3N0VHJpZ2dlciBvbiBpdC5cbiAgICpcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoQ2xyU2lnbnBvc3RUcmlnZ2VyKVxuICBzZXQgY3VzdG9tVHJpZ2dlcih0cmlnZ2VyOiBDbHJTaWducG9zdFRyaWdnZXIpIHtcbiAgICB0aGlzLnVzZUN1c3RvbVRyaWdnZXIgPSAhIXRyaWdnZXI7XG4gIH1cbn1cbiJdfQ==