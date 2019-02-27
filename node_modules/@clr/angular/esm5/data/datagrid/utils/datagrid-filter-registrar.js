/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { RegisteredFilter } from '../providers/filters';
/**
 * @abstract
 * @template T, F
 */
var /**
 * @abstract
 * @template T, F
 */
DatagridFilterRegistrar = /** @class */ (function () {
    function DatagridFilterRegistrar(filters) {
        this.filters = filters;
    }
    Object.defineProperty(DatagridFilterRegistrar.prototype, "filter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.registered && this.registered.filter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} filter
     * @return {?}
     */
    DatagridFilterRegistrar.prototype.setFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof RegisteredFilter) {
            this.registered = filter;
        }
        else if (filter) {
            this.registered = this.filters.add(filter);
        }
    };
    /**
     * @return {?}
     */
    DatagridFilterRegistrar.prototype.deleteFilter = /**
     * @return {?}
     */
    function () {
        if (this.registered) {
            this.registered.unregister();
            delete this.registered;
        }
    };
    /**
     * @return {?}
     */
    DatagridFilterRegistrar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.deleteFilter();
    };
    return DatagridFilterRegistrar;
}());
/**
 * @abstract
 * @template T, F
 */
export { DatagridFilterRegistrar };
if (false) {
    /** @type {?} */
    DatagridFilterRegistrar.prototype.registered;
    /** @type {?} */
    DatagridFilterRegistrar.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvdXRpbHMvZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUV6RTs7Ozs7SUFDRSxpQ0FBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBSW5ELHNCQUFXLDJDQUFNOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ25ELENBQUM7OztPQUFBOzs7OztJQUVNLDJDQUFTOzs7O0lBQWhCLFVBQWlCLE1BQWtDO1FBQ2pELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLFlBQVksZ0JBQWdCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUVNLDhDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7O0lBRU0sNkNBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7Ozs7OztJQTFCQyw2Q0FBMEM7O0lBRjlCLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ZpbHRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmlsdGVyc1Byb3ZpZGVyLCBSZWdpc3RlcmVkRmlsdGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2ZpbHRlcnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0YWdyaWRGaWx0ZXJSZWdpc3RyYXI8VCwgRiBleHRlbmRzIENsckRhdGFncmlkRmlsdGVySW50ZXJmYWNlPFQ+PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlsdGVyczogRmlsdGVyc1Byb3ZpZGVyPFQ+KSB7fVxuXG4gIHB1YmxpYyByZWdpc3RlcmVkOiBSZWdpc3RlcmVkRmlsdGVyPFQsIEY+O1xuXG4gIHB1YmxpYyBnZXQgZmlsdGVyKCk6IEYge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWQgJiYgdGhpcy5yZWdpc3RlcmVkLmZpbHRlcjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRGaWx0ZXIoZmlsdGVyOiBGIHwgUmVnaXN0ZXJlZEZpbHRlcjxULCBGPikge1xuICAgIC8vIElmIHdlIHByZXZpb3VzbHkgaGFkIGFub3RoZXIgZmlsdGVyLCB3ZSB1bnJlZ2lzdGVyIGl0XG4gICAgdGhpcy5kZWxldGVGaWx0ZXIoKTtcbiAgICBpZiAoZmlsdGVyIGluc3RhbmNlb2YgUmVnaXN0ZXJlZEZpbHRlcikge1xuICAgICAgdGhpcy5yZWdpc3RlcmVkID0gZmlsdGVyO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWQgPSB0aGlzLmZpbHRlcnMuYWRkKGZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRlbGV0ZUZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWQudW5yZWdpc3RlcigpO1xuICAgICAgZGVsZXRlIHRoaXMucmVnaXN0ZXJlZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxldGVGaWx0ZXIoKTtcbiAgfVxufVxuIl19