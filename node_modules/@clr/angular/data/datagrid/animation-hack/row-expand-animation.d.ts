import { ElementRef, Renderer2 } from '@angular/core';
import { Expand } from '../../../utils/expand/providers/expand';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
export declare class DatagridRowExpandAnimation {
    private el;
    private domAdapter;
    private renderer;
    private expand;
    constructor(el: ElementRef, domAdapter: DomAdapter, renderer: Renderer2, expand: Expand);
    private running;
    private oldHeight;
    private animate;
    private run;
}
