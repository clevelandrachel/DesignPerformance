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
import { BIG_ENDIAN, DEFAULT_LOCALE_FORMAT, DELIMITER_REGEX, LITTLE_ENDIAN, LITTLE_ENDIAN_REGEX, MIDDLE_ENDIAN, MIDDLE_ENDIAN_REGEX, RTL_REGEX, USER_INPUT_REGEX, } from '../utils/constants';
import { getNumberOfDaysInTheMonth, parseToFourDigitYear } from '../utils/date-utils';
import { LocaleHelperService } from './locale-helper.service';
export class DateIOService {
    /**
     * @param {?} _localeHelperService
     */
    constructor(_localeHelperService) {
        this._localeHelperService = _localeHelperService;
        this.cldrLocaleDateFormat = DEFAULT_LOCALE_FORMAT;
        this.localeDisplayFormat = LITTLE_ENDIAN;
        this.delimiters = ['/', '/'];
        this.cldrLocaleDateFormat = this._localeHelperService.localeDateFormat;
        this.initializeLocaleDisplayFormat();
    }
    /**
     * @return {?}
     */
    initializeLocaleDisplayFormat() {
        /** @type {?} */
        const format = this.cldrLocaleDateFormat.toLocaleLowerCase();
        if (LITTLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = LITTLE_ENDIAN;
        }
        else if (MIDDLE_ENDIAN_REGEX.test(format)) {
            this.localeDisplayFormat = MIDDLE_ENDIAN;
        }
        else {
            // everything else is set to BIG-ENDIAN FORMAT
            this.localeDisplayFormat = BIG_ENDIAN;
        }
        this.extractDelimiters();
    }
    /**
     * @return {?}
     */
    extractDelimiters() {
        if (this.cldrLocaleDateFormat) {
            // Sanitize Date Format. Remove RTL characters.
            // FIXME: When we support RTL, remove this and handle it correctly.
            /** @type {?} */
            const localeFormat = this.cldrLocaleDateFormat.replace(RTL_REGEX, '');
            /** @type {?} */
            const delimiters = localeFormat.split(DELIMITER_REGEX);
            // NOTE: The split from the CLDR date format should always result
            // in an arary with 4 elements. The 1st and the 2nd values are the delimiters
            // we will use in order.
            // Eg: "dd/MM/y".split(/d+|m+|y+/i) results in ["", "/", "/", ""]
            if (delimiters && delimiters.length === 4) {
                this.delimiters = [delimiters[1], delimiters[2]];
            }
            else {
                console.error('Unexpected date format received. Delimiters extracted: ', delimiters);
            }
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toLocaleDisplayFormatString(date) {
        if (date) {
            if (isNaN(date.getTime())) {
                return '';
            }
            /** @type {?} */
            const dateNo = date.getDate();
            /** @type {?} */
            const monthNo = date.getMonth() + 1;
            /** @type {?} */
            const dateStr = dateNo > 9 ? dateNo.toString() : '0' + dateNo;
            /** @type {?} */
            const monthStr = monthNo > 9 ? monthNo.toString() : '0' + monthNo;
            if (this.localeDisplayFormat === LITTLE_ENDIAN) {
                return dateStr + this.delimiters[0] + monthStr + this.delimiters[1] + date.getFullYear();
            }
            else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
                return monthStr + this.delimiters[0] + dateStr + this.delimiters[1] + date.getFullYear();
            }
            else {
                return date.getFullYear() + this.delimiters[0] + monthStr + this.delimiters[1] + dateStr;
            }
        }
        return '';
    }
    /**
     * @return {?}
     */
    get placeholderText() {
        /** @type {?} */
        const format = this.localeDisplayFormat.format;
        return format[0] + this.delimiters[0] + format[1] + this.delimiters[1] + format[2];
    }
    /**
     * Checks if the month entered by the user is valid or not.
     * Note: Month is 0 based.
     * @param {?} month
     * @return {?}
     */
    isValidMonth(month) {
        return month > -1 && month < 12;
    }
    /**
     * Checks if the date is valid depending on the year and month provided.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    isValidDate(year, month, date) {
        return date > 0 && date <= getNumberOfDaysInTheMonth(year, month);
    }
    /**
     * Validates the parameters provided and returns the date.
     * If the parameters are not
     * valid then return null.
     * NOTE: (Month here is 1 based since the user has provided that as an input)
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    validateAndGetDate(year, month, date) {
        // I don't know whats wrong with the TS compiler. It throws an error if I write
        // the below if statement. The error is:
        // Operator '!==' cannot be applied to types '2' and '4'
        // More info here: https://github.com/Microsoft/TypeScript/issues/12794#issuecomment-270342936
        /*
            if (year.length !== 2 || year.length !== 4) {
                return null;
            }
            */
        // I don't know whats wrong with the TS compiler. It throws an error if I write
        // the below if statement. The error is:
        // Operator '!==' cannot be applied to types '2' and '4'
        // More info here: https://github.com/Microsoft/TypeScript/issues/12794#issuecomment-270342936
        /*
                if (year.length !== 2 || year.length !== 4) {
                    return null;
                }
                */
        // Instead I have to write the logic like this x-(
        /** @type {?} */
        const y = +year;
        /** @type {?} */
        const m = +month - 1;
        // month is 0 based
        /** @type {?} */
        const d = +date;
        if (!this.isValidMonth(m) || !this.isValidDate(y, m, d)) {
            return null;
        }
        /** @type {?} */
        const result = parseToFourDigitYear(y);
        return result !== -1 ? new Date(result, m, d) : null;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateValueFromDateString(date) {
        if (!date) {
            return null;
        }
        /** @type {?} */
        const dateParts = date.match(USER_INPUT_REGEX);
        if (!dateParts || dateParts.length !== 3) {
            return null;
        }
        const [firstPart, secondPart, thirdPart] = dateParts;
        if (this.localeDisplayFormat === LITTLE_ENDIAN) {
            // secondPart is month && firstPart is date
            return this.validateAndGetDate(thirdPart, secondPart, firstPart);
        }
        else if (this.localeDisplayFormat === MIDDLE_ENDIAN) {
            // firstPart is month && secondPart is date
            return this.validateAndGetDate(thirdPart, firstPart, secondPart);
        }
        else {
            // secondPart is month && thirdPart is date
            return this.validateAndGetDate(firstPart, secondPart, thirdPart);
        }
    }
}
DateIOService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DateIOService.ctorParameters = () => [
    { type: LocaleHelperService }
];
if (false) {
    /** @type {?} */
    DateIOService.prototype.cldrLocaleDateFormat;
    /** @type {?} */
    DateIOService.prototype.localeDisplayFormat;
    /** @type {?} */
    DateIOService.prototype.delimiters;
    /** @type {?} */
    DateIOService.prototype._localeHelperService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9wcm92aWRlcnMvZGF0ZS1pby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsZUFBZSxFQUVmLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHOUQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFLeEIsWUFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFKdEQseUJBQW9CLEdBQVcscUJBQXFCLENBQUM7UUFDcEQsd0JBQW1CLEdBQTJCLGFBQWEsQ0FBQztRQUM1RCxlQUFVLEdBQXFCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7UUFDdkUsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVPLDZCQUE2Qjs7Y0FDN0IsTUFBTSxHQUFXLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsRUFBRTtRQUNwRSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDO1NBQzFDO2FBQU0sSUFBSSxt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QU0sS0FBSyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtjQUNLLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsR0FBRyxTQUFTO1FBQ3BELElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLGFBQWEsRUFBRTtZQUM5QywyQ0FBMkM7WUFDM0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRTthQUFNLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLGFBQWEsRUFBRTtZQUNyRCwyQ0FBMkM7WUFDM0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsMkNBQTJDO1lBQzNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7WUFsSUYsVUFBVTs7OztZQUZGLG1CQUFtQjs7OztJQUkxQiw2Q0FBNEQ7O0lBQzVELDRDQUFvRTs7SUFDcEUsbUNBQWtEOztJQUV0Qyw2Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgQklHX0VORElBTixcbiAgREVGQVVMVF9MT0NBTEVfRk9STUFULFxuICBERUxJTUlURVJfUkVHRVgsXG4gIElucHV0RGF0ZURpc3BsYXlGb3JtYXQsXG4gIExJVFRMRV9FTkRJQU4sXG4gIExJVFRMRV9FTkRJQU5fUkVHRVgsXG4gIE1JRERMRV9FTkRJQU4sXG4gIE1JRERMRV9FTkRJQU5fUkVHRVgsXG4gIFJUTF9SRUdFWCxcbiAgVVNFUl9JTlBVVF9SRUdFWCxcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldE51bWJlck9mRGF5c0luVGhlTW9udGgsIHBhcnNlVG9Gb3VyRGlnaXRZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS11dGlscyc7XG5cbmltcG9ydCB7IExvY2FsZUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL2xvY2FsZS1oZWxwZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlSU9TZXJ2aWNlIHtcbiAgcHVibGljIGNsZHJMb2NhbGVEYXRlRm9ybWF0OiBzdHJpbmcgPSBERUZBVUxUX0xPQ0FMRV9GT1JNQVQ7XG4gIHByaXZhdGUgbG9jYWxlRGlzcGxheUZvcm1hdDogSW5wdXREYXRlRGlzcGxheUZvcm1hdCA9IExJVFRMRV9FTkRJQU47XG4gIHByaXZhdGUgZGVsaW1pdGVyczogW3N0cmluZywgc3RyaW5nXSA9IFsnLycsICcvJ107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYWxlSGVscGVyU2VydmljZTogTG9jYWxlSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuY2xkckxvY2FsZURhdGVGb3JtYXQgPSB0aGlzLl9sb2NhbGVIZWxwZXJTZXJ2aWNlLmxvY2FsZURhdGVGb3JtYXQ7XG4gICAgdGhpcy5pbml0aWFsaXplTG9jYWxlRGlzcGxheUZvcm1hdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplTG9jYWxlRGlzcGxheUZvcm1hdCgpOiB2b2lkIHtcbiAgICBjb25zdCBmb3JtYXQ6IHN0cmluZyA9IHRoaXMuY2xkckxvY2FsZURhdGVGb3JtYXQudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoTElUVExFX0VORElBTl9SRUdFWC50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRoaXMubG9jYWxlRGlzcGxheUZvcm1hdCA9IExJVFRMRV9FTkRJQU47XG4gICAgfSBlbHNlIGlmIChNSURETEVfRU5ESUFOX1JFR0VYLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhpcy5sb2NhbGVEaXNwbGF5Rm9ybWF0ID0gTUlERExFX0VORElBTjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXZlcnl0aGluZyBlbHNlIGlzIHNldCB0byBCSUctRU5ESUFOIEZPUk1BVFxuICAgICAgdGhpcy5sb2NhbGVEaXNwbGF5Rm9ybWF0ID0gQklHX0VORElBTjtcbiAgICB9XG4gICAgdGhpcy5leHRyYWN0RGVsaW1pdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGVsaW1pdGVycygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGRyTG9jYWxlRGF0ZUZvcm1hdCkge1xuICAgICAgLy8gU2FuaXRpemUgRGF0ZSBGb3JtYXQuIFJlbW92ZSBSVEwgY2hhcmFjdGVycy5cbiAgICAgIC8vIEZJWE1FOiBXaGVuIHdlIHN1cHBvcnQgUlRMLCByZW1vdmUgdGhpcyBhbmQgaGFuZGxlIGl0IGNvcnJlY3RseS5cbiAgICAgIGNvbnN0IGxvY2FsZUZvcm1hdDogc3RyaW5nID0gdGhpcy5jbGRyTG9jYWxlRGF0ZUZvcm1hdC5yZXBsYWNlKFJUTF9SRUdFWCwgJycpO1xuICAgICAgY29uc3QgZGVsaW1pdGVyczogc3RyaW5nW10gPSBsb2NhbGVGb3JtYXQuc3BsaXQoREVMSU1JVEVSX1JFR0VYKTtcblxuICAgICAgLy8gTk9URTogVGhlIHNwbGl0IGZyb20gdGhlIENMRFIgZGF0ZSBmb3JtYXQgc2hvdWxkIGFsd2F5cyByZXN1bHRcbiAgICAgIC8vIGluIGFuIGFyYXJ5IHdpdGggNCBlbGVtZW50cy4gVGhlIDFzdCBhbmQgdGhlIDJuZCB2YWx1ZXMgYXJlIHRoZSBkZWxpbWl0ZXJzXG4gICAgICAvLyB3ZSB3aWxsIHVzZSBpbiBvcmRlci5cbiAgICAgIC8vIEVnOiBcImRkL01NL3lcIi5zcGxpdCgvZCt8bSt8eSsvaSkgcmVzdWx0cyBpbiBbXCJcIiwgXCIvXCIsIFwiL1wiLCBcIlwiXVxuICAgICAgaWYgKGRlbGltaXRlcnMgJiYgZGVsaW1pdGVycy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgdGhpcy5kZWxpbWl0ZXJzID0gW2RlbGltaXRlcnNbMV0sIGRlbGltaXRlcnNbMl1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBkYXRlIGZvcm1hdCByZWNlaXZlZC4gRGVsaW1pdGVycyBleHRyYWN0ZWQ6ICcsIGRlbGltaXRlcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvTG9jYWxlRGlzcGxheUZvcm1hdFN0cmluZyhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlTm86IG51bWJlciA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgbW9udGhObzogbnVtYmVyID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgIGNvbnN0IGRhdGVTdHI6IHN0cmluZyA9IGRhdGVObyA+IDkgPyBkYXRlTm8udG9TdHJpbmcoKSA6ICcwJyArIGRhdGVObztcbiAgICAgIGNvbnN0IG1vbnRoU3RyOiBzdHJpbmcgPSBtb250aE5vID4gOSA/IG1vbnRoTm8udG9TdHJpbmcoKSA6ICcwJyArIG1vbnRoTm87XG4gICAgICBpZiAodGhpcy5sb2NhbGVEaXNwbGF5Rm9ybWF0ID09PSBMSVRUTEVfRU5ESUFOKSB7XG4gICAgICAgIHJldHVybiBkYXRlU3RyICsgdGhpcy5kZWxpbWl0ZXJzWzBdICsgbW9udGhTdHIgKyB0aGlzLmRlbGltaXRlcnNbMV0gKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxlRGlzcGxheUZvcm1hdCA9PT0gTUlERExFX0VORElBTikge1xuICAgICAgICByZXR1cm4gbW9udGhTdHIgKyB0aGlzLmRlbGltaXRlcnNbMF0gKyBkYXRlU3RyICsgdGhpcy5kZWxpbWl0ZXJzWzFdICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIHRoaXMuZGVsaW1pdGVyc1swXSArIG1vbnRoU3RyICsgdGhpcy5kZWxpbWl0ZXJzWzFdICsgZGF0ZVN0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyVGV4dCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdDogW3N0cmluZywgc3RyaW5nLCBzdHJpbmddID0gdGhpcy5sb2NhbGVEaXNwbGF5Rm9ybWF0LmZvcm1hdDtcbiAgICByZXR1cm4gZm9ybWF0WzBdICsgdGhpcy5kZWxpbWl0ZXJzWzBdICsgZm9ybWF0WzFdICsgdGhpcy5kZWxpbWl0ZXJzWzFdICsgZm9ybWF0WzJdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgbW9udGggZW50ZXJlZCBieSB0aGUgdXNlciBpcyB2YWxpZCBvciBub3QuXG4gICAqIE5vdGU6IE1vbnRoIGlzIDAgYmFzZWQuXG4gICAqL1xuICBwcml2YXRlIGlzVmFsaWRNb250aChtb250aDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1vbnRoID4gLTEgJiYgbW9udGggPCAxMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGRhdGUgaXMgdmFsaWQgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyIGFuZCBtb250aCBwcm92aWRlZC5cbiAgICovXG4gIHByaXZhdGUgaXNWYWxpZERhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGF0ZSA+IDAgJiYgZGF0ZSA8PSBnZXROdW1iZXJPZkRheXNJblRoZU1vbnRoKHllYXIsIG1vbnRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIHBhcmFtZXRlcnMgcHJvdmlkZWQgYW5kIHJldHVybnMgdGhlIGRhdGUuXG4gICAqIElmIHRoZSBwYXJhbWV0ZXJzIGFyZSBub3RcbiAgICogdmFsaWQgdGhlbiByZXR1cm4gbnVsbC5cbiAgICogTk9URTogKE1vbnRoIGhlcmUgaXMgMSBiYXNlZCBzaW5jZSB0aGUgdXNlciBoYXMgcHJvdmlkZWQgdGhhdCBhcyBhbiBpbnB1dClcbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVBbmRHZXREYXRlKHllYXI6IHN0cmluZywgbW9udGg6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgLy8gSSBkb24ndCBrbm93IHdoYXRzIHdyb25nIHdpdGggdGhlIFRTIGNvbXBpbGVyLiBJdCB0aHJvd3MgYW4gZXJyb3IgaWYgSSB3cml0ZVxuICAgIC8vIHRoZSBiZWxvdyBpZiBzdGF0ZW1lbnQuIFRoZSBlcnJvciBpczpcbiAgICAvLyBPcGVyYXRvciAnIT09JyBjYW5ub3QgYmUgYXBwbGllZCB0byB0eXBlcyAnMicgYW5kICc0J1xuICAgIC8vIE1vcmUgaW5mbyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzEyNzk0I2lzc3VlY29tbWVudC0yNzAzNDI5MzZcbiAgICAvKlxuICAgICAgICBpZiAoeWVhci5sZW5ndGggIT09IDIgfHwgeWVhci5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgICovXG5cbiAgICAvLyBJbnN0ZWFkIEkgaGF2ZSB0byB3cml0ZSB0aGUgbG9naWMgbGlrZSB0aGlzIHgtKFxuICAgIGNvbnN0IHk6IG51bWJlciA9ICt5ZWFyO1xuICAgIGNvbnN0IG06IG51bWJlciA9ICttb250aCAtIDE7IC8vIG1vbnRoIGlzIDAgYmFzZWRcbiAgICBjb25zdCBkOiBudW1iZXIgPSArZGF0ZTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZE1vbnRoKG0pIHx8ICF0aGlzLmlzVmFsaWREYXRlKHksIG0sIGQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXIgPSBwYXJzZVRvRm91ckRpZ2l0WWVhcih5KTtcbiAgICByZXR1cm4gcmVzdWx0ICE9PSAtMSA/IG5ldyBEYXRlKHJlc3VsdCwgbSwgZCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0RGF0ZVZhbHVlRnJvbURhdGVTdHJpbmcoZGF0ZTogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZGF0ZVBhcnRzOiBzdHJpbmdbXSA9IGRhdGUubWF0Y2goVVNFUl9JTlBVVF9SRUdFWCk7XG4gICAgaWYgKCFkYXRlUGFydHMgfHwgZGF0ZVBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IFtmaXJzdFBhcnQsIHNlY29uZFBhcnQsIHRoaXJkUGFydF0gPSBkYXRlUGFydHM7XG4gICAgaWYgKHRoaXMubG9jYWxlRGlzcGxheUZvcm1hdCA9PT0gTElUVExFX0VORElBTikge1xuICAgICAgLy8gc2Vjb25kUGFydCBpcyBtb250aCAmJiBmaXJzdFBhcnQgaXMgZGF0ZVxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbmRHZXREYXRlKHRoaXJkUGFydCwgc2Vjb25kUGFydCwgZmlyc3RQYXJ0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9jYWxlRGlzcGxheUZvcm1hdCA9PT0gTUlERExFX0VORElBTikge1xuICAgICAgLy8gZmlyc3RQYXJ0IGlzIG1vbnRoICYmIHNlY29uZFBhcnQgaXMgZGF0ZVxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbmRHZXREYXRlKHRoaXJkUGFydCwgZmlyc3RQYXJ0LCBzZWNvbmRQYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2Vjb25kUGFydCBpcyBtb250aCAmJiB0aGlyZFBhcnQgaXMgZGF0ZVxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVBbmRHZXREYXRlKGZpcnN0UGFydCwgc2Vjb25kUGFydCwgdGhpcmRQYXJ0KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==