import { AfterContentInit, QueryList } from '@angular/core';
import { IfActiveService } from '../../utils/conditional/if-active.service';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { TabsService } from './providers/tabs.service';
import { ClrTabLink } from './tab-link.directive';
import { ClrTabContent } from './tab-content';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrTabs implements AfterContentInit {
    ifActiveService: IfActiveService;
    ifOpenService: IfOpenService;
    tabsService: TabsService;
    tabsId: number;
    commonStrings: ClrCommonStrings;
    tabLinkDirectives: QueryList<ClrTabLink>;
    tabContents: QueryList<ClrTabContent>;
    constructor(ifActiveService: IfActiveService, ifOpenService: IfOpenService, tabsService: TabsService, tabsId: number, commonStrings: ClrCommonStrings);
    readonly activeTabInOverflow: boolean;
    readonly tabIds: string;
    ngAfterContentInit(): void;
    toggleOverflow(event: any): void;
}
