/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Undocumented experimental feature: inline editing.
 */
import { EventEmitter } from '@angular/core';
var StackControl = /** @class */ (function () {
    function StackControl(stackView) {
        var _this = this;
        this.stackView = stackView;
        this.modelChange = new EventEmitter(false);
        // Make the ClrStackView editable, since it contains a StackControl
        this.stackView.editable = true;
        this.stackView.editingChange.subscribe(function (editing) {
            // Edit mode was closed
            if (!editing) {
                _this.modelChange.emit(_this.model);
            }
        });
    }
    return StackControl;
}());
export { StackControl };
if (false) {
    /** @type {?} */
    StackControl.prototype.model;
    /** @type {?} */
    StackControl.prototype.modelChange;
    /** @type {?} */
    StackControl.prototype.stackView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvc3RhY2stdmlldy9zdGFjay1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0M7SUFJRSxzQkFBc0IsU0FBdUI7UUFBN0MsaUJBU0M7UUFUcUIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUY3QyxnQkFBVyxHQUFzQixJQUFJLFlBQVksQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUc1RCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQ3RELHVCQUF1QjtZQUN2QixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFiQyw2QkFBVzs7SUFDWCxtQ0FBOEQ7O0lBRWxELGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbi8qKlxuICogVW5kb2N1bWVudGVkIGV4cGVyaW1lbnRhbCBmZWF0dXJlOiBpbmxpbmUgZWRpdGluZy5cbiAqL1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENsclN0YWNrVmlldyB9IGZyb20gJy4vc3RhY2stdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGFja0NvbnRyb2wge1xuICBtb2RlbDogYW55O1xuICBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGFja1ZpZXc6IENsclN0YWNrVmlldykge1xuICAgIC8vIE1ha2UgdGhlIENsclN0YWNrVmlldyBlZGl0YWJsZSwgc2luY2UgaXQgY29udGFpbnMgYSBTdGFja0NvbnRyb2xcbiAgICB0aGlzLnN0YWNrVmlldy5lZGl0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5zdGFja1ZpZXcuZWRpdGluZ0NoYW5nZS5zdWJzY3JpYmUoKGVkaXRpbmc6IGJvb2xlYW4pID0+IHtcbiAgICAgIC8vIEVkaXQgbW9kZSB3YXMgY2xvc2VkXG4gICAgICBpZiAoIWVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMubW9kZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=