import * as React from "react";
export interface ICanvasContexts {
    readonly bg?: CanvasRenderingContext2D;
    readonly axes?: CanvasRenderingContext2D;
    readonly mouseCoord?: CanvasRenderingContext2D;
}
export interface CanvasContainerProps {
    readonly height: number;
    readonly ratio: number;
    readonly style?: React.CSSProperties;
    readonly width: number;
}
export declare class CanvasContainer extends React.PureComponent<CanvasContainerProps> {
    private readonly bgRef;
    private readonly axesRef;
    private readonly mouseRef;
    getCanvasContexts(): ICanvasContexts;
    render(): JSX.Element;
}
