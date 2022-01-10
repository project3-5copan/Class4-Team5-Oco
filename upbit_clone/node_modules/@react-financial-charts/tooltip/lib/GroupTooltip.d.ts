import * as React from "react";
import { layouts } from "./SingleTooltip";
export interface GroupTooltipProps {
    readonly className?: string;
    readonly fontFamily?: string;
    readonly fontSize?: number;
    readonly fontWeight?: number;
    readonly displayFormat: (value: number) => string;
    readonly displayInit?: string;
    readonly displayValuesFor: (props: GroupTooltipProps, moreProps: any) => any;
    readonly layout: layouts;
    readonly onClick?: (event: React.MouseEvent, details: any) => void;
    readonly options: {
        labelFill?: string;
        yLabel: string;
        yAccessor: (data: any) => number;
        valueFill?: string;
        withShape?: boolean;
    }[];
    readonly origin: [number, number];
    readonly position?: "topRight" | "bottomLeft" | "bottomRight";
    readonly verticalSize?: number;
    readonly width?: number;
}
export declare class GroupTooltip extends React.Component<GroupTooltipProps> {
    static defaultProps: {
        className: string;
        layout: string;
        displayFormat: (n: number | {
            valueOf(): number;
        }) => string;
        displayInit: string;
        displayValuesFor: (_: any, props: any) => any;
        origin: number[];
        width: number;
        verticalSize: number;
    };
    render(): JSX.Element;
    private readonly getPosition;
    private readonly renderSVG;
}
