import * as React from "react";
import { ToolTipText } from "./ToolTipText";
import { ToolTipTSpanLabel } from "./ToolTipTSpanLabel";
export class SingleTooltip extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            const { onClick, forChart, options } = this.props;
            if (onClick !== undefined) {
                onClick(event, Object.assign({ chartId: forChart }, options));
            }
        };
    }
    /*
     * Renders the value next to the label.
     */
    renderValueNextToLabel() {
        const { origin, yLabel, yValue, labelFill, valueFill, withShape, fontSize, fontFamily, fontWeight, } = this.props;
        return (React.createElement("g", { transform: `translate(${origin[0]}, ${origin[1]})`, onClick: this.handleClick },
            withShape ? React.createElement("rect", { x: "0", y: "-6", width: "6", height: "6", fill: valueFill }) : null,
            React.createElement(ToolTipText, { x: withShape ? 8 : 0, y: 0, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight },
                React.createElement(ToolTipTSpanLabel, { fill: labelFill },
                    yLabel,
                    ": "),
                React.createElement("tspan", { fill: valueFill }, yValue))));
    }
    /*
     * Renders the value beneath the label.
     */
    renderValueBeneathLabel() {
        const { origin, yLabel, yValue, labelFill, valueFill, withShape, fontSize, fontFamily, fontWeight, } = this.props;
        return (React.createElement("g", { transform: `translate(${origin[0]}, ${origin[1]})`, onClick: this.handleClick },
            withShape ? React.createElement("line", { x1: 0, y1: 2, x2: 0, y2: 28, stroke: valueFill, strokeWidth: "4px" }) : null,
            React.createElement(ToolTipText, { x: 5, y: 11, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight },
                React.createElement(ToolTipTSpanLabel, { fill: labelFill }, yLabel),
                React.createElement("tspan", { x: "5", dy: "15", fill: valueFill }, yValue))));
    }
    /*
     * Renders the value next to the label.
     * The parent component must have a "text"-element.
     */
    renderInline() {
        const { yLabel, yValue, labelFill, valueFill, fontSize, fontFamily, fontWeight } = this.props;
        return (React.createElement("tspan", { onClick: this.handleClick, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight },
            React.createElement(ToolTipTSpanLabel, { fill: labelFill },
                yLabel,
                ":\u00A0"),
            React.createElement("tspan", { fill: valueFill },
                yValue,
                "\u00A0\u00A0")));
    }
    render() {
        const { layout } = this.props;
        let comp = null;
        switch (layout) {
            case "horizontal":
                comp = this.renderValueNextToLabel();
                break;
            case "horizontalRows":
                comp = this.renderValueBeneathLabel();
                break;
            case "horizontalInline":
                comp = this.renderInline();
                break;
            case "vertical":
                comp = this.renderValueNextToLabel();
                break;
            case "verticalRows":
                comp = this.renderValueBeneathLabel();
                break;
            default:
                comp = this.renderValueNextToLabel();
        }
        return comp;
    }
}
SingleTooltip.defaultProps = {
    labelFill: "#4682B4",
    valueFill: "#000000",
    withShape: false,
};
//# sourceMappingURL=SingleTooltip.js.map