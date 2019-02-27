import { ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
import { ColumnResizerService } from '../providers/column-resizer.service';
import { DatagridRenderOrganizer } from './render-organizer';
export declare class DatagridHeaderRenderer implements OnDestroy {
    private el;
    private renderer;
    private organizer;
    private domAdapter;
    private columnResizerService;
    constructor(el: ElementRef, renderer: Renderer2, organizer: DatagridRenderOrganizer, domAdapter: DomAdapter, columnResizerService: ColumnResizerService);
    resizeEmitter: EventEmitter<number>;
    /**
     * Indicates if the column has a strict width, so it doesn't shrink or expand based on the content.
     */
    strictWidth: number;
    private widthSet;
    private subscriptions;
    ngOnDestroy(): void;
    private clearWidth;
    private detectStrictWidth;
    computeWidth(): number;
    setWidth(width: number): void;
}
