import * as React from "react";
export declare type layouts = "horizontal" | "horizontalRows" | "horizontalInline" | "vertical" | "verticalRows";
export interface SingleTooltipProps {
    readonly origin: [number, number];
    readonly yLabel: string;
    readonly yValue: string;
    readonly onClick?: (event: React.MouseEvent, details: any) => void;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly labelFill: string;
    readonly valueFill: string;
    readonly forChart: number | string;
    readonly options: any;
    readonly layout: layouts;
    readonly withShape: boolean;
}
export declare class SingleTooltip extends React.Component<SingleTooltipProps> {
    static defaultProps: {
        labelFill: string;
        valueFill: string;
        withShape: boolean;
    };
    renderValueNextToLabel(): JSX.Element;
    renderValueBeneathLabel(): JSX.Element;
    renderInline(): JSX.Element;
    render(): JSX.Element;
    private readonly handleClick;
}
