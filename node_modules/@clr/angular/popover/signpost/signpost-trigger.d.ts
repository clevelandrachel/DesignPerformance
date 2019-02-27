import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
export declare class ClrSignpostTrigger implements OnDestroy {
    private ifOpenService;
    private renderer;
    private el;
    private subscriptions;
    constructor(ifOpenService: IfOpenService, renderer: Renderer2, el: ElementRef);
    ngOnDestroy(): void;
    /**********
     *
     * @description
     * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
     */
    onSignpostTriggerClick(event: Event): void;
}
