import * as React from "react";
export interface SingleValueTooltipProps {
    readonly xDisplayFormat?: (value: number) => string;
    readonly yDisplayFormat?: (value: number) => string;
    readonly xInitDisplay?: string;
    readonly yInitDisplay?: string;
    readonly xLabel?: string;
    readonly yLabel: string;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly valueFill?: string;
    readonly origin?: [number, number] | ((width: number, height: number) => [number, number]);
    readonly className?: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
    readonly displayValuesFor?: (props: SingleValueTooltipProps, moreProps: any) => any;
    readonly xAccessor?: (d: any) => number;
    readonly yAccessor?: (d: any) => number;
}
export declare class SingleValueTooltip extends React.Component<SingleValueTooltipProps> {
    static defaultProps: {
        className: string;
        displayValuesFor: (_: any, props: any) => any;
        labelFill: string;
        origin: number[];
        valueFill: string;
        xAccessor: () => void;
        xDisplayFormat: (value: number) => string;
        xInitDisplay: string;
        yAccessor: (d: any) => number;
        yDisplayFormat: (value: number) => string;
        yInitDisplay: string;
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
