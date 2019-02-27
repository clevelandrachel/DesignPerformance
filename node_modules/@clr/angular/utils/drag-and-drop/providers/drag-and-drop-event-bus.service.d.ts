import { Observable } from 'rxjs';
import { DragEventInterface } from '../interfaces/drag-event.interface';
export declare class DragAndDropEventBusService<T> {
    private dragStart;
    private dragMove;
    private dragEnd;
    private drop;
    readonly dragStarted: Observable<DragEventInterface<T>>;
    readonly dragMoved: Observable<DragEventInterface<T>>;
    readonly dragEnded: Observable<DragEventInterface<T>>;
    readonly dropped: Observable<DragEventInterface<T>>;
    broadcast(event: DragEventInterface<T>): void;
}
