/**
 * This is the en-001 short locale date format. Setting as default.
 */
export declare const DEFAULT_LOCALE_FORMAT: string;
export declare const LITTLE_ENDIAN_REGEX: RegExp;
export declare const MIDDLE_ENDIAN_REGEX: RegExp;
export declare const DELIMITER_REGEX: RegExp;
export declare const USER_INPUT_REGEX: RegExp;
export declare const MOBILE_USERAGENT_REGEX: RegExp;
export declare const RTL_REGEX: RegExp;
export declare const YEAR: string;
export declare const MONTH: string;
export declare const DATE: string;
export declare type FormatType = 'LITTLE_ENDIAN' | 'MIDDLE_ENDIAN' | 'BIG_ENDIAN';
export declare type InputDateDisplayFormat = {
    readonly name: FormatType;
    readonly format: [string, string, string];
};
export declare const LITTLE_ENDIAN: InputDateDisplayFormat;
export declare const MIDDLE_ENDIAN: InputDateDisplayFormat;
export declare const BIG_ENDIAN: InputDateDisplayFormat;
export declare const NO_OF_DAYS_IN_A_WEEK: number;
export declare const NO_OF_ROWS_IN_CALENDAR_VIEW: number;
export declare const TOTAL_DAYS_IN_DAYS_VIEW: number;
