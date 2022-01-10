import { first, last } from ".";
/**
 * Bar width is based on the amount of items in the plot data and the distance between the first and last of those
 * items.
 * @param props the props passed to the series.
 * @param moreProps an object holding the xScale, xAccessor and plotData.
 * @return {number} the bar width.
 */
export const plotDataLengthBarWidth = (props, moreProps) => {
    const { widthRatio } = props;
    const { xAccessor, xScale, plotData } = moreProps;
    const [l, r] = xScale.range();
    if (xScale.invert != null) {
        const [dl, dr] = xScale.domain();
        if (typeof dl === "number" && typeof dr === "number") {
            const totalWidth = Math.abs(r - l);
            const width = totalWidth / Math.abs(dl - dr);
            return width * widthRatio;
        }
        const width = xScale(xAccessor(last(plotData))) - xScale(xAccessor(first(plotData)));
        return (width / plotData.length) * widthRatio * 0.7;
    }
    const totalWidth = Math.abs(r - l);
    const width = totalWidth / xScale.domain().length;
    return width * widthRatio;
};
//# sourceMappingURL=barWidth.js.map