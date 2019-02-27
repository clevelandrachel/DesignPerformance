import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { DragEventInterface } from '../interfaces/drag-event.interface';
export declare class DraggableSnapshotService<T> {
    private domAdapter;
    constructor(domAdapter: DomAdapter);
    private draggableElClientRect;
    private snapshotDragEvent;
    capture(el: Node, event: DragEventInterface<T>): void;
    discard(): void;
    readonly hasDraggableState: boolean;
    readonly clientRect: ClientRect;
    readonly dragEvent: DragEventInterface<T>;
}
