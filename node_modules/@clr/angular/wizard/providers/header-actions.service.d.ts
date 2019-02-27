import { QueryList } from '@angular/core';
import { ClrWizardHeaderAction } from '../wizard-header-action';
import { WizardNavigationService } from './wizard-navigation.service';
export declare class HeaderActionService {
    navService: WizardNavigationService;
    constructor(navService: WizardNavigationService);
    wizardHeaderActions: QueryList<ClrWizardHeaderAction>;
    readonly wizardHasHeaderActions: boolean;
    readonly currentPageHasHeaderActions: boolean;
    readonly showWizardHeaderActions: boolean;
    readonly displayHeaderActionsWrapper: boolean;
}
