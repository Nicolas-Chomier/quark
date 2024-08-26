import { useMemo } from 'react';

type ObjectWithAnyProps = { [key: string]: any };

export interface ObjectProperties<T extends ObjectWithAnyProps> {
	newObject: T | null;
	keys: (keyof T)[] | null;
	values: T[keyof T][] | null;
	entries: [keyof T, T[keyof T]][] | null;
	size: number;
	verification: boolean;
}

export function useObjectProperties<T extends ObjectWithAnyProps>(
	obj: T,
): ObjectProperties<T> {
	return useMemo(() => {
		if (obj && typeof obj === 'object' && Object.keys(obj).length > 0) {
			const keys = Object.keys(obj) as (keyof T)[];
			return {
				newObject: structuredClone(obj),
				keys,
				values: Object.values(obj),
				entries: Object.entries(obj) as [keyof T, T[keyof T]][],
				size: keys.length,
				verification: true,
			};
		} else {
			return {
				newObject: null,
				keys: null,
				values: null,
				entries: null,
				size: 0,
				verification: false,
			};
		}
	}, [obj]);
}
