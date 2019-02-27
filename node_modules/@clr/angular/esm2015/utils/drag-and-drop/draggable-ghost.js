/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, NgZone, Optional, Renderer2 } from '@angular/core';
import { DragEventListenerService } from './providers/drag-event-listener.service';
import { DraggableSnapshotService } from './providers/draggable-snapshot.service';
/**
 * @template T
 */
export class ClrDraggableGhost {
    /**
     * @param {?} el
     * @param {?} dragEventListener
     * @param {?} draggableSnapshot
     * @param {?} renderer
     * @param {?} ngZone
     */
    constructor(el, dragEventListener, draggableSnapshot, renderer, ngZone) {
        this.el = el;
        this.dragEventListener = dragEventListener;
        this.draggableSnapshot = draggableSnapshot;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.subscriptions = [];
        this.leaveAnimConfig = { value: 0, params: { top: '0px', left: '0px' } };
        if (!this.dragEventListener || !this.draggableSnapshot) {
            throw new Error('The clr-draggable-ghost component can only be used inside of a clrDraggable directive.');
        }
        this.draggableGhostEl = this.el.nativeElement;
        // Need to use Renderer2 as it runs outside of NgZone
        this.renderer.addClass(this.draggableGhostEl, 'draggable-ghost');
        // Register the ghost element in DragEventListener to pass in a ClrDragEvent.
        this.dragEventListener.ghostElement = this.draggableGhostEl;
        // Default ghost size gets the size of ClrDraggable element.
        this.setDefaultGhostSize(this.draggableGhostEl);
        /** @type {?} */
        const offset = {
            top: this.draggableSnapshot.hasDraggableState
                ? this.draggableSnapshot.dragEvent.dragPosition.pageY - this.draggableSnapshot.clientRect.top
                : 0,
            left: this.draggableSnapshot.hasDraggableState
                ? this.draggableSnapshot.dragEvent.dragPosition.pageX - this.draggableSnapshot.clientRect.left
                : 0,
        };
        /** @type {?} */
        let isAnimationConfigured = false;
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event) => {
            // On the first drag move event, we configure the animation as it's dependent on the first drag event.
            if (!isAnimationConfigured) {
                if (this.draggableSnapshot.hasDraggableState) {
                    this.animateToOnLeave(`${this.draggableSnapshot.clientRect.top}px`, `${this.draggableSnapshot.clientRect.left}px`);
                }
                else {
                    this.animateToOnLeave(`${event.dragPosition.pageY}px`, `${event.dragPosition.pageX}px`);
                }
                isAnimationConfigured = true;
            }
            // Position the draggable ghost.
            /** @type {?} */
            const topLeftPosition = this.findTopLeftPosition(event.dragPosition, offset);
            this.setPositionStyle(this.draggableGhostEl, topLeftPosition.pageX, topLeftPosition.pageY);
            this.dragEventListener.dropPointPosition = this.findDropPointPosition(topLeftPosition);
        }));
    }
    /**
     * @param {?} el
     * @return {?}
     */
    setDefaultGhostSize(el) {
        if (this.draggableSnapshot.hasDraggableState) {
            this.setSizeStyle(el, this.draggableSnapshot.clientRect.width, this.draggableSnapshot.clientRect.height);
        }
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    animateToOnLeave(top, left) {
        this.ngZone.run(() => {
            this.leaveAnimConfig = { value: 0, params: { top: top, left: left } };
        });
    }
    /**
     * @param {?} dragPosition
     * @param {?} offset
     * @return {?}
     */
    findTopLeftPosition(dragPosition, offset) {
        return { pageX: dragPosition.pageX - offset.left, pageY: dragPosition.pageY - offset.top };
    }
    /**
     * @param {?} topLeftPosition
     * @return {?}
     */
    findDropPointPosition(topLeftPosition) {
        if (this.draggableSnapshot.hasDraggableState) {
            return {
                pageX: topLeftPosition.pageX + this.draggableSnapshot.clientRect.width / 2,
                pageY: topLeftPosition.pageY + this.draggableSnapshot.clientRect.height / 2,
            };
        }
        else {
            return topLeftPosition;
        }
    }
    /**
     * @param {?} el
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    setSizeStyle(el, width, height) {
        this.renderer.setStyle(el, 'width', `${width}px`);
        this.renderer.setStyle(el, 'height', `${height}px`);
    }
    /**
     * @param {?} el
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    setPositionStyle(el, left, top) {
        this.renderer.setStyle(el, 'left', `${left}px`);
        this.renderer.setStyle(el, 'top', `${top}px`);
        this.renderer.setStyle(el, 'visibility', 'visible');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
ClrDraggableGhost.decorators = [
    { type: Component, args: [{
                selector: 'clr-draggable-ghost',
                template: `<ng-content></ng-content>`,
                animations: [
                    trigger('leaveAnimation', [
                        transition(':leave', [
                            style({ left: '*', top: '*' }),
                            animate('0.2s ease-in-out', style({ top: '{{top}}', left: '{{left}}' })),
                        ]),
                    ]),
                ]
            }] }
];
/** @nocollapse */
ClrDraggableGhost.ctorParameters = () => [
    { type: ElementRef },
    { type: DragEventListenerService, decorators: [{ type: Optional }] },
    { type: DraggableSnapshotService, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: NgZone }
];
ClrDraggableGhost.propDecorators = {
    leaveAnimConfig: [{ type: HostBinding, args: ['@leaveAnimation',] }]
};
if (false) {
    /** @type {?} */
    ClrDraggableGhost.prototype.draggableGhostEl;
    /** @type {?} */
    ClrDraggableGhost.prototype.subscriptions;
    /** @type {?} */
    ClrDraggableGhost.prototype.leaveAnimConfig;
    /** @type {?} */
    ClrDraggableGhost.prototype.el;
    /** @type {?} */
    ClrDraggableGhost.prototype.dragEventListener;
    /** @type {?} */
    ClrDraggableGhost.prototype.draggableSnapshot;
    /** @type {?} */
    ClrDraggableGhost.prototype.renderer;
    /** @type {?} */
    ClrDraggableGhost.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWdob3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9kcmFnZ2FibGUtZ2hvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQWEsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQXVCbEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFPNUIsWUFDVSxFQUFjLEVBQ0YsaUJBQThDLEVBQzlDLGlCQUE4QyxFQUMxRCxRQUFtQixFQUNuQixNQUFjO1FBSmQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNGLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUMxRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUaEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRVgsb0JBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQVNsRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsd0ZBQXdGLENBQUMsQ0FBQztTQUMzRztR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MDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgTmdab25lLCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEcmFnRXZlbnRJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMvZHJhZy1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZHJhZy1ldmVudC1saXN0ZW5lci5zZXJ2aWNlJztcbmltcG9ydCB7IERyYWdnYWJsZVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RyYWdnYWJsZS1zbmFwc2hvdC5zZXJ2aWNlJztcblxudHlwZSBQYWdlUG9zaXRpb24gPSB7XG4gIHBhZ2VYOiBudW1iZXI7XG4gIHBhZ2VZOiBudW1iZXI7XG59O1xudHlwZSBPZmZzZXRQb3NpdGlvbiA9IHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci1kcmFnZ2FibGUtZ2hvc3QnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbGVhdmVBbmltYXRpb24nLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICAgIHN0eWxlKHsgbGVmdDogJyonLCB0b3A6ICcqJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4ycyBlYXNlLWluLW91dCcsIHN0eWxlKHsgdG9wOiAne3t0b3B9fScsIGxlZnQ6ICd7e2xlZnR9fScgfSkpLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyYWdnYWJsZUdob3N0PFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkcmFnZ2FibGVHaG9zdEVsOiBhbnk7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIEBIb3N0QmluZGluZygnQGxlYXZlQW5pbWF0aW9uJykgbGVhdmVBbmltQ29uZmlnID0geyB2YWx1ZTogMCwgcGFyYW1zOiB7IHRvcDogJzBweCcsIGxlZnQ6ICcwcHgnIH0gfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhZ0V2ZW50TGlzdGVuZXI6IERyYWdFdmVudExpc3RlbmVyU2VydmljZTxUPixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRyYWdnYWJsZVNuYXBzaG90OiBEcmFnZ2FibGVTbmFwc2hvdFNlcnZpY2U8VD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmRyYWdFdmVudExpc3RlbmVyIHx8ICF0aGlzLmRyYWdnYWJsZVNuYXBzaG90KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjbHItZHJhZ2dhYmxlLWdob3N0IGNvbXBvbmVudCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBhIGNsckRyYWdnYWJsZSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVHaG9zdEVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgLy8gTmVlZCB0byB1c2UgUmVuZGVyZXIyIGFzIGl0IHJ1bnMgb3V0c2lkZSBvZiBOZ1pvbmVcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ2dhYmxlR2hvc3RFbCwgJ2RyYWdnYWJsZS1naG9zdCcpO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGdob3N0IGVsZW1lbnQgaW4gRHJhZ0V2ZW50TGlzdGVuZXIgdG8gcGFzcyBpbiBhIENsckRyYWdFdmVudC5cbiAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmdob3N0RWxlbWVudCA9IHRoaXMuZHJhZ2dhYmxlR2hvc3RFbDtcblxuICAgIC8vIERlZmF1bHQgZ2hvc3Qgc2l6ZSBnZXRzIHRoZSBzaXplIG9mIENsckRyYWdnYWJsZSBlbGVtZW50LlxuICAgIHRoaXMuc2V0RGVmYXVsdEdob3N0U2l6ZSh0aGlzLmRyYWdnYWJsZUdob3N0RWwpO1xuXG4gICAgY29uc3Qgb2Zmc2V0OiBPZmZzZXRQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5oYXNEcmFnZ2FibGVTdGF0ZVxuICAgICAgICA/IHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuZHJhZ0V2ZW50LmRyYWdQb3NpdGlvbi5wYWdlWSAtIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC50b3BcbiAgICAgICAgOiAwLFxuICAgICAgbGVmdDogdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5oYXNEcmFnZ2FibGVTdGF0ZVxuICAgICAgICA/IHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuZHJhZ0V2ZW50LmRyYWdQb3NpdGlvbi5wYWdlWCAtIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC5sZWZ0XG4gICAgICAgIDogMCxcbiAgICB9O1xuXG4gICAgbGV0IGlzQW5pbWF0aW9uQ29uZmlndXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdNb3ZlZC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgICAgLy8gT24gdGhlIGZpcnN0IGRyYWcgbW92ZSBldmVudCwgd2UgY29uZmlndXJlIHRoZSBhbmltYXRpb24gYXMgaXQncyBkZXBlbmRlbnQgb24gdGhlIGZpcnN0IGRyYWcgZXZlbnQuXG4gICAgICAgIGlmICghaXNBbmltYXRpb25Db25maWd1cmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuaGFzRHJhZ2dhYmxlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVRvT25MZWF2ZShcbiAgICAgICAgICAgICAgYCR7dGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LnRvcH1weGAsXG4gICAgICAgICAgICAgIGAke3RoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC5sZWZ0fXB4YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlVG9PbkxlYXZlKGAke2V2ZW50LmRyYWdQb3NpdGlvbi5wYWdlWX1weGAsIGAke2V2ZW50LmRyYWdQb3NpdGlvbi5wYWdlWH1weGApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc0FuaW1hdGlvbkNvbmZpZ3VyZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGRyYWdnYWJsZSBnaG9zdC5cbiAgICAgICAgY29uc3QgdG9wTGVmdFBvc2l0aW9uOiBQYWdlUG9zaXRpb24gPSB0aGlzLmZpbmRUb3BMZWZ0UG9zaXRpb24oZXZlbnQuZHJhZ1Bvc2l0aW9uLCBvZmZzZXQpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uU3R5bGUodGhpcy5kcmFnZ2FibGVHaG9zdEVsLCB0b3BMZWZ0UG9zaXRpb24ucGFnZVgsIHRvcExlZnRQb3NpdGlvbi5wYWdlWSk7XG4gICAgICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZHJvcFBvaW50UG9zaXRpb24gPSB0aGlzLmZpbmREcm9wUG9pbnRQb3NpdGlvbih0b3BMZWZ0UG9zaXRpb24pO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0R2hvc3RTaXplKGVsOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuaGFzRHJhZ2dhYmxlU3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U2l6ZVN0eWxlKGVsLCB0aGlzLmRyYWdnYWJsZVNuYXBzaG90LmNsaWVudFJlY3Qud2lkdGgsIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZVRvT25MZWF2ZSh0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubGVhdmVBbmltQ29uZmlnID0geyB2YWx1ZTogMCwgcGFyYW1zOiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH0gfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFRvcExlZnRQb3NpdGlvbihkcmFnUG9zaXRpb246IFBhZ2VQb3NpdGlvbiwgb2Zmc2V0OiBPZmZzZXRQb3NpdGlvbik6IFBhZ2VQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHsgcGFnZVg6IGRyYWdQb3NpdGlvbi5wYWdlWCAtIG9mZnNldC5sZWZ0LCBwYWdlWTogZHJhZ1Bvc2l0aW9uLnBhZ2VZIC0gb2Zmc2V0LnRvcCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kRHJvcFBvaW50UG9zaXRpb24odG9wTGVmdFBvc2l0aW9uOiBQYWdlUG9zaXRpb24pOiBQYWdlUG9zaXRpb24ge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZVNuYXBzaG90Lmhhc0RyYWdnYWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlWDogdG9wTGVmdFBvc2l0aW9uLnBhZ2VYICsgdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LndpZHRoIC8gMixcbiAgICAgICAgcGFnZVk6IHRvcExlZnRQb3NpdGlvbi5wYWdlWSArIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC5oZWlnaHQgLyAyLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRvcExlZnRQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFNpemVTdHlsZShlbDogTm9kZSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0UG9zaXRpb25TdHlsZShlbDogTm9kZSwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICdsZWZ0JywgYCR7bGVmdH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0b3AnLCBgJHt0b3B9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19