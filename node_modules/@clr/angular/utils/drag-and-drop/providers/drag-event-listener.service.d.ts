import { NgZone, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { DragEventInterface } from '../interfaces/drag-event.interface';
import { DragAndDropEventBusService } from './drag-and-drop-event-bus.service';
export declare class DragEventListenerService<T> {
    private ngZone;
    private renderer;
    private eventBus;
    private draggableEl;
    private listeners;
    private nestedListeners;
    private dragStart;
    private dragMove;
    private dragEnd;
    private hasDragStarted;
    readonly dragStarted: Observable<DragEventInterface<T>>;
    readonly dragMoved: Observable<DragEventInterface<T>>;
    readonly dragEnded: Observable<DragEventInterface<T>>;
    constructor(ngZone: NgZone, renderer: Renderer2, eventBus: DragAndDropEventBusService<T>);
    private initialPosition;
    dragDataTransfer?: T;
    group?: string | string[];
    ghostElement?: any;
    dropPointPosition?: {
        pageX: number;
        pageY: number;
    };
    attachDragListeners(draggableEl: Node): void;
    detachDragListeners(): void;
    private getNativeEventObject;
    private customDragEvent;
    private broadcast;
    private generateDragEvent;
}
