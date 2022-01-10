import * as PropTypes from "prop-types";
import * as React from "react";
export interface HoverTooltipProps {
    readonly background?: {
        fillStyle?: string;
        height?: number;
        strokeStyle?: string;
        width?: number;
    };
    readonly backgroundShapeCanvas: (props: HoverTooltipProps, { width, height }: {
        width: number;
        height: number;
    }, ctx: CanvasRenderingContext2D) => void;
    readonly chartId?: number | string;
    readonly fontFamily?: string;
    readonly fontFill?: string;
    readonly fontSize?: number;
    readonly origin?: (props: HoverTooltipProps, moreProps: any, bgSize: {
        width: number;
        height: number;
    }, pointWidth: number) => [number, number];
    readonly tooltip: {
        content: (data: any) => {
            x: string;
            y: {
                label: string;
                value?: string;
                stroke?: string;
            }[];
        };
    };
    readonly toolTipFillStyle?: string;
    readonly toolTipStrokeStyle?: string;
    readonly tooltipCanvas: (props: HoverTooltipProps, content: any, ctx: CanvasRenderingContext2D) => void;
    readonly yAccessor: (data: any) => number;
}
export declare class HoverTooltip extends React.Component<HoverTooltipProps> {
    static defaultProps: {
        background: {
            fillStyle: string;
        };
        toolTipFillStyle: string;
        toolTipStrokeStyle: string;
        tooltipCanvas: (props: HoverTooltipProps, content: any, ctx: CanvasRenderingContext2D) => void;
        origin: (props: HoverTooltipProps, moreProps: any, bgSize: any, pointWidth: any) => any[];
        backgroundShapeCanvas: (props: HoverTooltipProps, { width, height }: {
            width: number;
            height: number;
        }, ctx: CanvasRenderingContext2D) => void;
        fontFill: string;
        fontFamily: string;
        fontSize: number;
    };
    static contextTypes: {
        margin: PropTypes.Validator<object>;
        ratio: PropTypes.Validator<number>;
    };
    render(): JSX.Element;
    private readonly drawOnCanvas;
    private readonly helper;
}
