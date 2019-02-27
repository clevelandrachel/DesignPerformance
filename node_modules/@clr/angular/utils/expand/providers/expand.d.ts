import { Observable } from 'rxjs';
import { LoadingListener } from '../../../utils/loading/loading-listener';
import { ClrLoadingState } from '../../loading/loading';
export declare class Expand implements LoadingListener {
    expandable: number;
    private _replace;
    readonly replace: Observable<boolean>;
    setReplace(replaceValue: boolean): void;
    private _loading;
    loading: boolean;
    private _expanded;
    expanded: boolean;
    toggle(): void;
    private _animate;
    readonly animate: Observable<boolean>;
    private _expandChange;
    readonly expandChange: Observable<boolean>;
    loadingStateChange(state: ClrLoadingState): void;
}
