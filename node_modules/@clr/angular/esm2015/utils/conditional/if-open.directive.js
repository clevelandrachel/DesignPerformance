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
import { IfOpenService } from './if-open.service';
/**********
 *
 * @class ClrIfOpen
 *
 * @description
 * A structural directive that controls whether or not the associated TemplateRef is instantiated or not.
 * It makes use of a Component instance level service: IfOpenService to maintain state between itself and the component
 * using it in the component template.
 *
 */
export class ClrIfOpen {
    /**
     * @param {?} ifOpenService
     * @param {?} template
     * @param {?} container
     */
    constructor(ifOpenService, template, container) {
        this.ifOpenService = ifOpenService;
        this.template = template;
        this.container = container;
        /**
         * *******
         * \@property openChange
         *
         * \@description
         * An event emitter that emits when the open property is set to allow for 2way binding when the directive is
         * used with de-structured / de-sugared syntax.
         */
        this.openChange = new EventEmitter(false);
        this.subscription = this.ifOpenService.openChange.subscribe(change => {
            this.updateView(change);
            this.openChange.emit(change);
        });
    }
    /**
     * ******
     *
     * \@description
     * A setter that updates IfOpenService.open with value.
     *
     * @param {?} value
     * @return {?}
     */
    set open(value) {
        this.ifOpenService.open = value;
    }
    /**
     * *****
     *
     * \@description
     * A getter that returns the current IfOpenService.open value.
     *
     * @return {?}
     */
    get open() {
        return this.ifOpenService.open;
    }
    /**
     * ******
     *
     * \@description
     * Function that takes a boolean value and either created an embedded view for the associated ViewContainerRef or,
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
ClrIfOpen.decorators = [
    { type: Directive, args: [{ selector: '[clrIfOpen]' },] }
];
/** @nocollapse */
ClrIfOpen.ctorParameters = () => [
    { type: IfOpenService },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
ClrIfOpen.propDecorators = {
    open: [{ type: Input, args: ['clrIfOpen',] }],
    openChange: [{ type: Output, args: ['clrIfOpenChange',] }]
};
if (false) {
    /** @type {?} */
    ClrIfOpen.prototype.subscription;
    /**
     * *******
     * \@property openChange
     *
     * \@description
     * An event emitter that emits when the open property is set to allow for 2way binding when the directive is
     * used with de-structured / de-sugared syntax.
     * @type {?}
     */
    ClrIfOpen.prototype.openChange;
    /** @type {?} */
    ClrIfOpen.prototype.ifOpenService;
    /** @type {?} */
    ClrIfOpen.prototype.template;
    /** @type {?} */
    ClrIfOpen.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtb3Blbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9jb25kaXRpb25hbC9pZi1vcGVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbEQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQWtDcEIsWUFDVSxhQUE0QixFQUM1QixRQUEwQixFQUMxQixTQUEyQjtRQUYzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjs7Ozs7Ozs7O1FBZlYsZUFBVSxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQWlCOUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7SUFqQ0QsSUFDVyxJQUFJLENBQUMsS0FBYztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7Ozs7O0lBaUJELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7OztJQW9CTSxVQUFVLENBQUMsS0FBYztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQTFFRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFOzs7O1lBRjdCLGFBQWE7WUFIc0MsV0FBVztZQUFFLGdCQUFnQjs7O21CQTJCdEYsS0FBSyxTQUFDLFdBQVc7eUJBWWpCLE1BQU0sU0FBQyxpQkFBaUI7Ozs7SUFyQnpCLGlDQUFtQzs7Ozs7Ozs7OztJQXFCbkMsK0JBQWdHOztJQWE5RixrQ0FBb0M7O0lBQ3BDLDZCQUFrQzs7SUFDbEMsOEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi9pZi1vcGVuLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xySWZPcGVuXScgfSlcblxuLyoqKioqKioqKipcbiAqXG4gKiBAY2xhc3MgQ2xySWZPcGVuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIHN0cnVjdHVyYWwgZGlyZWN0aXZlIHRoYXQgY29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGFzc29jaWF0ZWQgVGVtcGxhdGVSZWYgaXMgaW5zdGFudGlhdGVkIG9yIG5vdC5cbiAqIEl0IG1ha2VzIHVzZSBvZiBhIENvbXBvbmVudCBpbnN0YW5jZSBsZXZlbCBzZXJ2aWNlOiBJZk9wZW5TZXJ2aWNlIHRvIG1haW50YWluIHN0YXRlIGJldHdlZW4gaXRzZWxmIGFuZCB0aGUgY29tcG9uZW50XG4gKiB1c2luZyBpdCBpbiB0aGUgY29tcG9uZW50IHRlbXBsYXRlLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIENscklmT3BlbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBzZXR0ZXIgdGhhdCB1cGRhdGVzIElmT3BlblNlcnZpY2Uub3BlbiB3aXRoIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIEBJbnB1dCgnY2xySWZPcGVuJylcbiAgcHVibGljIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKioqKioqKioqXG4gICAqIEBwcm9wZXJ0eSBvcGVuQ2hhbmdlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBldmVudCBlbWl0dGVyIHRoYXQgZW1pdHMgd2hlbiB0aGUgb3BlbiBwcm9wZXJ0eSBpcyBzZXQgdG8gYWxsb3cgZm9yIDJ3YXkgYmluZGluZyB3aGVuIHRoZSBkaXJlY3RpdmUgaXNcbiAgICogdXNlZCB3aXRoIGRlLXN0cnVjdHVyZWQgLyBkZS1zdWdhcmVkIHN5bnRheC5cbiAgICovXG4gIEBPdXRwdXQoJ2NscklmT3BlbkNoYW5nZScpIG9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogQSBnZXR0ZXIgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IElmT3BlblNlcnZpY2Uub3BlbiB2YWx1ZS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGlmT3BlblNlcnZpY2U6IElmT3BlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaWZPcGVuU2VydmljZS5vcGVuQ2hhbmdlLnN1YnNjcmliZShjaGFuZ2UgPT4ge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KGNoYW5nZSk7XG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChjaGFuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqKioqKioqKlxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogRnVuY3Rpb24gdGhhdCB0YWtlcyBhIGJvb2xlYW4gdmFsdWUgYW5kIGVpdGhlciBjcmVhdGVkIGFuIGVtYmVkZGVkIHZpZXcgZm9yIHRoZSBhc3NvY2lhdGVkIFZpZXdDb250YWluZXJSZWYgb3IsXG4gICAqIENsZWFycyBhbGwgdmlld3MgZnJvbSB0aGUgVmlld0NvbnRhaW5lclJlZlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHB1YmxpYyB1cGRhdGVWaWV3KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19