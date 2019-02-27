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
import { ClrIconModule } from '../../icon/icon.module';
import { ClrLoadingModule } from '../../utils/loading/loading.module';
import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';
import { ClrTreeNode } from './tree-node';
import { ClrTree } from './tree';
import { ClrRecursiveForOf } from './recursive-for-of';
import { RecursiveChildren } from './recursive-children';
/** @type {?} */
export var CLR_TREE_VIEW_DIRECTIVES = [ClrTree, ClrTreeNode, ClrRecursiveForOf];
var ClrTreeViewModule = /** @class */ (function () {
    function ClrTreeViewModule() {
    }
    ClrTreeViewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ClrIconModule, ClrLoadingModule],
                    declarations: [CLR_TREE_VIEW_DIRECTIVES, RecursiveChildren],
                    exports: [CLR_TREE_VIEW_DIRECTIVES, ClrIfExpandModule],
                },] }
    ];
    return ClrTreeViewModule;
}());
export { ClrTreeViewModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImRhdGEvdHJlZS12aWV3L3RyZWUtdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFekQsTUFBTSxLQUFPLHdCQUF3QixHQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7QUFFOUY7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3hELFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLGlCQUFpQixDQUFDO29CQUMzRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsQ0FBQztpQkFDdkQ7O0lBQytCLHdCQUFDO0NBQUEsQUFMakMsSUFLaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xySWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xyTG9hZGluZ01vZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2xvYWRpbmcvbG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xySWZFeHBhbmRNb2R1bGUgfSBmcm9tICcuLi8uLi91dGlscy9leHBhbmQvaWYtZXhwYW5kLm1vZHVsZSc7XG5pbXBvcnQgeyBDbHJUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS1ub2RlJztcbmltcG9ydCB7IENsclRyZWUgfSBmcm9tICcuL3RyZWUnO1xuaW1wb3J0IHsgQ2xyUmVjdXJzaXZlRm9yT2YgfSBmcm9tICcuL3JlY3Vyc2l2ZS1mb3Itb2YnO1xuaW1wb3J0IHsgUmVjdXJzaXZlQ2hpbGRyZW4gfSBmcm9tICcuL3JlY3Vyc2l2ZS1jaGlsZHJlbic7XG5cbmV4cG9ydCBjb25zdCBDTFJfVFJFRV9WSUVXX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW0NsclRyZWUsIENsclRyZWVOb2RlLCBDbHJSZWN1cnNpdmVGb3JPZl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENsckljb25Nb2R1bGUsIENsckxvYWRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDTFJfVFJFRV9WSUVXX0RJUkVDVElWRVMsIFJlY3Vyc2l2ZUNoaWxkcmVuXSxcbiAgZXhwb3J0czogW0NMUl9UUkVFX1ZJRVdfRElSRUNUSVZFUywgQ2xySWZFeHBhbmRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDbHJUcmVlVmlld01vZHVsZSB7fVxuIl19