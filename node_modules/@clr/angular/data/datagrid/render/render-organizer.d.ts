import { Observable, Subject } from 'rxjs';
import { DatagridRenderStep } from '../enums/render-step.enum';
export declare class DatagridRenderOrganizer {
    protected _renderStep: Subject<DatagridRenderStep>;
    readonly renderStep: Observable<DatagridRenderStep>;
    filterRenderSteps(step: DatagridRenderStep): Observable<DatagridRenderStep>;
    private alreadySized;
    widths: {
        px: number;
        strict: boolean;
    }[];
    resize(): void;
}
