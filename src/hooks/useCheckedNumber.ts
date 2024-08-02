import { useMemo } from 'react';

// Hooks qui verifie / convertit l'entrée retourne fallback si elle est invalide
export const useCheckedNumber = (
	value: number | string | undefined | null,
	min: number,
	max: number,
	fallback: string,
) => {
	const checkedValue = useMemo(() => {
		if (!value) return 0;

		let numericValue;

		if (typeof value === 'string') {
			numericValue = parseInt(value, 10);
			if (isNaN(numericValue)) return 0;
		} else if (typeof value === 'number') {
			numericValue = value;
		} else {
			return 0;
		}

		if (numericValue < min) return 0;
		if (numericValue > max) return fallback;

		return numericValue;
	}, [fallback, max, min, value]);

	return checkedValue;
};
