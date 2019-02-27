import { ElementRef, OnDestroy } from '@angular/core';
import { CalendarViewModel } from './model/calendar-view.model';
import { CalendarModel } from './model/calendar.model';
import { DayModel } from './model/day.model';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
export declare class ClrCalendar implements OnDestroy {
    private _localeHelperService;
    private _dateNavigationService;
    private _datepickerFocusService;
    private _elRef;
    private _subs;
    constructor(_localeHelperService: LocaleHelperService, _dateNavigationService: DateNavigationService, _datepickerFocusService: DatepickerFocusService, _elRef: ElementRef);
    /**
     * Calendar View Model to generate the Calendar.
     */
    calendarViewModel: CalendarViewModel;
    /**
     * Gets the locale days according to the TranslationWidth.Narrow format.
     */
    readonly localeDaysNarrow: ReadonlyArray<string>;
    readonly calendar: CalendarModel;
    readonly selectedDay: DayModel;
    readonly focusedDay: DayModel;
    readonly today: DayModel;
    /**
     * Initialize subscriptions to:
     * 1. update the calendar view model.
     * 2. update the focusable day in the calendar view model.
     * 3. focus on the focusable day in the calendar.
     */
    private initializeSubscriptions;
    /**
     * Generates the Calendar View based on the calendar retrieved from the DateNavigationService.
     */
    private generateCalendarView;
    /**
     * Delegates Keyboard arrow navigation to the DateNavigationService.
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Focuses on the focusable day when the Calendar View is initialized.
     */
    ngAfterViewInit(): void;
    /**
     * Unsubscribe from subscriptions.
     */
    ngOnDestroy(): void;
}
