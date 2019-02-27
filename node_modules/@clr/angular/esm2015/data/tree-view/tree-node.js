/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Inject, Injector, Input, Optional, Output, SkipSelf, } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { DeclarativeTreeNodeModel } from './models/declarative-tree-node.model';
import { ClrSelectedState } from './models/selected-state.enum';
import { TREE_FEATURES_PROVIDER, TreeFeaturesService } from './tree-features.service';
/**
 * @template T
 */
export class ClrTreeNode {
    /**
     * @param {?} nodeId
     * @param {?} parent
     * @param {?} featuresService
     * @param {?} expandService
     * @param {?} commonStrings
     * @param {?} injector
     */
    constructor(nodeId, parent, featuresService, expandService, commonStrings, injector) {
        this.nodeId = nodeId;
        this.featuresService = featuresService;
        this.expandService = expandService;
        this.commonStrings = commonStrings;
        this.STATES = ClrSelectedState;
        // We need an async EventEmitter or we will trigger chocolate errors like it's 2016.
        this.selectedChange = new EventEmitter(true);
        this.expandedChange = new EventEmitter();
        this.subscriptions = [];
        if (this.featuresService.recursion) {
            // I'm completely stuck, we have to hack into private properties until either
            // https://github.com/angular/angular/issues/14935 or https://github.com/angular/angular/issues/15998
            // are fixed
            this._model = ((/** @type {?} */ (injector))).view.context.clrModel;
        }
        else {
            // Force cast for now, not sure how to tie the correct type here to featuresService.recursion
            this._model = new DeclarativeTreeNodeModel(parent ? (/** @type {?} */ (parent._model)) : null);
        }
    }
    /**
     * @return {?}
     */
    isExpandable() {
        if (typeof this.expandable !== 'undefined') {
            return this.expandable;
        }
        return !!this.expandService.expandable || this._model.children.length > 0;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._model.selected.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this.featuresService.selectable = true;
        // Gracefully handle falsy states like null or undefined because it's just easier than answering questions.
        // This shouldn't happen with strict typing on the app's side, but it's not up to us.
        if (value === null || typeof value === 'undefined') {
            value = ClrSelectedState.UNSELECTED;
        }
        // We match booleans to the corresponding ClrSelectedState
        if (typeof value === 'boolean') {
            value = value ? ClrSelectedState.SELECTED : ClrSelectedState.UNSELECTED;
        }
        // We propagate only if the tree is in smart mode
        this._model.setSelected(value, this.featuresService.eager, this.featuresService.eager);
    }
    /**
     * @return {?}
     */
    get treeNodeRole() {
        return this._model.parent ? 'treeitem' : 'tree';
    }
    /**
     * @return {?}
     */
    get rootAriaMultiSelectable() {
        if (this._model.parent || !this.featuresService.selectable) {
            return null;
        }
        else {
            return true;
        }
    }
    /**
     * @return {?}
     */
    get ariaSelected() {
        return this.featuresService.selectable ? this._model.selected.value === ClrSelectedState.SELECTED : null;
    }
    // I'm caving on this, for tree nodes I think we can tolerate having a two-way binding on the component
    // rather than enforce the clrIfExpanded structural directive for dynamic cases. Mostly because for the smart
    // case, you can't use a structural directive, it would need to go on an ng-container.
    /**
     * @return {?}
     */
    get expanded() {
        return this.expandService.expanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expanded(value) {
        this.expandService.expanded = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscriptions.push(this._model.selected.subscribe(value => this.selectedChange.emit(value)));
        this.subscriptions.push(this.expandService.expandChange.subscribe(value => this.expandedChange.emit(value)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._model.destroy();
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
ClrTreeNode.decorators = [
    { type: Component, args: [{
                selector: 'clr-tree-node',
                template: "<!--\n  ~ Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.\n  ~ This software is released under MIT license.\n  ~ The full license information can be found in LICENSE in the root directory of this project.\n  -->\n\n<div class=\"clr-tree-node-content-container\">\n  <button\n    *ngIf=\"isExpandable() && !_model.loading && !expandService.loading\"\n    type=\"button\"\n    class=\"clr-treenode-caret\"\n    (click)=\"expandService.toggle()\"\n    [attr.aria-expanded]=\"expandService.expanded\">\n    <clr-icon\n      class=\"clr-treenode-caret-icon\"\n      shape=\"caret\"\n      [attr.dir]=\"expandService.expanded ? 'down' : 'right'\"\n      [attr.title]=\"expandService.expanded ? commonStrings.collapse : commonStrings.expand\"></clr-icon>\n  </button>\n  <div class=\"clr-treenode-spinner-container\" *ngIf=\"expandService.loading || _model.loading\">\n        <span class=\"clr-treenode-spinner spinner\"></span>\n  </div>\n  <div class=\"clr-checkbox-wrapper clr-treenode-checkbox\" *ngIf=\"featuresService.selectable\">\n    <input type=\"checkbox\" id=\"{{nodeId}}-check\" class=\"clr-checkbox\" [attr.aria-labelledby]=\"nodeId\"\n           [checked]=\"_model.selected.value === STATES.SELECTED\"\n           [indeterminate]=\"_model.selected.value === STATES.INDETERMINATE\"\n           (change)=\"_model.toggleSelection(featuresService.eager)\">\n    <label for=\"{{nodeId}}-check\" class=\"clr-control-label\"></label>\n  </div>\n  <div class=\"clr-treenode-content\" [id]=\"nodeId\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div class=\"clr-treenode-children\"\n     [@childNodesState]=\"expandService.expanded ? 'expanded' : 'collapsed'\"\n     [attr.role]=\"isExpandable() ? 'group' : null\">\n  <ng-content select=\"clr-tree-node\"></ng-content>\n  <ng-content select=\"[clrIfExpanded]\"></ng-content>\n  <clr-recursive-children [parent]=\"_model\"></clr-recursive-children>\n</div>\n",
                providers: [UNIQUE_ID_PROVIDER, TREE_FEATURES_PROVIDER, Expand, { provide: LoadingListener, useExisting: Expand }],
                animations: [
                    trigger('childNodesState', [
                        state('expanded', style({ height: '*', 'overflow-y': 'hidden' })),
                        state('collapsed', style({ height: 0, 'overflow-y': 'hidden' })),
                        transition('expanded <=> collapsed', animate('0.2s ease-in-out')),
                    ]),
                ],
                host: { '[class.clr-tree-node]': 'true' }
            }] }
];
/** @nocollapse */
ClrTreeNode.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [UNIQUE_ID,] }] },
    { type: ClrTreeNode, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: TreeFeaturesService },
    { type: Expand },
    { type: ClrCommonStrings },
    { type: Injector }
];
ClrTreeNode.propDecorators = {
    selected: [{ type: Input, args: ['clrSelected',] }],
    selectedChange: [{ type: Output, args: ['clrSelectedChange',] }],
    treeNodeRole: [{ type: HostBinding, args: ['attr.role',] }],
    rootAriaMultiSelectable: [{ type: HostBinding, args: ['attr.aria-multiselectable',] }],
    ariaSelected: [{ type: HostBinding, args: ['attr.aria-selected',] }],
    expandable: [{ type: Input, args: ['clrExpandable',] }],
    expanded: [{ type: Input, args: ['clrExpanded',] }],
    expandedChange: [{ type: Output, args: ['clrExpandedChange',] }]
};
if (false) {
    /** @type {?} */
    ClrTreeNode.prototype.STATES;
    /** @type {?} */
    ClrTreeNode.prototype._model;
    /** @type {?} */
    ClrTreeNode.prototype.selectedChange;
    /** @type {?} */
    ClrTreeNode.prototype.expandable;
    /** @type {?} */
    ClrTreeNode.prototype.expandedChange;
    /** @type {?} */
    ClrTreeNode.prototype.subscriptions;
    /** @type {?} */
    ClrTreeNode.prototype.nodeId;
    /** @type {?} */
    ClrTreeNode.prototype.featuresService;
    /** @type {?} */
    ClrTreeNode.prototype.expandService;
    /** @type {?} */
    ClrTreeNode.prototype.commonStrings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBZXRGLE1BQU0sT0FBTyxXQUFXOzs7Ozs7Ozs7SUFHdEIsWUFDNEIsTUFBYyxFQUd4QyxNQUFzQixFQUNmLGVBQXVDLEVBQ3ZDLGFBQXFCLEVBQ3JCLGFBQStCLEVBQ3RDLFFBQWtCO1FBUFEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUlqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBVHhD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QUF3QixFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3FCQUNsRSxDQUFDO2lCQUNIO2dCQUNELElBQUksRUFBRSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRTthQUMxQzs7Ozt5Q0FLSSxNQUFNLFNBQUMsU0FBUztZQUdULFdBQVcsdUJBRmxCLFFBQVEsWUFDUixRQUFRO1lBckJvQixtQkFBbUI7WUFQM0MsTUFBTTtZQUNOLGdCQUFnQjtZQVh2QixRQUFROzs7dUJBaUVQLEtBQUssU0FBQyxhQUFhOzZCQW9CbkIsTUFBTSxTQUFDLG1CQUFtQjsyQkFFMUIsV0FBVyxTQUFDLFdBQVc7c0NBS3ZCLFdBQVcsU0FBQywyQkFBMkI7MkJBU3ZDLFdBQVcsU0FBQyxvQkFBb0I7eUJBT2hDLEtBQUssU0FBQyxlQUFlO3VCQUtyQixLQUFLLFNBQUMsYUFBYTs2QkFRbkIsTUFBTSxTQUFDLG1CQUFtQjs7OztJQXhGM0IsNkJBQTBCOztJQXVCMUIsNkJBQXlCOztJQTZCekIscUNBQXVGOztJQXVCdkYsaUNBQXdEOztJQWF4RCxxQ0FBMEU7O0lBRTFFLG9DQUEyQzs7SUF2RnpDLDZCQUF3Qzs7SUFJeEMsc0NBQThDOztJQUM5QyxvQ0FBNEI7O0lBQzVCLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAxOCBWTXdhcmUsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UuXG4gKiBUaGUgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uIGNhbiBiZSBmb3VuZCBpbiBMSUNFTlNFIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHByb2plY3QuXG4gKi9cblxuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEV4cGFuZCB9IGZyb20gJy4uLy4uL3V0aWxzL2V4cGFuZC9wcm92aWRlcnMvZXhwYW5kJztcbmltcG9ydCB7IENsckNvbW1vblN0cmluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9pMThuL2NvbW1vbi1zdHJpbmdzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBVTklRVUVfSUQsIFVOSVFVRV9JRF9QUk9WSURFUiB9IGZyb20gJy4uLy4uL3V0aWxzL2lkLWdlbmVyYXRvci9pZC1nZW5lcmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBMb2FkaW5nTGlzdGVuZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2FkaW5nL2xvYWRpbmctbGlzdGVuZXInO1xuaW1wb3J0IHsgRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvZGVjbGFyYXRpdmUtdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IENsclNlbGVjdGVkU3RhdGUgfSBmcm9tICcuL21vZGVscy9zZWxlY3RlZC1zdGF0ZS5lbnVtJztcbmltcG9ydCB7IFRyZWVOb2RlTW9kZWwgfSBmcm9tICcuL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgVFJFRV9GRUFUVVJFU19QUk9WSURFUiwgVHJlZUZlYXR1cmVzU2VydmljZSB9IGZyb20gJy4vdHJlZS1mZWF0dXJlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xyLXRyZWUtbm9kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLW5vZGUuaHRtbCcsXG4gIHByb3ZpZGVyczogW1VOSVFVRV9JRF9QUk9WSURFUiwgVFJFRV9GRUFUVVJFU19QUk9WSURFUiwgRXhwYW5kLCB7IHByb3ZpZGU6IExvYWRpbmdMaXN0ZW5lciwgdXNlRXhpc3Rpbmc6IEV4cGFuZCB9XSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NoaWxkTm9kZXNTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsICdvdmVyZmxvdy15JzogJ2hpZGRlbicgfSkpLFxuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAwLCAnb3ZlcmZsb3cteSc6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcwLjJzIGVhc2UtaW4tb3V0JykpLFxuICAgIF0pLFxuICBdLFxuICBob3N0OiB7ICdbY2xhc3MuY2xyLXRyZWUtbm9kZV0nOiAndHJ1ZScgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xyVHJlZU5vZGU8VD4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIFNUQVRFUyA9IENsclNlbGVjdGVkU3RhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChVTklRVUVfSUQpIHB1YmxpYyBub2RlSWQ6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTa2lwU2VsZigpXG4gICAgcGFyZW50OiBDbHJUcmVlTm9kZTxUPixcbiAgICBwdWJsaWMgZmVhdHVyZXNTZXJ2aWNlOiBUcmVlRmVhdHVyZXNTZXJ2aWNlPFQ+LFxuICAgIHB1YmxpYyBleHBhbmRTZXJ2aWNlOiBFeHBhbmQsXG4gICAgcHVibGljIGNvbW1vblN0cmluZ3M6IENsckNvbW1vblN0cmluZ3MsXG4gICAgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIGlmICh0aGlzLmZlYXR1cmVzU2VydmljZS5yZWN1cnNpb24pIHtcbiAgICAgIC8vIEknbSBjb21wbGV0ZWx5IHN0dWNrLCB3ZSBoYXZlIHRvIGhhY2sgaW50byBwcml2YXRlIHByb3BlcnRpZXMgdW50aWwgZWl0aGVyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDkzNSBvciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNTk5OFxuICAgICAgLy8gYXJlIGZpeGVkXG4gICAgICB0aGlzLl9tb2RlbCA9ICg8YW55PmluamVjdG9yKS52aWV3LmNvbnRleHQuY2xyTW9kZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvcmNlIGNhc3QgZm9yIG5vdywgbm90IHN1cmUgaG93IHRvIHRpZSB0aGUgY29ycmVjdCB0eXBlIGhlcmUgdG8gZmVhdHVyZXNTZXJ2aWNlLnJlY3Vyc2lvblxuICAgICAgdGhpcy5fbW9kZWwgPSBuZXcgRGVjbGFyYXRpdmVUcmVlTm9kZU1vZGVsKHBhcmVudCA/IDxEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWw8VD4+cGFyZW50Ll9tb2RlbCA6IG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIF9tb2RlbDogVHJlZU5vZGVNb2RlbDxUPjtcblxuICBpc0V4cGFuZGFibGUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmV4cGFuZGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRhYmxlO1xuICAgIH1cbiAgICByZXR1cm4gISF0aGlzLmV4cGFuZFNlcnZpY2UuZXhwYW5kYWJsZSB8fCB0aGlzLl9tb2RlbC5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgQElucHV0KCdjbHJTZWxlY3RlZCcpXG4gIGdldCBzZWxlY3RlZCgpOiBDbHJTZWxlY3RlZFN0YXRlIHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLnNlbGVjdGVkLnZhbHVlO1xuICB9XG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogQ2xyU2VsZWN0ZWRTdGF0ZSB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZlYXR1cmVzU2VydmljZS5zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICAvLyBHcmFjZWZ1bGx5IGhhbmRsZSBmYWxzeSBzdGF0ZXMgbGlrZSBudWxsIG9yIHVuZGVmaW5lZCBiZWNhdXNlIGl0J3MganVzdCBlYXNpZXIgdGhhbiBhbnN3ZXJpbmcgcXVlc3Rpb25zLlxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiB3aXRoIHN0cmljdCB0eXBpbmcgb24gdGhlIGFwcCdzIHNpZGUsIGJ1dCBpdCdzIG5vdCB1cCB0byB1cy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBDbHJTZWxlY3RlZFN0YXRlLlVOU0VMRUNURUQ7XG4gICAgfVxuICAgIC8vIFdlIG1hdGNoIGJvb2xlYW5zIHRvIHRoZSBjb3JyZXNwb25kaW5nIENsclNlbGVjdGVkU3RhdGVcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgPyBDbHJTZWxlY3RlZFN0YXRlLlNFTEVDVEVEIDogQ2xyU2VsZWN0ZWRTdGF0ZS5VTlNFTEVDVEVEO1xuICAgIH1cbiAgICAvLyBXZSBwcm9wYWdhdGUgb25seSBpZiB0aGUgdHJlZSBpcyBpbiBzbWFydCBtb2RlXG4gICAgdGhpcy5fbW9kZWwuc2V0U2VsZWN0ZWQodmFsdWUsIHRoaXMuZmVhdHVyZXNTZXJ2aWNlLmVhZ2VyLCB0aGlzLmZlYXR1cmVzU2VydmljZS5lYWdlcik7XG4gIH1cblxuICAvLyBXZSBuZWVkIGFuIGFzeW5jIEV2ZW50RW1pdHRlciBvciB3ZSB3aWxsIHRyaWdnZXIgY2hvY29sYXRlIGVycm9ycyBsaWtlIGl0J3MgMjAxNi5cbiAgQE91dHB1dCgnY2xyU2VsZWN0ZWRDaGFuZ2UnKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2xyU2VsZWN0ZWRTdGF0ZT4odHJ1ZSk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBnZXQgdHJlZU5vZGVSb2xlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLnBhcmVudCA/ICd0cmVlaXRlbScgOiAndHJlZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGUnKVxuICBnZXQgcm9vdEFyaWFNdWx0aVNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX21vZGVsLnBhcmVudCB8fCAhdGhpcy5mZWF0dXJlc1NlcnZpY2Uuc2VsZWN0YWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgZ2V0IGFyaWFTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlc1NlcnZpY2Uuc2VsZWN0YWJsZSA/IHRoaXMuX21vZGVsLnNlbGVjdGVkLnZhbHVlID09PSBDbHJTZWxlY3RlZFN0YXRlLlNFTEVDVEVEIDogbnVsbDtcbiAgfVxuXG4gIC8vIEFsbG93cyB0aGUgY29uc3VtZXIgdG8gb3ZlcnJpZGUgb3VyIGxvZ2ljIGRlY2lkaW5nIGlmIGEgbm9kZSBpcyBleHBhbmRhYmxlLlxuICAvLyBVc2VmdWwgZm9yIHJlY3Vyc2l2ZSB0cmVlcyB0aGF0IGRvbid0IHdhbnQgdG8gcHJlLWxvYWQgb25lIGxldmVsIGFoZWFkIGp1c3QgdG8ga25vdyB3aGljaCBub2RlcyBhcmUgZXhwYW5kYWJsZS5cbiAgQElucHV0KCdjbHJFeHBhbmRhYmxlJykgZXhwYW5kYWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAvLyBJJ20gY2F2aW5nIG9uIHRoaXMsIGZvciB0cmVlIG5vZGVzIEkgdGhpbmsgd2UgY2FuIHRvbGVyYXRlIGhhdmluZyBhIHR3by13YXkgYmluZGluZyBvbiB0aGUgY29tcG9uZW50XG4gIC8vIHJhdGhlciB0aGFuIGVuZm9yY2UgdGhlIGNscklmRXhwYW5kZWQgc3RydWN0dXJhbCBkaXJlY3RpdmUgZm9yIGR5bmFtaWMgY2FzZXMuIE1vc3RseSBiZWNhdXNlIGZvciB0aGUgc21hcnRcbiAgLy8gY2FzZSwgeW91IGNhbid0IHVzZSBhIHN0cnVjdHVyYWwgZGlyZWN0aXZlLCBpdCB3b3VsZCBuZWVkIHRvIGdvIG9uIGFuIG5nLWNvbnRhaW5lci5cbiAgQElucHV0KCdjbHJFeHBhbmRlZCcpXG4gIGdldCBleHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRTZXJ2aWNlLmV4cGFuZGVkO1xuICB9XG4gIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZXhwYW5kU2VydmljZS5leHBhbmRlZCA9IHZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgnY2xyRXhwYW5kZWRDaGFuZ2UnKSBleHBhbmRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5fbW9kZWwuc2VsZWN0ZWQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh2YWx1ZSkpKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmV4cGFuZFNlcnZpY2UuZXhwYW5kQ2hhbmdlLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQodmFsdWUpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9tb2RlbC5kZXN0cm95KCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgfVxufVxuIl19