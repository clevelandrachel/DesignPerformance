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
export class ClrDropdown {
    /**
     * @param {?} parent
     * @param {?} ifOpenService
     * @param {?} cdr
     * @param {?} dropdownService
     */
    constructor(parent, ifOpenService, cdr, dropdownService) {
        this.parent = parent;
        this.ifOpenService = ifOpenService;
        this.cdr = cdr;
        this.subscriptions = [];
        this.isMenuClosable = true;
        this.subscriptions.push(dropdownService.changes.subscribe(value => (this.ifOpenService.open = value)));
        this.subscriptions.push(ifOpenService.openChange.subscribe(value => this.cdr.markForCheck()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
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
ClrDropdown.ctorParameters = () => [
    { type: ClrDropdown, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: IfOpenService },
    { type: ChangeDetectorRef },
    { type: RootDropdownService }
];
ClrDropdown.propDecorators = {
    isMenuClosable: [{ type: Input, args: ['clrCloseMenuOnItemClick',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJwb3BvdmVyL2Ryb3Bkb3duL2Ryb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVkzRixNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUd0QixZQUdTLE1BQW1CLEVBQ25CLGFBQTRCLEVBQzNCLEdBQXNCLEVBQzlCLGVBQW9DO1FBSDdCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQeEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBY1QsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFKL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7SUFJRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTs7b0JBRTFCLGNBQWMsRUFBRSxvQkFBb0I7aUJBQ3JDO2dCQUNELFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDOUc7Ozs7WUFPa0IsV0FBVyx1QkFGekIsUUFBUSxZQUNSLFFBQVE7WUFwQkosYUFBYTtZQUhiLGlCQUFpQjtZQU1PLG1CQUFtQjs7OzZCQTJCakQsS0FBSyxTQUFDLHlCQUF5Qjs7OztJQWRoQyxvQ0FBMkM7O0lBYzNDLHFDQUFpRTs7SUFYL0QsNkJBRTBCOztJQUMxQixvQ0FBbUM7O0lBQ25DLDBCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElmT3BlblNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1vcGVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUE9QT1ZFUl9IT1NUX0FOQ0hPUiB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyLWhvc3QtYW5jaG9yLnRva2VuJztcblxuaW1wb3J0IHsgUk9PVF9EUk9QRE9XTl9QUk9WSURFUiwgUm9vdERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kcm9wZG93bl0nOiAndHJ1ZScsXG4gICAgLy8gRklYTUU6IHJlbW92ZSB0aGlzIGFzIHNvb24gYXMgd2Ugc3RvcCBzdXBwb3J0aW5nIHRoaXMgb2xkIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+IHN5bnRheFxuICAgICdbY2xhc3Mub3Blbl0nOiAnaWZPcGVuU2VydmljZS5vcGVuJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbSWZPcGVuU2VydmljZSwgUk9PVF9EUk9QRE9XTl9QUk9WSURFUiwgeyBwcm92aWRlOiBQT1BPVkVSX0hPU1RfQU5DSE9SLCB1c2VFeGlzdGluZzogRWxlbWVudFJlZiB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyRHJvcGRvd24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyBwYXJlbnQ6IENsckRyb3Bkb3duLFxuICAgIHB1YmxpYyBpZk9wZW5TZXJ2aWNlOiBJZk9wZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBkcm9wZG93blNlcnZpY2U6IFJvb3REcm9wZG93blNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goZHJvcGRvd25TZXJ2aWNlLmNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmlmT3BlblNlcnZpY2Uub3BlbiA9IHZhbHVlKSkpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGlmT3BlblNlcnZpY2Uub3BlbkNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpKTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyQ2xvc2VNZW51T25JdGVtQ2xpY2snKSBpc01lbnVDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19