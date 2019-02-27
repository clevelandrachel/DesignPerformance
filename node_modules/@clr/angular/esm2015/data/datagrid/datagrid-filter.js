/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Point } from '../../popover/common/popover';
import { CustomFilter } from './providers/custom-filter';
import { FiltersProvider } from './providers/filters';
import { DatagridFilterRegistrar } from './utils/datagrid-filter-registrar';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
/**
 * Custom filter that can be added in any column to override the default object property string filter.
 * The reason this is not just an input on DatagridColumn is because we need the filter's template to be projected,
 * since it can be anything (not just a text input).
 * @template T
 */
export class ClrDatagridFilter extends DatagridFilterRegistrar {
    /**
     * @param {?} _filters
     * @param {?} commonStrings
     */
    constructor(_filters, commonStrings) {
        super(_filters);
        this.commonStrings = commonStrings;
        this.anchorPoint = Point.RIGHT_BOTTOM;
        this.popoverPoint = Point.RIGHT_TOP;
        this.popoverOptions = { allowMultipleOpen: true };
        /**
         * Tracks whether the filter dropdown is open or not
         */
        this._open = false;
        this.openChanged = new EventEmitter(false);
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set open(open) {
        /** @type {?} */
        const boolOpen = !!open;
        if (boolOpen !== this._open) {
            this._open = boolOpen;
            this.openChanged.emit(boolOpen);
        }
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    set customFilter(filter) {
        this.setFilter(filter);
    }
    /**
     * Indicates if the filter is currently active
     * @return {?}
     */
    get active() {
        return !!this.filter && this.filter.isActive();
    }
    /**
     * Shows/hides the filter dropdown
     * @return {?}
     */
    toggle() {
        this.open = !this.open;
    }
}
ClrDatagridFilter.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-filter',
                // We register this component as a CustomFilter, for the parent column to detect it.
                providers: [{ provide: CustomFilter, useExisting: ClrDatagridFilter }],
                template: `
        <button #anchor class="datagrid-filter-toggle" (click)="toggle()"
            [class.datagrid-filter-open]="open" [class.datagrid-filtered]="active"
            type="button"></button>

        <ng-template [(clrPopoverOld)]="open" [clrPopoverOldAnchor]="anchor" [clrPopoverOldAnchorPoint]="anchorPoint"
             [clrPopoverOldPopoverPoint]="popoverPoint" [clrPopoverOldOptions]="popoverOptions">
            <div class="datagrid-filter">
                <!-- FIXME: this whole filter part needs a final design before we can try to have a cleaner DOM -->
                <div class="datagrid-filter-close-wrapper">
                    <button type="button" class="close" (click)="open = false">
                        <clr-icon shape="close" [attr.title]="commonStrings.close"></clr-icon>
                    </button>
                </div>
    
                <ng-content></ng-content>
            </div>
        </ng-template>
    `
            }] }
];
/** @nocollapse */
ClrDatagridFilter.ctorParameters = () => [
    { type: FiltersProvider },
    { type: ClrCommonStrings }
];
ClrDatagridFilter.propDecorators = {
    open: [{ type: Input, args: ['clrDgFilterOpen',] }],
    openChanged: [{ type: Output, args: ['clrDgFilterOpenChange',] }],
    customFilter: [{ type: Input, args: ['clrDgFilter',] }]
};
if (false) {
    /** @type {?} */
    ClrDatagridFilter.prototype.anchorPoint;
    /** @type {?} */
    ClrDatagridFilter.prototype.popoverPoint;
    /** @type {?} */
    ClrDatagridFilter.prototype.popoverOptions;
    /**
     * Tracks whether the filter dropdown is open or not
     * @type {?}
     */
    ClrDatagridFilter.prototype._open;
    /** @type {?} */
    ClrDatagridFilter.prototype.openChanged;
    /** @type {?} */
    ClrDatagridFilter.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7QUErQjdFLE1BQU0sT0FBTyxpQkFBMkIsU0FBUSx1QkFBeUQ7Ozs7O0lBRXZHLFlBQVksUUFBNEIsRUFBUyxhQUErQjtRQUM5RSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEK0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBSXpFLGdCQUFXLEdBQVUsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUN4QyxpQkFBWSxHQUFVLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDdEMsbUJBQWMsR0FBbUIsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OztRQUk1RCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBY2tCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7SUF0QnZGLENBQUM7Ozs7SUFTRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxJQUNXLElBQUksQ0FBQyxJQUFhOztjQUNyQixRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUk7UUFDdkIsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBSUQsSUFDVyxZQUFZLENBQUMsTUFBMEY7UUFDaEgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUtELElBQVcsTUFBTTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUtNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlOztnQkFFekIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN0RSxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtCUDthQUNKOzs7O1lBaENRLGVBQWU7WUFFZixnQkFBZ0I7OzttQkFnRHRCLEtBQUssU0FBQyxpQkFBaUI7MEJBU3ZCLE1BQU0sU0FBQyx1QkFBdUI7MkJBRTlCLEtBQUssU0FBQyxhQUFhOzs7O0lBdEJwQix3Q0FBK0M7O0lBQy9DLHlDQUE2Qzs7SUFDN0MsMkNBQW9FOzs7OztJQUlwRSxrQ0FBc0I7O0lBY3RCLHdDQUF1Rjs7SUF4QjdDLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vLi4vcG9wb3Zlci9jb21tb24vcG9wb3Zlcic7XG5pbXBvcnQgeyBQb3BvdmVyT3B0aW9ucyB9IGZyb20gJy4uLy4uL3BvcG92ZXIvY29tbW9uL3BvcG92ZXItb3B0aW9ucy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEN1c3RvbUZpbHRlciB9IGZyb20gJy4vcHJvdmlkZXJzL2N1c3RvbS1maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyLCBSZWdpc3RlcmVkRmlsdGVyIH0gZnJvbSAnLi9wcm92aWRlcnMvZmlsdGVycyc7XG5pbXBvcnQgeyBEYXRhZ3JpZEZpbHRlclJlZ2lzdHJhciB9IGZyb20gJy4vdXRpbHMvZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhcic7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEN1c3RvbSBmaWx0ZXIgdGhhdCBjYW4gYmUgYWRkZWQgaW4gYW55IGNvbHVtbiB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBvYmplY3QgcHJvcGVydHkgc3RyaW5nIGZpbHRlci5cbiAqIFRoZSByZWFzb24gdGhpcyBpcyBub3QganVzdCBhbiBpbnB1dCBvbiBEYXRhZ3JpZENvbHVtbiBpcyBiZWNhdXNlIHdlIG5lZWQgdGhlIGZpbHRlcidzIHRlbXBsYXRlIHRvIGJlIHByb2plY3RlZCxcbiAqIHNpbmNlIGl0IGNhbiBiZSBhbnl0aGluZyAobm90IGp1c3QgYSB0ZXh0IGlucHV0KS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWRnLWZpbHRlcicsXG4gIC8vIFdlIHJlZ2lzdGVyIHRoaXMgY29tcG9uZW50IGFzIGEgQ3VzdG9tRmlsdGVyLCBmb3IgdGhlIHBhcmVudCBjb2x1bW4gdG8gZGV0ZWN0IGl0LlxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEN1c3RvbUZpbHRlciwgdXNlRXhpc3Rpbmc6IENsckRhdGFncmlkRmlsdGVyIH1dLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uICNhbmNob3IgY2xhc3M9XCJkYXRhZ3JpZC1maWx0ZXItdG9nZ2xlXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgICAgICAgICAgIFtjbGFzcy5kYXRhZ3JpZC1maWx0ZXItb3Blbl09XCJvcGVuXCIgW2NsYXNzLmRhdGFncmlkLWZpbHRlcmVkXT1cImFjdGl2ZVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFsoY2xyUG9wb3Zlck9sZCldPVwib3BlblwiIFtjbHJQb3BvdmVyT2xkQW5jaG9yXT1cImFuY2hvclwiIFtjbHJQb3BvdmVyT2xkQW5jaG9yUG9pbnRdPVwiYW5jaG9yUG9pbnRcIlxuICAgICAgICAgICAgIFtjbHJQb3BvdmVyT2xkUG9wb3ZlclBvaW50XT1cInBvcG92ZXJQb2ludFwiIFtjbHJQb3BvdmVyT2xkT3B0aW9uc109XCJwb3BvdmVyT3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFncmlkLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDwhLS0gRklYTUU6IHRoaXMgd2hvbGUgZmlsdGVyIHBhcnQgbmVlZHMgYSBmaW5hbCBkZXNpZ24gYmVmb3JlIHdlIGNhbiB0cnkgdG8gaGF2ZSBhIGNsZWFuZXIgRE9NIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhZ3JpZC1maWx0ZXItY2xvc2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgKGNsaWNrKT1cIm9wZW4gPSBmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNsci1pY29uIHNoYXBlPVwiY2xvc2VcIiBbYXR0ci50aXRsZV09XCJjb21tb25TdHJpbmdzLmNsb3NlXCI+PC9jbHItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0YWdyaWRGaWx0ZXI8VCA9IGFueT4gZXh0ZW5kcyBEYXRhZ3JpZEZpbHRlclJlZ2lzdHJhcjxULCBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPj5cbiAgaW1wbGVtZW50cyBDdXN0b21GaWx0ZXIge1xuICBjb25zdHJ1Y3RvcihfZmlsdGVyczogRmlsdGVyc1Byb3ZpZGVyPFQ+LCBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5ncykge1xuICAgIHN1cGVyKF9maWx0ZXJzKTtcbiAgfVxuXG4gIHB1YmxpYyBhbmNob3JQb2ludDogUG9pbnQgPSBQb2ludC5SSUdIVF9CT1RUT007XG4gIHB1YmxpYyBwb3BvdmVyUG9pbnQ6IFBvaW50ID0gUG9pbnQuUklHSFRfVE9QO1xuICBwdWJsaWMgcG9wb3Zlck9wdGlvbnM6IFBvcG92ZXJPcHRpb25zID0geyBhbGxvd011bHRpcGxlT3BlbjogdHJ1ZSB9O1xuICAvKipcbiAgICogVHJhY2tzIHdoZXRoZXIgdGhlIGZpbHRlciBkcm9wZG93biBpcyBvcGVuIG9yIG5vdFxuICAgKi9cbiAgcHJpdmF0ZSBfb3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoJ2NsckRnRmlsdGVyT3BlbicpXG4gIHB1YmxpYyBzZXQgb3BlbihvcGVuOiBib29sZWFuKSB7XG4gICAgY29uc3QgYm9vbE9wZW4gPSAhIW9wZW47XG4gICAgaWYgKGJvb2xPcGVuICE9PSB0aGlzLl9vcGVuKSB7XG4gICAgICB0aGlzLl9vcGVuID0gYm9vbE9wZW47XG4gICAgICB0aGlzLm9wZW5DaGFuZ2VkLmVtaXQoYm9vbE9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoJ2NsckRnRmlsdGVyT3BlbkNoYW5nZScpIHB1YmxpYyBvcGVuQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIEBJbnB1dCgnY2xyRGdGaWx0ZXInKVxuICBwdWJsaWMgc2V0IGN1c3RvbUZpbHRlcihmaWx0ZXI6IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+IHwgUmVnaXN0ZXJlZEZpbHRlcjxULCBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxUPj4pIHtcbiAgICB0aGlzLnNldEZpbHRlcihmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZmlsdGVyIGlzIGN1cnJlbnRseSBhY3RpdmVcbiAgICovXG4gIHB1YmxpYyBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiAhIXRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLmlzQWN0aXZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MvaGlkZXMgdGhlIGZpbHRlciBkcm9wZG93blxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG59XG4iXX0=