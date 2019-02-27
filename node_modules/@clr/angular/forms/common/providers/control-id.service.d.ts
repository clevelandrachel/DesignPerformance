import { Observable } from 'rxjs';
export declare class ControlIdService {
    private _id;
    id: string;
    private _idChange;
    readonly idChange: Observable<string>;
}
