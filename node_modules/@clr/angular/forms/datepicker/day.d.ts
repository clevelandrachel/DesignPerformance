import { IfOpenService } from '../../utils/conditional/if-open.service';
import { DayViewModel } from './model/day-view.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateNavigationService } from './providers/date-navigation.service';
export declare class ClrDay {
    private _dateNavigationService;
    private _ifOpenService;
    private dateFormControlService;
    constructor(_dateNavigationService: DateNavigationService, _ifOpenService: IfOpenService, dateFormControlService: DateFormControlService);
    /**
     * DayViewModel input which is used to build the Day View.
     */
    dayView: DayViewModel;
    /**
     * Updates the focusedDay in the DateNavigationService when the ClrDay is focused.
     */
    onDayViewFocus(): void;
    /**
     * Updates the selectedDay when the ClrDay is selected and closes the datepicker popover.
     */
    selectDay(): void;
}
