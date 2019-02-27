import { Renderer2 } from '@angular/core';
import { ClrDragEvent } from '../../utils/drag-and-drop/drag-event';
import { ColumnResizerService } from './providers/column-resizer.service';
import { TableSizeService } from './providers/table-size.service';
export declare class ClrDatagridColumnSeparator {
    private columnResizerService;
    private renderer;
    private tableSizeService;
    private document;
    columnSeparatorId: string;
    constructor(columnResizerService: ColumnResizerService, renderer: Renderer2, tableSizeService: TableSizeService, document: any, columnSeparatorId: string);
    showTracker(resizeTrackerEl: HTMLElement): void;
    moveTracker(event: ClrDragEvent<any>, resizeTrackerEl: HTMLElement): void;
    hideTracker(resizeTrackerEl: HTMLElement): void;
    private redFlagTracker;
}
