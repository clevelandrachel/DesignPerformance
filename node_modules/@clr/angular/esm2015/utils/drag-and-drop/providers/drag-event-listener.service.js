/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, NgZone, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DragEventType } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';
/**
 * @template T
 */
export class DragEventListenerService {
    /**
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} eventBus
     */
    constructor(ngZone, renderer, eventBus) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.eventBus = eventBus;
        this.dragStart = new Subject();
        this.dragMove = new Subject();
        this.dragEnd = new Subject();
        this.hasDragStarted = false;
    }
    /**
     * @return {?}
     */
    get dragStarted() {
        return this.dragStart.asObservable();
    }
    /**
     * @return {?}
     */
    get dragMoved() {
        return this.dragMove.asObservable();
    }
    /**
     * @return {?}
     */
    get dragEnded() {
        return this.dragEnd.asObservable();
    }
    /**
     * @param {?} draggableEl
     * @return {?}
     */
    attachDragListeners(draggableEl) {
        this.draggableEl = draggableEl;
        this.listeners = [
            this.customDragEvent(this.draggableEl, 'mousedown', 'mousemove', 'mouseup'),
            this.customDragEvent(this.draggableEl, 'touchstart', 'touchmove', 'touchend'),
        ];
    }
    /**
     * @return {?}
     */
    detachDragListeners() {
        if (this.listeners) {
            this.listeners.map(event => event());
        }
        // In most cases, once users start dragging with mousedown/touchstart events,
        // they will end dragging at one point with mouseup/touchend.
        // However, there might be a few cases where mousedown/touchstart events get registered,
        // but the draggable element gets removed before user ends dragging.
        // In that case, we need to remove the attached listeners that happened during the mousedown/touchstart events.
        if (this.nestedListeners) {
            this.nestedListeners.map(event => event());
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getNativeEventObject(event) {
        if (((/** @type {?} */ (event))).hasOwnProperty('changedTouches')) {
            return ((/** @type {?} */ (event))).changedTouches[0];
        }
        else {
            return event;
        }
    }
    /**
     * @param {?} element
     * @param {?} startOnEvent
     * @param {?} moveOnEvent
     * @param {?} endOnEvent
     * @return {?}
     */
    customDragEvent(element, startOnEvent, moveOnEvent, endOnEvent) {
        return this.renderer.listen(element, startOnEvent, (startEvent) => {
            // save the initial point to initialPosition
            // this will be used to calculate how far the draggable has been dragged from its initial position
            this.initialPosition = {
                pageX: this.getNativeEventObject(startEvent).pageX,
                pageY: this.getNativeEventObject(startEvent).pageY,
            };
            // Initialize nested listeners' property with a new empty array;
            this.nestedListeners = [];
            // This is needed to disable selection during dragging (especially in EDGE/IE11).
            this.nestedListeners.push(this.renderer.listen('document', 'selectstart', (selectEvent) => {
                selectEvent.preventDefault();
                selectEvent.stopImmediatePropagation();
            }));
            // Listen to mousemove/touchmove events outside of angular zone.
            this.nestedListeners.push(this.ngZone.runOutsideAngular(() => {
                return this.renderer.listen('document', moveOnEvent, (moveEvent) => {
                    // Event.stopImmediatePropagation() is needed here to prevent nested draggables from getting dragged
                    // altogether. We shouldn't use Event.stopPropagation() here as we are listening to the events
                    // on the global element level.
                    // With Event.stopImmediatePropagation(), it registers the events sent from the inner most draggable
                    // first. Then immediately after that, it stops listening to the same type of events on the same
                    // element. So this will help us to not register the same events that would come from the parent
                    // level draggables eventually.
                    moveEvent.stopImmediatePropagation();
                    if (!this.hasDragStarted) {
                        this.hasDragStarted = true;
                        // Fire "dragstart"
                        this.broadcast(moveEvent, DragEventType.DRAG_START);
                    }
                    else {
                        // Fire "dragmove"
                        this.broadcast(moveEvent, DragEventType.DRAG_MOVE);
                    }
                });
            }));
            // Listen to mouseup/touchend events.
            this.nestedListeners.push(this.renderer.listen('document', endOnEvent, (endEvent) => {
                if (this.hasDragStarted) {
                    // Fire "dragend" only if dragstart is registered
                    this.hasDragStarted = false;
                    this.broadcast(endEvent, DragEventType.DRAG_END);
                }
                // We must remove the the nested listeners every time drag completes.
                if (this.nestedListeners) {
                    this.nestedListeners.map(event => event());
                }
            }));
        });
    }
    /**
     * @param {?} event
     * @param {?} eventType
     * @return {?}
     */
    broadcast(event, eventType) {
        /** @type {?} */
        const dragEvent = this.generateDragEvent(event, eventType);
        switch (dragEvent.type) {
            case DragEventType.DRAG_START:
                this.dragStart.next(dragEvent);
                break;
            case DragEventType.DRAG_MOVE:
                this.dragMove.next(dragEvent);
                break;
            case DragEventType.DRAG_END:
                this.dragEnd.next(dragEvent);
                break;
            default:
                break;
        }
        // The following properties are set after they are broadcasted to the DraggableGhost component.
        dragEvent.ghostElement = this.ghostElement;
        dragEvent.dropPointPosition = this.dropPointPosition;
        this.eventBus.broadcast(dragEvent);
    }
    /**
     * @param {?} event
     * @param {?} eventType
     * @return {?}
     */
    generateDragEvent(event, eventType) {
        /** @type {?} */
        const nativeEvent = this.getNativeEventObject(event);
        return {
            type: eventType,
            dragPosition: {
                pageX: nativeEvent.pageX,
                pageY: nativeEvent.pageY,
                moveX: nativeEvent.pageX - this.initialPosition.pageX,
                moveY: nativeEvent.pageY - this.initialPosition.pageY,
            },
            group: this.group,
            dragDataTransfer: this.dragDataTransfer,
            ghostElement: this.ghostElement,
        };
    }
}
DragEventListenerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DragEventListenerService.ctorParameters = () => [
    { type: NgZone },
    { type: Renderer2 },
    { type: DragAndDropEventBusService }
];
if (false) {
    /** @type {?} */
    DragEventListenerService.prototype.draggableEl;
    /** @type {?} */
    DragEventListenerService.prototype.listeners;
    /** @type {?} */
    DragEventListenerService.prototype.nestedListeners;
    /** @type {?} */
    DragEventListenerService.prototype.dragStart;
    /** @type {?} */
    DragEventListenerService.prototype.dragMove;
    /** @type {?} */
    DragEventListenerService.prototype.dragEnd;
    /** @type {?} */
    DragEventListenerService.prototype.hasDragStarted;
    /** @type {?} */
    DragEventListenerService.prototype.initialPosition;
    /** @type {?} */
    DragEventListenerService.prototype.dragDataTransfer;
    /** @type {?} */
    DragEventListenerService.prototype.group;
    /** @type {?} */
    DragEventListenerService.prototype.ghostElement;
    /** @type {?} */
    DragEventListenerService.prototype.dropPointPosition;
    /** @type {?} */
    DragEventListenerService.prototype.ngZone;
    /** @type {?} */
    DragEventListenerService.prototype.renderer;
    /** @type {?} */
    DragEventListenerService.prototype.eventBus;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1ldmVudC1saXN0ZW5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9wcm92aWRlcnMvZHJhZy1ldmVudC1saXN0ZW5lci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBc0IsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFHL0UsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBMkJuQyxZQUFvQixNQUFjLEVBQVUsUUFBbUIsRUFBVSxRQUF1QztRQUE1RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQStCO1FBbEJ4RyxjQUFTLEdBQW1DLElBQUksT0FBTyxFQUF5QixDQUFDO1FBQ2pGLGFBQVEsR0FBbUMsSUFBSSxPQUFPLEVBQXlCLENBQUM7UUFDaEYsWUFBTyxHQUFtQyxJQUFJLE9BQU8sRUFBeUIsQ0FBQztRQUUvRSxtQkFBYyxHQUFZLEtBQUssQ0FBQztJQWMyRSxDQUFDOzs7O0lBWnBILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFD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dkYsa0RBQXdDOztJQWdCeEMsbURBQTBEOztJQUcxRCxvREFBNEI7O0lBQzVCLHlDQUFpQzs7SUFHakMsZ0RBQTBCOztJQUMxQixxREFBNEQ7O0lBVmhELDBDQUFzQjs7SUFBRSw0Q0FBMkI7O0lBQUUsNENBQStDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRHJhZ0V2ZW50SW50ZXJmYWNlLCBEcmFnRXZlbnRUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kcmFnLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcEV2ZW50QnVzU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC1ldmVudC1idXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnRXZlbnRMaXN0ZW5lclNlcnZpY2U8VD4ge1xuICBwcml2YXRlIGRyYWdnYWJsZUVsOiBhbnk7XG5cbiAgLy8gY29udGFpbnMgdGhlIHN0YXJ0aW5nIGV2ZW50cyBzdWNoIGFzIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydFxuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW107XG4gIC8vIGNvbnRhaW5zIHRoZSBuZXN0ZWQgZXZlbnRzIHRoYXQgaGFwcGVucyBhZnRlci9pbnNpZGUgdGhlIHN0YXJ0aW5nIGV2ZW50c1xuICAvLyBzdWNoIGFzIHNlbGVjdHN0YXJ0LCBtb3VzZW1vdmUvdG91Y2htb3ZlLCBtb3VzZXVwL3RvdWNoZW5kXG4gIHByaXZhdGUgbmVzdGVkTGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXTtcblxuICBwcml2YXRlIGRyYWdTdGFydDogU3ViamVjdDxEcmFnRXZlbnRJbnRlcmZhY2U8VD4+ID0gbmV3IFN1YmplY3Q8RHJhZ0V2ZW50SW50ZXJmYWNlPFQ+PigpO1xuICBwcml2YXRlIGRyYWdNb3ZlOiBTdWJqZWN0PERyYWdFdmVudEludGVyZmFjZTxUPj4gPSBuZXcgU3ViamVjdDxEcmFnRXZlbnRJbnRlcmZhY2U8VD4+KCk7XG4gIHByaXZhdGUgZHJhZ0VuZDogU3ViamVjdDxEcmFnRXZlbnRJbnRlcmZhY2U8VD4+ID0gbmV3IFN1YmplY3Q8RHJhZ0V2ZW50SW50ZXJmYWNlPFQ+PigpO1xuXG4gIHByaXZhdGUgaGFzRHJhZ1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgZHJhZ1N0YXJ0ZWQoKTogT2JzZXJ2YWJsZTxEcmFnRXZlbnRJbnRlcmZhY2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5kcmFnU3RhcnQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgZHJhZ01vdmVkKCk6IE9ic2VydmFibGU8RHJhZ0V2ZW50SW50ZXJmYWNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ01vdmUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgZHJhZ0VuZGVkKCk6IE9ic2VydmFibGU8RHJhZ0V2ZW50SW50ZXJmYWNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ0VuZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBldmVudEJ1czogRHJhZ0FuZERyb3BFdmVudEJ1c1NlcnZpY2U8VD4pIHt9XG5cbiAgcHJpdmF0ZSBpbml0aWFsUG9zaXRpb246IHsgcGFnZVg6IG51bWJlcjsgcGFnZVk6IG51bWJlciB9O1xuXG4gIC8vIERyYWdnYWJsZSBjb21wb25lbnQgc2V0cyB0aGVzZSBwcm9wZXJ0aWVzOlxuICBwdWJsaWMgZHJhZ0RhdGFUcmFuc2Zlcj86IFQ7XG4gIHB1YmxpYyBncm91cD86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8vIERyYWdnYWJsZUdob3N0IGNvbXBvbmVudCBzZXRzIHRoZXNlIHByb3BlcnRpZXM6XG4gIHB1YmxpYyBnaG9zdEVsZW1lbnQ/OiBhbnk7XG4gIHB1YmxpYyBkcm9wUG9pbnRQb3NpdGlvbj86IHsgcGFnZVg6IG51bWJlcjsgcGFnZVk6IG51bWJlciB9O1xuXG4gIHB1YmxpYyBhdHRhY2hEcmFnTGlzdGVuZXJzKGRyYWdnYWJsZUVsOiBOb2RlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVFbCA9IGRyYWdnYWJsZUVsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW1xuICAgICAgdGhpcy5jdXN0b21EcmFnRXZlbnQodGhpcy5kcmFnZ2FibGVFbCwgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcpLFxuICAgICAgdGhpcy5jdXN0b21EcmFnRXZlbnQodGhpcy5kcmFnZ2FibGVFbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJyksXG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBkZXRhY2hEcmFnTGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnMubWFwKGV2ZW50ID0+IGV2ZW50KCkpO1xuICAgIH1cblxuICAgIC8vIEluIG1vc3QgY2FzZXMsIG9uY2UgdXNlcnMgc3RhcnQgZHJhZ2dpbmcgd2l0aCBtb3VzZWRvd24vdG91Y2hzdGFydCBldmVudHMsXG4gICAgLy8gdGhleSB3aWxsIGVuZCBkcmFnZ2luZyBhdCBvbmUgcG9pbnQgd2l0aCBtb3VzZXVwL3RvdWNoZW5kLlxuICAgIC8vIEhvd2V2ZXIsIHRoZXJlIG1pZ2h0IGJlIGEgZmV3IGNhc2VzIHdoZXJlIG1vdXNlZG93bi90b3VjaHN0YXJ0IGV2ZW50cyBnZXQgcmVnaXN0ZXJlZCxcbiAgICAvLyBidXQgdGhlIGRyYWdnYWJsZSBlbGVtZW50IGdldHMgcmVtb3ZlZCBiZWZvcmUgdXNlciBlbmRzIGRyYWdnaW5nLlxuICAgIC8vIEluIHRoYXQgY2FzZSwgd2UgbmVlZCB0byByZW1vdmUgdGhlIGF0dGFjaGVkIGxpc3RlbmVycyB0aGF0IGhhcHBlbmVkIGR1cmluZyB0aGUgbW91c2Vkb3duL3RvdWNoc3RhcnQgZXZlbnRzLlxuICAgIGlmICh0aGlzLm5lc3RlZExpc3RlbmVycykge1xuICAgICAgdGhpcy5uZXN0ZWRMaXN0ZW5lcnMubWFwKGV2ZW50ID0+IGV2ZW50KCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmF0aXZlRXZlbnRPYmplY3QoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogYW55IHtcbiAgICBpZiAoKDxUb3VjaEV2ZW50PmV2ZW50KS5oYXNPd25Qcm9wZXJ0eSgnY2hhbmdlZFRvdWNoZXMnKSkge1xuICAgICAgcmV0dXJuICg8VG91Y2hFdmVudD5ldmVudCkuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGN1c3RvbURyYWdFdmVudChlbGVtZW50OiBOb2RlLCBzdGFydE9uRXZlbnQ6IHN0cmluZywgbW92ZU9uRXZlbnQ6IHN0cmluZywgZW5kT25FdmVudDogc3RyaW5nKTogKCkgPT4gdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsIHN0YXJ0T25FdmVudCwgKHN0YXJ0RXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAvLyBzYXZlIHRoZSBpbml0aWFsIHBvaW50IHRvIGluaXRpYWxQb3NpdGlvblxuICAgICAgLy8gdGhpcyB3aWxsIGJlIHVzZWQgdG8gY2FsY3VsYXRlIGhvdyBmYXIgdGhlIGRyYWdnYWJsZSBoYXMgYmVlbiBkcmFnZ2VkIGZyb20gaXRzIGluaXRpYWwgcG9zaXRpb25cbiAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0ge1xuICAgICAgICBwYWdlWDogdGhpcy5nZXROYXRpdmVFdmVudE9iamVjdChzdGFydEV2ZW50KS5wYWdlWCxcbiAgICAgICAgcGFnZVk6IHRoaXMuZ2V0TmF0aXZlRXZlbnRPYmplY3Qoc3RhcnRFdmVudCkucGFnZVksXG4gICAgICB9O1xuXG4gICAgICAvLyBJbml0aWFsaXplIG5lc3RlZCBsaXN0ZW5lcnMnIHByb3BlcnR5IHdpdGggYSBuZXcgZW1wdHkgYXJyYXk7XG4gICAgICB0aGlzLm5lc3RlZExpc3RlbmVycyA9IFtdO1xuXG4gICAgICAvLyBUaGlzIGlzIG5lZWRlZCB0byBkaXNhYmxlIHNlbGVjdGlvbiBkdXJpbmcgZHJhZ2dpbmcgKGVzcGVjaWFsbHkgaW4gRURHRS9JRTExKS5cbiAgICAgIHRoaXMubmVzdGVkTGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdzZWxlY3RzdGFydCcsIChzZWxlY3RFdmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICBzZWxlY3RFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGVjdEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgLy8gTGlzdGVuIHRvIG1vdXNlbW92ZS90b3VjaG1vdmUgZXZlbnRzIG91dHNpZGUgb2YgYW5ndWxhciB6b25lLlxuICAgICAgdGhpcy5uZXN0ZWRMaXN0ZW5lcnMucHVzaChcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCBtb3ZlT25FdmVudCwgKG1vdmVFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGlzIG5lZWRlZCBoZXJlIHRvIHByZXZlbnQgbmVzdGVkIGRyYWdnYWJsZXMgZnJvbSBnZXR0aW5nIGRyYWdnZWRcbiAgICAgICAgICAgIC8vIGFsdG9nZXRoZXIuIFdlIHNob3VsZG4ndCB1c2UgRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaGVyZSBhcyB3ZSBhcmUgbGlzdGVuaW5nIHRvIHRoZSBldmVudHNcbiAgICAgICAgICAgIC8vIG9uIHRoZSBnbG9iYWwgZWxlbWVudCBsZXZlbC5cblxuICAgICAgICAgICAgLy8gV2l0aCBFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSwgaXQgcmVnaXN0ZXJzIHRoZSBldmVudHMgc2VudCBmcm9tIHRoZSBpbm5lciBtb3N0IGRyYWdnYWJsZVxuICAgICAgICAgICAgLy8gZmlyc3QuIFRoZW4gaW1tZWRpYXRlbHkgYWZ0ZXIgdGhhdCwgaXQgc3RvcHMgbGlzdGVuaW5nIHRvIHRoZSBzYW1lIHR5cGUgb2YgZXZlbnRzIG9uIHRoZSBzYW1lXG4gICAgICAgICAgICAvLyBlbGVtZW50LiBTbyB0aGlzIHdpbGwgaGVscCB1cyB0byBub3QgcmVnaXN0ZXIgdGhlIHNhbWUgZXZlbnRzIHRoYXQgd291bGQgY29tZSBmcm9tIHRoZSBwYXJlbnRcbiAgICAgICAgICAgIC8vIGxldmVsIGRyYWdnYWJsZXMgZXZlbnR1YWxseS5cblxuICAgICAgICAgICAgbW92ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzRHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5oYXNEcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIEZpcmUgXCJkcmFnc3RhcnRcIlxuICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChtb3ZlRXZlbnQsIERyYWdFdmVudFR5cGUuRFJBR19TVEFSVCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBGaXJlIFwiZHJhZ21vdmVcIlxuICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChtb3ZlRXZlbnQsIERyYWdFdmVudFR5cGUuRFJBR19NT1ZFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIExpc3RlbiB0byBtb3VzZXVwL3RvdWNoZW5kIGV2ZW50cy5cbiAgICAgIHRoaXMubmVzdGVkTGlzdGVuZXJzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsIGVuZE9uRXZlbnQsIChlbmRFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNEcmFnU3RhcnRlZCkge1xuICAgICAgICAgICAgLy8gRmlyZSBcImRyYWdlbmRcIiBvbmx5IGlmIGRyYWdzdGFydCBpcyByZWdpc3RlcmVkXG4gICAgICAgICAgICB0aGlzLmhhc0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChlbmRFdmVudCwgRHJhZ0V2ZW50VHlwZS5EUkFHX0VORCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2UgbXVzdCByZW1vdmUgdGhlIHRoZSBuZXN0ZWQgbGlzdGVuZXJzIGV2ZXJ5IHRpbWUgZHJhZyBjb21wbGV0ZXMuXG4gICAgICAgICAgaWYgKHRoaXMubmVzdGVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm5lc3RlZExpc3RlbmVycy5tYXAoZXZlbnQgPT4gZXZlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYnJvYWRjYXN0KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgZXZlbnRUeXBlOiBEcmFnRXZlbnRUeXBlKTogdm9pZCB7XG4gICAgY29uc3QgZHJhZ0V2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4gPSB0aGlzLmdlbmVyYXRlRHJhZ0V2ZW50KGV2ZW50LCBldmVudFR5cGUpO1xuXG4gICAgc3dpdGNoIChkcmFnRXZlbnQudHlwZSkge1xuICAgICAgY2FzZSBEcmFnRXZlbnRUeXBlLkRSQUdfU1RBUlQ6XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0Lm5leHQoZHJhZ0V2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERyYWdFdmVudFR5cGUuRFJBR19NT1ZFOlxuICAgICAgICB0aGlzLmRyYWdNb3ZlLm5leHQoZHJhZ0V2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERyYWdFdmVudFR5cGUuRFJBR19FTkQ6XG4gICAgICAgIHRoaXMuZHJhZ0VuZC5uZXh0KGRyYWdFdmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBzZXQgYWZ0ZXIgdGhleSBhcmUgYnJvYWRjYXN0ZWQgdG8gdGhlIERyYWdnYWJsZUdob3N0IGNvbXBvbmVudC5cbiAgICBkcmFnRXZlbnQuZ2hvc3RFbGVtZW50ID0gdGhpcy5naG9zdEVsZW1lbnQ7XG4gICAgZHJhZ0V2ZW50LmRyb3BQb2ludFBvc2l0aW9uID0gdGhpcy5kcm9wUG9pbnRQb3NpdGlvbjtcblxuICAgIHRoaXMuZXZlbnRCdXMuYnJvYWRjYXN0KGRyYWdFdmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlRHJhZ0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgZXZlbnRUeXBlOiBEcmFnRXZlbnRUeXBlKTogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+IHtcbiAgICBjb25zdCBuYXRpdmVFdmVudDogYW55ID0gdGhpcy5nZXROYXRpdmVFdmVudE9iamVjdChldmVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgZHJhZ1Bvc2l0aW9uOiB7XG4gICAgICAgIHBhZ2VYOiBuYXRpdmVFdmVudC5wYWdlWCxcbiAgICAgICAgcGFnZVk6IG5hdGl2ZUV2ZW50LnBhZ2VZLFxuICAgICAgICBtb3ZlWDogbmF0aXZlRXZlbnQucGFnZVggLSB0aGlzLmluaXRpYWxQb3NpdGlvbi5wYWdlWCxcbiAgICAgICAgbW92ZVk6IG5hdGl2ZUV2ZW50LnBhZ2VZIC0gdGhpcy5pbml0aWFsUG9zaXRpb24ucGFnZVksXG4gICAgICB9LFxuICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICBkcmFnRGF0YVRyYW5zZmVyOiB0aGlzLmRyYWdEYXRhVHJhbnNmZXIsXG4gICAgICBnaG9zdEVsZW1lbnQ6IHRoaXMuZ2hvc3RFbGVtZW50LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==