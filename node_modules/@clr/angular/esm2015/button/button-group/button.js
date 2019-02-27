/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Input, Optional, Output, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { ClrLoadingState } from '../../utils/loading/loading';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ButtonInGroupService } from '../providers/button-in-group.service';
export class ClrButton {
    /**
     * @param {?} buttonInGroupService
     */
    constructor(buttonInGroupService) {
        this.buttonInGroupService = buttonInGroupService;
        this._enableService = false;
        this._inMenu = false;
        this._classNames = 'btn';
        this._name = null;
        this._type = null;
        this._disabled = null;
        this._click = new EventEmitter(false);
    }
    /**
     * @return {?}
     */
    get inMenu() {
        return this._inMenu;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set inMenu(value) {
        value = !!value;
        if (this._inMenu !== value) {
            this._inMenu = value;
            // We check if the service flag is enabled
            // and if the service exists because the service is optional
            if (this._enableService && this.buttonInGroupService) {
                this.buttonInGroupService.updateButtonGroup(this);
            }
        }
    }
    /**
     * @return {?}
     */
    get classNames() {
        return this._classNames;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set classNames(value) {
        if (typeof value === 'string') {
            /** @type {?} */
            const classNames = value.split(' ');
            if (classNames.indexOf('btn') === -1) {
                classNames.push('btn');
            }
            this._classNames = classNames.join(' ');
        }
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        }
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        if (typeof value === 'string') {
            this._type = value;
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        if (value !== null && value !== false) {
            this._disabled = '';
        }
        else {
            this._disabled = null;
        }
    }
    /**
     * @param {?} state
     * @return {?}
     */
    loadingStateChange(state) {
        this.loading = state === ClrLoadingState.LOADING;
    }
    /**
     * @return {?}
     */
    emitClick() {
        this._click.emit(true);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._enableService = true;
    }
}
ClrButton.decorators = [
    { type: Component, args: [{
                selector: 'clr-button',
                template: `
        <ng-template #buttonProjectedRef>
            <button 
                [class]="classNames" 
                (click)="emitClick()"
                [attr.type]="type"
                [attr.name]="name"
                [attr.disabled]="disabled">
                <span class="spinner spinner-inline" *ngIf="loading"></span>
                <ng-content></ng-content>
            </button>
        </ng-template>
    `,
                providers: [{ provide: LoadingListener, useExisting: ClrButton }]
            }] }
];
/** @nocollapse */
ClrButton.ctorParameters = () => [
    { type: ButtonInGroupService, decorators: [{ type: SkipSelf }, { type: Optional }] }
];
ClrButton.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['buttonProjectedRef',] }],
    inMenu: [{ type: Input, args: ['clrInMenu',] }],
    classNames: [{ type: Input, args: ['class',] }],
    name: [{ type: Input, args: ['name',] }],
    type: [{ type: Input, args: ['type',] }],
    disabled: [{ type: Input, args: ['disabled',] }],
    _click: [{ type: Output, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    ClrButton.prototype._enableService;
    /** @type {?} */
    ClrButton.prototype.templateRef;
    /** @type {?} */
    ClrButton.prototype._inMenu;
    /** @type {?} */
    ClrButton.prototype._classNames;
    /** @type {?} */
    ClrButton.prototype._name;
    /** @type {?} */
    ClrButton.prototype._type;
    /** @type {?} */
    ClrButton.prototype._disabled;
    /** @type {?} */
    ClrButton.prototype.loading;
    /** @type {?} */
    ClrButton.prototype._click;
    /** @type {?} */
    ClrButton.prototype.buttonInGroupService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2J1dHRvbi1ncm91cC9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQW1CNUUsTUFBTSxPQUFPLFNBQVM7Ozs7SUFLcEIsWUFHUyxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVAzQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQVVoQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBbUJ6QixnQkFBVyxHQUFXLEtBQUssQ0FBQztRQWlCNUIsVUFBSyxHQUFXLElBQUksQ0FBQztRQWFyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBYXJCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFxQmIsV0FBTSxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztJQXJGL0UsQ0FBQzs7OztJQUlKLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQiwwQ0FBMEM7WUFDMUMsNERB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dXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0LCBTa2lwU2VsZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJMb2FkaW5nU3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9sb2FkaW5nL2xvYWRpbmcnO1xuaW1wb3J0IHsgTG9hZGluZ0xpc3RlbmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9hZGluZy9sb2FkaW5nLWxpc3RlbmVyJztcbmltcG9ydCB7IEJ1dHRvbkluR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2J1dHRvbi1pbi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjYnV0dG9uUHJvamVjdGVkUmVmPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY2xhc3NOYW1lc1wiIFxuICAgICAgICAgICAgICAgIChjbGljayk9XCJlbWl0Q2xpY2soKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIudHlwZV09XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzcGlubmVyIHNwaW5uZXItaW5saW5lXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTG9hZGluZ0xpc3RlbmVyLCB1c2VFeGlzdGluZzogQ2xyQnV0dG9uIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJCdXR0b24gaW1wbGVtZW50cyBMb2FkaW5nTGlzdGVuZXIge1xuICBwcml2YXRlIF9lbmFibGVTZXJ2aWNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnYnV0dG9uUHJvamVjdGVkUmVmJykgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPENsckJ1dHRvbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyBidXR0b25Jbkdyb3VwU2VydmljZTogQnV0dG9uSW5Hcm91cFNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgX2luTWVudTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGdldCBpbk1lbnUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luTWVudTtcbiAgfVxuXG4gIEBJbnB1dCgnY2xySW5NZW51JylcbiAgc2V0IGluTWVudSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBpZiAodGhpcy5faW5NZW51ICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5faW5NZW51ID0gdmFsdWU7XG4gICAgICAvLyBXZSBjaGVjayBpZiB0aGUgc2VydmljZSBmbGFnIGlzIGVuYWJsZWRcbiAgICAgIC8vIGFuZCBpZiB0aGUgc2VydmljZSBleGlzdHMgYmVjYXVzZSB0aGUgc2VydmljZSBpcyBvcHRpb25hbFxuICAgICAgaWYgKHRoaXMuX2VuYWJsZVNlcnZpY2UgJiYgdGhpcy5idXR0b25Jbkdyb3VwU2VydmljZSkge1xuICAgICAgICB0aGlzLmJ1dHRvbkluR3JvdXBTZXJ2aWNlLnVwZGF0ZUJ1dHRvbkdyb3VwKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsYXNzTmFtZXM6IHN0cmluZyA9ICdidG4nO1xuXG4gIGdldCBjbGFzc05hbWVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZXM7XG4gIH1cblxuICBASW5wdXQoJ2NsYXNzJylcbiAgc2V0IGNsYXNzTmFtZXModmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzOiBzdHJpbmdbXSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICBpZiAoY2xhc3NOYW1lcy5pbmRleE9mKCdidG4nKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdidG4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NsYXNzTmFtZXMgPSBjbGFzc05hbWVzLmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBudWxsO1xuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBASW5wdXQoJ25hbWUnKVxuICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90eXBlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoJ3R5cGUnKVxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kaXNhYmxlZDogYW55ID0gbnVsbDtcblxuICBnZXQgZGlzYWJsZWQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoJ2Rpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgbG9hZGluZ1N0YXRlQ2hhbmdlKHN0YXRlOiBDbHJMb2FkaW5nU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBzdGF0ZSA9PT0gQ2xyTG9hZGluZ1N0YXRlLkxPQURJTkc7XG4gIH1cblxuICBAT3V0cHV0KCdjbGljaycpIF9jbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgZW1pdENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsaWNrLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlU2VydmljZSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==