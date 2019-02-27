import { IfOpenService } from '../../utils/conditional/if-open.service';
import { ClrDropdown } from './dropdown';
export declare class ClrDropdownTrigger {
    private ifOpenService;
    isRootLevelToggle: boolean;
    constructor(dropdown: ClrDropdown, ifOpenService: IfOpenService);
    readonly active: boolean;
    onDropdownTriggerClick(event: any): void;
}
