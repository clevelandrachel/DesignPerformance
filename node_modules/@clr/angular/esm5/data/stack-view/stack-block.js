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
var ClrStackBlock = /** @class */ (function () {
    /*
       * This would be more efficient with @ContentChildren, with the parent ClrStackBlock
       * querying for children StackBlocks, but this feature is not available when downgrading
       * the component for Angular 1.
       */
    function ClrStackBlock(parent, commonStrings) {
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
    Object.defineProperty(ClrStackBlock.prototype, "getChangedValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changed || (this._changedChildren > 0 && !this.expanded);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "setChangedValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._changed = value;
            if (this.parent && this._fullyInitialized) {
                if (value) {
                    this.parent._changedChildren++;
                }
                else {
                    this.parent._changedChildren--;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrStackBlock.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // in order to access the parent ClrStackBlock's properties,
        // the child ClrStackBlock  has to be fully initialized at first.
        this._fullyInitialized = true;
    };
    /**
     * @return {?}
     */
    ClrStackBlock.prototype.addChild = /**
     * @return {?}
     */
    function () {
        this.expandable = true;
    };
    /**
     * @return {?}
     */
    ClrStackBlock.prototype.toggleExpand = /**
     * @return {?}
     */
    function () {
        if (this.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    };
    Object.defineProperty(ClrStackBlock.prototype, "caretDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expanded ? 'down' : 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "caretTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expanded ? this.commonStrings.collapse : this.commonStrings.expand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "role", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandable ? 'button' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "tabIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandable ? '0' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "onStackLabelFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandable && !this.expanded && this.focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrStackBlock.prototype, "ariaExpanded", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.expandable) {
                return null;
            }
            else {
                return this.expanded ? 'true' : 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    ClrStackBlock.decorators = [
        { type: Component, args: [{
                    selector: 'clr-stack-block',
                    template: "\n    <dt class=\"stack-block-label\"\n        (click)=\"toggleExpand()\"\n        (keyup.enter)=\"toggleExpand()\"\n        (keyup.space)=\"toggleExpand()\"\n        (focus)=\"focused = true\"\n        (blur)=\"focused = false\"\n        [attr.role]=\"role\"\n        [attr.tabindex]=\"tabIndex\"\n        [attr.aria-expanded]=\"ariaExpanded\">\n      <clr-icon shape=\"caret\"\n                class=\"stack-block-caret\"\n                *ngIf=\"expandable\"\n                [attr.dir]=\"caretDirection\"\n                [attr.title]=\"caretTitle\"></clr-icon>\n      <ng-content select=\"clr-stack-label\"></ng-content>\n    </dt>\n    <dd class=\"stack-block-content\">\n      <ng-content></ng-content>\n    </dd>\n    <!-- FIXME: remove this string concatenation when boolean states are supported -->\n    <div [@collapse]=\"''+!expanded\" class=\"stack-children\" >\n      <ng-content select=\"clr-stack-block\"></ng-content>\n    </div>\n  ",
                    // Make sure the host has the proper class for styling purposes
                    host: { '[class.stack-block]': 'true' },
                    animations: [
                        trigger('collapse', [
                            state('true', style({ height: 0, display: 'none' })),
                            transition('true => false', [animate('0.2s ease-in-out', style({ height: '*', display: '*' }))]),
                            transition('false => true', [style({ height: '*', display: '*' }), animate('0.2s ease-in-out')]),
                        ]),
                    ],
                    styles: ["\n        :host { display: block; }\n    "]
                }] }
    ];
    /** @nocollapse */
    ClrStackBlock.ctorParameters = function () { return [
        { type: ClrStackBlock, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: ClrCommonStrings }
    ]; };
    ClrStackBlock.propDecorators = {
        expanded: [{ type: HostBinding, args: ['class.stack-block-expanded',] }, { type: Input, args: ['clrSbExpanded',] }],
        expandedChange: [{ type: Output, args: ['clrSbExpandedChange',] }],
        expandable: [{ type: HostBinding, args: ['class.stack-block-expandable',] }, { type: Input, args: ['clrSbExpandable',] }],
        getChangedValue: [{ type: HostBinding, args: ['class.stack-block-changed',] }],
        setChangedValue: [{ type: Input, args: ['clrSbNotifyChange',] }],
        onStackLabelFocus: [{ type: HostBinding, args: ['class.on-focus',] }]
    };
    return ClrStackBlock;
}());
export { ClrStackBlock };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmxvY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkYXRhL3N0YWNrLXZpZXcvc3RhY2stYmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFO0lBMkVFOzs7O1NBSUs7SUFDTCx1QkFHVSxNQUFxQixFQUN0QixhQUErQjtRQUQ5QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQXRDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNLLG1CQUFjLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBR3hHLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQixxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFDN0Isc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUErQmhDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQWhDRCxzQkFDSSwwQ0FBZTs7OztRQURuQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFF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QVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7eUJBQ2pHLENBQUM7cUJBQ0g7NkJBWkMsMkNBRUM7aUJBV0o7Ozs7Z0JBeUNtQixhQUFhLHVCQUY1QixRQUFRLFlBQ1IsUUFBUTtnQkFwRkosZ0JBQWdCOzs7MkJBOEN0QixXQUFXLFNBQUMsNEJBQTRCLGNBQ3hDLEtBQUssU0FBQyxlQUFlO2lDQUVyQixNQUFNLFNBQUMscUJBQXFCOzZCQUM1QixXQUFXLFNBQUMsOEJBQThCLGNBQzFDLEtBQUssU0FBQyxpQkFBaUI7a0NBUXZCLFdBQVcsU0FBQywyQkFBMkI7a0NBS3ZDLEtBQUssU0FBQyxtQkFBbUI7b0NBOER6QixXQUFXLFNBQUMsZ0JBQWdCOztJQVkvQixvQkFBQztDQUFBLEFBeElELElBd0lDO1NBN0ZZLGFBQWE7OztJQUN4QixpQ0FFMEI7O0lBQzFCLHVDQUF3Rzs7SUFDeEcsbUNBRTRCOztJQUU1QixnQ0FBeUI7O0lBQ3pCLHlDQUFxQzs7SUFDckMsMENBQTJDOztJQUMzQyxpQ0FBa0M7O0lBMEJoQywrQkFFNkI7O0lBQzdCLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXN0YWNrLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZHQgY2xhc3M9XCJzdGFjay1ibG9jay1sYWJlbFwiXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChrZXl1cC5zcGFjZSk9XCJ0b2dnbGVFeHBhbmQoKVwiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXG4gICAgICAgIChibHVyKT1cImZvY3VzZWQgPSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnJvbGVdPVwicm9sZVwiXG4gICAgICAgIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4XCJcbiAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJhcmlhRXhwYW5kZWRcIj5cbiAgICAgIDxjbHItaWNvbiBzaGFwZT1cImNhcmV0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN0YWNrLWJsb2NrLWNhcmV0XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImV4cGFuZGFibGVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRpcl09XCJjYXJldERpcmVjdGlvblwiXG4gICAgICAgICAgICAgICAgW2F0dHIudGl0bGVdPVwiY2FyZXRUaXRsZVwiPjwvY2xyLWljb24+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItc3RhY2stbGFiZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kdD5cbiAgICA8ZGQgY2xhc3M9XCJzdGFjay1ibG9jay1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kZD5cbiAgICA8IS0tIEZJWE1FOiByZW1vdmUgdGhpcyBzdHJpbmcgY29uY2F0ZW5hdGlvbiB3aGVuIGJvb2xlYW4gc3RhdGVzIGFyZSBzdXBwb3J0ZWQgLS0+XG4gICAgPGRpdiBbQGNvbGxhcHNlXT1cIicnKyFleHBhbmRlZFwiIGNsYXNzPVwic3RhY2stY2hpbGRyZW5cIiA+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbHItc3RhY2stYmxvY2tcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIC8vIEN1c3RvbSBlbGVtZW50cyBhcmUgaW5saW5lIGJ5IGRlZmF1bHRcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgYCxcbiAgXSxcbiAgLy8gTWFrZSBzdXJlIHRoZSBob3N0IGhhcyB0aGUgcHJvcGVyIGNsYXNzIGZvciBzdHlsaW5nIHB1cnBvc2VzXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zdGFjay1ibG9ja10nOiAndHJ1ZScgfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NvbGxhcHNlJywgW1xuICAgICAgc3RhdGUoJ3RydWUnLCBzdHlsZSh7IGhlaWdodDogMCwgZGlzcGxheTogJ25vbmUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3RydWUgPT4gZmFsc2UnLCBbYW5pbWF0ZSgnMC4ycyBlYXNlLWluLW91dCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIGRpc3BsYXk6ICcqJyB9KSldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ZhbHNlID0+IHRydWUnLCBbc3R5bGUoeyBoZWlnaHQ6ICcqJywgZGlzcGxheTogJyonIH0pLCBhbmltYXRlKCcwLjJzIGVhc2UtaW4tb3V0JyldKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyU3RhY2tCbG9jayBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc3RhY2stYmxvY2stZXhwYW5kZWQnKVxuICBASW5wdXQoJ2NsclNiRXhwYW5kZWQnKVxuICBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCdjbHJTYkV4cGFuZGVkQ2hhbmdlJykgZXhwYW5kZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0YWNrLWJsb2NrLWV4cGFuZGFibGUnKVxuICBASW5wdXQoJ2NsclNiRXhwYW5kYWJsZScpXG4gIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NoYW5nZWRDaGlsZHJlbjogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfZnVsbHlJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGFjay1ibG9jay1jaGFuZ2VkJylcbiAgZ2V0IGdldENoYW5nZWRWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlZCB8fCAodGhpcy5fY2hhbmdlZENoaWxkcmVuID4gMCAmJiAhdGhpcy5leHBhbmRlZCk7XG4gIH1cblxuICBASW5wdXQoJ2NsclNiTm90aWZ5Q2hhbmdlJylcbiAgc2V0IHNldENoYW5nZWRWYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoYW5nZWQgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLl9mdWxseUluaXRpYWxpemVkKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuX2NoYW5nZWRDaGlsZHJlbisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuX2NoYW5nZWRDaGlsZHJlbi0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgICogVGhpcyB3b3VsZCBiZSBtb3JlIGVmZmljaWVudCB3aXRoIEBDb250ZW50Q2hpbGRyZW4sIHdpdGggdGhlIHBhcmVudCBDbHJTdGFja0Jsb2NrXG4gICAgICogcXVlcnlpbmcgZm9yIGNoaWxkcmVuIFN0YWNrQmxvY2tzLCBidXQgdGhpcyBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUgd2hlbiBkb3duZ3JhZGluZ1xuICAgICAqIHRoZSBjb21wb25lbnQgZm9yIEFuZ3VsYXIgMS5cbiAgICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByaXZhdGUgcGFyZW50OiBDbHJTdGFja0Jsb2NrLFxuICAgIHB1YmxpYyBjb21tb25TdHJpbmdzOiBDbHJDb21tb25TdHJpbmdzXG4gICkge1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5hZGRDaGlsZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluIG9yZGVyIHRvIGFjY2VzcyB0aGUgcGFyZW50IENsclN0YWNrQmxvY2sncyBwcm9wZXJ0aWVzLFxuICAgIC8vIHRoZSBjaGlsZCBDbHJTdGFja0Jsb2NrICBoYXMgdG8gYmUgZnVsbHkgaW5pdGlhbGl6ZWQgYXQgZmlyc3QuXG4gICAgdGhpcy5fZnVsbHlJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBhZGRDaGlsZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGFibGUgPSB0cnVlO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZGFibGUpIHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2FyZXREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZCA/ICdkb3duJyA6ICdyaWdodCc7XG4gIH1cblxuICBnZXQgY2FyZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gdGhpcy5jb21tb25TdHJpbmdzLmNvbGxhcHNlIDogdGhpcy5jb21tb25TdHJpbmdzLmV4cGFuZDtcbiAgfVxuXG4gIGdldCByb2xlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZXhwYW5kYWJsZSA/ICdidXR0b24nIDogbnVsbDtcbiAgfVxuXG4gIGdldCB0YWJJbmRleCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZGFibGUgPyAnMCcgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vbi1mb2N1cycpXG4gIGdldCBvblN0YWNrTGFiZWxGb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlICYmICF0aGlzLmV4cGFuZGVkICYmIHRoaXMuZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBhcmlhRXhwYW5kZWQoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuZXhwYW5kYWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZGVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==