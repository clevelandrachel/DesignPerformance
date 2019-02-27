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
export const IS_TOGGLE = new InjectionToken('IS_TOGGLE');
/**
 * @return {?}
 */
export function isToggleFactory() {
    return new BehaviorSubject(false);
}
/** @type {?} */
export const IS_TOGGLE_PROVIDER = { provide: IS_TOGGLE, useFactory: isToggleFactory };
export class ClrCheckboxWrapper {
    /**
     * @param {?} toggleService
     */
    constructor(toggleService) {
        // We need both _dynamic for HostWrapper and ContentChild(ClrLabel) in cases where
        // the user puts a radio inside a wrapper without a label, host wrapping doesn't apply
        // but we'd still need to insert a label
        this._dynamic = false;
        this.toggle = false;
        this.subscriptions = [];
        this.subscriptions.push(toggleService.subscribe(state => {
            this.toggle = state;
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.label) {
            this.label.disableGrid();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
ClrCheckboxWrapper.decorators = [
    { type: Component, args: [{
                selector: 'clr-checkbox-wrapper,clr-toggle-wrapper',
                template: `
    <ng-content select="[clrCheckbox],[clrToggle]"></ng-content>
    <ng-content select="label"></ng-content>
    <label *ngIf="!label"></label>
  `,
                host: {
                    '[class.clr-checkbox-wrapper]': '!toggle',
                    '[class.clr-toggle-wrapper]': 'toggle',
                },
                providers: [ControlIdService, IS_TOGGLE_PROVIDER]
            }] }
];
/** @nocollapse */
ClrCheckboxWrapper.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: [IS_TOGGLE,] }] }
];
ClrCheckboxWrapper.propDecorators = {
    label: [{ type: ContentChild, args: [ClrLabel,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtd3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NoZWNrYm94L2NoZWNrYm94LXdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUdyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQTJCLFdBQVcsQ0FBQzs7OztBQUNsRixNQUFNLFVBQVUsZUFBZTtJQUM3QixPQUFPLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0FBQzdDLENBQUM7O0FBQ0QsTUFBTSxPQUFPLGtCQUFrQixHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFO0FBZXJGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFTN0IsWUFBK0IsYUFBdUM7Ozs7UUFMdEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ1Asa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBR3pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osOEJBQThCLEVBQUUsU0FBUztvQkFDekMsNEJBQTRCLEVBQUUsUUFBUTtpQkFDdkM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7YUFDbEQ7Ozs7WUF4QlEsZUFBZSx1QkFrQ1QsTUFBTSxTQUFDLFNBQVM7OztvQkFKNUIsWUFBWSxTQUFDLFFBQVE7Ozs7SUFEdEIsc0NBQWlCOztJQUNqQixtQ0FBd0M7O0lBQ3hDLG9DQUFlOztJQUNmLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGQsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRHluYW1pY1dyYXBwZXIgfSBmcm9tICcuLi8uLi91dGlscy9ob3N0LXdyYXBwaW5nL2R5bmFtaWMtd3JhcHBlcic7XG5pbXBvcnQgeyBDb250cm9sSWRTZXJ2aWNlIH0gZnJvbSAnLi4vY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xyTGFiZWwgfSBmcm9tICcuLi9jb21tb24vbGFiZWwnO1xuXG5leHBvcnQgY29uc3QgSVNfVE9HR0xFID0gbmV3IEluamVjdGlvblRva2VuPEJlaGF2aW9yU3ViamVjdDxib29sZWFuPj4oJ0lTX1RPR0dMRScpO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9nZ2xlRmFjdG9yeSgpIHtcbiAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xufVxuZXhwb3J0IGNvbnN0IElTX1RPR0dMRV9QUk9WSURFUiA9IHsgcHJvdmlkZTogSVNfVE9HR0xFLCB1c2VGYWN0b3J5OiBpc1RvZ2dsZUZhY3RvcnkgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWNoZWNrYm94LXdyYXBwZXIsY2xyLXRvZ2dsZS13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY2xyQ2hlY2tib3hdLFtjbHJUb2dnbGVdXCI+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImxhYmVsXCI+PC9uZy1jb250ZW50PlxuICAgIDxsYWJlbCAqbmdJZj1cIiFsYWJlbFwiPjwvbGFiZWw+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmNsci1jaGVja2JveC13cmFwcGVyXSc6ICchdG9nZ2xlJyxcbiAgICAnW2NsYXNzLmNsci10b2dnbGUtd3JhcHBlcl0nOiAndG9nZ2xlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQ29udHJvbElkU2VydmljZSwgSVNfVE9HR0xFX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQ2hlY2tib3hXcmFwcGVyIGltcGxlbWVudHMgRHluYW1pY1dyYXBwZXIsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gV2UgbmVlZCBib3RoIF9keW5hbWljIGZvciBIb3N0V3JhcHBlciBhbmQgQ29udGVudENoaWxkKENsckxhYmVsKSBpbiBjYXNlcyB3aGVyZVxuICAvLyB0aGUgdXNlciBwdXRzIGEgcmFkaW8gaW5zaWRlIGEgd3JhcHBlciB3aXRob3V0IGEgbGFiZWwsIGhvc3Qgd3JhcHBpbmcgZG9lc24ndCBhcHBseVxuICAvLyBidXQgd2UnZCBzdGlsbCBuZWVkIHRvIGluc2VydCBhIGxhYmVsXG4gIF9keW5hbWljID0gZmFsc2U7XG4gIEBDb250ZW50Q2hpbGQoQ2xyTGFiZWwpIGxhYmVsOiBDbHJMYWJlbDtcbiAgdG9nZ2xlID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KElTX1RPR0dMRSkgdG9nZ2xlU2VydmljZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0b2dnbGVTZXJ2aWNlLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gc3RhdGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbC5kaXNhYmxlR3JpZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==