/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Inject, Injector, Input, Optional } from '@angular/core';
import { AbstractPopover } from '../common/abstract-popover';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';
import { SIGNPOST_POSITIONS } from './signpost-positions';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
// aka where the arrow / pointer is at in relation to the anchor
/** @type {?} */
var POSITIONS = [
    'top-left',
    'top-middle',
    'top-right',
    'right-top',
    'right-middle',
    'right-bottom',
    'bottom-right',
    'bottom-middle',
    'bottom-left',
    'left-bottom',
    'left-middle',
    'left-top',
];
var ClrSignpostContent = /** @class */ (function (_super) {
    tslib_1.__extends(ClrSignpostContent, _super);
    function ClrSignpostContent(injector, parentHost, commonStrings) {
        var _this = this;
        if (!parentHost) {
            throw new Error('clr-signpost-content should only be used inside of a clr-signpost');
        }
        _this = _super.call(this, injector, parentHost) || this;
        _this.commonStrings = commonStrings;
        // Defaults
        _this.position = 'right-middle';
        _this.closeOnOutsideClick = true;
        return _this;
    }
    /**********
     *
     * @description
     * Close function that uses the signpost instance to toggle the state of the content popover.
     *
     */
    /**
     * *******
     *
     * \@description
     * Close function that uses the signpost instance to toggle the state of the content popover.
     *
     * @return {?}
     */
    ClrSignpostContent.prototype.close = /**
     * *******
     *
     * \@description
     * Close function that uses the signpost instance to toggle the state of the content popover.
     *
     * @return {?}
     */
    function () {
        this.ifOpenService.open = false;
    };
    Object.defineProperty(ClrSignpostContent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        /*********
         *
         * @description
         * A setter for the position of the ClrSignpostContent popover. This is a combination of the following:
         * - anchorPoint - where on the trigger to anchor the ClrSignpostContent
         * - popoverPoint - where on the ClrSignpostContent container to align with the anchorPoint
         * - offsetY - where on the Y axis to align the ClrSignpostContent so it meets specs
         * - offsetX - where on the X axis to align the ClrSignpostContent so it meets specs
         * There are 12 possible positions to place a ClrSignpostContent container:
         * - top-left
         * - top-middle
         * - top-right
         * - right-top
         * - right-middle
         * - right-bottom
         * - bottom-right
         * - bottom-middle
         * - bottom-left
         * - left-bottom
         * - left-middle
         * - left-top
         *
         * I think of it as follows for 'top-left' -> CONTAINER_SIDE-SIDE_POSITION. In this case CONTAINER_SIDE is 'top'
         * meaning the top of the trigger icon (above the icon that hides/shows) the ClrSignpostContent. And, SIDE_POSITION
         * is 'left' meaning two things: 1) the ClrSignpostContent container extends to the left and 2) the 'arrow/pointer'
         * linking the SingpostContent to the trigger points down at the horizontal center of the trigger icon.
         *
         * @param newPosition
         */
        set: /**
         * ******
         *
         * \@description
         * A setter for the position of the ClrSignpostContent popover. This is a combination of the following:
         * - anchorPoint - where on the trigger to anchor the ClrSignpostContent
         * - popoverPoint - where on the ClrSignpostContent container to align with the anchorPoint
         * - offsetY - where on the Y axis to align the ClrSignpostContent so it meets specs
         * - offsetX - where on the X axis to align the ClrSignpostContent so it meets specs
         * There are 12 possible positions to place a ClrSignpostContent container:
         * - top-left
         * - top-middle
         * - top-right
         * - right-top
         * - right-middle
         * - right-bottom
         * - bottom-right
         * - bottom-middle
         * - bottom-left
         * - left-bottom
         * - left-middle
         * - left-top
         *
         * I think of it as follows for 'top-left' -> CONTAINER_SIDE-SIDE_POSITION. In this case CONTAINER_SIDE is 'top'
         * meaning the top of the trigger icon (above the icon that hides/shows) the ClrSignpostContent. And, SIDE_POSITION
         * is 'left' meaning two things: 1) the ClrSignpostContent container extends to the left and 2) the 'arrow/pointer'
         * linking the SingpostContent to the trigger points down at the horizontal center of the trigger icon.
         *
         * @param {?} position
         * @return {?}
         */
        function (position) {
            // Ugh
            this.renderer.removeClass(this.el.nativeElement, this.position);
            if (position && POSITIONS.indexOf(position) > -1) {
                this._position = position;
            }
            else {
                this._position = 'right-middle';
            }
            // Ugh
            this.renderer.addClass(this.el.nativeElement, this.position);
            /** @type {?} */
            var setPosition = SIGNPOST_POSITIONS[this.position];
            this.anchorPoint = setPosition.anchorPoint;
            this.popoverPoint = setPosition.popoverPoint;
            this.popoverOptions.offsetY = setPosition.offsetY;
            this.popoverOptions.offsetX = setPosition.offsetX;
        },
        enumerable: true,
        configurable: true
    });
    ClrSignpostContent.decorators = [
        { type: Component, args: [{
                    selector: 'clr-signpost-content',
                    template: "\n        <div class=\"signpost-flex-wrap\">\n            <div class=\"popover-pointer\"></div>\n            <div class=\"signpost-content-header\">\n                <button type=\"button\" class=\"signpost-action close\" (click)=\"close()\">\n                    <clr-icon shape=\"close\" [attr.title]=\"commonStrings.close\"></clr-icon>\n                </button>\n            </div>\n            <div class=\"signpost-content-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                    host: { '[class.signpost-content]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ClrSignpostContent.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef, decorators: [{ type: Optional }, { type: Inject, args: [POPOVER_HOST_ANCHOR,] }] },
        { type: ClrCommonStrings }
    ]; };
    ClrSignpostContent.propDecorators = {
        position: [{ type: Input, args: ['clrPosition',] }]
    };
    return ClrSignpostContent;
}(AbstractPopover));
export { ClrSignpostContent };
if (false) {
    /** @type {?} */
    ClrSignpostContent.prototype.commonStrings;
    /** @type {?} */
    ClrSignpostContent.prototype._position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QtY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvc2lnbnBvc3Qvc2lnbnBvc3QtY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7O0lBR3ZFLFNBQVMsR0FBYTtJQUMxQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7Q0FDWDtBQUVEO0lBaUJ3Qyw4Q0FBZTtJQUNyRCw0QkFDRSxRQUFrQixFQUdsQixVQUFzQixFQUN0QixhQUErQjtRQUxqQyxpQkFlQztRQVJDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDdEY7UUFDRCxRQUFBLGtCQUFNLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBQztRQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxXQUFXO1FBQ1gsS0FBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs7SUFDbEMsQ0FBQztJQUlEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSCxrQ0FBSzs7Ozs7Ozs7SUFBTDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBSUQsc0JBQUksd0NBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0E0Qkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQ0gsVUFDYSxRQUFnQjtZQUMzQixNQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLElBQUksUUFBUSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2FBQ2pDO1lBQ0QsTUFBTTtZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBRXZELFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BELENBQUM7OztPQWhEQTs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMmdCQVlQO29CQUNILElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtpQkFDN0M7Ozs7Z0JBeEN1QyxRQUFRO2dCQUE1QixVQUFVLHVCQTRDekIsUUFBUSxZQUNSLE1BQU0sU0FBQyxtQkFBbUI7Z0JBdkN0QixnQkFBZ0I7OzsyQkFvR3RCLEtBQUssU0FBQyxhQUFhOztJQWtCdEIseUJBQUM7Q0FBQSxBQXBHRCxDQWlCd0MsZUFBZSxHQW1GdEQ7U0FuRlksa0JBQWtCOzs7SUFrQjdCLDJDQUFnQzs7SUFZaEMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdG9yLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWJzdHJhY3RQb3BvdmVyIH0gZnJvbSAnLi4vY29tbW9uL2Fic3RyYWN0LXBvcG92ZXInO1xuaW1wb3J0IHsgUE9QT1ZFUl9IT1NUX0FOQ0hPUiB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyLWhvc3QtYW5jaG9yLnRva2VuJztcblxuaW1wb3J0IHsgU0lHTlBPU1RfUE9TSVRJT05TIH0gZnJvbSAnLi9zaWducG9zdC1wb3NpdGlvbnMnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuLy8gYWthIHdoZXJlIHRoZSBhcnJvdyAvIHBvaW50ZXIgaXMgYXQgaW4gcmVsYXRpb24gdG8gdGhlIGFuY2hvclxuY29uc3QgUE9TSVRJT05TOiBzdHJpbmdbXSA9IFtcbiAgJ3RvcC1sZWZ0JyxcbiAgJ3RvcC1taWRkbGUnLFxuICAndG9wLXJpZ2h0JyxcbiAgJ3JpZ2h0LXRvcCcsXG4gICdyaWdodC1taWRkbGUnLCAvLyBkZWZhdWx0XG4gICdyaWdodC1ib3R0b20nLFxuICAnYm90dG9tLXJpZ2h0JyxcbiAgJ2JvdHRvbS1taWRkbGUnLFxuICAnYm90dG9tLWxlZnQnLFxuICAnbGVmdC1ib3R0b20nLFxuICAnbGVmdC1taWRkbGUnLFxuICAnbGVmdC10b3AnLFxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXNpZ25wb3N0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbnBvc3QtZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1wb2ludGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbnBvc3QtY29udGVudC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNpZ25wb3N0LWFjdGlvbiBjbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNsb3NlXCIgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5jbG9zZVwiPjwvY2xyLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWducG9zdC1jb250ZW50LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLnNpZ25wb3N0LWNvbnRlbnRdJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsclNpZ25wb3N0Q29udGVudCBleHRlbmRzIEFic3RyYWN0UG9wb3ZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUE9QT1ZFUl9IT1NUX0FOQ0hPUilcbiAgICBwYXJlbnRIb3N0OiBFbGVtZW50UmVmLFxuICAgIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3NcbiAgKSB7XG4gICAgaWYgKCFwYXJlbnRIb3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nsci1zaWducG9zdC1jb250ZW50IHNob3VsZCBvbmx5IGJlIHVzZWQgaW5zaWRlIG9mIGEgY2xyLXNpZ25wb3N0Jyk7XG4gICAgfVxuICAgIHN1cGVyKGluamVjdG9yLCBwYXJlbnRIb3N0KTtcbiAgICB0aGlzLmNvbW1vblN0cmluZ3MgPSBjb21tb25TdHJpbmdzO1xuICAgIC8vIERlZmF1bHRzXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodC1taWRkbGUnO1xuICAgIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljayA9IHRydWU7XG4gIH1cblxuICBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzO1xuXG4gIC8qKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBDbG9zZSBmdW5jdGlvbiB0aGF0IHVzZXMgdGhlIHNpZ25wb3N0IGluc3RhbmNlIHRvIHRvZ2dsZSB0aGUgc3RhdGUgb2YgdGhlIGNvbnRlbnQgcG9wb3Zlci5cbiAgICpcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nO1xuXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICAvKioqKioqKioqXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBIHNldHRlciBmb3IgdGhlIHBvc2l0aW9uIG9mIHRoZSBDbHJTaWducG9zdENvbnRlbnQgcG9wb3Zlci4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBmb2xsb3dpbmc6XG4gICAqIC0gYW5jaG9yUG9pbnQgLSB3aGVyZSBvbiB0aGUgdHJpZ2dlciB0byBhbmNob3IgdGhlIENsclNpZ25wb3N0Q29udGVudFxuICAgKiAtIHBvcG92ZXJQb2ludCAtIHdoZXJlIG9uIHRoZSBDbHJTaWducG9zdENvbnRlbnQgY29udGFpbmVyIHRvIGFsaWduIHdpdGggdGhlIGFuY2hvclBvaW50XG4gICAqIC0gb2Zmc2V0WSAtIHdoZXJlIG9uIHRoZSBZIGF4aXMgdG8gYWxpZ24gdGhlIENsclNpZ25wb3N0Q29udGVudCBzbyBpdCBtZWV0cyBzcGVjc1xuICAgKiAtIG9mZnNldFggLSB3aGVyZSBvbiB0aGUgWCBheGlzIHRvIGFsaWduIHRoZSBDbHJTaWducG9zdENvbnRlbnQgc28gaXQgbWVldHMgc3BlY3NcbiAgICogVGhlcmUgYXJlIDEyIHBvc3NpYmxlIHBvc2l0aW9ucyB0byBwbGFjZSBhIENsclNpZ25wb3N0Q29udGVudCBjb250YWluZXI6XG4gICAqIC0gdG9wLWxlZnRcbiAgICogLSB0b3AtbWlkZGxlXG4gICAqIC0gdG9wLXJpZ2h0XG4gICAqIC0gcmlnaHQtdG9wXG4gICAqIC0gcmlnaHQtbWlkZGxlXG4gICAqIC0gcmlnaHQtYm90dG9tXG4gICAqIC0gYm90dG9tLXJpZ2h0XG4gICAqIC0gYm90dG9tLW1pZGRsZVxuICAgKiAtIGJvdHRvbS1sZWZ0XG4gICAqIC0gbGVmdC1ib3R0b21cbiAgICogLSBsZWZ0LW1pZGRsZVxuICAgKiAtIGxlZnQtdG9wXG4gICAqXG4gICAqIEkgdGhpbmsgb2YgaXQgYXMgZm9sbG93cyBmb3IgJ3RvcC1sZWZ0JyAtPiBDT05UQUlORVJfU0lERS1TSURFX1BPU0lUSU9OLiBJbiB0aGlzIGNhc2UgQ09OVEFJTkVSX1NJREUgaXMgJ3RvcCdcbiAgICogbWVhbmluZyB0aGUgdG9wIG9mIHRoZSB0cmlnZ2VyIGljb24gKGFib3ZlIHRoZSBpY29uIHRoYXQgaGlkZXMvc2hvd3MpIHRoZSBDbHJTaWducG9zdENvbnRlbnQuIEFuZCwgU0lERV9QT1NJVElPTlxuICAgKiBpcyAnbGVmdCcgbWVhbmluZyB0d28gdGhpbmdzOiAxKSB0aGUgQ2xyU2lnbnBvc3RDb250ZW50IGNvbnRhaW5lciBleHRlbmRzIHRvIHRoZSBsZWZ0IGFuZCAyKSB0aGUgJ2Fycm93L3BvaW50ZXInXG4gICAqIGxpbmtpbmcgdGhlIFNpbmdwb3N0Q29udGVudCB0byB0aGUgdHJpZ2dlciBwb2ludHMgZG93biBhdCB0aGUgaG9yaXpvbnRhbCBjZW50ZXIgb2YgdGhlIHRyaWdnZXIgaWNvbi5cbiAgICpcbiAgICogQHBhcmFtIG5ld1Bvc2l0aW9uXG4gICAqL1xuICBASW5wdXQoJ2NsclBvc2l0aW9uJylcbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICAvLyBVZ2hcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5wb3NpdGlvbik7XG4gICAgaWYgKHBvc2l0aW9uICYmIFBPU0lUSU9OUy5pbmRleE9mKHBvc2l0aW9uKSA+IC0xKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbiA9ICdyaWdodC1taWRkbGUnO1xuICAgIH1cbiAgICAvLyBVZ2hcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5wb3NpdGlvbik7XG5cbiAgICBjb25zdCBzZXRQb3NpdGlvbiA9IFNJR05QT1NUX1BPU0lUSU9OU1t0aGlzLnBvc2l0aW9uXTtcbiAgICB0aGlzLmFuY2hvclBvaW50ID0gc2V0UG9zaXRpb24uYW5jaG9yUG9pbnQ7XG4gICAgdGhpcy5wb3BvdmVyUG9pbnQgPSBzZXRQb3NpdGlvbi5wb3BvdmVyUG9pbnQ7XG4gICAgdGhpcy5wb3BvdmVyT3B0aW9ucy5vZmZzZXRZID0gc2V0UG9zaXRpb24ub2Zmc2V0WTtcbiAgICB0aGlzLnBvcG92ZXJPcHRpb25zLm9mZnNldFggPSBzZXRQb3NpdGlvbi5vZmZzZXRYO1xuICB9XG59XG4iXX0=