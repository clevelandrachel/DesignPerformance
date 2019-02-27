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
import { ResponsiveNavCodes } from '../responsive-nav-codes';
import { ResponsiveNavControlMessage } from '../responsive-nav-control-message';
import * as i0 from "@angular/core";
export class ResponsiveNavigationService {
    constructor() {
        this.responsiveNavList = [];
        this.registerNavSubject = new Subject();
        this.controlNavSubject = new Subject();
        this.closeAllNavs(); // We start with all navs closed
    }
    /**
     * @return {?}
     */
    get registeredNavs() {
        return this.registerNavSubject.asObservable();
    }
    /**
     * @return {?}
     */
    get navControl() {
        return this.controlNavSubject.asObservable();
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    registerNav(navLevel) {
        if (!navLevel || this.isNavRegistered(navLevel)) {
            return;
        }
        this.responsiveNavList.push(navLevel);
        this.registerNavSubject.next(this.responsiveNavList);
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    isNavRegistered(navLevel) {
        if (this.responsiveNavList.indexOf(navLevel) > -1) {
            console.error('Multiple clr-nav-level ' + navLevel + ' attributes found. Please make sure that only one exists');
            return true;
        }
        return false;
    }
    /**
     * @param {?} navLevel
     * @return {?}
     */
    unregisterNav(navLevel) {
        /** @type {?} */
        const index = this.responsiveNavList.indexOf(navLevel);
        if (index > -1) {
            this.responsiveNavList.splice(index, 1);
            this.registerNavSubject.next(this.responsiveNavList);
        }
    }
    /**
     * @param {?} controlCode
     * @param {?} navLevel
     * @return {?}
     */
    sendControlMessage(controlCode, navLevel) {
        /** @type {?} */
        const message = new ResponsiveNavControlMessage(controlCode, navLevel);
        this.controlNavSubject.next(message);
    }
    /**
     * @return {?}
     */
    closeAllNavs() {
        /** @type {?} */
        const message = new ResponsiveNavControlMessage(ResponsiveNavCodes.NAV_CLOSE_ALL, -999);
        this.controlNavSubject.next(message);
    }
}
ResponsiveNavigationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ResponsiveNavigationService.ctorParameters = () => [];
/** @nocollapse */ ResponsiveNavigationService.ngInjectableDef = i0.defineInjectable({ factory: function ResponsiveNavigationService_Factory() { return new ResponsiveNavigationService(); }, token: ResponsiveNavigationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ResponsiveNavigationService.prototype.responsiveNavList;
    /** @type {?} */
    ResponsiveNavigationService.prototype.registerNavSubject;
    /** @type {?} */
    ResponsiveNavigationService.prototype.controlNavSubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1uYXZpZ2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsYXlvdXQvbmF2L3Byb3ZpZGVycy9yZXNwb25zaXZlLW5hdmlnYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBR2hGLE1BQU0sT0FBTywyQkFBMkI7SUFhdEM7UUFaTyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFDaEMsdUJBQWtCLEdBQXNCLElBQUksT0FBTyxFQUFZLENBQUM7UUFDaEUsc0JBQWlCLEdBQXlDLElBQUksT0FBTyxFQUErQixDQUFDO1FBVzNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQztJQUN2RCxDQUFDOzs7O0lBVkQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7OztJQU1ELFdBQVcsQ0FBQyxRQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFFBQWdCO1FBQzlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLFFBQVEsR0FBRywwREFBMEQsQ0FBQyxDQUFDO1lBQ2pILE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWdCOztjQUN0QixLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsV0FBbUIsRUFBRSxRQUFnQjs7Y0FDaEQsT0FBTyxHQUFnQyxJQUFJLDJCQUEyQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUM7UUFDbkcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixPQUFPLEdBQWdDLElBQUksMkJBQTJCLENBQzFFLGtCQUFrQixDQUFDLGFBQWEsRUFDaEMsQ0FBQyxHQUFHLENBQ0w7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQXJERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7O0lBRWhDLHdEQUF3Qzs7SUFDeEMseURBQXdFOztJQUN4RSx3REFBNkciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZDb2RlcyB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtbmF2LWNvZGVzJztcbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZDb250cm9sTWVzc2FnZSB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtbmF2LWNvbnRyb2wtbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZU5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHVibGljIHJlc3BvbnNpdmVOYXZMaXN0OiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIHJlZ2lzdGVyTmF2U3ViamVjdDogU3ViamVjdDxudW1iZXJbXT4gPSBuZXcgU3ViamVjdDxudW1iZXJbXT4oKTtcbiAgcHJpdmF0ZSBjb250cm9sTmF2U3ViamVjdDogU3ViamVjdDxSZXNwb25zaXZlTmF2Q29udHJvbE1lc3NhZ2U+ID0gbmV3IFN1YmplY3Q8UmVzcG9uc2l2ZU5hdkNvbnRyb2xNZXNzYWdlPigpO1xuXG4gIGdldCByZWdpc3RlcmVkTmF2cygpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJOYXZTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IG5hdkNvbnRyb2woKTogT2JzZXJ2YWJsZTxSZXNwb25zaXZlTmF2Q29udHJvbE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sTmF2U3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2xvc2VBbGxOYXZzKCk7IC8vIFdlIHN0YXJ0IHdpdGggYWxsIG5hdnMgY2xvc2VkXG4gIH1cblxuICByZWdpc3Rlck5hdihuYXZMZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFuYXZMZXZlbCB8fCB0aGlzLmlzTmF2UmVnaXN0ZXJlZChuYXZMZXZlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNwb25zaXZlTmF2TGlzdC5wdXNoKG5hdkxldmVsKTtcbiAgICB0aGlzLnJlZ2lzdGVyTmF2U3ViamVjdC5uZXh0KHRoaXMucmVzcG9uc2l2ZU5hdkxpc3QpO1xuICB9XG5cbiAgaXNOYXZSZWdpc3RlcmVkKG5hdkxldmVsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlTmF2TGlzdC5pbmRleE9mKG5hdkxldmVsKSA+IC0xKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNdWx0aXBsZSBjbHItbmF2LWxldmVsICcgKyBuYXZMZXZlbCArICcgYXR0cmlidXRlcyBmb3VuZC4gUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IG9ubHkgb25lIGV4aXN0cycpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJOYXYobmF2TGV2ZWw6IG51bWJlcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXNwb25zaXZlTmF2TGlzdC5pbmRleE9mKG5hdkxldmVsKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5yZXNwb25zaXZlTmF2TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5yZWdpc3Rlck5hdlN1YmplY3QubmV4dCh0aGlzLnJlc3BvbnNpdmVOYXZMaXN0KTtcbiAgICB9XG4gIH1cblxuICBzZW5kQ29udHJvbE1lc3NhZ2UoY29udHJvbENvZGU6IHN0cmluZywgbmF2TGV2ZWw6IG51bWJlcikge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFJlc3BvbnNpdmVOYXZDb250cm9sTWVzc2FnZSA9IG5ldyBSZXNwb25zaXZlTmF2Q29udHJvbE1lc3NhZ2UoY29udHJvbENvZGUsIG5hdkxldmVsKTtcbiAgICB0aGlzLmNvbnRyb2xOYXZTdWJqZWN0Lm5leHQobWVzc2FnZSk7XG4gIH1cblxuICBjbG9zZUFsbE5hdnMoKSB7XG4gICAgY29uc3QgbWVzc2FnZTogUmVzcG9uc2l2ZU5hdkNvbnRyb2xNZXNzYWdlID0gbmV3IFJlc3BvbnNpdmVOYXZDb250cm9sTWVzc2FnZShcbiAgICAgIFJlc3BvbnNpdmVOYXZDb2Rlcy5OQVZfQ0xPU0VfQUxMLFxuICAgICAgLTk5OVxuICAgICk7XG4gICAgdGhpcy5jb250cm9sTmF2U3ViamVjdC5uZXh0KG1lc3NhZ2UpO1xuICB9XG59XG4iXX0=