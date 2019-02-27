/**
 * This service extracts the Angular CLDR data needed by the datepicker.
 */
export declare class LocaleHelperService {
    locale: string;
    constructor(locale: string);
    private _firstDayOfWeek;
    private _localeDaysNarrow;
    private _localeMonthsAbbreviated;
    private _localeMonthsWide;
    private _localeDateFormat;
    readonly firstDayOfWeek: number;
    readonly localeDaysNarrow: ReadonlyArray<string>;
    readonly localeMonthsAbbreviated: ReadonlyArray<string>;
    readonly localeMonthsWide: ReadonlyArray<string>;
    readonly localeDateFormat: string;
    /**
     * Initializes the locale data.
     */
    private initializeLocaleData;
    /**
     * Initialize day names in the TranslationWidth.Narrow format based on the locale.
     * eg: [S, M, T...] for en-US.
     */
    private initializeLocaleDaysNarrow;
    /**
     * Initializes the array of month names in the TranslationWidth.Abbreviated format.
     * e.g. `[Jan, Feb, ...]` for en-US
     */
    private initializeLocaleMonthsAbbreviated;
    /**
     * Initializes the array of month names in the TranslationWidth.Wide format.
     * e.g. `[January, February, ...]` for en-US
     */
    private initializeLocaleMonthsWide;
    /**
     * Initializes the first day of the week based on the locale.
     */
    private initializeFirstDayOfWeek;
    private initializeLocaleDateFormat;
}
