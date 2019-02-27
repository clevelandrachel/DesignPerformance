import { ClrDatagridComparatorInterface } from './comparator.interface';
export interface ClrDatagridStateInterface<T = any> {
    page?: {
        from?: number;
        to?: number;
        size?: number;
    };
    sort?: {
        by: string | ClrDatagridComparatorInterface<T>;
        reverse: boolean;
    };
    filters?: any[];
}
