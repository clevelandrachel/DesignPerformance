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
var ClrTreeNode = /** @class */ (function () {
    function ClrTreeNode(nodeId, parent, featuresService, expandService, commonStrings, injector) {
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
    ClrTreeNode.prototype.isExpandable = /**
     * @return {?}
     */
    function () {
        if (typeof this.expandable !== 'undefined') {
            return this.expandable;
        }
        return !!this.expandService.expandable || this._model.children.length > 0;
    };
    Object.defineProperty(ClrTreeNode.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model.selected.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrTreeNode.prototype, "treeNodeRole", {
        get: /**
         * @return {?}
         */
        function () {
            return this._model.parent ? 'treeitem' : 'tree';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrTreeNode.prototype, "rootAriaMultiSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._model.parent || !this.featuresService.selectable) {
                return null;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrTreeNode.prototype, "ariaSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.featuresService.selectable ? this._model.selected.value === ClrSelectedState.SELECTED : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClrTreeNode.prototype, "expanded", {
        // I'm caving on this, for tree nodes I think we can tolerate having a two-way binding on the component
        // rather than enforce the clrIfExpanded structural directive for dynamic cases. Mostly because for the smart
        // case, you can't use a structural directive, it would need to go on an ng-container.
        get: 
        // I'm caving on this, for tree nodes I think we can tolerate having a two-way binding on the component
        // rather than enforce the clrIfExpanded structural directive for dynamic cases. Mostly because for the smart
        // case, you can't use a structural directive, it would need to go on an ng-container.
        /**
         * @return {?}
         */
        function () {
            return this.expandService.expanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.expandService.expanded = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClrTreeNode.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscriptions.push(this._model.selected.subscribe(function (value) { return _this.selectedChange.emit(value); }));
        this.subscriptions.push(this.expandService.expandChange.subscribe(function (value) { return _this.expandedChange.emit(value); }));
    };
    /**
     * @return {?}
     */
    ClrTreeNode.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._model.destroy();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
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
    ClrTreeNode.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [UNIQUE_ID,] }] },
        { type: ClrTreeNode, decorators: [{ type: Optional }, { type: SkipSelf }] },
        { type: TreeFeaturesService },
        { type: Expand },
        { type: ClrCommonStrings },
        { type: Injector }
    ]; };
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
    return ClrTreeNode;
}());
export { ClrTreeNode };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0YS90cmVlLXZpZXcvdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRXRGO0lBZ0JFLHFCQUM0QixNQUFjLEVBR3hDLE1BQXNCLEVBQ2YsZUFBdUMsRUFDdkMsYUFBcUIsRUFDckIsYUFBK0IsRUFDdEMsUUFBa0I7UUFQUSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSWpDLG9CQUFlLEdBQWYsZUFBZSxDQUF3QjtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFUeEMsV0FBTSxHQUFHLGdCQUFnQixDQUFD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RUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDakUsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDOzRCQUNoRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7eUJBQ2xFLENBQUM7cUJBQ0g7b0JBQ0QsSUFBSSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFO2lCQUMxQzs7Ozs2Q0FLSSxNQUFNLFNBQUMsU0FBUztnQkFHVCxXQUFXLHVCQUZsQixRQUFRLFlBQ1IsUUFBUTtnQkFyQm9CLG1CQUFtQjtnQkFQM0MsTUFBTTtnQkFDTixnQkFBZ0I7Z0JBWHZCLFFBQVE7OzsyQkFpRVAsS0FBSyxTQUFDLGFBQWE7aUNBb0JuQixNQUFNLFNBQUMsbUJBQW1COytCQUUxQixXQUFXLFNBQUMsV0FBVzswQ0FLdkIsV0FBVyxTQUFDLDJCQUEyQjsrQkFTdkMsV0FBVyxTQUFDLG9CQUFvQjs2QkFPaEMsS0FBSyxTQUFDLGVBQWU7MkJBS3JCLEtBQUssU0FBQyxhQUFhO2lDQVFuQixNQUFNLFNBQUMsbUJBQW1COztJQWE3QixrQkFBQztDQUFBLEFBbkhELElBbUhDO1NBdEdZLFdBQVc7OztJQUN0Qiw2QkFBMEI7O0lBdUIxQiw2QkFBeUI7O0lBNkJ6QixxQ0FBdUY7O0lBdUJ2RixpQ0FBd0Q7O0lBYXhELHFDQUEwRTs7SUFFMUUsb0NBQTJDOztJQXZGekMsNkJBQXdDOztJQUl4QyxzQ0FBOEM7O0lBQzlDLG9DQUE0Qjs7SUFDNUIsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDE4IFZNd2FyZSwgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqIFRoZSBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIExJQ0VOU0UgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgcHJvamVjdC5cbiAqL1xuXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRXhwYW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXhwYW5kL3Byb3ZpZGVycy9leHBhbmQnO1xuaW1wb3J0IHsgQ2xyQ29tbW9uU3RyaW5ncyB9IGZyb20gJy4uLy4uL3V0aWxzL2kxOG4vY29tbW9uLXN0cmluZ3MuaW50ZXJmYWNlJztcbmltcG9ydCB7IFVOSVFVRV9JRCwgVU5JUVVFX0lEX1BST1ZJREVSIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWQtZ2VuZXJhdG9yL2lkLWdlbmVyYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRpbmdMaXN0ZW5lciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvYWRpbmcvbG9hZGluZy1saXN0ZW5lcic7XG5pbXBvcnQgeyBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWwgfSBmcm9tICcuL21vZGVscy9kZWNsYXJhdGl2ZS10cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgQ2xyU2VsZWN0ZWRTdGF0ZSB9IGZyb20gJy4vbW9kZWxzL3NlbGVjdGVkLXN0YXRlLmVudW0nO1xuaW1wb3J0IHsgVHJlZU5vZGVNb2RlbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUUkVFX0ZFQVRVUkVTX1BST1ZJREVSLCBUcmVlRmVhdHVyZXNTZXJ2aWNlIH0gZnJvbSAnLi90cmVlLWZlYXR1cmVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbHItdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtbm9kZS5odG1sJyxcbiAgcHJvdmlkZXJzOiBbVU5JUVVFX0lEX1BST1ZJREVSLCBUUkVFX0ZFQVRVUkVTX1BST1ZJREVSLCBFeHBhbmQsIHsgcHJvdmlkZTogTG9hZGluZ0xpc3RlbmVyLCB1c2VFeGlzdGluZzogRXhwYW5kIH1dLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignY2hpbGROb2Rlc1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgJ292ZXJmbG93LXknOiAnaGlkZGVuJyB9KSksXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6IDAsICdvdmVyZmxvdy15JzogJ2hpZGRlbicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzAuMnMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG4gIGhvc3Q6IHsgJ1tjbGFzcy5jbHItdHJlZS1ub2RlXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBDbHJUcmVlTm9kZTxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgU1RBVEVTID0gQ2xyU2VsZWN0ZWRTdGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFVOSVFVRV9JRCkgcHVibGljIG5vZGVJZDogc3RyaW5nLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNraXBTZWxmKClcbiAgICBwYXJlbnQ6IENsclRyZWVOb2RlPFQ+LFxuICAgIHB1YmxpYyBmZWF0dXJlc1NlcnZpY2U6IFRyZWVGZWF0dXJlc1NlcnZpY2U8VD4sXG4gICAgcHVibGljIGV4cGFuZFNlcnZpY2U6IEV4cGFuZCxcbiAgICBwdWJsaWMgY29tbW9uU3RyaW5nczogQ2xyQ29tbW9uU3RyaW5ncyxcbiAgICBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZXNTZXJ2aWNlLnJlY3Vyc2lvbikge1xuICAgICAgLy8gSSdtIGNvbXBsZXRlbHkgc3R1Y2ssIHdlIGhhdmUgdG8gaGFjayBpbnRvIHByaXZhdGUgcHJvcGVydGllcyB1bnRpbCBlaXRoZXJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0OTM1IG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1OTk4XG4gICAgICAvLyBhcmUgZml4ZWRcbiAgICAgIHRoaXMuX21vZGVsID0gKDxhbnk+aW5qZWN0b3IpLnZpZXcuY29udGV4dC5jbHJNb2RlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRm9yY2UgY2FzdCBmb3Igbm93LCBub3Qgc3VyZSBob3cgdG8gdGllIHRoZSBjb3JyZWN0IHR5cGUgaGVyZSB0byBmZWF0dXJlc1NlcnZpY2UucmVjdXJzaW9uXG4gICAgICB0aGlzLl9tb2RlbCA9IG5ldyBEZWNsYXJhdGl2ZVRyZWVOb2RlTW9kZWwocGFyZW50ID8gPERlY2xhcmF0aXZlVHJlZU5vZGVNb2RlbDxUPj5wYXJlbnQuX21vZGVsIDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgX21vZGVsOiBUcmVlTm9kZU1vZGVsPFQ+O1xuXG4gIGlzRXhwYW5kYWJsZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZXhwYW5kYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cGFuZGFibGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRoaXMuZXhwYW5kU2VydmljZS5leHBhbmRhYmxlIHx8IHRoaXMuX21vZGVsLmNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICBASW5wdXQoJ2NsclNlbGVjdGVkJylcbiAgZ2V0IHNlbGVjdGVkKCk6IENsclNlbGVjdGVkU3RhdGUgfCBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWwuc2VsZWN0ZWQudmFsdWU7XG4gIH1cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBDbHJTZWxlY3RlZFN0YXRlIHwgYm9vbGVhbikge1xuICAgIHRoaXMuZmVhdHVyZXNTZXJ2aWNlLnNlbGVjdGFibGUgPSB0cnVlO1xuICAgIC8vIEdyYWNlZnVsbHkgaGFuZGxlIGZhbHN5IHN0YXRlcyBsaWtlIG51bGwgb3IgdW5kZWZpbmVkIGJlY2F1c2UgaXQncyBqdXN0IGVhc2llciB0aGFuIGFuc3dlcmluZyBxdWVzdGlvbnMuXG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIHdpdGggc3RyaWN0IHR5cGluZyBvbiB0aGUgYXBwJ3Mgc2lkZSwgYnV0IGl0J3Mgbm90IHVwIHRvIHVzLlxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IENsclNlbGVjdGVkU3RhdGUuVU5TRUxFQ1RFRDtcbiAgICB9XG4gICAgLy8gV2UgbWF0Y2ggYm9vbGVhbnMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgQ2xyU2VsZWN0ZWRTdGF0ZVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSA/IENsclNlbGVjdGVkU3RhdGUuU0VMRUNURUQgOiBDbHJTZWxlY3RlZFN0YXRlLlVOU0VMRUNURUQ7XG4gICAgfVxuICAgIC8vIFdlIHByb3BhZ2F0ZSBvbmx5IGlmIHRoZSB0cmVlIGlzIGluIHNtYXJ0IG1vZGVcbiAgICB0aGlzLl9tb2RlbC5zZXRTZWxlY3RlZCh2YWx1ZSwgdGhpcy5mZWF0dXJlc1NlcnZpY2UuZWFnZXIsIHRoaXMuZmVhdHVyZXNTZXJ2aWNlLmVhZ2VyKTtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgYW4gYXN5bmMgRXZlbnRFbWl0dGVyIG9yIHdlIHdpbGwgdHJpZ2dlciBjaG9jb2xhdGUgZXJyb3JzIGxpa2UgaXQncyAyMDE2LlxuICBAT3V0cHV0KCdjbHJTZWxlY3RlZENoYW5nZScpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDbHJTZWxlY3RlZFN0YXRlPih0cnVlKTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIGdldCB0cmVlTm9kZVJvbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWwucGFyZW50ID8gJ3RyZWVpdGVtJyA6ICd0cmVlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZScpXG4gIGdldCByb290QXJpYU11bHRpU2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fbW9kZWwucGFyZW50IHx8ICF0aGlzLmZlYXR1cmVzU2VydmljZS5zZWxlY3RhYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtc2VsZWN0ZWQnKVxuICBnZXQgYXJpYVNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZlYXR1cmVzU2VydmljZS5zZWxlY3RhYmxlID8gdGhpcy5fbW9kZWwuc2VsZWN0ZWQudmFsdWUgPT09IENsclNlbGVjdGVkU3RhdGUuU0VMRUNURUQgOiBudWxsO1xuICB9XG5cbiAgLy8gQWxsb3dzIHRoZSBjb25zdW1lciB0byBvdmVycmlkZSBvdXIgbG9naWMgZGVjaWRpbmcgaWYgYSBub2RlIGlzIGV4cGFuZGFibGUuXG4gIC8vIFVzZWZ1bCBmb3IgcmVjdXJzaXZlIHRyZWVzIHRoYXQgZG9uJ3Qgd2FudCB0byBwcmUtbG9hZCBvbmUgbGV2ZWwgYWhlYWQganVzdCB0byBrbm93IHdoaWNoIG5vZGVzIGFyZSBleHBhbmRhYmxlLlxuICBASW5wdXQoJ2NsckV4cGFuZGFibGUnKSBleHBhbmRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gIC8vIEknbSBjYXZpbmcgb24gdGhpcywgZm9yIHRyZWUgbm9kZXMgSSB0aGluayB3ZSBjYW4gdG9sZXJhdGUgaGF2aW5nIGEgdHdvLXdheSBiaW5kaW5nIG9uIHRoZSBjb21wb25lbnRcbiAgLy8gcmF0aGVyIHRoYW4gZW5mb3JjZSB0aGUgY2xySWZFeHBhbmRlZCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBmb3IgZHluYW1pYyBjYXNlcy4gTW9zdGx5IGJlY2F1c2UgZm9yIHRoZSBzbWFydFxuICAvLyBjYXNlLCB5b3UgY2FuJ3QgdXNlIGEgc3RydWN0dXJhbCBkaXJlY3RpdmUsIGl0IHdvdWxkIG5lZWQgdG8gZ28gb24gYW4gbmctY29udGFpbmVyLlxuICBASW5wdXQoJ2NsckV4cGFuZGVkJylcbiAgZ2V0IGV4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmV4cGFuZFNlcnZpY2UuZXhwYW5kZWQ7XG4gIH1cbiAgc2V0IGV4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5leHBhbmRTZXJ2aWNlLmV4cGFuZGVkID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCdjbHJFeHBhbmRlZENoYW5nZScpIGV4cGFuZGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLl9tb2RlbC5zZWxlY3RlZC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHZhbHVlKSkpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZXhwYW5kU2VydmljZS5leHBhbmRDaGFuZ2Uuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuZXhwYW5kZWRDaGFuZ2UuZW1pdCh2YWx1ZSkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX21vZGVsLmRlc3Ryb3koKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICB9XG59XG4iXX0=