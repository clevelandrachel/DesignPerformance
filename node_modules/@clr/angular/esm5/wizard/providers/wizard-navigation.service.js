/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ButtonHubService } from './button-hub.service';
import { PageCollectionService } from './page-collection.service';
/**
 * Performs navigation functions for a wizard and manages the current page. Presented as a
 * separate service to encapsulate the behavior of navigating and completing the wizard so
 * that it can be shared across the wizard and its sub-components.
 *
 * The easiest way to access the navigation service is there a reference on your wizard. The
 * Following example would allow you to access your instance of the wizard from your host
 * component and thereby access the navigation service via YourHostComponent.wizard.navService.
 *
 * \@example
 * <clr-wizard #wizard ...>
 *
 * \@example
 * export class YourHostComponent {
 * \@ViewChild("wizard") wizard: Wizard;
 *   ...
 * }
 *
 */
var WizardNavigationService = /** @class */ (function () {
    /**
     * Creates an instance of WizardNavigationService. Also sets up subscriptions
     * that listen to the button service to determine when a button has been clicked
     * in the wizard. Is also responsible for taking action when the page collection
     * requests that navigation be reset to its pristine state.
     *
     * @memberof WizardNavigationService
     */
    function WizardNavigationService(pageCollection, buttonService) {
        var _this = this;
        this.pageCollection = pageCollection;
        this.buttonService = buttonService;
        /**
         *
         * \@memberof WizardNavigationService
         */
        this._currentChanged = new Subject();
        /**
         * A Boolean flag used by the ClrWizardPage to avoid a race condition when pages are
         * loading and there is no current page defined.
         *
         * \@memberof WizardNavigationService
         */
        this.navServiceLoaded = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.forceForward (clrWizardForceForwardNavigation) input. When true,
         * navigating backwards in the stepnav menu will reset any skipped pages' completed
         * state to false.
         *
         * This is useful when a wizard executes validation on a page-by-page basis when
         * the next button is clicked.
         *
         * \@memberof WizardNavigationService
         */
        this.forceForwardNavigation = false;
        /**
         * \@memberof WizardNavigationService
         */
        this._movedToNextPage = new Subject();
        /**
         * \@memberof WizardNavigationService
         */
        this._wizardFinished = new Subject();
        /**
         * \@memberof WizardNavigationService
         */
        this._movedToPreviousPage = new Subject();
        /**
         * \@memberof WizardNavigationService
         */
        this._cancelWizard = new Subject();
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopCancel (clrWizardPreventDefaultCancel) input. When true, the cancel
         * routine is subverted and must be reinstated in the host component calling Wizard.close()
         * at some point.
         *
         * \@memberof WizardNavigationService
         */
        this.wizardHasAltCancel = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopNext (clrWizardPreventDefaultNext) input. When true, the next and finish
         * routines are subverted and must be reinstated in the host component calling Wizard.next(),
         * Wizard.forceNext(), Wizard.finish(), or Wizard.forceFinish().
         *
         * \@memberof WizardNavigationService
         */
        this.wizardHasAltNext = false;
        /**
         * A boolean flag shared across the Wizard subcomponents that follows the value
         * of the Wizard.stopNavigation (clrWizardPreventNavigation) input. When true, all
         * navigational elements in the wizard are disabled.
         *
         * This is intended to freeze the wizard in place. Events are not fired so this is
         * not a way to implement alternate functionality for navigation.
         *
         * \@memberof WizardNavigationService
         */
        this.wizardStopNavigation = false;
        /**
         * A boolean flag shared with the stepnav items that prevents user clicks on
         * stepnav items from navigating the wizard.
         *
         * \@memberof WizardNavigationService
         */
        this.wizardDisableStepnav = false;
        this.previousButtonSubscription = this.buttonService.previousBtnClicked.subscribe(function () {
            /** @type {?} */
            var currentPage = _this.currentPage;
            if (_this.currentPageIsFirst || currentPage.previousStepDisabled) {
                return;
            }
            currentPage.previousButtonClicked.emit(currentPage);
            if (!currentPage.preventDefault) {
                _this.previous();
            }
        });
        this.nextButtonSubscription = this.buttonService.nextBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage('next');
        });
        this.dangerButtonSubscription = this.buttonService.dangerBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage('danger');
        });
        this.finishButtonSubscription = this.buttonService.finishBtnClicked.subscribe(function () {
            _this.checkAndCommitCurrentPage('finish');
        });
        this.customButtonSubscription = this.buttonService.customBtnClicked.subscribe(function (type) {
            if (!_this.wizardStopNavigation) {
                _this.currentPage.customButtonClicked.emit(type);
            }
        });
        this.cancelButtonSubscription = this.buttonService.cancelBtnClicked.subscribe(function () {
            if (_this.wizardStopNavigation) {
                return;
            }
            if (_this.currentPage.preventDefault) {
                _this.currentPage.pageOnCancel.emit(_this.currentPage);
            }
            else {
                _this.cancel();
            }
        });
        this.pagesResetSubscription = this.pageCollection.pagesReset.subscribe(function () {
            _this.setFirstPageCurrent();
        });
    }
    /**
     *
     * @memberof WizardNavigationService
     */
    /**
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.ngOnDestroy = /**
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        this.previousButtonSubscription.unsubscribe();
        this.nextButtonSubscription.unsubscribe();
        this.dangerButtonSubscription.unsubscribe();
        this.finishButtonSubscription.unsubscribe();
        this.customButtonSubscription.unsubscribe();
        this.cancelButtonSubscription.unsubscribe();
        this.pagesResetSubscription.unsubscribe();
    };
    Object.defineProperty(WizardNavigationService.prototype, "currentPageChanged", {
        /**
         * An Observable that is predominantly used amongst the subcomponents and services
         * of the wizard. It is recommended that users listen to the ClrWizardPage.onLoad
         * (clrWizardPageOnLoad) output instead of this Observable.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * An Observable that is predominantly used amongst the subcomponents and services
         * of the wizard. It is recommended that users listen to the ClrWizardPage.onLoad
         * (clrWizardPageOnLoad) output instead of this Observable.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            // TODO: MAKE SURE EXTERNAL OUTPUTS SAY 'CHANGE' NOT 'CHANGED'
            // A BREAKING CHANGE SO AWAITING MINOR RELEASE
            return this._currentChanged.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageTitle", {
        /**
         * @memberof WizardNavigationService
         */
        get: /**
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            // when the querylist of pages is empty. this is the first place it fails...
            if (!this.currentPage) {
                return null;
            }
            return this.currentPage.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageIsFirst", {
        /**
         * Returns a Boolean that tells you whether or not the current page is the first
         * page in the Wizard.
         *
         * This is helpful for determining whether a page is navigable.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * Returns a Boolean that tells you whether or not the current page is the first
         * page in the Wizard.
         *
         * This is helpful for determining whether a page is navigable.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this.pageCollection.firstPage === this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPageIsLast", {
        /**
         * Returns a Boolean that tells you whether or not the current page is the
         * last page in the Wizard.
         *
         * This is used to determine which buttons should display in the wizard footer.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * Returns a Boolean that tells you whether or not the current page is the
         * last page in the Wizard.
         *
         * This is used to determine which buttons should display in the wizard footer.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this.pageCollection.lastPage === this.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "currentPage", {
        /**
         * Returns the ClrWizardPage object of the current page or null.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * Returns the ClrWizardPage object of the current page or null.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            if (!this._currentPage) {
                return null;
            }
            return this._currentPage;
        },
        /**
         * Accepts a ClrWizardPage object, since that object to be the current/active
         * page in the wizard, and emits the ClrWizardPage.onLoad (clrWizardPageOnLoad)
         * event for that page.
         *
         * Note that all of this work is bypassed if the ClrWizardPage object is already
         * the current page.
         *
         * @memberof WizardNavigationService
         */
        set: /**
         * Accepts a ClrWizardPage object, since that object to be the current/active
         * page in the wizard, and emits the ClrWizardPage.onLoad (clrWizardPageOnLoad)
         * event for that page.
         *
         * Note that all of this work is bypassed if the ClrWizardPage object is already
         * the current page.
         *
         * \@memberof WizardNavigationService
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (this._currentPage !== page && !this.wizardStopNavigation) {
                this._currentPage = page;
                page.onLoad.emit(page.id);
                this._currentChanged.next(page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "movedToNextPage", {
        /**
         * An observable used internally to alert the wizard that forward navigation
         * has occurred. It is recommended that you use the Wizard.onMoveNext
         * (clrWizardOnNext) output instead of this one.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * An observable used internally to alert the wizard that forward navigation
         * has occurred. It is recommended that you use the Wizard.onMoveNext
         * (clrWizardOnNext) output instead of this one.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this._movedToNextPage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationService.prototype, "wizardFinished", {
        /**
         * An observable used internally to alert the wizard that the nav service
         * has approved completion of the wizard.
         *
         * It is recommended that you use the Wizard.wizardFinished (clrWizardOnFinish)
         * output instead of this one.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * An observable used internally to alert the wizard that the nav service
         * has approved completion of the wizard.
         *
         * It is recommended that you use the Wizard.wizardFinished (clrWizardOnFinish)
         * output instead of this one.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this._wizardFinished.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This is a public function that can be used to programmatically advance
     * the user to the next page.
     *
     * When invoked, this method will move the wizard to the next page after
     * successful validation. Note that this method goes through all checks
     * and event emissions as if Wizard.next(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.next(false).
     *
     * @memberof WizardNavigationService
     */
    /**
     * This is a public function that can be used to programmatically advance
     * the user to the next page.
     *
     * When invoked, this method will move the wizard to the next page after
     * successful validation. Note that this method goes through all checks
     * and event emissions as if Wizard.next(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.next(false).
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.next = /**
     * This is a public function that can be used to programmatically advance
     * the user to the next page.
     *
     * When invoked, this method will move the wizard to the next page after
     * successful validation. Note that this method goes through all checks
     * and event emissions as if Wizard.next(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.next(false).
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        if (this.currentPageIsLast) {
            this.checkAndCommitCurrentPage('finish');
            return;
        }
        this.checkAndCommitCurrentPage('next');
        if (!this.wizardHasAltNext && !this.wizardStopNavigation) {
            this._movedToNextPage.next(true);
        }
    };
    /**
     * Bypasses checks and most event emissions to force a page to navigate forward.
     *
     * Comparable to calling Wizard.next() or Wizard.forceNext().
     *
     * @memberof WizardNavigationService
     */
    /**
     * Bypasses checks and most event emissions to force a page to navigate forward.
     *
     * Comparable to calling Wizard.next() or Wizard.forceNext().
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.forceNext = /**
     * Bypasses checks and most event emissions to force a page to navigate forward.
     *
     * Comparable to calling Wizard.next() or Wizard.forceNext().
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentPage = this.currentPage;
        /** @type {?} */
        var nextPage = this.pageCollection.getNextPage(currentPage);
        // catch errant null or undefineds that creep in
        if (!nextPage) {
            throw new Error('The wizard has no next page to go to.');
        }
        if (this.wizardStopNavigation) {
            return;
        }
        if (!currentPage.completed) {
            // this is a state that alt next flows can get themselves in...
            this.pageCollection.commitPage(currentPage);
        }
        this.currentPage = nextPage;
    };
    /**
     * Accepts a button/action type as a parameter. Encapsulates all logic for
     * event emissions, state of the current page, and wizard and page level overrides.
     *
     * Avoid calling this function directly unless you really know what you're doing.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Accepts a button/action type as a parameter. Encapsulates all logic for
     * event emissions, state of the current page, and wizard and page level overrides.
     *
     * Avoid calling this function directly unless you really know what you're doing.
     *
     * \@memberof WizardNavigationService
     * @param {?} buttonType
     * @return {?}
     */
    WizardNavigationService.prototype.checkAndCommitCurrentPage = /**
     * Accepts a button/action type as a parameter. Encapsulates all logic for
     * event emissions, state of the current page, and wizard and page level overrides.
     *
     * Avoid calling this function directly unless you really know what you're doing.
     *
     * \@memberof WizardNavigationService
     * @param {?} buttonType
     * @return {?}
     */
    function (buttonType) {
        /** @type {?} */
        var currentPage = this.currentPage;
        /** @type {?} */
        var iAmTheLastPage;
        /** @type {?} */
        var isNext;
        /** @type {?} */
        var isDanger;
        /** @type {?} */
        var isDangerNext;
        /** @type {?} */
        var isDangerFinish;
        /** @type {?} */
        var isFinish;
        if (!currentPage.readyToComplete || this.wizardStopNavigation) {
            return;
        }
        iAmTheLastPage = this.currentPageIsLast;
        isNext = buttonType === 'next';
        isDanger = buttonType === 'danger';
        isDangerNext = isDanger && !iAmTheLastPage;
        isDangerFinish = isDanger && iAmTheLastPage;
        isFinish = buttonType === 'finish' || isDangerFinish;
        if (isFinish && !iAmTheLastPage) {
            return;
        }
        currentPage.primaryButtonClicked.emit(buttonType);
        if (isFinish) {
            currentPage.finishButtonClicked.emit(currentPage);
        }
        else if (isDanger) {
            currentPage.dangerButtonClicked.emit();
        }
        else if (isNext) {
            currentPage.nextButtonClicked.emit();
        }
        if (currentPage.stopNext || currentPage.preventDefault) {
            currentPage.onCommit.emit(currentPage.id);
            return;
        }
        // order is very important with these emitters!
        if (isFinish) {
            // mark page as complete
            if (!this.wizardHasAltNext) {
                this.pageCollection.commitPage(currentPage);
            }
            this._wizardFinished.next();
        }
        if (this.wizardHasAltNext) {
            this.pageCollection.commitPage(currentPage);
            if (isNext || isDangerNext) {
                this._movedToNextPage.next(true);
            }
            // jump out here, no matter what type we're looking at
            return;
        }
        if (isNext || isDangerNext) {
            this.forceNext();
        }
    };
    /**
     * This is a public function that can be used to programmatically conclude
     * the wizard.
     *
     * When invoked, this method will  initiate the work involved with finalizing
     * and finishing the wizard workflow. Note that this method goes through all
     * checks and event emissions as if Wizard.finish(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.finish(false).
     *
     * @memberof WizardNavigationService
     */
    /**
     * This is a public function that can be used to programmatically conclude
     * the wizard.
     *
     * When invoked, this method will  initiate the work involved with finalizing
     * and finishing the wizard workflow. Note that this method goes through all
     * checks and event emissions as if Wizard.finish(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.finish(false).
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.finish = /**
     * This is a public function that can be used to programmatically conclude
     * the wizard.
     *
     * When invoked, this method will  initiate the work involved with finalizing
     * and finishing the wizard workflow. Note that this method goes through all
     * checks and event emissions as if Wizard.finish(false) had been called.
     *
     * In most cases, it makes more sense to use Wizard.finish(false).
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        this.checkAndCommitCurrentPage('finish');
    };
    Object.defineProperty(WizardNavigationService.prototype, "movedToPreviousPage", {
        /**
         * Notifies the wizard when backwards navigation has occurred via the
         * previous button.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * Notifies the wizard when backwards navigation has occurred via the
         * previous button.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this._movedToPreviousPage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Programmatically moves the wizard to the page before the current page.
     *
     * In most instances, it makes more sense to call Wizard.previous()
     * which does the same thing.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Programmatically moves the wizard to the page before the current page.
     *
     * In most instances, it makes more sense to call Wizard.previous()
     * which does the same thing.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.previous = /**
     * Programmatically moves the wizard to the page before the current page.
     *
     * In most instances, it makes more sense to call Wizard.previous()
     * which does the same thing.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousPage;
        if (this.currentPageIsFirst || this.wizardStopNavigation) {
            return;
        }
        previousPage = this.pageCollection.getPreviousPage(this.currentPage);
        if (!previousPage) {
            return;
        }
        this._movedToPreviousPage.next(true);
        if (this.forceForwardNavigation) {
            this.currentPage.completed = false;
        }
        this.currentPage = previousPage;
    };
    Object.defineProperty(WizardNavigationService.prototype, "notifyWizardCancel", {
        /**
         * Notifies the wizard that a user is trying to cancel it.
         *
         * @memberof WizardNavigationService
         */
        get: /**
         * Notifies the wizard that a user is trying to cancel it.
         *
         * \@memberof WizardNavigationService
         * @return {?}
         */
        function () {
            return this._cancelWizard.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Allows a hook into the cancel workflow of the wizard from the nav service. Note that
     * this route goes through all checks and event emissions as if a cancel button had
     * been clicked.
     *
     * In most cases, users looking for a hook into the cancel routine are actually looking
     * for a way to close the wizard from their host component because they have prevented
     * the default cancel action.
     *
     * In this instance, it is recommended that you use Wizard.close() to avoid any event
     * emission loop resulting from an event handler calling back into routine that will
     * again evoke the events it handles.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Allows a hook into the cancel workflow of the wizard from the nav service. Note that
     * this route goes through all checks and event emissions as if a cancel button had
     * been clicked.
     *
     * In most cases, users looking for a hook into the cancel routine are actually looking
     * for a way to close the wizard from their host component because they have prevented
     * the default cancel action.
     *
     * In this instance, it is recommended that you use Wizard.close() to avoid any event
     * emission loop resulting from an event handler calling back into routine that will
     * again evoke the events it handles.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.cancel = /**
     * Allows a hook into the cancel workflow of the wizard from the nav service. Note that
     * this route goes through all checks and event emissions as if a cancel button had
     * been clicked.
     *
     * In most cases, users looking for a hook into the cancel routine are actually looking
     * for a way to close the wizard from their host component because they have prevented
     * the default cancel action.
     *
     * In this instance, it is recommended that you use Wizard.close() to avoid any event
     * emission loop resulting from an event handler calling back into routine that will
     * again evoke the events it handles.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        this._cancelWizard.next();
    };
    /**
     * Performs all required checks to determine if a user can navigate to a page. Checking at each
     * point if a page is navigable -- completed where the page immediately after the last completed
     * page.
     *
     * Takes two parameters. The first one must be either the ClrWizardPage object or the ID of the
     * ClrWizardPage object that you want to make the current page.
     *
     * The second parameter is optional and is a Boolean flag for "lazy completion". What this means
     * is the Wizard will mark all pages between the current page and the page you want to navigate
     * to as completed. This is useful for informational wizards that do not require user action,
     * allowing an easy means for users to jump ahead.
     *
     * To avoid checks on navigation, use ClrWizardPage.makeCurrent() instead.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Performs all required checks to determine if a user can navigate to a page. Checking at each
     * point if a page is navigable -- completed where the page immediately after the last completed
     * page.
     *
     * Takes two parameters. The first one must be either the ClrWizardPage object or the ID of the
     * ClrWizardPage object that you want to make the current page.
     *
     * The second parameter is optional and is a Boolean flag for "lazy completion". What this means
     * is the Wizard will mark all pages between the current page and the page you want to navigate
     * to as completed. This is useful for informational wizards that do not require user action,
     * allowing an easy means for users to jump ahead.
     *
     * To avoid checks on navigation, use ClrWizardPage.makeCurrent() instead.
     *
     * \@memberof WizardNavigationService
     * @param {?} pageToGoToOrId
     * @param {?=} lazyComplete
     * @return {?}
     */
    WizardNavigationService.prototype.goTo = /**
     * Performs all required checks to determine if a user can navigate to a page. Checking at each
     * point if a page is navigable -- completed where the page immediately after the last completed
     * page.
     *
     * Takes two parameters. The first one must be either the ClrWizardPage object or the ID of the
     * ClrWizardPage object that you want to make the current page.
     *
     * The second parameter is optional and is a Boolean flag for "lazy completion". What this means
     * is the Wizard will mark all pages between the current page and the page you want to navigate
     * to as completed. This is useful for informational wizards that do not require user action,
     * allowing an easy means for users to jump ahead.
     *
     * To avoid checks on navigation, use ClrWizardPage.makeCurrent() instead.
     *
     * \@memberof WizardNavigationService
     * @param {?} pageToGoToOrId
     * @param {?=} lazyComplete
     * @return {?}
     */
    function (pageToGoToOrId, lazyComplete) {
        if (lazyComplete === void 0) { lazyComplete = false; }
        /** @type {?} */
        var pageToGoTo;
        /** @type {?} */
        var currentPage;
        /** @type {?} */
        var myPages;
        /** @type {?} */
        var pagesToCheck;
        /** @type {?} */
        var okayToMove;
        /** @type {?} */
        var goingForward;
        /** @type {?} */
        var currentPageIndex;
        /** @type {?} */
        var goToPageIndex;
        myPages = this.pageCollection;
        pageToGoTo = typeof pageToGoToOrId === 'string' ? myPages.getPageById(pageToGoToOrId) : pageToGoToOrId;
        currentPage = this.currentPage;
        // no point in going to the current page. you're there already!
        // also hard block on any navigation when stopNavigation is true
        if (pageToGoTo === currentPage || this.wizardStopNavigation) {
            return;
        }
        currentPageIndex = myPages.getPageIndex(currentPage);
        goToPageIndex = myPages.getPageIndex(pageToGoTo);
        goingForward = goToPageIndex > currentPageIndex;
        pagesToCheck = myPages.getPageRangeFromPages(this.currentPage, pageToGoTo);
        okayToMove = lazyComplete || this.canGoTo(pagesToCheck);
        if (!okayToMove) {
            return;
        }
        if (goingForward && lazyComplete) {
            pagesToCheck.forEach(function (page) {
                if (page !== pageToGoTo) {
                    page.completed = true;
                }
            });
        }
        else if (!goingForward && this.forceForwardNavigation) {
            pagesToCheck.forEach(function (page) {
                page.completed = false;
            });
        }
        this.currentPage = pageToGoTo;
    };
    /**
     * Accepts a range of ClrWizardPage objects as a parameter. Performs the work of checking
     * those objects to determine if navigation can be accomplished.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Accepts a range of ClrWizardPage objects as a parameter. Performs the work of checking
     * those objects to determine if navigation can be accomplished.
     *
     * \@memberof WizardNavigationService
     * @param {?} pagesToCheck
     * @return {?}
     */
    WizardNavigationService.prototype.canGoTo = /**
     * Accepts a range of ClrWizardPage objects as a parameter. Performs the work of checking
     * those objects to determine if navigation can be accomplished.
     *
     * \@memberof WizardNavigationService
     * @param {?} pagesToCheck
     * @return {?}
     */
    function (pagesToCheck) {
        /** @type {?} */
        var okayToMove = true;
        /** @type {?} */
        var myPages = this.pageCollection;
        // previous page can be important when moving because if it's completed it
        // allows us to move to the page even if it's incomplete...
        /** @type {?} */
        var previousPagePasses;
        if (!pagesToCheck || pagesToCheck.length < 1) {
            return false;
        }
        pagesToCheck.forEach(function (page) {
            /** @type {?} */
            var previousPage;
            if (!okayToMove) {
                return;
            }
            if (page.completed) {
                // default is true. just jump out instead of complicating it.
                return;
            }
            // so we know our page is not completed...
            previousPage = myPages.getPageIndex(page) > 0 ? myPages.getPreviousPage(page) : null;
            previousPagePasses = previousPage === null || previousPage.completed === true;
            // we are false if not the current page AND previous page is not completed
            // (but must have a previous page)
            if (!page.current && !previousPagePasses) {
                okayToMove = false;
            }
            // falls through to true as default
        });
        return okayToMove;
    };
    /**
     * Looks through the collection of pages to find the first one that is incomplete
     * and makes that page the current/active page.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Looks through the collection of pages to find the first one that is incomplete
     * and makes that page the current/active page.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.setLastEnabledPageCurrent = /**
     * Looks through the collection of pages to find the first one that is incomplete
     * and makes that page the current/active page.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        /** @type {?} */
        var allPages = this.pageCollection.pagesAsArray;
        /** @type {?} */
        var lastCompletedPageIndex = null;
        allPages.forEach(function (page, index) {
            if (page.completed) {
                lastCompletedPageIndex = index;
            }
        });
        if (lastCompletedPageIndex === null) {
            // always is at least the first item...
            lastCompletedPageIndex = 0;
        }
        else if (lastCompletedPageIndex + 1 < allPages.length) {
            lastCompletedPageIndex = lastCompletedPageIndex + 1;
        }
        this.currentPage = allPages[lastCompletedPageIndex];
    };
    /**
     * Finds the first page in the collection of pages and makes that page the
     * current/active page.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Finds the first page in the collection of pages and makes that page the
     * current/active page.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.setFirstPageCurrent = /**
     * Finds the first page in the collection of pages and makes that page the
     * current/active page.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        this.currentPage = this.pageCollection.pagesAsArray[0];
    };
    /**
     * Updates the stepnav on the left side of the wizard when pages are dynamically
     * added or removed from the collection of pages.
     *
     * @memberof WizardNavigationService
     */
    /**
     * Updates the stepnav on the left side of the wizard when pages are dynamically
     * added or removed from the collection of pages.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    WizardNavigationService.prototype.updateNavigation = /**
     * Updates the stepnav on the left side of the wizard when pages are dynamically
     * added or removed from the collection of pages.
     *
     * \@memberof WizardNavigationService
     * @return {?}
     */
    function () {
        /** @type {?} */
        var toSetCurrent;
        /** @type {?} */
        var currentPageRemoved;
        this.pageCollection.updateCompletedStates();
        currentPageRemoved = this.pageCollection.pagesAsArray.indexOf(this.currentPage) < 0;
        if (currentPageRemoved) {
            toSetCurrent = this.pageCollection.findFirstIncompletePage();
            this.currentPage = toSetCurrent;
        }
    };
    WizardNavigationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WizardNavigationService.ctorParameters = function () { return [
        { type: PageCollectionService },
        { type: ButtonHubService }
    ]; };
    return WizardNavigationService;
}());
export { WizardNavigationService };
if (false) {
    /**
     * Is notified when a previous button is clicked in the wizard. Performs checks
     * before alerting the current page of the button click. Enacts navigation to
     * the previous page if not overridden at the page level.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.previousButtonSubscription;
    /**
     * Is notified when a Next button is clicked in the wizard.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.nextButtonSubscription;
    /**
     * Is notified when a danger button is clicked in the wizard.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.dangerButtonSubscription;
    /**
     * Is notified when a  finish button is clicked in the wizard.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.finishButtonSubscription;
    /**
     * Is notified when a Custom button is clicked in the wizard.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.customButtonSubscription;
    /**
     * Is notified when a Cancel button is clicked in the wizard. Notifies the wizard,
     * which handles all cancel functionality, if cancel is not overridden at the page
     * level.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.cancelButtonSubscription;
    /**
     * Resets navigation to make the first page current when the page collection service
     * emits an event notifying WizardNavigationService that it has reset all pages
     * to their pristine, incomplete state.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.pagesResetSubscription;
    /**
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._currentChanged;
    /**
     * A Boolean flag used by the ClrWizardPage to avoid a race condition when pages are
     * loading and there is no current page defined.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.navServiceLoaded;
    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.forceForward (clrWizardForceForwardNavigation) input. When true,
     * navigating backwards in the stepnav menu will reset any skipped pages' completed
     * state to false.
     *
     * This is useful when a wizard executes validation on a page-by-page basis when
     * the next button is clicked.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.forceForwardNavigation;
    /**
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._currentPage;
    /**
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._movedToNextPage;
    /**
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._wizardFinished;
    /**
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._movedToPreviousPage;
    /**
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype._cancelWizard;
    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopCancel (clrWizardPreventDefaultCancel) input. When true, the cancel
     * routine is subverted and must be reinstated in the host component calling Wizard.close()
     * at some point.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.wizardHasAltCancel;
    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopNext (clrWizardPreventDefaultNext) input. When true, the next and finish
     * routines are subverted and must be reinstated in the host component calling Wizard.next(),
     * Wizard.forceNext(), Wizard.finish(), or Wizard.forceFinish().
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.wizardHasAltNext;
    /**
     * A boolean flag shared across the Wizard subcomponents that follows the value
     * of the Wizard.stopNavigation (clrWizardPreventNavigation) input. When true, all
     * navigational elements in the wizard are disabled.
     *
     * This is intended to freeze the wizard in place. Events are not fired so this is
     * not a way to implement alternate functionality for navigation.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.wizardStopNavigation;
    /**
     * A boolean flag shared with the stepnav items that prevents user clicks on
     * stepnav items from navigating the wizard.
     *
     * \@memberof WizardNavigationService
     * @type {?}
     */
    WizardNavigationService.prototype.wizardDisableStepnav;
    /** @type {?} */
    WizardNavigationService.prototype.pageCollection;
    /** @type {?} */
    WizardNavigationService.prototype.buttonService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLW5hdmlnYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC9wcm92aWRlcnMvd2l6YXJkLW5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCbEU7SUF5REU7Ozs7Ozs7T0FPRztJQUNILGlDQUFtQixjQUFxQyxFQUFTLGFBQStCO1FBQWhHLGlCQTZDQztRQTdDa0IsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWtCOzs7OztRQWlFeEYsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQzs7Ozs7OztRQXFCaEQscUJBQWdCLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7UUFhekIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDOzs7O1FBMkU5QixxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDOzs7O1FBZ0IxQyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUErSnpDLHlCQUFvQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7Ozs7UUE2QzlDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7Ozs7Ozs7O1FBc0NwQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7Ozs7Ozs7OztRQVVwQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7Ozs7Ozs7O1FBWWxDLHlCQUFvQixHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQVF0Qyx5QkFB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OUMsMkRBQThDOzs7Ozs7O0lBTzlDLDJEQUE4Qzs7Ozs7Ozs7O0lBUzlDLDJEQUE4Qzs7Ozs7Ozs7O0lBUzlDLHlEQUE0Qzs7Ozs7O0lBMkU1QyxrREFBdUQ7Ozs7Ozs7O0lBcUJ2RCxtREFBZ0M7Ozs7Ozs7Ozs7Ozs7SUFhaEMseURBQXNDOzs7OztJQXdDdEMsK0NBQW9DOzs7OztJQW1DcEMsbURBQWtEOzs7OztJQWdCbEQsa0RBQWlEOzs7OztJQStKakQsdURBQXNEOzs7OztJQTZDdEQsZ0RBQTJDOzs7Ozs7Ozs7O0lBc0MzQyxxREFBMkM7Ozs7Ozs7Ozs7SUFVM0MsbURBQXlDOzs7Ozs7Ozs7Ozs7SUFZekMsdURBQTZDOzs7Ozs7OztJQVE3Qyx1REFBNkM7O0lBOWNqQyxpREFBNEM7O0lBQUUsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2xyV2l6YXJkUGFnZSB9IGZyb20gJy4uL3dpemFyZC1wYWdlJztcblxuaW1wb3J0IHsgQnV0dG9uSHViU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLWh1Yi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb2xsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vcGFnZS1jb2xsZWN0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIFBlcmZvcm1zIG5hdmlnYXRpb24gZnVuY3Rpb25zIGZvciBhIHdpemFyZCBhbmQgbWFuYWdlcyB0aGUgY3VycmVudCBwYWdlLiBQcmVzZW50ZWQgYXMgYVxuICogc2VwYXJhdGUgc2VydmljZSB0byBlbmNhcHN1bGF0ZSB0aGUgYmVoYXZpb3Igb2YgbmF2aWdhdGluZyBhbmQgY29tcGxldGluZyB0aGUgd2l6YXJkIHNvXG4gKiB0aGF0IGl0IGNhbiBiZSBzaGFyZWQgYWNyb3NzIHRoZSB3aXphcmQgYW5kIGl0cyBzdWItY29tcG9uZW50cy5cbiAqXG4gKiBUaGUgZWFzaWVzdCB3YXkgdG8gYWNjZXNzIHRoZSBuYXZpZ2F0aW9uIHNlcnZpY2UgaXMgdGhlcmUgYSByZWZlcmVuY2Ugb24geW91ciB3aXphcmQuIFRoZVxuICogRm9sbG93aW5nIGV4YW1wbGUgd291bGQgYWxsb3cgeW91IHRvIGFjY2VzcyB5b3VyIGluc3RhbmNlIG9mIHRoZSB3aXphcmQgZnJvbSB5b3VyIGhvc3RcbiAqIGNvbXBvbmVudCBhbmQgdGhlcmVieSBhY2Nlc3MgdGhlIG5hdmlnYXRpb24gc2VydmljZSB2aWEgWW91ckhvc3RDb21wb25lbnQud2l6YXJkLm5hdlNlcnZpY2UuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxjbHItd2l6YXJkICN3aXphcmQgLi4uPlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY2xhc3MgWW91ckhvc3RDb21wb25lbnQge1xuICogICBAVmlld0NoaWxkKFwid2l6YXJkXCIpIHdpemFyZDogV2l6YXJkO1xuICogICAuLi5cbiAqIH1cbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaXphcmROYXZpZ2F0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBJcyBub3RpZmllZCB3aGVuIGEgcHJldmlvdXMgYnV0dG9uIGlzIGNsaWNrZWQgaW4gdGhlIHdpemFyZC4gUGVyZm9ybXMgY2hlY2tzXG4gICAqIGJlZm9yZSBhbGVydGluZyB0aGUgY3VycmVudCBwYWdlIG9mIHRoZSBidXR0b24gY2xpY2suIEVuYWN0cyBuYXZpZ2F0aW9uIHRvXG4gICAqIHRoZSBwcmV2aW91cyBwYWdlIGlmIG5vdCBvdmVycmlkZGVuIGF0IHRoZSBwYWdlIGxldmVsLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBwcmV2aW91c0J1dHRvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBJcyBub3RpZmllZCB3aGVuIGEgTmV4dCBidXR0b24gaXMgY2xpY2tlZCBpbiB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBuZXh0QnV0dG9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIElzIG5vdGlmaWVkIHdoZW4gYSBkYW5nZXIgYnV0dG9uIGlzIGNsaWNrZWQgaW4gdGhlIHdpemFyZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgZGFuZ2VyQnV0dG9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIElzIG5vdGlmaWVkIHdoZW4gYSAgZmluaXNoIGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGZpbmlzaEJ1dHRvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBJcyBub3RpZmllZCB3aGVuIGEgQ3VzdG9tIGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGN1c3RvbUJ1dHRvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBJcyBub3RpZmllZCB3aGVuIGEgQ2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSB3aXphcmQuIE5vdGlmaWVzIHRoZSB3aXphcmQsXG4gICAqIHdoaWNoIGhhbmRsZXMgYWxsIGNhbmNlbCBmdW5jdGlvbmFsaXR5LCBpZiBjYW5jZWwgaXMgbm90IG92ZXJyaWRkZW4gYXQgdGhlIHBhZ2VcbiAgICogbGV2ZWwuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGNhbmNlbEJ1dHRvblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBSZXNldHMgbmF2aWdhdGlvbiB0byBtYWtlIHRoZSBmaXJzdCBwYWdlIGN1cnJlbnQgd2hlbiB0aGUgcGFnZSBjb2xsZWN0aW9uIHNlcnZpY2VcbiAgICogZW1pdHMgYW4gZXZlbnQgbm90aWZ5aW5nIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlIHRoYXQgaXQgaGFzIHJlc2V0IGFsbCBwYWdlc1xuICAgKiB0byB0aGVpciBwcmlzdGluZSwgaW5jb21wbGV0ZSBzdGF0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgcGFnZXNSZXNldFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlLiBBbHNvIHNldHMgdXAgc3Vic2NyaXB0aW9uc1xuICAgKiB0aGF0IGxpc3RlbiB0byB0aGUgYnV0dG9uIHNlcnZpY2UgdG8gZGV0ZXJtaW5lIHdoZW4gYSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZFxuICAgKiBpbiB0aGUgd2l6YXJkLiBJcyBhbHNvIHJlc3BvbnNpYmxlIGZvciB0YWtpbmcgYWN0aW9uIHdoZW4gdGhlIHBhZ2UgY29sbGVjdGlvblxuICAgKiByZXF1ZXN0cyB0aGF0IG5hdmlnYXRpb24gYmUgcmVzZXQgdG8gaXRzIHByaXN0aW5lIHN0YXRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlQ29sbGVjdGlvbjogUGFnZUNvbGxlY3Rpb25TZXJ2aWNlLCBwdWJsaWMgYnV0dG9uU2VydmljZTogQnV0dG9uSHViU2VydmljZSkge1xuICAgIHRoaXMucHJldmlvdXNCdXR0b25TdWJzY3JpcHRpb24gPSB0aGlzLmJ1dHRvblNlcnZpY2UucHJldmlvdXNCdG5DbGlja2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZUlzRmlyc3QgfHwgY3VycmVudFBhZ2UucHJldmlvdXNTdGVwRGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3VycmVudFBhZ2UucHJldmlvdXNCdXR0b25DbGlja2VkLmVtaXQoY3VycmVudFBhZ2UpO1xuICAgICAgaWYgKCFjdXJyZW50UGFnZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm5leHRCdXR0b25TdWJzY3JpcHRpb24gPSB0aGlzLmJ1dHRvblNlcnZpY2UubmV4dEJ0bkNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tBbmRDb21taXRDdXJyZW50UGFnZSgnbmV4dCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kYW5nZXJCdXR0b25TdWJzY3JpcHRpb24gPSB0aGlzLmJ1dHRvblNlcnZpY2UuZGFuZ2VyQnRuQ2xpY2tlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0FuZENvbW1pdEN1cnJlbnRQYWdlKCdkYW5nZXInKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZmluaXNoQnV0dG9uU3Vic2NyaXB0aW9uID0gdGhpcy5idXR0b25TZXJ2aWNlLmZpbmlzaEJ0bkNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tBbmRDb21taXRDdXJyZW50UGFnZSgnZmluaXNoJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmN1c3RvbUJ1dHRvblN1YnNjcmlwdGlvbiA9IHRoaXMuYnV0dG9uU2VydmljZS5jdXN0b21CdG5DbGlja2VkLnN1YnNjcmliZSgodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXRoaXMud2l6YXJkU3RvcE5hdmlnYXRpb24pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZS5jdXN0b21CdXR0b25DbGlja2VkLmVtaXQodHlwZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbmNlbEJ1dHRvblN1YnNjcmlwdGlvbiA9IHRoaXMuYnV0dG9uU2VydmljZS5jYW5jZWxCdG5DbGlja2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy53aXphcmRTdG9wTmF2aWdhdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UucGFnZU9uQ2FuY2VsLmVtaXQodGhpcy5jdXJyZW50UGFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5wYWdlc1Jlc2V0U3Vic2NyaXB0aW9uID0gdGhpcy5wYWdlQ29sbGVjdGlvbi5wYWdlc1Jlc2V0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldEZpcnN0UGFnZUN1cnJlbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJldmlvdXNCdXR0b25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLm5leHRCdXR0b25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmRhbmdlckJ1dHRvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZmluaXNoQnV0dG9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jdXN0b21CdXR0b25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucGFnZXNSZXNldFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBfY3VycmVudENoYW5nZWQgPSBuZXcgU3ViamVjdDxDbHJXaXphcmRQYWdlPigpO1xuXG4gIC8qKlxuICAgKiBBbiBPYnNlcnZhYmxlIHRoYXQgaXMgcHJlZG9taW5hbnRseSB1c2VkIGFtb25nc3QgdGhlIHN1YmNvbXBvbmVudHMgYW5kIHNlcnZpY2VzXG4gICAqIG9mIHRoZSB3aXphcmQuIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgdXNlcnMgbGlzdGVuIHRvIHRoZSBDbHJXaXphcmRQYWdlLm9uTG9hZFxuICAgKiAoY2xyV2l6YXJkUGFnZU9uTG9hZCkgb3V0cHV0IGluc3RlYWQgb2YgdGhpcyBPYnNlcnZhYmxlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFBhZ2VDaGFuZ2VkKCk6IE9ic2VydmFibGU8Q2xyV2l6YXJkUGFnZT4ge1xuICAgIC8vIFRPRE86IE1BS0UgU1VSRSBFWFRFUk5BTCBPVVRQVVRTIFNBWSAnQ0hBTkdFJyBOT1QgJ0NIQU5HRUQnXG4gICAgLy8gQSBCUkVBS0lORyBDSEFOR0UgU08gQVdBSVRJTkcgTUlOT1IgUkVMRUFTRVxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbmdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIEJvb2xlYW4gZmxhZyB1c2VkIGJ5IHRoZSBDbHJXaXphcmRQYWdlIHRvIGF2b2lkIGEgcmFjZSBjb25kaXRpb24gd2hlbiBwYWdlcyBhcmVcbiAgICogbG9hZGluZyBhbmQgdGhlcmUgaXMgbm8gY3VycmVudCBwYWdlIGRlZmluZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIG5hdlNlcnZpY2VMb2FkZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGZsYWcgc2hhcmVkIGFjcm9zcyB0aGUgV2l6YXJkIHN1YmNvbXBvbmVudHMgdGhhdCBmb2xsb3dzIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgV2l6YXJkLmZvcmNlRm9yd2FyZCAoY2xyV2l6YXJkRm9yY2VGb3J3YXJkTmF2aWdhdGlvbikgaW5wdXQuIFdoZW4gdHJ1ZSxcbiAgICogbmF2aWdhdGluZyBiYWNrd2FyZHMgaW4gdGhlIHN0ZXBuYXYgbWVudSB3aWxsIHJlc2V0IGFueSBza2lwcGVkIHBhZ2VzJyBjb21wbGV0ZWRcbiAgICogc3RhdGUgdG8gZmFsc2UuXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSB3aXphcmQgZXhlY3V0ZXMgdmFsaWRhdGlvbiBvbiBhIHBhZ2UtYnktcGFnZSBiYXNpcyB3aGVuXG4gICAqIHRoZSBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBmb3JjZUZvcndhcmROYXZpZ2F0aW9uID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGdldCBjdXJyZW50UGFnZVRpdGxlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIC8vIHdoZW4gdGhlIHF1ZXJ5bGlzdCBvZiBwYWdlcyBpcyBlbXB0eS4gdGhpcyBpcyB0aGUgZmlyc3QgcGxhY2UgaXQgZmFpbHMuLi5cbiAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZS50aXRsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQm9vbGVhbiB0aGF0IHRlbGxzIHlvdSB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBwYWdlIGlzIHRoZSBmaXJzdFxuICAgKiBwYWdlIGluIHRoZSBXaXphcmQuXG4gICAqXG4gICAqIFRoaXMgaXMgaGVscGZ1bCBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhIHBhZ2UgaXMgbmF2aWdhYmxlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFBhZ2VJc0ZpcnN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VDb2xsZWN0aW9uLmZpcnN0UGFnZSA9PT0gdGhpcy5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQm9vbGVhbiB0aGF0IHRlbGxzIHlvdSB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBwYWdlIGlzIHRoZVxuICAgKiBsYXN0IHBhZ2UgaW4gdGhlIFdpemFyZC5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGljaCBidXR0b25zIHNob3VsZCBkaXNwbGF5IGluIHRoZSB3aXphcmQgZm9vdGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgY3VycmVudFBhZ2VJc0xhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZUNvbGxlY3Rpb24ubGFzdFBhZ2UgPT09IHRoaXMuY3VycmVudFBhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIF9jdXJyZW50UGFnZTogQ2xyV2l6YXJkUGFnZTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQ2xyV2l6YXJkUGFnZSBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgcGFnZSBvciBudWxsLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIGdldCBjdXJyZW50UGFnZSgpOiBDbHJXaXphcmRQYWdlIHtcbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSBDbHJXaXphcmRQYWdlIG9iamVjdCwgc2luY2UgdGhhdCBvYmplY3QgdG8gYmUgdGhlIGN1cnJlbnQvYWN0aXZlXG4gICAqIHBhZ2UgaW4gdGhlIHdpemFyZCwgYW5kIGVtaXRzIHRoZSBDbHJXaXphcmRQYWdlLm9uTG9hZCAoY2xyV2l6YXJkUGFnZU9uTG9hZClcbiAgICogZXZlbnQgZm9yIHRoYXQgcGFnZS5cbiAgICpcbiAgICogTm90ZSB0aGF0IGFsbCBvZiB0aGlzIHdvcmsgaXMgYnlwYXNzZWQgaWYgdGhlIENscldpemFyZFBhZ2Ugb2JqZWN0IGlzIGFscmVhZHlcbiAgICogdGhlIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBzZXQgY3VycmVudFBhZ2UocGFnZTogQ2xyV2l6YXJkUGFnZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSAhPT0gcGFnZSAmJiAhdGhpcy53aXphcmRTdG9wTmF2aWdhdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgcGFnZS5vbkxvYWQuZW1pdChwYWdlLmlkKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRDaGFuZ2VkLm5leHQocGFnZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHJpdmF0ZSBfbW92ZWRUb05leHRQYWdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB1c2VkIGludGVybmFsbHkgdG8gYWxlcnQgdGhlIHdpemFyZCB0aGF0IGZvcndhcmQgbmF2aWdhdGlvblxuICAgKiBoYXMgb2NjdXJyZWQuIEl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IHVzZSB0aGUgV2l6YXJkLm9uTW92ZU5leHRcbiAgICogKGNscldpemFyZE9uTmV4dCkgb3V0cHV0IGluc3RlYWQgb2YgdGhpcyBvbmUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGdldCBtb3ZlZFRvTmV4dFBhZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmVkVG9OZXh0UGFnZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHByaXZhdGUgX3dpemFyZEZpbmlzaGVkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB1c2VkIGludGVybmFsbHkgdG8gYWxlcnQgdGhlIHdpemFyZCB0aGF0IHRoZSBuYXYgc2VydmljZVxuICAgKiBoYXMgYXBwcm92ZWQgY29tcGxldGlvbiBvZiB0aGUgd2l6YXJkLlxuICAgKlxuICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgdGhlIFdpemFyZC53aXphcmRGaW5pc2hlZCAoY2xyV2l6YXJkT25GaW5pc2gpXG4gICAqIG91dHB1dCBpbnN0ZWFkIG9mIHRoaXMgb25lLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgd2l6YXJkRmluaXNoZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpemFyZEZpbmlzaGVkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwdWJsaWMgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IGFkdmFuY2VcbiAgICogdGhlIHVzZXIgdG8gdGhlIG5leHQgcGFnZS5cbiAgICpcbiAgICogV2hlbiBpbnZva2VkLCB0aGlzIG1ldGhvZCB3aWxsIG1vdmUgdGhlIHdpemFyZCB0byB0aGUgbmV4dCBwYWdlIGFmdGVyXG4gICAqIHN1Y2Nlc3NmdWwgdmFsaWRhdGlvbi4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGdvZXMgdGhyb3VnaCBhbGwgY2hlY2tzXG4gICAqIGFuZCBldmVudCBlbWlzc2lvbnMgYXMgaWYgV2l6YXJkLm5leHQoZmFsc2UpIGhhZCBiZWVuIGNhbGxlZC5cbiAgICpcbiAgICogSW4gbW9zdCBjYXNlcywgaXQgbWFrZXMgbW9yZSBzZW5zZSB0byB1c2UgV2l6YXJkLm5leHQoZmFsc2UpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBuZXh0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlSXNMYXN0KSB7XG4gICAgICB0aGlzLmNoZWNrQW5kQ29tbWl0Q3VycmVudFBhZ2UoJ2ZpbmlzaCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tBbmRDb21taXRDdXJyZW50UGFnZSgnbmV4dCcpO1xuXG4gICAgaWYgKCF0aGlzLndpemFyZEhhc0FsdE5leHQgJiYgIXRoaXMud2l6YXJkU3RvcE5hdmlnYXRpb24pIHtcbiAgICAgIHRoaXMuX21vdmVkVG9OZXh0UGFnZS5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCeXBhc3NlcyBjaGVja3MgYW5kIG1vc3QgZXZlbnQgZW1pc3Npb25zIHRvIGZvcmNlIGEgcGFnZSB0byBuYXZpZ2F0ZSBmb3J3YXJkLlxuICAgKlxuICAgKiBDb21wYXJhYmxlIHRvIGNhbGxpbmcgV2l6YXJkLm5leHQoKSBvciBXaXphcmQuZm9yY2VOZXh0KCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGZvcmNlTmV4dCgpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZTogQ2xyV2l6YXJkUGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgbmV4dFBhZ2U6IENscldpemFyZFBhZ2UgPSB0aGlzLnBhZ2VDb2xsZWN0aW9uLmdldE5leHRQYWdlKGN1cnJlbnRQYWdlKTtcblxuICAgIC8vIGNhdGNoIGVycmFudCBudWxsIG9yIHVuZGVmaW5lZHMgdGhhdCBjcmVlcCBpblxuICAgIGlmICghbmV4dFBhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHdpemFyZCBoYXMgbm8gbmV4dCBwYWdlIHRvIGdvIHRvLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpemFyZFN0b3BOYXZpZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50UGFnZS5jb21wbGV0ZWQpIHtcbiAgICAgIC8vIHRoaXMgaXMgYSBzdGF0ZSB0aGF0IGFsdCBuZXh0IGZsb3dzIGNhbiBnZXQgdGhlbXNlbHZlcyBpbi4uLlxuICAgICAgdGhpcy5wYWdlQ29sbGVjdGlvbi5jb21taXRQYWdlKGN1cnJlbnRQYWdlKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IG5leHRQYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSBidXR0b24vYWN0aW9uIHR5cGUgYXMgYSBwYXJhbWV0ZXIuIEVuY2Fwc3VsYXRlcyBhbGwgbG9naWMgZm9yXG4gICAqIGV2ZW50IGVtaXNzaW9ucywgc3RhdGUgb2YgdGhlIGN1cnJlbnQgcGFnZSwgYW5kIHdpemFyZCBhbmQgcGFnZSBsZXZlbCBvdmVycmlkZXMuXG4gICAqXG4gICAqIEF2b2lkIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSB1bmxlc3MgeW91IHJlYWxseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBjaGVja0FuZENvbW1pdEN1cnJlbnRQYWdlKGJ1dHRvblR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlOiBDbHJXaXphcmRQYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcbiAgICBsZXQgaUFtVGhlTGFzdFBhZ2U6IGJvb2xlYW47XG5cbiAgICBsZXQgaXNOZXh0OiBib29sZWFuO1xuICAgIGxldCBpc0RhbmdlcjogYm9vbGVhbjtcbiAgICBsZXQgaXNEYW5nZXJOZXh0OiBib29sZWFuO1xuICAgIGxldCBpc0RhbmdlckZpbmlzaDogYm9vbGVhbjtcbiAgICBsZXQgaXNGaW5pc2g6IGJvb2xlYW47XG5cbiAgICBpZiAoIWN1cnJlbnRQYWdlLnJlYWR5VG9Db21wbGV0ZSB8fCB0aGlzLndpemFyZFN0b3BOYXZpZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaUFtVGhlTGFzdFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlSXNMYXN0O1xuXG4gICAgaXNOZXh0ID0gYnV0dG9uVHlwZSA9PT0gJ25leHQnO1xuICAgIGlzRGFuZ2VyID0gYnV0dG9uVHlwZSA9PT0gJ2Rhbmdlcic7XG4gICAgaXNEYW5nZXJOZXh0ID0gaXNEYW5nZXIgJiYgIWlBbVRoZUxhc3RQYWdlO1xuICAgIGlzRGFuZ2VyRmluaXNoID0gaXNEYW5nZXIgJiYgaUFtVGhlTGFzdFBhZ2U7XG4gICAgaXNGaW5pc2ggPSBidXR0b25UeXBlID09PSAnZmluaXNoJyB8fCBpc0RhbmdlckZpbmlzaDtcblxuICAgIGlmIChpc0ZpbmlzaCAmJiAhaUFtVGhlTGFzdFBhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50UGFnZS5wcmltYXJ5QnV0dG9uQ2xpY2tlZC5lbWl0KGJ1dHRvblR5cGUpO1xuXG4gICAgaWYgKGlzRmluaXNoKSB7XG4gICAgICBjdXJyZW50UGFnZS5maW5pc2hCdXR0b25DbGlja2VkLmVtaXQoY3VycmVudFBhZ2UpO1xuICAgIH0gZWxzZSBpZiAoaXNEYW5nZXIpIHtcbiAgICAgIGN1cnJlbnRQYWdlLmRhbmdlckJ1dHRvbkNsaWNrZWQuZW1pdCgpO1xuICAgIH0gZWxzZSBpZiAoaXNOZXh0KSB7XG4gICAgICBjdXJyZW50UGFnZS5uZXh0QnV0dG9uQ2xpY2tlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYWdlLnN0b3BOZXh0IHx8IGN1cnJlbnRQYWdlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBjdXJyZW50UGFnZS5vbkNvbW1pdC5lbWl0KGN1cnJlbnRQYWdlLmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvcmRlciBpcyB2ZXJ5IGltcG9ydGFudCB3aXRoIHRoZXNlIGVtaXR0ZXJzIVxuICAgIGlmIChpc0ZpbmlzaCkge1xuICAgICAgLy8gbWFyayBwYWdlIGFzIGNvbXBsZXRlXG4gICAgICBpZiAoIXRoaXMud2l6YXJkSGFzQWx0TmV4dCkge1xuICAgICAgICB0aGlzLnBhZ2VDb2xsZWN0aW9uLmNvbW1pdFBhZ2UoY3VycmVudFBhZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5fd2l6YXJkRmluaXNoZWQubmV4dCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpemFyZEhhc0FsdE5leHQpIHtcbiAgICAgIHRoaXMucGFnZUNvbGxlY3Rpb24uY29tbWl0UGFnZShjdXJyZW50UGFnZSk7XG5cbiAgICAgIGlmIChpc05leHQgfHwgaXNEYW5nZXJOZXh0KSB7XG4gICAgICAgIHRoaXMuX21vdmVkVG9OZXh0UGFnZS5uZXh0KHRydWUpO1xuICAgICAgfVxuICAgICAgLy8ganVtcCBvdXQgaGVyZSwgbm8gbWF0dGVyIHdoYXQgdHlwZSB3ZSdyZSBsb29raW5nIGF0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzTmV4dCB8fCBpc0Rhbmdlck5leHQpIHtcbiAgICAgIHRoaXMuZm9yY2VOZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwdWJsaWMgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IGNvbmNsdWRlXG4gICAqIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIFdoZW4gaW52b2tlZCwgdGhpcyBtZXRob2Qgd2lsbCAgaW5pdGlhdGUgdGhlIHdvcmsgaW52b2x2ZWQgd2l0aCBmaW5hbGl6aW5nXG4gICAqIGFuZCBmaW5pc2hpbmcgdGhlIHdpemFyZCB3b3JrZmxvdy4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGdvZXMgdGhyb3VnaCBhbGxcbiAgICogY2hlY2tzIGFuZCBldmVudCBlbWlzc2lvbnMgYXMgaWYgV2l6YXJkLmZpbmlzaChmYWxzZSkgaGFkIGJlZW4gY2FsbGVkLlxuICAgKlxuICAgKiBJbiBtb3N0IGNhc2VzLCBpdCBtYWtlcyBtb3JlIHNlbnNlIHRvIHVzZSBXaXphcmQuZmluaXNoKGZhbHNlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgZmluaXNoKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tBbmRDb21taXRDdXJyZW50UGFnZSgnZmluaXNoJyk7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIF9tb3ZlZFRvUHJldmlvdXNQYWdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogTm90aWZpZXMgdGhlIHdpemFyZCB3aGVuIGJhY2t3YXJkcyBuYXZpZ2F0aW9uIGhhcyBvY2N1cnJlZCB2aWEgdGhlXG4gICAqIHByZXZpb3VzIGJ1dHRvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IG1vdmVkVG9QcmV2aW91c1BhZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX21vdmVkVG9QcmV2aW91c1BhZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvZ3JhbW1hdGljYWxseSBtb3ZlcyB0aGUgd2l6YXJkIHRvIHRoZSBwYWdlIGJlZm9yZSB0aGUgY3VycmVudCBwYWdlLlxuICAgKlxuICAgKiBJbiBtb3N0IGluc3RhbmNlcywgaXQgbWFrZXMgbW9yZSBzZW5zZSB0byBjYWxsIFdpemFyZC5wcmV2aW91cygpXG4gICAqIHdoaWNoIGRvZXMgdGhlIHNhbWUgdGhpbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIGxldCBwcmV2aW91c1BhZ2U6IENscldpemFyZFBhZ2U7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZUlzRmlyc3QgfHwgdGhpcy53aXphcmRTdG9wTmF2aWdhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZpb3VzUGFnZSA9IHRoaXMucGFnZUNvbGxlY3Rpb24uZ2V0UHJldmlvdXNQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xuXG4gICAgaWYgKCFwcmV2aW91c1BhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb3ZlZFRvUHJldmlvdXNQYWdlLm5leHQodHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5mb3JjZUZvcndhcmROYXZpZ2F0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwcmV2aW91c1BhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwcml2YXRlIF9jYW5jZWxXaXphcmQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIE5vdGlmaWVzIHRoZSB3aXphcmQgdGhhdCBhIHVzZXIgaXMgdHJ5aW5nIHRvIGNhbmNlbCBpdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5vdGlmeVdpemFyZENhbmNlbCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5jZWxXaXphcmQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIGEgaG9vayBpbnRvIHRoZSBjYW5jZWwgd29ya2Zsb3cgb2YgdGhlIHdpemFyZCBmcm9tIHRoZSBuYXYgc2VydmljZS4gTm90ZSB0aGF0XG4gICAqIHRoaXMgcm91dGUgZ29lcyB0aHJvdWdoIGFsbCBjaGVja3MgYW5kIGV2ZW50IGVtaXNzaW9ucyBhcyBpZiBhIGNhbmNlbCBidXR0b24gaGFkXG4gICAqIGJlZW4gY2xpY2tlZC5cbiAgICpcbiAgICogSW4gbW9zdCBjYXNlcywgdXNlcnMgbG9va2luZyBmb3IgYSBob29rIGludG8gdGhlIGNhbmNlbCByb3V0aW5lIGFyZSBhY3R1YWxseSBsb29raW5nXG4gICAqIGZvciBhIHdheSB0byBjbG9zZSB0aGUgd2l6YXJkIGZyb20gdGhlaXIgaG9zdCBjb21wb25lbnQgYmVjYXVzZSB0aGV5IGhhdmUgcHJldmVudGVkXG4gICAqIHRoZSBkZWZhdWx0IGNhbmNlbCBhY3Rpb24uXG4gICAqXG4gICAqIEluIHRoaXMgaW5zdGFuY2UsIGl0IGlzIHJlY29tbWVuZGVkIHRoYXQgeW91IHVzZSBXaXphcmQuY2xvc2UoKSB0byBhdm9pZCBhbnkgZXZlbnRcbiAgICogZW1pc3Npb24gbG9vcCByZXN1bHRpbmcgZnJvbSBhbiBldmVudCBoYW5kbGVyIGNhbGxpbmcgYmFjayBpbnRvIHJvdXRpbmUgdGhhdCB3aWxsXG4gICAqIGFnYWluIGV2b2tlIHRoZSBldmVudHMgaXQgaGFuZGxlcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbmNlbFdpemFyZC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogQSBib29sZWFuIGZsYWcgc2hhcmVkIGFjcm9zcyB0aGUgV2l6YXJkIHN1YmNvbXBvbmVudHMgdGhhdCBmb2xsb3dzIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgV2l6YXJkLnN0b3BDYW5jZWwgKGNscldpemFyZFByZXZlbnREZWZhdWx0Q2FuY2VsKSBpbnB1dC4gV2hlbiB0cnVlLCB0aGUgY2FuY2VsXG4gICAqIHJvdXRpbmUgaXMgc3VidmVydGVkIGFuZCBtdXN0IGJlIHJlaW5zdGF0ZWQgaW4gdGhlIGhvc3QgY29tcG9uZW50IGNhbGxpbmcgV2l6YXJkLmNsb3NlKClcbiAgICogYXQgc29tZSBwb2ludC5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgd2l6YXJkSGFzQWx0Q2FuY2VsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBmbGFnIHNoYXJlZCBhY3Jvc3MgdGhlIFdpemFyZCBzdWJjb21wb25lbnRzIHRoYXQgZm9sbG93cyB0aGUgdmFsdWVcbiAgICogb2YgdGhlIFdpemFyZC5zdG9wTmV4dCAoY2xyV2l6YXJkUHJldmVudERlZmF1bHROZXh0KSBpbnB1dC4gV2hlbiB0cnVlLCB0aGUgbmV4dCBhbmQgZmluaXNoXG4gICAqIHJvdXRpbmVzIGFyZSBzdWJ2ZXJ0ZWQgYW5kIG11c3QgYmUgcmVpbnN0YXRlZCBpbiB0aGUgaG9zdCBjb21wb25lbnQgY2FsbGluZyBXaXphcmQubmV4dCgpLFxuICAgKiBXaXphcmQuZm9yY2VOZXh0KCksIFdpemFyZC5maW5pc2goKSwgb3IgV2l6YXJkLmZvcmNlRmluaXNoKCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIHdpemFyZEhhc0FsdE5leHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSBib29sZWFuIGZsYWcgc2hhcmVkIGFjcm9zcyB0aGUgV2l6YXJkIHN1YmNvbXBvbmVudHMgdGhhdCBmb2xsb3dzIHRoZSB2YWx1ZVxuICAgKiBvZiB0aGUgV2l6YXJkLnN0b3BOYXZpZ2F0aW9uIChjbHJXaXphcmRQcmV2ZW50TmF2aWdhdGlvbikgaW5wdXQuIFdoZW4gdHJ1ZSwgYWxsXG4gICAqIG5hdmlnYXRpb25hbCBlbGVtZW50cyBpbiB0aGUgd2l6YXJkIGFyZSBkaXNhYmxlZC5cbiAgICpcbiAgICogVGhpcyBpcyBpbnRlbmRlZCB0byBmcmVlemUgdGhlIHdpemFyZCBpbiBwbGFjZS4gRXZlbnRzIGFyZSBub3QgZmlyZWQgc28gdGhpcyBpc1xuICAgKiBub3QgYSB3YXkgdG8gaW1wbGVtZW50IGFsdGVybmF0ZSBmdW5jdGlvbmFsaXR5IGZvciBuYXZpZ2F0aW9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyB3aXphcmRTdG9wTmF2aWdhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZmxhZyBzaGFyZWQgd2l0aCB0aGUgc3RlcG5hdiBpdGVtcyB0aGF0IHByZXZlbnRzIHVzZXIgY2xpY2tzIG9uXG4gICAqIHN0ZXBuYXYgaXRlbXMgZnJvbSBuYXZpZ2F0aW5nIHRoZSB3aXphcmQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIHdpemFyZERpc2FibGVTdGVwbmF2OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGFsbCByZXF1aXJlZCBjaGVja3MgdG8gZGV0ZXJtaW5lIGlmIGEgdXNlciBjYW4gbmF2aWdhdGUgdG8gYSBwYWdlLiBDaGVja2luZyBhdCBlYWNoXG4gICAqIHBvaW50IGlmIGEgcGFnZSBpcyBuYXZpZ2FibGUgLS0gY29tcGxldGVkIHdoZXJlIHRoZSBwYWdlIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsYXN0IGNvbXBsZXRlZFxuICAgKiBwYWdlLlxuICAgKlxuICAgKiBUYWtlcyB0d28gcGFyYW1ldGVycy4gVGhlIGZpcnN0IG9uZSBtdXN0IGJlIGVpdGhlciB0aGUgQ2xyV2l6YXJkUGFnZSBvYmplY3Qgb3IgdGhlIElEIG9mIHRoZVxuICAgKiBDbHJXaXphcmRQYWdlIG9iamVjdCB0aGF0IHlvdSB3YW50IHRvIG1ha2UgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICpcbiAgICogVGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgb3B0aW9uYWwgYW5kIGlzIGEgQm9vbGVhbiBmbGFnIGZvciBcImxhenkgY29tcGxldGlvblwiLiBXaGF0IHRoaXMgbWVhbnNcbiAgICogaXMgdGhlIFdpemFyZCB3aWxsIG1hcmsgYWxsIHBhZ2VzIGJldHdlZW4gdGhlIGN1cnJlbnQgcGFnZSBhbmQgdGhlIHBhZ2UgeW91IHdhbnQgdG8gbmF2aWdhdGVcbiAgICogdG8gYXMgY29tcGxldGVkLiBUaGlzIGlzIHVzZWZ1bCBmb3IgaW5mb3JtYXRpb25hbCB3aXphcmRzIHRoYXQgZG8gbm90IHJlcXVpcmUgdXNlciBhY3Rpb24sXG4gICAqIGFsbG93aW5nIGFuIGVhc3kgbWVhbnMgZm9yIHVzZXJzIHRvIGp1bXAgYWhlYWQuXG4gICAqXG4gICAqIFRvIGF2b2lkIGNoZWNrcyBvbiBuYXZpZ2F0aW9uLCB1c2UgQ2xyV2l6YXJkUGFnZS5tYWtlQ3VycmVudCgpIGluc3RlYWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIGdvVG8ocGFnZVRvR29Ub09ySWQ6IGFueSwgbGF6eUNvbXBsZXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBsZXQgcGFnZVRvR29UbzogQ2xyV2l6YXJkUGFnZTtcbiAgICBsZXQgY3VycmVudFBhZ2U6IENscldpemFyZFBhZ2U7XG4gICAgbGV0IG15UGFnZXM6IFBhZ2VDb2xsZWN0aW9uU2VydmljZTtcbiAgICBsZXQgcGFnZXNUb0NoZWNrOiBDbHJXaXphcmRQYWdlW107XG4gICAgbGV0IG9rYXlUb01vdmU6IGJvb2xlYW47XG4gICAgbGV0IGdvaW5nRm9yd2FyZDogYm9vbGVhbjtcbiAgICBsZXQgY3VycmVudFBhZ2VJbmRleDogbnVtYmVyO1xuICAgIGxldCBnb1RvUGFnZUluZGV4OiBudW1iZXI7XG5cbiAgICBteVBhZ2VzID0gdGhpcy5wYWdlQ29sbGVjdGlvbjtcbiAgICBwYWdlVG9Hb1RvID0gdHlwZW9mIHBhZ2VUb0dvVG9PcklkID09PSAnc3RyaW5nJyA/IG15UGFnZXMuZ2V0UGFnZUJ5SWQocGFnZVRvR29Ub09ySWQpIDogcGFnZVRvR29Ub09ySWQ7XG4gICAgY3VycmVudFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuXG4gICAgLy8gbm8gcG9pbnQgaW4gZ29pbmcgdG8gdGhlIGN1cnJlbnQgcGFnZS4geW91J3JlIHRoZXJlIGFscmVhZHkhXG4gICAgLy8gYWxzbyBoYXJkIGJsb2NrIG9uIGFueSBuYXZpZ2F0aW9uIHdoZW4gc3RvcE5hdmlnYXRpb24gaXMgdHJ1ZVxuICAgIGlmIChwYWdlVG9Hb1RvID09PSBjdXJyZW50UGFnZSB8fCB0aGlzLndpemFyZFN0b3BOYXZpZ2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudFBhZ2VJbmRleCA9IG15UGFnZXMuZ2V0UGFnZUluZGV4KGN1cnJlbnRQYWdlKTtcbiAgICBnb1RvUGFnZUluZGV4ID0gbXlQYWdlcy5nZXRQYWdlSW5kZXgocGFnZVRvR29Ubyk7XG4gICAgZ29pbmdGb3J3YXJkID0gZ29Ub1BhZ2VJbmRleCA+IGN1cnJlbnRQYWdlSW5kZXg7XG4gICAgcGFnZXNUb0NoZWNrID0gbXlQYWdlcy5nZXRQYWdlUmFuZ2VGcm9tUGFnZXModGhpcy5jdXJyZW50UGFnZSwgcGFnZVRvR29Ubyk7XG5cbiAgICBva2F5VG9Nb3ZlID0gbGF6eUNvbXBsZXRlIHx8IHRoaXMuY2FuR29UbyhwYWdlc1RvQ2hlY2spO1xuXG4gICAgaWYgKCFva2F5VG9Nb3ZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdvaW5nRm9yd2FyZCAmJiBsYXp5Q29tcGxldGUpIHtcbiAgICAgIHBhZ2VzVG9DaGVjay5mb3JFYWNoKChwYWdlOiBDbHJXaXphcmRQYWdlKSA9PiB7XG4gICAgICAgIGlmIChwYWdlICE9PSBwYWdlVG9Hb1RvKSB7XG4gICAgICAgICAgcGFnZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFnb2luZ0ZvcndhcmQgJiYgdGhpcy5mb3JjZUZvcndhcmROYXZpZ2F0aW9uKSB7XG4gICAgICBwYWdlc1RvQ2hlY2suZm9yRWFjaCgocGFnZTogQ2xyV2l6YXJkUGFnZSkgPT4ge1xuICAgICAgICBwYWdlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VUb0dvVG87XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIHJhbmdlIG9mIENscldpemFyZFBhZ2Ugb2JqZWN0cyBhcyBhIHBhcmFtZXRlci4gUGVyZm9ybXMgdGhlIHdvcmsgb2YgY2hlY2tpbmdcbiAgICogdGhvc2Ugb2JqZWN0cyB0byBkZXRlcm1pbmUgaWYgbmF2aWdhdGlvbiBjYW4gYmUgYWNjb21wbGlzaGVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBjYW5Hb1RvKHBhZ2VzVG9DaGVjazogQ2xyV2l6YXJkUGFnZVtdKTogYm9vbGVhbiB7XG4gICAgbGV0IG9rYXlUb01vdmUgPSB0cnVlO1xuICAgIGNvbnN0IG15UGFnZXMgPSB0aGlzLnBhZ2VDb2xsZWN0aW9uO1xuXG4gICAgLy8gcHJldmlvdXMgcGFnZSBjYW4gYmUgaW1wb3J0YW50IHdoZW4gbW92aW5nIGJlY2F1c2UgaWYgaXQncyBjb21wbGV0ZWQgaXRcbiAgICAvLyBhbGxvd3MgdXMgdG8gbW92ZSB0byB0aGUgcGFnZSBldmVuIGlmIGl0J3MgaW5jb21wbGV0ZS4uLlxuICAgIGxldCBwcmV2aW91c1BhZ2VQYXNzZXM6IGJvb2xlYW47XG5cbiAgICBpZiAoIXBhZ2VzVG9DaGVjayB8fCBwYWdlc1RvQ2hlY2subGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHBhZ2VzVG9DaGVjay5mb3JFYWNoKChwYWdlOiBDbHJXaXphcmRQYWdlKSA9PiB7XG4gICAgICBsZXQgcHJldmlvdXNQYWdlOiBDbHJXaXphcmRQYWdlO1xuXG4gICAgICBpZiAoIW9rYXlUb01vdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFnZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCBpcyB0cnVlLiBqdXN0IGp1bXAgb3V0IGluc3RlYWQgb2YgY29tcGxpY2F0aW5nIGl0LlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNvIHdlIGtub3cgb3VyIHBhZ2UgaXMgbm90IGNvbXBsZXRlZC4uLlxuICAgICAgcHJldmlvdXNQYWdlID0gbXlQYWdlcy5nZXRQYWdlSW5kZXgocGFnZSkgPiAwID8gbXlQYWdlcy5nZXRQcmV2aW91c1BhZ2UocGFnZSkgOiBudWxsO1xuICAgICAgcHJldmlvdXNQYWdlUGFzc2VzID0gcHJldmlvdXNQYWdlID09PSBudWxsIHx8IHByZXZpb3VzUGFnZS5jb21wbGV0ZWQgPT09IHRydWU7XG5cbiAgICAgIC8vIHdlIGFyZSBmYWxzZSBpZiBub3QgdGhlIGN1cnJlbnQgcGFnZSBBTkQgcHJldmlvdXMgcGFnZSBpcyBub3QgY29tcGxldGVkXG4gICAgICAvLyAoYnV0IG11c3QgaGF2ZSBhIHByZXZpb3VzIHBhZ2UpXG4gICAgICBpZiAoIXBhZ2UuY3VycmVudCAmJiAhcHJldmlvdXNQYWdlUGFzc2VzKSB7XG4gICAgICAgIG9rYXlUb01vdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGxzIHRocm91Z2ggdG8gdHJ1ZSBhcyBkZWZhdWx0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2theVRvTW92ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyB0aHJvdWdoIHRoZSBjb2xsZWN0aW9uIG9mIHBhZ2VzIHRvIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzIGluY29tcGxldGVcbiAgICogYW5kIG1ha2VzIHRoYXQgcGFnZSB0aGUgY3VycmVudC9hY3RpdmUgcGFnZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIFdpemFyZE5hdmlnYXRpb25TZXJ2aWNlXG4gICAqL1xuICBwdWJsaWMgc2V0TGFzdEVuYWJsZWRQYWdlQ3VycmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxQYWdlczogQ2xyV2l6YXJkUGFnZVtdID0gdGhpcy5wYWdlQ29sbGVjdGlvbi5wYWdlc0FzQXJyYXk7XG4gICAgbGV0IGxhc3RDb21wbGV0ZWRQYWdlSW5kZXg6IG51bWJlciA9IG51bGw7XG5cbiAgICBhbGxQYWdlcy5mb3JFYWNoKChwYWdlOiBDbHJXaXphcmRQYWdlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocGFnZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgbGFzdENvbXBsZXRlZFBhZ2VJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhc3RDb21wbGV0ZWRQYWdlSW5kZXggPT09IG51bGwpIHtcbiAgICAgIC8vIGFsd2F5cyBpcyBhdCBsZWFzdCB0aGUgZmlyc3QgaXRlbS4uLlxuICAgICAgbGFzdENvbXBsZXRlZFBhZ2VJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChsYXN0Q29tcGxldGVkUGFnZUluZGV4ICsgMSA8IGFsbFBhZ2VzLmxlbmd0aCkge1xuICAgICAgbGFzdENvbXBsZXRlZFBhZ2VJbmRleCA9IGxhc3RDb21wbGV0ZWRQYWdlSW5kZXggKyAxO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSBhbGxQYWdlc1tsYXN0Q29tcGxldGVkUGFnZUluZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgZmlyc3QgcGFnZSBpbiB0aGUgY29sbGVjdGlvbiBvZiBwYWdlcyBhbmQgbWFrZXMgdGhhdCBwYWdlIHRoZVxuICAgKiBjdXJyZW50L2FjdGl2ZSBwYWdlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgV2l6YXJkTmF2aWdhdGlvblNlcnZpY2VcbiAgICovXG4gIHB1YmxpYyBzZXRGaXJzdFBhZ2VDdXJyZW50KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnBhZ2VDb2xsZWN0aW9uLnBhZ2VzQXNBcnJheVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGVwbmF2IG9uIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHdpemFyZCB3aGVuIHBhZ2VzIGFyZSBkeW5hbWljYWxseVxuICAgKiBhZGRlZCBvciByZW1vdmVkIGZyb20gdGhlIGNvbGxlY3Rpb24gb2YgcGFnZXMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBXaXphcmROYXZpZ2F0aW9uU2VydmljZVxuICAgKi9cbiAgcHVibGljIHVwZGF0ZU5hdmlnYXRpb24oKTogdm9pZCB7XG4gICAgbGV0IHRvU2V0Q3VycmVudDogQ2xyV2l6YXJkUGFnZTtcbiAgICBsZXQgY3VycmVudFBhZ2VSZW1vdmVkOiBib29sZWFuO1xuXG4gICAgdGhpcy5wYWdlQ29sbGVjdGlvbi51cGRhdGVDb21wbGV0ZWRTdGF0ZXMoKTtcblxuICAgIGN1cnJlbnRQYWdlUmVtb3ZlZCA9IHRoaXMucGFnZUNvbGxlY3Rpb24ucGFnZXNBc0FycmF5LmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgPCAwO1xuICAgIGlmIChjdXJyZW50UGFnZVJlbW92ZWQpIHtcbiAgICAgIHRvU2V0Q3VycmVudCA9IHRoaXMucGFnZUNvbGxlY3Rpb24uZmluZEZpcnN0SW5jb21wbGV0ZVBhZ2UoKTtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0b1NldEN1cnJlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0=