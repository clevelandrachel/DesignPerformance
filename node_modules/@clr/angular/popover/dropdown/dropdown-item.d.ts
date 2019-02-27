import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { ClrDropdown } from './dropdown';
import { RootDropdownService } from './providers/dropdown.service';
export declare class ClrDropdownItem implements AfterViewInit {
    private dropdown;
    private el;
    private _dropdownService;
    private renderer;
    constructor(dropdown: ClrDropdown, el: ElementRef, _dropdownService: RootDropdownService, renderer: Renderer2);
    ngAfterViewInit(): void;
    onDropdownItemClick(): void;
}
