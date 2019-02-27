import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { RootDropdownService } from './providers/dropdown.service';
export declare class ClrDropdown implements OnDestroy {
    parent: ClrDropdown;
    ifOpenService: IfOpenService;
    private cdr;
    private subscriptions;
    constructor(parent: ClrDropdown, ifOpenService: IfOpenService, cdr: ChangeDetectorRef, dropdownService: RootDropdownService);
    isMenuClosable: boolean;
    ngOnDestroy(): void;
}
