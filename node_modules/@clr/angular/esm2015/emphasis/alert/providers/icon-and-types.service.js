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
export class AlertIconAndTypesService {
    /**
     * @param {?} commonStrings
     */
    constructor(commonStrings) {
        this.commonStrings = commonStrings;
        this.defaultIconShape = 'info-circle';
        this._alertIconShape = '';
        this._alertType = 'info';
    }
    /**
     * @return {?}
     */
    get alertType() {
        return this._alertType;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set alertType(val) {
        if (ALERT_TYPES.indexOf(val) > -1) {
            this._alertType = val;
        }
    }
    /**
     * @return {?}
     */
    get alertIconShape() {
        if ('' === this._alertIconShape) {
            return this.iconInfoFromType(this._alertType).shape;
        }
        return this._alertIconShape;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set alertIconShape(val) {
        if (!val) {
            this._alertIconShape = '';
        }
        else if (val !== this._alertIconShape) {
            this._alertIconShape = val;
        }
    }
    /**
     * @return {?}
     */
    get alertIconTitle() {
        return this.iconInfoFromType(this._alertType).title;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    iconInfoFromType(type) {
        /** @type {?} */
        const returnObj = { shape: '', cssClass: '', title: '' };
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
    }
}
AlertIconAndTypesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertIconAndTypesService.ctorParameters = () => [
    { type: ClrCommonStrings }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1hbmQtdHlwZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImVtcGhhc2lzL2FsZXJ0L3Byb3ZpZGVycy9pY29uLWFuZC10eXBlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR2hGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBb0IsYUFBK0I7UUFBL0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBRTNDLHFCQUFnQixHQUFHLGFBQWEsQ0FBQztRQUNqQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQUcsTUFBTSxDQUFDO0lBSjBCLENBQUM7Ozs7SUFNdkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsSUFBSSxTQUFTLENBQUMsR0FBVztRQUN2QixJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELElBQUksY0FBYyxDQUFDLEdBQVc7UUFDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVNLGdCQUFnQixDQUFDLElBQVk7O2NBQzVCLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBRXhELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTO2dCQUNaLFNBQVMsQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO2dCQUNyQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLFNBQVMsQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ3ZDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO2dCQUNwQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUNqQyxTQUFTLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDckMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUN4QyxTQUFTLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDbEMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztnQkFDMUMsTUFBTTtTQUNUO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7O1lBOURGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7Ozs7SUFNdkIsb0RBQXlDOztJQUN6QyxtREFBNkI7O0lBQzdCLDhDQUE0Qjs7SUFKaEIsaURBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsZXJ0SW5mb09iamVjdCB9IGZyb20gJy4uL3V0aWxzL2FsZXJ0LWluZm8tb2JqZWN0JztcbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vdXRpbHMvYWxlcnQtdHlwZXMnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsZXJ0SWNvbkFuZFR5cGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5ncykge31cblxuICBwcml2YXRlIGRlZmF1bHRJY29uU2hhcGUgPSAnaW5mby1jaXJjbGUnO1xuICBwcml2YXRlIF9hbGVydEljb25TaGFwZSA9ICcnO1xuICBwcml2YXRlIF9hbGVydFR5cGUgPSAnaW5mbyc7XG5cbiAgZ2V0IGFsZXJ0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hbGVydFR5cGU7XG4gIH1cbiAgc2V0IGFsZXJ0VHlwZSh2YWw6IHN0cmluZykge1xuICAgIGlmIChBTEVSVF9UWVBFUy5pbmRleE9mKHZhbCkgPiAtMSkge1xuICAgICAgdGhpcy5fYWxlcnRUeXBlID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhbGVydEljb25TaGFwZSgpOiBzdHJpbmcge1xuICAgIGlmICgnJyA9PT0gdGhpcy5fYWxlcnRJY29uU2hhcGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25JbmZvRnJvbVR5cGUodGhpcy5fYWxlcnRUeXBlKS5zaGFwZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsZXJ0SWNvblNoYXBlO1xuICB9XG4gIHNldCBhbGVydEljb25TaGFwZSh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aGlzLl9hbGVydEljb25TaGFwZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAodmFsICE9PSB0aGlzLl9hbGVydEljb25TaGFwZSkge1xuICAgICAgdGhpcy5fYWxlcnRJY29uU2hhcGUgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGFsZXJ0SWNvblRpdGxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkluZm9Gcm9tVHlwZSh0aGlzLl9hbGVydFR5cGUpLnRpdGxlO1xuICB9XG5cbiAgcHVibGljIGljb25JbmZvRnJvbVR5cGUodHlwZTogc3RyaW5nKTogQWxlcnRJbmZvT2JqZWN0IHtcbiAgICBjb25zdCByZXR1cm5PYmogPSB7IHNoYXBlOiAnJywgY3NzQ2xhc3M6ICcnLCB0aXRsZTogJycgfTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybk9iai5zaGFwZSA9ICdleGNsYW1hdGlvbi10cmlhbmdsZSc7XG4gICAgICAgIHJldHVybk9iai5jc3NDbGFzcyA9ICdhbGVydC13YXJuaW5nJztcbiAgICAgICAgcmV0dXJuT2JqLnRpdGxlID0gdGhpcy5jb21tb25TdHJpbmdzLndhcm5pbmc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgcmV0dXJuT2JqLnNoYXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgIHJldHVybk9iai5jc3NDbGFzcyA9ICdhbGVydC1kYW5nZXInO1xuICAgICAgICByZXR1cm5PYmoudGl0bGUgPSB0aGlzLmNvbW1vblN0cmluZ3MuZGFuZ2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm5PYmouc2hhcGUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgcmV0dXJuT2JqLmNzc0NsYXNzID0gJ2FsZXJ0LXN1Y2Nlc3MnO1xuICAgICAgICByZXR1cm5PYmoudGl0bGUgPSB0aGlzLmNvbW1vblN0cmluZ3Muc3VjY2VzcztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm5PYmouc2hhcGUgPSB0aGlzLmRlZmF1bHRJY29uU2hhcGU7XG4gICAgICAgIHJldHVybk9iai5jc3NDbGFzcyA9ICdhbGVydC1pbmZvJztcbiAgICAgICAgcmV0dXJuT2JqLnRpdGxlID0gdGhpcy5jb21tb25TdHJpbmdzLmluZm87XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5PYmo7XG4gIH1cbn1cbiJdfQ==