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
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 * @template T
 */
var /*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 * @template T
 */
NestedProperty = /** @class */ (function () {
    function NestedProperty(prop) {
        this.prop = prop;
        if (prop.indexOf('.') >= 0) {
            this.splitProp = prop.split('.');
        }
    }
    // Safe getter for a deep object property, will not throw an error but return
    // undefined if one of the intermediate properties is null or undefined.
    // Safe getter for a deep object property, will not throw an error but return
    // undefined if one of the intermediate properties is null or undefined.
    /**
     * @param {?} item
     * @return {?}
     */
    NestedProperty.prototype.getPropValue = 
    // Safe getter for a deep object property, will not throw an error but return
    // undefined if one of the intermediate properties is null or undefined.
    /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_1, _a;
        if (this.splitProp) {
            /** @type {?} */
            var value = item;
            try {
                for (var _b = tslib_1.__values(this.splitProp), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var nestedProp = _c.value;
                    if (value == null || typeof value === 'undefined' || typeof value[nestedProp] === 'undefined') {
                        return undefined;
                    }
                    value = value[nestedProp];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return value;
        }
        else {
            return item[this.prop];
        }
    };
    return NestedProperty;
}());
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * Generic accessor for deep object properties
 * that can be specified as simple dot-separated strings.
 * @template T
 */
export { NestedProperty };
if (false) {
    /** @type {?} */
    NestedProperty.prototype.splitProp;
    /** @type {?} */
    NestedProperty.prototype.prop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVzdGVkLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9uZXN0ZWQtcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7O0lBR0Usd0JBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSx3RUFBd0U7Ozs7Ozs7SUFDakUscUNBQVk7Ozs7Ozs7SUFBbkIsVUFBb0IsSUFBTzs7UUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDZCxLQUFLLEdBQUcsSUFBSTs7Z0JBQ2hCLEtBQXlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFBLGdCQUFBLDRCQUFFO29CQUFwQyxJQUFNLFVBQVUsV0FBQTtvQkFDbkIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7d0JBQzdGLE9BQU8sU0FBUyxDQUFDO3FCQUNsQjtvQkFDRCxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMzQjs7Ozs7Ozs7O1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQzs7Ozs7Ozs7Ozs7Ozs7SUF4QkMsbUNBQTRCOztJQUVoQiw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG4vKipcbiAqIEdlbmVyaWMgYWNjZXNzb3IgZm9yIGRlZXAgb2JqZWN0IHByb3BlcnRpZXNcbiAqIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBhcyBzaW1wbGUgZG90LXNlcGFyYXRlZCBzdHJpbmdzLlxuICovXG5leHBvcnQgY2xhc3MgTmVzdGVkUHJvcGVydHk8VCA9IGFueT4ge1xuICBwcml2YXRlIHNwbGl0UHJvcDogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9wOiBzdHJpbmcpIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKCcuJykgPj0gMCkge1xuICAgICAgdGhpcy5zcGxpdFByb3AgPSBwcm9wLnNwbGl0KCcuJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2FmZSBnZXR0ZXIgZm9yIGEgZGVlcCBvYmplY3QgcHJvcGVydHksIHdpbGwgbm90IHRocm93IGFuIGVycm9yIGJ1dCByZXR1cm5cbiAgLy8gdW5kZWZpbmVkIGlmIG9uZSBvZiB0aGUgaW50ZXJtZWRpYXRlIHByb3BlcnRpZXMgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gIHB1YmxpYyBnZXRQcm9wVmFsdWUoaXRlbTogVCk6IGFueSB7XG4gICAgaWYgKHRoaXMuc3BsaXRQcm9wKSB7XG4gICAgICBsZXQgdmFsdWUgPSBpdGVtO1xuICAgICAgZm9yIChjb25zdCBuZXN0ZWRQcm9wIG9mIHRoaXMuc3BsaXRQcm9wKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHZhbHVlW25lc3RlZFByb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB2YWx1ZVtuZXN0ZWRQcm9wXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5wcm9wXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==