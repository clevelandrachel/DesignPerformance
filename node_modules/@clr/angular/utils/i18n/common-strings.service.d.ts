import { InjectableProvider } from '@angular/core';
import { ClrCommonStrings } from './common-strings.interface';
export declare class ClrCommonStringsService implements ClrCommonStrings {
    open: string;
    close: string;
    show: string;
    hide: string;
    expand: string;
    collapse: string;
    more: string;
    select: string;
    selectAll: string;
    previous: string;
    next: string;
    current: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    rowActions: string;
    pickColumns: string;
}
export declare function commonStringsFactory(existing?: ClrCommonStrings): ClrCommonStrings;
export declare const COMMON_STRINGS_PROVIDER: InjectableProvider;
