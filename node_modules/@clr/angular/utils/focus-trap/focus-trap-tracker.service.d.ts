import { FocusTrapDirective } from './focus-trap.directive';
export declare class FocusTrapTracker {
    private _previousFocusTraps;
    private _current;
    current: FocusTrapDirective;
    readonly nbFocusTrappers: number;
    activatePreviousTrapper(): void;
}
