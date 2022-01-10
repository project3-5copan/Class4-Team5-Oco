export declare const getClosestItemIndexes: <T, TAccessor extends number | Date>(array: T[], value: TAccessor, accessor: (item: T) => TAccessor) => {
    left: number;
    right: number;
};
export declare const getClosestItem: <T, TAccessor extends number | Date>(array: T[], value: TAccessor, accessor: (item: T) => TAccessor) => T;
