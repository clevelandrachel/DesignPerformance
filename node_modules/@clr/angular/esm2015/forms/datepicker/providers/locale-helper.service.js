/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { FormatWidth, FormStyle, getLocaleDateFormat, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth, } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
/**
 * This service extracts the Angular CLDR data needed by the datepicker.
 */
export class LocaleHelperService {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this.locale = locale;
        this._firstDayOfWeek = 0;
        this.initializeLocaleData();
    }
    /**
     * @return {?}
     */
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    /**
     * @return {?}
     */
    get localeDaysNarrow() {
        return this._localeDaysNarrow;
    }
    /**
     * @return {?}
     */
    get localeMonthsAbbreviated() {
        return this._localeMonthsAbbreviated;
    }
    /**
     * @return {?}
     */
    get localeMonthsWide() {
        return this._localeMonthsWide;
    }
    /**
     * @return {?}
     */
    get localeDateFormat() {
        return this._localeDateFormat;
    }
    /**
     * Initializes the locale data.
     * @return {?}
     */
    initializeLocaleData() {
        // Order in which these functions is called is very important.
        this.initializeFirstDayOfWeek();
        this.initializeLocaleDateFormat();
        this.initializeLocaleMonthsAbbreviated();
        this.initializeLocaleMonthsWide();
        this.initializeLocaleDaysNarrow();
    }
    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     * @return {?}
     */
    initializeLocaleDaysNarrow() {
        // Get locale day names starting with Sunday
        /** @type {?} */
        const tempArr = getLocaleDayNames(this.locale, FormStyle.Standalone, TranslationWidth.Narrow).slice();
        // Get first day of the week based on the locale
        /** @type {?} */
        const firstDayOfWeek = this.firstDayOfWeek;
        // Rearrange the tempArr to start with the first day of the week based on the locale.
        if (firstDayOfWeek > 0) {
            /** @type {?} */
            const prevDays = tempArr.splice(0, firstDayOfWeek);
            tempArr.push(...prevDays);
        }
        this._localeDaysNarrow = tempArr;
    }
    /**
     * Initializes the array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     * @return {?}
     */
    initializeLocaleMonthsAbbreviated() {
        this._localeMonthsAbbreviated = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Abbreviated).slice();
    }
    /**
     * Initializes the array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     * @return {?}
     */
    initializeLocaleMonthsWide() {
        this._localeMonthsWide = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide).slice();
    }
    /**
     * Initializes the first day of the week based on the locale.
     * @return {?}
     */
    initializeFirstDayOfWeek() {
        this._firstDayOfWeek = getLocaleFirstDayOfWeek(this.locale);
    }
    /**
     * @return {?}
     */
    initializeLocaleDateFormat() {
        this._localeDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
    }
}
LocaleHelperService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocaleHelperService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /** @type {?} */
    LocaleHelperService.prototype._firstDayOfWeek;
    /** @type {?} */
    LocaleHelperService.prototype._localeDaysNarrow;
    /** @type {?} */
    LocaleHelperService.prototype._localeMonthsAbbreviated;
    /** @type {?} */
    LocaleHelperService.prototype._localeMonthsWide;
    /** @type {?} */
    LocaleHelperService.prototype._localeDateFormat;
    /** @type {?} */
    LocaleHelperService.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWhlbHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9wcm92aWRlcnMvbG9jYWxlLWhlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixFQUNuQixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFNOUQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFzQyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUk1QyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUhsQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O0lBUUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksdUJBQXVCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFLTyxvQkFBb0I7UUFDMUIsOERBQThEO1FBQzlELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQU1PLDBCQUEwQjs7O2NBRTFCLE9BQU8sR0FBYSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFOzs7Y0FFekcsY0FBYyxHQUFXLElBQUksQ0FBQyxjQUFjO1FBQ2xELHFGQUFxRjtRQUNyRixJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7O2tCQUNoQixRQUFRLEdBQWEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDO1lBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O0lBTU8saUNBQWlDO1FBQ3ZDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxtQkFBbUIsQ0FDakQsSUFBSSxDQUFDLE1BQU0sRUFDWCxTQUFTLENBQUMsVUFBVSxFQUNwQixnQkFBZ0IsQ0FBQyxXQUFXLENBQzdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFNTywwQkFBMEI7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqSCxDQUFDOzs7OztJQUtPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRU8sMEJBQTBCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7WUExRkYsVUFBVTs7Ozt5Q0FFSSxNQUFNLFNBQUMsU0FBUzs7OztJQUk3Qiw4Q0FBb0M7O0lBQ3BDLGdEQUFpRDs7SUFDakQsdURBQXdEOztJQUN4RCxnREFBaUQ7O0lBQ2pELGdEQUFrQzs7SUFSdEIscUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQge1xuICBGb3JtYXRXaWR0aCxcbiAgRm9ybVN0eWxlLFxuICBnZXRMb2NhbGVEYXRlRm9ybWF0LFxuICBnZXRMb2NhbGVEYXlOYW1lcyxcbiAgZ2V0TG9jYWxlRmlyc3REYXlPZldlZWssXG4gIGdldExvY2FsZU1vbnRoTmFtZXMsXG4gIFRyYW5zbGF0aW9uV2lkdGgsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgc2VydmljZSBleHRyYWN0cyB0aGUgQW5ndWxhciBDTERSIGRhdGEgbmVlZGVkIGJ5IHRoZSBkYXRlcGlja2VyLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxlSGVscGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmluaXRpYWxpemVMb2NhbGVEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIF9maXJzdERheU9mV2VlazogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfbG9jYWxlRGF5c05hcnJvdzogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBwcml2YXRlIF9sb2NhbGVNb250aHNBYmJyZXZpYXRlZDogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBwcml2YXRlIF9sb2NhbGVNb250aHNXaWRlOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHByaXZhdGUgX2xvY2FsZURhdGVGb3JtYXQ6IHN0cmluZztcblxuICBnZXQgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyc3REYXlPZldlZWs7XG4gIH1cblxuICBnZXQgbG9jYWxlRGF5c05hcnJvdygpOiBSZWFkb25seUFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXlzTmFycm93O1xuICB9XG5cbiAgZ2V0IGxvY2FsZU1vbnRoc0FiYnJldmlhdGVkKCk6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZU1vbnRoc0FiYnJldmlhdGVkO1xuICB9XG5cbiAgZ2V0IGxvY2FsZU1vbnRoc1dpZGUoKTogUmVhZG9ubHlBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlTW9udGhzV2lkZTtcbiAgfVxuXG4gIGdldCBsb2NhbGVEYXRlRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZURhdGVGb3JtYXQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGxvY2FsZSBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplTG9jYWxlRGF0YSgpOiB2b2lkIHtcbiAgICAvLyBPcmRlciBpbiB3aGljaCB0aGVzZSBmdW5jdGlvbnMgaXMgY2FsbGVkIGlzIHZlcnkgaW1wb3J0YW50LlxuICAgIHRoaXMuaW5pdGlhbGl6ZUZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgdGhpcy5pbml0aWFsaXplTG9jYWxlRGF0ZUZvcm1hdCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxvY2FsZU1vbnRoc0FiYnJldmlhdGVkKCk7XG4gICAgdGhpcy5pbml0aWFsaXplTG9jYWxlTW9udGhzV2lkZSgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxvY2FsZURheXNOYXJyb3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRheSBuYW1lcyBpbiB0aGUgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cgZm9ybWF0IGJhc2VkIG9uIHRoZSBsb2NhbGUuXG4gICAqIGVnOiBbUywgTSwgVC4uLl0gZm9yIGVuLVVTLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplTG9jYWxlRGF5c05hcnJvdygpOiB2b2lkIHtcbiAgICAvLyBHZXQgbG9jYWxlIGRheSBuYW1lcyBzdGFydGluZyB3aXRoIFN1bmRheVxuICAgIGNvbnN0IHRlbXBBcnI6IHN0cmluZ1tdID0gZ2V0TG9jYWxlRGF5TmFtZXModGhpcy5sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLk5hcnJvdykuc2xpY2UoKTtcbiAgICAvLyBHZXQgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIHRoZSBsb2NhbGVcbiAgICBjb25zdCBmaXJzdERheU9mV2VlazogbnVtYmVyID0gdGhpcy5maXJzdERheU9mV2VlaztcbiAgICAvLyBSZWFycmFuZ2UgdGhlIHRlbXBBcnIgdG8gc3RhcnQgd2l0aCB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIGJhc2VkIG9uIHRoZSBsb2NhbGUuXG4gICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCkge1xuICAgICAgY29uc3QgcHJldkRheXM6IHN0cmluZ1tdID0gdGVtcEFyci5zcGxpY2UoMCwgZmlyc3REYXlPZldlZWspO1xuICAgICAgdGVtcEFyci5wdXNoKC4uLnByZXZEYXlzKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlRGF5c05hcnJvdyA9IHRlbXBBcnI7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGFycmF5IG9mIG1vbnRoIG5hbWVzIGluIHRoZSBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkIGZvcm1hdC5cbiAgICogZS5nLiBgW0phbiwgRmViLCAuLi5dYCBmb3IgZW4tVVNcbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxvY2FsZU1vbnRoc0FiYnJldmlhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuX2xvY2FsZU1vbnRoc0FiYnJldmlhdGVkID0gZ2V0TG9jYWxlTW9udGhOYW1lcyhcbiAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgRm9ybVN0eWxlLlN0YW5kYWxvbmUsXG4gICAgICBUcmFuc2xhdGlvbldpZHRoLkFiYnJldmlhdGVkXG4gICAgKS5zbGljZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhcnJheSBvZiBtb250aCBuYW1lcyBpbiB0aGUgVHJhbnNsYXRpb25XaWR0aC5XaWRlIGZvcm1hdC5cbiAgICogZS5nLiBgW0phbnVhcnksIEZlYnJ1YXJ5LCAuLi5dYCBmb3IgZW4tVVNcbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxvY2FsZU1vbnRoc1dpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5fbG9jYWxlTW9udGhzV2lkZSA9IGdldExvY2FsZU1vbnRoTmFtZXModGhpcy5sb2NhbGUsIEZvcm1TdHlsZS5TdGFuZGFsb25lLCBUcmFuc2xhdGlvbldpZHRoLldpZGUpLnNsaWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgbG9jYWxlLlxuICAgKi9cbiAgcHJpdmF0ZSBpbml0aWFsaXplRmlyc3REYXlPZldlZWsoKTogdm9pZCB7XG4gICAgdGhpcy5fZmlyc3REYXlPZldlZWsgPSBnZXRMb2NhbGVGaXJzdERheU9mV2Vlayh0aGlzLmxvY2FsZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVMb2NhbGVEYXRlRm9ybWF0KCk6IHZvaWQge1xuICAgIHRoaXMuX2xvY2FsZURhdGVGb3JtYXQgPSBnZXRMb2NhbGVEYXRlRm9ybWF0KHRoaXMubG9jYWxlLCBGb3JtYXRXaWR0aC5TaG9ydCk7XG4gIH1cbn1cbiJdfQ==