import { TrackByFunction } from '@angular/core';
import { Items } from './providers/items';
export declare class ClrDatagridItemsTrackBy<T = any> {
    private _items;
    constructor(_items: Items<T>);
    trackBy: TrackByFunction<T>;
}
