import { AfterContentInit, DoCheck, ElementRef, EventEmitter, IterableDiffers, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ButtonHubService } from './providers/button-hub.service';
import { HeaderActionService } from './providers/header-actions.service';
import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardHeaderAction } from './wizard-header-action';
import { ClrWizardPage } from './wizard-page';
/**
 *
 * The Wizard component
 *
 */
export declare class ClrWizard implements OnInit, OnDestroy, AfterContentInit, DoCheck {
    navService: WizardNavigationService;
    pageCollection: PageCollectionService;
    buttonService: ButtonHubService;
    headerActionService: HeaderActionService;
    private elementRef;
    /**
     * Creates an instance of Wizard.
     *
     * @memberof Wizard
     *
     */
    constructor(navService: WizardNavigationService, pageCollection: PageCollectionService, buttonService: ButtonHubService, headerActionService: HeaderActionService, elementRef: ElementRef, differs: IterableDiffers);
    /**
     * Used for marking when the collection of wizard pages has been added to or deleted from
     *
     * @memberof Wizard
     *
     */
    differ: any;
    /**
     * Contains the size defined by the clrWizardSize input
     *
     * @memberof Wizard
     *
     */
    size: string;
    /**
     * Resets page completed states when navigating backwards. Can be set using
     * the clrWizardForceForwardNavigation input.
     *
     * @memberof Wizard
     *
     */
    forceForward: boolean;
    private _forceForward;
    /**
     * Tells the modal part of the wizard whether it should have a close "X"
     * in the top right corner. Set with the clrWizardClosable input.
     *
     * @memberof Wizard
     *
     */
    closable: boolean;
    /**
     * Toggles open/close of the wizard component. Set using the clrWizardOpen
     * input.
     *
     * @memberof Wizard
     *
     */
    _open: boolean;
    clrWizardOpen: boolean;
    /**
     * Emits when the wizard is opened or closed. Emits through the
     * clrWizardOpenChange output. Works in conjunction with the
     * clrWizardOpen binding so you can use...
     *
     * <clr-wizard [(clrWizardOpen)]="blah"
     * ...or...
     * <clr-wizard [clrWizardOpen]="something" (clrWizardOpenChange)="doSomethign($event)">
     *
     * ...for two-way binding.
     *
     * @memberof Wizard
     *
     */
    _openChanged: EventEmitter<boolean>;
    /**
     * Emits when the wizard is canceled. Can be observed through the clrWizardOnCancel
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultCancel input to create
     * wizard-level custom cancel routines.
     *
     * @memberof Wizard
     *
     */
    onCancel: EventEmitter<any>;
    /**
     * Emits when the wizard is completed. Can be observed through the clrWizardOnFinish
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultNext input to create
     * wizard-level custom completion routines.
     *
     * @memberof Wizard
     *
     */
    wizardFinished: EventEmitter<any>;
    /**
     * Emits when the wizard is reset. See .reset(). Can be observed through
     * the clrWizardOnReset output.
     *
     * @memberof Wizard
     *
     */
    onReset: EventEmitter<any>;
    /**
     * A QueryList of the pages in the wizard. Note that a QueryList is sort of
     * like an Array but not really. Note also that pages does not contain
     * WizardPages that have been removed with an ngIf.
     *
     * Most interactions with a ClrWizard's pages are more easily done using the
     * helper function in the PageCollectionService, accessible from the
     * ClrWizard through ClrWizard.pageCollection.
     *
     * @memberof Wizard
     *
     */
    pages: QueryList<ClrWizardPage>;
    /**
     * A QueryList of the header actions defined at the ClrWizard level. Does not
     * contain header actions defined at the page level. Mostly used by other functionality
     * that needs to either know if the ClrWizard has header actions or needs to stamp them
     * somewhere.
     *
     * Could be useful if you needed to locate and programmatically activate a specific
     * header action. But this is probably easier to do by invoking the header action's
     * event handler in your host component.
     *
     * @memberof Wizard
     *
     */
    headerActions: QueryList<ClrWizardHeaderAction>;
    /**
     * Emits when the current page has changed. Can be observed through the clrWizardCurrentPageChanged
     * output. This can happen on .next() or .previous().
     * Useful for non-blocking validation.
     *
     * @memberof Wizard
     *
     */
    currentPageChanged: EventEmitter<any>;
    /**
     * Emits when the wizard moves to the next page. Can be observed through the clrWizardOnNext
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultNext input to create
     * wizard-level custom navigation routines, which are useful for validation.
     *
     * @memberof Wizard
     *
     */
    onMoveNext: EventEmitter<any>;
    /**
     * Emits when the wizard moves to the previous page. Can be observed through the
     * clrWizardOnPrevious output.
     *
     * Can be useful for validation.
     *
     * @memberof Wizard
     *
     */
    onMovePrevious: EventEmitter<any>;
    /**
     * Prevents ClrWizard from moving to the next page or closing itself on finishing.
     * Set using the clrWizardPreventDefaultNext input.
     *
     * Note that using stopNext will require you to create your own calls to
     * .next() and .finish() in your host component to make the ClrWizard work as
     * expected.
     *
     * Primarily used for validation.
     *
     * @memberof Wizard
     *
     */
    stopNext: boolean;
    private _stopNext;
    /**
     * Prevents ClrWizard from closing when the cancel button or close "X" is clicked.
     * Set using the clrWizardPreventDefaultCancel input.
     *
     * Note that using stopCancel will require you to create your own calls to
     * .close() in your host component to make the ClrWizard work as expected.
     *
     * Useful for doing checks or prompts before closing a ClrWizard.
     *
     * @memberof Wizard
     *
     */
    stopCancel: boolean;
    private _stopCancel;
    /**
     * Prevents ClrWizard from performing any form of navigation away from the current
     * page. Set using the clrWizardPreventNavigation input.
     *
     * Note that stopNavigation is meant to freeze the wizard in place, typically
     * during a long validation or background action where you want the wizard to
     * display loading content but not allow the user to execute navigation in
     * the stepnav, close X, or the  back, finish, or next buttons.
     *
     * @memberof Wizard
     *
     */
    stopNavigation: boolean;
    private _stopNavigation;
    /**
     * Prevents clicks on the links in the stepnav from working.
     *
     * A more granular bypassing of navigation which can be useful when your
     * ClrWizard is in a state of completion and you don't want users to be
     * able to jump backwards and change things.
     *
     * @memberof Wizard
     *
     */
    disableStepnav: boolean;
    private _disableStepnav;
    /**
     * Used only to communicate to the underlying modal that animations are not
     * wanted. Primary use is for the display of static/inline wizards.
     *
     * Set using clrWizardPreventModalAnimation input. But you should never set it.
     *
     * @memberof Wizard
     *
     */
    _stopModalAnimations: boolean;
    readonly stopModalAnimations: string;
    ngOnInit(): void;
    private goNextSubscription;
    private goPreviousSubscription;
    private cancelSubscription;
    private currentPageSubscription;
    private wizardFinishedSubscription;
    ngOnDestroy(): void;
    /**
     * Sets up references that are needed by the providers.
     *
     * @name ngAfterContentInit
     * @memberof Wizard
     *
     */
    ngAfterContentInit(): void;
    /**
     * Used for keeping track of when pages are added or removed from this.pages
     *
     * @name ngDoCheck
     * @memberof Wizard
     *
     */
    ngDoCheck(): void;
    /**
     * Convenient property for determining whether a wizard is static/in-line or not.
     *
     * @name isStatic
     *
     * @memberof Wizard
     *
     */
    readonly isStatic: boolean;
    /**
     * As a getter, current page is a convenient way to retrieve the current page from
     * the WizardNavigationService.
     *
     * As a setter, current page accepts a ClrWizardPage and passes it to WizardNavigationService
     * to be made the current page. currentPage performs checks to make sure it can navigate
     * to the designated page.
     *
     * @name currentPage
     *
     * @memberof Wizard
     *
     */
    currentPage: ClrWizardPage;
    /**
     * Convenient property for determining if the current page is the last page of
     * the wizard.
     *
     * @name isLast
     *
     * @memberof Wizard
     *
     */
    readonly isLast: boolean;
    /**
     * Convenient property for determining if the current page is the first page of
     * the wizard.
     *
     * @name isFirst
     *
     * @memberof Wizard
     *
     */
    readonly isFirst: boolean;
    /**
     * Performs the actions needed to open the wizard. If there is no current
     * page defined, sets the first page in the wizard to be current.
     *
     * @name open
     * @memberof ClrWizard
     */
    open(): void;
    /**
     * Does the work involved with closing the wizard. Call this directly instead
     * of cancel() to implement alternative cancel functionality.
     *
     * @name close
     * @memberof ClrWizard
     */
    close(): void;
    /**
     * Convenient function that can be used to open and close the wizard. It operates
     * by checking a Boolean parameter. If true, the wizard is opened. If false,
     * it is closed.
     *
     * There is no default value for this parameter, so by default the wizard will
     * close if invoked with no parameter.
     *
     * @name toggle
     *
     * @memberof ClrWizard
     */
    toggle(value: boolean): void;
    /**
     * Moves the wizard to the previous page.
     *
     * @name previous
     * @memberof ClrWizard
     */
    previous(): void;
    /**
     * Includes a Boolean parameter that will skip checks and event emissions.
     * If true, the wizard will move to the next page regardless of the state of
     * its current page. This is useful for alternative navigation where event
     * emissions have already been done and firing them again may cause an event loop.
     *
     * Generally, with alternative navigation, users are supplying their own checks
     * and validation. So there is no point in superseding their business logic
     * with our default behavior.
     *
     * If false, the wizard will execute default checks and emit events as normal.
     * This is useful for custom buttons or programmatic workflows that are not
     * executing the wizards default checks and emissions. It is another way to
     * navigate without having to rewrite the wizard’s default functionality
     * from scratch.
     *
     * By default, next() does not execute event emissions or checks because the
     * 80% case is that this method will be called as part of an alternative
     * navigation with clrWizardPreventDefaultNext.
     *
     * @name next
     * @memberof ClrWizard
     */
    next(skipChecksAndEmits?: boolean): void;
    /**
     * Includes a Boolean parameter that will skip checks and event emissions.
     * If true, the wizard will  complete and close regardless of the state of
     * its current page. This is useful for alternative navigation where event
     * emissions have already been done and firing them again may cause an event loop.
     *
     * If false, the wizard will execute default checks and emit events before
     * completing and closing.
     *
     * By default, finish() does not execute event emissions or checks because the
     * 80% case is that this method will be called as part of an alternative
     * navigation with clrWizardPreventDefaultNext.
     *
     * @name finish
     * @memberof ClrWizard
     */
    finish(skipChecksAndEmits?: boolean): void;
    /**
     * Does the work of finishing up the wizard and closing it but doesn't do the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling ClrWizard.finish(true) or ClrWizard.finish()
     * without a parameter.
     *
     * @name forceFinish
     * @memberof ClrWizard
     */
    forceFinish(): void;
    /**
     * Does the work of moving the wizard to the next page without the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling ClrWizard.next(true) or ClrWizard.next()
     * without a parameter.
     *
     * @name forceNext
     * @memberof ClrWizard
     */
    forceNext(): void;
    /**
     * Initiates the functionality that cancels and closes the wizard.
     *
     * Do not use this for an override of the cancel the functionality
     * with clrWizardPreventDefaultCancel, clrWizardPreventPageDefaultCancel,
     * or clrWizardPagePreventDefault because it will initiate the same checks
     * and event emissions that invoked your event handler.
     *
     * Use ClrWizard.close() instead.
     *
     * @name cancel
     * @memberof ClrWizard
     */
    cancel(): void;
    /**
     * Overrides behavior of the underlying modal to avoid collisions with
     * alternative cancel functionality.
     *
     * In most cases, use ClrWizard.cancel() instead.
     *
     * @name modalCancel
     * @memberof ClrWizard
     */
    modalCancel(): void;
    /**
     * Checks for alternative cancel flows defined at the current page or
     * wizard level. Performs a canceled if not. Emits events that initiate
     * the alternative cancel outputs (clrWizardPageOnCancel and
     * clrWizardOnCancel) if so.
     *
     * @name checkAndCancel
     * @memberof ClrWizard
     */
    checkAndCancel(): void;
    /**
     * Accepts the wizard ID as a string parameter and calls to WizardNavigationService
     * to navigate to the page with that ID. Navigation will invoke the wizard’s default
     * checks and event emissions.
     *
     * Probably less useful than calling directly to ClrWizard.navService.goTo() because the
     * nav service method can accept either a string ID or a page object.
     *
     * The format of the expected ID parameter can be found in the return of the
     * ClrWizardPage.id getter, usually prefixed with “clr-wizard-page-“ and then either a
     * numeric ID or the ID specified for the ClrWizardPage component’s “id” input.
     *
     * @name goTo
     *
     * @memberof ClrWizard
     */
    goTo(pageId: string): void;
    /**
     * A convenience function that calls to PageCollectionService.reset() and emits the
     * ClrWizard.onReset event.
     *
     * Reset sets all WizardPages to incomplete and sets the first page in the ClrWizard to
     * be the current page, essentially resetting the wizard navigation.
     *
     * Users would then use the onReset event to reset the data or model in their
     * host component.
     *
     * It could be useful to call a reset without firing the onReset event. To do this,
     * just call ClrWizard.pageCollection.reset() directly.
     *
     * @name reset
     * @memberof ClrWizard
     */
    reset(): void;
}
