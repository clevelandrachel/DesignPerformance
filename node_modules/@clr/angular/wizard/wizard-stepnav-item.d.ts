import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardPage } from './wizard-page';
export declare class ClrWizardStepnavItem {
    navService: WizardNavigationService;
    pageCollection: PageCollectionService;
    page: ClrWizardPage;
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService);
    private pageGuard;
    readonly id: string;
    readonly isDisabled: boolean;
    readonly isCurrent: boolean;
    readonly isComplete: boolean;
    readonly canNavigate: boolean;
    click(): void;
}
