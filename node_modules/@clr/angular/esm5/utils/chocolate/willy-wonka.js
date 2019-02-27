/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
var /*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
WillyWonka = /** @class */ (function () {
    function WillyWonka() {
        this._chocolate = new Subject();
    }
    Object.defineProperty(WillyWonka.prototype, "chocolate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._chocolate.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    WillyWonka.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._chocolate.next();
    };
    return WillyWonka;
}());
/*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
export { WillyWonka };
if (false) {
    /** @type {?} */
    WillyWonka.prototype._chocolate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lsbHktd29ua2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ1dGlscy9jaG9jb2xhdGUvd2lsbHktd29ua2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU9BLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7OztBQVUvQjs7Ozs7Ozs7O0lBQUE7UUFDVSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQVMzQyxDQUFDO0lBUEMsc0JBQVcsaUNBQVM7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7Ozs7SUFFRCx1Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7Ozs7Ozs7OztJQVRDLGdDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLypcbiAqIEFmdGVyIGEgY29udmVyc2F0aW9uIHdpdGggdGhlIEFuZ3VsYXIgY29yZSB0ZWFtLCBpdCB0dXJucyBvdXQgd2UgZG9uJ3QgaGF2ZSBtdWNoIG9mIGEgY2hvaWNlIGZvciBvdXJcbiAqIGRlY2xhcmF0aXZlIEFQSSwgd2UgbmVlZCB0byBmaWdodCBhZ2FpbnN0IGNoYW5nZSBkZXRlY3Rpb24gYW5kIGl0cyBvbmUtd2F5IGZsb3cuIFRoaXMgaXNcbiAqIGN1cnJlbnRseSB0aGUgbGVhc3QgZGlydHkgc29sdXRpb24gdG8gZG8gd2hhdCB3ZSB3YW50LlxuICpcbiAqIERvIG5vdCBtb2RpZnkgb3IgZXZlbiB1c2UgdGhpcyBjbGFzcyB1bmxlc3MgeW91IGtub3cgZXhhY3RseSB3aGF0IHlvdSdyZSBkb2luZy5cbiAqIEl0IGhhcyB0aGUgcG90ZW50aWFsIHRvIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiBsb29wcyBvciBraWxsIGFwcCBwZXJmb3JtYW5jZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBXaWxseVdvbmthIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHByaXZhdGUgX2Nob2NvbGF0ZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHVibGljIGdldCBjaG9jb2xhdGUoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Nob2NvbGF0ZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLl9jaG9jb2xhdGUubmV4dCgpO1xuICB9XG59XG4iXX0=