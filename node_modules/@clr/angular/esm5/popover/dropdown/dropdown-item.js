/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ClrDropdown } from './dropdown';
import { RootDropdownService } from './providers/dropdown.service';
var ClrDropdownItem = /** @class */ (function () {
    function ClrDropdownItem(dropdown, el, _dropdownService, renderer) {
        this.dropdown = dropdown;
        this.el = el;
        this._dropdownService = _dropdownService;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ClrDropdownItem.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement, 'click', function () { return _this.onDropdownItemClick(); });
    };
    /**
     * @return {?}
     */
    ClrDropdownItem.prototype.onDropdownItemClick = /**
     * @return {?}
     */
    function () {
        if (this.dropdown.isMenuClosable && !this.el.nativeElement.classList.contains('disabled')) {
            this._dropdownService.closeMenus();
        }
    };
    ClrDropdownItem.decorators = [
        { type: Directive, args: [{ selector: '[clrDropdownItem]', host: { '[class.dropdown-item]': 'true' } },] }
    ];
    /** @nocollapse */
    ClrDropdownItem.ctorParameters = function () { return [
        { type: ClrDropdown },
        { type: ElementRef },
        { type: RootDropdownService },
        { type: Renderer2 }
    ]; };
    return ClrDropdownItem;
}());
export { ClrDropdownItem };
if (false) {
    /** @type {?} */
    ClrDropdownItem.prototype.dropdown;
    /** @type {?} */
    ClrDropdownItem.prototype.el;
    /** @type {?} */
    ClrDropdownItem.prototype._dropdownService;
    /** @type {?} */
    ClrDropdownItem.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInBvcG92ZXIvZHJvcGRvd24vZHJvcGRvd24taXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFbkU7SUFFRSx5QkFDVSxRQUFxQixFQUNyQixFQUFjLEVBQ2QsZ0JBQXFDLEVBQ3JDLFFBQW1CO1FBSG5CLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBcUI7UUFDckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDOzs7O0lBRUoseUNBQWU7OztJQUFmO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELDZDQUFtQjs7O0lBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsRUFBRTs7OztnQkFIOUUsV0FBVztnQkFGZSxVQUFVO2dCQUdwQyxtQkFBbUI7Z0JBSG1CLFNBQVM7O0lBdUJ4RCxzQkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLGVBQWU7OztJQUV4QixtQ0FBNkI7O0lBQzdCLDZCQUFzQjs7SUFDdEIsMkNBQTZDOztJQUM3QyxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJEcm9wZG93biB9IGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IHsgUm9vdERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xyRHJvcGRvd25JdGVtXScsIGhvc3Q6IHsgJ1tjbGFzcy5kcm9wZG93bi1pdGVtXSc6ICd0cnVlJyB9IH0pXG5leHBvcnQgY2xhc3MgQ2xyRHJvcGRvd25JdGVtIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHJvcGRvd246IENsckRyb3Bkb3duLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZHJvcGRvd25TZXJ2aWNlOiBSb290RHJvcGRvd25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkRyb3Bkb3duSXRlbUNsaWNrKCkpO1xuICB9XG5cbiAgb25Ecm9wZG93bkl0ZW1DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bi5pc01lbnVDbG9zYWJsZSAmJiAhdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgdGhpcy5fZHJvcGRvd25TZXJ2aWNlLmNsb3NlTWVudXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==