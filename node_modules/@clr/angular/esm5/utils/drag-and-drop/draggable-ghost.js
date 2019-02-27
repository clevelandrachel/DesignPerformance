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
var ClrDraggableGhost = /** @class */ (function () {
    function ClrDraggableGhost(el, dragEventListener, draggableSnapshot, renderer, ngZone) {
        var _this = this;
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
        var offset = {
            top: this.draggableSnapshot.hasDraggableState
                ? this.draggableSnapshot.dragEvent.dragPosition.pageY - this.draggableSnapshot.clientRect.top
                : 0,
            left: this.draggableSnapshot.hasDraggableState
                ? this.draggableSnapshot.dragEvent.dragPosition.pageX - this.draggableSnapshot.clientRect.left
                : 0,
        };
        /** @type {?} */
        var isAnimationConfigured = false;
        this.subscriptions.push(this.dragEventListener.dragMoved.subscribe(function (event) {
            // On the first drag move event, we configure the animation as it's dependent on the first drag event.
            if (!isAnimationConfigured) {
                if (_this.draggableSnapshot.hasDraggableState) {
                    _this.animateToOnLeave(_this.draggableSnapshot.clientRect.top + "px", _this.draggableSnapshot.clientRect.left + "px");
                }
                else {
                    _this.animateToOnLeave(event.dragPosition.pageY + "px", event.dragPosition.pageX + "px");
                }
                isAnimationConfigured = true;
            }
            // Position the draggable ghost.
            /** @type {?} */
            var topLeftPosition = _this.findTopLeftPosition(event.dragPosition, offset);
            _this.setPositionStyle(_this.draggableGhostEl, topLeftPosition.pageX, topLeftPosition.pageY);
            _this.dragEventListener.dropPointPosition = _this.findDropPointPosition(topLeftPosition);
        }));
    }
    /**
     * @param {?} el
     * @return {?}
     */
    ClrDraggableGhost.prototype.setDefaultGhostSize = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        if (this.draggableSnapshot.hasDraggableState) {
            this.setSizeStyle(el, this.draggableSnapshot.clientRect.width, this.draggableSnapshot.clientRect.height);
        }
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    ClrDraggableGhost.prototype.animateToOnLeave = /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    function (top, left) {
        var _this = this;
        this.ngZone.run(function () {
            _this.leaveAnimConfig = { value: 0, params: { top: top, left: left } };
        });
    };
    /**
     * @param {?} dragPosition
     * @param {?} offset
     * @return {?}
     */
    ClrDraggableGhost.prototype.findTopLeftPosition = /**
     * @param {?} dragPosition
     * @param {?} offset
     * @return {?}
     */
    function (dragPosition, offset) {
        return { pageX: dragPosition.pageX - offset.left, pageY: dragPosition.pageY - offset.top };
    };
    /**
     * @param {?} topLeftPosition
     * @return {?}
     */
    ClrDraggableGhost.prototype.findDropPointPosition = /**
     * @param {?} topLeftPosition
     * @return {?}
     */
    function (topLeftPosition) {
        if (this.draggableSnapshot.hasDraggableState) {
            return {
                pageX: topLeftPosition.pageX + this.draggableSnapshot.clientRect.width / 2,
                pageY: topLeftPosition.pageY + this.draggableSnapshot.clientRect.height / 2,
            };
        }
        else {
            return topLeftPosition;
        }
    };
    /**
     * @param {?} el
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ClrDraggableGhost.prototype.setSizeStyle = /**
     * @param {?} el
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (el, width, height) {
        this.renderer.setStyle(el, 'width', width + "px");
        this.renderer.setStyle(el, 'height', height + "px");
    };
    /**
     * @param {?} el
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    ClrDraggableGhost.prototype.setPositionStyle = /**
     * @param {?} el
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (el, left, top) {
        this.renderer.setStyle(el, 'left', left + "px");
        this.renderer.setStyle(el, 'top', top + "px");
        this.renderer.setStyle(el, 'visibility', 'visible');
    };
    /**
     * @return {?}
     */
    ClrDraggableGhost.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ClrDraggableGhost.decorators = [
        { type: Component, args: [{
                    selector: 'clr-draggable-ghost',
                    template: "<ng-content></ng-content>",
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
    ClrDraggableGhost.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DragEventListenerService, decorators: [{ type: Optional }] },
        { type: DraggableSnapshotService, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    ClrDraggableGhost.propDecorators = {
        leaveAnimConfig: [{ type: HostBinding, args: ['@leaveAnimation',] }]
    };
    return ClrDraggableGhost;
}());
export { ClrDraggableGhost };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWdob3N0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvZHJhZy1hbmQtZHJvcC9kcmFnZ2FibGUtZ2hvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQWEsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQVdsRjtJQW1CRSwyQkFDVSxFQUFjLEVBQ0YsaUJBQThDLEVBQzlDLGlCQUE4QyxFQUMxRCxRQUFtQixFQUNuQixNQUFjO1FBTHhCLGlCQXNEQztRQXJEUyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ0Ysc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCO1FBQzFELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVRoQixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFWCxvQkFBZSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBU2xHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RkFBd0YsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBRTlDLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUVqRSw2RUFBNkU7UUFDN0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFNUQsNERBQTREO1FBQzVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7WUFFMUMsTUFBTSxHQUFtQjtZQUM3QixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjtnQkFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUc7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJO2dCQUM5RixDQUFDLENBQUMsQ0FBQztTQUNOOztZQUVHLHFCQUFxQixHQUFZLEtBQUs7UUFFMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBNEI7WUFDdEUsc0dBQXNHO1lBQ3RHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQkFDMUIsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7b0JBQzVDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FDaEIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQUksRUFDekMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQUksQ0FDOUMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxLQUFJLENBQUMsZ0JBQWdCLENBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLE9BQUksRUFBSyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBSSxDQUFDLENBQUM7aUJBQ3pGO2dCQUNELHFCQUFxQixHQUFHLElBQUksQ0FBQzthQUM5Qjs7O2dCQUdLLGVBQWUsR0FBaUIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDO1lBQzFGLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTywrQ0FBbUI7Ozs7SUFBM0IsVUFBNEIsRUFBUTtRQUNsQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFHO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sNENBQWdCOzs7OztJQUF4QixVQUF5QixHQUFXLEVBQUUsSUFBWTtRQUFsRCxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2QsS0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLCtDQUFtQjs7Ozs7SUFBM0IsVUFBNEIsWUFBMEIsRUFBRSxNQUFzQjtRQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFTyxpREFBcUI7Ozs7SUFBN0IsVUFBOEIsZUFBNkI7UUFDekQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7WUFDNUMsT0FBTztnQkFDTCxLQUFLLEVBQUUsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDO2dCQUMxRSxLQUFLLEVBQUUsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDO2FBQzVFLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxlQUFlLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sd0NBQVk7Ozs7OztJQUFwQixVQUFxQixFQUFRLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBSyxLQUFLLE9BQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUssTUFBTSxPQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7O0lBRU8sNENBQWdCOzs7Ozs7SUFBeEIsVUFBeUIsRUFBUSxFQUFFLElBQVksRUFBRSxHQUFXO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUssSUFBSSxPQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFLLEdBQUcsT0FBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFpQixJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBbkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGdCQUFnQixFQUFFOzRCQUN4QixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQ0FDOUIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7NkJBQ3pFLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtpQkFDRjs7OztnQkEzQm1CLFVBQVU7Z0JBSXJCLHdCQUF3Qix1QkFpQzVCLFFBQVE7Z0JBaENKLHdCQUF3Qix1QkFpQzVCLFFBQVE7Z0JBdEM2RCxTQUFTO2dCQUF0QyxNQUFNOzs7a0NBaUNoRCxXQUFXLFNBQUMsaUJBQWlCOztJQW1HaEMsd0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQXhHWSxpQkFBaUI7OztJQUM1Qiw2Q0FBOEI7O0lBRTlCLDBDQUEyQzs7SUFFM0MsNENBQW9HOztJQUdsRywrQkFBc0I7O0lBQ3RCLDhDQUFrRTs7SUFDbEUsOENBQWtFOztJQUNsRSxxQ0FBMkI7O0lBQzNCLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBOZ1pvbmUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERyYWdFdmVudEludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9kcmFnLWV2ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBEcmFnRXZlbnRMaXN0ZW5lclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kcmFnLWV2ZW50LWxpc3RlbmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZHJhZ2dhYmxlLXNuYXBzaG90LnNlcnZpY2UnO1xuXG50eXBlIFBhZ2VQb3NpdGlvbiA9IHtcbiAgcGFnZVg6IG51bWJlcjtcbiAgcGFnZVk6IG51bWJlcjtcbn07XG50eXBlIE9mZnNldFBvc2l0aW9uID0ge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWRyYWdnYWJsZS1naG9zdCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdsZWF2ZUFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBsZWZ0OiAnKicsIHRvcDogJyonIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjJzIGVhc2UtaW4tb3V0Jywgc3R5bGUoeyB0b3A6ICd7e3RvcH19JywgbGVmdDogJ3t7bGVmdH19JyB9KSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRHJhZ2dhYmxlR2hvc3Q8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRyYWdnYWJsZUdob3N0RWw6IGFueTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgQEhvc3RCaW5kaW5nKCdAbGVhdmVBbmltYXRpb24nKSBsZWF2ZUFuaW1Db25maWcgPSB7IHZhbHVlOiAwLCBwYXJhbXM6IHsgdG9wOiAnMHB4JywgbGVmdDogJzBweCcgfSB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkcmFnRXZlbnRMaXN0ZW5lcjogRHJhZ0V2ZW50TGlzdGVuZXJTZXJ2aWNlPFQ+LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZHJhZ2dhYmxlU25hcHNob3Q6IERyYWdnYWJsZVNuYXBzaG90U2VydmljZTxUPixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoIXRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIgfHwgIXRoaXMuZHJhZ2dhYmxlU25hcHNob3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNsci1kcmFnZ2FibGUtZ2hvc3QgY29tcG9uZW50IGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIG9mIGEgY2xyRHJhZ2dhYmxlIGRpcmVjdGl2ZS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZUdob3N0RWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBOZWVkIHRvIHVzZSBSZW5kZXJlcjIgYXMgaXQgcnVucyBvdXRzaWRlIG9mIE5nWm9uZVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcmFnZ2FibGVHaG9zdEVsLCAnZHJhZ2dhYmxlLWdob3N0Jyk7XG5cbiAgICAvLyBSZWdpc3RlciB0aGUgZ2hvc3QgZWxlbWVudCBpbiBEcmFnRXZlbnRMaXN0ZW5lciB0byBwYXNzIGluIGEgQ2xyRHJhZ0V2ZW50LlxuICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZ2hvc3RFbGVtZW50ID0gdGhpcy5kcmFnZ2FibGVHaG9zdEVsO1xuXG4gICAgLy8gRGVmYXVsdCBnaG9zdCBzaXplIGdldHMgdGhlIHNpemUgb2YgQ2xyRHJhZ2dhYmxlIGVsZW1lbnQuXG4gICAgdGhpcy5zZXREZWZhdWx0R2hvc3RTaXplKHRoaXMuZHJhZ2dhYmxlR2hvc3RFbCk7XG5cbiAgICBjb25zdCBvZmZzZXQ6IE9mZnNldFBvc2l0aW9uID0ge1xuICAgICAgdG9wOiB0aGlzLmRyYWdnYWJsZVNuYXBzaG90Lmhhc0RyYWdnYWJsZVN0YXRlXG4gICAgICAgID8gdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5kcmFnRXZlbnQuZHJhZ1Bvc2l0aW9uLnBhZ2VZIC0gdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LnRvcFxuICAgICAgICA6IDAsXG4gICAgICBsZWZ0OiB0aGlzLmRyYWdnYWJsZVNuYXBzaG90Lmhhc0RyYWdnYWJsZVN0YXRlXG4gICAgICAgID8gdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5kcmFnRXZlbnQuZHJhZ1Bvc2l0aW9uLnBhZ2VYIC0gdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LmxlZnRcbiAgICAgICAgOiAwLFxuICAgIH07XG5cbiAgICBsZXQgaXNBbmltYXRpb25Db25maWd1cmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZHJhZ0V2ZW50TGlzdGVuZXIuZHJhZ01vdmVkLnN1YnNjcmliZSgoZXZlbnQ6IERyYWdFdmVudEludGVyZmFjZTxUPikgPT4ge1xuICAgICAgICAvLyBPbiB0aGUgZmlyc3QgZHJhZyBtb3ZlIGV2ZW50LCB3ZSBjb25maWd1cmUgdGhlIGFuaW1hdGlvbiBhcyBpdCdzIGRlcGVuZGVudCBvbiB0aGUgZmlyc3QgZHJhZyBldmVudC5cbiAgICAgICAgaWYgKCFpc0FuaW1hdGlvbkNvbmZpZ3VyZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5oYXNEcmFnZ2FibGVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlVG9PbkxlYXZlKFxuICAgICAgICAgICAgICBgJHt0aGlzLmRyYWdnYWJsZVNuYXBzaG90LmNsaWVudFJlY3QudG9wfXB4YCxcbiAgICAgICAgICAgICAgYCR7dGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVUb09uTGVhdmUoYCR7ZXZlbnQuZHJhZ1Bvc2l0aW9uLnBhZ2VZfXB4YCwgYCR7ZXZlbnQuZHJhZ1Bvc2l0aW9uLnBhZ2VYfXB4YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzQW5pbWF0aW9uQ29uZmlndXJlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgZHJhZ2dhYmxlIGdob3N0LlxuICAgICAgICBjb25zdCB0b3BMZWZ0UG9zaXRpb246IFBhZ2VQb3NpdGlvbiA9IHRoaXMuZmluZFRvcExlZnRQb3NpdGlvbihldmVudC5kcmFnUG9zaXRpb24sIG9mZnNldCk7XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb25TdHlsZSh0aGlzLmRyYWdnYWJsZUdob3N0RWwsIHRvcExlZnRQb3NpdGlvbi5wYWdlWCwgdG9wTGVmdFBvc2l0aW9uLnBhZ2VZKTtcbiAgICAgICAgdGhpcy5kcmFnRXZlbnRMaXN0ZW5lci5kcm9wUG9pbnRQb3NpdGlvbiA9IHRoaXMuZmluZERyb3BQb2ludFBvc2l0aW9uKHRvcExlZnRQb3NpdGlvbik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldERlZmF1bHRHaG9zdFNpemUoZWw6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5oYXNEcmFnZ2FibGVTdGF0ZSkge1xuICAgICAgdGhpcy5zZXRTaXplU3R5bGUoZWwsIHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuY2xpZW50UmVjdC53aWR0aCwgdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlVG9PbkxlYXZlKHRvcDogc3RyaW5nLCBsZWZ0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5sZWF2ZUFuaW1Db25maWcgPSB7IHZhbHVlOiAwLCBwYXJhbXM6IHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfSB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVG9wTGVmdFBvc2l0aW9uKGRyYWdQb3NpdGlvbjogUGFnZVBvc2l0aW9uLCBvZmZzZXQ6IE9mZnNldFBvc2l0aW9uKTogUGFnZVBvc2l0aW9uIHtcbiAgICByZXR1cm4geyBwYWdlWDogZHJhZ1Bvc2l0aW9uLnBhZ2VYIC0gb2Zmc2V0LmxlZnQsIHBhZ2VZOiBkcmFnUG9zaXRpb24ucGFnZVkgLSBvZmZzZXQudG9wIH07XG4gIH1cblxuICBwcml2YXRlIGZpbmREcm9wUG9pbnRQb3NpdGlvbih0b3BMZWZ0UG9zaXRpb246IFBhZ2VQb3NpdGlvbik6IFBhZ2VQb3NpdGlvbiB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlU25hcHNob3QuaGFzRHJhZ2dhYmxlU3RhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VYOiB0b3BMZWZ0UG9zaXRpb24ucGFnZVggKyB0aGlzLmRyYWdnYWJsZVNuYXBzaG90LmNsaWVudFJlY3Qud2lkdGggLyAyLFxuICAgICAgICBwYWdlWTogdG9wTGVmdFBvc2l0aW9uLnBhZ2VZICsgdGhpcy5kcmFnZ2FibGVTbmFwc2hvdC5jbGllbnRSZWN0LmhlaWdodCAvIDIsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdG9wTGVmdFBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U2l6ZVN0eWxlKGVsOiBOb2RlLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ2hlaWdodCcsIGAke2hlaWdodH1weGApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvblN0eWxlKGVsOiBOb2RlLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ2xlZnQnLCBgJHtsZWZ0fXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ3RvcCcsIGAke3RvcH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=