/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Items } from './providers/items';
/**
 * @template T
 */
var ClrDatagridPlaceholder = /** @class */ (function () {
    function ClrDatagridPlaceholder(items) {
        this.items = items;
    }
    Object.defineProperty(ClrDatagridPlaceholder.prototype, "emptyDatagrid", {
        /**
         * Tests if the datagrid is empty, meaning it doesn't contain any items
         */
        get: /**
         * Tests if the datagrid is empty, meaning it doesn't contain any items
         * @return {?}
         */
        function () {
            return !this.items.loading && (!this.items.displayed || this.items.displayed.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    ClrDatagridPlaceholder.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dg-placeholder',
                    template: "\n        <div\n            class=\"datagrid-placeholder\"\n            [class.datagrid-empty]=\"emptyDatagrid\">\n                <div class=\"datagrid-placeholder-image\" *ngIf=\"emptyDatagrid\"></div>\n                <ng-content *ngIf=\"emptyDatagrid\"></ng-content>\n        </div>\n    ",
                    host: { '[class.datagrid-placeholder-container]': 'true' }
                }] }
    ];
    /** @nocollapse */
    ClrDatagridPlaceholder.ctorParameters = function () { return [
        { type: Items }
    ]; };
    return ClrDatagridPlaceholder;
}());
export { ClrDatagridPlaceholder };
if (false) {
    /** @type {?} */
    ClrDatagridPlaceholder.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcGxhY2Vob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2RhdGFncmlkLXBsYWNlaG9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTFDO0lBYUUsZ0NBQW9CLEtBQWU7UUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO0lBQUcsQ0FBQztJQUt2QyxzQkFBVyxpREFBYTtRQUh4Qjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7OztPQUFBOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxzU0FPUDtvQkFDSCxJQUFJLEVBQUUsRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLEVBQUU7aUJBQzNEOzs7O2dCQWJRLEtBQUs7O0lBdUJkLDZCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FUWSxzQkFBc0I7OztJQUNyQix1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi9wcm92aWRlcnMvaXRlbXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZGctcGxhY2Vob2xkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImRhdGFncmlkLXBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFtjbGFzcy5kYXRhZ3JpZC1lbXB0eV09XCJlbXB0eURhdGFncmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFncmlkLXBsYWNlaG9sZGVyLWltYWdlXCIgKm5nSWY9XCJlbXB0eURhdGFncmlkXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJlbXB0eURhdGFncmlkXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBob3N0OiB7ICdbY2xhc3MuZGF0YWdyaWQtcGxhY2Vob2xkZXItY29udGFpbmVyXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEYXRhZ3JpZFBsYWNlaG9sZGVyPFQgPSBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtczogSXRlbXM8VD4pIHt9XG5cbiAgLyoqXG4gICAqIFRlc3RzIGlmIHRoZSBkYXRhZ3JpZCBpcyBlbXB0eSwgbWVhbmluZyBpdCBkb2Vzbid0IGNvbnRhaW4gYW55IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgZ2V0IGVtcHR5RGF0YWdyaWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLml0ZW1zLmxvYWRpbmcgJiYgKCF0aGlzLml0ZW1zLmRpc3BsYXllZCB8fCB0aGlzLml0ZW1zLmRpc3BsYXllZC5sZW5ndGggPT09IDApO1xuICB9XG59XG4iXX0=