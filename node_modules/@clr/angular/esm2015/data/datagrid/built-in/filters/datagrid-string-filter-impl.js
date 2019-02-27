/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { DatagridPropertyStringFilter } from './datagrid-property-string-filter';
/**
 * @template T
 */
export class DatagridStringFilterImpl {
    /**
     * @param {?} filterFn
     */
    constructor(filterFn) {
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
    // We do not want to expose the Subject itself, but the Observable which is read-only
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._rawValue;
    }
    /**
     * @return {?}
     */
    get lowerCaseValue() {
        return this._lowerCaseValue;
    }
    /**
     * Common setter for the input value
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!value) {
            value = '';
        }
        if (value !== this._rawValue) {
            this._rawValue = value;
            this._lowerCaseValue = value.toLowerCase().trim();
            this._changes.next(value);
        }
    }
    /**
     * Indicates if the filter is currently active, meaning the input is not empty
     * @return {?}
     */
    isActive() {
        return !!this.value;
    }
    /**
     * Tests if an item matches a search text
     * @param {?} item
     * @return {?}
     */
    accepts(item) {
        // We always test with the lowercase value of the input, to stay case insensitive
        return this.filterFn.accepts(item, this.lowerCaseValue);
    }
    /**
     * @return {?}
     */
    get state() {
        if (this.filterFn instanceof DatagridPropertyStringFilter) {
            return {
                property: this.filterFn.prop,
                value: this.value,
            };
        }
        return this;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        if (other instanceof DatagridStringFilterImpl) {
            if (other.filterFn instanceof DatagridPropertyStringFilter) {
                return (this.filterFn instanceof DatagridPropertyStringFilter &&
                    other.filterFn.prop === this.filterFn.prop &&
                    other.value === this.value);
            }
            return other === this;
        }
        return false;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtc3RyaW5nLWZpbHRlci1pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS9kYXRhZ3JpZC9idWlsdC1pbi9maWx0ZXJzL2RhdGFncmlkLXN0cmluZy1maWx0ZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVqRixNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW1CLFFBQTZDO1FBQTdDLGFBQVEsR0FBUixRQUFRLENBQXFDOzs7O1FBS3hELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDOzs7O1FBU2pDLGNBQVMsR0FBVyxFQUFFLENBQUM7Ozs7UUFPdkIsb0JBQWUsR0FBVyxFQUFFLENBQUM7SUFyQjhCLENBQUM7Ozs7O0lBT3BFLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztJQU1ELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBS0QsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFJRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFLTSxRQUFRO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFLTSxPQUFPLENBQUMsSUFBTztRQUNwQixpRkFBaUY7UUFDakYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7WUFDekQsT0FBTztnQkFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxLQUF5QztRQUNyRCxJQUFJLEtBQUssWUFBWSx3QkFBd0IsRUFBRTtZQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLFlBQVksNEJBQTRCLEVBQUU7Z0JBQzFELE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxZQUFZLDRCQUE0QjtvQkFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUMxQyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQzNCLENBQUM7YUFDSDtZQUNELE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGOzs7Ozs7SUF4RUMsNENBQXlDOzs7OztJQVN6Qyw2Q0FBK0I7Ozs7O0lBTy9CLG1EQUFxQzs7SUFyQnpCLDRDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9maWx0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENsckRhdGFncmlkU3RyaW5nRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zdHJpbmctZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYXRhZ3JpZFByb3BlcnR5U3RyaW5nRmlsdGVyIH0gZnJvbSAnLi9kYXRhZ3JpZC1wcm9wZXJ0eS1zdHJpbmctZmlsdGVyJztcblxuZXhwb3J0IGNsYXNzIERhdGFncmlkU3RyaW5nRmlsdGVySW1wbDxUID0gYW55PiBpbXBsZW1lbnRzIENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpbHRlckZuOiBDbHJEYXRhZ3JpZFN0cmluZ0ZpbHRlckludGVyZmFjZTxUPikge31cblxuICAvKipcbiAgICogVGhlIE9ic2VydmFibGUgcmVxdWlyZWQgYXMgcGFydCBvZiB0aGUgRmlsdGVyIGludGVyZmFjZVxuICAgKi9cbiAgcHJpdmF0ZSBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgLy8gV2UgZG8gbm90IHdhbnQgdG8gZXhwb3NlIHRoZSBTdWJqZWN0IGl0c2VsZiwgYnV0IHRoZSBPYnNlcnZhYmxlIHdoaWNoIGlzIHJlYWQtb25seVxuICBwdWJsaWMgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSYXcgaW5wdXQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgX3Jhd1ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yYXdWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogSW5wdXQgdmFsdWUgY29udmVydGVkIHRvIGxvd2VyY2FzZVxuICAgKi9cbiAgcHJpdmF0ZSBfbG93ZXJDYXNlVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZ2V0IGxvd2VyQ2FzZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9sb3dlckNhc2VWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogQ29tbW9uIHNldHRlciBmb3IgdGhlIGlucHV0IHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Jhd1ZhbHVlKSB7XG4gICAgICB0aGlzLl9yYXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fbG93ZXJDYXNlVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgIHRoaXMuX2NoYW5nZXMubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgZmlsdGVyIGlzIGN1cnJlbnRseSBhY3RpdmUsIG1lYW5pbmcgdGhlIGlucHV0IGlzIG5vdCBlbXB0eVxuICAgKi9cbiAgcHVibGljIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVGVzdHMgaWYgYW4gaXRlbSBtYXRjaGVzIGEgc2VhcmNoIHRleHRcbiAgICovXG4gIHB1YmxpYyBhY2NlcHRzKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICAvLyBXZSBhbHdheXMgdGVzdCB3aXRoIHRoZSBsb3dlcmNhc2UgdmFsdWUgb2YgdGhlIGlucHV0LCB0byBzdGF5IGNhc2UgaW5zZW5zaXRpdmVcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJGbi5hY2NlcHRzKGl0ZW0sIHRoaXMubG93ZXJDYXNlVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BlcnR5OiB0aGlzLmZpbHRlckZuLnByb3AsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZXF1YWxzKG90aGVyOiBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZTxULCBhbnk+KTogYm9vbGVhbiB7XG4gICAgaWYgKG90aGVyIGluc3RhbmNlb2YgRGF0YWdyaWRTdHJpbmdGaWx0ZXJJbXBsKSB7XG4gICAgICBpZiAob3RoZXIuZmlsdGVyRm4gaW5zdGFuY2VvZiBEYXRhZ3JpZFByb3BlcnR5U3RyaW5nRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdGhpcy5maWx0ZXJGbiBpbnN0YW5jZW9mIERhdGFncmlkUHJvcGVydHlTdHJpbmdGaWx0ZXIgJiZcbiAgICAgICAgICBvdGhlci5maWx0ZXJGbi5wcm9wID09PSB0aGlzLmZpbHRlckZuLnByb3AgJiZcbiAgICAgICAgICBvdGhlci52YWx1ZSA9PT0gdGhpcy52YWx1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG90aGVyID09PSB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==