import * as React from "react";
export declare class PureComponent<T, S = {}, SS = any> extends React.Component<T, S, SS> {
    shouldComponentUpdate(nextProps: T, nextState: S, nextContext: SS): boolean;
}
