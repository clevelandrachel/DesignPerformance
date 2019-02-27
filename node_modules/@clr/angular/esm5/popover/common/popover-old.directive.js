/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Point, Popover } from './popover';
/** @type {?} */
var openCount = 0;
/** @type {?} */
var waiting = [];
// pending create functions
var PopoverDirectiveOld = /** @class */ (function () {
    function PopoverDirectiveOld(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.popoverOptions = {};
        this.clrPopoverOldChange = new EventEmitter(false);
    }
    Object.defineProperty(PopoverDirectiveOld.prototype, "clrPopoverOld", {
        set: /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            var _this = this;
            if (open) {
                if (this.popoverOptions.allowMultipleOpen) {
                    this.createPopover();
                }
                else {
                    if (openCount === 0) {
                        this.createPopover();
                    }
                    else {
                        waiting.push(function () {
                            _this.createPopover();
                        });
                    }
                }
            }
            else {
                this.viewContainer.clear();
                this.destroyPopover();
                if (!this.popoverOptions.allowMultipleOpen) {
                    if (waiting.length > 0) {
                        /** @type {?} */
                        var createPopoverFn = waiting.shift();
                        createPopoverFn();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverDirectiveOld.prototype.createPopover = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var embeddedViewRef = (/** @type {?} */ (this.viewContainer.createEmbeddedView(this.templateRef)));
        // TODO: Not sure of the risks associated with using this. Find an alternative.
        // Needed for find the correct height and width of dynamically created views
        // inside of the popover. For Eg: Button Groups
        embeddedViewRef.detectChanges();
        // filter out other nodes in the view ref so we are only left with element nodes
        /** @type {?} */
        var elementNodes = embeddedViewRef.rootNodes.filter(function (node) {
            return node.nodeType === 1;
        });
        // we take the first element node in the embedded view; usually there should only be one anyways
        this._popoverInstance = new Popover(elementNodes[0]);
        this._subscription = this._popoverInstance
            .anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
            .subscribe(function () {
            _this.clrPopoverOldChange.emit(false);
        });
        openCount++;
    };
    /**
     * @return {?}
     */
    PopoverDirectiveOld.prototype.destroyPopover = /**
     * @return {?}
     */
    function () {
        if (this._popoverInstance) {
            this._subscription.unsubscribe();
            this._popoverInstance.release();
            delete this._popoverInstance;
            openCount--;
        }
    };
    /**
     * @return {?}
     */
    PopoverDirectiveOld.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPopover();
    };
    PopoverDirectiveOld.decorators = [
        { type: Directive, args: [{ selector: '[clrPopoverOld]' },] }
    ];
    /** @nocollapse */
    PopoverDirectiveOld.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    PopoverDirectiveOld.propDecorators = {
        anchorElem: [{ type: Input, args: ['clrPopoverOldAnchor',] }],
        anchorPoint: [{ type: Input, args: ['clrPopoverOldAnchorPoint',] }],
        popoverPoint: [{ type: Input, args: ['clrPopoverOldPopoverPoint',] }],
        popoverOptions: [{ type: Input, args: ['clrPopoverOldOptions',] }],
        clrPopoverOldChange: [{ type: Output, args: ['clrPopoverOldChange',] }],
        clrPopoverOld: [{ type: Input }]
    };
    return PopoverDirectiveOld;
}());
export { PopoverDirectiveOld };
if (false) {
    /** @type {?} */
    PopoverDirectiveOld.prototype._popoverInstance;
    /** @type {?} */
    PopoverDirectiveOld.prototype._subscription;
    /** @type {?} */
    PopoverDirectiveOld.prototype.anchorElem;
    /** @type {?} */
    PopoverDirectiveOld.prototype.anchorPoint;
    /** @type {?} */
    PopoverDirectiveOld.prototype.popoverPoint;
    /** @type {?} */
    PopoverDirectiveOld.prototype.popoverOptions;
    /** @type {?} */
    PopoverDirectiveOld.prototype.clrPopoverOldChange;
    /** @type {?} */
    PopoverDirectiveOld.prototype.templateRef;
    /** @type {?} */
    PopoverDirectiveOld.prototype.viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1vbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci9jb21tb24vcG9wb3Zlci1vbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2SCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFHdkMsU0FBUyxHQUFXLENBQUM7O0lBQ25CLE9BQU8sR0FBc0IsRUFBRTs7QUFFckM7SUFXRSw2QkFBb0IsV0FBNkIsRUFBVSxhQUErQjtRQUF0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFIM0QsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLHdCQUFtQixHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBRU8sQ0FBQztJQUU5RixzQkFDSSw4Q0FBYTs7Ozs7UUFEakIsVUFDa0IsSUFBYTtZQUQvQixpQkF5QkM7WUF2QkMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFO29CQUN6QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNMLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTt3QkFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUNYLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFO29CQUMxQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzs0QkFDaEIsZUFBZSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQ3ZDLGVBQWUsRUFBRSxDQUFDO3FCQUNuQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFBQSxpQkF1QkM7O1lBdEJPLGVBQWUsR0FBeUIsbUJBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3ZHLElBQUksQ0FBQyxXQUFXLENBQ2pCLEVBQUE7UUFFRCwrRUFBK0U7UUFDL0UsNEVBQTRFO1FBQzVFLCtDQUErQztRQUMvQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7OztZQUcxQixZQUFZLEdBQWtCLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUztZQUM3RSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLGdHQUFnRztRQUNoRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ2pGLFNBQVMsQ0FBQztZQUNULEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkE1RUYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7O2dCQVR3QixXQUFXO2dCQUFFLGdCQUFnQjs7OzZCQWM1RixLQUFLLFNBQUMscUJBQXFCOzhCQUMzQixLQUFLLFNBQUMsMEJBQTBCOytCQUNoQyxLQUFLLFNBQUMsMkJBQTJCO2lDQUNqQyxLQUFLLFNBQUMsc0JBQXNCO3NDQUM1QixNQUFNLFNBQUMscUJBQXFCO2dDQUk1QixLQUFLOztJQWdFUiwwQkFBQztDQUFBLEFBN0VELElBNkVDO1NBNUVZLG1CQUFtQjs7O0lBQzlCLCtDQUFrQzs7SUFDbEMsNENBQW9DOztJQUVwQyx5Q0FBOEM7O0lBQzlDLDBDQUFzRDs7SUFDdEQsMkNBQXdEOztJQUN4RCw2Q0FBbUU7O0lBQ25FLGtEQUFzRjs7SUFFMUUsMENBQXFDOztJQUFFLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUG9pbnQsIFBvcG92ZXIgfSBmcm9tICcuL3BvcG92ZXInO1xuaW1wb3J0IHsgUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuL3BvcG92ZXItb3B0aW9ucy5pbnRlcmZhY2UnO1xuXG5sZXQgb3BlbkNvdW50OiBudW1iZXIgPSAwO1xuY29uc3Qgd2FpdGluZzogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTsgLy8gcGVuZGluZyBjcmVhdGUgZnVuY3Rpb25zXG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJQb3BvdmVyT2xkXScgfSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlT2xkIHtcbiAgcHJpdmF0ZSBfcG9wb3Zlckluc3RhbmNlOiBQb3BvdmVyO1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoJ2NsclBvcG92ZXJPbGRBbmNob3InKSBhbmNob3JFbGVtOiBhbnk7XG4gIEBJbnB1dCgnY2xyUG9wb3Zlck9sZEFuY2hvclBvaW50JykgYW5jaG9yUG9pbnQ6IFBvaW50O1xuICBASW5wdXQoJ2NsclBvcG92ZXJPbGRQb3BvdmVyUG9pbnQnKSBwb3BvdmVyUG9pbnQ6IFBvaW50O1xuICBASW5wdXQoJ2NsclBvcG92ZXJPbGRPcHRpb25zJykgcG9wb3Zlck9wdGlvbnM6IFBvcG92ZXJPcHRpb25zID0ge307XG4gIEBPdXRwdXQoJ2NsclBvcG92ZXJPbGRDaGFuZ2UnKSBjbHJQb3BvdmVyT2xkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbHJQb3BvdmVyT2xkKG9wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaWYgKHRoaXMucG9wb3Zlck9wdGlvbnMuYWxsb3dNdWx0aXBsZU9wZW4pIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3BvdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3BlbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVQb3BvdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FpdGluZy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUG9wb3ZlcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5kZXN0cm95UG9wb3ZlcigpO1xuXG4gICAgICBpZiAoIXRoaXMucG9wb3Zlck9wdGlvbnMuYWxsb3dNdWx0aXBsZU9wZW4pIHtcbiAgICAgICAgaWYgKHdhaXRpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGNyZWF0ZVBvcG92ZXJGbiA9IHdhaXRpbmcuc2hpZnQoKTtcbiAgICAgICAgICBjcmVhdGVQb3BvdmVyRm4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVBvcG92ZXIoKSB7XG4gICAgY29uc3QgZW1iZWRkZWRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PiA9IDxFbWJlZGRlZFZpZXdSZWY8YW55Pj50aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZlxuICAgICk7XG5cbiAgICAvLyBUT0RPOiBOb3Qgc3VyZSBvZiB0aGUgcmlza3MgYXNzb2NpYXRlZCB3aXRoIHVzaW5nIHRoaXMuIEZpbmQgYW4gYWx0ZXJuYXRpdmUuXG4gICAgLy8gTmVlZGVkIGZvciBmaW5kIHRoZSBjb3JyZWN0IGhlaWdodCBhbmQgd2lkdGggb2YgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3c1xuICAgIC8vIGluc2lkZSBvZiB0aGUgcG9wb3Zlci4gRm9yIEVnOiBCdXR0b24gR3JvdXBzXG4gICAgZW1iZWRkZWRWaWV3UmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIC8vIGZpbHRlciBvdXQgb3RoZXIgbm9kZXMgaW4gdGhlIHZpZXcgcmVmIHNvIHdlIGFyZSBvbmx5IGxlZnQgd2l0aCBlbGVtZW50IG5vZGVzXG4gICAgY29uc3QgZWxlbWVudE5vZGVzOiBIVE1MRWxlbWVudFtdID0gZW1iZWRkZWRWaWV3UmVmLnJvb3ROb2Rlcy5maWx0ZXIoKG5vZGU6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDE7XG4gICAgfSk7XG5cbiAgICAvLyB3ZSB0YWtlIHRoZSBmaXJzdCBlbGVtZW50IG5vZGUgaW4gdGhlIGVtYmVkZGVkIHZpZXc7IHVzdWFsbHkgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIGFueXdheXNcbiAgICB0aGlzLl9wb3BvdmVySW5zdGFuY2UgPSBuZXcgUG9wb3ZlcihlbGVtZW50Tm9kZXNbMF0pO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3BvcG92ZXJJbnN0YW5jZVxuICAgICAgLmFuY2hvcih0aGlzLmFuY2hvckVsZW0sIHRoaXMuYW5jaG9yUG9pbnQsIHRoaXMucG9wb3ZlclBvaW50LCB0aGlzLnBvcG92ZXJPcHRpb25zKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xyUG9wb3Zlck9sZENoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIG9wZW5Db3VudCsrO1xuICB9XG5cbiAgZGVzdHJveVBvcG92ZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcG92ZXJJbnN0YW5jZSkge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9wb3BvdmVySW5zdGFuY2UucmVsZWFzZSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX3BvcG92ZXJJbnN0YW5jZTtcbiAgICAgIG9wZW5Db3VudC0tO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveVBvcG92ZXIoKTtcbiAgfVxufVxuIl19