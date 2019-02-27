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
import { FormatWidth, FormStyle, getLocaleDateFormat, getLocaleDayNames, getLocaleFirstDayOfWeek, getLocaleMonthNames, TranslationWidth, } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
/**
 * This service extracts the Angular CLDR data needed by the datepicker.
 */
var LocaleHelperService = /** @class */ (function () {
    function LocaleHelperService(locale) {
        this.locale = locale;
        this._firstDayOfWeek = 0;
        this.initializeLocaleData();
    }
    Object.defineProperty(LocaleHelperService.prototype, "firstDayOfWeek", {
        get: /**
         * @return {?}
         */
        function () {
            return this._firstDayOfWeek;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleHelperService.prototype, "localeDaysNarrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeDaysNarrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleHelperService.prototype, "localeMonthsAbbreviated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeMonthsAbbreviated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleHelperService.prototype, "localeMonthsWide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeMonthsWide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocaleHelperService.prototype, "localeDateFormat", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeDateFormat;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes the locale data.
     */
    /**
     * Initializes the locale data.
     * @return {?}
     */
    LocaleHelperService.prototype.initializeLocaleData = /**
     * Initializes the locale data.
     * @return {?}
     */
    function () {
        // Order in which these functions is called is very important.
        this.initializeFirstDayOfWeek();
        this.initializeLocaleDateFormat();
        this.initializeLocaleMonthsAbbreviated();
        this.initializeLocaleMonthsWide();
        this.initializeLocaleDaysNarrow();
    };
    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     */
    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     * @return {?}
     */
    LocaleHelperService.prototype.initializeLocaleDaysNarrow = /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     * @return {?}
     */
    function () {
        // Get locale day names starting with Sunday
        /** @type {?} */
        var tempArr = getLocaleDayNames(this.locale, FormStyle.Standalone, TranslationWidth.Narrow).slice();
        // Get first day of the week based on the locale
        /** @type {?} */
        var firstDayOfWeek = this.firstDayOfWeek;
        // Rearrange the tempArr to start with the first day of the week based on the locale.
        if (firstDayOfWeek > 0) {
            /** @type {?} */
            var prevDays = tempArr.splice(0, firstDayOfWeek);
            tempArr.push.apply(tempArr, tslib_1.__spread(prevDays));
        }
        this._localeDaysNarrow = tempArr;
    };
    /**
     * Initializes the array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     */
    /**
     * Initializes the array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     * @return {?}
     */
    LocaleHelperService.prototype.initializeLocaleMonthsAbbreviated = /**
     * Initializes the array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     * @return {?}
     */
    function () {
        this._localeMonthsAbbreviated = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Abbreviated).slice();
    };
    /**
     * Initializes the array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     */
    /**
     * Initializes the array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     * @return {?}
     */
    LocaleHelperService.prototype.initializeLocaleMonthsWide = /**
     * Initializes the array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     * @return {?}
     */
    function () {
        this._localeMonthsWide = getLocaleMonthNames(this.locale, FormStyle.Standalone, TranslationWidth.Wide).slice();
    };
    /**
     * Initializes the first day of the week based on the locale.
     */
    /**
     * Initializes the first day of the week based on the locale.
     * @return {?}
     */
    LocaleHelperService.prototype.initializeFirstDayOfWeek = /**
     * Initializes the first day of the week based on the locale.
     * @return {?}
     */
    function () {
        this._firstDayOfWeek = getLocaleFirstDayOfWeek(this.locale);
    };
    /**
     * @return {?}
     */
    LocaleHelperService.prototype.initializeLocaleDateFormat = /**
     * @return {?}
     */
    function () {
        this._localeDateFormat = getLocaleDateFormat(this.locale, FormatWidth.Short);
    };
    LocaleHelperService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocaleHelperService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    return LocaleHelperService;
}());
export { LocaleHelperService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLWhlbHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9wcm92aWRlcnMvbG9jYWxlLWhlbHBlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzlEO0lBRUUsNkJBQXNDLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSTVDLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBSGxDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFRRCxzQkFBSSwrQ0FBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0RBQXVCOzs7O1FBQTNCO1lBQ0UsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0ssa0RBQW9COzs7O0lBQTVCO1FBQ0UsOERBQThEO1FBQzlELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNLLHdEQUEwQjs7Ozs7SUFBbEM7OztZQUVRLE9BQU8sR0FBYSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFOzs7WUFFekcsY0FBYyxHQUFXLElBQUksQ0FBQyxjQUFjO1FBQ2xELHFGQUFxRjtRQUNyRixJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7O2dCQUNoQixRQUFRLEdBQWEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDO1lBQzVELE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxRQUFRLEdBQUU7U0FDM0I7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNLLCtEQUFpQzs7Ozs7SUFBekM7UUFDRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsbUJBQW1CLENBQ2pELElBQUksQ0FBQyxNQUFNLEVBQ1gsU0FBUyxDQUFDLFVBQVUsRUFDcEIsZ0JBQWdCLENBQUMsV0FBVyxDQUM3QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0ssd0RBQTBCOzs7OztJQUFsQztRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakgsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNLLHNEQUF3Qjs7OztJQUFoQztRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFTyx3REFBMEI7OztJQUFsQztRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDOztnQkExRkYsVUFBVTs7Ozs2Q0FFSSxNQUFNLFNBQUMsU0FBUzs7SUF5Ri9CLDBCQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0ExRlksbUJBQW1COzs7SUFLOUIsOENBQW9DOztJQUNwQyxnREFBaUQ7O0lBQ2pELHVEQUF3RDs7SUFDeEQsZ0RBQWlEOztJQUNqRCxnREFBa0M7O0lBUnRCLHFDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHtcbiAgRm9ybWF0V2lkdGgsXG4gIEZvcm1TdHlsZSxcbiAgZ2V0TG9jYWxlRGF0ZUZvcm1hdCxcbiAgZ2V0TG9jYWxlRGF5TmFtZXMsXG4gIGdldExvY2FsZUZpcnN0RGF5T2ZXZWVrLFxuICBnZXRMb2NhbGVNb250aE5hbWVzLFxuICBUcmFuc2xhdGlvbldpZHRoLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgZXh0cmFjdHMgdGhlIEFuZ3VsYXIgQ0xEUiBkYXRhIG5lZWRlZCBieSB0aGUgZGF0ZXBpY2tlci5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsZUhlbHBlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pbml0aWFsaXplTG9jYWxlRGF0YSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlyc3REYXlPZldlZWs6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2xvY2FsZURheXNOYXJyb3c6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgcHJpdmF0ZSBfbG9jYWxlTW9udGhzQWJicmV2aWF0ZWQ6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgcHJpdmF0ZSBfbG9jYWxlTW9udGhzV2lkZTogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICBwcml2YXRlIF9sb2NhbGVEYXRlRm9ybWF0OiBzdHJpbmc7XG5cbiAgZ2V0IGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrO1xuICB9XG5cbiAgZ2V0IGxvY2FsZURheXNOYXJyb3coKTogUmVhZG9ubHlBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlRGF5c05hcnJvdztcbiAgfVxuXG4gIGdldCBsb2NhbGVNb250aHNBYmJyZXZpYXRlZCgpOiBSZWFkb25seUFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVNb250aHNBYmJyZXZpYXRlZDtcbiAgfVxuXG4gIGdldCBsb2NhbGVNb250aHNXaWRlKCk6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZU1vbnRoc1dpZGU7XG4gIH1cblxuICBnZXQgbG9jYWxlRGF0ZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRlRm9ybWF0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBsb2NhbGUgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxvY2FsZURhdGEoKTogdm9pZCB7XG4gICAgLy8gT3JkZXIgaW4gd2hpY2ggdGhlc2UgZnVuY3Rpb25zIGlzIGNhbGxlZCBpcyB2ZXJ5IGltcG9ydGFudC5cbiAgICB0aGlzLmluaXRpYWxpemVGaXJzdERheU9mV2VlaygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxvY2FsZURhdGVGb3JtYXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVMb2NhbGVNb250aHNBYmJyZXZpYXRlZCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxvY2FsZU1vbnRoc1dpZGUoKTtcbiAgICB0aGlzLmluaXRpYWxpemVMb2NhbGVEYXlzTmFycm93KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkYXkgbmFtZXMgaW4gdGhlIFRyYW5zbGF0aW9uV2lkdGguTmFycm93IGZvcm1hdCBiYXNlZCBvbiB0aGUgbG9jYWxlLlxuICAgKiBlZzogW1MsIE0sIFQuLi5dIGZvciBlbi1VUy5cbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUxvY2FsZURheXNOYXJyb3coKTogdm9pZCB7XG4gICAgLy8gR2V0IGxvY2FsZSBkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXlcbiAgICBjb25zdCB0ZW1wQXJyOiBzdHJpbmdbXSA9IGdldExvY2FsZURheU5hbWVzKHRoaXMubG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpLnNsaWNlKCk7XG4gICAgLy8gR2V0IGZpcnN0IGRheSBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgbG9jYWxlXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWs6IG51bWJlciA9IHRoaXMuZmlyc3REYXlPZldlZWs7XG4gICAgLy8gUmVhcnJhbmdlIHRoZSB0ZW1wQXJyIHRvIHN0YXJ0IHdpdGggdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgbG9jYWxlLlxuICAgIGlmIChmaXJzdERheU9mV2VlayA+IDApIHtcbiAgICAgIGNvbnN0IHByZXZEYXlzOiBzdHJpbmdbXSA9IHRlbXBBcnIuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICAgIHRlbXBBcnIucHVzaCguLi5wcmV2RGF5cyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZURheXNOYXJyb3cgPSB0ZW1wQXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhcnJheSBvZiBtb250aCBuYW1lcyBpbiB0aGUgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZCBmb3JtYXQuXG4gICAqIGUuZy4gYFtKYW4sIEZlYiwgLi4uXWAgZm9yIGVuLVVTXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVMb2NhbGVNb250aHNBYmJyZXZpYXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2NhbGVNb250aHNBYmJyZXZpYXRlZCA9IGdldExvY2FsZU1vbnRoTmFtZXMoXG4gICAgICB0aGlzLmxvY2FsZSxcbiAgICAgIEZvcm1TdHlsZS5TdGFuZGFsb25lLFxuICAgICAgVHJhbnNsYXRpb25XaWR0aC5BYmJyZXZpYXRlZFxuICAgICkuc2xpY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgYXJyYXkgb2YgbW9udGggbmFtZXMgaW4gdGhlIFRyYW5zbGF0aW9uV2lkdGguV2lkZSBmb3JtYXQuXG4gICAqIGUuZy4gYFtKYW51YXJ5LCBGZWJydWFyeSwgLi4uXWAgZm9yIGVuLVVTXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxpemVMb2NhbGVNb250aHNXaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuX2xvY2FsZU1vbnRoc1dpZGUgPSBnZXRMb2NhbGVNb250aE5hbWVzKHRoaXMubG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5XaWRlKS5zbGljZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYmFzZWQgb24gdGhlIGxvY2FsZS5cbiAgICovXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUZpcnN0RGF5T2ZXZWVrKCk6IHZvaWQge1xuICAgIHRoaXMuX2ZpcnN0RGF5T2ZXZWVrID0gZ2V0TG9jYWxlRmlyc3REYXlPZldlZWsodGhpcy5sb2NhbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplTG9jYWxlRGF0ZUZvcm1hdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2NhbGVEYXRlRm9ybWF0ID0gZ2V0TG9jYWxlRGF0ZUZvcm1hdCh0aGlzLmxvY2FsZSwgRm9ybWF0V2lkdGguU2hvcnQpO1xuICB9XG59XG4iXX0=