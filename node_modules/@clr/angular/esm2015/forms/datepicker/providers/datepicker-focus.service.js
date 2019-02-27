/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { first, filter } from 'rxjs/operators';
/**
 * This service focuses the day that is focusable in the calendar.
 */
export class DatepickerFocusService {
    /**
     * @param {?} _ngZone
     * @param {?} platformId
     */
    constructor(_ngZone, platformId) {
        this._ngZone = _ngZone;
        this.platformId = platformId;
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    focusCell(elRef) {
        this._ngZone.runOutsideAngular(() => {
            this.ngZoneIsStableInBrowser().subscribe(() => {
                /** @type {?} */
                const focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
                if (focusEl) {
                    focusEl.focus();
                }
            });
        });
    }
    /**
     * @param {?} element
     * @return {?}
     */
    focusInput(element) {
        this._ngZone.runOutsideAngular(() => this.ngZoneIsStableInBrowser().subscribe(() => element.focus()));
    }
    /**
     * @param {?} element
     * @return {?}
     */
    elementIsFocused(element) {
        return isPlatformBrowser(this.platformId) && document.activeElement === element;
    }
    /**
     * @return {?}
     */
    ngZoneIsStableInBrowser() {
        // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
        return this._ngZone.onStable.asObservable().pipe(first(), filter(() => isPlatformBrowser(this.platformId)));
    }
}
DatepickerFocusService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DatepickerFocusService.ctorParameters = () => [
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /** @type {?} */
    DatepickerFocusService.prototype._ngZone;
    /** @type {?} */
    DatepickerFocusService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9wcm92aWRlcnMvZGF0ZXBpY2tlci1mb2N1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU0vQyxNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUNqQyxZQUFvQixPQUFlLEVBQStCLFVBQWtCO1FBQWhFLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBK0IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUFHLENBQUM7Ozs7O0lBRXhGLFNBQVMsQ0FBQyxLQUFpQjtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztzQkFDdEMsT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO2dCQUNuRSxJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2pCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUF5QjtRQUN4QyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQztJQUNsRixDQUFDOzs7O0lBRU8sdUJBQXVCO1FBQzdCLG9HQUFvRztRQUNwRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7WUExQkYsVUFBVTs7OztZQU44QixNQUFNO1lBUWlDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXOzs7O0lBQTVDLHlDQUF1Qjs7SUFBRSw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgZm9jdXNlcyB0aGUgZGF5IHRoYXQgaXMgZm9jdXNhYmxlIGluIHRoZSBjYWxlbmRhci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJGb2N1c1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QpIHt9XG5cbiAgZm9jdXNDZWxsKGVsUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubmdab25lSXNTdGFibGVJbkJyb3dzZXIoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb2N1c0VsID0gZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbdGFiaW5kZXg9XCIwXCJdJyk7XG4gICAgICAgIGlmIChmb2N1c0VsKSB7XG4gICAgICAgICAgZm9jdXNFbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzSW5wdXQoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLm5nWm9uZUlzU3RhYmxlSW5Ccm93c2VyKCkuc3Vic2NyaWJlKCgpID0+IGVsZW1lbnQuZm9jdXMoKSkpO1xuICB9XG5cbiAgZWxlbWVudElzRm9jdXNlZChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgbmdab25lSXNTdGFibGVJbkJyb3dzZXIoKSB7XG4gICAgLy8gQ3JlZGl0OiBNYXRlcmlhbDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvZGF0ZXBpY2tlci9jYWxlbmRhci50c1xuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShmaXJzdCgpLCBmaWx0ZXIoKCkgPT4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkpO1xuICB9XG59XG4iXX0=