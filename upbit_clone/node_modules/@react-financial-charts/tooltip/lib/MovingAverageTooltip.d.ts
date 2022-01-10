import * as React from "react";
export interface SingleMAToolTipProps {
    readonly color: string;
    readonly displayName: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly forChart: number | string;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly onClick?: (event: React.MouseEvent<SVGRectElement, MouseEvent>, details: any) => void;
    readonly options: any;
    readonly origin: [number, number];
    readonly textFill?: string;
    readonly value: string;
}
export declare class SingleMAToolTip extends React.Component<SingleMAToolTipProps> {
    render(): JSX.Element;
    private readonly onClick;
}
interface MovingAverageTooltipProps {
    readonly className?: string;
    readonly displayFormat: (value: number) => string;
    readonly origin: number[];
    readonly displayInit?: string;
    readonly displayValuesFor?: (props: MovingAverageTooltipProps, moreProps: any) => any;
    readonly onClick?: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
    readonly textFill?: string;
    readonly labelFill?: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly width?: number;
    readonly options: {
        yAccessor: (data: any) => number;
        type: string;
        stroke: string;
        windowSize: number;
    }[];
}
export declare class MovingAverageTooltip extends React.Component<MovingAverageTooltipProps> {
    static defaultProps: {
        className: string;
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayInit: string;
        displayValuesFor: (_: any, props: any) => any;
        origin: number[];
        width: number;
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
export {};
