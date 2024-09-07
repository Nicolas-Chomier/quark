export declare function useEventCallback<Args extends unknown[], R>(fn: (...args: Args) => R): (...args: Args) => R;
export declare function useEventCallback<Args extends unknown[], R>(fn: ((...args: Args) => R) | undefined): ((...args: Args) => R) | undefined;
