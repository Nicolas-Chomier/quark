import { useCallback, useEffect, useState } from 'react';

export const useDebounceValue = <T>(
	defaultValue: T,
	delay: number,
): [T, (value: T) => void] => {
	const [value, setValue] = useState<T>(defaultValue);
	const [debouncedValue, setDebouncedValue] = useState<T>(defaultValue);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	const setValueAndTriggerDebounce = useCallback((newValue: T) => {
		setValue(newValue);
	}, []);

	return [debouncedValue, setValueAndTriggerDebounce];
};
