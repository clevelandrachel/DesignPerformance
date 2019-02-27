/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var DragEventType = {
    DRAG_START: 0,
    DRAG_MOVE: 1,
    DRAG_END: 2,
    DRAG_ENTER: 3,
    DRAG_LEAVE: 4,
    DROP: 5,
};
export { DragEventType };
DragEventType[DragEventType.DRAG_START] = 'DRAG_START';
DragEventType[DragEventType.DRAG_MOVE] = 'DRAG_MOVE';
DragEventType[DragEventType.DRAG_END] = 'DRAG_END';
DragEventType[DragEventType.DRAG_ENTER] = 'DRAG_ENTER';
DragEventType[DragEventType.DRAG_LEAVE] = 'DRAG_LEAVE';
DragEventType[DragEventType.DROP] = 'DROP';
/**
 * @record
 */
export function DragPointPosition() { }
if (false) {
    /** @type {?} */
    DragPointPosition.prototype.pageX;
    /** @type {?} */
    DragPointPosition.prototype.pageY;
    /** @type {?} */
    DragPointPosition.prototype.moveX;
    /** @type {?} */
    DragPointPosition.prototype.moveY;
}
/**
 * @record
 * @template T
 */
export function DragEventInterface() { }
if (false) {
    /** @type {?} */
    DragEventInterface.prototype.type;
    /** @type {?|undefined} */
    DragEventInterface.prototype.group;
    /** @type {?|undefined} */
    DragEventInterface.prototype.ghostElement;
    /** @type {?} */
    DragEventInterface.prototype.dragPosition;
    /** @type {?|undefined} */
    DragEventInterface.prototype.dragDataTransfer;
    /** @type {?|undefined} */
    DragEventInterface.prototype.dropPointPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1ldmVudC5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9kcmFnLWFuZC1kcm9wL2ludGVyZmFjZXMvZHJhZy1ldmVudC5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUUsYUFBVTtJQUNWLFlBQVM7SUFDVCxXQUFRO0lBQ1IsYUFBVTtJQUNWLGFBQVU7SUFDVixPQUFJOzs7Ozs7Ozs7Ozs7QUFHTix1Q0FLQzs7O0lBSkMsa0NBQWM7O0lBQ2Qsa0NBQWM7O0lBQ2Qsa0NBQWM7O0lBQ2Qsa0NBQWM7Ozs7OztBQUdoQix3Q0FTQzs7O0lBUkMsa0NBQW9COztJQUNwQixtQ0FBMEI7O0lBQzFCLDBDQUFtQjs7SUFDbkIsMENBQWdDOztJQUNoQyw4Q0FBcUI7O0lBR3JCLCtDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmV4cG9ydCBlbnVtIERyYWdFdmVudFR5cGUge1xuICBEUkFHX1NUQVJULFxuICBEUkFHX01PVkUsXG4gIERSQUdfRU5ELFxuICBEUkFHX0VOVEVSLFxuICBEUkFHX0xFQVZFLFxuICBEUk9QLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdQb2ludFBvc2l0aW9uIHtcbiAgcGFnZVg6IG51bWJlcjtcbiAgcGFnZVk6IG51bWJlcjtcbiAgbW92ZVg6IG51bWJlcjtcbiAgbW92ZVk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnRXZlbnRJbnRlcmZhY2U8VD4ge1xuICB0eXBlOiBEcmFnRXZlbnRUeXBlO1xuICBncm91cD86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBnaG9zdEVsZW1lbnQ/OiBhbnk7XG4gIGRyYWdQb3NpdGlvbjogRHJhZ1BvaW50UG9zaXRpb247XG4gIGRyYWdEYXRhVHJhbnNmZXI/OiBUO1xuICAvLyBGb3IgZGVmYXVsdCBnaG9zdHMsIHRoaXMgZHJvcFBvaW50UG9zaXRpb24gZGVub3RlcyB0aGUgY2VudGVyIHBvaW50IG9mIHRoZSBnaG9zdCBlbGVtZW50LlxuICAvLyBUaGlzIGNlbnRlciBwb2ludCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBnaG9zdCBpcyBvdmVyIGRyb3BwYWJsZSBlbGVtZW50cyBvciBub3QuXG4gIGRyb3BQb2ludFBvc2l0aW9uPzogeyBwYWdlWDogbnVtYmVyOyBwYWdlWTogbnVtYmVyIH07XG59XG4iXX0=