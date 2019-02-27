/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive } from '@angular/core';
import { LayoutService } from './providers/layout.service';
import { IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER } from './providers/new-forms.service';
import { MarkControlService } from './providers/mark-control.service';
export class ClrForm {
    /**
     * @param {?} layoutService
     * @param {?} markControlService
     */
    constructor(layoutService, markControlService) {
        this.layoutService = layoutService;
        this.markControlService = markControlService;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.markControlService.markAsDirty();
    }
}
ClrForm.decorators = [
    { type: Directive, args: [{
                selector: '[clrForm]',
                providers: [LayoutService, MarkControlService, IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER],
                host: {
                    '[class.clr-form]': 'true',
                    '[class.clr-form-horizontal]': 'layoutService.isHorizontal()',
                    '[class.clr-form-compact]': 'layoutService.isCompact()',
                },
            },] }
];
/** @nocollapse */
ClrForm.ctorParameters = () => [
    { type: LayoutService },
    { type: MarkControlService }
];
if (false) {
    /** @type {?} */
    ClrForm.prototype.layoutService;
    /** @type {?} */
    ClrForm.prototype.markControlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBV3RFLE1BQU0sT0FBTyxPQUFPOzs7OztJQUNsQixZQUFtQixhQUE0QixFQUFVLGtCQUFzQztRQUE1RSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBRyxDQUFDOzs7O0lBRW5HLFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsaUNBQWlDLENBQUM7Z0JBQ2pGLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxNQUFNO29CQUMxQiw2QkFBNkIsRUFBRSw4QkFBOEI7b0JBQzdELDBCQUEwQixFQUFFLDJCQUEyQjtpQkFDeEQ7YUFDRjs7OztZQVpRLGFBQWE7WUFFYixrQkFBa0I7Ozs7SUFZYixnQ0FBbUM7O0lBQUUscUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvbGF5b3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSVNfTkVXX0ZPUk1TX0xBWU9VVF9UUlVFX1BST1ZJREVSIH0gZnJvbSAnLi9wcm92aWRlcnMvbmV3LWZvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFya0NvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvbWFyay1jb250cm9sLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xyRm9ybV0nLFxuICBwcm92aWRlcnM6IFtMYXlvdXRTZXJ2aWNlLCBNYXJrQ29udHJvbFNlcnZpY2UsIElTX05FV19GT1JNU19MQVlPVVRfVFJVRV9QUk9WSURFUl0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNsci1mb3JtXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmNsci1mb3JtLWhvcml6b250YWxdJzogJ2xheW91dFNlcnZpY2UuaXNIb3Jpem9udGFsKCknLFxuICAgICdbY2xhc3MuY2xyLWZvcm0tY29tcGFjdF0nOiAnbGF5b3V0U2VydmljZS5pc0NvbXBhY3QoKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckZvcm0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGF5b3V0U2VydmljZTogTGF5b3V0U2VydmljZSwgcHJpdmF0ZSBtYXJrQ29udHJvbFNlcnZpY2U6IE1hcmtDb250cm9sU2VydmljZSkge31cblxuICBtYXJrQXNEaXJ0eSgpIHtcbiAgICB0aGlzLm1hcmtDb250cm9sU2VydmljZS5tYXJrQXNEaXJ0eSgpO1xuICB9XG59XG4iXX0=