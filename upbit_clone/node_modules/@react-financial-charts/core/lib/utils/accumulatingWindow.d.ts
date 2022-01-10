interface AccumulatingWindow {
    (data: any[]): any[];
    accumulateTill(): any;
    accumulateTill(x: any): AccumulatingWindow;
    accumulator(): any;
    accumulator(x: any): AccumulatingWindow;
    value(): any;
    value(x: any): AccumulatingWindow;
    discardTillStart(): boolean;
    discardTillStart(x: boolean): AccumulatingWindow;
    discardTillEnd(): boolean;
    discardTillEnd(x: boolean): AccumulatingWindow;
}
export default function (): AccumulatingWindow;
export {};
