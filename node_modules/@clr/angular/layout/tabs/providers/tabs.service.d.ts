import { ClrTab } from '../tab';
export declare class TabsService {
    private _children;
    register(tab: ClrTab): void;
    readonly children: ClrTab[];
    readonly activeTab: ClrTab;
    readonly overflowTabs: ClrTab[];
    unregister(tab: ClrTab): void;
}
