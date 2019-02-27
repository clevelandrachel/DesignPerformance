/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrAlertModule } from '../emphasis/alert/alert.module';
import { ClrModalModule } from '../modal/modal.module';
import { ClrWizard } from './wizard';
import { ClrWizardButton } from './wizard-button';
import { ClrWizardCustomTags } from './wizard-custom-tags';
import { ClrWizardHeaderAction } from './wizard-header-action';
import { ClrWizardPage } from './wizard-page';
import { ClrWizardPageButtons } from './wizard-page-buttons';
import { ClrWizardPageHeaderActions } from './wizard-page-header-actions';
import { ClrWizardPageNavTitle } from './wizard-page-navtitle';
import { ClrWizardPageTitle } from './wizard-page-title';
import { ClrWizardStepnav } from './wizard-stepnav';
import { ClrWizardStepnavItem } from './wizard-stepnav-item';
/** @type {?} */
export var CLR_WIZARD_DIRECTIVES = [
    ClrWizard,
    ClrWizardPage,
    ClrWizardStepnav,
    ClrWizardStepnavItem,
    ClrWizardButton,
    ClrWizardHeaderAction,
    ClrWizardCustomTags,
    ClrWizardPageTitle,
    ClrWizardPageNavTitle,
    ClrWizardPageButtons,
    ClrWizardPageHeaderActions,
];
var ClrWizardModule = /** @class */ (function () {
    function ClrWizardModule() {
    }
    ClrWizardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrModalModule, ClrAlertModule],
                    declarations: [CLR_WIZARD_DIRECTIVES],
                    exports: [CLR_WIZARD_DIRECTIVES],
                },] }
    ];
    return ClrWizardModule;
}());
export { ClrWizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLHFCQUFxQixHQUFVO0lBQzFDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDM0I7QUFFRDtJQUFBO0lBSzhCLENBQUM7O2dCQUw5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7b0JBQ3ZELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakM7O0lBQzZCLHNCQUFDO0NBQUEsQUFML0IsSUFLK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENsckFsZXJ0TW9kdWxlIH0gZnJvbSAnLi4vZW1waGFzaXMvYWxlcnQvYWxlcnQubW9kdWxlJztcbmltcG9ydCB7IENsck1vZGFsTW9kdWxlIH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwubW9kdWxlJztcblxuaW1wb3J0IHsgQ2xyV2l6YXJkIH0gZnJvbSAnLi93aXphcmQnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkQnV0dG9uIH0gZnJvbSAnLi93aXphcmQtYnV0dG9uJztcbmltcG9ydCB7IENscldpemFyZEN1c3RvbVRhZ3MgfSBmcm9tICcuL3dpemFyZC1jdXN0b20tdGFncyc7XG5pbXBvcnQgeyBDbHJXaXphcmRIZWFkZXJBY3Rpb24gfSBmcm9tICcuL3dpemFyZC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7IENscldpemFyZFBhZ2UgfSBmcm9tICcuL3dpemFyZC1wYWdlJztcbmltcG9ydCB7IENscldpemFyZFBhZ2VCdXR0b25zIH0gZnJvbSAnLi93aXphcmQtcGFnZS1idXR0b25zJztcbmltcG9ydCB7IENscldpemFyZFBhZ2VIZWFkZXJBY3Rpb25zIH0gZnJvbSAnLi93aXphcmQtcGFnZS1oZWFkZXItYWN0aW9ucyc7XG5pbXBvcnQgeyBDbHJXaXphcmRQYWdlTmF2VGl0bGUgfSBmcm9tICcuL3dpemFyZC1wYWdlLW5hdnRpdGxlJztcbmltcG9ydCB7IENscldpemFyZFBhZ2VUaXRsZSB9IGZyb20gJy4vd2l6YXJkLXBhZ2UtdGl0bGUnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkU3RlcG5hdiB9IGZyb20gJy4vd2l6YXJkLXN0ZXBuYXYnO1xuaW1wb3J0IHsgQ2xyV2l6YXJkU3RlcG5hdkl0ZW0gfSBmcm9tICcuL3dpemFyZC1zdGVwbmF2LWl0ZW0nO1xuXG5leHBvcnQgY29uc3QgQ0xSX1dJWkFSRF9ESVJFQ1RJVkVTOiBhbnlbXSA9IFtcbiAgQ2xyV2l6YXJkLFxuICBDbHJXaXphcmRQYWdlLFxuICBDbHJXaXphcmRTdGVwbmF2LFxuICBDbHJXaXphcmRTdGVwbmF2SXRlbSxcbiAgQ2xyV2l6YXJkQnV0dG9uLFxuICBDbHJXaXphcmRIZWFkZXJBY3Rpb24sXG4gIENscldpemFyZEN1c3RvbVRhZ3MsXG4gIENscldpemFyZFBhZ2VUaXRsZSxcbiAgQ2xyV2l6YXJkUGFnZU5hdlRpdGxlLFxuICBDbHJXaXphcmRQYWdlQnV0dG9ucyxcbiAgQ2xyV2l6YXJkUGFnZUhlYWRlckFjdGlvbnMsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDbHJNb2RhbE1vZHVsZSwgQ2xyQWxlcnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfV0laQVJEX0RJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbQ0xSX1dJWkFSRF9ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyV2l6YXJkTW9kdWxlIHt9XG4iXX0=