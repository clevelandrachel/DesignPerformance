import { Observable } from 'rxjs';
import { FiltersProvider } from './filters';
import { Items } from './items';
export declare enum SelectionType {
    None = 0,
    Single = 1,
    Multi = 2
}
export declare class Selection<T = any> {
    private _items;
    private _filters;
    id: string;
    private prevSelectionRefs;
    private prevSingleSelectionRef;
    constructor(_items: Items<T>, _filters: FiltersProvider<T>);
    clearSelection(): void;
    private _selectionType;
    selectionType: SelectionType;
    rowSelectionMode: boolean;
    private readonly _selectable;
    /**
     * Ignore items changes in the same change detection cycle.
     */
    private debounce;
    /**
     * Subscriptions to the other providers changes.
     */
    private subscriptions;
    /**
     * Cleans up our subscriptions to other providers
     */
    destroy(): void;
    /**
     * The current selection in single selection type
     */
    private _currentSingle;
    currentSingle: T;
    /**
     * The current selection
     */
    private _current;
    current: T[];
    updateCurrent(value: T[], emit: boolean): void;
    /**
     * The Observable that lets other classes subscribe to selection changes
     */
    private _change;
    private emitChange;
    readonly change: Observable<T[] | T>;
    /**
     * Checks if an item is currently selected
     */
    isSelected(item: T): boolean;
    /**
     * Selects an item
     */
    private selectItem;
    /**
     * Deselects an item
     */
    private deselectItem;
    /**
     * Selects or deselects an item
     */
    setSelected(item: T, selected: boolean): void;
    /**
     * Checks if all currently displayed items are selected
     */
    isAllSelected(): boolean;
    /**
     * Selects or deselects all currently displayed items
     */
    toggleAll(): void;
}
