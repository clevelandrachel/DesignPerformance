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
export class ClrDatagridColumnToggle {
    /**
     * @param {?} hideableColumnService
     * @param {?} columnToggleButtons
     * @param {?} commonStrings
     */
    constructor(hideableColumnService, columnToggleButtons, commonStrings) {
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
    /**
     * @return {?}
     */
    get allColumnsVisible() {
        return this._allColumnsVisible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set allColumnsVisible(value) {
        this._allColumnsVisible = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions.push(this.hideableColumnService.columnListChange.subscribe(columnList => {
            // Reset the list of columns
            this.columns.length = 0;
            this.hideableColumnService.updateForLastVisibleColumn();
            this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
            this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
            // Add only the hidden columns to the toggler.
            columnList.forEach(col => {
                if (col) {
                    this.columns.push(col);
                }
            });
        }));
        this.subscriptions.push(this.columnToggleButtons.selectAllButtonClicked.subscribe(() => {
            this.selectAll();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.hideableColumnService.showHiddenColumns();
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
    }
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    toggleColumn(event, column) {
        column.hidden = !event;
        this.allColumnsVisible = this.hideableColumnService.checkForAllColumnsVisible;
        this.columnToggleButtons.selectAllDisabled = this.allColumnsVisible;
        this.hideableColumnService.updateForLastVisibleColumn();
    }
    /**
     * @return {?}
     */
    toggleUI() {
        this.open = !this.open;
    }
}
ClrDatagridColumnToggle.decorators = [
    { type: Component, args: [{
                selector: 'clr-dg-column-toggle',
                template: `
        <button
                #anchor
                (click)="toggleUI()"
                class="btn btn-sm btn-link column-toggle--action"
                type="button">
            <clr-icon shape="view-columns" [attr.title]="commonStrings.pickColumns"></clr-icon>
        </button>
        <div class="column-switch"
             *clrPopoverOld="open; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint">
            <div class="switch-header">
                <ng-container *ngIf="!title">Show Columns</ng-container>
                <ng-content select="clr-dg-column-toggle-title"></ng-content>
                <button
                    class="btn btn-sm btn-link"
                    (click)="toggleUI()"
                    type="button">
                    <clr-icon shape="close" [attr.title]="commonStrings.close"></clr-icon>
                </button>
            </div>
            <ul class="switch-content list-unstyled">
                <li *ngFor="let column of columns">
                    <clr-checkbox-wrapper>
                        <input clrCheckbox type="checkbox"
                          [disabled]="column.lastVisibleColumn"
                          [ngModel]="!column.hidden"
                          (ngModelChange)="toggleColumn($event, column)">
                        <label><ng-template [ngTemplateOutlet]="column.template"></ng-template></label>
                    </clr-checkbox-wrapper>
                </li>
            </ul>
            <div class="switch-footer" *ngIf="buttons.length > 0">
                <ng-content select="clr-dg-column-toggle-button"></ng-content>
            </div>
            <div class="switch-footer" *ngIf="buttons.length === 0">
                <div>
                    <button
                            class="btn btn-sm btn-link p6 text-uppercase"
                            [disabled]="allColumnsVisible"
                            (click)="selectAll()"
                            type="button">Select All
                    </button>
                </div>
            </div>
        </div>
    `,
                host: { '[class.column-switch-wrapper]': 'true', '[class.active]': 'open' }
            }] }
];
/** @nocollapse */
ClrDatagridColumnToggle.ctorParameters = () => [
    { type: HideableColumnService },
    { type: ColumnToggleButtonsService },
    { type: ClrCommonStrings }
];
ClrDatagridColumnToggle.propDecorators = {
    title: [{ type: ContentChild, args: [ClrDatagridColumnToggleTitle,] }],
    buttons: [{ type: ContentChildren, args: [ClrDatagridColumnToggleButton,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvZGF0YWdyaWQtY29sdW1uLXRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFckQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFvRDdFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQTJCbEMsWUFDUyxxQkFBNEMsRUFDM0MsbUJBQStDLEVBQ2hELGFBQStCO1FBRi9CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUNoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUE3QmhDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQzs7Ozs7UUFNcEMsZ0JBQVcsR0FBVSxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVUsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxTQUFJLEdBQVksS0FBSyxDQUFDOzs7OztRQUt0QixZQUFPLEdBQWtDLEVBQUUsQ0FBQztJQWlCaEQsQ0FBQzs7OztJQWZKLElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFD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QUFtRDs7SUFDbkQsc0RBQXVEOztJQUN2RCxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2NvbW1vbi9wb3BvdmVyJztcblxuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVCdXR0b24gfSBmcm9tICcuL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtYnV0dG9uJztcbmltcG9ydCB7IENsckRhdGFncmlkQ29sdW1uVG9nZ2xlVGl0bGUgfSBmcm9tICcuL2RhdGFncmlkLWNvbHVtbi10b2dnbGUtdGl0bGUnO1xuaW1wb3J0IHsgRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIH0gZnJvbSAnLi9kYXRhZ3JpZC1oaWRlYWJsZS1jb2x1bW4ubW9kZWwnO1xuaW1wb3J0IHsgQ29sdW1uVG9nZ2xlQnV0dG9uc1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9jb2x1bW4tdG9nZ2xlLWJ1dHRvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBIaWRlYWJsZUNvbHVtblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZSc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctY29sdW1uLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAjYW5jaG9yXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVVJKClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGluayBjb2x1bW4tdG9nZ2xlLS1hY3Rpb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cInZpZXctY29sdW1uc1wiIFthdHRyLnRpdGxlXT1cImNvbW1vblN0cmluZ3MucGlja0NvbHVtbnNcIj48L2Nsci1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zd2l0Y2hcIlxuICAgICAgICAgICAgICpjbHJQb3BvdmVyT2xkPVwib3BlbjsgYW5jaG9yOiBhbmNob3I7IGFuY2hvclBvaW50OiBhbmNob3JQb2ludDsgcG9wb3ZlclBvaW50OiBwb3BvdmVyUG9pbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aXRsZVwiPlNob3cgQ29sdW1uczwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1kZy1jb2x1bW4tdG9nZ2xlLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZVVJKClcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNsb3NlXCIgW2F0dHIudGl0bGVdPVwiY29tbW9uU3RyaW5ncy5jbG9zZVwiPjwvY2xyLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInN3aXRjaC1jb250ZW50IGxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbHItY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbHJDaGVja2JveCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29sdW1uLmxhc3RWaXNpYmxlQ29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiIWNvbHVtbi5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ0b2dnbGVDb2x1bW4oJGV2ZW50LCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbHVtbi50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9jbHItY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtZm9vdGVyXCIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItZGctY29sdW1uLXRvZ2dsZS1idXR0b25cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2gtZm9vdGVyXCIgKm5nSWY9XCJidXR0b25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpbmsgcDYgdGV4dC11cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJhbGxDb2x1bW5zVmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+U2VsZWN0IEFsbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3MuY29sdW1uLXN3aXRjaC13cmFwcGVyXSc6ICd0cnVlJywgJ1tjbGFzcy5hY3RpdmVdJzogJ29wZW4nIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRhdGFncmlkQ29sdW1uVG9nZ2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX2FsbENvbHVtbnNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKipcbiAgICogUG9wb3ZlciBpbml0XG4gICAqL1xuICBwdWJsaWMgYW5jaG9yUG9pbnQ6IFBvaW50ID0gUG9pbnQuVE9QX0xFRlQ7XG4gIHB1YmxpYyBwb3BvdmVyUG9pbnQ6IFBvaW50ID0gUG9pbnQuTEVGVF9CT1RUT007XG4gIHB1YmxpYyBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqKipcbiAgICogRGF0YWdyaWRIaWRlYWJsZUNvbHVtbk1vZGVsIGluaXRcbiAgICovXG4gIHB1YmxpYyBjb2x1bW5zOiBEYXRhZ3JpZEhpZGVhYmxlQ29sdW1uTW9kZWxbXSA9IFtdO1xuXG4gIHB1YmxpYyBnZXQgYWxsQ29sdW1uc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbENvbHVtbnNWaXNpYmxlO1xuICB9XG5cbiAgcHVibGljIHNldCBhbGxDb2x1bW5zVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbENvbHVtbnNWaXNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBAQ29udGVudENoaWxkKENsckRhdGFncmlkQ29sdW1uVG9nZ2xlVGl0bGUpIHRpdGxlOiBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZVRpdGxlO1xuICBAQ29udGVudENoaWxkcmVuKENsckRhdGFncmlkQ29sdW1uVG9nZ2xlQnV0dG9uKSBidXR0b25zOiBRdWVyeUxpc3Q8Q2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGVCdXR0b24+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoaWRlYWJsZUNvbHVtblNlcnZpY2U6IEhpZGVhYmxlQ29sdW1uU2VydmljZSxcbiAgICBwcml2YXRlIGNvbHVtblRvZ2dsZUJ1dHRvbnM6IENvbHVtblRvZ2dsZUJ1dHRvbnNTZXJ2aWNlLFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmNvbHVtbkxpc3RDaGFuZ2Uuc3Vic2NyaWJlKGNvbHVtbkxpc3QgPT4ge1xuICAgICAgICAvLyBSZXNldCB0aGUgbGlzdCBvZiBjb2x1bW5zXG4gICAgICAgIHRoaXMuY29sdW1ucy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmhpZGVhYmxlQ29sdW1uU2VydmljZS51cGRhdGVGb3JMYXN0VmlzaWJsZUNvbHVtbigpO1xuICAgICAgICB0aGlzLmFsbENvbHVtbnNWaXNpYmxlID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuY2hlY2tGb3JBbGxDb2x1bW5zVmlzaWJsZTtcbiAgICAgICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbERpc2FibGVkID0gdGhpcy5hbGxDb2x1bW5zVmlzaWJsZTtcblxuICAgICAgICAvLyBBZGQgb25seSB0aGUgaGlkZGVuIGNvbHVtbnMgdG8gdGhlIHRvZ2dsZXIuXG4gICAgICAgIGNvbHVtbkxpc3QuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgIGlmIChjb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbEJ1dHRvbkNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBzZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2Uuc2hvd0hpZGRlbkNvbHVtbnMoKTtcbiAgICB0aGlzLmFsbENvbHVtbnNWaXNpYmxlID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuY2hlY2tGb3JBbGxDb2x1bW5zVmlzaWJsZTtcbiAgICB0aGlzLmNvbHVtblRvZ2dsZUJ1dHRvbnMuc2VsZWN0QWxsRGlzYWJsZWQgPSB0aGlzLmFsbENvbHVtbnNWaXNpYmxlO1xuICB9XG5cbiAgdG9nZ2xlQ29sdW1uKGV2ZW50OiBib29sZWFuLCBjb2x1bW46IERhdGFncmlkSGlkZWFibGVDb2x1bW5Nb2RlbCkge1xuICAgIGNvbHVtbi5oaWRkZW4gPSAhZXZlbnQ7XG4gICAgdGhpcy5hbGxDb2x1bW5zVmlzaWJsZSA9IHRoaXMuaGlkZWFibGVDb2x1bW5TZXJ2aWNlLmNoZWNrRm9yQWxsQ29sdW1uc1Zpc2libGU7XG4gICAgdGhpcy5jb2x1bW5Ub2dnbGVCdXR0b25zLnNlbGVjdEFsbERpc2FibGVkID0gdGhpcy5hbGxDb2x1bW5zVmlzaWJsZTtcbiAgICB0aGlzLmhpZGVhYmxlQ29sdW1uU2VydmljZS51cGRhdGVGb3JMYXN0VmlzaWJsZUNvbHVtbigpO1xuICB9XG5cbiAgdG9nZ2xlVUkoKSB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxufVxuIl19