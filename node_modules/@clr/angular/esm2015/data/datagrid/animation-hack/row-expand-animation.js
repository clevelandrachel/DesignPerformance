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
 * This is a hack that we have to write for now because of bugs and limitations in Angular,
 * please do not use this as an example.
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Expand } from '../../../utils/expand/providers/expand';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';
export class DatagridRowExpandAnimation {
    /**
     * @param {?} el
     * @param {?} domAdapter
     * @param {?} renderer
     * @param {?} expand
     */
    constructor(el, domAdapter, renderer, expand) {
        this.el = el;
        this.domAdapter = domAdapter;
        this.renderer = renderer;
        this.expand = expand;
        if (expand && expand.animate) {
            expand.animate.subscribe(() => {
                // We already had an animation waiting, so we just have to run in, not prepare again
                if (this.oldHeight) {
                    setTimeout(() => this.run());
                }
                else {
                    this.animate();
                }
            });
        }
    }
    /*
         * Dirty manual animation handling, but we have no way to use dynamic heights in Angular's current API.
         * They're working on it, but have no ETA.
         */
    /**
     * @return {?}
     */
    animate() {
        // Check if we do have web-animations available. If not, just skip the animation.
        if (!this.el.nativeElement.animate) {
            return;
        }
        // We had an animation running, we skip to the end
        if (this.running) {
            this.running.finish();
        }
        this.oldHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        // In case height has not yet been set. When starting expanded, for example.
        // See https://github.com/vmware/clarity/issues/2904
        if (isNaN(this.oldHeight)) {
            this.oldHeight = 0;
        }
        // We set the height of the element immediately to avoid a flicker before the animation starts.
        this.renderer.setStyle(this.el.nativeElement, 'height', this.oldHeight + 'px');
        this.renderer.setStyle(this.el.nativeElement, 'overflow-y', 'hidden');
        setTimeout(() => {
            if (this.expand.loading) {
                return;
            }
            this.run();
        });
    }
    /**
     * @return {?}
     */
    run() {
        this.renderer.setStyle(this.el.nativeElement, 'height', null);
        /** @type {?} */
        const newHeight = this.domAdapter.computedHeight(this.el.nativeElement);
        this.running = this.el.nativeElement.animate({ height: [this.oldHeight + 'px', newHeight + 'px'], easing: 'ease-in-out' }, { duration: 200 });
        this.running.onfinish = () => {
            this.renderer.setStyle(this.el.nativeElement, 'overflow-y', null);
            delete this.running;
        };
        delete this.oldHeight;
    }
}
DatagridRowExpandAnimation.decorators = [
    { type: Directive, args: [{ selector: 'clr-dg-row' },] }
];
/** @nocollapse */
DatagridRowExpandAnimation.ctorParameters = () => [
    { type: ElementRef },
    { type: DomAdapter },
    { type: Renderer2 },
    { type: Expand }
];
if (false) {
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.running;
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.oldHeight;
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.el;
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.domAdapter;
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.renderer;
    /** @type {?} */
    DatagridRowExpandAnimation.prototype.expand;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWV4cGFuZC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL2RhdGFncmlkL2FuaW1hdGlvbi1oYWNrL3Jvdy1leHBhbmQtYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUdwRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7O0lBQ3JDLFlBQ1UsRUFBYyxFQUNkLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ25CLE1BQWM7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzVCLG9GQUFvRjtnQkFDcEYsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFTTyxPQUFPO1FBQ2IsaUZBQWlGO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDbEMsT0FBTztTQUNSO1FBRUQsa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLDRFQUE0RTtRQUM1RSxvREFBb0Q7UUFDcEQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsK0ZBQStGO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU8sR0FBRztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Y0FDeEQsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUMxQyxFQUFFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLEVBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUNsQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7OztZQW5FRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzs7O1lBTGpCLFVBQVU7WUFHckIsVUFBVTtZQUhhLFNBQVM7WUFFaEMsTUFBTTs7OztJQXVCYiw2Q0FBcUI7O0lBQ3JCLCtDQUEwQjs7SUFsQnhCLHdDQUFzQjs7SUFDdEIsZ0RBQThCOztJQUM5Qiw4Q0FBMkI7O0lBQzNCLDRDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuLypcbiAqIFRoaXMgaXMgYSBoYWNrIHRoYXQgd2UgaGF2ZSB0byB3cml0ZSBmb3Igbm93IGJlY2F1c2Ugb2YgYnVncyBhbmQgbGltaXRhdGlvbnMgaW4gQW5ndWxhcixcbiAqIHBsZWFzZSBkbyBub3QgdXNlIHRoaXMgYXMgYW4gZXhhbXBsZS5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFeHBhbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9leHBhbmQvcHJvdmlkZXJzL2V4cGFuZCc7XG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tLWFkYXB0ZXIvZG9tLWFkYXB0ZXInO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjbHItZGctcm93JyB9KVxuZXhwb3J0IGNsYXNzIERhdGFncmlkUm93RXhwYW5kQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRvbUFkYXB0ZXI6IERvbUFkYXB0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwYW5kOiBFeHBhbmRcbiAgKSB7XG4gICAgaWYgKGV4cGFuZCAmJiBleHBhbmQuYW5pbWF0ZSkge1xuICAgICAgZXhwYW5kLmFuaW1hdGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gV2UgYWxyZWFkeSBoYWQgYW4gYW5pbWF0aW9uIHdhaXRpbmcsIHNvIHdlIGp1c3QgaGF2ZSB0byBydW4gaW4sIG5vdCBwcmVwYXJlIGFnYWluXG4gICAgICAgIGlmICh0aGlzLm9sZEhlaWdodCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ydW4oKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVubmluZzogYW55O1xuICBwcml2YXRlIG9sZEhlaWdodDogbnVtYmVyO1xuXG4gIC8qXG4gICAgICogRGlydHkgbWFudWFsIGFuaW1hdGlvbiBoYW5kbGluZywgYnV0IHdlIGhhdmUgbm8gd2F5IHRvIHVzZSBkeW5hbWljIGhlaWdodHMgaW4gQW5ndWxhcidzIGN1cnJlbnQgQVBJLlxuICAgICAqIFRoZXkncmUgd29ya2luZyBvbiBpdCwgYnV0IGhhdmUgbm8gRVRBLlxuICAgICAqL1xuICBwcml2YXRlIGFuaW1hdGUoKSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UgZG8gaGF2ZSB3ZWItYW5pbWF0aW9ucyBhdmFpbGFibGUuIElmIG5vdCwganVzdCBza2lwIHRoZSBhbmltYXRpb24uXG4gICAgaWYgKCF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdlIGhhZCBhbiBhbmltYXRpb24gcnVubmluZywgd2Ugc2tpcCB0byB0aGUgZW5kXG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5ydW5uaW5nLmZpbmlzaCgpO1xuICAgIH1cblxuICAgIHRoaXMub2xkSGVpZ2h0ID0gdGhpcy5kb21BZGFwdGVyLmNvbXB1dGVkSGVpZ2h0KHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gSW4gY2FzZSBoZWlnaHQgaGFzIG5vdCB5ZXQgYmVlbiBzZXQuIFdoZW4gc3RhcnRpbmcgZXhwYW5kZWQsIGZvciBleGFtcGxlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdm13YXJlL2NsYXJpdHkvaXNzdWVzLzI5MDRcbiAgICBpZiAoaXNOYU4odGhpcy5vbGRIZWlnaHQpKSB7XG4gICAgICB0aGlzLm9sZEhlaWdodCA9IDA7XG4gICAgfVxuICAgIC8vIFdlIHNldCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGltbWVkaWF0ZWx5IHRvIGF2b2lkIGEgZmxpY2tlciBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzdGFydHMuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLm9sZEhlaWdodCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmV4cGFuZC5sb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1bigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIG51bGwpO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMuZG9tQWRhcHRlci5jb21wdXRlZEhlaWdodCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucnVubmluZyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hbmltYXRlKFxuICAgICAgeyBoZWlnaHQ6IFt0aGlzLm9sZEhlaWdodCArICdweCcsIG5ld0hlaWdodCArICdweCddLCBlYXNpbmc6ICdlYXNlLWluLW91dCcgfSxcbiAgICAgIHsgZHVyYXRpb246IDIwMCB9XG4gICAgKTtcbiAgICB0aGlzLnJ1bm5pbmcub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93LXknLCBudWxsKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnJ1bm5pbmc7XG4gICAgfTtcbiAgICBkZWxldGUgdGhpcy5vbGRIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==