/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
OompaLoompa = /** @class */ (function () {
    // FIXME: Request Injector once we move to Angular 4.2+, it'll allow easier refactors
    function OompaLoompa(cdr, willyWonka) {
        var _this = this;
        this.subscription = willyWonka.chocolate.subscribe(function () {
            if (_this.latestFlavor !== _this.flavor) {
                cdr.detectChanges();
            }
        });
    }
    /**
     * @return {?}
     */
    OompaLoompa.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.latestFlavor = this.flavor;
    };
    /**
     * @return {?}
     */
    OompaLoompa.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    return OompaLoompa;
}());
/**
 * @abstract
 */
export { OompaLoompa };
if (false) {
    /** @type {?} */
    OompaLoompa.prototype.subscription;
    /** @type {?} */
    OompaLoompa.prototype.latestFlavor;
    /**
     * @abstract
     * @return {?}
     */
    OompaLoompa.prototype.flavor = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib29tcGEtbG9vbXBhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbHMvY2hvY29sYXRlL29vbXBhLWxvb21wYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBU0E7Ozs7SUFDRSxxRkFBcUY7SUFDckYscUJBQVksR0FBc0IsRUFBRSxVQUFzQjtRQUExRCxpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDakQsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQVFELDJDQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7SUFiQyxtQ0FBbUM7O0lBRW5DLG1DQUEwQjs7Ozs7SUFFMUIsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaWxseVdvbmthIH0gZnJvbSAnLi93aWxseS13b25rYSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPb21wYUxvb21wYSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG4gIC8vIEZJWE1FOiBSZXF1ZXN0IEluamVjdG9yIG9uY2Ugd2UgbW92ZSB0byBBbmd1bGFyIDQuMissIGl0J2xsIGFsbG93IGVhc2llciByZWZhY3RvcnNcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgd2lsbHlXb25rYTogV2lsbHlXb25rYSkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gd2lsbHlXb25rYS5jaG9jb2xhdGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxhdGVzdEZsYXZvciAhPT0gdGhpcy5mbGF2b3IpIHtcbiAgICAgICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBsYXRlc3RGbGF2b3I6IGFueTtcblxuICBhYnN0cmFjdCBnZXQgZmxhdm9yKCk6IGFueTtcblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgdGhpcy5sYXRlc3RGbGF2b3IgPSB0aGlzLmZsYXZvcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==