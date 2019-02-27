/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NestedProperty } from '../nested-property';
/**
 * @template T
 */
export class DatagridPropertyStringFilter {
    /**
     * @param {?} prop
     * @param {?=} exact
     */
    constructor(prop, exact = false) {
        this.prop = prop;
        this.exact = exact;
        this.nestedProp = new NestedProperty(prop);
    }
    /**
     * @param {?} item
     * @param {?} search
     * @return {?}
     */
    accepts(item, search) {
        /** @type {?} */
        const propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === 'undefined') {
            return false;
        }
        else if (this.exact) {
            return ('' + propValue).toLowerCase() === search;
        }
        else {
            return ('' + propValue).toLowerCase().indexOf(search) >= 0;
        }
    }
}
if (false) {
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.nestedProp;
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.prop;
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.exact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktc3RyaW5nLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vZmlsdGVycy9kYXRhZ3JpZC1wcm9wZXJ0eS1zdHJpbmctZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7SUFHdkMsWUFBbUIsSUFBWSxFQUFTLFFBQVEsS0FBSztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFPLEVBQUUsTUFBYzs7Y0FDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUNwRCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDO1NBQ2xEO2FBQU07WUFDTCxPQUFPLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0NBQ0Y7OztJQWhCQyxrREFBc0M7O0lBRTFCLDRDQUFtQjs7SUFBRSw2Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDbHJEYXRhZ3JpZFN0cmluZ0ZpbHRlckludGVyZmFjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc3RyaW5nLWZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmVzdGVkUHJvcGVydHkgfSBmcm9tICcuLi9uZXN0ZWQtcHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRQcm9wZXJ0eVN0cmluZ0ZpbHRlcjxUID0gYW55PiBpbXBsZW1lbnRzIENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlPFQ+IHtcbiAgcHJpdmF0ZSBuZXN0ZWRQcm9wOiBOZXN0ZWRQcm9wZXJ0eTxUPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcDogc3RyaW5nLCBwdWJsaWMgZXhhY3QgPSBmYWxzZSkge1xuICAgIHRoaXMubmVzdGVkUHJvcCA9IG5ldyBOZXN0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgfVxuXG4gIGFjY2VwdHMoaXRlbTogVCwgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLm5lc3RlZFByb3AuZ2V0UHJvcFZhbHVlKGl0ZW0pO1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5leGFjdCkge1xuICAgICAgcmV0dXJuICgnJyArIHByb3BWYWx1ZSkudG9Mb3dlckNhc2UoKSA9PT0gc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKCcnICsgcHJvcFZhbHVlKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoKSA+PSAwO1xuICAgIH1cbiAgfVxufVxuIl19