/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';
/**
 * @template T
 */
var /**
 * @template T
 */
DatagridStringFilterImpl = /** @class */ (function () {
    function DatagridStringFilterImpl(filterFn) {
        this.filterFn = filterFn;
        /**
         * The Observable required as part of the Filter interface
         */
        this._changes = new Subject();
        /**
         * Raw input value
         */
        this._rawValue = '';
        /**
         * Input value converted to lowercase
         */
        this._lowerCaseValue = '';
    }
    Object.defineProperty(DatagridStringFilterImpl.prototype, "changes", {
        // We do not want to expose the Subject itself, but the Observable which is read-only
        get: 
        // We do not want to expose the Subject itself, but the Observable which is read-only
        /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rawValue;
        },
        /**
         * Common setter for the input value
         */
        set: /**
         * Common setter for the input value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                value = '';
            }
            if (value !== this._rawValue) {
                this._rawValue = value;
                this._lowerCaseValue = value.toLowerCase().trim();
                this._changes.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatagridStringFilterImpl.prototype, "lowerCaseValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lowerCaseValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     */
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     * @return {?}
     */
    DatagridStringFilterImpl.prototype.isActive = /**
     * Indicates if the filter is currently active, meaning the input is not empty
     * @return {?}
     */
    function () {
        return !!this.value;
    };
    /**
     * Tests if an item matches a search text
     */
    /**
     * Tests if an item matches a search text
     * @param {?} item
     * @return {?}
     */
    DatagridStringFilterImpl.prototype.accepts = /**
     * Tests if an item matches a search text
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // We always test with the lowercase value of the input, to stay case insensitive
        return this.filterFn.accepts(item, this.lowerCaseValue);
    };
    Object.defineProperty(DatagridStringFilterImpl.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.filterFn instanceof DatagridPropertyStringFilter) {
                return {
                    property: this.filterFn.prop,
                    value: this.value,
                };
            }
            return this;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} other
     * @return {?}
     */
    DatagridStringFilterImpl.prototype.equals = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        if (other instanceof DatagridStringFilterImpl) {
            if (other.filterFn instanceof DatagridPropertyStringFilter) {
                return (this.filterFn instanceof DatagridPropertyStringFilter &&
                    other.filterFn.prop === this.filterFn.prop &&
                    other.value === this.value);
            }
            return other === this;
        }
        return false;
    };
    return DatagridStringFilterImpl;
}());
/**
 * @template T
 */
export { DatagridStringFilterImpl };
if (false) {
    /**
     * The Observable required as part of the Filter interface
     * @type {?}
     */
    DatagridStringFilterImpl.prototype._changes;
    /**
     * Raw input value
     * @type {?}
     */
    DatagridStringFilterImpl.prototype._rawValue;
    /**
     * Input value converted to lowercase
     * @type {?}
     */
    DatagridStringFilterImpl.prototype._lowerCaseValue;
    /** @type {?} */
    DatagridStringFilterImpl.prototype.filterFn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtc3RyaW5nLWZpbHRlci1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9maWx0ZXJzL2RhdGFncmlkLXN0cmluZy1maWx0ZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVqRjs7OztJQUNFLGtDQUFtQixRQUE2QztRQUE3QyxhQUFRLEdBQVIsUUFBUSxDQUFxQzs7OztRQUt4RCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQzs7OztRQVNqQyxjQUFTLEdBQVcsRUFBRSxDQUFDOzs7O1FBT3ZCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO0lBckI4QixDQUFDO0lBT3BFLHNCQUFXLDZDQUFPO1FBRGxCLHFGQUFxRjs7Ozs7O1FBQ3JGO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsMkNBQUs7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQVFEOztXQUVHOzs7Ozs7UUFDSCxVQUFpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNaO1lBQ0QsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUM7OztPQXBCQTtJQUtELHNCQUFXLG9EQUFjOzs7O1FBQXpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBZUQ7O09BRUc7Ozs7O0lBQ0ksMkNBQVE7Ozs7SUFBZjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSwwQ0FBTzs7Ozs7SUFBZCxVQUFlLElBQU87UUFDcEIsaUZBQWlGO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQVcsMkNBQUs7Ozs7UUFBaEI7WUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7Z0JBQ3pELE9BQU87b0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNsQixDQUFDO2FBQ0g7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7OztPQUFBOzs7OztJQUVNLHlDQUFNOzs7O0lBQWIsVUFBYyxLQUF5QztRQUNyRCxJQUFJLEtBQUssWUFBWSx3QkFBd0IsRUFBRTtZQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7Z0JBQzFELE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QjtvQkFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUMxQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQzNCLENBQUM7YUFDSDtZQUNELE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FBQyxBQTlFRCxJQThFQzs7Ozs7Ozs7OztJQXhFQyw0Q0FBeUM7Ozs7O0lBU3pDLDZDQUErQjs7Ozs7SUFPL0IsbURBQXFDOztJQXJCekIsNENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3N0cmluZy1maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIgfSBmcm9tICcuL2RhdGFncmlkLXByb3BlcnR5LXN0cmluZy1maWx0ZXInO1xuXG5leHBvcnQgY2xhc3MgRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbXBsPFQgPSBhbnk+IGltcGxlbWVudHMgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlsdGVyRm46IENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlPFQ+KSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgT2JzZXJ2YWJsZSByZXF1aXJlZCBhcyBwYXJ0IG9mIHRoZSBGaWx0ZXIgaW50ZXJmYWNlXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAvLyBXZSBkbyBub3Qgd2FudCB0byBleHBvc2UgdGhlIFN1YmplY3QgaXRzZWxmLCBidXQgdGhlIE9ic2VydmFibGUgd2hpY2ggaXMgcmVhZC1vbmx5XG4gIHB1YmxpYyBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJhdyBpbnB1dCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfcmF3VmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhd1ZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBJbnB1dCB2YWx1ZSBjb252ZXJ0ZWQgdG8gbG93ZXJjYXNlXG4gICAqL1xuICBwcml2YXRlIF9sb3dlckNhc2VWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBnZXQgbG93ZXJDYXNlVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd2VyQ2FzZVZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBDb21tb24gc2V0dGVyIGZvciB0aGUgaW5wdXQgdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcmF3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3Jhd1ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9sb3dlckNhc2VWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgdGhpcy5fY2hhbmdlcy5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBmaWx0ZXIgaXMgY3VycmVudGx5IGFjdGl2ZSwgbWVhbmluZyB0aGUgaW5wdXQgaXMgbm90IGVtcHR5XG4gICAqL1xuICBwdWJsaWMgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0cyBpZiBhbiBpdGVtIG1hdGNoZXMgYSBzZWFyY2ggdGV4dFxuICAgKi9cbiAgcHVibGljIGFjY2VwdHMoaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIC8vIFdlIGFsd2F5cyB0ZXN0IHdpdGggdGhlIGxvd2VyY2FzZSB2YWx1ZSBvZiB0aGUgaW5wdXQsIHRvIHN0YXkgY2FzZSBpbnNlbnNpdGl2ZVxuICAgIHJldHVybiB0aGlzLmZpbHRlckZuLmFjY2VwdHMoaXRlbSwgdGhpcy5sb3dlckNhc2VWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YXRlKCkge1xuICAgIGlmICh0aGlzLmZpbHRlckZuIGluc3RhbmNlb2YgRGF0YWdyaWRQcm9wZXJ0eVN0cmluZ0ZpbHRlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcGVydHk6IHRoaXMuZmlsdGVyRm4ucHJvcCxcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlcXVhbHMob3RoZXI6IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQsIGFueT4pOiBib29sZWFuIHtcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBEYXRhZ3JpZFN0cmluZ0ZpbHRlckltcGwpIHtcbiAgICAgIGlmIChvdGhlci5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB0aGlzLmZpbHRlckZuIGluc3RhbmNlb2YgRGF0YWdyaWRQcm9wZXJ0eVN0cmluZ0ZpbHRlciAmJlxuICAgICAgICAgIG90aGVyLmZpbHRlckZuLnByb3AgPT09IHRoaXMuZmlsdGVyRm4ucHJvcCAmJlxuICAgICAgICAgIG90aGVyLnZhbHVlID09PSB0aGlzLnZhbHVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3RoZXIgPT09IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19