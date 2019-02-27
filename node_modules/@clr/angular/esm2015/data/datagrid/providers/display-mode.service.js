/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatagridDisplayMode } from '../enums/display-mode.enum';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { DatagridRenderOrganizer } from '../render/render-organizer';
export class DisplayModeService {
    /**
     * @param {?} renderOrganizer
     */
    constructor(renderOrganizer) {
        this.subscriptions = [];
        this._view = new BehaviorSubject(DatagridDisplayMode.DISPLAY);
        this.subscriptions.push(renderOrganizer
            .filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_ON)
            .subscribe(() => this._view.next(DatagridDisplayMode.CALCULATE)));
        this.subscriptions.push(renderOrganizer
            .filterRenderSteps(DatagridRenderStep.CALCULATE_MODE_OFF)
            .subscribe(() => this._view.next(DatagridDisplayMode.DISPLAY)));
    }
    /**
     * @return {?}
     */
    get view() {
        return this._view.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
DisplayModeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DisplayModeService.ctorParameters = () => [
    { type: DatagridRenderOrganizer }
];
if (false) {
    /** @type {?} */
    DisplayModeService.prototype.subscriptions;
    /** @type {?} */
    DisplayModeService.prototype._view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS1tb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL3Byb3ZpZGVycy9kaXNwbGF5LW1vZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxlQUFlLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3JFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFNN0IsWUFBWSxlQUF3QztRQUw1QyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDakMsVUFBSyxHQUF5QyxJQUFJLGVBQWUsQ0FDekUsbUJBQW1CLENBQUMsT0FBTyxDQUM1QixDQUFDO1FBR0EsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLGVBQWU7YUFDWixpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQzthQUN2RCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixlQUFlO2FBQ1osaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7YUFDeEQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUEzQkYsVUFBVTs7OztZQUZGLHVCQUF1Qjs7OztJQUk5QiwyQ0FBMkM7O0lBQzNDLG1DQUVFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFncmlkRGlzcGxheU1vZGUgfSBmcm9tICcuLi9lbnVtcy9kaXNwbGF5LW1vZGUuZW51bSc7XG5pbXBvcnQgeyBEYXRhZ3JpZFJlbmRlclN0ZXAgfSBmcm9tICcuLi9lbnVtcy9yZW5kZXItc3RlcC5lbnVtJztcbmltcG9ydCB7IERhdGFncmlkUmVuZGVyT3JnYW5pemVyIH0gZnJvbSAnLi4vcmVuZGVyL3JlbmRlci1vcmdhbml6ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlzcGxheU1vZGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcm90ZWN0ZWQgX3ZpZXc6IEJlaGF2aW9yU3ViamVjdDxEYXRhZ3JpZERpc3BsYXlNb2RlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0YWdyaWREaXNwbGF5TW9kZT4oXG4gICAgRGF0YWdyaWREaXNwbGF5TW9kZS5ESVNQTEFZXG4gICk7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyT3JnYW5pemVyOiBEYXRhZ3JpZFJlbmRlck9yZ2FuaXplcikge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgcmVuZGVyT3JnYW5pemVyXG4gICAgICAgIC5maWx0ZXJSZW5kZXJTdGVwcyhEYXRhZ3JpZFJlbmRlclN0ZXAuQ0FMQ1VMQVRFX01PREVfT04pXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdmlldy5uZXh0KERhdGFncmlkRGlzcGxheU1vZGUuQ0FMQ1VMQVRFKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICByZW5kZXJPcmdhbml6ZXJcbiAgICAgICAgLmZpbHRlclJlbmRlclN0ZXBzKERhdGFncmlkUmVuZGVyU3RlcC5DQUxDVUxBVEVfTU9ERV9PRkYpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdmlldy5uZXh0KERhdGFncmlkRGlzcGxheU1vZGUuRElTUExBWSkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmlldygpOiBPYnNlcnZhYmxlPERhdGFncmlkRGlzcGxheU1vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==