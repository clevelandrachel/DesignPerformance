/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ClrDroppable {
    /**
     * @param {?} el
     * @param {?} eventBus
     * @param {?} domAdapter
     * @param {?} renderer
     */
    constructor(el, eventBus, domAdapter, renderer) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set isDraggableOver(value) {
        // We need to add/remove this draggable-over class via Renderer2
        // because isDraggableOver is set outside of NgZone.
        if (value) {
            this.renderer.addClass(this.droppableEl, 'draggable-over');
        }
        else {
            this.renderer.removeClass(this.droppableEl, 'draggable-over');
        }
        this._isDraggableOver = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set group(value) {
        this._group = value;
    }
    /**
     * @param {?=} top
     * @param {?=} right
     * @param {?=} bottom
     * @param {?=} left
     * @return {?}
     */
    dropToleranceGenerator(top = 0, right = top, bottom = top, left = right) {
        return { top, right, bottom, left };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropTolerance(value) {
        // If user provides an object here and wants to manipulate/update properties individually,
        // the object must be immutable as we generate new object based user's given object.
        if (typeof value === 'number') {
            this._dropTolerance = this.dropToleranceGenerator(value);
        }
        else if (typeof value === 'string') {
            /** @type {?} */
            const toleranceValues = value
                .trim()
                .split(/\s+/)
                .map(tolerance => parseInt(tolerance, 10));
            this._dropTolerance = this.dropToleranceGenerator(...toleranceValues);
        }
        else if (value) {
            // The value could be passed in as {left: 20, top: 30 }
            // In this case, the rest of the direction properties should be 0.
            // That's why we initialize properties with 0 first, then override with user's given value.
            this._dropTolerance = Object.assign({}, this.dropToleranceGenerator(0), value);
        }
    }
    /**
     * @param {?} subscription
     * @return {?}
     */
    unsubscribeFrom(subscription) {
        if (subscription) {
            subscription.unsubscribe();
        }
    }
    /**
     * @param {?} draggableGroup
     * @return {?}
     */
    checkGroupMatch(draggableGroup) {
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
                return ((/** @type {?} */ (this._group))).some(groupKey => draggableGroup.indexOf(groupKey) > -1);
            }
        }
    }
    /**
     * @param {?} point
     * @return {?}
     */
    isInDropArea(point) {
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
    }
    /**
     * @param {?} dragStartEvent
     * @return {?}
     */
    onDragStart(dragStartEvent) {
        // Check draggable and droppable have a matching group key.
        this.isDraggableMatch = this.checkGroupMatch(dragStartEvent.group);
        // Subscribe to dragMoved and dragEnded only if draggable and droppable have a matching group key.
        if (this.isDraggableMatch) {
            this.dragStartEmitter.emit(new ClrDragEvent(dragStartEvent));
            this.dragMoveSubscription = this.eventBus.dragMoved.subscribe((dragMoveEvent) => {
                this.onDragMove(dragMoveEvent);
            });
            this.dragEndSubscription = this.eventBus.dragEnded.subscribe((dragEndEvent) => {
                this.onDragEnd(dragEndEvent);
            });
        }
    }
    /**
     * @param {?} dragMoveEvent
     * @return {?}
     */
    onDragMove(dragMoveEvent) {
        /** @type {?} */
        const isInDropArea = this.isInDropArea(dragMoveEvent.dropPointPosition);
        if (!this._isDraggableOver && isInDropArea) {
            this.isDraggableOver = true;
            /** @type {?} */
            const dragEnterEvent = Object.assign({}, dragMoveEvent, { type: DragEventType.DRAG_ENTER });
            this.eventBus.broadcast(dragEnterEvent);
            this.dragEnterEmitter.emit(new ClrDragEvent(dragEnterEvent));
        }
        else if (this._isDraggableOver && !isInDropArea) {
            this.isDraggableOver = false;
            /** @type {?} */
            const dragLeaveEvent = Object.assign({}, dragMoveEvent, { type: DragEventType.DRAG_LEAVE });
            this.eventBus.broadcast(dragLeaveEvent);
            this.dragLeaveEmitter.emit(new ClrDragEvent(dragLeaveEvent));
        }
        this.dragMoveEmitter.emit(new ClrDragEvent(dragMoveEvent));
    }
    /**
     * @param {?} dragEndEvent
     * @return {?}
     */
    onDragEnd(dragEndEvent) {
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
            const dropEvent = Object.assign({}, dragEndEvent, { type: DragEventType.DROP });
            this.eventBus.broadcast(dropEvent);
            this.dropEmitter.emit(new ClrDragEvent(dropEvent));
            this.isDraggableOver = false;
        }
        this.dragEndEmitter.emit(new ClrDragEvent(dragEndEvent));
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
        this.isDraggableMatch = false;
        delete this.clientRect;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dragStartSubscription = this.eventBus.dragStarted.subscribe((dragStartEvent) => {
            this.onDragStart(dragStartEvent);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeFrom(this.dragStartSubscription);
        this.unsubscribeFrom(this.dragMoveSubscription);
        this.unsubscribeFrom(this.dragEndSubscription);
    }
}
ClrDroppable.decorators = [
    { type: Directive, args: [{
                selector: '[clrDroppable]',
                providers: [DomAdapter],
                host: { '[class.droppable]': 'true', '[class.draggable-match]': 'isDraggableMatch' },
            },] }
];
/** @nocollapse */
ClrDroppable.ctorParameters = () => [
    { type: ElementRef },
    { type: DragAndDropEventBusService },
    { type: DomAdapter },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9kcm9wcGFibGUvZHJvcHBhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFzQixhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQU8xRixNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQVF2QixZQUNVLEVBQWMsRUFDZCxRQUF1QyxFQUN2QyxVQUFzQixFQUN0QixRQUFtQjtRQUhuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBK0I7UUFDdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBS3JCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFvQmxDLG1CQUFjLEdBQThCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBMEJyRSxxQkFBZ0IsR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RSxvQkFBZSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLG1CQUFjLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakUscUJBQWdC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LFNBQUMsa0JBQWtCOytCQW9CeEIsTUFBTSxTQUFDLGNBQWM7OEJBQ3JCLE1BQU0sU0FBQyxhQUFhOzZCQUNwQixNQUFNLFNBQUMsWUFBWTsrQkFDbkIsTUFBTSxTQUFDLGNBQWM7K0JBQ3JCLE1BQU0sU0FBQyxjQUFjOzBCQUNyQixNQUFNLFNBQUMsU0FBUzs7OztJQXBFakIsNkNBQTRDOztJQUM1Qyw0Q0FBMkM7O0lBQzNDLDJDQUEwQzs7SUFFMUMsbUNBQXlCOztJQUN6QixrQ0FBK0I7O0lBVy9CLHdDQUEwQzs7SUFDMUMsd0NBQTBDOztJQWExQyw4QkFBa0M7O0lBT2xDLHNDQUE2Rjs7SUEwQjdGLHdDQUE2Rjs7SUFDN0YsdUNBQTJGOztJQUMzRixzQ0FBeUY7O0lBQ3pGLHdDQUE2Rjs7SUFDN0Ysd0NBQTZGOztJQUM3RixtQ0FBbUY7O0lBNURqRiwwQkFBc0I7O0lBQ3RCLGdDQUErQzs7SUFDL0Msa0NBQThCOztJQUM5QixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kb20tYWRhcHRlci9kb20tYWRhcHRlcic7XG5pbXBvcnQgeyBDbHJEcmFnRXZlbnQgfSBmcm9tICcuLi9kcmFnLWV2ZW50JztcbmltcG9ydCB7IERyYWdFdmVudEludGVyZmFjZSwgRHJhZ0V2ZW50VHlwZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZHJhZy1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2xyRHJvcFRvbGVyYW5jZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZHJvcC10b2xlcmFuY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERyYWdBbmREcm9wRXZlbnRCdXNTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2RyYWctYW5kLWRyb3AtZXZlbnQtYnVzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2xyRHJvcHBhYmxlXScsXG4gIHByb3ZpZGVyczogW0RvbUFkYXB0ZXJdLFxuICBob3N0OiB7ICdbY2xhc3MuZHJvcHBhYmxlXSc6ICd0cnVlJywgJ1tjbGFzcy5kcmFnZ2FibGUtbWF0Y2hdJzogJ2lzRHJhZ2dhYmxlTWF0Y2gnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyb3BwYWJsZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkcmFnTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRyYWdFbmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRyb3BwYWJsZUVsOiBhbnk7XG4gIHByaXZhdGUgY2xpZW50UmVjdDogQ2xpZW50UmVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZXZlbnRCdXM6IERyYWdBbmREcm9wRXZlbnRCdXNTZXJ2aWNlPFQ+LFxuICAgIHByaXZhdGUgZG9tQWRhcHRlcjogRG9tQWRhcHRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5kcm9wcGFibGVFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgaXNEcmFnZ2FibGVNYXRjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0RyYWdnYWJsZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBzZXQgaXNEcmFnZ2FibGVPdmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gV2UgbmVlZCB0byBhZGQvcmVtb3ZlIHRoaXMgZHJhZ2dhYmxlLW92ZXIgY2xhc3MgdmlhIFJlbmRlcmVyMlxuICAgIC8vIGJlY2F1c2UgaXNEcmFnZ2FibGVPdmVyIGlzIHNldCBvdXRzaWRlIG9mIE5nWm9uZS5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcm9wcGFibGVFbCwgJ2RyYWdnYWJsZS1vdmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcm9wcGFibGVFbCwgJ2RyYWdnYWJsZS1vdmVyJyk7XG4gICAgfVxuICAgIHRoaXMuX2lzRHJhZ2dhYmxlT3ZlciA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ3JvdXA6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgnY2xyR3JvdXAnKVxuICBzZXQgZ3JvdXAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fZ3JvdXAgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2Ryb3BUb2xlcmFuY2U6IENsckRyb3BUb2xlcmFuY2VJbnRlcmZhY2UgPSB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9O1xuXG4gIHByaXZhdGUgZHJvcFRvbGVyYW5jZUdlbmVyYXRvcih0b3AgPSAwLCByaWdodCA9IHRvcCwgYm90dG9tID0gdG9wLCBsZWZ0ID0gcmlnaHQpOiBDbHJEcm9wVG9sZXJhbmNlSW50ZXJmYWNlIHtcbiAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyRHJvcFRvbGVyYW5jZScpXG4gIHNldCBkcm9wVG9sZXJhbmNlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBDbHJEcm9wVG9sZXJhbmNlSW50ZXJmYWNlKSB7XG4gICAgLy8gSWYgdXNlciBwcm92aWRlcyBhbiBvYmplY3QgaGVyZSBhbmQgd2FudHMgdG8gbWFuaXB1bGF0ZS91cGRhdGUgcHJvcGVydGllcyBpbmRpdmlkdWFsbHksXG4gICAgLy8gdGhlIG9iamVjdCBtdXN0IGJlIGltbXV0YWJsZSBhcyB3ZSBnZW5lcmF0ZSBuZXcgb2JqZWN0IGJhc2VkIHVzZXIncyBnaXZlbiBvYmplY3QuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuX2Ryb3BUb2xlcmFuY2UgPSB0aGlzLmRyb3BUb2xlcmFuY2VHZW5lcmF0b3IodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdG9sZXJhbmNlVmFsdWVzID0gdmFsdWVcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgICAubWFwKHRvbGVyYW5jZSA9PiBwYXJzZUludCh0b2xlcmFuY2UsIDEwKSk7XG4gICAgICB0aGlzLl9kcm9wVG9sZXJhbmNlID0gdGhpcy5kcm9wVG9sZXJhbmNlR2VuZXJhdG9yKC4uLnRvbGVyYW5jZVZhbHVlcyk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgLy8gVGhlIHZhbHVlIGNvdWxkIGJlIHBhc3NlZCBpbiBhcyB7bGVmdDogMjAsIHRvcDogMzAgfVxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgcmVzdCBvZiB0aGUgZGlyZWN0aW9uIHByb3BlcnRpZXMgc2hvdWxkIGJlIDAuXG4gICAgICAvLyBUaGF0J3Mgd2h5IHdlIGluaXRpYWxpemUgcHJvcGVydGllcyB3aXRoIDAgZmlyc3QsIHRoZW4gb3ZlcnJpZGUgd2l0aCB1c2VyJ3MgZ2l2ZW4gdmFsdWUuXG4gICAgICB0aGlzLl9kcm9wVG9sZXJhbmNlID0geyAuLi50aGlzLmRyb3BUb2xlcmFuY2VHZW5lcmF0b3IoMCksIC4uLnZhbHVlIH07XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgnY2xyRHJhZ1N0YXJ0JykgZHJhZ1N0YXJ0RW1pdHRlcjogRXZlbnRFbWl0dGVyPENsckRyYWdFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2NsckRyYWdNb3ZlJykgZHJhZ01vdmVFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnY2xyRHJhZ0VuZCcpIGRyYWdFbmRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnY2xyRHJhZ0xlYXZlJykgZHJhZ0xlYXZlRW1pdHRlcjogRXZlbnRFbWl0dGVyPENsckRyYWdFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2NsckRyYWdFbnRlcicpIGRyYWdFbnRlckVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxDbHJEcmFnRXZlbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCdjbHJEcm9wJykgZHJvcEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxDbHJEcmFnRXZlbnQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVGcm9tKHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0dyb3VwTWF0Y2goZHJhZ2dhYmxlR3JvdXA6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgLy8gQm90aCBEcmFnZ2FibGUgYW5kIERyb3BwYWJsZSBoYXZlIGNsckdyb3VwIGlucHV0LlxuICAgIC8vIFRoZSBjbHJHcm91cCBpbnB1dCBjYW4gYmUgYm90aCBhIHN0cmluZyBrZXkgb3IgYXJyYXkgb2Ygc3RyaW5nIGtleXMgaW4gRHJhZ2dhYmxlIGFuZCBEcm9wcGFibGUuXG5cbiAgICAvLyBJdCdzIG5vdCBtYXRjaCBpZiBEcmFnZ2FibGUgaGFzIG5vIGRlZmluZWQgdmFsdWUgYXNzaWduZWQgdG8gY2xyR3JvdXAsIGJ1dCBEcm9wcGFibGUgaGFzIGEgZGVmaW5lZCBjbHJHcm91cC5cbiAgICBpZiAoIWRyYWdnYWJsZUdyb3VwICYmIHRoaXMuX2dyb3VwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoZSBzYW1lIGlzIHRydWUgdGhlIG90aGVyIHdheSByb3VuZC5cbiAgICBpZiAoIXRoaXMuX2dyb3VwICYmIGRyYWdnYWJsZUdyb3VwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSXQncyBtYXRjaCBpZiBib3RoIERyYWdnYWJsZSBhbmQgRHJvcHBhYmxlIGhhdmUgbm8gYXNzaWduZWQgdmFsdWUgZm9yIGNsckdyb3VwLlxuICAgIGlmICghdGhpcy5fZ3JvdXAgJiYgIWRyYWdnYWJsZUdyb3VwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJdCdzIG1hdGNoIGlmIGJvdGggRHJhZ2dhYmxlIGFuZCBEcm9wcGFibGUgaGF2ZSBzaW1wbGUgc3RyaW5nIGtleXMgdGhhdCBhcmUgbWF0Y2hpbmcuXG4gICAgLy8gSXQncyBtYXRjaCBpZiBEcmFnZ2FibGUncyBzaW1wbGUgY2xyR3JvdXAga2V5IGlzIG1hdGNoaW5nIHdpdGggb25lIG9mIHRoZSBjbHJHcm91cCBrZXlzIG9mIERyb3BwYWJsZS4gVGhlXG4gICAgLy8gc2FtZSBpcyB0cnVlIHRoZSBvdGhlciB3YXkgcm91bmQuXG4gICAgLy8gaXQncyBtYXRjaCBpZiBvbmUgb2YgdGhlIGNsckdyb3VwIGtleXMgb2YgRHJvcHBhYmxlIGlzIG1hdGNoaW5nIHdpdGggb25lIG9mIHRoZSBjbHJHcm91cCBrZXlzIG9mIERyYWdnYWJsZS5cbiAgICBpZiAodHlwZW9mIGRyYWdnYWJsZUdyb3VwID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ncm91cCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwID09PSBkcmFnZ2FibGVHcm91cDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cC5pbmRleE9mKGRyYWdnYWJsZUdyb3VwKSA+IC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2dyb3VwID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlR3JvdXAuaW5kZXhPZih0aGlzLl9ncm91cCkgPiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fZ3JvdXAgYXMgc3RyaW5nW10pLnNvbWUoZ3JvdXBLZXkgPT4gZHJhZ2dhYmxlR3JvdXAuaW5kZXhPZihncm91cEtleSkgPiAtMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0luRHJvcEFyZWEocG9pbnQ6IHsgcGFnZVg6IG51bWJlcjsgcGFnZVk6IG51bWJlciB9KTogYm9vbGVhbiB7XG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jbGllbnRSZWN0KSB7XG4gICAgICB0aGlzLmNsaWVudFJlY3QgPSB0aGlzLmRvbUFkYXB0ZXIuY2xpZW50UmVjdCh0aGlzLmRyb3BwYWJsZUVsKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwb2ludC5wYWdlWCA+PSB0aGlzLmNsaWVudFJlY3QubGVmdCAtIHRoaXMuX2Ryb3BUb2xlcmFuY2UubGVmdCAmJlxuICAgICAgcG9pbnQucGFnZVggPD0gdGhpcy5jbGllbnRSZWN0LnJpZ2h0ICsgdGhpcy5fZHJvcFRvbGVyYW5jZS5yaWdodCAmJlxuICAgICAgcG9pbnQucGFnZVkgPj0gdGhpcy5jbGllbnRSZWN0LnRvcCAtIHRoaXMuX2Ryb3BUb2xlcmFuY2UudG9wICYmXG4gICAgICBwb2ludC5wYWdlWSA8PSB0aGlzLmNsaWVudFJlY3QuYm90dG9tICsgdGhpcy5fZHJvcFRvbGVyYW5jZS5ib3R0b21cbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydChkcmFnU3RhcnRFdmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgZHJhZ2dhYmxlIGFuZCBkcm9wcGFibGUgaGF2ZSBhIG1hdGNoaW5nIGdyb3VwIGtleS5cbiAgICB0aGlzLmlzRHJhZ2dhYmxlTWF0Y2ggPSB0aGlzLmNoZWNrR3JvdXBNYXRjaChkcmFnU3RhcnRFdmVudC5ncm91cCk7XG5cbiAgICAvLyBTdWJzY3JpYmUgdG8gZHJhZ01vdmVkIGFuZCBkcmFnRW5kZWQgb25seSBpZiBkcmFnZ2FibGUgYW5kIGRyb3BwYWJsZSBoYXZlIGEgbWF0Y2hpbmcgZ3JvdXAga2V5LlxuICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlTWF0Y2gpIHtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0RW1pdHRlci5lbWl0KG5ldyBDbHJEcmFnRXZlbnQoZHJhZ1N0YXJ0RXZlbnQpKTtcbiAgICAgIHRoaXMuZHJhZ01vdmVTdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50QnVzLmRyYWdNb3ZlZC5zdWJzY3JpYmUoKGRyYWdNb3ZlRXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikgPT4ge1xuICAgICAgICB0aGlzLm9uRHJhZ01vdmUoZHJhZ01vdmVFdmVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZHJhZ0VuZFN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRCdXMuZHJhZ0VuZGVkLnN1YnNjcmliZSgoZHJhZ0VuZEV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5vbkRyYWdFbmQoZHJhZ0VuZEV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnTW92ZShkcmFnTW92ZUV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBpc0luRHJvcEFyZWEgPSB0aGlzLmlzSW5Ecm9wQXJlYShkcmFnTW92ZUV2ZW50LmRyb3BQb2ludFBvc2l0aW9uKTtcbiAgICBpZiAoIXRoaXMuX2lzRHJhZ2dhYmxlT3ZlciAmJiBpc0luRHJvcEFyZWEpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2FibGVPdmVyID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGRyYWdFbnRlckV2ZW50ID0geyAuLi5kcmFnTW92ZUV2ZW50LCB0eXBlOiBEcmFnRXZlbnRUeXBlLkRSQUdfRU5URVIgfTtcbiAgICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KGRyYWdFbnRlckV2ZW50KTtcbiAgICAgIHRoaXMuZHJhZ0VudGVyRW1pdHRlci5lbWl0KG5ldyBDbHJEcmFnRXZlbnQoZHJhZ0VudGVyRXZlbnQpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRHJhZ2dhYmxlT3ZlciAmJiAhaXNJbkRyb3BBcmVhKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dhYmxlT3ZlciA9IGZhbHNlO1xuICAgICAgY29uc3QgZHJhZ0xlYXZlRXZlbnQgPSB7IC4uLmRyYWdNb3ZlRXZlbnQsIHR5cGU6IERyYWdFdmVudFR5cGUuRFJBR19MRUFWRSB9O1xuICAgICAgdGhpcy5ldmVudEJ1cy5icm9hZGNhc3QoZHJhZ0xlYXZlRXZlbnQpO1xuICAgICAgdGhpcy5kcmFnTGVhdmVFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcmFnTGVhdmVFdmVudCkpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ01vdmVFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcmFnTW92ZUV2ZW50KSk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ0VuZChkcmFnRW5kRXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pc0RyYWdnYWJsZU92ZXIpIHtcbiAgICAgIGlmIChkcmFnRW5kRXZlbnQuZ2hvc3RFbGVtZW50KSB7XG4gICAgICAgIC8vIEJ5IHRoaXMgcG9pbnQsIHRoZSBkcmFnZ2FibGUgZ2hvc3QgY29tcG9uZW50IGlzIGRlc3Ryb3llZCxcbiAgICAgICAgLy8gYnV0IHRoZSBlbGVtZW50IHdvdWxkIGJlIGFjdGl2ZSB1bnRpbCBpdHMgYW5pbWF0aW9uIGNvbXBsZXRlcy5cbiAgICAgICAgLy8gQXMgc3VjaCwgb25jZSB0aGUgZ2hvc3QgaXMgZHJvcHBlZCBvdmVyLCB3ZSB3aWxsIGdpdmUgaXQgXCJkcm9wcGVkXCIgY2xhc3MuXG5cbiAgICAgICAgLy8gVGhpcyBwcm9jZXNzIGNhbm5vdCBiZSBkb25lIGluIHRoZSBnaG9zdCBjb21wb25lbnRcbiAgICAgICAgLy8gYmVjYXVzZSBhbnkgc3Vic2NyaXB0aW9uIHRvIHRoZSBkcm9wIGV2ZW50IGlzIGluZWZmZWN0aXZlIG9yIGludmFsaWRcbiAgICAgICAgLy8gYXMgdGhlIGNvbXBvbmVudCBoYWQgYmVlbiBhbHJlYWR5IGRlc3Ryb3llZC5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkcmFnRW5kRXZlbnQuZ2hvc3RFbGVtZW50LCAnZHJvcHBlZCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB7IC4uLmRyYWdFbmRFdmVudCwgdHlwZTogRHJhZ0V2ZW50VHlwZS5EUk9QIH07XG4gICAgICB0aGlzLmV2ZW50QnVzLmJyb2FkY2FzdChkcm9wRXZlbnQpO1xuICAgICAgdGhpcy5kcm9wRW1pdHRlci5lbWl0KG5ldyBDbHJEcmFnRXZlbnQoZHJvcEV2ZW50KSk7XG4gICAgICB0aGlzLmlzRHJhZ2dhYmxlT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmRyYWdFbmRFbWl0dGVyLmVtaXQobmV3IENsckRyYWdFdmVudChkcmFnRW5kRXZlbnQpKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbSh0aGlzLmRyYWdNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbSh0aGlzLmRyYWdFbmRTdWJzY3JpcHRpb24pO1xuICAgIHRoaXMuaXNEcmFnZ2FibGVNYXRjaCA9IGZhbHNlO1xuICAgIGRlbGV0ZSB0aGlzLmNsaWVudFJlY3Q7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRyYWdTdGFydFN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRCdXMuZHJhZ1N0YXJ0ZWQuc3Vic2NyaWJlKChkcmFnU3RhcnRFdmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KSA9PiB7XG4gICAgICB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdTdGFydEV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tKHRoaXMuZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbSh0aGlzLmRyYWdNb3ZlU3Vic2NyaXB0aW9uKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbSh0aGlzLmRyYWdFbmRTdWJzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=