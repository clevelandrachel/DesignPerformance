/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, Inject, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ControlIdService } from '../common/providers/control-id.service';
import { ClrLabel } from '../common/label';
/** @type {?} */
export var IS_TOGGLE = new InjectionToken('IS_TOGGLE');
/**
 * @return {?}
 */
export function isToggleFactory() {
    return new BehaviorSubject(false);
}
/** @type {?} */
export var IS_TOGGLE_PROVIDER = { provide: IS_TOGGLE, useFactory: isToggleFactory };
var ClrCheckboxWrapper = /** @class */ (function () {
    function ClrCheckboxWrapper(toggleService) {
        var _this = this;
        // We need both _dynamic for HostWrapper and ContentChild(ClrLabel) in cases where
        // the user puts a radio inside a wrapper without a label, host wrapping doesn't apply
        // but we'd still need to insert a label
        this._dynamic = false;
        this.toggle = false;
        this.subscriptions = [];
        this.subscriptions.push(toggleService.subscribe(function (state) {
            _this.toggle = state;
        }));
    }
    /**
     * @return {?}
     */
    ClrCheckboxWrapper.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.label) {
            this.label.disableGrid();
        }
    };
    /**
     * @return {?}
     */
    ClrCheckboxWrapper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ClrCheckboxWrapper.decorators = [
        { type: Component, args: [{
                    selector: 'clr-checkbox-wrapper,clr-toggle-wrapper',
                    template: "\n    <ng-content select=\"[clrCheckbox],[clrToggle]\"></ng-content>\n    <ng-content select=\"label\"></ng-content>\n    <label *ngIf=\"!label\"></label>\n  ",
                    host: {
                        '[class.clr-checkbox-wrapper]': '!toggle',
                        '[class.clr-toggle-wrapper]': 'toggle',
                    },
                    providers: [ControlIdService, IS_TOGGLE_PROVIDER]
                }] }
    ];
    /** @nocollapse */
    ClrCheckboxWrapper.ctorParameters = function () { return [
        { type: BehaviorSubject, decorators: [{ type: Inject, args: [IS_TOGGLE,] }] }
    ]; };
    ClrCheckboxWrapper.propDecorators = {
        label: [{ type: ContentChild, args: [ClrLabel,] }]
    };
    return ClrCheckboxWrapper;
}());
export { ClrCheckboxWrapper };
if (false) {
    /** @type {?} */
    ClrCheckboxWrapper.prototype._dynamic;
    /** @type {?} */
    ClrCheckboxWrapper.prototype.label;
    /** @type {?} */
    ClrCheckboxWrapper.prototype.toggle;
    /** @type {?} */
    ClrCheckboxWrapper.prototype.subscriptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NoZWNrYm94L2NoZWNrYm94LXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUdyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQTJCLFdBQVcsQ0FBQzs7OztBQUNsRixNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUM7O0FBQ0QsTUFBTSxLQUFPLGtCQUFrQixHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFO0FBRXJGO0lBc0JFLDRCQUErQixhQUF1QztRQUF0RSxpQkFNQzs7OztRQVhELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNQLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUd6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUNBQXlDO29CQUNuRCxRQUFRLEVBQUUsZ0tBSVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDhCQUE4QixFQUFFLFNBQVM7d0JBQ3pDLDRCQUE0QixFQUFFLFFBQVE7cUJBQ3ZDO29CQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRDs7OztnQkF4QlEsZUFBZSx1QkFrQ1QsTUFBTSxTQUFDLFNBQVM7Ozt3QkFKNUIsWUFBWSxTQUFDLFFBQVE7O0lBcUJ4Qix5QkFBQztDQUFBLEFBdkNELElBdUNDO1NBMUJZLGtCQUFrQjs7O0lBSTdCLHNDQUFpQjs7SUFDakIsbUNBQXdDOztJQUN4QyxvQ0FBZTs7SUFDZiwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29udGVudENoaWxkLCBJbmplY3QsIEluamVjdGlvblRva2VuLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IER5bmFtaWNXcmFwcGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9zdC13cmFwcGluZy9keW5hbWljLXdyYXBwZXInO1xuaW1wb3J0IHsgQ29udHJvbElkU2VydmljZSB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvY29udHJvbC1pZC5zZXJ2aWNlJztcbmltcG9ydCB7IENsckxhYmVsIH0gZnJvbSAnLi4vY29tbW9uL2xhYmVsJztcblxuZXhwb3J0IGNvbnN0IElTX1RPR0dMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4+KCdJU19UT0dHTEUnKTtcbmV4cG9ydCBmdW5jdGlvbiBpc1RvZ2dsZUZhY3RvcnkoKSB7XG4gIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbn1cbmV4cG9ydCBjb25zdCBJU19UT0dHTEVfUFJPVklERVIgPSB7IHByb3ZpZGU6IElTX1RPR0dMRSwgdXNlRmFjdG9yeTogaXNUb2dnbGVGYWN0b3J5IH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1jaGVja2JveC13cmFwcGVyLGNsci10b2dnbGUtd3JhcHBlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NsckNoZWNrYm94XSxbY2xyVG9nZ2xlXVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJsYWJlbFwiPjwvbmctY29udGVudD5cbiAgICA8bGFiZWwgKm5nSWY9XCIhbGFiZWxcIj48L2xhYmVsPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jbHItY2hlY2tib3gtd3JhcHBlcl0nOiAnIXRvZ2dsZScsXG4gICAgJ1tjbGFzcy5jbHItdG9nZ2xlLXdyYXBwZXJdJzogJ3RvZ2dsZScsXG4gIH0sXG4gIHByb3ZpZGVyczogW0NvbnRyb2xJZFNlcnZpY2UsIElTX1RPR0dMRV9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIENsckNoZWNrYm94V3JhcHBlciBpbXBsZW1lbnRzIER5bmFtaWNXcmFwcGVyLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8vIFdlIG5lZWQgYm90aCBfZHluYW1pYyBmb3IgSG9zdFdyYXBwZXIgYW5kIENvbnRlbnRDaGlsZChDbHJMYWJlbCkgaW4gY2FzZXMgd2hlcmVcbiAgLy8gdGhlIHVzZXIgcHV0cyBhIHJhZGlvIGluc2lkZSBhIHdyYXBwZXIgd2l0aG91dCBhIGxhYmVsLCBob3N0IHdyYXBwaW5nIGRvZXNuJ3QgYXBwbHlcbiAgLy8gYnV0IHdlJ2Qgc3RpbGwgbmVlZCB0byBpbnNlcnQgYSBsYWJlbFxuICBfZHluYW1pYyA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkKENsckxhYmVsKSBsYWJlbDogQ2xyTGFiZWw7XG4gIHRvZ2dsZSA9IGZhbHNlO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChJU19UT0dHTEUpIHRvZ2dsZVNlcnZpY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPikge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdG9nZ2xlU2VydmljZS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHN0YXRlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwuZGlzYWJsZUdyaWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=