/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ComponentFactoryResolver, ContentChild, Directive, ElementRef, EventEmitter, Injector, Output, ViewContainerRef, } from '@angular/core';
import { Input } from '@angular/core';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { ClrDragEvent } from '../drag-event';
import { ClrDraggableGhost } from '../draggable-ghost';
import { ClrIfDragged } from '../if-dragged';
import { DragEventListenerService } from '../providers/drag-event-listener.service';
import { DragHandleRegistrarService } from '../providers/drag-handle-registrar.service';
import { DraggableSnapshotService } from '../providers/draggable-snapshot.service';
import { GlobalDragModeService } from '../providers/global-drag-mode.service';
/**
 * @template T
 */
export class ClrDraggable {
    /**
     * @param {?} el
     * @param {?} dragEventListener
     * @param {?} dragHandleRegistrar
     * @param {?} viewContainerRef
     * @param {?} cfr
     * @param {?} injector
     * @param {?} draggableSnapshot
     * @param {?} globalDragMode
     */
    constructor(el, dragEventListener, dragHandleRegistrar, viewContainerRef, cfr, injector, draggableSnapshot, globalDragMode) {
        this.el = el;
        this.dragEventListener = dragEventListener;
        this.dragHandleRegistrar = dragHandleRegistrar;
        this.viewContainerRef = viewContainerRef;
        this.cfr = cfr;
        this.injector = injector;
        this.draggableSnapshot = draggableSnapshot;
        this.globalDragMode = globalDragMode;
        this.subscriptions = [];
        this.dragOn = false;
        this.dragStartEmitter = new EventEmitter();
        this.dragMoveEmitter = new EventEmitter();
        this.dragEndEmitter = new EventEmitter();
        this.draggableEl = this.el.nativeElement;
        this.componentFactory = this.cfr.resolveComponentFactory(ClrDraggableGhost);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dataTransfer(value) {
        this.dragEventListener.dragDataTransfer = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set group(value) {
        this.dragEventListener.group = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    createDefaultGhost(event) {
        this.draggableSnapshot.capture(this.draggableEl, event);
        // NOTE: The default ghost element will appear
        // next to the clrDraggable in the DOM as a sibling element.
        this.viewContainerRef.createComponent(this.componentFactory, 0, this.injector, [
            [this.draggableEl.cloneNode(true)],
        ]);
    }
    /**
     * @return {?}
     */
    destroyDefaultGhost() {
        this.viewContainerRef.clear();
        this.draggableSnapshot.discard();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.dragHandleRegistrar.defaultHandleEl = this.draggableEl;
        this.subscriptions.push(this.dragEventListener.dragStarted.subscribe((event) => {
            this.globalDragMode.enter();
            this.dragOn = true;
            if (!this.customGhost) {
                this.createDefaultGhost(event);
            }
            this.dragStartEmitter.emit(new ClrDragEvent(event));
        }));
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe((event) => {
            this.dragMoveEmitter.emit(new ClrDragEvent(event));
        }));
        this.subscriptions.push(this.dragEventListener.dragEnded.subscribe((event) => {
            this.globalDragMode.exit();
            this.dragOn = false;
            if (!this.customGhost) {
                this.destroyDefaultGhost();
            }
            this.dragEndEmitter.emit(new ClrDragEvent(event));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
        this.dragEventListener.detachDragListeners();
    }
}
ClrDraggable.decorators = [
    { type: Directive, args: [{
                selector: '[clrDraggable]',
                providers: [
                    DragEventListenerService,
                    DragHandleRegistrarService,
                    DraggableSnapshotService,
                    GlobalDragModeService,
                    DomAdapter,
                ],
                host: { '[class.draggable]': 'true', '[class.being-dragged]': 'dragOn' },
            },] }
];
/** @nocollapse */
ClrDraggable.ctorParameters = () => [
    { type: ElementRef },
    { type: DragEventListenerService },
    { type: DragHandleRegistrarService },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: DraggableSnapshotService },
    { type: GlobalDragModeService }
];
ClrDraggable.propDecorators = {
    customGhost: [{ type: ContentChild, args: [ClrIfDragged,] }],
    dataTransfer: [{ type: Input, args: ['clrDraggable',] }],
    group: [{ type: Input, args: ['clrGroup',] }],
    dragStartEmitter: [{ type: Output, args: ['clrDragStart',] }],
    dragMoveEmitter: [{ type: Output, args: ['clrDragMove',] }],
    dragEndEmitter: [{ type: Output, args: ['clrDragEnd',] }]
};
if (false) {
    /** @type {?} */
    ClrDraggable.prototype.draggableEl;
    /** @type {?} */
    ClrDraggable.prototype.subscriptions;
    /** @type {?} */
    ClrDraggable.prototype.componentFactory;
    /** @type {?} */
    ClrDraggable.prototype.dragOn;
    /** @type {?} */
    ClrDraggable.prototype.customGhost;
    /** @type {?} */
    ClrDraggable.prototype.dragStartEmitter;
    /** @type {?} */
    ClrDraggable.prototype.dragMoveEmitter;
    /** @type {?} */
    ClrDraggable.prototype.dragEndEmitter;
    /** @type {?} */
    ClrDraggable.prototype.el;
    /** @type {?} */
    ClrDraggable.prototype.dragEventListener;
    /** @type {?} */
    ClrDraggable.prototype.dragHandleRegistrar;
    /** @type {?} */
    ClrDraggable.prototype.viewContainerRef;
    /** @type {?} */
    ClrDraggable.prototype.cfr;
    /** @type {?} */
    ClrDraggable.prototype.injector;
    /** @type {?} */
    ClrDraggable.prototype.draggableSnapshot;
    /** @type {?} */
    ClrDraggable.prototype.globalDragMode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9kcmFnZ2FibGUvZHJhZ2dhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFFBQVEsRUFFUixNQUFNLEVBQ04sZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQWE5RSxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7Ozs7SUFNdkIsWUFDVSxFQUFjLEVBQ2QsaUJBQThDLEVBQzlDLG1CQUFrRCxFQUNsRCxnQkFBa0MsRUFDbEMsR0FBNkIsRUFDN0IsUUFBa0IsRUFDbEIsaUJBQThDLEVBQzlDLGNBQXFDO1FBUHJDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCO1FBQzlDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBK0I7UUFDbEQscUJB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OztJQTBCekQsd0NBQTZGOztJQUM3Rix1Q0FBMkY7O0lBQzNGLHNDQUF5Rjs7SUF6Q3ZGLDBCQUFzQjs7SUFDdEIseUNBQXNEOztJQUN0RCwyQ0FBMEQ7O0lBQzFELHdDQUEwQzs7SUFDMUMsMkJBQXFDOztJQUNyQyxnQ0FBMEI7O0lBQzFCLHlDQUFzRDs7SUFDdEQsc0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vZG9tLWFkYXB0ZXIvZG9tLWFkYXB0ZXInO1xuaW1wb3J0IHsgQ2xyRHJhZ0V2ZW50IH0gZnJvbSAnLi4vZHJhZy1ldmVudCc7XG5pbXBvcnQgeyBDbHJEcmFnZ2FibGVHaG9zdCB9IGZyb20gJy4uL2RyYWdnYWJsZS1naG9zdCc7XG5pbXBvcnQgeyBDbHJJZkRyYWdnZWQgfSBmcm9tICcuLi9pZi1kcmFnZ2VkJztcbmltcG9ydCB7IERyYWdFdmVudEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZHJhZy1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2RyYWctZXZlbnQtbGlzdGVuZXIuc2VydmljZSc7XG5pbXBvcnQgeyBEcmFnSGFuZGxlUmVnaXN0cmFyU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9kcmFnLWhhbmRsZS1yZWdpc3RyYXIuc2VydmljZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVTbmFwc2hvdFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZHJhZ2dhYmxlLXNuYXBzaG90LnNlcnZpY2UnO1xuaW1wb3J0IHsgR2xvYmFsRHJhZ01vZGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2dsb2JhbC1kcmFnLW1vZGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbHJEcmFnZ2FibGVdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlLFxuICAgIERyYWdIYW5kbGVSZWdpc3RyYXJTZXJ2aWNlLFxuICAgIERyYWdnYWJsZVNuYXBzaG90U2VydmljZSxcbiAgICBHbG9iYWxEcmFnTW9kZVNlcnZpY2UsXG4gICAgRG9tQWRhcHRlcixcbiAgXSxcbiAgaG9zdDogeyAnW2NsYXNzLmRyYWdnYWJsZV0nOiAndHJ1ZScsICdbY2xhc3MuYmVpbmctZHJhZ2dlZF0nOiAnZHJhZ09uJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJEcmFnZ2FibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRyYWdnYWJsZUVsOiBhbnk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENsckRyYWdnYWJsZUdob3N0PFQ+PjtcbiAgcHVibGljIGRyYWdPbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkcmFnRXZlbnRMaXN0ZW5lcjogRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlPFQ+LFxuICAgIHByaXZhdGUgZHJhZ0hhbmRsZVJlZ2lzdHJhcjogRHJhZ0hhbmRsZVJlZ2lzdHJhclNlcnZpY2U8VD4sXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBkcmFnZ2FibGVTbmFwc2hvdDogRHJhZ2dhYmxlU25hcHNob3RTZXJ2aWNlPFQ+LFxuICAgIHByaXZhdGUgZ2xvYmFsRHJhZ01vZGU6IEdsb2JhbERyYWdNb2RlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmRyYWdnYWJsZUVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PENsckRyYWdnYWJsZUdob3N0PFQ+PihDbHJEcmFnZ2FibGVHaG9zdCk7XG4gIH1cblxuICBAQ29udGVudENoaWxkKENscklmRHJhZ2dlZCkgY3VzdG9tR2hvc3Q6IENscklmRHJhZ2dlZDxUPjtcblxuICBASW5wdXQoJ2NsckRyYWdnYWJsZScpXG4gIHNldCBkYXRhVHJhbnNmZXIodmFsdWU6IFQpIHtcbiAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdEYXRhVHJhbnNmZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyR3JvdXAnKVxuICBzZXQgZ3JvdXAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kcmFnRXZlbnRMaXN0ZW5lci5ncm91cCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEZWZhdWx0R2hvc3QoZXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikge1xuICAgIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2FwdHVyZSh0aGlzLmRyYWdnYWJsZUVsLCBldmVudCk7XG4gICAgLy8gTk9URTogVGhlIGRlZmF1bHQgZ2hvc3QgZWxlbWVudCB3aWxsIGFwcGVhclxuICAgIC8vIG5leHQgdG8gdGhlIGNsckRyYWdnYWJsZSBpbiB0aGUgRE9NIGFzIGEgc2libGluZyBlbGVtZW50LlxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5jb21wb25lbnRGYWN0b3J5LCAwLCB0aGlzLmluamVjdG9yLCBbXG4gICAgICBbdGhpcy5kcmFnZ2FibGVFbC5jbG9uZU5vZGUodHJ1ZSldLFxuICAgIF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95RGVmYXVsdEdob3N0KCkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuZGlzY2FyZCgpO1xuICB9XG5cbiAgQE91dHB1dCgnY2xyRHJhZ1N0YXJ0JykgZHJhZ1N0YXJ0RW1pdHRlcjogRXZlbnRFbWl0dGVyPENsckRyYWdFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2NsckRyYWdNb3ZlJykgZHJhZ01vdmVFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnY2xyRHJhZ0VuZCcpIGRyYWdFbmRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8Q2xyRHJhZ0V2ZW50PFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlUmVnaXN0cmFyLmRlZmF1bHRIYW5kbGVFbCA9IHRoaXMuZHJhZ2dhYmxlRWw7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZHJhZ1N0YXJ0ZWQuc3Vic2NyaWJlKChldmVudDogRHJhZ0V2ZW50SW50ZXJmYWNlPFQ+KSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsRHJhZ01vZGUuZW50ZXIoKTtcbiAgICAgICAgdGhpcy5kcmFnT24gPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuY3VzdG9tR2hvc3QpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRHaG9zdChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdTdGFydEVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGV2ZW50KSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdNb3ZlZC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5kcmFnTW92ZUVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGV2ZW50KSk7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRyYWdFbmRlZC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnRJbnRlcmZhY2U8VD4pID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxEcmFnTW9kZS5leGl0KCk7XG4gICAgICAgIHRoaXMuZHJhZ09uID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5jdXN0b21HaG9zdCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJveURlZmF1bHRHaG9zdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ0VuZEVtaXR0ZXIuZW1pdChuZXcgQ2xyRHJhZ0V2ZW50KGV2ZW50KSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB0aGlzLmRyYWdFdmVudExpc3RlbmVyLmRldGFjaERyYWdMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIl19