/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, EventEmitter, Inject, Input, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { IF_ACTIVE_ID, IfActiveService } from './if-active.service';
/**********
 *
 * @class ClrIfActive
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It makes use of a Component instance level service: IfActiveService to maintain state between itself and
 * the component using it in the component template.
 *
 */
export class ClrIfActive {
    /**
     * @param {?} ifActiveService
     * @param {?} id
     * @param {?} template
     * @param {?} container
     */
    constructor(ifActiveService, id, template, container) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.template = template;
        this.container = container;
        this.wasActive = false;
        /**
         * *******
         * \@property activeChange
         *
         * \@description
         * An event emitter that emits when the active property is set to allow for 2way binding when the directive is
         * used with de-structured / de-sugared syntax.
         *
         */
        this.activeChange = new EventEmitter(false);
        this.checkAndUpdateView(ifActiveService.current);
        this.subscription = this.ifActiveService.currentChange.subscribe(newCurrentId => {
            this.checkAndUpdateView(newCurrentId);
        });
    }
    /**
     * @param {?} currentId
     * @return {?}
     */
    checkAndUpdateView(currentId) {
        /** @type {?} */
        const isNowActive = currentId === this.id;
        // only emit if the new active state is changed since last time.
        if (isNowActive !== this.wasActive) {
            this.updateView(isNowActive);
            this.activeChange.emit(isNowActive);
            this.wasActive = isNowActive;
        }
    }
    /**
     * ******
     *
     * \@description
     * A setter that updates IfActiveService.active with value.
     *
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        if (value) {
            this.ifActiveService.current = this.id;
        }
    }
    /**
     * *****
     *
     * \@description
     * A getter that returns the current IfActiveService.active value.
     * @return {?}
     */
    get active() {
        return this.ifActiveService.current === this.id;
    }
    /**
     * ******
     *
     * \@description
     * Function that takes a any value and either created an embedded view for the associated ViewContainerRef or,
     * Clears all views from the ViewContainerRef
     * @param {?} value
     * @return {?}
     */
    updateView(value) {
        if (value) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            this.container.clear();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ClrIfActive.decorators = [
    { type: Directive, args: [{ selector: '[clrIfActive]' },] }
];
/** @nocollapse */
ClrIfActive.ctorParameters = () => [
    { type: IfActiveService },
    { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
ClrIfActive.propDecorators = {
    active: [{ type: Input, args: ['clrIfActive',] }],
    activeChange: [{ type: Output, args: ['clrIfActiveChange',] }]
};
if (false) {
    /** @type {?} */
    ClrIfActive.prototype.subscription;
    /** @type {?} */
    ClrIfActive.prototype.wasActive;
    /**
     * *******
     * \@property activeChange
     *
     * \@description
     * An event emitter that emits when the active property is set to allow for 2way binding when the directive is
     * used with de-structured / de-sugared syntax.
     *
     * @type {?}
     */
    ClrIfActive.prototype.activeChange;
    /** @type {?} */
    ClrIfActive.prototype.ifActiveService;
    /** @type {?} */
    ClrIfActive.prototype.id;
    /** @type {?} */
    ClrIfActive.prototype.template;
    /** @type {?} */
    ClrIfActive.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2NvbmRpdGlvbmFsL2lmLWFjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXBFOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBSXRCLFlBQ1UsZUFBZ0MsRUFDVixFQUFVLEVBQ2hDLFFBQTBCLEVBQzFCLFNBQTJCO1FBSDNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFON0IsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7Ozs7OztRQStDTixpQkFBWSxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQXZDbEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGtCQUFrQixDQUFDLFNBQWlCOztjQUNwQyxXQUFXLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3pDLGdFQUFnRTtRQUNoRSxJQUFJLFdBQVcsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7Ozs7O0lBU0QsSUFDVyxNQUFNLENBQUMsS0FBYztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7Ozs7OztJQWlCRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Ozs7Ozs7OztJQVNNLFVBQVUsQ0FBQyxLQUFjO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBekZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7Ozs7WUFGakIsZUFBZTt5Q0FvQmpDLE1BQU0sU0FBQyxZQUFZO1lBekJ0QixXQUFXO1lBQ1gsZ0JBQWdCOzs7cUJBb0RmLEtBQUssU0FBQyxhQUFhOzJCQWVuQixNQUFNLFNBQUMsbUJBQW1COzs7O0lBaEQzQixtQ0FBbUM7O0lBQ25DLGdDQUFtQzs7Ozs7Ozs7Ozs7SUErQ25DLG1DQUFvRzs7SUE1Q2xHLHNDQUF3Qzs7SUFDeEMseUJBQXdDOztJQUN4QywrQkFBa0M7O0lBQ2xDLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElGX0FDVElWRV9JRCwgSWZBY3RpdmVTZXJ2aWNlIH0gZnJvbSAnLi9pZi1hY3RpdmUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjbHJJZkFjdGl2ZV0nIH0pXG5cbi8qKioqKioqKioqXG4gKlxuICogQGNsYXNzIENscklmQWN0aXZlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHRoYXQgY29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGFzc29jaWF0ZWQgVGVtcGxhdGVSZWYgaXMgaW5zdGFudGlhdGVkIG9yIG5vdC5cbiAqIEl0IG1ha2VzIHVzZSBvZiBhIENvbXBvbmVudCBpbnN0YW5jZSBsZXZlbCBzZXJ2aWNlOiBJZkFjdGl2ZVNlcnZpY2UgdG8gbWFpbnRhaW4gc3RhdGUgYmV0d2VlbiBpdHNlbGYgYW5kXG4gKiB0aGUgY29tcG9uZW50IHVzaW5nIGl0IGluIHRoZSBjb21wb25lbnQgdGVtcGxhdGUuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgQ2xySWZBY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHdhc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWZBY3RpdmVTZXJ2aWNlOiBJZkFjdGl2ZVNlcnZpY2UsXG4gICAgQEluamVjdChJRl9BQ1RJVkVfSUQpIHByaXZhdGUgaWQ6IG51bWJlcixcbiAgICBwcml2YXRlIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge1xuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWaWV3KGlmQWN0aXZlU2VydmljZS5jdXJyZW50KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5pZkFjdGl2ZVNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUobmV3Q3VycmVudElkID0+IHtcbiAgICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWaWV3KG5ld0N1cnJlbnRJZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQW5kVXBkYXRlVmlldyhjdXJyZW50SWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGlzTm93QWN0aXZlID0gY3VycmVudElkID09PSB0aGlzLmlkO1xuICAgIC8vIG9ubHkgZW1pdCBpZiB0aGUgbmV3IGFjdGl2ZSBzdGF0ZSBpcyBjaGFuZ2VkIHNpbmNlIGxhc3QgdGltZS5cbiAgICBpZiAoaXNOb3dBY3RpdmUgIT09IHRoaXMud2FzQWN0aXZlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoaXNOb3dBY3RpdmUpO1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2UuZW1pdChpc05vd0FjdGl2ZSk7XG4gICAgICB0aGlzLndhc0FjdGl2ZSA9IGlzTm93QWN0aXZlO1xuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEEgc2V0dGVyIHRoYXQgdXBkYXRlcyBJZkFjdGl2ZVNlcnZpY2UuYWN0aXZlIHdpdGggdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgQElucHV0KCdjbHJJZkFjdGl2ZScpXG4gIHB1YmxpYyBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmlmQWN0aXZlU2VydmljZS5jdXJyZW50ID0gdGhpcy5pZDtcbiAgICB9XG4gIH1cblxuICAvKioqKioqKioqKlxuICAgKiBAcHJvcGVydHkgYWN0aXZlQ2hhbmdlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBldmVudCBlbWl0dGVyIHRoYXQgZW1pdHMgd2hlbiB0aGUgYWN0aXZlIHByb3BlcnR5IGlzIHNldCB0byBhbGxvdyBmb3IgMndheSBiaW5kaW5nIHdoZW4gdGhlIGRpcmVjdGl2ZSBpc1xuICAgKiB1c2VkIHdpdGggZGUtc3RydWN0dXJlZCAvIGRlLXN1Z2FyZWQgc3ludGF4LlxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xySWZBY3RpdmVDaGFuZ2UnKSBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBnZXR0ZXIgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IElmQWN0aXZlU2VydmljZS5hY3RpdmUgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pZkFjdGl2ZVNlcnZpY2UuY3VycmVudCA9PT0gdGhpcy5pZDtcbiAgfVxuXG4gIC8qKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBhbnkgdmFsdWUgYW5kIGVpdGhlciBjcmVhdGVkIGFuIGVtYmVkZGVkIHZpZXcgZm9yIHRoZSBhc3NvY2lhdGVkIFZpZXdDb250YWluZXJSZWYgb3IsXG4gICAqIENsZWFycyBhbGwgdmlld3MgZnJvbSB0aGUgVmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVWaWV3KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19