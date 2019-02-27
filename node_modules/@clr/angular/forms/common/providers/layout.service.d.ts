export declare enum Layouts {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
    COMPACT = "compact"
}
export declare class LayoutService {
    layout: Layouts;
    private layoutValues;
    isVertical(): boolean;
    isHorizontal(): boolean;
    isCompact(): boolean;
    readonly layoutClass: string;
    isValid(layout: string): boolean;
}
