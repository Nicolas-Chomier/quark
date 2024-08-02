import type { Dispatch, SetStateAction } from 'react';
declare global {
    interface WindowEventMap {
        'session-storage': CustomEvent;
    }
}
type UseSessionStorageOptions<T> = {
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    initializeWithValue?: boolean;
};
export declare function useSessionStorage<T>(key: string, initialValue: T | (() => T), options?: UseSessionStorageOptions<T>): [T, Dispatch<SetStateAction<T>>, () => void];
export {};
