/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Component, ContentChild } from '@angular/core';
import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { HideableColumnService } from './providers/hideable-column.service';
import { Selection, SelectionType } from './providers/selection';
/**
 * @template T
 */
var ClrDatagridFooter = /** @class */ (function () {
    function ClrDatagridFooter(selection, hideableColumnService, cdr) {
        this.selection = selection;
        this.hideableColumnService = hideableColumnService;
        this.cdr = cdr;
        this.subscriptions = [];
        /* reference to the enum so that template can access */
        this.SELECTION_TYPE = SelectionType;
    }
    /**
     * @return {?}
     */
    ClrDatagridFooter.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this.hideableColumnService.columnListChange.subscribe(function (change) {
            /** @type {?} */
            var hiddenColumnsInSub = change.filter(function (col) { return col; });
            if (hiddenColumnsInSub.length > 0) {
                _this.activeToggler = true;
            }
        }));
        /** @type {?} */
        var hiddenColumns = this.hideableColumnService.getColumns().filter(function (col) { return col; });
        if (hiddenColumns.length > 0) {
            this.activeToggler = true;
        }
    };
    /**
     * @return {?}
     */
    ClrDatagridFooter.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    ClrDatagridFooter.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-footer',
                    template: "\n        <ng-container\n            *ngIf=\"(selection.selectionType === SELECTION_TYPE.Multi) && (selection.current.length > 0)\">\n          <div class=\"clr-form-control-disabled\">\n              <clr-checkbox-wrapper class=\"datagrid-footer-select\">\n                <input clrCheckbox type=\"checkbox\" checked=\"checked\" disabled>\n                <label>{{selection.current.length}}</label>\n            </clr-checkbox-wrapper>\n          </div>\n        </ng-container>\n        <ng-content select=\"clr-dg-column-toggle\"></ng-content>\n        <clr-dg-column-toggle *ngIf=\"!toggle && activeToggler\"></clr-dg-column-toggle>\n        <div class=\"datagrid-footer-description\">\n            <ng-content></ng-content>\n        </div>\n        <ng-content select=\"clr-dg-pagination\"></ng-content>\n    ",
                    host: {
                        '[class.datagrid-footer]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    ClrDatagridFooter.ctorParameters = function () { return [
        { type: Selection },
        { type: HideableColumnService },
        { type: ChangeDetectorRef }
    ]; };
    ClrDatagridFooter.propDecorators = {
        toggle: [{ type: ContentChild, args: [ClrDatagridColumnToggle,] }]
    };
    return ClrDatagridFooter;
}());
export { ClrDatagridFooter };
if (false) {
    /** @type {?} */
    ClrDatagridFooter.prototype.activeToggler;
    /** @type {?} */
    ClrDatagridFooter.prototype.subscriptions;
    /** @type {?} */
    ClrDatagridFooter.prototype.SELECTION_TYPE;
    /** @type {?} */
    ClrDatagridFooter.prototype.toggle;
    /** @type {?} */
    ClrDatagridFooter.prototype.selection;
    /** @type {?} */
    ClrDatagridFooter.prototype.hideableColumnService;
    /** @type {?} */
    ClrDatagridFooter.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9kYXRhZ3JpZC1mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVqRTtJQXdCRSwyQkFDUyxTQUF1QixFQUN2QixxQkFBNEMsRUFDNUMsR0FBc0I7UUFGdEIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSXZCLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQzs7UUFHcEMsbUJBQWMsR0FBRyxhQUFhLENBQUM7SUFObkMsQ0FBQzs7OztJQVVKLG9DQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNOztnQkFDcEQsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUM7WUFDcEQsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7O1lBRUksYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDO1FBRWhGLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQzVCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxrekJBZ0JQO29CQUNILElBQUksRUFBRTt3QkFDSix5QkFBeUIsRUFBRSxNQUFNO3FCQUNsQztpQkFDRjs7OztnQkF4QlEsU0FBUztnQkFEVCxxQkFBcUI7Z0JBSnJCLGlCQUFpQjs7O3lCQTJDdkIsWUFBWSxTQUFDLHVCQUF1Qjs7SUF3QnZDLHdCQUFDO0NBQUEsQUE1REQsSUE0REM7U0FyQ1ksaUJBQWlCOzs7SUFPNUIsMENBQThCOztJQUM5QiwwQ0FBMkM7O0lBRzNDLDJDQUFzQzs7SUFFdEMsbUNBQXVFOztJQVhyRSxzQ0FBOEI7O0lBQzlCLGtEQUFtRDs7SUFDbkQsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDbHJEYXRhZ3JpZENvbHVtblRvZ2dsZSB9IGZyb20gJy4vZGF0YWdyaWQtY29sdW1uLXRvZ2dsZSc7XG5pbXBvcnQgeyBIaWRlYWJsZUNvbHVtblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9oaWRlYWJsZS1jb2x1bW4uc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3Rpb24sIFNlbGVjdGlvblR5cGUgfSBmcm9tICcuL3Byb3ZpZGVycy9zZWxlY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nSWY9XCIoc2VsZWN0aW9uLnNlbGVjdGlvblR5cGUgPT09IFNFTEVDVElPTl9UWVBFLk11bHRpKSAmJiAoc2VsZWN0aW9uLmN1cnJlbnQubGVuZ3RoID4gMClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xyLWZvcm0tY29udHJvbC1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICA8Y2xyLWNoZWNrYm94LXdyYXBwZXIgY2xhc3M9XCJkYXRhZ3JpZC1mb290ZXItc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsckNoZWNrYm94IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7c2VsZWN0aW9uLmN1cnJlbnQubGVuZ3RofX08L2xhYmVsPlxuICAgICAgICAgICAgPC9jbHItY2hlY2tib3gtd3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1kZy1jb2x1bW4tdG9nZ2xlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8Y2xyLWRnLWNvbHVtbi10b2dnbGUgKm5nSWY9XCIhdG9nZ2xlICYmIGFjdGl2ZVRvZ2dsZXJcIj48L2Nsci1kZy1jb2x1bW4tdG9nZ2xlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YWdyaWQtZm9vdGVyLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItZGctcGFnaW5hdGlvblwiPjwvbmctY29udGVudD5cbiAgICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kYXRhZ3JpZC1mb290ZXJdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZEZvb3RlcjxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZWxlY3Rpb246IFNlbGVjdGlvbjxUPixcbiAgICBwdWJsaWMgaGlkZWFibGVDb2x1bW5TZXJ2aWNlOiBIaWRlYWJsZUNvbHVtblNlcnZpY2UsXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBhY3RpdmVUb2dnbGVyOiBib29sZWFuO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgLyogcmVmZXJlbmNlIHRvIHRoZSBlbnVtIHNvIHRoYXQgdGVtcGxhdGUgY2FuIGFjY2VzcyAqL1xuICBwdWJsaWMgU0VMRUNUSU9OX1RZUEUgPSBTZWxlY3Rpb25UeXBlO1xuXG4gIEBDb250ZW50Q2hpbGQoQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGUpIHRvZ2dsZTogQ2xyRGF0YWdyaWRDb2x1bW5Ub2dnbGU7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmhpZGVhYmxlQ29sdW1uU2VydmljZS5jb2x1bW5MaXN0Q2hhbmdlLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgICBjb25zdCBoaWRkZW5Db2x1bW5zSW5TdWIgPSBjaGFuZ2UuZmlsdGVyKGNvbCA9PiBjb2wpO1xuICAgICAgICBpZiAoaGlkZGVuQ29sdW1uc0luU3ViLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRvZ2dsZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBoaWRkZW5Db2x1bW5zID0gdGhpcy5oaWRlYWJsZUNvbHVtblNlcnZpY2UuZ2V0Q29sdW1ucygpLmZpbHRlcihjb2wgPT4gY29sKTtcblxuICAgIGlmIChoaWRkZW5Db2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYWN0aXZlVG9nZ2xlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=