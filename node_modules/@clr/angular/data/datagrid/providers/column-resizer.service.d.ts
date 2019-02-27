import { ElementRef } from '@angular/core';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { ClrDragEvent } from '../../../utils/drag-and-drop/drag-event';
import { DatagridRenderOrganizer } from '../render/render-organizer';
export declare class ColumnResizerService {
    private el;
    private domAdapter;
    private organizer;
    constructor(el: ElementRef, domAdapter: DomAdapter, organizer: DatagridRenderOrganizer);
    private widthBeforeResize;
    private _resizedBy;
    readonly resizedBy: number;
    isWithinMaxResizeRange: boolean;
    readonly minColumnWidth: number;
    readonly maxResizeRange: number;
    startResize(): void;
    endResize(): void;
    readonly widthAfterResize: number;
    calculateResize(event: ClrDragEvent<any>): void;
}
