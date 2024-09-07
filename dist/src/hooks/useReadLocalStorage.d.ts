type Options<T, InitializeWithValue extends boolean | undefined> = {
    deserializer?: (value: string) => T;
    initializeWithValue: InitializeWithValue;
};
export declare function useReadLocalStorage<T>(key: string, options: Options<T, false>): T | null | undefined;
export declare function useReadLocalStorage<T>(key: string, options?: Partial<Options<T, true>>): T | null;
export {};
