/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ClrDragEvent } from '../drag-event';
import { DragEventType } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from '../providers/drag-and-drop-event-bus.service';
/**
 * @template T
 */
var ClrDroppable = /** @class */ (function () {
    function ClrDroppable(el, eventBus, domAdapter, renderer) {
        this.el = el;
        this.eventBus = eventBus;
        this.domAdapter = domAdapter;
        this.renderer = renderer;
        this.isDraggableMatch = false;
        this._isDraggableOver = false;
        this._dropTolerance = { top: 0, right: 0, bottom: 0, left: 0 };
        this.dragStartEmitter = new EventEmitter();
        this.dragMoveEmitter = new EventEmitter();
        this.dragEndEmitter = new EventEmitter();
        this.dragLeaveEmitter = new EventEmitter();
        this.dragEnterEmitter = new EventEmitter();
        this.dropEmitter = new EventEmitter();
        this.droppableEl = this.el.nativeElement;
    }
    Object.defineProperty(ClrDroppable.prototype, "isDraggableOver", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // We need to add/remove this draggable-over class via Renderer2
            // because isDraggableOver is set outside of NgZone.
            if (value) {
                this.renderer.addClass(this.droppableEl, 'draggable-over');
            }
            else {
                this.renderer.removeClass(this.droppableEl, 'draggable-over');
            }
            this._isDraggableOver = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDroppable.prototype, "group", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._group = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} top
     * @param {?=} right
     * @param {?=} bottom
     * @param {?=} left
     * @return {?}
     */
    ClrDroppable.prototype.dropToleranceGenerator = /**
     * @param {?=} top
     * @param {?=} right
     * @param {?=} bottom
     * @param {?=} left
     * @return {?}
     */
    function (top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = top; }
        if (bottom === void 0) { bottom = top; }
        if (left === void 0) { left = right; }
        return { top: top, right: right, bottom: bottom, left: left };
    };
    Object.defineProperty(ClrDroppable.prototype, "dropTolerance", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // If user provides an object here and wants to manipulate/update properties individually,
            // the object must be immutable as we generate new object based user's given object.
            if (typeof value === 'number') {
                this._dropTolerance = this.dropToleranceGenerator(value);
            }
            else if (typeof value === 'string') {
                /** @type {?} */
                var toleranceValues = value
                    .trim()
                    .split(/\s+/)
                    .map(function (tolerance) { return parseInt(tolerance, 10); });
                this._dropTolerance = this.dropToleranceGenerator.apply(this, tslib_1.__spread(toleranceValues));
            }
            else if (value) {
                // The value could be passed in as {left: 20, top: 30 }
                // In this case, the rest of the direction properties should be 0.
                // That's why we initialize properties with 0 first, then override with user's given value.
                this._dropTolerance = tslib_1.__assign({}, this.dropToleranceGenerator(0), value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} subscription
     * @return {?}
     */
    ClrDroppable.prototype.unsubscribeFrom = /**
     * @param {?} subscription
     * @return {?}
     */
    function (subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    };
    /**
     * @param {?} draggableGroup
     * @return {?}
     */
    ClrDroppable.prototype.checkGroupMatch = /**
     * @param {?} draggableGroup
     * @return {?}
     */
    function (draggableGroup) {
        // Both Draggable and Droppable have clrGroup input.
        // The clrGroup input can be both a string key or array of string keys in Draggable and Droppable.
        // It's not match if Draggable has no defined value assigned to clrGroup, but Droppable has a defined clrGroup.
        if (!draggableGroup && this._group) {
            return false;
        }
        // The same is true the other way round.
        if (!this._group && draggableGroup) {
            return false;
        }
        // It's match if both Draggable and Droppable have no assigned value for clrGroup.
        if (!this._group && !draggableGroup) {
            return true;
        }
        // It's match if both Draggable and Droppable have simple string keys that are matching.
        // It's match if Draggable's simple clrGroup key is matching with one of the clrGroup keys of Droppable. The
        // same is true the other way round.
        // it's match if one of the clrGroup keys of Droppable is matching with one of the clrGroup keys of Draggable.
        if (typeof draggableGroup === 'string') {
            if (typeof this._group === 'string') {
                return this._group === draggableGroup;
            }
            else {
                return this._group.indexOf(draggableGroup) > -1;
            }
        }
        else {
            if (typeof this._group === 'string') {
                return draggableGroup.indexOf(this._group) > -1;
            }
            else {
                return ((/** @type {?} */ (this._group))).some(function (groupKey) { return draggableGroup.indexOf(groupKey) > -1; });
            }
        }
    };
    /**
     * @param {?} point
     * @return {?}
     */
    ClrDroppable.prototype.isInDropArea = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        if (!point) {
            return false;
        }
        if (!this.clientRect) {
            this.clientRect = this.domAdapter.clientRect(this.droppableEl);
        }
        if (point.pageX >= this.clientRect.left - this._dropTolerance.left &&
            point.pageX <= this.clientRect.right + this._dropTolerance.right &&
            point.pageY >= this.clientRect.top - this._dropTolerance.top &&
            point.pageY <= this.clientRect.bottom + this._dropTolerance.bottom) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} dragStartEvent
     * @return {?}
     */
    ClrDroppable.prototype.onDragStart = /**
     * @param {?} dragStartEvent
     * @return {?}
     */
    function (dragStartEvent) {
        var _this = this;
        // Check draggable and droppable have a matching group key.
        this.isDraggableMatch = this.checkGroupMatch(dragStartEvent.group);
        // Subscribe to dragMoved and dragEnded only if draggable and droppable have a matching group key.
        if (this.isDraggableMatch) {
            this.dragStartEmitter.emit(new ClrDragEvent(dragStartEvent));
            this.dragMoveSubscription = this.eventBus.dragMoved.subscribe(function (dragMoveEvent) {
                _this.onDragMove(dragMoveEvent);
            });
            this.dragEndSubscription = this.eventBus.dragEnded.subscribe(function (dragEndEvent) {
                _this.onDragEnd(dragEndEvent);
            });
        }
    };
    /**
     * @param {?} dragMoveEvent
     * @return {?}
     */
    ClrDroppable.prototype.onDragMove = /**
     * @param {?} dragMoveEvent
     * @return {?}
     */
    function (dragMoveEvent) {
        /** @type {?} */
        var isInDropArea = this.isInDropArea(dragMoveEvent.dropPointPosition);
        if (!this._isDraggableOver && isInDropArea) {
            this.isDraggableOver = true;
            /** @type {?} */
            var dragEnterEvent = tslib_1.__assign({}, dragMoveEvent, { type: DragEventType.DRAG_ENTER });
            this.eventBus.broadcast(dragEnterEvent);
            this.dragEnterEmitter.emit(new ClrDragEvent(dragEnterEvent));
        }
        else if (this._isDraggableOver && !isInDropArea) {
            this.isDraggableOver = false;
            /** @type {?} */
            var dragLeaveEvent = tslib_1.__assign({}, dragMoveEvent, { type: DragEventType.DRAG_LEAVE });
            this.eventBus.broadcast(dragLeaveEvent);
            this.dragLeaveEmitter.emit(new ClrDragEvent(dragLeaveEvent));
        }
        this.dragMoveEmitter.emit(new ClrDragEvent(dragMoveEvent));
    };
    /**
     * @param {?} dragEndEvent
     * @return {?}
     */
    ClrDroppable.prototype.onDragEnd = /**
     * @param {?} dragEndEvent
     * @return {?}
     */
    function (dragEndEvent) {
        if (this._isDraggableOver) {
            if (dragEndEvent.ghostElement) {
                // By this point, the draggable ghost component is destroyed,
                // but the element would be active until its animation completes.
                // As such, once the ghost is dropped over, we will give it "dropped" class.
                // This process cannot be done in the ghost component
                // because any subscription to the drop event is ineffective or invalid
                // as the component had been already destroyed.
                this.renderer.addClass(dragEndEvent.ghostElement, 'dropped');
            }
            /** @type {?} */
            var dropEvent = tslib_1.__assign({}, dragEndEvent, { type: DragEventType.DROP });
            this.eventBus.broadcast(dropEvent);
            this.dropEmitter.emit(new ClrDragEvent(dropEvent));
            this.isDraggableOver = false;
        }
        this.dragEndEmitter.emit(new ClrDragEvent(dragEndEvent));
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
        this.isDraggableMatch = false;
        delete this.clientRect;
    };
    /**
     * @return {?}
     */
    ClrDroppable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dragStartSubscription = this.eventBus.dragStarted.subscribe(function (dragStartEvent) {
            _this.onDragStart(dragStartEvent);
        });
    };
    /**
     * @return {?}
     */
    ClrDroppable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeFrom(this.dragStartSubscription);
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
    };
    ClrDroppable.decorators = [
        { type: Directive, args: [{
                    selector: '[clrDroppable]',
                    providers: [DomAdapter],
                    host: { '[class.droppable]': 'true', '[class.draggable-match]': 'isDraggableMatch' },
                },] }
    ];
    /** @nocollapse */
    ClrDroppable.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragAndDropEventBusService },
        { type: DomAdapter },
        { type: Renderer2 }
    ]; };
    ClrDroppable.propDecorators = {
        group: [{ type: Input, args: ['clrGroup',] }],
        dropTolerance: [{ type: Input, args: ['clrDropTolerance',] }],
        dragStartEmitter: [{ type: Output, args: ['clrDragStart',] }],
        dragMoveEmitter: [{ type: Output, args: ['clrDragMove',] }],
        dragEndEmitter: [{ type: Output, args: ['clrDragEnd',] }],
        dragLeaveEmitter: [{ type: Output, args: ['clrDragLeave',] }],
        dragEnterEmitter: [{ type: Output, args: ['clrDragEnter',] }],
        dropEmitter: [{ type: Output, args: ['clrDrop',] }]
    };
    return ClrDroppable;
}());
export { ClrDroppable };
if (false) {
    /** @type {?} */
    ClrDroppable.prototype.dragStartSubscription;
    /** @type {?} */
    ClrDroppable.prototype.dragMoveSubscription;
    /** @type {?} */
    ClrDroppable.prototype.dragEndSubscription;
    /** @type {?} */
    ClrDroppable.prototype.droppableEl;
    /** @type {?} */
    ClrDroppable.prototype.clientRect;
    /** @type {?} */
    ClrDroppable.prototype.isDraggableMatch;
    /** @type {?} */
    ClrDroppable.prototype._isDraggableOver;
    /** @type {?} */
    ClrDroppable.prototype._group;
    /** @type {?} */
    ClrDroppable.prototype._dropTolerance;
    /** @type {?} */
    ClrDroppable.prototype.dragStartEmitter;
    /** @type {?} */
    ClrDroppable.prototype.dragMoveEmitter;
    /** @type {?} */
    ClrDroppable.prototype.dragEndEmitter;
    /** @type {?} */
    ClrDroppable.prototype.dragLeaveEmitter;
    /** @type {?} */
    ClrDroppable.prototype.dragEnterEmitter;
    /** @type {?} */
    ClrDroppable.prototype.dropEmitter;
    /** @type {?} */
    ClrDroppable.prototype.el;
    /** @type {?} */
    ClrDroppable.prototype.eventBus;
    /** @type {?} */
    ClrDroppable.prototype.domAdapter;
    /** @type {?} */
    ClrDroppable.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9kcm9wcGFibGUvZHJvcHBhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBc0IsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFMUY7SUFhRSxzQkFDVSxFQUFjLEVBQ2QsUUFBdUMsRUFDdkMsVUFBc0IsRUFDdEIsUUFBbUI7UUFIbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQStCO1FBQ3ZDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUtyQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBb0JsQyxtQkFBYyxHQUE4QixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQTBCckUscUJBQWdCLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEUsb0JBQWUsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxtQkFBYyxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pFLHFCQUFnQixHQUFrQyxJQUFJLFlBQVksRUFB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UyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFO2lCQUNyRjs7OztnQkFibUIsVUFBVTtnQkFPckIsMEJBQTBCO2dCQUoxQixVQUFVO2dCQUg2RCxTQUFTOzs7d0JBK0N0RixLQUFLLFNBQUMsVUFBVTtnQ0FXaEIsS0FBSyxTQUFDLGtCQUFrQjttQ0FvQnhCLE1BQU0sU0FBQyxjQUFjO2tDQUNyQixNQUFNLFNBQUMsYUFBYTtpQ0FDcEIsTUFBTSxTQUFDLFlBQVk7bUNBQ25CLE1BQU0sU0FBQyxjQUFjO21DQUNyQixNQUFNLFNBQUMsY0FBYzs4QkFDckIsTUFBTSxTQUFDLFNBQVM7O0lBdUluQixtQkFBQztDQUFBLEFBak5ELElBaU5DO1NBNU1ZLFlBQVk7OztJQUN2Qiw2Q0FBNEM7O0lBQzVDLDRDQUEyQzs7SUFDM0MsMkNBQTBDOztJQUUxQyxtQ0FBeUI7O0lBQ3pCLGtDQUErQjs7SUFXL0Isd0NBQTBDOztJQUMxQyx3Q0FBMEM7O0lBYTFDLDhCQUFrQzs7SUFPbEMsc0NBQTZGOztJQTBCN0Ysd0NBQTZGOztJQUM3Rix1Q0FBMkY7O0lBQzNGLHNDQUF5Rjs7SUFDekYsd0NBQTZGOztJQUM3Rix3Q0FBNkY7O0lBQzdGLG1DQUFtRjs7SUE1RGpGLDBCQUFzQjs7SUFDdEIsZ0NBQStDOztJQUMvQyxrQ0FBOEI7O0lBQzlCLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRG9tQWRhcHRlciB9IGZyb20gJy4uLy4uL2RvbS1hZGFwdGVyL2RvbS1hZGFwdGVyJztcbmltcG9ydCB7IENsckRyYWdFdmVudCB9IGZyb20gJy4uL2RyYWctZXZlbnQnO1xuaW1wb3J0IHsgRHJhZ0V2ZW50SW50ZXJmYWNlLCBEcmFnRXZlbnRUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kcmFnLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDbHJEcm9wVG9sZXJhbmNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kcm9wLXRvbGVyYW5jZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BFdmVudEJ1c1NlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZHJhZy1hbmQtZHJvcC1ldmVudC1idXMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbHJEcm9wcGFibGVdJyxcbiAgcHJvdmlkZXJzOiBbRG9tQWRhcHRlcl0sXG4gIGhvc3Q6IHsgJ1tjbGFzcy5kcm9wcGFibGVdJzogJ3RydWUnLCAnW2NsYXNzLmRyYWdnYWJsZS1tYXRjaF0nOiAnaXNEcmFnZ2FibGVNYXRjaCcgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRHJvcHBhYmxlPFQ+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRyYWdTdGFydFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRyYWdNb3ZlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZHJhZ0VuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZHJvcHBhYmxlRWw6IGFueTtcbiAgcHJpdmF0ZSBjbGllbnRSZWN0OiBDbGllbnRSZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBldmVudEJ1czogRHJhZ0FuZERyb3BFdmVudEJ1c1NlcnZpY2U8VD4sXG4gICAgcHJpdmF0ZSBkb21BZGFwdGVyOiBEb21BZGFwdGVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmRyb3BwYWJsZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBpc0RyYWdnYWJsZU1hdGNoOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzRHJhZ2dhYmxlT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHNldCBpc0RyYWdnYWJsZU92ZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAvLyBXZSBuZWVkIHRvIGFkZC9yZW1vdmUgdGhpcyBkcmFnZ2FibGUtb3ZlciBjbGFzcyB2aWEgUmVuZGVyZXIyXG4gICAgLy8gYmVjYXVzZSBpc0RyYWdnYWJsZU92ZXIgaXMgc2V0IG91dHNpZGUgb2YgTmdab25lLlxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyb3BwYWJsZUVsLCAnZHJhZ2dhYmxlLW92ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRyb3BwYWJsZUVsLCAnZHJhZ2dhYmxlLW92ZXInKTtcbiAgICB9XG4gICAgdGhpcy5faXNEcmFnZ2FibGVPdmVyID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9ncm91cDogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgQElucHV0KCdjbHJHcm91cCcpXG4gIHNldCBncm91cCh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB0aGlzLl9ncm91cCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZHJvcFRvbGVyYW5jZTogQ2xyRHJvcFRvbGVyYW5jZUludGVyZmFjZSA9IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG5cbiAgcHJpdmF0ZSBkcm9wVG9sZXJhbmNlR2VuZXJhdG9yKHRvcCA9IDAsIHJpZ2h0ID0gdG9wLCBib3R0b20gPSB0b3AsIGxlZnQgPSByaWdodCk6IENsckRyb3BUb2xlcmFuY2VJbnRlcmZhY2Uge1xuICAgIHJldHVybiB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9O1xuICB9XG5cbiAgQElucHV0KCdjbHJEcm9wVG9sZXJhbmNlJylcbiAgc2V0IGRyb3BUb2xlcmFuY2UodmFsdWU6IG51bWJlciB8IHN0cmluZyB8IENsckRyb3BUb2xlcmFuY2VJbnRlcmZhY2UpIHtcbiAgICAvLyBJZiB1c2VyIHByb3ZpZGVzIGFuIG9iamVjdCBoZXJlIGFuZCB3YW50cyB0byBtYW5pcHVsYXRlL3VwZGF0ZSBwcm9wZXJ0aWVzIGluZGl2aWR1YWxseSxcbiAgICAvLyB0aGUgb2JqZWN0IG11c3QgYmUgaW1tdXRhYmxlIGFzIHdlIGdlbmVyYXRlIG5ldyBvYmplY3QgYmFzZWQgdXNlcidzIGdpdmVuIG9iamVjdC5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fZHJvcFRvbGVyYW5jZSA9IHRoaXMuZHJvcFRvbGVyYW5jZUdlbmVyYXRvcih2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0b2xlcmFuY2VWYWx1ZXMgPSB2YWx1ZVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAgIC5tYXAodG9sZXJhbmNlID0+IHBhcnNlSW50KHRvbGVyYW5jZSwgMTApKTtcbiAgICAgIHRoaXMuX2Ryb3BUb2xlcmFuY2UgPSB0aGlzLmRyb3BUb2xlcmFuY2VHZW5lcmF0b3IoLi4udG9sZXJhbmNlVmFsdWVzKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAvLyBUaGUgdmFsdWUgY291bGQgYmUgcGFzc2VkIGluIGFzIHtsZWZ0OiAyMCwgdG9wOiAzMCB9XG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSByZXN0IG9mIHRoZSBkaXJlY3Rpb24gcHJvcGVydGllcyBzaG91bGQgYmUgMC5cbiAgICAgIC8vIFRoYXQncyB3aHkgd2UgaW5pdGlhbGl6ZSBwcm9wZXJ0aWVzIHdpdGggMCBmaXJzdCwgdGhlbiBvdmVycmlkZSB3aXRoIHVzZXIncyBnaXZlbiB2YWx1ZS5cbiAgICAgIHRoaXMuX2Ryb3BUb2xlcmFuY2UgPSB7IC4uLnRoaXMuZHJvcFRvbGVyYW5jZUdlbmVyYXRvcigwKSwgLi4udmFsdWUgfTtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCdjbHJEcmFnU3RhcnQnKSBkcmFnU3RhcnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnY2xyRHJhZ01vdmUnKSBkcmFnTW92ZUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxDbHJEcmFnRXZlbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdjbHJEcmFnRW5kJykgZHJhZ0VuZEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxDbHJEcmFnRXZlbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdjbHJEcmFnTGVhdmUnKSBkcmFnTGVhdmVFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnY2xyRHJhZ0VudGVyJykgZHJhZ0VudGVyRW1pdHRlcjogRXZlbnRFbWl0dGVyPENsckRyYWdFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2NsckRyb3AnKSBkcm9wRW1pdHRlcjogRXZlbnRFbWl0dGVyPENsckRyYWdFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUZyb20oc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrR3JvdXBNYXRjaChkcmFnZ2FibGVHcm91cDogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICAvLyBCb3RoIERyYWdnYWJsZSBhbmQgRHJvcHBhYmxlIGhhdmUgY2xyR3JvdXAgaW5wdXQuXG4gICAgLy8gVGhlIGNsckdyb3VwIGlucHV0IGNhbiBiZSBib3RoIGEgc3RyaW5nIGtleSBvciBhcnJheSBvZiBzdHJpbmcga2V5cyBpbiBEcmFnZ2FibGUgYW5kIERyb3BwYWJsZS5cblxuICAgIC8vIEl0J3Mgbm90IG1hdGNoIGlmIERyYWdnYWJsZSBoYXMgbm8gZGVmaW5lZCB2YWx1ZSBhc3NpZ25lZCB0byBjbHJHcm91cCwgYnV0IERyb3BwYWJsZSBoYXMgYSBkZWZpbmVkIGNsckdyb3VwLlxuICAgIGlmICghZHJhZ2dhYmxlR3JvdXAgJiYgdGhpcy5fZ3JvdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGhlIHNhbWUgaXMgdHJ1ZSB0aGUgb3RoZXIgd2F5IHJvdW5kLlxuICAgIGlmICghdGhpcy5fZ3JvdXAgJiYgZHJhZ2dhYmxlR3JvdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJdCdzIG1hdGNoIGlmIGJvdGggRHJhZ2dhYmxlIGFuZCBEcm9wcGFibGUgaGF2ZSBubyBhc3NpZ25lZCB2YWx1ZSBmb3IgY2xyR3JvdXAuXG4gICAgaWYgKCF0aGlzLl9ncm91cCAmJiAhZHJhZ2dhYmxlR3JvdXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEl0J3MgbWF0Y2ggaWYgYm90aCBEcmFnZ2FibGUgYW5kIERyb3BwYWJsZSBoYXZlIHNpbXBsZSBzdHJpbmcga2V5cyB0aGF0IGFyZSBtYXRjaGluZy5cbiAgICAvLyBJdCdzIG1hdGNoIGlmIERyYWdnYWJsZSdzIHNpbXBsZSBjbHJHcm91cCBrZXkgaXMgbWF0Y2hpbmcgd2l0aCBvbmUgb2YgdGhlIGNsckdyb3VwIGtleXMgb2YgRHJvcHBhYmxlLiBUaGVcbiAgICAvLyBzYW1lIGlzIHRydWUgdGhlIG90aGVyIHdheSByb3VuZC5cbiAgICAvLyBpdCdzIG1hdGNoIGlmIG9uZSBvZiB0aGUgY2xyR3JvdXAga2V5cyBvZiBEcm9wcGFibGUgaXMgbWF0Y2hpbmcgd2l0aCBvbmUgb2YgdGhlIGNsckdyb3VwIGtleXMgb2YgRHJhZ2dhYmxlLlxuICAgIGlmICh0eXBlb2YgZHJhZ2dhYmxlR3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2dyb3VwID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXAgPT09IGRyYWdnYWJsZUdyb3VwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwLmluZGV4T2YoZHJhZ2dhYmxlR3JvdXApID4gLTE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fZ3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGVHcm91cC5pbmRleE9mKHRoaXMuX2dyb3VwKSA+IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9ncm91cCBhcyBzdHJpbmdbXSkuc29tZShncm91cEtleSA9PiBkcmFnZ2FibGVHcm91cC5pbmRleE9mKGdyb3VwS2V5KSA+IC0xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzSW5Ecm9wQXJlYShwb2ludDogeyBwYWdlWDogbnVtYmVyOyBwYWdlWTogbnVtYmVyIH0pOiBib29sZWFuIHtcbiAgICBpZiAoIXBvaW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNsaWVudFJlY3QpIHtcbiAgICAgIHRoaXMuY2xpZW50UmVjdCA9IHRoaXMuZG9tQWRhcHRlci5jbGllbnRSZWN0KHRoaXMuZHJvcHBhYmxlRWwpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBvaW50LnBhZ2VYID49IHRoaXMuY2xpZW50UmVjdC5sZWZ0IC0gdGhpcy5fZHJvcFRvbGVyYW5jZS5sZWZ0ICYmXG4gICAgICBwb2ludC5wYWdlWCA8PSB0aGlzLmNsaWVudFJlY3QucmlnaHQgKyB0aGlzLl9kcm9wVG9sZXJhbmNlLnJpZ2h0ICYmXG4gICAgICBwb2ludC5wYWdlWSA+PSB0aGlzLmNsaWVudFJlY3QudG9wIC0gdGhpcy5fZHJvcFRvbGVyYW5jZS50b3AgJiZcbiAgICAgIHBvaW50LnBhZ2VZIDw9IHRoaXMuY2xpZW50UmVjdC5ib3R0b20gKyB0aGlzLl9kcm9wVG9sZXJhbmNlLmJvdHRvbVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KGRyYWdTdGFydEV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAvLyBDaGVjayBkcmFnZ2FibGUgYW5kIGRyb3BwYWJsZSBoYXZlIGEgbWF0Y2hpbmcgZ3JvdXAga2V5LlxuICAgIHRoaXMuaXNEcmFnZ2FibGVNYXRjaCA9IHRoaXMuY2hlY2tHcm91cE1hdGNoKGRyYWdTdGFydEV2ZW50Lmdyb3VwKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byBkcmFnTW92ZWQgYW5kIGRyYWdFbmRlZCBvbmx5IGlmIGRyYWdnYWJsZSBhbmQgZHJvcHBhYmxlIGhhdmUgYSBtYXRjaGluZyBncm91cCBrZXkuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2FibGVNYXRjaCkge1xuICAgICAgdGhpcy5kcmFnU3RhcnRFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcmFnU3RhcnRFdmVudCkpO1xuICAgICAgdGhpcy5kcmFnTW92ZVN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRCdXMuZHJhZ01vdmVkLnN1YnNjcmliZSgoZHJhZ01vdmVFdmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KSA9PiB7XG4gICAgICAgIHRoaXMub25EcmFnTW92ZShkcmFnTW92ZUV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmFnRW5kU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudEJ1cy5kcmFnRW5kZWQuc3Vic2NyaWJlKChkcmFnRW5kRXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikgPT4ge1xuICAgICAgICB0aGlzLm9uRHJhZ0VuZChkcmFnRW5kRXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdNb3ZlKGRyYWdNb3ZlRXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IGlzSW5Ecm9wQXJlYSA9IHRoaXMuaXNJbkRyb3BBcmVhKGRyYWdNb3ZlRXZlbnQuZHJvcFBvaW50UG9zaXRpb24pO1xuICAgIGlmICghdGhpcy5faXNEcmFnZ2FibGVPdmVyICYmIGlzSW5Ecm9wQXJlYSkge1xuICAgICAgdGhpcy5pc0RyYWdnYWJsZU92ZXIgPSB0cnVlO1xuICAgICAgY29uc3QgZHJhZ0VudGVyRXZlbnQgPSB7IC4uLmRyYWdNb3ZlRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUuRFJBR19FTlRFUiB9O1xuICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoZHJhZ0VudGVyRXZlbnQpO1xuICAgICAgdGhpcy5kcmFnRW50ZXJFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcmFnRW50ZXJFdmVudCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNEcmFnZ2FibGVPdmVyICYmICFpc0luRHJvcEFyZWEpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2FibGVPdmVyID0gZmFsc2U7XG4gICAgICBjb25zdCBkcmFnTGVhdmVFdmVudCA9IHsgLi4uZHJhZ01vdmVFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZS5EUkFHX0xFQVZFIH07XG4gICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChkcmFnTGVhdmVFdmVudCk7XG4gICAgICB0aGlzLmRyYWdMZWF2ZUVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGRyYWdMZWF2ZUV2ZW50KSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnTW92ZUVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGRyYWdNb3ZlRXZlbnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnRW5kKGRyYWdFbmRFdmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lzRHJhZ2dhYmxlT3Zlcikge1xuICAgICAgaWYgKGRyYWdFbmRFdmVudC5naG9zdEVsZW1lbnQpIHtcbiAgICAgICAgLy8gQnkgdGhpcyBwb2ludCwgdGhlIGRyYWdnYWJsZSBnaG9zdCBjb21wb25lbnQgaXMgZGVzdHJveWVkLFxuICAgICAgICAvLyBidXQgdGhlIGVsZW1lbnQgd291bGQgYmUgYWN0aXZlIHVudGlsIGl0cyBhbmltYXRpb24gY29tcGxldGVzLlxuICAgICAgICAvLyBBcyBzdWNoLCBvbmNlIHRoZSBnaG9zdCBpcyBkcm9wcGVkIG92ZXIsIHdlIHdpbGwgZ2l2ZSBpdCBcImRyb3BwZWRcIiBjbGFzcy5cblxuICAgICAgICAvLyBUaGlzIHByb2Nlc3MgY2Fubm90IGJlIGRvbmUgaW4gdGhlIGdob3N0IGNvbXBvbmVudFxuICAgICAgICAvLyBiZWNhdXNlIGFueSBzdWJzY3JpcHRpb24gdG8gdGhlIGRyb3AgZXZlbnQgaXMgaW5lZmZlY3RpdmUgb3IgaW52YWxpZFxuICAgICAgICAvLyBhcyB0aGUgY29tcG9uZW50IGhhZCBiZWVuIGFscmVhZHkgZGVzdHJveWVkLlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRyYWdFbmRFdmVudC5naG9zdEVsZW1lbnQsICdkcm9wcGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHsgLi4uZHJhZ0VuZEV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlLkRST1AgfTtcbiAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KGRyb3BFdmVudCk7XG4gICAgICB0aGlzLmRyb3BFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcm9wRXZlbnQpKTtcbiAgICAgIHRoaXMuaXNEcmFnZ2FibGVPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZHJhZ0VuZEVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGRyYWdFbmRFdmVudCkpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tKHRoaXMuZHJhZ01vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tKHRoaXMuZHJhZ0VuZFN1YnNjcmlwdGlvbik7XG4gICAgdGhpcy5pc0RyYWdnYWJsZU1hdGNoID0gZmFsc2U7XG4gICAgZGVsZXRlIHRoaXMuY2xpZW50UmVjdDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudEJ1cy5kcmFnU3RhcnRlZC5zdWJzY3JpYmUoKGRyYWdTdGFydEV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgIHRoaXMub25EcmFnU3RhcnQoZHJhZ1N0YXJ0RXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZUZyb20odGhpcy5kcmFnU3RhcnRTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tKHRoaXMuZHJhZ01vdmVTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tKHRoaXMuZHJhZ0VuZFN1YnNjcmlwdGlvbik7XG4gIH1cbn1cbiJdfQ==