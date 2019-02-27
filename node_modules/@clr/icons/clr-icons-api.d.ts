import { IconAlias, IconShapeSources } from './interfaces/icon-interfaces';
export declare class ClarityIconsApi {
    private static singleInstance;
    private constructor();
    static readonly instance: ClarityIconsApi;
    private validateName;
    private setIconTemplate;
    private setIconAliases;
    add(icons?: IconShapeSources): void;
    has(shapeName: string): boolean;
    get(shapeName?: string): any;
    alias(aliases?: IconAlias): void;
}
