/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { ButtonHubService } from './providers/button-hub.service';
import { PageCollectionService } from './providers/page-collection.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardPageButtons } from './wizard-page-buttons';
import { ClrWizardPageHeaderActions } from './wizard-page-header-actions';
import { ClrWizardPageNavTitle } from './wizard-page-navtitle';
import { ClrWizardPageTitle } from './wizard-page-title';
/** @type {?} */
let wizardPageIndex = 0;
/**
 * The ClrWizardPage component is responsible for displaying the content of each step
 * in the wizard workflow.
 *
 * ClrWizardPage component has hooks into the navigation service (ClrWizardPage.navService),
 * page collection (ClrWizardPage.pageCollection), and button service
 * (ClrWizardPage.buttonService). These three providers are shared across the components
 * within each instance of a Wizard.
 *
 */
export class ClrWizardPage {
    /**
     * Creates an instance of ClrWizardPage.
     *
     * \@memberof WizardPage
     * @param {?} navService
     * @param {?} pageCollection
     * @param {?} buttonService
     */
    constructor(navService, pageCollection, buttonService) {
        this.navService = navService;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        /**
         *
         * \@memberof WizardPage
         *
         */
        this._nextStepDisabled = false;
        /**
         * Emits when the value of ClrWizardPage.nextStepDisabled changes.
         * Should emit the new value of nextStepDisabled.
         *
         * \@memberof WizardPage
         *
         */
        this.nextStepDisabledChange = new EventEmitter();
        /**
         *
         * \@memberof WizardPage
         *
         */
        this._previousStepDisabled = false;
        /**
         * Emits when the value of ClrWizardPage.previousStepDisabled changes.
         * Should emit the new value of previousStepDisabled.
         *
         * \@memberof WizardPage
         *
         */
        this.previousStepDisabledChange = new EventEmitter();
        /**
         * Overrides all actions from the page level, so you can use an alternate function for
         * validation or data-munging with a ClrWizardPage.onCommit (clrWizardPageOnCommit output),
         * ClrWizardPage.onCancel (clrWizardPageOnCancel output), or one
         * of the granular page-level button click event emitters.
         *
         * \@memberof WizardPage
         *
         */
        this.preventDefault = false;
        /**
         *
         * \@memberof WizardPage
         *
         */
        this._stopCancel = false;
        /**
         *
         * \@memberof WizardPage
         *
         */
        this.stopCancelChange = new EventEmitter();
        /**
         *
         * \@memberof WizardPage
         *
         */
        this._stopNext = false;
        /**
         * An event emitter carried over from a legacy version of ClrWizardPage.
         * Fires an event on ClrWizardPage whenever the next or finish buttons
         * are clicked and the page is the current page of the Wizard.
         *
         * Note that this does not automatically emit an event when a custom
         * button is used in place of a next or finish button.
         *
         * \@memberof WizardPage
         *
         */
        this.onCommit = new EventEmitter(false);
        /**
         * Emits an event when ClrWizardPage becomes the current page of the
         * Wizard.
         *
         * \@memberof WizardPage
         *
         */
        this.onLoad = new EventEmitter();
        /**
         * Emits an event when the ClrWizardPage invokes the cancel routine for the wizard.
         *
         * Can be used in conjunction with the ClrWizardPage.stopCancel
         * (clrWizardPagePreventDefaultCancel) or ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) inputs to implement custom cancel
         * functionality at the page level. This is useful if you would like to do
         * validation, save data, or warn users before cancelling the wizard.
         *
         * Note that this requires you to call Wizard.close() from the host component.
         * This constitues a full replacement of the cancel functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.pageOnCancel = new EventEmitter();
        /**
         * Emits an event when the finish button is clicked and the ClrWizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom finish
         * functionality at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to complete
         * the wizard.
         *
         * Note that this requires you to call Wizard.finish() or Wizard.forceFinish()
         * from the host component. This combination creates a full replacement of
         * the finish functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.finishButtonClicked = new EventEmitter();
        /**
         * Emits an event when the previous button is clicked and the ClrWizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom backwards
         * navigation at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to go
         * backwards in the wizard.
         *
         * Note that this requires you to call Wizard.previous()
         * from the host component. This combination creates a full replacement of
         * the backwards navigation functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.previousButtonClicked = new EventEmitter();
        /**
         * Emits an event when the next button is clicked and the ClrWizardPage is
         * the wizard's current page.
         *
         * Can be used in conjunction with the ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * navigation at the page level. This is useful if you would like to do
         * validation, save data, or warn users before allowing them to go
         * to the next page in the wizard.
         *
         * Note that this requires you to call Wizard.forceNext() or Wizard.next()
         * from the host component. This combination creates a full replacement of
         * the forward navigation functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.nextButtonClicked = new EventEmitter();
        /**
         * Emits an event when a danger button is clicked and the ClrWizardPage is
         * the wizard's current page. By default, a danger button will act as
         * either a "next" or "finish" button depending on if the ClrWizardPage is the
         * last page or not.
         *
         * Can be used in conjunction with the ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * or finish navigation at the page level when the danger button is clicked.
         * This is useful if you would like to do validation, save data, or warn
         * users before allowing them to go to the next page in the wizard or
         * finish the wizard.
         *
         * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
         * Wizard.forceNext() or Wizard.next() from the host component. This
         * combination creates a full replacement of the forward navigation and
         * finish functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.dangerButtonClicked = new EventEmitter();
        /**
         * Emits an event when a next, finish, or danger button is clicked and the
         * ClrWizardPage is the wizard's current page.
         *
         * Can be used in conjunction with the ClrWizardPage.preventDefault
         * (clrWizardPagePagePreventDefault) input to implement custom forwards
         * or finish navigation at the page level, regardless of the type of
         * primary button.
         *
         * This is useful if you would like to do validation, save data, or warn
         * users before allowing them to go to the next page in the wizard or
         * finish the wizard.
         *
         * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
         * Wizard.forceNext() or Wizard.next() from the host component. This
         * combination creates a full replacement of the forward navigation and
         * finish functionality.
         *
         * \@memberof WizardPage
         *
         */
        this.primaryButtonClicked = new EventEmitter();
        this.customButtonClicked = new EventEmitter();
        /**
         * An input value that is used internally to generate the ClrWizardPage ID as
         * well as the step nav item ID.
         *
         * Typed as any because it should be able to accept numbers as well as
         * strings. Passing an index for wizard whose pages are created with an
         * ngFor loop is a common use case.
         *
         * \@memberof WizardPage
         *
         */
        this._id = (wizardPageIndex++).toString();
        /**
         *
         * \@memberof WizardPage
         *
         */
        this._complete = false;
    }
    /**
     * A getter that tells whether or not the wizard should be allowed
     * to move to the next page.
     *
     * Useful for in-page validation because it prevents forward navigation
     * and visibly disables the next button.
     *
     * Does not require that you re-implement navigation routines like you
     * would if you were using ClrWizardPage.preventDefault or
     * Wizard.preventDefault.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get nextStepDisabled() {
        return this._nextStepDisabled;
    }
    /**
     * Sets whether the page should allow forward navigation.
     *
     * \@memberof WizardPage
     *
     * @param {?} val
     * @return {?}
     */
    set nextStepDisabled(val) {
        /** @type {?} */
        const valBool = !!val;
        if (valBool !== this._nextStepDisabled) {
            this._nextStepDisabled = valBool;
            this.nextStepDisabledChange.emit(valBool);
        }
    }
    /**
     * A getter that tells whether or not the wizard should be allowed
     * to move to the previous page.
     *
     * Useful for in-page validation because it prevents backward navigation
     * and visibly disables the previous button.
     *
     * Does not require that you re-implement navigation routines like you
     * would if you were using ClrWizardPage.preventDefault or
     * Wizard.preventDefault.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get previousStepDisabled() {
        return this._previousStepDisabled;
    }
    /**
     * Sets whether the page should allow backward navigation.
     *
     * \@memberof WizardPage
     *
     * @param {?} val
     * @return {?}
     */
    set previousStepDisabled(val) {
        /** @type {?} */
        const valBool = !!val;
        if (valBool !== this._previousStepDisabled) {
            this._previousStepDisabled = valBool;
            this.previousStepDisabledChange.emit(valBool);
        }
    }
    /**
     * A getter that retrieves whether the page is preventing the cancel action.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get stopCancel() {
        return this._stopCancel;
    }
    /**
     * Overrides the cancel action from the page level. Allows you to use an
     * alternate function for validation or data-munging before cancelling the
     * wizard when combined with the ClrWizardPage.onCancel
     * (the clrWizardPageOnCancel output).
     *
     * Requires that you manually close the wizard from your host component,
     * usually with a call to Wizard.forceNext() or wizard.next();
     *
     * \@memberof ClrWizardPage
     * @param {?} val
     * @return {?}
     */
    set stopCancel(val) {
        /** @type {?} */
        const valBool = !!val;
        if (valBool !== this._stopCancel) {
            this._stopCancel = valBool;
            this.stopCancelChange.emit(valBool);
        }
    }
    /**
     * A getter that tells you whether the page is preventing the next action.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get stopNext() {
        return this._stopNext;
    }
    /**
     * Overrides forward navigation from the page level. Allows you to use an
     * alternate function for validation or data-munging before moving the
     * wizard to the next pagewhen combined with the ClrWizardPage.onCommit
     * (clrWizardPageOnCommit) or ClrWizardPage.nextButtonClicked
     * (clrWizardPageNext) outputs.
     *
     * Requires that you manually tell the wizard to navigate forward from
     * the hostComponent, usually with a call to Wizard.forceNext() or
     * wizard.next();
     *
     * \@memberof ClrWizardPage
     * @param {?} val
     * @return {?}
     */
    set stopNext(val) {
        /** @type {?} */
        const valBool = !!val;
        if (valBool !== this._stopNext) {
            this._stopNext = valBool;
        }
    }
    /**
     * A read-only getter that generates an ID string for the wizard page from
     * either the value passed to the ClrWizardPage "id" input or a wizard page
     * counter shared across all wizard pages in the application.
     *
     * Note that the value passed into the ID input Will be prefixed with
     * "clr-wizard-page-".
     *
     * \@readonly
     *
     * \@memberof ClrWizardPage
     * @return {?}
     */
    get id() {
        // covers things like null, undefined, false, and empty string
        // while allowing zero to pass
        /** @type {?} */
        const idIsNonZeroFalsy = !this._id && this._id !== 0;
        // in addition to non-zero falsy we also want to make sure _id is not a negative
        // number.
        if (idIsNonZeroFalsy || this._id < 0) {
            // guard here in the event that input becomes undefined or null by accident
            this._id = (wizardPageIndex++).toString();
        }
        return `clr-wizard-page-${this._id}`;
    }
    /**
     * A read-only getter that serves as a convenience for those who would rather
     * not think in the terms of !ClrWizardPage.nextStepDisabled. For some use cases,
     * ClrWizardPage.readyToComplete is more logical and declarative.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get readyToComplete() {
        return !this.nextStepDisabled;
    }
    /**
     * A page is marked as completed if it is both readyToComplete and completed,
     * as in the next or finish action has been executed while this page was current.
     *
     * Note there is and open question about how to handle pages that are marked
     * complete but who are no longer readyToComplete. This might indicate an error
     * state for the ClrWizardPage. Currently, the wizard does not acknowledge this state
     * and only returns that the page is incomplete.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get completed() {
        return this._complete && this.readyToComplete;
        // FOR V2: UNWIND COMPLETED, READYTOCOMPLETE, AND ERRORS
        // SUCH THAT ERRORS IS ITS OWN INPUT. IF A STEP IS
        // INCOMPLETE AND ERRORED, ERRORED WILL NOT SHOW.
        // FIRST QUESTION: AM I GREY OR COLORED?
        // SECOND QUESTION: AM I GREEN OR RED?
    }
    /**
     * A ClrWizardPage can be manually set to completed using this boolean setter.
     * It is recommended that users rely on the convenience functions in the wizard
     * and navigation service instead of manually setting pages’ completion state.
     *
     * \@memberof ClrWizardPage
     * @param {?} value
     * @return {?}
     */
    set completed(value) {
        this._complete = value;
    }
    /**
     * Checks with the navigation service to see if it is the current page.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get current() {
        return this.navService.currentPage === this;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return !this.enabled;
    }
    /**
     * A read-only getter that returns whether or not the page is navigable
     * in the wizard. A wizard page can be navigated to if it is completed
     * or the page before it is completed.
     *
     * This getter handles the logic for enabling or disabling the links in
     * the step nav on the left Side of the wizard.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get enabled() {
        return this.current || this.completed || this.previousCompleted;
    }
    /**
     * A read-only getter that returns whether or not the page before this
     * ClrWizardPage is completed. This is useful for determining whether or not
     * a page is navigable if it is not current or already completed.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get previousCompleted() {
        /** @type {?} */
        const previousPage = this.pageCollection.getPreviousPage(this);
        if (!previousPage) {
            return true;
        }
        return previousPage.completed;
    }
    /**
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get title() {
        return this.pageTitle.pageTitleTemplateRef;
    }
    /**
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get navTitle() {
        if (this.pageNavTitle) {
            return this.pageNavTitle.pageNavTitleTemplateRef;
        }
        return this.pageTitle.pageTitleTemplateRef;
    }
    /**
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get headerActions() {
        if (!this._headerActions) {
            return;
        }
        return this._headerActions.pageHeaderActionsTemplateRef;
    }
    /**
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get hasHeaderActions() {
        return !!this._headerActions;
    }
    /**
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get buttons() {
        if (!this._buttons) {
            return;
        }
        return this._buttons.pageButtonsTemplateRef;
    }
    /**
     * A read-only getter that returns a boolean that says whether or
     * not the ClrWizardPage includes buttons. Used to determine if the
     * Wizard should override the default button set defined as
     * its direct children.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get hasButtons() {
        return !!this._buttons;
    }
    /**
     * Uses the nav service to make the ClrWizardPage the current page in the
     * wizard. Bypasses all checks but still emits the ClrWizardPage.onLoad
     * (clrWizardPageOnLoad) output.
     *
     * In most cases, it is better to use the default navigation functions
     * in Wizard.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    makeCurrent() {
        this.navService.currentPage = this;
    }
    /**
     * Links the nav service and establishes the current page if one is not defined.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const navService = this.navService;
        if (!navService.currentPage && !navService.navServiceLoaded) {
            this.makeCurrent();
            this.navService.navServiceLoaded = true;
        }
    }
    /**
     * A read-only getter that returns the id used by the step nav item associated with the page.
     *
     * ClrWizardPage needs this ID string for aria information.
     *
     * \@memberof WizardPage
     *
     * @return {?}
     */
    get stepItemId() {
        return this.pageCollection.getStepItemIdForPage(this);
    }
}
ClrWizardPage.decorators = [
    { type: Component, args: [{
                selector: 'clr-wizard-page',
                template: '<ng-content></ng-content>',
                host: {
                    '[id]': 'id',
                    role: 'tabpanel',
                    '[attr.aria-hidden]': '!current',
                    '[attr.aria-labelledby]': 'stepItemId',
                    '[class.active]': 'current',
                    '[class.clr-wizard-page]': 'true',
                }
            }] }
];
/** @nocollapse */
ClrWizardPage.ctorParameters = () => [
    { type: WizardNavigationService },
    { type: PageCollectionService },
    { type: ButtonHubService }
];
ClrWizardPage.propDecorators = {
    pageTitle: [{ type: ContentChild, args: [ClrWizardPageTitle,] }],
    pageNavTitle: [{ type: ContentChild, args: [ClrWizardPageNavTitle,] }],
    _buttons: [{ type: ContentChild, args: [ClrWizardPageButtons,] }],
    _headerActions: [{ type: ContentChild, args: [ClrWizardPageHeaderActions,] }],
    nextStepDisabled: [{ type: Input, args: ['clrWizardPageNextDisabled',] }],
    nextStepDisabledChange: [{ type: Output, args: ['clrWizardPageNextDisabledChange',] }],
    previousStepDisabled: [{ type: Input, args: ['clrWizardPagePreviousDisabled',] }],
    previousStepDisabledChange: [{ type: Output, args: ['clrWizardPagePreviousDisabledChange',] }],
    preventDefault: [{ type: Input, args: ['clrWizardPagePreventDefault',] }],
    stopCancel: [{ type: Input, args: ['clrWizardPagePreventDefaultCancel',] }],
    stopCancelChange: [{ type: Output, args: ['clrWizardPagePreventDefaultCancelChange',] }],
    stopNext: [{ type: Input, args: ['clrWizardPagePreventDefaultNext',] }],
    onCommit: [{ type: Output, args: ['clrWizardPageOnCommit',] }],
    onLoad: [{ type: Output, args: ['clrWizardPageOnLoad',] }],
    pageOnCancel: [{ type: Output, args: ['clrWizardPageOnCancel',] }],
    finishButtonClicked: [{ type: Output, args: ['clrWizardPageFinish',] }],
    previousButtonClicked: [{ type: Output, args: ['clrWizardPagePrevious',] }],
    nextButtonClicked: [{ type: Output, args: ['clrWizardPageNext',] }],
    dangerButtonClicked: [{ type: Output, args: ['clrWizardPageDanger',] }],
    primaryButtonClicked: [{ type: Output, args: ['clrWizardPagePrimary',] }],
    customButtonClicked: [{ type: Output, args: ['clrWizardPageCustomButton',] }],
    _id: [{ type: Input, args: ['id',] }]
};
if (false) {
    /**
     * Contains a reference to the page title which is used for a number
     * of different tasks for display in the wizard.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.pageTitle;
    /**
     * Contains a reference to the desired title for the page's step in the
     * navigation on the left side of the wizard. Can be projected to change the
     * navigation link's text.
     *
     * If not defined, then ClrWizardPage.pageTitle will be displayed in the stepnav.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.pageNavTitle;
    /**
     * Contains a reference to the buttons defined within the page. If not defined,
     * the wizard defaults to the set of buttons defined as a direct child of the
     * wizard.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._buttons;
    /**
     * Contains a reference to the header actions defined within the page. If not defined,
     * the wizard defaults to the set of header actions defined as a direct child of the
     * wizard.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._headerActions;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._nextStepDisabled;
    /**
     * Emits when the value of ClrWizardPage.nextStepDisabled changes.
     * Should emit the new value of nextStepDisabled.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.nextStepDisabledChange;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._previousStepDisabled;
    /**
     * Emits when the value of ClrWizardPage.previousStepDisabled changes.
     * Should emit the new value of previousStepDisabled.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.previousStepDisabledChange;
    /**
     * Overrides all actions from the page level, so you can use an alternate function for
     * validation or data-munging with a ClrWizardPage.onCommit (clrWizardPageOnCommit output),
     * ClrWizardPage.onCancel (clrWizardPageOnCancel output), or one
     * of the granular page-level button click event emitters.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.preventDefault;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._stopCancel;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.stopCancelChange;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._stopNext;
    /**
     * An event emitter carried over from a legacy version of ClrWizardPage.
     * Fires an event on ClrWizardPage whenever the next or finish buttons
     * are clicked and the page is the current page of the Wizard.
     *
     * Note that this does not automatically emit an event when a custom
     * button is used in place of a next or finish button.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.onCommit;
    /**
     * Emits an event when ClrWizardPage becomes the current page of the
     * Wizard.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.onLoad;
    /**
     * Emits an event when the ClrWizardPage invokes the cancel routine for the wizard.
     *
     * Can be used in conjunction with the ClrWizardPage.stopCancel
     * (clrWizardPagePreventDefaultCancel) or ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) inputs to implement custom cancel
     * functionality at the page level. This is useful if you would like to do
     * validation, save data, or warn users before cancelling the wizard.
     *
     * Note that this requires you to call Wizard.close() from the host component.
     * This constitues a full replacement of the cancel functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.pageOnCancel;
    /**
     * Emits an event when the finish button is clicked and the ClrWizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom finish
     * functionality at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to complete
     * the wizard.
     *
     * Note that this requires you to call Wizard.finish() or Wizard.forceFinish()
     * from the host component. This combination creates a full replacement of
     * the finish functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.finishButtonClicked;
    /**
     * Emits an event when the previous button is clicked and the ClrWizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom backwards
     * navigation at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to go
     * backwards in the wizard.
     *
     * Note that this requires you to call Wizard.previous()
     * from the host component. This combination creates a full replacement of
     * the backwards navigation functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.previousButtonClicked;
    /**
     * Emits an event when the next button is clicked and the ClrWizardPage is
     * the wizard's current page.
     *
     * Can be used in conjunction with the ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * navigation at the page level. This is useful if you would like to do
     * validation, save data, or warn users before allowing them to go
     * to the next page in the wizard.
     *
     * Note that this requires you to call Wizard.forceNext() or Wizard.next()
     * from the host component. This combination creates a full replacement of
     * the forward navigation functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.nextButtonClicked;
    /**
     * Emits an event when a danger button is clicked and the ClrWizardPage is
     * the wizard's current page. By default, a danger button will act as
     * either a "next" or "finish" button depending on if the ClrWizardPage is the
     * last page or not.
     *
     * Can be used in conjunction with the ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * or finish navigation at the page level when the danger button is clicked.
     * This is useful if you would like to do validation, save data, or warn
     * users before allowing them to go to the next page in the wizard or
     * finish the wizard.
     *
     * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
     * Wizard.forceNext() or Wizard.next() from the host component. This
     * combination creates a full replacement of the forward navigation and
     * finish functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.dangerButtonClicked;
    /**
     * Emits an event when a next, finish, or danger button is clicked and the
     * ClrWizardPage is the wizard's current page.
     *
     * Can be used in conjunction with the ClrWizardPage.preventDefault
     * (clrWizardPagePagePreventDefault) input to implement custom forwards
     * or finish navigation at the page level, regardless of the type of
     * primary button.
     *
     * This is useful if you would like to do validation, save data, or warn
     * users before allowing them to go to the next page in the wizard or
     * finish the wizard.
     *
     * Note that this requires you to call Wizard.finish(), Wizard.forceFinish(),
     * Wizard.forceNext() or Wizard.next() from the host component. This
     * combination creates a full replacement of the forward navigation and
     * finish functionality.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype.primaryButtonClicked;
    /** @type {?} */
    ClrWizardPage.prototype.customButtonClicked;
    /**
     * An input value that is used internally to generate the ClrWizardPage ID as
     * well as the step nav item ID.
     *
     * Typed as any because it should be able to accept numbers as well as
     * strings. Passing an index for wizard whose pages are created with an
     * ngFor loop is a common use case.
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._id;
    /**
     *
     * \@memberof WizardPage
     *
     * @type {?}
     */
    ClrWizardPage.prototype._complete;
    /** @type {?} */
    ClrWizardPage.prototype.navService;
    /** @type {?} */
    ClrWizardPage.prototype.pageCollection;
    /** @type {?} */
    ClrWizardPage.prototype.buttonService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXBhZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJ3aXphcmQvd2l6YXJkLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRXJELGVBQWUsR0FBRyxDQUFDOzs7Ozs7Ozs7OztBQXdCdkIsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7OztJQU14QixZQUNVLFVBQW1DLEVBQ3BDLGNBQXFDLEVBQ3JDLGFBQStCO1FBRjlCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7Ozs7OztRQWlEaEMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztRQTBDUywyQkFBc0IsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7O1FBT3RHLDBCQUFxQixHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7UUEyQy9CLCtCQUEwQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7O1FBV2pDLG1CQUFj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U0FBQyxxQkFBcUI7MkJBaUI1QixNQUFNLFNBQUMsdUJBQXVCO2tDQW1COUIsTUFBTSxTQUFDLHFCQUFxQjtvQ0FtQjVCLE1BQU0sU0FBQyx1QkFBdUI7Z0NBbUI5QixNQUFNLFNBQUMsbUJBQW1CO2tDQXVCMUIsTUFBTSxTQUFDLHFCQUFxQjttQ0F1QjVCLE1BQU0sU0FBQyxzQkFBc0I7a0NBRTdCLE1BQU0sU0FBQywyQkFBMkI7a0JBYWxDLEtBQUssU0FBQyxJQUFJOzs7Ozs7Ozs7OztJQTdYWCxrQ0FBdUU7Ozs7Ozs7Ozs7OztJQVl2RSxxQ0FBZ0Y7Ozs7Ozs7Ozs7SUFVaEYsaUNBQTBFOzs7Ozs7Ozs7O0lBVTFFLHVDQUE0Rjs7Ozs7OztJQU81RiwwQ0FBa0M7Ozs7Ozs7OztJQTBDbEMsK0NBQThHOzs7Ozs7O0lBTzlHLDhDQUFzQzs7Ozs7Ozs7O0lBMEN0QyxtREFDOEU7Ozs7Ozs7Ozs7O0lBVzlFLHVDQUE2RTs7Ozs7OztJQU83RSxvQ0FBNEI7Ozs7Ozs7SUFxQzVCLHlDQUFnSDs7Ozs7OztJQU9oSCxrQ0FBMEI7Ozs7Ozs7Ozs7Ozs7SUE0QzFCLGlDQUFrRzs7Ozs7Ozs7O0lBU2xHLCtCQUFpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQmpGLHFDQUFnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CaEcsNENBQXFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJyRyw4Q0FBeUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQnpHLDBDQUFpRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QmpHLDRDQUFxRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QnJHLDZDQUFnRzs7SUFFaEcsNENBQW9HOzs7Ozs7Ozs7Ozs7O0lBYXBHLDRCQUF1RDs7Ozs7OztJQTZDdkQsa0NBQW1DOztJQXRiakMsbUNBQTJDOztJQUMzQyx1Q0FBNEM7O0lBQzVDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCdXR0b25IdWJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvYnV0dG9uLWh1Yi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3BhZ2UtY29sbGVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvd2l6YXJkLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDbHJXaXphcmRQYWdlQnV0dG9ucyB9IGZyb20gJy4vd2l6YXJkLXBhZ2UtYnV0dG9ucyc7XG5pbXBvcnQgeyBDbHJXaXphcmRQYWdlSGVhZGVyQWN0aW9ucyB9IGZyb20gJy4vd2l6YXJkLXBhZ2UtaGVhZGVyLWFjdGlvbnMnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkUGFnZU5hdlRpdGxlIH0gZnJvbSAnLi93aXphcmQtcGFnZS1uYXZ0aXRsZSc7XG5pbXBvcnQgeyBDbHJXaXphcmRQYWdlVGl0bGUgfSBmcm9tICcuL3dpemFyZC1wYWdlLXRpdGxlJztcblxubGV0IHdpemFyZFBhZ2VJbmRleCA9IDA7XG5cbi8qKlxuICogVGhlIENscldpemFyZFBhZ2UgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIHRoZSBjb250ZW50IG9mIGVhY2ggc3RlcFxuICogaW4gdGhlIHdpemFyZCB3b3JrZmxvdy5cbiAqXG4gKiBDbHJXaXphcmRQYWdlIGNvbXBvbmVudCBoYXMgaG9va3MgaW50byB0aGUgbmF2aWdhdGlvbiBzZXJ2aWNlIChDbHJXaXphcmRQYWdlLm5hdlNlcnZpY2UpLFxuICogcGFnZSBjb2xsZWN0aW9uIChDbHJXaXphcmRQYWdlLnBhZ2VDb2xsZWN0aW9uKSwgYW5kIGJ1dHRvbiBzZXJ2aWNlXG4gKiAoQ2xyV2l6YXJkUGFnZS5idXR0b25TZXJ2aWNlKS4gVGhlc2UgdGhyZWUgcHJvdmlkZXJzIGFyZSBzaGFyZWQgYWNyb3NzIHRoZSBjb21wb25lbnRzXG4gKiB3aXRoaW4gZWFjaCBpbnN0YW5jZSBvZiBhIFdpemFyZC5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nsci13aXphcmQtcGFnZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGhvc3Q6IHtcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgcm9sZTogJ3RhYnBhbmVsJyxcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFjdXJyZW50JyxcbiAgICAnW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XSc6ICdzdGVwSXRlbUlkJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnY3VycmVudCcsXG4gICAgJ1tjbGFzcy5jbHItd2l6YXJkLXBhZ2VdJzogJ3RydWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJXaXphcmRQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2xyV2l6YXJkUGFnZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2U2VydmljZTogV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIHBhZ2VDb2xsZWN0aW9uOiBQYWdlQ29sbGVjdGlvblNlcnZpY2UsXG4gICAgcHVibGljIGJ1dHRvblNlcnZpY2U6IEJ1dHRvbkh1YlNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBDb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgcGFnZSB0aXRsZSB3aGljaCBpcyB1c2VkIGZvciBhIG51bWJlclxuICAgKiBvZiBkaWZmZXJlbnQgdGFza3MgZm9yIGRpc3BsYXkgaW4gdGhlIHdpemFyZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoQ2xyV2l6YXJkUGFnZVRpdGxlKSBwdWJsaWMgcGFnZVRpdGxlOiBDbHJXaXphcmRQYWdlVGl0bGU7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSBkZXNpcmVkIHRpdGxlIGZvciB0aGUgcGFnZSdzIHN0ZXAgaW4gdGhlXG4gICAqIG5hdmlnYXRpb24gb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgd2l6YXJkLiBDYW4gYmUgcHJvamVjdGVkIHRvIGNoYW5nZSB0aGVcbiAgICogbmF2aWdhdGlvbiBsaW5rJ3MgdGV4dC5cbiAgICpcbiAgICogSWYgbm90IGRlZmluZWQsIHRoZW4gQ2xyV2l6YXJkUGFnZS5wYWdlVGl0bGUgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHN0ZXBuYXYuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBAQ29udGVudENoaWxkKENscldpemFyZFBhZ2VOYXZUaXRsZSkgcHVibGljIHBhZ2VOYXZUaXRsZTogQ2xyV2l6YXJkUGFnZU5hdlRpdGxlO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgYnV0dG9ucyBkZWZpbmVkIHdpdGhpbiB0aGUgcGFnZS4gSWYgbm90IGRlZmluZWQsXG4gICAqIHRoZSB3aXphcmQgZGVmYXVsdHMgdG8gdGhlIHNldCBvZiBidXR0b25zIGRlZmluZWQgYXMgYSBkaXJlY3QgY2hpbGQgb2YgdGhlXG4gICAqIHdpemFyZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoQ2xyV2l6YXJkUGFnZUJ1dHRvbnMpIHB1YmxpYyBfYnV0dG9uczogQ2xyV2l6YXJkUGFnZUJ1dHRvbnM7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSBoZWFkZXIgYWN0aW9ucyBkZWZpbmVkIHdpdGhpbiB0aGUgcGFnZS4gSWYgbm90IGRlZmluZWQsXG4gICAqIHRoZSB3aXphcmQgZGVmYXVsdHMgdG8gdGhlIHNldCBvZiBoZWFkZXIgYWN0aW9ucyBkZWZpbmVkIGFzIGEgZGlyZWN0IGNoaWxkIG9mIHRoZVxuICAgKiB3aXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBAQ29udGVudENoaWxkKENscldpemFyZFBhZ2VIZWFkZXJBY3Rpb25zKSBwdWJsaWMgX2hlYWRlckFjdGlvbnM6IENscldpemFyZFBhZ2VIZWFkZXJBY3Rpb25zO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfbmV4dFN0ZXBEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGdldHRlciB0aGF0IHRlbGxzIHdoZXRoZXIgb3Igbm90IHRoZSB3aXphcmQgc2hvdWxkIGJlIGFsbG93ZWRcbiAgICogdG8gbW92ZSB0byB0aGUgbmV4dCBwYWdlLlxuICAgKlxuICAgKiBVc2VmdWwgZm9yIGluLXBhZ2UgdmFsaWRhdGlvbiBiZWNhdXNlIGl0IHByZXZlbnRzIGZvcndhcmQgbmF2aWdhdGlvblxuICAgKiBhbmQgdmlzaWJseSBkaXNhYmxlcyB0aGUgbmV4dCBidXR0b24uXG4gICAqXG4gICAqIERvZXMgbm90IHJlcXVpcmUgdGhhdCB5b3UgcmUtaW1wbGVtZW50IG5hdmlnYXRpb24gcm91dGluZXMgbGlrZSB5b3VcbiAgICogd291bGQgaWYgeW91IHdlcmUgdXNpbmcgQ2xyV2l6YXJkUGFnZS5wcmV2ZW50RGVmYXVsdCBvclxuICAgKiBXaXphcmQucHJldmVudERlZmF1bHQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5leHRTdGVwRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRTdGVwRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB3aGV0aGVyIHRoZSBwYWdlIHNob3VsZCBhbGxvdyBmb3J3YXJkIG5hdmlnYXRpb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFBhZ2VOZXh0RGlzYWJsZWQnKVxuICBwdWJsaWMgc2V0IG5leHRTdGVwRGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmFsQm9vbCA9ICEhdmFsO1xuICAgIGlmICh2YWxCb29sICE9PSB0aGlzLl9uZXh0U3RlcERpc2FibGVkKSB7XG4gICAgICB0aGlzLl9uZXh0U3RlcERpc2FibGVkID0gdmFsQm9vbDtcbiAgICAgIHRoaXMubmV4dFN0ZXBEaXNhYmxlZENoYW5nZS5lbWl0KHZhbEJvb2wpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSB2YWx1ZSBvZiBDbHJXaXphcmRQYWdlLm5leHRTdGVwRGlzYWJsZWQgY2hhbmdlcy5cbiAgICogU2hvdWxkIGVtaXQgdGhlIG5ldyB2YWx1ZSBvZiBuZXh0U3RlcERpc2FibGVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkUGFnZU5leHREaXNhYmxlZENoYW5nZScpIG5leHRTdGVwRGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHByaXZhdGUgX3ByZXZpb3VzU3RlcERpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZ2V0dGVyIHRoYXQgdGVsbHMgd2hldGhlciBvciBub3QgdGhlIHdpemFyZCBzaG91bGQgYmUgYWxsb3dlZFxuICAgKiB0byBtb3ZlIHRvIHRoZSBwcmV2aW91cyBwYWdlLlxuICAgKlxuICAgKiBVc2VmdWwgZm9yIGluLXBhZ2UgdmFsaWRhdGlvbiBiZWNhdXNlIGl0IHByZXZlbnRzIGJhY2t3YXJkIG5hdmlnYXRpb25cbiAgICogYW5kIHZpc2libHkgZGlzYWJsZXMgdGhlIHByZXZpb3VzIGJ1dHRvbi5cbiAgICpcbiAgICogRG9lcyBub3QgcmVxdWlyZSB0aGF0IHlvdSByZS1pbXBsZW1lbnQgbmF2aWdhdGlvbiByb3V0aW5lcyBsaWtlIHlvdVxuICAgKiB3b3VsZCBpZiB5b3Ugd2VyZSB1c2luZyBDbHJXaXphcmRQYWdlLnByZXZlbnREZWZhdWx0IG9yXG4gICAqIFdpemFyZC5wcmV2ZW50RGVmYXVsdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgcHJldmlvdXNTdGVwRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzU3RlcERpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgYWxsb3cgYmFja3dhcmQgbmF2aWdhdGlvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY2xyV2l6YXJkUGFnZVByZXZpb3VzRGlzYWJsZWQnKVxuICBwdWJsaWMgc2V0IHByZXZpb3VzU3RlcERpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IHZhbEJvb2wgPSAhIXZhbDtcbiAgICBpZiAodmFsQm9vbCAhPT0gdGhpcy5fcHJldmlvdXNTdGVwRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU3RlcERpc2FibGVkID0gdmFsQm9vbDtcbiAgICAgIHRoaXMucHJldmlvdXNTdGVwRGlzYWJsZWRDaGFuZ2UuZW1pdCh2YWxCb29sKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0aGUgdmFsdWUgb2YgQ2xyV2l6YXJkUGFnZS5wcmV2aW91c1N0ZXBEaXNhYmxlZCBjaGFuZ2VzLlxuICAgKiBTaG91bGQgZW1pdCB0aGUgbmV3IHZhbHVlIG9mIHByZXZpb3VzU3RlcERpc2FibGVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkUGFnZVByZXZpb3VzRGlzYWJsZWRDaGFuZ2UnKVxuICBwdWJsaWMgcHJldmlvdXNTdGVwRGlzYWJsZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogT3ZlcnJpZGVzIGFsbCBhY3Rpb25zIGZyb20gdGhlIHBhZ2UgbGV2ZWwsIHNvIHlvdSBjYW4gdXNlIGFuIGFsdGVybmF0ZSBmdW5jdGlvbiBmb3JcbiAgICogdmFsaWRhdGlvbiBvciBkYXRhLW11bmdpbmcgd2l0aCBhIENscldpemFyZFBhZ2Uub25Db21taXQgKGNscldpemFyZFBhZ2VPbkNvbW1pdCBvdXRwdXQpLFxuICAgKiBDbHJXaXphcmRQYWdlLm9uQ2FuY2VsIChjbHJXaXphcmRQYWdlT25DYW5jZWwgb3V0cHV0KSwgb3Igb25lXG4gICAqIG9mIHRoZSBncmFudWxhciBwYWdlLWxldmVsIGJ1dHRvbiBjbGljayBldmVudCBlbWl0dGVycy5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY2xyV2l6YXJkUGFnZVByZXZlbnREZWZhdWx0JykgcHVibGljIHByZXZlbnREZWZhdWx0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9zdG9wQ2FuY2VsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZ2V0dGVyIHRoYXQgcmV0cmlldmVzIHdoZXRoZXIgdGhlIHBhZ2UgaXMgcHJldmVudGluZyB0aGUgY2FuY2VsIGFjdGlvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RvcENhbmNlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcENhbmNlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGNhbmNlbCBhY3Rpb24gZnJvbSB0aGUgcGFnZSBsZXZlbC4gQWxsb3dzIHlvdSB0byB1c2UgYW5cbiAgICogYWx0ZXJuYXRlIGZ1bmN0aW9uIGZvciB2YWxpZGF0aW9uIG9yIGRhdGEtbXVuZ2luZyBiZWZvcmUgY2FuY2VsbGluZyB0aGVcbiAgICogd2l6YXJkIHdoZW4gY29tYmluZWQgd2l0aCB0aGUgQ2xyV2l6YXJkUGFnZS5vbkNhbmNlbFxuICAgKiAodGhlIGNscldpemFyZFBhZ2VPbkNhbmNlbCBvdXRwdXQpLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGF0IHlvdSBtYW51YWxseSBjbG9zZSB0aGUgd2l6YXJkIGZyb20geW91ciBob3N0IGNvbXBvbmVudCxcbiAgICogdXN1YWxseSB3aXRoIGEgY2FsbCB0byBXaXphcmQuZm9yY2VOZXh0KCkgb3Igd2l6YXJkLm5leHQoKTtcbiAgICpcbiAgICogQG1lbWJlcm9mIENscldpemFyZFBhZ2VcbiAgICovXG4gIEBJbnB1dCgnY2xyV2l6YXJkUGFnZVByZXZlbnREZWZhdWx0Q2FuY2VsJylcbiAgcHVibGljIHNldCBzdG9wQ2FuY2VsKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IHZhbEJvb2wgPSAhIXZhbDtcbiAgICBpZiAodmFsQm9vbCAhPT0gdGhpcy5fc3RvcENhbmNlbCkge1xuICAgICAgdGhpcy5fc3RvcENhbmNlbCA9IHZhbEJvb2w7XG4gICAgICB0aGlzLnN0b3BDYW5jZWxDaGFuZ2UuZW1pdCh2YWxCb29sKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBPdXRwdXQoJ2NscldpemFyZFBhZ2VQcmV2ZW50RGVmYXVsdENhbmNlbENoYW5nZScpIHN0b3BDYW5jZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHByaXZhdGUgX3N0b3BOZXh0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZ2V0dGVyIHRoYXQgdGVsbHMgeW91IHdoZXRoZXIgdGhlIHBhZ2UgaXMgcHJldmVudGluZyB0aGUgbmV4dCBhY3Rpb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0b3BOZXh0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdG9wTmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgZm9yd2FyZCBuYXZpZ2F0aW9uIGZyb20gdGhlIHBhZ2UgbGV2ZWwuIEFsbG93cyB5b3UgdG8gdXNlIGFuXG4gICAqIGFsdGVybmF0ZSBmdW5jdGlvbiBmb3IgdmFsaWRhdGlvbiBvciBkYXRhLW11bmdpbmcgYmVmb3JlIG1vdmluZyB0aGVcbiAgICogd2l6YXJkIHRvIHRoZSBuZXh0IHBhZ2V3aGVuIGNvbWJpbmVkIHdpdGggdGhlIENscldpemFyZFBhZ2Uub25Db21taXRcbiAgICogKGNscldpemFyZFBhZ2VPbkNvbW1pdCkgb3IgQ2xyV2l6YXJkUGFnZS5uZXh0QnV0dG9uQ2xpY2tlZFxuICAgKiAoY2xyV2l6YXJkUGFnZU5leHQpIG91dHB1dHMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoYXQgeW91IG1hbnVhbGx5IHRlbGwgdGhlIHdpemFyZCB0byBuYXZpZ2F0ZSBmb3J3YXJkIGZyb21cbiAgICogdGhlIGhvc3RDb21wb25lbnQsIHVzdWFsbHkgd2l0aCBhIGNhbGwgdG8gV2l6YXJkLmZvcmNlTmV4dCgpIG9yXG4gICAqIHdpemFyZC5uZXh0KCk7XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRQYWdlXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFBhZ2VQcmV2ZW50RGVmYXVsdE5leHQnKVxuICBwdWJsaWMgc2V0IHN0b3BOZXh0KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IHZhbEJvb2wgPSAhIXZhbDtcbiAgICBpZiAodmFsQm9vbCAhPT0gdGhpcy5fc3RvcE5leHQpIHtcbiAgICAgIHRoaXMuX3N0b3BOZXh0ID0gdmFsQm9vbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQW4gZXZlbnQgZW1pdHRlciBjYXJyaWVkIG92ZXIgZnJvbSBhIGxlZ2FjeSB2ZXJzaW9uIG9mIENscldpemFyZFBhZ2UuXG4gICAqIEZpcmVzIGFuIGV2ZW50IG9uIENscldpemFyZFBhZ2Ugd2hlbmV2ZXIgdGhlIG5leHQgb3IgZmluaXNoIGJ1dHRvbnNcbiAgICogYXJlIGNsaWNrZWQgYW5kIHRoZSBwYWdlIGlzIHRoZSBjdXJyZW50IHBhZ2Ugb2YgdGhlIFdpemFyZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgZG9lcyBub3QgYXV0b21hdGljYWxseSBlbWl0IGFuIGV2ZW50IHdoZW4gYSBjdXN0b21cbiAgICogYnV0dG9uIGlzIHVzZWQgaW4gcGxhY2Ugb2YgYSBuZXh0IG9yIGZpbmlzaCBidXR0b24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCdjbHJXaXphcmRQYWdlT25Db21taXQnKSBvbkNvbW1pdDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIENscldpemFyZFBhZ2UgYmVjb21lcyB0aGUgY3VycmVudCBwYWdlIG9mIHRoZVxuICAgKiBXaXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCdjbHJXaXphcmRQYWdlT25Mb2FkJykgb25Mb2FkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgQ2xyV2l6YXJkUGFnZSBpbnZva2VzIHRoZSBjYW5jZWwgcm91dGluZSBmb3IgdGhlIHdpemFyZC5cbiAgICpcbiAgICogQ2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ2xyV2l6YXJkUGFnZS5zdG9wQ2FuY2VsXG4gICAqIChjbHJXaXphcmRQYWdlUHJldmVudERlZmF1bHRDYW5jZWwpIG9yIENscldpemFyZFBhZ2UucHJldmVudERlZmF1bHRcbiAgICogKGNscldpemFyZFBhZ2VQYWdlUHJldmVudERlZmF1bHQpIGlucHV0cyB0byBpbXBsZW1lbnQgY3VzdG9tIGNhbmNlbFxuICAgKiBmdW5jdGlvbmFsaXR5IGF0IHRoZSBwYWdlIGxldmVsLiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd291bGQgbGlrZSB0byBkb1xuICAgKiB2YWxpZGF0aW9uLCBzYXZlIGRhdGEsIG9yIHdhcm4gdXNlcnMgYmVmb3JlIGNhbmNlbGxpbmcgdGhlIHdpemFyZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgcmVxdWlyZXMgeW91IHRvIGNhbGwgV2l6YXJkLmNsb3NlKCkgZnJvbSB0aGUgaG9zdCBjb21wb25lbnQuXG4gICAqIFRoaXMgY29uc3RpdHVlcyBhIGZ1bGwgcmVwbGFjZW1lbnQgb2YgdGhlIGNhbmNlbCBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkUGFnZU9uQ2FuY2VsJykgcGFnZU9uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8Q2xyV2l6YXJkUGFnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGZpbmlzaCBidXR0b24gaXMgY2xpY2tlZCBhbmQgdGhlIENscldpemFyZFBhZ2UgaXNcbiAgICogdGhlIHdpemFyZCdzIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQ2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ2xyV2l6YXJkUGFnZS5wcmV2ZW50RGVmYXVsdFxuICAgKiAoY2xyV2l6YXJkUGFnZVBhZ2VQcmV2ZW50RGVmYXVsdCkgaW5wdXQgdG8gaW1wbGVtZW50IGN1c3RvbSBmaW5pc2hcbiAgICogZnVuY3Rpb25hbGl0eSBhdCB0aGUgcGFnZSBsZXZlbC4gVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdvdWxkIGxpa2UgdG8gZG9cbiAgICogdmFsaWRhdGlvbiwgc2F2ZSBkYXRhLCBvciB3YXJuIHVzZXJzIGJlZm9yZSBhbGxvd2luZyB0aGVtIHRvIGNvbXBsZXRlXG4gICAqIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIHJlcXVpcmVzIHlvdSB0byBjYWxsIFdpemFyZC5maW5pc2goKSBvciBXaXphcmQuZm9yY2VGaW5pc2goKVxuICAgKiBmcm9tIHRoZSBob3N0IGNvbXBvbmVudC4gVGhpcyBjb21iaW5hdGlvbiBjcmVhdGVzIGEgZnVsbCByZXBsYWNlbWVudCBvZlxuICAgKiB0aGUgZmluaXNoIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCdjbHJXaXphcmRQYWdlRmluaXNoJykgZmluaXNoQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENscldpemFyZFBhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwcmV2aW91cyBidXR0b24gaXMgY2xpY2tlZCBhbmQgdGhlIENscldpemFyZFBhZ2UgaXNcbiAgICogdGhlIHdpemFyZCdzIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQ2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ2xyV2l6YXJkUGFnZS5wcmV2ZW50RGVmYXVsdFxuICAgKiAoY2xyV2l6YXJkUGFnZVBhZ2VQcmV2ZW50RGVmYXVsdCkgaW5wdXQgdG8gaW1wbGVtZW50IGN1c3RvbSBiYWNrd2FyZHNcbiAgICogbmF2aWdhdGlvbiBhdCB0aGUgcGFnZSBsZXZlbC4gVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdvdWxkIGxpa2UgdG8gZG9cbiAgICogdmFsaWRhdGlvbiwgc2F2ZSBkYXRhLCBvciB3YXJuIHVzZXJzIGJlZm9yZSBhbGxvd2luZyB0aGVtIHRvIGdvXG4gICAqIGJhY2t3YXJkcyBpbiB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyByZXF1aXJlcyB5b3UgdG8gY2FsbCBXaXphcmQucHJldmlvdXMoKVxuICAgKiBmcm9tIHRoZSBob3N0IGNvbXBvbmVudC4gVGhpcyBjb21iaW5hdGlvbiBjcmVhdGVzIGEgZnVsbCByZXBsYWNlbWVudCBvZlxuICAgKiB0aGUgYmFja3dhcmRzIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBPdXRwdXQoJ2NscldpemFyZFBhZ2VQcmV2aW91cycpIHByZXZpb3VzQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPENscldpemFyZFBhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkIGFuZCB0aGUgQ2xyV2l6YXJkUGFnZSBpc1xuICAgKiB0aGUgd2l6YXJkJ3MgY3VycmVudCBwYWdlLlxuICAgKlxuICAgKiBDYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDbHJXaXphcmRQYWdlLnByZXZlbnREZWZhdWx0XG4gICAqIChjbHJXaXphcmRQYWdlUGFnZVByZXZlbnREZWZhdWx0KSBpbnB1dCB0byBpbXBsZW1lbnQgY3VzdG9tIGZvcndhcmRzXG4gICAqIG5hdmlnYXRpb24gYXQgdGhlIHBhZ2UgbGV2ZWwuIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGRvXG4gICAqIHZhbGlkYXRpb24sIHNhdmUgZGF0YSwgb3Igd2FybiB1c2VycyBiZWZvcmUgYWxsb3dpbmcgdGhlbSB0byBnb1xuICAgKiB0byB0aGUgbmV4dCBwYWdlIGluIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIHJlcXVpcmVzIHlvdSB0byBjYWxsIFdpemFyZC5mb3JjZU5leHQoKSBvciBXaXphcmQubmV4dCgpXG4gICAqIGZyb20gdGhlIGhvc3QgY29tcG9uZW50LiBUaGlzIGNvbWJpbmF0aW9uIGNyZWF0ZXMgYSBmdWxsIHJlcGxhY2VtZW50IG9mXG4gICAqIHRoZSBmb3J3YXJkIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBPdXRwdXQoJ2NscldpemFyZFBhZ2VOZXh0JykgbmV4dEJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxDbHJXaXphcmRQYWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhIGRhbmdlciBidXR0b24gaXMgY2xpY2tlZCBhbmQgdGhlIENscldpemFyZFBhZ2UgaXNcbiAgICogdGhlIHdpemFyZCdzIGN1cnJlbnQgcGFnZS4gQnkgZGVmYXVsdCwgYSBkYW5nZXIgYnV0dG9uIHdpbGwgYWN0IGFzXG4gICAqIGVpdGhlciBhIFwibmV4dFwiIG9yIFwiZmluaXNoXCIgYnV0dG9uIGRlcGVuZGluZyBvbiBpZiB0aGUgQ2xyV2l6YXJkUGFnZSBpcyB0aGVcbiAgICogbGFzdCBwYWdlIG9yIG5vdC5cbiAgICpcbiAgICogQ2FuIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgQ2xyV2l6YXJkUGFnZS5wcmV2ZW50RGVmYXVsdFxuICAgKiAoY2xyV2l6YXJkUGFnZVBhZ2VQcmV2ZW50RGVmYXVsdCkgaW5wdXQgdG8gaW1wbGVtZW50IGN1c3RvbSBmb3J3YXJkc1xuICAgKiBvciBmaW5pc2ggbmF2aWdhdGlvbiBhdCB0aGUgcGFnZSBsZXZlbCB3aGVuIHRoZSBkYW5nZXIgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGRvIHZhbGlkYXRpb24sIHNhdmUgZGF0YSwgb3Igd2FyblxuICAgKiB1c2VycyBiZWZvcmUgYWxsb3dpbmcgdGhlbSB0byBnbyB0byB0aGUgbmV4dCBwYWdlIGluIHRoZSB3aXphcmQgb3JcbiAgICogZmluaXNoIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIHJlcXVpcmVzIHlvdSB0byBjYWxsIFdpemFyZC5maW5pc2goKSwgV2l6YXJkLmZvcmNlRmluaXNoKCksXG4gICAqIFdpemFyZC5mb3JjZU5leHQoKSBvciBXaXphcmQubmV4dCgpIGZyb20gdGhlIGhvc3QgY29tcG9uZW50LiBUaGlzXG4gICAqIGNvbWJpbmF0aW9uIGNyZWF0ZXMgYSBmdWxsIHJlcGxhY2VtZW50IG9mIHRoZSBmb3J3YXJkIG5hdmlnYXRpb24gYW5kXG4gICAqIGZpbmlzaCBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkUGFnZURhbmdlcicpIGRhbmdlckJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxDbHJXaXphcmRQYWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiBhIG5leHQsIGZpbmlzaCwgb3IgZGFuZ2VyIGJ1dHRvbiBpcyBjbGlja2VkIGFuZCB0aGVcbiAgICogQ2xyV2l6YXJkUGFnZSBpcyB0aGUgd2l6YXJkJ3MgY3VycmVudCBwYWdlLlxuICAgKlxuICAgKiBDYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBDbHJXaXphcmRQYWdlLnByZXZlbnREZWZhdWx0XG4gICAqIChjbHJXaXphcmRQYWdlUGFnZVByZXZlbnREZWZhdWx0KSBpbnB1dCB0byBpbXBsZW1lbnQgY3VzdG9tIGZvcndhcmRzXG4gICAqIG9yIGZpbmlzaCBuYXZpZ2F0aW9uIGF0IHRoZSBwYWdlIGxldmVsLCByZWdhcmRsZXNzIG9mIHRoZSB0eXBlIG9mXG4gICAqIHByaW1hcnkgYnV0dG9uLlxuICAgKlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd291bGQgbGlrZSB0byBkbyB2YWxpZGF0aW9uLCBzYXZlIGRhdGEsIG9yIHdhcm5cbiAgICogdXNlcnMgYmVmb3JlIGFsbG93aW5nIHRoZW0gdG8gZ28gdG8gdGhlIG5leHQgcGFnZSBpbiB0aGUgd2l6YXJkIG9yXG4gICAqIGZpbmlzaCB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyByZXF1aXJlcyB5b3UgdG8gY2FsbCBXaXphcmQuZmluaXNoKCksIFdpemFyZC5mb3JjZUZpbmlzaCgpLFxuICAgKiBXaXphcmQuZm9yY2VOZXh0KCkgb3IgV2l6YXJkLm5leHQoKSBmcm9tIHRoZSBob3N0IGNvbXBvbmVudC4gVGhpc1xuICAgKiBjb21iaW5hdGlvbiBjcmVhdGVzIGEgZnVsbCByZXBsYWNlbWVudCBvZiB0aGUgZm9yd2FyZCBuYXZpZ2F0aW9uIGFuZFxuICAgKiBmaW5pc2ggZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIEBPdXRwdXQoJ2NscldpemFyZFBhZ2VQcmltYXJ5JykgcHJpbWFyeUJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoJ2NscldpemFyZFBhZ2VDdXN0b21CdXR0b24nKSBjdXN0b21CdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQW4gaW5wdXQgdmFsdWUgdGhhdCBpcyB1c2VkIGludGVybmFsbHkgdG8gZ2VuZXJhdGUgdGhlIENscldpemFyZFBhZ2UgSUQgYXNcbiAgICogd2VsbCBhcyB0aGUgc3RlcCBuYXYgaXRlbSBJRC5cbiAgICpcbiAgICogVHlwZWQgYXMgYW55IGJlY2F1c2UgaXQgc2hvdWxkIGJlIGFibGUgdG8gYWNjZXB0IG51bWJlcnMgYXMgd2VsbCBhc1xuICAgKiBzdHJpbmdzLiBQYXNzaW5nIGFuIGluZGV4IGZvciB3aXphcmQgd2hvc2UgcGFnZXMgYXJlIGNyZWF0ZWQgd2l0aCBhblxuICAgKiBuZ0ZvciBsb29wIGlzIGEgY29tbW9uIHVzZSBjYXNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgQElucHV0KCdpZCcpIF9pZDogYW55ID0gKHdpemFyZFBhZ2VJbmRleCsrKS50b1N0cmluZygpO1xuXG4gIC8qKlxuICAgKiBBIHJlYWQtb25seSBnZXR0ZXIgdGhhdCBnZW5lcmF0ZXMgYW4gSUQgc3RyaW5nIGZvciB0aGUgd2l6YXJkIHBhZ2UgZnJvbVxuICAgKiBlaXRoZXIgdGhlIHZhbHVlIHBhc3NlZCB0byB0aGUgQ2xyV2l6YXJkUGFnZSBcImlkXCIgaW5wdXQgb3IgYSB3aXphcmQgcGFnZVxuICAgKiBjb3VudGVyIHNoYXJlZCBhY3Jvc3MgYWxsIHdpemFyZCBwYWdlcyBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgdmFsdWUgcGFzc2VkIGludG8gdGhlIElEIGlucHV0IFdpbGwgYmUgcHJlZml4ZWQgd2l0aFxuICAgKiBcImNsci13aXphcmQtcGFnZS1cIi5cbiAgICpcbiAgICogQHJlYWRvbmx5XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRQYWdlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIC8vIGNvdmVycyB0aGluZ3MgbGlrZSBudWxsLCB1bmRlZmluZWQsIGZhbHNlLCBhbmQgZW1wdHkgc3RyaW5nXG4gICAgLy8gd2hpbGUgYWxsb3dpbmcgemVybyB0byBwYXNzXG4gICAgY29uc3QgaWRJc05vblplcm9GYWxzeSA9ICF0aGlzLl9pZCAmJiB0aGlzLl9pZCAhPT0gMDtcblxuICAgIC8vIGluIGFkZGl0aW9uIHRvIG5vbi16ZXJvIGZhbHN5IHdlIGFsc28gd2FudCB0byBtYWtlIHN1cmUgX2lkIGlzIG5vdCBhIG5lZ2F0aXZlXG4gICAgLy8gbnVtYmVyLlxuICAgIGlmIChpZElzTm9uWmVyb0ZhbHN5IHx8IHRoaXMuX2lkIDwgMCkge1xuICAgICAgLy8gZ3VhcmQgaGVyZSBpbiB0aGUgZXZlbnQgdGhhdCBpbnB1dCBiZWNvbWVzIHVuZGVmaW5lZCBvciBudWxsIGJ5IGFjY2lkZW50XG4gICAgICB0aGlzLl9pZCA9ICh3aXphcmRQYWdlSW5kZXgrKykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGBjbHItd2l6YXJkLXBhZ2UtJHt0aGlzLl9pZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcmVhZC1vbmx5IGdldHRlciB0aGF0IHNlcnZlcyBhcyBhIGNvbnZlbmllbmNlIGZvciB0aG9zZSB3aG8gd291bGQgcmF0aGVyXG4gICAqIG5vdCB0aGluayBpbiB0aGUgdGVybXMgb2YgIUNscldpemFyZFBhZ2UubmV4dFN0ZXBEaXNhYmxlZC4gRm9yIHNvbWUgdXNlIGNhc2VzLFxuICAgKiBDbHJXaXphcmRQYWdlLnJlYWR5VG9Db21wbGV0ZSBpcyBtb3JlIGxvZ2ljYWwgYW5kIGRlY2xhcmF0aXZlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCByZWFkeVRvQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm5leHRTdGVwRGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHByaXZhdGUgX2NvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgcGFnZSBpcyBtYXJrZWQgYXMgY29tcGxldGVkIGlmIGl0IGlzIGJvdGggcmVhZHlUb0NvbXBsZXRlIGFuZCBjb21wbGV0ZWQsXG4gICAqIGFzIGluIHRoZSBuZXh0IG9yIGZpbmlzaCBhY3Rpb24gaGFzIGJlZW4gZXhlY3V0ZWQgd2hpbGUgdGhpcyBwYWdlIHdhcyBjdXJyZW50LlxuICAgKlxuICAgKiBOb3RlIHRoZXJlIGlzIGFuZCBvcGVuIHF1ZXN0aW9uIGFib3V0IGhvdyB0byBoYW5kbGUgcGFnZXMgdGhhdCBhcmUgbWFya2VkXG4gICAqIGNvbXBsZXRlIGJ1dCB3aG8gYXJlIG5vIGxvbmdlciByZWFkeVRvQ29tcGxldGUuIFRoaXMgbWlnaHQgaW5kaWNhdGUgYW4gZXJyb3JcbiAgICogc3RhdGUgZm9yIHRoZSBDbHJXaXphcmRQYWdlLiBDdXJyZW50bHksIHRoZSB3aXphcmQgZG9lcyBub3QgYWNrbm93bGVkZ2UgdGhpcyBzdGF0ZVxuICAgKiBhbmQgb25seSByZXR1cm5zIHRoYXQgdGhlIHBhZ2UgaXMgaW5jb21wbGV0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZSAmJiB0aGlzLnJlYWR5VG9Db21wbGV0ZTtcblxuICAgIC8vIEZPUiBWMjogVU5XSU5EIENPTVBMRVRFRCwgUkVBRFlUT0NPTVBMRVRFLCBBTkQgRVJST1JTXG4gICAgLy8gU1VDSCBUSEFUIEVSUk9SUyBJUyBJVFMgT1dOIElOUFVULiBJRiBBIFNURVAgSVNcbiAgICAvLyBJTkNPTVBMRVRFIEFORCBFUlJPUkVELCBFUlJPUkVEIFdJTEwgTk9UIFNIT1cuXG4gICAgLy8gRklSU1QgUVVFU1RJT046IEFNIEkgR1JFWSBPUiBDT0xPUkVEP1xuICAgIC8vIFNFQ09ORCBRVUVTVElPTjogQU0gSSBHUkVFTiBPUiBSRUQ/XG4gIH1cblxuICAvKipcbiAgICogQSBDbHJXaXphcmRQYWdlIGNhbiBiZSBtYW51YWxseSBzZXQgdG8gY29tcGxldGVkIHVzaW5nIHRoaXMgYm9vbGVhbiBzZXR0ZXIuXG4gICAqIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgdXNlcnMgcmVseSBvbiB0aGUgY29udmVuaWVuY2UgZnVuY3Rpb25zIGluIHRoZSB3aXphcmRcbiAgICogYW5kIG5hdmlnYXRpb24gc2VydmljZSBpbnN0ZWFkIG9mIG1hbnVhbGx5IHNldHRpbmcgcGFnZXPigJkgY29tcGxldGlvbiBzdGF0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENscldpemFyZFBhZ2VcbiAgICovXG4gIHB1YmxpYyBzZXQgY29tcGxldGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29tcGxldGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2l0aCB0aGUgbmF2aWdhdGlvbiBzZXJ2aWNlIHRvIHNlZSBpZiBpdCBpcyB0aGUgY3VycmVudCBwYWdlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2UgPT09IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5lbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcmVhZC1vbmx5IGdldHRlciB0aGF0IHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBhZ2UgaXMgbmF2aWdhYmxlXG4gICAqIGluIHRoZSB3aXphcmQuIEEgd2l6YXJkIHBhZ2UgY2FuIGJlIG5hdmlnYXRlZCB0byBpZiBpdCBpcyBjb21wbGV0ZWRcbiAgICogb3IgdGhlIHBhZ2UgYmVmb3JlIGl0IGlzIGNvbXBsZXRlZC5cbiAgICpcbiAgICogVGhpcyBnZXR0ZXIgaGFuZGxlcyB0aGUgbG9naWMgZm9yIGVuYWJsaW5nIG9yIGRpc2FibGluZyB0aGUgbGlua3MgaW5cbiAgICogdGhlIHN0ZXAgbmF2IG9uIHRoZSBsZWZ0IFNpZGUgb2YgdGhlIHdpemFyZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50IHx8IHRoaXMuY29tcGxldGVkIHx8IHRoaXMucHJldmlvdXNDb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQSByZWFkLW9ubHkgZ2V0dGVyIHRoYXQgcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcGFnZSBiZWZvcmUgdGhpc1xuICAgKiBDbHJXaXphcmRQYWdlIGlzIGNvbXBsZXRlZC4gVGhpcyBpcyB1c2VmdWwgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgb3Igbm90XG4gICAqIGEgcGFnZSBpcyBuYXZpZ2FibGUgaWYgaXQgaXMgbm90IGN1cnJlbnQgb3IgYWxyZWFkeSBjb21wbGV0ZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHByZXZpb3VzQ29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHRoaXMucGFnZUNvbGxlY3Rpb24uZ2V0UHJldmlvdXNQYWdlKHRoaXMpO1xuXG4gICAgaWYgKCFwcmV2aW91c1BhZ2UpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1BhZ2UuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IHRpdGxlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VUaXRsZS5wYWdlVGl0bGVUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBuYXZUaXRsZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICBpZiAodGhpcy5wYWdlTmF2VGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2VOYXZUaXRsZS5wYWdlTmF2VGl0bGVUZW1wbGF0ZVJlZjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnZVRpdGxlLnBhZ2VUaXRsZVRlbXBsYXRlUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhlYWRlckFjdGlvbnMoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgaWYgKCF0aGlzLl9oZWFkZXJBY3Rpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oZWFkZXJBY3Rpb25zLnBhZ2VIZWFkZXJBY3Rpb25zVGVtcGxhdGVSZWY7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzSGVhZGVyQWN0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9oZWFkZXJBY3Rpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJ1dHRvbnMoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgaWYgKCF0aGlzLl9idXR0b25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9idXR0b25zLnBhZ2VCdXR0b25zVGVtcGxhdGVSZWY7XG4gIH1cblxuICAvKipcbiAgICogQSByZWFkLW9ubHkgZ2V0dGVyIHRoYXQgcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBzYXlzIHdoZXRoZXIgb3JcbiAgICogbm90IHRoZSBDbHJXaXphcmRQYWdlIGluY2x1ZGVzIGJ1dHRvbnMuIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZVxuICAgKiBXaXphcmQgc2hvdWxkIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJ1dHRvbiBzZXQgZGVmaW5lZCBhc1xuICAgKiBpdHMgZGlyZWN0IGNoaWxkcmVuLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkUGFnZVxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldCBoYXNCdXR0b25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX2J1dHRvbnM7XG4gIH1cblxuICAvKipcbiAgICogVXNlcyB0aGUgbmF2IHNlcnZpY2UgdG8gbWFrZSB0aGUgQ2xyV2l6YXJkUGFnZSB0aGUgY3VycmVudCBwYWdlIGluIHRoZVxuICAgKiB3aXphcmQuIEJ5cGFzc2VzIGFsbCBjaGVja3MgYnV0IHN0aWxsIGVtaXRzIHRoZSBDbHJXaXphcmRQYWdlLm9uTG9hZFxuICAgKiAoY2xyV2l6YXJkUGFnZU9uTG9hZCkgb3V0cHV0LlxuICAgKlxuICAgKiBJbiBtb3N0IGNhc2VzLCBpdCBpcyBiZXR0ZXIgdG8gdXNlIHRoZSBkZWZhdWx0IG5hdmlnYXRpb24gZnVuY3Rpb25zXG4gICAqIGluIFdpemFyZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBtYWtlQ3VycmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2UgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIExpbmtzIHRoZSBuYXYgc2VydmljZSBhbmQgZXN0YWJsaXNoZXMgdGhlIGN1cnJlbnQgcGFnZSBpZiBvbmUgaXMgbm90IGRlZmluZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRQYWdlXG4gICAqXG4gICAqL1xuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbmF2U2VydmljZSA9IHRoaXMubmF2U2VydmljZTtcbiAgICBpZiAoIW5hdlNlcnZpY2UuY3VycmVudFBhZ2UgJiYgIW5hdlNlcnZpY2UubmF2U2VydmljZUxvYWRlZCkge1xuICAgICAgdGhpcy5tYWtlQ3VycmVudCgpO1xuICAgICAgdGhpcy5uYXZTZXJ2aWNlLm5hdlNlcnZpY2VMb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHJlYWQtb25seSBnZXR0ZXIgdGhhdCByZXR1cm5zIHRoZSBpZCB1c2VkIGJ5IHRoZSBzdGVwIG5hdiBpdGVtIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFnZS5cbiAgICpcbiAgICogQ2xyV2l6YXJkUGFnZSBuZWVkcyB0aGlzIElEIHN0cmluZyBmb3IgYXJpYSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFBhZ2VcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgc3RlcEl0ZW1JZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBhZ2VDb2xsZWN0aW9uLmdldFN0ZXBJdGVtSWRGb3JQYWdlKHRoaXMpO1xuICB9XG59XG4iXX0=