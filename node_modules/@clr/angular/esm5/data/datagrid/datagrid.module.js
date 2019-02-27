/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClrFormsModule } from '../../forms/forms.module';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonPopoverModule } from '../../popover/common/popover.module';
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';
import { ClrLoadingModule } from '../../utils/loading/loading.module';
import { ClrOutsideClickModule } from '../../utils/outside-click/outside-click.module';
import { ClrDragAndDropModule } from '../../utils/drag-and-drop/drag-and-drop.module';
import { DatagridRowExpandAnimation } from './animation-hack/row-expand-animation';
import { DatagridStringFilter } from './built-in/filters/datagrid-string-filter';
import { ActionableOompaLoompa } from './chocolate/actionable-oompa-loompa';
import { DatagridWillyWonka } from './chocolate/datagrid-willy-wonka';
import { ExpandableOompaLoompa } from './chocolate/expandable-oompa-loompa';
import { ClrDatagrid } from './datagrid';
import { ClrDatagridActionBar } from './datagrid-action-bar';
import { ClrDatagridActionOverflow } from './datagrid-action-overflow';
import { ClrDatagridCell } from './datagrid-cell';
import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridColumnSeparator } from './datagrid-column-separator';
import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { DatagridDetailRegisterer } from './datagrid-detail-registerer';
import { ClrDatagridFilter } from './datagrid-filter';
import { ClrDatagridFooter } from './datagrid-footer';
import { ClrDatagridHideableColumn } from './datagrid-hideable-column';
import { ClrDatagridItems } from './datagrid-items';
import { ClrDatagridItemsTrackBy } from './datagrid-items-trackby';
import { ClrDatagridPagination } from './datagrid-pagination';
import { ClrDatagridPageSize } from './datagrid-page-size';
import { ClrDatagridPlaceholder } from './datagrid-placeholder';
import { ClrDatagridRow } from './datagrid-row';
import { ClrDatagridRowDetail } from './datagrid-row-detail';
import { DatagridCellRenderer } from './render/cell-renderer';
import { DatagridHeaderRenderer } from './render/header-renderer';
import { DatagridMainRenderer } from './render/main-renderer';
import { DatagridRowRenderer } from './render/row-renderer';
import { WrappedCell } from './wrapped-cell';
import { WrappedColumn } from './wrapped-column';
import { WrappedRow } from './wrapped-row';
/** @type {?} */
export var CLR_DATAGRID_DIRECTIVES = [
    // Core
    ClrDatagrid,
    ClrDatagridActionBar,
    ClrDatagridActionOverflow,
    ClrDatagridColumn,
    ClrDatagridColumnSeparator,
    ClrDatagridColumnToggle,
    ClrDatagridHideableColumn,
    ClrDatagridFilter,
    ClrDatagridItems,
    ClrDatagridItemsTrackBy,
    ClrDatagridRow,
    ClrDatagridRowDetail,
    DatagridDetailRegisterer,
    ClrDatagridCell,
    ClrDatagridFooter,
    ClrDatagridPagination,
    ClrDatagridPageSize,
    ClrDatagridPlaceholder,
    ClrDatagridColumnToggleButton,
    ClrDatagridColumnToggleTitle,
    WrappedCell,
    WrappedColumn,
    WrappedRow,
    // Renderers
    DatagridMainRenderer,
    DatagridHeaderRenderer,
    DatagridRowRenderer,
    DatagridCellRenderer,
    // Chocolate
    DatagridWillyWonka,
    ActionableOompaLoompa,
    ExpandableOompaLoompa,
    // Animation hack
    DatagridRowExpandAnimation,
    // Built-in shortcuts
    DatagridStringFilter,
];
var ClrDatagridModule = /** @class */ (function () {
    function ClrDatagridModule() {
    }
    ClrDatagridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ClrIconModule,
                        ClrFormsModule,
                        FormsModule,
                        ClrCommonPopoverModule,
                        ClrLoadingModule,
                        ClrOutsideClickModule,
                        ClrDragAndDropModule,
                    ],
                    declarations: [CLR_DATAGRID_DIRECTIVES],
                    exports: [CLR_DATAGRID_DIRECTIVES, ClrIfExpandModule],
                    entryComponents: [WrappedCell, WrappedColumn, WrappedRow],
                },] }
    ];
    return ClrDatagridModule;
}());
export { ClrDatagridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FB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QkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3JELGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDO2lCQUMxRDs7SUFDK0Isd0JBQUM7Q0FBQSxBQWZqQyxJQWVpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENsckZvcm1zTW9kdWxlIH0gZnJvbSAnLi4vLi4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7IENsckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENsckNvbW1vblBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDbHJJZkV4cGFuZE1vZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2V4cGFuZC9pZi1leHBhbmQubW9kdWxlJztcbmltcG9ydCB7IENsckxvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9sb2FkaW5nL2xvYWRpbmcubW9kdWxlJztcbmltcG9ydCB7IENsck91dHNpZGVDbGlja01vZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svb3V0c2lkZS1jbGljay5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AubW9kdWxlJztcblxuaW1wb3J0IHsgRGF0YWdyaWRSb3dFeHBhbmRBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1oYWNrL3Jvdy1leHBhbmQtYW5pbWF0aW9uJztcbmltcG9ydCB7IERhdGFncmlkU3RyaW5nRmlsdGVyIH0gZnJvbSAnLi9idWlsdC1pbi9maWx0ZXJzL2RhdGFncmlkLXN0cmluZy1maWx0ZXInO1xuaW1wb3J0IHsgQWN0aW9uYWJsZU9vbXBhTG9vbXBhIH0gZnJvbSAnLi9jaG9jb2xhdGUvYWN0aW9uYWJsZS1vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgRGF0YWdyaWRXaWxseVdvbmthIH0gZnJvbSAnLi9jaG9jb2xhdGUvZGF0YWdyaWQtd2lsbHktd29ua2EnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZU9vbXBhTG9vbXBhIH0gZnJvbSAnLi9jaG9jb2xhdGUvZXhwYW5kYWJsZS1vb21wYS1sb29tcGEnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWQgfSBmcm9tICcuL2RhdGFncmlkJztcbmltcG9ydCB7IENsckRhdGFncmlkQWN0aW9uQmFyIH0gZnJvbSAnLi9kYXRhZ3JpZC1hY3Rpb24tYmFyJztcbmltcG9ydCB7IENsckRhdGFncmlkQWN0aW9uT3ZlcmZsb3cgfSBmcm9tICcuL2RhdGFncmlkLWFjdGlvbi1vdmVyZmxvdyc7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENlbGwgfSBmcm9tICcuL2RhdGFncmlkLWNlbGwnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb2x1bW4gfSBmcm9tICcuL2RhdGFncmlkLWNvbHVtbic7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbHVtblNlcGFyYXRvciB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uLXNlcGFyYXRvcic7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZSB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uLXRvZ2dsZSc7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZUJ1dHRvbiB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS1idXR0b24nO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVUaXRsZSB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS10aXRsZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZERldGFpbFJlZ2lzdGVyZXIgfSBmcm9tICcuL2RhdGFncmlkLWRldGFpbC1yZWdpc3RlcmVyJztcbmltcG9ydCB7IENsckRhdGFncmlkRmlsdGVyIH0gZnJvbSAnLi9kYXRhZ3JpZC1maWx0ZXInO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGb290ZXIgfSBmcm9tICcuL2RhdGFncmlkLWZvb3Rlcic7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uIH0gZnJvbSAnLi9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4nO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRJdGVtcyB9IGZyb20gJy4vZGF0YWdyaWQtaXRlbXMnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRJdGVtc1RyYWNrQnkgfSBmcm9tICcuL2RhdGFncmlkLWl0ZW1zLXRyYWNrYnknO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRQYWdpbmF0aW9uIH0gZnJvbSAnLi9kYXRhZ3JpZC1wYWdpbmF0aW9uJztcbmltcG9ydCB7IENsckRhdGFncmlkUGFnZVNpemUgfSBmcm9tICcuL2RhdGFncmlkLXBhZ2Utc2l6ZSc7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZFBsYWNlaG9sZGVyIH0gZnJvbSAnLi9kYXRhZ3JpZC1wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZFJvdyB9IGZyb20gJy4vZGF0YWdyaWQtcm93JztcbmltcG9ydCB7IENsckRhdGFncmlkUm93RGV0YWlsIH0gZnJvbSAnLi9kYXRhZ3JpZC1yb3ctZGV0YWlsJztcbmltcG9ydCB7IERhdGFncmlkQ2VsbFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvY2VsbC1yZW5kZXJlcic7XG5pbXBvcnQgeyBEYXRhZ3JpZEhlYWRlclJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvaGVhZGVyLXJlbmRlcmVyJztcbmltcG9ydCB7IERhdGFncmlkTWFpblJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvbWFpbi1yZW5kZXJlcic7XG5pbXBvcnQgeyBEYXRhZ3JpZFJvd1JlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXIvcm93LXJlbmRlcmVyJztcbmltcG9ydCB7IFdyYXBwZWRDZWxsIH0gZnJvbSAnLi93cmFwcGVkLWNlbGwnO1xuaW1wb3J0IHsgV3JhcHBlZENvbHVtbiB9IGZyb20gJy4vd3JhcHBlZC1jb2x1bW4nO1xuaW1wb3J0IHsgV3JhcHBlZFJvdyB9IGZyb20gJy4vd3JhcHBlZC1yb3cnO1xuXG5leHBvcnQgY29uc3QgQ0xSX0RBVEFHUklEX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1xuICAvLyBDb3JlXG4gIENsckRhdGFncmlkLFxuICBDbHJEYXRhZ3JpZEFjdGlvbkJhcixcbiAgQ2xyRGF0YWdyaWRBY3Rpb25PdmVyZmxvdyxcbiAgQ2xyRGF0YWdyaWRDb2x1bW4sXG4gIENsckRhdGFncmlkQ29sdW1uU2VwYXJhdG9yLFxuICBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZSxcbiAgQ2xyRGF0YWdyaWRIaWRlYWJsZUNvbHVtbixcbiAgQ2xyRGF0YWdyaWRGaWx0ZXIsXG4gIENsckRhdGFncmlkSXRlbXMsXG4gIENsckRhdGFncmlkSXRlbXNUcmFja0J5LFxuICBDbHJEYXRhZ3JpZFJvdyxcbiAgQ2xyRGF0YWdyaWRSb3dEZXRhaWwsXG4gIERhdGFncmlkRGV0YWlsUmVnaXN0ZXJlcixcbiAgQ2xyRGF0YWdyaWRDZWxsLFxuICBDbHJEYXRhZ3JpZEZvb3RlcixcbiAgQ2xyRGF0YWdyaWRQYWdpbmF0aW9uLFxuICBDbHJEYXRhZ3JpZFBhZ2VTaXplLFxuICBDbHJEYXRhZ3JpZFBsYWNlaG9sZGVyLFxuICBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZUJ1dHRvbixcbiAgQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVUaXRsZSxcbiAgV3JhcHBlZENlbGwsXG4gIFdyYXBwZWRDb2x1bW4sXG4gIFdyYXBwZWRSb3csXG5cbiAgLy8gUmVuZGVyZXJzXG4gIERhdGFncmlkTWFpblJlbmRlcmVyLFxuICBEYXRhZ3JpZEhlYWRlclJlbmRlcmVyLFxuICBEYXRhZ3JpZFJvd1JlbmRlcmVyLFxuICBEYXRhZ3JpZENlbGxSZW5kZXJlcixcblxuICAvLyBDaG9jb2xhdGVcbiAgRGF0YWdyaWRXaWxseVdvbmthLFxuICBBY3Rpb25hYmxlT29tcGFMb29tcGEsXG4gIEV4cGFuZGFibGVPb21wYUxvb21wYSxcblxuICAvLyBBbmltYXRpb24gaGFja1xuICBEYXRhZ3JpZFJvd0V4cGFuZEFuaW1hdGlvbixcblxuICAvLyBCdWlsdC1pbiBzaG9ydGN1dHNcbiAgRGF0YWdyaWRTdHJpbmdGaWx0ZXIsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENsckljb25Nb2R1bGUsXG4gICAgQ2xyRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ2xyQ29tbW9uUG9wb3Zlck1vZHVsZSxcbiAgICBDbHJMb2FkaW5nTW9kdWxlLFxuICAgIENsck91dHNpZGVDbGlja01vZHVsZSxcbiAgICBDbHJEcmFnQW5kRHJvcE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ0xSX0RBVEFHUklEX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbQ0xSX0RBVEFHUklEX0RJUkVDVElWRVMsIENscklmRXhwYW5kTW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbV3JhcHBlZENlbGwsIFdyYXBwZWRDb2x1bW4sIFdyYXBwZWRSb3ddLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZE1vZHVsZSB7fVxuIl19