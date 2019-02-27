/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
var ClrSignpostTrigger = /** @class */ (function () {
    function ClrSignpostTrigger(ifOpenService, renderer, el) {
        var _this = this;
        this.ifOpenService = ifOpenService;
        this.renderer = renderer;
        this.el = el;
        this.subscriptions = [];
        this.subscriptions.push(this.ifOpenService.openChange.subscribe(function (isOpen) {
            if (isOpen) {
                _this.renderer.addClass(_this.el.nativeElement, 'active');
            }
            else {
                _this.renderer.removeClass(_this.el.nativeElement, 'active');
            }
        }));
    }
    /**
     * @return {?}
     */
    ClrSignpostTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**********
     *
     * @description
     * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
     */
    /**
     * *******
     *
     * \@description
     * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
     * @param {?} event
     * @return {?}
     */
    ClrSignpostTrigger.prototype.onSignpostTriggerClick = /**
     * *******
     *
     * \@description
     * click handler for the ClrSignpost trigger button used to hide/show ClrSignpostContent.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ifOpenService.toggleWithEvent(event);
    };
    ClrSignpostTrigger.decorators = [
        { type: Directive, args: [{ selector: '[clrSignpostTrigger]', host: { class: 'signpost-trigger' } },] }
    ];
    /** @nocollapse */
    ClrSignpostTrigger.ctorParameters = function () { return [
        { type: IfOpenService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    ClrSignpostTrigger.propDecorators = {
        onSignpostTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ClrSignpostTrigger;
}());
export { ClrSignpostTrigger };
if (false) {
    /** @type {?} */
    ClrSignpostTrigger.prototype.subscriptions;
    /** @type {?} */
    ClrSignpostTrigger.prototype.ifOpenService;
    /** @type {?} */
    ClrSignpostTrigger.prototype.renderer;
    /** @type {?} */
    ClrSignpostTrigger.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QtdHJpZ2dlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvc2lnbnBvc3Qvc2lnbnBvc3QtdHJpZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV4RTtJQVlFLDRCQUFvQixhQUE0QixFQUFVLFFBQW1CLEVBQVUsRUFBYztRQUFyRyxpQkFVQztRQVZtQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRjdGLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUd6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBZTtZQUN0RCxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFpQixJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7OztJQUVILG1EQUFzQjs7Ozs7Ozs7SUFEdEIsVUFDdUIsS0FBWTtRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxFQUFFOzs7O2dCQUYzRSxhQUFhO2dCQUhtQyxTQUFTO2dCQUE5QyxVQUFVOzs7eUNBc0MzQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUluQyx5QkFBQztDQUFBLEFBckNELElBcUNDO1NBNUJZLGtCQUFrQjs7O0lBQzdCLDJDQUEyQzs7SUFFL0IsMkNBQW9DOztJQUFFLHNDQUEyQjs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtb3Blbi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclNpZ25wb3N0VHJpZ2dlcl0nLCBob3N0OiB7IGNsYXNzOiAnc2lnbnBvc3QtdHJpZ2dlcicgfSB9KVxuXG4vKioqKioqKioqXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIERpcmVjdGl2ZSBhZGRlZCB0byB0aGUgQ2xyU2lnbnBvc3QgVHJpZ2dlciBidXR0b24gdGhhdCB3aWxsIGNhbGwgdGhlIENsclNpZ25wb3N0LnRvZ2dsZSgpIGZ1bmN0aW9uIHRvIGhpZGUvc2hvdyB0aGVcbiAqIENsclNpZ25wb3N0Q29udGVudC5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBDbHJTaWducG9zdFRyaWdnZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpZk9wZW5TZXJ2aWNlOiBJZk9wZW5TZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuQ2hhbmdlLnN1YnNjcmliZSgoaXNPcGVuOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgLyoqKioqKioqKipcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBDbHJTaWducG9zdCB0cmlnZ2VyIGJ1dHRvbiB1c2VkIHRvIGhpZGUvc2hvdyBDbHJTaWducG9zdENvbnRlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uU2lnbnBvc3RUcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pZk9wZW5TZXJ2aWNlLnRvZ2dsZVdpdGhFdmVudChldmVudCk7XG4gIH1cbn1cbiJdfQ==