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
var TabsService = /** @class */ (function () {
    function TabsService() {
        this._children = [];
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsService.prototype.register = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this._children.push(tab);
    };
    Object.defineProperty(TabsService.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsService.prototype, "activeTab", {
        get: /**
         * @return {?}
         */
        function () {
            return this.children.find(function (tab) {
                return tab.active;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsService.prototype, "overflowTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return this.children.filter(function (tab) {
                return tab.tabLink.inOverflow === true;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsService.prototype.unregister = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var index = this.children.indexOf(tab);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    };
    TabsService.decorators = [
        { type: Injectable }
    ];
    return TabsService;
}());
export { TabsService };
if (false) {
    /** @type {?} */
    TabsService.prototype._children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGF5b3V0L3RhYnMvcHJvdmlkZXJzL3RhYnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQUE7UUFFVSxjQUFTLEdBQWEsRUFBRSxDQUFDO0lBNEJuQyxDQUFDOzs7OztJQTFCQyw4QkFBUTs7OztJQUFSLFVBQVMsR0FBVztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQUksaUNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBVztnQkFDcEMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFXO2dCQUN0QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7OztPQUFBOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxHQUFXOztZQUNkLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkE3QkYsVUFBVTs7SUE4Qlgsa0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxXQUFXOzs7SUFDdEIsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyVGFiIH0gZnJvbSAnLi4vdGFiJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IENsclRhYltdID0gW107XG5cbiAgcmVnaXN0ZXIodGFiOiBDbHJUYWIpIHtcbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKHRhYik7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZVRhYigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5maW5kKCh0YWI6IENsclRhYikgPT4ge1xuICAgICAgcmV0dXJuIHRhYi5hY3RpdmU7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgb3ZlcmZsb3dUYWJzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmZpbHRlcigodGFiOiBDbHJUYWIpID0+IHtcbiAgICAgIHJldHVybiB0YWIudGFiTGluay5pbk92ZXJmbG93ID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgdW5yZWdpc3Rlcih0YWI6IENsclRhYikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKHRhYik7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==