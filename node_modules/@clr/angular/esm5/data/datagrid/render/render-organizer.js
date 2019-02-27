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
import { filter } from 'rxjs/operators';
import { DatagridRenderStep } from '../enums/render-step.enum';
var DatagridRenderOrganizer = /** @class */ (function () {
    function DatagridRenderOrganizer() {
        this._renderStep = new Subject();
        this.alreadySized = false;
        this.widths = [];
    }
    Object.defineProperty(DatagridRenderOrganizer.prototype, "renderStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._renderStep.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} step
     * @return {?}
     */
    DatagridRenderOrganizer.prototype.filterRenderSteps = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        return this.renderStep.pipe(filter(function (testStep) { return step === testStep; }));
    };
    /**
     * @return {?}
     */
    DatagridRenderOrganizer.prototype.resize = /**
     * @return {?}
     */
    function () {
        this.widths.length = 0;
        this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_ON);
        if (this.alreadySized) {
            this._renderStep.next(DatagridRenderStep.CLEAR_WIDTHS);
        }
        this._renderStep.next(DatagridRenderStep.DETECT_STRICT_WIDTHS);
        this._renderStep.next(DatagridRenderStep.COMPUTE_COLUMN_WIDTHS);
        this._renderStep.next(DatagridRenderStep.ALIGN_COLUMNS);
        this.alreadySized = true;
        this._renderStep.next(DatagridRenderStep.CALCULATE_MODE_OFF);
    };
    DatagridRenderOrganizer.decorators = [
        { type: Injectable }
    ];
    return DatagridRenderOrganizer;
}());
export { DatagridRenderOrganizer };
if (false) {
    /** @type {?} */
    DatagridRenderOrganizer.prototype._renderStep;
    /** @type {?} */
    DatagridRenderOrganizer.prototype.alreadySized;
    /** @type {?} */
    DatagridRenderOrganizer.prototype.widths;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLW9yZ2FuaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvZGF0YWdyaWQvcmVuZGVyL3JlbmRlci1vcmdhbml6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRDtJQUFBO1FBRVksZ0JBQVcsR0FBZ0MsSUFBSSxPQUFPLEVBQXNCLENBQUM7UUFTL0UsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFdEIsV0FBTSxHQUFzQyxFQUFFLENBQUM7SUFjeEQsQ0FBQztJQXhCQyxzQkFBVywrQ0FBVTs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFTSxtREFBaUI7Ozs7SUFBeEIsVUFBeUIsSUFBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxJQUFJLEtBQUssUUFBUSxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBTU0sd0NBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBMUJGLFVBQVU7O0lBMkJYLDhCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksdUJBQXVCOzs7SUFDbEMsOENBQXVGOztJQVN2RiwrQ0FBNkI7O0lBRTdCLHlDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYXRhZ3JpZFJlbmRlclN0ZXAgfSBmcm9tICcuLi9lbnVtcy9yZW5kZXItc3RlcC5lbnVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFncmlkUmVuZGVyT3JnYW5pemVyIHtcbiAgcHJvdGVjdGVkIF9yZW5kZXJTdGVwOiBTdWJqZWN0PERhdGFncmlkUmVuZGVyU3RlcD4gPSBuZXcgU3ViamVjdDxEYXRhZ3JpZFJlbmRlclN0ZXA+KCk7XG4gIHB1YmxpYyBnZXQgcmVuZGVyU3RlcCgpOiBPYnNlcnZhYmxlPERhdGFncmlkUmVuZGVyU3RlcD4ge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJTdGVwLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGZpbHRlclJlbmRlclN0ZXBzKHN0ZXA6IERhdGFncmlkUmVuZGVyU3RlcCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlclN0ZXAucGlwZShmaWx0ZXIodGVzdFN0ZXAgPT4gc3RlcCA9PT0gdGVzdFN0ZXApKTtcbiAgfVxuXG4gIHByaXZhdGUgYWxyZWFkeVNpemVkID0gZmFsc2U7XG5cbiAgcHVibGljIHdpZHRoczogeyBweDogbnVtYmVyOyBzdHJpY3Q6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgcHVibGljIHJlc2l6ZSgpIHtcbiAgICB0aGlzLndpZHRocy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX3JlbmRlclN0ZXAubmV4dChEYXRhZ3JpZFJlbmRlclN0ZXAuQ0FMQ1VMQVRFX01PREVfT04pO1xuICAgIGlmICh0aGlzLmFscmVhZHlTaXplZCkge1xuICAgICAgdGhpcy5fcmVuZGVyU3RlcC5uZXh0KERhdGFncmlkUmVuZGVyU3RlcC5DTEVBUl9XSURUSFMpO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJTdGVwLm5leHQoRGF0YWdyaWRSZW5kZXJTdGVwLkRFVEVDVF9TVFJJQ1RfV0lEVEhTKTtcbiAgICB0aGlzLl9yZW5kZXJTdGVwLm5leHQoRGF0YWdyaWRSZW5kZXJTdGVwLkNPTVBVVEVfQ09MVU1OX1dJRFRIUyk7XG4gICAgdGhpcy5fcmVuZGVyU3RlcC5uZXh0KERhdGFncmlkUmVuZGVyU3RlcC5BTElHTl9DT0xVTU5TKTtcbiAgICB0aGlzLmFscmVhZHlTaXplZCA9IHRydWU7XG4gICAgdGhpcy5fcmVuZGVyU3RlcC5uZXh0KERhdGFncmlkUmVuZGVyU3RlcC5DQUxDVUxBVEVfTU9ERV9PRkYpO1xuICB9XG59XG4iXX0=