import * as React from "react";
export class CanvasContainer extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.bgRef = React.createRef();
        this.axesRef = React.createRef();
        this.mouseRef = React.createRef();
    }
    getCanvasContexts() {
        var _a, _b, _c, _d, _e, _f;
        return {
            bg: (_b = (_a = this.bgRef.current) === null || _a === void 0 ? void 0 : _a.getContext("2d")) !== null && _b !== void 0 ? _b : undefined,
            axes: (_d = (_c = this.axesRef.current) === null || _c === void 0 ? void 0 : _c.getContext("2d")) !== null && _d !== void 0 ? _d : undefined,
            mouseCoord: (_f = (_e = this.mouseRef.current) === null || _e === void 0 ? void 0 : _e.getContext("2d")) !== null && _f !== void 0 ? _f : undefined,
        };
    }
    render() {
        const { height, ratio, style, width } = this.props;
        const adjustedWidth = width * ratio;
        const adjustedHeight = height * ratio;
        const canvasStyle = { position: "absolute", width, height };
        return (React.createElement("div", { style: Object.assign(Object.assign({}, style), { position: "absolute" }) },
            React.createElement("canvas", { ref: this.bgRef, width: adjustedWidth, height: adjustedHeight, style: canvasStyle }),
            React.createElement("canvas", { ref: this.axesRef, width: adjustedWidth, height: adjustedHeight, style: canvasStyle }),
            React.createElement("canvas", { ref: this.mouseRef, width: adjustedWidth, height: adjustedHeight, style: canvasStyle })));
    }
}
//# sourceMappingURL=CanvasContainer.js.map