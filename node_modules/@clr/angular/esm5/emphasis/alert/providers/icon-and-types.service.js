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
import { ALERT_TYPES } from '../utils/alert-types';
import { ClrCommonStrings } from '../../../utils/i18n/common-strings.interface';
var AlertIconAndTypesService = /** @class */ (function () {
    function AlertIconAndTypesService(commonStrings) {
        this.commonStrings = commonStrings;
        this.defaultIconShape = 'info-circle';
        this._alertIconShape = '';
        this._alertType = 'info';
    }
    Object.defineProperty(AlertIconAndTypesService.prototype, "alertType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alertType;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (ALERT_TYPES.indexOf(val) > -1) {
                this._alertType = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertIconAndTypesService.prototype, "alertIconShape", {
        get: /**
         * @return {?}
         */
        function () {
            if ('' === this._alertIconShape) {
                return this.iconInfoFromType(this._alertType).shape;
            }
            return this._alertIconShape;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (!val) {
                this._alertIconShape = '';
            }
            else if (val !== this._alertIconShape) {
                this._alertIconShape = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertIconAndTypesService.prototype, "alertIconTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconInfoFromType(this._alertType).title;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @return {?}
     */
    AlertIconAndTypesService.prototype.iconInfoFromType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var returnObj = { shape: '', cssClass: '', title: '' };
        switch (type) {
            case 'warning':
                returnObj.shape = 'exclamation-triangle';
                returnObj.cssClass = 'alert-warning';
                returnObj.title = this.commonStrings.warning;
                break;
            case 'danger':
                returnObj.shape = 'exclamation-circle';
                returnObj.cssClass = 'alert-danger';
                returnObj.title = this.commonStrings.danger;
                break;
            case 'success':
                returnObj.shape = 'check-circle';
                returnObj.cssClass = 'alert-success';
                returnObj.title = this.commonStrings.success;
                break;
            default:
                returnObj.shape = this.defaultIconShape;
                returnObj.cssClass = 'alert-info';
                returnObj.title = this.commonStrings.info;
                break;
        }
        return returnObj;
    };
    AlertIconAndTypesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AlertIconAndTypesService.ctorParameters = function () { return [
        { type: ClrCommonStrings }
    ]; };
    return AlertIconAndTypesService;
}());
export { AlertIconAndTypesService };
if (false) {
    /** @type {?} */
    AlertIconAndTypesService.prototype.defaultIconShape;
    /** @type {?} */
    AlertIconAndTypesService.prototype._alertIconShape;
    /** @type {?} */
    AlertIconAndTypesService.prototype._alertType;
    /** @type {?} */
    AlertIconAndTypesService.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1hbmQtdHlwZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L3Byb3ZpZGVycy9pY29uLWFuZC10eXBlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGO0lBRUUsa0NBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUUzQyxxQkFBZ0IsR0FBRyxhQUFhLENBQUM7UUFDakMsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFHLE1BQU0sQ0FBQztJQUowQixDQUFDO0lBTXZELHNCQUFJLCtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFDRCxVQUFjLEdBQVc7WUFDdkIsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUxBO0lBT0Qsc0JBQUksb0RBQWM7Ozs7UUFBbEI7WUFDRSxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUMvQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBQ0QsVUFBbUIsR0FBVztZQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2FBQzNCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQzs7O09BUEE7SUFTRCxzQkFBSSxvREFBYzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7Ozs7O0lBRU0sbURBQWdCOzs7O0lBQXZCLFVBQXdCLElBQVk7O1lBQzVCLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBRXhELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTO2dCQUNaLFNBQVMsQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO2dCQUNyQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLFNBQVMsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3ZDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUNwQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUNqQyxTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDckMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUN4QyxTQUFTLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDbEMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDMUMsTUFBTTtTQUNUO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOURGLFVBQVU7Ozs7Z0JBRkYsZ0JBQWdCOztJQWlFekIsK0JBQUM7Q0FBQSxBQS9ERCxJQStEQztTQTlEWSx3QkFBd0I7OztJQUduQyxvREFBeUM7O0lBQ3pDLG1EQUE2Qjs7SUFDN0IsOENBQTRCOztJQUpoQixpREFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRJbmZvT2JqZWN0IH0gZnJvbSAnLi4vdXRpbHMvYWxlcnQtaW5mby1vYmplY3QnO1xuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi91dGlscy9hbGVydC10eXBlcyc7XG5pbXBvcnQgeyBDbHJDb21tb25TdHJpbmdzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaTE4bi9jb21tb24tc3RyaW5ncy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRJY29uQW5kVHlwZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzKSB7fVxuXG4gIHByaXZhdGUgZGVmYXVsdEljb25TaGFwZSA9ICdpbmZvLWNpcmNsZSc7XG4gIHByaXZhdGUgX2FsZXJ0SWNvblNoYXBlID0gJyc7XG4gIHByaXZhdGUgX2FsZXJ0VHlwZSA9ICdpbmZvJztcblxuICBnZXQgYWxlcnRUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0VHlwZTtcbiAgfVxuICBzZXQgYWxlcnRUeXBlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKEFMRVJUX1RZUEVTLmluZGV4T2YodmFsKSA+IC0xKSB7XG4gICAgICB0aGlzLl9hbGVydFR5cGUgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFsZXJ0SWNvblNoYXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKCcnID09PSB0aGlzLl9hbGVydEljb25TaGFwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvbkluZm9Gcm9tVHlwZSh0aGlzLl9hbGVydFR5cGUpLnNoYXBlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYWxlcnRJY29uU2hhcGU7XG4gIH1cbiAgc2V0IGFsZXJ0SWNvblNoYXBlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRoaXMuX2FsZXJ0SWNvblNoYXBlID0gJyc7XG4gICAgfSBlbHNlIGlmICh2YWwgIT09IHRoaXMuX2FsZXJ0SWNvblNoYXBlKSB7XG4gICAgICB0aGlzLl9hbGVydEljb25TaGFwZSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBnZXQgYWxlcnRJY29uVGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uSW5mb0Zyb21UeXBlKHRoaXMuX2FsZXJ0VHlwZSkudGl0bGU7XG4gIH1cblxuICBwdWJsaWMgaWNvbkluZm9Gcm9tVHlwZSh0eXBlOiBzdHJpbmcpOiBBbGVydEluZm9PYmplY3Qge1xuICAgIGNvbnN0IHJldHVybk9iaiA9IHsgc2hhcGU6ICcnLCBjc3NDbGFzczogJycsIHRpdGxlOiAnJyB9O1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuT2JqLnNoYXBlID0gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcbiAgICAgICAgcmV0dXJuT2JqLmNzc0NsYXNzID0gJ2FsZXJ0LXdhcm5pbmcnO1xuICAgICAgICByZXR1cm5PYmoudGl0bGUgPSB0aGlzLmNvbW1vblN0cmluZ3Mud2FybmluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICByZXR1cm5PYmouc2hhcGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcbiAgICAgICAgcmV0dXJuT2JqLmNzc0NsYXNzID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgIHJldHVybk9iai50aXRsZSA9IHRoaXMuY29tbW9uU3RyaW5ncy5kYW5nZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIHJldHVybk9iai5zaGFwZSA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICByZXR1cm5PYmouY3NzQ2xhc3MgPSAnYWxlcnQtc3VjY2Vzcyc7XG4gICAgICAgIHJldHVybk9iai50aXRsZSA9IHRoaXMuY29tbW9uU3RyaW5ncy5zdWNjZXNzO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybk9iai5zaGFwZSA9IHRoaXMuZGVmYXVsdEljb25TaGFwZTtcbiAgICAgICAgcmV0dXJuT2JqLmNzc0NsYXNzID0gJ2FsZXJ0LWluZm8nO1xuICAgICAgICByZXR1cm5PYmoudGl0bGUgPSB0aGlzLmNvbW1vblN0cmluZ3MuaW5mbztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVybk9iajtcbiAgfVxufVxuIl19