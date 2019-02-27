import { DayModel } from './day.model';
export declare class DayViewModel {
    dayModel: DayModel;
    isTodaysDate: boolean;
    isDisabled: boolean;
    isSelected: boolean;
    isFocusable: boolean;
    constructor(dayModel: DayModel, isTodaysDate?: boolean, isDisabled?: boolean, isSelected?: boolean, isFocusable?: boolean);
    /**
     * Gets the tab index based on the isFocusable flag.
     */
    readonly tabIndex: number;
}
