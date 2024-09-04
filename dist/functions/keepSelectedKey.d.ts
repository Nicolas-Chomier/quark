type DataObject = Record<string, any>;
type SelectKeyOptions<TData extends DataObject> = {
    data: TData[];
    keysToKeep: (keyof TData)[] | keyof TData;
};
export declare const keepSelectedKeys: <TData extends DataObject>({ data, keysToKeep, }: SelectKeyOptions<TData>) => Partial<TData>[];
export {};
