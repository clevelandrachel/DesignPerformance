/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { IF_ACTIVE_ID, IfActiveService } from '../../utils/conditional/if-active.service';
import { AriaService } from './providers/aria.service';
/** @type {?} */
let nbTabContentComponents = 0;
export class ClrTabContent {
    /**
     * @param {?} ifActiveService
     * @param {?} id
     * @param {?} ariaService
     */
    constructor(ifActiveService, id, ariaService) {
        this.ifActiveService = ifActiveService;
        this.id = id;
        this.ariaService = ariaService;
        if (!this.tabContentId) {
            this.tabContentId = 'clr-tab-content-' + nbTabContentComponents++;
        }
    }
    /**
     * @return {?}
     */
    get ariaLabelledBy() {
        return this.ariaService.ariaLabelledBy;
    }
    /**
     * @return {?}
     */
    get tabContentId() {
        return this.ariaService.ariaControls;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set tabContentId(id) {
        this.ariaService.ariaControls = id;
    }
    /**
     * @return {?}
     */
    get active() {
        return this.ifActiveService.current === this.id;
    }
}
ClrTabContent.decorators = [
    { type: Component, args: [{
                selector: 'clr-tab-content',
                template: `
    <ng-template #tabContentProjectedRef>
      <section [id]="tabContentId" role="tabpanel" [class.active]="active"
               [hidden]="!active"
               [attr.aria-labelledby]="ariaLabelledBy"
               [attr.aria-expanded]="active"
               [attr.aria-hidden]="!active">
        <ng-content></ng-content>
      </section>
    </ng-template>
    `
            }] }
];
/** @nocollapse */
ClrTabContent.ctorParameters = () => [
    { type: IfActiveService },
    { type: Number, decorators: [{ type: Inject, args: [IF_ACTIVE_ID,] }] },
    { type: AriaService }
];
ClrTabContent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['tabContentProjectedRef',] }],
    tabContentId: [{ type: Input, args: ['id',] }]
};
if (false) {
    /** @type {?} */
    ClrTabContent.prototype.templateRef;
    /** @type {?} */
    ClrTabContent.prototype.ifActiveService;
    /** @type {?} */
    ClrTabContent.prototype.id;
    /** @type {?} */
    ClrTabContent.prototype.ariaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvdGFicy90YWItY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFFbkQsc0JBQXNCLEdBQVcsQ0FBQztBQWdCdEMsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUd4QixZQUNTLGVBQWdDLEVBQ1YsRUFBVSxFQUMvQixXQUF3QjtRQUZ6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztTQUNuRTtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELElBQ0ksWUFBWSxDQUFDLEVBQVU7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7S0FVUDthQUNKOzs7O1lBbEJzQixlQUFlO3lDQXdCakMsTUFBTSxTQUFDLFlBQVk7WUF2QmYsV0FBVzs7OzBCQW1CakIsU0FBUyxTQUFDLHdCQUF3QjsyQkFvQmxDLEtBQUssU0FBQyxJQUFJOzs7O0lBcEJYLG9DQUE2RTs7SUFHM0Usd0NBQXVDOztJQUN2QywyQkFBdUM7O0lBQ3ZDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUZfQUNUSVZFX0lELCBJZkFjdGl2ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlscy9jb25kaXRpb25hbC9pZi1hY3RpdmUuc2VydmljZSc7XG5pbXBvcnQgeyBBcmlhU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2FyaWEuc2VydmljZSc7XG5cbmxldCBuYlRhYkNvbnRlbnRDb21wb25lbnRzOiBudW1iZXIgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItdGFiLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGFiQ29udGVudFByb2plY3RlZFJlZj5cbiAgICAgIDxzZWN0aW9uIFtpZF09XCJ0YWJDb250ZW50SWRcIiByb2xlPVwidGFicGFuZWxcIiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgICBbaGlkZGVuXT1cIiFhY3RpdmVcIlxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZEJ5XCJcbiAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFyaWEtaGlkZGVuXT1cIiFhY3RpdmVcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVGFiQ29udGVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRQcm9qZWN0ZWRSZWYnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8Q2xyVGFiQ29udGVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlmQWN0aXZlU2VydmljZTogSWZBY3RpdmVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSUZfQUNUSVZFX0lEKSBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICBwcml2YXRlIGFyaWFTZXJ2aWNlOiBBcmlhU2VydmljZVxuICApIHtcbiAgICBpZiAoIXRoaXMudGFiQ29udGVudElkKSB7XG4gICAgICB0aGlzLnRhYkNvbnRlbnRJZCA9ICdjbHItdGFiLWNvbnRlbnQtJyArIG5iVGFiQ29udGVudENvbXBvbmVudHMrKztcbiAgICB9XG4gIH1cblxuICBnZXQgYXJpYUxhYmVsbGVkQnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhU2VydmljZS5hcmlhTGFiZWxsZWRCeTtcbiAgfVxuXG4gIGdldCB0YWJDb250ZW50SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhU2VydmljZS5hcmlhQ29udHJvbHM7XG4gIH1cblxuICBASW5wdXQoJ2lkJylcbiAgc2V0IHRhYkNvbnRlbnRJZChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcmlhU2VydmljZS5hcmlhQ29udHJvbHMgPSBpZDtcbiAgfVxuXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZBY3RpdmVTZXJ2aWNlLmN1cnJlbnQgPT09IHRoaXMuaWQ7XG4gIH1cbn1cbiJdfQ==