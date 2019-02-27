/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Injector, Input, Optional, Output, PLATFORM_ID, Renderer2, Self, ViewContainerRef, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FocusService } from '../common/providers/focus.service';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrDateContainer } from './date-container';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { IS_NEW_FORMS_LAYOUT } from '../common/providers/new-forms.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { datesAreEqual } from './utils/date-utils';
// There are four ways the datepicker value is set
// 1. Value set by user typing into text input as a string ex: '01/28/2015'
// 2. Value set explicitly by Angular Forms APIs as a string ex: '01/28/2015'
// 3. Value set by user via datepicker UI as a Date Object
// 4. Value set via `clrDate` input as a Date Object
var ClrDateInput = /** @class */ (function (_super) {
    tslib_1.__extends(ClrDateInput, _super);
    function ClrDateInput(viewContainerRef, injector, el, renderer, control, container, dateIOService, dateNavigationService, datepickerEnabledService, dateFormControlService, platformId, focusService, newFormsLayout, datepickerFocusService) {
        var _this = _super.call(this, viewContainerRef, ClrDateContainer, injector, control, renderer, el) || this;
        _this.el = el;
        _this.renderer = renderer;
        _this.control = control;
        _this.container = container;
        _this.dateIOService = dateIOService;
        _this.dateNavigationService = dateNavigationService;
        _this.datepickerEnabledService = datepickerEnabledService;
        _this.dateFormControlService = dateFormControlService;
        _this.platformId = platformId;
        _this.focusService = focusService;
        _this.newFormsLayout = newFormsLayout;
        _this.datepickerFocusService = datepickerFocusService;
        _this.dateChange = new EventEmitter(false);
        _this.index = 4;
        return _this;
    }
    Object.defineProperty(ClrDateInput.prototype, "date", {
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            if (this.previousDateChange !== date) {
                this.updateDate(this.getValidDateValueFromDate(date));
            }
            if (!this.initialClrDateInputValue) {
                this.initialClrDateInputValue = date;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrDateInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setFormLayout();
        this.populateServicesFromContainerComponent();
        this.subscriptions.push(this.listenForUserSelectedDayChanges(), this.listenForControlValueChanges(), this.listenForTouchChanges(), this.listenForDirtyChanges(), this.listenForInputRefocus());
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // I don't know why I have to do this but after using the new HostWrapping Module I have to delay the processing
        // of the initial Input set by the user to here. If I do not 2 issues occur:
        // 1. The Input setter is called before ngOnInit. ngOnInit initializes the services without which the setter fails.
        // 2. The Renderer doesn't work before ngAfterViewInit (It used to before the new HostWrapping Module for some reason).
        // I need the renderer to set the value property on the input to make sure that if the user has supplied a Date
        // input object, we reflect it with the right date on the input field using the IO service. I am not sure if
        // these are major issues or not but just noting them down here.
        this.processInitialInputs();
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.setFocusStates = /**
     * @return {?}
     */
    function () {
        this.setFocus(true);
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.triggerValidation = /**
     * @return {?}
     */
    function () {
        _super.prototype.triggerValidation.call(this);
        this.setFocus(false);
    };
    Object.defineProperty(ClrDateInput.prototype, "placeholderText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.placeholder ? this.placeholder : this.dateIOService.placeholderText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrDateInput.prototype, "inputType", {
        get: /**
         * @return {?}
         */
        function () {
            return isPlatformBrowser(this.platformId) && this.datepickerEnabledService.isEnabled ? 'text' : 'date';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} target
     * @return {?}
     */
    ClrDateInput.prototype.onValueChange = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var validDateValue = this.dateIOService.getDateValueFromDateString(target.value);
        if (validDateValue) {
            this.updateDate(validDateValue, true);
        }
        else {
            this.emitDateOutput(null);
        }
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    ClrDateInput.prototype.setFocus = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        if (this.focusService) {
            this.focusService.focused = focus;
        }
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.populateServicesFromContainerComponent = /**
     * @return {?}
     */
    function () {
        if (!this.container) {
            this.dateIOService = this.getProviderFromContainer(DateIOService);
            this.dateNavigationService = this.getProviderFromContainer(DateNavigationService);
            this.datepickerEnabledService = this.getProviderFromContainer(DatepickerEnabledService);
            this.dateFormControlService = this.getProviderFromContainer(DateFormControlService);
        }
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.processInitialInputs = /**
     * @return {?}
     */
    function () {
        if (this.datepickerHasFormControl()) {
            this.updateDate(this.dateIOService.getDateValueFromDateString(this.control.value));
        }
        else {
            this.updateDate(this.initialClrDateInputValue);
        }
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.setFormLayout = /**
     * @return {?}
     */
    function () {
        if (this.clrNewLayout !== undefined) {
            this.newFormsLayout = !!this.clrNewLayout;
        }
    };
    /**
     * @param {?} value
     * @param {?=} setByUserInteraction
     * @return {?}
     */
    ClrDateInput.prototype.updateDate = /**
     * @param {?} value
     * @param {?=} setByUserInteraction
     * @return {?}
     */
    function (value, setByUserInteraction) {
        if (setByUserInteraction === void 0) { setByUserInteraction = false; }
        /** @type {?} */
        var date = this.getValidDateValueFromDate(value);
        if (setByUserInteraction) {
            this.emitDateOutput(date);
        }
        else {
            this.previousDateChange = date;
        }
        if (this.dateNavigationService) {
            this.dateNavigationService.selectedDay = date
                ? new DayModel(date.getFullYear(), date.getMonth(), date.getDate())
                : null;
        }
        this.updateInput(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    ClrDateInput.prototype.updateInput = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (date) {
            /** @type {?} */
            var dateString = this.dateIOService.toLocaleDisplayFormatString(date);
            if (this.datepickerHasFormControl() && dateString !== this.control.value) {
                this.control.control.setValue(dateString);
            }
            else {
                this.renderer.setProperty(this.el.nativeElement, 'value', dateString);
            }
        }
        else {
            this.renderer.setProperty(this.el.nativeElement, 'value', '');
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    ClrDateInput.prototype.getValidDateValueFromDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.dateIOService) {
            /** @type {?} */
            var dateString = this.dateIOService.toLocaleDisplayFormatString(date);
            return this.dateIOService.getDateValueFromDateString(dateString);
        }
        else {
            return null;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    ClrDateInput.prototype.emitDateOutput = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!datesAreEqual(date, this.previousDateChange)) {
            this.dateChange.emit(date);
            this.previousDateChange = date;
        }
        else if (!date && this.previousDateChange) {
            this.dateChange.emit(null);
            this.previousDateChange = null;
        }
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.datepickerHasFormControl = /**
     * @return {?}
     */
    function () {
        return !!this.control;
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.listenForControlValueChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return of(this.datepickerHasFormControl())
            .pipe(filter(function (hasControl) { return hasControl; }), switchMap(function () { return _this.control.valueChanges; }), 
        // only update date value if not being set by user
        filter(function () { return !_this.datepickerFocusService.elementIsFocused(_this.el.nativeElement); }))
            .subscribe(function (value) { return _this.updateDate(_this.dateIOService.getDateValueFromDateString(value)); });
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.listenForUserSelectedDayChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dateNavigationService.selectedDayChange.subscribe(function (dayModel) { return _this.updateDate(dayModel.toDate(), true); });
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.listenForTouchChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dateFormControlService.touchedChange
            .pipe(filter(function () { return _this.datepickerHasFormControl(); }))
            .subscribe(function () { return _this.control.control.markAsTouched(); });
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.listenForDirtyChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dateFormControlService.dirtyChange
            .pipe(filter(function () { return _this.datepickerHasFormControl(); }))
            .subscribe(function () { return _this.control.control.markAsDirty(); });
    };
    /**
     * @return {?}
     */
    ClrDateInput.prototype.listenForInputRefocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dateNavigationService.selectedDayChange
            .pipe(filter(function (date) { return !!date; }))
            .subscribe(function (v) { return _this.datepickerFocusService.focusInput(_this.el.nativeElement); });
    };
    ClrDateInput.decorators = [
        { type: Directive, args: [{
                    selector: '[clrDate]',
                    host: {
                        '[class.date-input]': '!newFormsLayout',
                        '[class.clr-input]': 'newFormsLayout',
                    },
                    providers: [DatepickerFocusService],
                },] }
    ];
    /** @nocollapse */
    ClrDateInput.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Injector },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
        { type: ClrDateContainer, decorators: [{ type: Optional }] },
        { type: DateIOService, decorators: [{ type: Optional }] },
        { type: DateNavigationService, decorators: [{ type: Optional }] },
        { type: DatepickerEnabledService, decorators: [{ type: Optional }] },
        { type: DateFormControlService, decorators: [{ type: Optional }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: FocusService, decorators: [{ type: Optional }] },
        { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [IS_NEW_FORMS_LAYOUT,] }] },
        { type: DatepickerFocusService }
    ]; };
    ClrDateInput.propDecorators = {
        placeholder: [{ type: Input }],
        clrNewLayout: [{ type: Input }],
        dateChange: [{ type: Output, args: ['clrDateChange',] }],
        date: [{ type: Input, args: ['clrDate',] }],
        setFocusStates: [{ type: HostListener, args: ['focus',] }],
        triggerValidation: [{ type: HostListener, args: ['blur',] }],
        placeholderText: [{ type: HostBinding, args: ['attr.placeholder',] }],
        inputType: [{ type: HostBinding, args: ['attr.type',] }],
        onValueChange: [{ type: HostListener, args: ['change', ['$event.target'],] }]
    };
    return ClrDateInput;
}(WrappedFormControl));
export { ClrDateInput };
if (false) {
    /** @type {?} */
    ClrDateInput.prototype.placeholder;
    /** @type {?} */
    ClrDateInput.prototype.clrNewLayout;
    /** @type {?} */
    ClrDateInput.prototype.dateChange;
    /** @type {?} */
    ClrDateInput.prototype.index;
    /** @type {?} */
    ClrDateInput.prototype.initialClrDateInputValue;
    /** @type {?} */
    ClrDateInput.prototype.previousDateChange;
    /** @type {?} */
    ClrDateInput.prototype.el;
    /** @type {?} */
    ClrDateInput.prototype.renderer;
    /** @type {?} */
    ClrDateInput.prototype.control;
    /** @type {?} */
    ClrDateInput.prototype.container;
    /** @type {?} */
    ClrDateInput.prototype.dateIOService;
    /** @type {?} */
    ClrDateInput.prototype.dateNavigationService;
    /** @type {?} */
    ClrDateInput.prototype.datepickerEnabledService;
    /** @type {?} */
    ClrDateInput.prototype.dateFormControlService;
    /** @type {?} */
    ClrDateInput.prototype.platformId;
    /** @type {?} */
    ClrDateInput.prototype.focusService;
    /** @type {?} */
    ClrDateInput.prototype.newFormsLayout;
    /** @type {?} */
    ClrDateInput.prototype.datepickerFocusService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2RhdGVwaWNrZXIvZGF0ZS1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULElBQUksRUFDSixnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FB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IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFNlbGYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vcHJvdmlkZXJzL2ZvY3VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgV3JhcHBlZEZvcm1Db250cm9sIH0gZnJvbSAnLi4vY29tbW9uL3dyYXBwZWQtY29udHJvbCc7XG5pbXBvcnQgeyBDbHJEYXRlQ29udGFpbmVyIH0gZnJvbSAnLi9kYXRlLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBEYXlNb2RlbCB9IGZyb20gJy4vbW9kZWwvZGF5Lm1vZGVsJztcbmltcG9ydCB7IERhdGVGb3JtQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kYXRlLWZvcm0tY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVJT1NlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kYXRlLWlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZGF0ZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckVuYWJsZWRTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZGF0ZXBpY2tlci1lbmFibGVkLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVNfTkVXX0ZPUk1TX0xBWU9VVCB9IGZyb20gJy4uL2NvbW1vbi9wcm92aWRlcnMvbmV3LWZvcm1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlckZvY3VzU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2RhdGVwaWNrZXItZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBkYXRlc0FyZUVxdWFsIH0gZnJvbSAnLi91dGlscy9kYXRlLXV0aWxzJztcblxuLy8gVGhlcmUgYXJlIGZvdXIgd2F5cyB0aGUgZGF0ZXBpY2tlciB2YWx1ZSBpcyBzZXRcbi8vIDEuIFZhbHVlIHNldCBieSB1c2VyIHR5cGluZyBpbnRvIHRleHQgaW5wdXQgYXMgYSBzdHJpbmcgZXg6ICcwMS8yOC8yMDE1J1xuLy8gMi4gVmFsdWUgc2V0IGV4cGxpY2l0bHkgYnkgQW5ndWxhciBGb3JtcyBBUElzIGFzIGEgc3RyaW5nIGV4OiAnMDEvMjgvMjAxNSdcbi8vIDMuIFZhbHVlIHNldCBieSB1c2VyIHZpYSBkYXRlcGlja2VyIFVJIGFzIGEgRGF0ZSBPYmplY3Rcbi8vIDQuIFZhbHVlIHNldCB2aWEgYGNsckRhdGVgIGlucHV0IGFzIGEgRGF0ZSBPYmplY3RcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NsckRhdGVdJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGF0ZS1pbnB1dF0nOiAnIW5ld0Zvcm1zTGF5b3V0JyxcbiAgICAnW2NsYXNzLmNsci1pbnB1dF0nOiAnbmV3Rm9ybXNMYXlvdXQnLFxuICB9LFxuICBwcm92aWRlcnM6IFtEYXRlcGlja2VyRm9jdXNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRGF0ZUlucHV0IGV4dGVuZHMgV3JhcHBlZEZvcm1Db250cm9sPENsckRhdGVDb250YWluZXI+IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjbHJOZXdMYXlvdXQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoJ2NsckRhdGVDaGFuZ2UnKSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KGZhbHNlKTtcbiAgQElucHV0KCdjbHJEYXRlJylcbiAgc2V0IGRhdGUoZGF0ZTogRGF0ZSkge1xuICAgIGlmICh0aGlzLnByZXZpb3VzRGF0ZUNoYW5nZSAhPT0gZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVEYXRlKHRoaXMuZ2V0VmFsaWREYXRlVmFsdWVGcm9tRGF0ZShkYXRlKSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxDbHJEYXRlSW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5pbml0aWFsQ2xyRGF0ZUlucHV0VmFsdWUgPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbmRleCA9IDQ7XG4gIHByaXZhdGUgaW5pdGlhbENsckRhdGVJbnB1dFZhbHVlOiBEYXRlO1xuICBwcml2YXRlIHByZXZpb3VzRGF0ZUNoYW5nZTogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRhaW5lcjogQ2xyRGF0ZUNvbnRhaW5lcixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVJT1NlcnZpY2U6IERhdGVJT1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkYXRlTmF2aWdhdGlvblNlcnZpY2U6IERhdGVOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRhdGVwaWNrZXJFbmFibGVkU2VydmljZTogRGF0ZXBpY2tlckVuYWJsZWRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGF0ZUZvcm1Db250cm9sU2VydmljZTogRGF0ZUZvcm1Db250cm9sU2VydmljZSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGZvY3VzU2VydmljZTogRm9jdXNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChJU19ORVdfRk9STVNfTEFZT1VUKVxuICAgIHB1YmxpYyBuZXdGb3Jtc0xheW91dDogYm9vbGVhbixcbiAgICBwcml2YXRlIGRhdGVwaWNrZXJGb2N1c1NlcnZpY2U6IERhdGVwaWNrZXJGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIodmlld0NvbnRhaW5lclJlZiwgQ2xyRGF0ZUNvbnRhaW5lciwgaW5qZWN0b3IsIGNvbnRyb2wsIHJlbmRlcmVyLCBlbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2V0Rm9ybUxheW91dCgpO1xuICAgIHRoaXMucG9wdWxhdGVTZXJ2aWNlc0Zyb21Db250YWluZXJDb21wb25lbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgdGhpcy5saXN0ZW5Gb3JVc2VyU2VsZWN0ZWREYXlDaGFuZ2VzKCksXG4gICAgICB0aGlzLmxpc3RlbkZvckNvbnRyb2xWYWx1ZUNoYW5nZXMoKSxcbiAgICAgIHRoaXMubGlzdGVuRm9yVG91Y2hDaGFuZ2VzKCksXG4gICAgICB0aGlzLmxpc3RlbkZvckRpcnR5Q2hhbmdlcygpLFxuICAgICAgdGhpcy5saXN0ZW5Gb3JJbnB1dFJlZm9jdXMoKVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gSSBkb24ndCBrbm93IHdoeSBJIGhhdmUgdG8gZG8gdGhpcyBidXQgYWZ0ZXIgdXNpbmcgdGhlIG5ldyBIb3N0V3JhcHBpbmcgTW9kdWxlIEkgaGF2ZSB0byBkZWxheSB0aGUgcHJvY2Vzc2luZ1xuICAgIC8vIG9mIHRoZSBpbml0aWFsIElucHV0IHNldCBieSB0aGUgdXNlciB0byBoZXJlLiBJZiBJIGRvIG5vdCAyIGlzc3VlcyBvY2N1cjpcbiAgICAvLyAxLiBUaGUgSW5wdXQgc2V0dGVyIGlzIGNhbGxlZCBiZWZvcmUgbmdPbkluaXQuIG5nT25Jbml0IGluaXRpYWxpemVzIHRoZSBzZXJ2aWNlcyB3aXRob3V0IHdoaWNoIHRoZSBzZXR0ZXIgZmFpbHMuXG4gICAgLy8gMi4gVGhlIFJlbmRlcmVyIGRvZXNuJ3Qgd29yayBiZWZvcmUgbmdBZnRlclZpZXdJbml0IChJdCB1c2VkIHRvIGJlZm9yZSB0aGUgbmV3IEhvc3RXcmFwcGluZyBNb2R1bGUgZm9yIHNvbWUgcmVhc29uKS5cbiAgICAvLyBJIG5lZWQgdGhlIHJlbmRlcmVyIHRvIHNldCB0aGUgdmFsdWUgcHJvcGVydHkgb24gdGhlIGlucHV0IHRvIG1ha2Ugc3VyZSB0aGF0IGlmIHRoZSB1c2VyIGhhcyBzdXBwbGllZCBhIERhdGVcbiAgICAvLyBpbnB1dCBvYmplY3QsIHdlIHJlZmxlY3QgaXQgd2l0aCB0aGUgcmlnaHQgZGF0ZSBvbiB0aGUgaW5wdXQgZmllbGQgdXNpbmcgdGhlIElPIHNlcnZpY2UuIEkgYW0gbm90IHN1cmUgaWZcbiAgICAvLyB0aGVzZSBhcmUgbWFqb3IgaXNzdWVzIG9yIG5vdCBidXQganVzdCBub3RpbmcgdGhlbSBkb3duIGhlcmUuXG4gICAgdGhpcy5wcm9jZXNzSW5pdGlhbElucHV0cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBzZXRGb2N1c1N0YXRlcygpIHtcbiAgICB0aGlzLnNldEZvY3VzKHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHRyaWdnZXJWYWxpZGF0aW9uKCkge1xuICAgIHN1cGVyLnRyaWdnZXJWYWxpZGF0aW9uKCk7XG4gICAgdGhpcy5zZXRGb2N1cyhmYWxzZSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucGxhY2Vob2xkZXInKVxuICBnZXQgcGxhY2Vob2xkZXJUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogdGhpcy5kYXRlSU9TZXJ2aWNlLnBsYWNlaG9sZGVyVGV4dDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci50eXBlJylcbiAgZ2V0IGlucHV0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuZGF0ZXBpY2tlckVuYWJsZWRTZXJ2aWNlLmlzRW5hYmxlZCA/ICd0ZXh0JyA6ICdkYXRlJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvblZhbHVlQ2hhbmdlKHRhcmdldDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IHZhbGlkRGF0ZVZhbHVlID0gdGhpcy5kYXRlSU9TZXJ2aWNlLmdldERhdGVWYWx1ZUZyb21EYXRlU3RyaW5nKHRhcmdldC52YWx1ZSk7XG5cbiAgICBpZiAodmFsaWREYXRlVmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlRGF0ZSh2YWxpZERhdGVWYWx1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1pdERhdGVPdXRwdXQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRGb2N1cyhmb2N1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmZvY3VzU2VydmljZSkge1xuICAgICAgdGhpcy5mb2N1c1NlcnZpY2UuZm9jdXNlZCA9IGZvY3VzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9wdWxhdGVTZXJ2aWNlc0Zyb21Db250YWluZXJDb21wb25lbnQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5kYXRlSU9TZXJ2aWNlID0gdGhpcy5nZXRQcm92aWRlckZyb21Db250YWluZXIoRGF0ZUlPU2VydmljZSk7XG4gICAgICB0aGlzLmRhdGVOYXZpZ2F0aW9uU2VydmljZSA9IHRoaXMuZ2V0UHJvdmlkZXJGcm9tQ29udGFpbmVyKERhdGVOYXZpZ2F0aW9uU2VydmljZSk7XG4gICAgICB0aGlzLmRhdGVwaWNrZXJFbmFibGVkU2VydmljZSA9IHRoaXMuZ2V0UHJvdmlkZXJGcm9tQ29udGFpbmVyKERhdGVwaWNrZXJFbmFibGVkU2VydmljZSk7XG4gICAgICB0aGlzLmRhdGVGb3JtQ29udHJvbFNlcnZpY2UgPSB0aGlzLmdldFByb3ZpZGVyRnJvbUNvbnRhaW5lcihEYXRlRm9ybUNvbnRyb2xTZXJ2aWNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NJbml0aWFsSW5wdXRzKCkge1xuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJIYXNGb3JtQ29udHJvbCgpKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGUodGhpcy5kYXRlSU9TZXJ2aWNlLmdldERhdGVWYWx1ZUZyb21EYXRlU3RyaW5nKHRoaXMuY29udHJvbC52YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGUodGhpcy5pbml0aWFsQ2xyRGF0ZUlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Rm9ybUxheW91dCgpIHtcbiAgICBpZiAodGhpcy5jbHJOZXdMYXlvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5uZXdGb3Jtc0xheW91dCA9ICEhdGhpcy5jbHJOZXdMYXlvdXQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKHZhbHVlOiBEYXRlLCBzZXRCeVVzZXJJbnRlcmFjdGlvbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZ2V0VmFsaWREYXRlVmFsdWVGcm9tRGF0ZSh2YWx1ZSk7XG5cbiAgICBpZiAoc2V0QnlVc2VySW50ZXJhY3Rpb24pIHtcbiAgICAgIHRoaXMuZW1pdERhdGVPdXRwdXQoZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldmlvdXNEYXRlQ2hhbmdlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRlTmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgIHRoaXMuZGF0ZU5hdmlnYXRpb25TZXJ2aWNlLnNlbGVjdGVkRGF5ID0gZGF0ZVxuICAgICAgICA/IG5ldyBEYXlNb2RlbChkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgIDogbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUlucHV0KGRhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnB1dChkYXRlOiBEYXRlKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0aGlzLmRhdGVJT1NlcnZpY2UudG9Mb2NhbGVEaXNwbGF5Rm9ybWF0U3RyaW5nKGRhdGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRlcGlja2VySGFzRm9ybUNvbnRyb2woKSAmJiBkYXRlU3RyaW5nICE9PSB0aGlzLmNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmNvbnRyb2wuc2V0VmFsdWUoZGF0ZVN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgZGF0ZVN0cmluZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWxpZERhdGVWYWx1ZUZyb21EYXRlKGRhdGU6IERhdGUpIHtcbiAgICBpZiAodGhpcy5kYXRlSU9TZXJ2aWNlKSB7XG4gICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGhpcy5kYXRlSU9TZXJ2aWNlLnRvTG9jYWxlRGlzcGxheUZvcm1hdFN0cmluZyhkYXRlKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVJT1NlcnZpY2UuZ2V0RGF0ZVZhbHVlRnJvbURhdGVTdHJpbmcoZGF0ZVN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW1pdERhdGVPdXRwdXQoZGF0ZTogRGF0ZSkge1xuICAgIGlmICghZGF0ZXNBcmVFcXVhbChkYXRlLCB0aGlzLnByZXZpb3VzRGF0ZUNoYW5nZSkpIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgICAgdGhpcy5wcmV2aW91c0RhdGVDaGFuZ2UgPSBkYXRlO1xuICAgIH0gZWxzZSBpZiAoIWRhdGUgJiYgdGhpcy5wcmV2aW91c0RhdGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG51bGwpO1xuICAgICAgdGhpcy5wcmV2aW91c0RhdGVDaGFuZ2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGF0ZXBpY2tlckhhc0Zvcm1Db250cm9sKCkge1xuICAgIHJldHVybiAhIXRoaXMuY29udHJvbDtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuRm9yQ29udHJvbFZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gb2YodGhpcy5kYXRlcGlja2VySGFzRm9ybUNvbnRyb2woKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoaGFzQ29udHJvbCA9PiBoYXNDb250cm9sKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMpLFxuICAgICAgICAvLyBvbmx5IHVwZGF0ZSBkYXRlIHZhbHVlIGlmIG5vdCBiZWluZyBzZXQgYnkgdXNlclxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuZGF0ZXBpY2tlckZvY3VzU2VydmljZS5lbGVtZW50SXNGb2N1c2VkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnVwZGF0ZURhdGUodGhpcy5kYXRlSU9TZXJ2aWNlLmdldERhdGVWYWx1ZUZyb21EYXRlU3RyaW5nKHZhbHVlKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JVc2VyU2VsZWN0ZWREYXlDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVOYXZpZ2F0aW9uU2VydmljZS5zZWxlY3RlZERheUNoYW5nZS5zdWJzY3JpYmUoZGF5TW9kZWwgPT4gdGhpcy51cGRhdGVEYXRlKGRheU1vZGVsLnRvRGF0ZSgpLCB0cnVlKSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbkZvclRvdWNoQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybUNvbnRyb2xTZXJ2aWNlLnRvdWNoZWRDaGFuZ2VcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLmRhdGVwaWNrZXJIYXNGb3JtQ29udHJvbCgpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgbGlzdGVuRm9yRGlydHlDaGFuZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtQ29udHJvbFNlcnZpY2UuZGlydHlDaGFuZ2VcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLmRhdGVwaWNrZXJIYXNGb3JtQ29udHJvbCgpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jb250cm9sLmNvbnRyb2wubWFya0FzRGlydHkoKSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbkZvcklucHV0UmVmb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlTmF2aWdhdGlvblNlcnZpY2Uuc2VsZWN0ZWREYXlDaGFuZ2VcbiAgICAgIC5waXBlKGZpbHRlcihkYXRlID0+ICEhZGF0ZSkpXG4gICAgICAuc3Vic2NyaWJlKHYgPT4gdGhpcy5kYXRlcGlja2VyRm9jdXNTZXJ2aWNlLmZvY3VzSW5wdXQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSk7XG4gIH1cbn1cbiJdfQ==