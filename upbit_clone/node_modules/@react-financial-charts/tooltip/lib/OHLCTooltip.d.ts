import * as React from "react";
export interface OHLCTooltipProps {
    readonly accessor?: (data: any) => any;
    readonly className?: string;
    readonly changeFormat?: (n: number | {
        valueOf(): number;
    }) => string;
    readonly displayTexts?: {
        o: string;
        h: string;
        l: string;
        c: string;
        na: string;
    };
    readonly displayValuesFor?: (props: OHLCTooltipProps, moreProps: any) => any;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill?: string;
    readonly labelFontWeight?: number;
    readonly ohlcFormat?: (n: number | {
        valueOf(): number;
    }) => string;
    readonly onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
    readonly origin?: [number, number] | ((width: number, height: number) => [number, number]);
    readonly percentFormat?: (n: number | {
        valueOf(): number;
    }) => string;
    readonly textFill?: string | ((item: any) => string);
}
export declare class OHLCTooltip extends React.Component<OHLCTooltipProps> {
    static defaultProps: {
        accessor: (d: unknown) => unknown;
        changeFormat: (n: number | {
            valueOf(): number;
        }) => string;
        className: string;
        displayTexts: {
            o: string;
            h: string;
            l: string;
            c: string;
            na: string;
        };
        displayValuesFor: (_: any, props: any) => any;
        fontFamily: string;
        ohlcFormat: (n: number | {
            valueOf(): number;
        }) => string;
        origin: number[];
        percentFormat: (n: number | {
            valueOf(): number;
        }) => string;
    };
    render(): JSX.Element;
    private readonly renderSVG;
}
