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
import { Subject } from 'rxjs';
var ButtonInGroupService = /** @class */ (function () {
    function ButtonInGroupService() {
        this._changes = new Subject();
    }
    Object.defineProperty(ButtonInGroupService.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} button
     * @return {?}
     */
    ButtonInGroupService.prototype.updateButtonGroup = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        this._changes.next(button);
    };
    ButtonInGroupService.decorators = [
        { type: Injectable }
    ];
    return ButtonInGroupService;
}());
export { ButtonInGroupService };
if (false) {
    /** @type {?} */
    ButtonInGroupService.prototype._changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWluLWdyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJidXR0b24vcHJvdmlkZXJzL2J1dHRvbi1pbi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkvQjtJQUFBO1FBRVUsYUFBUSxHQUF1QixJQUFJLE9BQU8sRUFBYSxDQUFDO0lBU2xFLENBQUM7SUFQQyxzQkFBSSx5Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBOzs7OztJQUVELGdEQUFpQjs7OztJQUFqQixVQUFrQixNQUFpQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFWRixVQUFVOztJQVdYLDJCQUFDO0NBQUEsQUFYRCxJQVdDO1NBVlksb0JBQW9COzs7SUFDL0Isd0NBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENsckJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi1ncm91cC9idXR0b24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnV0dG9uSW5Hcm91cFNlcnZpY2Uge1xuICBwcml2YXRlIF9jaGFuZ2VzOiBTdWJqZWN0PENsckJ1dHRvbj4gPSBuZXcgU3ViamVjdDxDbHJCdXR0b24+KCk7XG5cbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxDbHJCdXR0b24+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHVwZGF0ZUJ1dHRvbkdyb3VwKGJ1dHRvbjogQ2xyQnV0dG9uKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KGJ1dHRvbik7XG4gIH1cbn1cbiJdfQ==