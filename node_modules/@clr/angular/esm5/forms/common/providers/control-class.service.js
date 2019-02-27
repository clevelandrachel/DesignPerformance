/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
var ControlClassService = /** @class */ (function () {
    function ControlClassService() {
        this.className = '';
    }
    /**
     * @param {?=} invalid
     * @param {?=} grid
     * @param {?=} additional
     * @return {?}
     */
    ControlClassService.prototype.controlClass = /**
     * @param {?=} invalid
     * @param {?=} grid
     * @param {?=} additional
     * @return {?}
     */
    function (invalid, grid, additional) {
        if (invalid === void 0) { invalid = false; }
        if (grid === void 0) { grid = false; }
        if (additional === void 0) { additional = ''; }
        /** @type {?} */
        var controlClasses = [this.className, additional];
        if (invalid) {
            controlClasses.push('clr-error');
        }
        if (grid && this.className.indexOf('clr-col') === -1) {
            controlClasses.push('clr-col-md-10 clr-col-12');
        }
        return controlClasses.join(' ').trim();
    };
    // We want to remove the column classes from the input up to the container
    // We want to remove the column classes from the input up to the container
    /**
     * @param {?} renderer
     * @param {?} element
     * @return {?}
     */
    ControlClassService.prototype.initControlClass = 
    // We want to remove the column classes from the input up to the container
    /**
     * @param {?} renderer
     * @param {?} element
     * @return {?}
     */
    function (renderer, element) {
        if (element && element.className) {
            this.className = element.className;
            /** @type {?} */
            var klasses = element.className.split(' ');
            klasses.forEach(function (klass) {
                if (klass.startsWith('clr-col')) {
                    renderer.removeClass(element, klass);
                }
            });
        }
    };
    ControlClassService.decorators = [
        { type: Injectable }
    ];
    return ControlClassService;
}());
export { ControlClassService };
if (false) {
    /** @type {?} */
    ControlClassService.prototype.className;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1jbGFzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvY29tbW9uL3Byb3ZpZGVycy9jb250cm9sLWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUFBO1FBRUUsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQXlCakIsQ0FBQzs7Ozs7OztJQXZCQywwQ0FBWTs7Ozs7O0lBQVosVUFBYSxPQUFlLEVBQUUsSUFBWSxFQUFFLFVBQWU7UUFBOUMsd0JBQUEsRUFBQSxlQUFlO1FBQUUscUJBQUEsRUFBQSxZQUFZO1FBQUUsMkJBQUEsRUFBQSxlQUFlOztZQUNuRCxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUNuRCxJQUFJLE9BQU8sRUFBRTtZQUNYLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNwRCxjQUFjLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELDBFQUEwRTs7Ozs7OztJQUMxRSw4Q0FBZ0I7Ozs7Ozs7SUFBaEIsVUFBaUIsUUFBUSxFQUFFLE9BQW9CO1FBQzdDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOztnQkFDN0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM1QyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDbkIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBMUJGLFVBQVU7O0lBMkJYLDBCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksbUJBQW1COzs7SUFDOUIsd0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDbGFzc1NlcnZpY2Uge1xuICBjbGFzc05hbWUgPSAnJztcblxuICBjb250cm9sQ2xhc3MoaW52YWxpZCA9IGZhbHNlLCBncmlkID0gZmFsc2UsIGFkZGl0aW9uYWwgPSAnJykge1xuICAgIGNvbnN0IGNvbnRyb2xDbGFzc2VzID0gW3RoaXMuY2xhc3NOYW1lLCBhZGRpdGlvbmFsXTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY29udHJvbENsYXNzZXMucHVzaCgnY2xyLWVycm9yJyk7XG4gICAgfVxuICAgIGlmIChncmlkICYmIHRoaXMuY2xhc3NOYW1lLmluZGV4T2YoJ2Nsci1jb2wnKSA9PT0gLTEpIHtcbiAgICAgIGNvbnRyb2xDbGFzc2VzLnB1c2goJ2Nsci1jb2wtbWQtMTAgY2xyLWNvbC0xMicpO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbENsYXNzZXMuam9pbignICcpLnRyaW0oKTtcbiAgfVxuXG4gIC8vIFdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBjb2x1bW4gY2xhc3NlcyBmcm9tIHRoZSBpbnB1dCB1cCB0byB0aGUgY29udGFpbmVyXG4gIGluaXRDb250cm9sQ2xhc3MocmVuZGVyZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWU7XG4gICAgICBjb25zdCBrbGFzc2VzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiB7XG4gICAgICAgIGlmIChrbGFzcy5zdGFydHNXaXRoKCdjbHItY29sJykpIHtcbiAgICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBrbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19