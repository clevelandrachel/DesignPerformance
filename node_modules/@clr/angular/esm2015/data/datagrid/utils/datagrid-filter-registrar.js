/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { RegisteredFilter } from '../providers/filters';
/**
 * @abstract
 * @template T, F
 */
export class DatagridFilterRegistrar {
    /**
     * @param {?} filters
     */
    constructor(filters) {
        this.filters = filters;
    }
    /**
     * @return {?}
     */
    get filter() {
        return this.registered && this.registered.filter;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    setFilter(filter) {
        // If we previously had another filter, we unregister it
        this.deleteFilter();
        if (filter instanceof RegisteredFilter) {
            this.registered = filter;
        }
        else if (filter) {
            this.registered = this.filters.add(filter);
        }
    }
    /**
     * @return {?}
     */
    deleteFilter() {
        if (this.registered) {
            this.registered.unregister();
            delete this.registered;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.deleteFilter();
    }
}
if (false) {
    /** @type {?} */
    DatagridFilterRegistrar.prototype.registered;
    /** @type {?} */
    DatagridFilterRegistrar.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvdXRpbHMvZGF0YWdyaWQtZmlsdGVyLXJlZ2lzdHJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUV6RSxNQUFNLE9BQWdCLHVCQUF1Qjs7OztJQUMzQyxZQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtJQUFHLENBQUM7Ozs7SUFJbkQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLE1BQWtDO1FBQ2pELHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLFlBQVksZ0JBQWdCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUI7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjs7O0lBMUJDLDZDQUEwQzs7SUFGOUIsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbHJEYXRhZ3JpZEZpbHRlckludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZmlsdGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWx0ZXJzUHJvdmlkZXIsIFJlZ2lzdGVyZWRGaWx0ZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvZmlsdGVycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYXRhZ3JpZEZpbHRlclJlZ2lzdHJhcjxULCBGIGV4dGVuZHMgQ2xyRGF0YWdyaWRGaWx0ZXJJbnRlcmZhY2U8VD4+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmaWx0ZXJzOiBGaWx0ZXJzUHJvdmlkZXI8VD4pIHt9XG5cbiAgcHVibGljIHJlZ2lzdGVyZWQ6IFJlZ2lzdGVyZWRGaWx0ZXI8VCwgRj47XG5cbiAgcHVibGljIGdldCBmaWx0ZXIoKTogRiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZCAmJiB0aGlzLnJlZ2lzdGVyZWQuZmlsdGVyO1xuICB9XG5cbiAgcHVibGljIHNldEZpbHRlcihmaWx0ZXI6IEYgfCBSZWdpc3RlcmVkRmlsdGVyPFQsIEY+KSB7XG4gICAgLy8gSWYgd2UgcHJldmlvdXNseSBoYWQgYW5vdGhlciBmaWx0ZXIsIHdlIHVucmVnaXN0ZXIgaXRcbiAgICB0aGlzLmRlbGV0ZUZpbHRlcigpO1xuICAgIGlmIChmaWx0ZXIgaW5zdGFuY2VvZiBSZWdpc3RlcmVkRmlsdGVyKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWQgPSBmaWx0ZXI7XG4gICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRoaXMuZmlsdGVycy5hZGQoZmlsdGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlRmlsdGVyKCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZC51bnJlZ2lzdGVyKCk7XG4gICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZUZpbHRlcigpO1xuICB9XG59XG4iXX0=