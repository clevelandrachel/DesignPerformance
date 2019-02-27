/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ElementRef, HostBinding, Injectable, Injector, Renderer2, SkipSelf, } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { ESC } from '../../utils/key-codes/key-codes';
import { Popover } from './popover';
// Literally any annotation would work here, but writing our own @HoneyBadger annotation feels overkill.
/**
 * @abstract
 */
var AbstractPopover = /** @class */ (function () {
    function AbstractPopover(injector, parentHost) {
        var _this = this;
        this.parentHost = parentHost;
        this.updateAnchor = false;
        this.popoverOptions = {};
        /*
             * Until https://github.com/angular/angular/issues/8785 is supported, we don't have any way to instantiate
             * a separate directive on the host. So let's do dirty but performant for now.
             */
        this.closeOnOutsideClick = false;
        this.el = injector.get(ElementRef);
        this.ifOpenService = injector.get(IfOpenService);
        this.renderer = injector.get(Renderer2);
        // Default anchor is the parent host
        this.anchorElem = parentHost.nativeElement;
        this.popoverInstance = new Popover(this.el.nativeElement);
        this.subscription = this.ifOpenService.openChange.subscribe(function (change) {
            if (change) {
                _this.anchor();
                _this.attachESCListener();
            }
            else {
                _this.release();
                _this.detachESCListener();
            }
        });
        if (this.ifOpenService.open) {
            this.anchor();
            this.attachESCListener();
        }
    }
    /**
     * @return {?}
     */
    AbstractPopover.prototype.anchor = /**
     * @return {?}
     */
    function () {
        this.updateAnchor = true;
        // Ugh
        this.ignore = this.ifOpenService.originalEvent;
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.release = /**
     * @return {?}
     */
    function () {
        this.detachOutsideClickListener();
        this.popoverInstance.release();
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.updateAnchor) {
            this.updateAnchor = false;
            this.popoverInstance
                .anchor(this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions)
                .subscribe(function () {
                // if a scroll event is detected, close the popover
                _this.ifOpenService.open = false;
            });
            this.attachOutsideClickListener();
        }
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.release();
        this.detachESCListener();
        this.subscription.unsubscribe();
    };
    Object.defineProperty(AbstractPopover.prototype, "isOffScreen", {
        /*
           * Fallback to hide when *clrIfOpen is not being used
           */
        get: /*
             * Fallback to hide when *clrIfOpen is not being used
             */
        /**
         * @return {?}
         */
        function () {
            return this.ifOpenService.open ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPopover.prototype.attachESCListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.documentESCListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event && event.keyCode === ESC) {
                _this.ifOpenService.open = false;
            }
        });
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.detachESCListener = /**
     * @return {?}
     */
    function () {
        if (this.documentESCListener) {
            this.documentESCListener();
            delete this.documentESCListener;
        }
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.attachOutsideClickListener = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.closeOnOutsideClick) {
            this.hostClickListener = this.renderer.listen(this.el.nativeElement, 'click', function (event) { return (_this.ignore = event); });
            if (this.ignoredElement) {
                this.ignoredElementClickListener = this.renderer.listen(this.ignoredElement, 'click', function (event) { return (_this.ignore = event); });
            }
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (event === _this.ignore) {
                    delete _this.ignore;
                }
                else {
                    _this.ifOpenService.open = false;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    AbstractPopover.prototype.detachOutsideClickListener = /**
     * @return {?}
     */
    function () {
        if (this.closeOnOutsideClick) {
            if (this.hostClickListener) {
                this.hostClickListener();
                delete this.hostClickListener;
            }
            if (this.ignoredElementClickListener) {
                this.ignoredElementClickListener();
                delete this.ignoredElementClickListener;
            }
            if (this.documentClickListener) {
                this.documentClickListener();
                delete this.documentClickListener;
            }
        }
    };
    AbstractPopover.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AbstractPopover.ctorParameters = function () { return [
        { type: Injector },
        { type: ElementRef, decorators: [{ type: SkipSelf }] }
    ]; };
    AbstractPopover.propDecorators = {
        isOffScreen: [{ type: HostBinding, args: ['class.is-off-screen',] }]
    };
    return AbstractPopover;
}());
export { AbstractPopover };
if (false) {
    /** @type {?} */
    AbstractPopover.prototype.el;
    /** @type {?} */
    AbstractPopover.prototype.ifOpenService;
    /** @type {?} */
    AbstractPopover.prototype.renderer;
    /** @type {?} */
    AbstractPopover.prototype.popoverInstance;
    /** @type {?} */
    AbstractPopover.prototype.subscription;
    /** @type {?} */
    AbstractPopover.prototype.updateAnchor;
    /** @type {?} */
    AbstractPopover.prototype.anchorElem;
    /** @type {?} */
    AbstractPopover.prototype.anchorPoint;
    /** @type {?} */
    AbstractPopover.prototype.popoverPoint;
    /** @type {?} */
    AbstractPopover.prototype.popoverOptions;
    /** @type {?} */
    AbstractPopover.prototype.ignoredElement;
    /** @type {?} */
    AbstractPopover.prototype.closeOnOutsideClick;
    /** @type {?} */
    AbstractPopover.prototype.hostClickListener;
    /** @type {?} */
    AbstractPopover.prototype.documentClickListener;
    /** @type {?} */
    AbstractPopover.prototype.documentESCListener;
    /** @type {?} */
    AbstractPopover.prototype.ignoredElementClickListener;
    /** @type {?} */
    AbstractPopover.prototype.ignore;
    /** @type {?} */
    AbstractPopover.prototype.parentHost;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvY29tbW9uL2Fic3RyYWN0LXBvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUVMLFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFFUixTQUFTLEVBQ1QsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEQsT0FBTyxFQUFTLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFJM0M7SUFFRSx5QkFBWSxRQUFrQixFQUF3QixVQUFzQjtRQUE1RSxpQkFxQkM7UUFyQnFELGVBQVUsR0FBVixVQUFVLENBQVk7UUE4QnBFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBS25CLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQzs7Ozs7UUErQ3ZDLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQWpGakMsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUUzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFB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O0lBQ0gsQ0FBQzs7Z0JBN0lGLFVBQVU7Ozs7Z0JBZFQsUUFBUTtnQkFIUixVQUFVLHVCQW1CdUIsUUFBUTs7OzhCQXlFeEMsV0FBVyxTQUFDLHFCQUFxQjs7SUFtRXBDLHNCQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0E3SXFCLGVBQWU7OztJQXdCbkMsNkJBQXlCOztJQUN6Qix3Q0FBdUM7O0lBQ3ZDLG1DQUE4Qjs7SUFFOUIsMENBQWlDOztJQUNqQyx1Q0FBbUM7O0lBRW5DLHVDQUE2Qjs7SUFFN0IscUNBQTBCOztJQUMxQixzQ0FBNkI7O0lBQzdCLHVDQUE4Qjs7SUFDOUIseUNBQThDOztJQUU5Qyx5Q0FBOEI7O0lBNkM5Qiw4Q0FBbUM7O0lBQ25DLDRDQUFzQzs7SUFDdEMsZ0RBQTBDOztJQUMxQyw4Q0FBd0M7O0lBQ3hDLHNEQUFnRDs7SUFDaEQsaUNBQW9COztJQXZGWSxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSWZPcGVuU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbmRpdGlvbmFsL2lmLW9wZW4uc2VydmljZSc7XG5pbXBvcnQgeyBFU0MgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMva2V5LWNvZGVzJztcblxuaW1wb3J0IHsgUG9pbnQsIFBvcG92ZXIgfSBmcm9tICcuL3BvcG92ZXInO1xuaW1wb3J0IHsgUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuL3BvcG92ZXItb3B0aW9ucy5pbnRlcmZhY2UnO1xuXG4vLyBMaXRlcmFsbHkgYW55IGFubm90YXRpb24gd291bGQgd29yayBoZXJlLCBidXQgd3JpdGluZyBvdXIgb3duIEBIb25leUJhZGdlciBhbm5vdGF0aW9uIGZlZWxzIG92ZXJraWxsLlxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UG9wb3ZlciBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgQFNraXBTZWxmKCkgcHJvdGVjdGVkIHBhcmVudEhvc3Q6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gaW5qZWN0b3IuZ2V0KEVsZW1lbnRSZWYpO1xuICAgIHRoaXMuaWZPcGVuU2VydmljZSA9IGluamVjdG9yLmdldChJZk9wZW5TZXJ2aWNlKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gaW5qZWN0b3IuZ2V0KFJlbmRlcmVyMik7XG4gICAgLy8gRGVmYXVsdCBhbmNob3IgaXMgdGhlIHBhcmVudCBob3N0XG4gICAgdGhpcy5hbmNob3JFbGVtID0gcGFyZW50SG9zdC5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5wb3BvdmVySW5zdGFuY2UgPSBuZXcgUG9wb3Zlcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW5DaGFuZ2Uuc3Vic2NyaWJlKGNoYW5nZSA9PiB7XG4gICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoRVNDTGlzdGVuZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgICAgICB0aGlzLmRldGFjaEVTQ0xpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuaWZPcGVuU2VydmljZS5vcGVuKSB7XG4gICAgICB0aGlzLmFuY2hvcigpO1xuICAgICAgdGhpcy5hdHRhY2hFU0NMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjtcbiAgcHJvdGVjdGVkIGlmT3BlblNlcnZpY2U6IElmT3BlblNlcnZpY2U7XG4gIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgcG9wb3Zlckluc3RhbmNlOiBQb3BvdmVyO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgdXBkYXRlQW5jaG9yID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIGFuY2hvckVsZW06IGFueTtcbiAgcHJvdGVjdGVkIGFuY2hvclBvaW50OiBQb2ludDtcbiAgcHJvdGVjdGVkIHBvcG92ZXJQb2ludDogUG9pbnQ7XG4gIHByb3RlY3RlZCBwb3BvdmVyT3B0aW9uczogUG9wb3Zlck9wdGlvbnMgPSB7fTtcblxuICBwcm90ZWN0ZWQgaWdub3JlZEVsZW1lbnQ6IGFueTtcblxuICBwcm90ZWN0ZWQgYW5jaG9yKCkge1xuICAgIHRoaXMudXBkYXRlQW5jaG9yID0gdHJ1ZTtcbiAgICAvLyBVZ2hcbiAgICB0aGlzLmlnbm9yZSA9IHRoaXMuaWZPcGVuU2VydmljZS5vcmlnaW5hbEV2ZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5kZXRhY2hPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIHRoaXMucG9wb3Zlckluc3RhbmNlLnJlbGVhc2UoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy51cGRhdGVBbmNob3IpIHtcbiAgICAgIHRoaXMudXBkYXRlQW5jaG9yID0gZmFsc2U7XG4gICAgICB0aGlzLnBvcG92ZXJJbnN0YW5jZVxuICAgICAgICAuYW5jaG9yKHRoaXMuYW5jaG9yRWxlbSwgdGhpcy5hbmNob3JQb2ludCwgdGhpcy5wb3BvdmVyUG9pbnQsIHRoaXMucG9wb3Zlck9wdGlvbnMpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIC8vIGlmIGEgc2Nyb2xsIGV2ZW50IGlzIGRldGVjdGVkLCBjbG9zZSB0aGUgcG9wb3ZlclxuICAgICAgICAgIHRoaXMuaWZPcGVuU2VydmljZS5vcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5hdHRhY2hPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucmVsZWFzZSgpO1xuICAgIHRoaXMuZGV0YWNoRVNDTGlzdGVuZXIoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLypcbiAgICAgKiBGYWxsYmFjayB0byBoaWRlIHdoZW4gKmNscklmT3BlbiBpcyBub3QgYmVpbmcgdXNlZFxuICAgICAqL1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtb2ZmLXNjcmVlbicpXG4gIGdldCBpc09mZlNjcmVlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPyBmYWxzZSA6IHRydWU7XG4gIH1cblxuICAvKlxuICAgICAqIFVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgaXMgc3VwcG9ydGVkLCB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gaW5zdGFudGlhdGVcbiAgICAgKiBhIHNlcGFyYXRlIGRpcmVjdGl2ZSBvbiB0aGUgaG9zdC4gU28gbGV0J3MgZG8gZGlydHkgYnV0IHBlcmZvcm1hbnQgZm9yIG5vdy5cbiAgICAgKi9cbiAgcHVibGljIGNsb3NlT25PdXRzaWRlQ2xpY2sgPSBmYWxzZTtcbiAgcHJpdmF0ZSBob3N0Q2xpY2tMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBkb2N1bWVudENsaWNrTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgZG9jdW1lbnRFU0NMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBpZ25vcmVkRWxlbWVudENsaWNrTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgaWdub3JlOiBhbnk7XG5cbiAgcHJpdmF0ZSBhdHRhY2hFU0NMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLmRvY3VtZW50RVNDTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAna2V5ZG93bicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC5rZXlDb2RlID09PSBFU0MpIHtcbiAgICAgICAgdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGV0YWNoRVNDTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFU0NMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb2N1bWVudEVTQ0xpc3RlbmVyKCk7XG4gICAgICBkZWxldGUgdGhpcy5kb2N1bWVudEVTQ0xpc3RlbmVyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3V0c2lkZUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuY2xvc2VPbk91dHNpZGVDbGljaykge1xuICAgICAgdGhpcy5ob3N0Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgZXZlbnQgPT4gKHRoaXMuaWdub3JlID0gZXZlbnQpKTtcbiAgICAgIGlmICh0aGlzLmlnbm9yZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaWdub3JlZEVsZW1lbnRDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5pZ25vcmVkRWxlbWVudCxcbiAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgIGV2ZW50ID0+ICh0aGlzLmlnbm9yZSA9IGV2ZW50KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudCA9PT0gdGhpcy5pZ25vcmUpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5pZ25vcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXRhY2hPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICBpZiAodGhpcy5ob3N0Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmhvc3RDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmhvc3RDbGlja0xpc3RlbmVyO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaWdub3JlZEVsZW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuaWdub3JlZEVsZW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmlnbm9yZWRFbGVtZW50Q2xpY2tMaXN0ZW5lcjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICBkZWxldGUgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=