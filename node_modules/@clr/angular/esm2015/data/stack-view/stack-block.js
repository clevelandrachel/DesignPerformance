/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Optional, Output, SkipSelf } from '@angular/core';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export class ClrStackBlock {
    /*
         * This would be more efficient with @ContentChildren, with the parent ClrStackBlock
         * querying for children StackBlocks, but this feature is not available when downgrading
         * the component for Angular 1.
         */
    /**
     * @param {?} parent
     * @param {?} commonStrings
     */
    constructor(parent, commonStrings) {
        this.parent = parent;
        this.commonStrings = commonStrings;
        this.expanded = false;
        this.expandedChange = new EventEmitter(false);
        this.expandable = false;
        this.focused = false;
        this._changedChildren = 0;
        this._fullyInitialized = false;
        this._changed = false;
        if (parent) {
            parent.addChild();
        }
    }
    /**
     * @return {?}
     */
    get getChangedValue() {
        return this._changed || (this._changedChildren > 0 && !this.expanded);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setChangedValue(value) {
        this._changed = value;
        if (this.parent && this._fullyInitialized) {
            if (value) {
                this.parent._changedChildren++;
            }
            else {
                this.parent._changedChildren--;
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // in order to access the parent ClrStackBlock's properties,
        // the child ClrStackBlock  has to be fully initialized at first.
        this._fullyInitialized = true;
    }
    /**
     * @return {?}
     */
    addChild() {
        this.expandable = true;
    }
    /**
     * @return {?}
     */
    toggleExpand() {
        if (this.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    }
    /**
     * @return {?}
     */
    get caretDirection() {
        return this.expanded ? 'down' : 'right';
    }
    /**
     * @return {?}
     */
    get caretTitle() {
        return this.expanded ? this.commonStrings.collapse : this.commonStrings.expand;
    }
    /**
     * @return {?}
     */
    get role() {
        return this.expandable ? 'button' : null;
    }
    /**
     * @return {?}
     */
    get tabIndex() {
        return this.expandable ? '0' : null;
    }
    /**
     * @return {?}
     */
    get onStackLabelFocus() {
        return this.expandable && !this.expanded && this.focused;
    }
    /**
     * @return {?}
     */
    get ariaExpanded() {
        if (!this.expandable) {
            return null;
        }
        else {
            return this.expanded ? 'true' : 'false';
        }
    }
}
ClrStackBlock.decorators = [
    { type: Component, args: [{
                selector: 'clr-stack-block',
                template: `
    <dt class="stack-block-label"
        (click)="toggleExpand()"
        (keyup.enter)="toggleExpand()"
        (keyup.space)="toggleExpand()"
        (focus)="focused = true"
        (blur)="focused = false"
        [attr.role]="role"
        [attr.tabindex]="tabIndex"
        [attr.aria-expanded]="ariaExpanded">
      <clr-icon shape="caret"
                class="stack-block-caret"
                *ngIf="expandable"
                [attr.dir]="caretDirection"
                [attr.title]="caretTitle"></clr-icon>
      <ng-content select="clr-stack-label"></ng-content>
    </dt>
    <dd class="stack-block-content">
      <ng-content></ng-content>
    </dd>
    <!-- FIXME: remove this string concatenation when boolean states are supported -->
    <div [@collapse]="''+!expanded" class="stack-children" >
      <ng-content select="clr-stack-block"></ng-content>
    </div>
  `,
                // Make sure the host has the proper class for styling purposes
                host: { '[class.stack-block]': 'true' },
                animations: [
                    trigger('collapse', [
                        state('true', style({ height: 0, display: 'none' })),
                        transition('true => false', [animate('0.2s ease-in-out', style({ height: '*', display: '*' }))]),
                        transition('false => true', [style({ height: '*', display: '*' }), animate('0.2s ease-in-out')]),
                    ]),
                ],
                styles: [`
        :host { display: block; }
    `]
            }] }
];
/** @nocollapse */
ClrStackBlock.ctorParameters = () => [
    { type: ClrStackBlock, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: ClrCommonStrings }
];
ClrStackBlock.propDecorators = {
    expanded: [{ type: HostBinding, args: ['class.stack-block-expanded',] }, { type: Input, args: ['clrSbExpanded',] }],
    expandedChange: [{ type: Output, args: ['clrSbExpandedChange',] }],
    expandable: [{ type: HostBinding, args: ['class.stack-block-expandable',] }, { type: Input, args: ['clrSbExpandable',] }],
    getChangedValue: [{ type: HostBinding, args: ['class.stack-block-changed',] }],
    setChangedValue: [{ type: Input, args: ['clrSbNotifyChange',] }],
    onStackLabelFocus: [{ type: HostBinding, args: ['class.on-focus',] }]
};
if (false) {
    /** @type {?} */
    ClrStackBlock.prototype.expanded;
    /** @type {?} */
    ClrStackBlock.prototype.expandedChange;
    /** @type {?} */
    ClrStackBlock.prototype.expandable;
    /** @type {?} */
    ClrStackBlock.prototype.focused;
    /** @type {?} */
    ClrStackBlock.prototype._changedChildren;
    /** @type {?} */
    ClrStackBlock.prototype._fullyInitialized;
    /** @type {?} */
    ClrStackBlock.prototype._changed;
    /** @type {?} */
    ClrStackBlock.prototype.parent;
    /** @type {?} */
    ClrStackBlock.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmxvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL3N0YWNrLXZpZXcvc3RhY2stYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBNkM3RSxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7OztJQXFDeEIsWUFHVSxNQUFxQixFQUN0QixhQUErQjtRQUQ5QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQXRDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNLLG1CQUFjLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBR3hHLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUErQmhDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7OztJQWhDRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJ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QUFDLENBQUM7cUJBQ2pHLENBQUM7aUJBQ0g7eUJBWkM7O0tBRUM7YUFXSjs7OztZQXlDbUIsYUFBYSx1QkFGNUIsUUFBUSxZQUNSLFFBQVE7WUFwRkosZ0JBQWdCOzs7dUJBOEN0QixXQUFXLFNBQUMsNEJBQTRCLGNBQ3hDLEtBQUssU0FBQyxlQUFlOzZCQUVyQixNQUFNLFNBQUMscUJBQXFCO3lCQUM1QixXQUFXLFNBQUMsOEJBQThCLGNBQzFDLEtBQUssU0FBQyxpQkFBaUI7OEJBUXZCLFdBQVcsU0FBQywyQkFBMkI7OEJBS3ZDLEtBQUssU0FBQyxtQkFBbUI7Z0NBOER6QixXQUFXLFNBQUMsZ0JBQWdCOzs7O0lBaEY3QixpQ0FFMEI7O0lBQzFCLHVDQUF3Rzs7SUFDeEcsbUNBRTRCOztJQUU1QixnQ0FBeUI7O0lBQ3pCLHlDQUFxQzs7SUFDckMsMENBQTJDOztJQUMzQyxpQ0FBa0M7O0lBMEJoQywrQkFFNkI7O0lBQzdCLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXN0YWNrLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZHQgY2xhc3M9XCJzdGFjay1ibG9jay1sYWJlbFwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChrZXl1cC5zcGFjZSk9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXG4gICAgICAgIChibHVyKT1cImZvY3VzZWQgPSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnJvbGVdPVwicm9sZVwiXG4gICAgICAgIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4XCJcbiAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJhcmlhRXhwYW5kZWRcIj5cbiAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNhcmV0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWNrLWJsb2NrLWNhcmV0XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImV4cGFuZGFibGVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRpcl09XCJjYXJldERpcmVjdGlvblwiXG4gICAgICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiY2FyZXRUaXRsZVwiPjwvY2xyLWljb24+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItc3RhY2stbGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kdD5cbiAgICA8ZGQgY2xhc3M9XCJzdGFjay1ibG9jay1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kZD5cbiAgICA8IS0tIEZJWE1FOiByZW1vdmUgdGhpcyBzdHJpbmcgY29uY2F0ZW5hdGlvbiB3aGVuIGJvb2xlYW4gc3RhdGVzIGFyZSBzdXBwb3J0ZWQgLS0+XG4gICAgPGRpdiBbQGNvbGxhcHNlXT1cIicnKyFleHBhbmRlZFwiIGNsYXNzPVwic3RhY2stY2hpbGRyZW5cIiA+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItc3RhY2stYmxvY2tcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIC8vIEN1c3RvbSBlbGVtZW50cyBhcmUgaW5saW5lIGJ5IGRlZmF1bHRcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgYCxcbiAgXSxcbiAgLy8gTWFrZSBzdXJlIHRoZSBob3N0IGhhcyB0aGUgcHJvcGVyIGNsYXNzIGZvciBzdHlsaW5nIHB1cnBvc2VzXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zdGFjay1ibG9ja10nOiAndHJ1ZScgfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NvbGxhcHNlJywgW1xuICAgICAgc3RhdGUoJ3RydWUnLCBzdHlsZSh7IGhlaWdodDogMCwgZGlzcGxheTogJ25vbmUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3RydWUgPT4gZmFsc2UnLCBbYW5pbWF0ZSgnMC4ycyBlYXNlLWluLW91dCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIGRpc3BsYXk6ICcqJyB9KSldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ZhbHNlID0+IHRydWUnLCBbc3R5bGUoeyBoZWlnaHQ6ICcqJywgZGlzcGxheTogJyonIH0pLCBhbmltYXRlKCcwLjJzIGVhc2UtaW4tb3V0JyldKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU3RhY2tCbG9jayBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhY2stYmxvY2stZXhwYW5kZWQnKVxuICBASW5wdXQoJ2NsclNiRXhwYW5kZWQnKVxuICBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCdjbHJTYkV4cGFuZGVkQ2hhbmdlJykgZXhwYW5kZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YWNrLWJsb2NrLWV4cGFuZGFibGUnKVxuICBASW5wdXQoJ2NsclNiRXhwYW5kYWJsZScpXG4gIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NoYW5nZWRDaGlsZHJlbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZnVsbHlJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFjay1ibG9jay1jaGFuZ2VkJylcbiAgZ2V0IGdldENoYW5nZWRWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlZCB8fCAodGhpcy5fY2hhbmdlZENoaWxkcmVuID4gMCAmJiAhdGhpcy5leHBhbmRlZCk7XG4gIH1cblxuICBASW5wdXQoJ2NsclNiTm90aWZ5Q2hhbmdlJylcbiAgc2V0IHNldENoYW5nZWRWYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoYW5nZWQgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLl9mdWxseUluaXRpYWxpemVkKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuX2NoYW5nZWRDaGlsZHJlbisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuX2NoYW5nZWRDaGlsZHJlbi0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgICogVGhpcyB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCB3aXRoIEBDb250ZW50Q2hpbGRyZW4sIHdpdGggdGhlIHBhcmVudCBDbHJTdGFja0Jsb2NrXG4gICAgICogcXVlcnlpbmcgZm9yIGNoaWxkcmVuIFN0YWNrQmxvY2tzLCBidXQgdGhpcyBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgd2hlbiBkb3duZ3JhZGluZ1xuICAgICAqIHRoZSBjb21wb25lbnQgZm9yIEFuZ3VsYXIgMS5cbiAgICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByaXZhdGUgcGFyZW50OiBDbHJTdGFja0Jsb2NrLFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5hZGRDaGlsZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluIG9yZGVyIHRvIGFjY2VzcyB0aGUgcGFyZW50IENsclN0YWNrQmxvY2sncyBwcm9wZXJ0aWVzLFxuICAgIC8vIHRoZSBjaGlsZCBDbHJTdGFja0Jsb2NrICBoYXMgdG8gYmUgZnVsbHkgaW5pdGlhbGl6ZWQgYXQgZmlyc3QuXG4gICAgdGhpcy5fZnVsbHlJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBhZGRDaGlsZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGFibGUgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FyZXREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZCA/ICdkb3duJyA6ICdyaWdodCc7XG4gIH1cblxuICBnZXQgY2FyZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gdGhpcy5jb21tb25TdHJpbmdzLmNvbGxhcHNlIDogdGhpcy5jb21tb25TdHJpbmdzLmV4cGFuZDtcbiAgfVxuXG4gIGdldCByb2xlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kYWJsZSA/ICdidXR0b24nIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0YWJJbmRleCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGFibGUgPyAnMCcgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vbi1mb2N1cycpXG4gIGdldCBvblN0YWNrTGFiZWxGb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlICYmICF0aGlzLmV4cGFuZGVkICYmIHRoaXMuZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBhcmlhRXhwYW5kZWQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuZXhwYW5kYWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==