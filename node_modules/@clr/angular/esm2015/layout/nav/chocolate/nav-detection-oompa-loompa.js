/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Directive, Optional } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { ResponsiveNavigationService } from '../providers/responsive-navigation.service';
import { MainContainerWillyWonka } from './main-container-willy-wonka';
export class NavDetectionOompaLoompa extends OompaLoompa {
    /**
     * @param {?} cdr
     * @param {?} willyWonka
     * @param {?} responsiveNavService
     */
    constructor(cdr, willyWonka, responsiveNavService) {
        if (!willyWonka) {
            throw new Error('clr-header should only be used inside of a clr-main-container');
        }
        super(cdr, willyWonka);
        this.responsiveNavService = responsiveNavService;
    }
    // NavDetectionOompaLoompa is the addition of the nav levels
    // Since we support 2 levels, the possibilities are 0, 1 or 3 (1 + 2)
    /**
     * @return {?}
     */
    get flavor() {
        return this.responsiveNavService.responsiveNavList.reduce((sum, navLevel) => sum + navLevel, 0);
    }
}
NavDetectionOompaLoompa.decorators = [
    { type: Directive, args: [{ selector: 'clr-header' },] }
];
/** @nocollapse */
NavDetectionOompaLoompa.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MainContainerWillyWonka, decorators: [{ type: Optional }] },
    { type: ResponsiveNavigationService }
];
if (false) {
    /** @type {?} */
    NavDetectionOompaLoompa.prototype.responsiveNavService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWRldGVjdGlvbi1vb21wYS1sb29tcGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvbmF2L2Nob2NvbGF0ZS9uYXYtZGV0ZWN0aW9uLW9vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHdkUsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFdBQVc7Ozs7OztJQUd0RCxZQUNFLEdBQXNCLEVBQ1YsVUFBbUMsRUFDL0Msb0JBQWlEO1FBRWpELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDbEY7UUFDRCxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFJRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7OztZQXBCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzs7O1lBTDVCLGlCQUFpQjtZQUdqQix1QkFBdUIsdUJBUTNCLFFBQVE7WUFUSiwyQkFBMkI7Ozs7SUFLbEMsdURBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9vbXBhTG9vbXBhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2hvY29sYXRlL29vbXBhLWxvb21wYSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvcmVzcG9uc2l2ZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFpbkNvbnRhaW5lcldpbGx5V29ua2EgfSBmcm9tICcuL21haW4tY29udGFpbmVyLXdpbGx5LXdvbmthJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnY2xyLWhlYWRlcicgfSlcbmV4cG9ydCBjbGFzcyBOYXZEZXRlY3Rpb25Pb21wYUxvb21wYSBleHRlbmRzIE9vbXBhTG9vbXBhIHtcbiAgcHJpdmF0ZSByZXNwb25zaXZlTmF2U2VydmljZTogUmVzcG9uc2l2ZU5hdmlnYXRpb25TZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgd2lsbHlXb25rYTogTWFpbkNvbnRhaW5lcldpbGx5V29ua2EsXG4gICAgcmVzcG9uc2l2ZU5hdlNlcnZpY2U6IFJlc3BvbnNpdmVOYXZpZ2F0aW9uU2VydmljZVxuICApIHtcbiAgICBpZiAoIXdpbGx5V29ua2EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xyLWhlYWRlciBzaG91bGQgb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsci1tYWluLWNvbnRhaW5lcicpO1xuICAgIH1cbiAgICBzdXBlcihjZHIsIHdpbGx5V29ua2EpO1xuICAgIHRoaXMucmVzcG9uc2l2ZU5hdlNlcnZpY2UgPSByZXNwb25zaXZlTmF2U2VydmljZTtcbiAgfVxuXG4gIC8vIE5hdkRldGVjdGlvbk9vbXBhTG9vbXBhIGlzIHRoZSBhZGRpdGlvbiBvZiB0aGUgbmF2IGxldmVsc1xuICAvLyBTaW5jZSB3ZSBzdXBwb3J0IDIgbGV2ZWxzLCB0aGUgcG9zc2liaWxpdGllcyBhcmUgMCwgMSBvciAzICgxICsgMilcbiAgZ2V0IGZsYXZvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zaXZlTmF2U2VydmljZS5yZXNwb25zaXZlTmF2TGlzdC5yZWR1Y2UoKHN1bSwgbmF2TGV2ZWwpID0+IHN1bSArIG5hdkxldmVsLCAwKTtcbiAgfVxufVxuIl19