import * as React from "react";
export interface StochasticTooltipProps {
    readonly origin: number[] | ((width: number, height: number) => [number, number]);
    readonly className?: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly onClick?: (event: React.MouseEvent) => void;
    readonly yAccessor: (currentItem: any) => {
        K: number;
        D: number;
    };
    readonly options: {
        windowSize: number;
        kWindowSize: number;
        dWindowSize: number;
    };
    readonly appearance: {
        stroke: {
            dLine: string;
            kLine: string;
        };
    };
    readonly displayFormat: (value: number) => string;
    readonly displayInit?: string;
    readonly displayValuesFor?: (props: StochasticTooltipProps, moreProps: any) => any;
    readonly label: string;
}
export declare class StochasticTooltip extends React.Component<StochasticTooltipProps> {
    static defaultProps: {
        className: string;
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayInit: string;
        displayValuesFor: (_: any, props: any) => any;
        label: string;
        origin: number[];
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
