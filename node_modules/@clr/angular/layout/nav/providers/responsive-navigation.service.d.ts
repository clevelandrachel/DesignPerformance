import { Observable } from 'rxjs';
import { ResponsiveNavControlMessage } from '../responsive-nav-control-message';
export declare class ResponsiveNavigationService {
    responsiveNavList: number[];
    private registerNavSubject;
    private controlNavSubject;
    readonly registeredNavs: Observable<number[]>;
    readonly navControl: Observable<ResponsiveNavControlMessage>;
    constructor();
    registerNav(navLevel: number): void;
    isNavRegistered(navLevel: number): boolean;
    unregisterNav(navLevel: number): void;
    sendControlMessage(controlCode: string, navLevel: number): void;
    closeAllNavs(): void;
}
