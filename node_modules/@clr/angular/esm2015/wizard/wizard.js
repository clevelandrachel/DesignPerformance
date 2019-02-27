/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ContentChildren, ElementRef, EventEmitter, Input, IterableDiffers, Output, QueryList, } from '@angular/core';
import { ButtonHubService } from './providers/button-hub.service';
import { HeaderActionService } from './providers/header-actions.service';
import { PageCollectionService } from './providers/page-collection.service';
// providers
import { WizardNavigationService } from './providers/wizard-navigation.service';
import { ClrWizardHeaderAction } from './wizard-header-action';
import { ClrWizardPage } from './wizard-page';
/**
 *
 * The Wizard component
 *
 */
export class ClrWizard {
    /**
     * Creates an instance of Wizard.
     *
     * \@memberof Wizard
     *
     * @param {?} navService
     * @param {?} pageCollection
     * @param {?} buttonService
     * @param {?} headerActionService
     * @param {?} elementRef
     * @param {?} differs
     */
    constructor(navService, pageCollection, buttonService, headerActionService, elementRef, differs) {
        this.navService = navService;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        this.headerActionService = headerActionService;
        this.elementRef = elementRef;
        /**
         * Contains the size defined by the clrWizardSize input
         *
         * \@memberof Wizard
         *
         */
        this.size = 'xl';
        this._forceForward = false;
        /**
         * Tells the modal part of the wizard whether it should have a close "X"
         * in the top right corner. Set with the clrWizardClosable input.
         *
         * \@memberof Wizard
         *
         */
        this.closable = true;
        /**
         * Toggles open/close of the wizard component. Set using the clrWizardOpen
         * input.
         *
         * \@memberof Wizard
         *
         */
        this._open = false;
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
         * \@memberof Wizard
         *
         */
        this._openChanged = new EventEmitter(false);
        /**
         * Emits when the wizard is canceled. Can be observed through the clrWizardOnCancel
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultCancel input to create
         * wizard-level custom cancel routines.
         *
         * \@memberof Wizard
         *
         */
        this.onCancel = new EventEmitter(false);
        /**
         * Emits when the wizard is completed. Can be observed through the clrWizardOnFinish
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultNext input to create
         * wizard-level custom completion routines.
         *
         * \@memberof Wizard
         *
         */
        this.wizardFinished = new EventEmitter(false);
        /**
         * Emits when the wizard is reset. See .reset(). Can be observed through
         * the clrWizardOnReset output.
         *
         * \@memberof Wizard
         *
         */
        this.onReset = new EventEmitter(false);
        /**
         * Emits when the current page has changed. Can be observed through the clrWizardCurrentPageChanged
         * output. This can happen on .next() or .previous().
         * Useful for non-blocking validation.
         *
         * \@memberof Wizard
         *
         */
        this.currentPageChanged = new EventEmitter(false);
        /**
         * Emits when the wizard moves to the next page. Can be observed through the clrWizardOnNext
         * output.
         *
         * Can be combined with the clrWizardPreventDefaultNext input to create
         * wizard-level custom navigation routines, which are useful for validation.
         *
         * \@memberof Wizard
         *
         */
        this.onMoveNext = new EventEmitter(false);
        /**
         * Emits when the wizard moves to the previous page. Can be observed through the
         * clrWizardOnPrevious output.
         *
         * Can be useful for validation.
         *
         * \@memberof Wizard
         *
         */
        this.onMovePrevious = new EventEmitter(false);
        this._stopNext = false;
        this._stopCancel = false;
        this._stopNavigation = false;
        this._disableStepnav = false;
        /**
         * Used only to communicate to the underlying modal that animations are not
         * wanted. Primary use is for the display of static/inline wizards.
         *
         * Set using clrWizardPreventModalAnimation input. But you should never set it.
         *
         * \@memberof Wizard
         *
         */
        this._stopModalAnimations = false;
        this.goNextSubscription = this.navService.movedToNextPage.subscribe(() => {
            this.onMoveNext.emit();
        });
        this.goPreviousSubscription = this.navService.movedToPreviousPage.subscribe(() => {
            this.onMovePrevious.emit();
        });
        this.cancelSubscription = this.navService.notifyWizardCancel.subscribe(() => {
            this.checkAndCancel();
        });
        this.wizardFinishedSubscription = this.navService.wizardFinished.subscribe(() => {
            if (!this.stopNext) {
                this.forceFinish();
            }
            this.wizardFinished.emit();
        });
        this.differ = differs.find([]).create(null);
    }
    /**
     * Resets page completed states when navigating backwards. Can be set using
     * the clrWizardForceForwardNavigation input.
     *
     * \@memberof Wizard
     *
     * @param {?} value
     * @return {?}
     */
    set forceForward(value) {
        this._forceForward = !!value;
        this.navService.forceForwardNavigation = value;
    }
    /**
     * @return {?}
     */
    get forceForward() {
        return this._forceForward;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set clrWizardOpen(open) {
        if (open) {
            this.buttonService.buttonsReady = true;
        }
        this._open = open;
    }
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
     * \@memberof Wizard
     *
     * @param {?} value
     * @return {?}
     */
    set stopNext(value) {
        this._stopNext = !!value;
        this.navService.wizardHasAltNext = value;
    }
    /**
     * @return {?}
     */
    get stopNext() {
        return this._stopNext;
    }
    /**
     * Prevents ClrWizard from closing when the cancel button or close "X" is clicked.
     * Set using the clrWizardPreventDefaultCancel input.
     *
     * Note that using stopCancel will require you to create your own calls to
     * .close() in your host component to make the ClrWizard work as expected.
     *
     * Useful for doing checks or prompts before closing a ClrWizard.
     *
     * \@memberof Wizard
     *
     * @param {?} value
     * @return {?}
     */
    set stopCancel(value) {
        this._stopCancel = !!value;
        this.navService.wizardHasAltCancel = value;
    }
    /**
     * @return {?}
     */
    get stopCancel() {
        return this._stopCancel;
    }
    /**
     * Prevents ClrWizard from performing any form of navigation away from the current
     * page. Set using the clrWizardPreventNavigation input.
     *
     * Note that stopNavigation is meant to freeze the wizard in place, typically
     * during a long validation or background action where you want the wizard to
     * display loading content but not allow the user to execute navigation in
     * the stepnav, close X, or the  back, finish, or next buttons.
     *
     * \@memberof Wizard
     *
     * @param {?} value
     * @return {?}
     */
    set stopNavigation(value) {
        this._stopNavigation = !!value;
        this.navService.wizardStopNavigation = value;
    }
    /**
     * @return {?}
     */
    get stopNavigation() {
        return this._stopNavigation;
    }
    /**
     * Prevents clicks on the links in the stepnav from working.
     *
     * A more granular bypassing of navigation which can be useful when your
     * ClrWizard is in a state of completion and you don't want users to be
     * able to jump backwards and change things.
     *
     * \@memberof Wizard
     *
     * @param {?} value
     * @return {?}
     */
    set disableStepnav(value) {
        this._disableStepnav = !!value;
        this.navService.wizardDisableStepnav = value;
    }
    /**
     * @return {?}
     */
    get disableStepnav() {
        return this._disableStepnav;
    }
    /**
     * @return {?}
     */
    get stopModalAnimations() {
        if (this._stopModalAnimations) {
            return 'true';
        }
        return 'false';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.currentPageSubscription = this.navService.currentPageChanged.subscribe((page) => {
            this.currentPageChanged.emit();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.goNextSubscription) {
            this.goNextSubscription.unsubscribe();
        }
        if (this.goPreviousSubscription) {
            this.goPreviousSubscription.unsubscribe();
        }
        if (this.cancelSubscription) {
            this.cancelSubscription.unsubscribe();
        }
        if (this.currentPageSubscription) {
            this.currentPageSubscription.unsubscribe();
        }
        if (this.wizardFinishedSubscription) {
            this.wizardFinishedSubscription.unsubscribe();
        }
    }
    /**
     * Sets up references that are needed by the providers.
     *
     * \@name ngAfterContentInit
     * \@memberof Wizard
     *
     * @return {?}
     */
    ngAfterContentInit() {
        this.pageCollection.pages = this.pages;
        this.headerActionService.wizardHeaderActions = this.headerActions;
        // Only trigger buttons ready if default is open (inlined)
        if (this._open) {
            this.buttonService.buttonsReady = true;
        }
    }
    /**
     * Used for keeping track of when pages are added or removed from this.pages
     *
     * \@name ngDoCheck
     * \@memberof Wizard
     *
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const changes = this.differ.diff(this.pages);
        if (changes) {
            changes.forEachAddedItem((r) => {
                this.navService.updateNavigation();
            });
            changes.forEachRemovedItem((r) => {
                this.navService.updateNavigation();
            });
        }
    }
    /**
     * Convenient property for determining whether a wizard is static/in-line or not.
     *
     * \@name isStatic
     *
     * \@memberof Wizard
     *
     * @return {?}
     */
    get isStatic() {
        return this.elementRef.nativeElement.classList.contains('clr-wizard--inline');
    }
    /**
     * As a getter, current page is a convenient way to retrieve the current page from
     * the WizardNavigationService.
     *
     * As a setter, current page accepts a ClrWizardPage and passes it to WizardNavigationService
     * to be made the current page. currentPage performs checks to make sure it can navigate
     * to the designated page.
     *
     * \@name currentPage
     *
     * \@memberof Wizard
     *
     * @return {?}
     */
    get currentPage() {
        return this.navService.currentPage;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set currentPage(page) {
        this.navService.goTo(page, true);
    }
    /**
     * Convenient property for determining if the current page is the last page of
     * the wizard.
     *
     * \@name isLast
     *
     * \@memberof Wizard
     *
     * @return {?}
     */
    get isLast() {
        return this.navService.currentPageIsLast;
    }
    /**
     * Convenient property for determining if the current page is the first page of
     * the wizard.
     *
     * \@name isFirst
     *
     * \@memberof Wizard
     *
     * @return {?}
     */
    get isFirst() {
        return this.navService.currentPageIsFirst;
    }
    /**
     * Performs the actions needed to open the wizard. If there is no current
     * page defined, sets the first page in the wizard to be current.
     *
     * \@name open
     * \@memberof ClrWizard
     * @return {?}
     */
    open() {
        this._open = true;
        if (!this.currentPage) {
            this.navService.setFirstPageCurrent();
        }
        // Only render buttons when wizard is opened, to avoid chocolate errors
        this.buttonService.buttonsReady = true;
        this._openChanged.emit(true);
    }
    /**
     * Does the work involved with closing the wizard. Call this directly instead
     * of cancel() to implement alternative cancel functionality.
     *
     * \@name close
     * \@memberof ClrWizard
     * @return {?}
     */
    close() {
        if (this.stopNavigation) {
            return;
        }
        this._open = false;
        this._openChanged.emit(false);
    }
    /**
     * Convenient function that can be used to open and close the wizard. It operates
     * by checking a Boolean parameter. If true, the wizard is opened. If false,
     * it is closed.
     *
     * There is no default value for this parameter, so by default the wizard will
     * close if invoked with no parameter.
     *
     * \@name toggle
     *
     * \@memberof ClrWizard
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        if (value) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * Moves the wizard to the previous page.
     *
     * \@name previous
     * \@memberof ClrWizard
     * @return {?}
     */
    previous() {
        this.navService.previous();
    }
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
     * \@name next
     * \@memberof ClrWizard
     * @param {?=} skipChecksAndEmits
     * @return {?}
     */
    next(skipChecksAndEmits = true) {
        if (skipChecksAndEmits) {
            this.forceNext();
        }
        else {
            this.navService.next();
        }
    }
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
     * \@name finish
     * \@memberof ClrWizard
     * @param {?=} skipChecksAndEmits
     * @return {?}
     */
    finish(skipChecksAndEmits = true) {
        if (skipChecksAndEmits) {
            this.forceFinish();
        }
        else {
            this.navService.finish();
        }
    }
    /**
     * Does the work of finishing up the wizard and closing it but doesn't do the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling ClrWizard.finish(true) or ClrWizard.finish()
     * without a parameter.
     *
     * \@name forceFinish
     * \@memberof ClrWizard
     * @return {?}
     */
    forceFinish() {
        if (this.stopNavigation) {
            return;
        }
        this.close();
    }
    /**
     * Does the work of moving the wizard to the next page without the
     * checks and emissions that other paths do. Good for a last step in an
     * alternate workflow.
     *
     * Does the same thing as calling ClrWizard.next(true) or ClrWizard.next()
     * without a parameter.
     *
     * \@name forceNext
     * \@memberof ClrWizard
     * @return {?}
     */
    forceNext() {
        this.navService.forceNext();
    }
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
     * \@name cancel
     * \@memberof ClrWizard
     * @return {?}
     */
    cancel() {
        this.navService.cancel();
    }
    /**
     * Overrides behavior of the underlying modal to avoid collisions with
     * alternative cancel functionality.
     *
     * In most cases, use ClrWizard.cancel() instead.
     *
     * \@name modalCancel
     * \@memberof ClrWizard
     * @return {?}
     */
    modalCancel() {
        this.checkAndCancel();
    }
    /**
     * Checks for alternative cancel flows defined at the current page or
     * wizard level. Performs a canceled if not. Emits events that initiate
     * the alternative cancel outputs (clrWizardPageOnCancel and
     * clrWizardOnCancel) if so.
     *
     * \@name checkAndCancel
     * \@memberof ClrWizard
     * @return {?}
     */
    checkAndCancel() {
        /** @type {?} */
        const currentPage = this.currentPage;
        /** @type {?} */
        const currentPageHasOverrides = currentPage.stopCancel || currentPage.preventDefault;
        if (this.stopNavigation) {
            return;
        }
        currentPage.pageOnCancel.emit();
        if (!currentPageHasOverrides) {
            this.onCancel.emit();
        }
        if (!this.stopCancel && !currentPageHasOverrides) {
            this.close();
        }
    }
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
     * \@name goTo
     *
     * \@memberof ClrWizard
     * @param {?} pageId
     * @return {?}
     */
    goTo(pageId) {
        if (!pageId) {
            return;
        }
        this.navService.goTo(pageId);
    }
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
     * \@name reset
     * \@memberof ClrWizard
     * @return {?}
     */
    reset() {
        this.pageCollection.reset();
        this.onReset.next();
    }
}
ClrWizard.decorators = [
    { type: Component, args: [{
                selector: 'clr-wizard',
                providers: [WizardNavigationService, PageCollectionService, ButtonHubService, HeaderActionService],
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<clr-modal\n    [clrModalOpen]=\"_open\"\n    [clrModalSize]=\"size\"\n    [clrModalClosable]=\"closable\"\n    [clrModalStaticBackdrop]=\"true\"\n    [clrModalSkipAnimation]=\"stopModalAnimations\"\n    [clrModalOverrideScrollService]=\"isStatic\"\n    [clrModalPreventClose]=\"true\"\n    (clrModalAlternateClose)=\"modalCancel()\">\n\n    <nav class=\"modal-nav clr-wizard-stepnav-wrapper\">\n        <h3 class=\"clr-wizard-title\"><ng-content select=\"clr-wizard-title\"></ng-content></h3>\n        <clr-wizard-stepnav></clr-wizard-stepnav>\n    </nav>\n\n    <h3 class=\"modal-title\">\n        <span class=\"modal-title-text\">\n            <ng-template [ngTemplateOutlet]=\"navService.currentPageTitle\"></ng-template>\n        </span>\n\n        <div class=\"modal-header-actions-wrapper\" *ngIf=\"headerActionService.displayHeaderActionsWrapper\">\n            <div *ngIf=\"headerActionService.showWizardHeaderActions\">\n                <ng-content select=\"clr-wizard-header-action\"></ng-content>\n            </div>\n            <div *ngIf=\"headerActionService.currentPageHasHeaderActions\">\n                <ng-template [ngTemplateOutlet]=\"navService.currentPage.headerActions\"></ng-template>\n            </div>\n        </div>\n    </h3>\n\n    <div class=\"modal-body\">\n        <main clr-wizard-pages-wrapper class=\"clr-wizard-content\">\n            <ng-content></ng-content>\n        </main>\n    </div>\n    <div class=\"modal-footer clr-wizard-footer\">\n        <div class=\"clr-wizard-footer-buttons\">\n            <div *ngIf=\"navService.currentPage && !navService.currentPage.hasButtons\"\n                class=\"clr-wizard-footer-buttons-wrapper\">\n                <ng-content select=\"clr-wizard-button\"></ng-content>\n            </div>\n            <div *ngIf=\"navService.currentPage && navService.currentPage.hasButtons\"\n                class=\"clr-wizard-footer-buttons-wrapper\">\n                <ng-template [ngTemplateOutlet]=\"navService.currentPage.buttons\"></ng-template>\n            </div>\n        </div>\n    </div>\n</clr-modal>\n",
                host: {
                    '[class.clr-wizard]': 'true',
                    '[class.wizard-md]': "size == 'md'",
                    '[class.wizard-lg]': "size == 'lg'",
                    '[class.wizard-xl]': "size == 'xl'",
                    '[class.lastPage]': 'navService.currentPageIsLast',
                }
            }] }
];
/** @nocollapse */
ClrWizard.ctorParameters = () => [
    { type: WizardNavigationService },
    { type: PageCollectionService },
    { type: ButtonHubService },
    { type: HeaderActionService },
    { type: ElementRef },
    { type: IterableDiffers }
];
ClrWizard.propDecorators = {
    size: [{ type: Input, args: ['clrWizardSize',] }],
    forceForward: [{ type: Input, args: ['clrWizardForceForwardNavigation',] }],
    closable: [{ type: Input, args: ['clrWizardClosable',] }],
    clrWizardOpen: [{ type: Input, args: ['clrWizardOpen',] }],
    _openChanged: [{ type: Output, args: ['clrWizardOpenChange',] }],
    onCancel: [{ type: Output, args: ['clrWizardOnCancel',] }],
    wizardFinished: [{ type: Output, args: ['clrWizardOnFinish',] }],
    onReset: [{ type: Output, args: ['clrWizardOnReset',] }],
    pages: [{ type: ContentChildren, args: [ClrWizardPage,] }],
    headerActions: [{ type: ContentChildren, args: [ClrWizardHeaderAction,] }],
    currentPageChanged: [{ type: Output, args: ['clrWizardCurrentPageChanged',] }],
    onMoveNext: [{ type: Output, args: ['clrWizardOnNext',] }],
    onMovePrevious: [{ type: Output, args: ['clrWizardOnPrevious',] }],
    stopNext: [{ type: Input, args: ['clrWizardPreventDefaultNext',] }],
    stopCancel: [{ type: Input, args: ['clrWizardPreventDefaultCancel',] }],
    stopNavigation: [{ type: Input, args: ['clrWizardPreventNavigation',] }],
    disableStepnav: [{ type: Input, args: ['clrWizardDisableStepnav',] }],
    _stopModalAnimations: [{ type: Input, args: ['clrWizardPreventModalAnimation',] }]
};
if (false) {
    /**
     * Used for marking when the collection of wizard pages has been added to or deleted from
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.differ;
    /**
     * Contains the size defined by the clrWizardSize input
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.size;
    /** @type {?} */
    ClrWizard.prototype._forceForward;
    /**
     * Tells the modal part of the wizard whether it should have a close "X"
     * in the top right corner. Set with the clrWizardClosable input.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.closable;
    /**
     * Toggles open/close of the wizard component. Set using the clrWizardOpen
     * input.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype._open;
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
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype._openChanged;
    /**
     * Emits when the wizard is canceled. Can be observed through the clrWizardOnCancel
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultCancel input to create
     * wizard-level custom cancel routines.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.onCancel;
    /**
     * Emits when the wizard is completed. Can be observed through the clrWizardOnFinish
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultNext input to create
     * wizard-level custom completion routines.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.wizardFinished;
    /**
     * Emits when the wizard is reset. See .reset(). Can be observed through
     * the clrWizardOnReset output.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.onReset;
    /**
     * A QueryList of the pages in the wizard. Note that a QueryList is sort of
     * like an Array but not really. Note also that pages does not contain
     * WizardPages that have been removed with an ngIf.
     *
     * Most interactions with a ClrWizard's pages are more easily done using the
     * helper function in the PageCollectionService, accessible from the
     * ClrWizard through ClrWizard.pageCollection.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.pages;
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
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.headerActions;
    /**
     * Emits when the current page has changed. Can be observed through the clrWizardCurrentPageChanged
     * output. This can happen on .next() or .previous().
     * Useful for non-blocking validation.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.currentPageChanged;
    /**
     * Emits when the wizard moves to the next page. Can be observed through the clrWizardOnNext
     * output.
     *
     * Can be combined with the clrWizardPreventDefaultNext input to create
     * wizard-level custom navigation routines, which are useful for validation.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.onMoveNext;
    /**
     * Emits when the wizard moves to the previous page. Can be observed through the
     * clrWizardOnPrevious output.
     *
     * Can be useful for validation.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype.onMovePrevious;
    /** @type {?} */
    ClrWizard.prototype._stopNext;
    /** @type {?} */
    ClrWizard.prototype._stopCancel;
    /** @type {?} */
    ClrWizard.prototype._stopNavigation;
    /** @type {?} */
    ClrWizard.prototype._disableStepnav;
    /**
     * Used only to communicate to the underlying modal that animations are not
     * wanted. Primary use is for the display of static/inline wizards.
     *
     * Set using clrWizardPreventModalAnimation input. But you should never set it.
     *
     * \@memberof Wizard
     *
     * @type {?}
     */
    ClrWizard.prototype._stopModalAnimations;
    /** @type {?} */
    ClrWizard.prototype.goNextSubscription;
    /** @type {?} */
    ClrWizard.prototype.goPreviousSubscription;
    /** @type {?} */
    ClrWizard.prototype.cancelSubscription;
    /** @type {?} */
    ClrWizard.prototype.currentPageSubscription;
    /** @type {?} */
    ClrWizard.prototype.wizardFinishedSubscription;
    /** @type {?} */
    ClrWizard.prototype.navService;
    /** @type {?} */
    ClrWizard.prototype.pageCollection;
    /** @type {?} */
    ClrWizard.prototype.buttonService;
    /** @type {?} */
    ClrWizard.prototype.headerActionService;
    /** @type {?} */
    ClrWizard.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsid2l6YXJkL3dpemFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFFZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxlQUFlLEVBR2YsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBbUI5QyxNQUFNLE9BQU8sU0FBUzs7Ozs7Ozs7Ozs7OztJQU9wQixZQUNTLFVBQW1DLEVBQ25DLGNBQXFDLEVBQ3JDLGFBQStCLEVBQy9CLG1CQUF3QyxFQUN2QyxVQUFzQixFQUM5QixPQUF3QjtRQUxqQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDdkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7Ozs7OztRQXVDUixTQUFJLEdBQVcsSUFBSSxDQUFDO1FBY3BDLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7Ozs7OztRQVlYLGFBQVEsR0FBWSxJQUFJLENBQUM7Ozs7Ozs7O1FBUzlDLFVBQUssR0FBWSxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7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bUM7O0lBc0JuQyxnQ0FBcUM7O0lBc0JyQyxvQ0FBeUM7O0lBb0J6QyxvQ0FBeUM7Ozs7Ozs7Ozs7O0lBY3pDLHlDQUErRTs7SUFjL0UsdUNBQXlDOztJQUN6QywyQ0FBNkM7O0lBQzdDLHVDQUF5Qzs7SUFDekMsNENBQThDOztJQUM5QywrQ0FBaUQ7O0lBeFQvQywrQkFBMEM7O0lBQzFDLG1DQUE0Qzs7SUFDNUMsa0NBQXNDOztJQUN0Qyx3Q0FBK0M7O0lBQy9DLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCdXR0b25IdWJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvYnV0dG9uLWh1Yi5zZXJ2aWNlJztcbmltcG9ydCB7IEhlYWRlckFjdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9oZWFkZXItYWN0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL3BhZ2UtY29sbGVjdGlvbi5zZXJ2aWNlJztcbi8vIHByb3ZpZGVyc1xuaW1wb3J0IHsgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy93aXphcmQtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENscldpemFyZEhlYWRlckFjdGlvbiB9IGZyb20gJy4vd2l6YXJkLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHsgQ2xyV2l6YXJkUGFnZSB9IGZyb20gJy4vd2l6YXJkLXBhZ2UnO1xuXG4vKipcbiAqXG4gKiBUaGUgV2l6YXJkIGNvbXBvbmVudFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXdpemFyZCcsXG4gIHByb3ZpZGVyczogW1dpemFyZE5hdmlnYXRpb25TZXJ2aWNlLCBQYWdlQ29sbGVjdGlvblNlcnZpY2UsIEJ1dHRvbkh1YlNlcnZpY2UsIEhlYWRlckFjdGlvblNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJy4vd2l6YXJkLmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jbHItd2l6YXJkXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLndpemFyZC1tZF0nOiBcInNpemUgPT0gJ21kJ1wiLFxuICAgICdbY2xhc3Mud2l6YXJkLWxnXSc6IFwic2l6ZSA9PSAnbGcnXCIsXG4gICAgJ1tjbGFzcy53aXphcmQteGxdJzogXCJzaXplID09ICd4bCdcIixcbiAgICAnW2NsYXNzLmxhc3RQYWdlXSc6ICduYXZTZXJ2aWNlLmN1cnJlbnRQYWdlSXNMYXN0JyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyV2l6YXJkIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIERvQ2hlY2sge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBXaXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYXZTZXJ2aWNlOiBXaXphcmROYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgcGFnZUNvbGxlY3Rpb246IFBhZ2VDb2xsZWN0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgYnV0dG9uU2VydmljZTogQnV0dG9uSHViU2VydmljZSxcbiAgICBwdWJsaWMgaGVhZGVyQWN0aW9uU2VydmljZTogSGVhZGVyQWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzXG4gICkge1xuICAgIHRoaXMuZ29OZXh0U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZTZXJ2aWNlLm1vdmVkVG9OZXh0UGFnZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vbk1vdmVOZXh0LmVtaXQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ29QcmV2aW91c1N1YnNjcmlwdGlvbiA9IHRoaXMubmF2U2VydmljZS5tb3ZlZFRvUHJldmlvdXNQYWdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uTW92ZVByZXZpb3VzLmVtaXQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2FuY2VsU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZTZXJ2aWNlLm5vdGlmeVdpemFyZENhbmNlbC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0FuZENhbmNlbCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53aXphcmRGaW5pc2hlZFN1YnNjcmlwdGlvbiA9IHRoaXMubmF2U2VydmljZS53aXphcmRGaW5pc2hlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0b3BOZXh0KSB7XG4gICAgICAgIHRoaXMuZm9yY2VGaW5pc2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud2l6YXJkRmluaXNoZWQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBtYXJraW5nIHdoZW4gdGhlIGNvbGxlY3Rpb24gb2Ygd2l6YXJkIHBhZ2VzIGhhcyBiZWVuIGFkZGVkIHRvIG9yIGRlbGV0ZWQgZnJvbVxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBkaWZmZXI6IGFueTtcblxuICAvKipcbiAgICogQ29udGFpbnMgdGhlIHNpemUgZGVmaW5lZCBieSB0aGUgY2xyV2l6YXJkU2l6ZSBpbnB1dFxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFNpemUnKSBzaXplOiBzdHJpbmcgPSAneGwnO1xuXG4gIC8qKlxuICAgKiBSZXNldHMgcGFnZSBjb21wbGV0ZWQgc3RhdGVzIHdoZW4gbmF2aWdhdGluZyBiYWNrd2FyZHMuIENhbiBiZSBzZXQgdXNpbmdcbiAgICogdGhlIGNscldpemFyZEZvcmNlRm9yd2FyZE5hdmlnYXRpb24gaW5wdXQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIEBJbnB1dCgnY2xyV2l6YXJkRm9yY2VGb3J3YXJkTmF2aWdhdGlvbicpXG4gIHNldCBmb3JjZUZvcndhcmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mb3JjZUZvcndhcmQgPSAhIXZhbHVlO1xuICAgIHRoaXMubmF2U2VydmljZS5mb3JjZUZvcndhcmROYXZpZ2F0aW9uID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfZm9yY2VGb3J3YXJkOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBmb3JjZUZvcndhcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmNlRm9yd2FyZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyB0aGUgbW9kYWwgcGFydCBvZiB0aGUgd2l6YXJkIHdoZXRoZXIgaXQgc2hvdWxkIGhhdmUgYSBjbG9zZSBcIlhcIlxuICAgKiBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci4gU2V0IHdpdGggdGhlIGNscldpemFyZENsb3NhYmxlIGlucHV0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZENsb3NhYmxlJykgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUb2dnbGVzIG9wZW4vY2xvc2Ugb2YgdGhlIHdpemFyZCBjb21wb25lbnQuIFNldCB1c2luZyB0aGUgY2xyV2l6YXJkT3BlblxuICAgKiBpbnB1dC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgcHVibGljIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgnY2xyV2l6YXJkT3BlbicpXG4gIHNldCBjbHJXaXphcmRPcGVuKG9wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5idXR0b25TZXJ2aWNlLmJ1dHRvbnNSZWFkeSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuX29wZW4gPSBvcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHdpemFyZCBpcyBvcGVuZWQgb3IgY2xvc2VkLiBFbWl0cyB0aHJvdWdoIHRoZVxuICAgKiBjbHJXaXphcmRPcGVuQ2hhbmdlIG91dHB1dC4gV29ya3MgaW4gY29uanVuY3Rpb24gd2l0aCB0aGVcbiAgICogY2xyV2l6YXJkT3BlbiBiaW5kaW5nIHNvIHlvdSBjYW4gdXNlLi4uXG4gICAqXG4gICAqIDxjbHItd2l6YXJkIFsoY2xyV2l6YXJkT3BlbildPVwiYmxhaFwiXG4gICAqIC4uLm9yLi4uXG4gICAqIDxjbHItd2l6YXJkIFtjbHJXaXphcmRPcGVuXT1cInNvbWV0aGluZ1wiIChjbHJXaXphcmRPcGVuQ2hhbmdlKT1cImRvU29tZXRoaWduKCRldmVudClcIj5cbiAgICpcbiAgICogLi4uZm9yIHR3by13YXkgYmluZGluZy5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkT3BlbkNoYW5nZScpIF9vcGVuQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHdpemFyZCBpcyBjYW5jZWxlZC4gQ2FuIGJlIG9ic2VydmVkIHRocm91Z2ggdGhlIGNscldpemFyZE9uQ2FuY2VsXG4gICAqIG91dHB1dC5cbiAgICpcbiAgICogQ2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlIGNscldpemFyZFByZXZlbnREZWZhdWx0Q2FuY2VsIGlucHV0IHRvIGNyZWF0ZVxuICAgKiB3aXphcmQtbGV2ZWwgY3VzdG9tIGNhbmNlbCByb3V0aW5lcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkT25DYW5jZWwnKSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSB3aXphcmQgaXMgY29tcGxldGVkLiBDYW4gYmUgb2JzZXJ2ZWQgdGhyb3VnaCB0aGUgY2xyV2l6YXJkT25GaW5pc2hcbiAgICogb3V0cHV0LlxuICAgKlxuICAgKiBDYW4gYmUgY29tYmluZWQgd2l0aCB0aGUgY2xyV2l6YXJkUHJldmVudERlZmF1bHROZXh0IGlucHV0IHRvIGNyZWF0ZVxuICAgKiB3aXphcmQtbGV2ZWwgY3VzdG9tIGNvbXBsZXRpb24gcm91dGluZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIEBPdXRwdXQoJ2NscldpemFyZE9uRmluaXNoJykgd2l6YXJkRmluaXNoZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0aGUgd2l6YXJkIGlzIHJlc2V0LiBTZWUgLnJlc2V0KCkuIENhbiBiZSBvYnNlcnZlZCB0aHJvdWdoXG4gICAqIHRoZSBjbHJXaXphcmRPblJlc2V0IG91dHB1dC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkT25SZXNldCcpIG9uUmVzZXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICAvKipcbiAgICogQSBRdWVyeUxpc3Qgb2YgdGhlIHBhZ2VzIGluIHRoZSB3aXphcmQuIE5vdGUgdGhhdCBhIFF1ZXJ5TGlzdCBpcyBzb3J0IG9mXG4gICAqIGxpa2UgYW4gQXJyYXkgYnV0IG5vdCByZWFsbHkuIE5vdGUgYWxzbyB0aGF0IHBhZ2VzIGRvZXMgbm90IGNvbnRhaW5cbiAgICogV2l6YXJkUGFnZXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCB3aXRoIGFuIG5nSWYuXG4gICAqXG4gICAqIE1vc3QgaW50ZXJhY3Rpb25zIHdpdGggYSBDbHJXaXphcmQncyBwYWdlcyBhcmUgbW9yZSBlYXNpbHkgZG9uZSB1c2luZyB0aGVcbiAgICogaGVscGVyIGZ1bmN0aW9uIGluIHRoZSBQYWdlQ29sbGVjdGlvblNlcnZpY2UsIGFjY2Vzc2libGUgZnJvbSB0aGVcbiAgICogQ2xyV2l6YXJkIHRocm91Z2ggQ2xyV2l6YXJkLnBhZ2VDb2xsZWN0aW9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKENscldpemFyZFBhZ2UpIHB1YmxpYyBwYWdlczogUXVlcnlMaXN0PENscldpemFyZFBhZ2U+O1xuXG4gIC8qKlxuICAgKiBBIFF1ZXJ5TGlzdCBvZiB0aGUgaGVhZGVyIGFjdGlvbnMgZGVmaW5lZCBhdCB0aGUgQ2xyV2l6YXJkIGxldmVsLiBEb2VzIG5vdFxuICAgKiBjb250YWluIGhlYWRlciBhY3Rpb25zIGRlZmluZWQgYXQgdGhlIHBhZ2UgbGV2ZWwuIE1vc3RseSB1c2VkIGJ5IG90aGVyIGZ1bmN0aW9uYWxpdHlcbiAgICogdGhhdCBuZWVkcyB0byBlaXRoZXIga25vdyBpZiB0aGUgQ2xyV2l6YXJkIGhhcyBoZWFkZXIgYWN0aW9ucyBvciBuZWVkcyB0byBzdGFtcCB0aGVtXG4gICAqIHNvbWV3aGVyZS5cbiAgICpcbiAgICogQ291bGQgYmUgdXNlZnVsIGlmIHlvdSBuZWVkZWQgdG8gbG9jYXRlIGFuZCBwcm9ncmFtbWF0aWNhbGx5IGFjdGl2YXRlIGEgc3BlY2lmaWNcbiAgICogaGVhZGVyIGFjdGlvbi4gQnV0IHRoaXMgaXMgcHJvYmFibHkgZWFzaWVyIHRvIGRvIGJ5IGludm9raW5nIHRoZSBoZWFkZXIgYWN0aW9uJ3NcbiAgICogZXZlbnQgaGFuZGxlciBpbiB5b3VyIGhvc3QgY29tcG9uZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKENscldpemFyZEhlYWRlckFjdGlvbikgcHVibGljIGhlYWRlckFjdGlvbnM6IFF1ZXJ5TGlzdDxDbHJXaXphcmRIZWFkZXJBY3Rpb24+O1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50IHBhZ2UgaGFzIGNoYW5nZWQuIENhbiBiZSBvYnNlcnZlZCB0aHJvdWdoIHRoZSBjbHJXaXphcmRDdXJyZW50UGFnZUNoYW5nZWRcbiAgICogb3V0cHV0LiBUaGlzIGNhbiBoYXBwZW4gb24gLm5leHQoKSBvciAucHJldmlvdXMoKS5cbiAgICogVXNlZnVsIGZvciBub24tYmxvY2tpbmcgdmFsaWRhdGlvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgQE91dHB1dCgnY2xyV2l6YXJkQ3VycmVudFBhZ2VDaGFuZ2VkJykgY3VycmVudFBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHdpemFyZCBtb3ZlcyB0byB0aGUgbmV4dCBwYWdlLiBDYW4gYmUgb2JzZXJ2ZWQgdGhyb3VnaCB0aGUgY2xyV2l6YXJkT25OZXh0XG4gICAqIG91dHB1dC5cbiAgICpcbiAgICogQ2FuIGJlIGNvbWJpbmVkIHdpdGggdGhlIGNscldpemFyZFByZXZlbnREZWZhdWx0TmV4dCBpbnB1dCB0byBjcmVhdGVcbiAgICogd2l6YXJkLWxldmVsIGN1c3RvbSBuYXZpZ2F0aW9uIHJvdXRpbmVzLCB3aGljaCBhcmUgdXNlZnVsIGZvciB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCdjbHJXaXphcmRPbk5leHQnKSBvbk1vdmVOZXh0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gdGhlIHdpemFyZCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgcGFnZS4gQ2FuIGJlIG9ic2VydmVkIHRocm91Z2ggdGhlXG4gICAqIGNscldpemFyZE9uUHJldmlvdXMgb3V0cHV0LlxuICAgKlxuICAgKiBDYW4gYmUgdXNlZnVsIGZvciB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBAT3V0cHV0KCdjbHJXaXphcmRPblByZXZpb3VzJykgb25Nb3ZlUHJldmlvdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KGZhbHNlKTtcblxuICAvKipcbiAgICogUHJldmVudHMgQ2xyV2l6YXJkIGZyb20gbW92aW5nIHRvIHRoZSBuZXh0IHBhZ2Ugb3IgY2xvc2luZyBpdHNlbGYgb24gZmluaXNoaW5nLlxuICAgKiBTZXQgdXNpbmcgdGhlIGNscldpemFyZFByZXZlbnREZWZhdWx0TmV4dCBpbnB1dC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHVzaW5nIHN0b3BOZXh0IHdpbGwgcmVxdWlyZSB5b3UgdG8gY3JlYXRlIHlvdXIgb3duIGNhbGxzIHRvXG4gICAqIC5uZXh0KCkgYW5kIC5maW5pc2goKSBpbiB5b3VyIGhvc3QgY29tcG9uZW50IHRvIG1ha2UgdGhlIENscldpemFyZCB3b3JrIGFzXG4gICAqIGV4cGVjdGVkLlxuICAgKlxuICAgKiBQcmltYXJpbHkgdXNlZCBmb3IgdmFsaWRhdGlvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZFxuICAgKlxuICAgKi9cbiAgQElucHV0KCdjbHJXaXphcmRQcmV2ZW50RGVmYXVsdE5leHQnKVxuICBzZXQgc3RvcE5leHQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdG9wTmV4dCA9ICEhdmFsdWU7XG4gICAgdGhpcy5uYXZTZXJ2aWNlLndpemFyZEhhc0FsdE5leHQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9zdG9wTmV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgc3RvcE5leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3BOZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXZlbnRzIENscldpemFyZCBmcm9tIGNsb3Npbmcgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBvciBjbG9zZSBcIlhcIiBpcyBjbGlja2VkLlxuICAgKiBTZXQgdXNpbmcgdGhlIGNscldpemFyZFByZXZlbnREZWZhdWx0Q2FuY2VsIGlucHV0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdXNpbmcgc3RvcENhbmNlbCB3aWxsIHJlcXVpcmUgeW91IHRvIGNyZWF0ZSB5b3VyIG93biBjYWxscyB0b1xuICAgKiAuY2xvc2UoKSBpbiB5b3VyIGhvc3QgY29tcG9uZW50IHRvIG1ha2UgdGhlIENscldpemFyZCB3b3JrIGFzIGV4cGVjdGVkLlxuICAgKlxuICAgKiBVc2VmdWwgZm9yIGRvaW5nIGNoZWNrcyBvciBwcm9tcHRzIGJlZm9yZSBjbG9zaW5nIGEgQ2xyV2l6YXJkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFByZXZlbnREZWZhdWx0Q2FuY2VsJylcbiAgc2V0IHN0b3BDYW5jZWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zdG9wQ2FuY2VsID0gISF2YWx1ZTtcbiAgICB0aGlzLm5hdlNlcnZpY2Uud2l6YXJkSGFzQWx0Q2FuY2VsID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfc3RvcENhbmNlbDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgc3RvcENhbmNlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcENhbmNlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmV2ZW50cyBDbHJXaXphcmQgZnJvbSBwZXJmb3JtaW5nIGFueSBmb3JtIG9mIG5hdmlnYXRpb24gYXdheSBmcm9tIHRoZSBjdXJyZW50XG4gICAqIHBhZ2UuIFNldCB1c2luZyB0aGUgY2xyV2l6YXJkUHJldmVudE5hdmlnYXRpb24gaW5wdXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBzdG9wTmF2aWdhdGlvbiBpcyBtZWFudCB0byBmcmVlemUgdGhlIHdpemFyZCBpbiBwbGFjZSwgdHlwaWNhbGx5XG4gICAqIGR1cmluZyBhIGxvbmcgdmFsaWRhdGlvbiBvciBiYWNrZ3JvdW5kIGFjdGlvbiB3aGVyZSB5b3Ugd2FudCB0aGUgd2l6YXJkIHRvXG4gICAqIGRpc3BsYXkgbG9hZGluZyBjb250ZW50IGJ1dCBub3QgYWxsb3cgdGhlIHVzZXIgdG8gZXhlY3V0ZSBuYXZpZ2F0aW9uIGluXG4gICAqIHRoZSBzdGVwbmF2LCBjbG9zZSBYLCBvciB0aGUgIGJhY2ssIGZpbmlzaCwgb3IgbmV4dCBidXR0b25zLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFByZXZlbnROYXZpZ2F0aW9uJylcbiAgc2V0IHN0b3BOYXZpZ2F0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RvcE5hdmlnYXRpb24gPSAhIXZhbHVlO1xuICAgIHRoaXMubmF2U2VydmljZS53aXphcmRTdG9wTmF2aWdhdGlvbiA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3N0b3BOYXZpZ2F0aW9uOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBzdG9wTmF2aWdhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcE5hdmlnYXRpb247XG4gIH1cblxuICAvKipcbiAgICogUHJldmVudHMgY2xpY2tzIG9uIHRoZSBsaW5rcyBpbiB0aGUgc3RlcG5hdiBmcm9tIHdvcmtpbmcuXG4gICAqXG4gICAqIEEgbW9yZSBncmFudWxhciBieXBhc3Npbmcgb2YgbmF2aWdhdGlvbiB3aGljaCBjYW4gYmUgdXNlZnVsIHdoZW4geW91clxuICAgKiBDbHJXaXphcmQgaXMgaW4gYSBzdGF0ZSBvZiBjb21wbGV0aW9uIGFuZCB5b3UgZG9uJ3Qgd2FudCB1c2VycyB0byBiZVxuICAgKiBhYmxlIHRvIGp1bXAgYmFja3dhcmRzIGFuZCBjaGFuZ2UgdGhpbmdzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZERpc2FibGVTdGVwbmF2JylcbiAgc2V0IGRpc2FibGVTdGVwbmF2KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZVN0ZXBuYXYgPSAhIXZhbHVlO1xuICAgIHRoaXMubmF2U2VydmljZS53aXphcmREaXNhYmxlU3RlcG5hdiA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVTdGVwbmF2OiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBkaXNhYmxlU3RlcG5hdigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVN0ZXBuYXY7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCBvbmx5IHRvIGNvbW11bmljYXRlIHRvIHRoZSB1bmRlcmx5aW5nIG1vZGFsIHRoYXQgYW5pbWF0aW9ucyBhcmUgbm90XG4gICAqIHdhbnRlZC4gUHJpbWFyeSB1c2UgaXMgZm9yIHRoZSBkaXNwbGF5IG9mIHN0YXRpYy9pbmxpbmUgd2l6YXJkcy5cbiAgICpcbiAgICogU2V0IHVzaW5nIGNscldpemFyZFByZXZlbnRNb2RhbEFuaW1hdGlvbiBpbnB1dC4gQnV0IHlvdSBzaG91bGQgbmV2ZXIgc2V0IGl0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBASW5wdXQoJ2NscldpemFyZFByZXZlbnRNb2RhbEFuaW1hdGlvbicpIF9zdG9wTW9kYWxBbmltYXRpb25zOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgc3RvcE1vZGFsQW5pbWF0aW9ucygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9zdG9wTW9kYWxBbmltYXRpb25zKSB7XG4gICAgICByZXR1cm4gJ3RydWUnO1xuICAgIH1cbiAgICByZXR1cm4gJ2ZhbHNlJztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZTZXJ2aWNlLmN1cnJlbnRQYWdlQ2hhbmdlZC5zdWJzY3JpYmUoKHBhZ2U6IENscldpemFyZFBhZ2UpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2VDaGFuZ2VkLmVtaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ29OZXh0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZ29QcmV2aW91c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNhbmNlbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGN1cnJlbnRQYWdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgd2l6YXJkRmluaXNoZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5nb05leHRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ29OZXh0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmdvUHJldmlvdXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ29QcmV2aW91c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jYW5jZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY2FuY2VsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLndpemFyZEZpbmlzaGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLndpemFyZEZpbmlzaGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgcmVmZXJlbmNlcyB0aGF0IGFyZSBuZWVkZWQgYnkgdGhlIHByb3ZpZGVycy5cbiAgICpcbiAgICogQG5hbWUgbmdBZnRlckNvbnRlbnRJbml0XG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5wYWdlQ29sbGVjdGlvbi5wYWdlcyA9IHRoaXMucGFnZXM7XG4gICAgdGhpcy5oZWFkZXJBY3Rpb25TZXJ2aWNlLndpemFyZEhlYWRlckFjdGlvbnMgPSB0aGlzLmhlYWRlckFjdGlvbnM7XG5cbiAgICAvLyBPbmx5IHRyaWdnZXIgYnV0dG9ucyByZWFkeSBpZiBkZWZhdWx0IGlzIG9wZW4gKGlubGluZWQpXG4gICAgaWYgKHRoaXMuX29wZW4pIHtcbiAgICAgIHRoaXMuYnV0dG9uU2VydmljZS5idXR0b25zUmVhZHkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIGZvciBrZWVwaW5nIHRyYWNrIG9mIHdoZW4gcGFnZXMgYXJlIGFkZGVkIG9yIHJlbW92ZWQgZnJvbSB0aGlzLnBhZ2VzXG4gICAqXG4gICAqIEBuYW1lIG5nRG9DaGVja1xuICAgKiBAbWVtYmVyb2YgV2l6YXJkXG4gICAqXG4gICAqL1xuICBwdWJsaWMgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMucGFnZXMpO1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0oKHI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm5hdlNlcnZpY2UudXBkYXRlTmF2aWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubmF2U2VydmljZS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVudCBwcm9wZXJ0eSBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhIHdpemFyZCBpcyBzdGF0aWMvaW4tbGluZSBvciBub3QuXG4gICAqXG4gICAqIEBuYW1lIGlzU3RhdGljXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNTdGF0aWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2xyLXdpemFyZC0taW5saW5lJyk7XG4gIH1cblxuICAvKipcbiAgICogQXMgYSBnZXR0ZXIsIGN1cnJlbnQgcGFnZSBpcyBhIGNvbnZlbmllbnQgd2F5IHRvIHJldHJpZXZlIHRoZSBjdXJyZW50IHBhZ2UgZnJvbVxuICAgKiB0aGUgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2UuXG4gICAqXG4gICAqIEFzIGEgc2V0dGVyLCBjdXJyZW50IHBhZ2UgYWNjZXB0cyBhIENscldpemFyZFBhZ2UgYW5kIHBhc3NlcyBpdCB0byBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKiB0byBiZSBtYWRlIHRoZSBjdXJyZW50IHBhZ2UuIGN1cnJlbnRQYWdlIHBlcmZvcm1zIGNoZWNrcyB0byBtYWtlIHN1cmUgaXQgY2FuIG5hdmlnYXRlXG4gICAqIHRvIHRoZSBkZXNpZ25hdGVkIHBhZ2UuXG4gICAqXG4gICAqIEBuYW1lIGN1cnJlbnRQYWdlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFBhZ2UoKTogQ2xyV2l6YXJkUGFnZSB7XG4gICAgcmV0dXJuIHRoaXMubmF2U2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuICBwdWJsaWMgc2V0IGN1cnJlbnRQYWdlKHBhZ2U6IENscldpemFyZFBhZ2UpIHtcbiAgICB0aGlzLm5hdlNlcnZpY2UuZ29UbyhwYWdlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW50IHByb3BlcnR5IGZvciBkZXRlcm1pbmluZyBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHRoZSBsYXN0IHBhZ2Ugb2ZcbiAgICogdGhlIHdpemFyZC5cbiAgICpcbiAgICogQG5hbWUgaXNMYXN0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNMYXN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdlNlcnZpY2UuY3VycmVudFBhZ2VJc0xhc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVudCBwcm9wZXJ0eSBmb3IgZGV0ZXJtaW5pbmcgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyB0aGUgZmlyc3QgcGFnZSBvZlxuICAgKiB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBAbmFtZSBpc0ZpcnN0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmRcbiAgICpcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNGaXJzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZTZXJ2aWNlLmN1cnJlbnRQYWdlSXNGaXJzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyB0aGUgYWN0aW9ucyBuZWVkZWQgdG8gb3BlbiB0aGUgd2l6YXJkLiBJZiB0aGVyZSBpcyBubyBjdXJyZW50XG4gICAqIHBhZ2UgZGVmaW5lZCwgc2V0cyB0aGUgZmlyc3QgcGFnZSBpbiB0aGUgd2l6YXJkIHRvIGJlIGN1cnJlbnQuXG4gICAqXG4gICAqIEBuYW1lIG9wZW5cbiAgICogQG1lbWJlcm9mIENscldpemFyZFxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMubmF2U2VydmljZS5zZXRGaXJzdFBhZ2VDdXJyZW50KCk7XG4gICAgfVxuXG4gICAgLy8gT25seSByZW5kZXIgYnV0dG9ucyB3aGVuIHdpemFyZCBpcyBvcGVuZWQsIHRvIGF2b2lkIGNob2NvbGF0ZSBlcnJvcnNcbiAgICB0aGlzLmJ1dHRvblNlcnZpY2UuYnV0dG9uc1JlYWR5ID0gdHJ1ZTtcblxuICAgIHRoaXMuX29wZW5DaGFuZ2VkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGUgd29yayBpbnZvbHZlZCB3aXRoIGNsb3NpbmcgdGhlIHdpemFyZC4gQ2FsbCB0aGlzIGRpcmVjdGx5IGluc3RlYWRcbiAgICogb2YgY2FuY2VsKCkgdG8gaW1wbGVtZW50IGFsdGVybmF0aXZlIGNhbmNlbCBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBAbmFtZSBjbG9zZVxuICAgKiBAbWVtYmVyb2YgQ2xyV2l6YXJkXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RvcE5hdmlnYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fb3BlbkNoYW5nZWQuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVudCBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSB3aXphcmQuIEl0IG9wZXJhdGVzXG4gICAqIGJ5IGNoZWNraW5nIGEgQm9vbGVhbiBwYXJhbWV0ZXIuIElmIHRydWUsIHRoZSB3aXphcmQgaXMgb3BlbmVkLiBJZiBmYWxzZSxcbiAgICogaXQgaXMgY2xvc2VkLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBkZWZhdWx0IHZhbHVlIGZvciB0aGlzIHBhcmFtZXRlciwgc28gYnkgZGVmYXVsdCB0aGUgd2l6YXJkIHdpbGxcbiAgICogY2xvc2UgaWYgaW52b2tlZCB3aXRoIG5vIHBhcmFtZXRlci5cbiAgICpcbiAgICogQG5hbWUgdG9nZ2xlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyB0b2dnbGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSB3aXphcmQgdG8gdGhlIHByZXZpb3VzIHBhZ2UuXG4gICAqXG4gICAqIEBuYW1lIHByZXZpb3VzXG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyBwcmV2aW91cygpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlNlcnZpY2UucHJldmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNsdWRlcyBhIEJvb2xlYW4gcGFyYW1ldGVyIHRoYXQgd2lsbCBza2lwIGNoZWNrcyBhbmQgZXZlbnQgZW1pc3Npb25zLlxuICAgKiBJZiB0cnVlLCB0aGUgd2l6YXJkIHdpbGwgbW92ZSB0byB0aGUgbmV4dCBwYWdlIHJlZ2FyZGxlc3Mgb2YgdGhlIHN0YXRlIG9mXG4gICAqIGl0cyBjdXJyZW50IHBhZ2UuIFRoaXMgaXMgdXNlZnVsIGZvciBhbHRlcm5hdGl2ZSBuYXZpZ2F0aW9uIHdoZXJlIGV2ZW50XG4gICAqIGVtaXNzaW9ucyBoYXZlIGFscmVhZHkgYmVlbiBkb25lIGFuZCBmaXJpbmcgdGhlbSBhZ2FpbiBtYXkgY2F1c2UgYW4gZXZlbnQgbG9vcC5cbiAgICpcbiAgICogR2VuZXJhbGx5LCB3aXRoIGFsdGVybmF0aXZlIG5hdmlnYXRpb24sIHVzZXJzIGFyZSBzdXBwbHlpbmcgdGhlaXIgb3duIGNoZWNrc1xuICAgKiBhbmQgdmFsaWRhdGlvbi4gU28gdGhlcmUgaXMgbm8gcG9pbnQgaW4gc3VwZXJzZWRpbmcgdGhlaXIgYnVzaW5lc3MgbG9naWNcbiAgICogd2l0aCBvdXIgZGVmYXVsdCBiZWhhdmlvci5cbiAgICpcbiAgICogSWYgZmFsc2UsIHRoZSB3aXphcmQgd2lsbCBleGVjdXRlIGRlZmF1bHQgY2hlY2tzIGFuZCBlbWl0IGV2ZW50cyBhcyBub3JtYWwuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjdXN0b20gYnV0dG9ucyBvciBwcm9ncmFtbWF0aWMgd29ya2Zsb3dzIHRoYXQgYXJlIG5vdFxuICAgKiBleGVjdXRpbmcgdGhlIHdpemFyZHMgZGVmYXVsdCBjaGVja3MgYW5kIGVtaXNzaW9ucy4gSXQgaXMgYW5vdGhlciB3YXkgdG9cbiAgICogbmF2aWdhdGUgd2l0aG91dCBoYXZpbmcgdG8gcmV3cml0ZSB0aGUgd2l6YXJk4oCZcyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHlcbiAgICogZnJvbSBzY3JhdGNoLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBuZXh0KCkgZG9lcyBub3QgZXhlY3V0ZSBldmVudCBlbWlzc2lvbnMgb3IgY2hlY2tzIGJlY2F1c2UgdGhlXG4gICAqIDgwJSBjYXNlIGlzIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYXMgcGFydCBvZiBhbiBhbHRlcm5hdGl2ZVxuICAgKiBuYXZpZ2F0aW9uIHdpdGggY2xyV2l6YXJkUHJldmVudERlZmF1bHROZXh0LlxuICAgKlxuICAgKiBAbmFtZSBuZXh0XG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyBuZXh0KHNraXBDaGVja3NBbmRFbWl0czogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc2tpcENoZWNrc0FuZEVtaXRzKSB7XG4gICAgICB0aGlzLmZvcmNlTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdlNlcnZpY2UubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNsdWRlcyBhIEJvb2xlYW4gcGFyYW1ldGVyIHRoYXQgd2lsbCBza2lwIGNoZWNrcyBhbmQgZXZlbnQgZW1pc3Npb25zLlxuICAgKiBJZiB0cnVlLCB0aGUgd2l6YXJkIHdpbGwgIGNvbXBsZXRlIGFuZCBjbG9zZSByZWdhcmRsZXNzIG9mIHRoZSBzdGF0ZSBvZlxuICAgKiBpdHMgY3VycmVudCBwYWdlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYWx0ZXJuYXRpdmUgbmF2aWdhdGlvbiB3aGVyZSBldmVudFxuICAgKiBlbWlzc2lvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gZG9uZSBhbmQgZmlyaW5nIHRoZW0gYWdhaW4gbWF5IGNhdXNlIGFuIGV2ZW50IGxvb3AuXG4gICAqXG4gICAqIElmIGZhbHNlLCB0aGUgd2l6YXJkIHdpbGwgZXhlY3V0ZSBkZWZhdWx0IGNoZWNrcyBhbmQgZW1pdCBldmVudHMgYmVmb3JlXG4gICAqIGNvbXBsZXRpbmcgYW5kIGNsb3NpbmcuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGZpbmlzaCgpIGRvZXMgbm90IGV4ZWN1dGUgZXZlbnQgZW1pc3Npb25zIG9yIGNoZWNrcyBiZWNhdXNlIHRoZVxuICAgKiA4MCUgY2FzZSBpcyB0aGF0IHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFzIHBhcnQgb2YgYW4gYWx0ZXJuYXRpdmVcbiAgICogbmF2aWdhdGlvbiB3aXRoIGNscldpemFyZFByZXZlbnREZWZhdWx0TmV4dC5cbiAgICpcbiAgICogQG5hbWUgZmluaXNoXG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyBmaW5pc2goc2tpcENoZWNrc0FuZEVtaXRzOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChza2lwQ2hlY2tzQW5kRW1pdHMpIHtcbiAgICAgIHRoaXMuZm9yY2VGaW5pc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYXZTZXJ2aWNlLmZpbmlzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb2VzIHRoZSB3b3JrIG9mIGZpbmlzaGluZyB1cCB0aGUgd2l6YXJkIGFuZCBjbG9zaW5nIGl0IGJ1dCBkb2Vzbid0IGRvIHRoZVxuICAgKiBjaGVja3MgYW5kIGVtaXNzaW9ucyB0aGF0IG90aGVyIHBhdGhzIGRvLiBHb29kIGZvciBhIGxhc3Qgc3RlcCBpbiBhblxuICAgKiBhbHRlcm5hdGUgd29ya2Zsb3cuXG4gICAqXG4gICAqIERvZXMgdGhlIHNhbWUgdGhpbmcgYXMgY2FsbGluZyBDbHJXaXphcmQuZmluaXNoKHRydWUpIG9yIENscldpemFyZC5maW5pc2goKVxuICAgKiB3aXRob3V0IGEgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBAbmFtZSBmb3JjZUZpbmlzaFxuICAgKiBAbWVtYmVyb2YgQ2xyV2l6YXJkXG4gICAqL1xuICBwdWJsaWMgZm9yY2VGaW5pc2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RvcE5hdmlnYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogRG9lcyB0aGUgd29yayBvZiBtb3ZpbmcgdGhlIHdpemFyZCB0byB0aGUgbmV4dCBwYWdlIHdpdGhvdXQgdGhlXG4gICAqIGNoZWNrcyBhbmQgZW1pc3Npb25zIHRoYXQgb3RoZXIgcGF0aHMgZG8uIEdvb2QgZm9yIGEgbGFzdCBzdGVwIGluIGFuXG4gICAqIGFsdGVybmF0ZSB3b3JrZmxvdy5cbiAgICpcbiAgICogRG9lcyB0aGUgc2FtZSB0aGluZyBhcyBjYWxsaW5nIENscldpemFyZC5uZXh0KHRydWUpIG9yIENscldpemFyZC5uZXh0KClcbiAgICogd2l0aG91dCBhIHBhcmFtZXRlci5cbiAgICpcbiAgICogQG5hbWUgZm9yY2VOZXh0XG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyBmb3JjZU5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZTZXJ2aWNlLmZvcmNlTmV4dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0aGF0IGNhbmNlbHMgYW5kIGNsb3NlcyB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBEbyBub3QgdXNlIHRoaXMgZm9yIGFuIG92ZXJyaWRlIG9mIHRoZSBjYW5jZWwgdGhlIGZ1bmN0aW9uYWxpdHlcbiAgICogd2l0aCBjbHJXaXphcmRQcmV2ZW50RGVmYXVsdENhbmNlbCwgY2xyV2l6YXJkUHJldmVudFBhZ2VEZWZhdWx0Q2FuY2VsLFxuICAgKiBvciBjbHJXaXphcmRQYWdlUHJldmVudERlZmF1bHQgYmVjYXVzZSBpdCB3aWxsIGluaXRpYXRlIHRoZSBzYW1lIGNoZWNrc1xuICAgKiBhbmQgZXZlbnQgZW1pc3Npb25zIHRoYXQgaW52b2tlZCB5b3VyIGV2ZW50IGhhbmRsZXIuXG4gICAqXG4gICAqIFVzZSBDbHJXaXphcmQuY2xvc2UoKSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAbmFtZSBjYW5jZWxcbiAgICogQG1lbWJlcm9mIENscldpemFyZFxuICAgKi9cbiAgcHVibGljIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlNlcnZpY2UuY2FuY2VsKCk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIGJlaGF2aW9yIG9mIHRoZSB1bmRlcmx5aW5nIG1vZGFsIHRvIGF2b2lkIGNvbGxpc2lvbnMgd2l0aFxuICAgKiBhbHRlcm5hdGl2ZSBjYW5jZWwgZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogSW4gbW9zdCBjYXNlcywgdXNlIENscldpemFyZC5jYW5jZWwoKSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAbmFtZSBtb2RhbENhbmNlbFxuICAgKiBAbWVtYmVyb2YgQ2xyV2l6YXJkXG4gICAqL1xuICBwdWJsaWMgbW9kYWxDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0FuZENhbmNlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgYWx0ZXJuYXRpdmUgY2FuY2VsIGZsb3dzIGRlZmluZWQgYXQgdGhlIGN1cnJlbnQgcGFnZSBvclxuICAgKiB3aXphcmQgbGV2ZWwuIFBlcmZvcm1zIGEgY2FuY2VsZWQgaWYgbm90LiBFbWl0cyBldmVudHMgdGhhdCBpbml0aWF0ZVxuICAgKiB0aGUgYWx0ZXJuYXRpdmUgY2FuY2VsIG91dHB1dHMgKGNscldpemFyZFBhZ2VPbkNhbmNlbCBhbmRcbiAgICogY2xyV2l6YXJkT25DYW5jZWwpIGlmIHNvLlxuICAgKlxuICAgKiBAbmFtZSBjaGVja0FuZENhbmNlbFxuICAgKiBAbWVtYmVyb2YgQ2xyV2l6YXJkXG4gICAqL1xuICBwdWJsaWMgY2hlY2tBbmRDYW5jZWwoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlSGFzT3ZlcnJpZGVzID0gY3VycmVudFBhZ2Uuc3RvcENhbmNlbCB8fCBjdXJyZW50UGFnZS5wcmV2ZW50RGVmYXVsdDtcblxuICAgIGlmICh0aGlzLnN0b3BOYXZpZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudFBhZ2UucGFnZU9uQ2FuY2VsLmVtaXQoKTtcbiAgICBpZiAoIWN1cnJlbnRQYWdlSGFzT3ZlcnJpZGVzKSB7XG4gICAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RvcENhbmNlbCAmJiAhY3VycmVudFBhZ2VIYXNPdmVycmlkZXMpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyB0aGUgd2l6YXJkIElEIGFzIGEgc3RyaW5nIHBhcmFtZXRlciBhbmQgY2FsbHMgdG8gV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICogdG8gbmF2aWdhdGUgdG8gdGhlIHBhZ2Ugd2l0aCB0aGF0IElELiBOYXZpZ2F0aW9uIHdpbGwgaW52b2tlIHRoZSB3aXphcmTigJlzIGRlZmF1bHRcbiAgICogY2hlY2tzIGFuZCBldmVudCBlbWlzc2lvbnMuXG4gICAqXG4gICAqIFByb2JhYmx5IGxlc3MgdXNlZnVsIHRoYW4gY2FsbGluZyBkaXJlY3RseSB0byBDbHJXaXphcmQubmF2U2VydmljZS5nb1RvKCkgYmVjYXVzZSB0aGVcbiAgICogbmF2IHNlcnZpY2UgbWV0aG9kIGNhbiBhY2NlcHQgZWl0aGVyIGEgc3RyaW5nIElEIG9yIGEgcGFnZSBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb3JtYXQgb2YgdGhlIGV4cGVjdGVkIElEIHBhcmFtZXRlciBjYW4gYmUgZm91bmQgaW4gdGhlIHJldHVybiBvZiB0aGVcbiAgICogQ2xyV2l6YXJkUGFnZS5pZCBnZXR0ZXIsIHVzdWFsbHkgcHJlZml4ZWQgd2l0aCDigJxjbHItd2l6YXJkLXBhZ2Ut4oCcIGFuZCB0aGVuIGVpdGhlciBhXG4gICAqIG51bWVyaWMgSUQgb3IgdGhlIElEIHNwZWNpZmllZCBmb3IgdGhlIENscldpemFyZFBhZ2UgY29tcG9uZW504oCZcyDigJxpZOKAnSBpbnB1dC5cbiAgICpcbiAgICogQG5hbWUgZ29Ub1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2xyV2l6YXJkXG4gICAqL1xuICBwdWJsaWMgZ29UbyhwYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghcGFnZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uYXZTZXJ2aWNlLmdvVG8ocGFnZUlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIHRoYXQgY2FsbHMgdG8gUGFnZUNvbGxlY3Rpb25TZXJ2aWNlLnJlc2V0KCkgYW5kIGVtaXRzIHRoZVxuICAgKiBDbHJXaXphcmQub25SZXNldCBldmVudC5cbiAgICpcbiAgICogUmVzZXQgc2V0cyBhbGwgV2l6YXJkUGFnZXMgdG8gaW5jb21wbGV0ZSBhbmQgc2V0cyB0aGUgZmlyc3QgcGFnZSBpbiB0aGUgQ2xyV2l6YXJkIHRvXG4gICAqIGJlIHRoZSBjdXJyZW50IHBhZ2UsIGVzc2VudGlhbGx5IHJlc2V0dGluZyB0aGUgd2l6YXJkIG5hdmlnYXRpb24uXG4gICAqXG4gICAqIFVzZXJzIHdvdWxkIHRoZW4gdXNlIHRoZSBvblJlc2V0IGV2ZW50IHRvIHJlc2V0IHRoZSBkYXRhIG9yIG1vZGVsIGluIHRoZWlyXG4gICAqIGhvc3QgY29tcG9uZW50LlxuICAgKlxuICAgKiBJdCBjb3VsZCBiZSB1c2VmdWwgdG8gY2FsbCBhIHJlc2V0IHdpdGhvdXQgZmlyaW5nIHRoZSBvblJlc2V0IGV2ZW50LiBUbyBkbyB0aGlzLFxuICAgKiBqdXN0IGNhbGwgQ2xyV2l6YXJkLnBhZ2VDb2xsZWN0aW9uLnJlc2V0KCkgZGlyZWN0bHkuXG4gICAqXG4gICAqIEBuYW1lIHJlc2V0XG4gICAqIEBtZW1iZXJvZiBDbHJXaXphcmRcbiAgICovXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLnBhZ2VDb2xsZWN0aW9uLnJlc2V0KCk7XG4gICAgdGhpcy5vblJlc2V0Lm5leHQoKTtcbiAgfVxufVxuIl19