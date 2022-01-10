import * as React from "react";
export interface RSITooltipProps {
    readonly className?: string;
    readonly displayFormat: (value: number) => string;
    readonly displayInit?: string;
    readonly displayValuesFor: (props: RSITooltipProps, moreProps: any) => any;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
    readonly origin: number[] | ((width: number, height: number) => number[]);
    readonly options: {
        windowSize: number;
    };
    readonly textFill?: string;
    readonly yAccessor: (data: any) => number | undefined;
}
export declare class RSITooltip extends React.Component<RSITooltipProps> {
    static defaultProps: {
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayInit: string;
        displayValuesFor: (_: RSITooltipProps, props: any) => any;
        origin: number[];
        className: string;
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
