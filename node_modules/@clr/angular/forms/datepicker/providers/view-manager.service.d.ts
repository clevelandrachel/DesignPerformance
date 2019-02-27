/**
 * This service manages which view is visible in the datepicker popover.
 */
export declare class ViewManagerService {
    private _currentView;
    readonly isDayView: boolean;
    readonly isYearView: boolean;
    readonly isMonthView: boolean;
    changeToMonthView(): void;
    changeToYearView(): void;
    changeToDayView(): void;
}
