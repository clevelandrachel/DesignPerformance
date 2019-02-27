/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { Point } from '../../popover/common/popover';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { ClrDatagridColumnToggleTitle } from './datagrid-column-toggle-title';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { HideableColumnService } from './providers/hideable-column.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
var ClrDatagridColumnToggle = /** @class */ (function () {
    function ClrDatagridColumnToggle(hideableColumnService, columnToggleButtons, commonStrings) {
        this.hideableColumnService = hideableColumnService;
        this.columnToggleButtons = columnToggleButtons;
        this.commonStrings = commonStrings;
        this.subscriptions = [];
        /**
         *
         * Popover init
         */
        this.anchorPoint = Point.TOP_LEFT;
        this.popoverPoint = Point.LEFT_BOTTOM;
        this.open = false;
        /**
         * *
         * DatagridHideableColumnModel init
         */
        this.columns = [];
    }
    Object.defineProperty(ClrDatagridColumnToggle.prototype, "allColumnsVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allColumnsVisible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allColumnsVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrDatagridColumnToggle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.hideableColumnService.columnListChange.subscribe(function (columnList) {
            // Reset the list of columns
            _this.columns.length = 0;
            _this.hideableColumnService.updateForLastVisibleColumn();
            _this.allColumnsVisible = _this.hideableColumnService.checkForAllColumnsVisible;
            _this.columnToggleButtons.selectAllDisabled = _this.allColumnsVisible;
            // Add only the hidden columns to the toggler.
            columnList.forEach(function (col) {
                if (col) {
                    _this.columns.push(col);
                }
            });
        }));
        this.subscriptions.push(this.columnToggleButtons.selectAllButtonClicked.subscribe(function () {
            _this.selectAll();
        }));
    };
    /**
     * @return {?}
     */
    ClrDatagridColumnToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * @return {?}
     */
    ClrDatagridColumnToggle.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.hideableColumnService.showHiddenColumns();
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
    };
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    ClrDatagridColumnToggle.prototype.toggleColumn = /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    function (event, column) {
        column.hidden = !event;
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
        this.hideableColumnService.updateForLastVisibleColumn();
    };
    /**
     * @return {?}
     */
    ClrDatagridColumnToggle.prototype.toggleUI = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    ClrDatagridColumnToggle.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-column-toggle',
                    template: "\n        <button\n                #anchor\n                (click)=\"toggleUI()\"\n                class=\"btn btn-sm btn-link column-toggle--action\"\n                type=\"button\">\n            <clr-icon shape=\"view-columns\" [attr.title]=\"commonStrings.pickColumns\"></clr-icon>\n        </button>\n        <div class=\"column-switch\"\n             *clrPopoverOld=\"open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint\">\n            <div class=\"switch-header\">\n                <ng-container *ngIf=\"!title\">Show Columns</ng-container>\n                <ng-content select=\"clr-dg-column-toggle-title\"></ng-content>\n                <button\n                    class=\"btn btn-sm btn-link\"\n                    (click)=\"toggleUI()\"\n                    type=\"button\">\n                    <clr-icon shape=\"close\" [attr.title]=\"commonStrings.close\"></clr-icon>\n                </button>\n            </div>\n            <ul class=\"switch-content list-unstyled\">\n                <li *ngFor=\"let column of columns\">\n                    <clr-checkbox-wrapper>\n                        <input clrCheckbox type=\"checkbox\"\n                          [disabled]=\"column.lastVisibleColumn\"\n                          [ngModel]=\"!column.hidden\"\n                          (ngModelChange)=\"toggleColumn($event, column)\">\n                        <label><ng-template [ngTemplateOutlet]=\"column.template\"></ng-template></label>\n                    </clr-checkbox-wrapper>\n                </li>\n            </ul>\n            <div class=\"switch-footer\" *ngIf=\"buttons.length > 0\">\n                <ng-content select=\"clr-dg-column-toggle-button\"></ng-content>\n            </div>\n            <div class=\"switch-footer\" *ngIf=\"buttons.length === 0\">\n                <div>\n                    <button\n                            class=\"btn btn-sm btn-link p6 text-uppercase\"\n                            [disabled]=\"allColumnsVisible\"\n                            (click)=\"selectAll()\"\n                            type=\"button\">Select All\n                    </button>\n                </div>\n            </div>\n        </div>\n    ",
                    host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'open' }
                }] }
    ];
    /** @nocollapse */
    ClrDatagridColumnToggle.ctorParameters = function () { return [
        { type: HideableColumnService },
        { type: ColumnToggleButtonsService },
        { type: ClrCommonStrings }
    ]; };
    ClrDatagridColumnToggle.propDecorators = {
        title: [{ type: ContentChild, args: [ClrDatagridColumnToggleTitle,] }],
        buttons: [{ type: ContentChildren, args: [ClrDatagridColumnToggleButton,] }]
    };
    return ClrDatagridColumnToggle;
}());
export { ClrDatagridColumnToggle };
if (false) {
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.subscriptions;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype._allColumnsVisible;
    /**
     *
     * Popover init
     * @type {?}
     */
    ClrDatagridColumnToggle.prototype.anchorPoint;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.popoverPoint;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.open;
    /**
     * *
     * DatagridHideableColumnModel init
     * @type {?}
     */
    ClrDatagridColumnToggle.prototype.columns;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.title;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.buttons;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.hideableColumnService;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.columnToggleButtons;
    /** @type {?} */
    ClrDatagridColumnToggle.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUE2RUUsaUNBQ1MscUJBQTRDLEVBQzNDLG1CQUErQyxFQUNoRCxhQUErQjtRQUYvQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFDaEQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBN0JoQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7Ozs7O1FBTXBDLGdCQUFXLEdBQVUsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNwQyxpQkFBWSxHQUFVLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDeEMsU0FBSSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFLdEIsWUFBTyxHQUFrQyxFQUFFLENBQUM7SUFpQmhELENBQUM7SUFmSixzQkFBVyxzREFBaUI7Ozs7UUFBNUI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7OztRQUVELFVBQTZCLEtBQWM7WUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTs7OztJQWVELDBDQUFROzs7SUFBUjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7WUFDOUQsNEJBQTRCO1lBQzVCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMscUJBQXFCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUN4RCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDO1lBQzlFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7WUFFcEUsOENBQThDO1lBQzlDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUNwQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztZQUN4RCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCwyQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDO1FBQzlFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsOENBQVk7Ozs7O0lBQVosVUFBYSxLQUFjLEVBQUUsTUFBbUM7UUFDOUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHlCQUF5QixDQUFDO1FBQzlFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDcEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7O2dCQS9IRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9xRUE2Q1A7b0JBQ0gsSUFBSSxFQUFFLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtpQkFDNUU7Ozs7Z0JBcERRLHFCQUFxQjtnQkFEckIsMEJBQTBCO2dCQUUxQixnQkFBZ0I7Ozt3QkE0RXRCLFlBQVksU0FBQyw0QkFBNEI7MEJBQ3pDLGVBQWUsU0FBQyw2QkFBNkI7O0lBcURoRCw4QkFBQztDQUFBLEFBaElELElBZ0lDO1NBOUVZLHVCQUF1Qjs7O0lBQ2xDLGdEQUEyQzs7SUFDM0MscURBQW9DOzs7Ozs7SUFLcEMsOENBQTJDOztJQUMzQywrQ0FBK0M7O0lBQy9DLHVDQUE2Qjs7Ozs7O0lBSzdCLDBDQUFtRDs7SUFVbkQsd0NBQWdGOztJQUNoRiwwQ0FBa0c7O0lBR2hHLHdEQUFtRDs7SUFDbkQsc0RBQXVEOztJQUN2RCxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyJztcblxuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVCdXR0b24gfSBmcm9tICcuL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtYnV0dG9uJztcbmltcG9ydCB7IENsckRhdGFncmlkQ29sdW1uVG9nZ2xlVGl0bGUgfSBmcm9tICcuL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtdGl0bGUnO1xuaW1wb3J0IHsgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIH0gZnJvbSAnLi9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4ubW9kZWwnO1xuaW1wb3J0IHsgQ29sdW1uVG9nZ2xlQnV0dG9uc1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9jb2x1bW4tdG9nZ2xlLWJ1dHRvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBIaWRlYWJsZUNvbHVtblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctY29sdW1uLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAjYW5jaG9yXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVVJKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGluayBjb2x1bW4tdG9nZ2xlLS1hY3Rpb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cInZpZXctY29sdW1uc1wiIFthdHRyLnRpdGxlXT1cImNvbW1vblN0cmluZ3MucGlja0NvbHVtbnNcIj48L2Nsci1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zd2l0Y2hcIlxuICAgICAgICAgICAgICpjbHJQb3BvdmVyT2xkPVwib3BlbjsgYW5jaG9yOiBhbmNob3I7IGFuY2hvclBvaW50OiBhbmNob3JQb2ludDsgcG9wb3ZlclBvaW50OiBwb3BvdmVyUG9pbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aXRsZVwiPlNob3cgQ29sdW1uczwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1kZy1jb2x1bW4tdG9nZ2xlLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVVJKClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNsb3NlXCIgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5jbG9zZVwiPjwvY2xyLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN3aXRjaC1jb250ZW50IGxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbHItY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbHJDaGVja2JveCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiIWNvbHVtbi5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGVDb2x1bW4oJGV2ZW50LCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9jbHItY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtZm9vdGVyXCIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItZGctY29sdW1uLXRvZ2dsZS1idXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtZm9vdGVyXCIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpbmsgcDYgdGV4dC11cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhbGxDb2x1bW5zVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+U2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3MuY29sdW1uLXN3aXRjaC13cmFwcGVyXSc6ICd0cnVlJywgJ1tjbGFzcy5hY3RpdmVdJzogJ29wZW4nIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkQ29sdW1uVG9nZ2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2FsbENvbHVtbnNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKipcbiAgICogUG9wb3ZlciBpbml0XG4gICAqL1xuICBwdWJsaWMgYW5jaG9yUG9pbnQ6IFBvaW50ID0gUG9pbnQuVE9QX0xFRlQ7XG4gIHB1YmxpYyBwb3BvdmVyUG9pbnQ6IFBvaW50ID0gUG9pbnQuTEVGVF9CT1RUT007XG4gIHB1YmxpYyBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqKipcbiAgICogRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIGluaXRcbiAgICovXG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXSA9IFtdO1xuXG4gIHB1YmxpYyBnZXQgYWxsQ29sdW1uc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbENvbHVtbnNWaXNpYmxlO1xuICB9XG5cbiAgcHVibGljIHNldCBhbGxDb2x1bW5zVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbENvbHVtbnNWaXNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBAQ29udGVudENoaWxkKENsckRhdGFncmlkQ29sdW1uVG9nZ2xlVGl0bGUpIHRpdGxlOiBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZVRpdGxlO1xuICBAQ29udGVudENoaWxkcmVuKENsckRhdGFncmlkQ29sdW1uVG9nZ2xlQnV0dG9uKSBidXR0b25zOiBRdWVyeUxpc3Q8Q2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVCdXR0b24+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoaWRlYWJsZUNvbHVtblNlcnZpY2U6IEhpZGVhYmxlQ29sdW1uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbHVtblRvZ2dsZUJ1dHRvbnM6IENvbHVtblRvZ2dsZUJ1dHRvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmNvbHVtbkxpc3RDaGFuZ2Uuc3Vic2NyaWJlKGNvbHVtbkxpc3QgPT4ge1xuICAgICAgICAvLyBSZXNldCB0aGUgbGlzdCBvZiBjb2x1bW5zXG4gICAgICAgIHRoaXMuY29sdW1ucy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmhpZGVhYmxlQ29sdW1uU2VydmljZS51cGRhdGVGb3JMYXN0VmlzaWJsZUNvbHVtbigpO1xuICAgICAgICB0aGlzLmFsbENvbHVtbnNWaXNpYmxlID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuY2hlY2tGb3JBbGxDb2x1bW5zVmlzaWJsZTtcbiAgICAgICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbERpc2FibGVkID0gdGhpcy5hbGxDb2x1bW5zVmlzaWJsZTtcblxuICAgICAgICAvLyBBZGQgb25seSB0aGUgaGlkZGVuIGNvbHVtbnMgdG8gdGhlIHRvZ2dsZXIuXG4gICAgICAgIGNvbHVtbkxpc3QuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgIGlmIChjb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbEJ1dHRvbkNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2Uuc2hvd0hpZGRlbkNvbHVtbnMoKTtcbiAgICB0aGlzLmFsbENvbHVtbnNWaXNpYmxlID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuY2hlY2tGb3JBbGxDb2x1bW5zVmlzaWJsZTtcbiAgICB0aGlzLmNvbHVtblRvZ2dsZUJ1dHRvbnMuc2VsZWN0QWxsRGlzYWJsZWQgPSB0aGlzLmFsbENvbHVtbnNWaXNpYmxlO1xuICB9XG5cbiAgdG9nZ2xlQ29sdW1uKGV2ZW50OiBib29sZWFuLCBjb2x1bW46IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCkge1xuICAgIGNvbHVtbi5oaWRkZW4gPSAhZXZlbnQ7XG4gICAgdGhpcy5hbGxDb2x1bW5zVmlzaWJsZSA9IHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmNoZWNrRm9yQWxsQ29sdW1uc1Zpc2libGU7XG4gICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbERpc2FibGVkID0gdGhpcy5hbGxDb2x1bW5zVmlzaWJsZTtcbiAgICB0aGlzLmhpZGVhYmxlQ29sdW1uU2VydmljZS51cGRhdGVGb3JMYXN0VmlzaWJsZUNvbHVtbigpO1xuICB9XG5cbiAgdG9nZ2xlVUkoKSB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxufVxuIl19