/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';
import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from '../../utils/id-generator/id-generator.service';
export class ClrDatagridColumnSeparator {
    // Every column draggable separator should have its own unique ID
    // in order to not conflict with other draggables/droppables.
    /**
     * @param {?} columnResizerService
     * @param {?} renderer
     * @param {?} tableSizeService
     * @param {?} document
     * @param {?} columnSeparatorId
     */
    constructor(columnResizerService, renderer, tableSizeService, document, columnSeparatorId) {
        this.columnResizerService = columnResizerService;
        this.renderer = renderer;
        this.tableSizeService = tableSizeService;
        this.document = document;
        this.columnSeparatorId = columnSeparatorId;
    }
    /**
     * @param {?} resizeTrackerEl
     * @return {?}
     */
    showTracker(resizeTrackerEl) {
        this.columnResizerService.startResize();
        /** @type {?} */
        const tableHeight = this.tableSizeService.getColumnDragHeight();
        this.renderer.setStyle(resizeTrackerEl, 'height', tableHeight);
        this.renderer.setStyle(resizeTrackerEl, 'display', 'block');
    }
    /**
     * @param {?} event
     * @param {?} resizeTrackerEl
     * @return {?}
     */
    moveTracker(event, resizeTrackerEl) {
        this.columnResizerService.calculateResize(event);
        this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(${this.columnResizerService.resizedBy}px)`);
        this.renderer.setStyle(this.document.body, 'cursor', 'col-resize');
        this.redFlagTracker(resizeTrackerEl);
    }
    /**
     * @param {?} resizeTrackerEl
     * @return {?}
     */
    hideTracker(resizeTrackerEl) {
        this.columnResizerService.endResize();
        this.renderer.setStyle(resizeTrackerEl, 'display', 'none');
        this.renderer.setStyle(resizeTrackerEl, 'transform', `translateX(0px)`);
        this.renderer.setStyle(this.document.body, 'cursor', 'auto');
    }
    /**
     * @param {?} resizeTrackerEl
     * @return {?}
     */
    redFlagTracker(resizeTrackerEl) {
        /** @type {?} */
        let isWithinMaxResizeRange;
        if (isWithinMaxResizeRange !== this.columnResizerService.isWithinMaxResizeRange) {
            isWithinMaxResizeRange = this.columnResizerService.isWithinMaxResizeRange;
            if (!isWithinMaxResizeRange) {
                this.renderer.addClass(resizeTrackerEl, 'exceeded-max');
            }
            else {
                this.renderer.removeClass(resizeTrackerEl, 'exceeded-max');
            }
        }
    }
}
ClrDatagridColumnSeparator.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-column-separator',
                template: `
    <div class="datagrid-column-handle" aria-hidden="true"
      clrDraggable 
      [clrGroup]="columnSeparatorId" 
      (clrDragStart)="showTracker(resizeTrackerEl)" 
      (clrDragMove)="moveTracker($event, resizeTrackerEl)" 
      (clrDragEnd)="hideTracker(resizeTrackerEl)"></div>
    <div class="datagrid-column-resize-tracker" #resizeTrackerEl></div>
    `,
                host: {
                    '[class.datagrid-column-separator]': 'true',
                },
                providers: [UNIQUE_ID_PROVIDER]
            }] }
];
/** @nocollapse */
ClrDatagridColumnSeparator.ctorParameters = () => [
    { type: ColumnResizerService },
    { type: Renderer2 },
    { type: TableSizeService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [UNIQUE_ID,] }] }
];
if (false) {
    /** @type {?} */
    ClrDatagridColumnSeparator.prototype.columnResizerService;
    /** @type {?} */
    ClrDatagridColumnSeparator.prototype.renderer;
    /** @type {?} */
    ClrDatagridColumnSeparator.prototype.tableSizeService;
    /** @type {?} */
    ClrDatagridColumnSeparator.prototype.document;
    /** @type {?} */
    ClrDatagridColumnSeparator.prototype.columnSeparatorId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtY29sdW1uLXNlcGFyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtY29sdW1uLXNlcGFyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQWtCOUYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7OztJQUdyQyxZQUNVLG9CQUEwQyxFQUMxQyxRQUFtQixFQUNuQixnQkFBa0MsRUFDaEIsUUFBYSxFQUNiLGlCQUF5QjtRQUozQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFRO0lBQ2xELENBQUM7Ozs7O0lBRUcsV0FBVyxDQUFDLGVBQTRCO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Y0FDbEMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQXdCLEVBQUUsZUFBNEI7UUFDdkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsZUFBNEI7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7OztJQUVPLGNBQWMsQ0FBQyxlQUE0Qjs7WUFDN0Msc0JBQStCO1FBQ25DLElBQUksc0JBQXNCLEtBQUssSUFBSSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixFQUFFO1lBQy9FLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztZQUMxRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDNUQ7U0FDRjtJQUNILENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO2dCQUNILElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxNQUFNO2lCQUM1QztnQkFDRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNoQzs7OztZQW5CUSxvQkFBb0I7WUFIRCxTQUFTO1lBSTVCLGdCQUFnQjs0Q0EwQnBCLE1BQU0sU0FBQyxRQUFRO3lDQUNmLE1BQU0sU0FBQyxTQUFTOzs7O0lBSmpCLDBEQUFrRDs7SUFDbEQsOENBQTJCOztJQUMzQixzREFBMEM7O0lBQzFDLDhDQUF1Qzs7SUFDdkMsdURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJEcmFnRXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uUmVzaXplclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9jb2x1bW4tcmVzaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlU2l6ZVNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy90YWJsZS1zaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgVU5JUVVFX0lEX1BST1ZJREVSLCBVTklRVUVfSUQgfSBmcm9tICcuLi8uLi91dGlscy9pZC1nZW5lcmF0b3IvaWQtZ2VuZXJhdG9yLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctY29sdW1uLXNlcGFyYXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRhdGFncmlkLWNvbHVtbi1oYW5kbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgY2xyRHJhZ2dhYmxlIFxuICAgICAgW2Nsckdyb3VwXT1cImNvbHVtblNlcGFyYXRvcklkXCIgXG4gICAgICAoY2xyRHJhZ1N0YXJ0KT1cInNob3dUcmFja2VyKHJlc2l6ZVRyYWNrZXJFbClcIiBcbiAgICAgIChjbHJEcmFnTW92ZSk9XCJtb3ZlVHJhY2tlcigkZXZlbnQsIHJlc2l6ZVRyYWNrZXJFbClcIiBcbiAgICAgIChjbHJEcmFnRW5kKT1cImhpZGVUcmFja2VyKHJlc2l6ZVRyYWNrZXJFbClcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0YWdyaWQtY29sdW1uLXJlc2l6ZS10cmFja2VyXCIgI3Jlc2l6ZVRyYWNrZXJFbD48L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kYXRhZ3JpZC1jb2x1bW4tc2VwYXJhdG9yXSc6ICd0cnVlJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbVU5JUVVFX0lEX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0YWdyaWRDb2x1bW5TZXBhcmF0b3Ige1xuICAvLyBFdmVyeSBjb2x1bW4gZHJhZ2dhYmxlIHNlcGFyYXRvciBzaG91bGQgaGF2ZSBpdHMgb3duIHVuaXF1ZSBJRFxuICAvLyBpbiBvcmRlciB0byBub3QgY29uZmxpY3Qgd2l0aCBvdGhlciBkcmFnZ2FibGVzL2Ryb3BwYWJsZXMuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29sdW1uUmVzaXplclNlcnZpY2U6IENvbHVtblJlc2l6ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRhYmxlU2l6ZVNlcnZpY2U6IFRhYmxlU2l6ZVNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoVU5JUVVFX0lEKSBwdWJsaWMgY29sdW1uU2VwYXJhdG9ySWQ6IHN0cmluZ1xuICApIHt9XG5cbiAgcHVibGljIHNob3dUcmFja2VyKHJlc2l6ZVRyYWNrZXJFbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmNvbHVtblJlc2l6ZXJTZXJ2aWNlLnN0YXJ0UmVzaXplKCk7XG4gICAgY29uc3QgdGFibGVIZWlnaHQgPSB0aGlzLnRhYmxlU2l6ZVNlcnZpY2UuZ2V0Q29sdW1uRHJhZ0hlaWdodCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmVzaXplVHJhY2tlckVsLCAnaGVpZ2h0JywgdGFibGVIZWlnaHQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmVzaXplVHJhY2tlckVsLCAnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgcHVibGljIG1vdmVUcmFja2VyKGV2ZW50OiBDbHJEcmFnRXZlbnQ8YW55PiwgcmVzaXplVHJhY2tlckVsOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuY29sdW1uUmVzaXplclNlcnZpY2UuY2FsY3VsYXRlUmVzaXplKGV2ZW50KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZVRyYWNrZXJFbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVYKCR7dGhpcy5jb2x1bW5SZXNpemVyU2VydmljZS5yZXNpemVkQnl9cHgpYCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdjdXJzb3InLCAnY29sLXJlc2l6ZScpO1xuICAgIHRoaXMucmVkRmxhZ1RyYWNrZXIocmVzaXplVHJhY2tlckVsKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlVHJhY2tlcihyZXNpemVUcmFja2VyRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5jb2x1bW5SZXNpemVyU2VydmljZS5lbmRSZXNpemUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZVRyYWNrZXJFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocmVzaXplVHJhY2tlckVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoMHB4KWApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnY3Vyc29yJywgJ2F1dG8nKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVkRmxhZ1RyYWNrZXIocmVzaXplVHJhY2tlckVsOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBpc1dpdGhpbk1heFJlc2l6ZVJhbmdlOiBib29sZWFuO1xuICAgIGlmIChpc1dpdGhpbk1heFJlc2l6ZVJhbmdlICE9PSB0aGlzLmNvbHVtblJlc2l6ZXJTZXJ2aWNlLmlzV2l0aGluTWF4UmVzaXplUmFuZ2UpIHtcbiAgICAgIGlzV2l0aGluTWF4UmVzaXplUmFuZ2UgPSB0aGlzLmNvbHVtblJlc2l6ZXJTZXJ2aWNlLmlzV2l0aGluTWF4UmVzaXplUmFuZ2U7XG4gICAgICBpZiAoIWlzV2l0aGluTWF4UmVzaXplUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVUcmFja2VyRWwsICdleGNlZWRlZC1tYXgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocmVzaXplVHJhY2tlckVsLCAnZXhjZWVkZWQtbWF4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=