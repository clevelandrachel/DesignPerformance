/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This is an abstract class because we need it to still be a valid token for dependency injection after transpiling.
 * This does not mean you should extend it, simply implementing it is fine.
 * @abstract
 */
export class LoadingListener {
}
if (false) {
    /**
     * @abstract
     * @param {?} state
     * @return {?}
     */
    LoadingListener.prototype.loadingStateChange = function (state) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1saXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2xvYWRpbmcvbG9hZGluZy1saXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVlBLE1BQU0sT0FBZ0IsZUFBZTtDQUVwQzs7Ozs7OztJQURDLG9FQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ2xyTG9hZGluZ1N0YXRlIH0gZnJvbSAnLi9sb2FkaW5nJztcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzIGJlY2F1c2Ugd2UgbmVlZCBpdCB0byBzdGlsbCBiZSBhIHZhbGlkIHRva2VuIGZvciBkZXBlbmRlbmN5IGluamVjdGlvbiBhZnRlciB0cmFuc3BpbGluZy5cbiAqIFRoaXMgZG9lcyBub3QgbWVhbiB5b3Ugc2hvdWxkIGV4dGVuZCBpdCwgc2ltcGx5IGltcGxlbWVudGluZyBpdCBpcyBmaW5lLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9hZGluZ0xpc3RlbmVyIHtcbiAgYWJzdHJhY3QgbG9hZGluZ1N0YXRlQ2hhbmdlKHN0YXRlOiBDbHJMb2FkaW5nU3RhdGUpOiB2b2lkO1xufVxuIl19