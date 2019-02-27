/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild } from '@angular/core';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';
var ClrRadioWrapper = /** @class */ (function () {
    function ClrRadioWrapper() {
        // We need both _dynamic for HostWrapper and ContentChild(ClrLabel) in cases where
        // the user puts a radio inside a wrapper without a label, host wrapping doesn't apply
        // but we'd still need to insert a label
        this._dynamic = false;
    }
    /**
     * @return {?}
     */
    ClrRadioWrapper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.label) {
            this.label.disableGrid();
        }
    };
    ClrRadioWrapper.decorators = [
        { type: Component, args: [{
                    selector: 'clr-radio-wrapper',
                    template: "\n    <ng-content select=\"[clrRadio]\"></ng-content>\n    <ng-content select=\"label\"></ng-content>\n    <label *ngIf=\"!label\"></label>\n  ",
                    host: {
                        '[class.clr-radio-wrapper]': 'true',
                    },
                    providers: [ControlIdService]
                }] }
    ];
    ClrRadioWrapper.propDecorators = {
        label: [{ type: ContentChild, args: [ClrLabel,] }]
    };
    return ClrRadioWrapper;
}());
export { ClrRadioWrapper };
if (false) {
    /** @type {?} */
    ClrRadioWrapper.prototype._dynamic;
    /** @type {?} */
    ClrRadioWrapper.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8td3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL3JhZGlvL3JhZGlvLXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBQUE7Ozs7UUFnQkUsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVFuQixDQUFDOzs7O0lBTEMsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlKQUlUO29CQUNELElBQUksRUFBRTt3QkFDSiwyQkFBMkIsRUFBRSxNQUFNO3FCQUNwQztvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7Ozt3QkFNRSxZQUFZLFNBQUMsUUFBUTs7SUFPeEIsc0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQVpZLGVBQWU7OztJQUkxQixtQ0FBaUI7O0lBQ2pCLGdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHluYW1pY1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy9ob3N0LXdyYXBwaW5nL2R5bmFtaWMtd3JhcHBlcic7XG5pbXBvcnQgeyBDb250cm9sSWRTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItcmFkaW8td3JhcHBlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NsclJhZGlvXVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bGFiZWwgKm5nSWY9XCIhbGFiZWxcIj48L2xhYmVsPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jbHItcmFkaW8td3JhcHBlcl0nOiAndHJ1ZScsXG4gIH0sXG4gIHByb3ZpZGVyczogW0NvbnRyb2xJZFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJSYWRpb1dyYXBwZXIgaW1wbGVtZW50cyBEeW5hbWljV3JhcHBlciwgT25Jbml0IHtcbiAgLy8gV2UgbmVlZCBib3RoIF9keW5hbWljIGZvciBIb3N0V3JhcHBlciBhbmQgQ29udGVudENoaWxkKENsckxhYmVsKSBpbiBjYXNlcyB3aGVyZVxuICAvLyB0aGUgdXNlciBwdXRzIGEgcmFkaW8gaW5zaWRlIGEgd3JhcHBlciB3aXRob3V0IGEgbGFiZWwsIGhvc3Qgd3JhcHBpbmcgZG9lc24ndCBhcHBseVxuICAvLyBidXQgd2UnZCBzdGlsbCBuZWVkIHRvIGluc2VydCBhIGxhYmVsXG4gIF9keW5hbWljID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGQoQ2xyTGFiZWwpIGxhYmVsOiBDbHJMYWJlbDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbC5kaXNhYmxlR3JpZCgpO1xuICAgIH1cbiAgfVxufVxuIl19