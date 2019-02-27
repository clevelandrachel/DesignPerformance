/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Component, ElementRef, Input, Optional, SkipSelf } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';
import { ROOT_DROPDOWN_PROVIDER, RootDropdownService } from './providers/dropdown.service';
var ClrDropdown = /** @class */ (function () {
    function ClrDropdown(parent, ifOpenService, cdr, dropdownService) {
        var _this = this;
        this.parent = parent;
        this.ifOpenService = ifOpenService;
        this.cdr = cdr;
        this.subscriptions = [];
        this.isMenuClosable = true;
        this.subscriptions.push(dropdownService.changes.subscribe(function (value) { return (_this.ifOpenService.open = value); }));
        this.subscriptions.push(ifOpenService.openChange.subscribe(function (value) { return _this.cdr.markForCheck(); }));
    }
    /**
     * @return {?}
     */
    ClrDropdown.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    ClrDropdown.decorators = [
        { type: Component, args: [{
                    selector: 'clr-dropdown',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.dropdown]': 'true',
                        // FIXME: remove this as soon as we stop supporting this old <div class="dropdown-menu"> syntax
                        '[class.open]': 'ifOpenService.open',
                    },
                    providers: [IfOpenService, ROOT_DROPDOWN_PROVIDER, { provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }]
                }] }
    ];
    /** @nocollapse */
    ClrDropdown.ctorParameters = function () { return [
        { type: ClrDropdown, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: IfOpenService },
        { type: ChangeDetectorRef },
        { type: RootDropdownService }
    ]; };
    ClrDropdown.propDecorators = {
        isMenuClosable: [{ type: Input, args: ['clrCloseMenuOnItemClick',] }]
    };
    return ClrDropdown;
}());
export { ClrDropdown };
if (false) {
    /** @type {?} */
    ClrDropdown.prototype.subscriptions;
    /** @type {?} */
    ClrDropdown.prototype.isMenuClosable;
    /** @type {?} */
    ClrDropdown.prototype.parent;
    /** @type {?} */
    ClrDropdown.prototype.ifOpenService;
    /** @type {?} */
    ClrDropdown.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJwb3BvdmVyL2Ryb3Bkb3duL2Ryb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRjtJQWFFLHFCQUdTLE1BQW1CLEVBQ25CLGFBQTRCLEVBQzNCLEdBQXNCLEVBQzlCLGVBQW9DO1FBTnRDLGlCQVVDO1FBUFEsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVB4QixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFjVCxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUovRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7OztJQUlELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLE1BQU07O3dCQUUxQixjQUFjLEVBQUUsb0JBQW9CO3FCQUNyQztvQkFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDO2lCQUM5Rzs7OztnQkFPa0IsV0FBVyx1QkFGekIsUUFBUSxZQUNSLFFBQVE7Z0JBcEJKLGFBQWE7Z0JBSGIsaUJBQWlCO2dCQU1PLG1CQUFtQjs7O2lDQTJCakQsS0FBSyxTQUFDLHlCQUF5Qjs7SUFLbEMsa0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXBCWSxXQUFXOzs7SUFDdEIsb0NBQTJDOztJQWMzQyxxQ0FBaUU7O0lBWC9ELDZCQUUwQjs7SUFDMUIsb0NBQW1DOztJQUNuQywwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJZk9wZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uZGl0aW9uYWwvaWYtb3Blbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBPUE9WRVJfSE9TVF9BTkNIT1IgfSBmcm9tICcuLi9jb21tb24vcG9wb3Zlci1ob3N0LWFuY2hvci50b2tlbic7XG5cbmltcG9ydCB7IFJPT1RfRFJPUERPV05fUFJPVklERVIsIFJvb3REcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9kcm9wZG93bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZHJvcGRvd25dJzogJ3RydWUnLFxuICAgIC8vIEZJWE1FOiByZW1vdmUgdGhpcyBhcyBzb29uIGFzIHdlIHN0b3Agc3VwcG9ydGluZyB0aGlzIG9sZCA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPiBzeW50YXhcbiAgICAnW2NsYXNzLm9wZW5dJzogJ2lmT3BlblNlcnZpY2Uub3BlbicsXG4gIH0sXG4gIHByb3ZpZGVyczogW0lmT3BlblNlcnZpY2UsIFJPT1RfRFJPUERPV05fUFJPVklERVIsIHsgcHJvdmlkZTogUE9QT1ZFUl9IT1NUX0FOQ0hPUiwgdXNlRXhpc3Rpbmc6IEVsZW1lbnRSZWYgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENsckRyb3Bkb3duIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBTa2lwU2VsZigpXG4gICAgQE9wdGlvbmFsKClcbiAgICBwdWJsaWMgcGFyZW50OiBDbHJEcm9wZG93bixcbiAgICBwdWJsaWMgaWZPcGVuU2VydmljZTogSWZPcGVuU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZHJvcGRvd25TZXJ2aWNlOiBSb290RHJvcGRvd25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGRyb3Bkb3duU2VydmljZS5jaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiAodGhpcy5pZk9wZW5TZXJ2aWNlLm9wZW4gPSB2YWx1ZSkpKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChpZk9wZW5TZXJ2aWNlLm9wZW5DaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKSk7XG4gIH1cblxuICBASW5wdXQoJ2NsckNsb3NlTWVudU9uSXRlbUNsaWNrJykgaXNNZW51Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gIH1cbn1cbiJdfQ==