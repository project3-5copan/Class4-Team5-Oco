import { getCurrentItem } from "../utils/ChartDataUtil";
import { last } from "../utils/index";
export const mouseBasedZoomAnchor = (options) => {
    const { xScale, xAccessor, mouseXY, plotData } = options;
    const currentItem = getCurrentItem(xScale, xAccessor, mouseXY, plotData);
    return xAccessor(currentItem);
};
export const lastVisibleItemBasedZoomAnchor = (options) => {
    const { xAccessor, plotData } = options;
    const lastItem = last(plotData);
    return xAccessor(lastItem);
};
export const rightDomainBasedZoomAnchor = (options) => {
    const { xScale } = options;
    const [, end] = xScale.domain();
    return end;
};
//# sourceMappingURL=zoomBehavior.js.map