type ObjectWithAnyProps = {
    [key: string]: any;
};
export interface ObjectProperties<T extends ObjectWithAnyProps> {
    newObject: T | null;
    keys: (keyof T)[] | null;
    values: T[keyof T][] | null;
    entries: [keyof T, T[keyof T]][] | null;
    size: number;
    verification: boolean;
}
export declare function useObjectProperties<T extends ObjectWithAnyProps>(obj: T): ObjectProperties<T>;
export {};
