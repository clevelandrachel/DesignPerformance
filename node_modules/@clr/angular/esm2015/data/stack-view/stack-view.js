/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Output } from '@angular/core';
export class ClrStackView {
    constructor() {
        /**
         * Undocumented experimental feature: inline editing.
         */
        this.editable = false;
        this.save = new EventEmitter(false);
        this._editMode = false;
        this.editingChange = new EventEmitter(false);
        /**
         * End of undocumented experimental feature.
         */
    }
    /**
     * @return {?}
     */
    get editing() {
        return this.editable && this._editMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set editing(value) {
        if (this.editable) {
            this._editMode = value;
            this.editingChange.emit(value);
            if (!value) {
                this.save.emit(null);
            }
        }
    }
}
ClrStackView.decorators = [
    { type: Component, args: [{
                selector: 'clr-stack-view',
                template: `
        <ng-content select="clr-stack-header"></ng-content>
        <dl class="stack-view"><ng-content></ng-content></dl>
    `,
                styles: [`
        :host { display: block; }
    `]
            }] }
];
ClrStackView.propDecorators = {
    save: [{ type: Output, args: ['clrStackSave',] }]
};
if (false) {
    /**
     * Undocumented experimental feature: inline editing.
     * @type {?}
     */
    ClrStackView.prototype.editable;
    /** @type {?} */
    ClrStackView.prototype.save;
    /** @type {?} */
    ClrStackView.prototype._editMode;
    /** @type {?} */
    ClrStackView.prototype.editingChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvc3RhY2stdmlldy9zdGFjay12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWVoRSxNQUFNLE9BQU8sWUFBWTtJQWJ6Qjs7OztRQWlCRSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRUYsU0FBSSxHQUF1QixJQUFJLFlBQVksQ0FBTyxLQUFLLENBQUMsQ0FBQztRQUV6RSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRW5DLGtCQUFhLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBZXhFOztXQUVHO0lBQ0wsQ0FBQzs7OztJQWhCQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7S0FHUDt5QkFHRDs7S0FFQzthQUVKOzs7bUJBT0UsTUFBTSxTQUFDLGNBQWM7Ozs7Ozs7SUFGdEIsZ0NBQTBCOztJQUUxQiw0QkFBaUY7O0lBRWpGLGlDQUFtQzs7SUFFbkMscUNBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItc3RhY2stdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1zdGFjay1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxkbCBjbGFzcz1cInN0YWNrLXZpZXdcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kbD5cbiAgICBgLFxuICAvLyBDdXN0b20gZWxlbWVudHMgYXJlIGlubGluZSBieSBkZWZhdWx0LlxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJTdGFja1ZpZXcge1xuICAvKipcbiAgICogVW5kb2N1bWVudGVkIGV4cGVyaW1lbnRhbCBmZWF0dXJlOiBpbmxpbmUgZWRpdGluZy5cbiAgICovXG4gIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgnY2xyU3RhY2tTYXZlJykgc2F2ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfZWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZSAmJiB0aGlzLl9lZGl0TW9kZTtcbiAgfVxuXG4gIHNldCBlZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuX2VkaXRNb2RlID0gdmFsdWU7XG4gICAgICB0aGlzLmVkaXRpbmdDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2F2ZS5lbWl0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW5kIG9mIHVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZS5cbiAgICovXG59XG4iXX0=