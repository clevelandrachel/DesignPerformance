/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class OutsideClick {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.strict = false;
        this.outsideClick = new EventEmitter(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    documentClick(event) {
        /** @type {?} */
        const target = event.target;
        // Get the element in the DOM on which the mouse was clicked
        /** @type {?} */
        const host = this.el.nativeElement;
        if (target === host) {
            return;
        }
        if (!this.strict && host.contains(target)) {
            return;
        }
        this.outsideClick.emit(event);
    }
}
OutsideClick.decorators = [
    { type: Directive, args: [{ selector: '[clrOutsideClick]' },] }
];
/** @nocollapse */
OutsideClick.ctorParameters = () => [
    { type: ElementRef }
];
OutsideClick.propDecorators = {
    strict: [{ type: Input, args: ['clrStrict',] }],
    outsideClick: [{ type: Output, args: ['clrOutsideClick',] }],
    documentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    OutsideClick.prototype.strict;
    /** @type {?} */
    OutsideClick.prototype.outsideClick;
    /** @type {?} */
    OutsideClick.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0c2lkZS1jbGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL291dHNpZGUtY2xpY2svb3V0c2lkZS1jbGljay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakcsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFFZCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRVIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBTSxLQUFLLENBQUMsQ0FBQztJQUpsQyxDQUFDOzs7OztJQU90QyxhQUFhLENBQUMsS0FBaUI7O2NBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7O2NBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFFbEMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTs7OztZQUZ4QixVQUFVOzs7cUJBTTNCLEtBQUssU0FBQyxXQUFXOzJCQUVqQixNQUFNLFNBQUMsaUJBQWlCOzRCQUV4QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKMUMsOEJBQW1DOztJQUVuQyxvQ0FBdUU7O0lBSjNELDBCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2Nsck91dHNpZGVDbGlja10nIH0pXG5leHBvcnQgY2xhc3MgT3V0c2lkZUNsaWNrIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBASW5wdXQoJ2NsclN0cmljdCcpIHN0cmljdCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoJ2Nsck91dHNpZGVDbGljaycpIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBkb2N1bWVudENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0OyAvLyBHZXQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBvbiB3aGljaCB0aGUgbW91c2Ugd2FzIGNsaWNrZWRcbiAgICBjb25zdCBob3N0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50OyAvLyBHZXQgdGhlIGN1cnJlbnQgYWN0aW9uTWVudSBuYXRpdmUgSFRNTCBlbGVtZW50XG5cbiAgICBpZiAodGFyZ2V0ID09PSBob3N0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zdHJpY3QgJiYgaG9zdC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3V0c2lkZUNsaWNrLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=