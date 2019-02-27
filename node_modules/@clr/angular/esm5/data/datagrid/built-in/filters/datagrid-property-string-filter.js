/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NestedProperty } from '../nested-property';
/**
 * @template T
 */
var /**
 * @template T
 */
DatagridPropertyStringFilter = /** @class */ (function () {
    function DatagridPropertyStringFilter(prop, exact) {
        if (exact === void 0) { exact = false; }
        this.prop = prop;
        this.exact = exact;
        this.nestedProp = new NestedProperty(prop);
    }
    /**
     * @param {?} item
     * @param {?} search
     * @return {?}
     */
    DatagridPropertyStringFilter.prototype.accepts = /**
     * @param {?} item
     * @param {?} search
     * @return {?}
     */
    function (item, search) {
        /** @type {?} */
        var propValue = this.nestedProp.getPropValue(item);
        if (typeof propValue === 'undefined') {
            return false;
        }
        else if (this.exact) {
            return ('' + propValue).toLowerCase() === search;
        }
        else {
            return ('' + propValue).toLowerCase().indexOf(search) >= 0;
        }
    };
    return DatagridPropertyStringFilter;
}());
/**
 * @template T
 */
export { DatagridPropertyStringFilter };
if (false) {
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.nestedProp;
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.prop;
    /** @type {?} */
    DatagridPropertyStringFilter.prototype.exact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktc3RyaW5nLWZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vZmlsdGVycy9kYXRhZ3JpZC1wcm9wZXJ0eS1zdHJpbmctZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFNQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQ7Ozs7SUFHRSxzQ0FBbUIsSUFBWSxFQUFTLEtBQWE7UUFBYixzQkFBQSxFQUFBLGFBQWE7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFRCw4Q0FBTzs7Ozs7SUFBUCxVQUFRLElBQU8sRUFBRSxNQUFjOztZQUN2QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3BELElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLENBQUM7U0FDbEQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7Ozs7Ozs7SUFoQkMsa0RBQXNDOztJQUUxQiw0Q0FBbUI7O0lBQUUsNkNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3N0cmluZy1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IE5lc3RlZFByb3BlcnR5IH0gZnJvbSAnLi4vbmVzdGVkLXByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXI8VCA9IGFueT4gaW1wbGVtZW50cyBDbHJEYXRhZ3JpZFN0cmluZ0ZpbHRlckludGVyZmFjZTxUPiB7XG4gIHByaXZhdGUgbmVzdGVkUHJvcDogTmVzdGVkUHJvcGVydHk8VD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHByb3A6IHN0cmluZywgcHVibGljIGV4YWN0ID0gZmFsc2UpIHtcbiAgICB0aGlzLm5lc3RlZFByb3AgPSBuZXcgTmVzdGVkUHJvcGVydHkocHJvcCk7XG4gIH1cblxuICBhY2NlcHRzKGl0ZW06IFQsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcHJvcFZhbHVlID0gdGhpcy5uZXN0ZWRQcm9wLmdldFByb3BWYWx1ZShpdGVtKTtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXhhY3QpIHtcbiAgICAgIHJldHVybiAoJycgKyBwcm9wVmFsdWUpLnRvTG93ZXJDYXNlKCkgPT09IHNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICgnJyArIHByb3BWYWx1ZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgPj0gMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==