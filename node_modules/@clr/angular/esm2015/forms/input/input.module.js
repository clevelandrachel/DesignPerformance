/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrInput } from './input';
import { ClrInputContainer } from './input-container';
export class ClrInputModule {
}
ClrInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ClrIconModule, ClrCommonFormsModule],
                declarations: [ClrInput, ClrInputContainer],
                exports: [ClrCommonFormsModule, ClrInput, ClrInputContainer],
                entryComponents: [ClrInputContainer],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvaW5wdXQvaW5wdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVF0RCxNQUFNLE9BQU8sY0FBYzs7O1lBTjFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztnQkFDekUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzVELGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uRm9ybXNNb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IENscklucHV0IH0gZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBDbHJJbnB1dENvbnRhaW5lciB9IGZyb20gJy4vaW5wdXQtY29udGFpbmVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIENsckljb25Nb2R1bGUsIENsckNvbW1vbkZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2xySW5wdXQsIENscklucHV0Q29udGFpbmVyXSxcbiAgZXhwb3J0czogW0NsckNvbW1vbkZvcm1zTW9kdWxlLCBDbHJJbnB1dCwgQ2xySW5wdXRDb250YWluZXJdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbHJJbnB1dENvbnRhaW5lcl0sXG59KVxuZXhwb3J0IGNsYXNzIENscklucHV0TW9kdWxlIHt9XG4iXX0=