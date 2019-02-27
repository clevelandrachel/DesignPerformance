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
DatagridPropertyComparator = /** @class */ (function () {
    function DatagridPropertyComparator(prop) {
        this.prop = prop;
        this.nestedProp = new NestedProperty(prop);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    DatagridPropertyComparator.prototype.compare = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        /** @type {?} */
        var propA = this.nestedProp.getPropValue(a);
        /** @type {?} */
        var propB = this.nestedProp.getPropValue(b);
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
    };
    return DatagridPropertyComparator;
}());
/**
 * @template T
 */
export { DatagridPropertyComparator };
if (false) {
    /** @type {?} */
    DatagridPropertyComparator.prototype.nestedProp;
    /** @type {?} */
    DatagridPropertyComparator.prototype.prop;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvYnVpbHQtaW4vY29tcGFyYXRvcnMvZGF0YWdyaWQtcHJvcGVydHktY29tcGFyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXBEOzs7O0lBR0Usb0NBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRU0sNENBQU87Ozs7O0lBQWQsVUFBZSxDQUFJLEVBQUUsQ0FBSTs7WUFDbkIsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7WUFDdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEQsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDbEQsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQzthQUNWO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDWDtpQkFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDWDtpQkFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLENBQUM7YUFDVjtTQUNGO0lBQ0gsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7OztJQXBDQyxnREFBc0M7O0lBRTFCLDBDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENsckRhdGFncmlkQ29tcGFyYXRvckludGVyZmFjZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY29tcGFyYXRvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmVzdGVkUHJvcGVydHkgfSBmcm9tICcuLi9uZXN0ZWQtcHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRQcm9wZXJ0eUNvbXBhcmF0b3I8VCA9IGFueT4gaW1wbGVtZW50cyBDbHJEYXRhZ3JpZENvbXBhcmF0b3JJbnRlcmZhY2U8VD4ge1xuICBwcml2YXRlIG5lc3RlZFByb3A6IE5lc3RlZFByb3BlcnR5PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5lc3RlZFByb3AgPSBuZXcgTmVzdGVkUHJvcGVydHkocHJvcCk7XG4gIH1cblxuICBwdWJsaWMgY29tcGFyZShhOiBULCBiOiBUKTogbnVtYmVyIHtcbiAgICBsZXQgcHJvcEEgPSB0aGlzLm5lc3RlZFByb3AuZ2V0UHJvcFZhbHVlKGEpO1xuICAgIGxldCBwcm9wQiA9IHRoaXMubmVzdGVkUHJvcC5nZXRQcm9wVmFsdWUoYik7XG5cbiAgICBpZiAodHlwZW9mIHByb3BBID09PSAnc3RyaW5nJykge1xuICAgICAgcHJvcEEgPSBwcm9wQS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvcEIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwcm9wQiA9IHByb3BCLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wQSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcEEgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcEIgPT09ICd1bmRlZmluZWQnIHx8IHByb3BCID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcEIgPT09ICd1bmRlZmluZWQnIHx8IHByb3BCID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAocHJvcEEgPCBwcm9wQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKHByb3BBID4gcHJvcEIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==