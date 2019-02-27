import { AlertInfoObject } from '../utils/alert-info-object';
import { ClrCommonStrings } from '../../../utils/i18n/common-strings.interface';
export declare class AlertIconAndTypesService {
    private commonStrings;
    constructor(commonStrings: ClrCommonStrings);
    private defaultIconShape;
    private _alertIconShape;
    private _alertType;
    alertType: string;
    alertIconShape: string;
    readonly alertIconTitle: string;
    iconInfoFromType(type: string): AlertInfoObject;
}
