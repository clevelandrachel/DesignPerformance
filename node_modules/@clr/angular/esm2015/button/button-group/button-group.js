/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChildren, ElementRef, HostListener, Input, QueryList } from '@angular/core';
import { Point } from '../../popover/common/popover';
import { CLR_MENU_POSITIONS } from '../../popover/dropdown/menu-positions';
import { ButtonInGroupService } from '../providers/button-in-group.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { ClrButton } from './button';
export class ClrButtonGroup {
    /**
     * @param {?} buttonGroupNewService
     * @param {?} elementRef
     * @param {?} commonStrings
     */
    constructor(buttonGroupNewService, elementRef, commonStrings) {
        this.buttonGroupNewService = buttonGroupNewService;
        this.elementRef = elementRef;
        this.commonStrings = commonStrings;
        this.inlineButtons = [];
        this.menuButtons = [];
        this._openMenu = false;
        this.anchorPoint = Point.BOTTOM_LEFT; // default if menuPosition isn't set
        // default if menuPosition isn't set
        this.popoverPoint = Point.LEFT_TOP; // default if menuPosition isn't set
        /**
         * Flag with indicates if the overflow menu toggle was clicked.
         * If true, this can save us traversing the DOM to find
         * whether the click was withing the button group toggle
         * or menu in the onMouseClick method
         */
        this._overflowMenuToggleClicked = false;
    }
    /**
     * 1. Initializes the initial Button Group View
     * 2. Subscribes to changes on the ContentChildren
     *    in case the user content projection changes
     * @return {?}
     */
    ngAfterContentInit() {
        this.initializeButtons();
        this.buttonGroupNewService.changes.subscribe(button => this.rearrangeButton(button));
        this.buttons.changes.subscribe(() => {
            this.initializeButtons();
        });
    }
    /**
     * Moves the button into the other ViewContainer
     * when an update is received.
     *
     * @param {?} button
     * @return {?}
     */
    rearrangeButton(button) {
        /** @type {?} */
        let fromView;
        /** @type {?} */
        let toView;
        if (button.inMenu) {
            fromView = this.inlineButtons;
            toView = this.menuButtons;
        }
        else {
            fromView = this.menuButtons;
            toView = this.inlineButtons;
        }
        /** @type {?} */
        const index = fromView.indexOf(button);
        if (index > -1) {
            fromView.splice(index, 1);
            /** @type {?} */
            const moveIndex = this.getMoveIndex(button);
            if (moveIndex <= toView.length) {
                toView.splice(moveIndex, 0, button);
            }
        }
    }
    /**
     * Author: Eudes
     *
     * Finds the order of a button w.r.t other buttons
     *
     * @param {?} buttonToMove
     * @return {?}
     */
    getMoveIndex(buttonToMove) {
        /** @type {?} */
        const tempArr = this.buttons.filter(button => button.inMenu === buttonToMove.inMenu);
        return tempArr.indexOf(buttonToMove);
    }
    /**
     * @return {?}
     */
    initializeButtons() {
        /** @type {?} */
        const tempInlineButtons = [];
        /** @type {?} */
        const tempInMenuButtons = [];
        this.buttons.forEach(button => {
            if (button.inMenu) {
                tempInMenuButtons.push(button);
            }
            else {
                tempInlineButtons.push(button);
            }
        });
        this.inlineButtons = tempInlineButtons;
        this.menuButtons = tempInMenuButtons;
    }
    /**
     * @return {?}
     */
    get menuPosition() {
        return this._menuPosition;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    set menuPosition(pos) {
        if (pos && CLR_MENU_POSITIONS.indexOf(pos) > -1) {
            this._menuPosition = pos;
        }
        else {
            this._menuPosition = 'bottom-left';
        }
        // set the popover values based on menu position
        switch (this._menuPosition) {
            case 'top-right':
                this.anchorPoint = Point.TOP_RIGHT;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                break;
            case 'top-left':
                this.anchorPoint = Point.TOP_LEFT;
                this.popoverPoint = Point.LEFT_BOTTOM;
                break;
            case 'bottom-right':
                this.anchorPoint = Point.BOTTOM_RIGHT;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            case 'bottom-left':
                this.anchorPoint = Point.BOTTOM_LEFT;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case 'right-top':
                this.anchorPoint = Point.RIGHT_TOP;
                this.popoverPoint = Point.LEFT_TOP;
                break;
            case 'right-bottom':
                this.anchorPoint = Point.RIGHT_BOTTOM;
                this.popoverPoint = Point.LEFT_BOTTOM;
                break;
            case 'left-top':
                this.anchorPoint = Point.LEFT_TOP;
                this.popoverPoint = Point.RIGHT_TOP;
                break;
            case 'left-bottom':
                this.anchorPoint = Point.LEFT_BOTTOM;
                this.popoverPoint = Point.RIGHT_BOTTOM;
                break;
            default:
                this.anchorPoint = Point.BOTTOM_LEFT;
                this.popoverPoint = Point.LEFT_TOP;
                break;
        }
    }
    /**
     * @return {?}
     */
    get openMenu() {
        return this._openMenu;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set openMenu(value) {
        this._openMenu = value;
    }
    // default if menuPosition isn't set
    /**
     * Toggle the ClrDropdown Menu when the ClrDropdown Toggle is
     * clicked. Also set a flag that indicates that the toggle
     * was clicked so that we don't traverse the DOM to find the
     * location of the click.
     * @return {?}
     */
    toggleMenu() {
        this.openMenu = !this.openMenu;
        this._overflowMenuToggleClicked = true;
    }
    // TODO: Generic Directive to handle this
    /**
     * Called on mouse clicks anywhere in the DOM.
     * Checks to see if the mouseclick happened on the host or outside
     * @param {?} target
     * @return {?}
     */
    onMouseClick(target) {
        if (this.openMenu && !this._overflowMenuToggleClicked) {
            // Reset the overflow menu toggle clicked flag
            this._overflowMenuToggleClicked = false;
            /** @type {?} */
            let current = target;
            // Get the element in the DOM on which the mouse was clicked
            /** @type {?} */
            const host = this.elementRef.nativeElement;
            if (current.classList.contains('dropdown-menu')) {
                current = current.parentNode;
                while (current) {
                    if (current === document) {
                        this.openMenu = false;
                        return;
                    }
                    // If clicked on dropdown menu and menu is in host
                    // do nothing
                    if (current === host) {
                        return;
                    }
                    current = current.parentNode;
                }
            }
            this.openMenu = false;
        }
        this._overflowMenuToggleClicked = false; // Reset the overflow menu toggle clicked flag
    }
}
ClrButtonGroup.decorators = [
    { type: Component, args: [{
                selector: 'clr-button-group',
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<ng-container *ngFor=\"let inlineButton of inlineButtons\">\n    <ng-template [ngTemplateOutlet]=\"inlineButton.templateRef\"></ng-template>\n</ng-container>\n<ng-container *ngIf=\"menuButtons.length > 0\">\n    <div\n        class=\"btn-group-overflow open\"\n        [ngClass]=\"menuPosition\"\n        #anchor>\n        <button\n            class=\"btn dropdown-toggle\"\n            (click)=\"toggleMenu()\">\n            <clr-icon shape=\"ellipsis-horizontal\" [attr.title]=\"commonStrings.more\"></clr-icon>\n        </button>\n        <div\n            class=\"dropdown-menu\"\n            *clrPopoverOld=\"openMenu; anchor: anchor; anchorPoint: anchorPoint; popoverPoint: popoverPoint;\">\n            <ng-template [ngTemplateOutlet]=\"ref\"></ng-template>\n        </div>\n    </div>\n</ng-container>\n<ng-template #ref>\n    <ng-container *ngFor=\"let menuButton of menuButtons\">\n        <ng-template [ngTemplateOutlet]=\"menuButton.templateRef\"></ng-template>\n    </ng-container>\n</ng-template>\n",
                providers: [ButtonInGroupService],
                host: { '[class.btn-group]': 'true' }
            }] }
];
/** @nocollapse */
ClrButtonGroup.ctorParameters = () => [
    { type: ButtonInGroupService },
    { type: ElementRef },
    { type: ClrCommonStrings }
];
ClrButtonGroup.propDecorators = {
    buttons: [{ type: ContentChildren, args: [ClrButton,] }],
    menuPosition: [{ type: Input, args: ['clrMenuPosition',] }],
    onMouseClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
if (false) {
    /** @type {?} */
    ClrButtonGroup.prototype.buttons;
    /** @type {?} */
    ClrButtonGroup.prototype.inlineButtons;
    /** @type {?} */
    ClrButtonGroup.prototype.menuButtons;
    /**
     * Overflow Menu
     *
     * @type {?}
     */
    ClrButtonGroup.prototype._menuPosition;
    /** @type {?} */
    ClrButtonGroup.prototype._openMenu;
    /** @type {?} */
    ClrButtonGroup.prototype.anchorPoint;
    /** @type {?} */
    ClrButtonGroup.prototype.popoverPoint;
    /**
     * Flag with indicates if the overflow menu toggle was clicked.
     * If true, this can save us traversing the DOM to find
     * whether the click was withing the button group toggle
     * or menu in the onMouseClick method
     * @type {?}
     */
    ClrButtonGroup.prototype._overflowMenuToggleClicked;
    /** @type {?} */
    ClrButtonGroup.prototype.buttonGroupNewService;
    /** @type {?} */
    ClrButtonGroup.prototype.elementRef;
    /** @type {?} */
    ClrButtonGroup.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBUXJDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFHekIsWUFDUyxxQkFBMkMsRUFDMUMsVUFBc0IsRUFDdkIsYUFBK0I7UUFGL0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUMxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUd4QyxrQkFBYSxHQUFnQixFQUFFLENBQUM7UUFDaEMsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO1FBZ0l0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBVTVCLGdCQUFXLEdBQVUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLG9DQUFvQzs7UUFDNUUsaUJBQVksR0FBVSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsb0NBQW9DOzs7Ozs7O1FBbUJ6RSwrQkFBMEIsR0FBWSxLQUFLLENBQUM7SUFqS2pELENBQUM7Ozs7Ozs7SUFVSixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFD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U0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixpdUNBQWdDO2dCQUNoQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDakMsSUFBSSxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFO2FBQ3RDOzs7O1lBVlEsb0JBQW9CO1lBSlEsVUFBVTtZQUt0QyxnQkFBZ0I7OztzQkFXdEIsZUFBZSxTQUFDLFNBQVM7MkJBeUZ6QixLQUFLLFNBQUMsaUJBQWlCOzJCQXFGdkIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDOzs7O0lBOUtqRCxpQ0FBMEQ7O0lBUTFELHVDQUFnQzs7SUFDaEMscUNBQThCOzs7Ozs7SUEwRTlCLHVDQUE4Qjs7SUFzRDlCLG1DQUFtQzs7SUFVbkMscUNBQThDOztJQUM5QyxzQ0FBNEM7Ozs7Ozs7O0lBbUI1QyxvREFBb0Q7O0lBcEtsRCwrQ0FBa0Q7O0lBQ2xELG9DQUE4Qjs7SUFDOUIsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vLi4vcG9wb3Zlci9jb21tb24vcG9wb3Zlcic7XG5pbXBvcnQgeyBDTFJfTUVOVV9QT1NJVElPTlMgfSBmcm9tICcuLi8uLi9wb3BvdmVyL2Ryb3Bkb3duL21lbnUtcG9zaXRpb25zJztcbmltcG9ydCB7IEJ1dHRvbkluR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2J1dHRvbi1pbi1ncm91cC5zZXJ2aWNlJztcbmltcG9ydCB7IENsckNvbW1vblN0cmluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9pMThuL2NvbW1vbi1zdHJpbmdzLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IENsckJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLWJ1dHRvbi1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLWdyb3VwLmh0bWwnLFxuICBwcm92aWRlcnM6IFtCdXR0b25Jbkdyb3VwU2VydmljZV0sXG4gIGhvc3Q6IHsgJ1tjbGFzcy5idG4tZ3JvdXBdJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIENsckJ1dHRvbkdyb3VwIHtcbiAgQENvbnRlbnRDaGlsZHJlbihDbHJCdXR0b24pIGJ1dHRvbnM6IFF1ZXJ5TGlzdDxDbHJCdXR0b24+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBidXR0b25Hcm91cE5ld1NlcnZpY2U6IEJ1dHRvbkluR3JvdXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5nc1xuICApIHt9XG5cbiAgaW5saW5lQnV0dG9uczogQ2xyQnV0dG9uW10gPSBbXTtcbiAgbWVudUJ1dHRvbnM6IENsckJ1dHRvbltdID0gW107XG5cbiAgLyoqXG4gICAqIDEuIEluaXRpYWxpemVzIHRoZSBpbml0aWFsIEJ1dHRvbiBHcm91cCBWaWV3XG4gICAqIDIuIFN1YnNjcmliZXMgdG8gY2hhbmdlcyBvbiB0aGUgQ29udGVudENoaWxkcmVuXG4gICAqICAgIGluIGNhc2UgdGhlIHVzZXIgY29udGVudCBwcm9qZWN0aW9uIGNoYW5nZXNcbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgdGhpcy5idXR0b25Hcm91cE5ld1NlcnZpY2UuY2hhbmdlcy5zdWJzY3JpYmUoYnV0dG9uID0+IHRoaXMucmVhcnJhbmdlQnV0dG9uKGJ1dHRvbikpO1xuICAgIHRoaXMuYnV0dG9ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGJ1dHRvbiBpbnRvIHRoZSBvdGhlciBWaWV3Q29udGFpbmVyXG4gICAqIHdoZW4gYW4gdXBkYXRlIGlzIHJlY2VpdmVkLlxuICAgKlxuICAgKiBAcGFyYW0gYnV0dG9uXG4gICAqL1xuICByZWFycmFuZ2VCdXR0b24oYnV0dG9uOiBDbHJCdXR0b24pOiB2b2lkIHtcbiAgICBsZXQgZnJvbVZpZXc6IENsckJ1dHRvbltdO1xuICAgIGxldCB0b1ZpZXc6IENsckJ1dHRvbltdO1xuICAgIGlmIChidXR0b24uaW5NZW51KSB7XG4gICAgICBmcm9tVmlldyA9IHRoaXMuaW5saW5lQnV0dG9ucztcbiAgICAgIHRvVmlldyA9IHRoaXMubWVudUJ1dHRvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyb21WaWV3ID0gdGhpcy5tZW51QnV0dG9ucztcbiAgICAgIHRvVmlldyA9IHRoaXMuaW5saW5lQnV0dG9ucztcbiAgICB9XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGZyb21WaWV3LmluZGV4T2YoYnV0dG9uKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZnJvbVZpZXcuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGNvbnN0IG1vdmVJbmRleCA9IHRoaXMuZ2V0TW92ZUluZGV4KGJ1dHRvbik7XG4gICAgICBpZiAobW92ZUluZGV4IDw9IHRvVmlldy5sZW5ndGgpIHtcbiAgICAgICAgdG9WaWV3LnNwbGljZShtb3ZlSW5kZXgsIDAsIGJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhvcjogRXVkZXNcbiAgICpcbiAgICogRmluZHMgdGhlIG9yZGVyIG9mIGEgYnV0dG9uIHcuci50IG90aGVyIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIGJ1dHRvblRvTW92ZVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgZ2V0TW92ZUluZGV4KGJ1dHRvblRvTW92ZTogQ2xyQnV0dG9uKTogbnVtYmVyIHtcbiAgICBjb25zdCB0ZW1wQXJyOiBDbHJCdXR0b25bXSA9IHRoaXMuYnV0dG9ucy5maWx0ZXIoYnV0dG9uID0+IGJ1dHRvbi5pbk1lbnUgPT09IGJ1dHRvblRvTW92ZS5pbk1lbnUpO1xuICAgIHJldHVybiB0ZW1wQXJyLmluZGV4T2YoYnV0dG9uVG9Nb3ZlKTtcbiAgfVxuXG4gIGluaXRpYWxpemVCdXR0b25zKCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBJbmxpbmVCdXR0b25zOiBDbHJCdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHRlbXBJbk1lbnVCdXR0b25zOiBDbHJCdXR0b25bXSA9IFtdO1xuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmluTWVudSkge1xuICAgICAgICB0ZW1wSW5NZW51QnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wSW5saW5lQnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbmxpbmVCdXR0b25zID0gdGVtcElubGluZUJ1dHRvbnM7XG4gICAgdGhpcy5tZW51QnV0dG9ucyA9IHRlbXBJbk1lbnVCdXR0b25zO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJmbG93IE1lbnVcbiAgICpcbiAgICovXG5cbiAgLy8gSW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgb3ZlcmZsb3cgbWVudVxuICBwcml2YXRlIF9tZW51UG9zaXRpb246IHN0cmluZztcblxuICBnZXQgbWVudVBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVQb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgnY2xyTWVudVBvc2l0aW9uJylcbiAgc2V0IG1lbnVQb3NpdGlvbihwb3M6IHN0cmluZykge1xuICAgIGlmIChwb3MgJiYgQ0xSX01FTlVfUE9TSVRJT05TLmluZGV4T2YocG9zKSA+IC0xKSB7XG4gICAgICB0aGlzLl9tZW51UG9zaXRpb24gPSBwb3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21lbnVQb3NpdGlvbiA9ICdib3R0b20tbGVmdCc7XG4gICAgfVxuICAgIC8vIHNldCB0aGUgcG9wb3ZlciB2YWx1ZXMgYmFzZWQgb24gbWVudSBwb3NpdGlvblxuICAgIHN3aXRjaCAodGhpcy5fbWVudVBvc2l0aW9uKSB7XG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgICAgICB0aGlzLmFuY2hvclBvaW50ID0gUG9pbnQuVE9QX1JJR0hUO1xuICAgICAgICB0aGlzLnBvcG92ZXJQb2ludCA9IFBvaW50LlJJR0hUX0JPVFRPTTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnQgPSBQb2ludC5UT1BfTEVGVDtcbiAgICAgICAgdGhpcy5wb3BvdmVyUG9pbnQgPSBQb2ludC5MRUZUX0JPVFRPTTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxuICAgICAgICB0aGlzLmFuY2hvclBvaW50ID0gUG9pbnQuQk9UVE9NX1JJR0hUO1xuICAgICAgICB0aGlzLnBvcG92ZXJQb2ludCA9IFBvaW50LlJJR0hUX1RPUDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnQgPSBQb2ludC5CT1RUT01fTEVGVDtcbiAgICAgICAgdGhpcy5wb3BvdmVyUG9pbnQgPSBQb2ludC5MRUZUX1RPUDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodC10b3AnOlxuICAgICAgICB0aGlzLmFuY2hvclBvaW50ID0gUG9pbnQuUklHSFRfVE9QO1xuICAgICAgICB0aGlzLnBvcG92ZXJQb2ludCA9IFBvaW50LkxFRlRfVE9QO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0LWJvdHRvbSc6XG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnQgPSBQb2ludC5SSUdIVF9CT1RUT007XG4gICAgICAgIHRoaXMucG9wb3ZlclBvaW50ID0gUG9pbnQuTEVGVF9CT1RUT007XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdC10b3AnOlxuICAgICAgICB0aGlzLmFuY2hvclBvaW50ID0gUG9pbnQuTEVGVF9UT1A7XG4gICAgICAgIHRoaXMucG9wb3ZlclBvaW50ID0gUG9pbnQuUklHSFRfVE9QO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQtYm90dG9tJzpcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludCA9IFBvaW50LkxFRlRfQk9UVE9NO1xuICAgICAgICB0aGlzLnBvcG92ZXJQb2ludCA9IFBvaW50LlJJR0hUX0JPVFRPTTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmFuY2hvclBvaW50ID0gUG9pbnQuQk9UVE9NX0xFRlQ7XG4gICAgICAgIHRoaXMucG9wb3ZlclBvaW50ID0gUG9pbnQuTEVGVF9UT1A7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wZW5NZW51OiBib29sZWFuID0gZmFsc2U7XG5cbiAgZ2V0IG9wZW5NZW51KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuTWVudTtcbiAgfVxuXG4gIHNldCBvcGVuTWVudSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW5NZW51ID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgYW5jaG9yUG9pbnQ6IFBvaW50ID0gUG9pbnQuQk9UVE9NX0xFRlQ7IC8vIGRlZmF1bHQgaWYgbWVudVBvc2l0aW9uIGlzbid0IHNldFxuICBwdWJsaWMgcG9wb3ZlclBvaW50OiBQb2ludCA9IFBvaW50LkxFRlRfVE9QOyAvLyBkZWZhdWx0IGlmIG1lbnVQb3NpdGlvbiBpc24ndCBzZXRcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBDbHJEcm9wZG93biBNZW51IHdoZW4gdGhlIENsckRyb3Bkb3duIFRvZ2dsZSBpc1xuICAgKiBjbGlja2VkLiBBbHNvIHNldCBhIGZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCB0aGUgdG9nZ2xlXG4gICAqIHdhcyBjbGlja2VkIHNvIHRoYXQgd2UgZG9uJ3QgdHJhdmVyc2UgdGhlIERPTSB0byBmaW5kIHRoZVxuICAgKiBsb2NhdGlvbiBvZiB0aGUgY2xpY2suXG4gICAqL1xuICB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk1lbnUgPSAhdGhpcy5vcGVuTWVudTtcbiAgICB0aGlzLl9vdmVyZmxvd01lbnVUb2dnbGVDbGlja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGbGFnIHdpdGggaW5kaWNhdGVzIGlmIHRoZSBvdmVyZmxvdyBtZW51IHRvZ2dsZSB3YXMgY2xpY2tlZC5cbiAgICogSWYgdHJ1ZSwgdGhpcyBjYW4gc2F2ZSB1cyB0cmF2ZXJzaW5nIHRoZSBET00gdG8gZmluZFxuICAgKiB3aGV0aGVyIHRoZSBjbGljayB3YXMgd2l0aGluZyB0aGUgYnV0dG9uIGdyb3VwIHRvZ2dsZVxuICAgKiBvciBtZW51IGluIHRoZSBvbk1vdXNlQ2xpY2sgbWV0aG9kXG4gICAqL1xuICBwcml2YXRlIF9vdmVyZmxvd01lbnVUb2dnbGVDbGlja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gVE9ETzogR2VuZXJpYyBEaXJlY3RpdmUgdG8gaGFuZGxlIHRoaXNcbiAgLyoqXG4gICAqIENhbGxlZCBvbiBtb3VzZSBjbGlja3MgYW55d2hlcmUgaW4gdGhlIERPTS5cbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgbW91c2VjbGljayBoYXBwZW5lZCBvbiB0aGUgaG9zdCBvciBvdXRzaWRlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKVxuICBvbk1vdXNlQ2xpY2sodGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcGVuTWVudSAmJiAhdGhpcy5fb3ZlcmZsb3dNZW51VG9nZ2xlQ2xpY2tlZCkge1xuICAgICAgLy8gUmVzZXQgdGhlIG92ZXJmbG93IG1lbnUgdG9nZ2xlIGNsaWNrZWQgZmxhZ1xuICAgICAgdGhpcy5fb3ZlcmZsb3dNZW51VG9nZ2xlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgbGV0IGN1cnJlbnQ6IGFueSA9IHRhcmdldDsgLy8gR2V0IHRoZSBlbGVtZW50IGluIHRoZSBET00gb24gd2hpY2ggdGhlIG1vdXNlIHdhcyBjbGlja2VkXG4gICAgICBjb25zdCBob3N0OiBhbnkgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDsgLy8gQ3VycmVudCBCdXR0b24gR3JvdXBcblxuICAgICAgaWYgKGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51JykpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAoY3VycmVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1lbnUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBjbGlja2VkIG9uIGRyb3Bkb3duIG1lbnUgYW5kIG1lbnUgaXMgaW4gaG9zdFxuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICBpZiAoY3VycmVudCA9PT0gaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5NZW51ID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX292ZXJmbG93TWVudVRvZ2dsZUNsaWNrZWQgPSBmYWxzZTsgLy8gUmVzZXQgdGhlIG92ZXJmbG93IG1lbnUgdG9nZ2xlIGNsaWNrZWQgZmxhZ1xuICB9XG59XG4iXX0=