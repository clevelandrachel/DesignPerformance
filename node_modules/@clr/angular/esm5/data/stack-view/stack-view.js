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
var ClrStackView = /** @class */ (function () {
    function ClrStackView() {
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
    Object.defineProperty(ClrStackView.prototype, "editing", {
        get: /**
         * @return {?}
         */
        function () {
            return this.editable && this._editMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.editable) {
                this._editMode = value;
                this.editingChange.emit(value);
                if (!value) {
                    this.save.emit(null);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ClrStackView.decorators = [
        { type: Component, args: [{
                    selector: 'clr-stack-view',
                    template: "\n        <ng-content select=\"clr-stack-header\"></ng-content>\n        <dl class=\"stack-view\"><ng-content></ng-content></dl>\n    ",
                    styles: ["\n        :host { display: block; }\n    "]
                }] }
    ];
    ClrStackView.propDecorators = {
        save: [{ type: Output, args: ['clrStackSave',] }]
    };
    return ClrStackView;
}());
export { ClrStackView };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvc3RhY2stdmlldy9zdGFjay12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRTtJQUFBOzs7O1FBaUJFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFRixTQUFJLEdBQXVCLElBQUksWUFBWSxDQUFPLEtBQUssQ0FBQyxDQUFDO1FBRXpFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFbkMsa0JBQWEsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFleEU7O1dBRUc7SUFDTCxDQUFDO0lBaEJDLHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxDQUFDOzs7OztRQUVELFVBQVksS0FBYztZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7YUFDRjtRQUNILENBQUM7OztPQVZBOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSx3SUFHUDs2QkFHRCwyQ0FFQztpQkFFSjs7O3VCQU9FLE1BQU0sU0FBQyxjQUFjOztJQXNCeEIsbUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQTVCWSxZQUFZOzs7Ozs7SUFJdkIsZ0NBQTBCOztJQUUxQiw0QkFBaUY7O0lBRWpGLGlDQUFtQzs7SUFFbkMscUNBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItc3RhY2stdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNsci1zdGFjay1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxkbCBjbGFzcz1cInN0YWNrLXZpZXdcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kbD5cbiAgICBgLFxuICAvLyBDdXN0b20gZWxlbWVudHMgYXJlIGlubGluZSBieSBkZWZhdWx0LlxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJTdGFja1ZpZXcge1xuICAvKipcbiAgICogVW5kb2N1bWVudGVkIGV4cGVyaW1lbnRhbCBmZWF0dXJlOiBpbmxpbmUgZWRpdGluZy5cbiAgICovXG4gIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgnY2xyU3RhY2tTYXZlJykgc2F2ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfZWRpdE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBlZGl0aW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBnZXQgZWRpdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0YWJsZSAmJiB0aGlzLl9lZGl0TW9kZTtcbiAgfVxuXG4gIHNldCBlZGl0aW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuX2VkaXRNb2RlID0gdmFsdWU7XG4gICAgICB0aGlzLmVkaXRpbmdDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2F2ZS5lbWl0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW5kIG9mIHVuZG9jdW1lbnRlZCBleHBlcmltZW50YWwgZmVhdHVyZS5cbiAgICovXG59XG4iXX0=