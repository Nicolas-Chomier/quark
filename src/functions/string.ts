//@ Rend le premier caractère d'un mot en majuscule
export const _capitalize = (word: string | undefined | null): string | null => {
	if (typeof word !== 'string' || word.length === 0) {
		return null;
	}
	return word[0].toUpperCase() + word.slice(1);
};
