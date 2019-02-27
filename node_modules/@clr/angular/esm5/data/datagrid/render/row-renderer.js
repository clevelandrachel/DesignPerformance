/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ContentChildren, Directive, QueryList } from '@angular/core';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { DatagridCellRenderer } from './cell-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
var DatagridRowRenderer = /** @class */ (function () {
    function DatagridRowRenderer(organizer) {
        var _this = this;
        this.organizer = organizer;
        this.subscriptions = [];
        this.subscriptions.push(organizer.filterRenderSteps(DatagridRenderStep.ALIGN_COLUMNS).subscribe(function () { return _this.setWidths(); }));
    }
    /**
     * @return {?}
     */
    DatagridRowRenderer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @return {?}
     */
    DatagridRowRenderer.prototype.setWidths = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.organizer.widths.length !== this.cells.length) {
            return;
        }
        this.cells.forEach(function (cell, index) {
            /** @type {?} */
            var width = _this.organizer.widths[index];
            cell.setWidth(width.strict, width.px);
        });
    };
    /**
     * @return {?}
     */
    DatagridRowRenderer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cells.changes.subscribe(function () {
            _this.setWidths();
        });
    };
    /**
     * @return {?}
     */
    DatagridRowRenderer.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setWidths();
    };
    DatagridRowRenderer.decorators = [
        { type: Directive, args: [{ selector: 'clr-dg-row, clr-dg-row-detail' },] }
    ];
    /** @nocollapse */
    DatagridRowRenderer.ctorParameters = function () { return [
        { type: DatagridRenderOrganizer }
    ]; };
    DatagridRowRenderer.propDecorators = {
        cells: [{ type: ContentChildren, args: [DatagridCellRenderer,] }]
    };
    return DatagridRowRenderer;
}());
export { DatagridRowRenderer };
if (false) {
    /** @type {?} */
    DatagridRowRenderer.prototype.subscriptions;
    /** @type {?} */
    DatagridRowRenderer.prototype.cells;
    /** @type {?} */
    DatagridRowRenderer.prototype.organizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9yZW5kZXIvcm93LXJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0Q7SUFFRSw2QkFBb0IsU0FBa0M7UUFBdEQsaUJBSUM7UUFKbUIsY0FBUyxHQUFULFNBQVMsQ0FBeUI7UUFNOUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBTHpDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixTQUFTLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FDaEcsQ0FBQztJQUNKLENBQUM7Ozs7SUFHRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFJTyx1Q0FBUzs7O0lBQWpCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN0RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLOztnQkFDdkIsS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFOzs7O2dCQUYvQyx1QkFBdUI7Ozt3QkFlN0IsZUFBZSxTQUFDLG9CQUFvQjs7SUFxQnZDLDBCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FqQ1ksbUJBQW1COzs7SUFPOUIsNENBQTJDOztJQUszQyxvQ0FBOEU7O0lBWGxFLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFncmlkUmVuZGVyU3RlcCB9IGZyb20gJy4uL2VudW1zL3JlbmRlci1zdGVwLmVudW0nO1xuXG5pbXBvcnQgeyBEYXRhZ3JpZENlbGxSZW5kZXJlciB9IGZyb20gJy4vY2VsbC1yZW5kZXJlcic7XG5pbXBvcnQgeyBEYXRhZ3JpZFJlbmRlck9yZ2FuaXplciB9IGZyb20gJy4vcmVuZGVyLW9yZ2FuaXplcic7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ2Nsci1kZy1yb3csIGNsci1kZy1yb3ctZGV0YWlsJyB9KVxuZXhwb3J0IGNsYXNzIERhdGFncmlkUm93UmVuZGVyZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZ2FuaXplcjogRGF0YWdyaWRSZW5kZXJPcmdhbml6ZXIpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIG9yZ2FuaXplci5maWx0ZXJSZW5kZXJTdGVwcyhEYXRhZ3JpZFJlbmRlclN0ZXAuQUxJR05fQ09MVU1OUykuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0V2lkdGhzKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oRGF0YWdyaWRDZWxsUmVuZGVyZXIpIGNlbGxzOiBRdWVyeUxpc3Q8RGF0YWdyaWRDZWxsUmVuZGVyZXI+O1xuXG4gIHByaXZhdGUgc2V0V2lkdGhzKCkge1xuICAgIGlmICh0aGlzLm9yZ2FuaXplci53aWR0aHMubGVuZ3RoICE9PSB0aGlzLmNlbGxzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNlbGxzLmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMub3JnYW5pemVyLndpZHRoc1tpbmRleF07XG4gICAgICBjZWxsLnNldFdpZHRoKHdpZHRoLnN0cmljdCwgd2lkdGgucHgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY2VsbHMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRXaWR0aHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldFdpZHRocygpO1xuICB9XG59XG4iXX0=