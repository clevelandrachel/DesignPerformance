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
import { ChangeDetectorRef, Directive, Inject, Optional } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { IF_ACTIVE_ID, IfActiveService } from '../../../utils/conditional/if-active.service';
import { TabsWillyWonka } from './tabs-willy-wonka';
var ActiveOompaLoompa = /** @class */ (function (_super) {
    tslib_1.__extends(ActiveOompaLoompa, _super);
    function ActiveOompaLoompa(cdr, willyWonka, id, ifActive) {
        var _this = this;
        if (!willyWonka) {
            throw new Error('clrTabLink and clr-tab-content should only be used inside of a clr-tabs');
        }
        _this = _super.call(this, cdr, willyWonka) || this;
        _this.ifActive = ifActive;
        _this.id = id;
        return _this;
    }
    Object.defineProperty(ActiveOompaLoompa.prototype, "flavor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ifActive.current === this.id;
        },
        enumerable: true,
        configurable: true
    });
    ActiveOompaLoompa.decorators = [
        { type: Directive, args: [{ selector: '[clrTabLink], clr-tab-content' },] }
    ];
    /** @nocollapse */
    ActiveOompaLoompa.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TabsWillyWonka, decorators: [{ type: Optional }] },
        { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
        { type: IfActiveService }
    ]; };
    return ActiveOompaLoompa;
}(OompaLoompa));
export { ActiveOompaLoompa };
if (false) {
    /** @type {?} */
    ActiveOompaLoompa.prototype.ifActive;
    /** @type {?} */
    ActiveOompaLoompa.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLW9vbXBhLWxvb21wYS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxheW91dC90YWJzL2Nob2NvbGF0ZS9hY3RpdmUtb29tcGEtbG9vbXBhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBEO0lBQ3VDLDZDQUFXO0lBSWhELDJCQUNFLEdBQXNCLEVBQ1YsVUFBMEIsRUFDaEIsRUFBVSxFQUNoQyxRQUF5QjtRQUozQixpQkFZQztRQU5DLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7U0FDNUY7UUFDRCxRQUFBLGtCQUFNLEdBQUcsRUFBRSxVQUFVLENBQUMsU0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7SUFDZixDQUFDO0lBRUQsc0JBQUkscUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7Z0JBckJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTs7OztnQkFQL0MsaUJBQWlCO2dCQUtqQixjQUFjLHVCQVNsQixRQUFROzZDQUNSLE1BQU0sU0FBQyxZQUFZO2dCQVpELGVBQWU7O0lBMEJ0Qyx3QkFBQztDQUFBLEFBdEJELENBQ3VDLFdBQVcsR0FxQmpEO1NBckJZLGlCQUFpQjs7O0lBQzVCLHFDQUFrQzs7SUFDbEMsK0JBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPb21wYUxvb21wYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nob2NvbGF0ZS9vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgSUZfQUNUSVZFX0lELCBJZkFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1hY3RpdmUuc2VydmljZSc7XG5cbmltcG9ydCB7IFRhYnNXaWxseVdvbmthIH0gZnJvbSAnLi90YWJzLXdpbGx5LXdvbmthJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclRhYkxpbmtdLCBjbHItdGFiLWNvbnRlbnQnIH0pXG5leHBvcnQgY2xhc3MgQWN0aXZlT29tcGFMb29tcGEgZXh0ZW5kcyBPb21wYUxvb21wYSB7XG4gIHByaXZhdGUgaWZBY3RpdmU6IElmQWN0aXZlU2VydmljZTtcbiAgcHJpdmF0ZSBpZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgd2lsbHlXb25rYTogVGFic1dpbGx5V29ua2EsXG4gICAgQEluamVjdChJRl9BQ1RJVkVfSUQpIGlkOiBudW1iZXIsXG4gICAgaWZBY3RpdmU6IElmQWN0aXZlU2VydmljZVxuICApIHtcbiAgICBpZiAoIXdpbGx5V29ua2EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xyVGFiTGluayBhbmQgY2xyLXRhYi1jb250ZW50IHNob3VsZCBvbmx5IGJlIHVzZWQgaW5zaWRlIG9mIGEgY2xyLXRhYnMnKTtcbiAgICB9XG4gICAgc3VwZXIoY2RyLCB3aWxseVdvbmthKTtcbiAgICB0aGlzLmlmQWN0aXZlID0gaWZBY3RpdmU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgZ2V0IGZsYXZvcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZkFjdGl2ZS5jdXJyZW50ID09PSB0aGlzLmlkO1xuICB9XG59XG4iXX0=