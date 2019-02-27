/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/*
 * Do NOT Angular this up. It assumes we're in the DOM, plays with native elements, ...
 * It could potentially be used as part of @clr/ui as a vanilla Javascript helper.
 */
import { Subject } from 'rxjs';
/** @enum {number} */
const Point = {
    RIGHT_CENTER: 0,
    RIGHT_TOP: 1,
    RIGHT_BOTTOM: 2,
    TOP_CENTER: 3,
    TOP_RIGHT: 4,
    TOP_LEFT: 5,
    BOTTOM_CENTER: 6,
    BOTTOM_RIGHT: 7,
    BOTTOM_LEFT: 8,
    LEFT_CENTER: 9,
    LEFT_TOP: 10,
    LEFT_BOTTOM: 11,
};
export { Point };
Point[Point.RIGHT_CENTER] = 'RIGHT_CENTER';
Point[Point.RIGHT_TOP] = 'RIGHT_TOP';
Point[Point.RIGHT_BOTTOM] = 'RIGHT_BOTTOM';
Point[Point.TOP_CENTER] = 'TOP_CENTER';
Point[Point.TOP_RIGHT] = 'TOP_RIGHT';
Point[Point.TOP_LEFT] = 'TOP_LEFT';
Point[Point.BOTTOM_CENTER] = 'BOTTOM_CENTER';
Point[Point.BOTTOM_RIGHT] = 'BOTTOM_RIGHT';
Point[Point.BOTTOM_LEFT] = 'BOTTOM_LEFT';
Point[Point.LEFT_CENTER] = 'LEFT_CENTER';
Point[Point.LEFT_TOP] = 'LEFT_TOP';
Point[Point.LEFT_BOTTOM] = 'LEFT_BOTTOM';
/** @type {?} */
const POSITION_RELATIVE = 'relative';
/** @type {?} */
const POSITION_ABSOLUTE = 'absolute';
/** @type {?} */
const POSITION_FIXED = 'fixed';
/** @type {?} */
const OVERFLOW_SCROLL = 'scroll';
/** @type {?} */
const OVERFLOW_AUTO = 'auto';
export class Popover {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        /*
             * Containers up to the first positioned one will have an event on scroll
             */
        this.scrollableElements = [];
        this.boundOnScrollListener = this.emitScrollEvent.bind(this);
        // Browsers don't agree with what to do if some of these are not specified, so we set them all to be safe.
        element.style.position = POSITION_ABSOLUTE;
        element.style.top = 0;
        element.style.bottom = 'auto';
        element.style.left = 0;
        element.style.right = 'auto';
    }
    // TODO: need a way to account for parameters that change dynamically (positioning).
    /**
     * @param {?} anchor
     * @param {?} anchorAlign
     * @param {?} popoverAlign
     * @param {?=} __3
     * @return {?}
     */
    anchor(anchor, anchorAlign, popoverAlign, { offsetX = 0, offsetY = 0, useAnchorParent = false } = {}) {
        // TODO: we are assuming here that the popover is inside or next to the anchor.
        // We'd need to go up the popover tree too otherwise
        this.addScrollEventListeners(anchor);
        if (useAnchorParent) {
            anchor = anchor.parentNode;
        }
        // explicitly override anchor's style to static
        anchor.style.position = 'static';
        /** @type {?} */
        const anchorRect = anchor.getBoundingClientRect();
        /** @type {?} */
        const popoverRect = this.element.getBoundingClientRect();
        // position of left top corner of anchor + the offset
        /** @type {?} */
        let leftDiff = anchorRect.left - popoverRect.left + offsetX;
        /** @type {?} */
        let topDiff = anchorRect.top - popoverRect.top + offsetY;
        // first, adjust positioning based on anchor's align point
        switch (anchorAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
                break;
            case Point.TOP_CENTER:
                leftDiff += anchorRect.width / 2;
                break;
            case Point.TOP_RIGHT:
                leftDiff += anchorRect.width;
                break;
            case Point.RIGHT_TOP:
                leftDiff += anchorRect.width;
                break;
            case Point.LEFT_BOTTOM:
                topDiff += anchorRect.height;
                break;
            case Point.BOTTOM_LEFT:
                topDiff += anchorRect.height;
                break;
            case Point.BOTTOM_CENTER:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width / 2;
                break;
            case Point.BOTTOM_RIGHT:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width;
                break;
            case Point.RIGHT_BOTTOM:
                topDiff += anchorRect.height;
                leftDiff += anchorRect.width;
                break;
            case Point.LEFT_CENTER:
                topDiff += anchorRect.height / 2;
                break;
            case Point.RIGHT_CENTER:
                topDiff += anchorRect.height / 2;
                leftDiff += anchorRect.width;
                break;
            default:
        }
        // second, adjust positioning based on popover's align point
        switch (popoverAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
                break;
            case Point.TOP_CENTER:
                leftDiff -= popoverRect.width / 2;
                break;
            case Point.TOP_RIGHT:
                leftDiff -= popoverRect.width;
                break;
            case Point.RIGHT_TOP:
                leftDiff -= popoverRect.width;
                break;
            case Point.LEFT_BOTTOM:
                topDiff -= popoverRect.height;
                break;
            case Point.BOTTOM_LEFT:
                topDiff -= popoverRect.height;
                break;
            case Point.BOTTOM_CENTER:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width / 2;
                break;
            case Point.BOTTOM_RIGHT:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width;
                break;
            case Point.RIGHT_BOTTOM:
                topDiff -= popoverRect.height;
                leftDiff -= popoverRect.width;
                break;
            case Point.LEFT_CENTER:
                topDiff -= popoverRect.height / 2;
                break;
            case Point.RIGHT_CENTER:
                topDiff -= popoverRect.height / 2;
                leftDiff -= popoverRect.width;
                break;
            default:
        }
        // Third, adjust with popover's margins based on the two align points.
        // Here, we make an assumption that popover is primarily positioned outside the
        // anchor with minor offset. Without this assumption, it's impossible to apply
        // the popover's margins in a predictable way. For example, assume that a popover
        // and its anchor are exactly the same size. if a popover is positioned inside the
        // anchor (which is technically possible), then it becomes impossible to know what to do
        // if the popover has a non-zero margin value all around (because applying the margin in
        // all four directions will result in no margin visually, which isn't what we want).
        // Therefore, our logic makes assumptions about margins of interest given the points,
        // and only covers the cases where popover is outside the anchor.
        /** @type {?} */
        const popoverComputedStyle = getComputedStyle(this.element);
        /** @type {?} */
        const marginLeft = parseInt(popoverComputedStyle.marginLeft, 10);
        /** @type {?} */
        const marginRight = parseInt(popoverComputedStyle.marginRight, 10);
        /** @type {?} */
        const marginTop = parseInt(popoverComputedStyle.marginTop, 10);
        /** @type {?} */
        const marginBottom = parseInt(popoverComputedStyle.marginBottom, 10);
        switch (anchorAlign) {
            case Point.LEFT_TOP:
            case Point.TOP_LEFT:
            case Point.TOP_RIGHT:
            case Point.RIGHT_TOP:
                if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff -= marginRight;
                }
                if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
                    topDiff -= marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
                    topDiff += marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
                    topDiff += marginTop;
                    leftDiff -= marginRight;
                }
                break;
            case Point.LEFT_BOTTOM:
            case Point.BOTTOM_LEFT:
            case Point.BOTTOM_RIGHT:
            case Point.RIGHT_BOTTOM:
                if (popoverAlign === Point.BOTTOM_LEFT || popoverAlign === Point.LEFT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.BOTTOM_RIGHT || popoverAlign === Point.RIGHT_BOTTOM) {
                    topDiff -= marginBottom;
                    leftDiff -= marginRight;
                }
                if (popoverAlign === Point.TOP_LEFT || popoverAlign === Point.LEFT_TOP) {
                    topDiff += marginTop;
                    leftDiff += marginLeft;
                }
                if (popoverAlign === Point.TOP_RIGHT || popoverAlign === Point.RIGHT_TOP) {
                    topDiff += marginTop;
                    leftDiff -= marginRight;
                }
                break;
            case Point.TOP_CENTER:
                topDiff -= marginBottom;
                leftDiff += marginLeft;
                leftDiff -= marginRight;
                break;
            case Point.BOTTOM_CENTER:
                topDiff += marginTop;
                leftDiff += marginLeft;
                leftDiff -= marginRight;
                break;
            case Point.LEFT_CENTER:
                topDiff += marginTop;
                topDiff -= marginBottom;
                leftDiff -= marginRight;
                break;
            case Point.RIGHT_CENTER:
                topDiff += marginTop;
                topDiff -= marginBottom;
                leftDiff += marginLeft;
                break;
            default:
        }
        this.element.style.transform = `translateX(${Math.round(leftDiff)}px) translateY(${Math.round(topDiff)}px)`;
        return this._scroll.asObservable();
    }
    /**
     * @return {?}
     */
    release() {
        this.element.style.transform = '';
        this.removeScrollEventListeners();
    }
    /**
     * @param {?} container
     * @return {?}
     */
    isPositioned(container) {
        /** @type {?} */
        const position = getComputedStyle(container).position;
        return position === POSITION_RELATIVE || position === POSITION_ABSOLUTE || position === POSITION_FIXED;
    }
    /**
     * @return {?}
     */
    emitScrollEvent() {
        this._scroll.next();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addScrollEventListeners(e) {
        this._scroll = new Subject();
        /** @type {?} */
        const anchor = e;
        /** @type {?} */
        let current = e;
        while (current && current !== document) {
            if (this.scrolls(current)) {
                current.addEventListener('scroll', this.boundOnScrollListener);
                this.scrollableElements.push(current);
            }
            if (current !== anchor && this.isPositioned(current)) {
                break;
            }
            current = current.parentNode;
        }
    }
    /**
     * @return {?}
     */
    removeScrollEventListeners() {
        for (const elem of this.scrollableElements) {
            elem.removeEventListener('scroll', this.boundOnScrollListener);
        }
        this.scrollableElements.length = 0;
        if (this._scroll) {
            this._scroll.complete();
            delete this._scroll;
        }
    }
    /**
     * @param {?} container
     * @return {?}
     */
    scrolls(container) {
        /** @type {?} */
        const computedStyles = getComputedStyle(container);
        return (computedStyles.overflowX === OVERFLOW_SCROLL ||
            computedStyles.overflowX === OVERFLOW_AUTO ||
            computedStyles.overflowY === OVERFLOW_SCROLL ||
            computedStyles.overflowY === OVERFLOW_AUTO);
    }
}
if (false) {
    /** @type {?} */
    Popover.prototype._scroll;
    /** @type {?} */
    Popover.prototype.scrollableElements;
    /** @type {?} */
    Popover.prototype.boundOnScrollListener;
    /** @type {?} */
    Popover.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvY29tbW9uL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQUc3QixlQUFZO0lBQ1osWUFBUztJQUNULGVBQVk7SUFDWixhQUFVO0lBQ1YsWUFBUztJQUNULFdBQVE7SUFDUixnQkFBYTtJQUNiLGVBQVk7SUFDWixjQUFXO0lBQ1gsY0FBVztJQUNYLFlBQVE7SUFDUixlQUFXOzs7Ozs7Ozs7Ozs7Ozs7O01BR1AsaUJBQWlCLEdBQUcsVUFBVTs7TUFDOUIsaUJBQWlCLEdBQUcsVUFBVTs7TUFDOUIsY0FBYyxHQUFHLE9BQU87O01BRXhCLGVBQWUsR0FBRyxRQUFROztNQUMxQixhQUFhLEdBQUcsTUFBTTtBQUU1QixNQUFNLE9BQU8sT0FBTzs7OztJQUdsQixZQUFvQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7OztRQTBOeEIsdUJBQWtCLEdBQWtCLEVBQUUsQ0FBQztRQU12QywwQkFBcUIsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQS9ObkUsMEdBQTBHO1FBQzFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7Ozs7Ozs7SUFHTSxNQUFNLENBQ1gsTUFBVyxFQUNYLFdBQWtCLEVBQ2xCLFlB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IDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuLypcbiAqIERvIE5PVCBBbmd1bGFyIHRoaXMgdXAuIEl0IGFzc3VtZXMgd2UncmUgaW4gdGhlIERPTSwgcGxheXMgd2l0aCBuYXRpdmUgZWxlbWVudHMsIC4uLlxuICogSXQgY291bGQgcG90ZW50aWFsbHkgYmUgdXNlZCBhcyBwYXJ0IG9mIEBjbHIvdWkgYXMgYSB2YW5pbGxhIEphdmFzY3JpcHQgaGVscGVyLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9wb3BvdmVyLW9wdGlvbnMuaW50ZXJmYWNlJztcbmV4cG9ydCBlbnVtIFBvaW50IHtcbiAgUklHSFRfQ0VOVEVSLFxuICBSSUdIVF9UT1AsXG4gIFJJR0hUX0JPVFRPTSxcbiAgVE9QX0NFTlRFUixcbiAgVE9QX1JJR0hULFxuICBUT1BfTEVGVCxcbiAgQk9UVE9NX0NFTlRFUixcbiAgQk9UVE9NX1JJR0hULFxuICBCT1RUT01fTEVGVCxcbiAgTEVGVF9DRU5URVIsXG4gIExFRlRfVE9QLFxuICBMRUZUX0JPVFRPTSxcbn1cblxuY29uc3QgUE9TSVRJT05fUkVMQVRJVkUgPSAncmVsYXRpdmUnO1xuY29uc3QgUE9TSVRJT05fQUJTT0xVVEUgPSAnYWJzb2x1dGUnO1xuY29uc3QgUE9TSVRJT05fRklYRUQgPSAnZml4ZWQnO1xuXG5jb25zdCBPVkVSRkxPV19TQ1JPTEwgPSAnc2Nyb2xsJztcbmNvbnN0IE9WRVJGTE9XX0FVVE8gPSAnYXV0byc7XG5cbmV4cG9ydCBjbGFzcyBQb3BvdmVyIHtcbiAgcHJpdmF0ZSBfc2Nyb2xsOiBTdWJqZWN0PHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogYW55KSB7XG4gICAgLy8gQnJvd3NlcnMgZG9uJ3QgYWdyZWUgd2l0aCB3aGF0IHRvIGRvIGlmIHNvbWUgb2YgdGhlc2UgYXJlIG5vdCBzcGVjaWZpZWQsIHNvIHdlIHNldCB0aGVtIGFsbCB0byBiZSBzYWZlLlxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBQT1NJVElPTl9BQlNPTFVURTtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgZWxlbWVudC5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xuICB9XG5cbiAgLy8gVE9ETzogbmVlZCBhIHdheSB0byBhY2NvdW50IGZvciBwYXJhbWV0ZXJzIHRoYXQgY2hhbmdlIGR5bmFtaWNhbGx5IChwb3NpdGlvbmluZykuXG4gIHB1YmxpYyBhbmNob3IoXG4gICAgYW5jaG9yOiBhbnksXG4gICAgYW5jaG9yQWxpZ246IFBvaW50LFxuICAgIHBvcG92ZXJBbGlnbjogUG9pbnQsXG4gICAgeyBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDAsIHVzZUFuY2hvclBhcmVudCA9IGZhbHNlIH06IFBvcG92ZXJPcHRpb25zID0ge31cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBUT0RPOiB3ZSBhcmUgYXNzdW1pbmcgaGVyZSB0aGF0IHRoZSBwb3BvdmVyIGlzIGluc2lkZSBvciBuZXh0IHRvIHRoZSBhbmNob3IuXG4gICAgLy8gV2UnZCBuZWVkIHRvIGdvIHVwIHRoZSBwb3BvdmVyIHRyZWUgdG9vIG90aGVyd2lzZVxuXG4gICAgdGhpcy5hZGRTY3JvbGxFdmVudExpc3RlbmVycyhhbmNob3IpO1xuICAgIGlmICh1c2VBbmNob3JQYXJlbnQpIHtcbiAgICAgIGFuY2hvciA9IGFuY2hvci5wYXJlbnROb2RlO1xuICAgIH1cbiAgICAvLyBleHBsaWNpdGx5IG92ZXJyaWRlIGFuY2hvcidzIHN0eWxlIHRvIHN0YXRpY1xuICAgIGFuY2hvci5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuXG4gICAgY29uc3QgYW5jaG9yUmVjdCA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwb3BvdmVyUmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHBvc2l0aW9uIG9mIGxlZnQgdG9wIGNvcm5lciBvZiBhbmNob3IgKyB0aGUgb2Zmc2V0XG4gICAgbGV0IGxlZnREaWZmOiBudW1iZXIgPSBhbmNob3JSZWN0LmxlZnQgLSBwb3BvdmVyUmVjdC5sZWZ0ICsgb2Zmc2V0WDtcbiAgICBsZXQgdG9wRGlmZjogbnVtYmVyID0gYW5jaG9yUmVjdC50b3AgLSBwb3BvdmVyUmVjdC50b3AgKyBvZmZzZXRZO1xuXG4gICAgLy8gZmlyc3QsIGFkanVzdCBwb3NpdGlvbmluZyBiYXNlZCBvbiBhbmNob3IncyBhbGlnbiBwb2ludFxuICAgIHN3aXRjaCAoYW5jaG9yQWxpZ24pIHtcbiAgICAgIGNhc2UgUG9pbnQuTEVGVF9UT1A6XG4gICAgICBjYXNlIFBvaW50LlRPUF9MRUZUOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuVE9QX0NFTlRFUjpcbiAgICAgICAgbGVmdERpZmYgKz0gYW5jaG9yUmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5UT1BfUklHSFQ6XG4gICAgICAgIGxlZnREaWZmICs9IGFuY2hvclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9UT1A6XG4gICAgICAgIGxlZnREaWZmICs9IGFuY2hvclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5MRUZUX0JPVFRPTTpcbiAgICAgICAgdG9wRGlmZiArPSBhbmNob3JSZWN0LmhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBvaW50LkJPVFRPTV9MRUZUOlxuICAgICAgICB0b3BEaWZmICs9IGFuY2hvclJlY3QuaGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuQk9UVE9NX0NFTlRFUjpcbiAgICAgICAgdG9wRGlmZiArPSBhbmNob3JSZWN0LmhlaWdodDtcbiAgICAgICAgbGVmdERpZmYgKz0gYW5jaG9yUmVjdC53aWR0aCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5CT1RUT01fUklHSFQ6XG4gICAgICAgIHRvcERpZmYgKz0gYW5jaG9yUmVjdC5oZWlnaHQ7XG4gICAgICAgIGxlZnREaWZmICs9IGFuY2hvclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9CT1RUT006XG4gICAgICAgIHRvcERpZmYgKz0gYW5jaG9yUmVjdC5oZWlnaHQ7XG4gICAgICAgIGxlZnREaWZmICs9IGFuY2hvclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5MRUZUX0NFTlRFUjpcbiAgICAgICAgdG9wRGlmZiArPSBhbmNob3JSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9DRU5URVI6XG4gICAgICAgIHRvcERpZmYgKz0gYW5jaG9yUmVjdC5oZWlnaHQgLyAyO1xuICAgICAgICBsZWZ0RGlmZiArPSBhbmNob3JSZWN0LndpZHRoO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgLy8gc2Vjb25kLCBhZGp1c3QgcG9zaXRpb25pbmcgYmFzZWQgb24gcG9wb3ZlcidzIGFsaWduIHBvaW50XG4gICAgc3dpdGNoIChwb3BvdmVyQWxpZ24pIHtcbiAgICAgIGNhc2UgUG9pbnQuTEVGVF9UT1A6XG4gICAgICBjYXNlIFBvaW50LlRPUF9MRUZUOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuVE9QX0NFTlRFUjpcbiAgICAgICAgbGVmdERpZmYgLT0gcG9wb3ZlclJlY3Qud2lkdGggLyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuVE9QX1JJR0hUOlxuICAgICAgICBsZWZ0RGlmZiAtPSBwb3BvdmVyUmVjdC53aWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBvaW50LlJJR0hUX1RPUDpcbiAgICAgICAgbGVmdERpZmYgLT0gcG9wb3ZlclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5MRUZUX0JPVFRPTTpcbiAgICAgICAgdG9wRGlmZiAtPSBwb3BvdmVyUmVjdC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5CT1RUT01fTEVGVDpcbiAgICAgICAgdG9wRGlmZiAtPSBwb3BvdmVyUmVjdC5oZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5CT1RUT01fQ0VOVEVSOlxuICAgICAgICB0b3BEaWZmIC09IHBvcG92ZXJSZWN0LmhlaWdodDtcbiAgICAgICAgbGVmdERpZmYgLT0gcG9wb3ZlclJlY3Qud2lkdGggLyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuQk9UVE9NX1JJR0hUOlxuICAgICAgICB0b3BEaWZmIC09IHBvcG92ZXJSZWN0LmhlaWdodDtcbiAgICAgICAgbGVmdERpZmYgLT0gcG9wb3ZlclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9CT1RUT006XG4gICAgICAgIHRvcERpZmYgLT0gcG9wb3ZlclJlY3QuaGVpZ2h0O1xuICAgICAgICBsZWZ0RGlmZiAtPSBwb3BvdmVyUmVjdC53aWR0aDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBvaW50LkxFRlRfQ0VOVEVSOlxuICAgICAgICB0b3BEaWZmIC09IHBvcG92ZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9DRU5URVI6XG4gICAgICAgIHRvcERpZmYgLT0gcG9wb3ZlclJlY3QuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGVmdERpZmYgLT0gcG9wb3ZlclJlY3Qud2lkdGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICAvLyBUaGlyZCwgYWRqdXN0IHdpdGggcG9wb3ZlcidzIG1hcmdpbnMgYmFzZWQgb24gdGhlIHR3byBhbGlnbiBwb2ludHMuXG4gICAgLy8gSGVyZSwgd2UgbWFrZSBhbiBhc3N1bXB0aW9uIHRoYXQgcG9wb3ZlciBpcyBwcmltYXJpbHkgcG9zaXRpb25lZCBvdXRzaWRlIHRoZVxuICAgIC8vIGFuY2hvciB3aXRoIG1pbm9yIG9mZnNldC4gV2l0aG91dCB0aGlzIGFzc3VtcHRpb24sIGl0J3MgaW1wb3NzaWJsZSB0byBhcHBseVxuICAgIC8vIHRoZSBwb3BvdmVyJ3MgbWFyZ2lucyBpbiBhIHByZWRpY3RhYmxlIHdheS4gRm9yIGV4YW1wbGUsIGFzc3VtZSB0aGF0IGEgcG9wb3ZlclxuICAgIC8vIGFuZCBpdHMgYW5jaG9yIGFyZSBleGFjdGx5IHRoZSBzYW1lIHNpemUuIGlmIGEgcG9wb3ZlciBpcyBwb3NpdGlvbmVkIGluc2lkZSB0aGVcbiAgICAvLyBhbmNob3IgKHdoaWNoIGlzIHRlY2huaWNhbGx5IHBvc3NpYmxlKSwgdGhlbiBpdCBiZWNvbWVzIGltcG9zc2libGUgdG8ga25vdyB3aGF0IHRvIGRvXG4gICAgLy8gaWYgdGhlIHBvcG92ZXIgaGFzIGEgbm9uLXplcm8gbWFyZ2luIHZhbHVlIGFsbCBhcm91bmQgKGJlY2F1c2UgYXBwbHlpbmcgdGhlIG1hcmdpbiBpblxuICAgIC8vIGFsbCBmb3VyIGRpcmVjdGlvbnMgd2lsbCByZXN1bHQgaW4gbm8gbWFyZ2luIHZpc3VhbGx5LCB3aGljaCBpc24ndCB3aGF0IHdlIHdhbnQpLlxuICAgIC8vIFRoZXJlZm9yZSwgb3VyIGxvZ2ljIG1ha2VzIGFzc3VtcHRpb25zIGFib3V0IG1hcmdpbnMgb2YgaW50ZXJlc3QgZ2l2ZW4gdGhlIHBvaW50cyxcbiAgICAvLyBhbmQgb25seSBjb3ZlcnMgdGhlIGNhc2VzIHdoZXJlIHBvcG92ZXIgaXMgb3V0c2lkZSB0aGUgYW5jaG9yLlxuXG4gICAgY29uc3QgcG9wb3ZlckNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlSW50KHBvcG92ZXJDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5SaWdodCA9IHBhcnNlSW50KHBvcG92ZXJDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VJbnQocG9wb3ZlckNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMCk7XG4gICAgY29uc3QgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQocG9wb3ZlckNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLCAxMCk7XG5cbiAgICBzd2l0Y2ggKGFuY2hvckFsaWduKSB7XG4gICAgICBjYXNlIFBvaW50LkxFRlRfVE9QOlxuICAgICAgY2FzZSBQb2ludC5UT1BfTEVGVDpcbiAgICAgIGNhc2UgUG9pbnQuVE9QX1JJR0hUOlxuICAgICAgY2FzZSBQb2ludC5SSUdIVF9UT1A6XG4gICAgICAgIGlmIChwb3BvdmVyQWxpZ24gPT09IFBvaW50LkJPVFRPTV9SSUdIVCB8fCBwb3BvdmVyQWxpZ24gPT09IFBvaW50LlJJR0hUX0JPVFRPTSkge1xuICAgICAgICAgIHRvcERpZmYgLT0gbWFyZ2luQm90dG9tO1xuICAgICAgICAgIGxlZnREaWZmIC09IG1hcmdpblJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BvdmVyQWxpZ24gPT09IFBvaW50LkJPVFRPTV9MRUZUIHx8IHBvcG92ZXJBbGlnbiA9PT0gUG9pbnQuTEVGVF9CT1RUT00pIHtcbiAgICAgICAgICB0b3BEaWZmIC09IG1hcmdpblRvcDtcbiAgICAgICAgICBsZWZ0RGlmZiArPSBtYXJnaW5MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BvdmVyQWxpZ24gPT09IFBvaW50LlRPUF9MRUZUIHx8IHBvcG92ZXJBbGlnbiA9PT0gUG9pbnQuTEVGVF9UT1ApIHtcbiAgICAgICAgICB0b3BEaWZmICs9IG1hcmdpblRvcDtcbiAgICAgICAgICBsZWZ0RGlmZiArPSBtYXJnaW5MZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3BvdmVyQWxpZ24gPT09IFBvaW50LlRPUF9SSUdIVCB8fCBwb3BvdmVyQWxpZ24gPT09IFBvaW50LlJJR0hUX1RPUCkge1xuICAgICAgICAgIHRvcERpZmYgKz0gbWFyZ2luVG9wO1xuICAgICAgICAgIGxlZnREaWZmIC09IG1hcmdpblJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5MRUZUX0JPVFRPTTpcbiAgICAgIGNhc2UgUG9pbnQuQk9UVE9NX0xFRlQ6XG4gICAgICBjYXNlIFBvaW50LkJPVFRPTV9SSUdIVDpcbiAgICAgIGNhc2UgUG9pbnQuUklHSFRfQk9UVE9NOlxuICAgICAgICBpZiAocG9wb3ZlckFsaWduID09PSBQb2ludC5CT1RUT01fTEVGVCB8fCBwb3BvdmVyQWxpZ24gPT09IFBvaW50LkxFRlRfQk9UVE9NKSB7XG4gICAgICAgICAgdG9wRGlmZiAtPSBtYXJnaW5Cb3R0b207XG4gICAgICAgICAgbGVmdERpZmYgKz0gbWFyZ2luTGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9wb3ZlckFsaWduID09PSBQb2ludC5CT1RUT01fUklHSFQgfHwgcG9wb3ZlckFsaWduID09PSBQb2ludC5SSUdIVF9CT1RUT00pIHtcbiAgICAgICAgICB0b3BEaWZmIC09IG1hcmdpbkJvdHRvbTtcbiAgICAgICAgICBsZWZ0RGlmZiAtPSBtYXJnaW5SaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9wb3ZlckFsaWduID09PSBQb2ludC5UT1BfTEVGVCB8fCBwb3BvdmVyQWxpZ24gPT09IFBvaW50LkxFRlRfVE9QKSB7XG4gICAgICAgICAgdG9wRGlmZiArPSBtYXJnaW5Ub3A7XG4gICAgICAgICAgbGVmdERpZmYgKz0gbWFyZ2luTGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9wb3ZlckFsaWduID09PSBQb2ludC5UT1BfUklHSFQgfHwgcG9wb3ZlckFsaWduID09PSBQb2ludC5SSUdIVF9UT1ApIHtcbiAgICAgICAgICB0b3BEaWZmICs9IG1hcmdpblRvcDtcbiAgICAgICAgICBsZWZ0RGlmZiAtPSBtYXJnaW5SaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuVE9QX0NFTlRFUjpcbiAgICAgICAgdG9wRGlmZiAtPSBtYXJnaW5Cb3R0b207XG4gICAgICAgIGxlZnREaWZmICs9IG1hcmdpbkxlZnQ7XG4gICAgICAgIGxlZnREaWZmIC09IG1hcmdpblJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuQk9UVE9NX0NFTlRFUjpcbiAgICAgICAgdG9wRGlmZiArPSBtYXJnaW5Ub3A7XG4gICAgICAgIGxlZnREaWZmICs9IG1hcmdpbkxlZnQ7XG4gICAgICAgIGxlZnREaWZmIC09IG1hcmdpblJpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUG9pbnQuTEVGVF9DRU5URVI6XG4gICAgICAgIHRvcERpZmYgKz0gbWFyZ2luVG9wO1xuICAgICAgICB0b3BEaWZmIC09IG1hcmdpbkJvdHRvbTtcbiAgICAgICAgbGVmdERpZmYgLT0gbWFyZ2luUmlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQb2ludC5SSUdIVF9DRU5URVI6XG4gICAgICAgIHRvcERpZmYgKz0gbWFyZ2luVG9wO1xuICAgICAgICB0b3BEaWZmIC09IG1hcmdpbkJvdHRvbTtcbiAgICAgICAgbGVmdERpZmYgKz0gbWFyZ2luTGVmdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke01hdGgucm91bmQobGVmdERpZmYpfXB4KSB0cmFuc2xhdGVZKCR7TWF0aC5yb3VuZCh0b3BEaWZmKX1weClgO1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGwuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVsZWFzZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgdGhpcy5yZW1vdmVTY3JvbGxFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1Bvc2l0aW9uZWQoY29udGFpbmVyOiBhbnkpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5wb3NpdGlvbjtcbiAgICByZXR1cm4gcG9zaXRpb24gPT09IFBPU0lUSU9OX1JFTEFUSVZFIHx8IHBvc2l0aW9uID09PSBQT1NJVElPTl9BQlNPTFVURSB8fCBwb3NpdGlvbiA9PT0gUE9TSVRJT05fRklYRUQ7XG4gIH1cblxuICAvKlxuICAgICAqIENvbnRhaW5lcnMgdXAgdG8gdGhlIGZpcnN0IHBvc2l0aW9uZWQgb25lIHdpbGwgaGF2ZSBhbiBldmVudCBvbiBzY3JvbGxcbiAgICAgKi9cblxuICBwcml2YXRlIHNjcm9sbGFibGVFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgZW1pdFNjcm9sbEV2ZW50KCkge1xuICAgIHRoaXMuX3Njcm9sbC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGJvdW5kT25TY3JvbGxMaXN0ZW5lcjogYW55ID0gdGhpcy5lbWl0U2Nyb2xsRXZlbnQuYmluZCh0aGlzKTtcblxuICBwcml2YXRlIGFkZFNjcm9sbEV2ZW50TGlzdGVuZXJzKGU6IGFueSkge1xuICAgIHRoaXMuX3Njcm9sbCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgY29uc3QgYW5jaG9yOiBhbnkgPSBlO1xuICAgIGxldCBjdXJyZW50OiBhbnkgPSBlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxzKGN1cnJlbnQpKSB7XG4gICAgICAgIGN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE9uU2Nyb2xsTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgIT09IGFuY2hvciAmJiB0aGlzLmlzUG9zaXRpb25lZChjdXJyZW50KSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxFdmVudExpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdGhpcy5zY3JvbGxhYmxlRWxlbWVudHMpIHtcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE9uU2Nyb2xsTGlzdGVuZXIpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbGFibGVFbGVtZW50cy5sZW5ndGggPSAwO1xuICAgIGlmICh0aGlzLl9zY3JvbGwpIHtcbiAgICAgIHRoaXMuX3Njcm9sbC5jb21wbGV0ZSgpO1xuICAgICAgZGVsZXRlIHRoaXMuX3Njcm9sbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbHMoY29udGFpbmVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcbiAgICByZXR1cm4gKFxuICAgICAgY29tcHV0ZWRTdHlsZXMub3ZlcmZsb3dYID09PSBPVkVSRkxPV19TQ1JPTEwgfHxcbiAgICAgIGNvbXB1dGVkU3R5bGVzLm92ZXJmbG93WCA9PT0gT1ZFUkZMT1dfQVVUTyB8fFxuICAgICAgY29tcHV0ZWRTdHlsZXMub3ZlcmZsb3dZID09PSBPVkVSRkxPV19TQ1JPTEwgfHxcbiAgICAgIGNvbXB1dGVkU3R5bGVzLm92ZXJmbG93WSA9PT0gT1ZFUkZMT1dfQVVUT1xuICAgICk7XG4gIH1cbn1cbiJdfQ==