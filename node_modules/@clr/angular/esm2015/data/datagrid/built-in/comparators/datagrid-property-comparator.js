/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NestedProperty } from '../nested-property';
/**
 * @template T
 */
export class DatagridPropertyComparator {
    /**
     * @param {?} prop
     */
    constructor(prop) {
        this.prop = prop;
        this.nestedProp = new NestedProperty(prop);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compare(a, b) {
        /** @type {?} */
        let propA = this.nestedProp.getPropValue(a);
        /** @type {?} */
        let propB = this.nestedProp.getPropValue(b);
        if (typeof propA === 'string') {
            propA = propA.toLowerCase();
        }
        if (typeof propB === 'string') {
            propB = propB.toLowerCase();
        }
        if (typeof propA === 'undefined' || propA === null) {
            if (typeof propB === 'undefined' || propB === null) {
                return 0;
            }
            else {
                return 1;
            }
        }
        else {
            if (typeof propB === 'undefined' || propB === null) {
                return -1;
            }
            else if (propA < propB) {
                return -1;
            }
            else if (propA > propB) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}
if (false) {
    /** @type {?} */
    DatagridPropertyComparator.prototype.nestedProp;
    /** @type {?} */
    DatagridPropertyComparator.prototype.prop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vY29tcGFyYXRvcnMvZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXBELE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFFTSxPQUFPLENBQUMsQ0FBSSxFQUFFLENBQUk7O1lBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O1lBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUM7YUFDVjtTQUNGO2FBQU07WUFDTCxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO2dCQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO2dCQUN4QixPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUM7Q0FDRjs7O0lBcENDLGdEQUFzQzs7SUFFMUIsMENBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRDb21wYXJhdG9ySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jb21wYXJhdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZXN0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL25lc3RlZC1wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhZ3JpZFByb3BlcnR5Q29tcGFyYXRvcjxUID0gYW55PiBpbXBsZW1lbnRzIENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZTxUPiB7XG4gIHByaXZhdGUgbmVzdGVkUHJvcDogTmVzdGVkUHJvcGVydHk8VD47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHByb3A6IHN0cmluZykge1xuICAgIHRoaXMubmVzdGVkUHJvcCA9IG5ldyBOZXN0ZWRQcm9wZXJ0eShwcm9wKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wYXJlKGE6IFQsIGI6IFQpOiBudW1iZXIge1xuICAgIGxldCBwcm9wQSA9IHRoaXMubmVzdGVkUHJvcC5nZXRQcm9wVmFsdWUoYSk7XG4gICAgbGV0IHByb3BCID0gdGhpcy5uZXN0ZWRQcm9wLmdldFByb3BWYWx1ZShiKTtcblxuICAgIGlmICh0eXBlb2YgcHJvcEEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcm9wQSA9IHByb3BBLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHByb3BCID0gcHJvcEIudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BBID09PSAndW5kZWZpbmVkJyB8fCBwcm9wQSA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcEIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wQiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcEIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChwcm9wQSA8IHByb3BCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcEEgPiBwcm9wQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19