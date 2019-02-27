import { AfterViewInit, ElementRef, Injector, OnDestroy, Renderer2 } from '@angular/core';
import { FocusTrapTracker } from './focus-trap-tracker.service';
export declare class FocusTrapDirective implements AfterViewInit, OnDestroy {
    private el;
    private injector;
    private focusTrapsTracker;
    private renderer;
    private platformId;
    private previousActiveElement;
    private document;
    private topReboundEl;
    private bottomReboundEl;
    constructor(el: ElementRef, injector: Injector, focusTrapsTracker: FocusTrapTracker, renderer: Renderer2, platformId: Object);
    onFocusIn(event: any): void;
    private createFocusableOffScreenEl;
    private addReboundEls;
    private removeReboundEls;
    setPreviousFocus(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
