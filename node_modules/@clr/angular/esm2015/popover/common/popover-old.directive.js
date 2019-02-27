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
let openCount = 0;
/** @type {?} */
const waiting = [];
// pending create functions
export class PopoverDirectiveOld {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.popoverOptions = {};
        this.clrPopoverOldChange = new EventEmitter(false);
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set clrPopoverOld(open) {
        if (open) {
            if (this.popoverOptions.allowMultipleOpen) {
                this.createPopover();
            }
            else {
                if (openCount === 0) {
                    this.createPopover();
                }
                else {
                    waiting.push(() => {
                        this.createPopover();
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
                    const createPopoverFn = waiting.shift();
                    createPopoverFn();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    createPopover() {
        /** @type {?} */
        const embeddedViewRef = (/** @type {?} */ (this.viewContainer.createEmbeddedView(this.templateRef)));
        // TODO: Not sure of the risks associated with using this. Find an alternative.
        // Needed for find the correct height and width of dynamically created views
        // inside of the popover. For Eg: Button Groups
        embeddedViewRef.detectChanges();
        // filter out other nodes in the view ref so we are only left with element nodes
        /** @type {?} */
        const elementNodes = embeddedViewRef.rootNodes.filter((node) => {
            return node.nodeType === 1;
        });
        // we take the first element node in the embedded view; usually there should only be one anyways
        this._popoverInstance = new Popover(elementNodes[0]);
        this._subscription = this._popoverInstance
            .anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
            .subscribe(() => {
            this.clrPopoverOldChange.emit(false);
        });
        openCount++;
    }
    /**
     * @return {?}
     */
    destroyPopover() {
        if (this._popoverInstance) {
            this._subscription.unsubscribe();
            this._popoverInstance.release();
            delete this._popoverInstance;
            openCount--;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyPopover();
    }
}
PopoverDirectiveOld.decorators = [
    { type: Directive, args: [{ selector: '[clrPopoverOld]' },] }
];
/** @nocollapse */
PopoverDirectiveOld.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
PopoverDirectiveOld.propDecorators = {
    anchorElem: [{ type: Input, args: ['clrPopoverOldAnchor',] }],
    anchorPoint: [{ type: Input, args: ['clrPopoverOldAnchorPoint',] }],
    popoverPoint: [{ type: Input, args: ['clrPopoverOldPopoverPoint',] }],
    popoverOptions: [{ type: Input, args: ['clrPopoverOldOptions',] }],
    clrPopoverOldChange: [{ type: Output, args: ['clrPopoverOldChange',] }],
    clrPopoverOld: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1vbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci9jb21tb24vcG9wb3Zlci1vbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2SCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFHdkMsU0FBUyxHQUFXLENBQUM7O01BQ25CLE9BQU8sR0FBc0IsRUFBRTs7QUFHckMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFVOUIsWUFBb0IsV0FBNkIsRUFBVSxhQUErQjtRQUF0RSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFIM0QsbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBQ3BDLHdCQUFtQixHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBRU8sQ0FBQzs7Ozs7SUFFOUYsSUFDSSxhQUFhLENBQUMsSUFBYTtRQUM3QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzswQkFDaEIsZUFBZSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUU7b0JBQ3ZDLGVBQWUsRUFBRSxDQUFDO2lCQUNuQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDTCxlQUFlLEdBQXlCLG1CQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUN2RyxJQUFJLENBQUMsV0FBVyxDQUNqQixFQUFBO1FBRUQsK0VBQStFO1FBQy9FLDRFQUE0RTtRQUM1RSwrQ0FBK0M7UUFDL0MsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDOzs7Y0FHMUIsWUFBWSxHQUFrQixlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ2pGLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsZ0dBQWdHO1FBQ2hHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDakYsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7OztZQTVFRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7WUFUd0IsV0FBVztZQUFFLGdCQUFnQjs7O3lCQWM1RixLQUFLLFNBQUMscUJBQXFCOzBCQUMzQixLQUFLLFNBQUMsMEJBQTBCOzJCQUNoQyxLQUFLLFNBQUMsMkJBQTJCOzZCQUNqQyxLQUFLLFNBQUMsc0JBQXNCO2tDQUM1QixNQUFNLFNBQUMscUJBQXFCOzRCQUk1QixLQUFLOzs7O0lBWE4sK0NBQWtDOztJQUNsQyw0Q0FBb0M7O0lBRXBDLHlDQUE4Qzs7SUFDOUMsMENBQXNEOztJQUN0RCwyQ0FBd0Q7O0lBQ3hELDZDQUFtRTs7SUFDbkUsa0RBQXNGOztJQUUxRSwwQ0FBcUM7O0lBQUUsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQb2ludCwgUG9wb3ZlciB9IGZyb20gJy4vcG9wb3Zlcic7XG5pbXBvcnQgeyBQb3BvdmVyT3B0aW9ucyB9IGZyb20gJy4vcG9wb3Zlci1vcHRpb25zLmludGVyZmFjZSc7XG5cbmxldCBvcGVuQ291bnQ6IG51bWJlciA9IDA7XG5jb25zdCB3YWl0aW5nOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdOyAvLyBwZW5kaW5nIGNyZWF0ZSBmdW5jdGlvbnNcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclBvcG92ZXJPbGRdJyB9KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmVPbGQge1xuICBwcml2YXRlIF9wb3BvdmVySW5zdGFuY2U6IFBvcG92ZXI7XG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgnY2xyUG9wb3Zlck9sZEFuY2hvcicpIGFuY2hvckVsZW06IGFueTtcbiAgQElucHV0KCdjbHJQb3BvdmVyT2xkQW5jaG9yUG9pbnQnKSBhbmNob3JQb2ludDogUG9pbnQ7XG4gIEBJbnB1dCgnY2xyUG9wb3Zlck9sZFBvcG92ZXJQb2ludCcpIHBvcG92ZXJQb2ludDogUG9pbnQ7XG4gIEBJbnB1dCgnY2xyUG9wb3Zlck9sZE9wdGlvbnMnKSBwb3BvdmVyT3B0aW9uczogUG9wb3Zlck9wdGlvbnMgPSB7fTtcbiAgQE91dHB1dCgnY2xyUG9wb3Zlck9sZENoYW5nZScpIGNsclBvcG92ZXJPbGRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsclBvcG92ZXJPbGQob3BlbjogYm9vbGVhbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAodGhpcy5wb3BvdmVyT3B0aW9ucy5hbGxvd011bHRpcGxlT3Blbikge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcG92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcGVuQ291bnQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBvcG92ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YWl0aW5nLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQb3BvdmVyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICB0aGlzLmRlc3Ryb3lQb3BvdmVyKCk7XG5cbiAgICAgIGlmICghdGhpcy5wb3BvdmVyT3B0aW9ucy5hbGxvd011bHRpcGxlT3Blbikge1xuICAgICAgICBpZiAod2FpdGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgY3JlYXRlUG9wb3ZlckZuID0gd2FpdGluZy5zaGlmdCgpO1xuICAgICAgICAgIGNyZWF0ZVBvcG92ZXJGbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlUG9wb3ZlcigpIHtcbiAgICBjb25zdCBlbWJlZGRlZFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+ID0gPEVtYmVkZGVkVmlld1JlZjxhbnk+PnRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICB0aGlzLnRlbXBsYXRlUmVmXG4gICAgKTtcblxuICAgIC8vIFRPRE86IE5vdCBzdXJlIG9mIHRoZSByaXNrcyBhc3NvY2lhdGVkIHdpdGggdXNpbmcgdGhpcy4gRmluZCBhbiBhbHRlcm5hdGl2ZS5cbiAgICAvLyBOZWVkZWQgZm9yIGZpbmQgdGhlIGNvcnJlY3QgaGVpZ2h0IGFuZCB3aWR0aCBvZiBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXdzXG4gICAgLy8gaW5zaWRlIG9mIHRoZSBwb3BvdmVyLiBGb3IgRWc6IEJ1dHRvbiBHcm91cHNcbiAgICBlbWJlZGRlZFZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBvdGhlciBub2RlcyBpbiB0aGUgdmlldyByZWYgc28gd2UgYXJlIG9ubHkgbGVmdCB3aXRoIGVsZW1lbnQgbm9kZXNcbiAgICBjb25zdCBlbGVtZW50Tm9kZXM6IEhUTUxFbGVtZW50W10gPSBlbWJlZGRlZFZpZXdSZWYucm9vdE5vZGVzLmZpbHRlcigobm9kZTogYW55KSA9PiB7XG4gICAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgICB9KTtcblxuICAgIC8vIHdlIHRha2UgdGhlIGZpcnN0IGVsZW1lbnQgbm9kZSBpbiB0aGUgZW1iZWRkZWQgdmlldzsgdXN1YWxseSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgYW55d2F5c1xuICAgIHRoaXMuX3BvcG92ZXJJbnN0YW5jZSA9IG5ldyBQb3BvdmVyKGVsZW1lbnROb2Rlc1swXSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fcG9wb3Zlckluc3RhbmNlXG4gICAgICAuYW5jaG9yKHRoaXMuYW5jaG9yRWxlbSwgdGhpcy5hbmNob3JQb2ludCwgdGhpcy5wb3BvdmVyUG9pbnQsIHRoaXMucG9wb3Zlck9wdGlvbnMpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbHJQb3BvdmVyT2xkQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgb3BlbkNvdW50Kys7XG4gIH1cblxuICBkZXN0cm95UG9wb3ZlcigpIHtcbiAgICBpZiAodGhpcy5fcG9wb3Zlckluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX3BvcG92ZXJJbnN0YW5jZS5yZWxlYXNlKCk7XG4gICAgICBkZWxldGUgdGhpcy5fcG9wb3Zlckluc3RhbmNlO1xuICAgICAgb3BlbkNvdW50LS07XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95UG9wb3ZlcigpO1xuICB9XG59XG4iXX0=