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
import { ClrControlError } from './error';
import { ClrControlHelper } from './helper';
import { ClrIfError } from './if-error/if-error';
import { ClrLabel } from './label';
import { ClrForm } from './form';
import { ClrLayout } from './layout';
export class ClrCommonFormsModule {
}
ClrCommonFormsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
                exports: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImZvcm1zL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU9yQyxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztnQkFDM0YsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUN2RiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbHJDb250cm9sRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IENsckNvbnRyb2xIZWxwZXIgfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgeyBDbHJJZkVycm9yIH0gZnJvbSAnLi9pZi1lcnJvci9pZi1lcnJvcic7XG5pbXBvcnQgeyBDbHJMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgQ2xyRm9ybSB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBDbHJMYXlvdXQgfSBmcm9tICcuL2xheW91dCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDbHJMYWJlbCwgQ2xyQ29udHJvbEVycm9yLCBDbHJDb250cm9sSGVscGVyLCBDbHJJZkVycm9yLCBDbHJGb3JtLCBDbHJMYXlvdXRdLFxuICBleHBvcnRzOiBbQ2xyTGFiZWwsIENsckNvbnRyb2xFcnJvciwgQ2xyQ29udHJvbEhlbHBlciwgQ2xySWZFcnJvciwgQ2xyRm9ybSwgQ2xyTGF5b3V0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyQ29tbW9uRm9ybXNNb2R1bGUge31cbiJdfQ==