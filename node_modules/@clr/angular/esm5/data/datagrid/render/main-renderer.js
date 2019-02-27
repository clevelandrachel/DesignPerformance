/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { ContentChildren, Directive, ElementRef, PLATFORM_ID, QueryList, Renderer2, } from '@angular/core';
import { ClrDatagridColumn } from '../datagrid-column';
import { DatagridRenderStep } from '../enums/render-step.enum';
import { Items } from '../providers/items';
import { Page } from '../providers/page';
import { TableSizeService } from '../providers/table-size.service';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { DatagridHeaderRenderer } from './header-renderer';
import { NoopDomAdapter } from './noop-dom-adapter';
import { DatagridRenderOrganizer } from './render-organizer';
// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
/** @type {?} */
export var domAdapterFactory = function (platformId) {
    if (isPlatformBrowser(platformId)) {
        return new DomAdapter();
    }
    else {
        return new NoopDomAdapter();
    }
};
// Fixes build error
// @dynamic (https://github.com/angular/angular/issues/19698#issuecomment-338340211)
/**
 * @template T
 */
var DatagridMainRenderer = /** @class */ (function () {
    function DatagridMainRenderer(organizer, items, page, domAdapter, el, renderer, tableSizeService) {
        var _this = this;
        this.organizer = organizer;
        this.items = items;
        this.page = page;
        this.domAdapter = domAdapter;
        this.el = el;
        this.renderer = renderer;
        this.tableSizeService = tableSizeService;
        this._heightSet = false;
        this.subscriptions = [];
        /**
         * Indicates if we want to re-compute columns width. This should only happen:
         * 1) When headers change, with columns being added or removed
         * 2) When rows are lazily loaded for the first time
         */
        this.columnsSizesStable = false;
        this.shouldStabilizeColumns = true;
        this.subscriptions.push(this.organizer
            .filterRenderSteps(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS)
            .subscribe(function () { return _this.computeHeadersWidth(); }));
        this.subscriptions.push(this.page.sizeChange.subscribe(function () {
            if (_this._heightSet) {
                _this.resetDatagridHeight();
            }
        }));
        this.subscriptions.push(this.items.change.subscribe(function () { return (_this.shouldStabilizeColumns = true); }));
    }
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.headers.changes.subscribe(function () {
            // TODO: only re-stabilize if a column was added or removed. Reordering is fine.
            _this.columnsSizesStable = false;
            _this.stabilizeColumns();
        }));
    };
    // Initialize and set Table width for horizontal scrolling here.
    // Initialize and set Table width for horizontal scrolling here.
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.ngAfterViewInit = 
    // Initialize and set Table width for horizontal scrolling here.
    /**
     * @return {?}
     */
    function () {
        this.tableSizeService.table = this.el;
    };
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.shouldStabilizeColumns) {
            this.stabilizeColumns();
        }
        if (this.shouldComputeHeight()) {
            setTimeout(function () {
                _this.computeDatagridHeight();
            });
        }
    };
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.shouldComputeHeight = /**
     * @return {?}
     */
    function () {
        if (!this._heightSet && this.page.size > 0) {
            if (this.items.displayed.length === this.page.size) {
                return true;
            }
        }
        return false;
    };
    /**
     * Computes the height of the datagrid.
     *
     * NOTE: We had to choose to set the height instead of the min-height because
     * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
     * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
     * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
     *
     * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
     */
    /**
     * Computes the height of the datagrid.
     *
     * NOTE: We had to choose to set the height instead of the min-height because
     * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
     * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
     * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
     *
     * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
     * @return {?}
     */
    DatagridMainRenderer.prototype.computeDatagridHeight = /**
     * Computes the height of the datagrid.
     *
     * NOTE: We had to choose to set the height instead of the min-height because
     * IE 11 requires the height on the parent for the children flex grow/shrink properties to work.
     * When we used min-height, 1 1 auto doesn't used to work in IE11 :-(
     * But this doesn't affect the fix. It works in both fixed & variable height datagrids.
     *
     * Refer: http://stackoverflow.com/questions/24396205/flex-grow-not-working-in-internet-explorer-11-0
     * @return {?}
     */
    function () {
        // IE doesn't return correct value for getComputedStyle(element).getPropertyValue("height")
        /** @type {?} */
        var value = this.domAdapter.clientRect(this.el.nativeElement).height;
        this.renderer.setStyle(this.el.nativeElement, 'height', value + 'px');
        this._heightSet = true;
    };
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.resetDatagridHeight = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el.nativeElement, 'height', '');
        this._heightSet = false;
    };
    /**
     * @return {?}
     */
    DatagridMainRenderer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * Makes each header compute its width.
     */
    /**
     * Makes each header compute its width.
     * @return {?}
     */
    DatagridMainRenderer.prototype.computeHeadersWidth = /**
     * Makes each header compute its width.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var nbColumns = this.headers.length;
        /** @type {?} */
        var allStrict = true;
        this.headers.forEach(function (header, index) {
            // On the last header column check whether all columns have strict widths.
            // If all columns have strict widths, remove the strict width from the last column and make it the column's
            // minimum width so that when all previous columns shrink, it will get a flexible width and cover the empty
            // gap in the Datagrid.
            if (!header.strictWidth) {
                allStrict = false;
            }
            if (nbColumns === index + 1 && allStrict) {
                delete header.strictWidth;
            }
            _this.organizer.widths[index] = { px: header.computeWidth(), strict: !!header.strictWidth };
        });
        this.headers.forEach(function (header, index) { return header.setWidth(_this.organizer.widths[index].px); });
    };
    /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     */
    /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     * @return {?}
     */
    DatagridMainRenderer.prototype.stabilizeColumns = /**
     * Triggers a whole re-rendring cycle to set column sizes, if needed.
     * @return {?}
     */
    function () {
        this.shouldStabilizeColumns = false;
        if (this.columnsSizesStable) {
            // Nothing to do.
            return;
        }
        // Resize when the rows are loaded.
        if (this.items.displayed.length > 0) {
            this.organizer.resize();
            this.columnsSizesStable = true;
        }
    };
    DatagridMainRenderer.decorators = [
        { type: Directive, args: [{
                    selector: 'clr-datagrid',
                    providers: [{ provide: DomAdapter, useFactory: domAdapterFactory, deps: [PLATFORM_ID] }],
                },] }
    ];
    /** @nocollapse */
    DatagridMainRenderer.ctorParameters = function () { return [
        { type: DatagridRenderOrganizer },
        { type: Items },
        { type: Page },
        { type: DomAdapter },
        { type: ElementRef },
        { type: Renderer2 },
        { type: TableSizeService }
    ]; };
    DatagridMainRenderer.propDecorators = {
        headers: [{ type: ContentChildren, args: [DatagridHeaderRenderer,] }],
        columns: [{ type: ContentChildren, args: [ClrDatagridColumn,] }]
    };
    return DatagridMainRenderer;
}());
export { DatagridMainRenderer };
if (false) {
    /** @type {?} */
    DatagridMainRenderer.prototype.headers;
    /** @type {?} */
    DatagridMainRenderer.prototype.columns;
    /** @type {?} */
    DatagridMainRenderer.prototype._heightSet;
    /** @type {?} */
    DatagridMainRenderer.prototype.subscriptions;
    /**
     * Indicates if we want to re-compute columns width. This should only happen:
     * 1) When headers change, with columns being added or removed
     * 2) When rows are lazily loaded for the first time
     * @type {?}
     */
    DatagridMainRenderer.prototype.columnsSizesStable;
    /** @type {?} */
    DatagridMainRenderer.prototype.shouldStabilizeColumns;
    /** @type {?} */
    DatagridMainRenderer.prototype.organizer;
    /** @type {?} */
    DatagridMainRenderer.prototype.items;
    /** @type {?} */
    DatagridMainRenderer.prototype.page;
    /** @type {?} */
    DatagridMainRenderer.prototype.domAdapter;
    /** @type {?} */
    DatagridMainRenderer.prototype.el;
    /** @type {?} */
    DatagridMainRenderer.prototype.renderer;
    /** @type {?} */
    DatagridMainRenderer.prototype.tableSizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcmVuZGVyL21haW4tcmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUlMLGVBQWUsRUFDZixTQUFTLEVBQ1QsVUFBVSxFQUVWLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUk3RCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsVUFBQyxVQUFrQjtJQUNsRCxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztLQUN6QjtTQUFNO1FBQ0wsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO0tBQzdCO0FBQ0gsQ0FBQzs7Ozs7O0FBSUQ7SUFLRSw4QkFDVSxTQUFrQyxFQUNsQyxLQUFZLEVBQ1os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Qi9CLHVDQUEyRjs7SUFDM0YsdUNBQWlGOztJQTRCakYsMENBQW9DOztJQWlDcEMsNkNBQTJDOzs7Ozs7O0lBcUMzQyxrREFBbUM7O0lBRW5DLHNEQUFzQzs7SUE3SHBDLHlDQUEwQzs7SUFDMUMscUNBQW9COztJQUNwQixvQ0FBa0I7O0lBQ2xCLDBDQUE4Qjs7SUFDOUIsa0NBQXNCOztJQUN0Qix3Q0FBMkI7O0lBQzNCLGdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb2x1bW4gfSBmcm9tICcuLi9kYXRhZ3JpZC1jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YWdyaWRSZW5kZXJTdGVwIH0gZnJvbSAnLi4vZW51bXMvcmVuZGVyLXN0ZXAuZW51bSc7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4uL3Byb3ZpZGVycy9pdGVtcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3BhZ2UnO1xuaW1wb3J0IHsgVGFibGVTaXplU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy90YWJsZS1zaXplLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tLWFkYXB0ZXIvZG9tLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0YWdyaWRIZWFkZXJSZW5kZXJlciB9IGZyb20gJy4vaGVhZGVyLXJlbmRlcmVyJztcbmltcG9ydCB7IE5vb3BEb21BZGFwdGVyIH0gZnJvbSAnLi9ub29wLWRvbS1hZGFwdGVyJztcbmltcG9ydCB7IERhdGFncmlkUmVuZGVyT3JnYW5pemVyIH0gZnJvbSAnLi9yZW5kZXItb3JnYW5pemVyJztcblxuLy8gRml4ZXMgYnVpbGQgZXJyb3Jcbi8vIEBkeW5hbWljIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xOTY5OCNpc3N1ZWNvbW1lbnQtMzM4MzQwMjExKVxuZXhwb3J0IGNvbnN0IGRvbUFkYXB0ZXJGYWN0b3J5ID0gKHBsYXRmb3JtSWQ6IE9iamVjdCkgPT4ge1xuICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICByZXR1cm4gbmV3IERvbUFkYXB0ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IE5vb3BEb21BZGFwdGVyKCk7XG4gIH1cbn07XG5cbi8vIEZpeGVzIGJ1aWxkIGVycm9yXG4vLyBAZHluYW1pYyAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTk2OTgjaXNzdWVjb21tZW50LTMzODM0MDIxMSlcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nsci1kYXRhZ3JpZCcsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRG9tQWRhcHRlciwgdXNlRmFjdG9yeTogZG9tQWRhcHRlckZhY3RvcnksIGRlcHM6IFtQTEFURk9STV9JRF0gfV0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGFncmlkTWFpblJlbmRlcmVyPFQgPSBhbnk+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcmdhbml6ZXI6IERhdGFncmlkUmVuZGVyT3JnYW5pemVyLFxuICAgIHByaXZhdGUgaXRlbXM6IEl0ZW1zLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGRvbUFkYXB0ZXI6IERvbUFkYXB0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0YWJsZVNpemVTZXJ2aWNlOiBUYWJsZVNpemVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5vcmdhbml6ZXJcbiAgICAgICAgLmZpbHRlclJlbmRlclN0ZXBzKERhdGFncmlkUmVuZGVyU3RlcC5DT01QVVRFX0NPTFVNTl9XSURUSFMpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb21wdXRlSGVhZGVyc1dpZHRoKCkpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5wYWdlLnNpemVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2hlaWdodFNldCkge1xuICAgICAgICAgIHRoaXMucmVzZXREYXRhZ3JpZEhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5pdGVtcy5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+ICh0aGlzLnNob3VsZFN0YWJpbGl6ZUNvbHVtbnMgPSB0cnVlKSkpO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihEYXRhZ3JpZEhlYWRlclJlbmRlcmVyKSBwdWJsaWMgaGVhZGVyczogUXVlcnlMaXN0PERhdGFncmlkSGVhZGVyUmVuZGVyZXI+O1xuICBAQ29udGVudENoaWxkcmVuKENsckRhdGFncmlkQ29sdW1uKSBwdWJsaWMgY29sdW1uczogUXVlcnlMaXN0PENsckRhdGFncmlkQ29sdW1uPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmhlYWRlcnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBvbmx5IHJlLXN0YWJpbGl6ZSBpZiBhIGNvbHVtbiB3YXMgYWRkZWQgb3IgcmVtb3ZlZC4gUmVvcmRlcmluZyBpcyBmaW5lLlxuICAgICAgICB0aGlzLmNvbHVtbnNTaXplc1N0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YWJpbGl6ZUNvbHVtbnMoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgYW5kIHNldCBUYWJsZSB3aWR0aCBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgaGVyZS5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudGFibGVTaXplU2VydmljZS50YWJsZSA9IHRoaXMuZWw7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU3RhYmlsaXplQ29sdW1ucykge1xuICAgICAgdGhpcy5zdGFiaWxpemVDb2x1bW5zKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3VsZENvbXB1dGVIZWlnaHQoKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcHV0ZURhdGFncmlkSGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oZWlnaHRTZXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHNob3VsZENvbXB1dGVIZWlnaHQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9oZWlnaHRTZXQgJiYgdGhpcy5wYWdlLnNpemUgPiAwKSB7XG4gICAgICBpZiAodGhpcy5pdGVtcy5kaXNwbGF5ZWQubGVuZ3RoID09PSB0aGlzLnBhZ2Uuc2l6ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBoZWlnaHQgb2YgdGhlIGRhdGFncmlkLlxuICAgKlxuICAgKiBOT1RFOiBXZSBoYWQgdG8gY2hvb3NlIHRvIHNldCB0aGUgaGVpZ2h0IGluc3RlYWQgb2YgdGhlIG1pbi1oZWlnaHQgYmVjYXVzZVxuICAgKiBJRSAxMSByZXF1aXJlcyB0aGUgaGVpZ2h0IG9uIHRoZSBwYXJlbnQgZm9yIHRoZSBjaGlsZHJlbiBmbGV4IGdyb3cvc2hyaW5rIHByb3BlcnRpZXMgdG8gd29yay5cbiAgICogV2hlbiB3ZSB1c2VkIG1pbi1oZWlnaHQsIDEgMSBhdXRvIGRvZXNuJ3QgdXNlZCB0byB3b3JrIGluIElFMTEgOi0oXG4gICAqIEJ1dCB0aGlzIGRvZXNuJ3QgYWZmZWN0IHRoZSBmaXguIEl0IHdvcmtzIGluIGJvdGggZml4ZWQgJiB2YXJpYWJsZSBoZWlnaHQgZGF0YWdyaWRzLlxuICAgKlxuICAgKiBSZWZlcjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDM5NjIwNS9mbGV4LWdyb3ctbm90LXdvcmtpbmctaW4taW50ZXJuZXQtZXhwbG9yZXItMTEtMFxuICAgKi9cbiAgcHJpdmF0ZSBjb21wdXRlRGF0YWdyaWRIZWlnaHQoKSB7XG4gICAgLy8gSUUgZG9lc24ndCByZXR1cm4gY29ycmVjdCB2YWx1ZSBmb3IgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpXG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9IHRoaXMuZG9tQWRhcHRlci5jbGllbnRSZWN0KHRoaXMuZWwubmF0aXZlRWxlbWVudCkuaGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdmFsdWUgKyAncHgnKTtcbiAgICB0aGlzLl9oZWlnaHRTZXQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERhdGFncmlkSGVpZ2h0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJycpO1xuICAgIHRoaXMuX2hlaWdodFNldCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgZWFjaCBoZWFkZXIgY29tcHV0ZSBpdHMgd2lkdGguXG4gICAqL1xuICBwcml2YXRlIGNvbXB1dGVIZWFkZXJzV2lkdGgoKSB7XG4gICAgY29uc3QgbmJDb2x1bW5zOiBudW1iZXIgPSB0aGlzLmhlYWRlcnMubGVuZ3RoO1xuICAgIGxldCBhbGxTdHJpY3QgPSB0cnVlO1xuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKChoZWFkZXIsIGluZGV4KSA9PiB7XG4gICAgICAvLyBPbiB0aGUgbGFzdCBoZWFkZXIgY29sdW1uIGNoZWNrIHdoZXRoZXIgYWxsIGNvbHVtbnMgaGF2ZSBzdHJpY3Qgd2lkdGhzLlxuICAgICAgLy8gSWYgYWxsIGNvbHVtbnMgaGF2ZSBzdHJpY3Qgd2lkdGhzLCByZW1vdmUgdGhlIHN0cmljdCB3aWR0aCBmcm9tIHRoZSBsYXN0IGNvbHVtbiBhbmQgbWFrZSBpdCB0aGUgY29sdW1uJ3NcbiAgICAgIC8vIG1pbmltdW0gd2lkdGggc28gdGhhdCB3aGVuIGFsbCBwcmV2aW91cyBjb2x1bW5zIHNocmluaywgaXQgd2lsbCBnZXQgYSBmbGV4aWJsZSB3aWR0aCBhbmQgY292ZXIgdGhlIGVtcHR5XG4gICAgICAvLyBnYXAgaW4gdGhlIERhdGFncmlkLlxuXG4gICAgICBpZiAoIWhlYWRlci5zdHJpY3RXaWR0aCkge1xuICAgICAgICBhbGxTdHJpY3QgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5iQ29sdW1ucyA9PT0gaW5kZXggKyAxICYmIGFsbFN0cmljdCkge1xuICAgICAgICBkZWxldGUgaGVhZGVyLnN0cmljdFdpZHRoO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9yZ2FuaXplci53aWR0aHNbaW5kZXhdID0geyBweDogaGVhZGVyLmNvbXB1dGVXaWR0aCgpLCBzdHJpY3Q6ICEhaGVhZGVyLnN0cmljdFdpZHRoIH07XG4gICAgfSk7XG5cbiAgICB0aGlzLmhlYWRlcnMuZm9yRWFjaCgoaGVhZGVyLCBpbmRleCkgPT4gaGVhZGVyLnNldFdpZHRoKHRoaXMub3JnYW5pemVyLndpZHRoc1tpbmRleF0ucHgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgd2Ugd2FudCB0byByZS1jb21wdXRlIGNvbHVtbnMgd2lkdGguIFRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuOlxuICAgKiAxKSBXaGVuIGhlYWRlcnMgY2hhbmdlLCB3aXRoIGNvbHVtbnMgYmVpbmcgYWRkZWQgb3IgcmVtb3ZlZFxuICAgKiAyKSBXaGVuIHJvd3MgYXJlIGxhemlseSBsb2FkZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAqL1xuICBwcml2YXRlIGNvbHVtbnNTaXplc1N0YWJsZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2hvdWxkU3RhYmlsaXplQ29sdW1ucyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgd2hvbGUgcmUtcmVuZHJpbmcgY3ljbGUgdG8gc2V0IGNvbHVtbiBzaXplcywgaWYgbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGFiaWxpemVDb2x1bW5zKCkge1xuICAgIHRoaXMuc2hvdWxkU3RhYmlsaXplQ29sdW1ucyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmNvbHVtbnNTaXplc1N0YWJsZSkge1xuICAgICAgLy8gTm90aGluZyB0byBkby5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVzaXplIHdoZW4gdGhlIHJvd3MgYXJlIGxvYWRlZC5cbiAgICBpZiAodGhpcy5pdGVtcy5kaXNwbGF5ZWQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcmdhbml6ZXIucmVzaXplKCk7XG4gICAgICB0aGlzLmNvbHVtbnNTaXplc1N0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=