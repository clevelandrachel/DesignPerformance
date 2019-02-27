import { Renderer2 } from '@angular/core';
import { DragEventListenerService } from './drag-event-listener.service';
export declare class DragHandleRegistrarService<T> {
    private dragEventListener;
    private renderer;
    private _customHandleEl;
    private _defaultHandleEl;
    defaultHandleEl: Node;
    constructor(dragEventListener: DragEventListenerService<T>, renderer: Renderer2);
    private makeElementHandle;
    readonly customHandleEl: any;
    registerCustomHandle(el: Node): void;
    unregisterCustomHandle(): void;
}
