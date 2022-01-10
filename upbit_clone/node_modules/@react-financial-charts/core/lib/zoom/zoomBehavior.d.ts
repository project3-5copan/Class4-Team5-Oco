import { ScaleContinuousNumeric, ScaleTime } from "d3-scale";
export interface IZoomAnchorOptions<TData, TXAxis extends number | Date> {
    readonly plotData: TData[];
    readonly mouseXY: number[];
    readonly xAccessor: (data: TData) => TXAxis;
    readonly xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
}
export declare const mouseBasedZoomAnchor: <TData, TXAxis extends number | Date>(options: IZoomAnchorOptions<TData, TXAxis>) => TXAxis;
export declare const lastVisibleItemBasedZoomAnchor: <TData, TXAxis extends number | Date>(options: IZoomAnchorOptions<TData, TXAxis>) => TXAxis;
export declare const rightDomainBasedZoomAnchor: <TData, TXAxis extends number | Date>(options: IZoomAnchorOptions<TData, TXAxis>) => number | Date;
