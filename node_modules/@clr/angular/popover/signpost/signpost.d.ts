import { ClrSignpostTrigger } from './signpost-trigger';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrSignpost {
    commonStrings: ClrCommonStrings;
    constructor(commonStrings: ClrCommonStrings);
    /**********
     * @property useCustomTrigger
     *
     * @description
     * Flag used to determine if we need to use the default trigger or a user supplied trigger element.
     *
     */
    useCustomTrigger: boolean;
    /**********
     * @property signPostTrigger
     *
     * @description
     * Uses ContentChild to check for a user supplied element with the ClrSignpostTrigger on it.
     *
     */
    customTrigger: ClrSignpostTrigger;
}
