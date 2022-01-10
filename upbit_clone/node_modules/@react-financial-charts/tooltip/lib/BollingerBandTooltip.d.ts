import * as React from "react";
export interface BollingerBandTooltipProps {
    readonly className?: string;
    readonly displayFormat: (value: number) => string;
    readonly displayInit?: string;
    readonly displayValuesFor?: (props: BollingerBandTooltipProps, moreProps: any) => any;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly onClick?: (event: React.MouseEvent) => void;
    readonly options: {
        movingAverageType: string;
        multiplier: number;
        sourcePath: string;
        windowSize: number;
    };
    readonly origin?: [number, number] | ((width: number, height: number) => [number, number]);
    readonly textFill?: string;
    readonly yAccessor?: (data: any) => {
        bottom: number;
        middle: number;
        top: number;
    };
}
export declare class BollingerBandTooltip extends React.Component<BollingerBandTooltipProps> {
    static defaultProps: {
        className: string;
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayValuesFor: (_: any, props: any) => any;
        displayInit: string;
        origin: number[];
        yAccessor: (data: any) => any;
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
