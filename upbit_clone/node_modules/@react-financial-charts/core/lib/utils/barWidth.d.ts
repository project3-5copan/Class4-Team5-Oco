import { ScaleContinuousNumeric, ScaleTime } from "d3-scale";
/**
 * Bar width is based on the amount of items in the plot data and the distance between the first and last of those
 * items.
 * @param props the props passed to the series.
 * @param moreProps an object holding the xScale, xAccessor and plotData.
 * @return {number} the bar width.
 */
export declare const plotDataLengthBarWidth: <T>(props: {
    widthRatio: number;
}, moreProps: {
    xAccessor: (datum: T) => number | Date;
    xScale: ScaleContinuousNumeric<number, number> | ScaleTime<number, number>;
    plotData: T[];
}) => number;
