import * as React from "react";
export interface MACDTooltipProps {
    readonly origin: number[] | ((width: number, height: number) => [number, number]);
    readonly className?: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly onClick?: (event: React.MouseEvent) => void;
    readonly options: {
        slow: number;
        fast: number;
        signal: number;
    };
    readonly appearance: {
        strokeStyle: {
            macd: string;
            signal: string;
        };
        fillStyle: {
            divergence: string;
        };
    };
    readonly displayFormat: (value: number) => string;
    readonly displayInit?: string;
    readonly displayValuesFor: (props: MACDTooltipProps, moreProps: any) => any | undefined;
    readonly yAccessor: (data: any) => {
        macd: number;
        signal: number;
        divergence: number;
    };
}
export declare class MACDTooltip extends React.Component<MACDTooltipProps> {
    static defaultProps: {
        className: string;
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayInit: string;
        displayValuesFor: (_: any, props: any) => any;
        origin: number[];
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
