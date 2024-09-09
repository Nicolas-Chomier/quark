export const textToInt = (text: string): number | null => {
	// Retire les espaces au début et à la fin
	const trimmed = text.trim();
	// Vérifie si la chaîne est vide après le trim
	if (trimmed === '') {
		return null;
	}
	// Convertit en nombre et vérifie si c'est un entier
	const num = Number(trimmed);

	if (Number.isNaN(num)) {
		return null;
	}

	if (!Number.isInteger(num)) {
		return null;
	}

	return num;
};
